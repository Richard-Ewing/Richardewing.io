import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks16to17ExpansionModules: Record<string, CurriculumModule> = {};

const t16 = 'Track 16 — Executive Premium Playbooks';
const t17 = 'Track 17 — Technical Framework Comparisons';

// ═══════════════════ TRACK 16: EXECUTIVE PREMIUM PLAYBOOKS EXPANSION ═══════════════════

tracks16to17ExpansionModules['guides/16-4'] = m('16-4', 'Security Red Teaming LLMs', 'Jailbreak vectors, adversarial model training, and output entropy.', t16, 
    ['Defend against contextual drift', 'Measure algorithmic poisoning', 'Establish dual-LLM verification'],
    [
        l('Automated Jailbreaking Architectures', 
            [
                'Integrating an LLM with external systems opens an immense zero-day attack surface. Prompt injection is not a bug; it is a feature of how LLMs parse human language. Traditional WAFs will not catch semantic injections containing "ignore previous instructions".',
                'Implementing a "Dual-LLM Validator"—where a smaller, cheaper model strictly evaluates the output of the primary model for malicious intent—is the only deterministic defense.'
            ],
            [
                d('Jailbreak Penetration', 'The percentage of adversarial prompts that bypass safety guardrails.', '< 1%'),
                d('Validator Inference Tax', 'The extra cost of running a secondary LLM for security parsing.', '$0.10 per 1k input')
            ],
            'Execute a Red Team audit of your primary Chat interface.',
            ['Draft 5 adversarial prompts (e.g., claiming to be a system administrator).', 'Inject them into your production environment.', 'Log the outputs and assess the prompt leakage rate.'],
            {
                question: 'Why are traditional Web Application Firewalls (WAFs) ineffective against Prompt Injection?',
                options: ['They are too slow for LLM inference', 'Prompt injections use structurally valid semantic language that does not trigger SQLi or XSS rules', 'They block all JSON responses', 'They cannot parse API keys'],
                correctIndex: 1,
                explanation: 'A WAF looks for specific encoded syntax (e.g. `<script>`). A prompt injection is written in plain English, bypassing traditional syntax-based threat detection.'
            }
        )
    ], '/vault/curriculum/tracks/guides/16-5', undefined, 'live'
);

tracks16to17ExpansionModules['guides/16-5'] = m('16-5', 'Outsourcing & Offshore Scaling', 'BPO AI displacement, geo-arbitrage economics, and quality control.', t16, 
    ['Measure BPO unit economics vs Agentic AI', 'Secure offshore IP protection', 'Transition from headcount to compute'],
    [
        l('The End of Traditional Geo-Arbitrage', 
            [
                'For decades, enterprise strategy relied on shipping rote tasks to lower-cost labor markets. The advent of Agentic Process Automation (APA) has completely inverted the math. Running an AI agent 24/7 costs pennies on the dollar compared to offshore BPO.',
                'However, abruptly firing BPO firms causes catastrophic tribal knowledge loss. The transition must be phased: BPO workers train the agents for 6 months, acting as Human-in-the-Loop supervisors, before full automation.'
            ],
            [
                d('Agent Cost Ratio', 'Agent compute cost vs Offshore FTE cost.', '1:15 ratio'),
                d('Transition Overlap', 'The period where you pay for both BPO and AI compute.', '3-6 months')
            ],
            'Compare your current BPO spend to agentic inference sizing.',
            ['Isolate one specific offshore workflow (e.g. invoice processing).', 'Calculate the annual headcount cost.', 'Estimate the prompt/token cost for an LLM to parse 100% of the volume.'],
            undefined
        )
    ], '/vault/curriculum/tracks/guides/16-6', undefined, 'live'
);

tracks16to17ExpansionModules['guides/16-6'] = m('16-6', 'Tech Debt Forgiveness Protocols', 'Sunk cost fallacy, code bankruptcy, and structural rewrite math.', t16, 
    ['Execute Code Bankruptcy', 'Overcome the Sunk Cost Fallacy', 'Quantify Rewrite Economics'],
    [
        l('Declaring Code Bankruptcy', 
            [
                'There is an inflection point where the cost of reading, comprehending, and integrating with a legacy system drastically exceeds the cost of a full systemic rewrite. This is known as the "Code Bankruptcy Horizon."',
                'The failure of most rewrites is not technical; it is political. Leadership attempts to keep the legacy system running while building the new system with the same engineers. A successful rewrite requires total isolation (the Tiger Team approach) and a hard sunset date.'
            ],
            [
                d('Code Bankruptcy Horizon', 'The point where maintenance exceeds replacement.', 'Calculated via PDI'),
                d('Parallel Tax', 'The extra cost of running two duplicate systems.', '+40% OpEx')
            ],
            'Draft a Board-level Memo declaring bankruptcy on a legacy monolith.',
            ['Calculate the Innovation Tax of the current system.', 'Draft the CapEx required for the 6-month Tiger Team rebuild.', 'Present the break-even ROI timeline (usually 18 months).'],
            undefined
        )
    ], '/vault/curriculum/tracks/guides/16-7', 'pdi', 'live'
);

