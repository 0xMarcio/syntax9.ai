import { useEffect, useRef } from 'react'
import BrandMark from './BrandMark'

function Radar() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-0 opacity-50 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[52vmin] rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[38vmin] rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24vmin] rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[10vmin] rounded-full border border-white/10" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[52vmin] rounded-full"
        style={{ background: 'conic-gradient(from 0deg, rgba(59,130,246,0.15), rgba(168,85,247,0.0) 30deg, transparent 60deg, transparent 360deg)', animation: 'sweep 7s linear infinite' }} />
      <style dangerouslySetInnerHTML={{ __html: `@keyframes sweep { to { transform: rotate(360deg) } }` }} />
    </div>
  )
}

function Grid() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]">
      <div className="absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.2)_1px,transparent_1px)]" />
      <div className="absolute inset-0 [background:radial-gradient(60%_40%_at_50%_40%,rgba(59,130,246,.25),transparent),radial-gradient(40%_60%_at_60%_60%,rgba(168,85,247,.18),transparent)]" />
    </div>
  )
}

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = wrapRef.current!
    let mx = 0, my = 0
    let tx = 0, ty = 0
    let raf: number | null = null

    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window
      mx = ((e.clientX / w) - 0.5) * 10
      my = ((e.clientY / h) - 0.5) * 10
    }
    const loop = () => {
      tx += (mx - tx) * 0.08
      ty += (my - ty) * 0.08
      el.style.setProperty('--rx', `${ty.toFixed(2)}deg`)
      el.style.setProperty('--ry', `${-tx.toFixed(2)}deg`)
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center overflow-hidden select-none">
      <Grid />
      <Radar />

      <div ref={wrapRef} className="relative z-10 text-center px-6 will-change-transform" style={{ transform: 'perspective(1200px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md mb-6 ring-1 ring-white/10">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_20px_2px_rgba(56,189,248,0.6)]" />
          <span className="text-xs tracking-[0.25em] text-gray-300 uppercase">Offense‑informed defense</span>
        </div>

        <h1 className="mx-auto max-w-6xl text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent blur-md opacity-70" aria-hidden>Syntax9</span>
            <span className="relative bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text text-transparent [text-shadow:0_2px_40px_rgba(59,130,246,.25)]">Syntax9</span>
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300/90 max-w-3xl mx-auto">
          We map exposed surface, enrich weak signals, and pressure‑test systems with the same mindset as real adversaries.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#/research" className="relative rounded-xl px-6 py-3 font-medium text-black bg-white hover:brightness-110 transition">
            Read the research
            <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 blur-xl opacity-50" />
          </a>
          <a href="#/" className="rounded-xl px-6 py-3 font-medium text-white/90 ring-1 ring-white/20 hover:bg-white/10 transition">
            Explore capabilities
          </a>
        </div>

        <div className="mt-10 flex justify-center opacity-80">
          <BrandMark />
        </div>
      </div>
    </section>
  )
}
