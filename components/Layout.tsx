import Background from './Background'
import NavBar from './NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="dark min-h-screen bg-black text-white overflow-x-hidden relative">
      <Background />
      <NavBar />
      {children}
    </div>
  )
}

