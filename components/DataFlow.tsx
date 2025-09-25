export default function DataFlow() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Quantum data streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`quantum-stream-${i}`}
            className="absolute"
            style={{
              top: `${5 + i * 6}%`,
              left: '-200px',
              width: 'calc(100% + 400px)',
              height: '2px',
              background: `linear-gradient(90deg, transparent, rgba(${i % 3 === 0 ? '6, 182, 212' : i % 3 === 1 ? '59, 130, 246' : '147, 51, 234'}, 0.8), transparent)`,
              animation: `quantumFlow ${4 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
              transform: `rotate(${i % 2 ? 0.5 : -0.5}deg)`
            }}
          >
            {/* Data packets */}
            <div 
              className="absolute w-3 h-3 rounded-full"
              style={{
                background: `rgba(${i % 3 === 0 ? '6, 182, 212' : i % 3 === 1 ? '59, 130, 246' : '147, 51, 234'}, 1)`,
                boxShadow: `0 0 15px rgba(${i % 3 === 0 ? '6, 182, 212' : i % 3 === 1 ? '59, 130, 246' : '147, 51, 234'}, 0.6)`,
                left: '10%',
                top: '-3px',
                animation: `dataPacket ${4 + i * 0.3}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`
              }}
            ></div>
          </div>
        ))}
      </div>
      
      {/* Neural synapses */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={`synapse-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 4 === 0 ? 'rgba(6, 182, 212, 0.9)' : 
                         i % 4 === 1 ? 'rgba(59, 130, 246, 0.9)' : 
                         i % 4 === 2 ? 'rgba(147, 51, 234, 0.9)' : 'rgba(236, 72, 153, 0.9)',
              boxShadow: `0 0 20px ${i % 4 === 0 ? 'rgba(6, 182, 212, 0.7)' : 
                                    i % 4 === 1 ? 'rgba(59, 130, 246, 0.7)' : 
                                    i % 4 === 2 ? 'rgba(147, 51, 234, 0.7)' : 'rgba(236, 72, 153, 0.7)'}`,
              animation: `synapseFlicker ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {/* Neural connections */}
            <div 
              className="absolute w-px bg-gradient-to-r from-current to-transparent"
              style={{
                width: `${50 + Math.random() * 100}px`,
                height: '1px',
                left: '4px',
                top: '0px',
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: 0.4,
                animation: `connectionGlow ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            ></div>
          </div>
        ))}
      </div>
      
      {/* Digital rain effect */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`digital-rain-${i}`}
            className="absolute w-px"
            style={{
              left: `${i * 2.5}%`,
              top: '-100px',
              height: `${100 + Math.random() * 200}px`,
              background: `linear-gradient(to bottom, transparent, rgba(${i % 2 ? '6, 182, 212' : '147, 51, 234'}, 0.6), transparent)`,
              animation: `digitalRain ${3 + Math.random() * 4}s linear infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Electromagnetic field lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`field-line-${i}`}
            className="absolute top-1/2 left-1/2 origin-left"
            style={{
              width: `${300 + i * 50}px`,
              height: '1px',
              background: `linear-gradient(90deg, rgba(6, 182, 212, 0.4), transparent)`,
              transform: `rotate(${i * 45}deg)`,
              animation: `fieldRotation ${20 + i * 2}s linear infinite`,
            }}
          >
            <div 
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              style={{
                right: '0px',
                top: '-3px',
                boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
                animation: `fieldPulse ${2 + i * 0.3}s ease-in-out infinite`
              }}
            ></div>
          </div>
        ))}
      </div>
      
      {/* Holographic interference */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`interference-${i}`}
            className="absolute w-full h-px"
            style={{
              top: `${15 + i * 15}%`,
              background: `linear-gradient(90deg, transparent, rgba(${i % 2 ? '59, 130, 246' : '147, 51, 234'}, 0.3), transparent)`,
              animation: `holographicSweep ${6 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          ></div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes quantumFlow {
            0% { transform: translateX(-100%) rotate(0.5deg); opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { transform: translateX(100%) rotate(0.5deg); opacity: 0; }
          }
          
          @keyframes dataPacket {
            0% { transform: translateX(-50px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateX(calc(100vw + 50px)); opacity: 0; }
          }
          
          @keyframes synapseFlicker {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.5); }
          }
          
          @keyframes connectionGlow {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 0.8; }
          }
          
          @keyframes digitalRain {
            0% { transform: translateY(-100px); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(100vh); opacity: 0; }
          }
          
          @keyframes fieldRotation {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes fieldPulse {
            0%, 100% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.2); }
          }
          
          @keyframes holographicSweep {
            0%, 100% { transform: translateX(-100%); opacity: 0; }
            50% { transform: translateX(0); opacity: 1; }
          }
        `
      }} />
    </div>
  )
}

