import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks10Modules: Record<string, CurriculumModule> = {};

const t10 = 'Track 10  -  Startup Economics';

// ═══════════════════ TRACK 10: STARTUP ECONOMICS ═══════════════════

tracks10Modules['startup-economics/10-1'] = m('10-1', 'Runway & Burn Rate', 'Model your operational engineering runway and calculate the Zero-Cash Date relative to roadmap releases.', t10, 
    ['Calculate Zero-Cash Date', 'Optimize API vs Native development', 'Quantify feature delay Opportunity Cost'], [
        l('Engineering Your Runway', 
            [
                'For a startup, the only operational metric that truly matters is the Zero-Cash Date. Engineering payroll is almost always the most expensive line item, meaning architectural decisions directly manipulate the company\'s lifespan.',
                'Building a custom authentication system instead of using Auth0 or Supabase doesn\'t just cost 2 weeks of developer time ($6,000); it costs 2 weeks of company runway ($50,000+ total burn rate).',
                'Every engineering decision must be filtered through the lens of capital preservation. If an external API costs $500/month but saves a $15,000/month engineer from maintaining internal infrastructure, it is a mandatory purchase.'
            ],
            [
                d('Burn Rate', 'The total amount of cash the company loses every month.', 'Revenue minus Total Expenses'),
                d('Zero-Cash Date', 'The exact calendar date the bank account hits $0.00 assuming current burn.', 'Target: Always > 18 months of runway')
            ],
            'Audit your current technical stack. Identify one internally-maintained system that could be replaced by a managed SaaS product to instantly increase developer velocity.',
            ['List all internal systems requiring weekly maintenance.', 'Identify equivalent managed services (e.g., swapping self-managed Kafka for Confluent Cloud).', 'Execute a migration sprint to eliminate the maintenance drag and push the Zero-Cash Date further away.'],
            {
                question: 'Why is building custom commodity infrastructure (like Auth or Logging) dangerous for an early-stage startup?',
                options: ['The engineers might not know how to build it securely', 'It wastes finite company runway on non-differentiating features, accelerating the Zero-Cash Date toward zero', 'Venture Capitalists prefer proprietary code over third-party APIs', 'It violates open-source licenses'],
                correctIndex: 1,
                explanation: 'A startup exists to prove a unique value proposition before the funding runs out. Spending 3 weeks building a logging system when Datadog exists is actively burning capital on operations the customer does not care about.'
            }
        )
    ], '/vault/curriculum/tracks/startup-economics/10-2', undefined, 'live'
);

tracks10Modules['startup-economics/10-2'] = m('10-2', 'MVP Economics', 'Validating hypotheses with maximum capital efficiency and avoiding the "Second System" over-engineering trap.', t10, 
    ['Calculate Validation Costs', 'Avoid premature scaling taxes', 'Embrace "Wizard of Oz" backends'], [
        l('The Math of the Minimum Viable Product', 
            [
                'An MVP is not a buggy version of your final vision; it is the cheapest possible experiment to validate a monetization hypothesis.',
                'The economic goal of an MVP is to maximize the ratio of "Learnings Generated" to "Capital Expended." If you can validate willingness-to-pay using a static landing page and a Stripe checkout link instead of a 3-month React build, you just saved $100,000.',
                'Over-engineering an MVP is a catastrophic misallocation of capital. Scalability does not matter if you have zero paying users.'
            ],
            [
                d('Validation Cost', 'The total capital spent to prove a user will repeatedly pay for a feature.', 'Target: Scope down until it costs < $5,000 to validate'),
                d('Premature Scaling Tax', 'Engineering effort spent ensuring a system can handle 10,000 RPS when it currently has 10 users.', '100% Wasted Capital')
            ],
            'Take your next major roadmap feature and reduce its scope by 80% to find the absolute cheapest way to test if customers actually want it.',
            ['Define the core hypothesis: "Users will pay $X for feature Y."', 'Remove all administrative UI, settings panels, and edge-case handling.', 'Ship a manual, "Wizard of Oz" backend if necessary to test demand today rather than next quarter.']
        )
    ], '/vault/curriculum/tracks/startup-economics/10-3', undefined, 'live'
);

