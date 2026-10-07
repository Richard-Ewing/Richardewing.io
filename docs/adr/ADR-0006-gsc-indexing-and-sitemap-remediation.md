# ADR-0006: Google Search Console Indexing, Sitemap Invariants, and Crawl Barrier Remediation

## Context
Google Search Console (GSC) reported three compounding validation failures:
1. "Crawled - currently not indexed" affecting 874 pages (validation failed September 21, 2026).
2. "Blocked by robots.txt" affecting static media font bundles (/_next/static/media/*.woff2) and private endpoints.
3. "Page with redirect" in sitemap.xml affecting 59 URLs (validation failed September 18, 2026).

Empirical triage revealed three architectural root causes:
1. `next.config.ts` applied a blanket wildcard header rule (`source: '/vault/:path*'`) setting `X-Robots-Tag: noindex, follow` and `Cache-Control: no-store`. This header overrode HTML meta tags on over 200 public curriculum modules under `/vault/curriculum/tracks/...`, forcing Googlebot to exclude them from the index.
2. `app/robots.ts` contained a blanket disallow for `'/_next/'`. Googlebot was blocked from fetching static CSS, fonts (.woff2), and JavaScript chunks, which broke headless DOM rendering and caused pages to be discarded as unindexable.
3. `app/glossary/terms/index.ts` failed to import four existing 2026 expansion files (`sovereign-expansion-2026.ts`, `high-search-2026.ts`, `cpo-ceo-leadership-2026.ts`, and `executive-leadership-2026.ts`). Consequently, 17 high-priority terms defined in `KEEP_TERMS` triggered a runtime redirect to `/glossary`, while seven deprecated vault modules remained in `sitemap.xml`.

## Decision
We execute a deterministic three-layer remediation across edge headers, crawler directives, and content indexing:
1. **Granular Edge Headers in `next.config.ts`**: Replace the wildcard `/vault/:path*` header rule with granular rules targeting strictly private, authenticated portal routes (`/vault`, `/vault/assets/:path*`, `/vault/team/:path*`, `/vault/join/:path*`). Exempt `/vault/curriculum/:path*` and `/vault/blueprints` from any `noindex` or `no-store` headers.
2. **Open Rendering Directives in `app/robots.ts`**: Allow `/_next/static/` and remove `'/_next/'` from disallow rules so crawlers can access fonts, CSS, and scripts required for DOM evaluation. Restrict disallow rules exclusively to internal and administrative pathways (`/admin/`, `/api/`, `/sandbox/`, `/experimental/`, `/sign-in`, `/sign-up`, and private `/vault/*` routes).
3. **Glossary Barrel Assembly**: Re-export all four 2026 expansion modules within `app/glossary/terms/index.ts`, ensuring all 97 `KEEP_TERMS` resolve to 200 OK canonical responses with complete Schema.org JSON-LD.
4. **Sitemap Redirect Isolation**: Add all seven deprecated vault modules and `/curriculum/tracks` to `REDIRECT_DISALLOWED` in `app/sitemap.ts`, guaranteeing that every URL in `sitemap.xml` returns HTTP 200 OK.

## Deciders
@richardewing, Aravind Srinivas (AIEO Gatekeeper), SEO Architect, Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Restores Googlebot indexing eligibility for over 200 public curriculum track modules and founder blueprints.
- Resolves font and static asset crawler blocking, enabling complete headless DOM rendering in Googlebot and AI search crawlers (PerplexityBot, Claude-SearchBot, OAI-SearchBot).
- Ensures 100% of URLs in `sitemap.xml` return HTTP 200 OK canonical responses, clearing GSC sitemap validation.
- All 97 primary authority terms in `KEEP_TERMS` render rich standalone canonical pages with structured data.

Negative/Considerations:
- Private authenticated vault routes must be explicitly registered when new subpaths are introduced to prevent unintentional public indexing.
- Deprecated curriculum routes require explicit registration in both `next.config.ts` redirects and `REDIRECT_DISALLOWED` in `sitemap.ts` to prevent redirect drift.
