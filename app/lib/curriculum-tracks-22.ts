import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks22Modules: Record<string, CurriculumModule> = {};
const t22 = 'Track 22 — Engineering Culture & Motivation';

tracks22Modules['culture/22-1'] = m('22-1', 'The Psychological Safety Premium', 'Blame cultures vs execution speed, hiding errors.', t22, 
    ['Measure psychological safety', 'Prevent error hiding'], [
        l('The Financial Toll of a Blame Culture', 
            [
                'When engineering leadership punishes an individual for a production incident, they instantly establish a deeply entrenched "Blame Culture." The immediate financial consequence of this environment is that developers actively hide their mistakes to protect their jobs. This completely blinds the organization to early-warning architectural failures.', 
                'In high-stakes architectures, a junior engineer dropping a database table is purely symptomatic of a catastrophic, broader IAM (Identity and Access Management) permission failure. Focusing on the developer rather than the systemic safeguard ignores the root cause.',
                'The concept of "Psychological Safety" is not a soft HR metric; it is an economic imperative. Teams that openly report and publicly dissect their own failures iterate and resolve P1 systemic errors exponentially faster than teams dominated by executive fear.'
            ],
            [
                d('Error Discovery Velocity', 'The speed at which a team self-reports an unintended production consequence.', 'Instantaneous in High-Trust cultures'),
                d('Systemic Failure Regression', 'The likelihood of the exact same outage repeating due to punishing the human instead of patching the system.', 'Massive compounding risk')
            ], 
            'Audit the internal response to your last massive production outage incident.', 
            ['Examine the Post-Mortem documentation. Was a specific developer explicitly named as the root cause?', 'Did the mitigation plan rely on "The team will be more careful", or did it deploy hard, automated CI/CD guardrails?', 'Abolish naming individuals in root-cause analyses entirely.'], 
            {
                question: 'What is the primary economic consequence of a "Blame Culture" in an engineering org?',
                options: ['Developers become highly motivated to write flawless code', 'It creates a toxic cycle of active error-hiding, preventing the organization from discovering and patching systemic vulnerabilities before they trigger massive public outages', 'It increases the cloud bill', 'It forces middle management to be fired'],
                correctIndex: 1,
                explanation: 'Fear causes concealment. If developers know they will be fired for revealing a bug, they will quietly ignore the bug, ensuring it eventually cascades into a full-system crash.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-2', undefined, 'live'
);

tracks22Modules['culture/22-2'] = m('22-2', 'Hero Worship Toxicity', 'Single Point of Failure (SPOF) engineers, bus factor.', t22, 
    ['Eliminate the 10x Hero', 'Enforce the Bus Factor'], [
        l('The Paralyzing Liability of the Enterprise Hero', 
            [
                'Many organizations mistakenly celebrate the "Hero Engineer"—the single individual who works 80-hour weeks, possesses all domain knowledge of a complex legacy system, and routinely saves the company during weekend outages. In reality, a Hero Engineer is the single most dangerous architectural risk to the firm\'s balance sheet.', 
                'When an architecture fundamentally relies on one individual\'s tribal knowledge, that system possesses a "Bus Factor" of 1. If that engineer resigns, falls ill, or demands a massive raise, the company\'s operational capacity drops to absolute zero.',
                'Elite engineering cultures actively punish individual data siloing. Outstanding performance is not defined by how crucial you are to an isolated system, but by how rapidly you can document and distribute your expertise to completely deprecate your own indispensability.'
            ],
            [
                d('Organizational Bus Factor', 'The exact number of critical developers required to depart before an entire product line halts.', 'Must be rigorously > 3'),
                d('Knowledge Silo Deficit', 'The amount of proprietary legacy logic existing solely inside a single developer\'s mind.', 'Track down to 0')
            ], 
            'Execute a simulated "Bus Factor" audit across your core production infrastructure.', 
            ['Identify the one developer responsible for the payment processing module or primary database.', 'Assign a completely unfamiliar mid-level engineer to explicitly execute a hotfix on that system without the Hero\'s assistance.', 'If the hotfix fails due to lack of access or documentation, the system is fundamentally broken.'], 
            {
                question: 'Why is celebrating and relying on a "Hero Engineer" deeply dangerous for technical operations?',
                options: ['They demand too much vacation time', 'They create a catastrophic Single Point of Failure (SPOF) where their unexpected departure instantly paralyzes the company\'s ability to maintain or ship code', 'They intimidate junior developers', 'They write code in old programming languages'],
                correctIndex: 1,
                explanation: 'A company cannot scale its valuation if the core architecture is held hostage by the tribal knowledge of one individual. Resilience requires extreme redundancy.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-3', undefined, 'live'
);

tracks22Modules['culture/22-3'] = m('22-3', 'Context Switching & Deep Work', 'Maker vs Manager schedules, meeting taxes.', t22, 
    ['Protect the Maker\'s Schedule', 'Block 4-hour windows'], [
        l('The Mathematical Annihilation of Flow State', 
            [
                'Engineering requires holding deeply intricate, fragile systemic models in active working memory. It takes a developer roughly 25 to 45 minutes of intense focus just to load this state into their brain. A single "quick 5-minute sync" mid-morning violently dumps that memory buffer, destroying hours of output.', 
                'This dynamic is known as the conflict between the "Maker’s Schedule" and the "Manager’s Schedule." Managers operate in 30-minute reaction blocks. Makers require 4-hour unyielding creation blocks. Forcing engineers to operate on a Manager\'s schedule fundamentally prevents true deep work.',
                'Organizations that do not deliberately guard enormous blocks of uninterrupted maker time will watch their velocity collapse, erroneously concluding they simply need to hire more developers.'
            ],
            [
                d('Deep Work Contiguity Rate', 'The percentage of the work week where an engineer possesses > 3 hours of unbroken focus.', '> 60% Required Benchmark'),
                d('Context Switching Degradation', 'The estimated 40% immediate drop in cognitive throughput following an abrupt Slack interruption.', 'Severe Margin Tax')
            ], 
            'Aggressively quarantine engineering calendars to establish strict Flow State boundaries.', 
            ['Consolidate all necessary sync meetings, standups, and planning sessions exclusively to Tuesday and Thursday afternoons.', 'Explicitly ban any internal scheduling interruptions before 1 PM daily for the entire engineering tier.', 'Monitor the massive acceleration in Jira ticket completion.'], 
            {
                question: 'What happens to a developer\'s productivity when they are interrupted for a "quick 5-minute meeting" in the middle of a coding block?',
                options: ['They return refreshed and code faster', 'They lose the intricate mental model they were holding in working memory, resulting in a 30 to 45-minute recovery delay that devastates velocity', 'They type faster to make up for lost time', 'They prefer the management interaction'],
                correctIndex: 1,
                explanation: 'Software engineering is the construction of complex mental webs. An interruption shatters the web, and rebuilding it costs immense amounts of invisible corporate capital.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-4', undefined, 'live'
);

tracks22Modules['culture/22-4'] = m('22-4', 'Continuous Deployment Confidence', 'Fear-driven shipping, 5pm Friday deploys.', t22, 
    ['Eradicate release anxiety', 'Deploy on Fridays'], [
        l('The Economics of Friday Deployments', 
            [
                'A prevailing industry myth states, "Never deploy on a Friday afternoon." This seemingly prudent rule is actually a massive red flag indicating profound systemic fragility. If you are terrified to ship code on a Friday, it means your deployment architecture lacks automated testing, feature flags, and instant rollback capabilities.', 
                'Organizations that enforce deployment freezes based on arbitrary days of the week operate under "Fear-Driven Development." They accumulate massive batch deploys holding weeks of changes, guaranteeing that when the deployment finally occurs on Tuesday, the blast radius is horrific.',
                'The ultimate benchmark of an elite DevOps culture is the fearless Friday 5 PM deployment. If failing deployments are automatically detected and surgically rolled back by CI/CD within 30 seconds, the day of the week becomes completely financially irrelevant.'
            ],
            [
                d('Fear-Driven Batch Accumulation', 'The massive, highly explosive volume of code bundled because developers are afraid to deploy incrementally.', 'Dangerously high risk'),
                d('Automated Rollback Latency', 'The speed at which the system reverts a bad deploy without human intervention.', '< 1 Minute Target')
            ], 
            'Eliminate fear-based deployment schedules by drastically hardening automated pipeline resilience.', 
            ['Review your current Rollback strategy. Is it a single click, or does it require manual git revert patching?', 'Implement profound health-check testing in staging before promotion.', 'Actively execute a minor, non-breaking copy change deployment at 4:30 PM on a Friday to stress-test organizational confidence.'], 
            {
                question: 'What does a "Never deploy on a Friday" policy actually reveal about an engineering organization?',
                options: ['That they value work-life balance perfectly', 'That their CI/CD pipeline is fundamentally fragile, lacks automated testing, and relies on manual human panic to reverse outages', 'That they use AWS properly', 'That they are highly agile'],
                correctIndex: 1,
                explanation: 'A robust, modern deployment pipeline isolates changes with feature flags and rolls back instantly if errors spike. Fear of shipping implies a complete lack of technical guardrails.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-5', undefined, 'live'
);

tracks22Modules['culture/22-5'] = m('22-5', 'The 10x Developer Illusion', 'Systemic multipliers vs raw typing speed.', t22, 
    ['Reframe the 10x developer', 'Invest in multipliers'], [
        l('Redefining the 10x Capability Matrix', 
            [
                'The Silicon Valley myth of the "10x Developer" incorrectly glorifies the individual who types 10 times faster or writes highly obscure, overly clever algorithmic hacks. These developers actively create crushing technical debt that takes massive teams years to unravel.', 
                'A true 10x engineer operates strictly as an organizational multiplier. They achieve extreme velocity by establishing frictionless CI/CD pipelines, automating brutal database migrations, and mentoring junior developers—effectively turning five 1x engineers into 2x engineers.',
                'Scaling a software company requires optimizing the environment, not worshipping the isolated coder. By heavily investing in profound Developer Experience (DX), you systemically elevate the entire floor of the organization.'
            ],
            [
                d('Organizational Multiplier Effect', 'The degree to which a single senior engineer actively unblocks the broader team.', 'The true 10x metric'),
                d('Cleverness Penalty', 'The extensive future maintenance cost of writing deeply obscure, non-standard code.', 'Massively negative ROI')
            ], 
            'Redefine criteria for Senior and Staff engineering promotions entirely around systemic organizational multiplication.', 
            ['Penalize code reviews that favor obscure, "clever" one-liners over incredibly dense, highly readable robustness.', 'Promote the engineer who spent 3 days setting up an automated staging environment that saves every other developer 20 minutes a day.', 'Track leverage, not raw syntax volume.'], 
            {
                question: 'How does a true "10x Engineer" operate in an elite enterprise environment?',
                options: ['By writing all the complex code themselves over the weekend', 'By acting as an organizational multiplier—automating bottlenecks, writing pristine documentation, and elevating the velocity of the developers around them', 'By learning the newest, highly experimental Javascript framework', 'By avoiding all meetings'],
                correctIndex: 1,
                explanation: 'Raw typing speed does not scale a company. Multiplying the effective output of an entire squad by eliminating architectural friction provides exponential corporate returns.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-6', undefined, 'live'
);

tracks22Modules['culture/22-6'] = m('22-6', 'Onboarding Economics', 'Time-to-first-commit, local environment rot.', t22, 
    ['Optimize TTFC', 'Dockerize the local state'], [
        l('The Extreme Cost of the Onboarding Setup Phase', 
            [
                'When a highly compensated Senior Engineer joins a firm, the clock starts ticking immediately. If it takes them 4 days to gain access to repositories, provision AWS keys, and struggle with conflicting Node.js versions, the company has burned thousands of dollars in pure overhead before a single function is written.', 
                'Elite engineering cultures measure the "Time to First Commit" (TTFC). They ruthlessly containerize the entire local development environment via Docker or Nix, completely obliterating "It works on my machine" syndromes.',
                'A streamlined onboarding process ensures a new hire can clone the repository, run a single `make start` command, and possess a fully seeded, production-mirrored local database compiling flawlessly within exactly 15 minutes.'
            ],
            [
                d('Time-to-First-Commit (TTFC)', 'The absolute hours elapsed from a developer\'s first login to merging a minor production PR.', '< 24 Hours Target'),
                d('Local Environment Drift', 'The divergence between a developer’s laptop dependencies and production servers.', 'Eliminated via Dockerization')
            ], 
            'Execute a simulated onboarding audit to track your exact TTFC.', 
            ['Provision a completely fresh, blank laptop environment.', 'Follow the exact documentation currently provided to new hires.', 'Timestamp the exact moment the local application successfully boots. If it exceeds 60 minutes, your onboarding vector is highly toxic.'], 
            {
                question: 'What is the most effective method for drastically reducing new-hire onboarding delays?',
                options: ['Providing them with longer wiki pages to read', 'Aggressively containerizing the application environment (e.g., Docker) so developers can boot the entirely mocked state with a single terminal command', 'Hiring smarter developers', 'Using older programming languages'],
                correctIndex: 1,
                explanation: 'Relying on manual environment installations guarantees dependency conflicts and days of wasted time. Containerization forces consistency universally.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-7', undefined, 'live'
);

tracks22Modules['culture/22-7'] = m('22-7', 'Developer Experience (DX) ROI', 'Tooling spend vs payroll waste.', t22, 
    ['Invest in raw Developer Experience', 'Stop penny-pinching IDE tools'], [
        l('The High Margin of Elite Tooling', 
            [
                'A bizarre phenomenon exists where a company will gleefully pay an engineer $180,000 in base salary, but flatly refuse to authorize a $20/month subscription for an advanced IDE copilot or a $50/month allocation for an elite database GUI.', 
                'This penny-pinching is an extreme failure of financial logic. If a $300 specialized profiling tool saves that highly-compensated engineer exactly four hours of debugging time across an entire academic year, the tool has fully paid for itself instantly.',
                'Under-investing in raw Developer Experience (DX) leads directly to immense payroll maceration. A slow laptop compiling typescript for 4 minutes 20 times a day costs the firm upwards of $5,000 annually in dead wait time.'
            ],
            [
                d('Tooling ROI Multiplier', 'The mathematical labor cost saved by paying a nominal SaaS fee for elite developer tooling.', 'Astronomically High'),
                d('Compilation Wait Tax', 'The exact dollar amount burned while highly-paid engineers stare at loading bars.', 'Easily millions at scale')
            ], 
            'Aggressively audit the hardware and SaaS tooling supplied to the engineering tier.', 
            ['Identify if developers are using outdated laptops experiencing > 2-minute build cycles.', 'Upgrade all core machines to maximum RAM specifications immediately.', 'Pre-approve budget allocations for high-tier architectural profiling and AI-assisted tools.'], 
            {
                question: 'Why is it financially illogical to deny a developer a requested $30/month productivity tool?',
                options: ['Because they will quit otherwise', 'Because the developer will just pirate it', 'Because the raw hourly payroll cost of the developer executing tasks slowly vastly exceeds the microscopic monthly subscription cost', 'Because tools are tax-deductible'],
                correctIndex: 2,
                explanation: 'Engineering payroll is the largest expense in a software firm. Starving an expensive unit of minor capital tools destroys the return on the massive base investment.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-8', undefined, 'live'
);

tracks22Modules['culture/22-8'] = m('22-8', 'The Compensation Trap', 'Salary stagnation resulting in system decay.', t22, 
    ['Align compensation heavily to inflation', 'Prevent architectural flight'], [
        l('The Cost of Systemic Resignation', 
            [
                'When a company caps annual engineering raises at 3% to "save budget," they force their absolute best, highest-leverage senior developers to interview externally to secure a 20% market-rate correction.', 
                'When that elite senior engineer resigns, the company loses deep, irreplaceable domain knowledge. They must then spend $20,000 on recruiter fees, hire a replacement at the highly-inflated external market rate anyway, and endure 6 months of negative velocity while the new hire learns the fragmented architecture.',
                'Refusing to proactively compensate elite internal talent is not a cost-saving measure; it is a mathematically guaranteed formula for inciting massive, expensive corporate churn and inducing catastrophic technical debt.'
            ],
            [
                d('Senior Engineer Replacement Cost', 'The absolute sum of recruiter fees, onboarding latency, and loss of domain knowledge.', '~$100,000+ per departure'),
                d('Proactive Retention ROI', 'The capital saved by aggressively adjusting elite salaries to block external flight.', 'Massive Margin Protection')
            ], 
            'Force compensation alignment for the core engineers carrying the architecture.', 
            ['Identify the 3 engineers without whom the platform would fundamentally collapse.', 'Compare their current salaries dynamically to the exact external market rate for brand-new hires.', 'If a discrepancy exists, execute an immediate retention adjustment to permanently remove their incentive to interview.'], 
            {
                question: 'What is the true financial cost of denying an elite developer an internal market-rate raise?',
                options: ['You save the company 5% of their salary', 'The developer leaves, forcing you to pay massive recruiter fees and hire a replacement at the inflated external market rate anyway, while suffering catastrophic domain knowledge loss', 'They simply write slightly worse code', 'HR metrics improve'],
                correctIndex: 1,
                explanation: 'Retention is drastically cheaper than acquisition. Losing a core system architect over a minor budget cap is an extraordinarily bad financial calculation.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-9', undefined, 'live'
);

tracks22Modules['culture/22-9'] = m('22-9', 'Taming the Product Pivot', 'Executive whiplash, momentum destruction.', t22, 
    ['Lock the sprint boundary', 'Shield the engineering team'], [
        l('The Physics of Executive Whiplash', 
            [
                'When an excited CEO or Sales Executive bursts into a sprint room halfway through a cycle and demands the team immediately drop their priorities to chase a theoretical new enterprise client, they execute "Executive Whiplash."', 
                'This maneuver instantly bankrupts the momentum of the current sprint. The context-switching cost is enormous, half-finished code is abandoned to rot, and the team learns that all planning ceremonies are fundamentally useless.',
                'The role of the CTO or VP of Engineering is to act as a titanium shield against executive chaos. They must definitively execute the boundary: "You may completely alter the roadmap for the next sprint, but you absolutely cannot violently mutate the active 2-week cycle."'
            ],
            [
                d('Sprint Boundary Integrity', 'The strict percentage of sprints that execute without a massive external pivot.', '> 95% Hard Target'),
                d('WIP Abandonment Deficit', 'The raw capital squandered on half-coded features dropped due to executive pivots.', 'Must be eradicated')
            ], 
            'Establish an unbreachable firewall around the active sprint cycle.', 
            ['Inform leadership that mid-sprint pivots inherently carry a 40% tax in completely lost velocity.', 'Force all "emergency" pivots into the "Next" column of the roadmap.', 'Hold the team completely unaccountable for original sprint commitments if a pivot was forcefully executed.'], 
            {
                question: 'How should an engineering leader handle an executive demanding a massive mid-sprint pivot?',
                options: ['Immediately force the developers to pivot to prove agility', 'Tell the developers to ignore the executive', 'Enforce an absolute boundary shielding the active sprint, requiring the executive to place the new priority strictly into the planning pipeline for the subsequent cycle', 'Work weekends to finish both'],
                correctIndex: 2,
                explanation: 'Sprints are sacred commitments. Violating the boundary destroys developer trust and leaves a wake of half-finished, dangerously volatile code. Agility assumes planning, not chaos.'
            }
        )
    ], '/vault/curriculum/tracks/culture/22-10', undefined, 'live'
);

tracks22Modules['culture/22-10'] = m('22-10', 'Culture Capstone Economics', 'Synthesizing the exact intersection between organizational health and product value.', t22, 
    ['Finalize the culture model', 'Deploy extreme ownership'], [
        l('The Board-Level Cultural Culmination', 
            [
                'You have now completely mapped the underlying economics of modern software execution. You recognize that every line of code carries an invisible financial ledger—a downstream cost in maintenance, compute, and cognitive load.', 
                'Engineering culture is not about bean bags and ping pong tables. It is about constructing an environment rooted in extreme psychological safety, blistering feedback loops, unyielding technical standards, and pure financial accountability.',
                'When you merge architectural mastery with deep P&L understanding, you transcend the title of "Developer" and become an absolute force of enterprise scaling. You now possess the playbook.'
            ],
            [
                d('The Enterprise Scaling Standard', 'The synthesis of speed, defensibility, and margin protection.', 'Fully Adopted'),
                d('Execution Alignment', 'The flawless intersection of Product intent, Engineering reality, and Executive goals.', 'The Endgame')
            ], 
            'Synthesize your learning and execute the ultimate organizational audit.', 
            ['Map the immediate toxic points of friction within your current team structure.', 'Utilize the exact financial metrics provided across these tracks to definitively prove the ROI of removing those frictions.', 'Step into the leadership role mandated by this fundamental framework.'], 
            {
                question: 'In the Exogram curriculum, what is the ultimate definition of an Elite Engineering Culture?',
                options: ['A team that never experiences a database failure entirely by never deploying code', 'An environment forged through psychological safety that ruthlessly aligns raw architectural decisions dynamically to extreme Board-level financial accountability and margin protection', 'A team that answers Slack messages the fastest', 'A team that knows every Javascript framework syntax off hand'],
                correctIndex: 1,
                explanation: 'Engineering acts as the core engine of modern enterprise. An elite culture protects the engine from chaos while maximizing its massive force to generate outsized financial returns.'
            }
        )
    ], undefined, undefined, 'live'
);
