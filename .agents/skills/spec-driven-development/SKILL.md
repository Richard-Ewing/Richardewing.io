---
name: spec-driven-development
description: Autonomous engineering discipline combining Addy Osmani's spec-driven development, Diego Arias's AI-SDLC (GitHub Spec Kit standard), Karpathy empirical red/green test probes, Chris Nevin AI-generated Architecture Decision Records (ADRs), and REA + Ghidra empirical reverse-engineering ground truth. Translates high-level founder vibe prompts into deterministic, production-grade specifications and implementations without vibe-coded debt.
---

# Autonomous Engineering Discipline & Spec-Driven Development (AI-SDLC)

**Directive**: Sovereign Master Operating Directive (MOD v4.0)  
**Origin Discipline**: Addy Osmani Agent Skills (`addyosmani/agent-skills`), Diego Arias AI-SDLC (GitHub Spec Kit), Karpathy Empirical Invariants, Chris Nevin ADR Protocol & REA + Ghidra Empirical Evidence Subsystem  
**Scope**: All autonomous coding workflows, structural refactors, diagnostic tool development, and binary/artifact reverse engineering across the entire workspace.

---

## 1. The Core Philosophy: Death of Vibe Coding & The Founder-Staff Contract

Autonomous agents frequently fail through "hallucination debt": writing optimistic code without verifying initial conditions, assuming APIs exist, producing superficial UI veneers that break on actual data, entering recursive retry loops when unexpected errors emerge, and forcing the human user to micromanage syntax.

In this workspace, **vibe coding is strictly prohibited**. 

### The Founder-Agent Division of Labor
1. **The User (Richard) Is the Founder, CEO, and Product Visionary**:
   - The user provides high-level business goals, customer pain points, commercial priorities, strategic instincts, and desired user outcomes in natural, conversational language ("vibe prompts").
   - The user NEVER needs to write low-level technical specifications, component architectures, CSS flexbox rules, SQL schemas, or debugging instructions.
2. **The AI Agent Is the Staff Principal Architect & Lead Engineer**:
   - The agent takes high-level user intent and autonomously translates it into a rigorous Spec-Driven contract before touching code.
   - The agent is responsible for architecture, type safety, edge case handling, constraint validation, and deterministic execution.
   - The agent NEVER returns "vibecoded" results: half-baked mockups, fragile hacks, unhandled promise rejections, or unverified guesswork.

---

## 2. The Vibe-to-Spec Translation Engine (The Founder-to-Staff Translator)

When Richard provides a conversational or high-level prompt, the agent must run the **Vibe-to-Spec Translation Engine** to bridge founder vision and production engineering:

```
[Founder Vibe Prompt] (Natural Language, Strategic Intent, Operational Frustration)
          │
          ▼
[Vibe-to-Spec Translation Engine]
 ├─ 1. Deduce Unspoken Invariants (State shape, mobile layout, auth, edge cases)
 ├─ 2. Identify Missing Constraints (Rate limits, error responses, hydration)
 ├─ 3. Set Blast Radius Guard (Strict out-of-scope boundaries)
 └─ 4. Gather Empirical Ground Truth (REA + Ghidra if binary/legacy target)
          │
          ▼
[Formal Spec-Driven Contract] (Specify -> Plan -> Tasks -> Implement -> Converge)
```

### The 4 Non-Negotiable Translation Rules:
1. **Deduce the Unspoken Invariants**: When Richard asks for a feature (e.g., "add an audit tool for executives"), deduce the implied operational reality: mobile responsiveness, accessibility, loading skeletons, network drop handling, URL state sharing, and export capabilities.
2. **Never Badger the Founder for Engineering Trivia**: Never ask the user questions like "Should this return HTTP 422 or 400?", "Should we use CSS grid or flexbox?", or "Which zod schema pattern do you prefer?". Make the optimal architectural decision, document it, and execute it.
3. **Blast Radius & Blast Shield Isolation**: Every synthesized specification must explicitly declare what the agent is **forbidden** from modifying. Never allow a new feature request to accidentally refactor global styles, mutate existing navigation shells, or alter working calculation algorithms.
4. **Empirical Ground Truth Over Guesswork**: Never assume how an external API, binary, library, or database works. Probe it empirically before writing code.

---

## 3. The 5-Phase AI-SDLC Execution Lifecycle

Every feature creation, bug fix, or refactor turn must execute this sequence:

$$\text{1. Constitution Check} \longrightarrow \text{2. Specify} \longrightarrow \text{3. Plan} \longrightarrow \text{4. Tasks} \longrightarrow \text{5. Implement \& Converge}$$

### Phase 1: Constitution Check (Inviolable Laws)
Never write production code until verifying adherence to the workspace constitution:
1. **Zero Em-Dashes**: Absolute prohibition of em-dash characters (`\u2013`, `\u2014`). Use colons, parentheses, double hyphens, or periods.
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

