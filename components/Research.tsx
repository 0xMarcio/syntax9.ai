const pillars = [
  { k: 'aml', title: 'Adversarial ML', desc: 'Robustness, jailbreaks, and evaluation protocols for LLMs and multimodal systems.' },
  { k: 'autodef', title: 'Autonomous Defense', desc: 'Self-assessing agents with critique/repair loops and verifiable constraints.' },
  { k: 'crypto', title: 'Post‑Quantum Crypto', desc: 'Trust channels, attestations, and supply‑chain integrity for agent toolchains.' }
]

import SectionHeader from './SectionHeader'

export default function Research() {
  return (
    <section id="research" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden>
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1600px] h-[1600px] rounded-full bg-gradient-to-b from-cyan-500/10 via-fuchsia-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Research Pillars" subtitle="Foundations for resilient, intelligent, and sovereign systems." />

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <article key={p.k} className="group relative rounded-2xl p-0.5 bg-gradient-to-b from-white/10 to-white/5">
              {/* spectral border */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                background: 'conic-gradient(from 140deg at 50% 50%, rgba(34,211,238,.25), rgba(168,85,247,.25), rgba(59,130,246,.25), rgba(34,211,238,.25))',
                filter: 'blur(8px)'
              }} />
              <div className="relative h-full rounded-2xl bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl p-8 overflow-hidden">
                {/* corner glow */}
                <div className="absolute right-6 -bottom-6 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400/20 via-white/5 to-fuchsia-400/20 blur-2xl" />
                <h3 className="relative z-10 text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">{p.title}</h3>
                <p className="relative z-10 text-gray-400 leading-relaxed">{p.desc}</p>

                {/* micro grid */}
                <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(50%_50%_at_50%_50%,black,transparent)]">
                  <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id={`grid-${i}`} width="32" height="32" patternUnits="userSpaceOnUse">
                        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#grid-${i})`} />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* soft edges */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  )
}
