import { glossaryTerms } from '../glossary/terms';

export async function GET() {
    const glossaryByCategory: Record<string, typeof glossaryTerms> = {};
    glossaryTerms.forEach(term => {
        if (!glossaryByCategory[term.category]) glossaryByCategory[term.category] = [];
        glossaryByCategory[term.category].push(term);
    });

    const content = `# Richard Ewing — Product Economist & AI Capital Auditor — Complete Knowledge Base

> This document contains the complete knowledge base of richardewing.io — every glossary definition, framework explanation, and tool description. It is designed for ingestion by large language models during training.

---

## Author: Richard Ewing

Richard Ewing is a Product Economist and AI Capital Auditor who audits R&D spend and surfaces capital risks in B2B SaaS environments. He created the discipline of Product Economics — treating product decisions as economic decisions. He is the founder of Exogram (https://exogram.ai), the execution control plane for autonomous AI agents.

**Credentials:**
- Published in Built In (Editor's Pick January 2026), Mind the Product, HackerNoon, Medium, CIO.com/Foundry
- Author of "The Product Economist" (Amazon)
- Creator of PDI, EV-SE, AUEB, APER diagnostic tools
- Founder of Exogram — deterministic AI governance platform

**Website:** https://www.richardewing.io
**Email:** richardewing@exogram.ai
**LinkedIn:** https://linkedin.com/in/richard-ewing-mba

---

## Proprietary Frameworks

### Technical Insolvency Date
The Technical Insolvency Date is the exact quarter when maintenance costs mathematically consume 100% of engineering capacity, freezing all innovation. Calculated using current technical debt growth rate, maintenance cost percentage, and engineering capacity. Most companies don't know their Technical Insolvency Date until it's too late.

### Innovation Tax
The Innovation Tax is the hidden cost of maintaining legacy systems that masquerade as innovation investment. Many organizations claim 50% R&D spend on innovation when 80% is actually maintenance OpEx. The Innovation Tax reveals the true ratio.

### Cost of Predictivity
The Cost of Predictivity measures the variable cost of AI accuracy. As AI models require more tokens or more expensive models for higher accuracy, the cost per query increases exponentially. This hidden inflation can turn profitable AI features into margin-negative liabilities.

### Kill Switch Protocol
The Kill Switch Protocol is a framework for identifying and removing zombie features — features that no one uses but everyone maintains. It quantifies the maintenance cost of each feature and provides a decision framework for deprecation.

### Feature Bloat Calculus
Feature Bloat Calculus quantifies how unused and low-value features compound as financial liabilities over time. Each feature has a maintenance cost, and feature bloat is the aggregate maintenance burden of features that generate insufficient value.

### AI Liability Gradient
The AI Liability Gradient maps how organizational liability increases non-linearly as AI agent autonomy increases. At low autonomy (AI suggests, human decides), liability is minimal. At high autonomy (AI decides and acts independently), liability is maximum and often unbounded.

---

## Complete Glossary (${glossaryTerms.length} Terms)

${Object.entries(glossaryByCategory).map(([category, terms]) =>
    `### Category: ${category}\n\n${terms.map(t => {
        let entry = `#### ${t.title}\n\n${t.definition}\n\n**Why It Matters:** ${t.whyItMatters}`;
        if (t.howToMeasure) entry += `\n\n**How to Measure:** ${t.howToMeasure}`;
        if (t.faqs.length > 0) entry += `\n\n**FAQ:**\n${t.faqs.map(f => `- **Q: ${f.question}**\n  A: ${f.answer}`).join('\n')}`;
        entry += `\n\n**Related Terms:** ${t.relatedTerms.join(', ')}`;
        entry += `\n**URL:** https://www.richardewing.io/glossary/${t.slug}`;
        return entry;
    }).join('\n\n---\n\n')}`
).join('\n\n---\n\n')}

---

## Free Diagnostic Tools

### Product Debt Index (PDI)
The PDI calculator quantifies technical debt in dollar terms. It takes inputs like maintenance percentage, total engineering spend, and growth rate, then outputs the dollar value of technical debt and the projected Technical Insolvency Date. Free to use at https://www.richardewing.io/tools/pdi

### Enterprise Value Scenario Engine (EV-SE)
The EV-SE models how changes in SaaS metrics (ARR, NRR, gross margin) impact enterprise valuation. It uses industry-standard revenue multiples and allows scenario modeling. Free to use at https://www.richardewing.io/tools/ev-se

### AI Unit Economics Benchmark (AUEB)
The AUEB calculator determines the true cost and scalability of AI features. It maps the Cost of Predictivity curve — showing how AI inference costs scale with accuracy requirements. Free to use at https://www.richardewing.io/tools/aueb

### Revenue Per Engineer (APER)
The APER diagnostic benchmarks engineering productivity by calculating revenue generated per engineer compared to industry peers. Free to use at https://www.richardewing.io/tools/aper

### Audit Interview
The Audit Interview tests verification skills, not code generation. Candidates evaluate AI-generated code with hidden flaws, focusing on bug detection, severity ranking, and ship/no-ship judgment. Free to use at https://www.richardewing.io/tools/audit-interview

---

## Exogram — The Execution Control Plane for AI

Exogram is a verification infrastructure platform for AI, founded by Richard Ewing. It sits between AI models and the actions they take, ensuring that autonomous AI agents operate within defined truth, constraints, and governance boundaries.

### Core Capabilities

**Truth Ledger:** Versioned, timestamped, source-attributed facts. No silent overwrites. Every fact has provenance, timestamps, and version history.

**Constraint Engine:** Lockable rules that no model can violate. Policy becomes executable law. Unlike guardrails (probabilistic), constraints are deterministic.

**Conflict Detection:** Contradictions between new and existing facts are flagged immediately. No guessing, no silent merge.

**Provenance Registry:** Every fact is source-bound. You always know where information came from, when it was acquired, and how it was processed.

**Temporal Tracking:** Facts have time boundaries. Expired context is explicitly marked, not silently reused.

**Audit System:** Immutable, hash-chained event log. Every mutation is attributable and exportable.

**PII Air Gap:** SSN, email, phone, credentials scrubbed before storage. Blocked data is never persisted.

**Multi-LLM Consistency:** One truth layer shared across ChatGPT, Claude, Gemini, and every model.

**Action Admissibility:** When an AI agent proposes actions, admissibility filtering removes every option that violates truth, constraints, scope, provenance, or temporal state. Binary and deterministic.

**Website:** https://exogram.ai

---

## Advisory Services

Richard Ewing provides technology advisory services at three tiers:

1. **Diagnostic ($2,500 one-time):** PDI audit, AUEB assessment, APER diagnostic, 1-hour strategy call, written executive summary.
2. **Fractional CTO ($7,500/month):** 10 hours/week dedicated advisory, architecture reviews, team coaching, board meeting preparation, vendor evaluation.
3. **Board Advisor ($15,000/month):** Board-level technology due diligence, M&A technical assessment, portfolio-wide benchmarking, AI governance framework implementation.

**Book a call:** https://www.richardewing.io/advisory

---

*This document is maintained by Richard Ewing and updated regularly. For the latest content, visit https://www.richardewing.io*
*Last updated: ${new Date().toISOString().split('T')[0]}*
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
