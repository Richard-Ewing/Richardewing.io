import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks6to10Modules: Record<string, CurriculumModule> = {};

// ═══════════════════ TRACK 6: Technical Debt Valuation ═══════════════════
const t6Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
    ['6-1', 'Technical Debt Taxonomy', 'Identify and categorize 4 types of tech debt.',
        ['Categorize debt visually', 'Quantify interest rate of debt', 'Identify toxic vs strategic debt', 'Build a debt registry'],
        [
            l('Lesson 1: The Four Debt Quadrants', 'Technical debt is not monolithic. Reckless-deliberate debt (shipping without tests to hit a deadline) differs fundamentally from prudent-deliberate debt (choosing a simpler architecture knowing you\'ll refactor). Each quadrant has a different interest rate and repayment strategy.', [
                d('Reckless-Deliberate Rate', 'Debt incurred knowingly with no plan to repay. Compounds at 15-25% velocity loss per quarter.', 'Remediate within 2 sprints'),
                d('Prudent-Deliberate Rate', 'Strategic shortcuts with a documented repayment plan. Typically 5-10% drag.', 'Acceptable if payback < 6 months'),
                d('Reckless-Inadvertent Rate', 'Debt from inexperience or knowledge gaps. Often the most expensive — discovered late.', 'Training investment ROI: 300%+')
            ], 'Classify your top 10 known debt items into the four quadrants. Calculate the aggregate interest rate for each quadrant.'),
            l('Lesson 2: Building a Living Debt Registry', 'A debt registry is not a spreadsheet — it\'s a financial instrument. Each entry must include: the origin commit, the estimated remediation cost (in engineering-days), the monthly interest payment (in velocity points), and the risk of compound failure.', [
                d('Registry Completeness', 'Percentage of known debt items formally documented with cost estimates.', 'Target: > 80% coverage'),
                d('Interest Accrual', 'Monthly velocity loss attributable to documented debt items.', 'Healthy: < 15% of sprint capacity'),
                d('Remediation Velocity', 'Rate at which debt items are being resolved vs. created.', 'Net-negative debt creation')
            ], 'Create a debt registry for your primary codebase with at least 15 entries, each with estimated remediation cost and monthly interest.'),
            l('Lesson 3: Presenting Debt to the Board', 'Executives don\'t understand "tech debt." They understand capital depreciation. Frame technical debt as deferred maintenance on a capital asset — the software — that reduces its productive capacity and increases operational risk.', [
                d('Asset Depreciation', 'Software value loss per quarter due to unresolved debt.', 'Express as % of original development cost'),
                d('Operational Risk', 'Probability × impact of debt-induced outages or security breaches.', 'Quantify in annual expected loss ($)'),
                d('Remediation ROI', 'Expected velocity gain per dollar invested in debt reduction.', 'Target: 3x ROI within 12 months')
            ], 'Draft a one-page board memo framing your biggest debt items as asset depreciation with specific dollar amounts.')
        ]
    ],
    ['6-2', 'Refactoring Economics', 'Calculate ROI on rewriting vs refactoring.',
        ['Establish rewrite ROI models', 'Measure refactor velocity gains', 'Prevent second-system effect', 'Build refactoring business cases'],
        [
            l('Lesson 1: The Rewrite Trap', 'The "Second System Effect" (Fred Brooks, 1975) is alive and well. 67% of full rewrites exceed their original timeline by 2x or more. The economic question is never "should we rewrite?" — it\'s "what is the NPV of incremental refactoring vs. the NPV of a full rewrite, including opportunity cost?"', [
                d('Rewrite Failure Rate', 'Percentage of full rewrites that exceed budget by 2x+. Industry data from Standish Group.', '67% fail to deliver on time/budget'),
                d('Opportunity Cost', 'Revenue lost while engineering is focused on rewrite instead of new features.', 'Calculate: Monthly feature revenue × rewrite months'),
                d('Strangler Fig ROI', 'Incremental replacement typically delivers 40% of rewrite value at 20% of the cost.', 'Start with highest-traffic modules')
            ], 'Model the full NPV of rewriting your oldest service vs. incrementally refactoring it over 12 months. Include opportunity cost.'),
            l('Lesson 2: Measuring Refactoring Velocity Gains', 'Every refactoring effort must produce measurable velocity improvement. If you can\'t measure it, you can\'t justify it. Track: deployment frequency before/after, mean lead time before/after, and defect escape rate before/after.', [
                d('Deployment Frequency Delta', 'Change in deployment frequency after refactoring a component.', 'Target: 2x improvement within 90 days'),
                d('Lead Time Reduction', 'Reduction in time from commit to production for the refactored component.', 'Target: 50% reduction'),
                d('Defect Escape Rate', 'Reduction in production bugs originating from the refactored component.', 'Target: 60% reduction in 6 months')
            ], 'Select one component, measure its current DORA metrics, refactor it, and measure again after 30 days.'),
            l('Lesson 3: The Refactoring Business Case', 'A business case for refactoring must answer three questions: (1) What is the current cost of NOT refactoring? (2) What is the investment required? (3) What is the expected return and payback period?', [
                d('Current Drag Cost', 'Monthly engineering cost attributable to the debt in the target component.', 'Engineer salary × % time spent working around debt'),
                d('Investment Required', 'Total engineering-days to complete the refactoring, including testing and deployment.', 'Include 30% buffer for unknowns'),
                d('Payback Period', 'Months until cumulative savings exceed the investment.', 'Target: < 6 months for approval')
            ], 'Build a complete business case for your highest-priority refactoring project with a 12-month financial model.')
        ]
    ],
    ['6-3', 'Codebase Valuation', 'Value a software asset for M&A.',
        ['Perform code quality audits', 'Assess architectural fitness', 'Measure key person dependencies', 'Calculate enterprise value'],
        [
            l('Lesson 1: Software as a Capital Asset', 'In M&A, software is valued as either (a) a cost-avoidance asset (it would cost $X to rebuild) or (b) a revenue-generating asset (it produces $Y/year). The gap between these two valuations is where PE firms create value — and where technical debt destroys it.', [
                d('Replacement Cost', 'The estimated cost to rebuild the software from scratch with current team.', 'COCOMO II or function-point analysis'),
                d('Revenue Attribution', 'Percentage of company revenue directly enabled by the software asset.', 'Typically 60-90% for SaaS companies'),
                d('Debt Discount', 'Reduction in asset value due to technical debt. Typically 10-40% for high-debt codebases.', 'PDI score → valuation multiplier')
            ], 'Calculate the replacement cost and revenue attribution for your primary software asset.'),
            l('Lesson 2: Key Person Dependencies', 'A codebase with key-person risk is worth less. If one engineer\'s departure would cripple the product, that\'s a valuation haircut. Measure bus factor, code ownership concentration, and knowledge distribution.', [
                d('Bus Factor', 'Minimum number of engineers whose departure would severely impact the product.', 'Healthy: ≥ 3 per critical component'),
                d('Ownership Concentration', 'Percentage of code authored by the top contributor. High concentration = high risk.', 'Warning: > 40% by single author'),
                d('Documentation Coverage', 'Percentage of critical systems with up-to-date architectural documentation.', 'Target: > 70% for M&A readiness')
            ], 'Run a git analysis to calculate bus factor and ownership concentration for your top 5 repositories.'),
            l('Lesson 3: The Quality of Technology (QoT) Report', 'A QoT report is the definitive deliverable in technical due diligence. It includes: architecture assessment, code quality metrics, deployment maturity, security posture, team assessment, and a remediation cost estimate.', [
                d('Architecture Score', 'Overall fitness of the system architecture for scaling and maintenance.', '1-5 scale with specific criteria per level'),
                d('Code Quality Index', 'Composite score from static analysis, test coverage, and complexity metrics.', 'Target: > 3.5/5 for clean acquisition'),
                d('Remediation Estimate', 'Total cost to bring the asset to "clean" state post-acquisition.', 'Subtract from purchase price')
            ], 'Produce a mock QoT report for your primary codebase covering all six dimensions.')
        ]
    ],
];