## 4. Empirical Binary Evidence & Reverse Engineering Subsystem (REA + Ghidra Engine)

When a task involves legacy binaries, compiled DLLs, Windows/Linux executables, Electron ASARs, third-party packages, or undocumented binary protocols, vibe coding is especially lethal. 

The agent connects to the native **REA (Reverse Engineer Anything)** MCP toolset backed by **Ghidra 12.1.4 Public Headless** (`D:\Tools\ghidra-12.1.4\ghidra_12.1.4_PUBLIC`) and OpenJDK 25 to establish empirical ground truth before drafting specifications:

```
[Compiled Binary / Package / Legacy DLL]
                  │
                  ▼
[REA + Ghidra Headless Bridge]
 ├─ `open_binary`: Import target into isolated analysis session
 ├─ `inspect_artifact` / `binary_overview`: Map headers, sections, dependencies
 ├─ `list_procedures` / `list_names`: Extract real symbols and exported entries
 ├─ `procedure_pseudo_code` / `analyze_function`: Decompile C pseudocode and ASTs
 └─ `build_call_path` / `procedure_references`: Map execution and call flows
                  │
                  ▼
[Phase 1: Clean-Room Specification (`specify`)]
 └─ Convert observations into clean-room TypeScript / Rust / Next.js contracts
                  │
                  ▼
[Phase 2: Reconstruction Obligation Ledger (`plan` & `tasks`)]
 └─ `build_reconstruction_obligation_ledger`: Ensure zero-omission task backlog
                  │
                  ▼
[Phase 3: Parity Convergence (`converge`)]
 └─ `verify_reconstruction`: Prove functional parity against observed evidence
```

### Clean-Room Reverse Engineering Rules:
1. **Never Guess an Internal Signature**: If a routine is compiled, run `procedure_pseudo_code` or `read_function_instructions` to discover the exact inputs, memory structures, and return types.
2. **Clean-Room Separation**: Decompiled pseudocode serves as evidentiary ground truth for behavioral contracts (inputs, outputs, edge cases, error codes). The reimplementation is written in clean, idiomatic modern code adhering to workspace conventions.
3. **Session Lifecycle Discipline**: Always run `close_binary` when analysis is finished to release ephemeral Ghidra project locks and memory allocations.

---

## 5. Karpathy Empirical Test Probes (Red/Green Protocol)

Before performing complex refactors or debugging mysterious failures:
1. **The Red Probe**: Construct a minimal reproduction script in `.scratch/` (e.g. `.scratch/probe_reproduce.mjs`). Run it and confirm it fails for the expected reason (Red).
2. **The Atomic Fix**: Apply the precise structural change in the codebase.
3. **The Green Probe**: Rerun the script in `.scratch/` and confirm it passes (Green).
4. **Hygiene Clean-Up**: Remove or persist the scratch probe cleanly; never leave loose debug files in the workspace root.

---

## 6. Systematic Debugging, 3-Strike Circuit Breaker & Defense-in-Depth (`obra/superpowers` Graft)

When a build, hydration check, or edge route fails, autonomous agents frequently fall into "shotgun debugging": making arbitrary edits across unrelated files hoping the symptom disappears.

Enforce this strict 4-part recovery and hardening discipline:
1. **Isolate the Failing Layer & Read Full Stack Traces**: Determine whether the failure is a TypeScript compilation error, an SSR hydration mismatch, a Cloudflare Workers V8 isolate constraint, or a schema violation. Trace the exact first failing file and line number before proposing any edit.
2. **One Mutation at a Time**: Change a single variable, interface, or component boundary per test run.
3. **The 3-Strike Architecture Circuit Breaker**: If **2 consecutive fix attempts** fail to resolve the issue, **STOP PATCHING IMMEDIATELY**. Attempt #3 is forbidden until you trace backward from the symptom to its original upstream data trigger (`root-cause-tracing`) and evaluate whether the component or route architecture itself is flawed.
4. **4-Layer Defense-in-Depth Validation**: Whenever fixing a data, auth, URL state, or payload bug, validate across all four boundaries so the entire bug class becomes structurally impossible:
   - *Layer 1 (Entry Gate)*: Client form / URL parameter (`nuqs`) normalization.
   - *Layer 2 (API Contract)*: Zod / strict type & byte-size validation at the Route Handler boundary (`<= 16KB` on public ingestion).
   - *Layer 3 (Runtime / Isolate Guard)*: Prerender safety (`typeof window !== 'undefined'`), fail-closed secret verification (`Boolean(secret && secret.length >= 16)`), and zero module-scope mutable request state.
   - *Layer 4 (Verification Probe)*: Mechanical regression check in `verify-qa.mjs` or `run-security-ledger-audit.mjs`.

---

## 7. Two-Stage Subagent Review & Diff-Aware Browser QA (`superpowers` + `gstack` Graft)

