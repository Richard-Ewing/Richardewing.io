import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Framework Comparisons — 10 Head-to-Head Analyses | Richard Ewing',
    description: 'Side-by-side comparisons of engineering frameworks, metrics, and methodologies. PDI vs DORA, Build vs Buy, Agile vs Kanban, and more. Data-driven analysis by a Product Economist.',
    keywords: ['PDI vs DORA', 'build vs buy', 'agile vs kanban', 'framework comparison', 'engineering metrics comparison', 'technical debt types'],
    alternates: { canonical: 'https://www.richardewing.io/comparisons' },
};

const comparisons = [
    {
        slug: 'pdi-vs-dora',
        title: 'PDI vs. DORA Metrics',
        subtitle: 'Financial Health vs. Delivery Speed',
        left: { name: 'PDI', color: 'cyan' },
        right: { name: 'DORA', color: 'violet' },
        description: 'DORA measures delivery speed. PDI measures technology capital health. Both are essential — here\'s when to use each and how they complement each other.',
        rows: [
            { dimension: 'Measures', left: 'Technology capital health in dollars', right: 'Delivery throughput and stability' },
            { dimension: 'Audience', left: 'Board, CFO, PE firms', right: 'Engineering managers, CTOs' },
            { dimension: 'Language', left: 'Financial ($, ROI, risk)', right: 'Technical (frequency, time)' },
            { dimension: 'Focus', left: 'Asset health and debt accumulation', right: 'Delivery speed and reliability' },
            { dimension: 'Frequency', left: 'Quarterly or at investment events', right: 'Continuous monitoring' },
            { dimension: 'Blind Spot', left: 'Doesn\'t measure delivery velocity', right: 'Doesn\'t quantify economic impact' },
        ],
        verdict: 'Use both. PDI tells you WHERE to invest. DORA tells you IF your investment is improving delivery. Together they give a complete picture.',
        economicImpact: 'Organizations using only DORA often miss $500K-$2M in hidden technical debt. Adding PDI to your DORA dashboard reveals the financial exposure behind velocity metrics.',
        decisionGuide: 'Run DORA continuously for operations. Run PDI quarterly for strategy. Present DORA to engineering leadership; present PDI to the board.',
        tools: ['/tools/pdi', '/tools/aper'],
    },
    {
        slug: 'build-vs-buy',
        title: 'Build vs. Buy',
        subtitle: 'The $500K Decision Framework',
        left: { name: 'Build', color: 'emerald' },
        right: { name: 'Buy', color: 'amber' },
        description: 'Building in-house gives control but costs 3-5x the initial estimate. Buying is faster but creates vendor lock-in. Here\'s the TCO framework.',
        rows: [
            { dimension: 'Time to Value', left: '3-12 months', right: '1-4 weeks' },
            { dimension: 'Year 1 Cost', left: '$200K-$1M+ (development)', right: '$12K-$100K (license)' },
            { dimension: 'Year 3 TCO', left: '$500K-$3M (build + maintain)', right: '$50K-$500K (license + integration)' },
            { dimension: 'Customization', left: 'Unlimited', right: 'Limited to vendor roadmap' },
            { dimension: 'Risk', left: 'Scope creep, team dependency', right: 'Vendor lock-in, sunset risk' },
            { dimension: 'Core Competency', left: 'When the capability IS your product', right: 'When it\'s infrastructure' },
        ],
        verdict: 'Build your differentiation. Buy your infrastructure. The line between them is where most CTOs make expensive mistakes.',
        economicImpact: 'The average build-vs-buy mistake costs $1.2M over 3 years. Most overruns come from underestimating maintenance costs: each custom system requires 20-30% of original build cost annually to maintain.',
        decisionGuide: 'Decision matrix: Build if (core differentiator + >5 engineers + >12 months runway). Buy if (commodity capability + <5 engineers + need value in <4 weeks).',
        tools: ['/tools/aueb', '/tools/ev-se'],
    },
    {
        slug: 'revenue-per-engineer',
        title: 'Revenue Per Engineer Benchmarks',
        subtitle: 'Elite ($1M+) vs. Average ($200-500K)',
        left: { name: 'Elite ($1M+)', color: 'cyan' },
        right: { name: 'Average', color: 'zinc' },
        description: 'Revenue per engineer varies 10x between elite and average companies. Here\'s what drives the gap and how to close it.',
        rows: [
            { dimension: 'RPE', left: 'Stripe $3.2M, Figma $2.8M', right: '$200-500K (most growth SaaS)' },
            { dimension: 'Team Size', left: 'Lean, senior-heavy', right: 'Growing, mixed levels' },
            { dimension: 'Innovation Tax', left: '<20%', right: '40-60%' },
            { dimension: 'Feature Usage', left: '>50% features used monthly', right: '20-30% features used' },
            { dimension: 'Automation', left: 'Everything automated', right: 'Manual processes persist' },
            { dimension: 'Platform', left: 'Strong internal platform', right: 'Teams duplicate work' },
        ],
        verdict: 'RPE is not about cutting engineers — it\'s about maximizing the value each engineer creates. The gap is organizational friction, not individual skill.',
        economicImpact: 'Moving from $400K to $800K RPE typically requires reducing Innovation Tax from 50% to 20%, consolidating tooling, and implementing platform engineering — not reducing headcount.',
        decisionGuide: 'Track RPE quarterly. Below $300K at Series B+: investigate organizational friction. Above $1M: you’re elite — protect the culture and systems that got you there.',
        tools: ['/tools/aper', '/tools/ev-se'],
    },
    {
        slug: 'technical-debt-types',
        title: 'Technical Debt Classification',
        subtitle: 'Prudent vs. Reckless — Not All Debt Is Equal',
        left: { name: 'Prudent', color: 'emerald' },
        right: { name: 'Reckless', color: 'red' },
        description: 'Some technical debt is strategic. Some is negligent. The difference determines whether debt helps or kills your organization.',
        rows: [
            { dimension: 'Intent', left: 'Deliberate trade-off', right: 'Accidental or ignorant' },
            { dimension: 'Documentation', left: 'Logged with plan', right: 'Unknown until it breaks' },
            { dimension: 'ROI', left: 'Positive (speed to market)', right: 'Negative (pure liability)' },
            { dimension: 'Priority', left: 'Scheduled remediation', right: 'Emergency triage' },
            { dimension: 'Board Impact', left: 'Explainable investment', right: 'Hidden liability' },
            { dimension: 'Example', left: 'Hardcoded config for launch', right: 'Copy-paste code everywhere' },
        ],
        verdict: 'Prudent debt is a tool. Reckless debt is a cancer. The difference is documentation, intent, and a remediation timeline.',
        economicImpact: 'Reckless debt costs 3-5x more to remediate than prudent debt because discovery is the bottleneck: you can\'t fix what you don\'t know about.',
        decisionGuide: 'Before incurring any debt: document it, estimate remediation cost, set a timeline. If you can\'t do all three, you\'re likely being reckless.',
        tools: ['/tools/pdi', '/tools/scoring'],
    },
    {
        slug: 'agile-vs-kanban',
        title: 'Scrum vs. Kanban',
        subtitle: 'Sprint-Based vs. Flow-Based Delivery',
        left: { name: 'Scrum', color: 'cyan' },
        right: { name: 'Kanban', color: 'emerald' },
        description: 'Scrum works great for teams that need structure. Kanban works for teams that need flow. Neither is universally better.',
        rows: [
            { dimension: 'Cadence', left: 'Fixed sprints (1-4 weeks)', right: 'Continuous flow' },
            { dimension: 'Planning', left: 'Sprint planning ceremony', right: 'Just-in-time execution' },
            { dimension: 'WIP Limits', left: 'Sprint capacity', right: 'Explicit per-column limits' },
            { dimension: 'Best For', left: 'Feature development, new teams', right: 'Operations, experienced teams' },
            { dimension: 'Metrics', left: 'Velocity, sprint burndown', right: 'Cycle time, throughput' },
            { dimension: 'Overhead', left: 'High (ceremonies, roles)', right: 'Low (board-driven)' },
        ],
        verdict: 'Scrum for feature teams that need predictability. Kanban for operations teams that need flow. ScrumBan for teams that outgrow Scrum.',
        economicImpact: 'Wrong methodology costs 15-25% of team velocity. Common mistake: forcing Scrum on ops teams (ceremony overhead) or Kanban on junior teams (insufficient structure).',
        decisionGuide: 'New team (<6 months)? Start with Scrum. Experienced team with predictable work? Try Kanban. Team doing both features and maintenance? ScrumBan.',
        tools: ['/tools/aper'],
    },
    {
        slug: 'monolith-vs-microservices',
        title: 'Monolith vs. Microservices',
        subtitle: 'The Architecture Decision That Costs $2M to Reverse',
        left: { name: 'Monolith', color: 'amber' },
        right: { name: 'Microservices', color: 'violet' },
        description: 'Every startup should start with a monolith. Most know when to split. Few know the true cost of premature decomposition.',
        rows: [
            { dimension: 'Team Size', left: 'Up to 20 engineers', right: '20+ with domain ownership' },
            { dimension: 'Deployment', left: 'Single deploy (simple)', right: 'Independent deploys (complex)' },
            { dimension: 'Latency', left: 'In-process calls (fast)', right: 'Network calls (overhead)' },
            { dimension: 'Debugging', left: 'Single codebase (easy)', right: 'Distributed tracing (hard)' },
            { dimension: 'Cost', left: 'Lower infrastructure', right: '2-5x infrastructure cost' },
            { dimension: 'Scaling', left: 'Vertical (limited)', right: 'Horizontal (unlimited)' },
        ],
        verdict: 'Start monolith, extract when Conway\'s Law demands it. The worst outcome is premature microservices — high cost, high complexity, low benefit.',
        economicImpact: 'Premature microservices add $500K-$2M in infrastructure and coordination costs per year. The break-even point is typically 20+ engineers with clear domain boundaries.',
        decisionGuide: 'Under 20 engineers? Monolith. 20-50 with clear domains? Start extracting. Over 50? You probably already need microservices.',
        tools: ['/tools/aueb', '/tools/pdi'],
    },
    {
        slug: 'fine-tuning-vs-rag',
        title: 'Fine-Tuning vs. RAG',
        subtitle: 'Which AI Strategy Actually Makes Economic Sense?',
        left: { name: 'Fine-Tuning', color: 'violet' },
        right: { name: 'RAG', color: 'cyan' },
        description: 'Fine-tuning gives model-level customization but costs $10K-$500K per training run. RAG gives context-level customization at a fraction of the cost.',
        rows: [
            { dimension: 'Setup Cost', left: '$10K-$500K per run', right: '$1K-$10K (once)' },
            { dimension: 'Latency', left: 'Same as base model', right: '+200-500ms (retrieval)' },
            { dimension: 'Data Freshness', left: 'Frozen at training time', right: 'Real-time updates' },
            { dimension: 'Accuracy', left: 'High for style/behavior', right: 'High for factual recall' },
            { dimension: 'Maintenance', left: 'Re-train for updates', right: 'Update knowledge base' },
            { dimension: 'Use Case', left: 'Tone, format, reasoning', right: 'Knowledge retrieval' },
        ],
        verdict: 'Use RAG for knowledge. Use fine-tuning for behavior. Use both when your use case demands it. For most products, start with RAG — it\'s cheaper, faster, and updateable.',
        economicImpact: 'Starting with fine-tuning when RAG would suffice wastes $50K-$500K upfront. RAG prototypes can validate AI features in days; fine-tuning takes weeks to months.',
        decisionGuide: 'Need current knowledge retrieval? RAG. Need consistent tone/format? Fine-tuning. Need both? RAG first, fine-tune the base model second.',
        tools: ['/tools/aueb'],
    },
    {
        slug: 'staff-augmentation-vs-delivery',
        title: 'Staff Augmentation vs. Managed Delivery',
        subtitle: 'Outsourcing Models — Which Burns Less Cash?',
        left: { name: 'Staff Aug', color: 'amber' },
        right: { name: 'Managed', color: 'emerald' },
        description: 'Staff augmentation gives you bodies. Managed delivery gives you outcomes. The wrong choice costs 40% more and delivers 50% less.',
        rows: [
            { dimension: 'Control', left: 'You manage the team', right: 'Vendor manages delivery' },
            { dimension: 'Cost', left: '$150-250/hr per person', right: 'Fixed bid or milestone' },
            { dimension: 'Risk', left: 'On your P&L', right: 'Shared with vendor' },
            { dimension: 'Hiring Speed', left: '2-4 weeks', right: '4-8 weeks (team ramp)' },
            { dimension: 'Knowledge', left: 'Stays with your team', right: 'Risk of vendor lock-in' },
            { dimension: 'Best For', left: 'Known work, capacity gap', right: 'Unknown scope, outcome needed' },
        ],
        verdict: 'Staff aug for capacity gaps with known work. Managed delivery for outcomes you can\'t staff internally. Never use staff aug for innovation — you\'re paying for hours, not ideas.',
        economicImpact: 'Using staff augmentation for innovation/R&D typically costs 40% more and delivers 50% less than managed delivery or internal teams, because you pay for hours regardless of outcomes.',
        decisionGuide: 'Known scope + temporary gap? Staff aug. Unknown scope + specific outcome needed? Managed delivery. Core IP? Always internal.',
        tools: ['/tools/aper', '/tools/ev-se'],
    },
    {
        slug: 'platform-team-vs-sres',
        title: 'Platform Engineering vs. SRE',
        subtitle: 'Two Approaches to Developer Productivity',
        left: { name: 'Platform Eng', color: 'cyan' },
        right: { name: 'SRE', color: 'violet' },
        description: 'Platform engineering builds internal developer tools. SRE keeps systems running. Both reduce friction, but from different angles.',
        rows: [
            { dimension: 'Focus', left: 'Developer experience', right: 'System reliability' },
            { dimension: 'Output', left: 'Internal tools, abstractions', right: 'SLOs, incident response' },
            { dimension: 'Metrics', left: 'Developer satisfaction, MTTR', right: 'SLO compliance, MTTR' },
            { dimension: 'Team Size', left: '2-5% of engineering org', right: '5-10% of engineering org' },
            { dimension: 'ROI Horizon', left: '6-12 months', right: '3-6 months' },
            { dimension: 'Risk of Not Having', left: 'Tooling sprawl, slow onboarding', right: 'Outages, alert fatigue' },
        ],
        verdict: 'Start with SRE (you need reliability first). Add platform engineering when tool sprawl becomes the bottleneck. Best orgs have both.',
        economicImpact: 'Platform engineering ROI takes 6-12 months to materialize. SRE pays back in 3-6 months through reduced incidents. Invest in SRE first to free up time, then invest in platform eng.',
        decisionGuide: 'Frequent outages? SRE first. Slow onboarding + tool sprawl? Platform engineering. Both? You need both — separate teams, shared metrics.',
        tools: ['/tools/aper'],
    },
    {
        slug: 'capex-vs-opex',
        title: 'CapEx vs. OpEx in R&D',
        subtitle: 'How Engineering Costs Hit the Financial Statements',
        left: { name: 'CapEx', color: 'emerald' },
        right: { name: 'OpEx', color: 'amber' },
        description: 'Whether engineering work gets capitalized (CapEx) or expensed (OpEx) changes your EBITDA, tax implications, and how investors value your company.',
        rows: [
            { dimension: 'Accounting', left: 'Capitalized as an asset', right: 'Expensed immediately' },
            { dimension: 'Impact', left: 'Improves EBITDA', right: 'Reduces EBITDA' },
            { dimension: 'Example', left: 'New feature development', right: 'Bug fixes, maintenance' },
            { dimension: 'Valuation', left: 'Increases asset base', right: 'Reduces reported profitability' },
            { dimension: 'PE Impact', left: 'Scrutinized in due diligence', right: 'Expected line item' },
            { dimension: 'Ratio Target', left: '60-70% of R&D', right: '30-40% of R&D' },
        ],
        verdict: 'The CapEx/OpEx ratio reveals engineering health. If less than 50% of R&D is capitalizable, you\'re spending most of your budget keeping the lights on — not innovating.',
        economicImpact: 'Improving CapEx ratio from 40% to 65% on a $5M R&D budget adds $1.25M to your asset base annually, improving EBITDA and potentially adding 0.5-1x to revenue multiples.',
        decisionGuide: 'Track CapEx ratio monthly. Below 50%? Investigate maintenance load. Above 70%? Verify you\'re not under-investing in bug fixes and stability.',
        tools: ['/tools/ev-se', '/tools/pdi'],
    },
{
    "slug": "rust-vs-go",
    "title": "Rust vs. Go",
    "subtitle": "Memory Safety vs. Developer Velocity",
    "left": {
        "name": "Rust",
        "color": "amber"
    },
    "right": {
        "name": "Go",
        "color": "cyan"
    },
    "description": "Rust offers unparalleled memory safety without garbage collection. Go offers unmatched concurrency and developer velocity. The choice dictates your hiring pool and iteration speed.",
    "rows": [
        {
            "dimension": "Performance",
            "left": "C/C++ level, deterministic",
            "right": "Fast, but constrained by GC",
            "leftScore": 10,
            "rightScore": 8
        },
        {
            "dimension": "Learning Curve",
            "left": "Steep (Borrow Checker)",
            "right": "Shallow (Learn in a weekend)",
            "leftScore": 4,
            "rightScore": 9
        },
        {
            "dimension": "Memory Safety",
            "left": "Compile-time guarantees",
            "right": "GC-based safety",
            "leftScore": 10,
            "rightScore": 7
        },
        {
            "dimension": "Concurrency",
            "left": "Fearless but complex",
            "right": "Goroutines (Simplicity)",
            "leftScore": 8,
            "rightScore": 10
        },
        {
            "dimension": "Compile Times",
            "left": "Slow (LLVM)",
            "right": "Lightning fast",
            "leftScore": 5,
            "rightScore": 10
        },
        {
            "dimension": "Hiring Pool",
            "left": "Small, highly specialized",
            "right": "Massive, easy to train",
            "leftScore": 5,
            "rightScore": 9
        }
    ],
    "verdict": "Use Go for network services and rapid iterations. Use Rust when performance, predictability, or security are existential requirements.",
    "economicImpact": "A Rust team costs 20-30% more to hire and takes 2x longer to ship MVP, but saves 40-50% in cloud compute at massive scale.",
    "decisionGuide": "Building a microservice? Go. Building a database, browser engine, or high-frequency trading system? Rust.",
    "tools": [
        "/tools/aper",
        "/tools/aueb"
    ],
    "marketContext": "Go is the lingua franca of Cloud Native (Kubernetes, Docker). Rust is dominating systems programming and Web3.",
    "adoptionTrend": "Rust was StackOverflow's most loved language for 8 years running. Go remains the pragmatic enterprise choice.",
    "whenToUseLeft": [
        "Systems programming",
        "WebAssembly targets",
        "CPU/Memory bound applications",
        "Security-critical infrastructure"
    ],
    "whenToUseRight": [
        "Network microservices",
        "CLI tools",
        "DevOps automation",
        "Cloud-native applications"
    ]
},
{
    "slug": "kafka-vs-rabbitmq",
    "title": "Kafka vs. RabbitMQ",
    "subtitle": "Event Streaming Log vs. Traditional Message Queue",
    "left": {
        "name": "Kafka",
        "color": "emerald"
    },
    "right": {
        "name": "RabbitMQ",
        "color": "amber"
    },
    "description": "Kafka is a durable, distributed commit log built for streaming. RabbitMQ is a traditional message broker built for routing. Mixing them up causes catastrophic architectural debt.",
    "rows": [
        {
            "dimension": "Architecture",
            "left": "Append-only log (Pull)",
            "right": "Smart broker (Push)",
            "leftScore": 9,
            "rightScore": 7
        },
        {
            "dimension": "Persistence",
            "left": "Stored until retention limit",
            "right": "Deleted upon acknowledgment",
            "leftScore": 10,
            "rightScore": 5
        },
        {
            "dimension": "Throughput",
            "left": "Millions of msg/sec",
            "right": "Tens of thousands msg/sec",
            "leftScore": 10,
            "rightScore": 7
        },
        {
            "dimension": "Routing Logic",
            "left": "Dumb broker, smart consumer",
            "right": "Smart broker (Exchanges)",
            "leftScore": 8,
            "rightScore": 9
        },
        {
            "dimension": "Scaling",
            "left": "Partition-based (Horizontal)",
            "right": "Queue-based (Vertical)",
            "leftScore": 9,
            "rightScore": 6
        },
        {
            "dimension": "Complexity",
            "left": "High (Zookeeper/KRaft)",
            "right": "Low (Easy to operate)",
            "leftScore": 4,
            "rightScore": 8
        }
    ],
    "verdict": "Kafka is a database for events. RabbitMQ is a post office for messages. Use Kafka for data pipelines; use RabbitMQ for task queues.",
    "economicImpact": "Deploying Kafka for simple task queues introduces $50K-100K/yr in unnecessary operational overhead and complexity.",
    "decisionGuide": "Need to replay past events? Kafka. Need complex routing per message? RabbitMQ. Need massive throughput? Kafka.",
    "tools": [
        "/tools/ev-se"
    ],
    "marketContext": "Kafka is the industry standard for real-time data pipelines. RabbitMQ remains the workhorse for legacy and simple async tasks.",
    "adoptionTrend": "Kafka is increasingly run as a managed service (Confluent). RabbitMQ is stable but ceding ground to cloud-native queues.",
    "whenToUseLeft": [
        "Event sourcing",
        "Stream processing",
        "High-throughput telemetry",
        "Log aggregation"
    ],
    "whenToUseRight": [
        "Background job processing",
        "Complex routing topologies",
        "Low latency < 10ms",
        "Simple pub/sub without replay"
    ]
},
{
    "slug": "redis-vs-memcached",
    "title": "Redis vs. Memcached",
    "subtitle": "Rich Data Structures vs. Pure String Caching",
    "left": {
        "name": "Redis",
        "color": "red"
    },
    "right": {
        "name": "Memcached",
        "color": "cyan"
    },
    "description": "Memcached is a fast, multi-threaded string cache. Redis is an in-memory database with complex data structures and persistence capabilities.",
    "rows": [
        {
            "dimension": "Data Types",
            "left": "Lists, Sets, Hashes",
            "right": "Strings, Objects",
            "leftScore": 10,
            "rightScore": 4
        },
        {
            "dimension": "Persistence",
            "left": "RDB Snapshots, AOF Logs",
            "right": "None (Volatile only)",
            "leftScore": 9,
            "rightScore": 1
        },
        {
            "dimension": "Threading",
            "left": "Single-threaded architecture",
            "right": "Multi-threaded",
            "leftScore": 6,
            "rightScore": 9
        },
        {
            "dimension": "Memory Efficiency",
            "left": "Higher overhead per key",
            "right": "Extremely efficient for small strings",
            "leftScore": 6,
            "rightScore": 10
        },
        {
            "dimension": "Advanced Features",
            "left": "Pub/Sub, Lua auth",
            "right": "Minimalist design",
            "leftScore": 9,
            "rightScore": 3
        },
        {
            "dimension": "Ecosystem",
            "left": "Massive, enterprise support",
            "right": "Stable, mature, quiet",
            "leftScore": 9,
            "rightScore": 7
        }
    ],
    "verdict": "Redis has won the mindshare war due to feature richness. Memcached is still unbeatable for simple, massive-scale HTML caching.",
    "economicImpact": "Choosing Redis over Memcached for simple key-value caching increases memory footprint and infrastructure costs by 20-30% at hyperscale.",
    "decisionGuide": "Need pub/sub, sorted sets, or persistence? Redis. Need to cache billions of simple strings with maximum density? Memcached.",
    "tools": [
        "/tools/aueb"
    ],
    "marketContext": "Redis Labs recently changed its license, creating a market split (Valkey fork). Memcached remains quietly ubiquitous.",
    "adoptionTrend": "Redis is the default choice for new projects. Memcached is largely relegated to specialized caching tiers.",
    "whenToUseLeft": [
        "Session storage",
        "Leaderboards (Sorted Sets)",
        "Pub/Sub messaging",
        "Geospatial indexing"
    ],
    "whenToUseRight": [
        "Pure HTML caching",
        "Massive scaling on budget",
        "Simple database query caching",
        "High-concurrency read-heavy loads"
    ]
},
{
    "slug": "docker-swarm-vs-kubernetes",
    "title": "Docker Swarm vs. Kubernetes",
    "subtitle": "Operational Simplicity vs. Orchestration Hegemony",
    "left": {
        "name": "Docker Swarm",
        "color": "cyan"
    },
    "right": {
        "name": "Kubernetes",
        "color": "violet"
    },
    "description": "Kubernetes is the undisputed king of orchestration, but its complexity is legendary. Docker Swarm offers 80% of the value with 10% of the operational overhead.",
    "rows": [
        {
            "dimension": "Complexity",
            "left": "Low (Built into Docker CLI)",
            "right": "Monumental (100+ native resources)",
            "leftScore": 9,
            "rightScore": 2
        },
        {
            "dimension": "Setup Time",
            "left": "Minutes",
            "right": "Days (if self-hosted)",
            "leftScore": 10,
            "rightScore": 3
        },
        {
            "dimension": "Ecosystem",
            "left": "Limited",
            "right": "Infinite (CNCF landscape)",
            "leftScore": 4,
            "rightScore": 10
        },
        {
            "dimension": "Scalability",
            "left": "Thousands of nodes",
            "right": "Tens of thousands (proven)",
            "leftScore": 6,
            "rightScore": 10
        },
        {
            "dimension": "Learning Curve",
            "left": "Day 1 productivity",
            "right": "Requires dedicated engineers",
            "leftScore": 9,
            "rightScore": 3
        },
        {
            "dimension": "Market Share",
            "left": "Niche / Legacy",
            "right": "Industry standard monopoly",
            "leftScore": 3,
            "rightScore": 10
        }
    ],
    "verdict": "Kubernetes won. But for startups with <10 developers who refuse to pay for managed k8s, Swarm remains a beautiful, tragic alternative.",
    "economicImpact": "Running Kubernetes in a startup with <5 engineers deducts 20% of their velocity purely to manage YAML.",
    "decisionGuide": "If you use a cloud provider: use Managed Kubernetes (EKS/GKE). If you run on bare metal with 3 devs: Docker Swarm or Nomad.",
    "tools": [
        "/tools/aper",
        "/tools/ev-se"
    ],
    "marketContext": "Kubernetes is the de-facto cloud operating system. Swarm is in maintenance mode by Mirantis.",
    "adoptionTrend": "Kubernetes > 85% market share for container orchestration. Swarm is flat or declining.",
    "whenToUseLeft": [
        "Small team with zero DevOps budget",
        "Bare metal deployments",
        "Simple stateless microservices",
        "IoT edge computing"
    ],
    "whenToUseRight": [
        "Enterprise deployments",
        "Complex stateful workloads",
        "Need service mesh / advanced ingress",
        "Hiring standardized talent"
    ]
},
{
    "slug": "grpc-vs-trpc",
    "title": "gRPC vs. tRPC",
    "subtitle": "Cross-Language Contracts vs. TypeScript End-to-End",
    "left": {
        "name": "gRPC",
        "color": "cyan"
    },
    "right": {
        "name": "tRPC",
        "color": "violet"
    },
    "description": "Both eliminate the agony of out-of-sync REST clients. gRPC uses Protocol Buffers for cross-language compatibility. tRPC uses TypeScript inference for zero-compile synchronization.",
    "rows": [
        {
            "dimension": "Payload Type",
            "left": "Binary (Protobuf)",
            "right": "JSON",
            "leftScore": 9,
            "rightScore": 5
        },
        {
            "dimension": "Polyglot",
            "left": "Excellent (Generates all langs)",
            "right": "None (TypeScript only)",
            "leftScore": 10,
            "rightScore": 1
        },
        {
            "dimension": "DX Speed",
            "left": "Slow (Compile step required)",
            "right": "Instant (Inferred types)",
            "leftScore": 4,
            "rightScore": 10
        },
        {
            "dimension": "Browser",
            "left": "Requires grpc-web proxy",
            "right": "Native via HTTP",
            "leftScore": 3,
            "rightScore": 9
        },
        {
            "dimension": "Performance",
            "left": "High (HTTP/2 + Binary)",
            "right": "Standard HTTP/JSON",
            "leftScore": 9,
            "rightScore": 6
        },
        {
            "dimension": "Learning Curve",
            "left": "Steep",
            "right": "Non-existent (if you know TS)",
            "leftScore": 4,
            "rightScore": 10
        }
    ],
    "verdict": "tRPC is a superpower for full-stack TypeScript teams. gRPC is an absolute necessity for polyglot microservice architectures.",
    "economicImpact": "tRPC accelerates full-stack feature delivery by 20-30% by eliminating context switching and payload compilation steps.",
    "decisionGuide": "Is your stack 100% TypeScript (Next.js + Node)? tRPC. Do you have Python data pipelines talking to Go microservices? gRPC.",
    "tools": [
        "/tools/aper"
    ],
    "marketContext": "gRPC is the CNCF standard for microservice communication. tRPC is the darling of the modern Next.js/React ecosystem.",
    "adoptionTrend": "tRPC adoption exploded with the T3 stack. gRPC growth is steady in enterprise service-mesh architectures.",
    "whenToUseLeft": [
        "Polyglot microservices",
        "High-throughput internal traffic",
        "Mobile app to backend sync",
        "IoT device telemetry"
    ],
    "whenToUseRight": [
        "Next.js full-stack apps",
        "Monorepos spanning UI/API",
        "Rapid prototyping",
        "100% TypeScript teams"
    ]
},
{
    "slug": "cypress-vs-playwright",
    "title": "Cypress vs. Playwright",
    "subtitle": "The King of E2E vs. The Microsoft Challenger",
    "left": {
        "name": "Cypress",
        "color": "emerald"
    },
    "right": {
        "name": "Playwright",
        "color": "amber"
    },
    "description": "Cypress defined modern E2E testing with its incredible developer experience. Playwright arrived from Microsoft, bringing speed, multi-tab support, and true multi-browser capabilities.",
    "rows": [
        {
            "dimension": "Architecture",
            "left": "Runs in-browser loop",
            "right": "Runs out-of-process via CDP",
            "leftScore": 6,
            "rightScore": 9
        },
        {
            "dimension": "Multi-Tab",
            "left": "Not supported",
            "right": "Fully supported natively",
            "leftScore": 2,
            "rightScore": 10
        },
        {
            "dimension": "Speed",
            "left": "Can be slow",
            "right": "Extremely fast, free parallelization",
            "leftScore": 5,
            "rightScore": 9
        },
        {
            "dimension": "Languages",
            "left": "JavaScript/TypeScript only",
            "right": "JS/TS, Python, C#, Java",
            "leftScore": 4,
            "rightScore": 9
        },
        {
            "dimension": "Dev Tools",
            "left": "Incredible time-travel UI",
            "right": "Trace Viewer (Very good)",
            "leftScore": 10,
            "rightScore": 8
        },
        {
            "dimension": "Flakiness",
            "left": "Prone to timeout issues",
            "right": "Auto-waiting reduces flakes",
            "leftScore": 6,
            "rightScore": 9
        }
    ],
    "verdict": "Playwright has effectively won the architectural war, though Cypress remains deeply entrenched in legacy codebases.",
    "economicImpact": "Playwright's free local parallelization cuts CI pipeline wait times by 60%, returning hundreds of hours of developer flow-state.",
    "decisionGuide": "Greenfield project? Playwright. Need Python/C# QA engineers? Playwright. Already have 2,000 Cypress tests? Stay put.",
    "tools": [
        "/tools/aper"
    ],
    "marketContext": "Playwright (by Microsoft) is aggressively eating Cypress market share due to structural advantages in WebKit testing and parallelization.",
    "adoptionTrend": "Cypress growth has flatlined; Playwright downloads are growing 150% YoY.",
    "whenToUseLeft": [
        "Existing massive test suite",
        "Team only knows Cypress API",
        "Need the specific Cypress Dashboard",
        "Component testing for React"
    ],
    "whenToUseRight": [
        "Greenfield applications",
        "Need to test multi-tab interactions",
        "Need to test Safari/WebKit reliably",
        "Need Python or Java bindings"
    ]
},
{
    "slug": "cloudflare-vs-fastly",
    "title": "Cloudflare vs. Fastly",
    "subtitle": "The Security Behemoth vs. The Developer's Edge",
    "left": {
        "name": "Cloudflare",
        "color": "amber"
    },
    "right": {
        "name": "Fastly",
        "color": "red"
    },
    "description": "Cloudflare commoditized DDoS protection and DNS. Fastly built a highly programmable cache using VCL (and now Compute@Edge).",
    "rows": [
        {
            "dimension": "Programmability",
            "left": "Workers (V8 Isolates)",
            "right": "VCL & Compute@Edge (Wasm)",
            "leftScore": 9,
            "rightScore": 10
        },
        {
            "dimension": "Purge Time",
            "left": "< 1 second",
            "right": "< 150 milliseconds (Instant)",
            "leftScore": 8,
            "rightScore": 10
        },
        {
            "dimension": "Security",
            "left": "Unmatched (WAF, Zero Trust)",
            "right": "Strong (Signal Sciences WAF)",
            "leftScore": 10,
            "rightScore": 8
        },
        {
            "dimension": "Pricing",
            "left": "Predictable, flat-ish tiers",
            "right": "Bandwidth-heavy, enterprise",
            "leftScore": 9,
            "rightScore": 6
        },
        {
            "dimension": "Ecosystem",
            "left": "Massive (R2, D1, Access)",
            "right": "Focused on edge caching",
            "leftScore": 9,
            "rightScore": 7
        },
        {
            "dimension": "Audience",
            "left": "From blogs to Fortune 50",
            "right": "Media, E-commerce, SaaS",
            "leftScore": 10,
            "rightScore": 7
        }
    ],
    "verdict": "Use Fastly if you need to instantly purge complex surrogate keys in milliseconds (media/ecommerce). Use Cloudflare for literally everything else.",
    "economicImpact": "Cloudflare's bundled security and unmetered DDoS protection can save enterprises $100K+/yr compared to piecing together standalone WAFs + Fastly.",
    "decisionGuide": "Building a massive media site with real-time changing inventory? Fastly. Need bulletproof security, workers, and predictability? Cloudflare.",
    "tools": [
        "/tools/ev-se"
    ],
    "marketContext": "Cloudflare has expanded into a full compute platform (R2, D1, Workers). Fastly remains the premium choice for caching purists.",
    "adoptionTrend": "Cloudflare adoption is ubiquitous. Fastly dominates specific high-end niches (e.g., Stripe, NYTimes).",
    "whenToUseLeft": [
        "DDoS protection priority",
        "Need Edge Workers for middleware', 'Zero-trust access replacement', 'Cost predictability"
    ],
    "whenToUseRight": [
        "Insane volume of real-time cache purging', 'Complex CDN logic via VCL', 'Video streaming / high-throughput media', 'Heavy API caching"
    ]
},
{
    "slug": "snowflake-vs-redshift",
    "title": "Snowflake vs. Redshift",
    "subtitle": "Cloud-Native Consumption vs. AWS Monopoly Integration",
    "left": {
        "name": "Snowflake",
        "color": "cyan"
    },
    "right": {
        "name": "Redshift",
        "color": "red"
    },
    "description": "Redshift defined the cloud data warehouse era. Snowflake decoupled compute from storage to revolutionize it.",
    "rows": [
        {
            "dimension": "Architecture",
            "left": "Decoupled (Multi-cluster)",
            "right": "Tightly coupled (Historically)",
            "leftScore": 10,
            "rightScore": 6
        },
        {
            "dimension": "Maintenance",
            "left": "Near-zero (Fully SaaS)",
            "right": "Requires DBA tuning (VACUUM)",
            "leftScore": 9,
            "rightScore": 5
        },
        {
            "dimension": "Concurrency",
            "left": "Infinite auto-scaling",
            "right": "Concurrency Scaling limits",
            "leftScore": 10,
            "rightScore": 7
        },
        {
            "dimension": "Integration",
            "left": "Multi-cloud (AWS, GCP, Azure)",
            "right": "AWS ecosystem lock-in",
            "leftScore": 9,
            "rightScore": 8
        },
        {
            "dimension": "Data Sharing",
            "left": "Native data marketplace",
            "right": "AWS Data Exchange only",
            "leftScore": 9,
            "rightScore": 6
        },
        {
            "dimension": "Pricing",
            "left": "Per-second compute risk",
            "right": "Predictable cluster pricing",
            "leftScore": 6,
            "rightScore": 9
        }
    ],
    "verdict": "Snowflake is the objectively superior technology. Redshift is the financially predictable choice if you are already locked into an AWS EDP commitment.",
    "economicImpact": "Snowflake compute expenses can spiral uncontrollably if queries aren't optimized. Redshift offers predictable costs but requires expensive DBA salaries.",
    "decisionGuide": "Need a data warehouse today that 'just works' regardless of scale? Snowflake. Deep in AWS, with an enterprise discount, and strict fixed budgets? Redshift.",
    "tools": [
        "/tools/aueb",
        "/tools/ev-se"
    ],
    "marketContext": "Databricks is now the primary challenger to Snowflake, blurring the lines between data warehouse and data lake.",
    "adoptionTrend": "Snowflake continues incredible enterprise growth, while Redshift maintains its massive installed base by slowly adopting decoupled features.",
    "whenToUseLeft": [
        "Multi-cloud strategy",
        "Spiky analytical workloads",
        "Zero DB admin capacity",
        "B2B data sharing requirements"
    ],
    "whenToUseRight": [
        "Massive AWS EDP spend commitment",
        "Predictable 24/7 analytical workloads",
        "Deep AWS ecosystem integration', 'Fixed OpEx budgets"
    ]
},
{
    "slug": "auth0-vs-clerk",
    "title": "Auth0 vs. Clerk",
    "subtitle": "Enterprise Identity vs. the Modern Web",
    "left": {
        "name": "Auth0",
        "color": "amber"
    },
    "right": {
        "name": "Clerk",
        "color": "violet"
    },
    "description": "Auth0 (Okta) is the massive enterprise B2B behemoth. Clerk is the incredibly fast, Next.js optimized newcomer.",
    "rows": [
        {
            "dimension": "Integration",
            "left": "Can be tedious (OIDC flows)",
            "right": "Drop-in components (Next.js)",
            "leftScore": 6,
            "rightScore": 10
        },
        {
            "dimension": "B2B Features",
            "left": "Unrivaled (SAML, Custom DBs)",
            "right": "Catching up rapidly (Orgs)",
            "leftScore": 10,
            "rightScore": 7
        },
        {
            "dimension": "Pricing Scale",
            "left": "Expensive at scale ($$$$)",
            "right": "MAU-based (More forgiving)",
            "leftScore": 4,
            "rightScore": 8
        },
        {
            "dimension": "UI Components",
            "left": "Universal login redirect",
            "right": "Native embedded React UI",
            "leftScore": 6,
            "rightScore": 9
        },
        {
            "dimension": "Extensibility",
            "left": "Rules & Actions (Node.js)",
            "right": "Webhooks & JWT templates",
            "leftScore": 9,
            "rightScore": 7
        },
        {
            "dimension": "Ecosystem",
            "left": "Works with literally everything",
            "right": "React/Next.js dominant",
            "leftScore": 10,
            "rightScore": 6
        }
    ],
    "verdict": "If you are building a React/Next.js app today, use Clerk. If you are integrating a massive legacy enterprise portfolio, use Auth0.",
    "economicImpact": "Auth0's enterprise tier pricing scales brutally compared to Clerk. However, rewriting an Okta/Auth0 integration for SAML compliance can cost $200K in dev time.",
    "decisionGuide": "Need SAML SSO for Fortune 500 clients? Auth0/WorkOS. Building a modern SaaS with React? Clerk.",
    "tools": [
        "/tools/aueb"
    ],
    "marketContext": "Okta's acquisition of Auth0 solidified its enterprise dominance. Clerk and WorkOS are attacking the developer-first segment.",
    "adoptionTrend": "Clerk is wildly popular in the React/Vercel ecosystem. Auth0 remains the inescapable enterprise default.",
    "whenToUseLeft": [
        "Complex legacy application portfolio",
        "Strict enterprise SAML/OIDC compliance",
        "Custom database integrations",
        "Non-React stacks"
    ],
    "whenToUseRight": [
        "Next.js / React stack",
        "B2C or modern B2B SaaS",
        "Need beautiful embedded UI components",
        "Fastest time-to-market"
    ]
},
{
    "slug": "tailwind-vs-css-in-js",
    "title": "Tailwind CSS vs. CSS-in-JS",
    "subtitle": "Atomic Utilities vs. Runtime Styling",
    "left": {
        "name": "Tailwind CSS",
        "color": "cyan"
    },
    "right": {
        "name": "CSS-in-JS",
        "color": "pink"
    },
    "description": "Tailwind generates static utility classes. CSS-in-JS (Styled Components, Emotion) executes JS to inject styles. Server components chose the winner.",
    "rows": [
        {
            "dimension": "Performance",
            "left": "Zero runtime, minimal CSS",
            "right": "Runtime execution penalty",
            "leftScore": 10,
            "rightScore": 5
        },
        {
            "dimension": "RSC Support",
            "left": "Native support (build time)",
            "right": "Major compatibility issues",
            "leftScore": 10,
            "rightScore": 2
        },
        {
            "dimension": "Co-location",
            "left": "Inline class strings (messy)",
            "right": "Component-scoped CSS (clean)",
            "leftScore": 6,
            "rightScore": 9
        },
        {
            "dimension": "Dynamic Styles",
            "left": "Via template literals",
            "right": "Native JS props support",
            "leftScore": 7,
            "rightScore": 10
        },
        {
            "dimension": "Bundle Size",
            "left": "Static CSS (tiny)",
            "right": "Adds JS payload burden",
            "leftScore": 10,
            "rightScore": 4
        },
        {
            "dimension": "Ecosystem",
            "left": "Massive UI libs (shadcn)",
            "right": "Declining adoption",
            "leftScore": 10,
            "rightScore": 5
        }
    ],
    "verdict": "React Server Components (RSC) effectively killed CSS-in-JS. Tailwind is now the inescapable standard for modern web development.",
    "economicImpact": "Migrating away from legacy CSS-in-JS to Tailwind in large Next.js apps costs $100K+ but is required to unlock modern edge caching.",
    "decisionGuide": "Starting a new project? Tailwind. Have a massive Styled Components codebase? Keep it on client boundaries, but plan a migration.",
    "tools": [
        "/tools/aper"
    ],
    "marketContext": "The advent of Next.js App Router and Server Components forced the ecosystem away from runtime styling toward build-time utilities.",
    "adoptionTrend": "Tailwind is seeing 80%+ adoption in new React projects. CSS-in-JS libraries are largely in maintenance mode.",
    "whenToUseLeft": [
        "Literally any new web project",
        "Next.js App Router (RSC)",
        "Performance-critical applications",
        "Using shadcn/ui or modern libraries"
    ],
    "whenToUseRight": [
        "Legacy React SPA codebases",
        "Extremely dynamic prop-driven visualizations",
        "When utility classes cause religious team wars"
    ]
}
];

