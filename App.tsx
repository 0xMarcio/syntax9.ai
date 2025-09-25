import Background from './components/Background'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Projects from './components/Projects'
import Research from './components/Research'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden relative">
      <Background />
      <NavBar />
      <Hero />
      <Ticker />
      <Projects />
      <Research />
      <Blog />
      <Footer />
    </div>
  )
}
