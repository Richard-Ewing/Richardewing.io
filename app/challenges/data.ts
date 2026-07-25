export interface Challenge {
    slug: string;
    title: string;
    description: string;
    painPoint: string;
    diagnosticName: string;
    diagnosticSlug: string;
    frameworkName: string;
    frameworkSlug: string;
    exogramRisk: string;
    exogramDescription: string;
    category: 'ai-economics' | 'engineering-governance' | 'operational-risk';
}

export const challenges: Challenge[] = [
    {
        slug: 'ai-operational-chaos',
        title: 'AI Operational Chaos',
        description: 'The predictable breakdown of engineering velocity and system stability when probabilistic AI agents are deployed into deterministic workflows without a centralized governance framework.',
        painPoint: 'Your engineering organization has successfully deployed AI features, but the resulting "Vibe Coding Debt" and autonomous agent variance is destroying your Mean Time To Recovery (MTTR) and degrading your codebase intimacy.',
        diagnosticName: 'Annualized Productivity (APER)',
        diagnosticSlug: 'aper',
        frameworkName: 'Probabilistic Tech Debt',
        frameworkSlug: 'probabilistic-tech-debt',
        exogramRisk: 'Execution Variance',
        exogramDescription: 'Exogram provides a deterministic control plane that halts autonomous agent hallucination cascades before they reach production.',
        category: 'operational-risk'
    },
    {
        slug: 'hallucination-debt',
        title: 'Hallucination Debt',
        description: 'The compounding liability incurred when organizations allow Large Language Models to generate plausible but incorrect outputs that are unknowingly integrated into downstream business logic.',
        painPoint: 'Your AI models are operating at scale, but their outputs are unpredictable. "Hallucination Entropy" is causing subtle, compounding errors that bypass traditional QA checks and silently corrupt user data.',
        diagnosticName: 'Volatility Tax Auditor (VTA)',
        diagnosticSlug: 'vta',
        frameworkName: 'Hallucination Entropy',
        frameworkSlug: 'hallucination-entropy',
        exogramRisk: 'Semantic Drift',
        exogramDescription: 'Exogram intercepts LLM outputs at runtime, using policy-as-code to verify deterministic alignment before the payload is delivered to the user.',
        category: 'operational-risk'
    },
    {
        slug: 'governance-drift',
        title: 'Governance Drift',
        description: 'The gradual deviation of an organization’s deployed codebase from its intended strategic architecture, usually caused by misaligned incentives, "Innovation Tax," and developer shortcuts.',
        painPoint: 'Your architecture was beautifully designed, but the actual codebase in production is a mess of workarounds. Your Technical Insolvency Date is approaching as maintenance consumes all your engineering capacity.',
        diagnosticName: 'Product Debt Index (PDI)',
        diagnosticSlug: 'pdi',
        frameworkName: 'Technical Insolvency',
        frameworkSlug: 'technical-insolvency',
        exogramRisk: 'Architecture Violation',
        exogramDescription: 'Exogram physically prevents governance drift by executing compliance rules at compile-time and runtime, blocking non-compliant code from entering the main branch.',
        category: 'engineering-governance'
    },
    {
        slug: 'ai-margin-collapse',
        title: 'AI Margin Collapse',
        description: 'The economic failure mode where the variable compute cost of generative AI queries destroys SaaS gross margins as user adoption scales.',
        painPoint: 'Your AI feature is a hit with users, but every query costs $0.05. As usage scales, your cloud bill is growing faster than your MRR, completely upending your unit economics and Rule of 40 score.',
        diagnosticName: 'AI Unit Economics Benchmark (AUEB)',
        diagnosticSlug: 'aueb',
        frameworkName: 'Synthetic COGS',
        frameworkSlug: 'synthetic-cogs',
        exogramRisk: 'Margin Collapse',
        exogramDescription: 'Exogram enforces dynamic model routing, automatically degrading to cheaper models or cached responses when high-compute inference is economically unjustified.',
        category: 'ai-economics'
    },
    {
        slug: 'product-entropy',
        title: 'Product Entropy',
        description: 'The natural tendency of software platforms to become increasingly complex, fragile, and bloated with "Zombie Assets" over time.',
        painPoint: 'Your platform is full of features no one uses, but your engineers are afraid to delete them. This Feature Bloat is slowing down deployments and confusing your customers.',
        diagnosticName: 'Product Debt Index (PDI)',
        diagnosticSlug: 'pdi',
        frameworkName: 'Kill Switch Protocol',
        frameworkSlug: 'kill-switch-protocol',
        exogramRisk: 'System Bloat',
        exogramDescription: 'Exogram monitors unused code paths and actively flags Zombie Assets for deprecation, automating the Sunset Committee process.',
        category: 'engineering-governance'
    },
    {
        slug: 'runtime-governance',
        title: 'Runtime Governance',
        description: 'The absolute necessity of enforcing policy-as-code during execution, rather than relying on pre-deployment PR reviews or post-deployment observability.',
        painPoint: 'You have strict architectural guidelines documented in Confluence, but they are routinely ignored by developers under deadline pressure. Observability tools only tell you when things break after the fact.',
        diagnosticName: 'Product Debt Index (PDI)',
        diagnosticSlug: 'pdi',
        frameworkName: 'Deterministic Control Plane',
        frameworkSlug: 'deterministic-control-plane',
        exogramRisk: 'Policy Violation',
        exogramDescription: 'Exogram translates your Confluence documents into executable policy-as-code, physically enforcing governance at runtime with zero human intervention.',
        category: 'engineering-governance'
    },
    {
        slug: 'ai-cost-visibility',
        title: 'AI Cost Visibility',
        category: 'ai-economics',
        description: 'The inability to attribute AI infrastructure costs to specific product features, business units, or customer cohorts. Most organizations track aggregate cloud spend but cannot answer the question: what does a single AI interaction cost us?',
        painPoint: 'Your CFO asks how much your AI features cost per customer. Nobody can answer. API bills arrive as a lump sum. Engineering says it is complicated. Finance sees a line item growing 40% quarter over quarter with no unit economics attached.',
        diagnosticName: 'AI Unit Economics Benchmark (AUEB)',
        diagnosticSlug: 'aueb',
        frameworkName: 'AI Unit Economics',
        frameworkSlug: 'ai-unit-economics',
        exogramRisk: 'Cost Blindness',
        exogramDescription: 'Without per-feature cost attribution, organizations cannot make rational build-vs-buy decisions, set pricing accurately, or identify which AI capabilities are destroying margins.'
    },
    {
        slug: 'ai-workforce-economics',
        title: 'AI Workforce Economics',
        category: 'ai-economics',
        description: 'The organizational failure to measure whether AI tools are actually increasing engineering productivity or merely increasing output volume without improving business outcomes.',
        painPoint: 'You bought 500 Copilot licenses at $19/seat/month. Lines of code went up 40%. Revenue per engineer stayed flat. Pull request volume increased but deployment frequency did not. You are paying for activity, not productivity.',
        diagnosticName: 'Revenue Per Engineer (APER)',
        diagnosticSlug: 'aper',
        frameworkName: 'Engineering Leverage',
        frameworkSlug: 'engineering-leverage',
        exogramRisk: 'Productivity Theater',
        exogramDescription: 'Measuring AI tool ROI by output volume rather than business outcomes creates a false sense of improvement while masking declining engineering leverage ratios.'
    },
    {
        slug: 'ai-governance-compliance',
        title: 'AI Governance Compliance',
        category: 'ai-economics',
        description: 'The regulatory and financial exposure created when organizations deploy AI systems without formal governance frameworks, usage policies, or audit trails.',
        painPoint: 'EU AI Act fines reach 7% of global turnover. Your employees use 12 different AI tools. You have no centralized policy, no access controls, and no audit trail showing which models processed which data. The board has not been briefed.',
        diagnosticName: 'AI Economics Assessment',
        diagnosticSlug: 'assessment',
        frameworkName: 'AI Governance',
        frameworkSlug: 'ai-governance',
        exogramRisk: 'Regulatory Exposure',
        exogramDescription: 'Organizations without formal AI governance frameworks face compounding regulatory risk as compliance requirements accelerate across jurisdictions.'
    }
];
