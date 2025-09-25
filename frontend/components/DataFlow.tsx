export default function DataFlow() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Flowing data streams */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"
            style={{
              top: `${10 + i * 12}%`,
              left: '-100%',
              width: '200%',
              animation: `dataFlow ${3 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          ></div>
        ))}
        
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`purple-${i}`}
            className="absolute h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"
            style={{
              top: `${15 + i * 15}%`,
              right: '-100%',
              width: '200%',
              animation: `dataFlowReverse ${4 + i * 0.3}s linear infinite`,
              animationDelay: `${i * 0.7}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Neural network nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`node-${i}`}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 2}s`
            }}
          >
            <div className="absolute inset-0 w-4 h-4 border border-blue-400/20 rounded-full animate-ping" style={{ left: '-6px', top: '-6px' }}></div>
          </div>
        ))}
        
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`purple-node-${i}`}
            className="absolute w-1 h-1 bg-purple-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          >
            <div className="absolute inset-0 w-4 h-4 border border-purple-400/20 rounded-full animate-ping" style={{ left: '-6px', top: '-6px' }}></div>
          </div>
        ))}
      </div>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes dataFlow {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes dataFlowReverse {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `
      }} />
    </div>
  )
}
