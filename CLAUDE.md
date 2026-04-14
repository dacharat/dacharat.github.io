# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a personal portfolio website (dacharat.github.io) built with React (Create React App). It is a single-page application deployed to GitHub Pages via the `master` branch, while source code lives on the `source` branch.

## Commands

```bash
npm start        # Dev server at http://localhost:3000
npm run build    # Production build to /build
npm test         # Run tests in watch mode
npm run deploy   # Build + deploy to GitHub Pages (gh-pages -b master -d build)
```

## Architecture

The app is structured in two layers:

- **`src/segments/`** — Page-level sections (`cover`, `nav`, `about`, `experiences`, `projects`, `contact`). These are thin wrappers that compose components into sections.
- **`src/components/`** — Reusable UI components, organized by section (e.g. `about/`, `project/`, `experience/`).

**`src/components/segment.js`** is the shared layout wrapper used by every section. It renders a Font Awesome icon, a section title, a horizontal rule, and the section's content via a `component` prop.

**Content data is colocated with components**, not in separate data files:
- Project list and data live in `src/components/project/project_list.js`
- Experience list and data live in `src/components/experience/experience_list.js`
- Personal info lives in `src/components/about/information.js`

Styling uses **styled-components** throughout, with Bootstrap 4 utility classes applied via `.attrs({ className: "..." })`.

Animations use **react-reveal** (Pulse, Flip, LightSpeed). Images are imported directly as JS modules.

## Deployment

The site deploys the built output to the `master` branch via `gh-pages`. The source code stays on `source`. Never commit build artifacts to `source`.
