---
name: always_on_mod_execution
description: Mandates operational routing across Mode 1, Mode 2, and Mode 3 under Sovereign MOD v3.0.
trigger: always_on
---

# Sovereign MOD v3.0 Operational Routing Rule

Whenever the user submits a request (especially when saying "use the master directives"):

1. **Classify Operational Mode**:
   - **Mode 1 (Direct Query)**: Answer directly using REWS v1.0 principles.
   - **Mode 2 (Targeted Refinement)**: Execute rapid 360° context read -> edit -> run `node .agents/scripts/verify-qa.mjs` -> build -> auto-push to main.
   - **Mode 3 (Full System Execution)**: Create `implementation_plan.md` artifact, deploy 5-agent War Room swarm (`lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, `code_architect`) in isolated worktrees (`Workspace: "branch"`), enforce 4-pass QA, and auto-push to main.

2. **Domain Quality Synthesis**:
   - Enforce REWS v1.0 copywriting (no consulting jargon: *unlock, delve, seamless, robust, leverage, elevate*).
   - Enforce Next.js App Router invariants (Server Components by default, leaf client components, prerender safety).
   - Enforce SEO bounds (<60 chars title, active voice meta description, canonical URLs, sitemap sync).
