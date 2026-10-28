# ADR-0017: Edge Cache Remediation, AI Citation Split, Snippet Governance, and Viral Diagnostic Chains

## Context
A forensic audit of Cloudflare GraphQL telemetry (`richardewing.io`, `exogram.ai`, `careerwin.ai`), Google Search Console (`91,771` impressions, `332` clicks, `0.36%` CTR), and `.next/server/app` compiled HTML (`1,308` routes) exposed seven systemic regressions suppressing organic impressions, click-through rate, unique visitors, and pageviews per visitor:

1. **Hot-Path Cache Self-Sabotage & Early Hints 504s**: Running `caches.default.delete()` across `POISONED_CACHE_URLS` inside `middleware.ts` on every incoming request triggered `140,709` daily `PURGE 404/499` subrequests and continuously evicted live pages (`19.8%` edge cache hit rate). Simultaneously, `Early Hints` subrequests and `HEAD` cache bypasses generated edge `504` timeouts and `DYNAMIC` cache misses, while `pathname.startsWith('/vault')` prevented `280+` public curriculum modules from caching at Cloudflare POPs.
2. **AI Citation vs. Training Crawler Conflation**: `app/layout.tsx` declared `'ai-training-allowed': 'yes'` while Cloudflare Free-plan bot rules blocked `PerplexityBot` and `Claude-User` alongside training scrapers.
3. **Guest Checkout Latency**: `/api/buy/[productId]` awaited Clerk `auth()` unconditionally even when request cookies contained zero Clerk session tokens, adding unnecessary cold network hops before redirecting guest buyers to Stripe.
4. **Child Layout Metadata Hijacking & Snippet Truncation**: `24` child `layout.tsx` files set plain-string `title` values (wiping the root `%s | Richard Ewing` template on `158` pages), `18` child `layout.tsx` files hardcoded parent `alternates.canonical` tags (poisoning child routes such as `/dashboard/*`), `519` pages rendered `<title>` tags over `60` characters, and `492` pages rendered mid-sentence `...` meta descriptions.
5. **Suspense CSR `<h1>` Bailout & Duplicate `<h1>`s**: Client calculators wrapped in `<Suspense>` for `nuqs` / `useSearchParams` (`pdi`, `aueb`, `aper`, `innovation-tax-calculator`, `ai-unit-economics`) bailed out Pass-1 static HTML with zero `<h1>`, while `98` routes rendered duplicate `<h1>` tags.
6. **External Canonical Leakage & Coined Tool Acronyms**: Thin Beehiiv/LinkedIn syndication stubs pointed canonical equity off-domain or overlapped across `/articles/[slug]` and `/blog/[slug]`, and `13` commercial calculators hid behind coined acronyms (`AUEB`, `PDI`, `APER`) instead of plain-English buyer pain queries.
7. **Dead-End Single-Page Sessions (`1.12` Pageviews/Visitor) & Dark-on-Dark CTAs**: `10+` primary CTAs rendered `text-zinc-950` on dark `-600` backgrounds, `22` calculators lacked `<DiagnosticCTA />` checkout drawers, `SlackScorecardExport` copied static URLs with no dynamic Slack preview card, and calculators did not pass live user inputs forward into chained next-step diagnostics.

## Decision
We adopt an eight-wave architectural remediation and offensive growth system across `richardewing.io`:

