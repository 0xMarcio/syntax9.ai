export default function About() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
            The Future of Digital Intelligence
          </h2>
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
        
        <div className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed">
          <p className="transform transition-all duration-1000 hover:text-white hover:scale-105">
            Syntax9 explores the frontier of <span className="text-blue-400 font-semibold">Generative AI</span> and <span className="text-purple-400 font-semibold">Cybersecurity</span>, 
            where innovation meets protection in the digital realm.
          </p>
          
          <p className="transform transition-all duration-1000 hover:text-white hover:scale-105" style={{ transitionDelay: '200ms' }}>
            We stand at the intersection of artificial intelligence and digital defense, 
            crafting solutions for tomorrow's challenges.
          </p>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-1/2 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  )
}
