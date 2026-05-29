# SEO Landing Constructor

A free, open-source landing page builder focused on **SEO** and ease of use for marketers and SEO specialists.

Built with **Next.js**, **Payload CMS**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Demo
https://create-seo-landing.vercel.app/

https://create-seo-landing.vercel.app/admin/

```
login: demo@demo.com
pass: Demopassword
```

## Philosophy

This project allows marketing and SEO teams to quickly create high-performing, SEO-optimized landing pages without deep developer involvement.

Marketers can build pages using ready-made blocks (Hero, Pricing, FAQ, Testimonials, etc.), while developers maintain full control through clean overrides and a well-structured codebase.

## Key Features

- **SEO-first architecture** - SSR, metadata, sitemap, schema.org, and optimized Core Web Vitals out of the box
- **Block-based page builder** powered by Payload CMS
- **Easy customization** via `overrides/blocks/` system
- **Global variables & shortcodes** - change price, phone, or company name in one place
- **Built-in blog** for content marketing
- **shadcn/ui** + Tailwind - clean, accessible, and fully customizable components
- **PostgreSQL** support (with Drizzle)
- **Live Preview** and Draft mode
- **Bulk Import via JSON** — full page structure migration including meta tags, blocks, layouts, and all nested fields. Perfect for content migration between environments or AI-powered page generation — import hundreds of properly structured pages in seconds.
- **Visual Block Customization** - administrators can customize every block directly from admin panel - padding, margins, background, theme (dark/light). Developers can easily extend with any additional settings (borders, shadows, animations, or any custom fields)


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

- [x] Core set of high-conversion SEO blocks (Hero, Pricing, FAQ, Testimonials, CTA, Features)
- [x] Global variables & shortcodes system
- [ ] Safe customization via `overrides/blocks/`
- [x] SEO foundations (metadata, schema.org, sitemap, Open Graph)
- [x] Clean shadcn/ui + Tailwind styling
- [x] PostgreSQL + Docker setup
- [ ] Blog
- [x] Block options

### Phase 2 — Growth

- [ ] Advanced SEO blocks (Stats, Trust Bar, Comparison Table, Logos, Countdown, FAQ with schema)
- [ ] Custom HTML Block
- [x] Built-in form handling with server actions and validation
- [ ] Simple page templates 
- [ ] A/B testing support for individual blocks
- [ ] Enhanced Live Preview and on-demand revalidation
- [ ] Multi-language (i18n) support
- [x] Bulk landing page creation via JSON import
- [ ] Improved documentation + video guides

### Phase 3 — Maturity (Future)

- [ ] Reusable Widgets system
- [ ] AI-assisted content generation for blocks
- [ ] Analytics integration (GTM/GA4) through server components
- [ ] CLI improvements and template update mechanism
- [ ] Comprehensive SEO toolkit (auto schema.org, keyword suggestions, etc.)
- [ ] Page Templates with smart block inheritance — create reusable page structures where editing a template updates all derived pages, except manually overridden blocks

## Contributing

Contributions, issues, and feature requests are welcome!
Feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
