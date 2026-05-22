---
name: conduct_market_painpoint_analysis
priority: medium
repository_binding: RichardEwing.io
triggers:
  - new_content_strategy
  - competitor_analysis_request

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md

required_tools:
  - search_web
  - write_to_file

output_contract:
  type: json
  schema: market_painpoints_v1

mutation_scope:
  - /environment/active_state/research

escalation_policy:
  halt_on_conflict: false
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Search Reddit communities (r/SaaS, r/Entrepreneur, r/AI), competitor reviews (G2, Trustpilot), and software forums for specific terms related to the domain.
2. Extract the highest-upvoted complaints, failure modes, and user frustrations.
3. Synthesize the exact language and terminology real users utilize to describe these pain points.
4. Audit the existing site content to determine if these specific pain points are being addressed using the extracted terminology.
5. Map the findings into the Hub-and-Spoke SEO matrix, defining exactly where this language should be injected (Top, Middle, or Bottom funnel).
6. Provide an actionable injection plan to monetize the identified gaps via advisory services or paid skills.
7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
