export default function Vision() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Neural network backdrop */}
      <div className="absolute inset-0">
        {/* Central neural hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full">
          <div className="absolute inset-0 w-96 h-96 border border-cyan-400/10 rounded-full" style={{ left: '-192px', top: '-192px', animation: 'neuralExpand 6s ease-in-out infinite' }}></div>
          <div className="absolute inset-0 w-64 h-64 border border-purple-400/15 rounded-full" style={{ left: '-128px', top: '-128px', animation: 'neuralExpand 4s ease-in-out infinite reverse' }}></div>
          <div className="absolute inset-0 w-32 h-32 border border-blue-400/20 rounded-full" style={{ left: '-64px', top: '-64px', animation: 'neuralExpand 3s ease-in-out infinite' }}></div>
        </div>
        
        {/* Connection lines */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`connection-${i}`}
            className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-cyan-400/30 to-transparent origin-left"
            style={{
              width: `${200 + i * 30}px`,
              transform: `rotate(${i * 30}deg)`,
              animation: `connectionPulse ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`rain-${i}`}
            className="absolute top-0 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent"
            style={{
              left: `${i * 3.33}%`,
              height: `${50 + Math.random() * 50}%`,
              animation: `matrixRain ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Main vision statement */}
        <div className="space-y-16">
          <div className="relative">
            <h2 className="text-6xl md:text-8xl font-thin tracking-[0.1em] leading-tight">
              <div className="relative inline-block mb-6">
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent blur-sm scale-110">THE</span>
                <span className="relative text-white">THE</span>
              </div>
              <br />
              <div className="relative inline-block">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-cyan-400 to-blue-500 bg-clip-text text-transparent blur-sm scale-110">FUTURE</span>
                <span className="relative bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">FUTURE</span>
              </div>
            </h2>
            
            {/* Quantum interference pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={`interference-${i}`}
                  className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
                  style={{
                    top: `${20 + i * 15}%`,
                    animation: `interference ${4 + i * 0.5}s ease-in-out infinite`,
                    animationDelay: `${i * 0.3}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Philosophy statements */}
          <div className="space-y-12 max-w-4xl mx-auto">
            <div className="relative group">
              <p className="text-2xl md:text-3xl font-light text-gray-300 leading-relaxed tracking-wide">
                <span className="text-cyan-400 font-medium">Intelligence</span> that adapts.
                <span className="text-purple-400 font-medium"> Security</span> that evolves.
                <span className="text-blue-400 font-medium"> Systems</span> that transcend.
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
            
            <div className="h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
            </div>
            
            <div className="relative group">
              <p className="text-xl md:text-2xl font-extralight text-gray-400 leading-loose">
                Where artificial consciousness meets digital sovereignty,
                <br />
                <span className="text-cyan-300">new paradigms emerge.</span>
              </p>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          </div>
          
          {/* Digital DNA helix */}
          <div className="relative h-32 mx-auto max-w-lg">
            <div className="absolute inset-0 flex items-center justify-center">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={`dna-${i}`}
                  className="absolute w-1 h-1 bg-cyan-400 rounded-full"
                  style={{
                    left: `${i * 5}%`,
                    top: `${50 + Math.sin(i * 0.5) * 30}%`,
                    animation: `dnaHelix ${6}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 w-3 h-3 border border-cyan-400/30 rounded-full animate-ping" style={{ left: '-4px', top: '-4px' }}></div>
                </div>
              ))}
              
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={`dna-purple-${i}`}
                  className="absolute w-1 h-1 bg-purple-400 rounded-full"
                  style={{
                    left: `${i * 5}%`,
                    top: `${50 - Math.sin(i * 0.5) * 30}%`,
                    animation: `dnaHelix ${6}s ease-in-out infinite`,
                    animationDelay: `${i * 0.1 + 3}s`
                  }}
                >
                  <div className="absolute inset-0 w-3 h-3 border border-purple-400/30 rounded-full animate-ping" style={{ left: '-4px', top: '-4px' }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes neuralExpand {
            0%, 100% { transform: scale(1); opacity: 0.1; }
            50% { transform: scale(1.1); opacity: 0.3; }
          }
          
          @keyframes connectionPulse {
            0%, 100% { opacity: 0.1; transform: scaleX(0.8); }
            50% { opacity: 0.6; transform: scaleX(1); }
          }
          
          @keyframes matrixRain {
            0% { transform: translateY(-100%); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          
          @keyframes interference {
            0%, 100% { transform: translateX(-100%); opacity: 0; }
            50% { transform: translateX(0); opacity: 1; }
          }
          
          @keyframes dnaHelix {
            0% { transform: rotateY(0deg); opacity: 0.4; }
            50% { opacity: 1; }
            100% { transform: rotateY(360deg); opacity: 0.4; }
          }
        `
      }} />
    </section>
  )
}

