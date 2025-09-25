const words = [
  'Adversarial ML', 'Robustness', 'Autonomy', 'Detection', 'Alignment', 'Privacy',
  'Red Teaming', 'Resilience', 'Toolchains', 'Agents', 'Verification', 'Cryptography'
]

export default function Marquee() {
  return (
    <section aria-hidden className="relative bg-black overflow-hidden py-6 select-none">
      <div className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black,black,transparent)]" />
      <div className="whitespace-nowrap will-change-transform animate-[marquee_26s_linear_infinite]">
        {Array.from({ length: 3 }).map((_, r) => (
          <span key={r} className="inline-flex items-center gap-8 mr-16">
            {words.map((w, i) => (
              <span key={w + i} className="inline-flex items-center gap-4 text-sm tracking-[0.3em] text-gray-300 uppercase">
                <span className="h-px w-10 bg-gradient-to-r from-transparent via-white/50 to-transparent" />
                {w}
              </span>
            ))}
          </span>
        ))}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      ` }} />
    </section>
  )
}

