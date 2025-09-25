export default function Divider() {
  return (
    <div className="relative h-16 select-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  )
}

