import DataFlow from './DataFlow'

export default function VisualShowcase() {
  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <DataFlow />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent">
          The Digital Frontier
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Experience the convergence of intelligence and security in the digital age
        </p>
        
        {/* Interactive geometric shapes */}
        <div className="relative mt-20 h-64">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-32 border-2 border-blue-500 rotate-45 animate-spin opacity-50" style={{ animationDuration: '30s' }}></div>
              <div className="absolute inset-4 w-24 h-24 border-2 border-purple-500 rotate-45 animate-spin opacity-50" style={{ animationDirection: 'reverse', animationDuration: '25s' }}></div>
              <div className="absolute inset-8 w-16 h-16 border-2 border-blue-400 rotate-45 animate-spin opacity-50" style={{ animationDuration: '20s' }}></div>
            </div>
          </div>
          
          {/* Orbiting elements */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-500 rounded-full"></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
