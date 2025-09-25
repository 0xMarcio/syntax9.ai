import Hero from './components/Hero'
import Research from './components/Research'
import Principles from './components/Principles'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden relative">
      <Hero />
      <Research />
      <Principles />
      <Footer />
    </div>
  )
}
