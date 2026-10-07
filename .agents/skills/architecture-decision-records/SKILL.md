---
name: architecture-decision-records
description: AI-Generated Architecture Decision Records (ADRs) protocol based on Chris Nevin's standard. Enforces structured architectural decision logging, unbiased consequence evaluation (positive and negative/considerations), status lifecycle tracking, and seamless derivation from issues, PRs, and code diffs.
---

# AI-Generated Architecture Decision Records (ADRs)

**Standard**: Chris Nevin AI-Assisted ADR Standard  
**Integration**: Sovereign Master Operating Directive (MOD v4.0) & War Room Governance  
**Directory Location**: `docs/adr/`  
**Index Registry**: `docs/adr/README.md`  

---

## 1. Overview & Purpose

Architecture Decision Records (ADRs) capture critical software architecture decisions along with their context, trade-offs, and consequences. In fast-paced AI-assisted development environments, architectural decisions risk being made implicitly without permanent documentation, leading to knowledge drift and regression cycles.

To reduce friction and eliminate bias, we adopt Chris Nevin's **AI-Generated ADR Protocol**. The AI acts as an expert software architect to synthesize clear, balanced, and durable decision records directly from issue tickets, pull requests, and codebase diffs.

---

## 2. The Canonical ADR Schema

Every ADR must follow this exact heading structure without deviation:

```markdown
# ADR-<4 Digit Number>: <Name>

## Context

## Decision

## Deciders

## Status
Valid statuses are Proposed, Accepted, Deprecated, or Superseded by ADR-<4 Digit Number>

## Consequences
Positive:
- ...

Negative/Considerations:
- ...
```

### Section Breakdown:
1. **Title (`# ADR-<4 Digit Number>: <Name>`)**:
   - 4-digit zero-padded number (e.g. `ADR-0001`, `ADR-0005`, `ADR-0012`).
   - Short, descriptive title reflecting the architectural subject.
2. **`## Context`**:
   - The motivating problem, current limitations, friction points, technical debt, and business/operational requirements.
   - Non-technical grounding where applicable (budget waste, latency, operational friction).
3. **`## Decision`**:
   - The explicit architectural choice, restructuring, pattern adoption, or boundary enforcement.
   - What is being created, refactored, replaced, or eliminated.
4. **`## Deciders`**:
   - Key stakeholders, authors, and reviewers responsible for the decision (e.g. `@richardewing`, `@cjnevin`, `Code Architect`, `War Room General Staff`).
5. **`## Status`**:
   - Must be exactly one of: `Proposed`, `Accepted`, `Deprecated`, or `Superseded by ADR-<4 Digit Number>`.
6. **`## Consequences`**:
   - **Must be divided into two distinct sections** to prevent bias:
     - `Positive:` The tangible benefits, performance improvements, maintenance simplifications, and velocity gains.
     - `Negative/Considerations:` The refactoring effort, learning curves, increased complexity in core modules, temporary migration risks, or trade-offs accepted.

---

## 3. Derivation Modes

### Mode A: Interactive Pair Programming (Chris Nevin 3-Step Protocol)

When interacting collaboratively with the user to construct an ADR:

* **Step 1 (Metadata Prompt)**:
  Prompt the user for ADR Number, Name, Deciders, and Status.
  *Example Input*: `0005, Centralized Dependencies, @cjnevin, Accepted`
* **Step 2 (Ticket / Problem Statement Prompt)**:
  Ask the user for the Ticket or Issue description (or summarized goals).
  *Example Input*: `As a developer I want to centralize dependencies using a modular architecture with Core defining dependencies for reuse across feature modules and White Labeled apps.`
* **Step 3 (Pull Request / Implementation Prompt)**:
  Ask the user for the Pull Request description or code diff.
  *Example Input*: `This PR restructures dependency injection by moving shared low-level dependencies into Core rather than wrapping them in separate services inside each feature.`
* **Synthesis & Output**:
  Generate the completed ADR markdown file in `docs/adr/`, adhering strictly to the schema, and update `docs/adr/README.md`.

### Mode B: Autonomous Agent Derivation (Autonomous Workflows)

When operating autonomously during complex refactors, structural migrations, or high-level goals:

1. **Auto-Numbering**: Inspect `docs/adr/` to locate the highest existing ADR number and increment by 1.
2. **Context Synthesis**: Extract the problem statement directly from the user's task prompt, error logs, or refactoring objective.
3. **Decision Articulation**: Formulate the architectural mutation with precision before modifying code.
4. **Decider Attribution**: Assign `@richardewing` and the responsible War Room roles (`Code Architect`, `QA Auditor`).
5. **Consequence Analysis**: Perform an unbiased analysis detailing both positive advantages and negative trade-offs.
6. **Commit & Register**: Write `docs/adr/ADR-<4-Digit-Number>-<slug>.md` and register it in `docs/adr/README.md`.

---

## 4. Sovereign Governance Integration

### Board Room (Council of Titans) Lenses:
* **Jeff Bezos (Two-Way vs One-Way Doors)**: ADRs document one-way door (irreversible or high-cost) commitments. If a decision is a two-way door, keep the ADR lightweight and ship.
* **Steve Jobs & Jony Ive (Ruthless Subtraction)**: Scrutinize the `Negative/Considerations` section. If an architectural decision introduces unnecessary boilerplate or cognitive load, challenge and simplify it.
* **Elon Musk (First Principles Deletion)**: Use ADRs to question requirements and delete redundant abstraction layers.
* **Jensen Huang & Mark Zuckerberg (Compute ROI & Open Leverage)**: Record decisions around model routing, token budgets, and edge computing runtimes.

### War Room (General Staff) Responsibilities:
* **`code_architect`**: Primary author and custodian of all ADRs. Ensures architectural coherence across all modules.
* **`qa_auditor`**: Verifies ADR file naming, valid status keywords, zero em-dash compliance, and ensures `docs/adr/README.md` is updated.
* **`lived_experience_writer`**: Audits Context and Decision prose to ensure clarity and adherence to the Human Writing Standard (HWS v2.0).
* **Brad Smith & Dan Guido**: Audit compliance, licensing, data boundaries, and security consequences.

---

## 5. File Naming and Repository Invariants

1. All ADRs reside in `docs/adr/`.
2. Filename format: `ADR-<4-Digit-Number>-<kebab-case-slug>.md` (e.g. `docs/adr/ADR-0005-ai-generated-architecture-decision-records.md`).
3. Master Index: `docs/adr/README.md` must contain a synchronized table of all ADRs with links, status, deciders, and dates.
4. Absolute ban on em-dashes (`\u2014`) and en-dashes (`\u2013`) in all ADR files.
