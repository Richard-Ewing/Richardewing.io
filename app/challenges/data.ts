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
        exogramDescription: 'Exogram provides a deterministic control plane that halts autonomous agent hallucination cascades before they reach production.'
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
        exogramDescription: 'Exogram intercepts LLM outputs at runtime, using policy-as-code to verify deterministic alignment before the payload is delivered to the user.'
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
        exogramDescription: 'Exogram physically prevents governance drift by executing compliance rules at compile-time and runtime, blocking non-compliant code from entering the main branch.'
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
        exogramDescription: 'Exogram enforces dynamic model routing, automatically degrading to cheaper models or cached responses when high-compute inference is economically unjustified.'
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
        exogramDescription: 'Exogram monitors unused code paths and actively flags Zombie Assets for deprecation, automating the Sunset Committee process.'
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
        exogramDescription: 'Exogram translates your Confluence documents into executable policy-as-code, physically enforcing governance at runtime with zero human intervention.'
    }
];
