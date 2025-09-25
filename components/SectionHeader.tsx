export default function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-14">
      <h2 className="text-4xl md:text-6xl font-light tracking-wide">
        <span className="bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">{title}</span>
      </h2>
      {subtitle ? (
        <p className="mt-4 text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">{subtitle}</p>
      ) : null}
      <div className="mx-auto mt-6 h-px w-48 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
    </div>
  )
}

