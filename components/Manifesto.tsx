export default function Manifesto() {
  return (
    <section className="relative py-28 bg-black/0 overflow-hidden select-none">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-xs tracking-[0.3em] uppercase text-gray-300">
            Syntaxy9 • Research
          </p>

          <h2 className="mt-6 text-[9vw] md:text-6xl font-black leading-[0.95] tracking-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent blur-md opacity-60" aria-hidden>
                Cybersecurity × GenAI
              </span>
              <span className="relative bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Cybersecurity × GenAI
              </span>
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto">
            We are a small research group probing failure modes in modern AI systems and the defenses that make them resilient. We focus on practical adversarial evaluation, autonomous defense loops, and post‑quantum trust for agentic toolchains.
          </p>
        </div>
      </div>
    </section>
  )
}
