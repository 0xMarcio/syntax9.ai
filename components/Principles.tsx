const principles = [
  { name: 'Rigor', desc: 'Tested, reproducible, benchmarked.' },
  { name: 'Safety', desc: 'Defense-first, adversary-aware design.' },
  { name: 'Sovereignty', desc: 'Trust-minimized, privacy-preserving systems.' },
  { name: 'Curiosity', desc: 'Relentless exploration, honest results.' },
  { name: 'Performance', desc: 'Elegant, fast, and efficient.' },
]

import SectionHeader from './SectionHeader'

export default function Principles() {
  return (
    <section id="principles" className="relative py-28 bg-black overflow-hidden">
      {/* subtle backdrop grid */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" aria-hidden>
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pgrid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeOpacity="0.35" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pgrid)" />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Principles" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {principles.map((p) => (
            <div key={p.name} className="group relative rounded-2xl p-0.5 bg-gradient-to-b from-white/10 to-white/5">
              <div className="relative rounded-2xl h-full bg-gradient-to-b from-black/60 to-black/40 p-6 text-center">
                <div className="absolute inset-0 rounded-2xl [mask-image:radial-gradient(60%_40%_at_50%_0%,black,transparent)]">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400/20 to-fuchsia-400/20 blur-2xl group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-xl font-semibold text-white tracking-tight">{p.name}</h3>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
