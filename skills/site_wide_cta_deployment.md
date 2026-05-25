---
name: site_wide_cta_deployment
priority: critical
repository_binding: RichardEwing.io
triggers:
  - cta_deployment_request
  - layout_restructuring
  - conversion_funnel_audit

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md
  - /system/doctrine.md

required_tools:
  - grep_search
  - view_file
  - replace_file_content
  - run_command

output_contract:
  type: json
  schema: cta_deployment_v1

mutation_scope:
  - /environment/app_router
  - /environment/components

escalation_policy:
  halt_on_conflict: true
---

# Procedure: Site-Wide CTA Deployment

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. **Identify Pages Lacking Conversion Channels:** Proactively audit all page-level routing components using a custom audit script (e.g. `audit_all_pages.js`) to find templates or static marketing pages lacking references to `/advisory`, `/api/buy`, or the global `AdvisoryCTA` component.
2. **Design Context-Aware Component Variants:** Craft the `AdvisoryCTA` component (in `app/components/AdvisoryCTA.tsx`) to support distinct messaging options depending on page intent:
   - **`tool-result`**: Used for calculators to trigger rapid-fire diagnostic purchases (e.g. $450 Gut-Check, $2,500 Insolvency Audit).
   - **`compare`**: Used for comparison landing pages to offer rapid advisory evaluation options.
   - **`educational`**: Used for informational layouts (e.g. glossary terms, blog summaries) to bridge learners to free tools first.
   - **`industry`**: Used for industry verticals to offer targeted bespoke corporate evaluations.
3. **Execute Template-Level Injections:**
   - Open dynamic routing files such as `app/compare/[slug]/page.tsx` and `app/glossary/[slug]/page.tsx`.
   - Import and inject `<AdvisoryCTA>` near the bottom of the layout, right before the global footer, capturing hundreds of pages in a single mutation.
4. **Deploy Static Page Injections:**
   - Map remaining static pages in `app/tools/*/page.tsx` and `app/industries/*/page.tsx`.
   - Update layouts programmatically (using node-based batch scripts to avoid manual syntax error injection) to place matching variants on pages.
5. **Verify Compilation Integrity:**
   - Execute `npm run build` to confirm compilation is clean and all pages compile without warnings or static-generation errors.
6. **Conversion Validation:** Verify that CTAs display properly on all target viewports, link directly to the correct pricing/advisory endpoints, and contain no broken routing loops.
