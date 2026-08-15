import { type CurriculumModule, m, l, d } from './curriculum-data';

export function populateExpansion8to14(modules: Record<string, CurriculumModule>) {

    // ═══════════════════ TRACK 8 EXPANSION: Modules 6-10 ═══════════════════
    const t8 = 'Track 8  -  AI Pricing Strategy';
    const t8Exp: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['8-6', 'Enterprise AI Contract Structures', 'Designing AI pricing contracts for enterprise buyers with committed spend, SLAs, and volume tiers.',
            ['Structure enterprise AI contracts', 'Design committed-use discounts', 'Build SLA pricing tiers', 'Negotiate minimum commitments'],
            [
                l('Lesson 1: Committed-Use Contract Design', 'Enterprise buyers want predictability. A committed-use contract guarantees $X/month in spend for 12-36 months in exchange for a 20-40% discount. The economics: you trade margin for revenue predictability and churn reduction. The trap: underpricing the commitment floor and overdelivering on included usage.', [
                    d('Minimum Commitment', 'The floor of guaranteed monthly spend the customer commits to.', 'Should cover your fixed costs for serving them + 20% margin'),
                    d('Overage Rate', 'Price per unit above the committed amount. Typically 10-30% premium over committed rate.', 'Overage is your profit accelerator'),
                    d('Term Discount', 'Annual commits get 20% off. Multi-year gets 30-40%.', 'Longer terms = lower CAC payback period')
                ], 'Design a committed-use pricing tier for your largest enterprise prospect. Calculate the commit floor, overage rate, and discount structure.'),
                l('Lesson 2: SLA-Linked Pricing Tiers', 'Different SLAs cost different amounts to deliver. A 99.9% uptime SLA requires redundancy infrastructure that costs 3-5x more than a 99% SLA. Price accordingly: Basic (99% uptime, 24hr support) = $X, Professional (99.9%, 4hr response) = 2X, Enterprise (99.99%, 1hr response, dedicated support) = 4X.', [
                    d('SLA Cost Basis', 'Calculate the infrastructure cost difference between 99% and 99.99% uptime.', 'Each "nine" roughly doubles your infrastructure cost'),
                    d('Support Tier Costs', 'Dedicated support engineer: $150K/year. Shared support: $30K/customer/year.', 'Price support tiers to cover actual support costs + 40% margin'),
                    d('Penalty Structures', 'SLA violations trigger automatic credits: 10% of monthly bill per violation.', 'Budget 2-5% of revenue for SLA credits annually')
                ], 'Build a 3-tier SLA pricing model. Calculate the actual cost to deliver each tier and price with 50%+ gross margins.'),
                l('Lesson 3: Volume Discount Economics', 'Volume discounts should follow a logarithmic curve, not linear: the first 50% volume increase gets a 10% discount, the next 50% gets 5% more, the next gets 3% more. Linear discounts at scale will destroy your margins because your costs don\'t decline linearly.', [
                    d('Logarithmic Discounting', 'Each additional volume tier gets a smaller incremental discount.', 'Prevents margin erosion at high volumes'),
                    d('Usage Floor', 'Volume discounts activate only above a minimum spend threshold.', 'Prevents small customers from gaming tier pricing'),
                    d('Margin Protection', 'At maximum discount, gross margin should never drop below 50%.', 'Set this as an absolute floor in your pricing model')
                ], 'Design a 5-tier volume discount table with logarithmic discounting. Verify that gross margins stay above 50% at every tier.')
            ]
        ],
        ['8-7', 'AI Pricing Page Optimization', 'The psychology and economics of presenting AI pricing to maximize conversion and ACV.',
            ['Design high-converting pricing pages', 'Apply anchoring psychology', 'Optimize plan names and descriptions', 'A/B test pricing presentation'],
            [
                l('Lesson 1: Anchoring and Plan Architecture', 'The highest-converting pricing pages use exactly 3 plans with a highlighted "recommended" option. The cheap plan exists to anchor value. The expensive plan exists to make the middle plan feel reasonable. The middle plan is your target  -  it should capture 60-70% of signups.', [
                    d('Three-Plan Rule', 'More than 3 options creates decision paralysis and reduces conversion by 15-25%.', 'Exception: enterprise "Contact Us" as a 4th option'),
                    d('Anchor Plan', 'The cheapest plan should feel limiting but functional. Its job is to make the middle plan look like a bargain.', 'Price at 40-50% of the middle tier'),
                    d('Decoy Effect', 'The expensive plan makes the middle plan feel reasonable by comparison.', 'Price at 2.5-3x the middle tier')
                ], 'Redesign your pricing page with exactly 3 plans. Apply the anchor, target, and decoy strategy. Calculate expected ACV shift.'),
                l('Lesson 2: AI-Specific Pricing Copy', 'Generic SaaS pricing copy doesn\'t work for AI products. Customers need to understand what they\'re paying for because "AI" is intangible. Each plan must specify: what the AI does (not "AI features"), how much they can use it (credits/queries/documents), and what happens when they hit the limit (degrade, block, or upgrade prompt).', [
                    d('Value Articulation', 'Describe AI features in outcome terms: "Summarize 100 documents/month" not "AI summarization."', 'Concrete limits reduce billing anxiety'),
                    d('Usage Visibility', 'Show a progress bar or counter of remaining AI usage on the dashboard.', 'Transparent usage tracking increases trust and reduces churn'),
                    d('Limit Communication', 'Tell customers what happens at the limit before they hit it.', 'Surprise limits cause immediate churn')
                ], 'Rewrite your pricing page copy to specify exact AI capabilities, usage limits, and limit behaviors for each plan.'),
                l('Lesson 3: Pricing Page A/B Testing Framework', 'You cannot A/B test pricing on a whim. Pricing A/B tests require: statistical significance (minimum 1,000 visitors per variant), cohort tracking (track revenue per cohort over 90 days, not just initial conversion), and grandfathering (existing customers keep their price).', [
                    d('Minimum Sample Size', '1,000+ pricing page visitors per variant for statistical significance.', 'Below this, results are noise'),
                    d('Revenue Tracking Window', 'Track cohort revenue for 90 days, not just signup conversion.', 'Higher prices may convert less but generate more LTV'),
                    d('Rollback Protocol', 'If the new pricing underperforms, honor both prices for 30 days while transitioning back.', 'Never change a customer\'s price after they\'ve committed')
                ], 'Design a pricing A/B test plan: define the hypothesis, calculate required sample size, specify the success metric, and set the tracking window.')
            ]
        ],
        ['8-8', 'Competitive Pricing Intelligence', 'How to monitor, analyze, and respond to competitor pricing movements without a race to the bottom.',
            ['Build competitive pricing dashboards', 'Analyze competitor margin structures', 'Design strategic pricing responses', 'Avoid price wars'],
            [
                l('Lesson 1: Competitor Pricing Intelligence System', 'Build a systematic competitor pricing tracker: capture pricing pages monthly (use Wayback Machine and screenshots), track plan changes (features added/removed per tier), monitor discount signals (end-of-quarter deals, startup programs), and analyze pricing trajectory (are they moving up-market or down?).', [
                    d('Pricing Page Monitoring', 'Monthly screenshots and feature comparison tables for top 5 competitors.', 'Use Wayback Machine to track historical changes'),
                    d('Feature-Per-Dollar Analysis', 'For each competitor, calculate the cost per key feature across tiers.', 'Reveals where competitors are overpriced or underpricing'),
                    d('Trajectory Analysis', 'Are competitors raising or lowering prices over time?', 'Rising prices = market maturation. Falling = commoditization.')
                ], 'Build a competitive pricing matrix for your top 5 competitors. Track pricing, features per tier, and pricing trajectory.'),
                l('Lesson 2: Price Positioning Strategy', 'You have four positioning options: Premium (price 30%+ above market, justify with differentiation), Parity (match market, compete on product), Value (price 20-30% below for market share), and Disruptor (price 60%+ below to break the market). Each has a different margin profile and growth trajectory.', [
                    d('Premium Positioning', 'Commands higher margins but requires clear differentiation and brand authority.', 'Only viable if you can articulate "why we\'re worth more"'),
                    d('Value Positioning', 'Captures volume but compresses margins. Requires operational efficiency.', 'Dangerous: easy to enter, hard to exit'),
                    d('Disruptor Positioning', 'Using AI cost advantages to undercut legacy competitors dramatically.', 'Works when your AI costs are structurally lower than competitors\' human costs')
                ], 'Define your pricing positioning relative to the top 3 competitors. Justify the strategy with margin and differentiation analysis.'),
                l('Lesson 3: Responding to Competitive Price Cuts', 'When a competitor cuts prices, your instinct is to match. Don\'t. First: analyze why (desperation? market grab? cost breakthrough?). Second: assess if your customers actually care (ask 5 customers). Third: if you must respond, respond with value bundling (add features at the same price) not price cuts.', [
                    d('Root Cause Analysis', 'Why did the competitor cut? Desperation (good) vs structural advantage (bad).', 'Desperation cuts are temporary. Structural cuts require strategic response.'),
                    d('Customer Impact Assessment', 'Survey 5-10 customers: "Competitor Z just cut prices. Would you switch?"', 'Usually the answer is "we chose you for reasons other than price"'),
                    d('Value Bundling Response', 'Instead of cutting price, add high-value features or services at the current price.', 'Increases perceived value without destroying margins')
                ], 'Create a playbook for responding to a 30% competitor price cut. Include root cause analysis, customer assessment, and response strategy.')
            ]
        ],
        ['8-9', 'AI Pricing for Platform Businesses', 'How multi-sided AI platforms price for developers, enterprises, and end-users simultaneously.',
            ['Design platform pricing tiers', 'Balance marketplace economics', 'Calculate platform take rates', 'Manage cross-subsidization'],
            [
                l('Lesson 1: Multi-Sided Pricing Architecture', 'AI platforms serve multiple customer types: developers (who build on the platform), enterprises (who buy solutions), and end-users (who consume the product). Each side has different willingness-to-pay and cost-to-serve. The art is pricing each side to maximize total platform value, not individual transaction profit.', [
                    d('Developer Side', 'Price to attract: low/free tier for adoption, usage-based for scale.', 'Developers are the supply side  -  subsidize them to build the platform'),
                    d('Enterprise Side', 'Price for value: outcome-based or committed-use contracts.', 'Enterprises are the demand side  -  charge for business impact'),
                    d('Cross-Subsidization', 'Enterprise revenue subsidizes developer platform costs.', 'Platform economics: one side pays more so the other side grows faster')
                ], 'Map your platform\'s customer types. For each, define the pricing strategy and how cross-subsidization flows between sides.'),
                l('Lesson 2: Platform Take Rate Economics', 'Your take rate (the percentage of transactions flowing through the platform) must balance growth vs revenue. Too high (>30%) and developers leave. Too low (<10%) and you can\'t sustain the platform. The optimal take rate decreases as transaction volume increases  -  reward scale.', [
                    d('Optimal Take Rate', 'Start at 20-30% for low volume. Decrease to 10-15% at scale.', 'App Store model: 30% is the ceiling, not the target'),
                    d('Volume Tiers', 'First $100K/year: 25% take rate. $100K-1M: 15%. $1M+: 10%.', 'Rewards developers who scale on your platform'),
                    d('Minimum Fee', 'A per-transaction minimum fee ($0.01-0.05) to prevent micro-transaction abuse.', 'Ensures every transaction contributes to platform costs')
                ], 'Design a tiered take rate structure for your platform. Verify that the take rate covers platform costs at each volume tier.'),
                l('Lesson 3: Marketplace Pricing Governance', 'In a marketplace, you must govern how sellers/developers price their AI products. Without governance, a race to the bottom destroys marketplace quality. Implement: minimum pricing (no free agents that set pricing expectations too low), price transparency (buyers see comparable pricing), and anti-dumping policies (no predatory below-cost pricing).', [
                    d('Minimum Pricing', 'Set floors to prevent marketplace devaluation. "No AI agent may be priced below $X/month."', 'Maintains perceived value for the entire marketplace'),
                    d('Price Transparency', 'Buyers can compare agents/solutions by price, capability, and quality rating.', 'Transparency drives quality competition, not price competition'),
                    d('Anti-Dumping', 'Prohibit persistent below-cost pricing designed to eliminate competitors.', 'Protects long-term marketplace health')
                ], 'Draft a marketplace pricing governance policy: minimum pricing rules, transparency requirements, and anti-dumping protections.')
            ]
        ],
        ['8-10', 'AI Pricing Migration & Value Communication', 'Managing the transition from legacy pricing to AI-optimized models without destroying ARR.',
            ['Plan pricing migrations', 'Communicate value shifts', 'Manage customer expectations', 'Measure migration success'],
            [
                l('Lesson 1: The 90-Day Migration Playbook', 'Pricing migrations fail when they\'re done in a single announcement. The 90-day approach: Days 1-30 (communicate the change and the "why"), Days 31-60 (new pricing for new customers only, grandfathering existing), Days 61-90 (migrate existing customers by cohort with personal outreach for top accounts).', [
                    d('Communication Phase', '30 days of advance notice with clear rationale and FAQ.', 'Lead with "what you get" not "what costs more"'),
                    d('Grandfather Period', 'Existing customers keep old pricing for 3-12 months depending on contract.', 'Enterprise contracts: honor through term. Month-to-month: 90 days'),
                    d('Cohort Migration', 'Migrate customers in waves: smallest first (lowest risk), largest last (highest touch).', 'Each cohort provides learning for the next')
                ], 'Create a 90-day pricing migration plan with specific dates, communication templates, and cohort migration schedule.'),
                l('Lesson 2: Value Communication Framework', 'Never say "price increase." Say "new pricing that aligns with value delivered." The framework: (1) Anchor to value delivered  -  "You saved $X using our AI this quarter," (2) Explain the alignment  -  "Your new pricing reflects a fraction of that value," (3) Provide options  -  "Choose the plan that fits your usage pattern."', [
                    d('Value Anchor', 'Quantify the value the customer has received before discussing price.', 'If they saved $50K and you charge $5K more, the math is obvious'),
                    d('Savings Calculator', 'Build a tool that shows each customer their ROI from your AI product.', 'Turns the price conversation into a value conversation'),
                    d('Option Architecture', 'Give 2-3 new plan options. Never present a single "take it or leave it" price.', 'Choice gives customers a sense of control')
                ], 'Draft the customer communication email for your pricing migration. Lead with value delivered, explain the change, and offer plan options.'),
                l('Lesson 3: Migration Success Metrics', 'Measuring migration success requires tracking: Logo retention (what % of customers stayed?), Net Revenue Retention (did revenue grow or shrink from existing customers?), Support ticket volume (are customers confused?), and NPS impact (did satisfaction change?). A successful migration retains 90%+ logos and achieves positive NRR.', [
                    d('Logo Retention Target', '90%+ of customers stay through the migration.', 'Below 85% indicates communication or value perception failure'),
                    d('NRR Impact', 'Net Revenue Retention should be >100% after migration.', 'Pricing increase + expansion should exceed churn'),
                    d('Support Ticket Analysis', 'Track pricing-related support tickets per week during migration.', 'Rising tickets signal confusion  -  improve communication immediately')
                ], 'Define your pricing migration success dashboard: 4 metrics, targets for each, and weekly tracking cadence.')
            ]
        ],
    ];

    t8Exp.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`ai-pricing/${id}`] = m(id, title, desc, t8, takeaways, lessons);
    });

    // ═══════════════════ TRACK 9 EXPANSION: Modules 6-10 ═══════════════════
    const t9 = 'Track 9  -  Technical Debt as Financial Liability';
    const t9Exp: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['9-6', 'Debt Remediation Prioritization Frameworks', 'Deciding which debt to kill first  -  using economic models, not gut feel.',
            ['Apply weighted scoring models', 'Calculate bang-for-buck ratios', 'Build remediation roadmaps', 'Secure budget for debt reduction'],
            [
                l('Lesson 1: The WSJF Model for Debt', 'Weighted Shortest Job First (WSJF) adapted for debt: Priority Score = (Cost of Delay + Risk Reduction + Team Velocity Improvement) / Remediation Effort. Score each debt item on a 1-10 scale for each factor, divide by effort, and rank. The highest-scoring items deliver the most economic value per unit of engineering effort.', [
                    d('Cost of Delay', 'Revenue or productivity lost per month while the debt exists.', 'Score 1-10 based on monthly business impact'),
                    d('Risk Reduction', 'Decrease in operational or security risk from resolving the debt.', 'Score 1-10: 10 = eliminates existential risk'),
                    d('Effort Normalization', 'Divide total benefit by estimated engineering weeks.', 'Ensures small wins with big impact get prioritized')
                ], 'Score your top 10 debt items using WSJF. Rank by priority score. Does the ranking match your team\'s intuition?'),
                l('Lesson 2: The 20/80 Debt Reduction Rule', '20% of your debt items cause 80% of your maintenance costs. Find them. The technique: rank all debt items by annual carrying cost, then draw a cumulative percentage line. The items above the 80% line are your critical few. Resolving just these 20% will eliminate 80% of your debt costs.', [
                    d('Pareto Analysis', 'Rank debt items by annual carrying cost. Identify the vital few.', 'Usually 3-5 items account for the majority of costs'),
                    d('Critical Path Debt', 'Debt on the critical path of feature delivery blocks all downstream work.', 'Resolving critical-path debt has multiplicative impact'),
                    d('Quick Wins', 'Debt items that take <1 sprint to resolve but eliminate >$10K/year in costs.', 'Low effort, high impact  -  schedule these immediately')
                ], 'Perform a Pareto analysis on your debt inventory. Identify the 20% that drives 80% of maintenance costs.'),
                l('Lesson 3: Building the Remediation Roadmap', 'A debt remediation roadmap needs executive sponsorship, a dedicated budget, and measurable outcomes. Structure it as 3 phases: Phase 1 (quick wins, 0-3 months, <$50K), Phase 2 (critical path debt, 3-6 months, $50-200K), Phase 3 (strategic debt, 6-12 months, $200K+). Each phase has a defined ROI that must be proven before the next phase is funded.', [
                    d('Phase-Gated Funding', 'Each phase must demonstrate ROI before the next phase is approved.', 'Reduces executive risk and builds confidence in debt reduction'),
                    d('Measurable Outcomes', 'Each phase has KPIs: maintenance load reduction, deployment frequency improvement, incident reduction.', 'No measurement = no continued funding'),
                    d('Executive Sponsor', 'A VP or C-level champion who protects the budget from feature reallocation.', 'Without a sponsor, debt budget gets raided within 2 sprints')
                ], 'Build a 3-phase debt remediation roadmap with phase-gated funding, measurable KPIs, and executive sponsor identification.')
            ]
        ],
        ['9-7', 'Debt-Driven Architecture Migration', 'When the debt is so deep the only answer is a full migration  -  and how to fund it.',
            ['Identify migration triggers', 'Build the economic case', 'Design the strangler pattern', 'Manage dual-system costs'],
            [
                l('Lesson 1: Migration Trigger Identification', 'Three signals that debt has crossed the migration threshold: (1) Maintenance load exceeds 60% of engineering capacity, (2) The cost of patching exceeds the cost of rebuilding on an annual basis, (3) The system cannot support a critical business requirement (regulatory, scale, or security) regardless of investment. When any of these is true, patching is throwing good money after bad.', [
                    d('The 60% Threshold', 'When maintenance consumes >60% of engineering time, you cannot innovate your way out.', 'The system is consuming more value than it creates'),
                    d('Patch vs Rebuild Cost', 'When annual patching cost exceeds 1/3 of the rebuild cost, rebuilding is cheaper within 3 years.', 'Calculate: annual patch cost × 3 vs total rebuild cost'),
                    d('Capability Gap', 'When the architecture fundamentally cannot support a must-have requirement.', 'No amount of patching creates horizontal scalability in a monolith')
                ], 'Evaluate your highest-debt system against the 3 migration triggers. Has it crossed the migration threshold?'),
                l('Lesson 2: The Strangler Fig Economics', 'The strangler fig pattern: build the new system alongside the old one, migrating one capability at a time. Each migrated capability immediately starts delivering value (better performance, lower costs, new features). The economics: you\'re amortizing the migration cost over 12-24 months while extracting incremental value at each stage.', [
                    d('Incremental Value', 'Each migrated module delivers immediate improvements.', 'Keeps stakeholders funded and motivated throughout the migration'),
                    d('Dual-System Cost', 'Running both old and new systems simultaneously increases infrastructure costs 30-50%.', 'Budget for this  -  it\'s the price of safe migration'),
                    d('Rollback Safety', 'Each migration step can be independently rolled back.', 'Reduces risk from catastrophic failure to manageable scope')
                ], 'Design a strangler fig migration plan for your highest-debt system. Identify the migration order and expected value at each stage.'),
                l('Lesson 3: Migration ROI Tracking', 'Track migration ROI at each stage: cost spent vs value delivered vs projected remaining investment. If ROI at the 6-month mark is below projection, the team and executive sponsor must decide: adjust scope, accelerate, or stop. Sunk cost fallacy kills migration projects  -  be willing to stop if the data says stop.', [
                    d('Stage-Gate Reviews', 'Every 3 months, review: cost spent, value delivered, projection accuracy.', 'Provides off-ramp opportunities before overcommitting'),
                    d('Value Velocity', 'Rate of value delivery per engineering week invested.', 'Should increase over time as the team gets faster on the new platform'),
                    d('Sunk Cost Discipline', 'Past investment is irrelevant. Only future cost vs future value matters.', 'The hardest discipline in engineering leadership')
                ], 'Build a migration ROI tracking dashboard with stage-gate reviews every 3 months. Define the stop criteria.')
            ]
        ],
        ['9-8', 'Debt Culture & Organizational Incentives', 'Why teams keep creating debt  -  and how to redesign incentives to prevent it.',
            ['Diagnose debt culture', 'Redesign team incentives', 'Create debt prevention mechanisms', 'Build sustainable engineering practices'],
            [
                l('Lesson 1: The Incentive Trap', 'Teams create debt because the incentive structure rewards it. Ship fast = promotion. Write clean, sustainable code = invisible. Until you make debt creation visible and debt prevention rewarded, you will never reduce debt  -  you\'ll only keep cleaning up yesterday\'s mess while creating tomorrow\'s.', [
                    d('Ship-Speed Bias', 'Promotions and bonuses tied exclusively to feature delivery speed.', 'Creates a rational incentive to cut corners'),
                    d('Invisible Quality', 'Clean architecture, documentation, and testing are invisible to leadership.', 'If leadership can\'t see it, it doesn\'t get rewarded'),
                    d('Debt Attribution', 'When debt causes incidents, trace it back to the decisions (and people) that created it.', 'Not to blame  -  to make the cost of debt visible')
                ], 'Audit your promotion criteria: do they reward sustainable engineering or just fast shipping? Redesign to balance both.'),
                l('Lesson 2: Debt Prevention Mechanisms', 'Four mechanisms that prevent debt creation: (1) Architecture Decision Records (ADRs) requiring explicit documentation of "debt accepted here," (2) Code quality gates in CI/CD that block merges below standards, (3) Debt budgets  -  each sprint allocates 20% to debt prevention, (4) Debt reviews in sprint retros.', [
                    d('ADR Documentation', 'Every architectural shortcut must be documented with rationale and remediation plan.', 'Makes debt creation a conscious, visible decision'),
                    d('Quality Gates', 'Automated code quality checks that reject code below minimum standards.', 'Automated enforcement removes human conflict from quality discussions'),
                    d('20% Debt Budget', 'Every sprint, 20% of capacity is reserved for debt prevention and reduction.', 'Non-negotiable. Features cannot cannibalize this budget.')
                ], 'Implement the 4 debt prevention mechanisms. Track new debt creation rate before and after implementation.'),
                l('Lesson 3: Building a Sustainable Engineering Culture', 'A sustainable engineering culture values long-term maintainability as highly as short-term delivery. This requires: celebrating refactoring as publicly as feature launches, including code quality metrics in performance reviews, and creating a career path for engineers who specialize in platform quality.', [
                    d('Refactoring Recognition', 'Publicly acknowledge and celebrate major refactoring accomplishments.', 'Same visibility as feature launches: demo days, announcements'),
                    d('Quality in Reviews', 'Performance reviews include code quality contributions alongside feature delivery.', 'Removes the "only features count" incentive bias'),
                    d('Platform Engineer Path', 'A career track for engineers focused on reliability, quality, and developer experience.', 'Shows that quality work leads to advancement')
                ], 'Design a "Debt-Aware Engineering Culture" initiative: recognition programs, review criteria changes, and career path updates.')
            ]
        ],
        ['9-9', 'Regulatory & Compliance Debt', 'When technical debt creates legal liability  -  GDPR, SOC2, HIPAA, and the cost of non-compliance.',
            ['Identify compliance debt', 'Calculate regulatory risk exposure', 'Build compliance remediation roadmaps', 'Present risk to legal and board'],
            [
                l('Lesson 1: Compliance Debt Identification', 'Compliance debt is technical debt with teeth. A system that stores PII without encryption isn\'t just messy code  -  it\'s a GDPR violation with fines up to 4% of global revenue. A missing audit log isn\'t just a gap  -  it\'s a SOC2 failure that blocks enterprise sales. Compliance debt has external deadlines and external consequences.', [
                    d('GDPR Exposure', 'Unencrypted PII, missing consent records, no data deletion workflows.', 'Fines: up to €20M or 4% of global revenue'),
                    d('SOC2 Gaps', 'Missing audit logs, weak access controls, no change management documentation.', 'Blocks enterprise deals worth $100K+/year each'),
                    d('HIPAA Risk', 'Healthcare data without BAAs, inadequate encryption, no access tracking.', 'Fines: $100-$50,000 per violation, up to $1.5M/year')
                ], 'Audit your system for compliance debt: list every gap against your applicable regulatory frameworks. Classify severity.'),
                l('Lesson 2: Regulatory Risk Quantification', 'Calculate regulatory risk as: Maximum Fine × Probability of Enforcement × Number of Violations. A company processing 10M EU consumer records with unencrypted PII has a maximum GDPR fine of €20M, with an estimated 5% annual probability of enforcement = €1M in expected annual regulatory risk.', [
                    d('Maximum Penalty', 'The statutory maximum fine under the applicable regulation.', 'Research the specific regulation\'s penalty framework'),
                    d('Enforcement Probability', 'Based on industry enforcement trends and your specific exposure.', '1-10% annually for most regulations. Higher post-breach.'),
                    d('Expected Loss', 'Maximum Penalty × Enforcement Probability = annual expected regulatory loss.', 'This is the number that motivates the legal team')
                ], 'Calculate the expected annual regulatory loss from your top 3 compliance debt items.'),
                l('Lesson 3: Compliance Remediation ROI', 'Compliance remediation ROI = (Expected Annual Regulatory Loss + Blocked Revenue from Missing Certifications) / Remediation Cost. If resolving SOC2 gaps costs $200K but enables $2M in enterprise deals, the ROI is 10x. If fixing GDPR exposure costs $150K against $1M in expected fines, the ROI is 6.7x.', [
                    d('Revenue Enablement', 'Enterprise deals requiring certifications you don\'t have.', 'Sum of all qualified pipeline blocked by compliance gaps'),
                    d('Risk Reduction ROI', 'Expected fine reduction divided by remediation investment.', 'Usually 5-10x for critical compliance items'),
                    d('Combined Business Case', 'Revenue enabled + fines avoided = total compliance remediation value.', 'Present both to the board  -  offense and defense')
                ], 'Build a compliance remediation business case combining revenue enablement and risk reduction. Present with ROI and payback period.')
            ]
        ],
        ['9-10', 'Building a Technical Debt Dashboard', 'Creating an executive-ready, real-time view of technical debt across the organization.',
            ['Design debt dashboards', 'Select leading indicators', 'Automate debt tracking', 'Present to executives quarterly'],
            [
                l('Lesson 1: Dashboard Architecture', 'The Technical Debt Dashboard has four zones: (1) Health Score  -  a single 0-100 composite score reflecting overall debt health, (2) Financial Impact  -  debt-related costs in dollar terms (carrying cost, remediation backlog, EBITDA drag), (3) Velocity Impact  -  deployment frequency, lead time, and maintenance load trends, (4) Risk Register  -  top 5 debt-related risks with severity and probability.', [
                    d('Composite Health Score', 'A weighted average of maintenance load, deployment frequency, incident rate, and coverage.', 'Provides a single "how are we doing?" metric for executives'),
                    d('Financial Zone', 'Annual carrying cost, remediation backlog total, EBITDA margin impact.', 'In dollar terms  -  the only language the board fluently speaks'),
                    d('Trend Lines', 'All metrics shown with 4-quarter trend lines.', 'Direction matters more than absolute numbers')
                ], 'Design the 4-zone Technical Debt Dashboard for your organization. Define the composite health score formula.'),
                l('Lesson 2: Automated Metrics Collection', 'Manual debt tracking dies within 2 quarters. Automate: pull deployment frequency from CI/CD, extract maintenance load from Jira/Linear labels, calculate test coverage from CI reports, and aggregate incident data from PagerDuty/ops. The dashboard should update weekly without human intervention.', [
                    d('CI/CD Integration', 'Deployment frequency and lead time from GitHub Actions/Jenkins.', 'Direct API integration  -  no manual data entry'),
                    d('Issue Tracker Labels', 'Standardized labels: "tech-debt," "maintenance," "bug-fix" on all tickets.', 'Enables automated maintenance load calculation'),
                    d('Weekly Cadence', 'Dashboard refreshes every Monday morning before leadership standup.', 'Consistent cadence builds trust and accountability')
                ], 'Identify data sources for each dashboard metric. Design the automation pipeline for weekly dashboard refresh.'),
                l('Lesson 3: Quarterly Board Reporting', 'Present the debt dashboard to the board quarterly in a 3-minute update: (1) One number  -  the composite health score with trend arrow, (2) One insight  -  the most impactful debt event this quarter, (3) One ask  -  budget or resource request backed by ROI. Three minutes, three points, zero technical jargon.', [
                    d('The One Number', 'Health Score with quarter-over-quarter trend. Green (>70), Yellow (40-70), Red (<40).', 'Boards love simple grading systems'),
                    d('The One Insight', '"This quarter, we resolved the database SPOF that had a $5M revenue exposure."', 'Concrete, dollar-denominated, impressive'),
                    d('The One Ask', '"To maintain trajectory, I need $X for Q3 debt reduction. Expected ROI: Y:1."', 'Always have a specific ask with specific ROI')
                ], 'Prepare your quarterly debt board presentation: one number, one insight, one ask. Practice delivering it in under 3 minutes.')
            ]
        ],
    ];

    t9Exp.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`tech-debt-liability/${id}`] = m(id, title, desc, t9, takeaways, lessons);
    });

    // ═══════════════════ TRACK 10 EXPANSION: Modules 4-10 ═══════════════════
    const t10 = 'Track 10  -  AI Due Diligence';
    const t10Exp: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['10-4', 'AI Team Assessment', 'Evaluating the talent, structure, and retention risk of an AI engineering team during diligence.',
            ['Assess ML team depth', 'Evaluate key-person risk', 'Calculate replacement costs', 'Identify talent retention risks'],
            [
                l('Lesson 1: ML Talent Depth Analysis', 'A single ML researcher does not make an AI company. Evaluate: How many people can train models (not just fine-tune)? How many understand the full pipeline (data → training → evaluation → deployment)? How many are interchangeable? If the answer to any is "one person," you have a critical key-person dependency.', [
                    d('Training Depth', 'Number of engineers who can independently train and evaluate models.', 'Minimum viable: 3+ for any production AI system'),
                    d('Pipeline Coverage', 'How many people understand the complete ML pipeline end-to-end?', 'Single-person pipeline coverage = existential risk'),
                    d('Knowledge Distribution', 'Is model architecture knowledge documented, or only in one person\'s head?', 'Undocumented = key-person dependency')
                ], 'Map your AI team\'s capabilities: who can train, who can deploy, who can evaluate. Identify single-person dependencies.'),
                l('Lesson 2: Key-Person Risk Quantification', 'For each key ML person, calculate: (1) Replacement time (6-12 months to recruit a senior ML engineer), (2) Knowledge transfer time (3-6 months for the new person to reach full context), (3) Revenue at risk if they leave (all AI features dependent on their expertise). The total key-person exposure is the sum across all key individuals.', [
                    d('Replacement Time', 'Senior ML engineers: 6-12 months to find and close.', 'Market is extremely competitive for top-tier ML talent'),
                    d('Context Transfer', 'New hire needs 3-6 months to understand the proprietary model architecture.', 'Longer if documentation is poor or absent'),
                    d('Revenue Exposure', 'Sum of ARR that depends on features only this person can maintain.', 'If they leave, can the features continue operating?')
                ], 'Calculate the key-person risk exposure for your 3 most critical ML engineers. Total the revenue at risk.'),
                l('Lesson 3: Retention Risk Assessment', 'AI talent retention follows different economics: ML engineers are 2-3x more expensive to replace than average engineers, they have near-zero unemployment, and they are being aggressively recruited. Retention signals to evaluate: equity vesting schedules (cliff or continuous?), comp vs market rate (within 10%?), and publication/conference participation (is the team intellectually stimulated?).', [
                    d('Comp Competitiveness', 'Total comp within 10% of market rate for their level and location.', 'Below market = flight risk. >20% below = imminent departure'),
                    d('Vesting Cliff', 'When the next major equity vesting event occurs.', 'Engineers are 3x more likely to leave after a cliff'),
                    d('Intellectual Satisfaction', 'Are ML engineers publishing, attending conferences, working on interesting problems?', 'Bored ML engineers leave regardless of compensation')
                ], 'Assess retention risk for your AI team: comp competitiveness, vesting schedules, and intellectual satisfaction. Grade each risk.')
            ]
        ],
        ['10-5', 'AI Data Asset Evaluation', 'Assessing the quality, provenance, and defensibility of training data during due diligence.',
            ['Evaluate data quality', 'Assess legal data provenance', 'Calculate data replacement costs', 'Identify data moat durability'],
            [
                l('Lesson 1: Data Quality Assessment Framework', 'Training data quality determines model quality. Evaluate across 5 dimensions: Accuracy (are labels correct?), Completeness (does the dataset cover edge cases?), Freshness (when was it last updated?), Consistency (are labeling standards uniform?), and Distribution (does it represent the real-world distribution?).', [
                    d('Label Accuracy', 'Sample 1,000 labels and independently verify. Target: >95% accuracy.', 'Below 90% = significant model quality risk'),
                    d('Edge Case Coverage', 'Does the dataset include rare but important scenarios?', 'Missing edge cases = model failures in production on the hardest cases'),
                    d('Distribution Match', 'Does the training data distribution match production data?', 'Training-production drift is the #1 cause of model degradation')
                ], 'Design a data quality audit for a target AI company. Define sampling methodology and acceptance criteria for each dimension.'),
                l('Lesson 2: Data Provenance & Legal Risk', 'Where the training data came from determines legal risk. Web-scraped data may violate copyright. User-generated data may violate privacy agreements. Licensed data may have usage restrictions that limit the model\'s commercial use. A clean data provenance chain is essential for diligence.', [
                    d('Copyright Risk', 'Was training data scraped from copyrighted sources without license?', 'NYT v. OpenAI established legal risk for unlicensed training'),
                    d('Privacy Compliance', 'Does user-generated training data comply with the company\'s privacy policy?', 'GDPR right-to-deletion must be enforceable on training data'),
                    d('License Restrictions', 'Licensed datasets may restrict commercial use, redistribution, or derivative works.', 'Review every data license for commercial deployment restrictions')
                ], 'Audit the data provenance chain for a target AI company. Identify legal risks in each data source category.'),
                l('Lesson 3: Data Moat Durability Assessment', 'A data moat erodes if: (1) the data can be independently collected by competitors (public data), (2) the data becomes stale and must be continuously refreshed, or (3) the data advantage is temporary (first-mover data advantage that competitors can replicate). The strongest data moats are proprietary, continuously growing, and legally defensible.', [
                    d('Replicability', 'Can a competitor build an equivalent dataset from scratch?', 'If yes, the moat is time-based (first-mover advantage), not structural'),
                    d('Growth Rate', 'Does the dataset grow automatically through product usage?', 'Network effects on data = compounding moat'),
                    d('Legal Defensibility', 'Can the company legally prevent competitors from accessing or replicating the data?', 'Trade secret, copyright, or contractual protections')
                ], 'Score a target company\'s data moat on replicability, growth rate, and legal defensibility. Overall moat grade: strong/moderate/weak.')
            ]
        ],
        ['10-6', 'AI Revenue Quality Analysis', 'Distinguishing real AI revenue from hype revenue in due diligence.',
            ['Analyze revenue attribution', 'Identify hype vs substance', 'Calculate AI-specific NRR', 'Evaluate pricing durability'],
            [
                l('Lesson 1: AI Revenue Attribution', 'Companies love to label everything "AI revenue." The test: if you removed the AI component, would the customer still pay? If yes, it\'s software revenue with AI marketing. If no, it\'s true AI revenue. Only AI-attributed revenue  -  where the AI is the primary value driver  -  should be valued at AI multiples.', [
                    d('Removal Test', 'If the AI feature were removed, what % of the price would customers still pay?', 'AI premium = total price - price without AI'),
                    d('Feature Usage', 'What percentage of active users actually use the AI features?', 'AI usage <30% suggests the AI is marketing, not value'),
                    d('Retention Attribution', 'Is AI usage correlated with higher retention?', 'If AI users churn at the same rate as non-AI users, AI isn\'t driving retention')
                ], 'Apply the removal test to your AI product. What percentage of revenue is truly AI-attributed?'),
                l('Lesson 2: Hype Revenue Identification', 'Three patterns of hype revenue: (1) POC Revenue  -  customers paying $5-10K for a proof of concept they won\'t renew, (2) Innovation Budget  -  funded by the customer\'s "innovation lab" instead of operational budget, (3) Executive Sponsor Risk  -  revenue dependent on a single champion who may leave or lose interest.', [
                    d('POC Revenue', 'One-time proof-of-concept payments that don\'t convert to production contracts.', 'POC-to-production conversion rate <30% = hype signal'),
                    d('Innovation Budget Risk', 'Innovation lab budgets are cut first in downturns.', 'Ask: is this funded from innovation or operations budget?'),
                    d('Single Champion Risk', 'Revenue dependent on one executive sponsor at the customer.', 'If that person leaves, the contract follows them out the door')
                ], 'Categorize your AI revenue by source: production, POC, innovation budget. What percentage is durable production revenue?'),
                l('Lesson 3: AI NRR Analysis', 'Net Revenue Retention for AI products must be analyzed separately from the overall NRR. Calculate: AI NRR = (AI revenue from existing customers at end of period / AI revenue from same customers at start of period). This reveals whether AI revenue is expanding, stable, or contracting within accounts.', [
                    d('AI Expansion Rate', 'Are customers using more AI over time (expanding consumption)?', '>120% AI NRR = strong product-market fit'),
                    d('AI Contraction Signal', 'Customers reducing AI usage or downgrading AI-specific plans.', '<100% AI NRR = value perception problem'),
                    d('Cohort Analysis', 'Analyze AI NRR by customer cohort (signup quarter) to identify trends.', 'Newer cohorts should show equal or better AI NRR')
                ], 'Calculate your AI-specific NRR for the last 4 quarters. Is the trend improving, stable, or declining?')
            ]
        ],
        ['10-7', 'AI Regulatory & IP Risk Assessment', 'Evaluating intellectual property, regulatory exposure, and compliance risk during AI due diligence.',
            ['Assess IP ownership', 'Evaluate regulatory risk', 'Identify litigation exposure', 'Calculate compliance costs'],
            [
                l('Lesson 1: AI IP Ownership Analysis', 'Who owns the AI? If the model was trained using open-source frameworks (mostly fine), on third-party APIs (they own the outputs in many cases), by contractors (check the IP assignment clause), or using customer data (check the data processing agreement). Clean IP ownership is non-negotiable for acquisition.', [
                    d('Training IP', 'Who owns the trained model weights? The company, the cloud provider, or the researcher?', 'Check employment agreements and contractor IP clauses'),
                    d('Output Ownership', 'Some API providers claim rights to outputs generated through their APIs.', 'Review ToS for OpenAI, Anthropic, etc.  -  terms vary significantly'),
                    d('Customer Data IP', 'Models trained on customer data may trigger data processing agreement restrictions.', 'Customer may have rights to models trained on their data')
                ], 'Audit your AI IP ownership: training data rights, model weight ownership, output rights, and contractor IP assignments.'),
                l('Lesson 2: Regulatory Risk Mapping', 'Map your AI product against the emerging regulatory environment: EU AI Act (risk classification), US state-level AI laws (bias audits), sector-specific regulations (financial, healthcare, employment), and international data sovereignty requirements. Each regulation creates compliance costs and potential liability.', [
                    d('EU AI Act Classification', 'Classify your AI as minimal, limited, high, or unacceptable risk under the EU AI Act.', 'High-risk classification triggers mandatory auditing and documentation'),
                    d('Bias Audit Requirements', 'NYC Local Law 144 and similar laws require bias audits for employment AI.', 'Non-compliance penalties: $500-1,500 per violation per day'),
                    d('Cross-Border Data', 'Training on EU data and serving US customers (or vice versa) triggers sovereignty issues.', 'May require separate models or data localization')
                ], 'Map your AI product against 3 applicable regulations. Calculate the compliance cost and penalty exposure for each.'),
                l('Lesson 3: Litigation Exposure Assessment', 'AI litigation is exploding: copyright suits, bias discrimination claims, privacy violations, and output liability. Evaluate: (1) Training data copyright claims (estimated litigation cost if sued), (2) Algorithmic bias exposure (discrimination lawsuits in employment, lending, or housing contexts), (3) Output liability (who is liable when the AI gives dangerous or incorrect advice?).', [
                    d('Copyright Litigation', 'Estimated cost to defend a training data copyright claim: $500K-5M.', 'Even winning costs millions in legal fees'),
                    d('Bias Liability', 'Discrimination lawsuits can reach class-action status with damages in the tens of millions.', 'Regular bias audits are cheaper than litigation'),
                    d('Output Liability', 'If the AI provides incorrect medical, legal, or financial advice, who is liable?', 'Terms of service disclaimers are tested but not proven in court')
                ], 'Assess your AI product\'s litigation exposure across copyright, bias, and output liability. Estimate total legal risk.')
            ]
        ],
        ['10-8', 'AI Financial Model Construction', 'Building the financial model for an AI company  -  from unit economics to 5-year projections.',
            ['Build AI unit economics models', 'Project inference cost trajectories', 'Model margin expansion scenarios', 'Present to investment committees'],
            [
                l('Lesson 1: AI Unit Economics Deep Dive', 'The AI unit economics model: Revenue per customer - (Inference COGS per customer + Acquisition cost amortized + Infrastructure allocation + Support cost) = Contribution margin per customer. The catch: inference COGS is variable and usage-dependent, making it harder to predict than traditional SaaS.', [
                    d('Variable COGS', 'AI inference costs vary with usage intensity per customer.', 'Model COGS at 25th, 50th, and 75th percentile usage'),
                    d('Contribution Margin', 'Revenue - all variable costs per customer.', 'Target: >60% at median usage. Below 40% = pricing problem'),
                    d('Usage Cohort Analysis', 'Different customer segments have wildly different usage patterns.', 'Enterprise customers may cost 10x more to serve than SMB')
                ], 'Build a unit economics model for your AI product by customer segment. Identify which segments are profitable and which aren\'t.'),
                l('Lesson 2: 5-Year Financial Projection Methodology', 'Build AI financial projections with three scenarios: Bear (50% cost decline, 30% usage growth), Base (60% cost decline, 50% usage growth), Bull (70% cost decline, 80% usage growth). The key driver: whether inference cost decline outpaces usage growth, expanding margins over time.', [
                    d('Cost Decline Assumptions', 'Model inference cost declining 50-70% annually based on hardware improvements.', 'Conservative: 50%. Moderate: 60%. Aggressive: 70%'),
                    d('Usage Growth Assumptions', 'Model per-customer usage growing 30-80% annually.', 'Based on historical cohort usage data'),
                    d('Margin Trajectory', 'Plot gross margin quarterly over 5 years under each scenario.', 'The gap between scenarios shows the range of possible outcomes')
                ], 'Build a 3-scenario 5-year financial model for your AI product. Plot margin trajectories for bear, base, and bull cases.'),
                l('Lesson 3: Investment Committee Presentation', 'The investment memo for an AI company needs: (1) Market sizing with AI-specific TAM, (2) Product differentiation (moat analysis), (3) Unit economics at current scale AND projected scale, (4) Margin trajectory under multiple scenarios, (5) Key risks with mitigation plans. The memo should prove that margins expand with scale  -  the defining characteristic of great AI businesses.', [
                    d('TAM with AI Premium', 'AI companies can capture larger TAM than traditional software in the same space.', 'AI enables automation of tasks that were previously service-only'),
                    d('Scale Economics', 'Show that unit economics improve at 10x current scale.', 'If margins compress at scale, the business model is broken'),
                    d('Risk Section', 'Explicitly address: model obsolescence, provider dependency, regulatory changes.', 'Investors reward transparency about risks')
                ], 'Draft a 1-page investment memo for your AI company covering TAM, differentiation, unit economics, and margin trajectory.')
            ]
        ],
        ['10-9', 'Post-Acquisition AI Integration', 'The playbook for integrating an acquired AI company without destroying its value.',
            ['Plan AI team integration', 'Merge ML infrastructure', 'Retain key talent', 'Realize synergies without disruption'],
            [
                l('Lesson 1: Day 1 Through Day 100 Playbook', 'AI acquisitions fail most often in the first 100 days. The playbook: Days 1-30 (protect the AI team  -  no org changes, no tool changes, no process changes), Days 31-60 (map integration synergies and dependencies), Days 61-100 (begin incremental integration with the AI team\'s buy-in). The single most important rule: keep the AI team intact and productive.', [
                    d('Protection Phase', 'First 30 days: zero changes to the AI team\'s workflow, tools, or reporting structure.', 'Change causes attrition. Attrition destroys the acquisition value.'),
                    d('Mapping Phase', 'Days 31-60: where are the integration synergies between AI teams?', 'Map shared infrastructure, data assets, and model capabilities'),
                    d('Integration Phase', 'Days 61-100: begin merging infrastructure and workflows incrementally.', 'Each integration step must be voluntary and reversible')
                ], 'Design a Day 1-100 integration playbook for an AI acquisition. Specify the exact actions and non-actions for each phase.'),
                l('Lesson 2: ML Infrastructure Consolidation', 'Merging two ML stacks is treacherous. The framework: standardize on the better platform (not the acquirer\'s), migrate training pipelines before inference pipelines (lower risk), and maintain independent model evaluation until confident in the merged system.', [
                    d('Platform Selection', 'Choose the better ML platform, regardless of which company built it.', 'Forcing the acquired team onto an inferior platform causes attrition'),
                    d('Training First', 'Migrate training workloads before inference. Training is offline and lower risk.', 'Validates the merged platform before touching production'),
                    d('Independent Evaluation', 'Maintain separate model evaluation benchmarks for 6+ months.', 'Ensures the merger doesn\'t silently degrade model quality')
                ], 'Plan the ML infrastructure consolidation: which platform wins, migration order, and quality safeguards.'),
                l('Lesson 3: Talent Retention Strategy', 'The acquired AI team is the asset you bought. Lose them and you paid millions for a codebase that will be obsolete in 18 months. Retention strategy: immediate retention bonuses (6-12 months of salary vesting over 2 years), title and scope preservation (no demotions), and intellectual autonomy (keep them working on interesting problems, not integration tickets).', [
                    d('Retention Bonus', '6-12 months of salary, vesting over 24 months, triggering at acquisition close.', 'The cost of the bonus is a fraction of the replacement cost'),
                    d('Scope Protection', 'Acquired AI engineers keep working on the AI product, not integration work.', 'Integration work = mundane = attrition'),
                    d('Career Commitment', 'Within 30 days, each key AI person should have a personal career discussion with their new VP+.', 'People stay for growth opportunities, not just money')
                ], 'Design a retention plan for the 5 most critical engineers in an acquired AI team. Calculate the cost vs the replacement risk.')
            ]
        ],
        ['10-10', 'AI Due Diligence Report Template', 'The complete framework for delivering a board-ready AI due diligence report.',
            ['Structure due diligence findings', 'Present risk-adjusted valuations', 'Build recommendation frameworks', 'Deliver board-ready reports'],
            [
                l('Lesson 1: The 7-Section DD Report', 'The AI due diligence report has 7 sections: (1) Executive Summary  -  1-page go/no-go with confidence level, (2) Revenue Quality  -  real AI revenue vs hype, (3) Technology Assessment  -  moat, infrastructure, model quality, (4) Team Assessment  -  talent depth, key-person risk, (5) Financial Model  -  unit economics and margin projections, (6) Risk Register  -  legal, technical, regulatory, and (7) Recommendation  -  buy/pass with conditions.', [
                    d('Executive Summary', 'One page: go/no-go, confidence level (high/medium/low), 3 key findings.', 'This is the only page most board members will read closely'),
                    d('Revenue Quality Score', 'Composite score: 1-5 based on AI attribution, NRR, and revenue durability.', 'Score <3 = significant revenue quality concerns'),
                    d('Risk-Adjusted Valuation', 'Standard multiple adjusted for tech debt, key-person risk, and regulatory exposure.', 'Present as a range, not a point estimate')
                ], 'Draft the executive summary of your AI due diligence report. Include go/no-go, confidence level, and 3 key findings.'),
                l('Lesson 2: Risk-Adjusted Valuation Methodology', 'Start with comparable company multiples. Adjust down for: tech debt (PDI score discount), key-person risk (talent concentration discount), regulatory exposure (compliance cost discount), data moat weakness (defensibility discount). The risk-adjusted valuation is typically 15-40% below naive comparable valuations.', [
                    d('PDI Discount', 'Tech debt PDI >100: apply 1-2x EBITDA multiple reduction.', 'Reflects the remediation investment required post-close'),
                    d('Key-Person Discount', 'If >50% of AI value concentrated in <3 people: apply 5-10% valuation discount.', 'Reflects retention risk and replacement cost'),
                    d('Total Adjustment', 'Sum all risk discounts to arrive at the risk-adjusted valuation.', 'Present as "enterprise value at risk" alongside base valuation')
                ], 'Apply the risk-adjusted valuation methodology to a target AI company. Show the walk from base valuation to risk-adjusted.'),
                l('Lesson 3: Conditional Recommendation Framework', 'Rarely is the recommendation a clean "buy" or "pass." Use conditional recommendations: "Buy if: (1) retention bonuses are funded at $X, (2) SOC2 compliance is achieved within 12 months, (3) key-person risk is mitigated by hiring 2 additional ML engineers." Conditions make the recommendation actionable.', [
                    d('Buy Conditions', 'Specific, measurable conditions that must be met for the acquisition to succeed.', 'Each condition should have a cost and timeline'),
                    d('Walk-Away Triggers', 'Findings that would change the recommendation to "pass."', 'Example: >70% of revenue is POC/hype, or 2+ key people leave during diligence'),
                    d('Earnout Recommendations', 'If conditions can\'t be guaranteed pre-close, structure an earnout.', 'Protects the buyer if conditions are not met')
                ], 'Draft a conditional recommendation for an AI acquisition. Include 3 buy conditions and 2 walk-away triggers.')
            ]
        ],
    ];

    t10Exp.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`ai-due-diligence/${id}`] = m(id, title, desc, t10, takeaways, lessons);
    });

    // ═══════════════════ TRACK 11 EXPANSION: Modules 4-10 ═══════════════════
    const t11 = 'Track 11  -  Economics of Build vs Buy';
    const t11Exp: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['11-4', 'Vendor Evaluation Economics', 'The complete economic framework for evaluating AI vendors beyond the sales demo.',
            ['Score vendors on total economics', 'Evaluate vendor viability', 'Calculate switching costs', 'Negotiate from strength'],
            [
                l('Lesson 1: The Total Vendor Cost Model', 'The vendor\'s list price is 30-50% of the true cost. Total vendor cost = License/API fees + Integration engineering (your team building the connection) + Data migration (getting your data into the vendor\'s format) + Training (teaching your team to use it) + Ongoing maintenance (keeping the integration alive) + Opportunity cost (what your team could have built instead).', [
                    d('Integration Cost', 'Engineering time to connect the vendor to your systems.', 'Typically 2-8 engineering weeks for API integrations'),
                    d('Maintenance Tax', 'Ongoing engineering time to maintain vendor integrations through API changes.', '5-15% of integration cost annually in maintenance'),
                    d('Switching Cost', 'Total cost to replace the vendor with an alternative.', 'This determines your negotiating leverage')
                ], 'Calculate the total cost of your most expensive vendor relationship. Include all hidden costs beyond the license fee.'),
                l('Lesson 2: Vendor Viability Assessment', 'Before committing to a vendor, assess their viability: (1) Burn rate vs revenue (how many months of runway?), (2) Customer concentration (are >30% of revenues from one customer?), (3) Team stability (has the engineering team churned?), (4) Product roadmap credibility (are they shipping what they promise?).', [
                    d('Runway Assessment', 'Last funding round date, amount raised, estimated burn rate.', 'If they have <18 months runway, migration risk is critical'),
                    d('Customer Concentration', '>30% of revenue from one customer = dangerous dependency.', 'If that customer leaves, the vendor may not survive'),
                    d('Roadmap Credibility', 'Compare last year\'s promised roadmap to what actually shipped.', '<50% delivery = roadmap is aspirational, not reliable')
                ], 'Perform a viability assessment on your 3 most critical vendors. Grade each Red/Yellow/Green.'),
                l('Lesson 3: Negotiation Leverage Engineering', 'The best time to negotiate is before you\'re dependent. Build leverage: run a POC on a competing vendor before contract renewal, document internal build alternatives, and time negotiations to the vendor\'s quarter-end (when they need to close deals for their own targets).', [
                    d('Competitive POC', 'Running a proof-of-concept on a competitor\'s product creates credible switching threat.', 'Investment: 2-4 engineering weeks. Leverage: 20-40% discount potential'),
                    d('Internal Alternative', 'Having a documented internal build plan gives you a walk-away option.', 'Even if you don\'t intend to build, the option creates leverage'),
                    d('Quarter-End Timing', 'Vendors are most flexible on pricing in the last 2 weeks of their fiscal quarter.', 'Their sales team needs to close deals for quota attainment')
                ], 'Prepare for your next vendor negotiation: build a competitive POC, document the internal alternative, and time to their quarter-end.')
            ]
        ],
        ['11-5', 'Open Source AI Economics', 'When open source is "free" but costs more than buying  -  and when it\'s genuinely the best economic choice.',
            ['Calculate true open source TCO', 'Evaluate community health', 'Assess long-term sustainability', 'Build vs extend decisions'],
            [
                l('Lesson 1: The "Free" Illusion', 'Open source software is free to download but not free to operate. True cost = 0 (license) + Integration engineering + Customization + Security patching (you, not the vendor, are responsible) + Monitoring & operations + Community risk (what if the maintainer abandons it?). For complex AI frameworks, the operational cost often exceeds commercial alternatives.', [
                    d('Security Responsibility', 'You own patching, vulnerability scanning, and compliance for open source.', 'Commercial vendors handle this  -  you\'re now the security team'),
                    d('Customization Debt', 'Customizations to open source require maintenance during version upgrades.', 'Each customization = ongoing forking cost'),
                    d('Support Cost', 'No SLA, no phone number to call when it breaks at 3am.', 'Your engineers are the support team')
                ], 'Calculate the true TCO of your most critical open-source dependency. Compare to the commercial alternative.'),
                l('Lesson 2: Community Health as Economic Signal', 'A healthy open source community = long-term viability. Measure: contributor diversity (>10 active contributors from >3 companies), commit frequency (weekly or more), issue response time (<7 days), and corporate backing (is a major company investing in the project?).', [
                    d('Contributor Diversity', '>10 active contributors from multiple organizations.', 'If one company controls all contributions, it\'s disguised proprietary'),
                    d('Commit Frequency', 'Regular commits indicate active development and bug fixing.', 'No commits for 6+ months = potential abandonment'),
                    d('Corporate Backing', 'Major companies investing engineering resources in the project.', 'Provides sustainability but watch for license changes')
                ], 'Audit the community health of your top 3 open-source AI dependencies. Score each on contributor diversity, commit frequency, and backing.'),
                l('Lesson 3: Build vs Extend vs Replace', 'For open-source AI tools, you have three options: (1) Use as-is (lowest cost, limited differentiation), (2) Extend with custom modifications (moderate cost, some differentiation), (3) Replace with proprietary (highest cost, maximum differentiation). The decision: how much of your competitive advantage depends on this component?', [
                    d('Use As-Is', 'Appropriate when the tool is infrastructure (not differentiation).', 'Example: using an open-source vector database for internal RAG'),
                    d('Extend', 'Appropriate when the tool is close but needs customization for your use case.', 'Risk: fork maintenance during upstream upgrades'),
                    d('Replace', 'Appropriate when the component is core differentiator and open source is limiting.', 'Only justified if the build creates measurable competitive advantage')
                ], 'Categorize your open-source AI tools into use-as-is, extend, and replace. Justify each decision with differentiation impact.')
            ]
        ],
        ['11-6', 'AI Migration Economics', 'The economics of migrating between AI providers, from open source to commercial, or vice versa.',
            ['Calculate migration costs', 'Plan risk-managed transitions', 'Design fallback strategies', 'Measure migration ROI'],
            [
                l('Lesson 1: Migration Cost Framework', 'AI migration costs fall into 5 categories: Engineering labor (integration rebuilding), Data migration (reformatting and re-embedding), Model retraining (fine-tuning for the new platform), Testing and validation (ensuring quality parity), and Opportunity cost (features not built during migration).', [
                    d('Engineering Labor', 'Rebuilding integrations for the new platform.', 'Typically 50-80% of the original integration cost'),
                    d('Data Re-Embedding', 'If switching vector databases, all embeddings must be regenerated.', 'Can take days to weeks for large datasets'),
                    d('Quality Validation', 'Proving the new system matches or exceeds the old system\'s quality.', 'Requires extensive A/B testing before cutover')
                ], 'Estimate the total migration cost for switching your primary AI provider. Include all 5 cost categories.'),
                l('Lesson 2: Risk-Managed Transition Design', 'Never do a hard cutover for AI migrations. Use the blue-green deployment model: run both systems in parallel, route a small percentage of traffic to the new system, compare quality and cost metrics, and gradually shift traffic over 4-8 weeks.', [
                    d('Blue-Green Deployment', 'Run old and new AI systems simultaneously with traffic splitting.', 'Start with 5% traffic to new system, increase weekly'),
                    d('Quality Parity Check', 'Automated comparison of old and new system outputs on the same inputs.', 'Must pass statistical significance tests before increasing traffic'),
                    d('Instant Rollback', 'If new system degrades quality, route 100% back to old system within minutes.', 'The safety net that makes migration risk acceptable')
                ], 'Design a blue-green migration plan for your AI system: traffic split schedule, quality gates, and rollback triggers.'),
                l('Lesson 3: Post-Migration ROI Validation', 'After migration, validate ROI within 90 days: (1) Cost comparison (new vs old system at same volume), (2) Quality comparison (accuracy/satisfaction metrics pre and post), (3) Engineering impact (time saved or spent on the new system vs old). If ROI is negative at 90 days, the migration was a mistake  -  acknowledge and plan the correction.', [
                    d('Cost Validation', 'Monthly cost on new platform vs projected savings.', 'If actual savings <50% of projected, investigate the gap'),
                    d('Quality Validation', 'A/B test quality metrics before and after migration.', 'Any quality regression should trigger investigation'),
                    d('Honest Assessment', 'If the migration made things worse, acknowledge it and plan correction.', 'Sunk cost fallacy kills engineering organizations')
                ], 'Design a 90-day post-migration ROI validation plan with specific metrics, targets, and correction triggers.')
            ]
        ],
        ['11-7', 'AI Vendor Lock-In Prevention', 'Designing your AI architecture to prevent vendor dependency from day one.',
            ['Build abstraction layers', 'Design portable data formats', 'Create vendor exit plans', 'Maintain competitive alternatives'],
            [
                l('Lesson 1: The Abstraction Layer Pattern', 'Every AI vendor interaction should go through an internal abstraction layer: your application calls your AI service, which calls the vendor. If the vendor changes or you switch providers, only the adapter layer changes  -  your application code is untouched.', [
                    d('Interface Design', 'Define your internal AI interface based on your needs, not the vendor\'s API.', 'Your interface should be provider-agnostic'),
                    d('Adapter Pattern', 'Each vendor gets an adapter that translates your interface to their API.', 'Switching vendors = writing a new adapter, not rewriting the application'),
                    d('Testing Strategy', 'Test against your internal interface, not the vendor\'s API directly.', 'Makes vendor changes invisible to your test suite')
                ], 'Design an abstraction layer for your primary AI vendor. Define the internal interface and the vendor adapter.'),
                l('Lesson 2: Data Portability Economics', 'Your data must be portable: prompts, fine-tuning datasets, embeddings, and evaluation benchmarks should all be stored in vendor-neutral formats. If your fine-tuning data is locked in one provider\'s format, migration costs increase 3-5x.', [
                    d('Prompt Library', 'Store prompts in a provider-neutral format with variables, not hardcoded provider-specific syntax.', 'Enables instant reuse across any provider'),
                    d('Embedding Portability', 'Different embedding models produce incompatible vector spaces.', 'Store raw text alongside embeddings so you can re-embed for a new provider'),
                    d('Evaluation Benchmark', 'Provider-independent evaluation datasets that measure quality regardless of the underlying model.', 'The only fair way to compare providers')
                ], 'Audit your AI data assets for portability. Identify any data locked in a provider-specific format and plan the extraction.'),
                l('Lesson 3: The Vendor Exit Plan', 'Every vendor contract should have a documented exit plan: how to extract data, how to migrate to an alternative, estimated migration cost, and timeline. Review the exit plan annually. If the exit cost exceeds 6 months of the vendor\'s annual contract, you\'re dangerously locked in.', [
                    d('Exit Cost Ratio', 'Total migration cost / Annual vendor spend. Target: <0.5x.', 'Above 1.0x = you\'re paying more to leave than to stay for a year'),
                    d('Data Extraction SLA', 'Include data export rights and format specifications in the contract.', 'Without this, the vendor controls your exit timeline'),
                    d('Annual Review', 'Review the exit plan annually against current alternatives.', 'Switching costs decrease as alternatives mature')
                ], 'Create a vendor exit plan for your most critical AI vendor. Calculate the exit cost ratio and identify data extraction requirements.')
            ]
        ],
        ['11-8', 'AI Build Economics at Scale', 'When building AI in-house becomes the only viable economic option  -  and how to plan the investment.',
            ['Identify scale triggers', 'Plan multi-year AI investments', 'Build internal ML platforms', 'Measure build ROI'],
            [
                l('Lesson 1: Scale-Triggered Build Decision', 'At small scale, buying is always cheaper. At massive scale, building is sometimes necessary. The trigger: when your AI spend exceeds $1M/year with a single vendor AND the AI is a core differentiator AND you have 5+ ML engineers AND proprietary data that could train a superior model. All four conditions must be true.', [
                    d('Spend Threshold', '>$1M/year with a single AI vendor.', 'Below this, building rarely makes economic sense'),
                    d('Core Differentiator', 'The AI is the primary reason customers choose your product.', 'If AI is context not core, keep buying'),
                    d('Team Readiness', '5+ experienced ML engineers with production deployment experience.', 'Below this, you can\'t sustain in-house AI operations')
                ], 'Evaluate your organization against the 4 build triggers. Are all conditions met?'),
                l('Lesson 2: ML Platform Investment Planning', 'Building an internal ML platform is a 2-3 year investment. Year 1: foundation (training infrastructure, feature store, basic evaluation). Year 2: maturation (automated retraining, A/B testing, model monitoring). Year 3: optimization (multi-model routing, cost optimization, self-service for other teams).', [
                    d('Year 1 Investment', 'Foundation: training infra, basic pipeline, evaluation harness.', '$500K-1M in engineering time + $200K-500K in compute'),
                    d('Year 2 Investment', 'Maturation: automated workflows, monitoring, A/B testing.', '$300K-600K in engineering time + scaling compute costs'),
                    d('Year 3 Investment', 'Optimization: multi-model routing, cost optimization, platform self-service.', '$200K-400K in engineering time + declining per-unit compute costs')
                ], 'Build a 3-year ML platform investment plan with engineering headcount, compute budget, and expected capability milestones.'),
                l('Lesson 3: Build ROI Measurement', 'Measure build ROI quarterly: (1) Cost comparison  -  internal cost vs what you would have paid vendors at current volume, (2) Quality delta  -  model performance improvement from proprietary data advantage, (3) Speed delta  -  time to ship new AI features internally vs waiting for vendor roadmaps.', [
                    d('Cost Crossover', 'The quarter when internal costs drop below equivalent vendor costs.', 'Typically 18-30 months after initial investment'),
                    d('Quality Premium', 'Benchmark internal model against best vendor on your specific use case.', 'Internal model should outperform on domain-specific tasks'),
                    d('Feature Velocity', 'Time from AI feature idea to production, internal vs external dependency.', 'Internal: days. External: depends on vendor roadmap (months)')
                ], 'Design the quarterly ROI dashboard for your AI build investment. Define the cost crossover target quarter.')
            ]
        ],
        ['11-9', 'AI Partnership & Co-Development Models', 'When neither full build nor full buy is optimal  -  and how to structure co-development partnerships.',
            ['Design partnership structures', 'Negotiate IP ownership', 'Manage co-development risks', 'Measure partnership value'],
            [
                l('Lesson 1: Partnership Model Taxonomy', 'Beyond build and buy, there are 4 partnership models: (1) Co-Development  -  you and the vendor build together, sharing IP, (2) OEM  -  you embed the vendor\'s AI as a white-labeled component, (3) Revenue Share  -  the vendor provides AI, you provide distribution, revenue is split, (4) Strategic Investment  -  you invest in the AI vendor in exchange for preferential access and pricing.', [
                    d('Co-Development', 'Joint development with shared IP. Best when both parties bring unique capabilities.', 'Risk: IP disputes, scope creep, uneven contribution'),
                    d('OEM Model', 'Embed vendor AI as a component with your branding.', 'Fast to market, but limited differentiation and vendor dependency'),
                    d('Revenue Share', 'Split revenue generated from the AI integration.', 'Aligns incentives but requires transparent revenue attribution')
                ], 'Evaluate which partnership model fits your current AI needs. Map each option against your strategic priorities.'),
                l('Lesson 2: Co-Development IP Negotiation', 'The #1 deal-breaker in AI partnerships is IP ownership. Three clean models: (1) Joint ownership with field-of-use restrictions (each party uses the AI in their domain), (2) Background IP stays with creator, foreground IP (new work) is jointly owned, (3) Licensed back  -  one party owns the IP, the other gets a perpetual license.', [
                    d('Field-of-Use Split', 'Each party owns rights to use the jointly developed AI in their specific market.', 'Clean separation. Works when markets don\'t overlap.'),
                    d('Background/Foreground Split', 'Pre-existing IP stays with creator. New IP created together is jointly owned.', 'Requires clear documentation of what existed before the partnership'),
                    d('License-Back Model', 'One party owns all IP, grants perpetual license to the other.', 'Simpler but requires trust in the relationship\'s durability')
                ], 'Draft IP ownership terms for a hypothetical co-development partnership. Choose the model and justify why.'),
                l('Lesson 3: Partnership Value Measurement', 'Measure partnership health quarterly: (1) Value delivered vs projected  -  is the partnership generating the expected ROI? (2) IP contribution balance  -  are both parties contributing equally? (3) Strategic alignment  -  are both parties still heading in the same direction? If any metric falls below threshold for 2 consecutive quarters, renegotiate or exit.', [
                    d('ROI Tracking', 'Actual revenue/savings vs projected at partnership inception.', 'Below 50% of projection at month 12 = restructure needed'),
                    d('Contribution Balance', 'Are both parties investing equivalent effort and resources?', 'Imbalanced partnerships breed resentment and fail'),
                    d('Strategic Drift', 'Are the partners\' product strategies still aligned?', 'Diverging strategies make the partnership value-destructive')
                ], 'Design a quarterly partnership health scorecard. Define the metrics, targets, and escalation triggers.')
            ]
        ],
        ['11-10', 'The AI Build vs Buy Decision Document', 'Creating the definitive decision document that survives board scrutiny.',
            ['Structure the decision document', 'Present balanced analysis', 'Include risk matrices', 'Get stakeholder buy-in'],
            [
                l('Lesson 1: Decision Document Structure', 'The Build vs Buy Decision Document has 6 sections: (1) Strategic Context  -  why this AI capability matters, (2) Options Analysis  -  build, buy, partner with TCO for each, (3) Decision Matrix  -  weighted scoring across 8 criteria, (4) Risk Assessment  -  what could go wrong with each option, (5) Recommendation  -  with confidence level, (6) Implementation Plan  -  first 90 days.', [
                    d('Strategic Context', 'Connect the AI capability to a specific business outcome with dollar value.', 'Without strategic context, the document is an engineering exercise'),
                    d('Options Analysis', 'At minimum 3 options: build in-house, buy from vendor, and hybrid/partner.', 'Each option must have a 3-year TCO projection'),
                    d('Confidence Level', 'High (>80% data available), Medium (50-80%), Low (<50%).', 'Honest confidence levels build executive trust')
                ], 'Create the framework for your Build vs Buy decision document. Define the strategic context and identify the 3 options to analyze.'),
                l('Lesson 2: Weighted Decision Matrix', 'Score each option across 8 criteria: Cost (TCO), Time-to-Market, Quality/Performance, Strategic Control, Scalability, Security/Compliance, Team Impact, and Vendor Risk. Weight each criterion based on your organization\'s priorities. The option with the highest weighted score wins  -  but the gap between options matters more than the winner.', [
                    d('Criterion Weighting', 'Assign weights (1-5) based on organizational priorities. Total must sum to a constant.', 'Time-to-market usually gets highest weight in startups; control in enterprise'),
                    d('Scoring Scale', '1-5 for each option on each criterion. Use pre-defined rubrics for consistency.', 'Define what 1, 3, and 5 mean for each criterion before scoring'),
                    d('Gap Analysis', 'If the top two options are within 10% of each other, the decision is a toss-up.', 'In toss-ups, default to the option with lower reversibility risk')
                ], 'Build the weighted decision matrix for your AI capability. Score all options and identify the winner with gap analysis.'),
                l('Lesson 3: Stakeholder Alignment Process', 'The decision document must be reviewed by: Engineering (technical feasibility), Product (strategic fit), Finance (budget approval), Legal (IP and compliance), and Security (risk posture). Each stakeholder reviews their section and provides a go/no-go. All must be green for the recommendation to be approved.', [
                    d('Review Sequence', 'Engineering → Product → Finance → Legal → Security → Executive Approval.', 'Each reviewer has a specific section they own'),
                    d('Dissent Documentation', 'If any stakeholder disagrees, document the dissent and the mitigation.', 'Documented dissent protects everyone if the decision goes wrong'),
                    d('Decision Record', 'Archive the final decision with all signatures, dissents, and rationale.', 'Essential for post-mortems and future reference')
                ], 'Map your stakeholder review process. Identify who reviews which section and what constitutes their go/no-go criteria.')
            ]
        ],
    ];

    t11Exp.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`ai-build-vs-buy/${id}`] = m(id, title, desc, t11, takeaways, lessons);
    });

    // ═══════════════════ TRACK 12 EXPANSION: Modules 4-10 ═══════════════════
    const t12 = 'Track 12  -  Career Capital Economics';
    const t12Exp: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['12-4', 'Job Switching Economics', 'The math behind staying vs leaving  -  and when switching companies is the highest-ROI career decision.',
            ['Calculate switching premium', 'Evaluate hidden costs', 'Time transitions optimally', 'Negotiate from strength'],
            [
                l('Lesson 1: The Switching Premium', 'On average, changing companies yields a 15-25% total compensation increase, compared to the 3-5% annual raise for staying. Over a 20-year career, an engineer who switches every 3-4 years earns 30-50% more lifetime compensation than one who stays at the same company. The switching premium is the single largest wealth-building lever in your career.', [
                    d('Average Internal Raise', '3-5% annually, regardless of performance at many companies.', 'Barely keeps pace with inflation'),
                    d('Average External Jump', '15-25% total compensation increase when switching companies.', '3-5x the internal raise in a single move'),
                    d('Compound Effect', 'A $20K increase early in career compounds to $200K+ over remaining career.', 'Early career switching has the highest NPV')
                ], 'Calculate your lifetime compensation under two scenarios: switching 3x over 15 years vs staying at your current company. What\'s the gap?'),
                l('Lesson 2: Hidden Switching Costs', 'The switching premium isn\'t free. Hidden costs: (1) Vesting cliff reset (losing 12-18 months of equity vesting), (2) Relationship reset (rebuilding social capital from scratch), (3) Context reset (6 months to reach full productivity), (4) Risk premium (new company may be worse). Net switching value = Premium - Hidden Costs.', [
                    d('Equity Cliff Loss', 'Most companies vest equity over 4 years with a 1-year cliff.', 'Leaving before your cliff = $0 from those grants'),
                    d('Social Capital Reset', 'Your reputation, relationships, and trust must be rebuilt from zero.', 'Takes 6-12 months to rebuild influence at a new company'),
                    d('Productivity Dip', 'You\'re at 25-50% productivity for 3-6 months at a new company.', 'This dip is invisible to the compensation math')
                ], 'Calculate the net switching value for your situation: external offer premium minus all hidden costs. Is the net positive?'),
                l('Lesson 3: Optimal Switching Timing', 'Three timing signals that it\'s time to switch: (1) Your learning rate has plateaued (you haven\'t learned anything new in 6 months), (2) Your comp is >15% below market (the underpayment tax), (3) Your scope ceiling is hit (no more growth opportunities without someone above you leaving).', [
                    d('Learning Rate', 'Track monthly: what new skills, knowledge, or capabilities did you gain?', 'If the answer is "nothing" for 2+ months, you\'re stagnating'),
                    d('Underpayment Threshold', '>15% below market comp = the cost of staying exceeds the cost of switching.', 'Verify with external offers, not just data research'),
                    d('Scope Ceiling', 'All positions above you are filled by people who aren\'t leaving.', 'No opening above = no promotion regardless of your performance')
                ], 'Evaluate your current situation against the 3 switching signals. How many are active?')
            ]
        ],
        ['12-5', 'Technical Skill Portfolio Management', 'Managing your skills like a financial portfolio  -  diversification, risk, and returns.',
            ['Audit your skill portfolio', 'Identify skill depreciation', 'Invest in high-growth skills', 'Build T-shaped expertise'],
            [
                l('Lesson 1: Skill Portfolio Audit', 'Your skills are assets that appreciate and depreciate. Map every skill you have on two axes: Market Value (demand × scarcity) and Depreciation Rate (how quickly the skill becomes obsolete). High value, low depreciation = core holdings. High value, high depreciation = momentum plays. Low value, any depreciation = sell (stop investing time).', [
                    d('Core Holdings', 'Fundamental skills with lasting value: system design, data modeling, economic reasoning.', 'These never depreciate significantly'),
                    d('Momentum Skills', 'In-demand but rapidly evolving: specific AI frameworks, cloud services, languages.', 'Must be continuously refreshed or they depreciate'),
                    d('Dead Weight', 'Skills with declining market value: legacy language expertise, deprecated frameworks.', 'Stop investing. These consume learning time with diminishing returns.')
                ], 'Audit your complete skill portfolio. Map each skill on the value/depreciation grid. Identify any dead weight.'),
                l('Lesson 2: Skill Depreciation Curves', 'Different skill categories depreciate at different rates. Frameworks depreciate in 2-3 years (React → React alternatives → something new). Languages depreciate in 5-10 years (COBOL → Java → Kotlin). Principles never depreciate (CAP theorem, Big-O, system design, economic modeling). Invest proportionally.', [
                    d('Framework Half-Life', 'The period after which 50% of a framework\'s market relevance is lost.', 'Frontend frameworks: 2-3 years. Backend frameworks: 3-5 years.'),
                    d('Language Half-Life', 'Languages decline more slowly but eventually lose market share.', 'Most languages have a 10-15 year market relevance window'),
                    d('Principles Longevity', 'Fundamentals like distributed systems, algorithms, and economics are timeless.', 'Investment in principles has infinite ROI')
                ], 'Calculate the depreciation curve for your top 5 technical skills. Which need refreshing? Which are timeless?'),
                l('Lesson 3: The T-Shaped Investment Strategy', 'The most valuable engineers are T-shaped: deep expertise in one area (the vertical bar) with broad competency across many (the horizontal bar). The vertical makes you irreplaceable in your domain. The horizontal makes you effective across boundaries. Investment ratio: 70% depth, 30% breadth.', [
                    d('Depth Investment', 'Spend 70% of learning time going deeper in your primary domain.', 'This is what makes you an expert that commands premium compensation'),
                    d('Breadth Investment', 'Spend 30% of learning time expanding into adjacent domains.', 'This is what makes you effective in cross-functional contexts'),
                    d('Adjacent Domains', 'For an engineer: product management, data science, economics, design.', 'Each adjacent domain increases your impact multiplier')
                ], 'Define your T-shape: what\'s your vertical depth? What adjacent domains form your horizontal breadth? Design a 6-month learning plan.')
            ]
        ],
        ['12-6', 'Network Capital Economics', 'Your professional network has a quantifiable economic value  -  and most engineers underinvest in it.',
            ['Quantify network value', 'Build strategic relationships', 'Convert network to opportunities', 'Maintain network as an asset'],
            [
                l('Lesson 1: Network Effect on Career Outcomes', 'Studies show that 70-80% of jobs are filled through networks, not applications. An engineer with a strong network receives inbound opportunities at 3-5x the rate of one without. Network value = Number of meaningful connections × Average opportunity value × Activation probability.', [
                    d('Meaningful Connections', 'People who would take your call and advocate for you.', 'Quality over quantity: 50 real connections > 5,000 LinkedIn connections'),
                    d('Opportunity Value', 'Average compensation increase from network-sourced opportunities.', 'Network-sourced roles typically pay 10-20% more than cold-applied roles'),
                    d('Activation Probability', 'The likelihood a connection leads to an actionable opportunity per year.', 'For active connections: 5-10%. For dormant: <1%.')
                ], 'Calculate your network value: count meaningful connections, estimate average opportunity value, and activation probability.'),
                l('Lesson 2: Strategic Relationship Investment', 'Not all relationships are equal. Invest most heavily in: (1) Hiring managers at target companies (direct pipeline to opportunities), (2) Peers who are 2 years ahead of you (mentorship and referrals), (3) People in adjacent functions (product, design, data science) who expand your perspective. Invest 2 hours/week in relationship building.', [
                    d('Hiring Managers', 'Building relationships with hiring managers before you need a job.', 'When a role opens, you\'re first call  -  not first applicant'),
                    d('Peer Mentors', 'People 2 years ahead in their career who can share recent learnings.', 'Their recent experience is more relevant than a senior executive\'s'),
                    d('Cross-Functional Network', 'Product managers, designers, and data scientists who expand your reach.', 'Cross-functional referrals open doors engineering-only networks can\'t')
                ], 'Identify 10 strategic relationships to invest in over the next quarter. Schedule the first touchpoint with each.'),
                l('Lesson 3: Network Maintenance Economics', 'Networks decay without maintenance. The 90-day rule: if you haven\'t contacted someone in 90 days, the relationship is dormant. Maintaining a network requires 2-3 hours/week: 1 coffee/lunch, 2-3 meaningful online interactions, 1 helpful introduction or resource share. The ROI: one strong referral per year covers 100+ hours of networking.', [
                    d('90-Day Rule', 'Contact every meaningful connection at least once every 90 days.', 'Simple: a message, a shared article, a quick question'),
                    d('Give-First Strategy', 'Provide value before asking for anything: introductions, resources, advice.', 'People remember who helped them, not who asked them for help'),
                    d('Annual ROI', 'One good referral (saving 6-month job search, earning $30K+ premium) = 100+ hours of networking ROI.', 'Networking is the highest-ROI career investment per hour')
                ], 'Design a network maintenance system: weekly time allocation, tracking method, and give-first strategy for your top 20 connections.')
            ]
        ],
        ['12-7', 'Personal Brand Economics', 'Building a professional brand that creates inbound career opportunities and pricing power.',
            ['Build professional visibility', 'Create content with career ROI', 'Measure brand impact', 'Convert brand to compensation'],
            [
                l('Lesson 1: The Inbound Opportunity Engine', 'Engineers with a personal brand (blog posts, open source contributions, conference talks, technical writing) receive 3-10x more inbound recruiter messages and targeted opportunities than those without. The brand creates "pull" instead of "push"  -  companies compete for you instead of you competing for roles.', [
                    d('Blog Post ROI', 'One viral technical blog post can generate 50+ recruiter contacts over 12 months.', 'Investment: 4-8 hours. Return: months of inbound opportunities'),
                    d('Open Source ROI', 'Contributing to popular projects signals competence to hiring managers who review your commits.', 'Your GitHub is a portfolio that works 24/7'),
                    d('Conference Talk ROI', 'One conference talk positions you as an expert to hundreds of potential advocates.', 'Investment: 20-40 hours. Return: expert positioning for years')
                ], 'Create a 6-month personal brand plan: 2 blog posts, 1 open source contribution, and 1 talk proposal. Map expected ROI.'),
                l('Lesson 2: Content Strategy for Career Capital', 'Not all content builds career capital equally. The hierarchy: (1) Original research/data (highest value), (2) Experience-based case studies (high), (3) Tutorials and how-tos (moderate), (4) Opinion pieces (low unless contrarian and backed by data). Write about what you\'ve done, not what you think.', [
                    d('Original Research', 'Publishing data or analysis that doesn\'t exist elsewhere.', 'Highest differentiation: positions you as a thought leader, not a participant'),
                    d('Case Studies', 'Documenting specific problems you solved and the outcomes.', 'Most credible: shows proven capability, not theoretical knowledge'),
                    d('Tutorial Content', 'Teaching others how to do something you\'re expert at.', 'High volume but lower differentiation: many people write tutorials')
                ], 'Identify 3 case studies from your work experience that would make compelling content. Outline each.'),
                l('Lesson 3: Brand-to-Compensation Conversion', 'A strong brand increases your compensation through 3 mechanisms: (1) Negotiating leverage  -  you have options, they know it, (2) Scope expansion  -  brand attracts bigger roles and projects, (3) Rate premium  -  for consulting/contracting, known experts command 2-3x premiums.', [
                    d('Negotiating Leverage', 'Multiple inbound opportunities = multiple offers = maximum negotiating power.', 'Brand creates competition for your talent'),
                    d('Scope Attraction', 'Companies offer bigger roles to people with proven public expertise.', 'Your brand gets you interviewed for the role above the one you applied for'),
                    d('Rate Premium', 'Known experts command $300-500/hr consulting vs $100-150 for unknowns.', 'Brand = pricing power in the services market')
                ], 'Calculate the compensation premium your personal brand is generating today. If it\'s $0, identify the first step to build it.')
            ]
        ],
        ['12-8', 'Side Project Economics', 'The financial case for building, the financial case against, and the framework for deciding.',
            ['Evaluate project ROI realistically', 'Assess opportunity costs', 'Structure projects for learning ROI', 'Build portfolio-worthy work'],
            [
                l('Lesson 1: Revenue Reality Check', 'The median side project generates $0 in revenue. The median successful side project generates <$500/month. The purpose of most side projects is not revenue  -  it\'s learning, portfolio building, and brand creation. If you\'re building a side project for revenue, you need product-market fit, distribution, and persistence. Most engineers have none of these.', [
                    d('Revenue Distribution', '95% of side projects: $0/month. 4%: $1-1000/month. 1%: >$1000/month.', 'Don\'t delude yourself about revenue expectations'),
                    d('Learning ROI', 'Even a $0-revenue side project can teach skills worth $20K+ in career capital.', 'Value the skill acquisition, not the MRR'),
                    d('Portfolio Value', 'A shipped, deployed project is worth 10x an in-progress project on your resume.', 'Finished > ambitious. Deployed > local.')
                ], 'Audit your current or planned side project: is the primary goal revenue, learning, or portfolio? Be honest about which.'),
                l('Lesson 2: Opportunity Cost Assessment', 'Every hour on a side project is an hour not spent on: (1) Your primary job (which actually pays), (2) Learning skills directly applicable to career advancement, (3) Network building, (4) Rest and sustainability. If your side project doesn\'t compound on your primary career trajectory, it\'s a hobby  -  not an investment.', [
                    d('Time Investment', 'Track actual hours per week spent on the side project.', 'Most people underestimate by 2x'),
                    d('Alternative Investment', 'What career-advancing activity could you do with those hours instead?', 'Compare: building a side project vs writing a blog post vs networking'),
                    d('Compounding Test', 'Does this project make you better at your primary career or is it tangential?', 'Compounding projects build on your existing expertise')
                ], 'Calculate the opportunity cost of your side project in hours per month. Identify the highest-ROI alternative for those hours.'),
                l('Lesson 3: The Portfolio Project Framework', 'If the goal is career capital (not revenue), optimize for demonstrable competence: (1) Use technologies relevant to your target roles, (2) Solve a real problem (not a toy), (3) Write about the architecture decisions, (4) Deploy it publicly, (5) Include metrics. This project should be your "evidence exhibit" in interviews.', [
                    d('Technology Alignment', 'Build with the stack used at your target companies.', 'Shows immediate relevance to hiring managers'),
                    d('Problem Significance', 'Solve a problem someone other than you would care about.', 'Toy projects don\'t demonstrate applied engineering skill'),
                    d('Public Deployment', 'Deployed on a real URL, accessible to anyone.', 'Shows operational capability, not just coding ability')
                ], 'Design a portfolio project that demonstrates competence for your target role. Define the technology, problem, and deployment plan.')
            ]
        ],
        ['12-9', 'Equity & Startup Economics for Engineers', 'Understanding stock options, RSUs, and startup compensation with the rigor of an investor.',
            ['Evaluate startup equity realistically', 'Calculate expected value of options', 'Negotiate total compensation packages', 'Make informed risk/reward decisions'],
            [
                l('Lesson 1: Stock Option Valuation for Engineers', 'Your stock options are NOT worth the "last round price × shares." The expected value of startup equity = Share price × Liquidity probability × (1 - Dilution) × (1 - Tax rate). For a typical Series B startup: options that look like $500K on paper are worth $50-100K in expected value.', [
                    d('Liquidity Probability', 'The probability of an exit (IPO or acquisition) at or above current valuation.', 'Series A: 10-20%. Series B: 20-35%. Series C+: 35-50%.'),
                    d('Dilution Impact', 'Your ownership percentage decreases with each subsequent funding round.', 'Expect 20-30% dilution per round. Your 0.1% becomes 0.05% over 2 rounds.'),
                    d('Tax Impact', 'Options are taxed at exercise (ISOs: AMT, NSOs: ordinary income).', 'Effective tax rate on options income: 35-50% depending on state')
                ], 'Calculate the expected value of your startup equity using the full formula. Compare to the paper value.'),
                l('Lesson 2: Early vs Late Stage Compensation Trade-offs', 'Early-stage startups offer more equity and less cash. Late-stage offers more cash and less (but more certain) equity. The decision framework: (1) What\'s your personal financial runway? (under 6 months of savings = you need cash), (2) What\'s the probability-adjusted expected value of the equity? (3) What\'s the learning opportunity delta?', [
                    d('Personal Runway', 'Months of expenses you can cover without income.', 'Below 6 months: prioritize cash over equity'),
                    d('Risk/Reward Profile', 'Early-stage: 10% chance of 10x. Late-stage: 40% chance of 2x.', 'Expected value can be similar, variance is wildly different'),
                    d('Learning Premium', 'Early-stage companies provide 3-5x learning acceleration due to scope and ownership.', 'This learning has compounding career value')
                ], 'Evaluate your personal risk tolerance and financial runway. What stage of startup offers you the best risk-adjusted return?'),
                l('Lesson 3: Total Compensation Negotiation Framework', 'Don\'t negotiate components in isolation. The framework: (1) Define your target total compensation in dollar terms, (2) Identify the components you\'re flexible on (equity vs cash split), (3) Understand the company\'s flexibility (early-stage: flexible on equity, rigid on cash. Late-stage: opposite), (4) Negotiate the total, then split the components.', [
                    d('Target Total Comp', 'Define one number: "I need $X in total compensation" (not "$Y salary + Z equity").', 'Gives the company flexibility to structure the offer'),
                    d('Flexibility Zones', 'Know what you\'ll compromise on: signing bonus, equity split, title, scope.', 'Having flexibility gives you more negotiating room'),
                    d('Written Offers Only', 'Verbal offers are worthless. Always get the full offer in writing before responding.', 'Verbal promises have zero enforcement. Paper is the only truth.')
                ], 'Prepare your total compensation negotiation framework for your next offer: target number, flexibility zones, and walk-away threshold.')
            ]
        ],
        ['12-10', 'Career Capital Compounding Strategy', 'The 20-year plan: how to compound your career capital for maximum lifetime earnings and impact.',
            ['Design long-term career architecture', 'Identify compounding decisions', 'Avoid career traps', 'Build sustainable momentum'],
            [
                l('Lesson 1: The Compound Career Effect', 'Career capital compounds like financial capital. A 20% skill improvement in year 1 enables a higher-impact role in year 2, which enables a higher-comp position in year 3, which enables a leadership opportunity in year 4. The engineers who earn the most at 40 aren\'t the smartest  -  they\'re the ones who made compounding decisions at 25.', [
                    d('Early Compounders', 'High-impact decisions early in career: choosing the right company, the right technology, the right mentors.', 'A great first job compounds for 15+ years'),
                    d('Mid-Career Pivot', 'The transition from IC to leadership or IC to deep specialization.', 'This pivot determines the next 15+ years of earning potential'),
                    d('Late-Career Leverage', 'Converting expertise into advisory, training, or executive roles.', 'Highest leverage per hour worked, but requires earlier compounding')
                ], 'Map 5 decisions from your career that compounded (positively or negatively). What pattern do you see?'),
                l('Lesson 2: Career Trap Identification', 'Three traps that destroy compounding: (1) The Golden Handcuffs  -  high pay in a dead-end skill (legacy system maintenance), (2) The Title Trap  -  chasing title inflation without real scope growth, (3) The Comfort Trap  -  staying in a comfortable role where you\'ve stopped learning.', [
                    d('Golden Handcuffs', 'Earning well for skills that are depreciating.', 'The compensation feels good now but limits options in 5 years'),
                    d('Title Inflation', 'Companies giving titles instead of real scope (and compensation).', '"Director" at a 5-person startup ≠ "Director" at a 5,000-person company'),
                    d('Comfort Trap', 'The role is easy, the pay is decent, and you\'ve stopped being challenged.', 'This is where career capital starts eroding  -  slowly, invisibly')
                ], 'Honestly assess: are you in any of the 3 career traps? What would you need to change to escape?'),
                l('Lesson 3: The 20-Year Architecture', 'Design your career like a system architecture. Phase 1 (Years 0-5): Build technical foundation and identify your specialization vector. Phase 2 (Years 5-10): Deepen expertise, build brand, transition to leadership or deep IC. Phase 3 (Years 10-15): Maximize earning power through scope, impact, and leverage. Phase 4 (Years 15-20): Convert expertise to scalable impact (advisory, investing, teaching, building).', [
                    d('Phase 1: Foundation', 'Learn fundamentals, ship real products, find your specialization.', 'Optimize for learning rate, not compensation'),
                    d('Phase 2: Specialization', 'Become the go-to expert in a specific domain. Build reputation.', 'Optimize for brand and depth, not breadth'),
                    d('Phase 3: Leverage', 'Use expertise for maximum impact: lead teams, drive strategy, shape markets.', 'Optimize for scope and influence, not individual contribution')
                ], 'Design your 20-year career architecture. Identify which phase you\'re in and what the transition trigger is to the next phase.')
            ]
        ],
    ];

    t12Exp.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`career-capital/${id}`] = m(id, title, desc, t12, takeaways, lessons);
    });

    // ═══════════════════ TRACK 13 EXPANSION: Modules 4-10 ═══════════════════
    const t13 = 'Track 13  -  Engineering-to-Executive';
    const t13Exp: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['13-4', 'M&A for Technical Leaders', 'How technical leaders evaluate, execute, and integrate acquisitions.',
            ['Evaluate acquisition targets technically', 'Lead technical due diligence', 'Plan integration', 'Protect value post-acquisition'],
            [
                l('Lesson 1: Technical Acquisition Evaluation', 'When your company considers acquiring an AI startup or tech asset, the CTO/VPE must evaluate: (1) Is the technology additive or duplicative? (2) Can it integrate with our stack within 12 months? (3) Is the team worth acquiring, or just the code? Most acquisitions fail because the technology was overvalued and the integration was underestimated.', [
                    d('Additive vs Duplicative', 'Does the acquisition add capabilities we can\'t build, or duplicate what we have?', 'Duplicative acquisitions destroy value through complexity'),
                    d('Integration Complexity', 'How many systems need to change to integrate the acquired technology?', '>6 system touchpoints = high integration risk'),
                    d('Acq-Hire vs Tech-Buy', 'Are you buying the team (acq-hire) or the product (tech-buy)?', 'Acq-hires are about people. Tech-buys are about IP. Different valuations.')
                ], 'Evaluate a hypothetical acquisition: is it additive or duplicative? Estimate integration complexity and recommend acq-hire vs tech-buy.'),
                l('Lesson 2: Leading Technical Due Diligence', 'The CTO leads tech DD across 5 dimensions: code quality (can you maintain it?), architecture scalability (does it scale with your load?), security posture (what vulnerabilities exist?), operational maturity (can it run in production?), and team assessment (who stays and who leaves?).', [
                    d('Code Quality', 'Test coverage, documentation, code review culture, deployment automation.', '20-40 hours of senior engineering review'),
                    d('Architecture Review', 'Scalability bottlenecks, single points of failure, cloud dependencies.', 'Map against your expected load: will it break?'),
                    d('Team Interviews', '1:1 with every engineer on the acquired team within the first week.', 'Assess: willingness to stay, cultural fit, key-person dependencies')
                ], 'Design a 5-day technical due diligence process: what to evaluate, who evaluates it, and what findings would kill the deal.'),
                l('Lesson 3: Integration Value Protection', 'Most acquisition value is destroyed during integration. Value protection rules: (1) Never merge codebases in the first 6 months, (2) Never reorganize the acquired team in the first 3 months, (3) Define 3 measurable integration milestones with dates, (4) Assign a dedicated integration lead who reports to the CEO.', [
                    d('Codebase Patience', 'Run the acquired product independently for 6+ months. Merge only after deep understanding.', 'Premature merges create catastrophic bugs and attrition'),
                    d('Team Stability', '90-day freeze on any changes to the acquired team\'s structure or reporting.', 'Change = uncertainty = attrition = value destruction'),
                    d('Integration Lead', 'One senior person dedicated full-time to the integration.', 'Integration is a full-time job  -  not a side project for the CTO')
                ], 'Design an integration value protection plan: 90-day freeze rules, 3 milestones, and integration lead role definition.')
            ]
        ],
        ['13-5', 'Strategic Planning for Engineering Organizations', 'Building the 3-year engineering strategy that earns the board\'s confidence.',
            ['Build engineering strategy documents', 'Align technology with business goals', 'Present roadmaps to executives', 'Manage strategic trade-offs'],
            [
                l('Lesson 1: Engineering Strategy Document', 'The engineering strategy is NOT a list of technologies you want to use. It\'s the answer to: "How will technology create competitive advantage over the next 3 years?" Structure: (1) Business context  -  where the company is going, (2) Technical thesis  -  how technology enables it, (3) Investment plan  -  what to build, buy, or retire, (4) People plan  -  team shape and skills needed.', [
                    d('Business Alignment', 'Every technical decision must trace to a business outcome.', 'If you can\'t explain why in business terms, it\'s not strategic'),
                    d('Technical Thesis', 'A 2-3 sentence statement of how technology creates competitive advantage.', 'Example: "Our proprietary ML pipeline processes data 10x faster than competitors"'),
                    d('Kill List', 'Technologies and systems to deliberately sunset over 3 years.', 'What you DON\'T do is as strategic as what you do')
                ], 'Draft a 1-page engineering strategy: business context, technical thesis, investments, and kill list.'),
                l('Lesson 2: Roadmap Presentation for Non-Technical Audiences', 'Never show a Gantt chart to the board. Instead: (1) Capability roadmap  -  what new business capabilities technology will enable each quarter, (2) Investment roadmap  -  how R&D budget is allocated across capabilities, (3) Risk roadmap  -  what technical risks are being retired each quarter.', [
                    d('Capability Language', '"Q3: AI-powered pricing optimization" not "Q3: Deploy TensorFlow model."', 'Executives care about capabilities, not implementations'),
                    d('Investment Allocation', 'Show R&D budget as a pie chart: new capabilities, debt reduction, infrastructure, operations.', 'Executives understand budget allocation intuitively'),
                    d('Risk Retirement', 'Each quarter, explicitly identify which technical risks you eliminated.', 'Reducing risk is as valuable as shipping features')
                ], 'Translate your current engineering roadmap into capability language. Remove all technical jargon.'),
                l('Lesson 3: Managing Strategic Trade-offs', 'Every strategy has trade-offs. The frameworks: (1) Speed vs Quality  -  explicitly state which you\'re optimizing for on each initiative, (2) Build vs Buy  -  for each capability, defend your choice with TCO, (3) Short-term vs Long-term  -  how much capacity goes to current revenue vs future positioning.', [
                    d('Speed vs Quality', 'Some features need to ship fast (competitive response). Some need to be perfect (compliance).', 'State the trade-off explicitly in the roadmap'),
                    d('Capacity Allocation', 'Target: 60% current revenue features, 20% future positioning, 20% debt/infrastructure.', 'Adjust based on company maturity and strategy'),
                    d('Reversibility Test', 'If a trade-off is reversible, move fast. If irreversible, invest in getting it right.', 'This simple framework resolves 80% of speed vs quality debates')
                ], 'Document your current strategic trade-offs: speed vs quality, build vs buy, and short-term vs long-term capacity allocation.')
            ]
        ],
        ['13-6', 'Building High-Performance Engineering Cultures', 'The economics of culture: how culture drives productivity, retention, and innovation.',
            ['Design culture intentionally', 'Measure culture economically', 'Build hiring for culture add', 'Drive cultural transformation'],
            [
                l('Lesson 1: Culture as Economic Infrastructure', 'Culture is not ping-pong tables. Culture is the invisible operating system that determines: how fast decisions are made, how openly problems are surfaced, how ambitious goals are set, and how effectively teams collaborate. High-performance cultures produce 2-3x more output per engineer than low-performance cultures. This is measurable.', [
                    d('Decision Speed', 'How quickly reversible decisions are made. Target: <24 hours.', 'Slow cultures lose weeks per decision × hundreds of decisions per quarter'),
                    d('Problem Surfacing', 'How quickly problems reach the people who can solve them.', 'In fear cultures, problems hide for weeks. In safe cultures: hours.'),
                    d('Output per Engineer', 'Revenue or business outcomes per engineer (APER).', 'High-performance cultures: $400K+. Low: <$200K.')
                ], 'Measure your culture across decision speed, problem surfacing, and APER. Grade your culture: high-performance or not?'),
                l('Lesson 2: Culture-as-Operating-System Design', 'Design culture like you design software: define the interfaces (how teams interact), the protocols (how decisions are made), and the error handling (how failures are processed). Document these explicitly and onboard every new hire into them.', [
                    d('Decision Protocol', 'Document who makes what decisions, with what input, and by when.', 'Removes ambiguity and eliminates "who\'s deciding this?" waste'),
                    d('Escalation Protocol', 'When and how to escalate issues. Clear triggers, not "use your judgment."', 'Bad escalation = problems either hidden (too late) or over-escalated (wasted exec time)'),
                    d('Failure Protocol', 'Blameless post-mortems within 48 hours of every significant incident.', 'The quality of your failure protocol determines how fast you learn')
                ], 'Define your engineering culture operating system: decision protocol, escalation protocol, and failure protocol.'),
                l('Lesson 3: Cultural Transformation Economics', 'Changing culture takes 12-18 months  -  roughly 3 hiring cycles. The mechanism: (1) Define the target culture explicitly, (2) Hire exclusively for culture-add (not culture-fit), (3) Promote people who model the target culture, (4) Exit people who resist it. Each step has an economic cost and an economic return.', [
                    d('Culture-Add Hiring', 'Hire people who bring the missing cultural attributes, not duplicates of existing culture.', '"Culture fit" perpetuates the current culture  -  which you\'re trying to change'),
                    d('Promotion Signals', 'Who gets promoted tells the organization what really matters.', 'Promote for the culture you want, not the culture you have'),
                    d('Exit Cost', 'Some people will leave during cultural transformation. This is expected and healthy.', 'Cost of exits: 6-9 months salary. Cost of cultural stagnation: years of underperformance')
                ], 'Design a 12-month cultural transformation plan: define the target, hiring criteria changes, promotion signal changes, and expected attrition.')
            ]
        ],
        ['13-7', 'Crisis Leadership for Technical Executives', 'Leading through outages, layoffs, security breaches, and other engineering crises with economic precision.',
            ['Lead incident response economically', 'Communicate during crisis', 'Make rapid resource allocation decisions', 'Recover organizational trust'],
            [
                l('Lesson 1: Incident Response Economics', 'Every production incident has a cost-per-minute: lost transactions, customer churn risk, SLA penalty exposure, and engineer opportunity cost. For a $100M ARR product, a full outage costs ~$190/minute in direct revenue alone. Decision speed in the first 15 minutes determines whether you lose $3K or $300K.', [
                    d('Cost Per Minute', 'ARR / 525,600 minutes/year = revenue cost per minute of downtime.', 'For $100M ARR: $190/minute. For $10M ARR: $19/minute.'),
                    d('15-Minute Window', 'Most incidents either resolve in 15 minutes or escalate to multi-hour events.', 'The initial response quality determines the trajectory'),
                    d('Escalation ROI', 'Escalating early has a small cost (executive attention). Not escalating has a massive cost (extended outage).', 'When in doubt, escalate.')
                ], 'Calculate cost-per-minute for your primary product. Design the 15-minute rapid response protocol.'),
                l('Lesson 2: Crisis Communication for Executives', 'During a crisis, the CTO communicates to three audiences: (1) The engineering team  -  "here\'s what we know, here\'s what we\'re doing, here\'s how you can help," (2) The executive team  -  "here\'s the business impact and our ETA to resolution," (3) Customers  -  "here\'s what happened, here\'s what we\'re doing, here\'s how to reach us."', [
                    d('Team Communication', 'Frequent, honest updates every 30 minutes. Don\'t hide uncertainty.', 'Engineers respect transparency: "We don\'t know yet" is better than silence'),
                    d('Executive Communication', 'Business impact in dollars, ETA ranges (not false precision), and resource needs.', 'The CEO wants: how bad, how long, what do you need?'),
                    d('Customer Communication', 'External status page updates within 30 minutes. Empathy + transparency + action.', 'Customers forgive outages. They don\'t forgive silence.')
                ], 'Draft crisis communication templates for all 3 audiences. Practice delivering the executive update in under 2 minutes.'),
                l('Lesson 3: Post-Crisis Trust Recovery', 'After a crisis, trust is damaged with three groups: customers (will the product be reliable?), executives (is the engineering team competent?), and your own team (did leadership handle this well?). Recovery requires: a transparent post-mortem published within 7 days, concrete actions with deadlines, and visible follow-through.', [
                    d('Published Post-Mortem', 'A public or internal document detailing: what happened, why, and what changes.', 'Transparency rebuilds trust. Silence breeds suspicion.'),
                    d('Action Items with Dates', 'Every post-mortem item gets an owner and a deadline.', 'Vague "we\'ll improve monitoring" = zero trust recovery'),
                    d('30-Day Follow-Up', 'Report on post-mortem action item completion 30 days later.', 'Completion proves the organization learns. Non-completion proves it doesn\'t.')
                ], 'Design a post-crisis trust recovery plan: post-mortem timeline, action item framework, and 30-day follow-up process.')
            ]
        ],
        ['13-8', 'Organizational Design for Scale', 'Structuring engineering organizations for 10x growth without losing efficiency.',
            ['Design team topologies for scale', 'Plan organizational transitions', 'Balance autonomy and alignment', 'Manage the complexity curve'],
            [
                l('Lesson 1: Team Topology Economics', 'Team structure determines output. Conway\'s Law: system architecture mirrors org structure. If you want microservices, you need small autonomous teams. If you have large centralized teams, you\'ll build monoliths regardless of your stated architecture goals. Choose the team structure that produces the architecture you need.', [
                    d('Two-Pizza Teams', 'Small teams (5-8 people) that own a complete service or capability end-to-end.', 'Maximum autonomy, minimum coordination cost per feature'),
                    d('Platform Teams', 'Internal teams that provide shared capabilities to stream-aligned teams.', 'Reduces duplication but adds coordination overhead'),
                    d('Coordination Cost', 'Each additional team adds communication paths: n(n-1)/2 for n teams.', 'At 10 teams: 45 communication paths. At 20: 190. Coordination explodes.')
                ], 'Map your current team topology. Calculate coordination paths. Does the structure match the architecture you want?'),
                l('Lesson 2: The Scaling Transition Points', 'Engineering organizations hit predictable transition points: 5→15 (need first-line managers), 15→50 (need VPs and process), 50→150 (need organizational layers and architecture reviews), 150→500 (need internal platforms and formal governance). Each transition changes how decisions are made, how information flows, and how quality is maintained.', [
                    d('5→15 Transition', 'The founder/CTO can no longer directly manage everyone. First managers needed.', 'Hardest transition: founders resist delegation'),
                    d('50→150 Transition', 'Informal communication breaks down. Need structured architecture reviews and documentation.', 'This is where companies either formalize or slow down'),
                    d('150→500 Transition', 'Internal platform teams and formal governance become essential.', 'Without platforms, every team reinvents the wheel')
                ], 'Identify which transition your organization is approaching. Design the structural changes needed for the next phase.'),
                l('Lesson 3: Autonomy vs Alignment at Scale', 'The core tension at scale: autonomous teams move fast but diverge. Aligned teams move together but slowly. The solution: align on outcomes (what to achieve) and give autonomy on methods (how to achieve it). This requires clear OKRs, shared architectural principles, and trust.', [
                    d('Outcome Alignment', 'All teams align on what business outcome to achieve this quarter.', 'Alignment does not mean telling teams what to build  -  it means what to achieve'),
                    d('Method Autonomy', 'Each team decides how to achieve the outcome using their expertise.', 'Autonomy drives innovation and ownership'),
                    d('Architectural Guardrails', 'Shared principles that constrain individual team decisions within acceptable bounds.', 'Example: "All services must be deployable independently"  -  HOW is up to the team')
                ], 'Design your autonomy/alignment framework: define 3 aligned outcomes and 3 architectural guardrails that give autonomy everywhere else.')
            ]
        ],
        ['13-9', 'Executive Compensation & Equity Strategy', 'Understanding and optimizing your executive compensation package as a CTO/VPE.',
            ['Benchmark executive compensation', 'Negotiate equity packages', 'Understand board dynamics', 'Plan for liquidity events'],
            [
                l('Lesson 1: CTO/VPE Compensation Benchmarking', 'Executive compensation has different rules than IC compensation. Base salary is often the smallest component. Total comp = Base (30-40%) + Bonus (10-20%) + Equity (40-60%). At public companies, equity dominates. At startups, equity is speculative. Know which game you\'re playing.', [
                    d('Public Company CTO', 'Base: $300-500K. Bonus: $100-200K. RSUs: $500K-2M+/year.', 'Total comp: $900K-2.7M+. Equity is the driver.'),
                    d('Startup CTO', 'Base: $200-350K. Bonus: $0-50K. Options: 1-3% of company.', 'Total comp depends entirely on outcome. Could be $200K or $20M.'),
                    d('Growth-Stage VPE', 'Base: $250-400K. Bonus: $50-100K. RSUs/Options: $200K-1M/year.', 'Blended risk: meaningful cash + meaningful equity')
                ], 'Benchmark your current compensation against market data for your title, stage, and geography. Calculate the gap.'),
                l('Lesson 2: Equity Negotiation for Executives', 'Executive equity negotiation is a different sport. Key leverage: (1) Vesting schedule acceleration (single-trigger vs double-trigger acceleration on M&A), (2) Refresh grants (annual equity refreshes to prevent the vesting cliff problem), (3) Exercise window (post-departure exercise window of 90 days vs 7-10 years).', [
                    d('Acceleration Clause', 'Single-trigger: all equity vests on acquisition. Double-trigger: requires acquisition + termination.', 'Double-trigger is standard. Single-trigger is rare but negotiable for CTOs.'),
                    d('Refresh Grants', 'Annual equity grants that maintain your total equity value as initial grants vest.', 'Without refreshes, your equity value declines 25%/year after year 1'),
                    d('Exercise Window', 'Standard: 90 days post-departure. Better: 7-10 years post-departure.', 'A 90-day window forces you to exercise (and pay taxes) before you leave')
                ], 'Review your current equity terms. Identify which negotiations you missed and what you\'d ask for in your next role.'),
                l('Lesson 3: Liquidity Event Preparation', 'As a CTO, you must prepare for liquidity events: IPO, acquisition, or secondary sales. Key decisions: (1) When to exercise options (before or after the event?), (2) Tax optimization (83(b) elections, QSBS exemptions), (3) Diversification (how much of your net worth should be in company stock?).', [
                    d('Exercise Timing', 'Exercising early (83(b) election) starts capital gains clock. Exercising late gives more information.', 'Consult a tax advisor  -  this decision is worth thousands in tax savings'),
                    d('QSBS Exemption', 'Qualified Small Business Stock: potential 100% capital gains exclusion up to $10M.', 'Available for C-corp stock held >5 years. Plan around this.'),
                    d('Diversification Rule', 'Never hold >25% of your net worth in a single company\'s stock.', 'After any liquidity event, diversify to protect your financial security')
                ], 'Create a liquidity event preparation checklist: exercise strategy, tax optimization options, and diversification plan.')
            ]
        ],
        ['13-10', 'The CTO Operating System', 'Designing your personal operating system as a technical executive  -  time, energy, and decision allocation.',
            ['Design your weekly operating rhythm', 'Optimize decision allocation', 'Build executive leverage', 'Prevent executive burnout'],
            [
                l('Lesson 1: The CTO Weekly Operating Rhythm', 'A CTO\'s week should follow a deliberate pattern, not react to the loudest fire. The operating rhythm: Monday (strategy and planning  -  no meetings before noon), Tuesday-Wednesday (1:1s, team syncs, decision meetings), Thursday (external  -  customers, partners, board prep), Friday (reflection, writing, and deep work).', [
                    d('Monday Strategy Block', '4 hours of uninterrupted strategy time. Review metrics, make decisions, plan the week.', 'If you start the week reacting, you\'ll spend the whole week reacting'),
                    d('Midweek Engagement', 'Concentrate meetings on Tuesday-Wednesday. Batch for efficiency.', 'Two days of meetings is better than meetings scattered across every day'),
                    d('Friday Reflection', 'Write the weekly update, review decisions made, identify next week\'s priorities.', 'Without reflection, you optimize for speed without checking direction')
                ], 'Design your ideal weekly operating rhythm. Block time on your calendar for each zone. Protect it.'),
                l('Lesson 2: Decision Allocation Framework', 'A CTO makes hundreds of decisions per month. Only 5-10 actually matter. The framework: (1) Irreversible decisions  -  you must make these personally with full context, (2) Reversible decisions  -  delegate aggressively with a bias toward action, (3) Low-impact decisions  -  eliminate or automate.', [
                    d('Type 1 Decisions', 'Irreversible, high-impact: technology bets, senior hires, architecture choices.', 'Take time. Get input. Make the call. You own the outcome.'),
                    d('Type 2 Decisions', 'Reversible, moderate impact: tool selection, process changes, sprint priorities.', 'Delegate. If the decision is wrong, change it. Speed matters more than perfection.'),
                    d('Decision Tax', 'Every decision you make personally is a decision your team didn\'t make.', 'Delegating decisions develops your team. Hoarding decisions creates bottlenecks.')
                ], 'Categorize last week\'s decisions into Type 1 and Type 2. How many Type 2 decisions should you have delegated?'),
                l('Lesson 3: Executive Energy Management', 'Executive burnout is an existential risk  -  to you and to the organization. Energy management rules: (1) Protect sleep (7+ hours), (2) Schedule recovery (1 hour/day of non-work activity), (3) Take real vacations (minimum 1 week/quarter with zero work), (4) Monitor the signs (declining decision quality, increasing irritability, loss of strategic thinking).', [
                    d('Sleep ROI', 'Decision quality drops 25-40% on <6 hours of sleep.', 'Sleep is the single highest-ROI productivity investment'),
                    d('Recovery Scheduling', 'Block 1 hour/day for exercise, meditation, walking, or reading.', 'This hour makes the other 10 hours more productive, not less'),
                    d('Burnout Signals', 'Cynicism about work, difficulty engaging in strategic thinking, physical stress symptoms.', 'These are late-stage signals  -  prevention is 10x better than recovery')
                ], 'Design your personal energy management plan: sleep target, daily recovery block, quarterly vacation, and burnout signal monitoring.')
            ]
        ],
    ];

    t13Exp.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`exec-economics/${id}`] = m(id, title, desc, t13, takeaways, lessons);
    });

    // ═══════════════════ TRACK 14 EXPANSION: Modules 6-10 ═══════════════════
    const t14 = 'Track 14  -  Economics of Leadership';
    const t14Exp: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['14-6', 'Delegation Economics', 'Why what you stop doing is more valuable than what you start doing.',
            ['Calculate delegation ROI', 'Build delegation frameworks', 'Overcome the control paradox', 'Develop team capability through delegation'],
            [
                l('Lesson 1: The Delegation Multiplier', 'Every task you do yourself costs the team your hourly rate. Every task you delegate creates capacity at their rate while freeing your time for higher-leverage work. If you spend 2 hours on code review ($150/hr = $300), but delegating it means you spend that time on strategy worth $1,000/hr, delegation creates $1,400 in net value.', [
                    d('Time Audit', 'Track how you spend each hour for 1 week. Categorize: only-I-can-do vs delegatable.', 'Most leaders find 40-60% of their time is delegatable'),
                    d('Leverage Ratio', 'Your highest-value work / your lowest-value work. Should be >5x.', 'If you\'re doing tasks that someone at half your salary could handle, you\'re under-leveraged'),
                    d('Delegation Gap', 'Total delegatable hours × (your rate - delegate\'s rate) = value recovered.', 'This is the economic argument for delegation')
                ], 'Conduct a 1-week time audit. Calculate the delegation gap: how much value are you failing to capture?'),
                l('Lesson 2: The Control Paradox', 'The instinct is: "I\'ll do it myself because it will be done right." The reality: (1) you become the bottleneck, (2) your team doesn\'t grow, (3) you burn out. The paradox: leaders who release control get better outcomes because the team develops capability and ownership. Letting go creates more quality, not less.', [
                    d('Bottleneck Cost', 'If 5 tasks are waiting on you, the queuing delay costs 5× the task duration.', 'You\'re not saving time  -  you\'re multiplying wait times'),
                    d('Growth Investment', 'Delegation is a training investment. The first 3 times, quality may dip 20%.', 'By the 5th time, quality matches yours. By the 10th, it exceeds yours.'),
                    d('Ownership Effect', 'People who own outcomes care more about quality than people who are assigned tasks.', 'Delegation creates owners. Task assignment creates executors.')
                ], 'Identify 3 tasks you\'re hoarding. Delegate each to a team member with context and support. Track quality over 4 weeks.'),
                l('Lesson 3: The Delegation Framework', 'For each delegation: (1) Define the outcome, not the process ("make this work" not "do steps A, B, C"), (2) Set the quality standard ("this needs to pass the customer test"), (3) Define the check-in cadence ("show me progress on Wednesday, final Thursday"), (4) Provide authority ("you\'re authorized to make decisions up to $X").', [
                    d('Outcome Delegation', 'Define WHAT needs to be achieved. Let the person figure out HOW.', 'Outcome delegation builds capability. Process delegation builds dependency.'),
                    d('Authority Transfer', 'Explicitly state what decisions the delegate can make without checking back.', 'Ambiguous authority = constant check-ins = fake delegation'),
                    d('Graduated Delegation', 'Start with smaller stakes tasks, increase scope as the person demonstrates capability.', 'Builds both competence and trust incrementally')
                ], 'Apply the delegation framework to your next 3 handoffs. Document the outcome, quality standard, check-in cadence, and authority level.')
            ]
        ],
        ['14-7', 'Feedback Economics', 'Why bad feedback costs more than no feedback  -  and how to deliver feedback that creates value.',
            ['Calculate the cost of withheld feedback', 'Design feedback delivery frameworks', 'Build feedback cultures', 'Measure feedback impact'],
            [
                l('Lesson 1: The Cost of Silence', 'Withheld feedback compounds like accruing interest on a loan. A behavior issue that takes 5 minutes to address today takes 30 minutes in a month, a formal PIP in 3 months, and a termination in 6 months. The cost curve is exponential: $0 (immediate feedback) → $5K (PIP administration) → $150K (termination and replacement). Silence is the most expensive leadership decision.', [
                    d('Immediate Feedback Cost', '5-10 minutes of your time. Cost: $0 in organizational impact.', 'Discomfort lasts 5 minutes. Resolution is immediate.'),
                    d('Delayed Feedback Cost', 'Behavior becomes a pattern. Team morale degrades. Performance review becomes confrontational.', 'Each month of delay: 2-3x increase in resolution cost'),
                    d('Terminal Cost', 'If feedback is never given: PIP → termination → replacement = $150K+ and 6 months of disruption.', 'The most expensive feedback is the feedback you never gave')
                ], 'Identify 1 feedback conversation you\'ve been avoiding. Calculate the cost of another month of silence. Deliver it this week.'),
                l('Lesson 2: The SBI Feedback Model', 'Situation-Behavior-Impact: "In yesterday\'s meeting (situation), when you interrupted the product manager three times (behavior), the team stopped sharing ideas and we didn\'t hear a critical constraint (impact)." SBI feedback is specific, behavioral, and connects to economic impact. It\'s not personal  -  it\'s about the behavior\'s cost.', [
                    d('Situation', 'When and where the behavior occurred. Be specific about context.', 'Prevents confusion with "you always do X" generalizations'),
                    d('Behavior', 'The observable action  -  what you saw or heard. Not interpretation.', '"You interrupted" is observable. "You were rude" is interpretation.'),
                    d('Impact', 'The consequence of the behavior on the team, project, or outcome.', 'Connect to business impact when possible: "This may cost us the milestone"')
                ], 'Write 3 SBI feedback statements for real situations. Practice delivering each aloud. Notice how specificity removes emotion.'),
                l('Lesson 3: Building a Feedback Culture', 'A feedback culture is one where giving and receiving feedback is normal  -  not a special event tied to performance reviews. Build it: (1) Ask for feedback on yourself publicly and regularly, (2) Thank people for negative feedback (modeling graciousness), (3) Make feedback a 5-minute standing item in every 1:1, not a quarterly event.', [
                    d('Leader Goes First', 'Ask your team: "What could I do better?" in a group setting at least quarterly.', 'If the leader doesn\'t ask for feedback, no one else will give it'),
                    d('Gratitude Response', 'When someone gives you negative feedback, say "Thank you" first.', 'Your reaction determines whether you\'ll ever get honest feedback again'),
                    d('1:1 Feedback Block', 'Last 5 minutes of every 1:1: "What feedback do you have for me?"', 'Normalizes feedback as routine, not a crisis signal')
                ], 'Design your feedback culture implementation plan: leader modeling, 1:1 integration, and gratitude practice.')
            ]
        ],
        ['14-8', 'Conflict Resolution Economics', 'Every unresolved conflict has a mounting cost  -  and every resolution has a measurable return.',
            ['Quantify conflict costs', 'Apply resolution frameworks', 'Build healthy conflict norms', 'Prevent destructive conflict patterns'],
            [
                l('Lesson 1: The Cost of Unresolved Conflict', 'Unresolved team conflict costs: (1) Decision paralysis  -  contested decisions don\'t get made, blocking progress, (2) Shadow work  -  people work around each other, duplicating effort, (3) Talent loss  -  one party eventually leaves, taking institutional knowledge, (4) Morale contagion  -  the conflict infects the broader team\'s energy and focus.', [
                    d('Decision Paralysis', 'Contested decisions average 3x longer to resolve, costing 2-4 weeks per occurrence.', 'At $50K/week in team cost, each paralyzed decision costs $100-200K'),
                    d('Shadow Work', 'Working around conflicts creates 20-30% duplicated effort within teams.', 'Two people building parallel solutions because they won\'t collaborate'),
                    d('Attrition Cost', 'In 70% of unresolved conflicts, one party leaves within 12 months.', 'Replacement cost: $150K+. Knowledge loss: often irreplaceable.')
                ], 'Identify an active conflict on your team. Calculate the total cost: decision delays, duplicated work, and attrition risk.'),
                l('Lesson 2: The Mediation Framework', 'Mediation steps: (1) Hear both sides separately  -  each person tells their story without interruption, (2) Identify shared goals  -  "you both want the product to succeed," (3) Focus on interests, not positions  -  "you want reliability" vs "you want your architecture," (4) Co-create a solution  -  the resolution must be created by the parties, not imposed by the leader.', [
                    d('Separate Conversations', 'Meet with each party individually before bringing them together.', 'People are more honest in private. You learn the real issues.'),
                    d('Interest-Based Negotiation', 'Dig beneath positions to find underlying interests.', '"I want microservices" (position) vs "I want independent deployability" (interest)'),
                    d('Co-Created Solutions', 'Solutions imposed by leadership don\'t stick. Solutions created by the parties do.', 'Your job is to facilitate, not decide.')
                ], 'Apply the mediation framework to an active conflict. Hold separate conversations, identify interests, and facilitate a co-created solution.'),
                l('Lesson 3: Healthy Conflict Norms', 'Not all conflict is bad. Healthy conflict  -  passionate disagreement about the best approach  -  produces better decisions. Unhealthy conflict  -  personal attacks, power plays, passive aggression  -  destroys teams. Build norms: (1) Disagree with ideas, not people, (2) "Disagree and commit"  -  once decided, full support, (3) No triangulation  -  speak directly to the person, not about them.', [
                    d('Disagree with Ideas', 'Attack the proposal, not the proposer. "I think this approach has risk X" not "Your idea won\'t work."', 'Depersonalizing disagreement keeps it productive'),
                    d('Disagree and Commit', 'After the decision is made, everyone commits fully  -  even those who disagreed.', 'This prevents sabotage through half-hearted implementation'),
                    d('No Triangulation', 'If you have a problem with someone, talk to them directly. Not their peers. Not their manager.', 'Triangulation is the #1 destroyer of team trust')
                ], 'Define 3 conflict norms for your team. Introduce them at a team meeting. Hold everyone (including yourself) accountable.')
            ]
        ],
        ['14-9', 'Vision & Direction Setting Economics', 'The economic value of a clear direction  -  and the cost of its absence.',
            ['Quantify the cost of ambiguity', 'Build compelling team visions', 'Align individual motivation to team goals', 'Measure alignment impact'],
            [
                l('Lesson 1: The Cost of Directional Ambiguity', 'When the team doesn\'t know where they\'re going, they go in 6 directions simultaneously. Result: 40-60% of effort is non-aligned (working on things that don\'t matter), decisions take 3x longer (no framework to decide), and morale drops (purposeless work is demotivating). A clear direction adds 30-50% in effective capacity by eliminating waste.', [
                    d('Non-Aligned Effort', 'Work that doesn\'t contribute to the top priorities. Often 40-60% of total output.', 'Calculate: what % of last quarter\'s work directly contributed to top 3 goals?'),
                    d('Decision Drag', 'Without clear direction, every decision requires going up the chain.', 'Cost: 2-4 hours per decision × 50+ decisions per quarter'),
                    d('Purpose Premium', 'Teams with clear purpose report 30% higher engagement and productivity.', 'People work harder for something they believe in')
                ], 'Calculate the non-aligned effort in your team last quarter. What percentage of work was directly tied to the top 3 goals?'),
                l('Lesson 2: Building a Team Vision', 'A vision is not a roadmap  -  it\'s a picture of the future that people want to create. The formula: (1) The world is this way now (acknowledgment of current state), (2) It should be this way instead (the ambitious better state), (3) Here\'s how we\'re uniquely positioned to make it happen (our specific role), (4) Here\'s what victory looks like (measurable outcomes).', [
                    d('Current State', 'Honest acknowledgment of what\'s broken or insufficient today.', 'Starting with reality builds credibility. Starting with hype builds skepticism.'),
                    d('Better State', 'A vivid, specific picture of the improved future.', '"We will be the most reliable AI platform in enterprise" not "we will be great"'),
                    d('Measurable Victory', 'Define 2-3 metrics that would prove the vision is realized.', 'Without measurement, a vision is a wish')
                ], 'Write your team\'s vision using the 4-part formula. Share it with your team. Does it resonate?'),
                l('Lesson 3: Aligning Individual Motivation', 'Each team member has different motivations: mastery (getting better), autonomy (having control), purpose (doing meaningful work), recognition (being seen), and growth (advancing their career). A great leader maps each person\'s motivation to the team\'s goals  -  so achieving the team\'s goals simultaneously serves each individual\'s needs.', [
                    d('Motivation Mapping', 'In your next 1:1, ask: "What are you optimizing for in the next 12 months?"', 'Their answer reveals their primary motivator'),
                    d('Goal Alignment', 'Connect each person\'s individual motivator to a team goal.', '"If we achieve X, you\'ll get the cross-team visibility you need for promotion"'),
                    d('Misalignment Red Flag', 'If someone\'s individual goals and team goals don\'t align, attrition is likely.', 'Better to address the misalignment than pretend it doesn\'t exist')
                ], 'Map each team member\'s primary motivator. For each, identify how the current team goals serve their individual needs.')
            ]
        ],
        ['14-10', 'Leadership Measurement & Continuous Improvement', 'Quantifying your leadership effectiveness and building a system for continuous improvement.',
            ['Build leadership scorecards', 'Collect actionable feedback', 'Design improvement sprints', 'Track leadership ROI over time'],
            [
                l('Lesson 1: The Leadership Scorecard', 'You can\'t improve what you don\'t measure. A leadership scorecard tracks 4 metrics quarterly: (1) Team Retention Rate  -  percentage of team members retained, (2) Team Velocity Trend  -  is output increasing, stable, or declining, (3) Team NPS  -  anonymous score on "Would you work for this leader again?", (4) Promotion Rate  -  how many team members have grown into larger roles.', [
                    d('Retention Rate', 'Target: >90% annual voluntary retention.', 'Below 85% = leadership problem'),
                    d('Team NPS', 'Anonymous survey: "On a scale of 0-10, would you work for me again?"', 'NPS >50: strong leader. 0-30: developing. <0: critical problem'),
                    d('Promotion Rate', 'Team members promoted or given expanded scope per year.', 'If nobody on your team grows, you\'re a manager, not a leader')
                ], 'Build your leadership scorecard. Score yourself on all 4 metrics. Where\'s the biggest gap?'),
                l('Lesson 2: 360-Degree Feedback Implementation', 'Once per year, collect feedback from: your manager (alignment with org goals), your peers (collaboration effectiveness), your direct reports (day-to-day leadership quality), and your skip-levels (how your leadership style cascades). Four perspectives create a complete picture that no single source can provide.', [
                    d('Manager Perspective', 'How effectively do you translate strategy into execution?', 'The view from above: are you a reliable leader?'),
                    d('Peer Perspective', 'How effectively do you collaborate across teams?', 'The view from the side: are you a good partner?'),
                    d('Direct Report Perspective', 'How effectively do you develop, unblock, and inspire your team?', 'The view from below: would they follow you voluntarily?')
                ], 'Design your 360-degree feedback process: who gives feedback, what questions, and how you\'ll act on it.'),
                l('Lesson 3: The Leadership Improvement Sprint', 'Like technical sprints, run leadership improvement sprints: (1) Identify one leadership skill to improve this quarter, (2) Define 3 specific behaviors to practice, (3) Practice deliberately every week, (4) Measure improvement at end of quarter using your team\'s feedback.', [
                    d('Skill Selection', 'Choose the skill with the biggest gap between importance and current effectiveness.', 'Don\'t try to improve everything. One skill per quarter.'),
                    d('Behavior Design', '3 specific, observable behaviors to practice. "Ask a question before providing an answer in every meeting."', 'Behaviors must be specific enough that you can track yes/no daily'),
                    d('Quarterly Review', 'Re-administer the same feedback questions after 90 days of practice.', 'Celebrate improvement. Re-prioritize if the gap didn\'t close.')
                ], 'Launch your first Leadership Improvement Sprint: choose the skill, define 3 behaviors, and set up the 90-day feedback measurement.')
            ]
        ],
    ];

    t14Exp.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`leadership-economics/${id}`] = m(id, title, desc, t14, takeaways, lessons);
    });
}
