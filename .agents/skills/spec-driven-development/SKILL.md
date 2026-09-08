---
name: spec-driven-development
description: Autonomous engineering discipline combining Addy Osmani's spec-driven development with Karpathy empirical red/green test probes. Enforces strict requirement contracts, constraint boundaries, and error recovery protocols before executing code mutations.
---

# Autonomous Engineering Discipline & Spec-Driven Development

**Directive**: Sovereign Master Operating Directive (MOD v3.2)  
**Origin Discipline**: Addy Osmani Agent Skills (`addyosmani/agent-skills`) & Karpathy Empirical Invariants  
**Scope**: All autonomous coding workflows, structural refactors, and diagnostic tool development.

---

## 1. Core Engineering Invariants

Autonomous agents frequently fail through "hallucination debt" -- writing optimistic code without verifying initial conditions, assuming APIs exist, and entering recursive retry loops when unexpected errors emerge.

To prevent this drift, every code mutation turn must follow the **Spec-Driven Cycle**:

$$\text{Specification} \longrightarrow \text{Constraint Definition} \longrightarrow \text{Red Probe} \longrightarrow \text{Implementation} \longrightarrow \text{Green Verification}$$

### Rule 1: The Pre-Code Specification Contract
Never write production code until you have explicitly verified:
1. The exact inputs, types, and return signatures.
2. The runtime boundary (Server Component vs. Client Component in Next.js 16 App Router).
3. The dependencies already installed in `package.json` vs. speculative external packages.

### Rule 2: Constraint-Driven Boundaries
Define what the implementation is **strictly forbidden** from doing:
* No broad `eval()` or unverified dynamic execution.
* No raw un-sanitized HTML injections without schema validation.
* No un-isolated client hooks (`useState`, `useQueryState`, `useEffect`) outside `<Suspense>` boundaries during static prerendering.
* Zero em-dashes (`\u2013` or `\u2014`) in any text or system code.

---

## 2. Karpathy Empirical Test Probes (Red/Green Protocol)

Before performing complex refactors or debugging mysterious failures:
1. **The Red Probe**: Construct a minimal reproduction script in `.scratch/` (e.g. `.scratch/probe_reproduce.mjs`). Run it and confirm it fails for the expected reason (Red).
2. **The Atomic Fix**: Apply the precise structural change in the codebase.
3. **The Green Probe**: Rerun the script in `.scratch/` and confirm it passes (Green).
4. **Hygiene Clean-Up**: Remove or persist the scratch probe cleanly; never leave loose debug files in the workspace root.

---

## 3. Systematic Debugging & Error Recovery Loop

When a build or test fails, autonomous agents often resort to "shotgun debugging" -- making arbitrary edits across unrelated files in hope that the error disappears.

Follow Addy Osmani's **Systematic Recovery Protocol**:
1. **Isolate the Failing Layer**: Determine whether the failure is a TypeScript compilation error, an SSR hydration mismatch, an un-handled promise rejection, or a linter violation.
2. **Read the Exact Stack Trace**: Trace the first failing file and line number. Do not make assumptions based on error summaries.
3. **One Mutation at a Time**: Change one variable, interface, or component boundary. Test immediately.
4. **Deterministic Re-verification**: Run the mechanical QA gate (`node .agents/scripts/verify-qa.mjs`) to prove no side-effects were introduced.
