import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks21Modules: Record<string, CurriculumModule> = {};
const t21 = 'Track 21 — Traditional Product Management';

tracks21Modules['product-management/21-1'] = m('21-1', 'The PM/Engineering Friction Line', 'Misaligned incentives, feature factories, technical health.', t21, 
    ['Align incentives', 'Stop the Feature Factory'], [
        l('Engineering vs Product Misalignment', 
            [
                'The canonical friction between Product Management and Engineering stems entirely from misaligned corporate incentives. PMs are almost exclusively compensated and promoted based on shipping new visual features. Engineers are evaluated on system stability, uptime, and lack of bugs.', 
                'When leadership demands infinite velocity from Product, PMs inevitably demand engineers bypass foundational architecture to hit arbitrary marketing launch dates. This creates the "Feature Factory"—a dynamic where code is shoved onto users rapidly with zero regard for compounding structural decay.',
                'A high-functioning organization merges these incentives. PMs must be held financially accountable for post-launch P1 outages, and engineers must be graded on exactly how their technical architecture accelerated overall business KPIs.'
            ],
            [
                d('Incentive Divergence Gap', 'The measurable friction between the PM desire for speed and the Engineering desire for stability.', 'Must be merged'),
                d('Feature Factory Velocity', 'Raw output of features completely detached from actual revenue or user retention.', 'Toxic output metric')
            ], 
            'Audit the KPIs of both the Engineering and Product orgs to expose misaligned goal tension.', 
            ['Examine the exact OKRs (Objectives and Key Results) given to the Lead PM versus the Lead Engineer.', 'If the PM has no OKR related to system uptime or technical debt, mandate an immediate realignment.', 'Establish a shared "Stability/Velocity" dual-metric for both departments.'], 
            {
                question: 'What happens when Product Managers are evaluated strictly on shipping features, while Engineers are evaluated strictly on system stability?',
                options: ['The teams collaborate perfectly', 'The organization falls into intense, perpetual friction because their core compensation motivations are diametrically opposed', 'Engineers write faster code', 'Marketing launches are more successful'],
                correctIndex: 1,
                explanation: 'Incentives drive behavior. If you reward one team for speed and another team for cautious stability, they will fight constantly and destroy flow state.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-2', undefined, 'live'
);

tracks21Modules['product-management/21-2'] = m('21-2', 'Roadmap Bankruptcy', 'Over-promising, technical reality, shifting targets.', t21, 
    ['Eliminate the massive Gantt chart', 'Stop lying to Sales'], [
        l('The Fallacy of the 12-Month Gantt Chart', 
            [
                'A 12-month Product Roadmap delivered in Q1 is an enormous artifact of fiction. The specific competitive reality, the internal technical debt burden, and actual user requirements will mutate aggressively within 90 days, rendering the latter 9 months of the chart completely meaningless.', 
                'When Sales teams promise features off a 12-month roadmap to close an enterprise prospect, they lock Engineering into delivering legacy logic that may no longer be viable.',
                'The elite Enterprise Product Roadmap is simply three columns: "Now, Next, Later." It commits absolutely zero hard dates to anything beyond the active 6-week development cycle, providing maximum maneuvering agility.'
            ],
            [
                d('Roadmap Adherence Decay', 'The mathematical delta between Q1 projections and Q4 actual shipments.', 'Predictably massive'),
                d('Sales/Engineering Trust', 'The collateral damage incurred when Sales promises a theoretical roadmap date.', 'Devastated by rigid planning')
            ], 
            'Destroy the multi-quarter Gantt chart and adopt the "Now/Next/Later" strategic abstraction.', 
            ['Consolidate all Q3 and Q4 promises into a single ambiguous "Later" bucket.', 'Remove any explicit month or date tags from long-term roadmap slides presented to the Sales team.', 'Communicate only absolute certainty for the immediate 6-week "Now" horizon.'], 
            {
                question: 'Why is standardizing on a rigid 12-month Product Roadmap dangerous?',
                options: ['Because designers need more time for mockups', 'Because market requirements and technical realities shift rapidly, turning long-term promises into massive liabilities that force teams to build obsolete features', 'Because Jira limits how many tickets you can create', 'Because it decreases company valuation'],
                correctIndex: 1,
                explanation: 'A 12-month roadmap assumes perfect knowledge of the future. The reality of software is constant mutation. Locking in promises destroys agility.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-3', undefined, 'live'
);

tracks21Modules['product-management/21-3'] = m('21-3', 'Validation Before Engineering', 'Design sprints, Figma prototypes, fake door tests.', t21, 
    ['Kill ideas before code', 'Leverage fake-door tests'], [
        l('The Economics of Validation', 
            [
                'Writing code is the absolute most extraordinarily expensive way to test a product hypothesis. If a team spends 3 months coding a feature only to discover zero users want it, that team has incinerated millions of dollars in opportunity cost.', 
                'Elite Product Managers validate pure user intent dynamically using "Fake Door" tests or high-fidelity Figma prototypes long before an engineer ever initializes a repository branch.',
                'A true validation test measures explicit behavioral friction (e.g., clicking a \'Buy Now\' button or submitting an email address on a landing page), not merely asking users "would you use this?" in a biased interview.'
            ],
            [
                d('Pre-Code Validation Rate', 'The percentage of total shipped features that underwent rigorous behavioral testing before Jira creation.', '> 90% Target'),
                d('Hypothesis Invalidation ROI', 'The massive capital saved by killing a terrible idea before assigning engineers.', 'Measured in pure OpEx')
            ], 
            'Execute a "Fake Door" test to conclusively validate a highly-contested product theory.', 
            ['Create a realistic UI element (like a new tier button) that simply triggers a "Coming Soon: Enter Email" popup.', 'Deploy the UI to exactly 5% of active users.', 'Measure the explicit click-through intent prior to ever writing the backend architecture.'], 
            {
                question: 'What is a "Fake Door" test?',
                options: ['Testing a database security vulnerability', 'Deploying a UI element for a feature that doesn\'t exist yet to accurately measure explicit user demand and click intent before committing expensive engineering resources', 'A QA testing methodology for mobile apps', 'Creating multiple Slack channels'],
                correctIndex: 1,
                explanation: 'People will tell you they want a feature, but behavior dictates truth. A Fake Door measures actual click behavior without spending 3 months building the backend.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-4', undefined, 'live'
);

tracks21Modules['product-management/21-4'] = m('21-4', 'The Definition of MVP', 'Scope creep, functional vs viable tradeoffs.', t21, 
    ['Eliminate MVP bloat', 'Define the skateboard model'], [
        l('Stop Building Half a Car', 
            [
                'The canonical concept of the Minimum Viable Product (MVP) has been thoroughly corrupted by enterprise stakeholders. Organizations frequently mistake "Minimum" for "Low Quality," or they bloat the MVP with immense non-viable requirements yielding a product that takes 8 months to ship.', 
                'A true MVP operates on the "Skateboard" metaphor. If the core user problem is "I need to get from Point A to Point B faster," you do not build the wheels of a car first. You build a skateboard. It inherently solves the core problem immediately, albeit imperfectly.',
                'Cutting scope aggressively is the primary function of a PM. If the MVP doesn’t make the executive team slightly uncomfortable with its bare-bones simplicity, it isn’t a true MVP.'
            ],
            [
                d('MVP Scope Swell', 'The additional engineering weeks violently appended to a V1 launch by nervous leadership.', 'Zero Tolerance Limit'),
                d('Time-to-Value (TTV)', 'The raw speed at which the core hypothesis is validated in a live production environment.', '< 4 Weeks Target')
            ], 
            'Aggressively slash the scope of the next upcoming major feature launch by 50%.', 
            ['Map every single proposed feature against the absolute core user pain point.', 'Eliminate any feature that falls under the umbrella of "nice-to-have" or "optimization".', 'Lock the scope and force a deployment deadline 4 weeks earlier than scheduled.'], 
            {
                question: 'What is the most common failure mode of an Enterprise MVP (Minimum Viable Product)?',
                options: ['The code is written too quickly', 'Stakeholders panic about missing features and forcibly expand the scope, delaying the launch by months and destroying the "Minimum" aspect completely', 'It uses outdated CSS', 'The server cannot handle the scale'],
                correctIndex: 1,
                explanation: 'A true MVP validates a hypothesis instantly. Bloating it with comprehensive edge cases completely defeats the purpose of rapid iteration.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-5', undefined, 'live'
);

tracks21Modules['product-management/21-5'] = m('21-5', 'Prioritization Mathematics', 'RICE scoring, opportunity costs, absolute ROI.', t21, 
    ['Quantify PM intuition', 'Enforce the RICE matrix'], [
        l('Eradicating "Gut Feeling" Development', 
            [
                'When the Product Backlog prioritization mechanism relies solely on the highest-paid person\'s opinion (HiPPO) or pure "gut feeling," the engineering org inevitably spirals into disjointed feature chasing. Logic must override volume.', 
                'The RICE Framework (Reach, Impact, Confidence, Effort) applies a rigorous, unassailable mathematical scoring matrix to feature prioritization. It forces PMs to explicitly divide their assumed impact by the actual engineering effort.',
                'By calculating the absolute integer score, engineering leaders possess the ammunition to effortlessly reject a VPs "pet project" because the math objectively demonstrates it is a devastatingly low-ROI allocation of capital.'
            ],
            [
                d('Prioritization Subjectivity', 'The reliance on executive clout to bypass standard backlog ranking.', 'Eliminate completely'),
                d('RICE Score Calculation', '(Reach × Impact × Confidence) ÷ Execution Effort.', 'Highest Score Wins')
            ], 
            'Implement a strict RICE scoring matrix on your top 10 backlog epics immediately.', 
            ['Assign a 1-10 integer to Reach, Impact, and Confidence for each feature.', 'Have the Engineering Lead definitively estimate the Effort denominator.', 'Rank the list strictly by the final mathematical score, ignoring all political pressure.'], 
            {
                question: 'Why is the "Effort" metric placed in the denominator of the RICE framework calculation?',
                options: ['Because it is the hardest to measure', 'Because a massive engineering effort mathematically destroys the ROI of even a high-impact feature, heavily penalizing complex development cycles', 'Because engineers want to do less work', 'Because it cancels out the Reach metric'],
                correctIndex: 1,
                explanation: 'A feature with an impact score of 10 that takes 6 months to build is functionally less valuable than a feature with an impact score of 5 that takes 2 days to build.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-6', undefined, 'live'
);

tracks21Modules['product-management/21-6'] = m('21-6', 'The Sales-Led Engineering Trap', 'Bespoke contracts, branching codebases, custom logic.', t21, 
    ['Protect the core architecture', 'Say no to Sales'], [
        l('The Peril of High-Ticket Customization', 
            [
                'When a SaaS operates under intense "Sales-Led" pressure, account executives will routinely promise terrifyingly specific custom features to close a massive $100k contract. This fundamentally shatters the SaaS model, transitioning the firm into a glorified dev agency.', 
                'Injecting bespoke `"if (tenant_id == \'Coke\')"` logic deep within the core architecture destroys future scalability. Every subsequent deployment must traverse the minefield of hundreds of fragmented enterprise customizations.',
                'A high-functioning CPO builds heavily restricted extension architecture (webhooks, public APIs, plugin sandboxes) allowing massive clients to build their own custom workflows without contaminating the core monolithic branch.'
            ],
            [
                d('Customization Tax', 'The immense compounding QA and regression cost applied to every deploy due to bespoke client logic.', 'Exponential growth'),
                d('SaaS vs Agency Divergence', 'The ratio of standard product development vs one-off client appeasement.', 'Must remain Product-focused')
            ], 
            'Audit the codebase for explicitly hardcoded Tenant ID branching logic.', 
            ['Run a global search for specific enterprise client names or IDs deeply embedded in the business route logic.', 'Draft a plan to extract those bespoke requirements into configured webhook events.', 'Implement a rigid policy banning Sales from promising non-API customizations.'], 
            {
                question: 'What is the primary architectural danger of allowing Sales to dictate bespoke features for massive clients?',
                options: ['The features are usually poorly designed', 'It forces developers to embed brittle, highly customized conditional logic into the core product, transforming a scalable SaaS into a convoluted custom-agency nightmare', 'Sales teams do not know SQL', 'It makes the UI look cluttered'],
                correctIndex: 1,
                explanation: 'SaaS economics rely entirely on a single scalable codebase serving all clients identically. Custom branching destroys that margin model through infinite regression testing.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-7', undefined, 'live'
);

tracks21Modules['product-management/21-7'] = m('21-7', 'Sunset and Deprecation Playbooks', 'Removing features, managing churn.', t21, 
    ['Delete dead features heavily', 'Optimize the codebase shrinkage'], [
        l('The Extreme Value of Feature Deletion', 
            [
                'Software products naturally succumb to acute feature bloat. Maintaining a feature utilized by less than 1% of the user base consumes testing bandwidth, complicates the UX, and introduces horrific vector surfaces for security breaches.', 
                'A dominant Product Organization treats feature deletion with the exact same prestige as feature launching. Deprecating a dead integration requires a mathematically precise transition script and intense, strategic user communication.',
                'Removing 10,000 lines of dead code is actively adding thousands of dollars to the company\'s bottom line via massive reductions in AWS compute and cognitive testing load.'
            ],
            [
                d('Feature Utilization Threshold', 'The minimum percentage of Daily Active Users (DAU) required to justify maintaining a feature.', '< 2% trigger sunset'),
                d('Negative Code Contribution', 'The total lines of codebase permanently deleted resulting in lighter builds.', 'Highly celebrated metric')
            ], 
            'Identify and immediately execute a deprecation sequence on a dormant feature.', 
            ['Query your analytics platform for features untouched by 98% of users over 90 days.', 'Calculate the AWS and testing effort currently trapped sustaining it.', 'Send a 30-day sunset notice to the microscopic fraction of users remaining.'], 
            {
                question: 'Why must a Product Manager aggressively champion the deletion of underutilized features?',
                options: ['To prove they have authority over the engineering team', 'Because dead features act as a massive compounding cognitive load, slowing down testing cycles and acting as unmonitored security vulnerabilities', 'Because users hate having too many buttons', 'To make the codebase look newer'],
                correctIndex: 1,
                explanation: 'Every line of code is a liability. Maintaining logic for a tiny fraction of edge users actively penalizes the development speed for the other 99% of your massive user base.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-8', undefined, 'live'
);

tracks21Modules['product-management/21-8'] = m('21-8', 'The Value of Documentation', 'Product Specs, PRDs vs Code as Truth.', t21, 
    ['Make the code the documentation', 'Kill the massive PRD'], [
        l('The End of the Monolithic PRD', 
            [
                'Writing a 40-page Product Requirements Document (PRD) before engineering begins is an artifact of the failed Waterfall methodology. It guarantees immediate desynchronization, as the codebase will mutate instantly during development while the PRD molders in Confluence.', 
                'Modern alignment demands completely dynamic specs. The PRD should dictate only "Why" and "What." The exact "How" is strictly handled dynamically in architectural meetings and ultimately mapped exclusively by the code itself.',
                'Firms must aggressively enforce documentation-as-code principles. High-fidelity API contracts (e.g., Swagger/OpenAPI) and rigorously typed systems implicitly document themselves perfectly, eliminating the need to maintain disconnected wiki pages.'
            ],
            [
                d('Spec-to-Code Desynchronization', 'The percentage of wiki documentation that contradicts the live production behavior.', 'Usually 100% within 3 weeks'),
                d('Self-Documenting Code Rate', 'The utilization of strict Type boundaries and OpenAPI schemas dictating truth.', 'Maximized Target')
            ], 
            'Abolish the maintenance of explicit external requirement wikis for active microservices.', 
            ['Implement Swagger UI or automated OpenAPI generation directly off the routing logic.', 'Enforce heavy Typescript interfaces that serve identically as the source of truth for the data model.', 'Stop attempting to update Confluence pages for minor feature tweaks.'], 
            {
                question: 'What is the fundamental flaw of an exhaustive 40-page Product Requirements Document (PRD)?',
                options: ['It uses too much server storage', 'It mathematically guarantees desynchronization because the live engineering code will inevitably iterate away from the static document on day one', 'No one knows how to use Confluence properly', 'It is too hard to format in Markdown'],
                correctIndex: 1,
                explanation: 'Static documentation is a snapshot of theoretical intent. Software is liquid reality. The codebase must act as the primary, living documentation source.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-9', undefined, 'live'
);

tracks21Modules['product-management/21-9'] = m('21-9', 'Dual-Track Agile Mechanics', 'Discovery vs Delivery tracks, minimizing bottlenecks.', t21, 
    ['Run discovery continuously', 'Ensure delivery feeds discovery'], [
        l('Parallel Product Architecture', 
            [
                'Forcing Product Design Validation and Engineering Execution into the exact same 2-week sprint inevitably shatters the process. Engineers are blocked waiting on Figma assets, and Designers are rushed into producing low-fidelity garbage to feed the sprint.', 
                'Elite Product Management utilizes explicit "Dual-Track Agile." The Discovery Track (UX Research, PMs, Lead Architects) operates a full sprint ahead, invalidating bad ideas and confirming intent. The Delivery Track (Engineering) executes solely on previously validated, unblocked assumptions.',
                'This asynchronous alignment ensures that the highly expensive engineering factory is perpetually fed with perfect, pre-validated specification packages, entirely eliminating mid-sprint flow state disruptions.'
            ],
            [
                d('Discovery Offset Buffer', 'The timeline advantage the Research team maintains ahead of the build team.', 'Target: +1 Sprint Head Start'),
                d('Mid-Sprint Blocking Rate', 'The percentage of tickets stalled due to missing UX or PM specifications.', 'Reduced to 0%')
            ], 
            'Hard-split your active sprint cycle into identical, parallel \'Discovery\' and \'Delivery\' tracks.', 
            ['Mandate that no ticket enters the Engineering active delivery column unless it was fully finalized and vetted by the Discovery track in the preceding cycle.', 'Isolate the lead UX designer and PM from daily standup distractions to focus strictly on future validation.', 'Measure the massive spike in unblocked engineering cycle time.'], 
            {
                question: 'What is the primary organizational advantage of Dual-Track Agile?',
                options: ['It allows developers to work on two computers at once', 'It physically isolates slow UX hypothesis testing from fast engineering execution, completely preventing highly-compensated developers from idling while waiting on design assets', 'It makes sprints run for 4 weeks instead of 2', 'It lets the CEO skip updates'],
                correctIndex: 1,
                explanation: 'Design and validation are inherently messy, non-linear processes. Engineering thrives on highly specific, blocked-out execution. Decoupling them maximizes both.'
            }
        )
    ], '/vault/curriculum/tracks/product-management/21-10', undefined, 'live'
);

tracks21Modules['product-management/21-10'] = m('21-10', 'Product Management Capstone', 'Synthesizing the alignment between capital, iteration, and health.', t21, 
    ['Finalize the Product intuition', 'Unify the org'], [
        l('The Board-Level Product Mindset', 
            [
                'Elite Product Management is not about writing incredibly detailed tickets or designing beautiful Kanban boards. It is pure organizational risk management and capital allocation. You act as the defining bridge between Market Demand, Financial Runway, and Core Technical Health.', 
                'When you synthesize the ability to say "No" to the CEO’s vanity project, calculate the absolute RICE ROI of a new integration, and enforce a strict 20% technical debt architectural sprint allocation, you transcend standard PM roles.',
                'The final realization is this: The most successful product is rarely the one with the most features. It is the one shipped fast enough to capture intent and stable enough to protect compounding margin.'
            ],
            [
                d('Organizational Alignment Efficacy', 'The capability to harmoniously drive Executive, Engineering, and Marketing silos toward identical intent.', 'Ultimate PM KPI'),
                d('Calculated Product Impact', 'The absolute net value created after deducting all engineering effort and technical debt generated.', 'The only metric that matters')
            ], 
            'Synthesize the ultimate product mandate. Align your active backlog completely to the corporate financial goals.', 
            ['Review the top 5 largest items in your backlog.', 'If any epic fails to explicitly increase user revenue, decrease AWS costs, or prevent major technical collapse, terminate it permanently.', 'Present this highly refined, mathematically backed roadmap to leadership.'], 
            {
                question: 'What is the defining fundamental purpose of a Board-level Product Manager?',
                options: ['Creating the best possible Figma wireframes', 'Acting as the ruthless allocator of engineering capital to maximize financial return and mitigate technical collapse risk', 'Making sure developers clock in on time', 'Keeping the CEO happy by building every requested feature'],
                correctIndex: 1,
                explanation: 'A great PM is an investor. They deploy expensive engineering resources into the features that yield the absolute highest guaranteed return on the company\'s capital balance.'
            }
        )
    ], undefined, undefined, 'live'
);
