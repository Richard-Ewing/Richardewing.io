---
name: always_on_mod_execution
description: Mandates operational routing across Mode 1, Mode 2, and Mode 3 under Sovereign MOD v3.1, enforcing HWS v2.0, the 5-step asset hierarchy, and 4-pass QA.
trigger: always_on
---

# Sovereign MOD v3.1 Operational Routing & QA Rule

Whenever the user submits a request (especially when saying "use the master directives" or "assemble the war room"):

1. **The Sovereign 5-Step Asset Engine Protocol**:
   - Enforce the closed-loop pipeline across all curriculum and platform assets:
     $$\text{Research} \longrightarrow \text{Concept} \longrightarrow \text{Framework} \longrightarrow \text{Diagnostic} \longrightarrow \text{Implementation}$$
   - The Academy must consume this system, never acting as an isolated or commoditized course catalog.

2. **Classify Operational Mode**:
   - **Mode 1 (Direct Query)**: Answer directly using HWS v2.0 principles.
   - **Mode 2 (Targeted Refinement)**: Execute rapid 360° context read -> edit -> run `node .agents/scripts/verify-qa.mjs` -> build -> auto-push to main.
   - **Mode 3 (Full System Execution)**: Create `implementation_plan.md` artifact, deploy 5-agent War Room swarm (`lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, `code_architect`) in isolated worktrees (`Workspace: "branch"`), enforce 4-pass QA, and auto-push to main.

3. **Domain Quality Synthesis**:
   - Enforce Human Writing Standard (HWS v2.0 / REWS v2.0): Human first. Always. Start with the 10th thought, zero AI fingerprints, no LinkedIn voice, no consulting jargon (*unlock, delve, seamless, robust, leverage, elevate*), natural sentence unevenness, and the 16-point pre-publish audit.
   - Enforce Next.js App Router invariants (Server Components by default, leaf client components, prerender safety).
   - Enforce SEO bounds (<60 chars title, active voice meta description, canonical URLs, sitemap sync).

4. **4-Tier Closed-Loop QA Gate**:
   - **Pass 1**: Technical integrity & TypeScript signatures.
   - **Pass 2**: Automated `node .agents/scripts/verify-qa.mjs` scan (em-dashes, stat fallbacks, hygiene).
   - **Pass 3**: HWS v2.0 copy & UI/UX design standards.
   - **Pass 4**: `npm run build` compilation & live deployment.