1. **Edge Middleware Hardening (`middleware.ts` & `next.config.ts`)**:
   - Return cached `204 No Content` immediately on `early hints` user-agent subrequests.
   - Enforce deterministic `403 Forbidden` responses on pure foundation-model training scrapers (`GPTBot`, `ClaudeBot`, `anthropic-ai`, `Google-Extended`, `Google-CloudVertexBot`, `CCBot`, `Amazonbot`, `meta-externalagent`, `cohere-ai`, `Bytespider`, `PetalBot`, `Diffbot`, `ImagesiftBot`, `Omgilibot`) while preserving `200 OK` access for search and AI citation engines (`Googlebot`, `Bingbot`, `PerplexityBot`, `Perplexity-User`, `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `Applebot`, `Bravebot`, `YouBot`) and setting `'ai-training-allowed': 'no'` in `app/layout.tsx` and `'X-Robots-Tag': 'all, noai'` on `/llms-full.txt` and `/llms.txt`.
   - Delete `POISONED_CACHE_URLS` and hot-path `caches.default.delete()` calls completely.
   - Narrow `/vault` dynamic cache exclusion strictly to gated routes (`/vault`, `/vault/assets/*`, `/vault/team/*`, `/vault/join/*`), include `HEAD` alongside `GET` for public caching, extend `Cache-Control` to `public, max-age=0, s-maxage=86400, stale-while-revalidate=604800`, and remove the duplicate `Vary` header rule in `next.config.ts`.
2. **Sub-5ms Guest Stripe Fast-Path**: Bypass `await auth()` in `/api/buy/[productId]` and `/api/buy/enterprise/[productId]` whenever incoming cookies lack `__session` or `__clerk`, and wrap authenticated Clerk lookups in a `1,200ms` timeout race fallback so checkout redirects never stall.
3. **Centralized Snippet Governance (`app/lib/seo-metadata.ts`) & Child Layout Inheritance**:
   - Convert all child `layout.tsx` files to `{ template: '%s | Richard Ewing', default: '...' }` and remove `alternates.canonical` from every shared layout, stamping self-referencing canonicals strictly in leaf `page.tsx` files.
   - Enforce `clampSeoTitle` / adaptive title formatting (`<= 60` rendered chars, zero ellipses) and abbreviation-safe `formatSeoDescription` (`130` to `155` chars, active voice, zero `...` truncation) across all dynamic and static routes, backed by a deterministic post-build `.next/server/app` HTML scanner in `.agents/scripts/verify-qa.mjs`.
4. **Server `<h1>` Extraction & Entity JSON-LD**:
   - Render semantic `<h1>` headings and 35-to-45-word direct answer blocks in Server Components outside `<Suspense>` on all interactive calculators and hubs, and demote secondary `<h1>` tags to `<h2>`.
   - Replace global `SoftwareApplication` layout injection with per-tool `WebApplication` + `HowTo` + `BreadcrumbList` JSON-LD, `DefinedTerm` + `DefinedTermSet` on glossary terms, `ProfilePage` + unified `sameAs` on `/about`, and semantic SSR `<table>` matrices on high-impression glossary terms (plus `/glossary/product-pl-ownership`).
5. **Prose-Gated Canonical Reclamation & De-Cannibalization**:
   - Reclaim self-referencing canonicals on Beehiiv and LinkedIn essays strictly where full on-domain prose meets or exceeds `800` words, keep `cio.com`, `builtin.com`, `hackernoon.com`, and `mindtheproduct.com` contributor canonicals external, and `301`-consolidate duplicate `/articles/[slug]` vs `/blog/[slug]` pairs.
6. **Buyer-Intent Tool Repositioning, Contrast Repair, & 3 Net-New Concept B Buyer Hubs**:
   - Replace dark-on-dark `text-zinc-950` button text with `text-white`, mount `<DiagnosticCTA />` across uncovered calculators, reposition `13` commercial calculators around plain-English buyer search queries (`AI Credit vs Seat Calculator`, `Claude & OpenAI API Margin Calculator`, `Technical Debt Dollar Calculator`, etc.), fix misrouted aliases in `next.config.ts`, and launch `/benchmark/llm-cost-and-margin-index`, `/tools/vibe-coding-checklist`, and `/tools/automation-cost-calculator`.
7. **Viral `noindex` `/scorecard/[toolSlug]` Readouts & 5 Chained Diagnostic Loops**:
   - Isolate dynamic Slack/Teams OpenGraph readout previews (`ml`, `mv`, `s` params rendered via `/api/og`) inside `noindex, follow` `app/scorecard/[toolSlug]/page.tsx` canonicalized to `/tools/[toolSlug]` so primary calculator pages remain 100% static-cached at the edge.
   - Mount `ChainedDiagnosticNextStep` across 5 deterministic 3-step calculator chains passing live user parameters via URL query strings and `lib/storage/session.ts`.

## Deciders
@richardewing, Steve Jobs, Paul Graham, Aravind Srinivas, Lily Ray, Brian Balfour, Luis von Ahn, Keith Rabois, Dan Guido, Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Eliminates `140,709` daily Worker cache-purge subrequests, prevents Early Hints `504` timeouts, caches `HEAD` requests and `280+` public curriculum modules at Cloudflare POPs for 24 hours, and drops guest Stripe redirect latency below `5ms`.
- Guarantees `100%` of indexable compiled HTML pages have a single static `<h1>`, self-referencing canonical (or intentional external contributor canonical), `<= 60`-char branded `<title>`, and clean `130` to `155`-char meta description without ellipses.
- Captures high-intent commercial searches (LLM pricing margins, vibe-coded app launch security, department automation ROI) while multiplying unique visitors via Slack scorecard unfurls and lifting pageviews per visitor via parameterized 3-step diagnostic chains.

Negative/Considerations:
- Cloudflare Free-plan zone-level toggles (`Early Hints = OFF`, `Smart Tiered Cache = ON`, `Bot Fight Mode = OFF`, `Block AI Scrapers = OFF`) cannot be mutated via a Worker-only OAuth token and require either Cloudflare Dashboard confirmation or a Zone-Settings API token across `richardewing.io`, `exogram.ai`, and `careerwin.ai`.
- Extending public HTML edge cache TTL to `s-maxage=86400` means content updates on cached URLs persist at POPs for up to 24 hours unless invalidated once at deploy time via Cloudflare cache purge.
- Strict post-build HTML assertions in `verify-qa.mjs` will fail future builds if any newly authored page introduces a `> 60`-char title, `...` description truncation, missing canonical, or duplicate `<h1>`, requiring authors to use `app/lib/seo-metadata.ts`.
