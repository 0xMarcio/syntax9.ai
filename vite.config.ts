import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
// @ts-ignore - types may not ship for these remark plugins
import remarkFrontmatter from 'remark-frontmatter'
// @ts-ignore
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

export default defineConfig({
  // GitHub Pages: output built site into `docs/`
  // so the branch's docs folder serves as the page root.
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname),
    },
  },
  plugins: [
    // MDX before React so .mdx compiles to JSX first
    mdx({
      remarkPlugins: [
        remarkFrontmatter,
        [remarkMdxFrontmatter, { name: 'meta' }], // exposes `export const meta = { ... }`
      ],
    }),
    tailwindcss(),
    react(),
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
})
