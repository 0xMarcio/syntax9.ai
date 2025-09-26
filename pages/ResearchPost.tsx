import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Mod = { meta?: { title: string; date: string; tag?: string }; default: React.ComponentType }
const modules = import.meta.glob('@/content/research/*.mdx') as Record<string, () => Promise<Mod>>

export default function ResearchPost() {
  const { slug } = useParams()
  const [mod, setMod] = useState<Mod | null>(null)

  useEffect(() => {
    if (!slug) return
    const key = Object.keys(modules).find((p) => p.endsWith(`${slug}.mdx`))
    if (!key) { setMod(null); return }
    modules[key]().then(setMod)
  }, [slug])

  if (!mod) {
    return (
      <main className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-semibold">Not found</h1>
          <p className="mt-4 text-white/70">The requested research article doesn’t exist.</p>
        </div>
      </main>
    )
  }
  return (
    <main className="relative pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-xs uppercase tracking-widest text-white/60 flex items-center gap-3">
          {mod.meta?.tag ? (
            <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2">{mod.meta.tag}</span>
          ) : null}
          <span className="h-px w-8 bg-white/20" />
          <span className="tabular-nums">{mod.meta?.date}</span>
        </div>
        <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight">{mod.meta?.title}</h1>
        <div className="mt-6 leading-relaxed text-white/90">
          {mod.default ? <mod.default /> : null}
        </div>
        <div className="mt-10 text-sm">
          <a href="#/research" className="text-cyan-300 hover:text-white">← Back to research</a>
        </div>
      </div>
    </main>
  )
}
