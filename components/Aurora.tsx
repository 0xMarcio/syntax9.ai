export default function Aurora() {
  return (
    <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-70">
      {/* single, lighter beam for perf */}
      <div
        className="absolute -left-1/4 top-[-10%] w-[70vw] h-[60vh] blur-[48px]"
        style={{
          background: 'conic-gradient(from 200deg at 50% 50%, rgba(59,130,246,0.0), rgba(59,130,246,0.22), rgba(147,51,234,0.25), rgba(59,130,246,0.0))',
          animation: 'auroraShift 60s ease-in-out infinite',
        }}
      />
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes auroraShift {
            0%, 100% { transform: translate3d(0,0,0) rotate(0deg) scale(1); opacity: .6 }
            50% { transform: translate3d(1%, -1%, 0) rotate(6deg) scale(1.04); opacity: .9 }
          }
          @media (prefers-reduced-motion: reduce) {
            .blur\[48px\] { animation: none !important; }
          }
        `
      }} />
    </div>
  )
}
