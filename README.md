# nawer-faria.github.io

The portfolio of **Faria Nawer**, Senior SQA Engineer. Built with [Astro](https://astro.build), styled with the *Release Ledger* design system, tested with Playwright on every push, and deployed to GitHub Pages.

## Before the first push

1. **Add your CV** as `public/faria-nawer-cv.pdf`. The tests fail until it exists, on purpose: the "Download CV" button must never be a broken link.
2. Create a public GitHub repository named exactly **`nawer-faria.github.io`**.
3. In that repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Run it on your computer

```bash
npm install                      # once
npx playwright install chromium  # once, for the tests
npm run dev                      # live preview at http://localhost:4321
npm test                         # build, then run every Playwright check
npm run build                    # production build into dist/
```

## Publish

```bash
git init
git add .
git commit -m "First version of the portfolio"
git branch -M main
git remote add origin https://github.com/nawer-faria/nawer-faria.github.io.git
git push -u origin main
```

Every push to `main` runs **Test and deploy** (`.github/workflows/deploy.yml`): it builds the site, runs the Playwright suite, and only publishes if every test passes. A failing run uploads the Playwright HTML report under the run's *Artifacts*.

## What the tests check

`tests/site.spec.ts`, on a desktop and a mobile browser:

- every page loads with one `h1`, a title, a description and no console errors
- no serious or critical accessibility problems (axe, WCAG 2.1 AA), in **both** light and dark theme
- nothing scrolls sideways on any screen size
- every internal link and in-page anchor resolves (including the CV)
- every image has alt text
- the theme toggle works, is remembered, and the first visit follows the system setting
- each case study's `N / N passed` count matches its result lines
- no draft placeholders like `[YOUR TEXT]` are ever published
- unknown pages return the 404 page

## Where to change things

| To change | Edit |
| --- | --- |
| Status line, contact links, results, work list, experience, toolkit | `src/data/site.ts` |
| A case study's text | `src/pages/work/*.astro` |
| Colours, fonts, spacing | `src/styles/tokens.css` (keep it in step with the design system) |
| Layout and component styles | `src/styles/global.css` |
| Your portrait | replace `src/assets/faria-portrait.jpg` (4:5) |

When the public repos are live, point their `href` in `src/data/site.ts` at the repo URLs and change their status.
# nawer-faria.github.io
# nawer-faria.github.io