tracks16to17ExpansionModules['guides/16-7'] = m('16-7', 'Vendor Lock-In Negotiation', 'Enterprise agreements, cloud credits, and the egress taxation trap.', t16, 
    ['Leverage multi-cloud threats', 'Negotiate EDPs (Enterprise Discount Programs)', 'Manage data egress leverage'],
    [
        l('Weaponizing the Egress Tax', 
            [
                'Cloud providers use data gravity as a zero-interest loan. By making ingress free and egress prohibitively expensive, they hold your infrastructure hostage. Before signing an EDP, your architecture must theoretically prove it can run on a competing cloud within 90 days.',
                'The threat of migration is your only leverage. Do not negotiate on server costs; negotiate on egress discounting.'
            ],
            [
                d('Egress Tax Ratio', 'The penalty for moving 1TB of data off-cloud vs internal xfer.', 'Up to 10x multiplier'),
                d('EDP Commit', 'The minimum guaranteed spend across 3 years.', 'Variable by margin')
            ],
            'Audit your cloud bill specifically for Egress / Data Transfer (Out).',
            ['Review last month’s AWS or GCP bill.', 'Isolate the bandwidth charges.', 'Calculate what it would cost to migrate your primary database to Bare Metal or an alternate cloud.'],
            undefined
        )
    ], '/vault/curriculum/tracks/guides/16-8', undefined, 'live'
);

tracks16to17ExpansionModules['guides/16-8'] = m('16-8', 'Incident Response Command', 'Blameless post-mortems, P1 outage financials, and executive PR management.', t16, 
    ['Quantify downtime by the minute', 'Establish Command & Control', 'Write an executive Root Cause Analysis (RCA)'],
    [
        l('The Financial Anatomy of a P1 Outage', 
            [
                'When the primary database locks, engineering panic sets in. A 45-minute outage at a $50M ARR company costs tens of thousands of dollars in direct revenue and hundreds of thousands in reputational damage and SLA breaches.',
                'The Command & Control structure must be military-grade: one Incident Commander (who writes no code), one Communicator (who updates stakeholders), and the execution team. Blameless post-mortems must focus strictly on systemic triggers, never human error.'
            ],
            [
                d('Downtime Burn Rate', 'The cost per minute of an unresponsive application.', 'Revenue / Minutes'),
                d('MTTR (Mean Time to Resolution)', 'The speed at which the system is restored.', '< 30 Mins')
            ],
            'Write the Playbook for the next P1.',
            ['Identify who holds the "Incident Commander" role.', 'Set up an automated PagerDuty flow that spins up a private Zoom war room.', 'Draft the SLA breach templates for customer-facing communication.'],
            undefined
        )
    ], '/vault/curriculum/tracks/guides/16-9', undefined, 'live'
);

tracks16to17ExpansionModules['guides/16-9'] = m('16-9', 'Enterprise Software Valuation', 'Tech moats, M&A code base audits, and ARR multiples.', t16, 
    ['Prepare for Technical Due Diligence (M&A)', 'Increase Valuation Multiples', 'Establish IP Defensibility'],
    [
        l('Failing Technical Due Diligence', 
            [
                'During Mergers & Acquisitions, the Private Equity firm will dispatch forensic engineers to audit your codebase. They are looking for one thing: Risk. Undocumented logic, viral OSS licenses (GPLv3), and single-points-of-failure will actively reduce the valuation multiple.',
                'Fixing a viral license or unblocking a bottleneck 3 months *before* the M&A process will save millions on the final term sheet.'
            ],
            [
                d('M&A Haircut', 'The reduction in valuation based on technical debt discovery.', '5-15% of Deal Value'),
                d('Bus Factor', 'The number of developers whose departure would collapse a critical system.', 'Target: > 3')
            ],
            'Perform a mock M&A audit on your current system.',
            ['Run an automated dependency scanner to look for restricted GPL licenses.', 'List all proprietary IP logic.', 'Identify which systems are only understood by a single employee.'],
            undefined
        )
    ], '/vault/curriculum/tracks/guides/16-10', undefined, 'live'
);