tracks10Modules['startup-economics/10-3'] = m('10-3', 'Technical Co-Founder Economics', 'Valuing CTO equity, splitting technical hiring responsibilities, and locking down foundational architecture.', t10, 
    ['Map Founder Vesting Cliffs', 'Calculate Co-Founder split dilution', 'Mitigate Single-Point-of-Failure Risk'], [
        l('The Price of a Technical Partner', 
            [
                'A non-technical founder looking for a CTO often offers 10% equity and a $50k salary. This fundamentally fails market economics. A Senior Engineer easily commands a $250k liquid salary in the enterprise market.',
                'To attract true technical co-founding talent, the equity split must align with the immense opportunity cost. If the tech is the primary product (SaaS, AI), the CTO should hold 40-50% equity. Uneven, disrespectful splits guarantee the CTO will churn the moment the product gains traction.',
                'Additionally, all founder equity must sit on a standard 4-year vesting schedule with a 1-year cliff. This protects the company if the technical founder exits 6 months after writing the MVP.'
            ],
            [],
            'Implement standard vesting cliffs for all founding equity.',
            ['Ensure the corporate charter strictly prevents unvested equity from walking out the door with a churned founder.']
        )
    ], '/vault/curriculum/tracks/startup-economics/10-4', undefined, 'live'
);

