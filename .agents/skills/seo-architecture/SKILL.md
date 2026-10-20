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

## 8. Root Layout Canonical Prohibition
- NEVER set `alternates.canonical` in root `app/layout.tsx`. In Next.js App Router, child routes that lack explicit canonical tags will inherit the root value and falsely declare themselves duplicates of the homepage.
- Explicitly declare `alternates.canonical` in individual leaf page/layout metadata.

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
- All `Person` and `Organization` JSON-LD schemas across `app/layout.tsx`, `app/page.tsx`, `app/about/page.tsx`, and `app/lib/schemas.ts` must unify `sameAs` around canonical profiles (`https://www.linkedin.com/in/richard-ewing-mba`, `https://github.com/richardewing`, `https://x.com/richardewing`, `https://www.cio.com/author/richard-ewing/`, `https://builtin.com/authors/richard-ewing`).
- Every local image path referenced in JSON-LD (`image`, `logo`) or OpenGraph/Twitter metadata (`https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg`) must exist on disk in `public/`.
- Never inject a global static `keywords` array into `app/layout.tsx`; leaf routes must declare page-specific keywords.


