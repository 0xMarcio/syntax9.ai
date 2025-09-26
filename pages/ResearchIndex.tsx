import SectionHeader from '@/components/SectionHeader'
import { researchPosts } from '@/content/research'

export default function ResearchIndex() {
  return (
    <main className="relative pt-28 pb-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Research" subtitle="Deep dives from the lab." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchPosts.map((p) => (
            <a key={p.slug} href={`#/research/${p.slug}`} className="group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6 hover:bg-white/[0.03] transition">
              <div className="text-xs uppercase tracking-widest text-white/60 flex items-center gap-3">
                <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2">{p.tag}</span>
                <span className="h-px w-8 bg-white/20" />
                <span className="tabular-nums">{p.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold tracking-tight text-white/95">{p.title}</h3>
              <p className="mt-2 text-white/75">{p.summary}</p>
              <span className="mt-4 inline-block text-sm text-cyan-300 group-hover:text-white">Read more →</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

