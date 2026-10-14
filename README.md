# STOCK HOUSE — Landing Page

Arabic-first (RTL) landing page for STOCK HOUSE. Next.js 16 (App Router), TypeScript, Tailwind CSS 4.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build && npm start
```

## Where to edit

- `src/data/site.ts` — single source of truth: branches, phones, map and WhatsApp links, opening hours, nav, site URL, social URL.
- `src/components/` — one component per section.
- `public/assets/` — supplied SH shield logos (unmodified) and editorial photography.

## Placeholders to fill before launch

| Placeholder | Where | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `.env` (see `.env.example`) | Canonical, OG/Twitter URLs, JSON-LD `@id`/`url`. Until set, `https://replace-with-final-domain.example` is used. |
| `site.socialFollowUrl` | `src/data/site.ts` | "تابع أحدث الدروبات" CTA. While `null` it scrolls to the branches section (WhatsApp groups). |

## Notes

- Fonts: Neue Montreal / Neue Haas Grotesk / Helvetica Neue are referenced first in the Latin stack but not bundled (licensing). Manrope (Latin) and IBM Plex Sans Arabic load via `next/font`.
- Scroll reveals (`components/Reveal.tsx`) and the brand marquee are CSS-driven and respect `prefers-reduced-motion`.
- Brand names are text only — no third-party logos.
