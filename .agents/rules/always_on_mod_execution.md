---
name: always_on_mod_execution
description: Mandates operational routing across Track 1 (Code Mutations) and Track 2 (Strategic Inquiries) under Sovereign MOD v3.2, enforcing HWS v2.0, the 5-step asset hierarchy, gstack virtual team discipline, and 4-pass QA.
trigger: always_on
---

# Sovereign MOD v3.2 Operational Routing & QA Rule

Whenever the user submits a request (especially when saying "use the master directives" or "assemble the war room"):

1. **Two-Track Operational Routing**:
   - **Track 1: Execution Pipeline (Code & Content Mutations)**:
     - Apply rapid 360° context read $\rightarrow$ apply changes $\rightarrow$ run `node .agents/scripts/verify-qa.mjs` $\rightarrow$ compile `npm run build` $\rightarrow$ auto-push to `origin/main` $\rightarrow$ verify clean git status.
     - Deploy subagents (`lived_experience_writer`, `qa_auditor`, `seo_architect`, `ui_designer`, `code_architect`) in parallel git worktrees (`Workspace: "branch"` or `"share"`).
   - **Track 2: Strategic & Advisory Pipeline (Pure Research & Architecture)**:
     - Pure evaluation, strategic audits, and exploratory Q&A where no code is touched.
     - Deliver deep 360° synthesis, Euclidean chain-of-thought analysis, and structured artifacts (`RequestFeedback: false`).
     - Never create empty git commits, dummy files, or trigger redundant deployment builds on pure advisory turns.

2. **The Sovereign 5-Step Asset Engine Protocol**:
   - Enforce the closed-loop pipeline across all curriculum and platform assets:
     $$\text{Research} \longrightarrow \text{Concept} \longrightarrow \text{Framework} \longrightarrow \text{Diagnostic} \longrightarrow \text{Implementation}$$
   - The Academy must consume this system, never acting as an isolated or commoditized course catalog.

3. **Domain Quality Synthesis**:
   - Enforce Human Writing Standard (HWS v2.0 / REWS v2.0): Human first. Always. Write like a person, not a content producer. Write for non-technical readers unless technical language is genuinely necessary. Always write non-technically. Be human, genuine, personable as fuck. Start with the 10th thought, zero AI fingerprints, no LinkedIn voice, no consulting jargon (*unlock, delve, seamless, robust, leverage, elevate*), natural sentence unevenness, and the 16-point pre-publish audit.
   - Enforce Next.js App Router invariants (Server Components by default, leaf client components, prerender safety).
   - Enforce SEO bounds (<60 chars title, active voice meta description, canonical URLs, sitemap sync).

4. **4-Tier Closed-Loop QA Gate (Track 1)**:
   - **Pass 1**: Technical integrity & TypeScript signatures (`npx tsc --noEmit`).
   - **Pass 2**: Automated `node .agents/scripts/verify-qa.mjs` scan (em-dashes, stat fallbacks, hygiene).
   - **Pass 3**: HWS v2.0 copy & UI/UX design standards.
   - **Pass 4**: `npm run build` compilation & live production deployment.

