import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks9Modules: Record<string, CurriculumModule> = {};

const t9 = 'Track 9  -  Engineering Leadership';

// ═══════════════════ TRACK 9: ENGINEERING LEADERSHIP ═══════════════════

tracks9Modules['engineering-leadership/9-1'] = m('9-1', 'CTO Economics', 'The distinct financial responsibilities separating a CTO from a VP of Engineering.', t9, 
    ['Map CTO board governance', 'Assess capital allocation', 'Separate R&D functions'], [
        l('The CTO vs VP of Engineering Division', 
            [
                'The CTO looks outward and forward: M&A, Board Communication, 3-year Architecture Strategy, and Evangelism. The VP of Engineering looks inward and downward: Sprint Velocity, DORA metrics, Headcount Management, and Daily Execution.',
                'A startup under 40 engineers can blend these roles. At 100+ engineers, attempting to have the same person map 3-year technology bets while simultaneously managing daily bug triage guarantees failure in both.',
                'Economically, the VP of engineering optimizes current operational capital (OpEx) to hit quarterly goals. The CTO allocates long-term capital (CapEx) to establish technical moats and Enterprise Value multipliers.'
            ],
            [
                d('Operational Chokepoint', 'The exact moment a blended CTO/VPE role paralyzes a company.', 'Usually > 50 engineers; decision making halts completely'),
                d('Enterprise Value Multiplier', 'The CTO\'s primary financial directive.', 'Proving the technology scales 10x with zero codebase rewrites')
            ],
            'Audit your engineering leadership split.',
            ['Identify the current leader (CTO/VPE). Map their calendar for the last 4 weeks.', 'If they spend >60% of their time explicitly in sprint planning, production incident triage, or mid-level 1:1s, they are functioning as a VP, and you have a vacuum at the pure CTO level.'],
            {
                question: 'What is the primary operational distinction between a CTO and a VP of Engineering in a mid-to-large technology organization?',
                options: ['The CTO writes code, the VP fires people', 'The CTO looks outward (3-year architecture, M&A strategy, board reporting) while the VP of Engineering looks inward (team velocity, metrics, daily execution)', 'The VP of Engineering handles all security and the CTO handles marketing', 'The CTO focuses on databases and the VP focuses on front-end infrastructure'],
                correctIndex: 1,
                explanation: 'A company scaling past the startup phase requires dedicated strategic leadership looking outward at the competitive technical market, while a highly capable operational leader executes internally to hit current revenue targets. Fusing both leads to catastrophic burnout.'
            }
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-2', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-2'] = m('9-2', 'Headcount Planning', 'Model the exact cost of hiring velocity, onboarding drag, and optimal IC-to-Manager ratios.', t9, 
    ['Calculate Recruiter friction', 'Manage onboarding velocity drops', 'Execute span-of-control models'], [
        l('The Onboarding Velocity Dip', 
            [
                'When you hire 5 new engineers, your team\'s output does not increase - it plummets. Every new hire requires 2-3 months of intense mentoring from your most senior, productive engineers.',
                'This "Brooks\'s Law" manifestation means a poorly timed hiring surge just before a critical product launch guarantees the launch will fail. Engineers are pulled off features to explain the codebase architecture to the new hires.',
                'Optimal headcount planning spaces out onboarding cohorts and explicitly factors a 20% velocity tax on senior engineering output for a full 90 days following a hire.'
            ],
            [
                d('Span of Control (Manager)', 'The number of direct reports one Engineering Manager handles.', 'Optimal: 5-8. Too high = breakdown of 1:1 quality'),
                d('The 90-Day Tax', 'The temporary velocity drop from senior engineers mentoring new staff.', 'A pure financial investment against future output')
            ],
            'Execute a Span-of-Control audit across your technical departments.',
            ['Count the direct reports for every Engineering Manager.', 'Any EM with > 10 reports is actively failing at long-term career development for their ICs due to impossible calendar math.', 'Force an immediate re-allocation or prompt a new EM req.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-3', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-3'] = m('9-3', 'Reorg Economics', 'Measuring the immense financial cost and velocity destruction of an engineering reorganization.', t9, 
    ['Calculate Reorg latency', 'Mitigate Conway\'s Law friction', 'Preserve team cognitive load'], [
        l('The 90-Day Reshuffle Tax', 
            [
                'An engineering "Reorg" visually shifts boxes on an org chart. Economically, it detonates team psychological safety and resets the "Forming, Storming, Norming, Performing" cycle back to zero across the entire department.',
                'During a Reorg, engineers stop writing code and spend weeks questioning their new scope, evaluating their new manager, and defending their codebase domains. A massive reorg destroys a minimum of 6 weeks of feature velocity - a multimillion-dollar soft cost.',
                'Reorgs must only be triggered when the current team topologies explicitly block Conway’s Law (the architecture strictly mandates a new communication structure). Restructuring purely "because we hired a new VP" is financial malpractice.'
            ],
            [
                d('Conway\'s Law Mandate', 'Changing team structures to directly match the desired microservice architecture.', 'The ONLY valid reason to execute a massive reorg.'),
                d('Velocity Reset', 'The immediate crash in DORA metrics following new team composition.', 'Plan for a 40% drop in deployment frequency for 30 days.')
            ],
            'Calculate the cost of your last reorganization.',
            ['Identify the duration between the reorg announcement and when team delivery normalized.', 'Multiply that duration (e.g. 6 weeks) by the combined payroll of the affected teams.', 'That is the absolute hard cost of the reorg. If it didn\'t yield a proportional increase in subsequent output, it was a failure.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-4', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-4'] = m('9-4', 'Architecture Decision Records', 'Formalizing tech strategy using ADRs to prevent cyclical engineering debates and establish decision economics.', t9, 
    ['Implement ADR workflows', 'Prevent endless architecture debates', 'Document context linearly'], [
        l('ADRs as Financial ledgers', 
            [
                'Engineers love to debate tools. Should we use GraphQL or REST? Postgres or Mongo? React or Vue? Without a system, these debates resurface every 18 months when a new tech lead is hired, resulting in expensive halfway migrations.',
                'An Architecture Decision Record (ADR) permanently ends these debates. It creates a timestamped, immutable document stating EXACTLY why a technology was chosen, what the alternatives were, and the business context at the time.',
                'When the new lead engineer arrives 2 years later and questions why the team uses GraphQL, they do not trigger a 4-week Slack debate; they simply read ADR 005. ADRs are the corporate memory of technological capital allocation.'
            ],
            [
                d('Decision Re-litigation Tax', 'The engineering hours burned globally re-debating settled architectural constraints.', 'ADRs drive this to zero'),
                d('Status: Accepted/Deprecated', 'The explicit status atop an ADR confirming whether the decision stands or is actively being unwound.', 'A map of architectural intent')
            ],
            'Generate your first 5 ADRs for the absolutely foundational pillars of your tech stack.',
            ['Draft ADR 001 for your Cloud Provider selection (AWS vs GCP vs Azure).', 'Draft ADR 002 for your Primary Database.', 'Draft ADR 003 for your Frontend Framework.', 'Draft ADR 004 for your Language/Monorepo structure.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-5', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-5'] = m('9-5', 'Engineering Culture Economics', 'Quantifying toxicity as a massive financial liability and establishing Blameless Post-Mortems.', t9, 
    ['Measure the financial cost of dread', 'Establish Blameless RCAs', 'Promote radical psychological safety'], [
        l('The Arithmetic of Toxicity', 
            [
                'A "brilliant jerk" 10x engineer does not exist. If they generate 10x the code but create an environment so toxic that 3 senior engineers (who each generate 5x) quit, the company is mathematically operating at a -5x net deficit.',
                'Tolerating abusive high-performers establishes a precedent that outputs bypass behavioral standards. The financial mechanism of this toxicity is attrition. The HR recruitment fees, onboarding delays, and domain knowledge evaporation directly zero out whatever codebase velocity the "brilliant" engineer contributed.',
                'Psychological safety - the ability for a junior engineer to tell a VP that a launch will fail without fear of retribution - is the most powerful financial defense mechanism an organization possesses against catastrophic PR and data breaches.'
            ],
            [
                d('The Escalation Threshold', 'The friction an engineer feels before reporting a critical failure to leadership.', 'In toxic cultures, they hide the failure until production burns down'),
                d('The Cost of Fear', 'The delayed reporting of incidents out of fear of being fired, massively expanding breach cleanup costs.', 'Often the primary cause of multi-million dollar regulatory fines')
            ],
            'Implement the "Blameless Post-Mortem" strictly across all incident reporting.',
            ['Ban the names of engineers from any Root Cause Analysis (RCA) document.', 'Shift 100% of the focus to the systemic failure (e.g. "Why did the system allow the human to drop the database table without a massive safety barrier?")', 'You reward the human for honesty, and you punish the system.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-6', undefined, 'live'
);

// Continuing through to 9-15
tracks9Modules['engineering-leadership/9-6'] = m('9-6', 'Technical Strategy', 'Building agile Technology Radars and ruthlessly optimizing the Build vs Buy calculus.', t9, 
    ['Assess core differentiators', 'Construct a localized Tech Radar', 'Defend vendor adoption'], [
        l('The Strategic Core', 
            [
                'An engineering org has a finite amount of innovation tokens to spend. Trying to innovate on authentication, container orchestration, logging, and your core SaaS product simultaneously results in mediocrity across the board.',
                'Build ONLY what differentiates your company. Buy everything else. If you are an AI accounting firm, building a custom billing engine is a waste of engineering capital. Buy Stripe. Focus the engineers strictly on the AI accounting models.',
                'A CTO\'s primary job is fiercely protecting the engineering team from building commodity components.'
            ],
            [
                d('Innovation Token', 'A conceptual unit of deep architectural focus.', 'You have 3 tokens. Spend them on your core moat.')
            ],
            'Audit your internal services for commodity replacements.',
            ['List every system your engineers maintain that has no direct impact on the customer value proposition.', 'If AWS, Okta, or Datadog offers a managed version of that system, map out a migration sprint and free up the engineers.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-7', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-7'] = m('9-7', 'Talent Retention Economics', 'Navigating the brutal financial mechanics of compensation modeling, vesting cliffs, and churn.', t9, 
    ['Quantify the replacement multiplier', 'Execute proactive retention', 'Model equity dilution'], [
        l('The Preemptive Raise', 
            [
                'Losing a high-performing senior engineer costs 1.5x to 2x their annual salary in sheer replacement friction and team velocity degradation.',
                'If an engineer making $160,000 gets an offer for $190,000, and you counter-offer, the trust is already permanently broken. They will leave in 6 months anyway. Retention is not reactive; it is preemptive.',
                'Giving a critical engineer an unprompted $20,000 raise at their annual review before they ever look at LinkedIn costs the company $20k immediately, but prevents a $250k systemic disruption. It is the single highest ROI investment a VPE can make.'
            ],
            [
                d('The Trust Deficit Counter-Offer', 'The statistical reality that engineers who accept counter-offers resume interviewing within months.', 'Reactionary compensation signals you were intentionally underpaying them.')
            ],
            'Identify your top flight-risk "Lynchpin" engineers immediately.'
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-8', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-8'] = m('9-8', 'Performance Management Economics', 'Deploying OKRs properly without crushing velocity, and modeling the cost of PIPs.', t9, 
    ['Align OKRs to Top-Line metrics', 'Calculate the friction of performance reviews', 'Administer technical PIPs'], [
        l('The OKR Velocity Trap', 
            [
                'Objectives and Key Results (OKRs) deployed poorly will paralyze an engineering team. If an org demands 10 OKRs per engineer, the team will spend 40% of their sprint just updating Jira and tracking spreadsheets to appease management.',
                'The purpose of an OKR is radical prioritization, not comprehensive task-tracking. Each team should have a maximum of 3 Key Results tied directly to a single top-level Engineering Objective (e.g., "Reduce API Latency by 50%").',
                'If everything is an OKR, nothing is an OKR. Focus creates velocity; tracking creates drag.'
            ],
            [
                 // Minimal definitions
            ],
            'Execute an OKR purge for the upcoming quarter.',
            ['Force every engineering squad to delete their bottom 5 tracked objectives.', 'Concentrate 100% of the team\'s focus on a maximum of 3 high-leverage technical goals that explicitly drive revenue or system stability.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-9', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-9'] = m('9-9', 'Mentorship & Growth Programs', 'The ROI of Pair Programming, IC career ladders, and separating technical growth from management tracks.', t9, 
    ['Deploy dual-track ladders', 'Cost the mentorship tax', 'Scale deep IC impact'], [
        l('The Dual-Track Career Ladder', 
            [
                'The greatest mistake in engineering leadership is forcing your best Senior Engineer to become a mediocre Engineering Manager just so they can get a pay raise. The company loses a 10x coder and gains an untrained, stressed administrator.',
                'A modern engineering org must deploy a Dual-Track Ladder. Achieving Staff Engineer or Principal Engineer (Individual Contributor roles) must carry the exact same compensation, prestige, and executive influence as achieving Director or VP of Engineering.',
                'This mathematically prevents the "Peter Principle" where engineers are promoted purely to their level of incompetence.'
            ],
            [],
            'Review your corporate salary bands across technical tracks.',
            ['Verify that your Principal Engineer compensation band natively overlaps with your Director of Engineering band.', 'If it does not, your org is financially incentivizing ICs to abandon the codebase for management.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-10', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-10'] = m('9-10', 'Distributed Team Economics', 'Modeling remote work tooling costs, the friction of asynchronous velocity, and time-zone bridging.', t9, 
    ['Cost global overlap windows', 'Optimize asynchronous documentation', 'Manage remote onboarding metrics'], [
        l('The Asynchronous Documentation Tax', 
            [
                'A fully remote engineering team distributed across India, Europe, and the US has zero overlapping working hours. If a European engineer spots a bug, and must Slack the US architect for clarification, they lose an entire 24-hour cycle waiting for the response.',
                'Remote work demands an astronomically high standard of asynchronous documentation. Architectural constraints, API schemas, and roadmap intents must be comprehensively documented upfront. If a team relies on verbal "shoulder taps," a distributed team will collapse under latency.',
                'The economic trade-off of remote work: You drastically lower office real estate and geographical payroll costs, but you explicitly pay that delta in rigorous documentation and tooling overhead.'
            ],
            [],
            'Force asynchronous communication protocols on your teams.'
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-11', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-11'] = m('9-11', 'Innovation Programs', 'Calculating the financial yield of Hackathons, Google’s 20% time, and Skunkworks labs.', t9, 
    ['Extract value from Hackathons', 'Govern 20% time', 'Transition prototypes to production'], [
        l('The Prototype to Production Multiplier', 
            [
                'A Hackathon generates a massive burst of creative energy. An engineer spends 48 hours building a brilliant AI Slack bot prototype. Executives are thrilled. Then, the prototype gets abandoned and rots.',
                'The financial reality: Building a prototype takes 1x engineering effort. Hardening that prototype for production (security audits, CI/CD pipelines, scaling architecture, monitoring) takes 10x engineering effort.',
                'Do not fund a Hackathon or a dedicated Innovation Team unless the CTO has pre-allocated the massive post-event capital required to actually ship the winning prototypes. Prototypes without production funding are just corporate theater.'
            ],
            [],
            'Review the outcomes of your last 3 internal innovation events.',
            ['Identify how many lines of code from those events actually made it into production and generated revenue.', 'If the number is zero, restructure the hackathon to focus strictly on improving internal developer tooling rather than customer-facing prototypes.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-12', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-12'] = m('9-12', 'Engineering Brand', 'The explicit hiring ROI of open-source contributions, engineering blogs, and conference sponsorships.', t9, 
    ['Quantify Employer Branding ROI', 'Execute OSS strategies', 'Drive inbound technical resumes'], [
        l('Recruiting Inbound via Engineering Blogs', 
            [
                'Netflix, Stripe, and Cloudflare attract the best engineers on Earth not just through compensation, but because their engineering blogs publicly broadcast the immense scale and complexity of the problems they are solving.',
                'An elite engineer reading a deep-dive post about how your company slashed database latency by deploying Rust is immediately drawn to your hiring pipeline without you paying a recruiter $30,000 in placement fees.',
                'An engineering blog is not a marketing expense. It is a wildly lucrative recruitment tool that slashes Customer Acquisition Cost (CAC) for highly skilled technical labor.'
            ],
            [],
            'Launch an aggressive technical evangelism sprint.',
            ['Mandate that your Lead Engineers publish one high-fidelity architectural breakdown every quarter on the company tech blog.', 'Do not let the marketing team water it down. Make it deeply technical, complete with code snippets and metrics.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-13', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-13'] = m('9-13', 'Exec Communication', 'The SCR framework for translating database outages into Board of Directors risk read-outs.', t9, 
    ['Remove technical jargon for Execs', 'Map dependencies visually', 'Deploy the SCR narrative'], [
        l('The SCR Framework (Situation, Complication, Resolution)', 
            [
                'When reporting a critical production outage to the Board, diving into Kafka partition failures and memory leaks creates panic and confusion. The Board needs financial context, not stack traces.',
                'Use SCR: Situation ("We handle $5M in transactions daily"), Complication ("The billing database went offline for 4 hours, delaying $800k in processing"), Resolution ("Traffic is re-routed, no data was lost, and the delayed $800k will be reconciled by Monday. We are investing $50k in active-active redundancy to prevent a recurrence").',
                'This frames the engineer lead not as a panicked mechanic, but as an executive operator managing enterprise risk.'
            ],
            [],
            'Refactor your next incident post-mortem executive summary using the 3-paragraph SCR framework.'
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-14', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-14'] = m('9-14', 'Engineering M&A', 'Leading technical due diligence on acquisitions, merging codebases, and migrating acquired talent.', t9, 
    ['Audit target architectures safely', 'Model technical debt in acquisitions', 'Integrate disparate cultures'], [
        l('The M&A Debt Discovery', 
            [
                'When acquiring a competitor, the financial team audits the books, but the CTO must audit the architecture. If the acquired company reached profitability by racking up catastrophic technical debt, the acquisition price is fundamentally flawed. You are buying a bomb.',
                'Technical Due Diligence must uncover the "Remediation Cost." If the target company has no automated testing, hardcoded security keys, and a monolithic database, you must subtract the millions it will cost to integrate them into your stack from the final acquisition offer price.',
                'Never agree to run the acquired code natively indefinitely. You must price in a 12-to-24 month deprecation and migration into your master SaaS platform.'
            ],
            [],
            'Implement a Technical Due Diligence checklist for your corp-dev team.',
            ['Force an upfront audit of the target\'s SDLC (Software Development Life Cycle). Request test coverage reports, commit frequency, and a full architecture diagram before the LOI is signed.']
        )
    ], '/vault/curriculum/tracks/engineering-leadership/9-15', undefined, 'live'
);

tracks9Modules['engineering-leadership/9-15'] = m('9-15', 'Leadership Economics Synthesis', 'The master framework for combining Headcount, Architecture, and M&A into a 3-Year CTO Capital Roadmap.', t9, 
    ['Present the CTO Dashboard', 'Align technical bets with market movement', 'Scale engineering via economics'], [
        l('The CTO Dashboard & Capital Cycle', 
            [
                'The culmination of Engineering Leadership is translating human capital, code complexity, and infrastructure OPEX into a singularly coherent CTO Dashboard.',
                'The board evaluates you sequentially: Does the org hit its quarterly sprint targets? (Velocity). Are outages and security breaches minimized? (Risk). Does the infrastructure cost scale sub-linearly with revenue growth? (Margin).',
                'If you master these three vectors, the board will fund your 3-year strategic architectural bets. If you fail the short-term OPEX management, you will never be granted the long-term CAPEX to transform the company.'
            ],
            [],
            'Compile your Master CTO Scorecard for the CEO reporting directly on Velocity, Risk, and Margin across a sliding 12-month window.'
        )
    ], undefined, undefined, 'live'
);
