import Layout from './components/Layout'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Projects from './components/Projects'
import Research from './components/Research'
import Blog from './components/Blog'
import Footer from './components/Footer'

export default function App() {
  return (
    <Layout>
      <Hero />
      <Ticker />
      <Projects />
      <Research />
      <Blog />
      <Footer />
    </Layout>
  )
}
