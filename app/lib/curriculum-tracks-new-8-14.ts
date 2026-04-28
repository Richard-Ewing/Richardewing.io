import { type CurriculumModule, m, l, d } from './curriculum-data';

export function populateNewTracks8to14(modules: Record<string, CurriculumModule>) {

    // ═══════════════════ TRACK 8: AI Pricing Strategy & Monetization Economics ═══════════════════
    const t8 = 'Track 8 — AI Pricing Strategy';
    const t8Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['8-1', 'AI Pricing Model Taxonomy', 'The four pricing architectures for AI products — and why picking the wrong one costs you 40% of potential revenue.',
            ['Map the 4 AI pricing models', 'Calculate margin exposure per model', 'Match pricing to unit economics', 'Avoid the flat-rate death trap'],
            [
                l('Lesson 1: The Four AI Pricing Architectures', 'Every AI product falls into one of four pricing models: Seat-Based (the legacy SaaS default), Usage-Based (pay per token/API call), Outcome-Based (pay per result), or Hybrid (seat + overage). Each has a different margin profile. In 2026, 37% of AI companies are actively changing their pricing model because the one they chose at launch is bleeding them dry.', [
                    d('Seat-Based Risk', 'Heavy AI users subsidized by light users. One power user can consume $50/mo in inference on a $10 seat.', 'Margin collapse at >20% AI feature adoption'),
                    d('Usage-Based Advantage', 'Revenue scales with consumption, aligning costs to revenue.', 'Requires metering infrastructure investment'),
                    d('Outcome-Based Premium', 'Charging per successful result (e.g., per resolved ticket, per generated report).', 'Commands 2-5x pricing premium over seat-based')
                ], 'Map your current AI product pricing model against the four architectures. Identify the specific margin risk in your current model.'),
                l('Lesson 2: Margin Exposure Analysis', 'For each pricing model, your cost structure behaves differently. Seat-based creates uncapped liability per seat. Usage-based creates revenue volatility. Outcome-based requires quality guarantees. Run a stress test: what happens to your gross margin when your heaviest 10% of users double their AI usage?', [
                    d('10th Percentile Stress Test', 'Model the cost of your most expensive users at 2x current usage.', 'If margin goes negative, you have a pricing problem'),
                    d('Revenue Volatility', 'Usage-based models create month-to-month variance in MRR.', 'Mitigate with minimum commit contracts'),
                    d('Quality Guarantee Cost', 'Outcome-based models require you to absorb retry costs on failed AI outputs.', 'Factor in 15-20% retry overhead')
                ], 'Perform a 10th percentile stress test on your pricing model. Calculate the exact user count where margins flip negative.'),
                l('Lesson 3: The Pricing Migration Playbook', 'Changing pricing mid-flight is surgery without anesthesia. You must grandfather existing customers, communicate the value shift (not the cost shift), and phase the transition over 2-3 billing cycles. Companies that rip-and-replace lose 15-25% of their base.', [
                    d('Grandfather Protocol', 'Existing customers keep current pricing for 6-12 months.', 'Prevents immediate churn spike'),
                    d('Value Communication', 'Frame the new model as "now you only pay for what you use" not "we\'re raising prices."', 'Anchoring against the old total spend'),
                    d('Phased Rollout', 'New pricing for new customers first, then migrate cohorts over 3 billing cycles.', 'Measure NRR impact at each cohort')
                ], 'Draft a 90-day pricing migration plan for transitioning from seat-based to usage-based pricing without losing more than 5% of your customer base.')
            ]
        ],
        ['8-2', 'Token-Based Pricing Architecture', 'Build the metering, billing, and rate-limiting infrastructure to charge per AI interaction.',
            ['Design credit systems', 'Build metering infrastructure', 'Implement rate limiting economics', 'Calculate credit-to-cost alignment'],
            [
                l('Lesson 1: Credit System Design', 'Credits are the universal currency of AI pricing. 1 credit = 1 AI interaction (or 1,000 tokens, or 1 document processed). The key is setting the credit-to-cost ratio: if each credit costs you $0.003 in inference and you charge $0.01, your gross margin is 70%. But if a complex query consumes 5 credits worth of compute, your margin on that query drops to 30%.', [
                    d('Credit-to-Cost Ratio', 'The margin embedded in each credit sold.', 'Target: 3:1 revenue-to-cost per credit'),
                    d('Credit Tier Design', 'Different actions consume different credit amounts (simple query = 1, complex analysis = 5).', 'Reflects actual compute cost variance'),
                    d('Rollover Policy', 'Whether unused credits expire or roll over.', 'Expiration drives urgency; rollover drives satisfaction')
                ], 'Design a credit system for your AI product with at least 3 tiers of credit consumption mapped to actual inference costs.'),
                l('Lesson 2: Metering Infrastructure', 'You cannot charge for what you cannot measure. Every AI interaction must be logged with: user ID, timestamp, model used, input tokens, output tokens, latency, cost, and credit consumption. This requires a dedicated metering pipeline that is separate from your application database.', [
                    d('Event Pipeline', 'Kafka/SQS → metering service → billing aggregation.', 'Must handle 10,000+ events/second at scale'),
                    d('Idempotency', 'Ensuring duplicate events don\'t double-charge customers.', 'Use unique request IDs as dedup keys'),
                    d('Real-Time Dashboard', 'Customers must see their credit balance update within 30 seconds.', 'Drives trust and reduces billing disputes')
                ], 'Architect a metering pipeline diagram showing the flow from AI request → event capture → billing aggregation → customer dashboard.'),
                l('Lesson 3: Rate Limiting as Margin Protection', 'Rate limits aren\'t just for abuse prevention — they\'re margin protection. Without rate limits, a single enterprise customer can burn through your GPU budget in one batch job. Design rate limits that protect margins while appearing to protect quality.', [
                    d('Concurrent Request Limits', 'Maximum simultaneous AI requests per user/org.', 'Tier by plan: Free=2, Pro=10, Enterprise=50'),
                    d('Burst Allowance', 'Short-term spikes allowed before throttling kicks in.', '2x steady-state for 60 seconds'),
                    d('Graceful Degradation', 'When rate limited, fall back to cheaper models instead of blocking.', 'Maintains UX while protecting margins')
                ], 'Design a 3-tier rate limiting strategy for your AI product that protects margins while maintaining enterprise SLA commitments.')
            ]
        ],
        ['8-3', 'The Flat-Rate AI Death Trap', 'Why "unlimited AI at $29/month" is the fastest path to bankruptcy — and what to do instead.',
            ['Model margin collapse scenarios', 'Calculate the insolvency point', 'Design usage caps that retain customers', 'Build the case for pricing changes'],
            [
                l('Lesson 1: The Margin Collapse Curve', 'At $29/month with unlimited AI, your first 1,000 customers are profitable. At 10,000 customers with 5x average usage growth, you are bleeding $200K/month in inference costs. The margin collapse curve is exponential, not linear, because power users train themselves to extract maximum value from unlimited plans.', [
                    d('Usage Growth Rate', 'AI feature adoption typically grows 15-25% month-over-month per user after initial activation.', 'Compounds faster than subscription revenue'),
                    d('Power User Concentration', 'The top 10% of users typically consume 60% of total AI inference costs.', 'This cohort destroys flat-rate economics'),
                    d('Insolvency Horizon', 'Number of months before AI COGS exceeds total subscription revenue.', 'Calculate using: Total MRR / (Users × Avg Monthly AI Cost × Growth Rate)')
                ], 'Model your insolvency horizon assuming 20% month-over-month AI usage growth per user. At what month does AI COGS exceed MRR?'),
                l('Lesson 2: Usage Cap Design', 'The solution isn\'t removing AI — it\'s making usage visible and valuable. Caps should be designed around value moments: "You get 100 AI analyses per month. Each one saves you 45 minutes." This frames the cap as a feature, not a restriction.', [
                    d('Value Framing', 'Express limits in business outcomes, not technical units.', '"100 reports" not "500,000 tokens"'),
                    d('Soft Caps vs Hard Caps', 'Soft caps degrade quality; hard caps block access.', 'Soft caps retain users; hard caps protect margins'),
                    d('Overage Pricing', 'What happens above the cap. Per-unit pricing or plan upgrade prompt.', 'Overage should be 20-30% premium over base rate')
                ], 'Redesign your pricing page to frame AI limits as value delivery. Draft the exact copy for each tier.'),
                l('Lesson 3: The Board Case for Pricing Changes', 'Presenting a pricing change to the board requires economic modeling, not opinion. Show the margin trajectory, the insolvency date, competitive benchmarks, and the expected churn from the change. The board wants a P&L impact statement, not a product philosophy.', [
                    d('Margin Trajectory Model', 'A 12-month projection showing current margins decaying toward zero.', 'The visual that gets board attention'),
                    d('Competitive Benchmark', 'What comparable AI products charge. Anchor against the market.', 'Most AI tools charge $49-199/seat/month'),
                    d('Churn Impact Model', 'Expected 5-10% churn from pricing changes, offset by 40%+ margin improvement.', 'Net: positive unit economics within 2 quarters')
                ], 'Build a board-ready presentation showing your margin collapse trajectory and the ROI of a pricing change.')
            ]
        ],
        ['8-4', 'Outcome-Based Pricing Models', 'Charge for the result, not the request. The future of AI monetization.',
            ['Define measurable outcomes', 'Calculate success probability', 'Build pricing around ROI guarantees', 'Design risk-sharing structures'],
            [
                l('Lesson 1: Defining Measurable Outcomes', 'Outcome-based pricing requires a clear, measurable, non-disputable success metric. "We resolved a support ticket" = measurable. "We improved your workflow" = disputable. The precision of your outcome definition determines whether you can command a premium or face constant billing disputes.', [
                    d('Binary Outcomes', 'Yes/no results: ticket resolved, document classified, lead scored.', 'Simplest to price, easiest to measure'),
                    d('Graded Outcomes', 'Quality tiers: "resolved correctly" vs "resolved with human assist."', 'Allows premium pricing for higher quality'),
                    d('Composite Outcomes', 'Multi-step results: "found, analyzed, and summarized 50 relevant documents."', 'Commands highest premium but requires complex metering')
                ], 'Define 3 measurable outcomes for your AI product that a customer would agree to pay per result.'),
                l('Lesson 2: Success Probability & Retry Economics', 'If your AI resolves support tickets correctly 85% of the time, you eat the cost of the 15% that fail. Your effective cost per successful outcome is: raw_cost / success_rate. At 85% success, a $0.05 AI call effectively costs $0.059. At 70% success, it costs $0.071. This 30% cost swing determines your pricing floor.', [
                    d('Effective Cost Formula', 'Raw cost per attempt / Success rate = True cost per successful outcome.', 'Must be calculated before setting price'),
                    d('Retry Cap', 'Maximum number of AI attempts per outcome before escalating to human.', 'Typically 2-3 retries before human handoff'),
                    d('Human Escalation Cost', 'The blended cost when AI fails and a human completes the task.', 'Often 10-50x the AI attempt cost')
                ], 'Calculate the effective cost per successful outcome for your AI product at 95%, 85%, and 70% success rates. Where does profitability break?'),
                l('Lesson 3: Risk-Sharing Contract Design', 'The most powerful outcome-based pricing model splits the risk. "We charge $X per resolved ticket. If resolution rate drops below 80%, we credit you 20% of the month\'s charges." This alignment builds trust and commands premium pricing.', [
                    d('SLA-Backed Pricing', 'Guaranteeing a minimum success rate with financial penalties.', 'Commands 30-50% premium over standard pricing'),
                    d('Gain-Share Models', 'Taking a percentage of the customer\'s savings from AI automation.', 'Aligns you as a partner, not a vendor'),
                    d('Insurance Buffer', 'Pricing in a 10-15% buffer to absorb SLA penalties without margin destruction.', 'Build penalty risk into the base price')
                ], 'Draft a risk-sharing pricing contract for your AI product including SLA guarantees, penalty structures, and gain-sharing terms.')
            ]
        ],
        ['8-5', 'AI Freemium Economics', 'The economics of free AI tiers: converting usage into revenue without bankrupting the infrastructure.',
            ['Calculate free tier COGS', 'Design conversion triggers', 'Build usage-to-upgrade funnels', 'Optimize CAC through product-led growth'],
            [
                l('Lesson 1: The Free Tier COGS Problem', 'Every free user costs you real money in AI inference. If your free tier allows 10 AI queries/day and each costs $0.004, a free user costs $1.20/month. At 100K free users, you\'re burning $120K/month in inference with zero revenue. The free tier must be a calculated investment, not a default.', [
                    d('Free Tier Unit Cost', 'Monthly AI inference cost per free user.', 'Must be <5% of your paid plan ARPU'),
                    d('Conversion Rate Target', 'Percentage of free users converting to paid.', 'Industry average: 2-5% for PLG SaaS'),
                    d('Break-Even Conversion', 'The minimum conversion rate needed for free tier costs to be covered by paid revenue.', 'If this exceeds 10%, your free tier is too generous')
                ], 'Calculate the exact monthly cost of your free tier at 10K, 50K, and 100K users. Determine the conversion rate required to break even.'),
                l('Lesson 2: Conversion Trigger Design', 'Free users convert when they hit a value ceiling — not a feature wall. The best conversion triggers are usage limits on the AI capability itself: "You\'ve used 80% of your monthly AI analyses. Upgrade to continue." This is far more effective than feature-gating because the user has already experienced the value.', [
                    d('Value Ceiling', 'The point where the free user has received enough value to justify paying.', 'Usually after 5-10 successful AI interactions'),
                    d('Upgrade Prompt Timing', 'Presenting the upgrade when the user is mid-workflow, not post-session.', 'In-context prompts convert 3x better than email'),
                    d('Tier Anchoring', 'Showing the "most popular" plan next to free to anchor expectations.', 'The middle tier typically captures 60% of conversions')
                ], 'Design 3 conversion triggers for your AI product that activate at natural value moments, not arbitrary feature gates.'),
                l('Lesson 3: The PLG Cost Model', 'Product-Led Growth means your product IS your sales team. Every free user is a lead. Every AI interaction is a demo. Your CAC = (Free Tier Infrastructure Cost + Engineering Cost) / Number of Conversions. If your PLG CAC is lower than your sales-led CAC, the free tier is working.', [
                    d('PLG CAC', 'Total free tier costs / Total conversions per month.', 'Target: <$500 for SMB, <$2000 for enterprise'),
                    d('Viral Coefficient', 'Free users who invite other free users. Each invited user is effectively free CAC.', 'A coefficient >1.0 means exponential growth'),
                    d('Time-to-Conversion', 'Average days between signup and first payment.', 'Shorter = better unit economics. Target: <14 days')
                ], 'Build the full PLG funnel model: Free signup → AI value delivered → Conversion trigger → Paid plan. Calculate your PLG CAC vs sales-led CAC.')
            ]
        ],
    ];

    t8Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`ai-pricing/${id}`] = m(id, title, desc, t8, takeaways, lessons);
    });

    // ═══════════════════ TRACK 9: Technical Debt as Financial Liability ═══════════════════
    const t9 = 'Track 9 — Technical Debt as Financial Liability';
    const t9Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['9-1', 'Technical Debt on the Balance Sheet', 'Why technical debt meets the accounting definition of a financial liability — and how to report it as one.',
            ['Define debt as liability', 'Map debt to GAAP categories', 'Quantify carrying costs', 'Present to CFOs in their language'],
            [
                l('Lesson 1: The Liability Definition', 'Under GAAP, a liability is "a present obligation arising from past events, the settlement of which is expected to result in an outflow of resources." Technical debt is exactly that: past architectural shortcuts that now require engineering resources (capital) to resolve. It meets every criterion of a financial liability.', [
                    d('Present Obligation', 'The code must be refactored or rewritten — this is non-optional.', 'Maintenance costs prove the obligation exists'),
                    d('Past Events', 'The shortcuts were taken during previous development cycles.', 'Git history provides audit trail'),
                    d('Resource Outflow', 'Engineering hours and cloud costs are consumed maintaining the debt.', 'Measurable in dollars per sprint')
                ], 'Document 3 technical debt items in your codebase and map each to the GAAP liability definition criteria.'),
                l('Lesson 2: Carrying Cost Quantification', 'A $500K technical debt liability has a carrying cost — just like a financial loan. The carrying cost = the engineering hours spent per month maintaining the debt × average engineer cost. If you spend 800 hours/quarter on legacy maintenance at $80/hr, your annual carrying cost is $256,000. That\'s interest on the principal.', [
                    d('Maintenance Hours', 'Total engineering hours spent on debt maintenance per quarter.', 'Extract from Jira/Linear time tracking'),
                    d('Hourly Burden Rate', 'Fully loaded cost per engineering hour (salary + benefits + overhead).', 'Typically $80-150/hr in US markets'),
                    d('Annual Carrying Cost', 'Maintenance hours × burden rate × 4 quarters.', 'This is the "interest" the company pays annually')
                ], 'Calculate the annual carrying cost of your top 3 technical debt items. Express as a percentage of total R&D spend.'),
                l('Lesson 3: CFO Communication Framework', 'Never say "technical debt" to a CFO. Say "unfunded capital liability." Frame it as: "We have a $2M unfunded liability that costs us $500K annually in carrying costs. Investing $800K to retire it would eliminate $500K/year in perpetual costs — a 16-month payback period." This is a language a CFO can approve.', [
                    d('Unfunded Liability Framing', 'Rebranding tech debt as a clear financial term.', 'CFOs immediately understand liability language'),
                    d('Payback Period', 'Remediation cost / Annual carrying cost savings.', 'Target: <24 months for board approval'),
                    d('ROI Framing', 'Annual savings / Remediation cost × 100.', 'Express as a percentage return on investment')
                ], 'Draft a one-page CFO memo for your largest technical debt item using the unfunded liability framing. Include payback period and ROI.')
            ]
        ],
        ['9-2', 'Quantifying Debt in Dollar Terms', 'The PDI methodology applied: putting an exact dollar value on every line of debt.',
            ['Apply PDI to real codebases', 'Calculate maintenance load', 'Model interest rate curves', 'Build debt inventories'],
            [
                l('Lesson 1: The PDI Methodology', 'The Product Debt Index (PDI) = (Cost of Delay × Dependency Graph Depth) / Automated Coverage %. A PDI > 100 means systemic collapse risk. But PDI must be translated into dollars: multiply the PDI score by the average monthly cost of a blocked feature to get the dollar-equivalent exposure.', [
                    d('Cost of Delay (CoD)', 'Monthly revenue lost because a feature is blocked by debt.', 'Calculate from the roadmap backlog'),
                    d('Dependency Depth', 'Number of systems that must change for a single feature.', 'Higher depth = higher debt cost'),
                    d('Dollar Conversion', 'PDI Score × Average Feature CoD = Dollar exposure per debt item.', 'Makes debt comparable to any other financial risk')
                ], 'Run the PDI calculator on your 5 highest-debt components. Convert each PDI score to a dollar value.'),
                l('Lesson 2: Maintenance Load Analysis', 'Maintenance Load = percentage of total engineering capacity consumed by non-value-adding work (bug fixes, legacy workarounds, manual deployments). If Maintenance Load exceeds 40%, the team is spending more time fighting the system than building value. This is the "Innovation Tax."', [
                    d('Innovation Tax', 'Maintenance hours / Total engineering hours × 100.', 'Target: <20%. Crisis: >40%'),
                    d('Sprint Tax Calculation', 'Count story points spent on maintenance vs new features per sprint.', 'Track over 6 sprints for trend analysis'),
                    d('Velocity Decay', 'If maintenance load grows 2% per quarter, velocity halves in 18 months.', 'Exponential decline, not linear')
                ], 'Audit the last 6 sprints and calculate your Innovation Tax trend line. At the current rate, when does maintenance exceed 40%?'),
                l('Lesson 3: Debt Inventory Construction', 'A debt inventory is a living document that catalogs every known debt item with: description, estimated remediation cost, annual carrying cost, PDI score, risk level, and owner. Without an inventory, debt is invisible — and invisible debt grows exponentially.', [
                    d('Debt Registry', 'A shared, version-controlled document listing all known debt.', 'Update quarterly at minimum'),
                    d('Remediation Estimate', 'Engineering weeks required to fully resolve each item.', 'T-shirt size, then convert to dollars'),
                    d('Priority Score', 'Carrying cost / Remediation cost = bang-for-buck ratio.', 'Tackle highest ratio items first')
                ], 'Create a debt inventory for your top 10 technical debt items with remediation cost, carrying cost, and priority scores.')
            ]
        ],
        ['9-3', 'Technical Insolvency Date', 'The day your maintenance costs exceed your capacity to ship new value — calculate when it arrives.',
            ['Define insolvency criteria', 'Calculate the crossover date', 'Identify leading indicators', 'Build intervention triggers'],
            [
                l('Lesson 1: The Insolvency Equation', 'Technical insolvency occurs when maintenance_hours > (total_engineering_hours - minimum_viable_feature_output). At this point, the team cannot ship any new revenue-generating features because 100% of capacity is consumed by keeping existing systems alive. The company is technically insolvent — producing zero new economic value.', [
                    d('Insolvency Point', 'Maintenance Load = Total Capacity - Minimum Feature Output.', 'Usually reached at 70-80% maintenance load'),
                    d('Minimum Feature Output', 'The absolute minimum new features needed to retain customers and prevent churn.', '20-30% of capacity for most SaaS companies'),
                    d('Runway to Insolvency', 'Months until maintenance load reaches insolvency point at current growth rate.', 'Calculate: (Insolvency Point - Current Load) / Quarterly Load Growth')
                ], 'Calculate your technical insolvency date based on the current maintenance load growth rate.'),
                l('Lesson 2: Leading Indicators', 'Technical insolvency doesn\'t arrive suddenly — it announces itself. The five leading indicators: declining deployment frequency, increasing time-to-resolution, growing backlog of "blocked by tech debt" tickets, rising unplanned work percentage, and increasing mean time between failures.', [
                    d('Deployment Frequency Decline', '3+ consecutive quarters of declining deployment frequency.', 'The earliest and most reliable signal'),
                    d('Blocked Ticket Ratio', 'Percentage of planned work blocked by technical constraints.', 'Warning: >15%. Crisis: >30%'),
                    d('Unplanned Work Ratio', 'Percentage of sprint capacity consumed by bugs and incidents.', 'Warning: >25%. Crisis: >40%')
                ], 'Score your organization against the 5 leading indicators. How many red flags are active?'),
                l('Lesson 3: Intervention Triggers', 'Set automated triggers: if Innovation Tax exceeds 30%, initiate a 1-sprint debt reduction sprint. If it exceeds 40%, initiate a feature freeze for debt remediation. If it exceeds 60%, escalate to the board for emergency capital allocation.', [
                    d('Yellow Trigger (30%)', '1-sprint debt reduction every 3 sprints. No board escalation needed.', 'Preventive maintenance cadence'),
                    d('Orange Trigger (40%)', 'Feature freeze for 2 sprints. Engineering leadership escalation.', 'Requires VP/CTO sponsorship'),
                    d('Red Trigger (60%)', 'Board-level emergency. Full feature freeze. Emergency capital request.', 'Existential risk to the business')
                ], 'Define your organization\'s intervention triggers with specific thresholds, actions, and escalation paths.')
            ]
        ],
        ['9-4', 'Debt Impact on EBITDA', 'Translating technical debt directly into EBITDA margin drag for financial stakeholders.',
            ['Connect maintenance to margin', 'Model EBITDA impact', 'Build remediation business cases', 'Present to PE and board'],
            [
                l('Lesson 1: The Maintenance-to-Margin Connection', 'R&D is the largest cost line in most technology companies (25-35% of revenue). If 40% of R&D is consumed by maintenance, that\'s 10-14% of total revenue spent maintaining old code. Reducing maintenance from 40% to 20% of R&D frees 5-7% of revenue — which flows directly to EBITDA.', [
                    d('R&D as % of Revenue', 'Total engineering spend divided by total revenue.', 'Median SaaS: 25-35% of revenue'),
                    d('Maintenance Drag', 'R&D % × Maintenance Load % = Revenue consumed by debt.', 'Example: 30% R&D × 40% maintenance = 12% of revenue'),
                    d('EBITDA Lift', 'Reducing maintenance load drops costs, improving EBITDA margin directly.', 'Each 10% maintenance reduction = 2.5-3.5% EBITDA improvement')
                ], 'Calculate the exact EBITDA margin drag from technical debt in your organization using the maintenance-to-margin formula.'),
                l('Lesson 2: PE Due Diligence Implications', 'Private equity firms now include technical debt assessment in their quality of earnings (QoE) analysis. A company with a PDI > 100 will see its EBITDA multiple discounted by 1-2x, potentially reducing enterprise value by millions. Smart sellers remediate critical debt before going to market.', [
                    d('Multiple Discount', 'PDI > 100 typically results in 1-2x EBITDA multiple reduction.', 'On a $50M revenue company, this is $5-10M in value destruction'),
                    d('Pre-Sale Remediation', 'Investing $1M to reduce PDI from 120 to 60 can prevent a $5M valuation haircut.', '5:1 return on remediation investment'),
                    d('Holdback Structures', 'PE buyers may escrow 10-20% of purchase price against tech debt remediation.', 'Seller receives holdback only if debt is resolved post-close')
                ], 'Model the enterprise value impact of your current PDI score on a hypothetical 10x EBITDA valuation multiple.'),
                l('Lesson 3: The Remediation Business Case', 'Every remediation project needs a business case: (1) Current annual carrying cost, (2) One-time remediation investment, (3) Expected carrying cost reduction, (4) Payback period, (5) 3-year NPV. If the payback is under 24 months, the board will approve it.', [
                    d('NPV Calculation', 'Net Present Value of carrying cost savings over 3 years minus remediation investment.', 'Use 10% discount rate for typical SaaS'),
                    d('Payback Period', 'Remediation cost / Annual savings.', 'Target: <24 months for board approval'),
                    d('Opportunity Cost', 'Revenue from new features that can be built once engineers are freed from maintenance.', 'Often 2-3x the direct savings')
                ], 'Build a full business case for your largest technical debt remediation project with NPV, payback period, and opportunity cost.')
            ]
        ],
        ['9-5', 'PE Due Diligence: Tech Debt Assessment', 'How private equity and corporate acquirers evaluate technical debt risk before signing the LOI.',
            ['Run pre-LOI scans', 'Identify deal breakers', 'Calculate debt-adjusted valuations', 'Structure remediation holdbacks'],
            [
                l('Lesson 1: The Pre-LOI Technical Scan', 'Before the Letter of Intent, sophisticated PE buyers run a rapid technical assessment: 48-72 hours, focused on three things — deployment frequency (velocity proxy), production incident rate (stability proxy), and maintenance load percentage (debt proxy). These three numbers tell the story.', [
                    d('Deployment Frequency', 'Daily deployments suggest modern CI/CD and low debt. Weekly suggests friction. Monthly suggests crisis.', 'Extract from GitHub/GitLab deploy logs'),
                    d('P1 Incident Rate', 'Severity 1 incidents per month. More than 2/month signals unstable systems.', 'Pull from PagerDuty/incident management'),
                    d('Maintenance Load', 'Sprint allocation to maintenance vs features over last 4 quarters.', 'Growing trend is a red flag')
                ], 'Run a simulated pre-LOI scan on your own organization. Grade yourself: green (<20% maintenance), yellow (20-40%), or red (>40%).'),
                l('Lesson 2: Deal-Breaker Identification', 'Five technical debt findings that kill deals: (1) Zero automated test coverage on revenue-critical paths, (2) single-point-of-failure architecture, (3) key-person dependency on <3 engineers, (4) unpatched CVE backlog >6 months, (5) legacy stack with no migration plan. Any one of these can reduce the bid by 20% or kill the deal entirely.', [
                    d('Test Coverage Gap', 'No automated tests on checkout/payment/auth flows.', 'Signals: unreliable deploy process, high bug rate'),
                    d('SPOF Architecture', 'Single database, single server, no redundancy.', 'One failure = total outage = revenue loss'),
                    d('CVE Backlog', 'Known security vulnerabilities unpatched for >6 months.', 'Regulatory liability and breach risk')
                ], 'Audit your codebase for the 5 deal-breaker signals. Document each finding with severity and remediation estimate.'),
                l('Lesson 3: Debt-Adjusted Valuation', 'The debt-adjusted valuation model: Start with standard EBITDA multiple → subtract remediation costs → subtract 12-month carrying costs → apply risk discount for uncertainty. A company trading at 10x EBITDA with $3M in tech debt remediation costs and $800K in annual carrying costs is really worth 10x × (EBITDA - $800K) - $3M.', [
                    d('Remediation Deduction', 'One-time cost to fix debt subtracted from enterprise value.', 'Like deducting CapEx from a real estate valuation'),
                    d('Carrying Cost Deduction', 'Annual debt maintenance cost reduces the EBITDA used in the multiple.', 'This is the more impactful deduction'),
                    d('Risk Discount', '5-15% additional discount for uncertainty in remediation estimates.', 'Higher for older code, less documentation')
                ], 'Calculate the debt-adjusted valuation for a hypothetical $50M revenue company with 45% maintenance load and $4M in remediation costs.')
            ]
        ],
    ];

    t9Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`tech-debt-liability/${id}`] = m(id, title, desc, t9, takeaways, lessons);
    });

    // ═══════════════════ TRACK 10: AI Due Diligence ═══════════════════
    const t10 = 'Track 10 — AI Due Diligence';
    const t10Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['10-1', 'AI Company Valuation Frameworks', 'Why AI companies trade at different multiples — and how to separate hype from economic value.',
            ['Apply AI-specific valuation methods', 'Assess revenue quality', 'Calculate AI gross margins', 'Identify wrapper vs foundation value'],
            [
                l('Lesson 1: Revenue Quality Assessment', 'Not all AI revenue is equal. API wrapper revenue (reselling OpenAI with a UI) is worth 3-5x. Proprietary model revenue (custom-trained models on unique data) is worth 8-15x. The difference: defensibility. If OpenAI launches a feature that obsoletes your wrapper, your revenue evaporates overnight.', [
                    d('Wrapper Revenue', 'Revenue from thin UIs over third-party APIs. Highly substitutable.', 'Multiple: 3-5x revenue'),
                    d('Application Layer Revenue', 'Revenue from workflow automation with embedded AI. Moderate moat.', 'Multiple: 6-10x revenue'),
                    d('Foundation Revenue', 'Revenue from proprietary models, unique data, or custom training. Deep moat.', 'Multiple: 10-20x revenue')
                ], 'Categorize 3 AI companies into wrapper, application, or foundation revenue. Justify the multiple for each.'),
                l('Lesson 2: AI Gross Margin Analysis', 'Traditional SaaS commands 80%+ gross margins. AI companies often operate at 50-65% gross margins because inference costs (GPU compute, API calls) create variable COGS that scale with usage. A company claiming $10M ARR with 55% margins has a very different value than one with 80% margins.', [
                    d('Inference COGS', 'The variable cost of serving AI predictions/generations per user.', 'Must be disaggregated from hosting costs'),
                    d('Margin Trajectory', 'Is the company improving margins through optimization, or are they degrading as usage grows?', 'Improving: strong signal. Degrading: red flag'),
                    d('Margin at Scale', 'What margins look like at 10x current usage.', 'If margins degrade at scale, the model may not work')
                ], 'Build a margin projection model for an AI company assuming 3x and 10x current user base. Do margins hold or collapse?'),
                l('Lesson 3: The AI Moat Assessment', 'Three types of AI moats: Data (proprietary training data that competitors can\'t access), Model (fine-tuned weights that encode domain expertise), and Distribution (embedded in customer workflows). The strongest companies have all three. Wrappers have zero.', [
                    d('Data Moat', 'Proprietary data assets that improve model quality and are legally defensible.', 'Strongest and most durable moat'),
                    d('Model Moat', 'Custom-trained models that outperform generic LLMs on specific tasks.', 'Moderate moat — can be replicated with enough data'),
                    d('Distribution Moat', 'Deep workflow integration that creates switching costs.', 'Switching cost > 6 months of effort = strong moat')
                ], 'Evaluate an AI company\'s moat across all three dimensions. Score each 1-5 and calculate total defensibility.')
            ]
        ],
        ['10-2', 'AI Model Asset Valuation', 'How to value proprietary models, training data, and ML infrastructure as enterprise assets.',
            ['Value training data', 'Assess model uniqueness', 'Calculate training cost basis', 'Evaluate model depreciation'],
            [
                l('Lesson 1: Training Data Valuation', 'The AI company\'s most valuable asset isn\'t the model — it\'s the data. If a company has spent 3 years collecting, cleaning, and annotating 10M domain-specific examples, that dataset has a replacement cost (what would it cost to recreate from scratch?) and a strategic value (what competitive advantage does it provide?).', [
                    d('Replacement Cost', 'Cost to recreate the dataset: collection + cleaning + annotation + quality assurance.', 'Often $5-50 per labeled example for domain-specific data'),
                    d('Strategic Value', 'The performance improvement the proprietary data provides over public datasets.', 'Measured in accuracy delta on domain-specific benchmarks'),
                    d('Data Freshness', 'How quickly the data becomes stale. Medical data depreciates faster than legal data.', 'Stale data moats erode over 12-24 months')
                ], 'Estimate the replacement cost and strategic value of a hypothetical 5M-example proprietary training dataset in your domain.'),
                l('Lesson 2: Model Depreciation', 'Unlike traditional software assets, AI models depreciate. GPT-4 caliber models from 2023 are already outperformed by smaller, cheaper models in 2026. Fine-tuned models on proprietary data retain value longer because the data moat persists even as the base model is replaced.', [
                    d('Base Model Lifetime', 'Average useful life of a foundation model before a superior alternative exists.', 'Currently 12-18 months and shrinking'),
                    d('Fine-Tune Durability', 'Fine-tuned models on proprietary data retain 70-80% of their value across base model generations.', 'Because the data and task-specific knowledge transfers'),
                    d('Depreciation Schedule', 'Amortize model training costs over 18-24 months for financial reporting.', 'Aligns with typical model replacement cycles')
                ], 'Create a depreciation schedule for a $500K model training investment, accounting for the expected base model obsolescence cycle.'),
                l('Lesson 3: ML Infrastructure Valuation', 'The MLOps pipeline — training infrastructure, feature stores, evaluation harnesses, deployment automation — has independent value. A well-built ML platform reduces the time and cost of training future models by 50-80%. This is a reusable asset.', [
                    d('Pipeline Maturity', 'Automated training, evaluation, and deployment vs manual notebook-driven process.', 'Automated pipeline = $500K-2M in reusable infrastructure value'),
                    d('Platform Reusability', 'Can the platform train different models for different tasks without re-engineering?', 'High reusability = higher asset value'),
                    d('Replacement Cost', 'Cost to rebuild the ML platform from scratch with equivalent capabilities.', '12-18 months of ML engineering team time')
                ], 'Assess the maturity of an AI company\'s ML infrastructure and estimate its replacement cost as an independent asset.')
            ]
        ],
        ['10-3', 'AI Infrastructure Audit', 'Evaluating GPU contracts, cloud commitments, and inference cost trajectories under diligence.',
            ['Audit GPU economics', 'Evaluate cloud commitments', 'Project inference cost trajectories', 'Identify optimization opportunities'],
            [
                l('Lesson 1: GPU Contract Analysis', 'AI companies sign long-term GPU commitments ($1-10M+ annually). These contracts create fixed-cost obligations that must be evaluated like any other lease. Key questions: What\'s the commitment term? Can it be scaled down? What happens if GPU prices drop 50% (which they will)?', [
                    d('Commitment Term Risk', 'Multi-year GPU commitments at today\'s prices may be 2x market rate in 18 months.', 'Evaluate exit clauses and renegotiation rights'),
                    d('Utilization Rate', 'What percentage of committed GPU capacity is actually used?', 'Target: >70%. Below 50% indicates over-commitment'),
                    d('Spot vs Reserved Mix', 'Training workloads should use spot/preemptible. Inference should use reserved.', 'Optimal mix: 60% reserved (inference) + 40% spot (training)')
                ], 'Audit a GPU commitment contract: calculate utilization rate, assess pricing vs current market rates, and identify exit clause risks.'),
                l('Lesson 2: Inference Cost Trajectory Modeling', 'Inference costs are declining 50-70% annually due to hardware improvements, model efficiency gains, and competition. A company spending $500K/month on inference today will likely need only $150-250K/month for the same workload in 18 months. This trajectory affects margins, pricing, and valuation.', [
                    d('Cost Decline Rate', 'Historical inference cost decline: 50-70% annually.', 'Use this to project future COGS'),
                    d('Usage Growth vs Cost Decline', 'If usage grows 100%/year but costs decline 60%/year, net spend still grows.', 'Net: (1 + growth) × (1 - decline) = actual COGS trajectory'),
                    d('Margin Expansion Forecast', 'Declining inference costs with stable pricing = expanding margins.', 'Model the margin trajectory over 3 years')
                ], 'Build a 3-year inference cost projection assuming 60% annual cost decline and 80% annual usage growth. Do margins expand or contract?'),
                l('Lesson 3: Optimization Opportunity Assessment', 'Most AI companies are running inference inefficiently: no caching, no model routing, no batching, no quantization. An investor who identifies $200K/month in optimization opportunities has found $200K/month in EBITDA improvement — which at a 10x multiple adds $24M in enterprise value.', [
                    d('Semantic Caching', 'Caching AI responses for similar queries. Typically reduces inference spend 20-40%.', 'Low-hanging fruit: implement in weeks, saves immediately'),
                    d('Model Routing', 'Routing simple queries to cheaper models. Reduces average cost-per-query 40-60%.', 'Moderate effort: requires confidence scoring'),
                    d('Quantization', 'Running 4-bit quantized models for 70% cost reduction with <3% quality loss.', 'Requires ML engineering investment but massive savings')
                ], 'Identify the top 3 inference optimization opportunities in a target AI company and calculate the annual COGS savings for each.')
            ]
        ],
    ];

    t10Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`ai-due-diligence/${id}`] = m(id, title, desc, t10, takeaways, lessons);
    });

    // ═══════════════════ TRACK 11: Build vs Buy for AI ═══════════════════
    const t11 = 'Track 11 — Economics of Build vs Buy';
    const t11Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['11-1', 'The Build vs Buy Decision Framework', 'The definitive framework for deciding when to build AI in-house vs buying from vendors.',
            ['Apply the differentiation test', 'Calculate true TCO', 'Assess vendor lock-in costs', 'Build the decision matrix'],
            [
                l('Lesson 1: The Core vs Context Test', 'If AI is a core differentiator in your product (the reason customers choose you), build it. If it\'s context (a feature that enhances but doesn\'t define your product), buy it. Most companies get this wrong because they confuse "interesting engineering" with "strategic differentiation."', [
                    d('Core Differentiator', 'The AI capability that customers cite as the primary reason they buy.', 'This must be owned, controlled, and continuously improved'),
                    d('Context Feature', 'AI capabilities that enhance the product but are not the primary value proposition.', 'These should be bought from best-in-class vendors'),
                    d('The Ego Test', 'Would the CEO describe this AI to investors as the company\'s competitive advantage?', 'If no → buy it. If yes → build it.')
                ], 'List all AI capabilities in your product. Apply the Core vs Context test to each. How many are truly core?'),
                l('Lesson 2: True TCO Calculation', 'The "build" cost is never just the ML engineer salary. True TCO includes: ML engineering team (salaries + benefits + management overhead) + GPU/cloud compute + data collection and annotation + evaluation infrastructure + monitoring and observability + ongoing retraining + opportunity cost of not building other features. The true TCO is typically 3-5x the visible engineering cost.', [
                    d('Visible Cost', 'ML engineer salaries and cloud compute bills.', 'What most teams report to leadership'),
                    d('Hidden Cost', 'Recruiting, management, evaluation, monitoring, retraining, infrastructure.', 'Typically 2-3x the visible cost'),
                    d('Opportunity Cost', 'Features NOT built because engineers are maintaining the ML system.', 'Often the largest and most ignored cost')
                ], 'Calculate the full TCO of your most complex in-house AI system. Include all hidden costs. Compare to the vendor alternative.'),
                l('Lesson 3: The Decision Matrix', 'Plot each AI capability on a 2×2 matrix: Strategic Importance (low/high) vs Internal Capability (low/high). High Strategic + High Capability = Build. Low Strategic + Low Capability = Buy. High Strategic + Low Capability = Partner (buy now, build later). Low Strategic + High Capability = Open Source.', [
                    d('Build Quadrant', 'High strategic importance AND high internal capability.', 'Invest heavily. This is your moat.'),
                    d('Buy Quadrant', 'Low strategic importance AND low internal capability.', 'Use best-in-class vendors. Don\'t waste engineering time.'),
                    d('Partner Quadrant', 'High strategic importance BUT low internal capability.', 'Buy now to ship fast, but invest in building internal capability. Plan the migration.')
                ], 'Map all your AI capabilities onto the 2×2 decision matrix. Share with your CTO and CPO for alignment.')
            ]
        ],
        ['11-2', 'API Provider Economics', 'The complete economic comparison of OpenAI, Anthropic, Google, and open-source alternatives.',
            ['Compare provider pricing', 'Negotiate volume discounts', 'Evaluate SLA differences', 'Plan multi-provider strategy'],
            [
                l('Lesson 1: Provider Cost Comparison', 'In Q2 2026, the AI API market has fragmented: OpenAI (GPT-4o at $5/$15 per 1M tokens), Anthropic (Claude 4 Sonnet at $3/$15), Google (Gemini 2.5 Pro at $1.25/$5), and open-weight alternatives (Llama 4 at $0 inference cost + hosting). The cheapest option for your use case depends on query complexity, quality requirements, and volume.', [
                    d('Simple Queries', 'Classification, extraction, formatting. Use cheapest provider or open-weights.', 'GPT-4o Mini or Llama: <$0.001 per query'),
                    d('Complex Queries', 'Multi-step reasoning, code generation, analysis. Quality matters.', 'Claude Sonnet or GPT-4o: $0.005-0.02 per query'),
                    d('Quality-Critical Queries', 'Medical, legal, financial analysis where errors have liability.', 'Best frontier model regardless of cost')
                ], 'Map your AI query types into simple/complex/quality-critical categories. Calculate the monthly cost at each provider.'),
                l('Lesson 2: Volume Discount Negotiation', 'At $50K+/month in API spend, providers will negotiate. Key leverage points: committed spend (guaranteeing $X/month for 12 months), multi-year contracts (lock in today\'s prices with annual volume growth), and multi-provider credible alternatives (showing Anthropic your OpenAI bill and vice versa).', [
                    d('Minimum Threshold', 'Most providers start negotiating at $50K/month spend.', 'Below this, use standard pricing tiers'),
                    d('Typical Discount', '20-40% off list pricing for committed annual spend.', 'Deeper discounts for multi-year commitments'),
                    d('Competitive Leverage', 'Running a proof-of-concept on a competitor\'s API before negotiating.', 'Creates credible switching threat')
                ], 'Prepare a negotiation strategy for your AI provider. Document your current spend, competitive alternatives, and target discount.'),
                l('Lesson 3: Multi-Provider Architecture', 'Single-provider dependency is a strategic risk. If OpenAI has an outage or raises prices 50%, your product goes down or your margins collapse. Design for multi-provider: abstract the AI layer behind an internal interface, route queries based on cost/quality/latency requirements, and maintain fallback providers.', [
                    d('Abstraction Layer', 'An internal API that mediates between your app and any AI provider.', 'Switch providers without changing application code'),
                    d('Intelligent Routing', 'Route simple queries to cheap providers, complex queries to premium providers.', 'Reduces average cost-per-query by 40-60%'),
                    d('Automatic Failover', 'If primary provider returns errors or latency spikes, route to secondary.', 'Maintains uptime SLA regardless of provider issues')
                ], 'Design a multi-provider AI architecture diagram showing the abstraction layer, routing logic, and failover paths.')
            ]
        ],
        ['11-3', 'Self-Hosting Economics', 'When running your own models makes economic sense — and when it doesn\'t.',
            ['Calculate self-hosting TCO', 'Evaluate break-even horizons', 'Assess operational complexity', 'Plan the migration path'],
            [
                l('Lesson 1: Self-Hosting TCO', 'Self-hosting an open-weight model (Llama, Mistral) eliminates per-token API costs but introduces: GPU server costs ($2-8K/month for inference-grade hardware), DevOps engineering (1-2 FTEs to manage the infrastructure), monitoring and observability, model updates and retraining, and security/compliance overhead. The break-even is typically 6-12 months for high-volume workloads.', [
                    d('GPU Hardware Cost', 'A single A100 80GB: ~$2/hr on-demand, ~$1/hr reserved.', '~$750-1500/month per GPU reserved'),
                    d('DevOps Overhead', '0.5-2 FTEs dedicated to ML infrastructure management.', '$75K-300K/year in additional headcount'),
                    d('Break-Even Volume', 'The monthly API spend equivalent at which self-hosting becomes cheaper.', 'Typically $15-30K/month in API costs')
                ], 'Calculate the break-even point for self-hosting your primary AI workload. At what monthly API spend does self-hosting win?'),
                l('Lesson 2: Operational Complexity Assessment', 'Self-hosting transforms your AI from a line item on an API bill to a production system you must keep running 24/7. This means: on-call rotations, GPU monitoring, model versioning, A/B testing infrastructure, load balancing, and auto-scaling. Do you have the team to operate this?', [
                    d('Team Readiness', 'Minimum viable ML Ops team: 1 ML Engineer + 1 DevOps Engineer.', 'Below this, self-hosting is reckless'),
                    d('Operational Maturity', 'Do you have: CI/CD for models? Automated evaluation? Monitoring dashboards?', 'If no to any, you\'re not ready'),
                    d('Incident Response', 'When the model starts hallucinating at 3am, who fixes it?', 'Must have on-call ML expertise')
                ], 'Score your organization\'s readiness for self-hosting across team, tooling, and operational maturity. Red/Yellow/Green each dimension.'),
                l('Lesson 3: The Hybrid Migration Path', 'The best strategy: start with APIs (zero operational complexity), identify your highest-volume and simplest workloads, migrate those to self-hosted (capture the biggest savings with the lowest risk), keep complex and quality-critical workloads on APIs. This captures 60-80% of the cost savings with 20% of the complexity.', [
                    d('Migration Priority', 'Highest volume + simplest quality requirements = first to self-host.', 'Classification, extraction, and formatting tasks first'),
                    d('Shadow Testing', 'Run self-hosted model in parallel with API for 2-4 weeks before switching.', 'Compare quality, latency, and cost side-by-side'),
                    d('Rollback Plan', 'Always maintain the ability to route back to API if self-hosted model degrades.', 'Never burn the API bridge')
                ], 'Design a phased migration plan: which workloads move to self-hosted first, second, and which stay on APIs permanently?')
            ]
        ],
    ];

    t11Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`ai-build-vs-buy/${id}`] = m(id, title, desc, t11, takeaways, lessons);
    });

    // ═══════════════════ TRACK 12: Career Capital Economics ═══════════════════
    const t12 = 'Track 12 — Career Capital Economics';
    const t12Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['12-1', 'Your Revenue-Per-Engineer Contribution', 'Stop measuring yourself in story points. Start measuring yourself in dollars.',
            ['Calculate your APER contribution', 'Attribute business value to technical work', 'Build impact dossiers', 'Quantify your multiplier effect'],
            [
                l('Lesson 1: Beyond Story Points', 'Story points measure effort, not impact. Two engineers can both complete 20 story points per sprint, but one refactored the checkout flow and increased conversion by 2% ($200K/year in revenue), while the other fixed CSS bugs. Same velocity, wildly different economic value. Your career is measured in the latter, not the former.', [
                    d('Story Points', 'A measure of effort complexity. Useful for sprint planning. Useless for career value.', 'Nobody gets promoted for story point velocity'),
                    d('Revenue Attribution', 'Directly connecting your technical work to a business outcome.', 'This is what gets you promoted and paid'),
                    d('The APER Contribution', 'Your personal share of the APER equation: how much revenue does your work enable?', 'Even infrastructure work can be attributed to revenue impact')
                ], 'List your top 3 accomplishments from the last quarter. For each, calculate the revenue impact — not the effort.'),
                l('Lesson 2: Building Impact Dossiers', 'An impact dossier is a document you maintain continuously — not something you scramble to create before performance reviews. Every project you complete gets an entry: what you did, the business outcome, and the economic value. After 6 months, you have an irrefutable case for promotion.', [
                    d('Entry Format', 'Project → Action → Outcome → Dollar Value. Example: "Optimized DB queries → Reduced p99 latency 400ms→80ms → Reduced churn by 3% → $120K ARR saved."', 'One entry per significant project'),
                    d('Update Cadence', 'Add entries bi-weekly, not annually.', 'You forget impact details within 30 days'),
                    d('Presentation Ready', 'Each entry should be ready to paste into a promotion packet or resume.', 'Write in business language, not technical jargon')
                ], 'Create an impact dossier with at least 5 entries from the last 6 months. Each must include a dollar value.'),
                l('Lesson 3: The Multiplier Effect', 'Senior engineers create value not just through their own code, but by unblocking others. If you design a shared library that saves 5 engineers 10 hours each per month, your multiplier effect is 50 engineer-hours/month. At a $100/hr burden rate, you\'re generating $60K/year in value — without writing a single feature.', [
                    d('Direct Value', 'Value created by your own hands: features shipped, bugs fixed, systems optimized.', 'The obvious and visible contribution'),
                    d('Multiplier Value', 'Value created by enabling others: shared tools, documentation, mentoring, code reviews.', 'Often 2-5x your direct value at senior levels'),
                    d('Total Impact', 'Direct + Multiplier = your true economic contribution.', 'This is what you negotiate with')
                ], 'Calculate your multiplier effect: how many engineer-hours do your tools, docs, or mentoring save per month? Convert to dollars.')
            ]
        ],
        ['12-2', 'Compensation Economics', 'Why you\'re probably undervaluing yourself — and the mathematical proof.',
            ['Analyze your total compensation', 'Evaluate equity correctly', 'Understand pay band economics', 'Calculate your market value gap'],
            [
                l('Lesson 1: Total Compensation Decomposition', 'Your compensation is not your salary. Total comp = Base Salary + Bonus (target and actual) + Equity (RSUs/options at fair value) + Benefits (healthcare, 401k match) + Perks (education budget, WFH stipend). Most engineers only negotiate base salary, leaving 30-50% of their compensation unoptimized.', [
                    d('Base Salary', 'The guaranteed cash component.', 'Typically 50-60% of total comp at senior levels'),
                    d('Equity Value', 'Current market value of granted RSUs or estimated value of options.', 'Can be $0 (pre-IPO options underwater) or 40%+ of total comp (public FAANG)'),
                    d('Hidden Comp', '401k match, ESPP discount, healthcare premium, education budget.', 'Often $20-40K/year that people ignore in negotiations')
                ], 'Calculate your true total compensation including all components. Compare it to your base salary. What percentage are you leaving unexamined?'),
                l('Lesson 2: Market Value Analysis', 'Your market value is what another company would pay you today — not what you\'re currently earning. The gap between current comp and market comp is your "underpayment tax." Levels.fyi, Glassdoor, and Blind provide data, but the most accurate signal is interviewing: get an offer, and you know your exact market value.', [
                    d('Market Data Sources', 'Levels.fyi (best for tech), Glassdoor (broad), Blind (anonymous crowdsourced).', 'Cross-reference at least 2 sources'),
                    d('The Underpayment Tax', 'Current comp / Market comp × 100. If below 85%, you\'re significantly underpaid.', 'Each year you stay underpaid is compound loss'),
                    d('Offer as Data', 'An external offer is the most accurate market signal available.', 'You don\'t have to leave; you can present it to your current employer')
                ], 'Research your market value using 2+ data sources. Calculate your underpayment tax. Is it >15%?'),
                l('Lesson 3: Equity Valuation for Engineers', 'Stock options and RSUs are not free money — they\'re a bet. Options are worth $0 if the strike price exceeds the current valuation (underwater). RSUs are worth their current market price minus taxes. Most engineers dramatically overvalue pre-IPO options and undervalue public RSUs.', [
                    d('Options Common Mistake', 'Counting options at the "possible IPO price" instead of current fair market value.', 'The expected value includes the probability of $0'),
                    d('RSU Tax Impact', 'RSUs are taxed as ordinary income upon vesting. Your effective value is RSU price × (1 - marginal tax rate).', 'In CA at $200K+income, you keep ~55-60% of RSU value'),
                    d('409A Valuation', 'For private companies, the 409A valuation is the IRS-recognized fair market value.', 'This, not the last funding round price, is your option\'s current value')
                ], 'Calculate the after-tax value of your equity grants. If you have options, calculate them at the current 409A valuation, not the last round price.')
            ]
        ],
        ['12-3', 'The Business Case for Promotion', 'Most promotion cases fail because they describe effort, not impact. Build the irrefutable economic case.',
            ['Structure economic arguments', 'Quantify your business impact', 'Present in P&L language', 'Anticipate and counter objections'],
            [
                l('Lesson 1: The Effort Trap', '"I worked really hard this year" is not a promotion case. "I reduced infrastructure costs by $300K while maintaining 99.99% uptime" is. The promotion committee cares about business outcomes, not personal sacrifice. Every line of your promotion packet must connect to revenue, margin, risk reduction, or strategic positioning.', [
                    d('Effort Language', '"Worked on," "contributed to," "helped with," "supported."', 'These are participation trophies. Remove them.'),
                    d('Impact Language', '"Reduced cost by $X," "increased conversion by Y%," "eliminated risk of Z."', 'Every sentence should contain a number'),
                    d('The So-What Test', 'After every accomplishment, ask "So what? What happened to the business?"', 'If you can\'t answer, it\'s not a promotion-worthy accomplishment')
                ], 'Rewrite your top 5 accomplishments using impact language instead of effort language. Each must include a quantified business outcome.'),
                l('Lesson 2: The Promotion P&L', 'Frame your promotion case as a P&L statement. Revenue: quantified value you\'ve created. Costs: your current compensation. Margin: the gap between your value and your cost. If the margin is substantial, you\'re underpaid at your current level.', [
                    d('Value Created', 'Sum of all revenue impact, cost savings, and risk reduction from your work.', 'Pull directly from your impact dossier'),
                    d('Your Current Cost', 'Your total compensation: what the company pays for your output.', 'Include fully loaded cost: salary + equity + benefits + overhead'),
                    d('Value Margin', 'Value Created / Your Cost. If this ratio is >3x, you are significantly underpaid.', 'At 5x+, you have an extremely strong promotion case')
                ], 'Build your personal P&L. Calculate the value margin between what you create and what you cost. Present it in a 1-page document.'),
                l('Lesson 3: Objection Handling', 'The three most common promotion objections and how to counter them economically: (1) "We don\'t have budget" → "My current value margin is 4x. Promoting me costs $30K but retains $400K in value creation." (2) "You need more scope" → "Here are 3 cross-team projects I led." (3) "Timing isn\'t right" → "When will it be? I need a date."', [
                    d('Budget Objection', 'Counter with the retention cost argument. Replacing you costs 6-9 months salary.', 'Losing you costs more than promoting you'),
                    d('Scope Objection', 'Demonstrate you\'re already operating at the next level with evidence.', 'Use impact dossier entries that show cross-team influence'),
                    d('Timing Objection', 'Demand a specific date and criteria.', 'Vague timing = "we\'re not going to promote you but don\'t want to say it"')
                ], 'Prepare counterarguments for all three common promotion objections using economic data from your impact dossier.')
            ]
        ],
    ];

    t12Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`career-capital/${id}`] = m(id, title, desc, t12, takeaways, lessons);
    });

    // ═══════════════════ TRACK 13: Engineering-to-Executive Economics ═══════════════════
    const t13 = 'Track 13 — Engineering-to-Executive';
    const t13Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['13-1', 'The Language of the Boardroom', 'The economic vocabulary that separates technical managers from true executives.',
            ['Translate technical metrics to EBITDA', 'Master margin frameworks', 'Present risk in financial terms', 'Build executive vocabulary'],
            [
                l('Lesson 1: EBITDA Translation', 'When you say "we reduced p99 latency by 300ms," the board hears noise. When you say "we eliminated $2M in annual churn risk by reducing timeout errors that were causing 0.5% of transactions to fail," the board hears value. Every technical metric has an EBITDA translation. Learn it.', [
                    d('Uptime → Revenue Protection', '0.1% improvement in uptime on $100M ARR = $100K in protected revenue.', 'Frame as "revenue at risk" not "uptime percentage"'),
                    d('Deployment Speed → Time-to-Market', 'Reducing release cycle from 4 weeks to 1 week means features generate revenue 3 weeks earlier.', 'Frame as "revenue acceleration" not "faster deploys"'),
                    d('Technical Debt → Margin Drag', 'Every 10% in maintenance load = 2.5-3.5% EBITDA margin reduction.', 'Frame as "unfunded liability" not "tech debt"')
                ], 'Take the 3 metrics you report most frequently. Translate each into an EBITDA-impact statement that a board member would understand.'),
                l('Lesson 2: The Board Lexicon', 'There are ~20 terms that board members use fluently that most technical leaders don\'t: EBITDA, Run Rate, Burn Multiple, Rule of 40, Net Revenue Retention, Gross Margin, Contribution Margin, CAC Payback, LTV:CAC Ratio, ARR, ACV, Bookings, Pipeline, Quota Attainment, Magic Number, Gross Margin, Operating Leverage, and more. Not knowing these is like showing up to a foreign country without speaking the language.', [
                    d('EBITDA', 'Earnings Before Interest, Taxes, Depreciation, and Amortization. The primary profitability metric.', 'Everything you report should connect to this'),
                    d('Burn Multiple', 'Net burn / Net new ARR. How efficiently the company converts cash into growth.', 'Below 1x = efficient. Above 2x = concerning. Above 3x = crisis'),
                    d('Net Revenue Retention', 'Revenue from existing customers including expansion minus churn.', '>110% = growth without new sales. The board\'s favorite metric')
                ], 'Learn the board lexicon. Write a 1-page engineering update using exclusively business-language terms — zero technical jargon.'),
                l('Lesson 3: Risk Quantification', 'When you say "our system is at risk," the board thinks "that\'s IT\'s problem." When you say "we have a $5M revenue exposure from a single-point-of-failure database that has had 2 near-miss incidents in the last quarter," the board thinks "we need to fix this now."', [
                    d('Revenue Exposure', 'Annual revenue that flows through the at-risk system.', 'This is the maximum loss if the system fails catastrophically'),
                    d('Probability of Occurrence', 'Based on incident history, the likelihood of a failure in the next 12 months.', 'Express as a percentage, not "it could happen"'),
                    d('Expected Loss', 'Revenue Exposure × Probability = Expected Loss. This is the number the board needs.', 'Example: $5M exposure × 20% probability = $1M expected loss')
                ], 'Identify the top 3 technical risks. Quantify each using the Revenue Exposure × Probability framework. Present as a board-ready risk register.')
            ]
        ],
        ['13-2', 'Budget Ownership & R&D Stewardship', 'The difference between spending a budget and stewarding capital.',
            ['Own the R&D budget', 'Model headcount economics', 'Practice zero-based budgeting', 'Present CapEx vs OpEx strategies'],
            [
                l('Lesson 1: R&D Budget Anatomy', 'The R&D budget has four major buckets: People (salaries, benefits, contractors — typically 70-80%), Infrastructure (cloud, tools, licenses — typically 10-15%), Programs (training, conferences, equipment — typically 5%), and Contingency (unplanned work, incidents — typically 5-10%). Understanding these ratios is the minimum bar for executive leadership.', [
                    d('People Ratio', 'Percentage of R&D budget spent on compensation.', 'Target: 70-80%. Above 85% means you have no room for tools or growth.'),
                    d('Infrastructure Ratio', 'Percentage spent on cloud, tools, and licenses.', 'Target: 10-15%. Above 20% suggests cloud FinOps problems.'),
                    d('Contingency', 'Unplanned costs: incident response, security patches, emergency hiring.', 'Target: 5-10%. Below 5% means you\'re underbudgeting risk.')
                ], 'Break down your current R&D budget by People, Infrastructure, Programs, and Contingency. How do your ratios compare to targets?'),
                l('Lesson 2: Headcount Modeling', 'Adding an engineer costs 30-50% more than their salary: benefits (20-30%), equipment ($3-5K), software licenses ($5-10K/year), management overhead (each manager can effectively manage 5-8 direct reports), and ramp time (a new hire operates at 25% productivity for 3 months, 50% for the next 3).', [
                    d('Fully Loaded Cost', 'Salary × 1.3-1.5 = true annual cost per engineer.', 'Include benefits, equipment, licenses, space'),
                    d('Ramp Cost', 'New hire produces at 25% for months 1-3, 50% for months 4-6.', 'Effective cost of new hire = salary / average productivity in year 1'),
                    d('Manager Span', 'Each manager can effectively manage 5-8 reports.', 'Below 5 = management bloat. Above 10 = management overwhelm.')
                ], 'Model the true fully-loaded cost of your next 3 hires. Include 6-month ramp time and manager span impact.'),
                l('Lesson 3: CapEx vs OpEx Strategy', 'CapEx (capital expenditure) is amortized over multiple years — it smooths the P&L impact. OpEx (operating expenditure) hits the P&L immediately. Cloud costs are OpEx. On-premise hardware is CapEx. Software development can be either, depending on whether it\'s capitalized under ASC 350-40.', [
                    d('Software Capitalization', 'Under ASC 350-40, development costs during the application development stage can be capitalized.', 'Planning and post-launch costs are expensed'),
                    d('R&D Tax Credit', 'Qualified research expenses may be eligible for 6-20% tax credits.', 'Requires detailed time tracking and documentation'),
                    d('Cloud CapEx Shift', 'Reserved instances and savings plans can be treated as CapEx in some frameworks.', 'Consult your controller for treatment')
                ], 'Review your R&D expenses. Identify which costs could be capitalized or qualify for R&D tax credits. Estimate the P&L impact.')
            ]
        ],
        ['13-3', 'Board Reporting for Technical Leaders', 'How to present engineering to the board — so they fund your roadmap instead of cutting your budget.',
            ['Design the 4-quadrant board slide', 'Build KPI dashboards', 'Write investment proposals', 'Handle hostile board questions'],
            [
                l('Lesson 1: The 4-Quadrant Board Slide', 'One slide per quarter. Four quadrants: (1) Velocity & Delivery — what shipped and the business impact. (2) Quality & Risk — uptime, incidents, security posture. (3) Investment & Efficiency — R&D spend, APER trend, cloud cost trend. (4) Forward Look — next quarter\'s investments and expected returns.', [
                    d('Velocity Quadrant', 'Features shipped, revenue impacted, deployment frequency.', 'Lead with the dollar impact, not the feature count'),
                    d('Risk Quadrant', 'Uptime SLA, incident count, security vulnerabilities, tech debt trend.', 'Red/Yellow/Green with trend arrows'),
                    d('Investment Quadrant', 'R&D as % of revenue, APER, cloud cost per customer.', 'Show efficiency trends, not absolute numbers')
                ], 'Create your 4-quadrant board slide for the current quarter. Each quadrant must contain exactly 3 metrics with trends.'),
                l('Lesson 2: The Investment Proposal Framework', 'When you need budget for a technical initiative, present it as an investment — not a cost. The framework: (1) The Problem — in revenue/risk terms, (2) The Investment — total cost, timeline, team, (3) The Return — expected revenue impact, cost savings, or risk reduction, (4) The Alternative — what happens if we don\'t invest.', [
                    d('Problem Framing', 'Express the problem in business terms the board cares about.', '"We\'re losing $X/month" not "our system is slow"'),
                    d('Investment Specifics', 'Exact cost, timeline, and team composition.', 'Boards want precision, not estimates'),
                    d('The Do-Nothing Cost', 'What it costs to NOT invest. This is often the most persuasive number.', 'Escalating risk, growing maintenance load, competitive gap')
                ], 'Draft an investment proposal for your highest-priority technical initiative using the 4-part framework.'),
                l('Lesson 3: Handling Hostile Board Questions', 'Three questions boards love to ask technical leaders, and how to handle them: (1) "Why does engineering cost so much?" — "Our APER is $350K, meaning each engineer generates $350K in revenue. That\'s a 3x return." (2) "Can we offshore?" — "Blended rates save 40% but ramp time costs us 2 quarters of velocity." (3) "Why is this taking so long?" — "We scoped for quality and security. The last time we rushed, it cost us $X in incidents."', [
                    d('Cost Question', 'Always answer with APER and return metrics, not headcount.', 'Reframe cost as investment with measurable return'),
                    d('Offshoring Question', 'Present the total cost: savings - ramp time - communication overhead - quality risk.', 'Often neutral or negative when fully loaded'),
                    d('Timeline Question', 'Reference the cost of previous rushed initiatives.', 'Board remembers expensive failures')
                ], 'Prepare answers for the 3 most hostile board questions about engineering. Each answer must include a specific dollar amount.')
            ]
        ],
    ];

    t13Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`exec-economics/${id}`] = m(id, title, desc, t13, takeaways, lessons);
    });

    // ═══════════════════ TRACK 14: The Economics of Leadership ═══════════════════
    const t14 = 'Track 14 — Economics of Leadership';
    const t14Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['14-1', 'Leadership vs Management: The Economic Distinction', 'Leadership is a skill, not a rank. The promotion gap is a trillion-dollar problem. Here\'s the math.',
            ['Distinguish leadership from management', 'Calculate the promotion gap cost', 'Identify the training void', 'Build the case for leadership development'],
            [
                l('Lesson 1: The Promotion Gap', 'Companies spend $15-30K training a junior engineer to do their job. They provide tutorials, mentors, pair programming, code reviews, ramp plans. Then when that engineer becomes excellent at their job, they\'re promoted to manage other engineers — a completely different job. Training budget for the new job? Zero. This is the Promotion Gap, and it creates managers, not leaders.', [
                    d('Junior Training Investment', 'Average onboarding + training cost for a junior engineer.', '$15-30K in the first 6 months'),
                    d('Leadership Training Investment', 'Average leadership training for a new engineering manager.', 'Typically $0-2K (one conference and a book)'),
                    d('The Gap', 'The difference between what we invest in technical training vs leadership training.', '$15-28K per person — multiplied across thousands of promotions annually')
                ], 'Calculate the Promotion Gap in your organization: compare the training investment for your last junior hire vs your last new manager.'),
                l('Lesson 2: Manager Cost vs Leader ROI', 'A manager assigns tasks, tracks timelines, and reports status. A leader creates the conditions for their team to do extraordinary work. The economic difference: a managed team operates at 60-80% of potential (because people do what they\'re told). A led team operates at 100-120% (because people do what they believe in).', [
                    d('Manager Output', 'Team delivers what\'s assigned. Predictable but capped.', '60-80% of team potential'),
                    d('Leader Output', 'Team delivers beyond what\'s expected. Innovation emerges naturally.', '100-120% of team potential'),
                    d('The Leadership Premium', 'The output delta between a managed team and a led team, expressed in productivity.', 'Typically 30-50% higher output per engineer')
                ], 'Assess your own team: are they operating at 60-80% (managed) or 100-120% (led)? What specific behaviors from you contribute to the current state?'),
                l('Lesson 3: Leadership as Learnable Skill', 'Leadership is not a personality trait. It is a set of learnable, practicable skills: active listening, coaching, feedback delivery, conflict resolution, vision-setting, delegation, and trust-building. Like any skill, it improves with deliberate practice and degrades with neglect. The idea that "some people are natural leaders" is as absurd as saying "some people naturally know calculus."', [
                    d('Skill Inventory', 'The 7 core leadership skills: listening, coaching, feedback, conflict resolution, vision, delegation, trust.', 'Rate yourself 1-5 on each'),
                    d('Deliberate Practice', 'Practice each skill intentionally in real interactions. Track improvement.', 'Set weekly practice goals for your weakest skill'),
                    d('Feedback Loops', 'Ask your team monthly: "What could I do better as a leader?"', 'This is leadership\'s equivalent of unit testing')
                ], 'Rate yourself on the 7 core leadership skills. Identify your weakest skill and create a 30-day practice plan.')
            ]
        ],
        ['14-2', 'The Peter Principle: The Cost of Promoting to Incompetence', 'When being great at job A earns you job B — which no one teaches you.',
            ['Identify Peter Principle victims', 'Calculate the organizational cost', 'Design promotion readiness frameworks', 'Build pre-promotion training paths'],
            [
                l('Lesson 1: Recognizing the Peter Principle', 'The Peter Principle: every person rises to their level of incompetence. Your best engineer becomes your worst manager — not because they\'re bad, but because leading people is a different skill set than writing code. The signs: a new manager who still writes code instead of coaching, who makes all technical decisions instead of delegating, who measures team success by their own output instead of the team\'s growth.', [
                    d('The Maker Trap', 'New managers who keep doing IC work because that\'s what made them successful.', 'If the manager is the biggest code contributor, they\'re not managing'),
                    d('Decision Hoarding', 'New managers who make all technical decisions themselves.', 'If the team can\'t ship without the manager\'s approval on every PR, it\'s a bottleneck'),
                    d('Self-Measurement', 'Managers who measure their success by their own output, not the team\'s.', 'Leadership success = team success, not personal heroics')
                ], 'Identify one person in your organization who was promoted into leadership but exhibits Peter Principle signs. What specific support would redirect them?'),
                l('Lesson 2: The Organizational Cost', 'When a Peter Principle promotion fails, the damage is immense: you lose a great IC (because they can\'t go back without loss of face), you get a bad manager (who demoralizes the team), you lose 2-3 team members (who leave because of the bad manager), and you spend 6-12 months undoing the damage. Total cost: often $500K-1M in replacement costs, lost productivity, and attrition.', [
                    d('IC Loss', 'The company loses a top performer from their area of excellence.', 'Replacement cost: 6-9 months salary'),
                    d('Team Attrition', 'Bad managers cause 2-3 engineers to leave within 12 months.', 'Gallup: 70% of attrition is directly tied to the manager'),
                    d('Productivity Loss', 'The team operates at 50-60% capacity during the chaos period.', 'Typically lasts 6-12 months until the manager is replaced or trained')
                ], 'Calculate the total cost of a failed promotion in your organization: IC loss + replacement cost + team attrition + productivity decline.'),
                l('Lesson 3: Pre-Promotion Readiness', 'Before promoting anyone to leadership, they should complete three things: (1) Lead a project for 3 months — manage scope, communicate status, drive outcomes, (2) Coach a junior for 3 months — explain, listen, provide feedback, adjust approach, (3) Handle a conflict — mediate a technical disagreement between two engineers without imposing their own solution.', [
                    d('Project Leadership Trial', '3-month period leading a cross-functional project as a trial run.', 'Low risk: they still have their IC role as safety net'),
                    d('Coaching Trial', 'Formally mentoring a junior engineer with weekly 1:1s.', 'Tests: patience, listening, teaching, empathy'),
                    d('Conflict Resolution Trial', 'Mediating a technical disagreement without providing the answer.', 'Most difficult test: requires them to facilitate, not solve')
                ], 'Design a 6-month Pre-Promotion Readiness Program for your next potential manager. Include all three trials with success criteria.')
            ]
        ],
        ['14-3', 'The Economics of Psychological Safety', 'Why teams that feel safe dramatically outperform teams that don\'t — and the math that proves it.',
            ['Quantify the innovation premium', 'Calculate the fear tax', 'Apply Google Project Aristotle findings', 'Build measurement frameworks'],
            [
                l('Lesson 1: The Innovation Premium', 'Google\'s Project Aristotle studied 180+ teams and found that psychological safety was the single strongest predictor of team performance. Teams where people feel safe to take risks, ask questions, and admit mistakes outperform unsafe teams by 30-50% on innovation metrics. This is the Innovation Premium: the economic value of an environment where people speak up.', [
                    d('Innovation Premium', 'The productivity delta between psychologically safe and unsafe teams.', '30-50% higher innovation output'),
                    d('Risk-Taking Behavior', 'In safe teams, engineers propose unconventional solutions and experiment.', 'Experiments that fail fast produce breakthrough learnings'),
                    d('Knowledge Sharing', 'In safe teams, people share mistakes and learnings openly.', 'One person\'s mistake prevents 10 others from repeating it')
                ], 'Survey your team (anonymously) on psychological safety using 5 questions. Score out of 5. Is your team above or below 3.5?'),
                l('Lesson 2: The Fear Tax', 'When people don\'t feel safe, they hide problems. They don\'t surface bugs early, they don\'t push back on bad designs, they don\'t admit they don\'t understand the requirements. Every hidden problem eventually surfaces — but now it\'s 10x more expensive to fix. The Fear Tax = the cost of problems that could have been caught early but weren\'t because people were afraid to speak up.', [
                    d('Bug Detection Delay', 'In fear-based teams, bugs are detected 2-3x later in the development cycle.', 'A bug caught in code review costs $100. The same bug in production costs $10,000.'),
                    d('Silent Disagreement', 'People agree publicly and disagree privately. Decisions are made with hidden resistance.', 'Implementation half-heartedness adds 30-50% to project timelines'),
                    d('Knowledge Hoarding', 'People protect information as job security rather than sharing it.', 'Creates single-points-of-failure and bus factor = 1')
                ], 'Estimate the Fear Tax in your organization: identify 3 problems that were caught late because someone was afraid to speak up. Calculate the cost of late detection.'),
                l('Lesson 3: Building Safety Infrastructure', 'Psychological safety isn\'t built by saying "this is a safe space." It\'s built by how you react in unsafe moments. When someone admits a mistake, do you ask "what happened?" (safe) or "who\'s responsible?" (unsafe). When someone disagrees with you in a meeting, do you say "tell me more" (safe) or "let\'s take this offline" (unsafe).', [
                    d('Reaction Audit', 'How you respond when someone delivers bad news determines the team\'s safety.', 'Your worst reaction becomes the team\'s floor for safety'),
                    d('Failure Celebration', 'Explicitly celebrating learned failures (not repeated ones) signals safety.', 'Run blameless post-mortems with learnings, not blame'),
                    d('Vulnerability Modeling', 'Leaders who admit their own mistakes first make it safe for others.', '"I made a bad call on X. Here\'s what I learned." — said in public')
                ], 'Conduct a Reaction Audit: how did you respond the last 3 times someone brought you bad news or disagreed with you? Grade yourself honestly.')
            ]
        ],
        ['14-4', 'Attrition Economics: The Cost of Losing Your Best People', 'Why the smartest investment in engineering isn\'t hiring — it\'s retention.',
            ['Calculate true replacement costs', 'Identify attrition warning signals', 'Build retention economics models', 'Design stay interviews'],
            [
                l('Lesson 1: True Replacement Cost', 'Replacing an engineer costs 6-9 months of their salary when you include: recruiting costs ($15-30K), interview time (40-80 hours of engineering time), onboarding (3 months at 25% productivity), knowledge transfer (3-6 months to reach full context), team disruption (morale and coordination tax for 2-3 months). For a senior engineer earning $200K, the true replacement cost is $150-180K.', [
                    d('Recruiting Cost', 'Agency fees, job postings, recruiter time, interview coordination.', '$15-30K per hire'),
                    d('Ramp Time', 'Months 1-3: 25% productive. Months 4-6: 50%. Full productivity: month 7+.', 'Total ramp cost: ~$50K in lost productivity'),
                    d('Knowledge Loss', 'Institutional knowledge that walks out the door. Undocumented context, relationships, historical decisions.', 'Often the most expensive and hardest to quantify')
                ], 'Calculate the true replacement cost for your 3 most critical engineers. Include all hidden costs.'),
                l('Lesson 2: Attrition Warning Signals', 'People don\'t leave suddenly — they disengage gradually. The 5 warning signals: (1) Declining participation in meetings, (2) Reduced code review quality and frequency, (3) Stopping mentoring or knowledge sharing, (4) Calendar cleared of optional meetings, (5) Suddenly updating LinkedIn. By the time they give notice, they mentally left 3-6 months ago.', [
                    d('Engagement Decline', 'Reduced participation in meetings, Slack, code reviews.', 'The earliest signal — often 3-6 months before departure'),
                    d('Mentoring Withdrawal', 'Stopping knowledge sharing and mentoring.', 'They\'ve stopped investing in the team\'s future'),
                    d('Calendar Signal', 'Removing optional meetings, taking more "personal appointments" during work hours.', 'They\'re interviewing. You have 2-4 weeks to intervene.')
                ], 'For each person on your team, score their engagement on the 5 warning signals. Is anyone showing 3+ signals?'),
                l('Lesson 3: The Stay Interview', 'Don\'t wait for the exit interview to learn why people leave. Run stay interviews quarterly: "What keeps you here? What would make you consider leaving? What would make this the best job you\'ve ever had? Is there anything I could change about how I lead that would improve your experience?" These questions cost $0 and prevent $150K+ in replacement costs.', [
                    d('Stay Interview ROI', 'A 30-minute quarterly conversation that prevents one attrition event saves $150K+.', 'The highest-ROI meeting a manager can run'),
                    d('The 4 Questions', '"What keeps you here? What would tempt you away? What could be better? How can I improve?"', 'Ask, listen, act. If you don\'t act, the interviews become counterproductive.'),
                    d('Action Commitment', 'After every stay interview, commit to one concrete action within 2 weeks.', 'Follow-through builds trust. Broken promises accelerate departure.')
                ], 'Schedule stay interviews with every person on your team this month. Document the themes. Identify 3 actionable improvements.')
            ]
        ],
        ['14-5', 'Servant Leadership ROI', 'The economics of removing obstacles instead of assigning tasks.',
            ['Quantify unblocking value', 'Calculate enablement ROI', 'Build trust as capital', 'Measure leader effectiveness by team output'],
            [
                l('Lesson 1: Unblocking as Value Creation', 'A manager assigns tasks. A servant leader removes obstacles. If your team is blocked for 2 hours/day waiting for approvals, dependencies, or decisions, and you eliminate those blockers, you\'ve just added 2 hours of productive capacity per person per day. For a 10-person team, that\'s 100 engineering hours per week — worth $40K/month in recaptured productivity.', [
                    d('Block Time', 'Hours per day each engineer spends waiting for approvals, decisions, or dependencies.', 'Measure with a simple daily survey for one week'),
                    d('Unblock Value', 'Block time × team size × hourly rate = monthly cost of blockers.', 'This is the servant leader\'s primary value creation metric'),
                    d('Decision Velocity', 'How quickly technical decisions are made and communicated.', 'Target: <24 hours for reversible decisions')
                ], 'Measure your team\'s average daily block time for one week. Calculate the monthly cost of blocked productivity.'),
                l('Lesson 2: Trust as Capital', 'Trust is a compounding asset. When your team trusts you, they: take bigger risks (innovation), surface problems earlier (cost savings), give honest feedback (quality), and go above and beyond during crises (resilience). Trust is built in drops and lost in buckets. Every broken promise, every thrown-under-the-bus moment, every credit stolen — destroys trust capital that took months to build.', [
                    d('Trust Deposits', 'Following through on commitments, giving credit publicly, taking blame privately.', 'Each deposit is small but compounds'),
                    d('Trust Withdrawals', 'Breaking promises, stealing credit, blaming team members publicly.', 'One withdrawal can erase months of deposits'),
                    d('Trust Audit', 'Ask yourself: would my team voluntarily follow me to my next company?', 'If the answer is no, your trust account is depleted')
                ], 'Run a trust audit on yourself. List your last 5 significant interactions with your team. Were they deposits or withdrawals?'),
                l('Lesson 3: Measuring Leader Effectiveness', 'The leader\'s output IS the team\'s output. Your personal productivity is irrelevant. Measure yourself by: team velocity trend (improving or declining?), team attrition rate (are people staying?), team engagement (are people growing?), and team psychological safety (do people speak up?). If all four are positive, you\'re leading well.', [
                    d('Velocity Trend', 'Is team output increasing, stable, or declining quarter-over-quarter?', 'A declining trend under your leadership is your responsibility'),
                    d('Attrition Rate', 'Has anyone left your team in the last 12 months? Why?', 'Below 10% annual: healthy. Above 20%: leadership problem.'),
                    d('Growth Signal', 'Have team members been promoted or taken on larger scope under your leadership?', 'Your job is to grow people. Promotions are the proof.')
                ], 'Score yourself on the 4 leader effectiveness metrics. Where are you strongest? Where do you need the most improvement?')
            ]
        ],
    ];

    t14Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`leadership-economics/${id}`] = m(id, title, desc, t14, takeaways, lessons);
    });
}
