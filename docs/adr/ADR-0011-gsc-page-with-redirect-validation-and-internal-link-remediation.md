# ADR-0011: Google Search Console Page With Redirect Remediation and Internal Link Consolidation

## Context
On October 9, 2026, Google Search Console (GSC) reported a Validation Failed status for the "Page with redirect" index coverage report covering 761 affected URLs across the `richardewing.io` domain property. Validation was initiated on October 3, 2026, following architectural consolidations.

An exhaustive forensic audit across the codebase revealed the root causes:
1. **Validation Engine Misalignment**: GSC's "Validate Fix" mechanism is designed to verify that redirecting URLs have ceased redirecting and now serve HTTP 200 OK indexable content. Because these 761 URLs represent legitimate, architectural permanent redirects (e.g. apex domain canonicalization, non-Tier A compare page consolidations, non-keep glossary term migrations to consolidated pillar anchors, deprecated numeric curriculum tracks, and renamed legacy routes), Googlebot re-crawled the sample and found them still returning HTTP 301/308 redirects, triggering an automated validation failure.
2. **Internal Link Leakage in RelatedContent**: The `allSeoLinks` catalog in `app/lib/seo-links.ts` contained 25 programmatic comparison entries (e.g. `docker-vs-kubernetes`, `linear-vs-jira`, `milvus-vs-qdrant`) that were omitted from `TIER_A_SLUGS` and thus intercepted by `middleware.ts` with HTTP 308 redirects to `/tools`. Because `RelatedContent.tsx` rendered these links randomly across the site, Googlebot repeatedly discovered and crawled them, continually refreshing their presence in the redirect report.
3. **LLM Corpus Ingestion Feeds**: Both `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts` generated raw links to `/glossary/${slug}` for all 656 glossary terms, including 540 consolidated terms that redirect to `/glossary/pillars/${pillarSlug}#${slug}`, causing AI search crawlers and Googlebot to ingest 540 redirecting URLs.
4. **HTML Regex Tag-Nesting Defect**: In `app/glossary/[slug]/page.tsx`, the `autoLink` helper executed iterative regex replacements on full HTML strings without tag-boundary segmentation. If a term title matched substring tokens within previously injected HTML tags or attributes, it recursively injected anchor tags inside existing `href` attributes, producing malformed URLs such as `/glossary/<a href=`.
5. **Multi-Hop Apex Redirects**: In `middleware.ts`, incoming requests to the apex domain `richardewing.io` on legacy routes (e.g. `http://richardewing.io/principal`) redirected to `https://www.richardewing.io/principal`, which subsequently issued a second redirect to `/about`, creating multi-hop redirect chains.

## Decision
We executed an end-to-end, deterministic remediation across the edge routing, internal link graph, and content syndication systems:
1. **Purged Non-Tier A Programmatic Comparisons from `allSeoLinks`**: Replaced all 25 non-indexed programmatic comparison slugs in `app/lib/seo-links.ts` with verified, live Tier A comparison pages (e.g. `why-anthropic-bills-spike-with-tool-use`, `why-ai-feature-margins-turn-negative`, `exogram-vs-lakera`), ensuring that `RelatedContent.tsx` strictly emits HTTP 200 OK internal links.
2. **Canonicalized `llms.txt` and `llms-full.txt` Glossary Feeds**: Updated the generation loops in `app/llms.txt/route.ts` and `app/llms-full.txt/route.ts` to check `KEEP_TERMS`. Non-keep terms now link directly to their canonical pillar anchor (`/glossary/pillars/${pillarSlug}#${t.slug}`), eliminating 540 redirect hits per crawler traversal.
3. **Implemented Tag-Safe `autoLink` Engine**: Rewrote `autoLink` in `app/glossary/[slug]/page.tsx` to segment text using tag boundaries (`/(<[^>]+>)/g`). Substitutions are strictly restricted to plain-text nodes outside HTML tags and attributes, mathematically preventing nested anchor tags and malformed URLs.
4. **Single-Hop Edge Redirect Resolution**: Introduced `EDGE_REDIRECTS` in `middleware.ts` to intercept known legacy aliases (`/advisory`, `/principal`, `/trust`, `/studio.html`, etc.) at the Cloudflare Edge, routing both apex and www requests directly to their final canonical destination in a single HTTP 301 hop.
5. **Remediated Hardcoded Internal Links**: Updated legacy references in `app/resources/page.tsx`, `app/lib/data.ts`, `app/tools/cpo-product-portfolio-matrix/content.tsx`, and `app/lib/concept-corpus-tier1.ts` / `tier2.ts` to link directly to their canonical pillar anchors or concept pages.
6. **Sitemap Hygiene Assertion**: Programmatically verified that `app/sitemap.ts` contains exactly zero redirecting URLs, zero trailing slashes, zero non-keep glossary terms, and zero non-Tier A comparisons.

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
- Internal linking graph is 100% clean: Zero internal links point to redirecting URLs or soft-404 targets.
- Single-hop edge resolution: Apex domain traffic and legacy aliases resolve immediately in a single HTTP 301 redirect with zero redirect chains.
- Elimination of malformed crawler traps: The tag-safe `autoLink` engine completely eliminates recursive HTML mangling and invalid URL generation.
- Preserved crawl budget: AI bots and Googlebot ingest direct canonical URLs via `llms.txt`, `llms-full.txt`, and `sitemap.xml`.
- Search Console Clarity: Established formal operational guidance that intentional redirects are expected under "Page with redirect" and should not be submitted for re-validation.

Negative/Considerations:
- Historical redirecting URLs already discovered by Googlebot will naturally remain in the Search Console "Page with redirect" report until Google's crawl frequency decays over 60 to 90 days.
- Search Console validation must not be re-triggered on "Page with redirect" since intentional 301/308 redirects will always cause validation to fail if tested for 200 OK responses.
