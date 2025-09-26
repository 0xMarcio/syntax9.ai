import { MDXProvider, type Components } from '@mdx-js/react'

function cls(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base
}

const components: Components = {
  h1: (p) => <h1 {...p} className={cls('mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-white', p.className)} />,
  h2: (p) => <h2 {...p} className={cls('mt-8 text-2xl md:text-3xl font-semibold tracking-tight text-white', p.className)} />,
  h3: (p) => <h3 {...p} className={cls('mt-6 text-xl md:text-2xl font-semibold tracking-tight text-white', p.className)} />,
  p: (p) => <p {...p} className={cls('mt-4 leading-relaxed text-white/90', p.className)} />,
  ul: (p) => <ul {...p} className={cls('mt-4 list-disc pl-6 space-y-2 text-white/90', p.className)} />,
  ol: (p) => <ol {...p} className={cls('mt-4 list-decimal pl-6 space-y-2 text-white/90', p.className)} />,
  li: (p) => <li {...p} className={cls('marker:text-white/60', p.className)} />,
  a: (p) => <a {...p} className={cls('text-cyan-300 hover:text-white underline-offset-4 hover:underline', p.className)} />,
  blockquote: (p) => (
    <blockquote {...p} className={cls('mt-6 border-l-2 border-white/20 pl-4 text-white/80 italic', p.className)} />
  ),
  hr: (p) => <hr {...p} className={cls('my-10 border-white/10', p.className)} />,
  code: (p) => <code {...p} className={cls('rounded bg-white/10 px-1.5 py-0.5 text-[0.9em] text-white', p.className)} />,
  pre: (p) => (
    <pre
      {...p}
      className={cls('mt-5 overflow-x-auto rounded-xl border border-white/10 p-4 text-[0.95em] text-white/90', p.className)}
    />
  ),
  strong: (p) => <strong {...p} className={cls('font-semibold text-white', p.className)} />,
  em: (p) => <em {...p} className={cls('italic text-white/90', p.className)} />,
  kbd: (p) => (
    <kbd {...p} className={cls('rounded border border-white/20 bg-white/5 px-1.5 py-0.5 text-[0.85em] text-white/90', p.className)} />
  ),
  table: (p) => (
    <div className="mt-6 overflow-x-auto">
      <table {...p} className={cls('w-full text-left text-white/90', p.className)} />
    </div>
  ),
  th: (p) => <th {...p} className={cls('border-b border-white/10 px-3 py-2 font-semibold text-white', p.className)} />,
  td: (p) => <td {...p} className={cls('border-b border-white/5 px-3 py-2', p.className)} />,
  img: (p) => <img {...p} className={cls('mt-6 rounded-xl border border-white/10', p.className)} />,
}

export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <MDXProvider components={components}>
      <article className="mdx mx-auto mt-6 max-w-3xl" data-kind="mdx-prose">
        {children}
      </article>
    </MDXProvider>
  )
}
