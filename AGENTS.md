# Repository Guidelines

This is a single‑package React app (Vite + Tailwind v4) served via GitHub Pages. Use this guide to develop, test, and ship changes consistently.

## Project Structure & Module Organization
- Entry flow: `index.html` → `main.tsx` → `App.tsx`.
- Components in `components/` (PascalCase, one component per file).
- Styles in `index.css` (Tailwind directives + theme tokens). Public assets in `public/`.
- Build output is `docs/` (Pages publishes from this folder).
- Alias `@/` maps to project root. Example: `import '@/components/Hero'`.

## Build, Test, and Development Commands
- Install deps: `npm install`
- Run dev server: `npm run dev` (http://localhost:5173)
- Build production: `npm run build` → writes to `docs/`
- Preview built site: `npm run preview` (or `npm start`)

## Coding Style & Naming Conventions
- TypeScript + React function components. Indentation: 2 spaces.
- Components: PascalCase filenames; focused, composable units; colocate small helpers.
- Styling: Prefer Tailwind utilities; keep classlists readable. Use inline styles only for complex visuals/animation.
- Imports: Use the `@/` alias for absolute paths.

## Testing Guidelines
- Not configured yet. Recommended: Vitest + React Testing Library.
- Name tests `*.test.tsx` next to the component (e.g., `components/Hero.test.tsx`).
- Test behavior, not implementation; avoid network calls. Run (once added): `npm run test`.

## Commit & Pull Request Guidelines
- Commit messages: imperative, concise subject (≤72 chars). Example: `Add radar grid hero`.
- Keep diffs focused; include rationale in the body when non‑obvious; reference issues (e.g., `#123`).
- PRs: description, linked issues, screenshots/GIFs for UI; confirm `npm run dev` and `npm run build` succeed.

## Security & Configuration Tips
- Do not commit secrets. Use untracked `.env.local`; optional `.env.development` for local Vite vars.
- Pages deploy reads from `docs/`. If you change `outDir`, update `.github/workflows/pages.yml` and keep `public/CNAME` intact.
