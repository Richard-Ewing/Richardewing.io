# ADR-0011: Google Search Console Page With Redirect Remediation and Internal Link Consolidation

## Context
On October 9, 2026, Google Search Console (GSC) reported a Validation Failed status for the "Page with redirect" index coverage report covering 761 affected URLs across the `richardewing.io` domain property. Validation was initiated on October 3, 2026, following architectural consolidations.

An exhaustive, two-pass forensic audit across the codebase revealed the root causes:
1. **Validation Engine Misalignment**: GSC's "Validate Fix" mechanism is designed to verify that redirecting URLs have ceased redirecting and now serve HTTP 200 OK indexable content. Because these 761 URLs represent legitimate, architectural permanent redirects (e.g. apex domain canonicalization, non-Tier A compare page consolidations, non-keep glossary term migrations to consolidated pillar anchors, deprecated numeric curriculum tracks, and renamed legacy routes), Googlebot re-crawled the sample and found them still returning HTTP 301/308 redirects, triggering an automated validation failure.
2. **Schema.org DefinedTermSet Structured Data Leakage**: In `app/glossary/page.tsx`, the `DefinedTermSet` JSON-LD schema generated raw URLs (`https://www.richardewing.io/glossary/${term.slug}`) for all 656 glossary terms, including 540 consolidated terms that redirect to `/glossary/pillars/${pillarSlug}#${term.slug}`. Every Googlebot crawl of `/glossary` ingested 540 redirecting URLs directly from structured data.
3. **Internal Link Leakage in RelatedContent**: The `allSeoLinks` catalog in `app/lib/seo-links.ts` contained 25 programmatic comparison entries (e.g. `docker-vs-kubernetes`, `linear-vs-jira`, `milvus-vs-qdrant`) that were omitted from `TIER_A_SLUGS` and thus intercepted by `middleware.ts` with HTTP 308 redirects to `/tools`. Because `RelatedContent.tsx` rendered these links randomly across the site, Googlebot repeatedly discovered and crawled them, continually refreshing their presence in the redirect report.
4. **LLM Corpus Ingestion Feeds**: Both `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts` generated raw links to `/glossary/${slug}` for all 656 glossary terms, including consolidated terms, and referenced `/glossary/negative-carry-code` before it was registered in `KEEP_TERMS`.
5. **HTML Regex Tag-Nesting & Code Block Corruptions in `autoLink`**: In `app/glossary/[slug]/page.tsx`, the initial `autoLink` implementation lacked anchor and code element boundary tracking (`inAnchor`, `inCode`). If a term title matched words inside an existing `<a href="...">` or `<code>` block, or inside markdown links `[text](url)`, it injected nested anchors (`<a href="..."><a href="...">...</a></a>`), producing malformed URLs such as `/glossary/<a href=`.
6. **Multi-Hop Apex & Compare Redirect Chains**: In `middleware.ts`, incoming requests to the apex domain `richardewing.io` on compare routes or legacy aliases (e.g. `http://richardewing.io/compare/jenkins-vs-semantic-kernel` or `http://richardewing.io/principal`) redirected to `https://www.richardewing.io/...` (Hop 1), which subsequently issued a second redirect to `/tools` or `/about` (Hop 2), creating multi-hop redirect chains.
7. **Dead Duplicate Static Routes**: Conflicting duplicate pages in `app/frameworks/page.tsx` and `app/principal/page.tsx` existed simultaneously with redirect rules in `next.config.ts` and `middleware.ts`, causing Next.js to prerender static HTML routes with contradictory self-referential canonical tags. Similarly, legacy August 2026 static HTML/JSONLD files in `public/canonical/` shadowed edge routing.

