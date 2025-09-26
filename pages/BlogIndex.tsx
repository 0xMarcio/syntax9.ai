import SectionHeader from '@/components/SectionHeader'
import { blogPosts } from '@/content/blog'

export default function BlogIndex() {
  return (
    <main className="relative pt-28 pb-20">
      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader title="Blog" subtitle="Field notes, fixes, and experiments." />
        <div className="divide-y divide-white/10 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md">
          {blogPosts.map((p) => (
            <a key={p.slug} href={`#/blog/${p.slug}`} className="block px-6 py-6 hover:bg-white/[0.03] transition">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight text-white/95">{p.title}</h3>
                  <p className="mt-1 text-white/70">{p.summary}</p>
                </div>
                <div className="text-sm text-white/50 tabular-nums">{p.date}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}

