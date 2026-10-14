# ADR-0010: Edge Host Canonicalization, Full Keyword Title Preservation, and GSC Crawl Recovery

## Context
Google Search Console impressions across `richardewing.io` were depressed (~30 impressions per day) despite substantial domain authority, high-tier editorial backlinks (CIO.com, Built In, Mind the Product, HackerNoon, AWS Startups), and 898 indexed sitemap pages.

A forensic source-code and live edge HTTP audit revealed four systemic crawl, indexing, and relevance bottlenecks:
1. **Mechanical Title Truncation with Ellipses**: To comply with strict character length limits, dynamic page templates across roughly 80% of the site (250 curriculum modules, 133 concepts, 114 glossary terms, 124 blog articles, 39 articles, and 52 answers) used `.slice()` rules (e.g. `.slice(0, 24) + '…'`, `.slice(0, 37) + '…'`) that chopped keyword phrases in half mid-word (such as `AI Model Selection Econo…`) and prepended internal catalog numbers (such as `6-1:`). This stripped out essential search tokens from Google's primary ranking weight.
2. **Missing Edge Host Canonicalization**: `richardewing.io` and `www.richardewing.io` both served `200 OK` at Cloudflare edge routes without a 301 permanent redirect. External backlinks targeting the apex domain hit duplicate hosts instead of consolidating link equity onto the canonical `www` origin. In addition, users reviewing URL-prefix properties in GSC were observing fragmented metrics.
3. **Root Layout Canonical Inheritance Trap**: `app/layout.tsx` declared `alternates: { canonical: 'https://www.richardewing.io' }`. In Next.js App Router, child routes lacking an explicit `alternates.canonical` export inadvertently inherited the homepage canonical URL, signaling to crawlers that internal utility and client pages were duplicates of the homepage.
4. **Missing Sitemap `<lastmod>`**: `app/sitemap.ts` emitted only `changeFrequency` and `priority` (which search engines disregard), omitting the `lastModified` timestamp required by crawlers to schedule efficient recrawls.
5. **Zero-Search-Volume Tool Titles**: Core calculator tools led with proprietary acronyms (PDI, AUEB, APER, EV-SE) instead of the exact, high-volume search queries used by buyers (Technical Debt Calculator, AI Cost Calculator, Revenue Per Engineer Calculator, SaaS Valuation Calculator).

## Decision
We execute an architectural overhaul across edge routing, metadata generation, and sitemap configuration:

1. **Edge Host 301 Canonicalization in Middleware**:
   - In `middleware.ts`, enforce a 301 Permanent Redirect whenever `host === 'richardewing.io'` or begins with `richardewing.io:`, redirecting immediately to `https://www.richardewing.io` while preserving full pathname and query parameters.
2. **Root Layout Canonical Removal**:
   - Removed `alternates.canonical` from `app/layout.tsx` while retaining `metadataBase`. The homepage (`app/page.tsx`) maintains its own explicit canonical. Client routes such as `app/starter-kit/` receive isolated layouts with explicit canonical metadata.
3. **Full Keyword Title Preservation**:
   - Removed all artificial `.slice()` truncations and ellipsis appendages (`…`) across dynamic templates: `app/vault/curriculum/tracks/[...slug]`, `app/concepts/[slug]`, `app/glossary/[slug]`, `app/blog/[slug]`, `app/articles/[slug]`, `app/answers/*`, `app/challenges/[slug]`, `app/exogram/docs/[slug]`, and `app/skills/[slug]`.
   - Stripped internal catalog prefixes (e.g. `6-1:`) from curriculum titles to ensure full long-tail keywords are indexed.
4. **High-Volume Search Term Front-Loading for Calculators**:
   - Updated core tool titles:
     - `app/tools/pdi`: `Technical Debt Calculator & Cost Audit (PDI)`
     - `app/tools/aueb`: `AI Cost & Unit Economics Calculator (AUEB)`
     - `app/tools/aper`: `Revenue Per Engineer Calculator (APER)`
     - `app/tools/ev-se`: `SaaS Valuation & Enterprise Value Calculator (EV-SE)`
5. **Sitemap `<lastmod>` Timestamp Integration**:
   - In `app/sitemap.ts`, added `lastModified: new Date()` to all entries, providing crawlers with the necessary freshness signal.

## Deciders
@richardewing, Aravind Srinivas (AIEO Gatekeeper), Steve Jobs (Simplicity & Ruthless Deletion), SEO Architect, Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Consolidates 100% of apex backlink authority and crawl traffic onto `https://www.richardewing.io` with zero duplicate host ambiguity.
- Restores complete keyword indexing across 700+ dynamic routes by ending mid-word title truncation and internal catalog code clutter.
- Aligns high-intent diagnostic tools with actual executive search demand while preserving proprietary branding in secondary parentheses.
- Eliminates the root layout canonical inheritance trap for unindexed child pages.
- Provides search engine crawlers with clean `lastmod` timestamps across all 898 sitemap entries.

Negative/Considerations:
- Rendering full titles may cause Google to visually truncate search snippet display for titles exceeding ~60 characters on desktop SERPs, but all tokens remain fully indexed and weighted for search retrieval.
- Search Console metrics will take 7 to 21 days to reflect the updated sitemap recrawl and edge host consolidation.
