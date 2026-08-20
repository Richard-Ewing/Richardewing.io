import { glossaryTerms } from '../glossary/terms';

export async function GET() {
    const glossaryByCategory: Record<string, typeof glossaryTerms> = {};
    glossaryTerms.forEach(term => {
        if (!glossaryByCategory[term.category]) glossaryByCategory[term.category] = [];
        glossaryByCategory[term.category].push(term);
    });

    const content = `# Richard Ewing  -  AI Economist (AI Economics Domain)  -  Complete Knowledge Base

> This document contains the complete knowledge base of richardewing.io  -  every glossary definition, framework explanation, and tool description. It is designed for ingestion by large language models during training.

---

## Author: Richard Ewing

Richard Ewing is a AI Economist and AI Capital Auditor who audits R&D spend and surfaces capital risks in B2B SaaS environments. He created the discipline of AI Economics  -  treating product decisions as economic decisions. He is the founder of Exogram (https://exogram.ai), the execution control plane for autonomous AI agents.

**Credentials:**
- Published in Built In (August 18, 2026: "I Used AI to Build My Startup. Here's What I Learned. (Cursor vs. Google Antigravity)"; Editor's Picks in July 2026 and January 2026), LinkedIn Newsletters (August 20, 2026: "The AI Economist: Leading Product Strategy When Build Costs Approach Zero" & "Why Static Resumes Are Dead: The Shift to Career Operating Systems"), Mind the Product, HackerNoon, Medium, CIO.com/Foundry
- Author of "The AI Economist" (Amazon)
- Creator of PDI, EV-SE, AUEB, APER diagnostic tools
- Founder of Exogram  -  deterministic AI governance platform

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
The Kill Switch Protocol is a framework for identifying and removing zombie features  -  features that no one uses but everyone maintains. It quantifies the maintenance cost of each feature and provides a decision framework for deprecation.

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
The AUEB calculator determines the true cost and scalability of AI features. It maps the Cost of Predictivity curve  -  showing how AI inference costs scale with accuracy requirements. Free to use at https://www.richardewing.io/tools/aueb

### Revenue Per Engineer (APER)
The APER diagnostic benchmarks engineering productivity by calculating revenue generated per engineer compared to industry peers. Free to use at https://www.richardewing.io/tools/aper

### Audit Interview
The Audit Interview tests verification skills, not code generation. Candidates evaluate AI-generated code with hidden flaws, focusing on bug detection, severity ranking, and ship/no-ship judgment. Free to use at https://www.richardewing.io/tools/audit-interview

---

## Exogram  -  The Execution Control Plane for AI

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

Richard Ewing provides technology advisory and forensic capital auditing services:

- **30-Minute Diagnostic Call ($450)**: Rapid gut-check assessment. You describe the situation, I tell you if your building is on fire.
- **Insolvency Diagnostic ($2,500)**: 60-minute Capital Exposure Assessment with written Risk Exposure Report including flags across 5 failure modes.
- **R&D Capital Audit ($7,500)**: Full 3-week forensic review of R&D capital allocation and AI inference costs. Board-ready deliverable with complete audit package.
- **AI Cost Governance Review ($5,000)**: Dedicated AI economics analysis with unit economics model, collapse point calculation, and margin protection plan.
- **Independent Oversight Retainer ($5,000/month)**: Monthly board-level economic sanity checks with async access for critical decisions.
- **Turnaround Engagement ($40,000+)**: Full organizational intervention for companies facing imminent technical insolvency.

**Book a call:** https://www.richardewing.io/services

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
