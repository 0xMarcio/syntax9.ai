import { useEffect, useState } from 'react'

type Metric = { label: string; start: number; delta: number; suffix?: string }

const METRICS: Metric[] = [
  { label: 'Assets mapped', start: 1823, delta: 0.037 },
  { label: 'Signals/min', start: 426, delta: 0.091 },
  { label: 'Findings shipped', start: 97, delta: 0.007 },
  { label: 'Attacks auto‑blocked', start: 12038, delta: 0.41 },
]

function useTicker(value: number, delta: number) {
  const [v, set] = useState(value)
  useEffect(() => {
    const id = setInterval(() => set((x) => x + Math.max(1, Math.floor(delta * 10))), 1000)
    return () => clearInterval(id)
  }, [delta])
  return v
}

export default function Ticker() {
  return (
    <div className="relative z-10 mt-12">
      <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-3">
        {METRICS.map((m) => (
          <MetricCard key={m.label} {...m} />
        ))}
      </div>
    </div>
  )
}

function MetricCard({ label, start, delta, suffix }: Metric) {
  const v = useTicker(start, delta)
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4">
      <div className="absolute -inset-20 opacity-10 blur-2xl" style={{ background: 'radial-gradient(60%_60%_at_50%_40%, rgba(56,189,248,.5), transparent)' }} />
      <div className="relative text-2xl md:text-3xl font-semibold tracking-tight">
        {Intl.NumberFormat('en-US').format(v)}{suffix || ''}
      </div>
      <div className="relative mt-1 text-xs uppercase tracking-wider text-white/60">{label}</div>
    </div>
  )
}