// Rapid generation block for 10-4 through 10-15
tracks10Modules['startup-economics/10-4'] = m('10-4', 'Series A Engineering Metrics', 'Translating code velocity into venture capital deliverables: APER benchmarks, CAC:LTV, and margin growth.', t10, 
    ['Hit APER benchmarks for VC', 'Prove velocity scales', 'Align ARR to server architecture'], [
        l('VC Technical Due Diligence Metrics', 
            [
                'To raise a Series A, you must prove Product Market Fit (PMF). The tech stack must prove it can reliably capture and scale that PMF without blowing up the COGS (Cost of Goods Sold).',
                'VCs will audit your APER (Active Product Engineering Ratio). Do your engineers actually ship features that drive revenue, or are they constantly patching database leaks?',
                'An early SaaS company must show it can maintain an 80%+ gross margin. If your AWS bill inflates at a 1:1 ratio with your new users, the unit economics are fundamentally broken and the round will fail.'
            ],
            [],
            'Run a pre-emptive Technical Due Diligence sprint before initiating the fundraising process.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-5', undefined, 'live'
);

tracks10Modules['startup-economics/10-5'] = m('10-5', 'Scaling Engineering 1→10', 'Navigating the phase shift from a handful of generalists to specialized roles and structured deployments.', t10, 
    ['Transition from IC Founder', 'Install CI/CD guardrails', 'Deploy the first specialized infrastructure hires'], [
        l('Breaking the Generalist Mold', 
            [
                'The first 3 engineers built the entire stack: frontend, backend, database, and devops. At 10 engineers, this "hero culture" breaks down. The codebase becomes too large for everyone to hold the entire architecture in their head.',
                'The CTO must enforce "bounded contexts" and begin hiring specialists (e.g. a dedicated DevOps engineer, a dedicated Frontend lead). The financial transition is painful: specialized resources are expensive and occasionally underutilized early on.',
                'A failure to transition away from hero-driven deployments (e.g. "Only Dave knows how to push to production") creates catastrophic key-person risk.'
            ],
            [],
            'Remove manual SSH access to production for all developers and mandate a strict CI/CD pipeline deployment trigger.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-6', undefined, 'live'
);

tracks10Modules['startup-economics/10-6'] = m('10-6', 'Technical Debt in Startups', 'Embracing intentional debt for speed-to-market versus identifying toxic debt that kills Series A valuations.', t10, 
    ['Execute Prudent Debt issuance', 'Prevent systemic architectural decay', 'Refactor before the A-Round'], [
        l('Intentional Velocity Debt', 
            [
                'In a seed-stage startup, writing perfectly decoupled, test-driven, infinitely scalable microservices is suicide. You are wasting capital building a fortress for a product that might pivot in 3 weeks.',
                'Taking on deliberate, documented technical debt ("Prudent Debt") is a financial strategy to accelerate time-to-market by 40%. You explicitly trade future architectural cleanliness for immediate customer adoption.',
                'However, right before the Series A, you must pay down the compound interest on that debt, or it will catastrophically halt feature development when the new VC-funded sales team demands massive feature expansion.'
            ],
            [],
            'Declare a 2-week "Debt Paydown" sprint immediately after closing your Seed/Series A to stabilize the foundation for scale.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-7', undefined, 'live'
);

tracks10Modules['startup-economics/10-7'] = m('10-7', 'Vendor & Tool Selection', 'Mastering the SaaS Free Tier, calculating transition cliffs, and negotiating volume enterprise discounts.', t10, 
    ['Extend the SaaS Free Tier runway', 'Avoid vendor lock-in traps', 'Consolidate tech billing'], [
        l('The Subsidized Startup Stack', 
            [
                'Modern hyperscalers and SaaS platforms (AWS Activate, Stripe, MongoDB Atlas) intentionally subsidize early-stage startups with massive credits ($100k+). They know it is cheaper to acquire you when you are small than to fight a switching-cost battle when you are a unicorn.',
                'The economic danger is the "Pricing Cliff." What happens on month 13 when the $100k AWS credits expire, and your unoptimized architecture suddenly begins billing $15,000/month in hard cash?',
                'Startups must architect their cloud infrastructure as if they were paying retail prices from day one. Do not spin up massive redundant data clusters just because the credits make it "free." You are digging a grave for next year.'
            ],
            [],
            'Calculate what your total SaaS tooling stack (Cloud + APIs) would cost today if you had zero startup credits applied.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-8', undefined, 'live'
);

tracks10Modules['startup-economics/10-8'] = m('10-8', 'Outsourcing Economics', 'Comparing offshore agency scale vs in-house quality, and managing asynchronous contractor velocity.', t10, 
    ['Integrate near-shore capacity', 'Prevent offshore IP leakage', 'Cost out blended hourly rates'], [
        l('Blended Hourly Arbitrage', 
            [
                'Hiring an offshore dev-shop at $45/hour feels like an economic lifehack compared to an SF-based engineer at $150/hour. Yet most startups attempting this watch their codebase rot into an unmaintainable nightmare.',
                'The truth: Offshore teams execute explicit, rigid specs flawlessly. They fail completely at ambiguous, product-driven problem solving. If you hand an offshore team a vague Jira ticket, they will build exactly the wrong thing 10 times over.',
                'The economically optimal structure is a sharp, highly-paid internal architect who designs the system and writes hyper-detailed specs, handing the implementation off to cheaper developer capacity (The Blended Rate approach).'
            ],
            [],
            'Reserve all ambiguous product-discovery engineering exclusively for your internal, core team, and farm out clearly defined, repetitive component building offshore.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-9', undefined, 'live'
);

tracks10Modules['startup-economics/10-9'] = m('10-9', 'Fundraising Engineering Story', 'Pitching technical architecture as a proprietary defensible moat to Tier-1 venture capital.', t10, 
    ['Translate code into moats', 'Build the Technical Pitch Deck', 'Execute live engineering demos'], [
        l('The Technical Defensibility Pitch', 
            [
                'A VC asks: "If Google puts 50 engineers on this tomorrow, why won\'t they crush you?" If your answer is "We have a better UI," the pitch is over.',
                'Defensibility (a Technical Moat) requires compounding complexity. The CTO must prove that the dataset being aggregated, the AI model being tuned, or the integration being carved out becomes geometrically harder to replicate the longer the startup operates.',
                'The engineering story for fundraising must directly link the product architecture to a rapidly expanding barrier to entry.'
            ],
            [],
            'Refactor your standard slide deck to include a distinct "Technical Moat" slide explaining why your data structure compounding is impossible for an incumbent to replicate cheaply.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-10', undefined, 'live'
);

tracks10Modules['startup-economics/10-10'] = m('10-10', 'Scaling 10→50 Engineers', 'Deploying middle management, scaling continuous integration, and stabilizing cultural communication.', t10, 
    ['Implement Engineering Management', 'Survive the 30-engineer communication breakdown', 'Deploy Squad architectures'], [
        l('The Middle Management Chokepoint', 
            [
                'A startup with 10 engineers is a family. A startup with 50 engineers is a corporation. Around 30 engineers, the original flat hierarchy physically collapses. The founding CTO can no longer review every PR or conduct every 1:1.',
                'The most dangerous financial period for a startup is the 10-to-50 transition. If you fail to hire highly experienced Engineering Managers (EMs), the senior ICs will burn out attempting to manage juniors, code velocity will flatline, and the burn rate will explode without any accompanying feature output.',
                'You must transition to autonomous "Squads" or "Pods" composed of a PM, an EM, and 4-6 engineers, granting them total ownership over massive surface areas.'
            ],
            [],
            'Begin interviewing dedicated Engineering Managers the moment your IC headcount crosses 15.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-11', undefined, 'live'
);

tracks10Modules['startup-economics/10-11'] = m('10-11', 'Platform vs Product Investment', 'When to pause feature delivery to build internal developer tooling and platform architecture (The Platform Tax).', t10, 
    ['Calculate Developer Experience ROI', 'Assess the Golden Path', 'Deploy internal service templates'], [
        l('The Platform Tax Break-Even', 
            [
                'When every new microservice requires 2 weeks of manual AWS configuration and CI/CD script writing, developer velocity crawls. A dedicated "Platform Team" builds paved roads (The Golden Path) so an engineer can spin up a secure, compliant service in 10 minutes.',
                'Deploying a Platform Team before 40 engineers is too early; you are building roads for a city with no cars. Delaying a Platform Team past 80 engineers guarantees organizational gridlock due to rampant infrastructure debt.'
            ],
            [],
            'Monitor the duration it takes a product team to ship a "Hello World" new service. When it exceeds 5 days, build a Platform Team.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-12', undefined, 'live'
);

tracks10Modules['startup-economics/10-12'] = m('10-12', 'Acquisition Readiness', 'Running advanced clean room technical diligence and mitigating open-source license contamination.', t10, 
    ['Audit Open-Source licenses (GPL)', 'Organize architecture diagrams for buyers', 'Ensure key-person security'], [
        l('Surviving Technical Due Diligence (M&A)', 
            [
                'When a buyer models an acquisition, their CTO runs a black-box scan on your codebase. If they find copy-pasted GPL (General Public License) "viral" code inside your proprietary billing engine, it legally contaminates the asset. The deal is dead or delayed for 6 months.',
                'A startup optimizing for a clean exit must run automated license scanning (e.g. FOSSA, Snyk) from Day 1 to ensure viral copy-left licenses never enter the core repos.',
                'Additionally, all key architecture must be heavily documented to prove to the buyer that the product will not spontaneously implode if the founding team vests and leaves.'
            ],
            [],
            'Deploy an automated license compliance scanner on your primary monorepo to explicitly blackhole any code requesting GPL or AGPL.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-13', undefined, 'live'
);

tracks10Modules['startup-economics/10-13'] = m('10-13', 'Competition & Moat', 'Weaponizing speed-to-market against larger, slower incumbents and valuing feature-parity drag.', t10, 
    ['Value deployment frequency', 'Use modern CI/CD against legacy players', 'Deploy asymmetric engineering'], [
        l('Speed as a Financial Moat', 
            [
                'An enterprise incumbent takes 6 months to ship a database migration due to strict Change Advisory Boards (CABs). A startup can ship it in an afternoon. That delta in lead time is the only reason startups survive.',
                'When competing directly against a 10,000-engineer juggernaut, the startup must ruthlessly defend its deployment frequency. If your CI/CD pipeline starts slowing down to require manual QA reviews because of "stability concerns," you have surrendered your only weapon.',
                'Fast, automated recovery (MTTR) is economically superior to slow, massive preventative testing (MTBF) for early companies.'
            ],
            [],
            'Ensure your DORA Deployment Frequency metric remains "Multiple times a day" at all costs for the first 3 years of operation.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-14', undefined, 'live'
);

tracks10Modules['startup-economics/10-14'] = m('10-14', 'International Expansion', 'The extreme engineering cost of GDPR localization, multi-region latency architectures, and legal compliance.', t10, 
    ['Map Data Sovereignty limits', 'Architect cell-based deployments', 'Cost global latency grids'], [
        l('The Data Sovereignty Cost Cliff', 
            [
                'Expanding SaaS sales to Europe sounds great until German procurement demands physical data sovereignty. Operating a multi-region Active-Active cloud deployment instantly triples your AWS bill and quadruples engineering complexity.',
                'Do not casually promise international compliance to land a $50k deal if it costs $400k in DevOps re-platforming to legally isolate European user data.',
                'Ensure the sales team fully integrates the cloud expansion COGS into their European market expansion models.'
            ],
            [],
            'Demand an explicit architecture ROI analysis before approving any global data-replication project.'
        )
    ], '/vault/curriculum/tracks/startup-economics/10-15', undefined, 'live'
);

tracks10Modules['startup-economics/10-15'] = m('10-15', 'Startup Economics Synthesis', 'Merging burn-rate governance, valuation multipliers, and architectural debt into the final execution roadmap.', t10, 
    ['Finalize Capital Allocation modeling', 'Synchronize roadmap and runway', 'Drive towards exit velocity'], [
        l('The Terminal Velocity Synthesis', 
            [
                'Startup Engineering Economics is fundamentally a race against insolvency. Every architectural choice either adds days to the runway (efficiency) or generates immense lift to attract more capital (growth metrics).',
                'A mature startup CTO treats the entire engineering department as a used financial instrument. You are converting investor capital directly into enterprise equity value through the medium of software.',
                'If the software cannot aggressively scale revenue faster than the server instances it requires, the economic engine fails. Profit margin is an architectural constraint.'
            ],
            [
                d('', '', '')
            ],
            'Merge your APER metrics, Zero-Cash Date, and DORA deployment frequency into the ultimate Startup Mastery Dashboard.'
        )
    ], undefined, undefined, 'live'
);