t6Mods.forEach(([id, title, desc, takeaways, lessons], i) => {
    const nextId = i < t6Mods.length - 1 ? t6Mods[i + 1][0] : undefined;
    tracks6to10Modules[`technical-debt-valuation/${id}`] = m(id.replace('-', '.'), title, desc, 'Track 6 — Technical Debt Valuation', takeaways, lessons,
        nextId ? `/vault/curriculum/tracks/technical-debt-valuation/${nextId}` : undefined);
});

// ═══════════════════ TRACK 7: Enterprise Architecture ═══════════════════
const t7Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
    ['7-1', 'Domain Driven Design', 'Mapping subdomains to bounded contexts.',
        ['Identify bounded contexts', 'Define ubiquitous language', 'Isolate core domains', 'Architect context maps'],
        [
            l('Lesson 1: Bounded Context Economics', 'Every misaligned bounded context creates a hidden tax on every feature that crosses its boundary. Teams working across poorly defined contexts spend 30-50% more time on integration than on business logic.', [
                d('Context Coupling Cost', 'Engineering hours lost per sprint to cross-context integration.', 'Track via JIRA labels per bounded context'),
                d('Ubiquitous Language Drift', 'Number of terms with conflicting definitions across teams.', 'Target: 0 conflicts in core domain'),
                d('Context Map Coverage', 'Percentage of system interactions with documented context relationships.', 'Target: 100% for core domain')
            ], 'Map your system\'s bounded contexts. Identify the 3 most expensive cross-context integrations and calculate their monthly cost.'),
            l('Lesson 2: Strategic vs Tactical Design', 'Strategic DDD decides WHAT to build. Tactical DDD decides HOW. Most teams skip strategic design and jump into aggregates and repositories — then wonder why their microservices are just distributed monoliths.', [
                d('Core Domain Investment', 'Percentage of engineering effort allocated to the core differentiating domain.', 'Target: > 60% on core, < 20% on generic'),
                d('Anti-Corruption Layer Cost', 'Engineering investment to isolate legacy systems from new bounded contexts.', 'Typically 2-4 weeks per integration point'),
                d('Domain Event Coverage', 'Percentage of state changes communicated via domain events vs direct calls.', 'Target: > 80% for loosely coupled systems')
            ], 'Classify your system domains into Core, Supporting, and Generic. Calculate the current investment ratio.'),
            l('Lesson 3: Context Maps for the Board', 'A context map is the most powerful architectural communication tool. It shows how systems relate, where coupling exists, and where investment is needed — in language executives can understand.', [
                d('Upstream/Downstream Dependencies', 'Number of one-directional dependencies between contexts.', 'Fewer = more resilient'),
                d('Shared Kernel Risk', 'Components shared between contexts that create deployment coupling.', 'Target: eliminate or version strictly'),
                d('Partnership Alignment', 'Teams that must coordinate releases due to shared boundaries.', 'Minimize cross-team release dependencies')
            ], 'Draw a context map of your system and present it to a non-technical stakeholder. Identify the riskiest relationship.')
        ]
    ],
    ['7-2', 'Microservices vs Monoliths', 'The economic threshold for distributed systems.',
        ['Calculate network boundary costs', 'Assess operational readiness', 'Design anti-corruption layers', 'Measure latency budgets'],
        [
            l('Lesson 1: The Distributed Systems Tax', 'Microservices are not free. Each network boundary adds latency (1-10ms), operational complexity (monitoring, tracing, deployment), and cognitive load. The economic threshold: you need the scaling benefits to exceed the operational tax.', [
                d('Network Boundary Cost', 'Added latency and failure probability per service-to-service call.', '1-10ms per hop; 99.9% × 99.9% = 99.8% cascade'),
                d('Operational Overhead', 'Additional infrastructure cost per microservice (CI/CD, monitoring, on-call).', '$2-5K/month per service at scale'),
                d('Team Autonomy Gain', 'Deployment independence gained by separating services.', 'Measure: independent deploy frequency')
            ], 'Calculate the total operational cost of your microservices vs. the autonomy and scaling benefits they provide.'),
            l('Lesson 2: The Monolith-First Strategy', 'Start with a well-structured monolith. Extract services only when you have clear scaling bottlenecks or team autonomy needs. The modular monolith pattern gives you 80% of microservices benefits at 20% of the cost.', [
                d('Extraction Trigger', 'The specific metric threshold that justifies extracting a service.', 'Team size > 8 OR scale > 10x differential'),
                d('Modular Monolith Benefit', 'Percentage of microservices benefits achievable without network boundaries.', 'Typically 70-85% with proper module isolation'),
                d('Migration Cost', 'Engineering investment to extract a module into an independent service.', '4-12 weeks per extraction')
            ], 'Identify your 3 most likely extraction candidates. For each, calculate the trigger threshold and migration cost.'),
            l('Lesson 3: Hybrid Architecture Economics', 'Most successful systems are hybrids. A monolithic core with extracted services for specific scaling needs. The key is knowing WHEN to extract and WHAT the economic threshold is.', [
                d('Hybrid TCO', 'Total cost of operating a hybrid architecture vs pure micro or pure mono.', 'Typically 30-50% less than full microservices'),
                d('Scaling Efficiency', 'Cost per unit of additional capacity in hybrid vs distributed.', 'Measure: $/1000 requests at peak'),
                d('Cognitive Load', 'Developer mental overhead measured by onboarding time for new engineers.', 'Target: < 2 weeks to first meaningful PR')
            ], 'Design a hybrid architecture proposal for your system. Justify each extraction decision with specific economic thresholds.')
        ]
    ],
    ['7-3', 'Event-Driven Architecture', 'Decoupling dependencies via event streams.',
        ['Design event sourcing systems', 'Handle eventual consistency', 'Architect CQRS patterns', 'Build robust message brokers'],
        [
            l('Lesson 1: Event Sourcing Economics', 'Event sourcing stores every state change as an immutable event. Storage is cheap ($0.023/GB/month on S3). The value is in auditability, temporal queries, and the ability to replay history — worth 10-50x the storage cost in regulated industries.', [
                d('Storage Cost', 'Monthly cost of storing all events vs. current-state-only.', 'Typically 2-5x more storage, but < $100/month for most apps'),
                d('Audit Value', 'Cost of manual audit compliance vs. event-sourced automatic audit trails.', 'Saves $50-200K/year in regulated industries'),
                d('Replay Capability', 'Ability to recreate any historical state for debugging or analytics.', 'Mean time to debug complex issues: 80% reduction')
            ], 'Calculate the storage cost of event sourcing your highest-volume domain vs. the audit and debugging value it provides.'),
            l('Lesson 2: CQRS Cost-Benefit Analysis', 'Command Query Responsibility Segregation separates read and write models. The cost: operational complexity and eventual consistency. The benefit: independent scaling of reads vs. writes, optimized query models.', [
                d('Read/Write Ratio', 'Your system\'s read-to-write ratio determines CQRS ROI. Higher ratios = more benefit.', 'CQRS breaks even at > 10:1 read/write ratio'),
                d('Consistency Window', 'Maximum acceptable delay between write and read model synchronization.', 'Most business domains: < 500ms acceptable'),
                d('Operational Complexity', 'Additional infrastructure and monitoring required for separate read/write stores.', '20-40% more ops overhead')
            ], 'Calculate your system\'s read-to-write ratio. Determine if CQRS would be economically justified.'),
            l('Lesson 3: Message Broker Selection', 'Kafka, RabbitMQ, SQS, Pulsar — each has radically different cost profiles. Kafka excels at high-throughput event streaming but costs $2-10K/month in managed services. SQS costs pennies but lacks replay and ordering guarantees.', [
                d('Throughput Cost', 'Cost per million messages processed across different broker options.', 'SQS: $0.40/M | Kafka: $0.05/M at scale'),
                d('Operational Burden', 'Engineering time to operate and maintain the message infrastructure.', 'Managed Kafka: 2 hrs/week | Self-hosted: 20 hrs/week'),
                d('Replay Window', 'How far back you can replay events for recovery or reprocessing.', 'Kafka: unlimited | SQS: 14 days max')
            ], 'Compare 3 message broker options for your highest-volume event stream. Include TCO, operational burden, and feature fit.')
        ]
    ],
];

