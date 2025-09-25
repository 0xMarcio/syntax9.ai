export default function Aurora() {
  return (
    <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-80">
      {/* beam 1 */}
      <div
        className="absolute -left-1/3 top-[-10%] w-[80vw] h-[80vh] blur-3xl"
        style={{
          background: 'conic-gradient(from 200deg at 50% 50%, rgba(59,130,246,0.0), rgba(59,130,246,0.25), rgba(147,51,234,0.3), rgba(59,130,246,0.0))',
          animation: 'auroraShift 14s ease-in-out infinite',
        }}
      />
      {/* beam 2 */}
      <div
        className="absolute right-[-20%] bottom-[-10%] w-[70vw] h-[70vh] blur-3xl"
        style={{
          background: 'conic-gradient(from 20deg at 50% 50%, rgba(6,182,212,0.0), rgba(6,182,212,0.25), rgba(99,102,241,0.25), rgba(6,182,212,0.0))',
          animation: 'auroraShift 18s ease-in-out infinite reverse',
        }}
      />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes auroraShift {
            0%, 100% { transform: translate3d(0,0,0) rotate(0deg) scale(1); opacity: 0.7; }
            50% { transform: translate3d(2%, -2%, 0) rotate(8deg) scale(1.08); opacity: 1; }
          }
        `
      }} />
    </div>
  )
}

