import { GlossaryTerm } from '../types';

// =============================================================================
// SEVENTEENTH PASS: More terms  -  broader coverage
// =============================================================================

export const seventeenthPassTerms: GlossaryTerm[] = [
    {
        title: 'Feature Flag',
        slug: 'feature-flag',
        definition: `A feature flag (also called feature toggle) is a software development technique that allows teams to enable or disable features in production without deploying new code. Feature flags decouple deployment from release.\n\n**Use cases:**\n- **Progressive rollout:** Ship to 1% of users, then 10%, then 100%\n- **A/B testing:** Show different features to different user segments\n- **Kill switch:** Instantly disable a feature if it causes problems\n- **Beta access:** Give specific customers early access to new features\n- **Trunk-based development:** Merge incomplete features behind flags\n\n**Tools:** LaunchDarkly, Statsig, Flagsmith, Unleash, ConfigCat.\n\n**Feature flag debt:** Old, unused feature flags accumulate and become dead code. Best practice: every flag has an expiration date and an owner. Remove flags within 2 sprints of full rollout.`,
        whyItMatters: 'Feature flags enable continuous deployment and reduce deployment risk. But unmanaged flags become their own form of technical debt  -  dead code that confuses developers and creates test complexity.',
        category: 'Platform Engineering',
        relatedTerms: ['cicd', 'trunk-based-development', 'canary-deployment'],
        faqs: [{ question: 'How many feature flags should we have?', answer: 'Active flags at any time: 20-50 for a typical product. If you have 200+ active flags, you have feature flag debt. Every flag should have an owner and expiration date.' }],
    },
    {
        title: 'Trunk-Based Development',
        slug: 'trunk-based-development',
        definition: `Trunk-based development (TBD) is a source control branching model where developers integrate their changes into a single shared branch ("trunk" or "main") at least once per day. Short-lived feature branches (< 1 day) are permitted, but long-lived branches are avoided.\n\n**TBD vs. GitFlow:**\n- **TBD:** Small, frequent merges to main. Deploy from main. Feature flags for incomplete work.\n- **GitFlow:** Long-lived develop/feature/release branches. Merge periodically. Complex merge conflicts.\n\n**Why TBD wins at scale:** DORA research shows that trunk-based development correlates with elite deployment frequency and lead time. Elite teams deploy multiple times per day from trunk.\n\n**Requirements for TBD:** Comprehensive CI pipeline, feature flags, strong test coverage, and team discipline around small, incremental changes.`,
        whyItMatters: 'Trunk-based development is the branching strategy of elite engineering teams. It eliminates long-lived branch merge conflicts  -  one of the most expensive sources of integration debt.',
        category: 'Platform Engineering',
        relatedTerms: ['feature-flag', 'cicd', 'dora-metrics'],
        faqs: [{ question: 'Can you do trunk-based development with 50+ developers?', answer: 'Yes  -  Google, meta, and Microsoft practice TBD with thousands of engineers. The key enablers: strong CI pipeline (every commit is tested), feature flags (incomplete work is hidden), and small commits (< 200 lines per merge).' }],
    },
    {
        title: 'GraphQL',
        slug: 'graphql',
        definition: `GraphQL is a query language for APIs developed by Meta (Facebook) that allows clients to request exactly the data they need  -  no more, no less. Unlike REST APIs that return fixed data shapes, GraphQL lets the client specify its data requirements.\n\n**Key concepts:**\n- **Schema:** Strongly-typed contract defining available data and operations\n- **Queries:** Read data (like GET in REST)\n- **Mutations:** Write data (like POST/PUT/DELETE)\n- **Subscriptions:** Real-time data updates (WebSocket-based)\n\n**GraphQL vs. REST:**\n- REST: Multiple endpoints, over-fetching/under-fetching, versioning needed\n- GraphQL: Single endpoint, precise data fetching, schema evolution\n\n**When GraphQL hurts:** Complex authorization, N+1 query problems, caching complexity, and the learning curve. For simple CRUD APIs, REST is often simpler and sufficient.`,
        whyItMatters: 'GraphQL can reduce API integration debt by eliminating version management and over-fetching. But poorly designed GraphQL APIs create performance debt through unbounded queries and N+1 problems.',
        category: 'API & Integration',
        relatedTerms: ['api-gateway', 'api-versioning', 'rest-api'],
        faqs: [{ question: 'Should I use GraphQL or REST?', answer: 'GraphQL when: multiple clients need different data shapes, frontend teams are bottlenecked on backend changes. REST when: simple CRUD operations, public APIs, strong caching requirements.' }],
    },
    {
        title: 'Technical Debt Ratio',
        slug: 'technical-debt-ratio-metric',
        definition: `Technical Debt Ratio (TDR) is a metric that quantifies the proportion of development time spent on fixing or working around existing technical debt versus building new capabilities.\n\n**Formula:** TDR = (Time spent on debt-related work / Total engineering time) × 100%\n\n**Benchmarks:**\n- **Healthy:** < 20%  -  Most time goes to new value creation\n- **Concerning:** 20-40%  -  Debt is slowing the team noticeably\n- **Critical:** 40-60%  -  More time on maintenance than innovation\n- **Insolvent:** > 60%  -  The team cannot deliver new features effectively\n\nRichard Ewing's Innovation Tax framework extends TDR by translating these percentages into dollar values: if your R&D budget is $10M and TDR is 45%, you're spending $4.5M on debt maintenance.\n\nTDR should be tracked monthly and reported to leadership. It's the most accessible technical debt metric for non-technical stakeholders.`,
        whyItMatters: 'Technical Debt Ratio translates abstract engineering concerns into a single, actionable percentage. When leadership asks "how bad is our technical debt?", TDR provides the answer.',
        category: 'Technical Debt & Code Quality',
        relatedTerms: ['technical-debt', 'innovation-tax', 'maintenance-load', 'product-debt-index'],
        faqs: [{ question: 'How do you measure Technical Debt Ratio?', answer: 'Track categorized engineering time: new features vs. bug fixes vs. refactoring vs. infrastructure maintenance. Use Jira labels, Linear tags, or engineering diary studies. Weekly tagging for 4-6 weeks gives reliable data.' }],
    },
    {
        title: 'Canary Deployment',
        slug: 'canary-deployment',
        definition: `A canary deployment is a release strategy where a new version of software is rolled out to a small subset of users or servers first  -  the "canary"  -  before being deployed to the entire infrastructure.\n\n**Named after:** Coal mine canaries that detected dangerous gas before miners could.\n\n**Canary deployment process:**\n1. Deploy new version to 1-5% of traffic\n2. Monitor error rates, latency, and business metrics\n3. If metrics are healthy: gradually increase to 10%, 25%, 50%, 100%\n4. If metrics degrade: automatically roll back to previous version\n\n**Canary vs. Blue-Green vs. Rolling:**\n- **Canary:** Small subset gets new version, gradual rollout\n- **Blue-Green:** Two identical environments, instant traffic switch\n- **Rolling:** Servers updated one-at-a-time\n\n**Tools:** Argo Rollouts, Flagger, AWS CodeDeploy, Istio traffic splitting.`,
        whyItMatters: 'Canary deployments reduce deployment risk to near-zero. Problems are caught with 1-5% of users affected, not 100%. This enables fearless, continuous deployment.',
        category: 'Platform Engineering',
        relatedTerms: ['feature-flag', 'cicd', 'trunk-based-development', 'dora-metrics'],
        faqs: [{ question: 'How long should a canary run?', answer: '15-60 minutes for most services. Monitor error rates, p99 latency, and business metrics during the canary window. Automated canary analysis (Kayenta, Flagger) can promote or rollback based on metrics.' }],
    },
    {
        title: 'Technical Interview',
        slug: 'technical-interview',
        definition: `A technical interview is an assessment of a candidate's engineering abilities, typically involving coding challenges, system design questions, and behavioral evaluation. Traditional technical interviews are widely criticized for low signal-to-noise ratio.\n\n**Common formats:**\n- **Coding challenge:** Algorithmic problem solving on a whiteboard or online (LeetCode-style)\n- **System design:** Design a system like Twitter, Uber, or a URL shortener\n- **Take-home project:** Build a small application in 4-8 hours\n- **Pair programming:** Write code together on a real problem\n- **Behavioral:** Past experience questions (STAR method)\n\n**The criticism:** LeetCode-style interviews test algorithmic knowledge that's rarely used at work. They have high false-negative rates (reject good engineers who don't practice puzzles).\n\nRichard Ewing's Audit Interview takes a different approach: standardized assessment across multiple tracks (PM, Engineering, Leadership) with AI-powered scoring and committee review.`,
        whyItMatters: 'The cost of a bad hire is 3-5x salary. The cost of rejecting a good candidate is invisible but real. Better assessment methods directly improve engineering team quality and reduce mis-hire costs.',
        category: 'People & Culture',
        relatedTerms: ['engineering-manager', 'engineering-productivity', 'cost-per-hire'],
        relatedTools: [{ name: 'Audit Interview', url: '/tools/audit-interview' }],
        faqs: [{ question: 'Is LeetCode-style interviewing effective?', answer: 'Research shows weak correlation between LeetCode performance and on-the-job success. Better signals: past work, system design thinking, communication skills, and domain knowledge. The Audit Interview provides a standardized alternative.' }],
    },
    {
        title: 'Platform Team',
        slug: 'platform-team',
        definition: `A platform team is an internal engineering team that builds and maintains shared infrastructure, tools, and services that other product teams use. They treat internal developers as their customers.\n\n**What platform teams own:**\n- CI/CD pipelines and deployment infrastructure\n- Observability stack (monitoring, logging, alerting)\n- Developer tooling (local dev environments, code generators)\n- Shared services (authentication, authorization, notifications)\n- Infrastructure as code and cloud management\n\n**Platform team anti-patterns:**\n- Building infrastructure nobody uses ("build it and they will come")\n- Mandating tools without understanding customer needs\n- Optimizing for architectural purity over developer experience\n\n**When to create a platform team:** When product teams spend >20% of time on infrastructure. Typically around 50+ engineers. Before that, shared infrastructure is a part-time responsibility.`,
        whyItMatters: 'Platform teams either multiply engineering velocity (great ones) or become bureaucratic bottlenecks (bad ones). The Team Topologies model defines platform teams as enablers  -  their success is measured by product team velocity.',
        category: 'Platform Engineering',
        relatedTerms: ['team-topologies', 'developer-experience', 'cicd'],
        faqs: [{ question: 'How big should a platform team be?', answer: '1 platform engineer per 8-12 product engineers is a common ratio. Too few: platform becomes neglected. Too many: platform team builds tools nobody needs.' }],
    },
    {
        title: 'Chaos Engineering',
        slug: 'chaos-engineering',
        definition: `Chaos engineering is the practice of intentionally introducing failures into production systems to identify weaknesses before they cause real outages. Pioneered by Netflix's "Chaos Monkey" tool.\n\n**Principles of chaos engineering:**\n1. **Start with a hypothesis:** "Our system should handle a database failover in < 30 seconds"\n2. **Introduce real-world failures:** Kill instances, simulate network latency, corrupt data\n3. **Measure the impact:** Did the system recover? How long? Were customers affected?\n4. **Minimize blast radius:** Start small, use feature flags to limit scope\n\n**Chaos experiments:**\n- Kill a random production instance (Chaos Monkey)\n- Simulate an entire region failure (Chaos Kong)\n- Inject network latency between services\n- Corrupt or delay database responses\n- Simulate third-party API failures\n\n**Tools:** Gremlin, Litmus Chaos, AWS Fault Injection Simulator, Netflix Simian Army.`,
        whyItMatters: 'Systems fail in unexpected ways. Chaos engineering discovers these failure modes proactively  -  in controlled experiments  -  rather than discovering them at 3 AM during a customer-facing outage.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['incident-response', 'observability', 'service-level-objectives'],
        faqs: [{ question: 'Should we run chaos experiments in production?', answer: 'Yes  -  that\'s the point. Staging environments don\'t replicate production complexity. Start with small experiments (kill one instance) during business hours with the full team ready. Graduate to larger experiments as confidence grows.' }],
    },
];
