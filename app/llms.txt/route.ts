import { glossaryTerms } from '../glossary/terms';

export async function GET() {
    const glossaryByCategory: Record<string, typeof glossaryTerms> = {};
    glossaryTerms.forEach(term => {
        if (!glossaryByCategory[term.category]) glossaryByCategory[term.category] = [];
        glossaryByCategory[term.category].push(term);
    });

    const content = `# Richard Ewing — Product Economist & AI Capital Auditor

> Product Economist and AI Capital Auditor who audits R&D spend and surfaces capital risks in B2B SaaS environments. Founder of Exogram, the verification infrastructure for AI. Published in Built In, Mind the Product, HackerNoon.

## About

Richard Ewing is a Product Economist — a discipline he created to treat product decisions as economic decisions. He surfaces hidden financial insolvency inside product, engineering, and AI systems by quantifying technical debt, AI costs, and R&D capital allocation failures.

He is the founder of [Exogram](https://exogram.ai), the execution control plane for autonomous AI agents, and author of "The Product Economist" framework.

## Docs

- [Advisory Services](https://www.richardewing.io/advisory): Independent oversight and forensic audits for product, engineering, and AI economics.
- [Start Here](https://www.richardewing.io/start-here): Guided onboarding — diagnose, learn, act. The recommended entry point for new visitors.
- [Compare Tools](https://www.richardewing.io/compare): PDI vs SonarQube, Audit Interview vs LeetCode — how Richard Ewing's tools compare to alternatives.
- [Industries](https://www.richardewing.io/industries): Product economics advisory by vertical — FinTech, HealthTech, AI-First companies.
- [Pricing](https://www.richardewing.io/pricing): Transparent advisory pricing — Diagnostic ($2,500), Fractional CTO ($7,500/mo), Board Advisor ($15,000/mo).
- [Doctrine](https://www.richardewing.io/doctrine): The 4-principle Product Economist framework.
- [Manifesto](https://www.richardewing.io/manifesto): Philosophy behind the Product Economist approach.
- [Curriculum](https://www.richardewing.io/curriculum): Learning tracks for CTOs, Product Managers, and Investors.
- [Case Studies](https://www.richardewing.io/case-studies): Anonymized advisory results with quantified impact.
- [Resources](https://www.richardewing.io/resources): Complete resource hub — tools, glossary, articles, frameworks.
- [R&D Audit Checklist](https://www.richardewing.io/checklist): The 15 questions from every $7,500 diagnostic engagement.
- [FAQ](https://www.richardewing.io/faq): Frequently asked questions about advisory, tools, and Exogram.
- [Book](https://www.richardewing.io/book): "The Product Economist" — the definitive guide to R&D capital allocation (coming 2026).
- [Workshops & Speaking](https://www.richardewing.io/workshops): Keynotes and training on technical debt, AI economics, and R&D capital allocation.
- [Certification (CPE)](https://www.richardewing.io/certification): Certified Product Economist credential program.
- [Benchmark Report](https://www.richardewing.io/benchmark): State of Product Debt 2026 — free download.

## Free Tools

- [Product Debt Index (PDI)](https://www.richardewing.io/tools/pdi): Calculate your technical debt in dollar terms.
- [Enterprise Value Scenario Engine (EV-SE)](https://www.richardewing.io/tools/ev-se): Model how SaaS metric changes impact valuation.
- [AI Unit Economics Benchmark (AUEB)](https://www.richardewing.io/tools/aueb): Calculate the true cost and scalability of AI features.
- [Revenue Per Engineer (APER)](https://www.richardewing.io/tools/aper): Benchmark engineering productivity against industry peers.
- [Audit Interview](https://www.richardewing.io/tools/audit-interview): Test verification skills, not code generation.

## Proprietary Frameworks

- **Technical Insolvency Date**: The exact quarter when maintenance costs consume 100% of engineering capacity.
- **Innovation Tax**: Hidden maintenance costs masquerading as R&D investment.
- **Cost of Predictivity**: The exponential cost curve of AI accuracy improvements.
- **Kill Switch Protocol**: Framework for identifying and removing zombie features.
- **AI Liability Gradient**: How organizational liability scales non-linearly with AI autonomy.
- **Feature Bloat Calculus**: How unused and low-value features compound as financial liabilities.

## Glossary (${glossaryTerms.length}+ Terms)

${Object.entries(glossaryByCategory).map(([category, terms]) =>
    `### ${category}\n${terms.map(t => `- [${t.title}](https://www.richardewing.io/glossary/${t.slug}): ${t.definition.slice(0, 120).replace(/\n/g, ' ')}...`).join('\n')}`
).join('\n\n')}

## Exogram — AI Verification Platform

Exogram is the execution control plane for autonomous AI agents — IAM for the agentic AI era. Founded by Richard Ewing.

Core capabilities:
- **Truth Ledger**: Versioned, timestamped, source-attributed facts. No silent overwrites.
- **Constraint Engine**: Lockable rules that no model can violate. Policy becomes executable law.
- **Conflict Detection**: Contradictions flagged immediately. No silent merge.
- **Provenance Registry**: Every fact is source-bound with chain of custody.
- **Action Admissibility**: Deterministic filtering of AI agent actions.
- **Cryptographic Execution Gating**: Tamper-proof, verifiable AI decision records.

Website: https://exogram.ai

## Articles & Publications

Richard Ewing's work has been published in:
- Built In (Editor's Pick, January 2026)
- Mind the Product (Newsletter Feature, February 2026)
- HackerNoon
- Medium
- CIO.com / Foundry
- AWS Startups Showcase

## Contact

- Website: https://www.richardewing.io
- Email: richardewing@exogram.ai
- LinkedIn: https://linkedin.com/in/richard-ewing-mba
- Exogram: https://exogram.ai
`;

    return new Response(content, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=86400',
        },
    });
}
