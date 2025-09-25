# Repository Guidelines

## Project Structure & Module Organization
- Monorepo managed with Bun workspaces; primary package is `frontend/`.
- Frontend: React + Vite + Tailwind v4.
  - Entry: `frontend/index.html`, bootstrapped by `frontend/main.tsx` and `frontend/App.tsx`.
  - Components live in `frontend/components/` (e.g., `Hero.tsx`, `Footer.tsx`).
  - Styles in `frontend/index.css` (Tailwind directives + custom theme).
  - Config: `frontend/vite.config.ts`, `frontend/tsconfig.json`.
  - Env: `frontend/.env.development` (e.g., `VITE_CLIENT_TARGET=http://localhost:4000`).

## Build, Test, and Development Commands
- Install deps (preferred): `bun install` (from repo root) or `cd frontend && bun install`.
- Dev server: `bun x vite dev --cwd frontend` (or `cd frontend && npx vite dev`).
- Build: `bun x vite build --cwd frontend`.
- Preview build: `bun x vite preview --cwd frontend`.
- Note: This repo currently has no backend checked in; if you add an Encore backend, run it via `encore run` and point the frontend at it with `VITE_CLIENT_TARGET`.

## Coding Style & Naming Conventions
- Language: TypeScript with React function components.
- Indentation: 2 spaces; keep lines focused and readable.
- Components: PascalCase filenames (e.g., `VisualShowcase.tsx`); default exports for leaf components.
- Imports: Prefer alias `@/` mapped to `frontend/` (see `vite.config.ts`), e.g., `import '@/components/Hero'`.
- Styling: Tailwind utility classes first; inline styles acceptable for complex animations.
- Keep config minimal; avoid adding tooling unless required.

## Testing Guidelines
- No test framework configured yet. Recommended: Vitest + React Testing Library.
- Name tests `*.test.tsx` colocated with the component (e.g., `components/Hero.test.tsx`).
- Run (once configured): `bun x vitest`.

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject (≤72 chars). Example: `Add Hero animation sweep`.
- Reference issues with `#123` when applicable.
- PRs: include a clear description, linked issues, and screenshots/GIFs for UI changes. Confirm `vite build` succeeds and the dev server runs locally.

## Security & Configuration Tips
- Do not commit secrets. Use untracked `.env.local` for overrides; keep `.env.development` as safe defaults.
- If introducing a backend, document ports and update `VITE_CLIENT_TARGET` accordingly.

