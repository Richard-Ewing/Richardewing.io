# AI Engineering Economics — Escalation Matrix

## Escalation Levels

| Level | Trigger | Owner | Action |
|---|---|---|---|
| L0 — Track | Any AI-assisted task | Automated | Log costs to dashboard |
| L1 — Flag | Single task negative ROI | Engineering Lead | Review task suitability for AI |
| L2 — Review | Sprint-level negative ROI | Engineering Manager | Adjust AI deployment strategy |
| L3 — Restructure | Quarterly negative ROI | CTO | Full AI tooling cost-benefit audit |

## Decision Framework

### When AI is Cost-Effective
- Simple, repetitive code generation (boilerplate, tests, docs)
- Well-defined tasks with clear success criteria
- Tasks where verification is automated (type checking, linting)

### When AI is NOT Cost-Effective
- Complex architectural decisions requiring deep context
- Security-critical code requiring expert review
- Tasks where the agent consistently enters retry loops
- Ambiguous requirements that cause context rot