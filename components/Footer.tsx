export default function Footer() {
  return (
    <footer className="relative bg-black pt-24 pb-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] rounded-full bg-gradient-to-b from-white/[0.06] to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight bg-gradient-to-r from-cyan-300 via-white to-fuchsia-300 bg-clip-text text-transparent">
            Build fearlessly with Syntax9
          </h3>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Precision-crafted interfaces for an autonomous, intelligent future.
          </p>
          <div className="mt-6">
            <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 transition ring-1 ring-white/15 text-white">
              Get updates
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </a>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Syntax9</span>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
