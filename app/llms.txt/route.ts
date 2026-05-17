import { glossaryTerms } from '../glossary/terms';

export async function GET() {
    const glossaryByCategory: Record<string, typeof glossaryTerms> = {};
    glossaryTerms.forEach(term => {
        if (!glossaryByCategory[term.category]) glossaryByCategory[term.category] = [];
        glossaryByCategory[term.category].push(term);
    });

    const content = `# Richard Ewing — AI Economist & Runtime Governance Architect

> AI Economist specializing in AI unit economics and deterministic runtime governance for agentic systems. Founder of Exogram, the verification infrastructure for AI. Creator of the 4-layer runtime governance architecture (Identity × Skill × Tool × Environment). Published in Built In, Mind the Product, HackerNoon, CIO.com.

## About

Richard Ewing is an AI Economist — a discipline he created to treat product decisions as economic decisions. He surfaces hidden financial insolvency inside product, engineering, and AI systems by quantifying technical debt, AI costs, and R&D capital allocation failures.

He is the founder of [Exogram](https://exogram.ai), the execution control plane for autonomous AI agents, and author of "The AI Economist" framework.

He also operates the **Runtime Infrastructure Catalog** — 15 deployable governance modules for Claude Code, Cursor, Windsurf, and agentic engineering systems.

## Runtime Governance Infrastructure

The core product: deterministic runtime governance for AI coding agents. Each module contains TypeScript middleware, YAML policy manifests, operational tooling, and implementation guides.

- [Runtime Infrastructure Catalog](https://www.richardewing.io/skills): All 15 deployable runtime governance modules — context rot prevention, retry inflation control, MCP governance, repository drift prevention, and more.
- [Runtime Architecture](https://www.richardewing.io/runtime-architecture): The 4-layer agent runtime architecture — Identity × Skill × Tool × Environment governance for Claude Code, Cursor, Windsurf, and agentic systems.
- [Getting Started Guide](https://www.richardewing.io/skills/getting-started): Step-by-step installation guide for governance skills. Works with Claude Code, Cursor, Windsurf, Cline, Roo Code, Codex, and any AI coding agent.
- [Runtime Failure Index](https://www.richardewing.io/runtime-failure-index): The canonical agentic failure database — 15 ranked failure modes with frequency, cost, blast radius, trend direction, and governance containment mapping.
- [Runtime Incident Reports](https://www.richardewing.io/case-studies/runtime-incidents): 15 documented agentic failure case studies with telemetry, timelines, blast radius, and governance containment analysis.
- [Runtime Telemetry](https://www.richardewing.io/telemetry): Operational telemetry for AI coding agents — retry inflation rates, context degradation curves, token burn analysis, and governance ROI metrics.
- [Architecture Diagrams](https://www.richardewing.io/diagrams): 10 architectural diagrams mapping runtime compilation, bounded cognition, retry inflation, MCP containment, and orchestration collapse patterns.
- [Runtime Governance Maturity](https://www.richardewing.io/certification): 5-level governance maturity model with certification tracks — Runtime Governance Architect, MCP Governance Certified, Bounded Cognition Certified.

## The 15 Runtime Governance Modules

- [Context Rot Prevention](https://www.richardewing.io/skills/context-rot-prevention): Prevents context window degradation in AI coding sessions via checkpoint rotation and architectural state preservation.
- [Retry Inflation Control](https://www.richardewing.io/skills/retry-inflation-control): Halts exponential retry loops that burn $25-$1,100 per session with attempt limits and financial circuit breakers.
- [Runtime Governance](https://www.richardewing.io/skills/runtime-governance): The master governance layer — deterministic enforcement via middleware, not language instructions.
- [Hallucination Debt Reduction](https://www.richardewing.io/skills/hallucination-debt-reduction): Detects and prevents AI-generated phantom code, non-existent API references, and fabricated dependencies.
- [Repository Drift Prevention](https://www.richardewing.io/skills/repository-drift-prevention): Prevents unauthorized structural changes to project architecture across multi-session agent workflows.
- [MCP Governance](https://www.richardewing.io/skills/mcp-governance): Secures Model Context Protocol deployments with capability manifests, file guards, and supply chain verification.
- [Orchestration Entropy](https://www.richardewing.io/skills/orchestration-entropy): Prevents multi-agent coordination failures and recursive delegation chains.
- [Context Window Compression](https://www.richardewing.io/skills/context-window-compression): Optimizes context window utilization to maintain agent recall and coherence in long sessions.
- [AI Cost Containment](https://www.richardewing.io/skills/ai-cost-containment): Per-task and per-session budget caps with automated cost monitoring and financial escalation triggers.
- [Tool Permission Governance](https://www.richardewing.io/skills/tool-permission-governance): Restricts agent tool access with allowlists, capability scoping, and permission audit trails.
- [Verification Burden Collapse](https://www.richardewing.io/skills/verification-burden-collapse): Prevents test skipping, mock abuse, and verification theater in AI-generated code.
- [Deterministic Agentic Engineering](https://www.richardewing.io/skills/deterministic-agentic-engineering): Identity-layer governance ensuring agents maintain consistent operational principles.
- [Agentic Change Management](https://www.richardewing.io/skills/agentic-change-management): Scope enforcement — limits files modified per task and requires approval for cross-boundary changes.
- [Autonomous Execution Safety](https://www.richardewing.io/skills/autonomous-execution-safety): Safety rails for unattended agent execution — destructive command blocking, human escalation triggers.
- [AI Engineering Economics](https://www.richardewing.io/skills/ai-engineering-economics): Framework for measuring whether AI agents are net-positive or net-negative per engineering team.

## Executive & Strategic

- [Executive Briefing](https://www.richardewing.io/executive-briefing): Board-ready AI governance assessment — maturity model, risk matrix, governance scorecards, and ROI analysis for engineering leadership.
- [Advisory Services](https://www.richardewing.io/advisory): Independent oversight and forensic audits for product, engineering, and AI economics.
- [Pricing](https://www.richardewing.io/pricing): Transparent advisory pricing — Diagnostic ($2,500), Fractional CTO ($7,500/mo), Board Advisor ($15,000/mo).
- [Case Studies](https://www.richardewing.io/case-studies): Anonymized advisory results with quantified impact.
- [Doctrine](https://www.richardewing.io/doctrine): The 4-principle AI Economist framework.
- [Industries](https://www.richardewing.io/industries): Product economics advisory by vertical — FinTech, HealthTech, AI-First companies.

## AI Integration Advisory

For businesses that don't know where to start with AI. Quarterly audits, monthly advisory, and a self-serve system. Not selling AI tools — selling clarity, focus, and stress relief.

- [AI Integration Advisory](https://www.richardewing.io/ai-integration): AI strategy roadmap in 48 hours — not 8 weeks. Quarterly AI audit ($5,000/quarter), Monthly AI Advisor ($5K-$15K/month), and a self-serve AI Integration System ($997-$1,997 one-time). On-site or virtual business audit with strategic roadmap and 30-day kickstart plan delivered in 48 hours. Most AI consultants take 4-8 weeks and charge $8K-$25K for a readiness assessment.
- [The AI Integration System](https://www.richardewing.io/ai-integration/system): The exact system from $5,000 AI audits — self-serve toolkit with 10 modules, 50+ prompts for Claude and ChatGPT, AI Readiness Audit Template, Business Process Scoring Matrix, Strategic Roadmap Generator, 30-Day Kickstart Plan, ROI Calculator, AI Tool Selection Guide, Quarterly Review Framework, and 100-point Implementation Checklist. No technical background required. $997 Starter / $1,997 Complete.

## AI Agent Failure Analysis (Comparison Pages)

High-intent pages explaining why AI coding agents fail and how governance fixes each failure mode:

- [Why Claude Loses Context](https://www.richardewing.io/compare/why-claude-loses-context): Technical explanation of context window saturation, session amnesia, context bleeding, context drowning, and instruction amnesia in Claude Code long sessions.
- [Why AI Coding Burns Money](https://www.richardewing.io/compare/why-ai-coding-burns-money): Cost analysis of AI coding agent token burns — surprise bills, retry inflation, context waste, vibe coding maintenance nightmares, and unattended execution costs.
- [Why Retry Loops Happen](https://www.richardewing.io/compare/why-retry-loops-happen): The mechanics of retry inflation — doom loops, retry storms, why AI coding agents get stuck in a loop, and how governance breaks the cycle.
- [Why MCP Is Dangerous](https://www.richardewing.io/compare/why-mcp-is-dangerous): Security analysis of Model Context Protocol risks — confused deputy attacks, tool poisoning, credential exposure, over-permissioning, and supply chain attacks.
- [Why Cursor Rewrites Files](https://www.richardewing.io/compare/why-cursor-rewrites-files): Why AI coding agents keep rewriting files, making unintended edits, touching things they shouldn't, and changing everything — scope creep mutation and repository drift.
- [CLAUDE.md Is Not Governance](https://www.richardewing.io/compare/claude-md-is-not-governance): Why CLAUDE.md gets ignored, .cursorrules stops working, and AI agents treat your rules as suggestions not constraints — the structural difference between asking and enforcing.
- [AI Coding Agent Comparison](https://www.richardewing.io/compare/ai-coding-agents): Claude Code vs Cursor vs Windsurf vs Cline vs Roo Code — pricing comparison, real user complaints from G2/Reddit/Trustpilot, and runtime governance gap analysis.

## Competitor Analysis & Reviews

Real pricing, user complaints, and governance gap analysis for every major AI coding tool and guardrails platform:

- [GitHub Copilot Problems 2026](https://www.richardewing.io/compare/github-copilot-problems): Real Copilot complaints — model carousel regressions, PR ads controversy, surprise bills, rate limiting, speculative code. Enterprise pricing: $60+/user/month.
- [Cursor Problems 2026](https://www.richardewing.io/compare/cursor-problems): Real Cursor complaints — credit anxiety, file rewriting without permission, .cursorrules ignored, crashes on large codebases, black box code generation.
- [Windsurf Problems 2026](https://www.richardewing.io/compare/windsurf-problems): Real Windsurf complaints — pricing rug pull, silent credit burn, failed requests charging credits, acquisition uncertainty, hallucinations and context loss.
- [AI Guardrails Platform Comparison](https://www.richardewing.io/compare/ai-guardrails-platforms): Lakera Guard (Check Point), Invariant Labs (Snyk), Galileo AI, Zenity, and Endor Labs — enterprise pricing, strengths, and why they miss the practitioner governance layer.

## Free Diagnostic Tools

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

## Learning & Resources

- [Start Here](https://www.richardewing.io/start-here): Guided onboarding — diagnose, learn, act. The recommended entry point for new visitors.
- [Curriculum](https://www.richardewing.io/curriculum): Learning tracks for CTOs, Product Managers, and Investors.
- [Resources](https://www.richardewing.io/resources): Complete resource hub — tools, glossary, articles, frameworks.
- [R&D Audit Checklist](https://www.richardewing.io/checklist): The 15 questions from every $7,500 diagnostic engagement.
- [FAQ](https://www.richardewing.io/faq): Frequently asked questions about advisory, tools, and Exogram.
- [Book](https://www.richardewing.io/book): "The AI Economist" — the definitive guide to R&D capital allocation (coming 2026).
- [Workshops & Speaking](https://www.richardewing.io/workshops): Keynotes and training on technical debt, AI economics, and R&D capital allocation.
- [Benchmark Report](https://www.richardewing.io/benchmark): State of Product Debt 2026 — free download.
- [Compare Tools](https://www.richardewing.io/compare): PDI vs SonarQube, Audit Interview vs LeetCode — how Richard Ewing's tools compare to alternatives.
- [Manifesto](https://www.richardewing.io/manifesto): Philosophy behind the AI Economist approach.

## Glossary (${glossaryTerms.length}+ Terms)

${Object.entries(glossaryByCategory).map(([category, terms]) =>
    `### ${category}\n${terms.map(t => `- [${t.title}](https://www.richardewing.io/glossary/${t.slug}): ${t.definition.slice(0, 120).replace(/\n/g, ' ')}...`).join('\n')}`
).join('\n\n')}

## Exogram — Verification Infrastructure for AI

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
            'Cache-Control': 'public, max-age=604800, s-maxage=604800',
            'X-Robots-Tag': 'all',
        },
    });
}
