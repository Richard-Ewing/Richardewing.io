# ADR-0013: October 2026 AEO/GEO Answer Graph & Edge Conversion Hardening

## Context
A forensic 28-day Cloudflare Edge telemetry audit (`2026-09-29` through `2026-10-24`) across `1,744,825` total requests and `1,583` canonical routes on `richardewing.io` revealed an extreme Pareto concentration:
1. **The 1% Traffic Concentration**: The top 1% of routes (16 pages) capture `41.28%` (`112,139` GET 200 hits) of all site traffic, and the top 2% (32 pages) capture `62.31%` (`169,283` hits). Meanwhile, `59.19%` (`937` routes) receive fewer than 50 hits per month, and `20.53%` (`325` routes) receive zero hits in the top 5,000 paths.
2. **AEO Answer Graph Blind Spots**: While `richardewing.io` answers `1,358` explicit questions and `4,300+` implicit semantic queries across `/answers`, `/concepts`, `/glossary`, `/compare`, and `/tools`, the `/answers` hub (`app/answers/page.tsx`) injected placeholder strings (`"Detailed answer and analytical breakdown available..."`) into its `FAQPage` JSON-LD instead of actual extractable answers. Furthermore, the 53 leaf routes (`app/answers/[topic]/[persona]/[questionSlug]/page.tsx`) injected unstripped HTML tags (`<div>`, `<h4>`, Tailwind classes) into `acceptedAnswer.text`, degrading citation extraction by PerplexityBot, OAI-SearchBot, and Claude-SearchBot.
3. **LLM Ingestion Omission**: `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts` omitted all 53 Executive Answer Matrix Q&As (`SPOKE_MATRIX`) and the 133 Canonical Research Specifications (`CANONICAL_CONCEPTS`), starving AI retrieval engines of our highest-intent executive Q&A pairs.
4. **Glossary Pillar Schema & FAQ Extraction**: `app/glossary/pillars/[slug]/page.tsx` rendered 549 consolidated glossary terms without `DefinedTermSet` JSON-LD or visible FAQ blocks, leaving 800+ embedded FAQ pairs invisible to crawlers.
5. **High-Frequency 404 Concept Leaks & Conversion Friction**: Cloudflare 404 logs surfaced repeated broken concept links (`/concepts/rented-intelligence-vs-owned-capital`, `/concepts/engineering-bottleneck-illusion`, `/concepts/ai-cogs`, `/concepts/variable-cost-of-intelligence`, `/concepts/vibe-coding-debt`, `/concepts/explainability-vs-recoverability`, `/architecture`), while `ArticleUpsell.tsx` lacked direct bridges to the `$29` Operating Kit (`/toolkit`) and `$450` 1-on-1 P&L Teardown (`/services#gut_check`).

## Decision
1. **Direct Answer Extraction in `/answers` Hub & Spoke JSON-LD**: Strip HTML tags and inject real, complete executive answers into `FAQPage` JSON-LD across both `/answers` and `/answers/[topic]/[persona]/[questionSlug]`, paired with `BreadcrumbList` schema and extractable first-sentence meta descriptions.
2. **Complete AEO Corpus Sync in `llms.txt` & `llms-full.txt`**: Programmatically export all 53 `SPOKE_MATRIX` Q&A spokes and all 133 `CANONICAL_CONCEPTS` specifications (including their 206 embedded FAQs) into `/llms.txt` and `/llms-full.txt`.
3. **Glossary Pillar `DefinedTermSet` & FAQ Exposure**: Render `DefinedTermSet` + `BreadcrumbList` JSON-LD and visible Direct Q&A blocks on all 17 `/glossary/pillars/[slug]` pages.
4. **Single-Hop Edge 301 Recovery**: Map all top Cloudflare 404 concept/architecture paths in `middleware.ts` (`EDGE_REDIRECTS`) to their canonical glossary/framework destinations.
5. **Conversion Bridge & October 2026 Terminology Calibration**: Upgrade `ArticleUpsell.tsx` to surface the `$29` Operating Kit and `$450` 1-on-1 P&L Teardown alongside newsletter and track checkout paths, and calibrate legacy model references to October 2026 frontier baselines (`Gemini 3.8 Flash High`, `Claude 4.5`, `OpenAI o3`, `Gemma 4 26B LiteRT`).

## Deciders
@richardewing, Council of Titans (Steve Jobs, Jeff Bezos, Jensen Huang), War Room General Staff (Aravind Srinivas, Lily Ray, Paul Graham, Brian Balfour, Keith Rabois, Code Architect, QA Auditor)

## Status
Accepted

## Consequences
Positive:
- Every single one of the 1,358 explicit questions and 133 canonical concepts is now cleanly exposed to AI answer engines via valid, HTML-free JSON-LD and `/llms.txt` / `/llms-full.txt`.
- Eliminates top recurring 404 dead-ends identified in Cloudflare 28-day edge logs via sub-millisecond single-hop 301 redirects.
- Connects long-tail informational Q&A spokes directly to the `$29` Operating Kit and `$450` 1-on-1 P&L Teardown commercial conversion paths.
- Aligns sitewide model and architectural terminology with October 2026 executive search intent.

Negative/Considerations:
- Increases payload size of `/llms.txt` and `/llms-full.txt` by including all 53 Q&A spokes and 133 concept specifications; mitigated by 24-hour ISR and Cloudflare CDN edge caching (`s-maxage=604800`).
