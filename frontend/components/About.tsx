export default function About() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900/50 to-black overflow-hidden">
      {/* Geometric backdrop */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 border border-blue-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 border border-purple-500/20 rotate-12" style={{ animation: 'rotate 20s linear infinite' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/10 rounded-full" style={{ animation: 'pulse 8s ease-in-out infinite' }}></div>
      </div>
      
      {/* Holographic scanlines */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
            style={{
              top: `${i * 5}%`,
              animation: `scanlines ${3 + i * 0.1}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Section title with holographic effect */}
        <div className="relative mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-[0.2em] mb-8">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent blur-sm scale-105">IDENTITY</span>
              <span className="relative text-white">IDENTITY</span>
            </span>
          </h2>
          
          {/* Holographic underline */}
          <div className="mx-auto w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
          </div>
        </div>
        
        {/* Main content with advanced typography */}
        <div className="relative">
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl font-extralight text-gray-300 leading-relaxed tracking-wide">
              <span className="inline-block" style={{ animation: 'letterGlow 2s ease-in-out infinite 0.5s' }}>Syntax9</span>
              <span className="mx-4 text-cyan-400">—</span>
              <span className="inline-block" style={{ animation: 'letterGlow 2s ease-in-out infinite 1s' }}>where</span>
              <span className="mx-4">artificial intelligence</span>
              <span className="inline-block" style={{ animation: 'letterGlow 2s ease-in-out infinite 1.5s' }}>meets</span>
              <span className="mx-4">cybersecurity</span>
            </p>
            
            <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-12"></div>
            
            <p className="text-xl md:text-2xl font-light text-gray-400 leading-loose max-w-3xl mx-auto">
              We explore the convergence of <span className="text-cyan-400 font-medium">generative AI</span> and 
              <span className="text-purple-400 font-medium"> cybersecurity</span>, pushing the boundaries of what's possible 
              in digital defense and intelligence systems.
            </p>
          </div>
          
          {/* Floating data points */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`data-point-${i}`}
                className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + Math.sin(i) * 60}%`,
                  animation: `dataFloat ${4 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.8}s`
                }}
              >
                <div className="absolute inset-0 w-8 h-8 border border-blue-400/30 rounded-full animate-ping" style={{ left: '-12px', top: '-12px' }}></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quantum signature */}
        <div className="mt-20 relative">
          <div className="flex justify-center items-center space-x-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-400"></div>
            <div className="relative">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-6 h-6 border border-cyan-400/40 rounded-full animate-ping" style={{ left: '-6px', top: '-6px' }}></div>
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes rotate {
            from { transform: rotate(12deg); }
            to { transform: rotate(372deg); }
          }
          
          @keyframes scanlines {
            0%, 100% { opacity: 0.1; transform: translateX(-100%); }
            50% { opacity: 0.5; transform: translateX(0); }
          }
          
          @keyframes letterGlow {
            0%, 100% { text-shadow: 0 0 5px rgba(6, 182, 212, 0.5); }
            50% { text-shadow: 0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.6); }
          }
          
          @keyframes dataFloat {
            0%, 100% { transform: translate(0, 0); opacity: 0.4; }
            50% { transform: translate(10px, -20px); opacity: 1; }
          }
        `
      }} />
    </section>
  )
}