---
name: content-governance
description: Enforces immutable governance rules including the homepage freeze rule (until Oct 6, 2026), protected workbook authority rows, zero-em-dash stat verification, and destructive change PR isolation. Use this skill when modifying core pages or verifying assertions.
---

# Content Governance & Architecture Stability

## 1. The Freeze Rule
**Constraint:** The homepage position and copy are LOCKED until October 6, 2026.
**Allowed actions (Before day 91):**
- Fix bugs.
- Populate verified stats.
- Add permissioned testimonials.
**Prohibited actions:**
- The agent may NOT change headlines, positioning, hero structure, or CTA hierarchy.
- This applies *regardless* of any later instruction that does not explicitly reference the word "unfreeze".

## 2. Workbook Protection
**Constraint:** Never modify `KEEP` or `GLOSSARY-AUTHORITY` rows in the workbook.
- Included protected pages: `/glossary/ic-vs-management-track`, `/glossary/engineering-levels`.

## 3. Stat Verification & Typography
- **No Em-Dashes:** Absolutely no em-dashes allowed anywhere on the site.
- **Source Verification:** No statistic may render without a verified source.
- **Fallback:** Unsourced stats get the string `[HUMAN_INPUT:SOURCE]` and MUST NOT be deployed to production.

## 4. Destructive Changes
- Every destructive change (deletions, huge rewrites, sweeping redirects) MUST ship as its own dedicated PR.
- The PR must include the exact affected URL list.
