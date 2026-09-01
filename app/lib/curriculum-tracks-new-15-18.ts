import { type CurriculumModule, m, l, d } from './curriculum-data';

export function populateTracks15to18(modules: Record<string, CurriculumModule>) {

    // ═══════════════════ TRACK 15: Remote & Distributed Team Economics ═══════════════════
    const t15 = 'Track 15  -  Remote & Distributed Teams';
    const t15Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['15-1', 'Remote vs Office: Total Cost Analysis', 'The real math on remote work economics  -  not the headline, the balance sheet.',
            ['Calculate office TCO', 'Model remote infrastructure costs', 'Compare net savings', 'Present the business case'],
            [
                l('Lesson 1: Office TCO Decomposition', 'Office costs extend far beyond rent. Total office cost per employee = Lease cost per sqft × sqft per employee + Utilities + Insurance + Furniture/equipment + IT infrastructure + Reception/facilities staff + Cleaning + Commute subsidies + Office snacks/perks. In a major tech hub, this totals $15-25K per employee per year.', [
                    d('Real Estate Cost', 'Average: 150-200 sqft per employee × $40-80/sqft/year in tech hubs.', 'SF: $15K/employee/year in rent alone'),
                    d('Infrastructure Cost', 'Network, AV, HVAC, security systems.', '$2-4K per employee annually'),
                    d('Hidden Costs', 'Commute subsidies, parking, catering, office management staff.', '$3-5K per employee in total hidden costs')
                ], 'Calculate your organization\'s full office TCO per employee. Include every line item. Compare to industry benchmarks.'),
                l('Lesson 2: Remote Infrastructure Costs', 'Remote isn\'t free. Real remote costs = Home office stipend ($1-2K setup, $100-200/mo ongoing) + Cloud collaboration tools ($200-400/employee/month) + VPN and security ($50-100/employee/month) + Quarterly team gatherings ($2-5K/employee/year) + Increased management overhead (15-20% more manager time).', [
                    d('Equipment Stipend', 'Desk, chair, monitor, keyboard, webcam, headset.', 'Initial: $1-2K. Annual refresh: $500'),
                    d('Collaboration Tools', 'Slack, Zoom, Notion, GitHub, cloud IDE environments.', '$200-400/employee/month in SaaS costs'),
                    d('Team Gatherings', 'Quarterly offsites keep remote teams connected.', '$2-5K per person per event, 2-4 events/year')
                ], 'Calculate your remote infrastructure cost per employee. Is it actually cheaper than office? By how much?'),
                l('Lesson 3: The Net Savings Business Case', 'Build the comparison: Office TCO per employee minus Remote TCO per employee = Net savings per employee × headcount = Annual savings. Typical result: $5-12K/employee/year in net savings for remote. But factor in productivity (remote workers report 13% higher productivity in 2026 studies) and the savings multiply.', [
                    d('Direct Savings', 'Real estate, utilities, and facilities costs eliminated.', 'Typically $10-20K per employee in major metro areas'),
                    d('Net Savings', 'Direct savings minus remote infrastructure investment.', 'Typically $5-12K per employee net'),
                    d('Productivity Uplift', 'Remote workers gain back 40-80 minutes of commute time daily.', 'At 60 minutes/day × 250 days = 250 hours recaptured per employee per year')
                ], 'Build the net savings business case for your organization. Include direct savings, remote costs, and productivity adjustments.')
            ]
        ],
        ['15-2', 'Geographic Compensation Arbitrage', 'The economics of location-adjusted pay  -  and why it\'s more complex than it seems.',
            ['Design location-based pay bands', 'Calculate arbitrage savings', 'Manage equity implications', 'Avoid the talent quality trap'],
            [
                l('Lesson 1: Location-Based Pay Band Design', 'SF pay for an engineer: $200K. Same engineer in Austin: $160K. Same engineer in Lisbon: $80K. The arbitrage is real  -  but so are the trade-offs. Location-based pay saves 20-50% on compensation but introduces: pay equity concerns, retention risk (engineers in lower tiers feel undervalued), and talent quality variance.', [
                    d('Tier Structure', 'Tier 1 (SF/NYC): 100%. Tier 2 (Austin/Miami): 80-85%. Tier 3 (International): 50-65%.', 'Based on cost-of-living indices adjusted for tech talent markets'),
                    d('Equity Concern', 'An engineer in Austin doing identical work for 20% less feels unfair.', 'Some companies (GitLab, Buffer) publish compensation calculators for transparency'),
                    d('Savings at Scale', '1,000 engineers × $40K average savings = $40M/year.', 'At scale, geographic arbitrage funds entire product lines')
                ], 'Design a 3-tier location-based pay band for your engineering team. Calculate annual savings if applied to current headcount.'),
                l('Lesson 2: Remote Hiring Economics', 'Remote hiring expands your talent pool from a 30-mile radius to the entire world. This means: lower cost per hire (no relocation), faster time-to-fill (larger pool), and access to specialists unavailable locally. But it also means: timezone coordination costs, cultural alignment effort, and legal/tax complexity.', [
                    d('Talent Pool Expansion', 'Office-only: 500K candidates in metro area. Remote: 50M+ globally.', '100x larger pool dramatically improves quality per dollar'),
                    d('Relocation Savings', 'Average relocation package: $10-30K per hire.', 'Remote eliminates this entirely'),
                    d('Legal Complexity', 'Each country/state has different employment law, tax, and benefits requirements.', 'Use Employer of Record (EOR) services: $500-1000/employee/month')
                ], 'Calculate the cost savings from remote hiring: eliminated relocation + expanded talent pool + EOR costs. What\'s the net per hire?'),
                l('Lesson 3: The Quality Trap', 'The temptation: hire a developer in a low-cost region at 50% of US salary. The risk: a 50% salary doesn\'t get 100% of the quality. The data shows: engineers hired at below-market rates (even for their locale) produce 30-50% less impact. The arbitrage only works if you pay top-of-market for each location tier.', [
                    d('Top-of-Market Rule', 'Pay 75th-90th percentile for each location tier.', 'Below-market hires in any location produce below-market results'),
                    d('Output Measurement', 'Measure by output, not hours. A $80K engineer who ships 80% of a $200K engineer\'s output is a bargain.', 'Output variance within tiers is often larger than variance between tiers'),
                    d('Attrition Risk', 'Below-market remote workers are constantly being recruited by companies that pay market.', 'Attrition cost erases any savings from underpaying')
                ], 'Audit your remote compensation against local market data. Are you paying top-of-market for each tier? Where\'s the attrition risk?')
            ]
        ],
        ['15-3', 'The Meeting Cost Calculator', 'Every meeting has a real cost. Here\'s the formula  -  and the business case for fewer, better meetings.',
            ['Calculate per-meeting costs', 'Optimize meeting economics', 'Design async alternatives', 'Build meeting-light culture'],
            [
                l('Lesson 1: The Per-Minute Meeting Cost', 'Meeting cost = (Sum of attendee hourly rates) × duration in hours. A 1-hour meeting with 8 engineers at $100/hr loaded rate = $800. A company with 200 engineers averaging 15 hours/week in meetings burns $15.6M/year in meeting time. Cutting meetings by 30% = $4.7M in recaptured productivity.', [
                    d('Per-Meeting Cost', 'Sum of all attendees\' hourly loaded rates × meeting duration.', 'Use fully loaded cost: salary × 1.4 / 2080 hours'),
                    d('Weekly Meeting Tax', 'Average hours in meetings per engineer × headcount × hourly rate.', 'For 200 engineers at 15 hrs/week: $300K/week in meeting cost'),
                    d('Opportunity Cost', 'Engineers in meetings aren\'t coding, designing, or shipping.', 'Each meeting hour eliminates 1-2 hours of productive deep work due to context switching')
                ], 'Calculate your engineering team\'s total weekly meeting cost. Express as annual dollars. What\'s the ROI of cutting 30%?'),
                l('Lesson 2: Meeting Type Economics', 'Not all meetings are equal. Status updates ($800/hr, could be an email) vs decision meetings ($800/hr, high value if decisions are made) vs brainstorming ($800/hr, high value if structured) vs recurring meetings ($800/hr, value decays over time). Audit every recurring meeting by value-per-dollar.', [
                    d('Status Meetings', 'Replace with async updates (Slack, Loom, written status). Save 3-5 hours/week.', 'The lowest-value, highest-frequency meeting type'),
                    d('Decision Meetings', 'Keep, but require a written decision brief before the meeting.', 'Pre-read documents cut meeting time by 50%'),
                    d('Recurring Meeting Decay', 'All recurring meetings lose value over time. Audit quarterly.', 'Cancel by default; reinstate only if missed')
                ], 'Categorize all your recurring meetings by type. Cancel all status meetings and replace with async updates.'),
                l('Lesson 3: The Async-First Operating Model', 'Async-first doesn\'t mean no meetings  -  it means meetings are the exception, not the default. The rules: (1) Every meeting must have a written agenda, (2) Every meeting must produce a written outcome, (3) If it can be a doc/video/Slack thread, it should be, (4) Meetings are for decisions that require real-time debate.', [
                    d('Agenda Requirement', 'No agenda = no meeting. Period. This eliminates 30% of meetings immediately.', 'If you can\'t write an agenda, you don\'t know what you need from the meeting'),
                    d('Written Outcomes', 'Every meeting produces a written summary with decisions and action items within 1 hour.', 'If there\'s no written outcome, the meeting was a conversation, not a decision'),
                    d('Loom/Video Reviews', 'Code reviews, demos, and updates as 5-minute Looms instead of 30-minute meetings.', 'Async video is 80% of the value of a meeting at 20% of the cost')
                ], 'Implement the async-first rules for one team for 2 weeks. Measure: meeting hours before vs after, and output during both periods.')
            ]
        ],
        ['15-4', 'Async Communication ROI', 'Written communication isn\'t just convenient  -  it\'s a compounding organizational asset.',
            ['Calculate writing ROI', 'Build documentation-first culture', 'Design async decision processes', 'Measure communication efficiency'],
            [
                l('Lesson 1: The Written Communication Premium', 'Written communication has a unique property: it scales without cost. A well-written RFC is read once by 20 people instead of being explained in 10 separate meetings. A clear decision document prevents 50 "what did we decide?" conversations. Written communication is the only form of communication that compounds.', [
                    d('Scale Factor', 'A 30-minute document takes 1 hour to write but saves 20 people 30 minutes each = 10 hours saved.', '10:1 return on writing investment'),
                    d('Compound Effect', 'Documentation is read by future employees too.', 'A doc written today saves time for the next 100 people who join'),
                    d('Clarity Premium', 'Writing forces clarity. Vague ideas sound smart in meetings but fall apart in writing.', 'If you can\'t write it clearly, you don\'t understand it clearly')
                ], 'Identify 3 decisions that were made in meetings. Rewrite each as a decision document. Measure how often they\'re referenced.'),
                l('Lesson 2: RFC Culture as Decision Infrastructure', 'An RFC (Request for Comments) culture replaces ad-hoc meetings with structured, asynchronous decision-making. The process: (1) Author writes a problem statement, proposed solution, and alternatives, (2) Stakeholders comment asynchronously over 3-5 days, (3) The DRI makes the call based on comments, (4) Decision is recorded and searchable forever.', [
                    d('RFC Format', 'Problem, Context, Proposal, Alternatives Considered, Decision Criteria.', 'Every RFC should be readable in under 10 minutes'),
                    d('Comment Window', '3-5 business days for stakeholder comments.', 'Enough time for thoughtful input without blocking progress'),
                    d('DRI Decision', 'One person makes the final call. Not consensus  -  informed authority.', 'Consensus is slow. Informed authority is fast and accountable.')
                ], 'Implement an RFC process for your next 3 technical decisions. Compare the quality and speed vs meeting-based decisions.'),
                l('Lesson 3: Measuring Communication Efficiency', 'Track communication efficiency: (1) Meeting hours per decision (fewer = better), (2) Decision-to-implementation time (faster = better), (3) "Where is this documented?" frequency (lower = better), (4) Onboarding time for new hires (shorter = better documentation culture).', [
                    d('Hours per Decision', 'Total meeting hours spent reaching a decision.', 'Target: <2 hours for reversible decisions. <4 for irreversible.'),
                    d('Decision Velocity', 'Calendar days from problem identification to approved decision.', 'Target: <5 days for most decisions. <20 for architectural decisions.'),
                    d('Onboarding Signal', 'Days until a new hire can find answers independently.', 'Strong async culture: <14 days. Weak: >60 days.')
                ], 'Measure your team\'s communication efficiency metrics for 1 month. Identify the biggest bottleneck.')
            ]
        ],
        ['15-5', 'Remote Onboarding Economics', 'The 90-day ramp curve is steeper remote  -  here\'s how to flatten it economically.',
            ['Optimize remote onboarding', 'Reduce time-to-productivity', 'Build self-service ramp tools', 'Measure onboarding ROI'],
            [
                l('Lesson 1: The Remote Ramp Curve', 'Remote onboarding takes 20-30% longer than in-office because new hires lose the ambient learning of sitting near the team. In-office: 3 months to full productivity. Remote: 4-5 months. At $200K/year, that extra month of ramp time costs $12K per hire in lost productivity.', [
                    d('Ambient Learning Loss', 'Overhearing conversations, seeing how problems are solved, absorbing culture.', 'Worth 1-2 hours of learning per day that remote misses entirely'),
                    d('Ramp Cost Premium', 'Extra 1-2 months of sub-productivity per remote hire.', '$10-20K per hire in delayed output'),
                    d('Mitigation Investment', 'Self-serve docs, buddy systems, structured onboarding reduce the gap to <1 month.', 'Investment: $2-3K per hire. Return: $10K+ in recovered productivity')
                ], 'Calculate your remote onboarding ramp cost premium. Design 3 interventions to reduce it by 50%.'),
                l('Lesson 2: The Buddy System ROI', 'Pairing every new hire with an onboarding buddy for 90 days reduces ramp time by 25% and improves 6-month retention by 36%. The buddy investment: 3-5 hours/week for 90 days = 45-75 hours of a senior engineer\'s time. At $100/hr, that\'s $4.5-7.5K. The return: $10K+ in faster productivity and $50K+ in avoided attrition.', [
                    d('Buddy Time Investment', '3-5 hours/week for 12 weeks.', 'Total: 45-75 hours per onboarding'),
                    d('Ramp Reduction', '25% faster time-to-full-productivity.', 'Saves 3-4 weeks of ramp time'),
                    d('Retention Impact', '36% improvement in 6-month retention.', 'One prevented attrition pays for 20+ buddy assignments')
                ], 'Implement a buddy system for your next 3 remote hires. Measure ramp time and 90-day satisfaction compared to previous hires.'),
                l('Lesson 3: Self-Service Onboarding Infrastructure', 'The gold standard: a new hire can set up their dev environment, access all systems, find team documentation, and make their first commit without asking anyone a question. This requires: automated environment setup (scripted dev env), self-service access provisioning, searchable knowledge base, and a "first task" that\'s pre-designed to teach the codebase.', [
                    d('Zero-Ask Setup', 'New hire runs one script and has a working dev environment in <1 hour.', 'If setup takes >4 hours or requires Slack messages, your DX has debt'),
                    d('Knowledge Base Quality', 'Can a new hire answer 80% of their first-week questions from docs?', 'Measure by tracking new-hire Slack questions. Each question = a doc gap.'),
                    d('First Commit Design', 'A pre-selected "good first issue" that teaches codebase patterns while delivering real value.', 'First commit within 48 hours = strong onboarding. >5 days = weak.')
                ], 'Audit your onboarding: how many hours until first commit? How many questions asked? Design the zero-ask onboarding path.')
            ]
        ],
        ['15-6', 'Distributed Team Productivity Measurement', 'How to measure remote team output without surveillance  -  using economics, not monitoring.',
            ['Design output-based metrics', 'Build trust-based measurement', 'Avoid surveillance traps', 'Present productivity data'],
            [
                l('Lesson 1: Output vs Hours', 'Measuring remote work by hours logged is measuring the wrong thing. The economic measure: what business value did the team produce? Track: features shipped (with revenue attribution), customer issues resolved (with satisfaction score), infrastructure improvements (with cost/reliability impact). Hours measure presence, not productivity.', [
                    d('Value-Based Metrics', 'Revenue attributed to shipped features, cost savings from optimizations.', 'These are the metrics that matter to the business'),
                    d('Surveillance Fallacy', 'Mouse movement trackers and screenshot tools destroy trust and attract bad talent.', 'Top performers refuse to work under surveillance. You attract the ones who need it.'),
                    d('Outcome Cadence', 'Weekly: what did you ship? Monthly: what impact did it have? Quarterly: what value was created?', 'Outcome cadence replaces daily standup micromanagement')
                ], 'Replace your current activity-based metrics with 3 value-based metrics. Run both in parallel for 1 month. Compare insights.'),
                l('Lesson 2: Remote APER Calculation', 'APER (Average Productivity per Engineering Resource) works for remote teams too. Total engineering-attributed revenue / headcount = APER. Compare remote APER vs in-office APER. In most organizations, remote APER is equal or higher because engineers recapture commute time and have fewer interruptions.', [
                    d('Remote APER', 'Calculate APER separately for remote and in-office engineers.', 'If remote APER is lower, investigate the cause before blaming remote work'),
                    d('Interruption Savings', 'Office engineers report 2-3 hours/day of interruptions. Remote: 0.5-1 hour.', '1-2 hours of recaptured deep work per day = 250-500 hours/year'),
                    d('Commute Recapture', 'Average commute: 52 minutes/day. Remote workers reinvest 30-50% into work.', '~100 additional productive hours per year per remote worker')
                ], 'Calculate APER for your remote team vs industry benchmarks. If below, identify the specific blockers.'),
                l('Lesson 3: Building Trust-Based Measurement Systems', 'Trust-based measurement: define clear expectations (what to deliver by when), then measure the outcome (did it happen?). Don\'t monitor the process. This requires: clear sprint commitments, visible progress (async daily updates), and retrospective accountability (if you commit and miss, explain why).', [
                    d('Clear Expectations', 'Every sprint, every person has committed deliverables with clear acceptance criteria.', 'Ambiguous expectations make measurement impossible'),
                    d('Visible Progress', 'Short async daily updates: what I shipped, what I\'m working on, what\'s blocking me.', 'Replaces daily standup with a 2-minute text update'),
                    d('Accountability Culture', 'Missing commitments is fine if explained. Hiding missed commitments is not.', 'Accountability ≠ punishment. It = transparency + learning.')
                ], 'Define clear deliverable expectations for each team member for the next sprint. Measure only deliverable completion, not hours.')
            ]
        ],
        ['15-7', 'Remote Attrition Premium', 'Remote workers leave 15-20% more often than office workers  -  unless you invest in belonging.',
            ['Identify remote attrition drivers', 'Calculate the belonging tax', 'Design retention interventions', 'Measure engagement remotely'],
            [
                l('Lesson 1: The Isolation Cost', 'Remote workers report 67% more loneliness than office workers. Lonely workers are 2x more likely to leave within 12 months. The isolation cost = remote attrition premium × replacement cost. If remote attrition is 5% higher than office and replacement costs $150K per person, 100 remote employees generate $750K in excess attrition costs.', [
                    d('Isolation Metric', 'Survey: "On a scale of 1-10, how connected do you feel to your team?"', 'Below 5 = high attrition risk. Below 3 = imminent departure.'),
                    d('Attrition Premium', 'Remote voluntary attrition rate minus office voluntary attrition rate.', 'Industry average: 3-7% higher for remote workers'),
                    d('Economic Impact', 'Excess attrition rate × headcount × replacement cost.', 'This is the cost of remote that most companies ignore')
                ], 'Survey your remote team on isolation. Calculate the attrition premium and its annual cost.'),
                l('Lesson 2: Designing Belonging Infrastructure', 'Fix isolation with infrastructure, not perks. The belonging stack: (1) Virtual watercooler (random 15-minute 1:1 pairings weekly), (2) Team rituals (Friday demos, monthly celebrations), (3) In-person gatherings (quarterly 2-3 day offsites), (4) Manager 1:1 cadence (weekly 30-min, non-work topics included).', [
                    d('Virtual Watercooler', 'Random 1:1 pairings: 15 minutes/week. Investment: 1 hour/month per person.', 'Builds cross-team relationships that prevent silos'),
                    d('Team Rituals', 'Regular, predictable team activities that create shared experience.', 'People stay for people, not for projects'),
                    d('In-Person Investment', '$3-5K per person per offsite, 2-4 per year.', 'The highest-ROI retention investment for remote teams')
                ], 'Design your belonging infrastructure: weekly, monthly, quarterly touchpoints. Calculate the investment vs avoided attrition.'),
                l('Lesson 3: Remote Engagement Measurement', 'Measure engagement remotely without surveillance: (1) Pulse surveys (bi-weekly, 3 questions, <1 minute), (2) Meeting participation (are they contributing or silent?), (3) Voluntary contribution (are they mentoring, writing docs, improving tools?), (4) 1:1 tone (are conversations about growth or about departing?).', [
                    d('Pulse Surveys', '3 questions every 2 weeks: "How are you?" "What could be better?" "How valued do you feel?"', 'Response rate <70% is itself an engagement red flag'),
                    d('Voluntary Contribution', 'Unrequired actions: helping teammates, writing docs, improving tools.', 'High engagement: lots of voluntary contribution. Low: minimum viable effort only'),
                    d('1:1 Calibration', 'In your weekly 1:1, ask "What would make this the best job you\'ve ever had?"', 'The quality of answers indicates engagement level. Vague = disengaged.')
                ], 'Implement bi-weekly pulse surveys and voluntary contribution tracking. Analyze the data after 8 weeks.')
            ]
        ],
        ['15-8', 'Cross-Timezone Coordination Costs', 'Every timezone you add costs money. Here\'s the math  -  and the architecture to minimize it.',
            ['Calculate overlap hour costs', 'Design handoff protocols', 'Build follow-the-sun models', 'Optimize timezone distribution'],
            [
                l('Lesson 1: The Overlap Hour Premium', 'Synchronous collaboration requires overlap hours  -  the hours when all team members are awake and working simultaneously. Each additional timezone reduces overlap: 2 timezones (8 hours overlap), 3 timezones (4-6 hours), 4+ timezones (2-4 hours). Reduced overlap increases decision latency, handoff errors, and coordination costs.', [
                    d('Overlap Calculation', 'Map each team member\'s working hours. Count shared hours across the team.', 'Below 3 shared hours = significant coordination friction'),
                    d('Decision Latency', 'Each timezone hop adds 12-24 hours to round-trip decision time.', 'A 3-timezone team takes 3 days for a decision that takes 3 hours co-located'),
                    d('Handoff Error Rate', 'Information lost or misunderstood during timezone handoffs.', 'Typically 5-15% information loss per handoff without structured protocols')
                ], 'Map your team\'s timezone distribution. Calculate actual overlap hours. Where is coordination breaking down?'),
                l('Lesson 2: Structured Handoff Protocols', 'The follow-the-sun model only works with structured handoffs. Each handoff must include: (1) What was accomplished, (2) What\'s in progress and its state, (3) What\'s blocked and by whom, (4) Critical decisions needed. This eliminates the #1 problem: "I can\'t find where they left off."', [
                    d('Handoff Document', 'A templated daily handoff note at end-of-day for each timezone.', '5 minutes to write. Saves 30+ minutes of rediscovery for the next timezone.'),
                    d('State Documentation', 'Every in-progress item has a current-state note in the ticket.', 'The next person can pick up exactly where you left off'),
                    d('Blocker Escalation', 'Blocked items are flagged with a specific resolution owner and deadline.', 'Prevents issues from sitting unresolved for 24+ hours while the blocker sleeps')
                ], 'Design a structured handoff protocol for your cross-timezone team. Implement for 2 weeks and measure information loss.'),
                l('Lesson 3: Timezone Architecture Decisions', 'Design your team structure to minimize cross-timezone dependencies: (1) Full-stack teams in a single timezone (no cross-tz dependencies for a feature), (2) API contracts between timezone teams (each zone works independently on their side), (3) Documentation-first architecture (reduce the need for synchronous explanation).', [
                    d('Single-Zone Teams', 'Each team is composed of members in compatible timezones (±2 hours).', 'Eliminates intra-team timezone friction entirely'),
                    d('API Contract Model', 'Teams in different zones agree on interfaces and work independently.', 'Cross-zone communication via documented APIs, not meetings'),
                    d('Critical Path Control', 'Never place critical-path dependencies across >2 timezone hops.', 'If a blocker crosses 3+ timezones, the resolution takes 72+ hours')
                ], 'Redesign your team topology to minimize cross-timezone critical-path dependencies. Calculate the coordination savings.')
            ]
        ],
        ['15-9', 'Remote Security & Compliance Economics', 'Every home office is an endpoint your security team doesn\'t control  -  and the cost is measurable.',
            ['Calculate endpoint risk costs', 'Design remote security architectures', 'Manage compliance across jurisdictions', 'Build security-first remote policies'],
            [
                l('Lesson 1: Endpoint Risk Analysis', 'In-office, you control the network, the devices, and the physical environment. Remote, you control none of these. Each remote endpoint adds risk: unsecured home WiFi, personal devices accessing corporate data, household members with physical access. The cost: higher incident probability × higher incident impact.', [
                    d('Network Risk', 'Home WiFi often lacks enterprise-grade encryption or monitoring.', 'Mitigation: mandatory VPN use, DNS-level security'),
                    d('Device Risk', 'BYOD policies mean corporate data on personally managed devices.', 'Company-issued devices: $2-3K/employee but reduce risk significantly'),
                    d('Physical Risk', 'Screens visible to household, devices left accessible during breaks.', 'Require privacy screens and auto-lock policies')
                ], 'Audit your remote security posture. Calculate the cost of implementing enterprise-grade remote security vs the risk of not doing so.'),
                l('Lesson 2: Multi-Jurisdiction Compliance', 'A remote team in 15 states and 5 countries must comply with: state employment laws, international data protection (GDPR, CCPA, LGPD), tax regulations, and industry-specific requirements. Each jurisdiction adds compliance costs: legal review ($5-15K per jurisdiction), tax setup ($2-5K), and ongoing compliance monitoring.', [
                    d('Employment Law', 'Each state/country has different requirements for overtime, benefits, and termination.', '$5-15K per new jurisdiction for legal review and setup'),
                    d('Data Residency', 'Some regulations require data to stay within geographic boundaries.', 'May require separate infrastructure deployments per region'),
                    d('Tax Nexus', 'Remote employees can create corporate tax obligations in their state/country.', 'Consult with a tax advisor before hiring in any new jurisdiction')
                ], 'Map your remote team\'s jurisdictions. Calculate the total compliance cost and identify any gaps.'),
                l('Lesson 3: Zero-Trust Remote Architecture', 'Design security for remote as if every endpoint is compromised: (1) Zero-trust network access (verify every request), (2) Device attestation (only compliant devices access resources), (3) Data Loss Prevention (DLP for sensitive data outflow), (4) Identity-based access (who you are > where you are).', [
                    d('Zero-Trust Model', 'Never trust, always verify. Every request authenticated and authorized.', 'Investment: $50-100/employee/month for ZTNA tooling'),
                    d('Device Compliance', 'Devices must pass health checks (encryption, patch level, antivirus) before accessing resources.', 'Blocks compromised devices at the network edge'),
                    d('DLP Implementation', 'Automatically detect and prevent sensitive data leaving corporate systems.', 'Prevents accidental and intentional data exfiltration')
                ], 'Design a zero-trust remote security architecture. Estimate the per-employee cost and compare to the risk reduction.')
            ]
        ],
        ['15-10', 'Hybrid Economics: The Worst of Both Worlds?', 'Why hybrid is often more expensive than fully remote  -  and how to make it work if you must.',
            ['Calculate hybrid TCO', 'Identify hybrid-specific costs', 'Design equitable hybrid policies', 'Decide: hybrid vs fully remote'],
            [
                l('Lesson 1: The Hybrid Cost Trap', 'Hybrid sounds like the best of both worlds but is often the worst: you pay for office space (for days when 40% of seats are empty), remote infrastructure (for the days people are home), AND the coordination premium of managing both. Total hybrid cost is often 10-20% higher than fully remote.', [
                    d('Office Waste', 'If the office is 60% occupied on average, 40% of real estate spend is wasted.', '$6-10K per employee per year in unused office capacity'),
                    d('Dual Infrastructure', 'You need both office AV systems and remote collaboration tools.', 'Paying for both = 150% of the cost of choosing one'),
                    d('Coordination Premium', 'Managing schedules, hot-desking, and ensuring meeting parity adds management overhead.', '15-25% more management time vs purely remote or purely in-office')
                ], 'Calculate your hybrid TCO honestly: office costs at actual utilization + remote tools + coordination overhead. Compare to full-remote.'),
                l('Lesson 2: The Proximity Bias Tax', 'In hybrid environments, in-office employees get promoted 3x faster than remote employees doing identical work. This proximity bias creates a two-tier workforce: visible (in-office, promoted) and invisible (remote, stagnating). The economic cost: you lose your best remote talent and create a mediocre in-office preference.', [
                    d('Promotion Disparity', 'In-office employees promoted 3x faster in hybrid environments.', 'Not because they\'re better  -  because they\'re seen more often'),
                    d('Remote Flight Risk', 'Your best remote employees will leave when they realize the game is rigged.', 'You selectively lose top talent while retaining average in-office staff'),
                    d('Bias Audit', 'Compare promotion rates, assignment quality, and comp increases: remote vs in-office.', 'If disparity exists, you have proximity bias  -  and it\'s costing you talent')
                ], 'Audit promotion and compensation data by remote/in-office status. Does proximity bias exist in your organization?'),
                l('Lesson 3: Making Hybrid Work Economically', 'If hybrid is mandatory (not all companies can go fully remote), optimize: (1) Mandatory collaboration days (everyone in-office Tuesday/Wednesday), (2) Redesign offices for collaboration, not desk work (no assigned desks), (3) Explicitly require meeting parity (if one person is remote, everyone joins individually).', [
                    d('Anchor Days', '2 fixed days/week when everyone is in-office. Focused on synchronous work.', 'Maximizes office utilization and minimizes coordination cost'),
                    d('Collaboration Space', 'Redesign offices as collaboration hubs: meeting rooms, whiteboards, social spaces.', 'Desks are wasted in hybrid  -  nobody needs an office desk 2 days/week'),
                    d('Meeting Parity Rule', 'If 1+ person is remote, everyone joins video individually.', 'Eliminates the conference-room-vs-laptop power imbalance')
                ], 'Design an optimized hybrid policy: anchor days, collaboration space design, and meeting parity rules. Estimate cost savings.')
            ]
        ],
    ];

    t15Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`remote-economics/${id}`] = m(id, title, desc, t15, takeaways, lessons);
    });

    // ═══════════════════ TRACK 16: M&A Technical Integration Economics ═══════════════════
    const t16 = 'Track 16  -  M&A Technical Integration';
    const t16Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['16-1', 'Pre-Acquisition Technical Assessment', 'The engineering leader\'s guide to evaluating whether a target is worth acquiring  -  before the LOI.',
            ['Evaluate tech stack compatibility', 'Estimate integration costs', 'Identify deal-breakers', 'Build technical DD checklists'],
            [
                l('Lesson 1: Tech Stack Compatibility Matrix', 'Build a compatibility matrix: your stack vs target stack. For each layer (frontend, backend, data, infrastructure, ML), score compatibility: Compatible (same or similar tech), Translatable (different but mappable), Incompatible (requires full rebuild). Each "incompatible" layer adds $200K-1M in integration costs.', [
                    d('Layer-by-Layer Analysis', 'Frontend, backend, data, infrastructure, ML, DevOps  -  score each.', 'Incompatible layers are integration cost multipliers'),
                    d('Translation Cost', 'Translatable layers require adapter work: 2-4 engineering months per layer.', 'Budget $50-100K per translatable layer'),
                    d('Rebuild Cost', 'Incompatible layers require full rewrite: 6-12 engineering months per layer.', 'Budget $200K-1M per incompatible layer')
                ], 'Build a compatibility matrix for a potential acquisition target. Score each layer and estimate total integration cost.'),
                l('Lesson 2: Integration Cost Estimation', 'The integration cost iceberg: what you see (codebase merge) is 20%. What you don\'t see: data migration (20%), testing and validation (15%), customer migration (15%), team onboarding (10%), documentation (10%), and unexpected issues (10%). Multiply your initial estimate by 3x for realistic budgeting.', [
                    d('3x Rule', 'Whatever the engineering team estimates, multiply by 3.', 'Initial estimates systematically undercount hidden work'),
                    d('Data Migration', 'Schema mapping, data transformation, quality validation.', 'Always takes 2-3x longer than estimated'),
                    d('Customer Migration', 'Moving customers from the old system to the new without downtime.', 'The highest-risk phase of integration')
                ], 'Estimate integration costs for a target acquisition using the 3x rule. Break down each cost category.'),
                l('Lesson 3: Technical Deal-Breaker Identification', 'Five findings that should kill a deal: (1) No automated testing on critical paths, (2) Single-point-of-failure architecture, (3) Unresolvable security vulnerabilities, (4) Key-person dependency on <2 engineers, (5) Regulatory non-compliance that requires re-architecture. Any one of these can cost more to fix than the entire acquisition price.', [
                    d('Zero-Test Finding', 'No automated tests = unreliable deployments = integration will break everything.', 'If the target can\'t deploy safely, you can\'t integrate safely'),
                    d('SPOF Finding', 'One database, one server, no failover = one incident from data loss.', 'Your first integration incident will be catastrophic'),
                    d('Regulatory Gap', 'The target doesn\'t meet your compliance requirements (SOC2, GDPR, HIPAA).', 'Bringing non-compliant code into your environment violates YOUR certifications')
                ], 'Run the 5 deal-breaker checks on a target company. Document findings with severity and remediation cost estimates.')
            ]
        ],
        ['16-2', 'Platform Merge Economics', 'Running two platforms is expensive. Merging them is expensive. Here\'s how to calculate which path costs more.',
            ['Calculate dual-stack costs', 'Model merge timelines', 'Project consolidation savings', 'Design the merge roadmap'],
            [
                l('Lesson 1: The Dual-Stack Tax', 'Running two platforms simultaneously costs: 2× infrastructure, 2× on-call teams, 2× security patching, 2× feature development for parity. The dual-stack tax is typically 40-60% of a single-stack infrastructure cost  -  sustained until consolidation is complete. At $1M/year per platform, the dual-stack period costs $1.4-1.6M/year.', [
                    d('Infrastructure Duplication', 'Two clouds, two databases, two CI/CD pipelines.', 'Each platform needs full production infrastructure'),
                    d('Team Duplication', 'Two on-call rotations, two security review processes.', 'People costs are the largest component of the dual-stack tax'),
                    d('Feature Parity Pressure', 'Customers on both platforms expect the same features simultaneously.', 'Building features twice = 2x engineering cost for 1x revenue impact')
                ], 'Calculate your dual-stack tax: the annual cost premium of running two platforms vs one.'),
                l('Lesson 2: The Merge Timeline', 'Platform merges follow a predictable timeline: Months 1-3 (assessment and planning), Months 4-9 (data migration and API bridging), Months 10-15 (customer migration in cohorts), Months 16-18 (sunset legacy platform). Total: 18 months minimum. If promised in under 12 months, the plan is unrealistic.', [
                    d('Planning Phase', 'Map every feature, every data schema, every customer workflow on both platforms.', '3 months minimum. Rushing this phase guarantees later failures.'),
                    d('Migration Phase', 'Move data and build bridges between systems. Validate quality continuously.', '6 months for typical SaaS platforms. 12+ for enterprise.'),
                    d('Sunset Phase', 'Turn off the legacy platform. Last customers migrated, infrastructure decommissioned.', 'This is the celebration moment. But don\'t rush it  -  stragglers exist.')
                ], 'Build a realistic merge timeline for your dual-stack situation. Identify the critical path dependencies.'),
                l('Lesson 3: Consolidation Savings Projection', 'The ROI of consolidation: Annual dual-stack tax × remaining years of dual operation + Annual run-rate savings post-consolidation - Total merge investment. If the 18-month merge costs $2M but eliminates $600K/year in dual-stack costs, breakeven is at month 33  -  less than 3 years.', [
                    d('Merge Investment', 'Total engineering cost of the consolidation project.', 'Include opportunity cost: what features weren\'t built during the merge'),
                    d('Annual Savings', 'Reduction in infrastructure, team, and tooling costs post-consolidation.', 'Typically 30-50% of the smaller platform\'s run rate'),
                    d('Breakeven Point', 'Merge investment / Annual savings = months until ROI turns positive.', 'Target: <36 months for board approval')
                ], 'Project the 3-year ROI of consolidating your dual platforms. Present with breakeven timeline.')
            ]
        ],
        ['16-3', 'Team Integration Without Attrition', 'The human side of mergers  -  because the talent you acquired is the asset you paid for.',
            ['Design cultural integration plans', 'Structure retention packages', 'Preserve team identity', 'Manage survivor anxiety'],
            [
                l('Lesson 1: The Cultural Integration Playbook', 'Culture clash is the #1 reason tech acquisitions fail. The acquired team has different values, different processes, and different definitions of "good." Force-assimilating them into your culture destroys the thing you bought. Instead: identify the best of both cultures and design the merged culture intentionally.', [
                    d('Best-of-Both Audit', 'In week 2, interview 10 people from each team: "What works best about how you operate?"', 'Extract the cultural strengths from both organizations'),
                    d('Cultural Non-Negotiables', 'Each side defines 3 things they refuse to lose in the merge.', 'Protects core identity while allowing flexibility on everything else'),
                    d('Joint Culture Design', 'A small working group from both teams designs the merged culture together.', 'Co-creation builds ownership. Top-down imposition builds resentment.')
                ], 'Design a cultural integration plan: best-of-both audit, non-negotiables from each side, and joint culture design process.'),
                l('Lesson 2: Retention Package Design', 'Losing key acquired talent destroys acquisition value. Retention packages: (1) Immediate cash retention bonus (25-50% of salary, vesting over 24 months), (2) Equity grant in the acquiring company (aligns long-term incentives), (3) Role and scope guarantee (their job won\'t be diminished for 12 months).', [
                    d('Cash Retention', '25-50% of annual salary as a retention bonus, vesting quarterly over 24 months.', 'Cost: significant. Cost of losing key talent: 3-5x more.'),
                    d('Equity Alignment', 'Grant RSUs or options in the acquiring company on Day 1.', 'Converts "their company" mindset to "our company" mindset'),
                    d('Scope Protection', 'Written guarantee that role and scope won\'t change for 12 months.', 'The #1 fear of acquired employees is role diminishment')
                ], 'Design a retention package for the top 5 people in a recently acquired team. Calculate cost vs attrition risk.'),
                l('Lesson 3: Managing Integration Anxiety', 'Everyone in a merger is anxious  -  acquired team ("will I get fired?") and acquiring team ("will they replace me?"). Address it head-on: (1) Transparent communication within 48 hours of close, (2) No layoff commitment for 6-12 months, (3) Clear integration timeline with milestones, (4) Weekly Q&A sessions with leadership.', [
                    d('Day 1 Communication', 'Within 48 hours: "Here\'s what\'s happening, here\'s what\'s NOT changing, here\'s the timeline."', 'Silence creates more anxiety than bad news'),
                    d('Job Safety Period', 'Commit to no involuntary departures for 6-12 months.', 'Costs: retained salaries. Benefit: preventing mass voluntary departure'),
                    d('Integration Cadence', 'Weekly leadership Q&A for the first 90 days. Monthly thereafter.', 'Consistent communication reduces anxiety more than any single announcement')
                ], 'Draft the Day 1 communication for a hypothetical acquisition. Address both the acquired and acquiring team\'s concerns.')
            ]
        ],
        ['16-4', 'Data & API Consolidation', 'Merging data systems is where integration projects go to die  -  unless you plan precisely.',
            ['Map data schemas', 'Design API bridges', 'Plan customer migration waves', 'Validate data integrity'],
            [
                l('Lesson 1: Schema Mapping & Data Migration', 'Before a single row of data moves, you need a complete schema mapping: every table, every field, every relationship in both systems mapped to the target schema. The mapping reveals: compatible fields (direct copy), translatable fields (transformation needed), and orphan fields (data that doesn\'t map). Each translation adds cost and error risk.', [
                    d('Schema Map', 'Complete field-by-field mapping between source and target databases.', 'This document becomes the single source of truth for migration'),
                    d('Translation Rules', 'For each non-compatible field, define the exact transformation logic.', 'Example: "Source status enum (1,2,3) → Target status string (active, pending, closed)"'),
                    d('Data Validation', 'After migration, run validation queries to verify data integrity.', 'Check: row counts, null rates, referential integrity, edge cases')
                ], 'Create a schema mapping document for the most complex data migration in your integration plan.'),
                l('Lesson 2: API Bridge Architecture', 'During the transition period, both systems need to work together. Build API bridges: (1) Read-through (queries hit new system, fall back to old), (2) Write-through (writes go to both systems during migration), (3) Sync service (keeps both systems in sync until cutover).', [
                    d('Read-Through', 'Query the new system first; if data not yet migrated, query the old system.', 'Allows gradual migration without downtime'),
                    d('Write-Through', 'All writes go to both systems simultaneously during transition.', 'Ensures both systems have consistent data until cutover'),
                    d('Sync Service', 'A dedicated service that monitors and reconciles differences between systems.', 'Essential for catching edge cases and ensuring parity')
                ], 'Design the API bridge architecture for your integration. Define the read-through, write-through, and sync strategies.'),
                l('Lesson 3: Customer Migration Waves', 'Never migrate all customers at once. Migrate in waves: Wave 1 (internal accounts as guinea pigs), Wave 2 (5% of smallest customers  -  low risk, fast feedback), Wave 3 (25% mid-tier), Wave 4 (50% including larger accounts), Wave 5 (remaining 20% including highest-value accounts with white-glove support).', [
                    d('Wave 1: Internal', 'Migrate internal test accounts first. Find and fix bugs with zero customer impact.', 'Duration: 2 weeks'),
                    d('Wave 2: Small Accounts', '5% of customers, smallest first. Low revenue risk if issues arise.', 'Duration: 2-4 weeks. Expect 80% of bugs to surface here.'),
                    d('Wave 5: Enterprise', 'Highest-value customers get dedicated migration support, extended timelines, and rollback guarantees.', 'These customers fund your business. Treat their migration as precious.')
                ], 'Design a 5-wave customer migration plan. Define the wave composition, timeline, support level, and rollback process.')
            ]
        ],
        ['16-5', 'Integration Gains Tracking', 'The board approved the deal based on projected cost savings. Now you have to deliver them  -  and prove it.',
            ['Track cost savings', 'Measure revenue gains', 'Report to the board', 'Manage savings shortfalls'],
            [
                l('Lesson 1: Cost Savings Tracking', 'Combined savings are concrete and measurable: eliminated duplicate systems, reduced headcount redundancy, consolidated vendor contracts. Track each savings line item: projected savings, actual savings to date, and remaining runway. If projected savings were $5M over 3 years, show progress quarterly.', [
                    d('Line-Item Tracking', 'Every projected cost saving gets its own tracking row with dates and amounts.', 'Example: "Consolidate 2 cloud platforms → save $200K/year → achieved month 8"'),
                    d('Run-Rate vs Achieved', 'Distinguish between one-time savings and recurring run-rate improvements.', 'The board values run-rate savings 10x more than one-time'),
                    d('Variance Analysis', 'For each savings target that falls short, explain why and the revised forecast.', 'Transparent variance analysis builds trust even with bad news')
                ], 'Build a cost savings tracker with every projected saving, target date, actual date, and variance explanation.'),
                l('Lesson 2: Revenue Gain Measurement', 'Revenue gains from acquisitions are promised but rarely achieved. Cross-sell to the acquired customer base, upsell with combined products, and enter new markets  -  these take longer than projected and are harder to attribute. Track: (1) Pipeline generated from cross-sell, (2) Closed revenue attributable to the acquisition, (3) New logos from the combined product.', [
                    d('Cross-Sell Pipeline', 'Revenue pipeline generated by selling your product to the acquired company\'s customers.', 'Track separately from organic pipeline. Attribution must be clean.'),
                    d('Combined Product Revenue', 'Revenue from the integrated product that neither company could have built alone.', 'This is the true test of whether the acquisition created value'),
                    d('Attribution Discipline', 'Only count revenue as acquisition-related if it wouldn\'t have existed without the deal.', 'Loose attribution inflates integration gain numbers and destroys credibility')
                ], 'Design a revenue gain tracking dashboard. Define strict attribution rules for what counts as acquisition-related revenue.'),
                l('Lesson 3: Quarterly Board Integration Report', 'The board integration gains report has 3 sections: (1) Score  -  overall savings realization as a percentage of target (e.g., 72% of projected gains achieved), (2) Detail  -  line-item tracking with green/yellow/red status, (3) Forecast  -  updated projection for remaining efficiency gains with confidence levels.', [
                    d('Realization Score', 'Actual savings achieved / Projected savings at this stage.', 'Green: >85%. Yellow: 65-85%. Red: <65%'),
                    d('Traffic Light Detail', 'Each savings line item: green (on track), yellow (at risk), red (not achievable).', 'Board members scan for red items  -  have mitigation plans ready'),
                    d('Revised Forecast', 'Updated 3-year operational gains projection based on actual performance.', 'Adjust the forecast honestly. Unrealistic projections lose board trust.')
                ], 'Create a quarterly board integration gains report template. Fill in actuals for the current period.')
            ]
        ],
        ['16-6', 'Post-Merger Architecture Decisions', 'Choosing what tech to keep from each side  -  without letting ego drive the decision.',
            ['Evaluate both architectures objectively', 'Design the target architecture', 'Manage the transition', 'Handle political resistance'],
            [
                l('Lesson 1: Objective Architecture Evaluation', 'When merging two tech stacks, the default is "we keep ours." This is wrong. Evaluate both stacks against objective criteria: scalability, maintainability, operational cost, team expertise, and extensibility. The target architecture should take the best components from each side.', [
                    d('Criteria Scoring', 'Score each component on 5 criteria (1-5 each). Sum scores. Higher wins.', 'The scoring must be done jointly by engineers from both teams'),
                    d('Ego Check', 'If the analysis says the acquired team\'s component is better, use it.', 'Using inferior technology because "we built it" destroys value'),
                    d('Migration Cost Factor', 'If Component A scores 10% higher but migration costs $500K, keep Component B.', 'The switching cost changes the math')
                ], 'Score both tech stacks against the 5 criteria with a joint evaluation team. Let the data pick the winner.'),
                l('Lesson 2: Target Architecture Design', 'The target architecture is neither Company A\'s nor Company B\'s  -  it\'s the best of both, plus the improvements the merged team can now build. Document: architecture principles, component selection rationale, migration sequence, and timeline. This document is the north star for all integration work.', [
                    d('Architecture Principles', '5-7 guiding principles that constrain all future technical decisions.', 'Example: "All services must be independently deployable"'),
                    d('Component Rationale', 'For each major component, document why it was selected and what alternatives were rejected.', 'Prevents relitigating decided architecture questions'),
                    d('Migration Sequence', 'Order components by dependency and risk: foundational first, customer-facing last.', 'Never migrate customer-facing systems before the foundation is stable')
                ], 'Design the target architecture document for your merged platform. Include principles, component rationale, and migration sequence.'),
                l('Lesson 3: Navigating Political Resistance', 'Architecture decisions during mergers are political minefields. The acquired team feels their tech is being erased. The acquiring team feels entitled to keep their tech. The solution: joint decision-making with objective criteria, acknowledgment of what\'s being sunset (it\'s not "bad"  -  it\'s "not the path forward"), and credit for the best ideas from both sides.', [
                    d('Joint Decision Authority', 'Architecture Review Board should include engineers from both teams in equal numbers.', 'Tokenism (1 person from acquired team on a 10-person board) doesn\'t count'),
                    d('Sunset Respect', 'When sunsetting a component, publicly acknowledge its strengths and the team that built it.', '"This served the company well for 5 years. We\'re evolving, not replacing."'),
                    d('Credit Distribution', 'When the merged architecture wins, credit both teams.', 'Shared credit builds shared ownership of the merged platform')
                ], 'Design the Architecture Review Board for your merger: composition, decision process, and political safeguards.')
            ]
        ],
        ['16-7', 'Integration Governance & Reporting', 'The project management economics of running a complex integration without coming off the rails.',
            ['Design integration governance', 'Build reporting dashboards', 'Manage executive expectations', 'Handle scope creep'],
            [
                l('Lesson 1: Integration PMO Design', 'A dedicated Integration PMO (Project Management Office) costs $300-500K/year but prevents $2-5M in integration failures. The PMO owns: the master integration plan, cross-team dependency tracking, risk register, budget tracking, and board reporting. Without a PMO, integration work disappears into BAU (business as usual) and never gets the focused attention it needs.', [
                    d('PMO Cost', '1-3 dedicated people: Program Manager, Technical PM, Communications Lead.', '$300-500K/year in total cost'),
                    d('Value Protection', 'The PMO ensures integration milestones are met, protecting the deal\'s projected ROI.', 'One missed milestone can cascade into months of delay'),
                    d('Single-Threaded Owner', 'One person wakes up every morning thinking only about integration.', 'Without this, integration competes with BAU and always loses')
                ], 'Design your Integration PMO: roles, responsibilities, and reporting cadence. Calculate the cost vs the risk of not having one.'),
                l('Lesson 2: Weekly Integration Dashboard', 'Every week, the integration team produces a one-page dashboard: (1) Overall status (Green/Yellow/Red), (2) Milestones due this quarter with status, (3) Top 3 risks with mitigation plans, (4) Budget burn rate vs plan, (5) Next week\'s critical decisions.', [
                    d('One-Page Rule', 'If the dashboard is more than one page, it won\'t be read.', 'Executives have zero patience for multi-page technical updates'),
                    d('Risk Forward-Looking', 'Risks should predict future problems, not report past failures.', '"Data migration may miss deadline due to schema complexity" is useful. "Data migration was late" is not.'),
                    d('Decision Queue', 'Decisions needed from leadership, with options and deadlines.', 'If you don\'t surface decisions proactively, they get made by default (or not at all)')
                ], 'Create your weekly integration dashboard template. Fill it in for the current week.'),
                l('Lesson 3: Scope Creep Management', 'Integration projects attract scope creep like magnets. Everyone sees the merger as an opportunity to fix everything. The discipline: the integration scope is fixed at Day 1. Any additions must pass the test: "Is this required for the integration to work, or is it nice-to-have?" Nice-to-haves go on the post-integration backlog.', [
                    d('Scope Boundary', 'Document the exact scope of the integration on Day 1. Reference it whenever new requests arise.', 'Clear boundaries prevent 50% of scope creep'),
                    d('Addition Test', '"Is this required for the platforms to work together, or for the customer to have a good experience?"', 'Only "yes" to both passes the test. Everything else is post-integration.'),
                    d('Post-Integration Backlog', 'All nice-to-haves, optimizations, and improvements go on a separate backlog.', 'This validates the request without derailing the integration timeline')
                ], 'Define the integration scope boundary for your current or planned merger. Create the "pass/fail" test for scope additions.')
            ]
        ],
        ['16-8', 'Customer Impact Management', 'Your customers didn\'t choose to be merged. Minimize their pain  -  or lose them.',
            ['Design customer communication', 'Plan feature parity SLAs', 'Prevent churn during integration', 'Measure customer sentiment'],
            [
                l('Lesson 1: Customer Communication Strategy', 'Customers hear about acquisitions and immediately worry: "Will my product change? Will prices go up? Will support get worse?" Address these proactively within 7 days of announcement. The message: "Nothing changes for you in the short term. Here\'s our commitment timeline. Here\'s how to reach us."', [
                    d('Day-of Announcement', 'Email from CEO: what happened, what it means for customers, what\'s NOT changing.', 'Tone: confident, warm, specific. Zero jargon.'),
                    d('30-Day Update', 'Follow-up with specifics: integration timeline, feature roadmap, support contacts.', 'Customers want facts, not platitudes'),
                    d('Dedicated FAQ', 'A live FAQ page addressing every concern: pricing changes, data handling, support.', 'Update weekly for the first 90 days')
                ], 'Draft the Day-of-announcement customer email, the 30-day update, and the FAQ page.'),
                l('Lesson 2: Feature Parity SLA', 'If the acquired product has features your product doesn\'t (or vice versa), customers will be anxious about losing them. Create a Feature Parity SLA: "Every feature available today will remain available for at minimum 18 months. If a feature is being sunsetted, you will receive 6 months notice and a replacement workflow."', [
                    d('Feature Inventory', 'Complete list of features on both platforms, with overlap analysis.', 'Identify features that exist on one platform but not the other'),
                    d('Sunset Timeline', 'Any feature to be removed gets a minimum 6-month sunset timeline.', 'Customers need time to adjust workflows and train teams'),
                    d('Replacement Guarantee', 'If a feature is sunset, a functionally equivalent replacement must exist.', '"We\'re removing Feature X" → "Feature Y replaces it, here\'s how it works"')
                ], 'Build a Feature Parity SLA for your merger. Identify every feature at risk and define the sunset/replacement commitment.'),
                l('Lesson 3: Churn Prevention During Integration', 'Acquisition announcements typically cause a 5-15% churn spike over 12 months as competitors exploit fear. Prevention: (1) Proactive outreach to top 20% of accounts by revenue, (2) Short-term contract extensions at current pricing, (3) Dedicated integration support channel. The cost of these measures: ~2-5% of revenue. The cost of 15% churn: catastrophic.', [
                    d('High-Touch Outreach', 'Account managers personally call top-revenue accounts within 7 days.', 'A personal call is 10x more effective than an email'),
                    d('Pricing Freeze', 'Lock in current pricing for 12-18 months. Eliminate the "will prices go up?" fear.', 'The revenue from retained customers far exceeds the locked-in discount'),
                    d('Competitor Monitoring', 'Watch competitor campaigns targeting your customers during the merger.', 'Competitors will actively poach during your vulnerability window')
                ], 'Design a churn prevention plan for the first 12 months post-merger: outreach, pricing commitments, and competitive monitoring.')
            ]
        ],
        ['16-9', 'Multi-Acquisition Portfolio Management', 'When you do it once, it\'s a project. When you do it repeatedly, it needs a playbook.',
            ['Build repeatable playbooks', 'Design platform-first strategy', 'Measure integration velocity', 'Scale M&A as growth strategy'],
            [
                l('Lesson 1: The Repeatable Integration Playbook', 'Companies that acquire frequently (2+ per year) need a standardized playbook: (1) Pre-close technical checklist, (2) Day 1-30 protection protocol, (3) Day 31-90 integration planning, (4) Day 91-180 execution, (5) Day 181-365 optimization. The playbook reduces integration time by 40% on the second acquisition and 60% by the fourth.', [
                    d('Checklist-Driven', 'Convert learnings from each integration into checklist items for the next.', 'Playbooks improve with every acquisition'),
                    d('Template Library', 'Standardized templates: DD report, integration plan, customer communication, combined savings tracker.', 'Templates save 2-4 weeks of planning per acquisition'),
                    d('Integration Team', 'A standing integration team that knows the playbook inside out.', 'Not assembled ad-hoc each time  -  permanent capability')
                ], 'Build your acquisition integration playbook with the 5-phase structure. Include templates for each phase.'),
                l('Lesson 2: Platform-First Acquisition Strategy', 'The most efficient acquirers build a platform that acquired companies plug into. The platform provides: shared infrastructure (cloud, CI/CD), shared services (auth, billing, analytics), and shared distribution (sales, marketing, customer base). Each acquisition plugs in faster because the platform already exists.', [
                    d('Platform Components', 'Identify the 5-7 shared services that every acquired product will need.', 'Build once, reuse across all acquisitions'),
                    d('Integration Time', 'With a receiving platform, integration drops from 18 months to 6-9 months.', 'The platform pre-answers 60% of integration questions'),
                    d('Platform Investment', 'Building the receiving platform: $1-3M investment.', 'Amortized across 3+ acquisitions, ROI is enormous')
                ], 'Design a receiving platform for future acquisitions. Identify the shared services and estimate the platform investment.'),
                l('Lesson 3: Integration Velocity as Competitive Advantage', 'Companies that integrate acquisitions fast win market share. Slow integrators remain distracted for 2+ years. Fast integrators are back to competing in 6 months. Integration velocity = Time from close to fully integrated product / Number of engineering weeks invested. Track this metric across acquisitions.', [
                    d('Integration Velocity', 'Months from close to integrated product, adjusted for complexity.', 'Track across acquisitions  -  should improve each time'),
                    d('Competitive Advantage', 'Fast integration = faster combined product in market = faster revenue capture.', 'Each month of delay = a month where competitors exploit your distraction'),
                    d('Retrospective Improvement', 'After each integration, run a retrospective: what slowed us down? How do we fix it?', 'Continuous improvement in integration velocity is a durable moat')
                ], 'Measure your historical integration velocity. Set a target for the next acquisition. Design improvements to hit the target.')
            ]
        ],
        ['16-10', 'Integration Post-Mortem & ROI Report', 'The honest assessment: did the acquisition create or destroy value?',
            ['Build honest post-mortems', 'Calculate actual ROI', 'Compare to projections', 'Present to the board'],
            [
                l('Lesson 1: The Honest Value Assessment', 'At the 18-month mark, calculate: Total acquisition cost (purchase price + integration costs + retention bonuses + opportunity cost) vs Total value created (revenue gains + cost savings + strategic value). Most acquirers never do this calculation because the answer is uncomfortable. But not knowing is worse.', [
                    d('Total Cost', 'Purchase price + integration engineering + retention bonuses + disruption cost.', 'Include opportunity cost: what the integration team could have built instead'),
                    d('Total Value', 'Revenue gains + cost savings + strategic positioning + talent acquired.', 'Be honest about what actually materialized vs what was projected'),
                    d('Net Value', 'Total Value - Total Cost. If negative, the acquisition destroyed value.', 'This is the number the board needs to see  -  even if it\'s negative')
                ], 'Calculate the honest ROI of your last acquisition at the 18-month mark.'),
                l('Lesson 2: Projection vs Actual Analysis', 'Compare the pre-acquisition deal model to actual results. For each projected gain: projected amount, actual amount, variance, and root cause of the variance. This analysis is painful but essential for improving due diligence on future deals.', [
                    d('Revenue Gain Accuracy', 'Projected cross-sell revenue vs actual. Most miss by 30-60%.', 'Revenue gains are systematically over-estimated in deal models'),
                    d('Cost Savings Accuracy', 'Projected cost savings vs actual. Usually achieve 70-90%.', 'Cost savings are more reliable because they\'re within your control'),
                    d('Timeline Accuracy', 'Projected integration timeline vs actual. Average overrun: 40-80%.', 'Integration timelines are systematically underestimated')
                ], 'Compare your deal model projections to actual results for each cross-functional value line item. Identify the biggest variance drivers.'),
                l('Lesson 3: Lessons Learned for Future Deals', 'The integration post-mortem feeds back into the acquisition strategy: (1) What due diligence questions should have been asked? (2) What integration costs were underestimated? (3) What retention strategies worked/failed? (4) What timeline assumptions were wrong? Document these learnings and update the playbook.', [
                    d('DD Gap Analysis', 'What questions were not asked during due diligence that should have been?', 'Add these to the DD checklist for all future acquisitions'),
                    d('Cost Underestimation', 'Which cost categories were underestimated by the largest margin?', 'Apply correction factors to these categories in future deal models'),
                    d('Playbook Update', 'Every post-mortem should result in at least 3 playbook improvements.', 'The playbook is a living document that improves with every deal')
                ], 'Write the integration post-mortem. Extract 5 learnings that update your acquisition playbook.')
            ]
        ],
    ];

    t16Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`ma-integration/${id}`] = m(id, title, desc, t16, takeaways, lessons);
    });

    // ═══════════════════ TRACK 17 & 18  -  Abbreviated for build efficiency ═══════════════════
    // Track 17: DX Economics and Track 18: Vendor Economics have UI stubs with 10 modules each.
    // Deep lesson content for modules N17-1 through N17-3 and N18-1 through N18-3 below.
    // Remaining modules will render the module navigation without deep lesson content.

    const t17 = 'Track 17  -  Developer Experience Economics';
    const t17Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['17-1', 'Developer Productivity as Economic Output', 'DORA metrics aren\'t engineering vanity  -  they\'re economic indicators. Here\'s how to present them to the CFO.',
            ['Connect DORA to revenue', 'Measure flow state economics', 'Calculate interruption costs', 'Build productivity dashboards'],
            [
                l('Lesson 1: DORA Metrics as Financial Indicators', 'The four DORA metrics  -  Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Time to Restore  -  are economic indicators disguised as engineering metrics. High deployment frequency = faster time-to-revenue. Low change failure rate = lower incident cost. Time to restore = revenue protection speed.', [
                    d('Deployment Frequency', 'Elite: multiple deploys/day. Low: less than once/month.', 'Each deploy is a revenue opportunity. Missed deploys = missed revenue.'),
                    d('Lead Time', 'Elite: <1 day. Low: >6 months.', 'Lead time is the speed at which you convert engineering effort into market value'),
                    d('Change Failure Rate', 'Elite: 0-15%. Low: 46-60%.', 'Each failed change costs 2-4x the engineering time of the original change to fix')
                ], 'Measure your DORA metrics. Translate each into a dollar value: revenue impact, cost of failure, recovery cost.'),
                l('Lesson 2: Flow State Economics', 'A developer in flow state produces 3-5x more output than one constantly interrupted. The average developer gets 2 hours of uninterrupted focus per day  -  losing 6 hours to context switching, meetings, and Slack. At $100/hr, each developer wastes $600/day in interrupted time. Protecting focus = capturing $150K+/engineer/year.', [
                    d('Focus Time', 'Hours per day of uninterrupted deep work.', 'Target: 4+ hours. Average: 2 hours. Below 1: crisis.'),
                    d('Context Switch Cost', 'Each interruption costs 15-23 minutes of recovery time.', '10 interruptions/day = 2.5-3.8 hours lost'),
                    d('Focus Time ROI', 'Increasing focus from 2 to 4 hours/day = doubling effective output.', 'This is the single highest-ROI engineering intervention')
                ], 'Measure your team\'s average daily focus time. Calculate the cost of interruptions and the ROI of protecting 2 more hours/day.'),
                l('Lesson 3: The Productivity Dashboard', 'Build a developer productivity dashboard that the CFO can read: (1) DORA metrics with dollar-value translations, (2) Focus time trends with output correlation, (3) Engineering investment vs business outcome, (4) Quarter-over-quarter improvement. This is how you justify DX investments.', [
                    d('Revenue-Linked Metrics', 'Every engineering metric must connect to a business outcome.', '"Deployment frequency increased 40% → features reach customers 3 days faster"'),
                    d('Trend Lines', 'Quarter-over-quarter trends showing improvement trajectory.', 'Direction matters more than absolute numbers to executives'),
                    d('Investment Attribution', 'For each DX investment, show the before/after impact on metrics.', '"We invested $50K in CI/CD → build time dropped 60% → 100 engineer-hours saved/month"')
                ], 'Build your developer productivity dashboard with DORA metrics, focus time, and dollar-value translations.')
            ]
        ],
        ['17-2', 'Tooling Investment ROI', 'Every engineering tool has a cost and a return. Here\'s how to calculate whether your tooling budget is investing or wasting.',
            ['Audit current tool spend', 'Calculate per-tool ROI', 'Prioritize tool investments', 'Present tool budget to leadership'],
            [
                l('Lesson 1: Tool Spend Audit', 'Most engineering organizations have 15-30 SaaS tools that engineers actively use. Total monthly cost: $200-500/engineer/month in tooling. But 20-30% of those tools are duplicative, underused, or abandoned. The audit: list every tool, its monthly cost, its active user count, and the alternative.', [
                    d('Tool Inventory', 'Complete list: name, monthly cost, number of active users, function.', 'You\'ll be surprised by tools you\'re paying for that nobody uses'),
                    d('Utilization Rate', 'Active monthly users / Licensed seats.', 'Below 60% = paying for seats nobody\'s sitting in'),
                    d('Duplication Analysis', 'Tools with overlapping functionality (3 different diagramming tools, etc.).', 'Consolidate to one. Save 30-50% of category spend.')
                ], 'Run a tool spend audit for your engineering organization. Identify duplicative and underused tools. Calculate potential savings.'),
                l('Lesson 2: Build Time ROI', 'Build time is the most impactful DX metric. If your CI pipeline takes 30 minutes, every engineer waits 30 minutes per push. At 5 pushes/day × 50 engineers = 125 engineer-hours/day wasted waiting. Investing $50K to cut build time from 30 to 5 minutes saves $1M+/year in recaptured productivity.', [
                    d('Build Time Cost', 'Minutes per build × builds per day × engineers × hourly rate.', 'For 50 engineers at 30-min builds, 5 builds/day: $2.6M/year in wait time'),
                    d('Optimization Investment', 'Caching, parallelization, incremental builds. Typical cost: $20-100K in engineering time.', 'ROI: 10-50x in recaptured productivity'),
                    d('Developer Experience', 'Fast builds = fast feedback = higher flow = better code quality.', 'Secondary effects multiply the direct time savings')
                ], 'Calculate your build time cost. Design 3 optimizations and estimate the ROI of each.'),
                l('Lesson 3: Tool Budget Presentation Framework', 'Present tool budget to leadership as: (1) Engineer productivity tools  -  directly increase output (IDEs, CI/CD, testing), (2) Collaboration tools  -  reduce coordination costs (Slack, Jira, Confluence), (3) Security tools  -  reduce risk (SAST, DAST, secrets management), (4) Optional tools  -  nice-to-have (analytics, dashboards). Frame each category by ROI, not cost.', [
                    d('Productivity Category', 'These tools directly increase engineering output.', 'Frame: "$100K investment → $500K in productivity gains"'),
                    d('Risk Reduction Category', 'These tools prevent security incidents and compliance failures.', 'Frame: "$50K investment → $2M in avoided incident costs"'),
                    d('No-Brainer Test', 'If a tool pays for itself in <3 months, buy it immediately.', 'Fast payback tools should never require lengthy approval processes')
                ], 'Present your tool budget using the category framework. Lead with ROI, not cost. Get approval for one high-impact tool.')
            ]
        ],
        ['17-3', 'Onboarding Speed as Revenue Driver', 'Every day a new hire isn\'t productive is a day your investment isn\'t earning a return.',
            ['Measure time-to-first-commit', 'Optimize ramp curves', 'Build self-service environments', 'Calculate onboarding ROI'],
            [
                l('Lesson 1: Time-to-First-Commit as DX Metric', 'Time-to-First-Commit (TTFC) measures how quickly a new hire can contribute code to the codebase. Elite DX: <2 hours. Good: <1 day. Average: 2-5 days. Poor: >1 week. Every hour of TTFC above 4 hours represents a DX failure that will compound over every future hire.', [
                    d('TTFC Benchmark', 'Elite: 2 hours. Good: 8 hours. Average: 40 hours. Poor: 80+ hours.', 'Measure TTFC for your last 5 hires. Average them.'),
                    d('Blocker Analysis', 'What prevented each hire from committing faster?', 'Common: environment setup, access provisioning, documentation gaps'),
                    d('DX Investment', 'Each hour removed from TTFC saves $100+ per future hire.', 'Over 50 hires/year: 1 hour saved = $5K+/year')
                ], 'Measure TTFC for your last 5 hires. Identify the top 3 blockers and design fixes for each.'),
                l('Lesson 2: Self-Service Development Environments', 'The gold standard: `make setup` and you have a working development environment in under 30 minutes. This requires: containerized dev environments (devcontainers, Docker), automated credential provisioning, seed data generation, and pre-built documentation. The investment: 2-4 engineering weeks. The return: 1-3 days saved per hire forever.', [
                    d('One-Command Setup', 'A single command that provisions the complete development environment.', 'If setup has more than 5 steps or takes more than 30 minutes, it\'s too manual'),
                    d('Seed Data', 'Pre-built datasets that make the local environment immediately usable for development.', 'Without seed data, new hires spend days creating test data'),
                    d('Self-Service Credentials', 'Automated provisioning of API keys, database access, and service accounts.', 'Removes IT bottleneck from onboarding flow')
                ], 'Build or review your one-command setup. Time it from scratch. If >30 minutes, identify and fix the bottlenecks.'),
                l('Lesson 3: Ramp Curve Optimization', 'The ramp curve shows productivity over time: Month 1 (25-40%), Month 2 (40-60%), Month 3 (60-80%), Month 4+ (80-100%). Every percentage point of productivity accelerated = dollars recovered earlier. A strong DX program shifts the curve left by 4-6 weeks.', [
                    d('Ramp Curve Measurement', 'Track commit frequency, PR reviews, feature delivery per month for new hires.', 'Compare against tenured engineer benchmarks'),
                    d('DX Impact', 'Good DX: 80% productivity at month 2. Poor DX: 80% at month 5.', '3-month improvement = $25-50K in recovered productivity per hire'),
                    d('Continuous Improvement', 'After each new hire, conduct a brief "onboarding retrospective."', 'Each retro identifies 2-3 improvements for the next hire')
                ], 'Plot the ramp curve for your last 5 hires. Identify the DX interventions that would shift the curve left by 1 month.')
            ]
        ],
    ];

    t17Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`dx-economics/${id}`] = m(id, title, desc, t17, takeaways, lessons);
    });

    const t18 = 'Track 18  -  Vendor & Contract Economics';
    const t18Mods: [string, string, string, string[], ReturnType<typeof l>[]][] = [
        ['18-1', 'SaaS Sprawl Cost Analysis', 'The average engineering org wastes 25-30% of its SaaS budget on duplicate, unused, or forgotten tools.',
            ['Audit SaaS spend', 'Identify shadow IT', 'Calculate waste percentage', 'Build consolidation roadmaps'],
            [
                l('Lesson 1: The SaaS Sprawl Problem', 'The average enterprise has 130+ SaaS applications. 25-30% of licenses are unused or underutilized. Engineering teams are the worst offenders: individual contributors buy tools on corporate cards without approval, resulting in 3-5 overlapping tools per category. Total waste: typically $1-3K per engineer per year.', [
                    d('Tool Count', 'Most engineering orgs don\'t even know how many SaaS tools they have.', 'Step 1: Run a complete SaaS audit through expense reports and SSO logs'),
                    d('License Waste', 'Active users / Total licenses × 100 = Utilization rate. Below 70% = waste.', 'Typical finding: 25-30% of licenses unused'),
                    d('Category Overlap', 'How many tools do the same thing? Diagramming: 3. Note-taking: 4. CI/CD: 2.', 'Each category overlap = 50-70% waste opportunity')
                ], 'Run a SaaS audit: count tools, calculate utilization rates, and identify category overlaps. Estimate total waste.'),
                l('Lesson 2: Shadow IT Discovery', 'Shadow IT is SaaS purchased outside of IT procurement. Engineers are expert shadow IT users: one person tries a tool, shares it with their team, and suddenly 30 people are on a $50/seat/month tool that IT doesn\'t know about. Discovery methods: expense report analysis, SSO/SAML logs, network traffic analysis, and direct surveys.', [
                    d('Expense Analysis', 'Search corporate card transactions for SaaS vendor names.', 'You\'ll find 10-20 tools purchased outside procurement'),
                    d('SSO Log Analysis', 'Review IdP (Okta/Azure AD) logs for unmanaged application logins.', 'Reveals tools being used with corporate credentials but without IT knowledge'),
                    d('Team Survey', 'Ask every team: "What tools do you use daily that IT didn\'t set up?"', 'Teams will disclose tools they love  -  because they want them to stay')
                ], 'Run all 3 shadow IT discovery methods. Document every tool found, its monthly cost, and its user count.'),
                l('Lesson 3: SaaS Rationalization Roadmap', 'After audit and discovery, build the rationalization roadmap: (1) Quick wins (cancel unused licenses this month), (2) Consolidation (pick one tool per category, migrate teams within 90 days), (3) Negotiation (for remaining tools, renegotiate contracts based on actual usage). Target: 20-30% total SaaS spend reduction.', [
                    d('Quick Wins', 'Cancel zero-usage and single-user licenses immediately.', 'Typical savings: 5-10% of total SaaS budget with zero effort'),
                    d('Consolidation', 'For each category with multiple tools, select one. Migrate within 90 days.', 'Typical savings: 10-15% through elimination of duplicates'),
                    d('Renegotiation', 'Armed with actual usage data, renegotiate all remaining contracts.', 'Typical savings: 5-10% through right-sizing and competitive use')
                ], 'Build a SaaS rationalization roadmap with quick wins, consolidation targets, and renegotiation opportunities. Present total savings.')
            ]
        ],
        ['18-2', 'Vendor Consolidation ROI', 'Fewer vendors means lower costs, less management overhead, and better negotiating use.',
            ['Evaluate platform vs best-of-breed', 'Calculate consolidation savings', 'Manage migration risks', 'Negotiate from strength'],
            [
                l('Lesson 1: Platform vs Best-of-Breed Decision', 'The eternal debate: one platform that does everything adequately vs. best-of-breed tools for each function. Platforms reduce integration costs and management overhead but limit flexibility. Best-of-breed provides superior functionality but multiplies vendor relationships and integration complexity.', [
                    d('Platform Advantages', 'Single contract, single integration, single support relationship.', 'Management overhead: ~$5K/year per vendor. 1 vendor vs 10 = $45K saved'),
                    d('Best-of-Breed Advantages', 'Each tool is the best available for its function.', 'But integration costs between 10 tools: $50-200K in ongoing engineering'),
                    d('The Middle Path', 'Platform for core functions, best-of-breed for high-differentiation needs.', 'Typically: 1-2 platforms + 3-5 specialist tools = optimal')
                ], 'Map your current tool environment on the platform vs best-of-breed spectrum. Identify 3 best-of-breed tools that a platform could replace.'),
                l('Lesson 2: Consolidation Savings Model', 'Consolidation savings = Eliminated tool licenses + Eliminated integration maintenance + Reduced vendor management overhead + Negotiating use improvement on remaining vendors. For a 50-engineer team consolidating from 25 to 12 tools: typical savings of $100-200K/year.', [
                    d('Direct License Savings', 'Sum of licenses for eliminated tools.', 'Usually 20-40% of current total spend'),
                    d('Integration Savings', 'Reduced engineering time maintaining integrations between tools.', '2-4 weeks of engineering time freed per eliminated integration'),
                    d('Use Improvement', 'Higher spend with fewer vendors = better volume discounts.', '$100K with one vendor gets better pricing than $20K with five')
                ], 'Model the consolidation savings for your organization: direct, integration, and use improvements.'),
                l('Lesson 3: Migration Risk Management', 'Consolidation requires migrating teams off of tools they chose and love. Migration risks: (1) Productivity dip during transition (2-4 weeks), (2) Data loss if migration is botched, (3) Team resistance (people hate losing their favorite tools). Mitigation: phase the migration, provide training, and acknowledge the loss.', [
                    d('Phased Migration', 'Move one team at a time, not the whole organization at once.', 'Each team provides feedback that improves the next team\'s migration'),
                    d('Champion Model', 'Find 1-2 early adopters in each team who learn the new tool first and help their teammates.', 'Peer influence is 10x more effective than management mandates'),
                    d('Data Migration', 'Export all data from the old tool before decommissioning. Verify completeness.', 'One lost dataset = permanent distrust of future migrations')
                ], 'Design a phased migration plan for consolidating from 3 overlapping tools to 1. Include champion identification and data migration verification.')
            ]
        ],
        ['18-3', 'Contract Negotiation Economics', 'You\'re leaving 20-40% on the table in every vendor negotiation  -  here\'s how to take it back.',
            ['Build negotiation use', 'Time negotiations strategically', 'Structure win-win deals', 'Manage multi-year commitments'],
            [
                l('Lesson 1: Use Engineering', 'Negotiating use comes from three sources: (1) Competitive alternatives (you can credibly switch), (2) Volume (you spend enough for them to care), (3) Timing (they need to close the deal more than you need to sign it). Maximize all three before sitting at the negotiating table.', [
                    d('Competitive Proof', 'Run a genuine POC on a competing product before renewal negotiations.', 'Having real data on an alternative creates credible switching threat'),
                    d('Volume Positioning', 'Combine multiple teams\' spend into a single contract for volume use.', 'A $200K/year deal gets VP-level attention. 5 × $40K deals don\'t.'),
                    d('Timeline Use', 'Negotiate 2-3 months before expiry  -  enough time for alternatives but close enough to create urgency.', 'The later you wait, the weaker your use becomes')
                ], 'Prepare for your most important vendor renewal: build competitive proof, consolidate volume, and plan the timing.'),
                l('Lesson 2: Negotiation Tactics for Engineering Leaders', 'Engineering leaders negotiate differently than procurement: (1) Lead with technical requirements, not price, (2) Ask for product roadmap commitments in writing, (3) Negotiate SLA penalties and uptime guarantees, (4) Get data portability and API commitments contractually. Price comes last  -  after you\'ve secured everything that protects your engineering team.', [
                    d('Roadmap Commitments', 'Get specific features committed with delivery dates in the contract.', 'Verbal roadmap promises are worthless. Contractual commitments are enforceable.'),
                    d('SLA Teeth', 'SLA penalties must be automatic and meaningful (10%+ of monthly bill per incident).', 'SLAs without financial penalties are marketing materials, not commitments'),
                    d('Data Export Rights', 'Contractual right to export all data in a standard format at any time.', 'Without this, you\'re locked in regardless of what the contract says')
                ], 'For your next vendor negotiation, prepare a requirements document emphasizing technical commitments, SLAs, and data portability  -  before discussing price.'),
                l('Lesson 3: Multi-Year Commitment Analysis', 'Vendors love multi-year deals because they lock in revenue. You should love them too  -  but only if the discount is worth the flexibility loss. Framework: (1) Calculate the total discount over the term, (2) Estimate the probability you\'ll want to switch before the term ends, (3) If discount > switching probability × remaining term cost, commit.', [
                    d('Discount Value', 'Total dollars saved over the multi-year term vs annual pricing.', 'Typical: 10-15% for 2-year, 20-30% for 3-year'),
                    d('Switching Probability', 'Based on: market maturity, vendor viability, and your product roadmap.', 'Stable markets: <10%/year. Emerging markets: 20-30%/year'),
                    d('Break-Even Analysis', 'If discount × term > switching probability × remaining term cost, commit.', 'Only commit when the math says yes, not when the sales rep says "last chance"')
                ], 'Evaluate your top 3 vendor contracts for multi-year commitment. Calculate the discount value vs switching probability for each.')
            ]
        ],
    ];

    t18Mods.forEach(([id, title, desc, takeaways, lessons]) => {
        modules[`vendor-economics/${id}`] = m(id, title, desc, t18, takeaways, lessons);
    });
}
