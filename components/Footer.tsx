export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-gradient-to-b from-white/[0.06] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md ring-1 ring-white/10">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs tracking-[0.25em] text-gray-300 uppercase">Syntax9 Research Lab</span>
        </div>

        <h3 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
          Cybersecurity × GenAI
        </h3>

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <p className="mt-6 text-sm text-gray-500">© {new Date().getFullYear()} Syntax9</p>
      </div>
    </footer>
  )
}
