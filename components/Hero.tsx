import { useEffect, useRef } from 'react'
import Aurora from './Aurora'
import Starfield from './Starfield'

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = wrapRef.current!
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window
      const rx = ((e.clientY / h) - 0.5) * 8
      const ry = ((e.clientX / w) - 0.5) * -8
      el.style.setProperty('--rx', rx.toFixed(2) + 'deg')
      el.style.setProperty('--ry', ry.toFixed(2) + 'deg')
      el.style.setProperty('--tx', ((e.clientX / w) - 0.5) * 6 + 'px')
      el.style.setProperty('--ty', ((e.clientY / h) - 0.5) * 6 + 'px')
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black select-none">
      <Starfield />
      <Aurora />

      {/* Nebula orbs */}
      <div className="pointer-events-none absolute -top-20 -left-10 w-[60vw] h-[60vw] rounded-full blur-[120px] bg-cyan-500/20" />
      <div className="pointer-events-none absolute -bottom-32 -right-10 w-[50vw] h-[50vw] rounded-full blur-[120px] bg-fuchsia-500/15" />

      {/* Grain overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.45\'/%3E%3C/svg%3E")' }} />

      <div ref={wrapRef} className="relative z-10 text-center px-6 will-change-transform" style={{ transform: 'perspective(1200px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_20px_2px_rgba(16,185,129,0.6)]" />
          <span className="text-xs tracking-[0.25em] text-gray-300 uppercase">Now Generating Tomorrow</span>
        </div>

        <h1 className="mx-auto max-w-6xl text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent blur-md opacity-60" aria-hidden>SYNTAX9</span>
            <span className="relative bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text text-transparent [text-shadow:0_2px_40px_rgba(59,130,246,.25)]">SYNTAX9</span>
            {/* sheen */}
            <span className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black,transparent)]" aria-hidden>
              <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 skew-x-12 animate-[sheen_2.8s_ease-in-out_infinite]" />
            </span>
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300/90 max-w-3xl mx-auto">
          Futuristic intelligence. Sovereign security. Designed with cinematic precision.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#explore"
            className="relative rounded-xl px-6 py-3 font-medium text-black bg-white hover:brightness-110 transition shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]"
          >
            Explore
            <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 blur-xl opacity-50" />
          </a>
          <a
            href="#"
            className="group relative rounded-xl px-6 py-3 font-medium text-white/90 ring-1 ring-white/20 hover:ring-white/40 transition"
          >
            Watch Demo
            <span className="absolute -inset-px -z-10 rounded-xl bg-gradient-to-r from-cyan-400/0 via-white/10 to-fuchsia-400/0 opacity-0 group-hover:opacity-100 blur-lg" />
          </a>
        </div>
      </div>

      {/* accent rings */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-[60vmin] h-[60vmin] rounded-full border border-white/10" style={{ filter: 'drop-shadow(0 0 40px rgba(59,130,246,0.25))' }} />
        <div className="absolute left-[20%] top-[35%] w-[30vmin] h-[30vmin] rounded-full border border-white/10" />
        <div className="absolute right-[18%] top-[28%] w-[22vmin] h-[22vmin] rounded-full border border-white/10" />
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sheen {
            0% { transform: translateX(-10%); opacity: 0; }
            15% { opacity: 1; }
            50% { transform: translateX(130%); opacity: 1; }
            85% { opacity: 1; }
            100% { transform: translateX(180%); opacity: 0; }
          }
        `
      }} />
    </section>
  )
}
