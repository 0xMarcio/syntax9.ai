import SectionHeader from './SectionHeader'

type Post = { k: string; title: string; blurb: string; tag: string }

const latest: Post[] = [
  {
    k: 'shadow-assets',
    tag: 'Surface',
    title: 'Mapping shadow assets with model‑aided discovery',
    blurb: 'Combining passive DNS, cert transparency, and LLM‑powered heuristics to surface unknown internet exposure.',
  },
  {
    k: 'agent-chains',
    tag: 'Adversarial',
    title: 'Adaptive red teaming for agentic systems',
    blurb: 'From single prompts to evolving chains: a methodology for pressure‑testing agent loops and tool use.',
  },
  {
    k: 'serverless-move',
    tag: 'Detection',
    title: 'Detecting lateral movement in serverless estates',
    blurb: 'Signal fusion across IAM, runtime, and network to catch stealthy pivots without agents on the box.',
  },
]

export default function Research() {
  return (
    <section id="research" className="relative py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Latest Research" subtitle="Notes from the lab and field." />

        <div className="grid md:grid-cols-3 gap-6 mt-4">
          {latest.map((p) => (
            <article key={p.k} className="group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-6">
              <div className="absolute -inset-24 opacity-15 blur-2xl bg-gradient-to-br from-cyan-400/40 to-fuchsia-500/30" />
              <div className="relative flex items-center gap-3 text-xs uppercase tracking-widest text-white/60">
                <span className="inline-flex h-6 items-center rounded-full border border-white/10 bg-white/5 px-2">{p.tag}</span>
                <span className="h-px w-8 bg-white/20" />
                <span>Research</span>
              </div>
              <h3 className="relative mt-3 text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {p.title}
              </h3>
              <p className="relative mt-3 text-gray-300/90 leading-relaxed">{p.blurb}</p>
              <a href="#" className="relative mt-6 inline-block text-sm text-cyan-300 hover:text-white transition">Read more →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
