export default function NeonGrid() {
  return (
    <section className="relative bg-black py-40 overflow-hidden select-none">
      {/* 3D grid plane */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[160vmax] h-[120vmax] origin-bottom [transform:perspective(1200px)_rotateX(68deg)]" style={{
          backgroundImage: `
            linear-gradient(to_right, rgba(255,255,255,0.08) 1px, transparent 1px),
            linear-gradient(to_top, rgba(255,255,255,0.08) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'linear-gradient(to top, black, transparent 70%)'
        }} />
        {/* sweep */}
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black,transparent)]">
          <div className="absolute left-0 right-0 bottom-20 h-20 bg-gradient-to-b from-cyan-400/20 via-white/10 to-transparent blur-2xl animate-[sweep_6s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* floating markers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} className="absolute w-1 h-1 rounded-full bg-cyan-300/70" style={{
            left: `${10 + (i * 6)}%`,
            top: `${20 + (Math.sin(i) * 15)}%`,
            filter: 'drop-shadow(0 0 8px rgba(56,189,248,0.9))',
            animation: `${i % 2 ? 'floatA' : 'floatB'} ${4 + (i % 5)}s ease-in-out infinite` }} />
        ))}
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide">
          <span className="bg-gradient-to-r from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">Exploration Vectors</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
          Adversarial evaluation, autonomous defense loops, and post‑quantum trust for agentic systems.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes sweep { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
        @keyframes floatA { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(-6px) } }
        @keyframes floatB { 0%,100%{ transform:translateY(0) } 50%{ transform:translateY(8px) } }
      ` }} />
    </section>
  )
}

