---
name: audit_conversion_funnel
priority: medium
repository_binding: RichardEwing.io
triggers:
  - conversion_rate_review
  - bounce_rate_analysis
  - homepage_overhaul

required_goal_context:
  - /goal/objectives.md

required_identity_context:
  - /system/identity.md

required_tools:
  - list_dir
  - grep_search
  - view_file
  - search_web

output_contract:
  type: json
  schema: conversion_funnel_audit_v1

mutation_scope:
  - /active_state/research

escalation_policy:
  halt_on_conflict: false
---

# Procedure: Conversion Funnel Audit

0. **Proprietary Binding Check:** Explicitly verify that this execution is operating strictly within the `RichardEwing.io` ecosystem. If the context is generic or belongs to another domain, HALT execution immediately.
1. **Map All Entry Points:** Identify the top traffic entry pages by category:
   - Homepage (`/`)
   - Glossary pages (`/glossary/*`)
   - Compare pages (`/compare/*`)
   - Blog pages (`/blog/*`)
   - Tool pages (`/tools/*`)
   - Persona pages (`/for-ctos`, `/for-boards`, `/for-investors`)
2. **Trace Path to First CTA:** For each entry point, follow the user journey:
   - What is the first CTA visible above the fold?
   - How many clicks to reach a conversion event (tool usage, newsletter signup, advisory booking)?
   - What is the scroll depth required to see the first CTA?
3. **Identify Drop-Off Points:** Look for pages with:
   - No CTA above the fold
   - Educational content without commercial compression
   - Dead-end pages with no outbound internal links
   - Missing ExecutiveSummaryBox components
4. **Score Each Path:** Rate each funnel path (1-10) on:
   - Clarity (4-second rule compliance)
   - Compression (doctrine vs. operational urgency)
   - Commercial intent (does it lead to revenue?)
5. **Propose Fixes:** For each drop-off point, recommend:
   - Adding an ExecutiveSummaryBox (trigger `deploy_executive_compression_layer`)
   - Adding inline CTAs
   - Adding cross-links to tools or advisory
6. **Validation Check:** Double and triple-check the entire audit for completeness. Ensure every major page category has been evaluated.
