type Entry = { k: string; title: string; blurb: string; date: string }

const posts: Entry[] = [
  {
    k: 'rag-exfil',
    title: 'Abusing retrieval pipelines to exfiltrate secrets',
    blurb: 'Attack paths from prompt space to data space — and how to close them without killing recall.',
    date: '2025‑07‑14',
  },
  {
    k: 'signed-tools',
    title: 'Signed tool use for safer agents',
    blurb: 'Binding intent to execution with verifiable actions and minimal developer friction.',
    date: '2025‑06‑03',
  },
  {
    k: 'mfa-2025',
    title: 'MFA in 2025: fatigue and replay in the wild',
    blurb: 'Real intrusion notes and mitigations that actually move the needle.',
    date: '2025‑05‑22',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="relative py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-light tracking-wide">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">Latest Writing</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">Field notes, experiments, and hard‑earned fixes.</p>
          <div className="mx-auto mt-6 h-px w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>

        <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md">
          {posts.map((p) => (
            <a key={p.k} href="#" className="block px-6 py-6 hover:bg-white/[0.03] transition">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white/95">{p.title}</h3>
                  <p className="mt-1 text-white/70">{p.blurb}</p>
                </div>
                <div className="text-sm text-white/50 tabular-nums">{p.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