tracks16to17ExpansionModules['guides/16-10'] = m('16-10', 'CEO Communication for Engineers', 'Translating latency drops into EBITDA expansion.', t16, 
    ['Speak the language of the Board', 'Correlate uptime to retention', 'Present technical CapEx requests'],
    [
        l('The EBITDA Translation Layer', 
            [
                'CEOs do not care about Webpack build times, Kubernetes namespace partitions, or React render cycles. They care about Growth, Margin, and Risk.',
                'The ultimate skill of a CTO or VP of Engineering is the "Translation Layer"—converting technical realities into strict financial realities. Refactoring is not "cleaning up code"; it is "retiring technical debt to increase feature throughput and protect EBITDA."'
            ],
            [
                d('Translation Efficacy', 'The ability to map a technical sprint to a P&L metric.', '100% Correlation'),
                d('Board Literacy', 'Ensuring the board trusts the engineering capital allocation.', 'High-Trust Environment')
            ],
            'Take your current Quarterly Engineering Goal and rewrite it for the CEO.',
            ['Remove all mention of specific technologies (AWS, React, Postgres, etc).', 'Link the outcome purely to Risk mitigated, Revenue generated, or Costs reduced.', 'Keep it under three sentences.'],
            {
                question: 'How should a VP of Engineering request $200,000 for a database migration?',
                options: ['Explain how the current database is deprecated and lacks modern features', 'Highlight the new vector embeddings and horizontal scaling that the new DB offers', 'Present it as an OpEx reduction play: spending $200K in Q3 CapEx to permanently eliminate $800K in annual DB licensing and downtime risks', 'Threaten that developers will quit if forced to use old tech'],
                correctIndex: 2,
                explanation: 'Always frame technical investments as financial leverage. Spending money to eliminate recurring overhead or risk is music to a CFO\'s ears.'
            }
        )
    ], undefined, undefined, 'live'
);

// ═══════════════════ TRACK 17: FRAMEWORK COMPARISONS EXPANSION ═══════════════════

tracks16to17ExpansionModules['comparisons/17-6'] = m('17-6', 'Kafka vs AWS EventBridge', 'Infra overhead, self-hosted pain, and event-driven architectures.', t17, 
    ['Calculate self-hosted Kafka TCO', 'Measure Serverless Eventing constraints', 'Optimize message volume pricing'],
    [
        l('The Cost of Streaming Indecision', 
            [
                'Kafka is a phenomenal tool for hyperscale data ingestion. It is also an operational nightmare that requires dedicated engineers just to maintain partition rebalancing. EventBridge is fully managed but introduces hard constraints on throughput and distinct per-event pricing.',
                'Selecting the wrong broker leads to either massive infrastructure idle costs (Kafka) or catastrophic cloud billing surprises from rapid event loops (EventBridge).'
            ],
            [
                d('Kafka Baseline TCO', 'The minimum cost of running MSK/Confluent with 3 instances.', '~$1,500/mo min'),
                d('EventBridge Tax', 'The variable cost of event routing.', '$1.00 per 1M events')
            ],
            'Map your ingestion volume. Decide between throughput-based pricing and event-based pricing based on payload size.',
            ['Identify your highest volume microservice.', 'Evaluate if events are bursty (EventBridge preferred) or a continuous heavy firehose (Kafka preferred).'],
            undefined
        )
    ], '/vault/curriculum/tracks/comparisons/17-7', undefined, 'live'
);

tracks16to17ExpansionModules['comparisons/17-7'] = m('17-7', 'Postgres vs MongoDB JSONb', 'Schema rigidity, NoSQL usage myths, and scaling bounds.', t17, 
    ['Identify premature NoSQL adoption', 'Leverage Postgres JSONb features', 'Analyze join penalties'],
    [
        l('The Great NoSQL Delusion', 
            [
                'For a decade, startups adopted MongoDB to avoid migration scripts, sacrificing ACID compliance and relational integrity purely for developer convenience. Today, Postgres’s JSONb column type provides 95% of the document-store benefits while preserving rock-solid relational power.',
                'Migrating from Mongo back to Postgres later costs millions in ETL and application rewrites.'
            ],
            [
                d('Relational Debt', 'The cost of maintaining application-side joins due to a lack of relation.', 'High CPU Tax'),
                d('JSONb Efficiency', 'The performance delta of querying unstructured data natively in PG.', 'Indexable & Fast')
            ],
            'Audit your data access patterns. Are you doing joins in the application layer?',
            ['If you have multiple MongoDB collections and pull them all to filter data via Javascript loops, you have incurred Relational Debt.', 'Plan a test migration using Postgres JSONb.'],
            undefined
        )
    ], '/vault/curriculum/tracks/comparisons/17-8', undefined, 'live'
);

