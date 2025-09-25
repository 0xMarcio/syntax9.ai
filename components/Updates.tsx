const notes = [
  { date: '2025‑09‑15', text: 'Released starfield + aurora design system prototype.' },
  { date: '2025‑08‑30', text: 'Benchmarked adversarial prompts across multi‑agent settings.' },
  { date: '2025‑08‑10', text: 'Drafted preprint on synthetic threat surfaces.' },
]

export default function Updates() {
  return (
    <section id="notes" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light tracking-wide text-white">Lab Notes</h2>
          <p className="mt-3 text-gray-400">Milestones and snapshots from the lab.</p>
        </div>

        <ol className="relative space-y-10">
          {notes.map((n, idx) => (
            <li key={idx} className="relative">
              <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-2 h-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.5)]" />
              <div className="grid md:grid-cols-[160px_1fr] gap-6 items-start">
                <time className="text-sm text-gray-400 text-center md:text-right md:pt-1">{n.date}</time>
                <div className="relative rounded-xl p-5 bg-white/5 ring-1 ring-white/10">
                  <div className="absolute -inset-px rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-700" style={{ background: 'radial-gradient(600px 200px at 80% -20%, rgba(255,255,255,.08), transparent 40%)' }} />
                  <p className="relative text-gray-200 leading-relaxed">{n.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

