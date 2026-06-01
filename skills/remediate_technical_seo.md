---
name: remediate_technical_seo
priority: critical
repository_binding: RichardEwing.io
triggers:
  - gsc_validation_failure
  - ahrefs_404_report
  - site_audit_request

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md
  - /system/doctrine.md

required_tools:
  - list_dir
  - grep_search
  - view_file
  - replace_file_content

output_contract:
  type: json
  schema: seo_remediation_v1

mutation_scope:
  - /environment/next.config.ts
  - /environment/app_router

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Load routing graph and error telemetry (GSC / Ahrefs data).
2. **Circular Redirect and Loop Prevention:** Inspect `next.config.ts` to ensure no two redirect entries cross-reference each other (e.g. `/about` -> `/principal` and `/principal` -> `/about`), which causes infinite loops. Remove any duplicate or loop-causing configurations.
3. **Internal Links to Redirects:** Ensure internal database definitions (like articles in `data.ts`) do not use `legacyUrl` pointing to old redirected paths. Link directly to the final canonical URL.
4. **Sitemap Hygiene:** Verify `app/sitemap.ts` does not contain redirected paths (like `/principal`). Keep it synchronized with active navigation routes (like `/about`). Prune programmatic matrix/SEO pages that trigger duplicate/thin content indexing issues from the sitemap.
5. **Crawl Control (Index/Noindex):** For programmatic SEO or dynamic page parameters (like comparisons), ensure only designated static routes are indexed, and apply robots `noindex, follow` tags to all other templated dynamic routes.
6. **Module ID and Path Consistency:** Ensure curriculum module IDs are clean and map consistently (Track 5 uses `5-x`, Track 6 uses `6-x`, Track 11 uses `11-x`). Ensure the file loader resolves both dash and dot naming formats (`x-y.json` vs `x.y.json`) as fallbacks.
7. **Paygate Security and Structured Data:** Verify that `hasAccess` is explicitly passed to client-side steppers to prevent paywall bypass. Inject Google-compliant structured data for gated educational pages indicating `isAccessibleForFree: "False"` with the appropriate CSS selector `.ai-content` to prevent "Crawled - currently not indexed" thin content flags.
8. Verify all changes compile successfully by running `npm run build` and checking console outputs.
9. Automatically trigger `execute_indexnow_ping` skill upon completion.

10. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
