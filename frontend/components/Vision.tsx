export default function Vision() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          <div className="group transform transition-all duration-500 hover:scale-105">
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500">
                <div className="w-8 h-8 border-2 border-white rounded-full animate-spin"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Intelligence</h3>
            <p className="text-gray-300 leading-relaxed">
              Harnessing the power of generative AI to unlock new possibilities 
              in digital creativity and automation.
            </p>
          </div>
          
          <div className="group transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '200ms' }}>
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500">
                <div className="w-8 h-8 border-2 border-white rounded-sm animate-pulse"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">Security</h3>
            <p className="text-gray-300 leading-relaxed">
              Building impenetrable digital fortresses that adapt and evolve 
              with emerging cyber threats.
            </p>
          </div>
          
          <div className="group transform transition-all duration-500 hover:scale-105" style={{ transitionDelay: '400ms' }}>
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-500 via-purple-500 to-blue-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-500">
                <div className="w-8 h-8 border-2 border-white rounded-full border-dashed animate-spin"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Evolution</h3>
            <p className="text-gray-300 leading-relaxed">
              Pioneering the next generation of digital systems that learn, 
              adapt, and transcend current limitations.
            </p>
          </div>
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block">
            <p className="text-2xl md:text-3xl font-light text-gray-200 leading-relaxed">
              "Where <span className="text-blue-400 font-semibold">artificial intelligence</span> meets 
              <span className="text-purple-400 font-semibold"> digital security</span>, 
              the future takes shape."
            </p>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
