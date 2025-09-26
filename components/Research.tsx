import SectionHeader from './SectionHeader'
import { researchPosts } from '@/content/research'

export default function Research() {
  return (
    <section id="research" className="relative py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Latest Research" subtitle="Notes from the lab and field." />

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {researchPosts.map((p) => (
            <article key={p.slug} className="group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
              <div className="absolute -inset-24 opacity-15 blur-2xl bg-gradient-to-br from-cyan-400/40 to-fuchsia-500/30" />
              <div className="relative flex items-center gap-3 text-xs uppercase tracking-widest text-white/60">
                <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2">{p.tag}</span>
                <span className="h-px w-8 bg-white/20" />
                <span>Research</span>
              </div>
              <h3 className="relative mt-3 text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {p.title}
              </h3>
              <p className="relative mt-3 text-gray-300/90 leading-relaxed">{p.summary}</p>
              <a href={`#/research/${p.slug}`} className="relative mt-6 inline-block text-sm text-cyan-300 hover:text-white transition">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
