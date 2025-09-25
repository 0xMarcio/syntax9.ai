import SectionHeader from './SectionHeader'

type Project = {
  k: string
  title: string
  blurb: string
  tags: string[]
}

const projects: Project[] = [
  {
    k: 'rtllm',
    title: 'LLM Red‑Teaming at Scale',
    blurb: 'Systematized prompt attacks, jailbreak search, and defense evaluation pipelines across model families.',
    tags: ['adversarial', 'evals', 'automation']
  },
  {
    k: 'guard',
    title: 'Evaluator‑Guard Architectures',
    blurb: 'Layered watchdogs that critique, constrain, and repair agent behavior with self‑reflection loops.',
    tags: ['safety', 'agents', 'reflection']
  },
  {
    k: 'mmr',
    title: 'Robust Multimodal Perception',
    blurb: 'Defense against adversarial noise and spurious correlations in text‑vision pipelines.',
    tags: ['vision', 'robustness', 'distribution‑shift']
  },
  {
    k: 'heal',
    title: 'Self‑Healing Toolchains',
    blurb: 'Agentic repair of failing tools and workflows with confidence routing and fallback trees.',
    tags: ['autonomy', 'recovery', 'tooling']
  },
  {
    k: 'ragh',
    title: 'RAG Hardening & Poisoning',
    blurb: 'Detection and mitigation of retrieval poisoning, cross‑contamination, and supply‑chain tampering.',
    tags: ['RAG', 'data‑integrity', 'supply‑chain']
  },
  {
    k: 'pq',
    title: 'Post‑Quantum Trust Channels',
    blurb: 'PQ‑resilient key exchange and attestations for agent networks and tool plugins.',
    tags: ['crypto', 'PQ', 'attestation']
  },
  {
    k: 'pi',
    title: 'Prompt Injection Taxonomy',
    blurb: 'Unified taxonomy and detectors for injection families across modalities and tools.',
    tags: ['threat‑model', 'detection']
  },
  {
    k: 'exfil',
    title: 'Model IP Exfiltration Signals',
    blurb: 'Behavioral signatures for extraction attempts and watermark‑aware tracing.',
    tags: ['extraction', 'signals']
  }
]

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full px-2 py-0.5 text-xs text-gray-300 ring-1 ring-white/15 bg-white/5">
      {children}
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-30" aria-hidden>
        <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[1200px] h-[1200px] rounded-full bg-gradient-to-b from-white/[0.06] to-transparent blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Research Projects" subtitle="Active lines of inquiry across GenAI × Security." />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <article key={p.k} className="group relative rounded-2xl p-0.5 bg-gradient-to-b from-white/10 to-white/5 overflow-hidden">
              {/* prism border */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{
                background: 'conic-gradient(from 220deg at 50% 50%, rgba(34,211,238,.25), rgba(168,85,247,.25), rgba(59,130,246,.25), rgba(34,211,238,.25))',
                filter: 'blur(8px)'
              }} />

              <div className="relative rounded-2xl bg-gradient-to-b from-black/60 to-black/40 p-6 min-h-[200px]">
                {/* micro viz: rings & sweep */}
                <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(60%_40%_at_50%_0%,black,transparent)]">
                  <div className="absolute right-8 -top-8 w-36 h-36 rounded-full border border-white/10" />
                  <div className="absolute right-8 -top-8 w-36 h-36 rounded-full border border-white/10 animate-[ring_8s_linear_infinite]" />
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-gray-400 leading-relaxed">{p.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map(t => <Chip key={t}>{t}</Chip>)}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ring { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
      ` }} />
    </section>
  )
}

