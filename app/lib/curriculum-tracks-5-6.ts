import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks5and6Modules: Record<string, CurriculumModule> = {};

const t6 = 'Product Management Economics';

// ═══════════════════ TRACK 5: PRODUCT MANAGEMENT ECONOMICS ═══════════════════

tracks5and6Modules['product-economics/5-1'] = m('5-1', 'Unit Economics & Cloud COGS', 'Master the fundamental math of Cloud FinOps. Calculate your Cloud COGS, establish per-tenant unit economics, and measure gross margin impact.', t6, 
    ['Calculate pure Cloud COGS', 'Allocate shared cluster costs', 'Establish per-tenant unit economic modeling'], [
        l('Demystifying Cloud COGS', 
            [
                'Not all cloud spend is COGS (Cost of Goods Sold). COGS is strictly the infrastructure required to serve production traffic to paying customers.',
                'Development environments, CI/CD runners, and internal data warehouses are R&D or SG&A expenses. Mixing these artificially suppresses your gross margin.',
                'Wall Street and VC boards value SaaS companies largely on Gross Margin (target: 80%+). Every dollar incorrectly categorized as COGS damages your enterprise valuation.'
            ],
            [
                d('Gross Margin Target', 'Revenue minus COGS divided by Revenue.', 'Elite: >85% | Good: 75-80% | Warning: <70%'),
                d('COGS Contamination', 'Percentage of non-production infra mistakenly billed as COGS.', '< 5% margin of error')
            ],
            'Audit your master cloud billing account and separate production (COGS) from R&D (Opex).',
            ['Create a strict tag taxonomy (env:prod vs env:dev).', 'Isolate CI/CD compute into a dedicated billing project.', 'Recalculate your true Gross Margin.'],
            {
                question: 'Why is it critical to separate staging environments from production in cloud billing?',
                options: ['To prevent developers from accessing production data', 'To satisfy SOC2 compliance requirements', 'Staging costs are R&D expenses, not COGS; mixing them artificially lowers your Gross Margin', 'To qualify for AWS enterprise discount programs'],
                correctIndex: 2,
                explanation: 'Gross Margin is the primary valuation metric for SaaS. By mistakenly including R&D staging servers in your COGS, you are mathematically telling investors your product is less profitable than it actually is.'
            }
        ),
        l('Per-Tenant Unit Economics', 
            [
                'In multi-tenant SaaS architectures, calculating the cost per specific customer is notoriously difficult because compute and memory are pooled.',
                'Without per-tenant unit economics, you cannot identify "toxic tenants" - customers who pay $500/month but consume $800/month in database IOPS.',
                'You must allocate shared costs mathematically using a proportional heuristic: usually total requests, storage footprint, or active user sessions.'
            ],
            [
                d('Toxic Tenant Ratio', 'Percentage of customers whose allocated infrastructure cost exceeds their MRR.', '< 2% of customer base'),
                d('Allocation Accuracy', 'Percentage of total shared infrastructure successfully mapped to specific tenants.', '> 90% allocation rate')
            ],
            'Identify your shared database cost and build a proportional allocation model based on tenant query volume.',
            ['Export your total shared database cost for the month.', 'Query your APM or logging stack for total database transactions per Tenant ID.', 'Multiply the percentage of total transactions for each tenant by the total database cost.'],
            {
                question: 'What is a "Toxic Tenant"?',
                options: ['A customer who constantly files support tickets', 'A customer whose proportional infrastructure consumption costs more than their subscription revenue', 'A user who attempts SQL injection attacks', 'A customer who churns within 30 days'],
                correctIndex: 1,
                explanation: 'A toxic tenant is structurally unprofitable. Because their heavy usage is usually hidden within shared multi-tenant clusters, they act as parasites on your gross margin until unit economics modeling exposes them.'
            }
        )
    ], '/vault/curriculum/tracks/product-economics/5-2', undefined, 'live'
);

