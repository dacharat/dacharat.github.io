# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio website (dacharat.github.io) built with **Next.js 15 (App Router)**, **React 18**, **TypeScript**, **styled-components**, and **framer-motion**. The site is exported as a static build and deployed to GitHub Pages: the `out/` directory is pushed to the `master` branch, source lives on `source`.

## Commands

```bash
npm run dev      # Dev server at http://localhost:3000
npm run build    # Next.js production build → out/ (static export)
npm run deploy   # Build + publish out/ to gh-pages master branch
```

## Architecture

### App Router

- `src/app/layout.tsx` — root layout. Loads `next/font` (Geist + Geist Mono), injects metadata (OpenGraph, Twitter card), wraps children in `StyledComponentsRegistry` and `ThemeProviderWrapper`.
- `src/app/page.tsx` — single-page landing. Renders `<NavBar />`, `<Cover />`, then `<About />`, `<Experience />`, `<Project />`, `<Contact />` in order.
- `src/app/globals.css` — reset-only. All visual styling lives in styled-components.
- `src/app/ThemeProviderWrapper.tsx` + `src/app/registry.tsx` — styled-components SSR plumbing.

### Sections (`src/segments/`)

One file per top-level section: `cover.tsx`, `nav.tsx`, `about.tsx`, `experiences.tsx`, `projects.tsx`, `contact.tsx`. Each section owns its own layout and motion — they are **not** thin wrappers anymore.

### Components (`src/components/`)

- **`primitives.tsx`** — shared design primitives: `Container`, `Section`, `SectionLabel`, `SectionHeading`, `Display`, `Lead`, `Mono`, and motion presets (`fadeUp`, `fadeUpStagger`). All sections compose these directly — there is no generic section wrapper.
- `experience/experience_list.tsx` — career data (single source of truth).
- `experience/experience_card.tsx` — timeline row component.
- `project/project_list.tsx` — project data.
- `project/project_card.tsx` — exports both `FeaturedProjectCard` (large) and `ProjectCard` (compact grid item).
- `nav/toggle.tsx` — mobile drawer menu.

### Styling system

- **Theme** lives in `src/styles/theme.ts` — `lightTheme` and `darkTheme` with tokens: `bg`, `surface`, `surfaceAlt`, `text`, `textMuted`, `textSubtle`, `border`, `borderStrong`, `accent` (LINE MAN green), `accentAlt` (Wongnai orange), `shadow`, `shadowHover`. `GlobalStyle` sets base body typography and CSS variables `--font-sans-stack` / `--font-mono-stack`.
- **Fonts** are loaded once via `next/font/google` in `layout.tsx` (Geist + Geist Mono) and exposed to styled-components through CSS variables.
- **Dark mode** is managed by `src/context/ThemeContext.tsx` — persists to localStorage, falls back to `prefers-color-scheme`.
- **Responsive**: uses `clamp()` for fluid type and spacing + `@media (min-width: …)` queries. No CSS framework.

### Animations

All scroll-triggered animations use `framer-motion` with `whileInView` and `viewport={{ once: true, margin: "-80px" }}`. The shared `fadeUp` / `fadeUpStagger(delay)` presets in `primitives.tsx` are the default — prefer them over one-off motion configs. The nav has a scroll-progress bar driven by `useScroll` + `useSpring`.

## Content

Content is **colocated with its section**, not in a CMS:

- Bio copy is inline in `src/segments/about.tsx`.
- Career data is in `src/components/experience/experience_list.tsx` (`experiences` + `earlierInternships`).
- Project data is in `src/components/project/project_list.tsx` (`projects[]` — first entry is featured).
- Contact links and email are inline in `src/segments/contact.tsx`.

## Deployment

`next.config.ts` sets `output: "export"` with `images: { unoptimized: true }` because GitHub Pages serves static files. The build output in `out/` is what gets published via `gh-pages` to the `master` branch. Never commit build artifacts to `source`.
