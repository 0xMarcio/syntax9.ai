type Tile = {
  title: string
  caption: string
  kind: 'rings' | 'noise' | 'orbits' | 'wave'
}

const tiles: Tile[] = [
  { title: 'Adversarial Inputs', caption: 'Controlled perturbations & robustness curves', kind: 'noise' },
  { title: 'Autonomous Loops', caption: 'Self-repair & detection cycles', kind: 'orbits' },
  { title: 'Signal Topology', caption: 'Attention flows & causal traces', kind: 'rings' },
  { title: 'Cryptic Channels', caption: 'Post‑quantum handshake visual', kind: 'wave' }
]

function MicroViz({ kind }: { kind: Tile['kind'] }) {
  if (kind === 'rings') {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="absolute rounded-full border border-white/15" style={{
            width: `${80 + i * 40}px`, height: `${80 + i * 40}px`,
            animation: 'pulseRing 6s ease-in-out infinite', animationDelay: `${i * 0.4}s` }} />
        ))}
      </div>
    )
  }
  if (kind === 'orbits') {
    return (
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white" />
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 animate-spin" style={{
            width: `${120 + i * 40}px`, height: `${120 + i * 40}px`, animationDuration: `${16 - i * 2}s` }}>
            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
          </div>
        ))}
      </div>
    )
  }
  if (kind === 'noise') {
    return (
      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="distort">
            <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="2" seed="2" />
            <feDisplacementMap in="SourceGraphic" scale="8" />
          </filter>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, rgba(56,189,248,0.2), rgba(217,70,239,0.2))',
          mixBlendMode: 'screen', filter: 'url(#distort)'
        }} />
      </div>
    )
  }
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
      <div className="h-0.5 w-3/4 mx-auto bg-gradient-to-r from-transparent via-white/60 to-transparent relative">
        <div className="absolute -inset-x-10 -inset-y-3 bg-gradient-to-r from-cyan-400/10 via-white/5 to-fuchsia-400/10 blur-lg animate-[sweep_4s_ease-in-out_infinite]" />
      </div>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6">
          {tiles.map((t) => (
            <article key={t.title} className="group relative rounded-2xl p-0.5 bg-gradient-to-b from-white/10 to-white/5 overflow-hidden">
              {/* prism border */}
              <div className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
                background: 'conic-gradient(from 220deg at 50% 50%, rgba(34,211,238,.25), rgba(168,85,247,.25), rgba(59,130,246,.25), rgba(34,211,238,.25))',
                filter: 'blur(8px)'
              }} />
              <div className="relative rounded-2xl bg-gradient-to-b from-black/60 to-black/40 p-6 min-h-[220px]">
                <MicroViz kind={t.kind} />
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white tracking-tight">{t.title}</h3>
                  <p className="mt-2 text-gray-400 text-sm">{t.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes pulseRing { 0%,100% { opacity:.15; transform:scale(1) } 50% { opacity:.5; transform:scale(1.08) } }
        @keyframes sweep { 0%,100% { transform: translateX(-10%) } 50% { transform: translateX(10%) } }
      ` }} />
    </section>
  )
}

