const features = [
  {
    title: 'Adaptive Intelligence',
    desc: 'Real-time systems that learn, anticipate, and amplify human capability.',
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'Post-Quantum Security',
    desc: 'Cryptographic resilience engineered for the next horizon.',
    accent: 'from-fuchsia-500 to-purple-600',
  },
  {
    title: 'Cognitive Interfaces',
    desc: 'Interfaces that feel alive — fluid, intuitive, and responsive.',
    accent: 'from-violet-400 to-sky-500',
  },
]

export default function Features() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-12 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-light tracking-wide">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">Engineered for the Edge</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg md:text-xl">Precision, elegance, and speed — without compromise.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-2xl p-0.5 bg-gradient-to-b from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 transition-colors duration-500"
            >
              <div className="relative h-full rounded-2xl bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl p-8 overflow-hidden">
                {/* glow border */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${f.accent} opacity-0 group-hover:opacity-30 blur-2xl transition-opacity`} />
                <h3 className="relative z-10 text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">{f.title}</h3>
                <p className="relative z-10 text-gray-400 leading-relaxed">{f.desc}</p>
                {/* corner accent */}
                <div className={`absolute right-6 bottom-6 w-16 h-16 rounded-full bg-gradient-to-br ${f.accent} opacity-30 blur-xl group-hover:scale-110 transition-transform`} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

