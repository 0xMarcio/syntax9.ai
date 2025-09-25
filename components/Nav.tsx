export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 px-5 py-2">
          <div className="flex items-center gap-3">
            <div className="relative w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(56,189,248,0.9)]" />
            <span className="text-sm tracking-[0.3em] uppercase text-gray-200">Syntaxy9</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#projects" className="hover:text-white transition">Streams</a>
            <a href="#research" className="hover:text-white transition">Research</a>
            <a href="#principles" className="hover:text-white transition">Principles</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

