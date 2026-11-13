# ADR-0023: Cross-Domain 1.00M CPU Budget Governance, Exogram MCP Hub, and ROAI/AUEB CTR Surgery

## Context
Live 9-pillar telemetry across `richardewing.io`, `careerwin.ai`, and `exogram.ai` revealed four coupled bottlenecks:
1. Combined Cloudflare Worker CPU paced around 1.06M ms/day, led by CareerWin authenticated dashboard polling and post-deploy warming of 297 long-tail sitemap URLs (`91.5k` ms burst), risking recurring overage beyond the 1.00M ms/day (30.00M ms/cycle) threshold.
2. Google Search Console lookups failed for `careerwin.ai` inside the canonical audit script because it queried `sc-domain:careerwin.ai` instead of trying the verified URL-prefix property `https://careerwin.ai/`, and cumulative cycle errors appeared visually alongside 60-minute stats.
3. On `exogram.ai`, `/mcp` surged to 1,065 daily views (13x homepage volume) but served raw JSON to human browsers with zero installation buttons or upgrade paths, while `richardewing.io` ranked Pos 2.6 on `"roai"` and Pos 7.9 on `"ai unit economics"` with low snippet CTR.
4. Fifty recent Stripe Checkout Sessions ended with 0 paid completions because core Payment Links left `hosted_confirmation` (`stripe.com`) redirects, lacked automatic invoice and tax ID collection, and used followable outbound anchors exposed to scanners.

## Decision
1. **Permanent 9-Pillar Report & CPU Budget Policy**: Promote the canonical 9-pillar audit to `.agents/scripts/run-cloudflare-report.mjs` (preserving `.scratch/run-full-audit-live.mjs` as a forwarder), add GSC candidate property resolution (`https://careerwin.ai/`), separate 60m/24h/cycle errors, and codify the 1.00M CPU ms/day ceiling in `.agents/AGENTS.md` and `.agents/rules/always_on_mod_execution.md`.
2. **CareerWin Edge Micro-Cache & Warmer Cap**: Extend the `careerwin-app` Worker patcher with a 45-second SHA-256 `(authorization + cookie)` `caches.default` micro-cache on read-only authenticated APIs (with write-through `caches.default.delete` purging on mutations), a 24-hour public edge cache on company logos, and default Top-25 warming in the CareerWin warmer script.
3. **Exogram Zero-SSR Browser `/mcp` Hub**: Add HTTP content negotiation on `GET /mcp` in Exogram's stateless edge responder so browser HTML visitors receive an instant Plum Mineral interactive setup hub (Cursor deep link, Claude Desktop/CLI copy tabs, Free API Key and `$19/mo` Pro CTAs, 22-tool directory) in `<0.05ms` CPU while JSON and POST MCP clients continue receiving raw JSON-RPC unchanged, and remove all em-dashes.
4. **ROAI/AUEB CTR Surgery, Checkout Hardening & Edge Compression**:
   - Upgrade SEO titles, meta descriptions, 35-word HWS-AEO definitions, FAQ schemas, and internal conversion bridges across `app/glossary/[slug]/page.tsx`, `app/glossary/terms/programmatic-seo.ts`, `app/glossary/terms/orphan-fix-batch.ts`, and `app/ai-unit-economics/page.tsx`.
   - Harden `app/components/ScorecardCheckoutDrawer.tsx` (`rel="noopener noreferrer nofollow"` + B2B PDF tax invoice trust copy) and update active one-time Stripe Payment Links with richardewing.io completion redirects, promo codes, tax ID collection, and automatic invoice creation.
   - Add `esbuild` handler minification to `scripts/patch-worker.mjs` and add `scripts/warm-tier1-edge-cache.mjs` to warm 22 Tier-1 commercial and diagnostic endpoints post-deploy.

## Deciders
@richardewing, Steve Jobs (Simplicity), Paul Graham (Human Voice), Jensen Huang (CPU Density), Aravind Srinivas & Lily Ray (GEO/CTR), Keith Rabois (Checkout Conversion), Dan Guido (Security), Code Architect, QA Auditor.

## Status
Accepted

## Consequences
Positive:
- Keeps all three Workers comfortably below the 1.00M CPU ms/day ($5.00 flat monthly plan) budget threshold while restoring `X-RW-Edge-Cache: HIT` across Tier-1 commercial endpoints.
- Restores live 3-domain GSC reporting including `careerwin.ai` inside a single reproducible CLI command.
- Converts passive `exogram.ai/mcp` traffic into an above-the-fold Cursor/Claude installation and signup funnel at near-zero Worker CPU.
- Eliminates hosted `stripe.com` checkout dead ends, prevents automated scanner session inflation, and targets Top-3 click share on `"roai"` and `"ai unit economics"`.

Negative/Considerations:
- Authenticated CareerWin API micro-caching adds a 30s to 45s TTL window for passive external updates not initiated through browser mutations, mitigated by immediate write-through key deletion on every POST/PUT/PATCH/DELETE.
- Exogram `/mcp` relies on `Accept: text/html` content negotiation, so developers fetching HTML via curl without a browser `Accept` header continue seeing the canonical JSON descriptor unless opening `/mcp` in a browser.
