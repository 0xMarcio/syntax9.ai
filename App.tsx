import Hero from './components/Hero'
import Research from './components/Research'
import Marquee from './components/Marquee'
import NeonGrid from './components/NeonGrid'
import Showcase from './components/Showcase'
import Principles from './components/Principles'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden relative">
      <Hero />
      <Research />
      <Marquee />
      <Showcase />
      <NeonGrid />
      <Principles />
      <Footer />
    </div>
  )
}
