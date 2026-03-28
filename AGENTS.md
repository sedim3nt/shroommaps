# MycoMaps — Agent Instructions

## Project
MycoMaps: A location-based marketplace connecting consumers with mushroom retailers (medicinal, therapeutic/psilocybin, gourmet).

## Stack
- Next.js 15 + React 19 + TypeScript
- TailwindCSS v4
- Supabase (auth, PostgreSQL with PostGIS, Storage, Edge Functions)
- Mapbox GL JS or Leaflet + OpenStreetMap
- Stripe (retailer subscriptions)
- Deployed to Vercel or GitHub Pages

## Design System
- See /Users/spirittree/.openclaw/workspace/projects/mycomaps/BRAND.md for colors, typography, design direction
- Earthy, warm, trustworthy — not clinical, not psychedelic
- Mobile-first responsive
- WCAG AA accessibility minimum

## Key Colors
- Primary: Forest Green #2D5016
- Secondary: Mushroom Brown #8B6F47
- Accent: Mycelium Gold #D4A843
- Background: Warm Cream #FAF7F0
- Text: Dark Soil #2C1810
- Therapeutic vertical: Soft Purple #7B68AE
- Medicinal vertical: Sage Green #87A878
- Gourmet vertical: Warm Orange #D4853A

## Architecture
See /Users/spirittree/.openclaw/workspace/projects/mycomaps/PRD.md for full PRD including database schema.

## Phase 1 Scope (Build This)
1. Homepage with hero, search bar, three vertical cards
2. Search results page with map + list view
3. Retailer profile pages
4. Legal status map page
5. Basic educational content pages
6. Responsive mobile-first design
7. Supabase integration (auth, DB)
8. Seed data for 20 Colorado retailers

## Quality
- TypeScript strict mode
- No `any` types
- ESLint + Prettier
- Semantic HTML
- Accessible forms with proper labels
- Performance: LCP < 2.5s, CLS < 0.1
