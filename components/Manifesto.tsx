export default function Manifesto() {
  return (
    <section className="relative py-24 bg-black/0 overflow-hidden select-none">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[1100px] h-[1100px] rounded-full bg-gradient-to-b from-white/[0.05] to-transparent blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center">
          <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 text-xs tracking-[0.3em] uppercase text-gray-300">
            Syntaxy9 • Research
          </p>

          <h2 className="mt-6 text-[8vw] md:text-6xl font-black leading-[0.95] tracking-tight">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent blur-md opacity-60" aria-hidden>
                Cybersecurity × GenAI
              </span>
              <span className="relative bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Cybersecurity × GenAI
              </span>
            </span>
            <br />
            <span className="text-white/90 font-extralight">
              rigorous methods for emergent intelligence
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto">
            We study adversarial behavior, autonomous defense loops, and post‑quantum trust. Our work blends
            red‑teaming, verification, and cryptography to build resilient agentic systems.
          </p>
        </div>

        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>
    </section>
  )
}