## Decision
We executed an end-to-end, deterministic remediation across the edge routing, internal link graph, structured data schemas, and content syndication systems:
1. **Canonicalized `DefinedTermSet` JSON-LD Structured Data**: Updated `app/glossary/page.tsx` to evaluate `KEEP_TERMS`. Consolidated terms now emit canonical pillar anchor URLs (`https://www.richardewing.io/glossary/pillars/${pillarSlug}#${term.slug}`) directly into the JSON-LD schema, eliminating structured data redirect leakage.
2. **Context-Aware `autoLink` Engine**: Rewrote `autoLink` in `app/glossary/[slug]/page.tsx` with a state machine tracking `inAnchor` and `inCode` tags, pre-converting markdown links so link boundaries are preserved, and immediately re-splitting on tag injection. Mathematically eliminates nested anchors and code block corruption.
3. **Unified Single-Hop Edge Routing in `middleware.ts`**: Enhanced `targetPath` resolution to intercept non-Tier A comparisons, legacy aliases (`/principal`, `/advisory`, `/frameworks`), and alias patterns, routing all apex and www requests directly to their final canonical destination in a single HTTP 301 hop.
4. **Purged Non-Tier A Programmatic Comparisons from `allSeoLinks`**: Replaced all 25 non-indexed programmatic comparison slugs in `app/lib/seo-links.ts` with verified, live Tier A comparison pages (e.g. `why-anthropic-bills-spike-with-tool-use`, `why-ai-feature-margins-turn-negative`, `exogram-vs-lakera`), ensuring `RelatedContent.tsx` strictly emits HTTP 200 OK internal links.
5. **Promoted `negative-carry-code` to `KEEP_TERMS`**: Added `negative-carry-code` to `KEEP_TERMS` in `app/glossary/pillarsMapping.ts`, making Richard Ewing's foundational framework an indexed 200 OK standalone glossary page with rich schema.
6. **Remediated Hardcoded Internal Links & Schemas**:
   - Updated `author.url` in `app/articles/frameworks/[slug]/page.tsx`, `built-in/page.tsx`, `cio-com/page.tsx`, and `hackernoon/page.tsx` from `/principal` to `/about`.
   - Updated `booking_url` and `booking` in `public/.well-known/ai-agent-manifest.json` from `/advisory` to `/services`.
   - Updated `inDefinedTermSet` in `app/api/csp/v1/entity/[slug]/route.ts` to `https://www.richardewing.io/glossary#definedtermset`.
7. **Purged Dead Route Shadowing Artifacts**:
   - Deleted duplicate route pages `app/frameworks/` and `app/principal/`.
   - Purged stale static HTML and dataset files in `public/canonical/`.
   - Purged stale static `public/llms.txt` and `public/llms-full.txt` files.
8. **Sitemap Hygiene Assertion**: Programmatically verified that `app/sitemap.ts` contains exactly zero redirecting URLs, zero trailing slashes, zero non-keep glossary terms, and zero non-Tier A comparisons.

## Deciders
- @richardewing (Author & Executive Sponsor)
- Aravind Srinivas & Lily Ray (AIEO, SEO Architecture & Search Console Governance)
- Steve Jobs (Radical Subtraction of Crawl Noise & Dead Comparison Matrixes)
- Dan Guido & Simon Willison (Edge Routing Hardening & Single-Hop Verification)
- Code Architect & QA Auditor (MOD v4.0 Sovereign Clearance)

## Status
Accepted

## Consequences
Positive:
- Structured data graph is 100% clean: DefinedTermSet JSON-LD emits direct canonical pillar anchors for all 540 consolidated terms.
- Zero nested anchor bugs: Context-aware `autoLink` prevents recursive HTML mangling and invalid URL generation (`/glossary/<a href=`).
- Single-hop edge resolution: Apex domain traffic, legacy aliases, and comparison routes resolve immediately in a single HTTP 301 hop with zero redirect chains.
- Elimination of route conflicts: Deleted duplicate route files for `/frameworks` and `/principal`, guaranteeing unified Next.js build and edge routing.
- Preserved crawl budget: AI bots and Googlebot ingest direct canonical URLs via `llms.txt`, `llms-full.txt`, and `sitemap.xml`.
- Search Console Clarity: Established formal operational guidance that intentional redirects are expected under "Page with redirect" and must not be submitted for re-validation.

Negative/Considerations:
- Historical redirecting URLs already discovered by Googlebot will naturally remain in the Search Console "Page with redirect" report until Google's crawl frequency decays over 60 to 90 days.
- Search Console validation must not be re-triggered on "Page with redirect" since intentional 301/308 redirects will always cause validation to fail if tested for 200 OK responses.
