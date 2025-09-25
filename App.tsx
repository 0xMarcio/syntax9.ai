import Background from './components/Background'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Projects from './components/Projects'
import Research from './components/Research'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden relative">
      <Background />
      <Hero />
      <Manifesto />
      <Projects />
      <Research />
      <Footer />
    </div>
  )
}
