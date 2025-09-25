import { useEffect, useRef } from 'react'

type Star = { x: number; y: number; o: number; vx: number; vy: number }

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)
  const runningRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!

    let w = window.innerWidth
    let h = window.innerHeight
    const DPR = Math.min(1.5, window.devicePixelRatio || 1) // clamp DPR for perf

    const applySize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * DPR)
      canvas.height = Math.floor(h * DPR)
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }
    applySize()

    // star sprite (pre-rendered glow)
    const sprite = document.createElement('canvas')
    const sr = 8
    sprite.width = sr * 2
    sprite.height = sr * 2
    const sctx = sprite.getContext('2d')!
    const g = sctx.createRadialGradient(sr, sr, 0, sr, sr, sr)
    g.addColorStop(0, 'rgba(236,254,255,0.9)')
    g.addColorStop(1, 'rgba(56,189,248,0)')
    sctx.fillStyle = g
    sctx.beginPath()
    sctx.arc(sr, sr, sr, 0, Math.PI * 2)
    sctx.fill()

    const targetCount = Math.max(60, Math.min(120, Math.floor((w * h) / 12000)))
    const stars: Star[] = new Array(targetCount).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      o: 0.3 + Math.random() * 0.6,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
    }))

    let last = performance.now()
    let acc = 0
    const frameInterval = 1000 / 45 // ~45fps target for stability

    const draw = (t: number) => {
      if (!runningRef.current) return
      const dt = t - last
      last = t
      acc += dt
      // throttle to target interval
      if (acc < frameInterval) {
        rafRef.current = requestAnimationFrame(draw)
        return
      }
      acc = 0

      ctx.clearRect(0, 0, w, h)

      // vignette (very light)
      const grd = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.2, w / 2, h / 2, Math.max(w, h) * 0.9)
      grd.addColorStop(0, 'rgba(0,0,0,0)')
      grd.addColorStop(1, 'rgba(0,0,0,0.25)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, w, h)

      for (const s of stars) {
        s.x += s.vx
        s.y += s.vy
        if (s.x < -10) s.x = w + 10
        if (s.x > w + 10) s.x = -10
        if (s.y < -10) s.y = h + 10
        if (s.y > h + 10) s.y = -10
        ctx.globalAlpha = s.o
        ctx.drawImage(sprite, s.x - sr, s.y - sr)
      }
      ctx.globalAlpha = 1

      rafRef.current = requestAnimationFrame(draw)
    }

    const onResize = () => {
      applySize()
    }
    const onVisibility = () => {
      runningRef.current = !document.hidden
      if (runningRef.current && !rafRef.current) {
        last = performance.now()
        acc = 0
        rafRef.current = requestAnimationFrame(draw)
      }
    }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('resize', onResize)
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      runningRef.current = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0" />
}
