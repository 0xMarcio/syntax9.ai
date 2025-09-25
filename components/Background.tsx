import Starfield from './Starfield'
import Aurora from './Aurora'

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <Starfield />
      <Aurora />
      {/* global nebula orbs */}
      <div className="absolute -top-20 -left-10 w-[60vw] h-[60vw] rounded-full blur-[120px] bg-cyan-500/15" />
      <div className="absolute -bottom-32 -right-10 w-[50vw] h-[50vw] rounded-full blur-[120px] bg-fuchsia-500/12" />
      {/* subtle grain */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'160\' height=\'160\' viewBox=\'0 0 160 160\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.45\'/%3E%3C/svg%3E")' }} />
    </div>
  )
}

