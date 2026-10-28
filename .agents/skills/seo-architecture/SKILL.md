---
name: seo-architecture
description: Enforces strict formulas for Meta Titles (<60 chars), Meta Descriptions (<155 chars, active voice), canonical URLs, JSON-LD schemas, and sitemap synchronization. Use this skill when optimizing page SEO or auditing metadata.
---

# SEO Architecture & Metadata

## 1. Meta Title Rules
**Constraint:** Keep under ~60 characters / 580px rendered output. Entity in the first 3-5 words.
**Formula:** `[Entity or exact question phrase] + [specific outcome/differentiator]` (The root layout template automatically appends `| Richard Ewing`).
**Rules:**
- In Next.js App Router, NEVER append `| Richard Ewing` in leaf `metadata.title` - `app/layout.tsx` template applies it automatically. Hardcoding it causes double-branding (`Title | Richard Ewing | Richard Ewing`).
- NEVER set a plain string `metadata.title = "..."` inside intermediate child `layout.tsx` files (`app/glossary/layout.tsx`, `app/careers/layout.tsx`, etc.), because Next.js resets the root `title.template` for all child routes beneath that layout. Child `layout.tsx` files must either omit `title` or explicitly declare `title: { template: '%s | Richard Ewing', default: '...' }`.
- When dynamically generating titles (e.g., `/glossary/[slug]`), clamp suffixes adaptively so the final rendered string including ` | Richard Ewing` (`16` chars) never exceeds `60` characters.
- Keep child titles 42 characters or less.
- Front-load the noun people actually search or ask assistants.
- Include one specific (a number, a named tech, a deliverable).
- NEVER spend characters on adjectives ("powerful," "frictionless") or teases.

## 2. Meta Description Rules
**Constraint:** Under ~155 characters; first ~120 must stand alone for mobile.
**Formula:**
- `Sentence 1` = the direct answer or definition.
- `Sentence 2` = differentiator or proof + action verb.
**Rules:**
- The first sentence should be liftable as a complete answer.
- Mirror your on-page 40-60-word extractable opener so page, meta, and schema all say the same thing.
- No "Learn more about...".
- No rhetorical questions.
- Active voice only.

## 3. Indexing & De-indexing
- Deindexing is ALWAYS `noindex, follow`.
- NEVER use `nofollow`.
- Exemption List Override: Any URL found in `bing_cited_pages.csv` is strictly EXEMPT from `noindex` and merging.

## 4. Redirects & Merges
- Redirects are ALWAYS 301.
- Glossary merges must move definitions *verbatim* to stable anchors.
- The old URL must 301 to that exact anchor.

## 5. Sitemaps
- The `sitemap.xml` MUST be regenerated and resubmitted after every phase of URL changes.
- Always include `lastModified` timestamp on every sitemap URL entry.

## 6. Zero Title Mutilation Invariant
- NEVER use `.slice()` or append literal ellipses (`…` or `...`) inside `<title>` tags.
- Search engine crawlers index every word in a title even if it exceeds the visual snippet cutoff. Cutting titles off mid-word deletes primary keyword ranking tokens.
- Strip internal catalog numbers (e.g. `6-1:`) from titles to maximize search query matching.

## 7. Edge Host Canonicalization Invariant
- The apex domain (`richardewing.io`) must ALWAYS return a 301 Permanent Redirect to the canonical `www.richardewing.io` origin at the edge in `middleware.ts`.
- Never serve `200 OK` on both apex and `www` hosts simultaneously.

## 8. Layout Canonical Prohibition, CSR H1 Guard & Prose-Gated Reclamation
- NEVER set `alternates.canonical` in root `app/layout.tsx` OR any intermediate section `layout.tsx` (`app/glossary/layout.tsx`, `app/dashboard/layout.tsx`, `app/exogram/layout.tsx`, etc.). Declare self-referencing `alternates.canonical` strictly in leaf `page.tsx` metadata.
- **Server `<h1>` Above `<Suspense>` Invariant**: Whenever a client component uses `useSearchParams()` or `nuqs` (`useQueryState`), render the semantic `<h1>` and 45-word executive definition block in the parent Server Component `page.tsx` OUTSIDE `<Suspense>` so Next.js never bails out Pass-1 static HTML (`BAILOUT_TO_CLIENT_SIDE_RENDERING`) with zero `<h1>`.
- **Prose-Gated Canonical Reclamation (`>= 800` Words)**: Never flip an external syndication canonical (`beehiiv.com`, `linkedin.com`) to self-canonical on `richardewing.io` until the on-domain route renders the complete essay (`>= 800` words) and any duplicate `/articles/[slug]` vs `/blog/[slug]` twin is `301`-consolidated.