Whenever subagents complete implementation tasks or before claiming any UI/code task is complete (`verification-before-completion`):
1. **Gate A: Spec & Blast-Radius Compliance Review (Runs First)**:
   - Compare `git diff` directly against the `specify` Acceptance Criteria and Blast Radius Guard.
   - Confirm zero omitted requirements, zero gold-plated unrequested features, and zero mutations to out-of-scope files.
2. **Gate B: Code Craft, Security Ledger & HWS v2.0 Review (Runs Second)**:
   - Execute `node .agents/scripts/verify-qa.mjs`, `node .agents/scripts/audit-agent-skills.mjs` (when `.agents/` is touched), and `node .agents/scripts/run-security-ledger-audit.mjs --strict` (when `app/api/` or `middleware.ts` is touched).
3. **Diff-Aware Interactive Route Verification**:
   - Inspect `git diff --name-only` to identify touched calculators (`/reality-check`, `/tools/*`), forms, or `<ScorecardCheckoutDrawer />` mounts, verifying zero hydration errors, real `fetch` POST wiring, and clean `npm run build` output before deploying via `npx wrangler deploy`.

---

## 8. Holistic Ecosystem Interconnectivity & Big-Picture Flywheel Verification

Every Spec-Driven implementation (`specify` -> `plan` -> `tasks` -> `implement` -> `converge`) must verify ecosystem-wide interconnectivity before completion:
1. **Macro-to-Micro Zoom-Out**: Verify how every new or modified route links into the broader ecosystem (`RichardEwing.io` Advisory & Diagnostics <-> `Exogram.ai` Runtime Governance <-> `CareerWin.ai` Human Evidence <-> `/schedule` Cal.com Booking <-> Stripe Checkout Ladder).
2. **Zero Unwired Client Forms**: Verify that every interactive form submits real `fetch` POST payloads to `/api/lead-capture` and/or `/api/leads` with proper error handling and a fast-track `/schedule?source=...` link.
3. **Edge Redirect Query-String Safety**: Verify that all `EDGE_REDIRECTS` values in `middleware.ts` are clean pathnames without `?` or `#`.
4. **Contextual Schedule Banner Sync**: Verify that any new `?source=` parameter is registered in `components/schedule/schedule-diagnostic-banner.tsx`.

---

## 9. Cold-Context Spec Kernel & Mechanical ADR Drift Gate (`google/elephant-goldfish-model` Graft - ADR-0020)

Long-context authoring sessions suffer from "Elephant context blindness": an agent writes a specification with unstated assumptions and autocompletes missing constraints from its own 150k-token chat history when reviewing its work. To eliminate shared-context blind spots without slowing shipping velocity, enforce these four rules:

1. **Semantic Spec Split (`FeatureRange` vs. `DetailedRange`)**:
   - **`FeatureRange` (Executive & Commercial Contract)**: Captures business intent, target buyer outcome, acceptance criteria, and explicit Out-of-Scope Blast-Radius boundaries with zero low-level implementation clutter.
   - **`DetailedRange` (Principal Engineering Contract)**: Captures exact repository file paths, TypeScript/Zod schemas, state transitions, edge cases, and failure modes.
2. **Silent Cold-Context Comprehension Paraphrase (Preset 1 Uninterrupted Flow)**:
   - On Mode 3 multi-file architectural builds, spawn a read-only `research` subagent (`invoke_subagent`) with **zero shared conversation history** ("Goldfish") given only the written spec artifact and linked repository files.
   - The cold-context subagent must **paraphrase the system mechanics back** and surface unstated assumptions or cross-file collisions before code mutation begins.
   - **Zero Founder Pestering**: Run this comprehension paraphrase silently inside the autonomous engineering loop. Never interrupt Richard with multi-stage trivial confirmation modals unless a genuine business one-way door requires executive sign-off.
3. **Scoped `1`-Audit Convergence Cap**:
   - Subjective cold-context subagent critique passes are strictly capped at **`1` re-audit cycle** (critique-first ordering, zero sycophantic filler) to prevent multi-agent review-loop paralysis.
   - **Deterministic Gate Exemption**: Mechanical gates (`node .agents/scripts/verify-qa.mjs`, `node .agents/scripts/verify-ui-integrity.mjs`, `npx tsc --noEmit`, `npm run build`, and `npm run build:worker`) are **exempt** from the `1`-audit cap and must always execute until exit code `0`.
4. **Mechanical ADR-to-Code Drift Detection (`check-adr-drift.mjs`)**:
   - Run `node .agents/scripts/check-adr-drift.mjs` to audit `Accepted` records in `docs/adr/ADR-*.md` against live repository paths, `ts-morph` TypeScript exports, `scripts/patch-worker.mjs` edge shield invariants (`__RW_ADR_0019_EDGE_SHIELD__`), fail-closed API guards, and logic shortcuts (`TODO` / mock stubs), writing delta-only output to `.scratch/adr-drift-report.md`.


