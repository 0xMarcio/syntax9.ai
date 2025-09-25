export default function NavBar() {
  return (
    <header className="pointer-events-auto fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md px-4 py-3">
          <a href="#" className="group inline-flex items-center gap-3">
            <span className="relative inline-flex h-6 w-6 items-center justify-center">
              <span className="absolute inset-0 rounded-md bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-60 blur-md" />
              <span className="relative h-6 w-6 rounded-md bg-black ring-1 ring-white/20 grid place-items-center text-xs font-bold">S9</span>
            </span>
            <span className="text-sm tracking-wider text-white/90 group-hover:text-white transition">Syntax9</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#capabilities" className="hover:text-white transition">Capabilities</a>
            <a href="#research" className="hover:text-white transition">Research</a>
            <a href="#blog" className="hover:text-white transition">Blog</a>
            <a href="#contact" className="rounded-md bg-white/90 text-black px-3 py-1.5 font-medium hover:brightness-105 transition">Get in touch</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