## 9. Dual-Schema Indexing Protocol (Entity + BreadcrumbList)
- Every page, diagnostic hub, and article must render:
  1. The specific Schema.org entity (`WebApplication`, `Article`, `Service`, `CollectionPage`, `DefinedTerm`).
  2. A `BreadcrumbList` schema outlining the hierarchical path from `https://www.richardewing.io` to the leaf route.

## 10. Twitter Card Standards (`summary_large_image`)
- Explicitly declare `twitter.card: 'summary_large_image'` alongside `openGraph`.
- Use dynamic OpenGraph cards (`/api/og?title=...&category=...`) to ensure consistent branding on social and messaging shares.

## 11. Strategic URL Alias & Sitemap Hygiene Protocol
- Search-intent aliases and external audit URLs must be mapped in `next.config.ts` via permanent redirects (`permanent: true`).
- All redirected sources must be excluded in `app/sitemap.ts` via `REDIRECT_DISALLOWED` to prevent indexing redirect chains.
- Never place active primary navigation routes (such as `/advisory`) inside `REDIRECT_DISALLOWED`.

## 12. Zero Mid-Sentence Meta Description Truncation
- NEVER use `.slice(0, 155)` or `.substring(0, 155)` on long article or framework definitions to generate `metadata.description`, `openGraph.description`, or `twitter.description`.
- Every route must define a complete, active-voice sentence between 135 and 155 characters.

## 13. JSON-LD Entity Graph (`sameAs`) & Asset Existence Invariant
- All `Person` and `Organization` JSON-LD schemas across `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, and `app/lib/schemas.ts` must unify `sameAs` around canonical profiles (`https://www.linkedin.com/in/richard-ewing-mba`, `https://github.com/Richard-Ewing`, `https://x.com/richardewing`, `https://www.cio.com/author/richard-ewing/`, `https://builtin.com/authors/richard-ewing`).
- Every local image path referenced in JSON-LD (`image`, `logo`) or OpenGraph/Twitter metadata (`https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg`) must exist on disk in `public/`.
- Never inject a global static `keywords` array into `app/layout.tsx`; leaf routes must declare page-specific keywords.

## 14. Query Fan-Out AEO, `llms.txt` Parity & Option C Conversion Drawer Invariant
- **35-Word Citation Snap (`HWS-AEO v3.0`)**: Every programmatic answer spoke (`/answers/[topic]/[persona]/[questionSlug]`) and glossary definition (`/glossary/[slug]`) must open with a standalone 30-to-45-word direct answer optimized for sub-query decomposition (`Query Fan-Out`) across ChatGPT Search, Perplexity, Claude, and Google AI Overviews, backed by server-rendered `FAQPage` or `DefinedTerm` JSON-LD.
- **`llms.txt` & `llms-full.txt` Synchronization**: Whenever new question clusters are added to `app/lib/spoke-data.ts` or commercial offers change in `app/lib/products.ts`, `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts` must remain synchronized.
- **In-Scorecard Conversion Drawer**: Every diagnostic calculator (`/reality-check`, `/tools/*`) and programmatic answer spoke (`/answers/*`) must mount `<ScorecardCheckoutDrawer />` to provide a zero-click checkout path (`$29` Kit / `$79` Complete Bundle -> `$450` 60-Min Live Session -> `$2,500` 14-Day Sprint / `$7,500` 21-Day 0-to-1 Build Sprint).

