---
name: deploy_executive_compression_layer
priority: high
repository_binding: RichardEwing.io
triggers:
  - page_conversion_audit
  - executive_ux_review
  - 4_second_rule_failure

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/doctrine.md

required_tools:
  - view_file
  - replace_file_content
  - write_to_file

output_contract:
  type: json
  schema: executive_compression_v1

mutation_scope:
  - /environment/app_router

escalation_policy:
  halt_on_conflict: false
---

# Procedure: Executive Compression Layer Deployment

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. **Identify Target Page:** Determine which page needs the executive compression layer. Priority pages: `/principal`, `/methodology`, `/doctrine`, `/runtime-architecture`, `/exogram`, `/advisory`.
2. **Extract the 4-Quadrant Summary:**
   - **What Breaks:** The specific failure mode or operational risk the page addresses.
   - **What It Costs:** The dollar amount, percentage, or metric that quantifies the damage.
   - **Root Cause:** The structural reason this failure occurs (not symptoms, but causes).
   - **The Fix:** A link to the tool, framework, or service that resolves it.
3. **Render Using ExecutiveSummaryBox Component:** Import `ExecutiveSummaryBox` from `@/components/ExecutiveSummaryBox` and place it immediately after the page's opening `<main>` or hero section, before any long-form content.
4. **Apply the 4-Second Rule:** The box must convey the full value proposition within 4 seconds of scanning. If any quadrant requires more than 12 words, compress further.
5. **Validate:** Ensure the component renders correctly, links resolve, and the CTA targets a valid page.
6. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved.
