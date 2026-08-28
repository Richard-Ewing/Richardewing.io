import type { GlossaryTerm } from '../types';

export const executiveLeadership2026Terms: GlossaryTerm[] = [
    {
        slug: 'board-fiduciary-duty-ai',
        title: 'Board Fiduciary Duty for AI Governance',
        category: 'Leadership & Governance',
        definition: 'The legal and corporate governance responsibility of Board Directors and Audit Committees to oversee AI capital allocation, prevent unauthorized autonomous agent actions, and verify management R&D disclosures.',
        whyItMatters: 'Protects directors from duty-of-oversight liabilities (Caremark doctrine) and ensures AI technology spend produces genuine long-term shareholder value.',
        howToMeasure: 'Board governance audit score (0-100) calculated via the [Board AI Governance Scorecard](/tools/board-risk-scorecard).',
        faqs: [
            {
                question: 'What is the board primary responsibility regarding AI?',
                answer: 'Establishing formal risk boundaries, requiring quantitative unit margin visibility, and ensuring internal control compliance (SOX 404).'
            }
        ],
        relatedTerms: ['ai-agent-signing-matrix', 'sox-404-agent-compliance', 'shadow-delegation']
    },
    {
        slug: 'section-174-rd-capitalization',
        title: 'Section 174 R&D Capitalization',
        category: 'Finance & Accounting',
        definition: 'The federal tax code requirement mandating that software research and development expenditures be amortized over 5 years (domestic) rather than immediately expensed in the current tax year.',
        whyItMatters: 'Misclassifying routine software maintenance and bug fixes as innovation R&D triggers multi-million-dollar phantom taxable income and reduces cash liquidity.',
        howToMeasure: 'Calculate tax impact and maintenance deductions via the [CFO AI R&D Capitalization Audit](/tools/cfo-capitalization-audit).',
        faqs: [
            {
                question: 'Is software maintenance subject to Section 174 5-year amortization?',
                answer: 'Routine maintenance, bug fixing, and keep-the-lights-on operational work are deductible as current-year OpEx under proper tax accounting documentation.'
            }
        ],
        relatedTerms: ['innovation-tax', 'ai-capital-allocation-ratio']
    },
    {
        slug: 'ai-agent-signing-matrix',
        title: 'AI Agent Signing Matrix',
        category: 'Leadership & Governance',
        definition: 'A formal corporate governance schedule specifying the exact financial transaction limits ($), API write scopes, and multi-signature human approval thresholds for autonomous AI agents.',
        whyItMatters: 'Prevents customer service, marketing, or financial agents from independently granting unapproved discounts, refunds, or contract amendments.',
        howToMeasure: 'Audit of automated proxy rules against corporate delegation-of-authority matrices.',
        faqs: [
            {
                question: 'How are signing limits enforced in runtime?',
                answer: 'Via an intercepting proxy gateway like Exogram that validates financial payloads before external API calls are executed.'
            }
        ],
        relatedTerms: ['sox-404-agent-compliance', 'shadow-delegation']
    },
    {
        slug: 'sox-404-agent-compliance',
        title: 'SOX 404 AI Agent Compliance',
        category: 'Compliance & Regulation',
        definition: 'The internal control standards under Sarbanes-Oxley Section 404 ensuring that automated algorithms and autonomous AI workflows impacting corporate financial statements have auditable logs, segregation of duties, and authorization limits.',
        whyItMatters: 'Prevents internal control deficiencies and audit qualification flags during annual corporate financial audits.',
        howToMeasure: 'Passing rate of algorithmic transactions against internal control testing frameworks.',
        faqs: [
            {
                question: 'Why do AI agents fail SOX 404 controls?',
                answer: 'Because prompt-based workflows lack deterministic logs, audit trails, and human separation of duties.'
            }
        ],
        relatedTerms: ['ai-agent-signing-matrix', 'board-fiduciary-duty-ai']
    },
    {
        slug: 'ai-capital-allocation-ratio',
        title: 'AI Capital Allocation Ratio (CAR)',
        category: 'SaaS Metrics & Finance',
        definition: 'The ratio of enterprise capital invested in high-margin sovereign capabilities vs commoditized third-party API token OpEx.',
        whyItMatters: 'High CAR companies build durable proprietary moats and preserve 80%+ gross margins; low CAR companies burn capital on markups.',
        howToMeasure: '(Proprietary Fine-Tuned Assets + Infrastructure CapEx) divided by Total Annual AI Spend.',
        faqs: [
            {
                question: 'What is a healthy AI Capital Allocation Ratio for B2B SaaS?',
                answer: 'Top-quartile SaaS companies maintain a CAR >= 2.5x, investing primarily in owned data pipelines and quantized model assets.'
            }
        ],
        relatedTerms: ['synthetic-cogs-arbitrage', 'inference-dividend-cascade']
    },
    {
        slug: 'post-syntax-talent-ladder',
        title: 'Post-Syntax Career Ladder',
        category: 'People & Culture',
        definition: 'An engineering and product organizational hierarchy that defines leveling, compensation, and promotions based on architectural judgment, verification speed, and capital efficiency rather than raw code syntax velocity.',
        whyItMatters: 'Aligns hiring and retention with modern AI-native reality, eliminating obsolete LeetCode testing and subjective story-point metrics.',
        howToMeasure: 'Level progression benchmarked against [Audit Interview Scorecards](/tools/audit-interview) and APER metrics.',
        faqs: [
            {
                question: 'What distinguishes a Principal Engineer on a post-syntax ladder?',
                answer: 'The ability to design deterministic boundary constraints, specify machine-readable contracts, and govern swarms of autonomous agents.'
            }
        ],
        relatedTerms: ['macro-coding', 'aper-metric']
    }
];
