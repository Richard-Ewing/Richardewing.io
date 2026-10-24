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

## 6. Systematic Debugging & Error Recovery Loop

When a build or test fails, autonomous agents often resort to "shotgun debugging": making arbitrary edits across unrelated files in hope that the error disappears.

Follow Addy Osmani's **Systematic Recovery Protocol**:
1. **Isolate the Failing Layer**: Determine whether the failure is a TypeScript compilation error, an SSR hydration mismatch, an unhandled promise rejection, or a linter violation.
2. **Read the Exact Stack Trace**: Trace the first failing file and line number. Do not make assumptions based on error summaries.
3. **One Mutation at a Time**: Change one variable, interface, or component boundary. Test immediately.
4. **Deterministic Re-verification**: Run the mechanical QA gate (`node .agents/scripts/verify-qa.mjs`) to prove no side-effects were introduced.