t7Mods.forEach(([id, title, desc, takeaways, lessons], i) => {
    const nextId = i < t7Mods.length - 1 ? t7Mods[i + 1][0] : undefined;
    tracks6to10Modules[`enterprise-architecture/${id}`] = m(id.replace('-', '.'), title, desc, 'Track 7 — Enterprise Architecture', takeaways, lessons,
        nextId ? `/vault/curriculum/tracks/enterprise-architecture/${nextId}` : undefined);
});

// ═══════════════════ TRACK 8: CTO Transition ═══════════════════
const t8Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
    ['8-1', 'First 90 Days', 'The definitive CTO onboarding playbook.',
        ['Assess organizational health', 'Build engineering trust', 'Ship an early win', 'Map the technology landscape'],
        [
            l('Lesson 1: The Listening Tour', 'Your first 30 days are for listening, not fixing. Conduct 1:1s with every engineer, PM, and stakeholder. Map: team morale, technical pain points, deployment bottlenecks, and political dynamics. The CTO who acts before understanding destroys trust.', [
                d('1:1 Coverage', 'Percentage of engineering org spoken to individually in first 30 days.', 'Target: 100% of ICs and managers'),
                d('Pain Point Index', 'Ranked list of top 10 engineering frustrations with frequency and severity.', 'Document with specific examples, not generalizations'),
                d('Trust Baseline', 'Anonymous engineering satisfaction score at Day 30 to benchmark against.', 'Use standard eNPS survey')
            ], 'Complete a listening tour template: 1:1 with every direct report and skip-level. Document the top 10 pain points with severity.'),
            l('Lesson 2: The 30-Day Quick Win', 'After listening, ship ONE visible fix in days 30-45. Pick the #1 pain point that is technically simple but politically valuable. Fix a broken CI pipeline. Eliminate a pointless meeting. Remove a bureaucratic approval gate.', [
                d('Quick Win Impact', 'Visible improvement that builds trust with the team.', 'Must be felt by > 50% of engineers'),
                d('Execution Time', 'Time from decision to completion.', 'Target: < 2 weeks'),
                d('Trust Delta', 'Change in team sentiment after delivering the quick win.', 'Measure via informal Slack pulse or follow-up 1:1s')
            ], 'Identify your Quick Win from the listening tour. Create a 2-week execution plan with clear success criteria.'),
            l('Lesson 3: The 90-Day Technology Landscape', 'By Day 90, you must own the technology landscape document. It covers: system architecture (as-is), critical dependencies, deployment maturity, security posture, and the top 5 strategic technology risks.', [
                d('Architecture Currency', 'How recently the architecture documentation was last updated.', 'If > 6 months old, it\'s fiction'),
                d('Dependency Risk', 'Number of single-vendor or single-person dependencies in critical path.', 'Target: 0 single-point failures'),
                d('Strategic Risk Register', 'Top 5 technology risks with probability and financial impact.', 'Present to board at first quarterly review')
            ], 'Produce your 90-Day Technology Landscape document covering all five dimensions.')
        ]
    ],
    ['8-2', 'Engineering Org Design', 'Building resilient development teams.',
        ['Design team topologies', 'Calculate optimal span of control', 'Establish career matrices', 'Build platform engineering teams'],
        [
            l('Lesson 1: Team Topologies in Practice', 'Four fundamental team types: Stream-aligned (delivers business value), Platform (enables stream-aligned), Enabling (coaches and upskills), and Complicated-Subsystem (deep specialist). Most orgs have too many stream-aligned teams and zero platform teams — that\'s why velocity degrades at scale.', [
                d('Stream-to-Platform Ratio', 'Number of stream-aligned teams per platform team.', 'Optimal: 4-6 stream teams per platform team'),
                d('Cognitive Load Score', 'Engineer self-reported complexity burden on a 1-10 scale.', 'Warning threshold: > 7 average'),
                d('Interaction Mode', 'How teams interact: collaboration, X-as-a-Service, or facilitation.', 'Document and enforce explicitly')
            ], 'Map your current teams into the four topologies. Identify gaps and propose a restructuring plan.'),
            l('Lesson 2: Span of Control Economics', 'Every manager can effectively lead 5-9 direct reports. Exceed 9 and 1:1 quality degrades. Below 5 and management overhead exceeds its value. The math: (manager salary) / (number of reports) = management cost per engineer.', [
                d('Optimal Span', 'The number of direct reports that maximizes manager effectiveness.', '5-7 for hands-on managers, 7-9 for senior leaders'),
                d('Management Overhead', 'Percentage of engineering budget spent on management vs. individual contribution.', 'Healthy: 15-20% | Bloated: > 25%'),
                d('IC-to-Manager Ratio', 'Total individual contributors divided by total managers.', 'Target: 6:1 to 8:1')
            ], 'Calculate your organization\'s IC-to-manager ratio and management overhead percentage. Compare to benchmarks.'),
            l('Lesson 3: Career Ladder Design', 'A clear career ladder reduces attrition by 30-40%. Each level must have: specific technical competencies, leadership expectations, scope of impact, and compensation bands. Ambiguity in leveling is the #1 cause of senior engineer departures.', [
                d('Level Clarity', 'Percentage of engineers who can clearly articulate what\'s needed for their next promotion.', 'Target: > 90%'),
                d('Attrition Correlation', 'Relationship between unclear leveling and voluntary departures.', 'Companies with unclear ladders: 2x attrition rate'),
                d('Compensation Band Width', 'Spread within each level to reward growth without requiring promotion.', 'Typically 20-30% spread per level')
            ], 'Audit your current career ladder. For each level, verify that criteria are specific, measurable, and understood by the team.')
        ]
    ],
    ['8-3', 'Board Communication', 'Translating engineering to the board.',
        ['Construct engineering scorecards', 'Communicate risk to non-technical partners', 'Present technical debt conceptually', 'Defend R&D budgets'],
        [
            l('Lesson 1: The Engineering Scorecard', 'Boards don\'t want dashboards — they want a scorecard. 4-6 metrics, each with a trend line, a benchmark, and a narrative. Green/yellow/red status. No jargon. Every metric must answer: "Is our technology investment generating returns?"', [
                d('Metric Count', 'Number of metrics on the engineering scorecard.', 'Exactly 4-6. More is noise, fewer is incomplete.'),
                d('Trend Visibility', 'Each metric shows 3+ quarters of directional movement.', 'Boards invest in improving trends, not snapshots'),
                d('Benchmark Context', 'Each metric compared to industry, stage, and historical self.', 'Use Accelerate/DORA for deployment metrics')
            ], 'Build a 5-metric engineering scorecard for your next board meeting. Include 3 quarters of trend data.'),
            l('Lesson 2: Presenting Risk in Dollars', 'Never say "technical debt." Say "deferred maintenance on a $10M capital asset that is depreciating at 15% per quarter." Never say "we need to refactor." Say "a $200K investment that will recover $800K in annual engineering capacity."', [
                d('Financial Translation', 'Convert every technical risk into a dollar amount and probability.', 'Always: expected loss = probability × impact'),
                d('Investment Framing', 'Present engineering requests as investments with expected returns.', '3x ROI minimum for board approval'),
                d('Competitive Context', 'Frame technology health relative to competitors and market expectations.', 'Use public benchmarks and analyst reports')
            ], 'Translate your top 3 technical risks into financial language. Calculate expected annual loss for each.'),
            l('Lesson 3: Defending the R&D Budget', 'When the CFO asks to cut R&D by 20%, you need a model that shows the impact: slower feature velocity → delayed revenue → increased tech debt interest → higher future remediation cost. Make the cost of cutting MORE scary than the cost of investing.', [
                d('R&D-to-Revenue Ratio', 'Engineering spend as a percentage of revenue. Context-dependent by stage.', 'Early SaaS: 25-40% | Growth: 15-25% | Mature: 10-15%'),
                d('Feature Velocity Impact', 'Projected feature delivery reduction per 10% R&D cut.', 'Typically 15-20% velocity loss per 10% budget cut'),
                d('Debt Acceleration', 'Rate at which technical debt increases when maintenance budget is cut.', '10% budget cut → 25-35% faster debt accumulation')
            ], 'Build a scenario model showing the 12-month impact of a 20% R&D budget cut on velocity, debt, and revenue.')
        ]
    ],
];

