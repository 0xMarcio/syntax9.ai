import { useEffect, useRef } from 'react'

type Star = {
  x: number
  y: number
  z: number
  r: number
  o: number
  v: number
}

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d', { alpha: true })!

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const DPR = Math.min(2, window.devicePixelRatio || 1)
    canvas.width = w * DPR
    canvas.height = h * DPR
    canvas.style.width = w + 'px'
    canvas.style.height = h + 'px'
    ctx.scale(DPR, DPR)

    const STAR_COUNT = Math.min(300, Math.floor((w * h) / 5000))
    const stars: Star[] = new Array(STAR_COUNT).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      z: Math.random() * 1 + 0.2,
      r: Math.random() * 1.5 + 0.2,
      o: Math.random() * 0.6 + 0.2,
      v: Math.random() * 0.2 + 0.02,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, w, h)

      // subtle vignette
      const grd = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.1, w / 2, h / 2, Math.max(w, h) * 0.8)
      grd.addColorStop(0, 'rgba(0,0,0,0)')
      grd.addColorStop(1, 'rgba(0,0,0,0.35)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, w, h)

      for (const s of stars) {
        s.x += (0.5 - Math.random()) * s.v
        s.y += (0.5 - Math.random()) * s.v
        s.o += (Math.random() - 0.5) * 0.02
        if (s.o < 0.1) s.o = 0.1
        if (s.o > 0.9) s.o = 0.9

        if (s.x < -10) s.x = w + 10
        if (s.x > w + 10) s.x = -10
        if (s.y < -10) s.y = h + 10
        if (s.y > h + 10) s.y = -10

        const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 8)
        glow.addColorStop(0, `rgba(147, 197, 253, ${0.45 * s.o})`) // tailwind sky-300
        glow.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r * 8, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(236, 254, 255, ${s.o})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }

      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)

    const onResize = () => {
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = w * DPR
      canvas.height = h * DPR
      canvas.style.width = w + 'px'
      canvas.style.height = h + 'px'
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0)
    }

    window.addEventListener('resize', onResize)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}

