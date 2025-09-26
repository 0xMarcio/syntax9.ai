import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
// @ts-ignore - types may not ship for these remark plugins
import remarkFrontmatter from 'remark-frontmatter'
// @ts-ignore
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
// @ts-ignore
import remarkGfm from 'remark-gfm'
// rehype plugins for better MDX rendering
// @ts-ignore
import rehypeSlug from 'rehype-slug'
// @ts-ignore
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiki from '@shikijs/rehype'

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
      remarkPlugins: [remarkFrontmatter, [remarkMdxFrontmatter, { name: 'meta' }], remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap', properties: { className: 'no-underline' } }],
        [rehypeShiki, { theme: 'github-dark' }],
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
