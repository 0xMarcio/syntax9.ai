import Hero from './components/Hero'
import About from './components/About'
import Vision from './components/Vision'
import VisualShowcase from './components/VisualShowcase'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden">
      <Hero />
      <About />
      <Vision />
      <VisualShowcase />
      <Footer />
    </div>
  )
}
