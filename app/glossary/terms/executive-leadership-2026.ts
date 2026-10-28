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
    },
    {
        slug: 'product-pl-ownership',
        title: 'Product P&L Ownership',
        category: 'Product Management',
        tier: 'pillar',
        definition: `Product P&L Ownership is the operating model where a Chief Product Officer (CPO), VP of Product, or Group Product Manager owns a monthly profit-and-loss statement for their product line rather than a disconnected list of shipped features.\n\nA product P&L tracks four numbers every month: net recurring revenue (ARR after churn and contraction), direct variable cost of goods sold (cloud hosting plus LLM token inference and third-party APIs), allocated engineering payroll split between new capability and bug maintenance, and the resulting contribution margin.\n\nIn classical SaaS, marginal hosting cost per user was pennies, so Product Ops Leads and Engineering Managers could ignore COGS and chase adoption alone. Once generative AI workflows enter the product, a single power user on a $49 seat can burn $95 of Anthropic or OpenAI tokens in two weeks. Product P&L Ownership forces product leaders to price, meter, sunset, and staff features against real cash contribution.`,
        whyItMatters: `Most software roadmaps fail financially because the person deciding what to build never sees the cloud invoice or the engineering maintenance bill. When the CEO and CFO put a monthly Product P&L on the VP of Product and Engineering Manager scorecard, zombie features with <3% adoption get deprecated, unprofitable flat-rate AI tiers get hybrid usage guardrails, and R&D hiring aligns with net margin expansion instead of headcount politics.`,
        howToApply: `**Step 1: Map Revenue & Churn to Product Lines**: Work with the CFO and Director of Finance to attribute ARR, expansion, and churn reason codes to specific product modules.\n\n**Step 2: Meter Direct Hosting & AI Inference COGS**: Tag cloud compute, vector storage, and LLM API calls by tenant and feature slug so variable COGS shows up per product line.\n\n**Step 3: Separate New Capability from Maintenance Burn**: Require Engineering Managers to track what share of sprint payroll keeps existing code alive vs ships net-new commercial value.\n\n**Step 4: Run Monthly Kill-or-Scale Reviews**: Audit contribution margin in the [AI Credit vs Seat Calculator](/tools/aueb) and [Technical Debt Dollar Calculator](/tools/pdi) before approving next quarter's roadmap.`,
        whereIsItUsed: `Quarterly roadmap allocation reviews, SaaS pricing committee decisions, post-merger private equity value-creation plans, and CPO / CFO monthly operating reviews.`,
        whoUsesIt: `Chief Product Officers (CPO), VPs of Product, Group Product Managers, Product Ops Leads, Chief Financial Officers (CFO), Directors of Finance, and Engineering Managers.`,
        howToMeasure: `Product Contribution Margin % = (Product Line Net ARR - Direct Cloud & AI Inference COGS - Allocated Maintenance Engineering Payroll) / Product Line Net ARR. Benchmark yours in the [Claude & OpenAI API Margin Calculator](/tools/ai-feature-margin) and [AUEB Pricing Model](/tools/aueb).`,
        checklist: [
            'Attribute net ARR, expansion, and churn directly to each product line',
            'Tag LLM token inference, embeddings, and third-party API bills per feature and tenant',
            'Separate routine bug and maintenance payroll from net-new R&D investment',
            'Enforce a 70%+ gross margin floor (or explicit credit overage pricing) on every AI workflow',
            'Sunset features where annual maintenance payroll exceeds attributed retention revenue'
        ],
        keyMetrics: [
            { label: 'Target Gross Margin', value: '72% - 82%', description: 'Healthy SaaS + AI product line gross margin after hosting and model inference COGS.' },
            { label: 'Maintenance Cap', value: '< 25%', description: 'Share of product-line engineering payroll spent fixing regressions and legacy debt.' },
            { label: 'Zombie Feature Threshold', value: '< 5% MAU', description: 'Features below 5% active usage whose carrying cost exceeds retention value.' }
        ],
        faqs: [
            {
                question: 'What is the difference between traditional product management and Product P&L Ownership?',
                answer: 'Traditional product management measures output velocity, NPS, and feature adoption without accounting for cost of goods sold or engineering maintenance burn. Product P&L Ownership holds the VP of Product or Group PM accountable for net contribution margin after deducting cloud hosting, LLM token bills, and ongoing maintenance payroll.'
            },
            {
                question: 'Which line items belong on a Product Manager P&L statement?',
                answer: 'Four core line items: (1) Attributed ARR and net dollar retention, (2) Direct variable COGS including cloud compute and AI model API spend, (3) Engineering and support payroll split between new build and maintenance, and (4) Net Product Contribution Margin in dollars and percentage.'
            },
            {
                question: 'Why did AI features make Product P&L Ownership mandatory?',
                answer: 'Because LLM inference introduces uncapped variable cost per query. Without a Product P&L tracking P50 and P99 token spend against seat price, high engagement on an AI feature actively destroys company gross margin.'
            }
        ],
        relatedTerms: ['pl-ownership-for-pms', 'ai-unit-economics', 'ai-cost-attribution', 'product-economist', 'cfo-management-pack'],
        relatedTools: [
            { name: 'Claude & OpenAI API Margin Calculator', url: '/tools/ai-feature-margin' },
            { name: 'AI Credit vs Seat Calculator (AUEB)', url: '/tools/aueb' },
            { name: 'Technical Debt Dollar Calculator (PDI)', url: '/tools/pdi' },
            { name: 'The Product & AI Economist Operating Kit', url: '/operating-kit' }
        ],
        relatedArticles: [
            { title: 'Return on AI Investment (ROAI) Framework', url: '/articles/frameworks/return-on-ai-investment' },
            { title: 'Feature Bloat Calculus Framework', url: '/articles/frameworks/feature-bloat-calculus' }
        ]
    }
];
