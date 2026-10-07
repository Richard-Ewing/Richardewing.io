# ADR-0001: Cloudflare Edge Hosting & OpenNext Architecture

## Context
Deploying `richardewing.io` to conventional serverless platforms like Vercel introduces significant cold starts, regional network latency, vendor lock-in, and unpredictable per-invocation compute pricing for high-traffic research publications and interactive calculators. The platform requires sub-20ms global time-to-first-byte (TTFB), zero cold-start execution at the network edge, unified DNS, Web Application Firewall (WAF) filtering, and edge caching for static assets while retaining full Next.js 16 App Router Server Component capabilities.

## Decision
We exclusively host and deploy `richardewing.io` and `www.richardewing.io` on Cloudflare Workers with Static Assets using `@opennextjs/cloudflare` and `wrangler.jsonc`. Vercel CLI commands (`vercel`, `npx vercel`) and Vercel-specific deployments are strictly forbidden by architectural invariant and enforced by our pre-push QA verification gates. Production builds compile via OpenNext and deploy directly to Cloudflare edge via `npx wrangler deploy`.

## Deciders
@richardewing, War Room General Staff, Code Architect

## Status
Accepted

## Consequences
Positive:
- Ultra-low TTFB globally via Cloudflare's 300+ edge data center locations.
- Zero cold-start execution on Cloudflare Workers runtime compared to standard containerized serverless functions.
- Predictable and dramatically lower unit economics at scale.
- Native edge security with Cloudflare WAF, DDoS mitigation, and SSL/TLS termination at the DNS layer.
- Preserves full Next.js 16 App Router server rendering, dynamic routing, and image optimization support via OpenNext.

Negative/Considerations:
- OpenNext build pipeline introduces an extra compilation transformation step (`@opennextjs/cloudflare`) on top of `next build`.
- Node.js runtime compatibility differences: Cloudflare Workers runs on the V8 `workerd` runtime, requiring Node.js compatibility flags (`nodejs_compat`) and preventing use of certain legacy native C++ Node modules.
- Local testing requires `wrangler` preview environments rather than simple local Node servers to accurately simulate edge runtime constraints.
