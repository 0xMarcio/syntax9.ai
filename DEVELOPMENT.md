# Getting Started

This is a pure front-end landing page (no backend). Run it with npm.

## Prerequisites
- Node.js 18+ and npm 9+ (check with `node -v` and `npm -v`).

## Run Locally
```bash
npm install
npm run dev
```
Open http://localhost:5173.

## Build & Preview
```bash
npm run build   # outputs to dist/
npm run preview # serve built assets locally
```

## Environment Variables (optional)
- Create `.env.development` to set Vite vars like `VITE_CLIENT_TARGET` if you later wire APIs.

## Deploy
- Any static host works (e.g., Vercel, Netlify, GitHub Pages).
  - Build: `npm run build`
  - Publish the `dist/` directory.

## Troubleshooting
- Delete `node_modules` and `package-lock.json`, then reinstall: `rm -rf node_modules package-lock.json && npm install`.
- Ensure port 5173 is free or let Vite pick another.
