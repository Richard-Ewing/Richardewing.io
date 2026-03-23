import { GlossaryTerm } from '../types';

// =============================================================================
// TENTH PASS: FinOps, Platform Engineering, AI Red-Teaming, Security terms
// =============================================================================

export const trendingTermsBatch3: GlossaryTerm[] = [
    {
        title: 'Platform Engineering',
        slug: 'platform-engineering',
        definition: `Platform Engineering is the discipline of designing and building self-service toolchains and workflows that enable software engineering teams to deliver value faster and more reliably.\n\nPlatform engineers build "Internal Developer Platforms" (IDPs) — curated, self-service environments where product engineers can provision infrastructure, deploy applications, and access tools without filing tickets or waiting for platform teams.\n\n**Key components:** Self-service infrastructure provisioning, golden path templates, CI/CD pipelines, observability dashboards, and service catalogs.\n\nGartner predicts that by 2026, 80% of software engineering organizations will establish platform teams as internal providers of reusable services, components, and tools.`,
        whyItMatters: 'Platform engineering is the structural response to developer experience (DevEx) problems. Without platform investment, every team solves infrastructure problems independently — creating duplicated effort, inconsistent practices, and compounding technical debt.',
        category: 'Engineering Management',
        relatedTerms: ['developer-experience', 'dora-metrics', 'infrastructure-as-code', 'team-topologies'],
        faqs: [{ question: 'Is platform engineering the same as DevOps?', answer: 'No. DevOps is a culture and set of practices. Platform engineering is the discipline of building the actual tooling and infrastructure that enables DevOps principles at scale. Platform engineers build products for developers.' }],
    },
    {
        title: 'AI Red-Teaming',
        slug: 'ai-red-teaming',
        definition: `AI Red-Teaming is the practice of systematically testing AI systems for vulnerabilities, biases, harmful outputs, and failure modes by simulating adversarial attacks and edge cases.\n\n**What red teams test:**\n- **Prompt injection resistance:** Can the model be tricked into ignoring safety instructions?\n- **Bias and fairness:** Does the model produce discriminatory outputs for certain demographic groups?\n- **Hallucination rates:** How often does the model fabricate facts, citations, or reasoning?\n- **Data leakage:** Can the model be prompted to reveal training data or system prompts?\n- **Harmful content generation:** Can the model produce dangerous, illegal, or harmful content?\n- **Robustness:** How does the model perform with adversarial, noisy, or out-of-distribution inputs?\n\nThe White House Executive Order on AI (2023) and the EU AI Act both reference AI red-teaming as a required practice for high-risk AI systems.`,
        whyItMatters: 'AI red-teaming is the AI equivalent of penetration testing. Without it, you discover vulnerabilities in production — through customer complaints, PR crises, or regulatory enforcement actions. Red-teaming finds them first.',
        category: 'AI Governance & Verification',
        relatedTerms: ['ai-governance', 'prompt-injection', 'ai-guardrails', 'ai-hallucination'],
        faqs: [{ question: 'Is AI red-teaming required by law?', answer: 'The EU AI Act requires risk assessment and testing for high-risk AI systems, which includes red-teaming practices. The White House Executive Order on AI also references red-teaming. It is becoming a regulatory expectation, not just a best practice.' }],
    },
    {
        title: 'FinOps',
        slug: 'finops',
        definition: `FinOps (Financial Operations) is the practice of bringing financial accountability to the variable spend model of cloud computing. It brings together technology, finance, and business teams to collaborate on data-driven spending decisions.\n\n**Core principles:**\n1. **Teams need to collaborate** — engineering, finance, and business must work together\n2. **Everyone takes ownership** — engineers are accountable for the cost of their infrastructure\n3. **A centralized team drives FinOps** — a cross-functional FinOps team coordinates efforts\n4. **Reports should be accessible and timely** — real-time cost visibility for all stakeholders\n5. **Decisions are driven by business value** — cloud spend is evaluated by the value it generates, not just the cost\n\nFor AI-heavy organizations, FinOps extends to AI cost management — tracking LLM API costs, GPU inference costs, and embedding generation costs at the feature level.`,
        whyItMatters: 'Cloud spend is the largest variable cost for most software companies. Without FinOps discipline, cloud costs grow faster than revenue. For AI companies, FinOps is even more critical because AI inference costs are significant per-interaction expenses.',
        howToMeasure: 'Track unit cost per customer, cost per feature, cost per transaction. Compare cloud spend growth rate to revenue growth rate. If cloud costs grow faster than revenue, you have a FinOps problem.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['ai-cogs', 'ai-cost-attribution', 'gross-margin-preservation', 'cloud-cost-optimization'],
        faqs: [{ question: 'How does FinOps relate to technical debt?', answer: 'Unoptimized cloud infrastructure is a form of infrastructure technical debt. FinOps provides the financial visibility and accountability to manage this debt — matching infrastructure spend to actual business value.' }],
    },
    {
        title: 'Zero Trust Architecture',
        slug: 'zero-trust',
        definition: `Zero Trust is a security framework based on the principle that no user, device, or system should be implicitly trusted, regardless of whether they are inside or outside the network perimeter.\n\n**Core tenets:**\n- **Never trust, always verify** — every access request is authenticated and authorized\n- **Least privilege access** — users and systems get minimum necessary permissions\n- **Assume breach** — design systems as if adversaries are already inside the network\n- **Micro-segmentation** — divide networks into small zones with independent access controls\n- **Continuous verification** — trust is not permanent; it is continuously re-evaluated\n\nFor AI systems, Zero Trust principles apply to AI agents — each agent should have task-scoped, time-limited permissions with no implicit trust between agents.`,
        whyItMatters: 'Traditional perimeter-based security ("castle and moat") fails in cloud-native and distributed environments. Zero Trust is the security architecture required for modern applications — and for governing autonomous AI agents.',
        category: 'Security & Compliance',
        relatedTerms: ['ai-agent-iam', 'agentic-governance', 'soc-2', 'security-compliance'],
        faqs: [{ question: 'How does Zero Trust apply to AI agents?', answer: 'AI agents should operate under zero-trust principles: task-scoped permissions, time-limited access, continuous verification of agent identity, and audit logging of all agent actions. Exogram implements this through its execution control plane.' }],
    },
    {
        title: 'Infrastructure as Code (IaC)',
        slug: 'infrastructure-as-code',
        definition: `Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable configuration files rather than manual processes.\n\n**Key tools:** Terraform, AWS CloudFormation, Pulumi, Ansible, and Kubernetes manifests.\n\n**Benefits:**\n- **Reproducibility:** Infrastructure is version-controlled and reproducible\n- **Speed:** Environments can be provisioned in minutes, not days\n- **Consistency:** Every environment is identical (dev, staging, production)\n- **Auditability:** Infrastructure changes are code-reviewed and logged\n\n**IaC Debt:** When IaC configurations drift from actual infrastructure, or when IaC modules become unmaintained, organizations accumulate IaC Debt — a subcategory of infrastructure technical debt.`,
        whyItMatters: 'IaC reduces infrastructure technical debt by making infrastructure decisions explicit, reviewable, and version-controlled. Without IaC, infrastructure becomes a black box that only one or two team members understand — creating knowledge dependency and risk.',
        category: 'DevOps & Infrastructure',
        relatedTerms: ['platform-engineering', 'continuous-deployment', 'infrastructure-debt', 'cloud-cost-optimization'],
        faqs: [{ question: 'What is IaC drift?', answer: 'IaC drift occurs when actual infrastructure diverges from what the IaC configuration files describe. This happens through manual changes, emergency patches, or console modifications. Drift is infrastructure technical debt — it makes systems unpredictable and unreproducible.' }],
    },
    {
        title: 'Shift-Left Testing',
        slug: 'shift-left-testing',
        definition: `Shift-Left Testing is the practice of moving testing activities earlier in the software development lifecycle. Instead of testing only after code is written, shift-left integrates testing into design, development, and CI/CD stages.\n\n**Types of shift-left:**\n- **Design-level testing:** Architecture reviews, threat modeling before coding\n- **Unit testing in development:** TDD and property-based testing during coding\n- **CI pipeline testing:** Automated tests run on every commit\n- **Security shift-left:** SAST/DAST tools integrated into PR workflows\n- **Compliance shift-left:** Governance checks embedded in build pipelines\n\nFor AI systems, shift-left means testing model quality, fairness, and safety during development — not after production deployment.`,
        whyItMatters: 'Bugs found earlier are cheaper to fix. A bug found in design costs 10x less than one found in production. Shift-left testing is the most cost-effective way to reduce quality-related technical debt.',
        category: 'Quality & Testing',
        relatedTerms: ['continuous-deployment', 'dora-metrics', 'change-failure-rate', 'test-coverage'],
        faqs: [{ question: 'Does shift-left testing slow down development?', answer: 'In the short term, shift-left requires upfront investment in test infrastructure. In the long term, it dramatically accelerates development by catching issues early, reducing production incidents, and enabling confident refactoring.' }],
    },
    {
        title: 'Technical Debt Ratio',
        slug: 'technical-debt-ratio',
        definition: `The Technical Debt Ratio (TDR) measures the proportion of engineering effort spent on maintaining existing systems versus building new capabilities. It is the single most important metric for quantifying technical debt's economic impact.\n\n**Formula:** TDR = Maintenance Effort / Total Engineering Effort × 100%\n\n**Benchmarks:**\n- **< 20%:** Healthy — strong innovation capacity\n- **20-40%:** Normal — some debt accumulation, manageable\n- **40-60%:** Concerning — innovation velocity declining\n- **60-80%:** Dangerous — approaching technical insolvency\n- **> 80%:** Critical — near or at technical insolvency\n\nThe TDR is a component of the Product Debt Index (PDI) calculation and directly correlates with the Technical Insolvency Date.`,
        whyItMatters: 'The TDR translates technical debt from "we have some tech debt" into "42% of our engineering spend produces zero new capability." That statement changes boardroom conversations.',
        howToMeasure: 'Audit sprint data for 2-3 months. Classify every ticket as new capability or maintenance. Calculate the ratio. Track quarterly.',
        category: 'Technical Debt & Code Quality',
        relatedTerms: ['technical-debt', 'product-debt-index', 'innovation-tax', 'technical-insolvency-date'],
        relatedTools: [{ name: 'Product Debt Index (PDI) Calculator', url: '/tools/pdi' }],
        faqs: [{ question: 'What TDR level is dangerous?', answer: 'Above 40% is concerning. Above 60% means the organization is approaching technical insolvency. Above 80% is critical — the organization has effectively lost the ability to innovate and is consuming all capacity on maintenance.' }],
    },
    {
        title: 'Service Level Objectives (SLOs)',
        slug: 'service-level-objectives',
        definition: `Service Level Objectives (SLOs) are specific, measurable targets for service reliability that define how reliable a service should be. They are the foundation of Site Reliability Engineering (SRE) and modern operations practices.\n\n**Hierarchy:**\n- **SLI (Service Level Indicator):** The metric (e.g., request latency, availability %)\n- **SLO (Service Level Objective):** The target for the SLI (e.g., 99.9% availability)\n- **SLA (Service Level Agreement):** The contractual commitment to customers (usually looser than the SLO)\n- **Error Budget:** The acceptable amount of downtime before action is required\n\n**Key insight:** 99.9% availability ≠ 99.99% availability. The difference is 8.7 hours vs 52.6 minutes of downtime per year — a 10x difference in engineering investment.`,
        whyItMatters: 'SLOs create a data-driven framework for reliability investment decisions. Without SLOs, reliability decisions are political ("everything must be 100% available") or reactive ("fix it after it breaks"). SLOs enable economic analysis of reliability investments.',
        category: 'DevOps & Infrastructure',
        relatedTerms: ['dora-metrics', 'change-failure-rate', 'platform-engineering', 'incident-management'],
        faqs: [{ question: 'What is an error budget?', answer: 'An error budget is the acceptable amount of unreliability over a time period, derived from the SLO. If your SLO is 99.9% availability monthly, your error budget is 43.8 minutes of downtime. When the budget is exhausted, teams shift from feature work to reliability work.' }],
    },
];
