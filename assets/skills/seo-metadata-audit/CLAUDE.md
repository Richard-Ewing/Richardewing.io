# SEO Metadata Audit — Governance Skill

> **Skill Type**: Environment Governance (Layer 4)
> **Version**: 1.0.0
> **Author**: Richard Ewing Advisory
> **Purpose**: Automated SEO metadata auditing and optimization for Next.js applications

---

## Activation Triggers

This skill activates when ANY of the following conditions are detected:

1. **New page created** — A new `page.tsx` or `layout.tsx` file is added to `app/`
2. **Metadata modified** — An `export const metadata` block is changed
3. **Pre-deploy check** — Before `git push` or `npm run build`
4. **Manual audit** — User requests "audit SEO", "check metadata", or "optimize titles"
5. **GSC remediation** — User provides Google Search Console issues

---

## Governance Rules

### RULE 1: Character Limits (HARD BLOCK)
```
TITLE must be ≤ 60 characters
DESCRIPTION must be ≤ 155 characters
VIOLATION = BUILD BLOCK — do not commit or push
```

### RULE 2: Brand Separator (WARNING)
```
TITLE must contain at least one separator: | — : -
Preferred format: "Topic Phrase | Richard Ewing" or "Topic | Subtopic | Ewing"
VIOLATION = WARNING — suggest fix before commit
```

### RULE 3: No Truncation (HARD BLOCK)
```
TITLE and DESCRIPTION must NOT end with "..."
TITLE and DESCRIPTION must NOT contain orphaned escaped quotes
VIOLATION = BUILD BLOCK — fix immediately
```

### RULE 4: Power Words (RECOMMENDATION)
```
High-CTR titles should include at least one power word:
  Free, Stop, Save, Avoid, Unlock, Hidden, Why, How, Secret, Calculate, 
  Exact, Proven, $, %, Number
VIOLATION = RECOMMENDATION — log for optimization queue
```

### RULE 5: Outcome-Focused Descriptions (RECOMMENDATION)
```
Descriptions should answer "what does the user GET?" not just "what is this page about?"
Anti-patterns:
  - "This page covers..." → BAD
  - "Learn about..." → BAD
  - "Calculate exactly when your AI investments break even." → GOOD
  - "Stop paying for massive context windows that destroy accuracy." → GOOD
VIOLATION = RECOMMENDATION — suggest rewrite
```

### RULE 6: No Missing Metadata (HARD BLOCK)
```
Every public page.tsx MUST have metadata (title + description).
Auth-gated pages (dashboard, checkout, sign-in) are EXEMPT.
Metadata may be in page.tsx OR parent layout.tsx — both are valid.
VIOLATION = BUILD BLOCK — add metadata before commit
```

---

## Workflow: Full Site Audit

When activated for a full audit, execute this sequence:

```
STEP 1: EXTRACT — Run extract_all_v2.js to pull all metadata with line numbers
STEP 2: SCORE — For each page, check Rules 1-6 and assign status:
         GOOD (passes all), HAS_ISSUES (fails hard rules), NEEDS_OPTIMIZATION (fails soft rules)
STEP 3: REPORT — Generate audit summary with counts and specific violations
STEP 4: FIX — For HARD BLOCK violations, generate replacement content
STEP 5: VERIFY — Run check_seo_limits.js and verify_no_ellipses.js
STEP 6: BUILD — Run npm run build to verify zero compilation errors
STEP 7: SHIP — git commit + git push
STEP 8: PING — Run node ping-all.js (IndexNow) to notify Bing
```

---

## Workflow: New Page Created

When a new page.tsx is created:

```
STEP 1: CHECK — Does the file have export const metadata?
STEP 2: If NO — Check parent layout.tsx for metadata
STEP 3: If STILL NO — Generate metadata following Rules 1-5
STEP 4: VALIDATE — Check character limits
STEP 5: NOTIFY — Remind developer to run IndexNow after deploy
```

---

## Workflow: GSC Remediation

When user provides Google Search Console issues:

```
STEP 1: PARSE — Extract URLs and issue types from user input
STEP 2: CATEGORIZE — Map each issue to remediation action:
         - "Duplicate canonical" → Fix canonical tags in alternates
         - "Not found (404)" → Add redirect in catchAll or remove from sitemap
         - "Crawled not indexed" → Improve metadata quality, add internal links
         - "Discovered not indexed" → Submit to IndexNow, improve content depth
STEP 3: EXECUTE — Apply fixes to source code
STEP 4: VERIFY — Build, commit, push
STEP 5: PING — IndexNow bulk submission
STEP 6: REPORT — Tell user which issues to validate in GSC
```

---

## Tool Scripts

### tools/seo-audit.js
Full metadata extraction and scoring across all pages.

### tools/seo-fix-limits.js
Finds and reports character limit violations.

### tools/seo-verify.js
Post-fix verification (no ellipsis, no orphaned quotes, all limits clean).

### tools/seo-ping.js
Bulk IndexNow submission using live sitemap.

---

## SEO Character Limit Reference

| Element | Google Limit | Safe Target | Our Rule |
|---|---|---|---|
| Title tag | ~60 chars | 50-60 | ≤ 60 |
| Meta description | ~155 chars | 120-155 | ≤ 155 |
| H1 tag | No hard limit | Under 70 | Recommendation |
| URL slug | No hard limit | Under 75 | Recommendation |
| Open Graph title | ~60 chars | 50-60 | Match title |
| Open Graph description | ~200 chars | 150-200 | Match description |

---

## CTR Optimization Playbook

### Title Formulas That Work
```
[Tool Name] | [Value Prop] | Ewing
[Topic]: [Outcome] | Richard Ewing  
[Question Word] [Topic] [Verb] [Consequence]
[Topic] vs [Topic] | [Differentiator]
```

### Description Formulas That Work
```
[Action verb] your [metric]. [Tool/Framework] [does what]. [Social proof or CTA].
[Pain point statement]. [Solution]. [Proof point].
[Number] [things] that [outcome]. [Tool name] [unique mechanism].
```

### Power Word Categories
- **Urgency**: Stop, Before, Now, Prevent, Avoid
- **Value**: Free, Save, Exact, Calculate, Proven
- **Authority**: $7,500, 500+, Enterprise, Board-Ready
- **Curiosity**: Hidden, Why, Secret, Behind, Truth
- **Specificity**: 18 Tracks, 430+ Terms, 4-Layer, 12 Questions

---

## Integration Points

| System | How We Integrate |
|---|---|
| Google Search Console | Manual — user provides issues, we remediate in code |
| Bing Webmaster Tools | Automated — IndexNow via `ping-all.js` |
| Vercel | Automated — deploys on git push to main |
| Next.js Sitemap | Automated — `app/sitemap.ts` generates XML from route list |
| LLMs (ChatGPT, Perplexity) | Passive — structured metadata improves citation quality |

---

## Financial Model

| Metric | Value |
|---|---|
| Time to audit (manual) | ~8 hours |
| Time to audit (with skill) | ~15 minutes |
| Average CTR improvement | 15-40% |
| Impression growth (post-optimization) | 2-4x over 4-8 weeks |
| Cost of IndexNow | Free |
| Cost of missed metadata | Lost impressions, lower rankings |

---

*This skill is part of the Antigravity Governance System. Deploy alongside runtime-governance and repository-drift-prevention for full coverage.*
