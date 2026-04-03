'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { useState, useRef, useEffect, useMemo, type FormEvent } from 'react'

const SUGGESTED_QUESTIONS = [
  'How do I identify chanterelles vs. jack-o-lanterns?',
  'What are the best conditions for growing oyster mushrooms?',
  'What deadly mushrooms grow in Colorado?',
  'How do I safely forage for morels?',
]

export default function MycologistChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const transport = useMemo(
    () => new DefaultChatTransport({ api: '/api/mycologist' }),
    []
  )

  const { messages, sendMessage, status } = useChat({ transport })

  const isLoading = status === 'streaming' || status === 'submitted'

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return
    sendMessage({ text: input })
    setInput('')
  }

  const handleSuggestion = (q: string) => {
    if (isLoading) return
    sendMessage({ text: q })
    setInput('')
  }

  // Extract text content from message parts
  const getMessageText = (m: (typeof messages)[number]): string => {
    if (m.parts) {
      return m.parts
        .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
        .map((p) => p.text)
        .join('')
    }
    return ''
  }

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close The Mycologist' : 'Ask The Mycologist'}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#2D5A27',
          border: '2px solid rgba(123,201,80,0.3)',
          color: '#7BC950',
          fontSize: '1.6rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
          zIndex: 1000,
          transition: 'all 200ms ease',
        }}
      >
        {isOpen ? '✕' : '🍄'}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '96px',
            right: '24px',
            width: '400px',
            maxWidth: 'calc(100vw - 48px)',
            height: '560px',
            maxHeight: 'calc(100vh - 140px)',
            backgroundColor: '#0D1F0D',
            border: '1px solid rgba(123,201,80,0.2)',
            borderRadius: '16px',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 999,
            boxShadow: '0 8px 40px rgba(0,0,0,0.6)',
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(123,201,80,0.15)',
              backgroundColor: '#1E2E1E',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '1.3rem' }}>🍄</span>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-fraunces)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#E0E0E0',
                    margin: 0,
                  }}
                >
                  The Mycologist
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-literata)',
                    fontSize: '0.7rem',
                    color: '#8A9A8A',
                    margin: 0,
                  }}
                >
                  Foraging &amp; cultivation assistant
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            style={{
              padding: '8px 16px',
              backgroundColor: 'rgba(220,50,50,0.08)',
              borderBottom: '1px solid rgba(220,50,50,0.15)',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-literata)',
                fontSize: '0.65rem',
                color: '#E89A4A',
                margin: 0,
                lineHeight: 1.4,
                fontWeight: 600,
              }}
            >
              ⚠️ Never eat wild mushrooms based on AI identification. Always consult
              an expert mycologist.
            </p>
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {messages.length === 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-literata)',
                    fontSize: '0.85rem',
                    color: '#8A9A8A',
                    lineHeight: 1.6,
                  }}
                >
                  Ask me about mushroom identification, cultivation techniques, foraging
                  safety, or anything fungi-related.
                </p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    marginTop: '8px',
                  }}
                >
                  {SUGGESTED_QUESTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSuggestion(q)}
                      style={{
                        textAlign: 'left',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1px solid rgba(123,201,80,0.15)',
                        backgroundColor: '#162016',
                        color: '#8A9A8A',
                        fontSize: '0.78rem',
                        fontFamily: 'var(--font-literata)',
                        cursor: 'pointer',
                        lineHeight: 1.4,
                        transition: 'all 150ms ease',
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: m.role === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                <div
                  style={{
                    maxWidth: '85%',
                    padding: '10px 14px',
                    borderRadius:
                      m.role === 'user'
                        ? '14px 14px 4px 14px'
                        : '14px 14px 14px 4px',
                    backgroundColor:
                      m.role === 'user' ? 'rgba(123,201,80,0.15)' : '#1E2E1E',
                    border: `1px solid ${
                      m.role === 'user'
                        ? 'rgba(123,201,80,0.2)'
                        : 'rgba(255,255,255,0.05)'
                    }`,
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-literata)',
                      fontSize: '0.82rem',
                      color: m.role === 'user' ? '#7BC950' : '#E0E0E0',
                      lineHeight: 1.6,
                      margin: 0,
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {getMessageText(m)}
                  </p>
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.role === 'user' && (
              <div style={{ display: 'flex', gap: '4px', padding: '8px' }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#7BC950',
                      opacity: 0.4,
                      animation: `pulse 1.2s ease-in-out ${i * 0.2}s infinite`,
                    }}
                  />
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '12px 16px',
              borderTop: '1px solid rgba(123,201,80,0.15)',
              backgroundColor: '#1E2E1E',
              display: 'flex',
              gap: '8px',
            }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about mushrooms..."
              disabled={isLoading}
              style={{
                flex: 1,
                padding: '10px 14px',
                borderRadius: '10px',
                border: '1px solid rgba(123,201,80,0.15)',
                backgroundColor: '#0D1F0D',
                color: '#E0E0E0',
                fontFamily: 'var(--font-literata)',
                fontSize: '0.85rem',
                outline: 'none',
              }}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              style={{
                padding: '10px 16px',
                borderRadius: '10px',
                border: 'none',
                backgroundColor:
                  isLoading || !input.trim()
                    ? 'rgba(123,201,80,0.1)'
                    : 'rgba(123,201,80,0.2)',
                color:
                  isLoading || !input.trim()
                    ? 'rgba(123,201,80,0.3)'
                    : '#7BC950',
                fontFamily: 'var(--font-literata)',
                fontSize: '0.85rem',
                fontWeight: 600,
                cursor: isLoading || !input.trim() ? 'default' : 'pointer',
              }}
            >
              Send
            </button>
          </form>
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse {
          0%,
          80%,
          100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          40% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
      `}</style>
    </>
  )
}
