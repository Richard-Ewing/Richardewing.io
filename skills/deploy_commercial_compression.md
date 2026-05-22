---
name: deploy_commercial_compression
priority: critical
repository_binding: RichardEwing.io
triggers:
  - advisory_offering_creation
  - positioning_review

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/doctrine.md

required_tools:
  - replace_file_content

output_contract:
  type: json
  schema: commercial_compression_v1

mutation_scope:
  - /environment/app/advisory
  - /environment/app/system

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Analyze the raw feature, capability, or educational content being reviewed.
2. Perform "Commercial Compression": Reframe the concept from an educational standard into an enterprise-grade operational governance solution.
3. Strip generic descriptions. Replace them with high-ticket positioning language (e.g., "Root Failure Boxes", "Telemetry-driven positioning", "Explicit operational containment").
4. Highlight the exact, expensive, and repeatable failures the infrastructure solves (e.g., context rot, retry inflation, hallucinated execution).
5. Ensure the narrative clearly distinguishes between a "tool" (cheap) and "infrastructure/governance" (premium/enterprise).
6. Commit the narrative reframing to the relevant UI components, sales pages, or advisory modules.
7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
