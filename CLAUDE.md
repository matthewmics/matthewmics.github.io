# CLAUDE.md

Personal portfolio site for Matthew Miclat, served by GitHub Pages at
`matthewmics.github.io`.

## Repository layout — read this first

This repo is **two things in one**:

| Path        | What it is                                                    |
| ----------- | ------------------------------------------------------------- |
| `site/`     | **The source.** A Vite + React 19 single-page app. Edit here.  |
| repo root   | **The build output.** The static files GitHub Pages serves.    |

```
/
├── site/                     ← source; all work happens here
│   ├── public/               ← copied verbatim into the build
│   │   ├── certs/            ← certificate images
│   │   ├── projects/         ← project screenshots
│   │   ├── myresume.pdf
│   │   └── vite.svg          ← favicon
│   ├── scripts/deploy.mjs    ← copies dist/ → repo root
│   ├── src/                  ← see "Source structure" below
│   ├── index.html            ← Vite entry template
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── .env.example
│   └── dist/                 ← build output (gitignored)
├── CLAUDE.md
├── .gitignore
├── .deploy-manifest.json     ← generated; tracks what the last deploy wrote
│
│   ── everything below is GENERATED — never hand-edit ──
├── index.html
├── assets/                   ← hashed JS/CSS bundles
├── certs/  projects/         ← copied from site/public/
├── myresume.pdf
└── vite.svg
```

**Do not hand-edit anything at the repo root except `CLAUDE.md` and
`.gitignore`** — the next deploy overwrites the rest.

## Tech stack

- Vite 7 + React 19, plain JavaScript with JSX (no TypeScript)
- Tailwind CSS v4 via `@tailwindcss/vite` — **no `tailwind.config.js`**; all
  theming lives in `src/index.css` under `@theme` / `@layer base` / `@utility`
- framer-motion for animation
- react-router-dom (two routes: `/` and a catch-all 404)
- lucide-react for icons
- @emailjs/browser + react-hot-toast for the contact form
- `@` path alias → `site/src`

## Commands

Run all of these from **`site/`**, not the repo root:

```bash
npm install
npm run dev       # local dev server on :5173
npm run lint      # eslint
npm run build     # vite build → site/dist/
npm run deploy    # build, then sync dist/ → repo root
```

## Deploying

GitHub Pages serves the `main` branch from `/` (root) and does **not** run a
build — it just serves whatever static files are committed at the root. So:

```bash
cd site && npm run deploy
cd .. && git add -A && git commit -m "Deploy" && git push
```

`site/scripts/deploy.mjs` does the copy. Because the root doubles as the deploy
target, the script records what it wrote in `.deploy-manifest.json` and deletes
those entries before copying — otherwise content-hashed bundles accumulate
forever. It only ever removes paths listed in that manifest; everything else at
the root is left alone. Don't change this script without being asked.

## Source structure (`site/src`)

```
main.jsx                 → App
App.jsx                  → Toaster + router
pages/Home.jsx           → composes every section in display order
pages/NotFound.jsx       → 404
components/
  StarBackground.jsx     → fixed decorative backdrop (aurora + grid + starfield)
  Navbar.jsx             → floating nav, scroll spy, mobile drawer, hosts ThemeToggle
  ThemeToggle.jsx        → dark/light switch
  HeroSection.jsx        → hero: role rotator, CTAs, code card, stats strip
  AboutMe.jsx            → bio + focus-area cards
  WorkExperience.jsx     → vertical timeline
  SkillsSection.jsx      → category filter + animated proficiency bars
  Projects.jsx           → project cards
  Certifications.jsx     → certificate cards + lightbox
  ContactSection.jsx     → contact details + EmailJS form
  Footer.jsx             → footer
  ui/Reveal.jsx          → scroll-reveal wrapper (respects reduced motion)
  ui/SectionHeading.jsx  → shared eyebrow + two-tone heading + lede
lib/utils.js             → cn() = twMerge(clsx(...))
```

**Content lives in the components.** Experience, skills, projects, and
certifications are plain arrays at the top of their respective files — there is
no CMS, JSON, or data layer.

## Conventions

- 4-space indent, single quotes, no semicolons (matches existing files)
- Tailwind utility classes only; use `cn()` when composing conditional classes
- Never hardcode colors. Use the semantic tokens defined in `src/index.css`:
  `background`, `foreground`, `card`, `muted-foreground`, `primary`, `accent`,
  `border`, `input`, `ring`. They flip automatically between light and dark.
- Custom utilities available: `surface`, `surface-hover`, `cosmic-button`,
  `ghost-button`, `chip`, `eyebrow`, `text-gradient`, `grid-lines`, `aurora-blob`
- Tailwind **v4** syntax — `bg-linear-to-r` (not `bg-gradient-to-r`),
  `size-*`, `shadow-xs`. Check `src/index.css` before inventing a utility.
- Dark mode is class-based (`.dark` on `<html>`). An inline script in
  `site/index.html` applies the stored theme before first paint — keep it in
  sync with `ThemeToggle.jsx` if you change the storage key.
- Every section needs an `id` matching its `navItems` entry in both
  `Navbar.jsx` and `Footer.jsx`, plus `scroll-mt-24` so the fixed header
  doesn't cover the heading.
- Wrap newly added content in `<Reveal>` so it matches the existing
  scroll-in behaviour.
- ESLint has no JSX-usage tracking for lowercase identifiers by default; the
  config enables `react/jsx-uses-vars` so `motion` isn't flagged as unused.

## Gotchas

- **Keep `site/dist/` gitignored.** Tailwind v4 auto-discovers source files and
  skips gitignored paths. When `dist/` was tracked, Tailwind scanned its own
  previous output and re-emitted dead classes — the CSS bundle was 20% larger.
- **Adding a file to `site/public/`** puts it at the repo root after deploy, so
  pick names that won't collide with `index.html` or `assets/`.
- Renaming or deleting something in `site/public/` is handled automatically —
  the deploy manifest removes the old copy from the root.

## Environment

The contact form reads `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`,
and `VITE_EMAILJS_PUBLIC_KEY` from `site/.env` (gitignored — see
`site/.env.example`). Without them the site still builds and runs; only form
submission fails.

## Verifying changes

`npm run build` must succeed and `npm run lint` must be clean. For visual
changes, run `npm run dev` and check both themes plus a mobile width — the
layout must not scroll horizontally at 320px.
