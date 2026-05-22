---
name: optimize_meta_ctr
priority: critical
repository_binding: RichardEwing.io
triggers:
  - gsc_impression_review
  - low_ctr_detection
  - meta_tag_audit

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md
  - /system/doctrine.md

required_tools:
  - search_web
  - grep_search
  - view_file
  - replace_file_content

output_contract:
  type: json
  schema: meta_ctr_optimization_v1

mutation_scope:
  - /environment/app_router

escalation_policy:
  halt_on_conflict: false
---

# Procedure: Meta/Title CTR Optimization

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. **Extract Target URLs:** Identify high-impression, low-click URLs from GSC data provided by the user, or proactively audit all page-level `export const metadata` blocks across the `/app` directory.
2. **Categorize Intent:** For each URL, classify the search intent as Informational (glossary, blog), Navigational (principal, about), or Commercial (tools, advisory, pricing).
3. **Apply Pain-Language Pattern:** Rewrite each title and description using this formula:
   - **Title (≤60 chars):** `[Operational Fear or Result] | [Financial Consequence or Benefit]`
   - **Description (≤155 chars):** `[Hard stat or incident] + [What breaks] + [What the page delivers] + [Why it matters to their P&L]`
4. **Validate Constraints:**
   - Title must be ≤ 60 characters (check with `title.length`)
   - Description must be ≤ 155 characters (check with `description.length`)
   - OpenGraph title and description must match or complement the meta values
   - No duplicate titles across the site
5. **Deploy Changes:** Update the `metadata` export in each target page file.
6. **Ping Search Engines:** Automatically trigger `execute_indexnow_ping` skill and run `node ping-google.js <url>` for each modified page.
7. **Validation Check:** Double and triple-check all modified metadata for accuracy, character count compliance, and completeness before marking as resolved.
