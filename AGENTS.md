# AGENTS.md

## Project overview

This repository contains Ben Murr's personal website. It is a content-led site used to:

- present Ben's profile and working style through the `About` section
- publish long-form writing and reflections through the `Blog`
- maintain a structured reference library of `AI Tools`
- support lightweight contact via email

The intended audience appears to be product leaders, peers, recruiters and people interested in AI-assisted workflows, digital craft and hands-on product thinking.

The site is not a portfolio in the traditional “project grid” sense. It is a living editorial site with structured CMS-managed content.

## Tech stack

- Framework: `Next.js 16` with the App Router
- UI runtime: `React 19`
- Package manager: `npm` (repo contains `package-lock.json`)
- Styling approach: centralised global CSS in [`/Users/benmurr/Documents/New project/app/globals.css`](/Users/benmurr/Documents/New%20project/app/globals.css)
- CMS / content source: `Sanity` via `next-sanity`
- Rich text renderer: `@portabletext/react`
- Sanity image URLs: `@sanity/image-url`
- Sanity Studio tooling: `sanity`, `@sanity/vision`
- Notable installed packages: `styled-components`, `styled-jsx`

Deployment assumptions:

- No `vercel.json`, Docker config or other deployment config is present in the repo.
- The codebase is deployment-ready as a standard Next.js application.
- Deployment workflow: Ben currently uses Vercel.
- There is no `vercel.json` or custom deployment configuration in the repo, so do not change deployment behaviour without confirming with Ben first.

## Common commands

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Run production server locally:

```bash
npm run start
```

Sanity Studio locally:

```bash
npx sanity@latest dev --port 3333
```

Linting:

- No dedicated lint command is defined in `package.json`

Formatting:

- No dedicated formatting command is defined in `package.json`

Type checking:

- No dedicated typecheck command is defined in `package.json`

Testing:

- No dedicated test command is defined in `package.json`

## Architecture notes

### App routes

Primary routes live in [`/Users/benmurr/Documents/New project/app`](/Users/benmurr/Documents/New%20project/app):

- [`app/page.jsx`](/Users/benmurr/Documents/New%20project/app/page.jsx): homepage
- [`app/blog/page.jsx`](/Users/benmurr/Documents/New%20project/app/blog/page.jsx): blog landing page
- [`app/blog/[slug]/page.jsx`](/Users/benmurr/Documents/New%20project/app/blog/%5Bslug%5D/page.jsx): blog article detail
- [`app/about/page.jsx`](/Users/benmurr/Documents/New%20project/app/about/page.jsx): About landing page
- [`app/about/[slug]/page.jsx`](/Users/benmurr/Documents/New%20project/app/about/%5Bslug%5D/page.jsx): About section detail
- [`app/tools/page.jsx`](/Users/benmurr/Documents/New%20project/app/tools/page.jsx): AI Tools landing page
- [`app/tools/[slug]/page.jsx`](/Users/benmurr/Documents/New%20project/app/tools/%5Bslug%5D/page.jsx): AI Tool detail

Secondary or legacy routes still present:

- [`app/cv/page.jsx`](/Users/benmurr/Documents/New%20project/app/cv/page.jsx)
- [`app/achievements/page.jsx`](/Users/benmurr/Documents/New%20project/app/achievements/page.jsx)
- [`app/ai-projects/page.jsx`](/Users/benmurr/Documents/New%20project/app/ai-projects/page.jsx)

Sanity-related route:

- [`app/studio/[[...tool]]/page.jsx`](/Users/benmurr/Documents/New%20project/app/studio/%5B%5B...tool%5D%5D/page.jsx)

Important note:

- The `app/studio/...` route is currently a placeholder informational page, not the full embedded Sanity Studio UI.
- Ben’s actual local Sanity editing workflow uses `npx sanity@latest dev --port 3333`.

### Layout and shell

- [`app/layout.jsx`](/Users/benmurr/Documents/New%20project/app/layout.jsx) wraps the site in [`components/site-shell.jsx`](/Users/benmurr/Documents/New%20project/components/site-shell.jsx)
- [`components/site-shell.jsx`](/Users/benmurr/Documents/New%20project/components/site-shell.jsx) composes:
  - [`components/site-header.jsx`](/Users/benmurr/Documents/New%20project/components/site-header.jsx)
  - [`components/site-nav.jsx`](/Users/benmurr/Documents/New%20project/components/site-nav.jsx)
  - [`components/site-footer.jsx`](/Users/benmurr/Documents/New%20project/components/site-footer.jsx)

### Components

Key reusable components:

