# Persooa website project instructions

## Project

This repository contains planning, architecture and implementation documentation for the new Persooa website.

The website must preserve existing SEO value while introducing a new design system, Tailwind-based components and a scalable content architecture.

## Stack

Planned stack:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui as a component base
- MDX/structured content first
- optional CMS later

## Critical SEO rule

Do not change existing production URLs without updating the SEO migration map and redirects.

Every new page must have:

- title,
- meta description,
- canonical,
- correct H1,
- internal links,
- sitemap inclusion,
- hreflang when PL/EN variants exist.

## Design system rules

- Use documented tokens from `docs/03-tokenizacja-design-systemu.md`.
- Do not introduce random one-off colors.
- Use Tailwind utilities through the project design system.
- Keep UI consistent with the Persooa brandbook.
- Respect dark sections/dark mode tokens if implemented.

## Asset rules

- Source files go to `assets/source/`.
- Optimized exports go to `assets/exports/`.
- Production-ready assets go to `public/`.
- Do not publish client logos without confirmed usage rights.
- Do not add fonts without confirmed web license.
- Prefer SVG for logos and WebP/AVIF for images.

## AI illustration rules

Follow:

```txt
docs/brand/ai-illustration-style.md
```

Avoid generic AI stock visuals. Illustrations should support Persooa's positioning: AI-powered e-commerce growth, data integration, personalization and automation.

## Documentation rules

When making significant changes, update the relevant document in `docs/`.

Important docs:

- `docs/01-architektura-nowej-strony.md`
- `docs/02-komponenty-tailwind.md`
- `docs/03-tokenizacja-design-systemu.md`
- `docs/04-seo-obecna-vs-nowa.md`
- `docs/06-instrukcja-seo-krok-po-kroku.md`
- `docs/07-materialy-brandowe-i-assets.md`
- `docs/10-tailwind-design-system.md`
- `docs/11-struktura-podstron-serwisu.md`
- `docs/12-mapa-stron-i-tresci.md`
- `docs/13-prototyp-frontendu.md`
- `docs/brand/*`

## Current prototype

The first frontend prototype lives in:

```txt
prototype/
```

It is a framework-neutral static prototype using Tailwind CDN and hash routing. It is not the final SEO implementation. Port its design system, content data and component structure into Astro or Next.js after the technology decision is made.
