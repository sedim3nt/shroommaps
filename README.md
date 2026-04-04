# MycoMaps

Find functional mushroom retailers, explore species, and talk to an AI mycologist.

**Live:** [mycomaps.spirittree.dev](https://mycomaps.spirittree.dev)
**Stack:** Next.js, TailwindCSS, Supabase, Leaflet, Stripe, OpenRouter
**Status:** Active

## What This Is

MycoMaps is a directory and education platform for functional mushrooms — Lion's Mane, Reishi, Chaga, Turkey Tail, Cordyceps, and more. It helps users find retailers, learn about species and their benefits, and get personalized guidance from an AI mycologist.

The platform includes an interactive map powered by Leaflet, a retailer directory, species cards with detailed information, and a tiered subscription model via Stripe. It bridges the gap between mushroom enthusiasts and the growing functional mushroom industry.

## Features

- 🗺️ **Interactive Map** — Leaflet-powered map of functional mushroom retailers
- 🍄 **Species Directory** — detailed cards for each mushroom species
- 🏪 **Featured Retailers** — curated retailer listings
- 🌿 **Foraging Guide** — education on wild mushroom foraging
- 🤖 **AI Mycologist** — chat with an AI expert about identification, cultivation, and safety
- 💳 **Subscription Tiers** — Stripe-powered Basic/Plus/Pro plans
- 🔐 **Auth** — Supabase authentication

## AI Integration

**The Mycologist** — an AI chat assistant powered by OpenRouter that helps with mushroom identification, cultivation questions, and foraging safety. Includes critical safety rules: never confirms edibility from text alone, always leads with dangerous look-alikes, and never provides specific foraging coordinates.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** TailwindCSS
- **Database:** Supabase
- **Maps:** Leaflet
- **Payments:** Stripe
- **AI:** OpenRouter (via Vercel AI SDK)
- **Hosting:** Vercel

## Local Development

```bash
npm install
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous API key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server-side) |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |
| `STRIPE_PRICE_BASIC` | Stripe price ID for Basic tier |
| `STRIPE_PRICE_PLUS` | Stripe price ID for Plus tier |
| `STRIPE_PRICE_PRO` | Stripe price ID for Pro tier |
| `NEXT_PUBLIC_APP_URL` | Application base URL |
| `AI_API_KEY` / `OPENROUTER_API_KEY` | OpenRouter API key for AI features |
| `AI_BASE_URL` | AI provider base URL (defaults to OpenRouter) |

## Part of SpiritTree

This project is part of the [SpiritTree](https://spirittree.dev) ecosystem — an autonomous AI operation building tools for the agent economy and displaced workers.

## License

MIT