- [`components/article-visual.jsx`](/Users/benmurr/Documents/New%20project/components/article-visual.jsx): framed visual / image treatment for cards and hero visuals
- [`components/portable-rich-text.jsx`](/Users/benmurr/Documents/New%20project/components/portable-rich-text.jsx): Sanity Portable Text renderer with inline image support
- [`components/about-section-nav.jsx`](/Users/benmurr/Documents/New%20project/components/about-section-nav.jsx): About section navigation on detail pages
- [`components/simple-page.jsx`](/Users/benmurr/Documents/New%20project/components/simple-page.jsx): used by simpler placeholder pages

### Data fetching

Data helpers live in [`/Users/benmurr/Documents/New project/lib`](/Users/benmurr/Documents/New%20project/lib):

- [`lib/blog.js`](/Users/benmurr/Documents/New%20project/lib/blog.js)
- [`lib/about.js`](/Users/benmurr/Documents/New%20project/lib/about.js)
- [`lib/tools.js`](/Users/benmurr/Documents/New%20project/lib/tools.js)
- [`lib/blog-page-settings.js`](/Users/benmurr/Documents/New%20project/lib/blog-page-settings.js)
- [`lib/about-page-settings.js`](/Users/benmurr/Documents/New%20project/lib/about-page-settings.js)
- [`lib/tools-page-settings.js`](/Users/benmurr/Documents/New%20project/lib/tools-page-settings.js)

Current fetching pattern:

- pages fetch from Sanity when valid Sanity environment variables are present
- helpers fall back to local placeholder content if Sanity is unavailable or empty
- several content pages use `export const revalidate = 60`

Fallback content lives in:

- [`lib/fallback-content.js`](/Users/benmurr/Documents/New%20project/lib/fallback-content.js)
- [`lib/fallback-about.js`](/Users/benmurr/Documents/New%20project/lib/fallback-about.js)
- [`lib/fallback-tools.js`](/Users/benmurr/Documents/New%20project/lib/fallback-tools.js)

### Styling conventions

- Global CSS is the main styling system
- Most layout and visual behaviour is driven by semantic class names in [`app/globals.css`](/Users/benmurr/Documents/New%20project/app/globals.css)
- Reusable panel patterns already exist, such as:
  - `panel`
  - `panel-raised`
  - `panel-hero`
  - `tag-row`
  - `text-link`

Future Codex sessions should inspect `app/globals.css` before introducing new layout patterns.

## Design system: Neo-Mythic Arcade

Preserve this visual direction:

- modern premium website, not a literal retro game UI
- inspired by The Bitmap Brothers era, especially Speedball 2, Gods and Magic Pockets
- dark obsidian backgrounds
- steel, chrome and gunmetal panels
- subtle bevels and inset highlights
- mythic gold as the primary brand accent
- restrained cyan for focus, interaction, signal and data details
- engineered, framed and segmented components
- strong hierarchy, editorial polish and controlled arcade cues
- avoid soft SaaS styling, glassmorphism, huge blur, excessive glow and over-rounded pills

Visual reference in the code:

- panel framing, borders, gradients, gold/cyan accents and typography hierarchy are already implemented in [`app/globals.css`](/Users/benmurr/Documents/New%20project/app/globals.css)

## Typography

Intended typography system:

- `Oxanium` for display / headlines
- `Inter` for body copy
- `IBM Plex Mono` for metadata, labels and technical details

What the repo currently confirms:

- CSS variables in [`app/globals.css`](/Users/benmurr/Documents/New%20project/app/globals.css) define:
  - `--font-display: "Oxanium", "Bebas Neue", sans-serif`
  - `--font-body: "Inter", "IBM Plex Sans", sans-serif`
  - `--font-mono: "IBM Plex Mono", monospace`

Implementation note:

- Fonts are currently referenced in CSS variables, but explicit loading has not been implemented.
- Future typography work should load `Oxanium`, `Inter` and `IBM Plex Mono` explicitly, preferably using Next font handling.

## Content tone

Preserve this writing style:

- British English
- professional, confident and approachable
- clear, direct and product-led
- no cheesy AI language
- no generic thought-leadership filler
- suitable for product leadership, AI-assisted workflows and digital craft

Project-specific tone conventions already agreed:

- avoid the comma before `and`
- keep copy practical rather than hype-driven
- prefer structured, human writing over templated marketing language

## Implementation rules

- Make targeted changes only
- Avoid broad refactors unless explicitly requested
- Preserve the existing design system
- Keep components reusable where sensible
- Avoid introducing new dependencies without asking
- Maintain responsive behaviour
- Keep accessibility in mind
- Prefer simple, readable implementation over clever abstractions
- Check existing patterns in `app/globals.css` and related page files before inventing new ones
- Prefer moving editable copy into Sanity where a page settings or content model already exists

## Sanity / CMS rules

Sanity is present and actively used.

### Where schemas live

Schemas live in:

