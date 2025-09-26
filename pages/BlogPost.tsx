import { useParams } from 'react-router-dom'
import { getBlog } from '@/content/blog'

export default function BlogPost() {
  const { slug } = useParams()
  const post = slug ? getBlog(slug) : undefined
  if (!post) {
    return (
      <main className="relative pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-semibold">Not found</h1>
          <p className="mt-4 text-white/70">The requested blog post doesn’t exist.</p>
        </div>
      </main>
    )
  }
  return (
    <main className="relative pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-sm text-white/60 tabular-nums">{post.date}</div>
        <h1 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{post.title}</h1>
        <div className="mt-6 leading-relaxed text-white/90">
          {post.body}
        </div>
        <div className="mt-10 text-sm">
          <a href="#/blog" className="text-cyan-300 hover:text-white">← Back to blog</a>
        </div>
      </div>
    </main>
  )
}