tracks5and6Modules['product-economics/5-2'] = m('5-2', 'The Software Phase Transition', 'Master the macroeconomic shift from Solid to Liquid to Gas as code creation costs approach zero, and reposition product leadership around capital and uncertainty.', t6,
    ['Map the Solid-Liquid-Gas Phase Transition', 'Identify the failure vectors of code abundance', 'Transition from backlog velocity to uncertainty reduction'], [
        l('The Collapse of Code Scarcity',
            [
                'In the pre-AI era, product management was designed around developer capacity allocation. Engineering hours were scarce and expensive, forcing PMs to maintain roadmaps, groom backlogs, and measure sprint velocity.',
                'When generative AI and autonomous agent swarms drive software creation costs toward zero, developer capacity is no longer the main constraint.',
                'Organizations transition through three structural phases: Solid (roadmaps and PRDs under high code cost), Liquid (adaptive pods under medium cost), and Gas (autonomous AI creation where code cost approaches $0).'
            ],
            [
                d('Marginal Code Cost ($/Feature)', 'The fully-loaded cost to author and test a new software capability.', 'Solid: $5,000+ | Liquid: $500 | Gas: <$10'),
                d('Coordination Tax Ratio', 'Hours spent in cross-team alignment meetings relative to feature deployment frequency.', '< 10% of engineering bandwidth')
            ],
            'Audit your product organization against the Solid-Liquid-Gas coordinate system.',
            ['Calculate your average cost to produce a net-new production PR.', 'Measure the ratio of backlog grooming hours to feature deployment velocity.', 'Identify whether your product bottleneck is engineering throughput or customer uncertainty.'],
            {
                question: 'What becomes the primary product bottleneck when the cost of writing software approaches zero?',
                options: ['Developer typing speed', 'Managing uncertainty and evaluating product economics', 'Jira sprint capacity', 'Git merge conflict resolution'],
                correctIndex: 1,
                explanation: 'When code generation is free, shipping features is trivial. The scarce constraint becomes knowing what to build, mitigating system risk, and preserving unit margins.'
            }
        ),
        l('The Gas Phase Operating Model',
            [
                'In the Gas phase, un-gated feature creation produces exponential organizational complexity. Because developers can spin up features in hours, codebases balloon with unmaintained, low-margin features.',
                'The Product Economist replaces traditional agile ceremonies with deterministic economic gates and continuous hypothesis validation.',
                'The core operating mantra shifts completely: Stop managing output. Start managing capital and uncertainty.'
            ],
            [
                d('Feature Carrying Cost', 'Annualized maintenance and infrastructure drag per deployed feature.', '< 5% of feature ARR contribution'),
                d('Uncertainty Half-Life', 'Days required to validate or invalidate a core product assumption with live telemetry.', '< 7 business days')
            ],
            'Establish an economic gate requiring every autonomous agent feature to pass unit margin validation before deployment.',
            ['Calculate the projected inference and hosting cost per feature interaction.', 'Set a hard gross margin floor of 75% for all AI-enabled capabilities.', 'Deploy automated telemetry to track feature usage decay over 60 days.'],
            {
                question: 'Why do traditional PM roadmaps fail in the Gas phase?',
                options: ['Developers refuse to use Jira', 'Static 6-month plans assume code scarcity and linear delivery, creating massive coordination overhead when features can be generated and tested autonomously in days', 'Gantt charts do not support dark mode', 'SaaS subscriptions are obsolete'],
                correctIndex: 1,
                explanation: 'Static roadmaps assume code authoring takes months. When code creation is instantaneous, rigid roadmaps slow down feedback loops and protect zombie features.'
            }
        )
    ], '/vault/curriculum/tracks/product-economics/5-3', undefined, 'live'
);

tracks5and6Modules['product-economics/5-3'] = m('5-3', 'The Product Economist Scorecard', 'Replace story points and sprint velocity with ROIC, gross margin contribution, and feature-level P&L ownership.', t6,
    ['Construct a Product Economist Scorecard', 'Calculate Feature-Level ROIC', 'Enforce gross margin floors across product tiers'], [
        l('The Flaw of Velocity Metrics',
            [
                'Story points and velocity measure activity, not business value. A team can achieve 100% sprint completion while actively destroying enterprise value by shipping un-monetized features that increase technical debt.',
                'A Product Economist views features as capital assets that either generate positive cash flow or accumulate carrying liabilities.',
                'The Product Economist Scorecard tracks three core metrics: Feature Gross Margin Contribution, Return on Invested Capital (ROIC), and Product Debt Drag.'
            ],
            [
                d('Feature ROIC', 'Net annualized gross profit generated divided by total R&D capital invested.', '> 3.0x over 18 months'),
                d('Feature Margin Floor', 'Gross profit margin of a feature tier after deducting all infrastructure and LLM token COGS.', 'Minimum 75% gross margin')
            ],
            'Build a feature-level P&L scorecard for your top 5 product modules.',
            ['Attribute monthly subscription and expansion revenue to specific feature modules.', 'Deduct direct cloud hosting and LLM token inference costs.', 'Calculate net gross margin percentage per feature.'],
            {
                question: 'Why is sprint velocity an inadequate primary metric for product management performance?',
                options: ['Engineers dislike estimation meetings', 'Velocity measures the volume of code shipped, not whether the code generates profitable revenue or accumulates maintenance debt', 'Velocity cannot be calculated in agile software', 'Investors only care about headcounts'],
                correctIndex: 1,
                explanation: 'Velocity is a speed metric, not an economic metric. Shipping negative-margin features faster only accelerates financial insolvency.'
            }
        )
    ], '/vault/curriculum/tracks/product-economics/5-4', undefined, 'live'
);

