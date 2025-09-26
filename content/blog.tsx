import type { ReactNode } from 'react'

export type Blog = {
  slug: string
  title: string
  date: string
  summary: string
  body: ReactNode
}

export const blogPosts: Blog[] = [
  {
    slug: 'rag-exfil',
    title: 'Abusing retrieval pipelines to exfiltrate secrets',
    date: '2025‑07‑14',
    summary: 'Attack paths from prompt space to data space — and how to close them without killing recall.',
    body: (
      <article className="prose prose-invert max-w-3xl">
        <h2>The problem</h2>
        <p>
          RAG systems often trust retrieved chunks implicitly. Attackers coerce retrieval with crafted queries
          then steer summarization to leak sensitive spans.
        </p>
        <h3>Hardening steps</h3>
        <ol>
          <li>Classification gate on query intent and chunk sensitivity (cheap model).</li>
          <li>Redact at chunk load with deterministic policies (regex + DLP), not at response time.</li>
          <li>Signed tool calls; trace verdicts alongside answers for audit.</li>
        </ol>
      </article>
    ),
  },
  {
    slug: 'signed-tools',
    title: 'Signed tool use for safer agents',
    date: '2025‑06‑03',
    summary: 'Binding intent to execution with verifiable actions and minimal developer friction.',
    body: (
      <article className="prose prose-invert max-w-3xl">
        <h2>Why sign?</h2>
        <p>
          Tool calls are the blast radius. We sign the schema + arguments and verify in the runtime boundary,
          rejecting drifted or unapproved invocations.
        </p>
        <h3>Pattern</h3>
        <pre><code>{`signature = sign(tool_id || args || nonce, key)
assert verify(signature)
execute(tool_id, allowlist(args))`}</code></pre>
        <p>Pairs well with strict JSON schemas and minimal capability tokens.</p>
      </article>
    ),
  },
  {
    slug: 'mfa-2025',
    title: 'MFA in 2025: fatigue and replay in the wild',
    date: '2025‑05‑22',
    summary: 'Real intrusion notes and mitigations that actually move the needle.',
    body: (
      <article className="prose prose-invert max-w-3xl">
        <h2>Field notes</h2>
        <p>
          Most successful attacks combined credential reuse with real‑time prompts. Push fatigue remains
          effective against broad populations.
        </p>
        <h3>Mitigations</h3>
        <ul>
          <li>Number‑matching or FIDO2 where possible.</li>
          <li>Velocity limits on push prompts + user‑initiated challenge only.</li>
          <li>Per‑app conditional access with device posture checks.</li>
        </ul>
      </article>
    ),
  },
]

export const getBlog = (slug: string) => blogPosts.find(p => p.slug === slug)

