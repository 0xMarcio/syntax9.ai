import { useEffect, useRef } from 'react'

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
      // ease towards target
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black/0 select-none">

      <div ref={wrapRef} className="relative z-10 text-center px-6 will-change-transform" style={{ transform: 'perspective(1200px) rotateX(var(--rx, 0)) rotateY(var(--ry, 0))' }}>
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md ring-1 ring-white/10 mb-6">
          <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_20px_2px_rgba(56,189,248,0.6)]" />
          <span className="text-xs tracking-[0.25em] text-gray-300 uppercase">Cybersecurity × GenAI Research</span>
        </div>

        <h1 className="mx-auto max-w-6xl text-6xl md:text-8xl font-black leading-[0.9] tracking-tight">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-sky-300 to-fuchsia-400 bg-clip-text text-transparent blur-md opacity-60" aria-hidden>Syntaxy9</span>
            <span className="relative bg-gradient-to-br from-white via-cyan-100 to-white bg-clip-text text-transparent [text-shadow:0_2px_40px_rgba(59,130,246,.25)]">Syntaxy9</span>
            {/* sheen */}
            <span className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(90deg,transparent,black,transparent)]" aria-hidden>
              <span className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white to-transparent opacity-60 skew-x-12 animate-[sheen_2.8s_ease-in-out_infinite]" />
            </span>
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-2xl text-gray-300/90 max-w-3xl mx-auto">
          We explore adversarial ML, autonomous defense, and cryptographic resilience.
        </p>

        <div className="mt-10 flex items-center justify-center">
          <a
            href="#research"
            className="relative rounded-xl px-6 py-3 font-medium text-black bg-white hover:brightness-110 transition shadow-[0_10px_40px_-10px_rgba(255,255,255,0.5)]"
          >
            Explore Focus Areas
            <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 blur-xl opacity-50" />
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