tracks5and6Modules['product-economics/5-4'] = m('5-4', 'Feature Bloat Calculus & The Sunset Protocol', 'Quantify the negative carry of unused features and execute deterministic deprecation protocols to recover gross margin.', t6,
    ['Calculate Feature Negative Carry', 'Execute The Sunset Protocol', 'Deprecate zombie features safely'], [
        l('The Mathematics of Feature Bloat',
            [
                'Every feature added to a codebase incurs a permanent maintenance annuity: bug fixes, security patches, library updates, and cognitive load on engineers.',
                'If a feature is used by 2% of active users but accounts for 15% of support tickets and test suite execution time, it has severe negative carry.',
                'Feature Bloat Calculus quantifies the annual dollar loss of keeping low-utility features alive.'
            ],
            [
                d('Feature Negative Carry', 'Annualized maintenance and support cost minus direct revenue attribution.', '< $0 indicates value destruction'),
                d('Zombie Feature Ratio', 'Percentage of active codebase features with < 5% monthly active user adoption.', '< 10% target')
            ],
            'Run a feature utilization audit to identify candidate capabilities for deprecation.',
            ['Query production telemetry for features with < 2% monthly active usage.', 'Calculate fully-loaded maintenance hours spent supporting these features.', 'Present the Sunset Protocol business case to executive leadership.'],
            {
                question: 'What is the Sunset Protocol?',
                options: ['A method for shutting down cloud servers at night', 'A structured financial and operational framework for deprecating zombie features to return engineering capacity and gross margin to the business', 'An automated dark mode UI trigger', 'A software licensing contract clause'],
                correctIndex: 1,
                explanation: 'The Sunset Protocol is the disciplined process of identifying, announcing, and removing negative-carry features to reclaim R&D capital.'
            }
        )
    ], '/vault/curriculum/tracks/product-economics/5-13', undefined, 'live'
);

tracks5and6Modules['product-economics/5-13'] = m('5-13', 'Product Roadmap Economics in the AI Era', 'Replace fixed roadmaps with probabilistic decision trees and economic gating mechanisms.', t6,
    ['Design economic gating frameworks', 'Calculate opportunity cost of roadmaps', 'Structure continuous validation loops'], [
        l('Probabilistic Roadmaps',
            [
                'Fixed 12-month roadmaps are deterministic plans for probabilistic environments. In the AI era, model capability jumps and code generation speed render long-term roadmaps obsolete within weeks.',
                'The Product Economist builds probabilistic roadmaps structured as decision trees: initiatives are funded in tranches based on empirical risk reduction milestones.',
                'By treating product initiatives as capital investment options, organizations cut losing bets early and double down on proven margin drivers.'
            ],
            [
                d('Stage-Gate Funding Tranche', 'R&D capital released upon meeting specific uncertainty reduction metrics.', 'Quarterly tranche governance'),
                d('Pivot Latency', 'Days required to reallocate agent swarms and engineering capacity upon hypothesis invalidation.', '< 5 business days')
            ],
            'Replace a fixed quarterly roadmap with a 3-stage economic gate: Discovery Option, Pilot Tranche, and Scale Gate.',
            ['Define measurable validation gates for each initiative.', 'Cap exploration spend at 10% of total product R&D budget.', 'Enforce automatic sunset if pilot metrics fail unit margin thresholds.'],
            {
                question: 'What is the primary advantage of stage-gate economic funding over fixed annual roadmaps?',
                options: ['It eliminates the need for product managers', 'It limits capital exposure on unvalidated assumptions and allows rapid reallocation of engineering swarms to high-margin initiatives', 'It guarantees 100% feature adoption', 'It satisfies SOC2 requirements'],
                correctIndex: 1,
                explanation: 'Stage-gate funding prevents organizations from sinking millions into unvalidated features by requiring empirical proof of value before scaling capital.'
            }
        )
    ], '/vault/curriculum/tracks/product-economics/5-14', undefined, 'live'
);

