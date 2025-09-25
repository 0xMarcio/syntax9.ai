export default function CyberMesh() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Advanced hexagonal matrix */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.4) 2px, transparent 2px),
              radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.4) 2px, transparent 2px)
            `,
            backgroundSize: '120px 120px',
            animation: 'matrixShift 20s linear infinite'
          }}
        ></div>
      </div>
      
      {/* Neural network connections */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`neural-${i}`}
            className="absolute"
            style={{
              left: `${10 + (i * 8)}%`,
              top: `${20 + Math.sin(i) * 30}%`,
              width: `${60 + Math.cos(i) * 20}%`,
              height: '1px',
              background: `linear-gradient(90deg, transparent, rgba(${i % 2 ? '59, 130, 246' : '147, 51, 234'}, 0.6), transparent)`,
              transform: `rotate(${i * 15}deg)`,
              animation: `neuralPulse ${3 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Quantum field particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={`quantum-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 3 === 0 ? 'rgba(59, 130, 246, 0.8)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.8)' : 'rgba(6, 182, 212, 0.8)',
              boxShadow: `0 0 10px ${i % 3 === 0 ? 'rgba(59, 130, 246, 0.8)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.8)' : 'rgba(6, 182, 212, 0.8)'}`,
              animation: `quantumFloat ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Data lattice overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(45deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px),
              linear-gradient(-45deg, rgba(147, 51, 234, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px, 80px 80px, 60px 60px, 60px 60px',
            animation: 'latticeFlow 25s linear infinite'
          }}
        ></div>
      </div>
      
      {/* Energy streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute h-px opacity-40"
            style={{
              top: `${15 + i * 15}%`,
              left: '-50%',
              width: '200%',
              background: `linear-gradient(90deg, transparent, rgba(${i % 2 ? '6, 182, 212' : '59, 130, 246'}, 0.8), transparent)`,
              animation: `energyStream ${6 + i * 0.8}s ease-in-out infinite`,
              animationDelay: `${i * 1.2}s`
            }}
          ></div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes matrixShift {
            0% { transform: translate(0, 0) rotate(0deg); }
            100% { transform: translate(60px, 60px) rotate(360deg); }
          }
          
          @keyframes neuralPulse {
            0%, 100% { opacity: 0.2; transform: scale(1); }
            50% { opacity: 0.8; transform: scale(1.05); }
          }
          
          @keyframes quantumFloat {
            0%, 100% { transform: translate(0, 0); opacity: 0.4; }
            25% { transform: translate(10px, -15px); opacity: 0.8; }
            50% { transform: translate(-5px, -25px); opacity: 1; }
            75% { transform: translate(-10px, -10px); opacity: 0.6; }
          }
          
          @keyframes latticeFlow {
            0% { transform: translate(0, 0); }
            100% { transform: translate(80px, 80px); }
          }
          
          @keyframes energyStream {
            0% { transform: translateX(-100%); opacity: 0; }
            30% { opacity: 1; }
            70% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
        `
      }} />
    </div>
  )
}