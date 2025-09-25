import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import VisualShowcase from './components/VisualShowcase'
import Footer from './components/Footer'
import DataFlow from './components/DataFlow'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Global data flow overlay */}
      <DataFlow />
      
      <Hero />
      <About />
      <Vision />
      <VisualShowcase />
      <Footer />
      
      {/* Global ambient effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-400/20 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-purple-400/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  )
}

