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
2. For Redirect Chains/Loops: Inspect `next.config.ts` for overlapping wildcard fallbacks (e.g., `/:slug*` matching root segments). 
3. Remove or tighten wildcards (e.g., use `/:slug+`) to break infinite loops.
4. For 404 Not Found Errors: Do NOT hardcode massive lists in `next.config.ts`.
5. Instead, locate the dynamic App Router page (e.g., `[...slug]/page.tsx`).
6. Replace `notFound()` invocations with `permanentRedirect('/parent-path')`.
7. Verify mutation eliminates the error without breaking valid active routes.
8. Commit validated mutation.
9. Automatically trigger `execute_indexnow_ping` skill upon completion.

10. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