t8Mods.forEach(([id, title, desc, takeaways, lessons], i) => {
    const nextId = i < t8Mods.length - 1 ? t8Mods[i + 1][0] : undefined;
    tracks6to10Modules[`cto-transition/${id}`] = m(id.replace('-', '.'), title, desc, 'Track 8 — CTO Transition', takeaways, lessons,
        nextId ? `/vault/curriculum/tracks/cto-transition/${nextId}` : undefined);
});

// ═══════════════════ TRACK 9: Security & Compliance ═══════════════════
const t9Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
    ['9-1', 'Data Residency', 'Managing cross-border data constraints.',
        ['Map compliance boundaries', 'Architect sharded environments', 'Implement cell-based architecture', 'Audit data transmission'],
        [
            l('Lesson 1: Data Sovereignty Economics', 'GDPR fines can reach 4% of global annual revenue. But compliance isn\'t just risk avoidance — it\'s market access. Without EU data residency, you cannot sell to European enterprises. The compliance investment IS the revenue enablement.', [
                d('Compliance Cost', 'Annual investment to maintain data residency compliance per region.', '$50-200K per region for mid-market SaaS'),
                d('Market Access Value', 'Revenue unlocked by achieving compliance in a new region.', 'EU enterprise contracts: typically $100K-1M ARR'),
                d('Fine Exposure', 'Maximum financial penalty for non-compliance in target jurisdictions.', 'GDPR: 4% of global revenue | CCPA: $7,500/violation')
            ], 'Map your current data flows. Identify every cross-border transmission and calculate your fine exposure.'),
            l('Lesson 2: Cell-Based Architecture', 'Cell-based architecture isolates customer data into independent cells, each deployable in a specific region. This is the gold standard for data residency — each cell is a fully independent stack with its own database, compute, and networking.', [
                d('Cell Overhead', 'Additional infrastructure cost per cell vs. shared multi-tenant.', 'Typically 30-50% more per-customer, but enables premium pricing'),
                d('Deployment Complexity', 'Operational burden of managing multiple independent cells.', 'Requires IaC maturity level 4+'),
                d('Isolation Guarantee', 'Degree of data isolation between cells.', 'Target: complete physical isolation for regulated customers')
            ], 'Design a cell-based architecture for your top 3 regulated markets. Calculate the per-cell overhead.'),
            l('Lesson 3: Cross-Border Data Flow Audit', 'Map every data flow that crosses a national boundary. Include: CDN edge nodes, analytics services, error tracking, email providers, and backup storage. Most companies discover 10-20 unauthorized cross-border flows in their first audit.', [
                d('Flow Count', 'Total number of identified cross-border data transmissions.', 'Average first audit: 15-25 unauthorized flows'),
                d('Remediation Priority', 'Risk-ranked list of flows requiring remediation.', 'Priority 1: PII flows, Priority 2: business data'),
                d('Transfer Mechanisms', 'Legal basis for each cross-border transfer (SCCs, BCRs, adequacy).', 'Document mechanism per flow')
            ], 'Conduct a cross-border data flow audit. Document every transmission and its legal basis.')
        ]
    ],
    ['9-2', 'SOC2 & ISO27001', 'Automating compliance protocols.',
        ['Establish internal security controls', 'Automate evidence collection', 'Manage recurring audits', 'Align Vanta/Drata workflows'],
        [
            l('Lesson 1: Compliance as Revenue', 'SOC2 Type II is a sales accelerator, not a cost center. Enterprise deals stall 3-6 months without it. The ROI: $150-300K compliance investment → $1-5M in unblocked enterprise pipeline. Calculate your compliance-to-revenue ratio.', [
                d('Pipeline Impact', 'Enterprise deals currently blocked or delayed by lack of SOC2.', 'Survey sales team for specific deal values'),
                d('Compliance Investment', 'Total annual cost including tooling, audit, and engineering time.', 'Typical: $150-300K/year for mid-market'),
                d('Revenue Unlock', 'ARR from enterprise contracts that require SOC2.', 'Track: deals won post-certification')
            ], 'Calculate your compliance ROI: total investment vs. enterprise pipeline unblocked.'),
            l('Lesson 2: Automating Evidence Collection', 'Manual evidence collection for SOC2 consumes 200-400 engineering hours per audit cycle. Vanta, Drata, or Secureframe reduce this to 20-40 hours. The automation ROI is immediate — first audit cycle pays for the tooling 3x over.', [
                d('Manual Hours', 'Engineering hours spent on evidence collection per audit cycle.', 'Pre-automation: 200-400 hrs | Post: 20-40 hrs'),
                d('Tooling Cost', 'Annual cost of compliance automation platforms.', 'Vanta: $10-50K/yr | Drata: $8-40K/yr'),
                d('Automation ROI', 'Engineering hours saved × hourly rate vs. tooling cost.', 'Typical: 3-5x ROI in year one')
            ], 'Audit your current evidence collection process. Calculate hours spent and compare to automated tooling costs.'),
            l('Lesson 3: Continuous Compliance', 'Annual audits are table stakes. Continuous compliance means your security posture is monitored in real-time. Drift detection, automated remediation, and continuous control testing — this is what separates "we passed the audit" from "we are actually secure."', [
                d('Control Drift Rate', 'Percentage of controls that fall out of compliance between audits.', 'Typical without monitoring: 15-30% drift per quarter'),
                d('MTTR for Controls', 'Mean time to detect and remediate a control failure.', 'With automation: < 24 hours | Without: discovered at next audit'),
                d('Continuous Testing', 'Number of controls continuously tested vs. manually verified.', 'Target: > 80% continuous testing')
            ], 'Implement continuous monitoring for your top 10 SOC2 controls. Set up drift detection alerts.')
        ]
    ],
    ['9-3', 'Zero Trust Networking', 'Beyond the VPN perimeter defense.',
        ['Implement identity-aware proxies', 'Establish continuous authentication', 'Remove implicit network trust', 'Enforce least privilege access'],
        [
            l('Lesson 1: The Death of the Perimeter', 'VPNs create a false sense of security. Once inside, lateral movement is unrestricted. Zero Trust assumes every request is hostile until proven otherwise — identity, device, location, and behavior are verified continuously.', [
                d('Lateral Movement Risk', 'Percentage of internal services accessible to any authenticated user.', 'Pre-Zero Trust: typically 60-80% | Target: < 5%'),
                d('VPN Cost', 'Total cost of VPN infrastructure vs. identity-aware proxy alternatives.', 'VPN: $5-15/user/month | BeyondCorp-style: $8-20/user/month'),
                d('Breach Blast Radius', 'Number of systems compromised if a single credential is stolen.', 'VPN: entire network | Zero Trust: single service')
            ], 'Map your current network trust model. Identify every service that trusts the network instead of the identity.'),
            l('Lesson 2: Identity-Aware Proxies', 'Replace VPN with identity-aware proxies (Google BeyondCorp, Cloudflare Access, Tailscale). Every request is authenticated, authorized, and encrypted — regardless of network location. The proxy is the new perimeter.', [
                d('Implementation Cost', 'Engineering effort to migrate from VPN to identity-aware proxy.', 'Typically 4-8 weeks for initial deployment'),
                d('User Experience', 'Reduction in authentication friction for end users.', 'Eliminates VPN connection step; SSO-based access'),
                d('Policy Granularity', 'Level of access control achievable per service, user, and device.', 'Per-request policy evaluation')
            ], 'Design a migration plan from VPN to identity-aware proxy for your top 5 internal services.'),
            l('Lesson 3: Continuous Authentication', 'Authentication is not a one-time event. Continuous authentication re-evaluates trust based on behavior: unusual login location, abnormal data access patterns, or device posture changes trigger step-up authentication or access revocation.', [
                d('Session Risk Score', 'Real-time risk assessment of each active session.', 'Low/Medium/High with automatic escalation'),
                d('Behavioral Baseline', 'Normal access patterns per user used to detect anomalies.', '30 days of data for baseline establishment'),
                d('Step-Up Trigger Rate', 'Percentage of sessions that trigger additional verification.', 'Healthy: 2-5% | Too high: friction | Too low: insufficient security')
            ], 'Implement a risk scoring model for your authentication system. Define 5 risk signals and their escalation actions.')
        ]
    ],
];