- [`/Users/benmurr/Documents/New project/sanity/schemas`](/Users/benmurr/Documents/New%20project/sanity/schemas)

Schema index:

- [`sanity/schemas/index.js`](/Users/benmurr/Documents/New%20project/sanity/schemas/index.js)

### Where queries live

Sanity queries live in:

- [`/Users/benmurr/Documents/New project/sanity/lib/queries.js`](/Users/benmurr/Documents/New%20project/sanity/lib/queries.js)

Sanity client/env:

- [`sanity/lib/client.js`](/Users/benmurr/Documents/New%20project/sanity/lib/client.js)
- [`sanity/env.js`](/Users/benmurr/Documents/New%20project/sanity/env.js)

### Content types

Current main content models:

- `article`
- `aboutSection`
- `aiTool`
- `category`
- `tag`
- `homePageSettings`
- `aboutPageSettings`
- `blogPageSettings`
- `toolsPageSettings`

### Current structure

`article`:

- blog title, slug, publish date, summary, cover image, category, tags, featured flag, body, SEO fields

`aboutSection`:

- title, nav label, slug, order, summary, cover image, tags, body, SEO fields
- also includes `focusAreas`, `waysOfWorking`, `currentInterests` in the schema, although the current UI has intentionally been simplified and does not emphasise those metadata fields

`aiTool`:

- title, slug, order, summary, cover image, tags
- structured sections:
  - `whatItIs`
  - `whatIUseItFor`
  - `whereItWorksWell`
  - `drawbacksOrLimits`
  - `whoShouldUseIt`
  - `myVerdict`
- SEO fields

Page settings docs:

- `homePageSettings`: homepage hero eyebrow, headline and intro copy for `/`
- `aboutPageSettings`: landing-page hero and section heading copy for `/about`
- `blogPageSettings`: landing-page hero and section heading copy for `/blog`
- `toolsPageSettings`: landing-page hero and section heading copy for `/tools`

### What should not be hardcoded

Do not hardcode content that is already intended to come from Sanity, especially:

- homepage hero eyebrow, headline and intro
- blog landing-page hero and section headings
- about landing-page hero and section headings
- tools landing-page hero and section headings
- article content
- about section content
- AI tool content

Currently still hardcoded in code:

- some homepage supporting copy outside the hero in [`app/page.jsx`](/Users/benmurr/Documents/New%20project/app/page.jsx)
- some header/footer copy in [`components/site-header.jsx`](/Users/benmurr/Documents/New%20project/components/site-header.jsx) and [`components/site-footer.jsx`](/Users/benmurr/Documents/New%20project/components/site-footer.jsx)
- contact email link in [`components/site-nav.jsx`](/Users/benmurr/Documents/New%20project/components/site-nav.jsx)

Homepage hero eyebrow, headline and intro are Sanity-managed through `homePageSettings`. Header, footer and contact copy should remain hardcoded unless Ben explicitly asks to make them CMS-editable.

## Image and visual asset rules

Images should follow the Neo-Mythic Arcade style:

- obsidian base
- metallic/chrome framing
- mythic gold accents
- restrained cyan signals
- structured editorial compositions
- no generic AI brains, robots, glassmorphism or overdone cyberpunk neon

For AI Tools specifically:

- current direction has moved away from logos on landing cards
- tool subpages should prefer clean text-led headers unless Ben asks otherwise
- if logos are ever used again, keep them restrained and consistent rather than mixing clashing sizes, colours and shapes

## Validation checklist

Before finishing any task:

- run the appropriate available command if relevant:
  - `npm run build`
- verify affected pages/components locally
- check responsive behaviour where layout changed
- summarise files changed
- call out any risks or follow-up work

When Sanity-related content changes are involved:

- confirm whether the change is code-driven or CMS-driven
- avoid assuming content is live unless the relevant Sanity document has been published

## Known constraints and open questions

- There is no `README.md` in the repo
- There are no configured lint, format, typecheck or test commands
- Fonts are referenced in CSS variables, but explicit font loading has not been implemented. Future typography work should load them explicitly, preferably using Next font handling.
- Deployment workflow: Ben currently uses Vercel. There is no `vercel.json` or custom deployment configuration in the repo, so do not change deployment behaviour without confirming with Ben first.
- The `app/studio/[[...tool]]/page.jsx` route is a placeholder page, not the main editing workflow. Real Sanity editing runs via `npx sanity@latest dev --port 3333`.
- Legacy routes `/cv`, `/achievements` and `/ai-projects` should remain in place for now. Do not remove or redirect them unless Ben explicitly decides they are no longer needed.
- Homepage hero eyebrow, headline and intro are Sanity-managed through `homePageSettings`. Header, footer and contact copy should remain hardcoded unless Ben explicitly asks to make them CMS-editable.
