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
    },
    {
        slug: 'cfo-management-pack',
        title: 'CFO Management Pack (AI & R&D Capital Reporting)',
        category: 'Finance & Accounting',
        tier: 'pillar',
        definition: `A CFO Management Pack for technology and AI operations is the standardized monthly board reporting package prepared by the Chief Financial Officer (CFO), Director of Finance, and VP of Engineering to reconcile engineering payroll, cloud infrastructure invoices, and third-party LLM token spend against net product revenue.\n\nInstead of reporting vanity activity metrics like story points or pull request counts, a rigorous CFO Management Pack isolates three financial realities: (1) Section 174 R&D capitalization vs routine maintenance OpEx, (2) variable AI inference cost of goods sold (Synthetic COGS) per active customer tier, and (3) the Product Debt Index (PDI) carrying cost consuming engineering capacity.\n\nWhen a CEO, COO, or Audit Committee Chair reviews the monthly pack, they see immediately which product lines generate positive contribution margin and which features are losing cash on every user query.`,
        whyItMatters: `Most B2B software companies hand their Board of Directors a financial packet that treats $4M of engineering payroll and $400K of OpenAI or Anthropic API bills as a single opaque R&D line item. When a CFO or Director of Finance enforces a structured AI & R&D Management Pack, the leadership team catches margin compression, unapproved shadow AI subscriptions, and Section 174 tax exposure before they trigger an earnings miss or valuation discount during M&A due diligence.`,
        howToApply: `1. Reconcile Engineering Payroll by Work Type: Require every Engineering Manager and Product Ops Lead to tag sprint output into Capitalizable New Capability (CapEx), Customer Retention, or Maintenance & Bug Remediation (OpEx).\n2. Isolate Variable AI Inference COGS: Separate variable model API calls, vector database queries, and GPU compute from fixed hosting so the CFO and Chief Product Officer (CPO) can track gross margin by customer cohort.\n3. Track Technical Insolvency Horizons: Include the quarterly Product Debt Index (PDI) and Revenue Per Engineer (APER) benchmarks alongside standard SaaS P&L schedules.\n4. Enforce Pre-Board Audit Sign-Off: Run the monthly figures through the [CFO R&D Capitalization Audit](/tools/cfo-capitalization-audit) and package the executive readout using the [Operating Kit](/operating-kit) templates.`,
        whereIsItUsed: `Monthly executive staff reviews, quarterly Board of Directors audit committee briefings, Series B+ fundraising data rooms, and private equity technical due diligence audits.`,
        whoUsesIt: `Chief Financial Officers (CFO), Directors of Finance, FP&A Leads, Chief Executive Officers (CEO), Chief Operating Officers (COO), Chief Technology Officers (CTO), and Private Equity Operating Partners.`,
        howToMeasure: `Evaluated across four core financial ratios inside the monthly pack: Net AI Gross Margin (>= 70% target), R&D Maintenance Ratio (< 30% of engineering payroll), Revenue Per Engineer (APER >= $350K-$500K), and Section 174 Capitalization Accuracy. Audit your baseline with the [CFO R&D Capitalization Calculator](/tools/cfo-capitalization-audit) and the [For CFOs Advisory Hub](/for-cfos).`,
        checklist: [
            'Schedule 1: Engineering Payroll Split (New Feature CapEx vs Maintenance OpEx for Section 174 tax compliance)',
            'Schedule 2: Synthetic COGS & Token Margin Ledger (API spend, vector storage, and gross margin per customer tier)',
            'Schedule 3: Product Debt Index (PDI) & Technical Insolvency Date projection by product line',
            'Schedule 4: Revenue Per Engineer (APER) & Coordination Tax trendline across engineering squads',
            'Schedule 5: Shadow AI & Unsanctioned SaaS Vendor Spend quarantine report for the General Counsel and CISO'
        ],
        keyMetrics: [
            { label: 'Maintenance OpEx Cap', value: '< 30%', description: 'Maximum share of engineering payroll consumed by bug fixes and keeping existing systems running.' },
            { label: 'AI Feature Gross Margin', value: '70% - 82%', description: 'Target contribution margin after deducting LLM token bills, embeddings, and retry loops.' },
            { label: 'Revenue Per Engineer (APER)', value: '$400K+', description: 'Annual recurring revenue generated per full-time engineering headcount.' }
        ],
        faqs: [
            {
                question: 'What should be included in a modern SaaS and AI CFO Management Pack?',
                answer: 'A modern technology CFO Management Pack must include five core schedules: (1) P&L with Synthetic COGS separated from fixed hosting, (2) Engineering payroll split between capitalizable R&D and maintenance OpEx for Section 174 compliance, (3) Product Debt Index (PDI) dollar waste by team, (4) Revenue Per Engineer (APER) efficiency multiples, and (5) AI feature unit margin by pricing tier.'
            },
            {
                question: 'How does a CFO Management Pack prevent AI margin compression?',
                answer: 'By tracking LLM token consumption and agent retry costs at the individual feature and customer cohort level rather than burying API bills inside general cloud hosting. This allows the CFO, COO, and CPO to spot power-user margin leaks and adjust pricing tiers immediately.'
            },
            {
                question: 'Where can finance and engineering leaders download a CFO Management Pack template?',
                answer: 'You can run a live baseline using the free CFO Capitalization Audit calculator at /tools/cfo-capitalization-audit or access the full boardroom spreadsheet templates inside The Product & AI Economist Operating Kit at /operating-kit.'
            }
        ],
        relatedTerms: ['section-174-rd-capitalization', 'synthetic-cogs', 'product-debt-index', 'aper-metric', 'innovation-tax'],
        relatedTools: [
            { name: 'CFO R&D Capitalization & Section 174 Audit', url: '/tools/cfo-capitalization-audit' },
            { name: 'AI Unit Economics Benchmark (AUEB)', url: '/tools/aueb' },
            { name: 'Product Debt Index Calculator (PDI)', url: '/tools/pdi' },
            { name: 'The Product & AI Economist Operating Kit', url: '/operating-kit' }
        ],
        relatedArticles: [
            { title: 'Advisory & Diagnostics for CFOs', url: '/for-cfos' },
            { title: 'Return on AI Investment (ROAI) Framework', url: '/articles/frameworks/return-on-ai-investment' }
        ]
    }
];
