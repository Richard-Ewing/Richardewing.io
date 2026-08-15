import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks18to22Modules: Record<string, CurriculumModule> = {};

const t18 = 'Track 18  -  The Fullstack Career';
const t19 = 'Track 19  -  Agile & Delivery Economics';
const t20 = 'Track 20  -  System Design & Architecture';
const t21 = 'Track 21  -  Traditional Product Management';
const t22 = 'Track 22  -  Engineering Culture & Motivation';

// ═══════════════════ TRACK 18: THE FULLSTACK CAREER (10 Modules) ═══════════════════

tracks18to22Modules['fullstack-career/18-1'] = m('18-1', 'Frontend State Economics', 'Cost of uncontrolled state, re-rendering waste, and React optimization ROI.', t18, 
    ['Identify re-rendering waste', 'Optimize state economics', 'Measure frontend performance ROI'], [
        l('The Cost of the React Render Tax', 
            ['Frontend state management is universally treated as a technical puzzle, but it is actually a margin-erosion vector. Uncontrolled re-renders burn client battery, increase Time to Interactive (TTI), and drop conversion rates by 2-5%.', 'React optimization is not premature if it touches revenue.'],
            [d('Render Latency', 'Lag between input and DOM confirmation.', '< 50ms')], 'Profile React app using profiler.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-2', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-2'] = m('18-2', 'Backend API Design ROI', 'REST vs GraphQL caching, payload size optimization.', t18, 
    ['Reduce payload dimensions', 'Master REST cache control'], [
        l('Payload Economics', 
            ['Over-fetching costs mobile clients data limits, but it costs servers egress fees. Shrinking a payload by 20kb on an endpoint with 1B monthly hits saves massive transit costs.'],
            [d('Egress Tax', 'Cost of moving data off cloud.', 'Target: <$50/TB')], 'Audit your heaviest endpoint payload.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-3', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-3'] = m('18-3', 'Database Query Optimization', 'N+1 problems, indexing ROI, latency cost.', t18, 
    ['Eliminate N+1 queries', 'Calculate indexing cost vs read speed'], [
        l('The N+1 Death Spiral', 
            ['A single missing join creates 10,000 recursive DB hits. An ORM is a chainsaw: wildly powerful but dangerous. Understanding the execution plan (EXPLAIN ANALYZE) is required for Senior engineering.'],
            [d('Query Execution Time', 'Raw DB fetch speed.', '< 10ms')], 'Run EXPLAIN on your top 5 queries.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-4', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-4'] = m('18-4', 'Client vs Server Rendering', 'SSR compute costs, CSR SEO impact, conversion.', t18, 
    ['Measure CDN vs Compute costs', 'Quantify SEO penalties of CSR'], [
        l('The Edge Computing Illusion', 
            ['Moving everything to SSR breaks the fundamental economics of static hosting. CDN bytes cost pennies; Edge compute milliseconds cost dollars. Architect around ISR (Incremental Static Regeneration).'],
            [d('Cold Start Penalty', 'Lag induced by booting V8 isolates.', 'Varies')], 'Convert one SSR page to ISR.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-5', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-5'] = m('18-5', 'The Promotion Calculus', 'Business outcomes, impact translation.', t18, 
    ['Speak EBITDA', 'Align technical wins with business leverage'], [
        l('Promotions are Economic Transactions', 
            ['You do not get promoted for writing clean code. You get promoted for delivering massive organizational leverage. Translating your pull requests into financial wins is the only path to Staff Engineer.'],
            [d('Leverage Score', 'Engineers unblocked by your infra.', '>10')], 'Write your promo doc using strictly dollars/hours saved.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-6', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-6'] = m('18-6', 'Node.js vs Go Economics', 'Concurrency, Memory Footprint, Cloud Billing ROI.', t18, 
    ['Measure Goroutine vs Event Loop', 'Compare memory allocations'], [
        l('The Memory Tax of V8', 
            ['Node.js apps require heavy base memory allocations. Rewriting a massive concurrent worker in Go can drop cluster requirements by 80%, yielding pure EBITDA expansion.'],
            [d('Memory Overhead', 'RAM used per 10k connections.', 'Go wins')], 'Benchmark a Node worker vs a Go binary.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-7', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-7'] = m('18-7', 'Caching Layer Mastery', 'Redis Eviction Policies, CDN Hit Rates.', t18, 
    ['Master TTL strategies', 'Prevent the Thundering Herd cache stampede'], [
        l('Cache Stampede Economics', 
            ['If a highly-trafficked TTL expires simultaneously, the database receives the full brunt of traffic at once. Using probabilistic early expiration eliminates this.'],
            [d('Cache Hit Rate', 'Percentage of requests never touching DB.', '> 90%')], 'Implement jitter in your Redis cache TTL intervals.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-8', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-8'] = m('18-8', 'The Latency Budget', 'Time-to-First-Byte, Payload Splitting.', t18, 
    ['Calculate TTFB bounds', 'Implement strict budget enforcing via Lighthouse CI'], [
        l('Latency is Abandonment', 
            ['Amazon proved decades ago that 100ms of latency costs 1% in sales. Setting a strict Webpack chunk limit forces discipline on library imports.'],
            [d('TTFB', 'Network round trip time till first stream byte.', '< 200ms')], 'Add a Lighthouse CI threshold breaking the build on large bundles.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-9', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-9'] = m('18-9', 'CI/CD Pipeline Engineering', 'GitHub Actions Pricing, Cache Steps.', t18, 
    ['Cut pipeline times in half', 'Save DevOps budget on runners'], [
        l('Pipeline Financial Engineering', 
            ['A 20-minute CI pipeline multiplied by 50 developers running 5 times a day is $100k+ in lost productivity and raw runner compute per month.'],
            [d('CI Duration', 'Time from push to green check.', '< 5 mins')], 'Implement strict Docker layer caching in your GH Actions.', undefined, undefined)
    ], '/vault/curriculum/tracks/fullstack-career/18-10', undefined, 'live'
);

tracks18to22Modules['fullstack-career/18-10'] = m('18-10', 'Fullstack Capstone Economics', 'Synthesizing the End-to-End Latency Tradeoffs.', t18, 
    ['Map the entire request lifecycle cost', 'Define the final PDI score'], [
        l('The Complete Picture', 
            ['A senior fullstack engineer understands the cost of a cursor hover in React all the way down to the B-tree index traversal in Postgres.'],
            [d('Full TCO', 'The entire stack cost.', 'Optimized')], 'Draw an architectural map with latency budgets at every node level.', undefined, undefined)
    ], undefined, undefined, 'live'
);

// ═══════════════════ TRACK 19: AGILE & DELIVERY ECONOMICS (10 Modules) ═══════════════════

tracks18to22Modules['agile-economics/19-1'] = m('19-1', 'Story Point Dollar Value', 'Engineering cost metrics, sprint burn rate.', t19, 
    ['Convert points to dollars', 'Calculate sprint burn rate'], [
        l('Pricing the Backlog', 
            ['Story points hide capital waste. A 5-point unvalidated feature is an exact expenditure of $10k+.'],
            [d('Cost Per Point', 'Sprint Burn Rate / Velocity.', 'Tracked')], 'Calculate your squad’s sprint burn rate.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-2', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-2'] = m('19-2', 'Cost of Agile Ceremonies', 'Meeting overhead, async ROI, planning costs.', t19, 
    ['Measure the cost of a 10-person daily standup', 'Transition to Async'], [
        l('The Standup Tax', 
            ['A 30-minute daily standup with 10 engineers costs roughly $50,000 per year in unrecoverable payroll. Switch to async Slack updates.'],
            [d('Meeting Overhead', '% of week spent in ceremonies.', '< 10%')], 'Cancel one recurring ceremony and replace with an async document.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-3', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-3'] = m('19-3', 'Technical Debt in the Backlog', 'Shadow backlog drag, refactoring ROI.', t19, 
    ['Quantify debt ticket value', 'Stop hiding debt from PMs'], [
        l('The Shadow Backlog', 
            ['If engineers are refactoring in secret because PMs reject debt tickets, trust is broken. Present technical debt as a risk-mitigation premium.'],
            [d('Debt Allocation', 'Sprint capacity assigned to technical debt.', '20% Fixed')], 'Force a strict 20% capacity buffer for non-product engineering.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-4', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-4'] = m('19-4', 'Predictability vs Velocity', 'Missed commitments risk, stakeholder trust.', t19, 
    ['Establish baseline flow metrics', 'Stop playing velocity games'], [
        l('Velocity is a Vanity Metric', 
            ['Velocity tracking encourages point inflation. Predictability (Say/Do ratio) is the metric that builds Board-level trust.'],
            [d('Say/Do Ratio', 'Percentage of committed story points delivered.', '> 85%')], 'Measure your trailing 3-sprint Say/Do ratio.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-5', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-5'] = m('19-5', 'Agile Capitalization', 'CapEx vs OpEx, balance sheet impact.', t19, 
    ['Capitalize R&D logic', 'Drive EBITDA growth through correct accounting'], [
        l('Software Capitalization Rules', 
            ['CFOs care deeply if engineering time is an Operating Expense (OpEx) or Capital Expenditure (CapEx). New features are assets; bug fixes are expenses.'],
            [d('CapEx Ratio', 'Percentage of squad time building new assets.', '> 70%')], 'Configure JIRA labels to automatically assign CapEx tags for finance.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-6', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-6'] = m('19-6', 'JIRA Misalignment Tax', 'Ticket Formatting, Missing Requirements, Spec Bouncing.', t19, 
    ['Eliminate Ping-Pong tickets', 'Standardize Acceptance Criteria'], [
        l('The Ping-Pong Tax', 
            ['When engineers bounce tickets back to PMs due to vague requirements, they lose flow state. Poorly written tickets add 20% overhead to cycle time.'],
            [d('First-Pass Yield', 'Tickets moving from Todo to Done without bouncing.', '> 90%')], 'Implement strict Definition of Ready (DoR) gates on all stories.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-7', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-7'] = m('19-7', 'Sprint Zero Economics', 'Architecture Runway, Initial Footprint, Design Overhead.', t19, 
    ['Value the runway setup', 'Avoid premature delivery demands'], [
        l('The Runway Cost', 
            ['Stakeholders view Sprint Zero as "delivering nothing." Frame Sprint Zero as the infrastructure procurement required before a skyscraper is built.'],
            [d('Runway Extension', 'Technical bounds solved ahead of time.', 'Stable')], 'Present a Sprint Zero architectural manifesto to stakeholders.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-8', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-8'] = m('19-8', 'CI/CD Velocity Blockers', 'Blocked PRs, Integration Failures, Review Monopolies.', t19, 
    ['Avoid PR traffic jams', 'Decentralize approvals'], [
        l('The PR Traffic Jam', 
            ['If a tech lead must review every PR, they become a single point of failure. Bottlenecks at merge cost far more than occasional bugs.'],
            [d('PR Dwell Time', 'Time PR sits waiting for review.', '< 4 hours')], 'Implement bot triaging and round-robin PR assignments.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-9', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-9'] = m('19-9', 'Squad Formation Costs', 'Tuckman Stages, Cross-Functional Overhead.', t19, 
    ['Measure the cost of a re-org', 'Stabilize team dynamics'], [
        l('The Re-Org Penalty', 
            ['Every time you shuffle a squad, you reset them to the "Forming" stage. This incurs an immediate 15% velocity hit for 6 weeks.'],
            [d('Team Tenure', 'Average lifespan of intact squads.', '> 12 months')], 'Resist the urge to shuffle developers between projects constantly.', undefined, undefined)
    ], '/vault/curriculum/tracks/agile-economics/19-10', undefined, 'live'
);

tracks18to22Modules['agile-economics/19-10'] = m('19-10', 'Continuous Delivery Value', 'Daily Deployments vs Monthly Trains, Rollback Math.', t19, 
    ['Eliminate the release train', 'Deploy fearlessly'], [
        l('The Release Train Derailment', 
            ['A monthly release train creates massive integration conflict fear. When code deploys daily, diffs are microscopic, and rollbacks are instantaneous.'],
            [d('Deployment Frequency', 'Deployments to prod per week per dev.', '> 1')], 'Implement a feature flag architecture that allows decoupling deploy from release.', undefined, undefined)
    ], undefined, undefined, 'live'
);

// ═══════════════════ TRACK 20: SYSTEM DESIGN & ARCHITECTURE (10 Modules) ═══════════════════

tracks18to22Modules['system-design/20-1'] = m('20-1', 'Monolith vs Microservice TCO', 'Network tax, deployment overhead, mental load.', t20, 
    ['Stop premature scaling', 'Quantify network tax'], [
        l('The Network Hop Tax', 
            ['Microservices turn function calls into network failures. You need API gateways, tracing, and Kafka just to simulate what used to be a local `require()`. Do not split until the team size breaks the repo.'],
            [d('Ops Ratio', 'Ratio of DevOps to Application engineers.', '< 1:10')], 'Assess if a microservice deployment can be collapsed back into the monolith.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-2', undefined, 'live'
);

tracks18to22Modules['system-design/20-2'] = m('20-2', 'Event-Driven Cost Models', 'Queue limits, message bus pricing, reconciliation.', t20, 
    ['Understand eventual consistency', 'Price the queue'], [
        l('Event Sourcing Nightmares', 
            ['While beautifully decoupled, debugging distributed event streams requires exceptional SRE maturity. If you cannot trace an asynchronous payload across 5 queue jumps, avoid it.'],
            [d('Traceability', 'Percentage of events fully instrumented.', '100%')], 'Implement AWS X-Ray or DataDog distributed tracing.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-3', undefined, 'live'
);

tracks18to22Modules['system-design/20-3'] = m('20-3', 'Caching Layer Economics', 'Redis vs DB costs, cache invalidation risk.', t20, 
    ['Mitigate DB read overhead', 'Invalidate gracefully'], [
        l('Cache Invalidation Complexity', 
            ['The hardest problem in comp sci. The closer the cache is to the user (CDN > App Cache > Redis DB), the harder it is to invalidate safely.'],
            [d('Hit Ratio', 'Successful cache pulls.', '> 80%')], 'Adopt a rigorous key-invalidation schema.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-4', undefined, 'live'
);

tracks18to22Modules['system-design/20-4'] = m('20-4', 'Database Sharding & Scaling', 'Horizontal vs vertical efficiency, migration costs.', t20, 
    ['Exhaust vertical limits first', 'Understand the sharding key'], [
        l('Vertical Scaling First', 
            ['Before you spend 6 months writing applicative database sharding logic, simply click the button to rent a bigger Postgres instance. Engineering time is vastly more expensive than a $5,000/mo RDS box.'],
            [d('Instance Cap', 'The CPU/Mem ceiling of vertical scaling.', 'Usually sufficient')], 'Upgrade your DB instance to highest tier before adopting Sharding.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-5', undefined, 'live'
);

tracks18to22Modules['system-design/20-5'] = m('20-5', 'Architecture Defensibility', 'Technical moats, vendor strategy, lock-in.', t20, 
    ['Defend against vendor lock-in', 'Own the domain layer'], [
        l('The AWS Golden Handcuffs', 
            ['If you use DynamoDB, AWS Cognito, and SQS, you are permanently bound to AWS. Abstract your storage and identity through Hexagonal Architecture interfaces.'],
            [d('Portability', 'Time to migrate to GCP.', '< 3 Months')], 'Create strict Repository Pattern boundaries around all AWS SDK calls.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-6', undefined, 'live'
);

tracks18to22Modules['system-design/20-6'] = m('20-6', 'Graph Architectures & Relational Limits', 'N-to-N Complexity, Recursive Queries, Neo4j Multipliers.', t20, 
    ['Determine if you actually need a Graph Database', 'Evaluate query latency'], [
        l('The Recursive Pain of Postgres', 
            ['If you are traversing 5 degrees of depth in SQL, your reads will collapse the DB. Moving deep relationships to a Graph DB yields an O(1) traversal jump.'],
            [d('Depth Tax', 'Query duration at depth n+1.', '< 5ms in Graph')], 'Prototype a Neo4j instance for your friend/follow mechanics.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-7', undefined, 'live'
);

tracks18to22Modules['system-design/20-7'] = m('20-7', 'CQRS & Event Sourcing Ceilings', 'Write vs Read Models, DB Contention.', t20, 
    ['Separate read profiles from write burdens', 'Handle high-volume writes safely'], [
        l('CQRS Financial Return', 
            ['Command Query Responsibility Segregation separates read scaling from write scaling. If you have 10,000 reads per every write, keeping them in the same DB schema is financially inefficient.'],
            [d('Read/Write Ratio', 'Ratio of select to insert.', '> 1000:1')], 'Deploy a read-replica dedicated strictly to analytical queries.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-8', undefined, 'live'
);

tracks18to22Modules['system-design/20-8'] = m('20-8', 'CDN Data Transit Pricing', 'Edge Nodes, Cross-Region Transit Tax.', t20, 
    ['Calculate Egress bounds', 'Leverage Cloudflare'], [
        l('The S3 Inter-Region Tax', 
            ['Moving data across AWS Availability Zones costs money. Serving raw assets directly out of an S3 bucket to end users is financial suicide. Put Cloudflare in front of it.'],
            [d('CDN Cache Load', 'Percentage of assets served from edge.', '> 95%')], 'Audit your direct S3 GET volume and insert a CDN.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-9', undefined, 'live'
);

tracks18to22Modules['system-design/20-9'] = m('20-9', 'Stateless API Horizons', 'JWT Signatures, Redis Sessions.', t20, 
    ['Eradicate session affinity', 'Master JWT'], [
        l('The End of Sticky Sessions', 
            ['A True horizontal architecture cannot care which pod serves the request. Embedding user state in verified JWT tokens completely frees your loadbalancer to route ruthlessly.'],
            [d('Pod Affinity', 'Requiring a user to hit a specific core.', '0%')], 'Refactor an old session-state into an encrypted JWT.', undefined, undefined)
    ], '/vault/curriculum/tracks/system-design/20-10', undefined, 'live'
);

tracks18to22Modules['system-design/20-10'] = m('20-10', 'Architecture Simulation Test', 'Failure Injection, Chaos Monkeys, TCO Projections.', t20, 
    ['Inject failure automatically', 'Prove fault tolerance'], [
        l('Chaos Engineering Economics', 
            ['You do not have a High Availability architecture until you have survived an automated node termination in Production. Chaos Engineering verifies that your failover logic actually executes.'],
            [d('Recovery Action', 'Time for automated failover to stabilize.', '< 3 mins')], 'Turn off a secondary Redis node during staging load test.', undefined, undefined)
    ], undefined, undefined, 'live'
);

// ═══════════════════ TRACK 21: TRADITIONAL PM (10 Modules) ═══════════════════

tracks18to22Modules['traditional-pm/21-1'] = m('21-1', 'Discovery Phase Economics', 'User research cost, prototyping ROI.', t21, 
    ['Calculate validation spend', 'Avoid endless discovery'], [
        l('Stop Validating Forever', 
            ['"Continuous Discovery" often devolves into PM paralysis. Validating a hypothesis should cost 10% of the build cost. The rest is diminishing returns.'],
            [d('Validation Cap', 'Max budget allocated to design validation per feature.', '10% of eng cost')], 'Launch a fake door test to measure real click intent instead of survey intent.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-2', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-2'] = m('21-2', 'Feature Sunset Calculus', 'Zombie features, negative-ROI pruning.', t21, 
    ['Kill dead weight', 'Measure maintenance cost'], [
        l('Zombie Features are Liability', 
            ['If a feature is used by 1% of the base but occupies 5% of the codebase, it is leaching maintenance cycles and cloud costs. Sunset it ruthlessly.'],
            [d('Adoption Threshold', 'Usage % required to avoid deprecation.', '5-10% DAU')], 'Analyze Amplitude events to find unused code and delete it.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-3', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-3'] = m('21-3', 'The Cost of Scope Creep', 'Compounding delays, feature freeze economics.', t21, 
    ['Baseline the MVP', 'Deny mid-flight adjustments'], [
        l('Mid-Flight Adjustments Destroy Margin', 
            ['A feature change introduced during sprint planning is healthy. A change introduced after the backend is built burns unrecoverable capital.'],
            [d('Change Order Penalty', 'Velocity friction of late scope changes.', 'Destructive')], 'Enforce a strict code-freeze policy for features currently in code-review.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-4', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-4'] = m('21-4', 'Build vs Buy Validation', 'Integration risk, maintenance tax.', t21, 
    ['Buy commodities, build differentiators', 'Audit API risks'], [
        l('Commodity Operations', 
            ['Do not build your own authentication system (use Clerk/Auth0). Do not build payment gateways (Stripe). Focus every engineering hour ONLY on the unique alpha of your product.'],
            [d('Differentiation Ratio', 'Engineering time spent on core value prop.', '> 80%')], 'Audit the backlog for commodity tools and replace them with SaaS.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-5', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-5'] = m('21-5', 'Stakeholder Alignment Value', 'Misalignment friction, roadmap trust.', t21, 
    ['Communicate via trade-offs', 'Banish binary answers'], [
        l('The "Yes, And" Trade-off', 
            ['When sales demands a new feature, do not say "no." Say "Yes, which of these three committed deliverables should we delay by a month to build it?" Forced constraint creates true alignment.'],
            [d('Stakeholder Literacy', 'Business units understanding dev capacity.', 'Aligned')], 'Create a capacity matrix slider for the next roadmap meeting.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-6', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-6'] = m('21-6', 'Retention vs Acquisition Deficits', 'CAC Payback, Down-Sell Churn, PM Product Led Growth.', t21, 
    ['Align engineering to retention metrics', 'Measure NRR', 'Product Led Growth'], [
        l('The Retention Engine', 
            ['Building features for acquisition is a marketing function. Building features for retention is a product function. Retention compounds; acquisition scales linearly.'],
            [d('Net Revenue Retention', 'Income from existing clients + expansions - churn.', '> 110%')], 'Tag your JIRA tickets with either "Acquisition" or "Retention" goals.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-7', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-7'] = m('21-7', 'A/B Testing Infra Costs', 'Traffic Splitting Overheads, Statistical Significance Delays.', t21, 
    ['Stop A/B testing color palettes', 'Test fundamental behavioral changes'], [
        l('Statistical Significance Paralysis', 
            ['Running a test for 4 weeks just to get a 0.2% lift is a waste of engineering bandwidth. Only execute multivariate testing on massive, disruptive workflow changes.'],
            [d('Meaningful Impact Threshold', 'The minimum expected lift to justify testing.', '> 5%')], 'Enforce an expected ROI threshold before authorizing an A/B split.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-8', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-8'] = m('21-8', 'Feature Flag Economics', 'Dark Launches, LaunchDarkly Licensing, Code Bloat.', t21, 
    ['Implement safe Dark Launches', 'Prune old flags'], [
        l('The Flag Cemetery', 
            ['Feature flags are technical debt loans. If you leave a boolean branch in the code for 6 months after the feature launched, you double your testing surface area matrix. Delete flags immediately upon full rollout.'],
            [d('Stale Flag Age', 'Days since a feature flag was 100% launched.', '< 14 days')], 'Execute a sweeping PR to remove all 100% rolled-out flags.', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-9', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-9'] = m('21-9', 'Competitive Feature Parity', 'Sunk Cost Trap, Differentiation vs Cloning.', t21, 
    ['Stop chasing competitors', 'Build divergent value'], [
        l('The Feature Parity Trap', 
            ['If you spend 18 months copying your competitor’s best feature, by the time you launch it, they have moved on. They set the pace; you are just catching up. Differentiate by ignoring parity.'],
            [d('Imitation Spend', 'R&D capital spent copying competitors.', 'Zero')], 'Reject a roadmap item based entirely on "Competitor X just launched it."', undefined, undefined)
    ], '/vault/curriculum/tracks/traditional-pm/21-10', undefined, 'live'
);

tracks18to22Modules['traditional-pm/21-10'] = m('21-10', 'End-to-End Release Management', 'Marketing Sync, Sales Enablement Taxes.', t21, 
    ['Synchronize dev pushes with marketing launches', 'Enable the sales floor'], [
        l('Code Deployment vs Product Release', 
            ['Merging to main is a technical event. A product release is a commercial event. PMs must decouple the two, allowing engineers to merge fearlessly behind flags while marketing preps the Go-To-Market strategy.'],
            [d('Release Decoupling', 'Is software deploy completely unlinked from marketing launch?', 'Yes')], 'Draft a Sales Enablement document alongside the PR.', undefined, undefined)
    ], undefined, undefined, 'live'
);

// ═══════════════════ TRACK 22: ENGINEERING CULTURE (10 Modules) ═══════════════════

tracks18to22Modules['engineering-culture/22-1'] = m('22-1', 'Engineer Replacement Cost', 'Recruiting costs, lost velocity, onboarding drag.', t22, 
    ['Measure true attrition damage', 'Acknowledge tribal knowledge loss'], [
        l('The Arithmetic of Attrition', 
            ['Replacing a senior engineer costs roughly 150% of their base salary in recruiting logic, lost velocity from the team filling the gap, and raw domain context evaporation.'],
            [d('Replacement Tax', 'Cost to restore velocity via hire.', '>$150k per dev')], 'Pre-approve a $20k retention bonus pool for key performers.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-2', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-2'] = m('22-2', 'ROI of Psychological Safety', 'Fear-based QA, hidden redundancy, deployment speed.', t22, 
    ['Eliminate blame culture', 'Increase deployment frequency'], [
        l('Fear Destroys Velocity', 
            ['If an engineer will be fired for bringing down Prod, they will test locally for 4 weeks. If the system is blameless and rollback is automatic, they will deploy in 4 minutes.'],
            [d('Psychological Safety Index', 'Speed of issue declaration.', 'Immediate reporting')], 'Publicly reward the next engineer who accidentally causes a minor outage and reports it.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-3', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-3'] = m('22-3', 'Toxic Debt Quantification', 'Collaboration loss, negative impact on team output.', t22, 
    ['Identify brilliant jerks', 'Measure the team suppression zone'], [
        l('The "Brilliant Jerk" Calculus', 
            ['A Staff Engineer who writes 10x code but makes 5 mid-level engineers miserable, lowering their output by 40% each, represents a net-negative to the organization. Fire them.'],
            [d('Collaboration Suppression', 'Velocity drop across team due to toxicity.', 'Terminal')], 'Analyze commit volume distributions to find team suppression.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-4', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-4'] = m('22-4', 'Developer Experience (DX)', 'Internal tooling, flow state revenue generation.', t22, 
    ['Optimize CI/CD tools', 'Respect the flow state'], [
        l('Flow State is Capital', 
            ['Engineers produce 80% of their value in deep, uninterrupted flow states. Mandating M1/M2/M3 high-end laptops and zero-friction CI/CD is an investment with a 1000% return.'],
            [d('Build Environment Time', 'Time to spin up local cluster.', '< 2 Mins')], 'Measure the time it takes to cold-start your dev environment.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-5', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-5'] = m('22-5', 'Compensation vs Equity', 'Pay bands, retention strategies, value alignment.', t22, 
    ['Build fair pay bands', 'Explain equity mathematics'], [
        l('The Transparency Dividend', 
            ['Obscured compensation models breed resentment. Publishing transparent leveling grids and distinct base vs. option grants ensures alignment and sets behavior expectations.'],
            [d('Leveling Clarity', 'Understanding of required skills for next band.', 'Fully Documented')], 'Publish an internal engineering leveling matrix.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-6', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-6'] = m('22-6', 'Fully Distributed Economics', 'Remote Comm Tax, Asynchronous Tooling Costs, Salary Arbitrage.', t22, 
    ['Master Geo-Arbitrage', 'Deploy synchronous hubs'], [
        l('The Asynchronous Mandate', 
            ['If you hire a global, distributed team but run it synchronously via constant Zoom meetings in PST, you get the worst of both worlds. Distributed work requires extreme, rigorous written documentation.'],
            [d('Written Async Clarity', 'Ability to digest requirements offline.', '100% PR Ready')], 'Mandate that all architectural decisions are logged via ADRs in Github.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-7', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-7'] = m('22-7', 'In-Person Return ROI', 'Office Leases, Proximity Bias, Spontaneous Debugging.', t22, 
    ['Calculate desk utilization', 'Measure whiteboard momentum'], [
        l('The Whiteboard Premium', 
            ['Certain systems architectures are solved 10x faster in person. However, forcing engineers to commute 2 hours to sit on Zoom calls in an open office destroys value. Leverage office space strictly for collaborative sprints.'],
            [d('Collaborative Value', 'Offices used strictly for design, not IC output.', 'Design Sprints')], 'Survey engineers on what specific tasks are improved by the office space.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-8', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-8'] = m('22-8', 'Meeting Attrition Math', 'Zoom Exhaustion, Context Switching Time, Maker Schedules.', t22, 
    ['Defend the Maker Schedule', 'Delete status updates'], [
        l('The Maker Schedule Economy', 
            ['A 30-minute meeting in the middle of a 4-hour coding block destroys the entire block. Context switching takes 25 minutes to recover from. Cluster all meetings to one end of the day.'],
            [d('Uninterrupted Blocks', 'Continuous hours logged per week per dev.', '> 20 hours')], 'Institute a "No Meetings Wednesday" policy globally.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-9', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-9'] = m('22-9', 'Seniority Balance Pricing', 'Junior vs Senior Ratios, Mentoring Overhead, Delivery Certainty.', t22, 
    ['Avoid top-heavy stagnation', 'Measure mentoring tax'], [
        l('The Mentoring Tax', 
            ['A squad of 1 Senior and 4 Juniors will output far less than just 1 Senior alone. A healthy team pairs 1 Senior to 1.5 Mid/Juniors. Too many juniors bankrupts the system in mentoring overhead.'],
            [d('Seniority Ratio', 'Optimum ratio of L5+ to L2/L3.', '1:2 Max')], 'Audit the squad leveling matrix across all engineering pods.', undefined, undefined)
    ], '/vault/curriculum/tracks/engineering-culture/22-10', undefined, 'live'
);

tracks18to22Modules['engineering-culture/22-10'] = m('22-10', 'Offsite Retreat Capitalization', 'Travel Spend vs Team Bonding ROI, Trust Bridges.', t22, 
    ['Fund offsites out of real estate savings', 'Build Trust Bridges'], [
        l('Trust Bridges Pay Dividends', 
            ['When engineers build personal rapport in person twice a year, the "Assumption of Intent" during intense online PR reviews shifts from hostile to helpful. The ROI on a $50k offsite is realized in conflict resolution velocity.'],
            [d('Rapport Capital', 'Speed at which disputes are settled online.', 'High Trust')], 'Use commercial real estate savings to fund a Bi-Annual global offsite.', undefined, undefined)
    ], undefined, undefined, 'live'
);
