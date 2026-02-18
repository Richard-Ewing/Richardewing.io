export const articles = [
    {
        slug: "financial-metrics-scorecard",
        title: "The 3 Financial Metrics Every PM Needs on Their Scorecard",
        description: "Moving beyond vanity metrics to measure the true economic impact of product decisions.",
        date: "Feb 2026",
        readTime: "5 min read",
        source: "Mind the Product",
        externalUrl: "https://www.mindtheproduct.com/the-3-financial-metrics-every-pm-needs-on-their-scorecard/"
    },
    {
        slug: "reimagining-coding-interview",
        title: "Reimagining the Coding Interview",
        description: "AI can generate code. The scarce skill is catching what AI gets wrong. This article introduces the Audit Interview.",
        date: "Feb 2026",
        readTime: "6 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/reimagining-coding-interview"
    },
    {
        slug: "shipping-faster-wont-get-you-promoted",
        title: "Hey, senior PMs: Shipping faster won’t get you promoted",
        description: "Shipping fast felt great — until margins tanked, and I learned that real product leadership means understanding how features make or lose money.",
        date: "Feb 2026",
        readTime: "6 min read",
        source: "CIO.com",
        externalUrl: "https://www.cio.com/article/4128139/hey-senior-pms-shipping-faster-wont-get-you-promoted.html"
    },
    {
        slug: "ai-product-business-test",
        title: "The AI Product Business Test",
        description: "Validating AI unit economics before writing code. (Editor's Pick)",
        date: "Jan 2026",
        readTime: "6 min read",
        source: "Built In",
        externalUrl: "https://builtin.com/articles/ai-product-business-test"
    },
    {
        slug: "technical-insolvency-date",
        title: "The Technical Insolvency Date",
        description: "The exact quarter when maintenance costs mathematically consume 100% of engineering capacity.",
        date: "Jan 2026",
        readTime: "4 min read",
        source: "The Canon",
        legacyUrl: "/canonical/technical-insolvency.html",
        content: `
            <p>The Technical Insolvency Date (TID) is the theoretical point where a software organization's maintenance burden consumes 100% of its available engineering capacity.</p>
            <h3>The Mathematics of Stagnation</h3>
            <p>It is calculated as: <code>Capacity - (Codebase_Size * Maintenance_Factor)</code>.</p>
            <p>When this reaches zero, feature velocity stops. The organization is zombie-walking.</p>
        `
    },
    {
        slug: "innovation-tax",
        title: "The Innovation Tax",
        description: "Why 80% of your R&D budget is actually just keeping the lights on.",
        date: "Dec 2025",
        readTime: "6 min read",
        source: "CIO.com",
        legacyUrl: "/canonical/innovation-tax.html"
    },
    {
        slug: "cost-of-predictivity",
        title: "The Cost of Predictivity",
        description: "As AI correctness increases, cost scales exponentially. The hidden unit economics of LLMs.",
        date: "Nov 2025",
        readTime: "5 min read",
        source: "Built In",
        legacyUrl: "/canonical/ai-margin-autopsy.html"
    },
    {
        slug: "feature-bloat-calculus",
        title: "Feature Bloat Calculus",
        description: "A framework for calculating the negative carry of unused features.",
        date: "Oct 2025",
        readTime: "4 min read",
        source: "Mind the Product",
        legacyUrl: "/canonical/governance-of-subtraction.html"
    },
    {
        slug: "best-ai-product-zero-customers",
        title: "The Best AI Product I Ever Led Had Zero Customers",
        description: "A retrospective on why technical excellence doesn't guarantee product-market fit.",
        date: "Sep 2025",
        readTime: "7 min read",
        source: "HackerNoon",
        externalUrl: "https://hackernoon.com/the-best-ai-product-i-ever-led-had-zero-customers"
    }
];