tracks16to17ExpansionModules['comparisons/17-8'] = m('17-8', 'Vercel vs AWS Native', 'Developer experience premiums vs raw cloud economics.', t17, 
    ['Measure the DX Premium', 'Calculate Vercel Bandwidth costs', 'Assess CloudFormation cognitive load'],
    [
        l('Pricing the Developer Experience', 
            [
                'Vercel provides the greatest DX in frontend development, but charges a massive premium for egress bandwidth and serverless limits. Using raw AWS (Amplify, S3/CloudFront) slashes your cloud bill by 70%, but introduces intense DevOps cognitive load.',
                'The decision model relies on your engineering composition: do you have a heavy DevOps team? If yes, go raw AWS. If you are a lean frontend team seeking velocity, Vercel is worth the premium.'
            ],
            [
                d('DX Tax', 'The extra margin charged by PaaS providers for abstraction.', '+50-200% over bare metal'),
                d('Velocity Gain', 'The reduction in CI/CD pipeline building hours.', '-100 hours/yr')
            ],
            'Compare your Vercel bandwidth costs against raw AWS CloudFront egress.',
            ['Pull a Vercel enterprise invoice.', 'Calculate the AWS equivalent.', 'Determine if the savings justify hiring a DevOps engineer.'],
            undefined
        )
    ], '/vault/curriculum/tracks/comparisons/17-9', undefined, 'live'
);

tracks16to17ExpansionModules['comparisons/17-9'] = m('17-9', 'GraphQL vs RESTful APIs', 'Over-fetching elimination vs resolver bottleneck architectures.', t17, 
    ['Measure Payload optimization', 'Master the N+1 problem', 'Audit caching limitations'],
    [
        l('The GraphQL Caching Death Spiral', 
            [
                'GraphQL elegantly solves under-fetching for mobile connections by aggregating requests. However, it violently breaks standard HTTP GET caching mechanisms. Since every request is a massive POST to a single endpoint, intermediate CDNs and reverse proxies cannot cache it natively.',
                'For read-heavy workloads (like e-commerce catalogs), standard REST edges will always outperform unoptimized GraphQL.'
            ],
            [
                d('N+1 Resolver Debt', 'The exponential DB hits caused by nested GraphQL queries.', 'Destructive Load'),
                d('Payload Trimming', 'The byte reduction in mobile transit vs REST.', '-40% payload size')
            ],
            'Audit your GraphQL endpoints using strict depth limits and analyzing database logs for N+1 queries.',
            ['If you permit boundless nested queries, an attacker can crash your database instantly.', 'Implement query depth analysis today.'],
            undefined
        )
    ], '/vault/curriculum/tracks/comparisons/17-10', undefined, 'live'
);

tracks16to17ExpansionModules['comparisons/17-10'] = m('17-10', 'TailwindCSS vs Vanilla', 'Utility classes, bundle size, and design system constraints.', t17, 
    ['Calculate JIT compiler impacts', 'Maintain large code bases', 'Enforce strict UI tokens'],
    [
        l('The Economics of Styling', 
            [
                'While styling debates are often religious, the economic reality is that TailwindCSS drastically speeds up onboarding. Because the styles are co-located with the JSX, developers do not waste time hunting for rogue CSS files or negotiating global class naming collisions.',
                'The trade-off is HTML bloat, which is negligible on the wire due to Brotli/Gzip compression.'
            ],
            [
                d('Onboarding Velocity', 'The speed at which a new dev can modify UI safely.', '+50% speed'),
                d('Naming Decision Fatigue', 'The cognitive load of standardizing classes (BEM).', 'Completely Eliminated')
            ],
            'Audit your Design System. Evaluate how many unique CSS colors are defined vs the approved Tailwind config.',
            ['Find the global CSS file.', 'Check for hex codes that are slightly off from the brand standard.', 'Eliminate the variance using strict configuration tokens.'],
            undefined
        )
    ], undefined, undefined, 'live'
);
