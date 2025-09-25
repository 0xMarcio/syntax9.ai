const papers = [
  {
    title: 'Synthetic Threat Surfaces in Agentic Systems',
    venue: 'Preprint • 2025',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'Code', href: '#' },
    ],
  },
  {
    title: 'Neural Forge: Self‑Evolving Defensive Agents',
    venue: 'Workshop • 2024',
    links: [
      { label: 'PDF', href: '#' },
      { label: 'Demo', href: '#' },
    ],
  },
  {
    title: 'Quantum‑Resilient Key Exchange for LLM Toolchains',
    venue: 'Conference • 2024',
    links: [
      { label: 'PDF', href: '#' },
    ],
  },
]

export default function Publications() {
  return (
    <section id="publications" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[1100px] h-[1100px] rounded-full bg-gradient-to-b from-white/[0.06] to-transparent blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-light tracking-wide">
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-white bg-clip-text text-transparent">Latest Papers</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg md:text-xl">Selected work from our ongoing research streams.</p>
        </div>

        <div className="space-y-4">
          {papers.map((p, idx) => (
            <article key={p.title} className="relative group rounded-xl overflow-hidden">
              {/* accent stripe */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-white/70 to-fuchsia-400 opacity-60" />
              <div className="relative grid md:grid-cols-[1fr_auto] items-center gap-4 p-6 bg-white/5 hover:bg-white/[0.08] ring-1 ring-white/10 hover:ring-white/20 transition">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{p.venue}</p>
                </div>
                <div className="flex items-center gap-3 justify-start md:justify-end">
                  {p.links.map(l => (
                    <a key={l.label} href={l.href} className="relative inline-flex items-center px-3 py-1.5 rounded-md text-sm ring-1 ring-white/15 text-white/90 hover:ring-white/40">
                      {l.label}
                      <span className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-cyan-400/0 via-white/10 to-fuchsia-400/0 opacity-0 group-hover:opacity-100 blur-md" />
                    </a>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

