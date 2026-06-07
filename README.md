# ClearOut Junk Removal — Premium Marketing Site

A production-ready, conversion-focused marketing website for a junk removal & hauling
business, built with **Astro**, **Tailwind CSS v4** and **Alpine.js**. Industrial
charcoal/slate palette with a tactical amber accent, custom inline-SVG iconography,
programmatic SEO (per-page meta + `LocalBusiness`/`Service`/`FAQPage`/`BlogPosting`
JSON-LD), and a fully interactive multi-step booking flow.

## 🧰 Stack

- **Astro** — file-based routing, static output, every page standalone.
- **Tailwind CSS v4** — via `@tailwindcss/vite`; design tokens live in `src/styles/global.css` (`@theme`).
- **Alpine.js** (+ `@alpinejs/collapse`) — lightweight DOM interactivity, started once in `Layout.astro`.
- **@astrojs/sitemap** — auto-generated `sitemap-index.xml`.

## 🗂 Structure

```text
src/
├── components/
│   ├── Icon.astro          # Inline-SVG icon set (forwards arbitrary attrs, incl. Alpine directives)
│   ├── Seo.astro           # <head> meta + JSON-LD (LocalBusiness / Service)
│   ├── Header.astro        # Sticky nav, services dropdown, mobile drawer
│   ├── Footer.astro        # CTA strip, link columns, service areas
│   ├── BookingModal.astro  # Global multi-step quote modal (open via `$dispatch('open-booking')`)
│   ├── PageHero.astro      # Reusable interior-page hero w/ breadcrumbs
│   ├── Faq.astro           # Alpine accordion + FAQPage schema
│   └── ServicePage.astro   # Shared template for all 6 service detail pages
├── data/
│   ├── site.ts             # NAP, nav, services, trust points — single source of truth
│   ├── serviceDetails.ts   # Long-form copy, pricing tiers, weight guides, FAQs per service
│   └── posts.ts            # Mock blog content
├── layouts/Layout.astro    # Base layout: SEO, header, footer, modal, Alpine + reveal-on-scroll
├── styles/global.css       # Tailwind import, theme tokens, component classes
└── pages/                  # index, about, services/* (hub + 6), blog (hub + [slug]), projects, gallery, contact
```

## 🧞 Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Install dependencies                         |
| `npm run dev`     | Dev server at `localhost:4321`               |
| `npm run build`   | Build static site to `./dist/`               |
| `npm run preview` | Preview the production build                 |
| `npx astro check` | Type-check `.astro` files                    |

## 🔧 Customizing

- **Business details (NAP, hours, rating, service areas):** edit `src/data/site.ts` — it
  feeds the header, footer, contact page and all JSON-LD schema.
- **Service content & pricing:** edit `src/data/serviceDetails.ts`.
- **Brand colors & fonts:** edit the `@theme` block in `src/styles/global.css`.
- **Booking flow:** `src/components/BookingModal.astro` — the `submit()` handler is where
  you'd POST to a CRM/dispatch endpoint (currently a confirmation alert).
