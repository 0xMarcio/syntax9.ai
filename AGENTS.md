# Repository Guidelines

## Project Structure & Module Organization
- Single-package app at repo root (no backend).
- Stack: React + Vite + Tailwind v4.
  - Entry: `index.html` with `main.tsx` mounting `App.tsx`.
  - Components in `components/` (e.g., `Hero.tsx`, `Footer.tsx`).
  - Styles in `index.css` (Tailwind directives + theme tokens).
  - Config: `vite.config.ts`, `tsconfig.json`.
  - Env (optional): `.env.development` for Vite vars.

## Build, Test, and Development Commands
- Install deps: `npm install`.
- Dev server: `npm run dev` (opens at http://localhost:5173).
- Build: `npm run build` (outputs to `dist/`).
- Preview build: `npm run preview`.

## Coding Style & Naming Conventions
- TypeScript + React function components.
- Indentation: 2 spaces; concise, readable lines.
- Components: PascalCase filenames (e.g., `VisualShowcase.tsx`).
- Imports: Alias `@/` maps to project root; `import '@/components/Hero'`.
- Styling: Tailwind utilities first; inline styles allowed for complex animations.

## Testing Guidelines
- Not configured yet. Recommended: Vitest + React Testing Library.
- Name tests `*.test.tsx` colocated with component (e.g., `components/Hero.test.tsx`).
- Run (once configured): `npm run test`.

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject (≤72 chars). Example: `Add Hero animation sweep`.
- Reference issues with `#123` when applicable.
- PRs: clear description, linked issues, and UI screenshots/GIFs. Confirm `npm run build` passes and `npm run dev` works.

## Security & Configuration Tips
- Do not commit secrets. Use untracked `.env.local` for overrides.
- If you ever introduce APIs, document ports and update `VITE_CLIENT_TARGET`.
