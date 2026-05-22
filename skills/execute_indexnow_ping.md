---
name: execute_indexnow_ping
priority: high
repository_binding: RichardEwing.io
triggers:
  - post_seo_remediation
  - new_content_publication
  - route_structural_change

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/doctrine.md

required_tools:
  - ping_indexnow
  - run_command

output_contract:
  type: json
  schema: telemetry_ping_v1

mutation_scope:
  - /environment/external/indexnow
  - /environment/external/bing

escalation_policy:
  halt_on_conflict: false
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Detect condition requiring search indexing update.
2. Ensure no Next.js build errors exist before pinging.
3. Locate the correct ping script inside the workspace (usually `node ping-all.js` or `node scripts/ping-indexnow.js`).
4. Execute the command via terminal tool.
5. Verify a `STATUS: 200` response from the IndexNow mass bulk submission API.
6. Report success to the user, confirming telemetry sync is complete.

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
