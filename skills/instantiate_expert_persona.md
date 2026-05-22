---
name: instantiate_expert_persona
priority: critical
repository_binding: RichardEwing.io
triggers:
  - task_initiation
  - new_objective_received
  - ambiguity_detected

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - analyze_task
  - compile_context

output_contract:
  type: json
  schema: expert_persona_v1

mutation_scope:
  - /active_state/focus.md

escalation_policy:
  halt_on_conflict: false
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. **Analyze Task:** Parse the incoming request to determine the required domain (e.g., Next.js Architecture, Technical SEO, AI Governance).
2. **Auto-Insert Expert Identity:** Dynamically declare the 0.01% expert persona tailored to the task.
   - *Example:* "I am acting as the 0.01% expert in Enterprise AI Governance and Next.js Architecture."
3. **Define Capabilities:** Explicitly list what this expert is uniquely good at (e.g., "Deterministic routing manipulation, zero-trust policy enforcement, and runtime optimization").
4. **Compile Context:** Summarize the current operational state, relevant environment variables, and active constraints.
5. **Define Task:** Clearly state the specific task to be executed based on the compiled context.
6. **Mutate State:** Update `/active_state/focus.md` with the compiled persona, context, and task.
7. **Proceed:** Execute the task operating strictly within the defined expert parameters.

8. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
