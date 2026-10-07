# Architecture Decision Records (ADRs)

This directory contains the Architecture Decision Records (ADRs) for `richardewing.io`. We adhere to the **AI-Generated Architecture Decision Record (ADR)** standard formalized by Chris Nevin, integrated into our Sovereign Master Operating Directive (MOD v4.0).

---

## The ADR Schema (Chris Nevin Standard)

Each ADR is recorded with the following exact heading structure:

```markdown
# ADR-<4 Digit Number>: <Name>

## Context
Background, motivation, problem statement, and forces at play.

## Decision
The explicit technical or architectural decision, restructuring, or boundary change.

## Deciders
List of decision makers, authors, and reviewers (e.g. @richardewing, War Room officers).

## Status
Valid statuses: Proposed, Accepted, Deprecated, or Superseded by ADR-<4 Digit Number>

## Consequences
Positive:
- ...
Negative/Considerations:
- ...
```

---

## Status Definitions

* **Proposed**: Under review by the War Room and Board Room; not yet executed.
* **Accepted**: Formally approved and implemented in production.
* **Deprecated**: No longer relevant or active, but preserved for historical context.
* **Superseded by ADR-XXXX**: Replaced by a subsequent architectural decision.

---

## Registry of Records

| ADR | Title | Status | Deciders | Date |
| :--- | :--- | :--- | :--- | :--- |
| [ADR-0001](ADR-0001-cloudflare-edge-hosting.md) | Cloudflare Edge Hosting & OpenNext Architecture | Accepted | @richardewing, War Room General Staff | 2026-10-07 |
| [ADR-0002](ADR-0002-sovereign-dual-chamber-governance-mod-v4.md) | Sovereign Dual-Chamber Governance (Board & War Room) | Accepted | @richardewing, Council of Titans | 2026-10-07 |
| [ADR-0003](ADR-0003-five-step-asset-engine-academy-moat.md) | Five-Step Asset Engine Academy Moat Protocol | Accepted | @richardewing, Brian Balfour, Keith Rabois | 2026-10-07 |
| [ADR-0004](ADR-0004-zero-em-dash-and-secret-pre-push-gate.md) | Zero Em-Dash & Secret Key Pre-Push Deterministic Gate | Accepted | @richardewing, Dan Guido, Simon Willison | 2026-10-07 |
| [ADR-0005](ADR-0005-ai-generated-architecture-decision-records.md) | AI-Generated Architecture Decision Records (ADRs) Integration | Accepted | @richardewing, @cjnevin, Code Architect | 2026-10-07 |
| [ADR-0006](ADR-0006-gsc-indexing-and-sitemap-remediation.md) | Google Search Console Indexing, Sitemap Invariants, and Crawl Barrier Remediation | Accepted | @richardewing, Aravind Srinivas, SEO Architect | 2026-10-07 |

---

## Derivation Workflow

ADRs can be derived interactively via pair programming or generated autonomously during architectural changes:

1. **Information Gathering**: Gather ADR Number, Name, Deciders, and Status.
2. **Context Derivation**: Extract problem statement from issue/ticket or architectural need.
3. **Decision & Consequences**: Extract technical restructuring from pull request or code diff, analyzing both positive impacts and negative trade-offs/considerations without bias.
4. **Validation**: Verified by `qa_auditor` and `code_architect` before production deployment.
