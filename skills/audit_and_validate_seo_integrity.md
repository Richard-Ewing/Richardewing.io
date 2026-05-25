---
name: audit_and_validate_seo_integrity
priority: critical
repository_binding: RichardEwing.io
triggers:
  - pre_deployment
  - gsc_alert
  - seo_audit

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md
  - /system/doctrine.md

required_tools:
  - run_command
  - grep_search
  - view_file

output_contract:
  type: json
  schema: seo_audit_report_v1

mutation_scope:
  - /check_canonical.ts
  - /app/sitemap.ts

escalation_policy:
  halt_on_conflict: false
---

# Procedure

0. **Proprietary Binding Check:** Verify that execution is strictly in the `RichardEwing.io` repository. Halt if mismatched.
1. **Module Registry Check:** Run `npx tsx check_canonical.ts` to scan the active curriculum modules registry for ID collision groupings. Ensure no two unique track keys reference the same underlying module object.
2. **Schema-Canonical Verification:** Search curriculum page templates (`[...slug]/page.tsx`) to confirm that the `StructuredData` course schema URL exactly matches the page's canonical URL prefix (e.g. they both contain `/vault/`).
3. **Programmatic Comparison Coverage:** Scan the routing logic in `app/compare/[slug]/page.tsx` to verify that all programmatic SEO comparison slugs from `pseo-matrix.json` are fully supported, return unique meta-descriptions, and that completely invalid comparison slugs result in a true Next.js `notFound()` 404 response.
4. **Sitemap Hygiene:** Verify that the sitemap (`app/sitemap.ts`) only exports active, non-legacy page routes. Ensure dead routes (such as legacy DevOps tracks) are fully pruned.
5. **Compilation Verification:** Execute `npm run build` to confirm compilation is clean and all pages compile without warnings or static-generation errors.
6. **Reporting:** Generate a summary of findings to identify any potential indexing regressions.
