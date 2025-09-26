import type { ReactNode } from 'react'

export type Research = {
  slug: string
  tag: string
  title: string
  date: string
  summary: string
  body: ReactNode
}

export const researchPosts: Research[] = [
  {
    slug: 'shadow-assets',
    tag: 'Surface',
    title: 'Mapping shadow assets with model‑aided discovery',
    date: '2025‑08‑02',
    summary: 'Combining passive DNS, CT logs, and LLM heuristics to surface unknown internet exposure.',
    body: (
      <article className="prose prose-invert max-w-3xl">
        <h2>Overview</h2>
        <p>
          Shadow assets drive incidents: forgotten subdomains, orphaned buckets, and debug endpoints. We fuse
          passive DNS, certificate transparency, WHOIS, and vendor APIs, then enlist a small LLM to group and
          rank candidates by ownership likelihood.
        </p>
        <h3>Method</h3>
        <ul>
          <li>Seed from apex + historical CN/SANs, expand via passive DNS and NS glue.</li>
          <li>Normalize by registrant, ASN, and banner signatures; dedupe by Jaccard on token sets.</li>
          <li>LLM scoring on short metadata tuples (no secrets) to prioritize probable matches.</li>
        </ul>
        <h3>Findings</h3>
        <p>
          Across three orgs, mean unknowns dropped by 41% with two hours of analyst time. False positives were
          dominated by vendor shared infra—mitigated by a simple ASN denylist and PTR heuristics.
        </p>
        <h3>Mitigations</h3>
        <p>Automate rechecks weekly; alert on ownership drift (WHOIS/CT deltas) and sudden banner change.</p>
      </article>
    ),
  },
  {
    slug: 'agent-chains',
    tag: 'Adversarial',
    title: 'Adaptive red teaming for agentic systems',
    date: '2025‑07‑03',
    summary: 'From single prompts to evolving chains: pressure‑testing agent loops and tool use.',
    body: (
      <article className="prose prose-invert max-w-3xl">
        <h2>Approach</h2>
        <p>
          We move beyond one‑shot jailbreaks to chain‑level attacks: perturb memory, tool arguments, and
          intermediate state. A driver generates counterfactual steps, while a critic labels success.
        </p>
        <h3>Scenario set</h3>
        <ul>
          <li>Spec‑confusion on tool schema → silent parameter injection.</li>
          <li>Memory splice → instruction smuggling after “safe” steps.</li>
          <li>Guardrail drift → refusal‑bypass after reflective edits.</li>
        </ul>
        <h3>Outcome</h3>
        <p>
          Chain coverage increased 3×, finding issues that single‑turn eval missed. Best defense was
          signed tool use + argument schemas with strict validation.
        </p>
      </article>
    ),
  },
  {
    slug: 'serverless-move',
    tag: 'Detection',
    title: 'Detecting lateral movement in serverless estates',
    date: '2025‑06‑12',
    summary: 'Signal fusion across IAM, runtime, and network to catch stealthy pivots without agents.',
    body: (
      <article className="prose prose-invert max-w-3xl">
        <h2>Signals</h2>
        <ul>
          <li>IAM: unusual role assumption chain depth and rare action combos.</li>
          <li>Runtime: cold‑start anomalies + extended network egress to new ASNs.</li>
          <li>Network: DNS entropy spikes tied to short TTLs.</li>
        </ul>
        <h3>Detection sketch</h3>
        <pre><code>{`score = w1*rare(iam.actions) + w2*net.new_asn + w3*dns.entropy
if score > T: raise('suspected lateral move')`}</code></pre>
        <p>We validated on replayed incidents; precision improved after whitelisting CI/CD identities.</p>
      </article>
    ),
  },
]

export const getResearch = (slug: string) => researchPosts.find(p => p.slug === slug)