## 15. `robots.ts` & Cloudflare Edge Synchronization ("Cite-Only / No Free Model Training" Invariant)
- **Allowed Crawlers (`Allow: ['/', '/_next/static/', '/llms.txt', '/llms-full.txt']`)**: Explicitly allow Search Engine Crawlers (`Googlebot`, `GoogleOther`, `Bingbot`, `Applebot`, `YandexBot`, `Bravebot`, `DuckDuckBot`), Live AI Search, Citation & Assistant Retrieval Bots (`OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `PerplexityBot`, `Perplexity-User`, `Google-Agent`, `Amzn-SearchBot`, `DuckAssistBot`, `ExaSearchBot`, `YouBot`), and Social Link Preview Bots (`facebookexternalhit`, `LinkedInBot`, `Twitterbot`, `Slackbot`).
- **Disallowed Crawlers (`Disallow: '/'`)**: Explicitly disallow Pure Foundation Model Training & Unsolicited Bulk Scrapers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Google-CloudVertexBot`, `CCBot`, `Amazonbot`, `meta-externalagent`, `cohere-ai`, `Bytespider`, `PetalBot`, `Diffbot`, `ImagesiftBot`, `Omgilibot`).
- **Cloudflare Free-Plan Edge Parity**: Because Cloudflare Free-plan Bot Fight Mode and "Block AI Bots" toggles issue un-skippable `403` challenges to `PerplexityBot` and `Claude-User`, keep those blunt toggles `OFF` in Cloudflare Dashboard, set `'ai-training-allowed': 'no'` in `app/layout.tsx`, and enforce deterministic `HTTP 403` blocking of disallowed training-only scrapers (`GPTBot`, `ClaudeBot`, `Google-Extended`, `Google-CloudVertexBot`, `CCBot`, `Amazonbot`, `meta-externalagent`, `Bytespider`, `PetalBot`, `Diffbot`, `cohere-ai`, `Omgilibot`, `ImagesiftBot`) directly in `middleware.ts` and scoped Custom WAF rules while guaranteeing `200 OK` to AI search/citation fetchers (`PerplexityBot`, `Perplexity-User`, `OAI-SearchBot`, `ChatGPT-User`, `Claude-SearchBot`, `Claude-User`, `Applebot`, `Bravebot`, `YouBot`).

## 16. GSC + Bing Snippet Intersection Rule (Cross-Engine Calibration)
- **Rendered Title Length**: Strictly between 45 and 60 characters total rendered in search engine result pages. When using child routes in Next.js, either calibrate child title strings knowing the layout appends ` | Richard Ewing` (16 characters), or supply `title: { absolute: "..." }` to pin the exact character count. Front-load the exact search entity in the first 3 to 5 words.
- **Meta Description Length**: Strictly between 130 and 155 characters. The first sentence must stand alone as an authoritative definition or direct answer. The second sentence provides differentiator, quantitative proof, and an active verb.
- **Voice & Tone Standards**: Strict HWS v2.0 adherence: zero em-dashes, zero semicolons, zero marketing hyperbole, and zero banned consulting filler (unlock, delve, seamless, robust, leverage, production-ready, missing layer/piece).

## 17. AEO First-100-Word Direct Answer Invariant
- **Standalone Extractable Block**: Every diagnostic, framework, executive briefing, and comparison route must open with a direct, citable definition block within the first 100 words of page content.
- **Four-Part Definition Structure**:
  1. Primary Entity / Framework Name.
  2. Category Classification.
  3. Core Operational or Financial Mechanism (what breaks, what costs money, or how it operates).
  4. Executive Readout / Business Consequence.
- **Search Alignment**: The definition must be semantically linked with `itemProp="description"` and mirror page JSON-LD schema descriptions verbatim so search engine crawlers and LLM retrieval bots receive identical ground truth.

## 18. Tier-1 Click-Depth Authority Feeder Invariant (Click Depth <= 2)
- **Global & Hub Feeder Sections**: High-value commercial routes, executive frameworks, and diagnostic tools must maintain a click depth of 2 or fewer hops from the homepage and primary navigation hubs.
- **Mandatory Surfaces**:
  - Global site shell footer (`components/site-shell.tsx`).
  - Standalone footer component (`app/components/Footer.tsx`).
  - High-traffic listing and hub pages (`app/articles/page.tsx`, `app/tools/page.tsx`).
- **Feeder Link Inventory**: Each feeder section must link directly to the 10 Tier-1 authority targets:
  1. `/articles/frameworks/technical-insolvency-date`
  2. `/articles/frameworks/vibe-coding-debt`
  3. `/articles/frameworks/shadow-agents`
  4. `/tools/pdi`
  5. `/reality-check`
  6. `/tools/aueb`
  7. `/roi-calculator`
  8. `/for-cfos` & `/for-ctos`
  9. `/pricing-sprints` & `/advisory`
  10. `/compare/ai-guardrails-platforms`

## 19. Cloudflare Real HTML Document Load Telemetry Invariant
- **Asset Isolation**: Cloudflare Edge analytics record every hit to static JavaScript chunks, CSS bundles, font assets, and client-side prefetch pings. Never conflate gross edge requests with unique human visitors or HTML document reads.
- **Document Load Filtering**: Always isolate requests where `Content-Type` is `text/html` or filter on non-asset document paths (`/`, `/articles/*`, `/tools/*`, `/for-cfos`, etc.) when evaluating real user demand, search crawler crawl rates, and bot traffic.


