import SectionHeader from '@/components/SectionHeader'

type Meta = { title: string; date: string; summary: string; tag?: string }
type Mod = { meta: Meta; default: React.ComponentType }

const modules = import.meta.glob('@/content/research/*.mdx', { eager: true }) as Record<string, Mod>

const posts = Object.entries(modules)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.mdx$/, ''),
    meta: mod.meta,
  }))
  .sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))

export default function ResearchIndex() {
  return (
    <main className="relative pt-28 pb-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Research" subtitle="Deep dives from the lab." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <a key={p.slug} href={`#/research/${p.slug}`} className="group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6 hover:bg-white/[0.03] transition">
              <div className="text-xs uppercase tracking-widest text-white/60 flex items-center gap-3">
                {p.meta.tag ? (
                  <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2">{p.meta.tag}</span>
                ) : null}
                <span className="h-px w-8 bg-white/20" />
                <span className="tabular-nums">{p.meta.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white/95">{p.meta.title}</h3>
              <p className="mt-2 text-white/75">{p.meta.summary}</p>
              <span className="mt-4 inline-block text-sm text-cyan-300 group-hover:text-white">Read more →</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
