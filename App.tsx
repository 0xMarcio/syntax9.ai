import Hero from './components/Hero'
import Research from './components/Research'
import Publications from './components/Publications'
import Features from './components/Features'
import Updates from './components/Updates'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden relative">
      <Hero />
      <Research />
      <Publications />
      <Features />
      <Updates />
      <Footer />
    </div>
  )
}