tracks5and6Modules['product-economics/5-14'] = m('5-14', 'Product-Finance Partnership', 'Build a shared operating language between Product, Engineering, and Finance to protect gross margins and enterprise multiples.', t6,
    ['Align Product KPIs with CFO metrics', 'Model capitalization of R&D vs OpEx', 'Present board-ready economic scorecards'], [
        l('Bridging the Product-Finance Divide',
            [
                'CFOs and CPOs frequently talk past each other: CPOs report user engagement and sprint completion, while CFOs care about gross margin, Rule of 40, and cash burn.',
                'When product leaders speak in financial terms - explaining how architectural refactoring expands gross margin by 400 basis points - engineering investments receive immediate board support.',
                'The Product Economist partners with Finance to establish real-time margin telemetry across all customer tiers.'
            ],
            [
                d('Gross Margin Expansion Contribution', 'Basis points of gross margin improvement delivered through product and architecture optimization.', '> 200 bps annually'),
                d('R&D Capitalization Accuracy', 'Percentage of software engineering development properly capitalized under GAAP/IFRS.', 'Compliant audit trail')
            ],
            'Design a 1-page executive economic dashboard uniting product metrics with financial P&L outcomes.',
            ['Map active feature adoption to per-tenant subscription revenue.', 'Deduct direct cloud hosting and token inference COGS.', 'Present monthly unit margin trends directly to the CFO.'],
            {
                question: 'How does a Product Economist effectively communicate technical investments to a CFO?',
                options: ['By explaining Kubernetes pod scaling', 'By framing technical refactoring and feature sunsetting in terms of gross margin expansion, COGS reduction, and enterprise valuation multiple preservation', 'By demanding higher engineering headcount', 'By presenting Jira velocity burn-down charts'],
                correctIndex: 1,
                explanation: 'CFOs allocate capital based on returns. Translating technical health into gross margin and valuation impact bridges the divide between engineering and finance.'
            }
        )
    ], '/vault/curriculum/tracks/product-economics/5-15', undefined, 'live'
);

tracks5and6Modules['product-economics/5-15'] = m('5-15', 'AI Product Economics Synthesis', 'Master the end-to-end framework uniting the Software Phase Transition, the Inference Dividend Model, and the Product Economist scorecard.', t6,
    ['Synthesize all product economics frameworks', 'Conduct an enterprise product capital audit', 'Defend long-term SaaS gross margins'], [
        l('The Sovereign Product Economist Operating System',
            [
                'The culmination of Product Economics is a unified operating system: knowing when to write code, when to delete code, and when to enforce deterministic boundaries over AI agents.',
                'As software organizations navigate the transition into the Gas phase of code abundance, the enduring competitive moat is not code generation speed - it is capital efficiency, system architecture durability, and margin preservation.',
                'Leaders who master this synthesis operate not merely as feature managers, but as sovereign capital allocators who protect enterprise value in the age of AI.'
            ],
            [
                d('Enterprise Valuation Multiple Protection', 'Preservation of top-quartile SaaS ARR multiples through superior gross margins and low technical debt.', '10x-15x ARR multiple benchmark'),
                d('Autonomous Efficiency Ratio', 'Revenue generated per R&D dollar invested in autonomous AI agent swarms.', '> $5.00 return per $1.00 R&D')
            ],
            'Conduct a full 360-degree Product Economics Audit across your portfolio.',
            ['Audit feature-level unit margins using the AI Unit Economics Benchmark (AUEB).', 'Quantify technical debt liabilities using the Product Debt Index (PDI).', 'Establish your organization position on the Solid-Liquid-Gas Phase Transition matrix.'],
            {
                question: 'What defines the ultimate mandate of a Product Economist in the era of autonomous AI?',
                options: ['Maximizing the number of features released per sprint', 'Acting as a disciplined capital allocator who manages uncertainty, system architecture efficiency, and unit margins while eliminating negative-carry software liabilities', 'Writing LeetCode algorithms for junior developers', 'Outsourcing all engineering to third-party vendors'],
                correctIndex: 1,
                explanation: 'In an age of code abundance, the highest leverage product leadership lies in capital allocation, uncertainty management, and ruthless margin defense.'
            }
        )
    ], '/vault/curriculum', undefined, 'live'
);
