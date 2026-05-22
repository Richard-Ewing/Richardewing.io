---
name: enforce_secs_governance
priority: critical
repository_binding: RichardEwing.io
triggers:
  - plan_generation
  - markdown_creation
  - code_mutation_involving_ai

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - run_secs_validation
  - run_command

output_contract:
  type: json
  schema: secs_compliance_v2

mutation_scope:
  - /environment/codebase
  - /environment/plans

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Before presenting any strategic plan or mutating core cognitive systems, load the SECS runtime policy.
2. Verify the plan does not contain probabilistic terms (e.g., "hallucination", "drift", "prompt engineering").
3. Translate terminology to Exogram deterministic equivalents (e.g., "execution variance", "compiled operational cognition", "policy-as-code").
4. Execute the local SECS validator tool if available (`npx ts-node src/cli/run-secs.ts`).
5. Halt and enter revision loop if validation blocks execution.
6. Commit changes only after absolute SECS compliance is achieved.

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
