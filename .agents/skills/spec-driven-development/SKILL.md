---
name: spec-driven-development
description: Autonomous engineering discipline combining Addy Osmani's spec-driven development, Diego Arias's AI-SDLC (GitHub Spec Kit standard), Karpathy empirical red/green test probes, and Chris Nevin AI-generated Architecture Decision Records (ADRs). Enforces strict requirement contracts, explicit out-of-scope boundaries (blast radius guards), and error recovery protocols before executing code mutations.
---

# Autonomous Engineering Discipline & Spec-Driven Development (AI-SDLC)

**Directive**: Sovereign Master Operating Directive (MOD v4.0)  
**Origin Discipline**: Addy Osmani Agent Skills (`addyosmani/agent-skills`), Diego Arias AI-SDLC (GitHub Spec Kit), Karpathy Empirical Invariants & Chris Nevin ADR Protocol  
**Scope**: All autonomous coding workflows, structural refactors, and diagnostic tool development across the entire workspace.

---

## 1. The Core Philosophy: Death of Vibe Coding

Autonomous agents frequently fail through "hallucination debt": writing optimistic code without verifying initial conditions, assuming APIs exist, entering recursive retry loops when unexpected errors emerge, and forcing the human user to micromanage syntax.

In this workspace, **vibe coding is strictly prohibited**. 

### The Founder-Agent Division of Labor
1. **The User (Richard) Is the Founder, CEO, and Product Visionary**:
   - The user provides high-level business goals, customer pain points, commercial priorities, and desired user outcomes.
   - The user NEVER needs to write low-level technical specifications, component architectures, CSS flexbox rules, or debugging instructions.
2. **The AI Agent Is the Staff Principal Architect & Lead Engineer**:
   - The agent takes high-level user intent and autonomously translates it into a rigorous Spec-Driven contract before touching code.
   - The agent is responsible for architecture, type safety, edge case handling, constraint validation, and deterministic execution.

---

## 2. The 5-Phase AI-SDLC Execution Lifecycle

Every feature creation, bug fix, or refactor turn must execute this sequence:

$$\text{1. Constitution Check} \longrightarrow \text{2. Specify} \longrightarrow \text{3. Plan} \longrightarrow \text{4. Tasks} \longrightarrow \text{5. Implement \& Converge}$$

### Phase 1: Constitution Check (Inviolable Laws)
Never write production code until verifying adherence to the workspace constitution:
1. **Zero Em-Dashes**: Absolute prohibition of em-dash characters (`\u2013`, `\u2014`). Use colons, parentheses, or periods.
2. **Cloudflare Workers V8 Memory Isolates**: Zero Node.js POSIX assumptions, prerender safety (`typeof window !== 'undefined'`).
3. **Next.js 16 App Router**: Server Components by default; `"use client"` leaf isolation.
4. **Human Writing Standard (HWS v2.0 / REWS v2.0)**: Human first, grounded, non-technical, zero banned AI buzzwords.
5. **Absolute Secret Protection**: Zero secret keys or credentials committed to git.

### Phase 2: Specify (`specify`)
Draft the formal feature contract defining:
* **User Story & Business Intent**: Why this exists and who it serves.
* **Acceptance Criteria**: Clear, unambiguous checkbox checklist.
* **Explicit Out-of-Scope Boundaries (The Blast Radius Guard)**: Defining strictly what the agent is FORBIDDEN from touching, modifying, or refactoring.
* **Edge Cases & Failure Modes**: Network drops, missing query parameters, mobile viewports, unauthenticated sessions.

### Phase 3: Plan (`plan`)
Detail the architectural execution:
* Component tree, data contracts, state flow, and URL parameters.
* Exact file targets and dependency checks in `package.json`.
* **Architecture Decision Record (ADR) Check**: If the task restructures dependencies, alters state management, introduces external APIs, or modifies runtime hosting boundaries, draft or update an Architecture Decision Record in `docs/adr/` following the Chris Nevin standard (`# ADR-<4 Digit Number>: <Name>`).

### Phase 4: Tasks (`tasks`)
Decompose the plan into granular, checkable, testable bite-sized units.

### Phase 5: Implement & Converge (`implement` & `converge`)
* Execute task-by-task with atomic precision.
* Karpathy red/green probes in `.scratch/` where necessary.
* Run mechanical QA verification (`node .agents/scripts/verify-qa.mjs`).
* Full build (`npm run build`) and live Cloudflare deployment (`npx wrangler deploy`).
* Validate against the original Acceptance Criteria to ensure zero-defect convergence.

---

## 3. Karpathy Empirical Test Probes (Red/Green Protocol)

Before performing complex refactors or debugging mysterious failures:
1. **The Red Probe**: Construct a minimal reproduction script in `.scratch/` (e.g. `.scratch/probe_reproduce.mjs`). Run it and confirm it fails for the expected reason (Red).
2. **The Atomic Fix**: Apply the precise structural change in the codebase.
3. **The Green Probe**: Rerun the script in `.scratch/` and confirm it passes (Green).
4. **Hygiene Clean-Up**: Remove or persist the scratch probe cleanly; never leave loose debug files in the workspace root.

---

## 4. Systematic Debugging & Error Recovery Loop

When a build or test fails, autonomous agents often resort to "shotgun debugging": making arbitrary edits across unrelated files in hope that the error disappears.

Follow Addy Osmani's **Systematic Recovery Protocol**:
1. **Isolate the Failing Layer**: Determine whether the failure is a TypeScript compilation error, an SSR hydration mismatch, an unhandled promise rejection, or a linter violation.
2. **Read the Exact Stack Trace**: Trace the first failing file and line number. Do not make assumptions based on error summaries.
3. **One Mutation at a Time**: Change one variable, interface, or component boundary. Test immediately.
4. **Deterministic Re-verification**: Run the mechanical QA gate (`node .agents/scripts/verify-qa.mjs`) to prove no side-effects were introduced.
