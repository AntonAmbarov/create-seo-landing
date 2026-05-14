# SEO Landing Constructor

A free, open-source landing page builder focused on **SEO** and ease of use for marketers and SEO specialists.

Built with **Next.js**, **Payload CMS**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Philosophy

This project allows marketing and SEO teams to quickly create high-performing, SEO-optimized landing pages without deep developer involvement.

Marketers can build pages using ready-made blocks (Hero, Pricing, FAQ, Testimonials, etc.), while developers maintain full control through clean overrides and a well-structured codebase.

## Key Features

- **SEO-first architecture** — SSR, metadata, sitemap, schema.org, and optimized Core Web Vitals out of the box
- **Block-based page builder** powered by Payload CMS
- **Easy customization** via `overrides/blocks/` system
- **Global variables & shortcodes** — change price, phone, or company name in one place
- **Built-in blog** for content marketing
- **shadcn/ui** + Tailwind — clean, accessible, and fully customizable components
- **PostgreSQL** support (with Drizzle)
- **Live Preview** and Draft mode

## Quick Start

```bash
npx create-landing-seo@latest my-landing
```

Or clone manually:

```bash
git clone https://github.com/AntonAmbarov/create-seo-landing.git
cd seo-landing-constructor
cp .env.example .env
pnpm install
pnpm dev
```

Open http://localhost:3000/admin to access the admin panel.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Payload CMS 3.x
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS + shadcn/ui
- **Language:** TypeScript

## Project Structure Highlights

- payload/blocks/ — Block schemas for the admin panel
- components/blocks/ — React components for the frontend
- components/overrides/blocks/ — Safe customization layer
- payload/globals/ — Global settings and variables
- components/ui/ — Base UI components

## Roadmap

### Phase 1 — MVP (Current Focus)

- Core set of high-conversion SEO blocks (Hero, Pricing, FAQ, Testimonials, CTA, Features)
- Global variables & shortcodes system
- Safe customization via `overrides/blocks/`
- SEO foundations (metadata, schema.org, sitemap, Open Graph)
- Clean shadcn/ui + Tailwind styling
- PostgreSQL + Docker setup

### Phase 2 — Growth

- Advanced SEO blocks (Stats, Trust Bar, Comparison Table, Logos, Countdown, FAQ with schema)
- Built-in form handling with server actions and validation
- Page Templates with smart block inheritance — create reusable page structures where editing a template updates all derived pages, except manually overridden blocks.
- A/B testing support for individual blocks
- Enhanced Live Preview and on-demand revalidation
- Multi-language (i18n) support
- Bulk landing page creation and editing via JSON import/export
- Improved documentation + video guides

### Phase 3 — Maturity (Future)

- Reusable Widgets system
- AI-assisted content generation for blocks
- Analytics integration (GTM/GA4) through server components
- Plugin system for community-contributed blocks
- CLI improvements and template update mechanism
- Comprehensive SEO toolkit (auto schema.org, keyword suggestions, etc.)

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
