export default function Footer() {
  return (
    <footer className="relative bg-black py-16 overflow-hidden">
      {/* Quantum field backdrop */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-500/10 rounded-full" style={{ animation: 'rotate 30s linear infinite' }}></div>
      </div>
      
      {/* Horizontal scan lines */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`scan-${i}`}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
            style={{
              top: `${30 + i * 20}%`,
              animation: `scanPulse ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 1}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Signature mark */}
        <div className="mb-8">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="relative">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="absolute inset-0 w-4 h-4 border border-cyan-400/40 rounded-full animate-ping" style={{ left: '-4px', top: '-4px' }}></div>
            </div>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>
        
        {/* Copyright with holographic effect */}
        <div className="relative">
          <p className="text-lg font-light tracking-[0.2em] text-gray-400 uppercase">
            <span className="relative inline-block">
              <span className="absolute inset-0 text-cyan-400/50 blur-sm">© Syntax9. All Rights Reserved.</span>
              <span className="relative">© Syntax9. All Rights Reserved.</span>
            </span>
          </p>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent animate-pulse"></div>
        </div>
        
        {/* Data stream accent */}
        <div className="mt-8 mx-auto w-64 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" 
               style={{ animation: 'dataStream 3s ease-in-out infinite' }}></div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes rotate {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          
          @keyframes scanPulse {
            0%, 100% { opacity: 0.2; transform: scaleX(0.8); }
            50% { opacity: 0.6; transform: scaleX(1.2); }
          }
          
          @keyframes dataStream {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
        `
      }} />
    </footer>
  )
}