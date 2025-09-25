import CyberMesh from './CyberMesh'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <CyberMesh />
      
      {/* Advanced holographic overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)'
      }}></div>
      
      <div className="relative z-10 text-center px-6">
        {/* Main logo with advanced effects */}
        <div className="relative mb-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tight relative">
            <span className="relative inline-block">
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent blur-sm scale-110">SYNTAX9</span>
              <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">SYNTAX9</span>
            </span>
          </h1>
          
          {/* Scanning line effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute h-px w-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" 
                 style={{ 
                   top: '40%',
                   animation: 'scanLine 3s ease-in-out infinite'
                 }}></div>
          </div>
          
          {/* Glitch effect overlay */}
          <div className="absolute inset-0 opacity-30">
            <h1 className="text-7xl md:text-9xl font-black tracking-tight bg-gradient-to-r from-red-500 to-cyan-500 bg-clip-text text-transparent" 
                style={{
                  animation: 'glitch 4s ease-in-out infinite',
                  transform: 'translateX(2px)'
                }}>
              SYNTAX9
            </h1>
          </div>
        </div>
        
        {/* Premium tagline */}
        <div className="relative mb-12">
          <p className="text-2xl md:text-3xl font-extralight tracking-[0.3em] text-gray-300 uppercase">
            <span className="inline-block" style={{ animation: 'fadeInUp 1s ease-out 0.5s both' }}>Intelligence</span>
            <span className="mx-8 text-cyan-400">•</span>
            <span className="inline-block" style={{ animation: 'fadeInUp 1s ease-out 1s both' }}>Security</span>
            <span className="mx-8 text-purple-400">•</span>
            <span className="inline-block" style={{ animation: 'fadeInUp 1s ease-out 1.5s both' }}>Evolution</span>
          </p>
        </div>
        
        {/* Data visualization element */}
        <div className="relative mx-auto w-96 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" 
               style={{ animation: 'dataStream 2s ease-in-out infinite' }}></div>
        </div>
      </div>
      
      {/* Advanced ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl" 
           style={{ animation: 'float 6s ease-in-out infinite' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" 
           style={{ animation: 'float 8s ease-in-out infinite reverse' }}></div>
      
      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scanLine {
            0%, 100% { opacity: 0; transform: translateY(-10px); }
            50% { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes glitch {
            0%, 95%, 100% { opacity: 0; }
            96%, 97% { opacity: 0.1; transform: translateX(2px); }
            98%, 99% { opacity: 0.2; transform: translateX(-1px); }
          }
          
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          @keyframes dataStream {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
          }
          
          @keyframes float {
            0%, 100% { transform: translate(0, 0) scale(1); }
            50% { transform: translate(-20px, -20px) scale(1.1); }
          }
        `
      }} />
    </section>
  )
}