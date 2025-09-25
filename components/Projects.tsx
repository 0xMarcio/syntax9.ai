import SectionHeader from './SectionHeader'

type Capability = { k: string; title: string; blurb: string; accent: string }

const items: Capability[] = [
  {
    k: 'inventory',
    title: 'Attack Surface Inventory',
    blurb: 'Enumerate internet‑exposed assets, shadow infra, and weak links across cloud, SaaS, and code. Continuously.',
    accent: 'from-cyan-400 to-sky-500'
  },
  {
    k: 'signals',
    title: 'Signal Enrichment',
    blurb: 'Fuse logs, DNS, WHOIS, and model telemetry to lift weak signals into prioritized investigations.',
    accent: 'from-emerald-400 to-cyan-400'
  },
  {
    k: 'adversary',
    title: 'Adversarial Testing',
    blurb: 'Scenario‑driven red teaming for agents, LLMs, and APIs. Reproducible chains over novelty jailbreaks.',
    accent: 'from-fuchsia-400 to-purple-500'
  },
  {
    k: 'defense',
    title: 'Real‑time Defense',
    blurb: 'Automated mitigations with human‑in‑the‑loop: guardrails, containment playbooks, and proof of effect.',
    accent: 'from-violet-400 to-cyan-400'
  }
]

export default function Projects() {
  return (
    <section id="capabilities" className="relative py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Capabilities" subtitle="What we build, break, and ship." />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((s) => (
            <article key={s.k} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-white/[0.01]" />
              <div className={`absolute -inset-24 opacity-20 blur-2xl bg-gradient-to-br ${s.accent}`} />

              <div className="relative p-6 min-h-[220px]">
                <div className="text-xs uppercase tracking-[0.25em] text-white/60">{s.k}</div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  {s.title}
                </h3>
                <p className="mt-3 text-gray-300/90 leading-relaxed">
                  {s.blurb}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