export const frameworks = [
    {
        slug: 'technical-insolvency-date',
        name: 'Technical Insolvency Date',
        definition: 'The Technical Insolvency Date is the specific future quarter when an organization\'s technical debt maintenance will consume 100% of engineering capacity, leaving zero time for new development. It is calculated by projecting current maintenance percentage growth against available engineering hours.',
        whyItMatters: 'Most organizations track technical debt qualitatively ("we have some debt") rather than quantitatively ("we are 8 quarters from insolvency"). The Technical Insolvency Date makes the risk concrete and actionable.',
        howToCalculate: [
            'Measure current maintenance percentage (% of eng time on bugs, debt, maintenance)',
            'Track growth rate quarter-over-quarter',
            'Project forward until maintenance = 100%',
            'That quarter is your Technical Insolvency Date'
        ],
        relatedArticles: [
            { title: 'Why Your CFO Hates Agile', publication: 'CIO.com', date: 'Feb 2026', url: 'https://www.cio.com' },
            { title: 'The Four Horsemen of Technical Insolvency', publication: 'Built In', date: 'Jan 2026', url: 'https://builtin.com' }
        ],
        relatedTool: { name: 'PDI Tool', url: '/tools/pdi' }
    },
    {
        slug: 'innovation-tax',
        name: 'Innovation Tax',
        definition: 'Innovation Tax is the hidden cost of maintenance work that gets reported as innovation investment in financial and board reporting. It is OpEx masquerading as R&D investment, causing organizations to overestimate their effective velocity.',
        whyItMatters: 'When a team reports "65% of time on new features" but the actual number is 23%, the 42-point gap is the Innovation Tax. This gap causes CFOs and boards to dramatically overestimate R&D productivity.',
        relatedArticles: [
            { title: 'The Innovation Tax', publication: 'CIO.com', date: 'Jan 2026', url: 'https://www.cio.com' }
        ],
        relatedTool: { name: 'PDI Tool', url: '/tools/pdi' }
    },
    {
        slug: 'cost-of-predictivity',
        name: 'Cost of Predictivity',
        definition: 'The Cost of Predictivity measures the variable cost of AI accuracy. As AI models degrade, require more tokens to maintain quality, or need retraining, the cost per useful output increases. This creates margin compression that traditional engineering metrics don\'t capture.',
        whyItMatters: 'Unlike traditional code (fixed development cost, near-zero marginal cost), AI features have variable costs that scale with usage. Success makes you poorer unless you track Cost of Predictivity.',
        howToCalculate: [
            'Total AI compute cost (monthly)',
            'Divided by useful outputs generated',
            'Equals Cost of Predictivity per output'
        ],
        relatedArticles: [
            { title: 'The AI Volatility Tax', publication: 'Built In', date: 'Feb 2026', url: 'https://builtin.com' }
        ],
        relatedTool: { name: 'AUEB Tool', url: '/tools/aueb' }
    },
    {
        slug: 'audit-interview',
        name: 'Audit Interview',
        definition: 'The Audit Interview is a hiring protocol that tests verification skills instead of code generation skills. Candidates are given AI-generated code with hidden flaws and asked to identify the problems. This approach recognizes that AI can generate code, but catching AI mistakes is a scarce human skill.',
        whyItMatters: 'Traditional syntax interviews test a skill AI now performs better than humans. When Anthropic revealed candidates were using Claude to cheat on coding interviews, it proved the test was measuring the wrong thing.',
        howToCalculate: [
            'Present AI-generated code with 3-5 hidden bugs',
            'Candidate has 10 minutes to find issues',
            'Score based on bugs found and severity ranking',
            'Follow up with "what would you ship?" judgment call'
        ],
        relatedArticles: [
            { title: 'The Death of the Syntax Interview', publication: 'Built In', date: 'Jan 2026', url: 'https://builtin.com' }
        ],
        relatedTool: { name: 'Audit Interview Tool', url: '/tools/audit-interview' }
    },
    {
        slug: 'kill-switch-protocol',
        name: 'Kill Switch Protocol',
        definition: 'The Kill Switch Protocol is a framework for identifying and deprecating "Zombie Features" — code that requires ongoing maintenance but generates zero incremental value. It provides criteria for when to kill a feature and how to execute the deprecation.',
        whyItMatters: 'Most organizations add features but never remove them. Over time, 40-60% of a codebase becomes maintenance burden with no corresponding value. The Kill Switch Protocol provides the discipline to subtract.',
        relatedArticles: [
            { title: 'Kill Switch Protocol', publication: 'Mind the Product', date: 'Feb 2026', url: 'https://www.mindtheproduct.com' }
        ],
        relatedTool: { name: 'PDI Tool', url: '/tools/pdi' }
    },
    {
        slug: 'feature-bloat-calculus',
        name: 'Feature Bloat Calculus',
        definition: 'Feature Bloat Calculus is the economic formula for determining when a feature\'s maintenance cost exceeds its value contribution. It factors in direct maintenance hours, opportunity cost of those hours, and the compounding effect on system complexity.',
        whyItMatters: 'Every feature you add makes every future feature harder. Feature Bloat Calculus quantifies this hidden tax so you can make rational keep/kill decisions.',
        relatedArticles: [
            { title: 'The Governance of Subtraction', publication: 'CIO.com', date: 'Feb 2026', url: 'https://www.cio.com' }
        ],
        relatedTool: { name: 'PDI Tool', url: '/tools/pdi' }
    }
];
