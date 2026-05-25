---
name: seo_redirect_alias_creation
priority: medium
repository_binding: RichardEwing.io
triggers:
  - redirect_setup_request
  - keyword_mapping_review
  - url_hygiene_audit

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md

required_tools:
  - view_file
  - replace_file_content
  - run_command

output_contract:
  type: json
  schema: seo_redirect_v1

mutation_scope:
  - /environment/next.config.ts

escalation_policy:
  halt_on_conflict: true
---

# Procedure: SEO Redirect Alias Creation

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. **Research Pain-Language Search Queries:** Audit GSC reports, search volume data, and competitor naming structures. Identify terms searchers actively query (e.g., "ai cost calculator", "technical debt calculator", "revenue per engineer") that differ from proprietary brand acronyms (e.g., "AUEB", "PDI", "APER").
2. **Map Sources to Specialized Tool Routes:** Match each pain-forward search query to the relevant, existing, content-rich tool diagnostic route on the site.
3. **Configure 301 Permanent Redirects:**
   - Open `next.config.ts` and navigate to the `redirects()` array block.
   - Insert new redirect objects with the pain-forward `source` URL and the target `destination` URL. Ensure `permanent: true` is set to pass maximum SEO link equity.
   - For comparisons, create corresponding aliases matching competitor structures (e.g., `/compare/technical-debt-calculator-vs-sonarqube` redirecting to `/compare/pdi-vs-sonarqube`).
4. **Prevent Loop Collisions:** Explicitly trace all redirects to ensure no self-referencing rules (where source equals destination) or multi-step circular paths are introduced.
5. **Validate Compilation & Routing:**
   - Run `npm run build` to ensure the syntax in `next.config.ts` is valid.
   - Test redirect rules locally or in verification steps to confirm headers return status `308` (Next.js default for permanent redirects) and resolve to the correct target page.
