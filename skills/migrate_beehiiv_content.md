---
name: migrate_beehiiv_content
priority: high
repository_binding: RichardEwing.io
triggers:
  - new_article_published
  - content_migration_request

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md

required_tools:
  - run_command
  - replace_file_content

output_contract:
  type: json
  schema: beehiiv_migration_v1

mutation_scope:
  - /environment/app/blog
  - /environment/assets/images

escalation_policy:
  halt_on_conflict: true
---

# Procedure

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. Fetch or receive the Beehiiv article content/markdown.
2. Translate the proprietary Beehiiv markdown/HTML into standard Next.js React components and Tailwind typography (`prose prose-zinc`).
3. Strip out broken relative image links and replace them with absolute hosted assets or generate placeholders if necessary.
4. Ensure internal routing correctly points to the new `/blog/` or `/briefings/` canonical paths.
5. Inject the appropriate SEO frontmatter (Title, Description, Canonical URL).
6. Commit the markdown/MDX file to the repository.
7. Execute the `execute_indexnow_ping` skill to enforce immediate indexation of the new asset.
8. **Validation Check:** Double and triple-check the entire operation for absolute accuracy, comprehensiveness, and completeness before marking the execution as resolved. Ensure no edge cases or unhandled states remain.
