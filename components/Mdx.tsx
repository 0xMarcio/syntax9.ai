import React, { useRef, useState } from 'react'
import { MDXProvider, type Components } from '@mdx-js/react'

function cls(base: string, extra?: string) {
  return extra ? `${base} ${extra}` : base
}

function PreBlock(p: React.HTMLAttributes<HTMLPreElement>) {
  const ref = useRef<HTMLPreElement | null>(null)
  const [copied, setCopied] = useState(false)
  const onCopy = async () => {
    try {
      const text = ref.current?.innerText ?? ''
      if (text) {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1200)
      }
    } catch (e) {
      // no-op
    }
  }
  return (
    <div className="group relative mt-5">
      <pre
        {...p}
        ref={ref}
        className={cls(
          'overflow-x-auto rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 text-[0.95em] text-white/90',
          p.className,
        )}
      />
      <button
        type="button"
        aria-label="Copy code"
        onClick={onCopy}
        className="absolute right-2 top-2 rounded-md border border-white/15 bg-white/10 px-2 py-1 text-[11px] text-white/90 opacity-0 shadow-sm transition group-hover:opacity-100 hover:bg-white/20"
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}

const components: Components = {
  h1: (p) => <h1 {...p} className={cls('mt-2 text-[28px] md:text-[34px] font-semibold tracking-tight text-white', p.className)} />,
  h2: (p) => <h2 {...p} className={cls('mt-8 text-[22px] md:text-[26px] font-semibold tracking-tight text-white', p.className)} />,
  h3: (p) => <h3 {...p} className={cls('mt-6 text-[19px] md:text-[22px] font-semibold tracking-tight text-white', p.className)} />,
  p: (p) => <p {...p} className={cls('mt-4 text-[17px] md:text-[18px] leading-relaxed text-white/90', p.className)} />,
  ul: (p) => <ul {...p} className={cls('mt-4 ml-6 list-disc list-outside space-y-2 text-white/90', p.className)} />,
  ol: (p) => <ol {...p} className={cls('mt-4 ml-6 list-decimal list-outside space-y-2 text-white/90', p.className)} />,
  li: (p) => <li {...p} className={cls('pl-1 marker:text-white/60', p.className)} />,
  a: (p) => <a {...p} className={cls('text-cyan-300 hover:text-white underline-offset-4 hover:underline', p.className)} />,
  blockquote: (p) => (
    <blockquote {...p} className={cls('mt-6 border-l-2 border-white/20 pl-4 text-white/80 italic', p.className)} />
  ),
  hr: (p) => <hr {...p} className={cls('my-10 border-white/10', p.className)} />,
  code: (p) => <code {...p} className={cls('rounded bg-white/10 px-1.5 py-0.5 text-[0.9em] text-white', p.className)} />,
  pre: (p) => <PreBlock {...p} />,
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