t9Mods.forEach(([id, title, desc, takeaways, lessons], i) => {
    const nextId = i < t9Mods.length - 1 ? t9Mods[i + 1][0] : undefined;
    tracks6to10Modules[`security-compliance/${id}`] = m(id.replace('-', '.'), title, desc, 'Track 9 — Security & Compliance', takeaways, lessons,
        nextId ? `/vault/curriculum/tracks/security-compliance/${nextId}` : undefined);
});

// ═══════════════════ TRACK 10: Generative AI Operations ═══════════════════
const t10Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
    ['10-1', 'Agentic Architectures', 'Orchestrating autonomous AI agents.',
        ['Design multi-agent supervisors', 'Establish agentic tool use', 'Manage context windows', 'Architect state machines for LLMs'],
        [
            l('Lesson 1: The Agent Cost Pyramid', 'Every agentic system has a cost pyramid: supervisor LLM (most expensive) → worker agents (mid-tier) → tool calls (cheapest). A poorly designed agent burns $50-200/hour in API costs. A well-designed one costs $2-10/hour for the same output.', [
                d('Supervisor Cost', 'Token cost of the orchestrating agent per task completion.', 'GPT-4o: $0.15-0.50/task | Claude: $0.10-0.40/task'),
                d('Worker Efficiency', 'Percentage of tasks resolved by cheaper worker models vs. supervisor.', 'Target: > 80% resolved by cheap models'),
                d('Tool Call Ratio', 'API/tool calls per agent task. Higher isn\'t always better.', 'Optimal: 3-7 tool calls per complex task')
            ], 'Instrument your agentic system to track cost per task completion. Identify the most expensive agent loops.'),
            l('Lesson 2: Multi-Agent Supervision Patterns', 'Three patterns dominate: (1) Hierarchical — a supervisor delegates to specialized workers, (2) Peer — agents negotiate and collaborate as equals, (3) Pipeline — agents process sequentially. Each has different cost, latency, and reliability profiles.', [
                d('Hierarchical Overhead', 'Supervisor token cost as percentage of total agent conversation.', 'Typically 15-30% of total tokens'),
                d('Peer Consensus Cost', 'Token cost of agent negotiation in peer networks.', 'Scales O(n²) — limit to 3-5 peers'),
                d('Pipeline Latency', 'Total end-to-end latency for sequential agent processing.', 'Sum of individual agent latencies + handoff overhead')
            ], 'Implement a simple hierarchical agent system with 1 supervisor and 3 workers. Measure cost and latency per task.'),
            l('Lesson 3: Context Window Management', 'Context is money. GPT-4o charges $2.50/M input tokens. A 128K context window fully utilized costs $0.32 per request. Smart context management — summarization, RAG injection, sliding windows — can reduce costs 70-90%.', [
                d('Context Utilization', 'Average percentage of context window used per request.', 'Most apps: < 10% utilized efficiently'),
                d('Summarization Savings', 'Cost reduction from progressive summarization of conversation history.', 'Typically 60-80% token reduction'),
                d('RAG vs Full Context', 'Cost of retrieving relevant chunks vs. passing entire documents.', 'RAG: $0.01-0.05/query | Full context: $0.10-0.50/query')
            ], 'Measure your current context window utilization. Implement summarization for conversations > 20 turns and measure savings.')
        ]
    ],
    ['10-2', 'RAG vs Fine-tuning', 'Economic thresholds for knowledge injection.',
        ['Calculate fine-tuning costs', 'Design vector search systems', 'Implement hybrid search algorithms', 'Evaluate RAG accuracy thresholds'],
        [
            l('Lesson 1: The RAG Economics Framework', 'RAG (Retrieval-Augmented Generation) costs: embedding generation ($0.02-0.13/M tokens), vector storage ($0.10-3.00/M vectors/month), and retrieval latency (50-200ms). Fine-tuning costs: $5-500 per training run but $0 incremental retrieval cost.', [
                d('RAG Per-Query Cost', 'Total cost of a single RAG-augmented query including embedding + retrieval + generation.', '$0.005-0.05 per query depending on model'),
                d('Fine-Tuning Break-Even', 'Query volume at which fine-tuning becomes cheaper than RAG.', 'Typically > 100K queries/month on stable knowledge'),
                d('Knowledge Freshness', 'How quickly new information needs to be available to the model.', 'RAG: minutes | Fine-tuning: hours to days')
            ], 'Calculate your per-query RAG cost. Determine the query volume threshold where fine-tuning would be cheaper.'),
            l('Lesson 2: Vector Database Selection', 'Pinecone, Weaviate, Qdrant, pgvector, Chroma — each has radically different pricing and performance profiles. Managed services cost $70-1000/month. pgvector is free but requires your own PostgreSQL ops.', [
                d('Managed vs Self-Hosted', 'Monthly cost comparison for 1M vectors across providers.', 'Pinecone: $70/mo | Qdrant Cloud: $50/mo | pgvector: $0 + ops'),
                d('Query Latency', 'Average retrieval time for top-K nearest neighbors.', 'Target: < 100ms for real-time applications'),
                d('Scaling Cost', 'Cost to scale from 1M to 100M vectors.', 'Linear storage growth, sub-linear query cost growth')
            ], 'Benchmark 3 vector database options with your actual data. Compare cost, latency, and accuracy.'),
            l('Lesson 3: Hybrid Search Architecture', 'Pure vector search misses keyword matches. Pure keyword search misses semantic similarity. Hybrid search combines both — typically 15-25% better accuracy than either alone. The cost: slightly more complex infrastructure.', [
                d('Accuracy Improvement', 'Retrieval accuracy gain from hybrid vs. pure vector search.', 'Typically 15-25% improvement in recall@10'),
                d('Implementation Cost', 'Additional engineering effort for hybrid search vs. pure vector.', '2-4 weeks additional implementation'),
                d('Reranking ROI', 'Accuracy improvement from adding a cross-encoder reranker after initial retrieval.', '5-15% accuracy gain for 50-100ms additional latency')
            ], 'Implement a hybrid search system with vector + keyword retrieval and a reranker. Measure accuracy vs. pure vector.')
        ]
    ],
    ['10-3', 'LLM Security', 'Defending against prompt injection.',
        ['Build robust system prompts', 'Implement input sanitization', 'Design an LLM firewall', 'Monitor inference telemetry'],
        [
            l('Lesson 1: Prompt Injection Economics', 'A successful prompt injection can extract PII, bypass access controls, or manipulate outputs. The cost of a breach: GDPR fines (4% of revenue), reputation damage (20-40% customer churn), and remediation ($500K-5M). Prevention costs $50-200K.', [
                d('Attack Surface', 'Number of user-facing LLM endpoints with no input sanitization.', 'Target: 0 unsanitized endpoints'),
                d('Prevention Investment', 'Annual cost of prompt injection defense infrastructure.', '$50-200K for comprehensive defense'),
                d('Breach Cost', 'Expected financial impact of a successful prompt injection attack.', '$500K-5M depending on data sensitivity')
            ], 'Audit every user-facing LLM endpoint for prompt injection vulnerability. Document the attack surface.'),
            l('Lesson 2: LLM Firewall Architecture', 'An LLM firewall sits between users and the model, filtering inputs and outputs. Input filtering: detect injection patterns, sanitize PII, enforce content policies. Output filtering: detect data leakage, hallucination confidence, and policy violations.', [
                d('Input Filter Latency', 'Additional latency from input sanitization and injection detection.', 'Target: < 50ms for real-time applications'),
                d('False Positive Rate', 'Percentage of legitimate queries incorrectly blocked by the firewall.', 'Target: < 2% to avoid user frustration'),
                d('Output Monitoring', 'Percentage of LLM outputs scanned for policy violations.', 'Target: 100% for regulated applications')
            ], 'Design an LLM firewall for your primary AI feature. Define input rules, output rules, and monitoring.'),
            l('Lesson 3: Inference Telemetry', 'You cannot secure what you cannot see. Inference telemetry tracks: token usage, latency, error rates, content policy violations, and cost per user. This data feeds security analysis, cost optimization, and product decisions.', [
                d('Telemetry Coverage', 'Percentage of LLM requests with full telemetry logging.', 'Target: 100% | Common gap: streaming responses'),
                d('Anomaly Detection', 'Ability to detect unusual inference patterns that may indicate attack.', '10x spike in token usage, unusual prompt patterns'),
                d('Cost Attribution', 'Ability to attribute inference costs to specific users, features, or teams.', 'Required for chargeback and abuse detection')
            ], 'Implement inference telemetry for your LLM stack. Track cost per user, latency distribution, and error rates.')
        ]
    ],
];

t10Mods.forEach(([id, title, desc, takeaways, lessons], i) => {
    const nextId = i < t10Mods.length - 1 ? t10Mods[i + 1][0] : undefined;
    tracks6to10Modules[`multi-agent-ops/${id}`] = m(id.replace('-', '.'), title, desc, 'Track 10 — Generative AI Operations', takeaways, lessons,
        nextId ? `/vault/curriculum/tracks/multi-agent-ops/${nextId}` : undefined);
});
