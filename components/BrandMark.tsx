export default function BrandMark({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      width="220"
      height="80"
      viewBox="0 0 220 80"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="60%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path
        d="M10 60c15-28 45-42 76-42 24 0 40 8 40 20 0 11-11 17-27 17-14 0-26-5-36-14M210 20c-15 28-45 42-76 42-24 0-40-8-40-20 0-11 11-17 27-17 14 0 26 5 36 14"
        stroke="url(#g1)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.9}
      />
    </svg>
  )
}

