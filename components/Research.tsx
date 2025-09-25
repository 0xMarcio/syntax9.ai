const pillars = [
  { k: 'aml', title: 'Adversarial ML', desc: 'Robustness, jailbreaks, and evaluation protocols for LLMs and multimodal systems.' },
  { k: 'autodef', title: 'Autonomous Defense', desc: 'Self-assessing agents with critique/repair loops and verifiable constraints.' },
  { k: 'crypto', title: 'Post‑Quantum Crypto', desc: 'Trust channels, attestations, and supply‑chain integrity for agent toolchains.' }
]

import SectionHeader from './SectionHeader'

export default function Research() {
  return (
    <section id="research" className="relative py-28 bg-black overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Research Pillars" subtitle="Foundations for resilient, intelligent systems." />

        <div className="grid md:grid-cols-3 gap-10 mt-8">
          {pillars.map((p) => (
            <div key={p.k} className="relative">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-300/90 leading-relaxed max-w-prose">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
