import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks20Modules: Record<string, CurriculumModule> = {};
const t20 = 'Track 20 — System Design & Architecture';

tracks20Modules['system-design/20-1'] = m('20-1', 'Monolith vs Microservice TCO', 'Network tax, deployment overhead, mental load.', t20, 
    ['Stop premature scaling', 'Quantify network tax'], [
        l('The Brutal Network Hop Tax', 
            [
                'Microservices aggressively convert deterministic, instantaneous memory function calls into highly volatile network failures. You are forced to deploy complex API gateways, distributed tracing, and Kafka brokers simply to simulate what used to be a reliable local `require()` statement.', 
                'Prematurely splitting a monolith destroys startup velocity. The only mathematically sound reason to split a monolith is when the sheer size of the engineering team (50+ devs) physically breaks the Git repository merge dynamics and release cycle.',
                'The Total Cost of Ownership (TCO) of microservices includes compounding SRE payroll to manage Kubernetes, ballooning Cloud ingress/egress fees between pods, and severe cognitive debugging overhead.'
            ],
            [
                d('Ops-to-App Ratio', 'The ratio of expensive DevOps engineers required to support Application engineers.', '< 1:10 Healthy Bound'),
                d('Inter-Pod Latency', 'The hidden millisecond penalties compounded across chained microservice requests.', 'Spikes significantly')
            ], 
            'Aggressively assess if a struggling microservice deployment can be collapsed back into the core monolith.', 
            ['Review your DataDog or NewRelic network traces for services calling each other sequentially for a single payload.', 'Calculate the raw AWS transit cost of that internal data bouncing.', 'Pilot a single route merge back into the monolithic core.'], 
            {
                question: 'What is the only mathematically sound trigger for splitting a monolith into microservices?',
                options: ['When the application needs to use different unproven beta programming languages', 'When the team size scales to the point that Git merge conflicts and deployment queues physically paralyze output', 'To utilize Docker', 'Because REST requires it'],
                correctIndex: 1,
                explanation: 'Microservices solve organizational scaling problems, not performance problems. Splitting a codebase with 5 engineers introduces massive DevOps pain with zero output velocity gain.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-2', undefined, 'live'
);

tracks20Modules['system-design/20-2'] = m('20-2', 'Event-Driven Cost Models', 'Queue limits, message bus pricing, reconciliation.', t20, 
    ['Understand eventual consistency', 'Price the queue'], [
        l('The Event Sourcing Nightmare', 
            [
                'Event-driven architectures are conceptually beautiful but operationally terrifying. Debugging deeply distributed, asynchronous event streams requires exceptional SRE maturity. If you cannot trace a rogue asynchronous payload across 5 independent queue jumps instantly, do not build it.', 
                'The financial cost of Event Sourcing is entirely rooted in data deduplication and reconciliation. When an event fires twice (at-least-once delivery), your downstream databases must be flawlessly idempotent, or you risk executing duplicate financial transactions.',
                'Relying strictly on eventually consistent data stores means the UI must be radically redesigned to expect latency, drastically complicating the frontend user experience.'
            ],
            [
                d('Distributed Traceability', 'The percentage of async events fully instrumented entirely across the stack.', '100% Mandatory'),
                d('Reconciliation Failure Risk', 'The monetary cost of a duplicated event execution.', 'Finite Financial Harm')
            ], 
            'Implement rigorous distributed tracing across your entire event-driven architecture.', 
            ['Integrate AWS X-Ray, DataDog APM, or OpenTelemetry.', 'Ensure every initial API gateway request injects a `trace_id` header.', 'Validate that the ID is successfully passed through all Kafka topics and SQS queues natively.'], 
            {
                question: 'What is the primary danger of "at-least-once" delivery in event-driven systems?',
                options: ['Messages get deleted automatically', 'It causes the message broker to charge too much', 'If downstream services are not strictly idempotent, they will incorrectly process duplicated events causing compounding data corruption', 'It slows down the database index'],
                correctIndex: 2,
                explanation: 'Network partitions guarantee that message brokers will occasionally retry the exact same payload. If a payment service isn\'t idempotent, it will charge the customer twice.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-3', undefined, 'live'
);

tracks20Modules['system-design/20-3'] = m('20-3', 'Caching Layer Economics', 'Redis vs DB costs, cache invalidation risk.', t20, 
    ['Mitigate DB read overhead', 'Invalidate gracefully'], [
        l('The Abyss of Cache Invalidation', 
            [
                '"There are two hard things in computer science: cache invalidation and naming things." The closer a caching layer resides to the end user (CDN > App Cache > Redis > DB), the exponentially harder it becomes to invalidate safely and synchronously.', 
                'Aggressively deploying Redis without a bulletproof, deterministic key-eviction strategy results in users viewing radically stale data, triggering catastrophic customer support cascades.',
                'However, pushing 90% of your read-heavy traffic into specialized in-memory caches shields your expensive Relational SQL databases from buckling under massive read concurrency, generating immense operational savings.'
            ],
            [
                d('Overall Cache Hit Ratio', 'The percentage of inbound queries successfully diverted from the primary database.', '> 80% Target'),
                d('Eviction Desync Window', 'The critical time difference between a database write and the global cache update.', 'Must be controlled')
            ], 
            'Deploy a rigorous, deterministic key-invalidation schema tied directly to your ORM.', 
            ['Map every high-read table to a strict Redis key prefix format (e.g. `user_profile_{id}`).', 'Bind a post-save hook on the database ORM to automatically trigger a Redis `DEL` command on mutation.', 'Verify the cache miss successfully repopulates.'], 
            {
                question: 'Why is caching at the CDN edge dangerous for highly dynamic user data?',
                options: ['CDNs charge per megabyte of cached data', 'Invalidating a global edge cache is notoriously slow and uncoordinated, leading to users seeing highly stale personal data', 'CDNs cannot cache JSON', 'CDNs only work for static images'],
                correctIndex: 1,
                explanation: 'An edge cache is physically distributed across the planet. If a user updates their profile and the CDN isn\'t invalidated perfectly, they will refresh and see their old data instantly.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-4', undefined, 'live'
);

tracks20Modules['system-design/20-4'] = m('20-4', 'Database Sharding & Scaling', 'Horizontal vs vertical efficiency, migration costs.', t20, 
    ['Exhaust vertical limits first', 'Understand the sharding key'], [
        l('Vertical Scaling Always Wins First', 
            [
                'Before an engineering team spends six agonizing months writing custom applicative database sharding logic to split a Postgres database horizontally, they must simply click the button to rent a massive server. ', 
                'The brutal economic reality is that engineering time is vastly more expensive than a highly-spec’d $5,000/mo AWS RDS box. Vertical scaling is a zero-downtime, zero-engineering silver bullet for database capacity until you physically run out of silicon.',
                'Sharding introduces profound complexity: cross-shard JOINs become physically impossible, backups become distributed nightmares, and picking the wrong Shard Key permanently destroys data balancing. Exhaust vertical CPU and RAM entirely before ever attempting a shard.'
            ],
            [
                d('Vertical Instance Cap', 'The absolute maximum CPU/Mem ceiling for a single cloud DB instance.', 'Currently massive (e.g. 24TB RAM)'),
                d('Sharding Migration Payroll', 'The raw developer cost to refactor queries for distributed horizontal routing.', 'Hundreds of thousands of dollars')
            ], 
            'Halt all premature Database Sharding conversations and immediately upgrade the instance.', 
            ['Check the maximum instance size currently available for Postgres on your cloud provider.', 'Calculate the cost difference between your current tier and the maximum tier.', 'Compare that OpEx delta against precisely 6 months of three senior engineers\' CapEx payroll.'], 
            {
                question: 'Why should you exhaust vertical scaling before attempting database sharding?',
                options: ['Sharding voids cloud SLAs', 'Vertical scaling requires zero application logic refactoring, whereas sharding destroys native JOINs and costs immense engineering capital to orchestrate', 'Vertical scaling is always cheaper than horizontal scaling', 'Databases cannot be split'],
                correctIndex: 1,
                explanation: 'Paying a monthly premium for a massive single server is far cheaper than paying the salaries of senior engineers rewriting your entire ORM mapping to handle distributed shard routing.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-5', undefined, 'live'
);

tracks20Modules['system-design/20-5'] = m('20-5', 'Architecture Defensibility', 'Technical moats, vendor strategy, lock-in.', t20, 
    ['Defend against vendor lock-in', 'Own the domain layer'], [
        l('The AWS Golden Handcuffs', 
            [
                'Rapid adoption of heavy proprietary cloud primitives (e.g., DynamoDB, AWS Cognito, Google Spanner, SQS) permanently binds your application architecture to a single vendor. This completely obliterates your leverage during contract negotiations.', 
                'Architectural defensibility requires constructing strict Hexagonal Architecture boundaries. Your core business logic must never import massive cloud SDKs directly. You must build thin Interface Repositories that wrap the cloud logic safely.',
                'By abstracting data storage and identity verification behind strict interfaces, you gain the operational leverage to credibly threaten a massive migration to a competitor if your cloud invoice spirals out of control.'
            ],
            [
                d('Cloud Portability Window', 'The theoretical amount of time required to lift-and-shift to Azure or GCP.', '< 3 Months Target'),
                d('Proprietary Service Premium', 'The extra margin charged for deeply managed, sticky cloud services.', 'Often massive long-term')
            ], 
            'Create strict Repository Pattern boundaries encircling all external cloud SDK calls.', 
            ['Isolate a direct call to AWS DynamoDB buried deep within your application logic.', 'Refactor it into a generic `UserRepository` interface with abstract methods like `.findById()`.', 'Implement the AWS logic strictly within an isolated adapter class.'], 
            {
                question: 'How do strict Interface boundaries (Hexagonal Architecture) reduce cloud costs?',
                options: ['By compressing data automatically', 'By preventing direct codebase entanglement with proprietary SDKs, allowing the firm to credibly threaten migration during price negotiations', 'By optimizing AWS Lambda execution speeds', 'By making code compile natively to c++'],
                correctIndex: 1,
                explanation: 'A company cannot aggressively negotiate an Enterprise Discount if the cloud provider knows rewriting the application would take two years. Isolation creates leverage.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-6', undefined, 'live'
);

tracks20Modules['system-design/20-6'] = m('20-6', 'Graph Architectures & Relational Limits', 'N-to-N Complexity, Recursive Queries, Neo4j Multipliers.', t20, 
    ['Determine if you actually need a Graph Database', 'Evaluate query latency'], [
        l('The Recursive Pain of Postgres', 
            [
                'While PostgreSQL is undeniably powerful, forcing it to traverse five highly-dynamic degrees of depth in a massive social follower web (e.g., determining the friends of friends of friends) will violently collapse the database via exponential recursion.', 
                'Moving dense, deeply-linked relationships to a specialized Graph DB (like Neo4j) yields a profound $O(1)$ traversal jump. Graph databases treat the relationships themselves as physical records, eliminating computationally devastating JOIN sweeps entirely.',
                'However, running a parallel database architecture introduces synchronization friction. You must isolate exactly which highly relational functions deserve to be pushed to the Graph while maintaining the primary source of truth in SQL.'
            ],
            [
                d('Recursive Depth Tax', 'The logarithmic query duration spike required to execute a massive relational JOIN depth > 3.', 'Destructive in SQL'),
                d('Graph Traversal Velocity', 'The speed at which a Graph DB executes multi-degree relational lookups.', '< 5ms Constant')
            ], 
            'Prototype an isolated Neo4j or Amazon Neptune instance explicitly for your deeply relational mechanics.', 
            ['Identify the complex \'Recommend\' or \'Friend\' query currently freezing your Postgres instance.', 'Deploy a small Neo4j sandbox and map the nodes.', 'Benchmark the identical traversal depth against the SQL environment.'], 
            {
                question: 'When is migrating a dataset to a Graph database financially viable?',
                options: ['When storing flat log files', 'When the application primarily queries deeply nested, recursive relationships (like friend networks) that consistently time-out standard SQL engines', 'When the team wants to use GraphQL', 'When you need strict ACID compliance for single transactions'],
                correctIndex: 1,
                explanation: 'SQL is powerful but struggles fundamentally with many-to-many recursive relationships. Graph databases are built exclusively to traverse webs at a constant speed.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-7', undefined, 'live'
);

tracks20Modules['system-design/20-7'] = m('20-7', 'CQRS & Event Sourcing Ceilings', 'Write vs Read Models, DB Contention.', t20, 
    ['Separate read profiles from write burdens', 'Handle high-volume writes safely'], [
        l('Maximized CQRS Financial Returns', 
            [
                'Command Query Responsibility Segregation (CQRS) physically separates highly volatile read-scaling mechanics from intense write-scaling infrastructure. If your application boasts 10,000 analytical reads for every single data insert, keeping them bound to the exact same DB engine is financially negligent.', 
                'Standard architectures lock the entire table during heavy writes, freezing all analytics dashboards. By splitting the read model into a dedicated, highly indexed replica, the write database remains unencumbered and lightning fast.',
                'The massive trade-off is eventual consistency. The architecture must tolerate the reality that a user might commit data and briefly see a stale read while the replica syncs.'
            ],
            [
                d('Read/Write Asymmetry Ratio', 'The calculated ratio of database SELECT operations to INSERT/UPDATE operations.', '> 1000:1 Threshold'),
                d('Write Thread Contention', 'The millisecond delay imposed on read queries waiting for active write-locks to clear.', 'Removed via CQRS')
            ], 
            'Decouple your heavy analytic dashboard routes to target a dedicated read-replica.', 
            ['Deploy an exact read-only database replica on via your cloud provider.', 'Refactor the heavy reporting/analytics dashboard endpoints to query purely from the replica.', 'Measure the immense CPU offload from the primary master write database.'], 
            {
                question: 'What is the primary architectural benefit of CQRS for heavy-read applications?',
                options: ['It uses less disk space', 'It guarantees absolute real-time ACID consistency across all nodes globally', 'It physically isolates intense read bottlenecks from write-locks, allowing both sides to scale completely independently', 'It automatically compiles SQL queries into faster binaries'],
                correctIndex: 2,
                explanation: 'When one master database handles both heavy analytics reads and constant transactional writes, locks occur. Separation prevents them from choking each other.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-8', undefined, 'live'
);

tracks20Modules['system-design/20-8'] = m('20-8', 'CDN Data Transit Pricing', 'Edge Nodes, Cross-Region Transit Tax.', t20, 
    ['Calculate Egress bounds', 'Leverage Cloudflare'], [
        l('The Devastating S3 Inter-Region Tax', 
            [
                'Moving raw data between AWS Availability Zones costs actual money. Serving massive raw assets directly out of an S3 bucket to end users over the internet is financial suicide that will bankrupt an application at scale.', 
                'Architecturally, deploying an aggressive edge proxy like Cloudflare immediately in front of massive storage structures cuts transit costs by upwards of 90%.',
                'If Cloudflare successfully caches heavy media assets at the physical edge node geographically closest to the user, the request literally never triggers a billed AWS egress event. You are shielding your storage from bandwidth exploitation.'
            ],
            [
                d('CDN Edge Cache Load', 'The explicitly measured percentage of massive media assets served purely from edge nodes.', '> 95% Mandatory'),
                d('Direct Origin Transit Tax', 'The exorbitant cost of HTTP requests directly draining an unprotected S3 bucket.', 'Avoid Entirely')
            ], 
            'Execute a sweeping audit of your direct Amazon S3 HTTP GET volume and aggressively insert a CDN layer.', 
            ['Identify all direct S3 public asset URLs scattered within your frontend codebase.', 'Ensure Cloudflare or CloudFront sits in front of the bucket and rewrite the URLs.', 'Enable aggressive cache headers for entirely static assets (e.g. `Cache-Control: public, max-age=31536000`).'], 
            {
                question: 'Why is serving heavy media directly from a public AWS S3 bucket considered "financial suicide" at scale?',
                options: ['Because S3 is extremely slow', 'Because cloud providers charge enormous outgoing egress transit fees for every single gigabyte requested by an end user directly from origin', 'Because hackers can easily delete public S3 files', 'Because CDN edge nodes have larger hard drives'],
                correctIndex: 1,
                explanation: 'A CDN absorbs the massive inbound data requests at the edge, serving cached copies and preventing AWS from billing you for the bandwidth.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-9', undefined, 'live'
);

tracks20Modules['system-design/20-9'] = m('20-9', 'Stateless API Horizons', 'JWT Signatures, Redis Sessions.', t20, 
    ['Eradicate session affinity', 'Master JWT'], [
        l('The Complete Eradication of Sticky Sessions', 
            [
                'A true, infinitely escalating horizontal architecture cannot physically care which server pod is handling the inbound request. Designing a system that demands a user remains pinned ("Sticky Sessions") to a single server completely shatters elasticity and load-balacing.', 
                'Embedding verified user state directly entirely within cryptographically signed JWT tokens frees your loadbalancer to route ruthlessly across hundreds of ephemeral instances simultaneously.',
                'The token itself becomes the undeniable source of truth, removing the need for a synchronized global Redis instance strictly for session validation on every single routing hop.'
            ],
            [
                d('Pod Affinity Requirement', 'The absolute necessity for a specific user to hit the exact same core across multiple requests.', '0% Mandatory Limit'),
                d('Session DB Lookup Tax', 'The millisecond penalty applied to verifying a session token via database hit.', 'Bypassed via JWT Crypto')
            ], 
            'Refactor a legacy, DB-driven session state directly into an encrypted, stateless JWT payload.', 
            ['Remove the requirement to query the `Sessions` table on every authenticated router hit.', 'Re-encode user roles and ID securely within an HMAC-SHA256 signed JWT.', 'Verify the payload entirely through cryptographic math rather than database lookups.'], 
            {
                question: 'How do stateless JWTs drastically improve load balancing architectures?',
                options: ['They compress the web traffic into smaller payloads', 'They completely remove the need for "sticky sessions", allowing the load balancer to distribute incoming traffic flawlessly to ANY available server pod without breaking authentication', 'They prevent SQL injection natively', 'They automatically refresh when expired'],
                correctIndex: 1,
                explanation: 'If a user session must stay on Server A to remain logged in, Server A can become overwhelmed while Server B sits idle. Stateless tokens solve this.'
            }
        )
    ], '/vault/curriculum/tracks/system-design/20-10', undefined, 'live'
);

tracks20Modules['system-design/20-10'] = m('20-10', 'Architecture Simulation Test', 'Failure Injection, Chaos Monkeys, TCO Projections.', t20, 
    ['Inject failure automatically', 'Prove fault tolerance'], [
        l('Chaos Engineering Economics', 
            [
                'Enterprise engineering postulates a brutal truth: You do not actually possess a High Availability architecture until you have survived an automated node termination in Production. Theoretical fault-tolerance is completely divorced from actual recovery latency.', 
                'Deploying Chaos Chaos Engineering tools (like Netflix\'s Chaos Monkey) ruthlessly verifies that your failover logic genuinely executes under extreme duress.',
                'Failing an arbitrary test dynamically avoids the catastrophic PR nightmare of failing a real production outage. The cost of running controlled chaos is mathematically insignificant compared to an unexpected SLA collapse.'
            ],
            [
                d('Automated Recovery Latency', 'The strict time elapsed for automated failover to stabilize system capabilities.', '< 3 Mins Deadline'),
                d('Systemic Fragility Bound', 'The likelihood of a cascading failure resulting from a single microservice dropping.', 'Must be isolated')
            ], 
            'Inject intentional chaos into a staging load test loop immediately.', 
            ['Spin up an aggressive, sustained Apache JMeter or k6 load testing suite against the staging cluster.', 'Randomly and forcefully terminate the primary Redis replication node.', 'Observe and measure the exact milliseconds required for the cluster to regain stability and reroute.'], 
            {
                question: 'What is the absolute core philosophy behind Chaos Engineering in enterprise architectures?',
                options: ['Testing how well engineers handle stress', 'Finding out how fast you can reboot a server manually', 'Intentionally deploying automated failure into live systems to mathematically prove that theoretical fault-tolerance and failover scripts actually execute under pressure', 'Writing messy code on purpose'],
                correctIndex: 2,
                explanation: 'An architecture is only as strong as its proven failover. Without actively attacking your own infrastructure, theoretical resilience remains dangerously unproven.'
            }
        )
    ], undefined, undefined, 'live'
);
