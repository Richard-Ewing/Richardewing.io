import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks12Modules: Record<string, CurriculumModule> = {};

const t12 = 'Track 12 — Enterprise Architecture Economics';

tracks12Modules['enterprise-architecture/12-1'] = m('12-1', 'Architecture Review Board Economics', 'Calculate ARB decision throughput, governance overhead, and the ROI of enterprise architecture.', t12, 
    ['Calculate ARB operational drag', 'Quantify governance overhead', 'Model the financial return on architectural standardization'], [
        l('The Cost of the Review Board', 
            [
                'An Architecture Review Board (ARB) exists to align technical decisions with enterprise strategy. However, the operational reality is often a bureaucratic bottleneck that paralyzes feature delivery.',
                'If an ARB composed of 8 Principal Engineers (each making $250k/yr) meets for 2 hours a week, and developer teams spend 15 hours preparing for each meeting, the physical cost of a single ARB gate is thousands of dollars.',
                'Worse is the opportunity cost: if a product is delayed by 3 weeks waiting for ARB approval, the revenue left uncaptured must be deducted from the ARB\'s presumed value.'
            ],
            [
                d('Decision Throughput', 'The number of strategic decisions cleared by the ARB per week.', 'Target: > 5 explicit approvals/rejections'),
                d('Approval Latency', 'The calendar time between an intent-to-build and an ARB decision.', '< 5 Business Days')
            ],
            'Audit the last 5 decisions your ARB made. Calculate the total engineering payroll consumed in preparation, presentation, and waiting.',
            ['Estimate the preparation hours spent by the proposing team.', 'Multiply by the combined hourly rate of the ARB members during the meeting.', 'Add the pro-rated wait-time delay cost.'],
            {
                question: 'When measuring the efficiency of an Architecture Review Board, what is the most critical destructive metric?',
                options: ['The number of projects rejected', 'Approval Latency: the time a product team spends functionally frozen waiting for the board to review and approve their design', 'The number of slides in the technical presentation', 'The ratio of external vendors used vs internal tools'],
                correctIndex: 1,
                explanation: 'Approval Latency acts as a heavy tax on engineering velocity. If a feature that generates $1M/yr is delayed by 1 month waiting for ARB clearance, that ARB just cost the company $83,000 in lost revenue.'
            }
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-2', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-2'] = m('12-2', 'API Gateway & Integration Economics', 'Calculate the financial burden of P2P integration vs the ROI of centralized API Gateways and unified schemas.', t12, 
    ['Quantify point-to-point integration debt', 'Calculate API Gateway ROI', 'Map the financial impact of breaking changes'], [
        l('The N-Squared Integration Crisis', 
            [
                'When five microservices need to talk to each other, they require 10 distinct connections. When 50 microservices need to communicate, point-to-point (P2P) mapping requires 1,225 connections. This is the $N(N-1)/2$ equation of architectural bankruptcy.',
                'Every point-to-point connection requires custom authentication, custom retries, custom rate limiting, and custom observability. When an enterprise scales P2P integrations, engineering velocity approaches zero because every new service requires exponential integration labor.',
                'An API Gateway (like Kong, Apigee, or AWS API Gateway) shifts this complexity from $O(N^2)$ to $O(N)$. Services talk to the gateway; the gateway handles auth, routing, and rate limiting. The upfront licensing cost of the gateway is dwarfed by the engineering hours saved.'
            ],
            [
                d('Integration Ratio', 'The number of outbound API calls compared to the number of microservices.', 'Target: < 2 (Hub and Spoke)'),
                d('Gateway Consolidation ROI', 'The engineering capital saved by moving auth/routing to a unified edge.', 'Saves ~200 hours per new service')
            ],
            'Audit the internal communication geometry of your backend.',
            ['Count the number of distinct microservices.', 'Trace a single user request and count how many disparate services it hops through.', 'Calculate the engineering hours spent writing duplicate authentication/authorization code across those services.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-3', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-3'] = m('12-3', 'Event-Driven Architecture Economics', 'Calculate the cloud infra cost, developer friction, and decoupling ROI of Event Buses and CQRS.', t12, 
    ['Model the infrastructure cost of Kafka/EventBridge', 'Quantify temporal decoupling benefits', 'Calculate the cost of eventual consistency bugs'], [
        l('The Price of Decoupling', 
            [
                'Synchronous REST API calls create temporal coupling: if Service A calls Service B, and Service B is down, Service A crashes. Event-Driven Architectures (EDA) solve this by introducing an async broker (Kafka, AWS EventBridge).',
                'However, EDA introduces massive "Day 2" operational costs. You suddenly require distributed tracing, dead-letter queue (DLQ) management, and handling of eventual consistency across multiple databases.',
                'EDA is an economic insurance policy: you pay a constant, high operational premium (in Kafka cluster costs and developer friction) to insure against systemic, synchronous cascading failures.'
            ],
            [
                d('DLQ Resolution Cost', 'The engineering time spent manually triaging Failed Event queues.', 'Target: < 1 Hour/Week'),
                d('Broker Infra Opex', 'The monthly cloud cost of running a multi-AZ message broker.', 'Scales heavily on throughput')
            ],
            'Map the financial cost of a synchronous failure vs the operational tax of asynchronous messaging.',
            ['Identify the most critical synchronous API chain in your product.', 'Calculate the lost revenue if that chain fails 1 hour per month.', 'Compare that lost revenue against the engineering cost to refactor the chain into an event-driven system.'],
            {
                question: 'What is the primary hidden economic cost of moving from sync APIs to Event-Driven Architecture?',
                options: ['The AWS billing for EventBridge', 'Loss of observability requiring expensive distributed tracing tools and significantly higher debugging latency when incidents occur', 'Message brokers are easily hacked', 'Events take too long to travel over the network'],
                correctIndex: 1,
                explanation: 'A developer can step through a synchronous API call in an IDE instantly. Debugging a failed async event traveling across four decoupled services requires expensive observability stacks (Datadog/Honeycomb) and takes significantly longer, driving up MTTR.'
            }
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-4', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-4'] = m('12-4', 'Legacy Modernization ROI', 'The financial calculus of the Strangler Fig pattern versus Big Bang refactoring.', t12, 
    ['Model the risk of Big Bang rewrites', 'Calculate Strangler Fig operational premiums', 'Determine the Technical Insolvency Date'], [
        l('The Big Bang Re-write Fallacy', 
            [
                'The most dangerous phrase in enterprise software is "We are going to rewrite it from scratch." From an economic perspective, a Big Bang rewrite means freezing feature development on the revenue-generating app for 18 months to build a system that currently sits at $0 revenue.',
                'During those 18 months, competitors continue shipping features. Because legacy business logic is rarely documented, the new system takes twice as long as estimated and launches missing critical edge cases.',
                'The Strangler Fig Pattern mitigates capital risk. You keep the legacy monolith running, put a router in front of it, and rewrite/route one endpoint at a time to the new microservice. You pay a high dual-running infrastructure cost, but you protect the revenue stream.'
            ],
            [
                d('Dual-Running Infra Tax', 'The extra cloud cost of running both Legacy and Modern systems simultaneously during migration.', 'Factor heavily into ROI'),
                d('Time-to-First-Value', 'The latency between starting the rewrite and the first user hitting the new code.', 'Strangler: 2 weeks. Big Bang: 2 years.')
            ],
            'Execute a Strangler Fig cost analysis for your oldest monolithic application.',
            ['Identify the "API Gateway" layer that will route traffic.', 'Select the absolute smallest, lowest-risk endpoint to extract first.', 'Calculate the exact engineering cost (and time) required to move just that one endpoint.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-5', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-5'] = m('12-5', 'Domain-Driven Design Economics', 'The cost of bounded context isolation, domain decoupling, and Conway’s Law in enterprise architecture.', t12, 
    ['Quantify bounded context boundaries', 'Align architecture with organizational structure', 'Model the financial return on DDD implementation'], [
        l('The Financial Impact of Bounded Contexts', 
            [
                'Domain-Driven Design (DDD) is primarily an economic tool, not just an engineering strategy. When "Customer" means three different things in Billing, Support, and Shipping, the organization spends millions constantly translating data schemas between departments.',
                'By enforcing Bounded Contexts, an architecture ensures that the Marketing team can alter their definition of a "Lead" without fundamentally breaking the Billing database team\'s schema.',
                'Failing to implement DDD leads to monolithic databases where a 10kb schema change takes 6 months of cross-departmental negotiation to deploy.'
            ],
            [
                d('Cross-Department Schema Wait Time', 'The engineering hours delayed by having to negotiate database schema changes with entirely separate departments.', 'Target: Zero via Bounded Contexts'),
                d('Domain Translation Overhead', 'The CPU and human cost of mapping variables between differing department definitions.', 'Reduce through ubiquitous language')
            ],
            'Audit the "Customer" object architecture.',
            ['Identify how many microservices have direct read/write access to the central `Users` table.', 'If that number is > 1, you lack bounded contexts. Re-architect the platform to emit explicitly defined Domain Events across bounded contexts.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-6', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-6'] = m('12-6', 'High Availability & DR Economics', 'Translating RPO/RTO to Capital investment risk and the cost of N+1 active redundancy.', t12, 
    ['Calculate Active-Active vs Active-Passive ROI', 'Determine acceptable RTO/RPO risk models', 'Model Disaster Recovery table-top costs'], [
        l('The Asymptote of Five Nines', 
            [
                'Achieving 99.9% uptime is an engineering challenge. Achieving 99.999% uptime is a capital allocation challenge. Moving from three nines to five nines requires a 10x-50x increase in infrastructure spending because every database, load balancer, and service must be globally redundant.',
                'Before engineers architect a multi-region Active-Active synchronous replication cluster, the CFO must agree to double the monthly AWS bill.',
                'The Recovery Point Objective (RPO) and Recovery Time Objective (RTO) must be tied explicitly to revenue: Is losing 5 minutes of data cheaper than spending $2M/year on instant failover?'
            ],
            [
                d('RPO Revenue Exposure', 'The estimated financial damage if an outage causes 15 minutes of transactional data loss.', 'Drives the DB replication backup budget'),
                d('DR Failover Latency Cost', 'The cost incurred during the minutes required to transition from Primary to Secondary region.', 'Dictates Active-Active vs DR')
            ],
            'Execute an RPO/RTO Alignment meeting.',
            ['Bring AWS Cost Explorer to the product owners.', 'Show them the cloud cost differential between an RTO of 5 minutes vs an RTO of 2 hours.', 'Secure explicit sign-off on the cheaper architecture if they refuse to allocate the extra margin.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-7', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-7'] = m('12-7', 'Service Mesh & Zero Trust Economics', 'The compute overhead, operational latency, and zero-trust ROI of deploying Istio/Linkerd at scale.', t12, 
    ['Model Service Mesh proxy overhead', 'Calculate mTLS encryption CPU tax', 'Determine Identity-Aware Proxy (IAP) savings'], [
        l('The CPU Cost of Mutual TLS', 
            [
                'A Service Mesh (Istio, Linkerd) handles internal cluster security by encrypting traffic between every microservice via mutual TLS (mTLS). It establishes a rigid Zero-Trust perimeter internally.',
                'This security comes with a massive economic toll: the "Sidecar Tax." Every microservice spun up requires a proxy sidecar which consumes RAM and CPU in the background, continuously.',
                'On a 1,000 pod cluster, injecting a sidecar that reserves 256MB of RAM per instance immediately increases the cluster memory requirement by 256GB simply to route traffic.'
            ],
            [
                d('Sidecar Compute Tax', 'The baseline RAM/CPU reserved per pod exclusively for the Service Mesh proxy.', 'Can exceed 20% of total cluster cost'),
                d('mTLS Latency Penalty', 'The microsecond delay introduced by encrypting and decrypting data between internal nodes.', 'Target: < 2ms')
            ],
            'Audit the sidecar resource boundaries of your Kubernetes deployment.',
            ['Check the requested limits for the Envoy/Linkerd sidecars.', 'Multiply that by the total number of pods running.', 'Determine if the Zero Trust security posture warrants the explicit infrastructural spending required.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-8', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-8'] = m('12-8', 'Database Strategy & Polyglot Persistence', 'The engineering fragmentation cost of running 6 different database technologies vs the efficiency of standardization.', t12, 
    ['Quantify Polyglot Persistence overhead', 'Model the migration CapEx of leaving Oracle', 'Determine Read Replica economics'], [
        l('The Fragmentation of Data Stores', 
            [
                'Polyglot Persistence—using the "right database for the job" (MongoDB for documents, Redis for cache, Neo4j for graphs, Postgres for relations)—is architecturally beautiful but operationally ruinous.',
                'Every new database technology introduced to the enterprise requires a specialized Site Reliability Engineer (SRE) to manage patches, backups, and failovers. The payroll cost of maintaining expertise in 6 disparate databases far outstrips the latency benefits.',
                'Standardization drives margin. An organization that mandates PostgreSQL for 95% of workloads structurally minimizes its Operational Expense (OpEx) for DevOps and training.'
            ],
            [
                d('Database TCO', 'The total cost of licensing, cloud instances, and SRE payroll per DB technology.', 'Target: < 3 supported DB types enterprise-wide'),
                d('Schema Migration Complexity', 'The time required to enact a breaking data schema change without downtime.', 'Massive cost on strictly relational structures')
            ],
            'Consolidate the enterprise database sprawl.',
            ['Audit the production environment for niche databases supporting non-mission-critical applications.', 'Execute an initiative to migrate those workloads into existing Postgres clusters via JSONb or vector extensions.', 'Eliminate the specialized cloud licenses and instances.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-9', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-9'] = m('12-9', 'Architecture Decision Records (ADRs)', 'Establishing the corporate memory of technical decisions, the financial cost of reversibility, and mitigating "Context Rot".', t12, 
    ['Calculate Context Rot decay curves', 'Model the financial value of Reversible Decisions', 'Implement ADR documentation workflows'], [
        l('Capitalizing Corporate Architectural Memory', 
            [
                'When a principal engineer leaves, they take millions of dollars of undocumented architectural context with them. The replacement team spends months reverse-engineering *why* a system was built a certain way, leading to the "Chesterton’s Fence" paradox.',
                'Architecture Decision Records (ADRs) are immutable, version-controlled markdown files that document the exact context, constraints, and economic reasoning behind a major technical decision.',
                'A mature engineering culture treats ADRs as an organizational asset. They reduce new-hire onboarding latency and prevent senior engineers from repeatedly litigating the same architectural debates.'
            ],
            [
                d('Decision Reverse-Engineering Cost', 'The payroll hours burned by a team attempting to safely modify legacy architecture without context.', 'Driven to zero with ADRs'),
                d('Architectural Litigation Latency', 'The velocity lost debating the same technology choices in meetings iteratively.', 'Cured by pointing to an approved ADR')
            ],
            'Implement an ADR requirement for all system-level PRs.',
            ['Create a `/docs/architecture/decisions` folder in the primary repo.', 'Require any PR that introduces a new dependency or data-store to be accompanied by a 1-page ADR outlining the financial and technical justification.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-10', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-10'] = m('12-10', 'Enterprise Architecture Synthesis', 'Assembling Technology Radars, decoupling legacy states, and translating EA metrics into Board-level financial narratives.', t12, 
    ['Design a financial EA Dashboard', 'Implement a Technology Radar to control sprawl', 'Forecast the Technical Insolvency Date'], [
        l('The Architecture Balance Sheet', 
            [
                'Enterprise Architects are fundamentally financial portfolio managers. The technology stack is the asset; coupling and tech debt are the liabilities. Most EAs fail because they cannot articulate their value in CFO language.',
                'To secure funding for refactoring, an EA must demonstrate the "Innovation Tax"—the exact percentage of developer payroll currently being burned navigating architectural rot rather than delivering features.',
                'A centralized EA dashboard tracking the "Technical Insolvency Date" (when maintenance costs will consume 100% of engineering bandwidth) forces executive action immediately.'
            ],
            [
                d('Innovation Tax', 'The % of engineering payroll diverted to paying technical interest.', 'Target: < 15%'),
                d('Technical Insolvency Date', 'The estimated quarter when the Innovation Tax hits 100% and velocity stops.', 'Requires immediate intervention')
            ],
            'Generate a CFO-ready EA impact report.',
            ['Use the Product Debt Index (PDI) to calculate the coupling metric of the three oldest monolithic systems.', 'Translate this coupling into lost engineering velocity dollars.', 'Present this as the explicit Cost of Inaction (COI) to the board.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-11', 'pdi', 'live'
);

tracks12Modules['enterprise-architecture/12-11'] = m('12-11', 'MACH Architecture Economics', 'The economic realities of shifting to Microservices, API-First, Cloud-Native, Headless scaling architectures.', t12, 
    ['Calculate MACH decoupling ROI', 'Model headless frontend integration costs', 'Establish API-first governance workflows'], [
        l('The Decoupling Premium of MACH', 
            [
                'Moving a legacy ecommerce or CMS system to a MACH architecture eliminates monolithic vendor lock-in. Because the frontend (Headless) is decoupled from the backend APIs, teams can iterate user interfaces rapidly without triggering a massive backend deployment cycle.',
                'However, MACH requires the organization to take on "Integration Debt". Instead of buying an all-in-one suite (like SAP or Salesforce), you are stitching together 5 best-in-breed tools. You now own the integration layer.',
                'The economic calculation relies on proving that the revenue gained by shipping customized frontend experiences faster outweighs the ongoing CapEx of maintaining the API integration mesh.'
            ],
            [
                d('Frontend Velocity Multiplier', 'The reduction in lead time to deploy a UI change by decoupling from the backend database.', 'Often drops from weeks to hours'),
                d('Integration Maintenance Tax', 'The engineering capital invested purely in keeping loosely coupled APIs in sync.', 'Must be monitored strictly')
            ],
            'Evaluate the decoupled state of your primary revenue portal.',
            ['Can a frontend engineer deploy a new button or layout change without requiring a backend database migration or PR review from the platform team?', 'If not, you are suffering tightly-coupled monolith drag.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-12', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-12'] = m('12-12', 'eBPF Observability Patterns', 'Replacing expensive sidecars with zero-overhead Kernel-Level Tracing and routing via eBPF.', t12, 
    ['Quantify Kernel-level tracing efficiency', 'Calculate Sidecar elimination ROI', 'Model the financial savings of eBPF network routing'], [
        l('The Next Generation of Zero-Overhead Telemetry', 
            [
                'For the last decade, observability and security meant installing heavy "Sidecar" proxies (like Envoy) alongside every application container. This wasted massive amounts of CPU and RAM globally.',
                'eBPF (Extended Berkeley Packet Filter) allows architects to embed observability and security directly into the Linux kernel without changing the application code. It runs with near-zero performance overhead.',
                'By stripping out sidecars and replacing them with eBPF agents (like Cilium or Pixie), an enterprise can reduce its Kubernetes cluster compute costs by 10-15% while gaining deeper network visibility.'
            ],
            [
                d('Sidecar Compute Elimination', 'The monthly cloud billing savings achieved by removing Envoy/Linkerd sidecars from every node.', 'High immediate ROI'),
                d('Kernel Space Telemetry Breadth', 'The ability to monitor network packets before they are routed, drastically reducing CPU cycles.', 'Reduces latency materially')
            ],
            'Conduct a Sidecar overhead audit.',
            ['Calculate the CPU/RAM limits requested by all observability and security sidecars running on your primary cluster.', 'Convert that resource pool into AWS/GCP instance equivalents.', 'That is the direct financial savings of moving to an eBPF overlay.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-13', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-13'] = m('12-13', 'WebAssembly (Wasm) Edge Compute', 'Executing logic outside the container. The economics of edge functions, sub-millisecond cold starts, and Docker alternatives.', t12, 
    ['Model Docker vs Wasm container efficiency', 'Calculate sub-millisecond cold start revenue gains', 'Deploy latency-critical logic to Edge networks'], [
        l('The End of the Cold Start', 
            [
                'Docker containers take seconds to boot. In serverless computing, those seconds (the "Cold Start") create terrible user experiences and require complex "pre-warming" infrastructure that burns cash.',
                'WebAssembly (Wasm) modules boot in microseconds. Because they are highly isolated and incredibly small, you can run thousands of them on a single server, achieving massive multi-tenant density.',
                'By moving authorization checks, AI payload formatting, or image resizing to Wasm modules running on CDN Edge nodes (like Cloudflare Workers or Fastly), you eliminate round-trips to the central cloud, crushing latency and egress costs.'
            ],
            [
                d('Wasm Boot Latency', 'The time to execute a Wasm binary from a cold state.', 'Target: < 1 Millisecond'),
                d('Edge Compute Egress Elimination', 'The data transfer bandwidth saved by processing payloads directly at the edge instead of the main cloud.', 'Direct API savings')
            ],
            'Identify a latency-sensitive, stateless middleware function in your stack.',
            ['Select a simple task, like JWT token validation or URL rewriting.', 'Rewrite the middleware logic in Rust or Go, compile to Wasm, and push it to an Edge runtime.', 'Measure the reduction in origin-server load.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-14', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-14'] = m('12-14', 'Serverless Compute Evolution', 'Migrating from static containers to scaling to zero. Managing event triggers, concurrency limits, and unpredictable cloud bills.', t12, 
    ['Calculate Scale-to-Zero gross margin protections', 'Model Lambda/Cloud Run concurrency scaling', 'Avoid serverless architectural traps'], [
        l('The Double-Edged Sword of Pay-Per-Millisecond', 
            [
                'Serverless computing (AWS Lambda, GCP Cloud Run) guarantees you never pay for idle time. If traffic is zero, the bill is zero. This protects the gross margins of highly intermittent workloads perfectly.',
                'However, at hyper-scale, Serverless becomes a financial trap. Paying per-invocation for an API handling 10,000 requests per second is substantially more expensive than renting a dedicated EC2 instance to process them continuously.',
                'The architectural mandate is "Serverless for Intermittent, Containers for Consistent." Failing to migrate a workload off Serverless once it achieves sustained volume will silently bleed margin.'
            ],
            [
                d('The Serverless Break-Even Point', 'The traffic threshold where the cost of Lambda invocations exceeds the cost of an always-on EC2/Fargate instance.', 'Continuously monitor'),
                d('Concurrency Throttling Risk', 'The architectural failure state when serverless functions max out cloud account limits, dropping user requests.', 'Requires queueing architecture')
            ],
            'Execute a Break-Even audit on your highest volume Serverless functions.',
            ['Identify the top 3 most invoked Lambdas in your billing dashboard.', 'Calculate the cost of replacing them with a provisioned multi-pod container cluster.', 'If the container cluster is > 30% cheaper, initiate migration.']
        )
    ], '/vault/curriculum/tracks/enterprise-architecture/12-15', undefined, 'live'
);

tracks12Modules['enterprise-architecture/12-15'] = m('12-15', 'Architecture Dependency Governance', 'Automating Software Bills of Materials (SBOMs), managing vendor sprawl, and eliminating dependency hell via integration gates.', t12, 
    ['Automate SBOM CI/CD integration', 'Calculate the financial impact of Vendor Lock-In', 'Model the drag of aged dependencies'], [
        l('Securing the Software Supply Chain', 
            [
                'Enterprise code is 90% open-source packages and 10% custom business logic. When an architect approves importing a new massive library, they are legally and technically committing the organization to maintain that dependency for a decade.',
                'Without automated Software Bills of Materials (SBOMs), when a zero-day exploit like Log4j drops, engineering teams spend weeks blindly searching their repositories to see if they are exposed, paralyzing the revenue-generating roadmap.',
                'Architecture governance must enforce an automated "Dependency Budget." If an application falls too far behind on core framework updates, CI/CD pipelines must block new feature merges until the technical debt is paid.'
            ],
            [
                d('Zero-Day Identification Latency', 'The time taken to definitively answer if the organization is exposed to a new CVE.', 'Target: < 5 Minutes via SBOM queries'),
                d('Aged Dependency Payroll Drag', 'The engineering hours consumed dealing with deprecated APIs and breaking integration changes.', 'Eliminate via automated bot PRs')
            ],
            'Implement an automated dependency update PR engine.',
            ['Configure Dependabot or Renovate on your primary repository.', 'Set it to auto-merge explicitly safe, minor patch updates if your CI tests pass.', 'Measure the reduction in manual PR approvals required from senior engineers.']
        )
    ], undefined, undefined, 'live'
);
