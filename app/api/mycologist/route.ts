import {
  convertToModelMessages,
  createUIMessageStream,
  createUIMessageStreamResponse,
  type UIMessage,
} from 'ai';

const SYSTEM_PROMPT = `You are The Mycologist for MycoMaps. You help with mushroom identification, cultivation, and foraging safety.

CRITICAL SAFETY RULES:
(1) NEVER confirm a mushroom is safe to eat based on text description alone — always say "visual identification from text alone is unreliable and potentially fatal. Consult an expert mycologist in person."
(2) When discussing look-alikes, always lead with the dangerous ones.
(3) For cultivation questions, be detailed and helpful.
(4) For foraging locations, give general ecosystem guidance but never specific GPS coordinates.

Be passionate about fungi, scientifically grounded, with an emphasis on safety. Keep responses concise but thorough.`;

const FALLBACK_REPLY =
  "I'm sorry — The Mycologist is temporarily unavailable. Please try again in a moment. Remember: never eat any wild mushroom based on AI identification; always consult an expert mycologist in person.";

// Convert the AI SDK UIMessages into a simple [{ role, content }] array for the gateway.
function toGatewayMessages(
  modelMessages: Awaited<ReturnType<typeof convertToModelMessages>>
): { role: string; content: string }[] {
  const out: { role: string; content: string }[] = [];
  for (const m of modelMessages) {
    if (m.role !== 'user' && m.role !== 'assistant') continue;
    let content = '';
    if (typeof m.content === 'string') {
      content = m.content;
    } else if (Array.isArray(m.content)) {
      content = m.content
        .map((part) =>
          part && typeof part === 'object' && 'text' in part
            ? (part as { text: string }).text
            : ''
        )
        .join('');
    }
    if (content.trim()) out.push({ role: m.role, content });
  }
  return out;
}

async function getReply(messages: UIMessage[]): Promise<string> {
  const rawUrl = process.env.CHAT_GATEWAY_URL;
  const secret = process.env.CHAT_GATEWAY_SECRET;

  if (!rawUrl || !secret) {
    console.error('[mycologist] missing CHAT_GATEWAY_URL or CHAT_GATEWAY_SECRET');
    return FALLBACK_REPLY;
  }

  const url = `${rawUrl.replace(/\/+$/, '')}/chat`;
  const gatewayMessages = toGatewayMessages(await convertToModelMessages(messages));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 90_000);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${secret}`,
      },
      body: JSON.stringify({
        system: SYSTEM_PROMPT,
        messages: gatewayMessages,
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      console.error(`[mycologist] gateway returned ${res.status}`);
      return FALLBACK_REPLY;
    }

    const data = (await res.json()) as { reply?: string; model?: string };
    const reply = data?.reply?.trim();
    return reply || FALLBACK_REPLY;
  } catch (err) {
    console.error('[mycologist] gateway request failed', err);
    return FALLBACK_REPLY;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  // The gateway returns the full reply (no streaming). We wrap it as a single
  // UI message stream chunk so the existing useChat client needs no changes.
  const stream = createUIMessageStream({
    execute: async ({ writer }) => {
      const reply = await getReply(messages);
      const id = 'msg-' + Date.now().toString(36);
      writer.write({ type: 'text-start', id });
      writer.write({ type: 'text-delta', id, delta: reply });
      writer.write({ type: 'text-end', id });
    },
  });

  return createUIMessageStreamResponse({ stream });
}