const colorMap: Record<string, string> = {
    cyan: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
    violet: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
    emerald: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    amber: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    red: 'text-red-400 bg-red-500/10 border-red-500/20',
    zinc: 'text-zinc-400 bg-white/[0.03] border-white/10',
};

const textColor: Record<string, string> = {
    cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400',
    amber: 'text-amber-400', red: 'text-red-400', zinc: 'text-zinc-400',
};

const toolNames: Record<string, string> = {
    '/tools/pdi': 'PDI Calculator', '/tools/aper': 'APER Calculator',
    '/tools/aueb': 'AUEB Calculator', '/tools/ev-se': 'EV-SE Calculator',
    '/tools/scoring': 'Scoring Tool',
};

export default function ComparisonsPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">{comparisons.length} Head-to-Head Analyses</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            Framework <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Comparisons</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                            Side-by-side analysis of engineering frameworks, metrics, and methodologies. Data-driven. No opinions without evidence.
                        </p>
                    </div>

                    {/* Jump Links */}
                    <div className="flex flex-wrap gap-2 mb-12 justify-center">
                        {comparisons.map(c => (
                            <a key={c.slug} href={`#${c.slug}`} className="text-[10px] font-mono px-3 py-1.5 rounded-lg border border-white/5 text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/20 transition-all">
                                {c.left.name} vs {c.right.name}
                            </a>
                        ))}
                    </div>

                    <div className="space-y-10 mb-16">
                        {comparisons.map((comp) => (
                            <section key={comp.slug} id={comp.slug} className="scroll-mt-24">
                                <div className="card p-6 sm:p-8 border-white/10">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${colorMap[comp.left.color]}`}>{comp.left.name}</span>
                                        <span className="text-zinc-600 text-xs">vs</span>
                                        <span className={`px-3 py-1 rounded-full border text-[10px] font-mono uppercase tracking-widest ${colorMap[comp.right.color]}`}>{comp.right.name}</span>
                                    </div>
                                    <h2 className="text-2xl font-grotesk font-bold text-white mb-1">{comp.title}</h2>
                                    <p className="text-sm font-mono text-zinc-500 mb-3">{comp.subtitle}</p>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{comp.description}</p>

                                    <div className="overflow-x-auto mb-6">
                                        <table className="w-full text-sm">
                                            <thead>
                                                <tr className="border-b border-white/10">
                                                    <th className="text-left py-3 px-4 text-zinc-500 font-mono uppercase tracking-widest text-xs">Dimension</th>
                                                    <th className={`text-left py-3 px-4 font-mono uppercase tracking-widest text-xs ${textColor[comp.left.color]}`}>{comp.left.name}</th>
                                                    <th className={`text-left py-3 px-4 font-mono uppercase tracking-widest text-xs ${textColor[comp.right.color]}`}>{comp.right.name}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {comp.rows.map((row, i) => (
                                                    <tr key={i} className="border-b border-white/5">
                                                        <td className="py-3 px-4 text-white font-medium">{row.dimension}</td>
                                                        <td className={`py-3 px-4 ${textColor[comp.left.color]}`}>{row.left}</td>
                                                        <td className={`py-3 px-4 ${textColor[comp.right.color]}`}>{row.right}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="rounded-xl bg-white/[0.02] border border-white/5 p-5 mb-4">
                                        <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-2">⚖️ Verdict</div>
                                        <p className="text-zinc-300 text-sm">{comp.verdict}</p>
                                    </div>

                                    {(comp as { economicImpact?: string }).economicImpact && (
                                        <div className="rounded-xl bg-emerald-500/5 border border-emerald-500/20 p-5 mb-4">
                                            <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest mb-2">💰 Economic Impact</div>
                                            <p className="text-zinc-300 text-sm">{(comp as { economicImpact?: string }).economicImpact}</p>
                                        </div>
                                    )}

                                    {(comp as { decisionGuide?: string }).decisionGuide && (
                                        <div className="rounded-xl bg-amber-500/5 border border-amber-500/20 p-5 mb-4">
                                            <div className="text-[10px] font-mono text-amber-400 uppercase tracking-widest mb-2">🧭 Decision Guide</div>
                                            <p className="text-zinc-300 text-sm">{(comp as { decisionGuide?: string }).decisionGuide}</p>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="text-[10px] text-zinc-500">Run the analysis:</span>
                                        {comp.tools.map((tool) => (
                                            <Link key={tool} href={tool} className="text-xs text-cyan-400 hover:underline">
                                                🛠️ {toolNames[tool] || tool}
                                            </Link>
                                        ))}
                                        <Link href="/advisory" className="text-xs text-violet-400 hover:underline ml-auto">
                                            Want expert analysis? →
                                        </Link>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Cross-Links */}
                    <div className="grid sm:grid-cols-4 gap-3 mb-12">
                        <Link href="/glossary" className="card p-4 text-center hover:border-cyan-500/20 transition-all group">
                            <div className="text-xl mb-1">📚</div>
                            <div className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors">Glossary</div>
                            <div className="text-[9px] text-zinc-600">420+ terms</div>
                        </Link>
                        <Link href="/guides" className="card p-4 text-center hover:border-violet-500/20 transition-all group">
                            <div className="text-xl mb-1">📖</div>
                            <div className="text-xs font-bold text-white group-hover:text-violet-400 transition-colors">Guides</div>
                            <div className="text-[9px] text-zinc-600">10 playbooks</div>
                        </Link>
                        <Link href="/curriculum/tracks" className="card p-4 text-center hover:border-emerald-500/20 transition-all group">
                            <div className="text-xl mb-1">🎓</div>
                            <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors">Curriculum</div>
                            <div className="text-[9px] text-zinc-600">60 modules</div>
                        </Link>
                        <Link href="/tools" className="card p-4 text-center hover:border-amber-500/20 transition-all group">
                            <div className="text-xl mb-1">🛠️</div>
                            <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">Free Tools</div>
                            <div className="text-[9px] text-zinc-600">5 calculators</div>
                        </Link>
                    </div>

                    {/* CTA */}
                    <div className="card p-8 text-center border-violet-500/20 mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Need a Custom Framework Analysis?</h2>
                        <p className="text-zinc-400 mb-6 max-w-lg mx-auto text-sm">Book a strategy session for a comparison tailored to your stack, team, and business model.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/api/buy/strategy_session" className="px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:opacity-90 transition-opacity">
                                Book Strategy Session →
                            </a>
                            <Link href="/guides" className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
                                Browse All Guides →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
