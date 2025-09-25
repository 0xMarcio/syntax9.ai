import SectionHeader from './SectionHeader'

type Stream = {
  k: string
  title: string
  blurb: string
  accent: string
}

const streams: Stream[] = [
  {
    k: 'adv',
    title: 'Adversarial Intelligence',
    blurb: 'Systematic red‑teaming of LLMs and multimodal models. Robust training, jailbreak search, and defense evaluation — at scale.',
    accent: 'from-cyan-400 to-sky-500'
  },
  {
    k: 'auto',
    title: 'Autonomous Defense',
    blurb: 'Self‑healing agent loops that detect, critique, and repair behavior with verifiable guard rails and reflection.',
    accent: 'from-fuchsia-400 to-purple-500'
  },
  {
    k: 'pq',
    title: 'Post‑Quantum Trust',
    blurb: 'PQ‑resilient key exchange, attestations, and secure toolchains for agent networks and model supply chains.',
    accent: 'from-violet-400 to-cyan-400'
  }
]

function Viz({ accent }: { accent: string }) {
  return (
    <div className="absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
      <div className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${accent} blur-2xl`} />
      <div className="absolute inset-0 grid place-items-center">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="absolute rounded-full border border-white/10" style={{ width: `${140 + i * 60}px`, height: `${140 + i * 60}px`, animation: 'ring 12s linear infinite', animationDelay: `${i * 0.6}s` }} />
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-black/0 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Research Streams" subtitle="Core areas we explore at Syntaxy9." />

        <div className="grid md:grid-cols-3 gap-6">
          {streams.map((s) => (
            <article key={s.k} className="group relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.01]" />
              <div className="absolute -inset-20 opacity-20 blur-2xl" style={{ background: `radial-gradient(60%_60%_at_50%_40%, rgba(255,255,255,.12), transparent)` }} />

              <div className="relative p-8 min-h-[220px]">
                <h3 className="text-2xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray-300/90 leading-relaxed max-w-prose">
                  {s.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
