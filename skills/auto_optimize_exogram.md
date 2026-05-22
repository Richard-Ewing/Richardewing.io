---
name: auto_optimize_exogram
priority: continuous
repository_binding: RichardEwing.io
triggers:
  - task_completion
  - repetitive_pattern_detected
  - workflow_inefficiency_identified

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/identity.md

required_tools:
  - write_to_file
  - multi_replace_file_content

output_contract:
  type: json
  schema: exogram_optimization_v1

mutation_scope:
  - /skills
  - /tools

escalation_policy:
  halt_on_conflict: false
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. **Repetition Detection:** Upon completing any task, check if a similar workflow has been executed multiple times.
2. **Proprietary Boundary Check:** BEFORE creating a skill, determine if the workflow is **strictly specific to the RichardEwing.io platform** (e.g., specific SEO routing logic, curriculum architecture, or SECS governance). **PURGE AND IGNORE** any repetitive tasks that are generic programming actions (e.g., writing a standard React component or generic CSS).
3. **Skill Generation:** If a proprietary RichardEwing.io pattern is detected, autonomously synthesize the context, procedural steps, and validation requirements into a new skill file adhering to the 4-Layer Syntax. Write this new file to the `/skills` directory.
3. **Skill Iteration:** If executing an *existing* skill reveals a missing edge-case, an outdated tool invocation, or a more optimal pathway, autonomously update the target `.md` file in the `/skills` directory to reflect the superior process.
4. **Tool Creation:** If a repetitive terminal command or external script is used frequently, generate the corresponding YAML contract in the `/tools` directory.
5. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
