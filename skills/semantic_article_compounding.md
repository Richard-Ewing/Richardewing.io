# Skill: Semantic Article Compounding

## When to Use
Every time a new article by Richard Ewing is published on an external platform (Built In, CIO.com, HackerNoon, Mind the Product, etc.)

## The Pattern
Each new article should spawn a semantic compound — NOT just a blog archive entry.

```
1 article
→ 3-6 glossary terms
→ 1-2 failure page cross-links
→ 1-2 compare page cross-links
→ 1 diagnostics tie-in
→ 1 Exogram bridge reference
→ 1 article recap page update
```

## Procedure

### Step 1: Read the Article
- Extract key concepts, terminology, and frameworks
- Identify operational pain language (use in definitions)
- Note specific statistics and data points

### Step 2: Create Glossary Terms
- File: `app/glossary/terms/article-derived-{month}{year}.ts`
- Interface: `GlossaryTerm` from `../types`
- Required fields: slug, title, category, definition, whyItMatters, faqs, relatedTerms
- Recommended fields: howToApply, relatedTools, relatedArticles, relatedFailures, relatedControls
- Cross-link: Each term must reference ≥3 relatedTerms and ≥1 tool
- Register in `app/glossary/terms/index.ts` (import + spread into array)

### Step 3: Update Article Recap Page
- File: `app/articles/recap/{publication}/page.tsx`
- Add article entry to the articles array with title, description, topics, icon
- The recap page is already built — just add to the data array

### Step 4: Cross-Link Existing Pages
- Find existing compare/failure pages related to the article's topics
- Add references to new glossary terms in those pages
- Add the article URL to relevant ExogramBridge instances

### Step 5: Verify
- `npm run build` (must pass with all new glossary pages generated)
- Check that new glossary slugs resolve (877+ → new count)
- `git commit` + `git push`
- Ping IndexNow + Google Indexing API for new URLs

## Quality Checks
- Every definition uses operational language, not academic language
- Every term includes at least 2 FAQs targeting real search queries
- Every term cross-links to a diagnostic tool (PDI, AUEB, APER)
- Every term references the source article in relatedArticles
- No orphan terms — every new term connects to ≥3 existing terms

## Example: May 2026 Compound
**BuiltIn: "Your AI Agent Needs a Kill Switch"**
→ agentic-kill-switch (pillar), admissibility-gate, memory-poisoning

**CIO.com: "Your Claude API Bill Is Higher Than Your Revenue"**  
→ model-task-mismatch (pillar), api-cost-governance, tiered-inference-routing
