import type { GlossaryTerm } from '../types';

export const cpoCeoLeadership2026Terms: GlossaryTerm[] = [
    {
        slug: 'cpo-feature-margin-floor',
        title: 'CPO Feature Margin Floor (70% Rule)',
        category: 'Product Economics',
        definition: 'A mandatory product governance rule requiring all generative AI capabilities and reasoning features to maintain at least a 70% gross margin under peak enterprise token consumption loads before deployment.',
        whyItMatters: 'Prevents power-user accounts from eroding enterprise SaaS gross profits and protects company exit valuation multiples.',
        howToMeasure: 'Feature unit gross margin (%) calculated via the [CPO AI Feature Margin Matrix](/tools/cpo-product-portfolio-matrix).',
        faqs: [
            {
                question: 'What happens when a feature falls below the 70% margin floor?',
                answer: 'It must be migrated to consumption-credit pricing, optimized via semantic caching, or replaced with fine-tuned SLMs.'
            }
        ],
        relatedTerms: ['negative-carry-feature', 'outcome-based-monetization', 'ai-cogs']
    },
    {
        slug: 'seat-based-pricing-compression',
        title: 'Seat-Based Pricing Compression',
        category: 'SaaS Metrics & Finance',
        definition: 'The structural reduction in B2B SaaS annual recurring revenue caused by selling software on a per-user basis into enterprise customer organizations that are actively deflating employee headcount using AI agents.',
        whyItMatters: 'Forces software vendors to abandon per-seat pricing or suffer 20% to 40% net revenue retention declines during enterprise contract renewals.',
        howToMeasure: 'Net seat expansion rate (%) vs user business volume across renewal cohorts.',
        faqs: [
            {
                question: 'How do product leaders survive seat compression?',
                answer: 'By transitioning to outcome-based contracts and hybrid consumption models that scale with automated business volume.'
            }
        ],
        relatedTerms: ['outcome-based-monetization', 'cpo-feature-margin-floor']
    },
    {
        slug: 'outcome-based-monetization',
        title: 'Outcome-Based Monetization',
        category: 'Product Economics',
        definition: 'A commercial pricing model where software vendors charge customers based on verified business deliverables (e.g. customer tickets resolved, contracts audited, PRs merged) rather than human seats or raw token usage.',
        whyItMatters: 'Aligns software revenue directly with customer economic value creation, capturing higher willingness-to-pay while insulating the business from compute price wars.',
        howToMeasure: 'Average contract value (ACV) scaling per unit of automated customer business output.',
        faqs: [
            {
                question: 'What is required to implement outcome-based pricing?',
                answer: 'Deterministic verification gates that prove the automated outcome met contractual quality thresholds.'
            }
        ],
        relatedTerms: ['seat-based-pricing-compression', 'cpo-feature-margin-floor']
    },
    {
        slug: 'autonomous-enterprise-operating-model',
        title: 'Autonomous Enterprise Operating Model',
        category: 'Leadership & Governance',
        definition: 'An executive corporate architecture that replaces functional matrix silos with small, sovereign multidisciplinary units augmented by autonomous agent swarms and governed by runtime signing matrices.',
        whyItMatters: 'Enables 10x output per employee, slashes release latency from quarters to days, and eliminates bureaucratic matrix coordination overhead.',
        howToMeasure: 'Executive organizational maturity score (%) benchmarked via the [CEO AI Operating Model Diagnostic](/tools/executive-ai-operating-model).',
        faqs: [
            {
                question: 'How does an autonomous operating model maintain governance?',
                answer: 'Through deterministic zero-trust proxies (like Exogram) that enforce budget caps, signing limits, and audit logging at runtime.'
            }
        ],
        relatedTerms: ['performative-ai-pilot', 'sovereign-moat-architecture']
    },
    {
        slug: 'performative-ai-pilot',
        title: 'Performative AI Pilot',
        category: 'Leadership & Governance',
        definition: 'An uncoordinated, superficial AI demonstration or departmental proof-of-concept launched for internal executive visibility without measurable unit economics, architectural bounding, or long-term moat durability.',
        whyItMatters: 'Consumes millions in R&D budget without creating compounding shareholder value or production-ready enterprise capabilities.',
        howToMeasure: 'Ratio of enterprise AI experiments reaching live, gross-margin-positive production after 90 days.',
        faqs: [
            {
                question: 'Why do companies get trapped in performative AI pilots?',
                answer: 'Due to lack of C-Suite cross-functional alignment and failure to establish clear unit margin floors before starting development.'
            }
        ],
        relatedTerms: ['autonomous-enterprise-operating-model', 'cpo-feature-margin-floor']
    },
    {
        slug: 'negative-carry-feature',
        title: 'Negative-Carry Feature',
        category: 'Product Economics',
        definition: 'A product feature whose variable token inferencing and infrastructure COGS exceed its apportioned customer subscription revenue, causing gross profit to decline as user usage increases.',
        whyItMatters: 'Negative-carry features create toxic unit economics where power-user growth destroys company cash flow and compresses valuation.',
        howToMeasure: 'Feature-level contribution margin: (Subscription Revenue Allocation - Variable Token COGS) / Subscription Revenue.',
        faqs: [
            {
                question: 'How do product leaders fix a negative-carry feature?',
                answer: 'Enforce semantic caching, route queries to fine-tuned SLMs, or meter heavy usage via prepaid credit pools.'
            }
        ],
        relatedTerms: ['cpo-feature-margin-floor', 'ai-cogs']
    },
    {
        slug: 'general-contractor-pm-trap',
        title: 'General Contractor PM Anti-Pattern',
        category: 'Product Management',
        definition: 'The obsolete product management pattern where PMs act as administrative ticket routers and meeting coordinators between stakeholders and engineers, without possessing architectural depth or unit economic modeling skills.',
        whyItMatters: 'In an agentic software era where AI swarms write code from machine-readable specs, General Contractor PMs create friction and are actively displaced by technical Product Economists.',
        howToMeasure: '% of PM sprint hours spent on meeting coordination vs authoring executable specifications and margin models.',
        faqs: [
            {
                question: 'What replaces the General Contractor PM?',
                answer: 'The AI Product Economist who operates at the intersection of unit margin modeling, machine-readable specifications, and runtime governance.'
            }
        ],
        relatedTerms: ['macro-coding', 'executable-specification']
    }
];
