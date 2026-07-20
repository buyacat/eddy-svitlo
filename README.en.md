# Svitlo Landing

EDDY Group — Резервне живлення для закладів освіти. One-page landing built with **Astro**.

*[Українська версія / Ukrainian version above](README.md)*

## Project Structure

```
src/
  layouts/
    Layout.astro        # HTML shell, <head>, meta/OG tags, JSON-LD
  pages/
    index.astro          # The page (assembles all components)
  components/
    Nav.astro           # Top navigation + mobile drawer
    Hero.astro          # Hero section (title, product photo, stats)
    Kit.astro           # "01 — What's included" grid
    How.astro           # "02 — How it works" flow steps
    Plans.astro         # "03 — Choose a plan" cards
    Why.astro           # "04 — Full-cycle service" section
    Cta.astro           # Lead form (Web3Forms)
    Ticker.astro        # Scrolling marquee strip
    Footer.astro        # Footer
    Scripts.astro       # Inline JS: burger menu, nav scroll, lead form submit, hero wire animation
  data/
    site.ts              # ALL editable copy + SEO fields live here
public/
  img/                  # All images/logos (copied as-is)
  style.css             # Existing CSS (unchanged)
  robots.txt
  sitemap.xml
dist/                   # Build output (generated, git-ignored)
```

## Editing content

Everything a copywriter would need to touch — headings, card text, button
labels, form labels, meta description, `og:image`, JSON-LD — lives in
**[`src/data/site.ts`](src/data/site.ts)**. Edit values there; you don't
need to touch any `.astro` markup for a text change.

Exceptions that stay in markup:
- Layout/styling changes → the relevant component in `src/components/`
- Visual styling → `public/style.css`
- Images → drop a file in `public/img/` and reference it as `/img/filename.ext` from `site.ts`

## Build Commands

```bash
# Install dependencies
npm install

# Dev server with hot reload
npm run dev        # http://localhost:4321

# Production build → dist/
npm run build

# Preview the production build locally (serves dist/ as-is)
npm run preview    # http://localhost:4321
```

Node.js is only required for **development and building**. The output in
`dist/` is plain static HTML/CSS/JS with no server-side runtime dependency —
any static web host (PHP hosting, Apache/Nginx, Netlify, Cloudflare Pages,
cPanel, etc.) can serve it without Node installed.

## Local preview via Herd

Herd (Laravel Herd) expects a ready `index.html` at the site root or in
`public/`, which only exists after a build. Don't point a Herd `*.test`
domain at this project — use `npm run dev` or `npm run build && npm run
preview` instead; both serve on `http://localhost:4321`.

## SEO

- `meta description`, `theme-color`, canonical URL
- Open Graph tags (`og:title`, `og:description`, `og:image` + dimensions, `og:locale`)
- Twitter Card tags
- JSON-LD: `Organization` + `Service` schema

All of the above are generated from `seo`, `organization`, and `service` in
`src/data/site.ts` — edit there, not in `Layout.astro`.

> `og:image` currently reuses the hero product photo (1694×1694, not the
> ideal 1200×630 OG aspect ratio). Swap `seo.ogImage` in `site.ts` once a
> dedicated share image is designed.

## Lead form

The contact form posts to [Web3Forms](https://web3forms.com/). It currently
ships with a placeholder access key (`cta.form.accessKey` in `site.ts`) — the
form will show "не підключено" until a real key is set:

1. Get a free key at web3forms.com (enter `office@eddygroup.eu`, key arrives by email)
2. Replace the value of `cta.form.accessKey` in `src/data/site.ts`
3. Rebuild and redeploy

## Deployment

Pushing to a git host (Bitbucket, GitHub, etc.) does **not** by itself
publish the site — it's just source control. To actually deploy:

1. `npm run build` to produce `dist/`
2. Upload the contents of `dist/` to the web server that serves
   `svitlo.eddygroup.eu` (FTP/SSH/cPanel — whatever that host uses)

There is currently no CI/auto-deploy configured. If the git repo is hosted
on Bitbucket, a Pipeline can be added to run `npm ci && npm run build` and
push `dist/` to the server automatically on each merge to `main` — ask if
you want this set up.
