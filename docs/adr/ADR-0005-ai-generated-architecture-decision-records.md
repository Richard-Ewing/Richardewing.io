# ADR-0005: AI-Generated Architecture Decision Records (ADRs) Integration

## Context
Architectural decisions are frequently made during fast-paced agentic coding sessions without permanent documentation. Over time, codebases suffer from architectural erosion: developers or AI agents refactor patterns without knowing why an architectural trade-off was selected (e.g. why a dependency was centralized, why a specific storage engine was adopted, or why a runtime restriction was imposed). Writing Architecture Decision Records (ADRs) manually is often neglected because it can be time-consuming to construct neutral context and unbiased consequences.

## Decision
We adopt the AI-Generated Architecture Decision Records (ADR) framework formalized by Chris Nevin, integrating it natively into the Sovereign Master Operating Directive (MOD v4.0), our agent skills (`architecture-decision-records`), and our War Room operational workflows:
1. Standardize on the exact 5-heading Chris Nevin structure:
   - `# ADR-<4 Digit Number>: <Name>`
   - `## Context`
   - `## Decision`
   - `## Deciders`
   - `## Status` (Valid: Proposed, Accepted, Deprecated, Superseded by ADR-<4 Digit Number>)
   - `## Consequences` (Explicitly divided into `Positive:` and `Negative/Considerations:` to avoid bias)
2. Appoint `code_architect` as the primary ADR author and custodian in the War Room, with `qa_auditor` verifying ADR validity during technical reviews.
3. Align ADRs with the Board Room (Jeff Bezos: documenting two-way vs one-way doors; Steve Jobs: documenting justified complexity in Negative/Considerations).
4. Store all records in `docs/adr/` indexed by `docs/adr/README.md`.

## Deciders
@richardewing, @cjnevin (Framework Author), Code Architect, QA Auditor

## Status
Accepted

## Consequences
Positive:
- Preserves long-term architectural intent and prevents regression cycles.
- AI agents and human engineers can rapidly author unbiased, rigorous ADRs using a structured 3-step prompt or autonomous diff derivation.
- Standardized consequence structure forces explicit consideration of negative trade-offs, refactoring burdens, and potential breaking changes.
- Seamlessly integrates with Antigravity subagent swarms and PR review workflows.

Negative/Considerations:
- Requires discipline to log an ADR for every non-trivial architectural mutation.
- Maintaining an up-to-date ADR index (`docs/adr/README.md`) adds a documentation step during structural changes.
- Superseding previous ADRs requires careful cross-linking and status updates.
