export default function ScrollCue() {
  return (
    <div className="pointer-events-none absolute left-1/2 bottom-8 -translate-x-1/2 text-white/70">
      <div className="flex flex-col items-center gap-2">
        <div className="h-6 w-px bg-white/30" />
        <div className="w-2.5 h-2.5 border-b-2 border-r-2 border-white/60 animate-[cue_2s_ease-in-out_infinite]" />
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes cue { 0%,100% { transform: translateY(0) rotate(45deg) } 50% { transform: translateY(6px) rotate(45deg) }}
        @media (prefers-reduced-motion: reduce) { .animate-\[cue_2s_ease-in-out_infinite\] { animation: none !important; } }
      ` }} />
    </div>
  )
}

