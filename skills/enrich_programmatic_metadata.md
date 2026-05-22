---
name: enrich_programmatic_metadata
priority: medium
repository_binding: RichardEwing.io
triggers:
  - new_mdx_content
  - glossary_term_addition
  - page_creation

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md

required_tools:
  - replace_file_content

output_contract:
  type: json
  schema: structured_data_v1

mutation_scope:
  - /environment/metadata
  - /environment/json_ld

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Identify the core entity being published (Skill, Term, Curriculum Track, Failure Mode).
2. Extract context and define canonical title, description, and related terms.
3. Inject rigorous Schema.org / JSON-LD markup directly into the React component or MDX frontmatter.
4. Populate the Hub-and-Spoke navigation matrix by linking to related programmatic pages.
5. Ensure semantic purity: No placeholder text, and strict adherence to the existing Exogram ontology.
6. Commit validated metadata mutation.

7. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
