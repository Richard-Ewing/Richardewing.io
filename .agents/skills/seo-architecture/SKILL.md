---
name: seo-architecture
description: Enforces strict formulas for Meta Titles (<60 chars), Meta Descriptions (<155 chars, active voice), canonical URLs, JSON-LD schemas, and sitemap synchronization. Use this skill when optimizing page SEO or auditing metadata.
---

# SEO Architecture & Metadata

## 1. Meta Title Rules
**Constraint:** Keep under ~60 characters / 580px. Entity in the first 3-5 words.
**Formula:** `[Entity or exact question phrase] + [specific outcome/differentiator] + | Brand`
**Rules:**
- Front-load the noun people actually search or ask assistants.
- Include one specific (a number, a named tech, a deliverable).
- Brand string ("Richard Ewing" or "Exogram") goes at the absolute end behind a pipe `|`.
- NEVER spend characters on adjectives ("powerful," "seamless") or teases.

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
