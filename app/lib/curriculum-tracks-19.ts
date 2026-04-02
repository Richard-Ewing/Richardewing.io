import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks19Modules: Record<string, CurriculumModule> = {};
const t19 = 'Track 19 — Agile & Delivery Economics';

tracks19Modules['agile-economics/19-1'] = m('19-1', 'Story Point Dollar Value', 'Engineering cost metrics, sprint burn rate.', t19, 
    ['Convert points to dollars', 'Calculate sprint burn rate'], [
        l('Pricing the Backlog', 
            [
                'Agile "Story Points" were invented to obfuscate time tracking, but they actively hide massive capital waste. Engineers estimate points relative to complexity, but CFOs pay payroll in absolute dollars. A purely technical abstraction shields engineering from financial accountability.', 
                'If a highly-compensated squad burns $40,000 in payroll over a 2-week sprint and delivers 40 total points, then a single "point" strictly equals $1,000 of capital outlay.',
                'Therefore, when a Product Manager drops a 5-point unvalidated "nice-to-have" feature into an active sprint, they are not assigning a minor task—they are executing a binding $5,000 corporate purchase order.'
            ],
            [
                d('Absolute Cost Per Point', 'Total Sprint Payroll Burn Rate divided by Average True Velocity.', 'Strictly Tracked Value'),
                d('Unvalidated Feature Spend', 'Capital wasted on stories built with zero prior user intent validation.', 'Aim for zero')
            ], 
            'Determine the literal dollar-value of a single Story Point for your specific squad.', 
            ['Calculate the prorated 2-week salary of every engineer, PM, and designer on the pod.', 'Divide that localized payroll by your 3-sprint rolling average point velocity.', 'Label the next Jira sprint with the exact dollar value of the commitment.'], 
            {
                question: 'What happens when engineering teams separate "story points" from financial metrics?',
                options: ['Velocity naturally increases', 'Product management requests complex features without realizing the immense capital expenditure they represent', 'Code quality improves through abstraction', 'Sprint planning goes faster'],
                correctIndex: 1,
                explanation: 'When features don\'t have a clear price tag, stakeholders demand infinite scope. Tying points to dollars forces prioritization.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-2', undefined, 'live'
);

tracks19Modules['agile-economics/19-2'] = m('19-2', 'Cost of Agile Ceremonies', 'Meeting overhead, async ROI, planning costs.', t19, 
    ['Measure the cost of a 10-person daily standup', 'Transition to Async'], [
        l('The Crushing Standup Tax', 
            [
                'A 30-minute daily standup may feel inconsequential, but scaled across 10 senior engineers over a calendar year, it destroys roughly $50,000 in unrecoverable raw payroll—excluding the infinitely higher penalty of mid-morning context switching.', 
                'Most standups devolve into unstructured status updates aimed entirely at soothing the anxiety of middle management, providing zero technical value to the actual developers.',
                'High-performance teams default to ferocious asynchronous execution. Pushing status updates to a structured, async Slack bot frees up massive blocks of deep-work flow state, yielding substantial velocity gains.'
            ],
            [
                d('Ceremony Overhead Cap', 'The percentage of a developer\'s week spent in mandated agile meetings.', '< 10% Required Target'),
                d('Context Switching Breakage', 'The estimated 25-minute recovery time induced by interrupting a coding block for a meeting.', 'Eliminate')
            ], 
            'Execute an immediate audit and cancellation of low-value synchronized ceremonies.', 
            ['Calculate the hourly rate of every member in your daily standup.', 'Convert the standup to an asynchronous Slack thread for two weeks.', 'Measure the increase in PR throughput and developer sentiment.'], 
            {
                question: 'Why are synchronous Agile standups economically dangerous for engineering teams?',
                options: ['They encourage developers to stand up, which tires them out', 'They are usually scheduled mid-morning, destroying the uninterrupted flow-state blocks necessary for deep technical work', 'Management uses them to spy on developers', 'Slack is cheaper than Zoom'],
                correctIndex: 1,
                explanation: 'Developers require 2-4 hour uninterruptible blocks to hold complex systems in mental memory. A 30-minute meeting at 10:30 AM shatters that flow state entirely.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-3', undefined, 'live'
);

tracks19Modules['agile-economics/19-3'] = m('19-3', 'Technical Debt in the Backlog', 'Shadow backlog drag, refactoring ROI.', t19, 
    ['Quantify debt ticket value', 'Stop hiding debt from PMs'], [
        l('Exposing the Shadow Backlog', 
            [
                'When Product Managers routinely reject technical debt tickets to blindly prioritize feature factories, engineers resort to a "Shadow Backlog"—refactoring systems in secret during feature work. This obliterates trust and creates highly unpredictable velocity sizing.', 
                'Technical debt must never be presented as "cleaning up." It must be positioned strictly as an insurance premium. Ignoring it creates a compounded interest penalty that eventually halts all feature velocity completely.',
                'The most elite enterprise teams enforce an absolutely rigid 20% sprint capacity allocation exclusively for structural engineering, security, and refactoring—regardless of external product demands.'
            ],
            [
                d('Structural Debt Allocation', 'The immovable percentage of sprint capacity devoted purely to non-feature technical health.', 'Strict 20% Baseline'),
                d('Velocity Drag Coefficient', 'The measurable slowdown in feature delivery caused by untreated tech debt.', 'Calculated via PDI')
            ], 
            'Force technical debt visibility into the primary stakeholder sprint horizon.', 
            ['Stop engineering in secret; explicitly ticket all deep refactoring.', 'Attach a dollar-value ROI to the debt ticket (e.g. "Prevents $10k/mo latency drop").', 'Refuse to negotiate the 20% architectural sprint allocation.'], 
            {
                question: 'What is the "Shadow Backlog"?',
                options: ['A special Jira board used by the CEO', 'The hidden work engineers do to fix tech debt in secret because PMs refuse to prioritize non-feature work', 'The features that competitors have launched', 'Tickets assigned to contractors'],
                correctIndex: 1,
                explanation: 'When engineering and product are misaligned on the value of technical health, engineers will mask vital structural repairs under inflated feature estimates, destroying velocity tracking predictability.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-4', undefined, 'live'
);

tracks19Modules['agile-economics/19-4'] = m('19-4', 'Predictability vs Velocity', 'Missed commitments risk, stakeholder trust.', t19, 
    ['Establish baseline flow metrics', 'Stop playing velocity games'], [
        l('Velocity is a Toxic Vanity Metric', 
            [
                'Tracking raw "Velocity" (total points burned) inevitably encourages point inflation. If management demands 50 points instead of 40, engineers will simply start labeling 3-point tasks as 5-point tasks. The baseline metric becomes utterly useless.', 
                'The singular metric that builds actual, sustainable Board-level trust is Predictability—often termed the "Say/Do Ratio." The goal is not to ship the maximum volume; the goal is to exactly meet the stated commitment.',
                'If an engineering team commits to 30 points and delivers 30 points for three consecutive sprints, Product Marketing can safely orchestrate million-dollar launch campaigns without fear of delays.'
            ],
            [
                d('Say/Do Ratio', 'The precise percentage of committed story points successfully pushed to production.', '> 85% Target'),
                d('Sprint Spillover Rate', 'The volume of tickets pushed into the subsequent sprint.', '< 10% Limit')
            ], 
            'Pivot stakeholder reporting entirely away from raw velocity towards rigorous predictability.', 
            ['Calculate your trailing 3-sprint Say/Do ratio.', 'If the ratio is under 80%, forcibly reduce the next sprint’s point commitment by 20%.', 'Hold the commitment line firmly against stakeholder pressure.'], 
            {
                question: 'Why does tracking raw "Velocity" inevitably fail as a management metric?',
                options: ['Velocity cannot be tracked in Jira', 'It encourages engineers to artificially inflate point estimations to quickly hit arbitrary management quotas', 'It makes developers work too hard', 'It ignores bug fixes'],
                correctIndex: 1,
                explanation: 'Goodhart\'s Law states: "When a measure becomes a target, it ceases to be a good measure." Pressuring velocity forces estimation inflation, destroying actual predictability.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-5', undefined, 'live'
);

tracks19Modules['agile-economics/19-5'] = m('19-5', 'Agile Capitalization', 'CapEx vs OpEx, balance sheet impact.', t19, 
    ['Capitalize R&D logic', 'Drive EBITDA growth through correct accounting'], [
        l('The CFO’s View of Software Capitalization', 
            [
                'Engineering teams operate in Jira, but CFOs operate in the General Ledger. The financial structure of a tech company depends deeply on classifying engineering time as either an Operating Expense (OpEx) or a Capital Expenditure (CapEx).', 
                'Developing a brand new, revenue-generating feature is classified as CapEx. It acts as an asset on the balance sheet, amortizing over years and drastically boosting EBITDA definitions. Conversely, fixing bugs or maintaining servers is pure OpEx—immediate margin destruction.',
                'If an engineering team routinely mislabels their new feature work as "maintenance" in the tracking system, they are artificially destroying the company\'s valuation multiplier.'
            ],
            [
                d('CapEx R&D Ratio', 'The percentage of squad time actively building new capitalized software assets.', '> 70% Target'),
                d('Maintenance OpEx', 'The raw expense weight of sustaining the legacy stack.', '< 30% Required')
            ], 
            'Collaborate with the Finance department to map Jira labels securely to CapEx accounting rules.', 
            ['Create strict epic-level labeling differentiating New Features vs Bug Fixes.', 'Configure automated Jira reports to output time-in-status for CapEx tags at the end of the month.', 'Ensure engineers accurately tag their logged CI/CD branches.'], 
            {
                question: 'Why is it highly advantageous for a software company to classify new feature development as CapEx?',
                options: ['Because it saves AWS cloud costs', 'Because CapEx investments act as depreciating assets on the balance sheet rather than immediate operational losses, artificially boosting reported EBITDA earnings', 'Because it allows developers to get higher bonuses', 'Because OpEx is illegal for software'],
                correctIndex: 1,
                explanation: 'Software capitalization allows a company to spread the massive upfront payroll cost of building software over its useful life, significantly improving short-term profitability metrics.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-6', undefined, 'live'
);

tracks19Modules['agile-economics/19-6'] = m('19-6', 'JIRA Misalignment Tax', 'Ticket Formatting, Missing Requirements, Spec Bouncing.', t19, 
    ['Eliminate Ping-Pong tickets', 'Standardize Acceptance Criteria'], [
        l('The Catastrophic Ping-Pong Tax', 
            [
                'When an engineer begins work on a ticket lacking rigid acceptance criteria, they are forced to actively pause, context-switch, and bounce the ticket back to the Product Manager for clarification. This destroys flow state.', 
                'Poorly written requirements inject an invisible "Ping-Pong Tax" that reliably adds a massive 20% overhead tax to total cycle time.',
                'This tax is entirely eradicated by enforcing a ruthless Definition of Ready (DoR). If a ticket hits the top of the backlog without explicitly mapped edge cases, UX links, and acceptance criteria, it is automatically rejected by the engineering lead.'
            ],
            [
                d('First-Pass Yield', 'The percentage of tickets driving from Todo to Done without bouncing backward.', '> 90% Target'),
                d('Information Asymmetry Delay', 'Hours lost waiting for PM specification responses.', 'Tracked via ticket dwell time')
            ], 
            'Implement an aggressively strict Definition of Ready (DoR) gate on all incoming user stories.', 
            ['Create a mandatory Jira Template requiring exact UX mockups and API bounds.', 'Empower the engineering lead to outright reject non-compliant tickets during grooming.', 'Measure the subsequent drop in mid-sprint Slack clarifications.'], 
            {
                question: 'What is the purpose of enforcing a Definition of Ready (DoR)?',
                options: ['To give engineers an excuse to write less code', 'To ensure no ticket enters an active sprint without complete, unambiguous requirements, preventing flow-state destruction', 'To force PMs to write the code themselves', 'To track employee hours more strictly'],
                correctIndex: 1,
                explanation: 'A rigorous DoR acts as a firewall, protecting expensive engineering capability from vague, half-baked product ideas that stall momentum.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-7', undefined, 'live'
);

tracks19Modules['agile-economics/19-7'] = m('19-7', 'Sprint Zero Economics', 'Architecture Runway, Initial Footprint, Design Overhead.', t19, 
    ['Value the runway setup', 'Avoid premature delivery demands'], [
        l('The Cost of Skipping the Runway', 
            [
                'Non-technical stakeholders frequently view "Sprint Zero" as a massive waste of capital where engineers "deliver nothing." The reality is quite the opposite.', 
                'Sprint Zero is the absolute minimum infrastructure procurement required before a skyscraper is built. Demanding UI features before the CI/CD pipeline, database schemas, and IAM security perimeters are defined ensures permanent, catastrophic architectural rot.',
                'Engineering leadership must intensely reframe Sprint Zero to the board not as a delay, but as the procurement of the non-negotiable "Architectural Runway."'
            ],
            [
                d('Architectural Runway Depth', 'The structural bounds solved ahead of feature requirements.', 'Stability Proven'),
                d('Premature Delivery Penalty', 'The exponential tech debt incurred by shipping features without scaffolding.', 'Severe Base Rot')
            ], 
            'Draft a formal, Board-level Sprint Zero manifesto for your next major greenfield deployment.', 
            ['Outline the infrastructure as code (IaC) foundations that must be locked in.', 'Attach a dollar figure to the future risk prevented by establishing early security IAM perimeters.', 'Defend the lack of UI delivery using explicit architectural metaphors.'], 
            {
                question: 'How should engineering leadership explain the value of Sprint Zero to a non-technical CEO?',
                options: ['By listing the npm packages being installed', 'By comparing it to pouring the concrete foundation and procuring the cranes necessary to safely build a skyscraper', 'By stating that developers need a two-week break to learn a new language', 'By promising that Sprint 1 will deliver double the features'],
                correctIndex: 1,
                explanation: 'CEOs understand physical construction metaphors deeply. You cannot build the penthouse suite before the foundational plumbing and electrical grids are routed.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-8', undefined, 'live'
);

tracks19Modules['agile-economics/19-8'] = m('19-8', 'CI/CD Velocity Blockers', 'Blocked PRs, Integration Failures, Review Monopolies.', t19, 
    ['Avoid PR traffic jams', 'Decentralize approvals'], [
        l('The Code Review Traffic Jam', 
            [
                'If organizational policy dictates that a single Tech Lead must painstakingly review every Pull Request, that lead instantly shifts from a velocity multiplier into an immense single point of failure.', 
                'Deployment bottlenecks at the merge layer cost exponentially more capital than occasional minor bugs. When PRs sit idle for 4 days, they suffer merge conflicts, forcing engineers to duplicate effort rewriting logical bounds.',
                'Elite teams aggressively decentralize PR approvals utilizing round-robin assignments, automated AST linters, and heavy feature flagging to ensure continuous flow.'
            ],
            [
                d('PR Dwell Time', 'The absolute duration a Pull Request sits idle waiting for human review.', '< 4 Hours Target'),
                d('Stale Merge Conflict Rate', 'The percentage of PRs requiring manual intervention due to age.', '< 5% Boundary')
            ], 
            'Decentralize your team’s review monopoly through automation and statistical trust.', 
            ['Implement an automated triage bot that assigns PRs round-robin style to all mid-to-senior devs.', 'Remove arbitrary manual style checks by enforcing strict Prettier/ESLint CI blocks.', 'Monitor the median reduction in Pull Request Dwell Time.'], 
            {
                question: 'Why is a centralized "Tech Lead MUST review everything" policy financially destructive?',
                options: ['Tech Leads charge higher hourly rates for reviews', 'It transforms the highest-paid engineer into an immovable bottleneck, inflating Dwell Time and spawning massive merge conflicts', 'It violates open source GPL provisions', 'Code reviews are entirely useless'],
                correctIndex: 1,
                explanation: 'A centralized gatekeeper cannot scale. The latency introduced by waiting for a single human inevitably stalls the entire engineering department\'s output.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-9', undefined, 'live'
);

tracks19Modules['agile-economics/19-9'] = m('19-9', 'Squad Formation Costs', 'Tuckman Stages, Cross-Functional Overhead.', t19, 
    ['Measure the cost of a re-org', 'Stabilize team dynamics'], [
        l('The Massive Penalty of the Re-Org', 
            [
                'Executive management frequently views engineers as completely fungible, interchangeable cogs. They assume moving Dev X from Squad A to Squad B carries zero operational friction. This demonstrates a deep ignorance of Tuckman’s Stages of Group Development.', 
                'Every single time an intact squad is shuffled, the team dynamics violently reset back to the "Forming" and "Storming" stages. The psychological safety and unspoken flow required for high-velocity output are destroyed.',
                'A single mid-quarter re-org guarantees an immediate 15% velocity hit spreading across 6 brutal weeks while the team renegotiates boundaries and domain context.'
            ],
            [
                d('Intact Team Tenure', 'The average lifespan of a squad operating without structural personnel changes.', '> 12 Months Minimum target'),
                d('Re-Org Velocity Drop', 'The measured reduction in story point delivery immediately following a shuffle.', '-15% sustained hit')
            ], 
            'Identify and actively block the urge to treat developers as fungible resource units.', 
            ['Audit the frequency of squad reorganizations over the past 18 months.', 'Quantify the velocity dips immediately following those exact shuffle dates.', 'Present the data to the VP level to defend long-term intact squad structures.'], 
            {
                question: 'What is the immediate outcome of constantly shuffling engineers between different project squads?',
                options: ['The engineers quickly learn multiple system domains and execute faster', 'The team perpetually resets to the low-trust "Forming" stage, incurring massive, continuous velocity taxes', 'It prevents engineers from asking for promotions', 'It improves code security'],
                correctIndex: 1,
                explanation: 'Software engineering is a deeply collaborative, high-trust team sport. Ripping apart cohesive units destroys the unwritten rules of engagement and localized domain knowledge.'
            }
        )
    ], '/vault/curriculum/tracks/agile-economics/19-10', undefined, 'live'
);

tracks19Modules['agile-economics/19-10'] = m('19-10', 'Continuous Delivery Value', 'Daily Deployments vs Monthly Trains, Rollback Math.', t19, 
    ['Eliminate the release train', 'Deploy fearlessly'], [
        l('The Derailment of the Release Train', 
            [
                'A monthly batched "Release Train" inherently generates massive, paralyzing organizational fear. Because the payload contains 4 weeks of entangled code from 30 developers, a single syntax error triggers a catastrophic rollback of everything.', 
                'When developers push thousands of lines in a single batch, debugability hits absolute zero. Continuous Delivery achieves the exact opposite. By deploying tiny, microscopic diffs continuously multiple times a day behind feature flags, risk is entirely isolated.',
                'If a highly isolated 20-line deployment fails, the rollback is instantaneous, surgically targeted, and practically unnoticed by the broader user base.'
            ],
            [
                d('Deployment Frequency', 'The absolute number of successful deployments to production per week per active engineer.', 'Target: > 1 per day'),
                d('Change Failure Rate', 'The percentage of deployments resulting in degraded service requiring remediation.', '< 2% Bound')
            ], 
            'Decouple code deployment fundamentally from product release.', 
            ['Implement a universal Feature Flag architecture (e.g., LaunchDarkly).', 'Mandate that unfinished code is rigorously merged to `main` daily, safely hidden behind dead flags.', 'Terminate the concept of the monthly multi-hour deployment freeze window entirely.'], 
            {
                question: 'Why are small, daily continuous deployments financially safer than monthly batched releases?',
                options: ['Because you don’t have to write release notes for small deployments', 'Because microscopic diffs have a drastically smaller blast radius, making root-cause analysis and automated rollbacks instantaneous', 'Because servers crash if they don’t get new code daily', 'Because Agile coaches prefer it'],
                correctIndex: 1,
                explanation: 'Batching code accumulates massive combinatorial risk. Deploying tiny changes continuously restricts the scope of any potential failure to easily manageable variables.'
            }
        )
    ], undefined, undefined, 'live'
);
