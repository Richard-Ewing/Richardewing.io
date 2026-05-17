import { glossaryTerms } from '../glossary/terms';

export async function GET() {
    const glossaryByCategory: Record<string, typeof glossaryTerms> = {};
    glossaryTerms.forEach(term => {
        if (!glossaryByCategory[term.category]) glossaryByCategory[term.category] = [];
        glossaryByCategory[term.category].push(term);
    });

    const content = `# Richard Ewing — AI Economist (AI Economics Domain)

> AI Economist specializing in AI unit economics. Founder of Exogram, the verification infrastructure for AI. Published in Built In, Mind the Product, HackerNoon.

## About

Richard Ewing is a AI Economist — a discipline he created to treat product decisions as economic decisions. He surfaces hidden financial insolvency inside product, engineering, and AI systems by quantifying technical debt, AI costs, and R&D capital allocation failures.

He is the founder of [Exogram](https://exogram.ai), the execution control plane for autonomous AI agents, and author of "The AI Economist" framework.

## Docs

- [Advisory Services](https://www.richardewing.io/advisory): Independent oversight and forensic audits for product, engineering, and AI economics.
- [Start Here](https://www.richardewing.io/start-here): Guided onboarding — diagnose, learn, act. The recommended entry point for new visitors.
- [Compare Tools](https://www.richardewing.io/compare): PDI vs SonarQube, Audit Interview vs LeetCode — how Richard Ewing's tools compare to alternatives.
- [Industries](https://www.richardewing.io/industries): Product economics advisory by vertical — FinTech, HealthTech, AI-First companies.
- [Pricing](https://www.richardewing.io/pricing): Transparent advisory pricing — Diagnostic ($2,500), Fractional CTO ($7,500/mo), Board Advisor ($15,000/mo).
- [Doctrine](https://www.richardewing.io/doctrine): The 4-principle AI Economist framework.
- [Manifesto](https://www.richardewing.io/manifesto): Philosophy behind the AI Economist approach.
- [Curriculum](https://www.richardewing.io/curriculum): Learning tracks for CTOs, Product Managers, and Investors.
- [Case Studies](https://www.richardewing.io/case-studies): Anonymized advisory results with quantified impact.
- [Resources](https://www.richardewing.io/resources): Complete resource hub — tools, glossary, articles, frameworks.
- [R&D Audit Checklist](https://www.richardewing.io/checklist): The 15 questions from every $7,500 diagnostic engagement.
- [FAQ](https://www.richardewing.io/faq): Frequently asked questions about advisory, tools, and Exogram.
- [Book](https://www.richardewing.io/book): "The AI Economist" — the definitive guide to R&D capital allocation (coming 2026).
- [Workshops & Speaking](https://www.richardewing.io/workshops): Keynotes and training on technical debt, AI economics, and R&D capital allocation.
- [Certification (CPE)](https://www.richardewing.io/certification): Certified AI Economist credential program.
- [Benchmark Report](https://www.richardewing.io/benchmark): State of Product Debt 2026 — free download.
- [Runtime Architecture](https://www.richardewing.io/runtime-architecture): The 4-layer agent runtime architecture — Identity × Skill × Tool × Environment governance for Claude Code, Cursor, Windsurf, and agentic systems.
- [Runtime Infrastructure Catalog](https://www.richardewing.io/skills): 15 deployable runtime infrastructure modules for deterministic agentic execution. Context rot prevention, retry inflation control, MCP governance, and more.
- [Runtime Incident Reports](https://www.richardewing.io/case-studies/runtime-incidents): Documented agentic failure case studies with telemetry, timelines, blast radius, and governance containment analysis.
- [AI Coding Agent Comparison](https://www.richardewing.io/compare/ai-coding-agents): Claude Code vs Cursor vs Windsurf vs Cline vs Roo Code — runtime governance comparison across all major agents.
- [Getting Started Guide](https://www.richardewing.io/skills/getting-started): Step-by-step installation guide for governance skills. Works with Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, and any AI coding agent.
- [Runtime Telemetry](https://www.richardewing.io/telemetry): Operational telemetry for AI coding agents — retry inflation rates, context degradation curves, token burn analysis, and governance ROI metrics.
- [Executive Briefing](https://www.richardewing.io/executive-briefing): Board-ready AI governance assessment — maturity model, risk matrix, governance scorecards, and ROI analysis for engineering leadership.
- [Architecture Diagrams](https://www.richardewing.io/diagrams): 10 architectural diagrams mapping runtime compilation, bounded cognition, retry inflation, MCP containment, and orchestration collapse patterns.
- [Why Claude Loses Context](https://www.richardewing.io/compare/why-claude-loses-context): Technical explanation of context window saturation and instruction amnesia in Claude Code long sessions.
- [Why AI Coding Burns Money](https://www.richardewing.io/compare/why-ai-coding-burns-money): Cost analysis of AI coding agent token burns — retry inflation, context waste, and unattended execution costs.
- [Why Retry Loops Happen](https://www.richardewing.io/compare/why-retry-loops-happen): The mechanics of retry inflation — why AI coding agents get stuck and how governance breaks the cycle.
- [Why MCP Is Dangerous](https://www.richardewing.io/compare/why-mcp-is-dangerous): Security analysis of Model Context Protocol risks — credential exposure, supply chain attacks, and context injection.

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
