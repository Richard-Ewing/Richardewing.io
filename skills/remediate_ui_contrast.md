---
name: remediate_ui_contrast
priority: high
repository_binding: RichardEwing.io
triggers:
  - ui_accessibility_failure
  - design_inconsistency
  - generic_color_usage

required_goal_context:
  - /goal/mission.md

required_identity_context:
  - /system/doctrine.md

required_tools:
  - grep_search
  - replace_file_content
  - multi_replace_file_content

output_contract:
  type: json
  schema: ui_remediation_v1

mutation_scope:
  - /environment/frontend/tailwind

escalation_policy:
  halt_on_conflict: false
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Scan the specified component for generic colors (e.g., plain red, blue, green), dark-mode text classes (`text-white`, `bg-zinc-900`), and low-contrast combinations.
2. Strip out all generic and dark-mode utilities.
3. Inject the canonical high-contrast enterprise light palette:
   - Backgrounds: `bg-white`, `bg-zinc-50`, `bg-cyan-50/10`
   - Primary Text: `text-zinc-950 font-bold` or `text-zinc-900`
   - Borders: `border-zinc-400` or `border-cyan-200`
   - Accents: `cyan-500`, `violet-500`, `emerald-500` gradients.
4. Replace browser default typography with standard `font-grotesk` for headings and `font-mono` for metadata.
5. Validate visual depth using glassmorphism borders and micro-animations.
6. Commit the UI mutation.

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
