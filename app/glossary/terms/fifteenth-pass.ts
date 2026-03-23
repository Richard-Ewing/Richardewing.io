import { GlossaryTerm } from '../types';

// =============================================================================
// FIFTEENTH PASS: More terms for thin categories
// =============================================================================

export const fifteenthPassTerms: GlossaryTerm[] = [
    // Cloud & Infrastructure (+4)
    {
        title: 'Serverless Computing',
        slug: 'serverless',
        definition: `Serverless computing is a cloud execution model where the cloud provider manages server infrastructure and automatically allocates compute resources on-demand. Developers write functions that execute in response to events — without provisioning, scaling, or managing servers.\n\n**Serverless services:** AWS Lambda, Google Cloud Functions, Azure Functions, Cloudflare Workers, Vercel Edge Functions.\n\n**Serverless economics:**\n- **Pay-per-execution:** Charged only when code runs (typically per 100ms)\n- **Auto-scaling:** Scales to zero when idle, scales to thousands during spikes\n- **Cold starts:** Functions that haven't run recently take 100ms-5s to initialize\n- **Vendor lock-in:** Serverless code is tightly coupled to provider APIs\n\n**When serverless is wrong:** Long-running processes, consistent high throughput, or workloads needing GPU access. At high volume, serverless can cost 2-5x more than dedicated servers.`,
        whyItMatters: 'Serverless shifts infrastructure cost from CapEx to OpEx. Understanding when serverless economics work — and when they don\'t — prevents unexpected cost overruns as usage scales.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['cloud-native', 'infrastructure-as-code', 'kubernetes', 'finops'],
        faqs: [{ question: 'Is serverless cheaper?', answer: 'At low to moderate volume: yes, dramatically. At high consistent volume: often more expensive than dedicated servers. The break-even point depends on request patterns — spiky workloads favor serverless, steady workloads favor containers.' }],
    },
    {
        title: 'Edge Computing',
        slug: 'edge-computing',
        definition: `Edge computing is a distributed computing paradigm where computation and data storage are performed closer to the data source or end user — at the "edge" of the network — rather than in a centralized data center.\n\n**Edge locations:** CDN points of presence (Cloudflare has 300+), IoT devices, cell towers, on-premise servers, and edge clouds.\n\n**Use cases:**\n- **Low-latency responses:** Gaming, video streaming, AR/VR (< 20ms required)\n- **IoT data processing:** Process sensor data locally instead of sending to cloud\n- **AI inference:** Run ML models at the edge for real-time predictions\n- **Privacy/compliance:** Keep data in specific geographic regions\n\n**Edge platforms:** Cloudflare Workers, Vercel Edge, AWS CloudFront Functions, Fastly Compute@Edge.\n\nEdge computing creates a distributed systems challenge: how to keep data consistent across hundreds of locations while maintaining low latency.`,
        whyItMatters: 'Edge computing trades simplicity for performance and compliance. Understanding when edge deployment is justified — and when centralized is sufficient — prevents over-architecture that adds infrastructure debt.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['serverless', 'cloud-native', 'infrastructure-as-code'],
        faqs: [{ question: 'Do I need edge computing?', answer: 'If your users need <50ms latency or you have data residency requirements: yes. For most web applications with 200-500ms latency tolerance: centralized cloud + CDN is simpler and sufficient.' }],
    },
    {
        title: 'Multi-Cloud Strategy',
        slug: 'multi-cloud',
        definition: `Multi-cloud is the strategy of using services from two or more cloud providers (AWS, GCP, Azure) to avoid vendor lock-in, optimize costs, or meet compliance requirements.\n\n**Motivations:**\n- **Vendor lock-in avoidance:** Don't be dependent on one provider\n- **Best-of-breed services:** Use AWS for compute, GCP for AI/ML, Azure for enterprise\n- **Compliance:** Some regulations require data in specific providers or regions\n- **Negotiation leverage:** Competition between providers can reduce costs\n\n**The reality:** True multi-cloud is expensive and complex. Running the same workload on two clouds doesn't mean you can switch in a day. Each cloud has unique APIs, IAM models, networking, and billing.\n\n**Most companies use "multi-cloud" to mean:** Different workloads on different clouds (this is reasonable), not the same workload simultaneously on multiple clouds (this is usually over-engineering).`,
        whyItMatters: 'Multi-cloud is often pursued for the wrong reasons. The infrastructure complexity of running across providers usually exceeds the vendor lock-in risk it tries to mitigate. Right-sizing this decision prevents massive infrastructure debt.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['cloud-native', 'kubernetes', 'finops', 'infrastructure-as-code'],
        faqs: [{ question: 'Should my company go multi-cloud?', answer: 'Probably not in the traditional sense. Use different clouds for different workloads if justified. But running the same app on 2+ clouds "just in case" adds complexity that far exceeds the lock-in risk for most companies.' }],
    },
    {
        title: 'FinOps',
        slug: 'finops',
        definition: `FinOps (Financial Operations) is the practice of bringing financial accountability to cloud spending. It combines engineering, finance, and business to optimize cloud costs without sacrificing performance.\n\n**FinOps lifecycle:**\n1. **Inform:** Understand where cloud spend goes — by team, service, environment\n2. **Optimize:** Right-size instances, eliminate waste, use reserved/spot pricing\n3. **Operate:** Build cost-awareness into engineering culture and workflows\n\n**Common cloud waste patterns:**\n- Over-provisioned compute (running large instances for small workloads)\n- Idle resources (dev/staging environments running 24/7)\n- Unattached storage volumes and snapshots\n- Data transfer costs from poor architecture decisions\n\n**FinOps tools:** Vantage, CloudZero, Kubecost, AWS Cost Explorer, Google Cloud FinOps Hub.\n\nThe average company wastes 30% of its cloud spend. FinOps aims to reduce this to under 10%.`,
        whyItMatters: 'Cloud costs are the second-largest engineering expense after salaries. FinOps makes cloud spending visible and accountable. Without it, engineering teams treat cloud resources as free — creating runaway infrastructure costs.',
        howToMeasure: 'Track cost per customer, cost per transaction, cloud spend as % of revenue, and unit economics. Compare actual spend against reserved/optimized pricing to quantify savings opportunity.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['cloud-native', 'multi-cloud', 'burn-rate', 'gross-margin-preservation'],
        faqs: [{ question: 'How much can FinOps save?', answer: '20-40% of cloud spend for companies that haven\'t optimized. The biggest wins come from right-sizing compute, eliminating idle resources, and using reserved pricing for predictable workloads.' }],
    },

    // Security & Compliance (+3)
    {
        title: 'SOC 2 Compliance',
        slug: 'soc-2-compliance',
        definition: `SOC 2 (Service Organization Control 2) is an auditing framework that evaluates how a company protects customer data. It is the most requested compliance certification for B2B SaaS companies.\n\n**Five Trust Service Criteria:**\n1. **Security (required):** Protection against unauthorized access\n2. **Availability:** System uptime and reliability\n3. **Processing Integrity:** Accurate and complete data processing\n4. **Confidentiality:** Protection of sensitive information\n5. **Privacy:** Personal data handling practices\n\n**Two report types:**\n- **Type I:** Point-in-time assessment (are controls in place today?)\n- **Type II:** Period assessment (have controls operated effectively for 6-12 months?)\n\n**Cost:** $20K-$100K for initial audit, depending on company size. Ongoing compliance costs: $30K-$80K/year.\n\nSOC 2 is increasingly table stakes for B2B SaaS sales. Enterprise customers won't proceed without it.`,
        whyItMatters: 'SOC 2 compliance is a revenue enabler — enterprise deals stall without it. But it also creates compliance engineering debt: controls must be maintained, monitored, and evidence must be continuously collected.',
        category: 'Security & Compliance',
        relatedTerms: ['zero-trust', 'data-privacy', 'compliance-regulation'],
        faqs: [{ question: 'When should a startup get SOC 2?', answer: 'When enterprise customers start requesting it — usually around $1M ARR or when pursuing enterprise deals. Start with Type I (faster, cheaper), then advance to Type II after 6 months.' }],
    },
    {
        title: 'Supply Chain Security',
        slug: 'supply-chain-security',
        definition: `Software supply chain security is the practice of securing the entire software delivery pipeline — from source code to dependencies to build systems to deployment. It protects against attacks that compromise software through its development process.\n\n**Attack vectors:**\n- **Dependency poisoning:** Malicious code in npm, PyPI, or Maven packages\n- **Build system compromise:** Attackers inject code during CI/CD (SolarWinds attack)\n- **Source code tampering:** Unauthorized commits to repositories\n- **Container image attacks:** Compromised base images in Docker Hub\n\n**SBOM (Software Bill of Materials):** Executive Order 14028 requires SBOMs for government software. An SBOM lists every component in your software — like an ingredient list for food.\n\n**Tools:** Snyk, Dependabot, Renovate, Sigstore (signing), SLSA framework (supply chain integrity).`,
        whyItMatters: 'Supply chain attacks are the fastest-growing attack vector. The SolarWinds attack affected 18,000+ organizations through a single compromised build. Supply chain security debt is invisible until it\'s catastrophic.',
        category: 'Security & Compliance',
        relatedTerms: ['dependency-debt', 'soc-2-compliance', 'zero-trust'],
        faqs: [{ question: 'What is an SBOM?', answer: 'A Software Bill of Materials — a formal list of every component, library, and dependency in your software. Think of it as a nutritional label for software. Increasingly required by regulation and enterprise customers.' }],
    },
    {
        title: 'Incident Response',
        slug: 'incident-response',
        definition: `Incident response is the structured process for identifying, containing, resolving, and learning from production incidents. It defines how teams respond when things break in production.\n\n**Incident response lifecycle:**\n1. **Detection:** Monitoring/alerting identifies an issue\n2. **Triage:** Assess severity (SEV1-SEV4) and assign incident commander\n3. **Communication:** Notify stakeholders via status page, Slack, email\n4. **Mitigation:** Restore service (rollback, failover, hotfix)\n5. **Resolution:** Fully fix the underlying issue\n6. **Post-mortem:** Root cause analysis, action items, process improvements\n\n**Blameless post-mortems:** Modern incident response uses blameless post-mortems — focusing on systemic causes rather than individual blame. This encourages transparency and prevents information hiding.\n\n**SLAs for response time:**\n- SEV1 (service down): 15 min response, 1 hour resolution\n- SEV2 (major degradation): 30 min response, 4 hour resolution\n- SEV3 (minor issue): 4 hour response, next business day resolution`,
        whyItMatters: 'How a company handles incidents reveals its engineering maturity. Poor incident response extends MTTR, damages customer trust, and creates firefighting cultures. Structured response reduces repeat incidents.',
        category: 'Security & Compliance',
        relatedTerms: ['observability', 'dora-metrics', 'service-level-objectives', 'soc-2-compliance'],
        faqs: [{ question: 'What is a blameless post-mortem?', answer: 'An incident review focused on systemic causes (what failed in the system) rather than individual blame (who messed up). This encourages honesty, knowledge sharing, and prevents the hiding of near-misses.' }],
    },

    // Leadership & Governance (+2)
    {
        title: 'Engineering Manager',
        slug: 'engineering-manager',
        definition: `An Engineering Manager (EM) is a people manager for software engineers, responsible for team health, career development, hiring, and delivery. The EM role is the first management rung on the engineering ladder, typically managing 5-10 engineers.\n\n**Core responsibilities:**\n- **People management:** 1:1s, feedback, performance reviews, career development\n- **Hiring:** Interview loops, candidate evaluation, team growth\n- **Delivery:** Sprint planning, roadmap execution, stakeholder communication\n- **Technical guidance:** Code review involvement, architecture decisions (varies)\n\n**EM vs. Tech Lead:** An EM focuses on people and process. A Tech Lead focuses on technical direction. Some organizations merge these roles; elite organizations separate them.\n\n**The EM's dilemma:** EMs are measured on team output but don't write code. Their leverage comes through others — coaching, unblocking, and creating the conditions for great work.`,
        whyItMatters: 'Engineering Managers are the connective tissue between strategy and execution. Great EMs multiply team output 2-3x. Poor EMs create turnover, overhead, and invisible productivity drains.',
        category: 'Leadership & Governance',
        relatedTerms: ['engineering-productivity', 'dora-metrics', 'sprint-retrospective'],
        faqs: [{ question: 'Should EMs write code?', answer: 'Controversial. Best practice: EMs should stay technically current but shouldn\'t be on the critical path for code. An EM who codes is often neglecting people management — the harder, more impactful part of the role.' }],
    },
    {
        title: 'Architecture Review Board',
        slug: 'architecture-review-board',
        definition: `An Architecture Review Board (ARB) is a governance body that evaluates and approves significant technical decisions — new technologies, architecture changes, platform migrations, and build-vs-buy decisions.\n\n**ARB responsibilities:**\n- Review and approve major architecture decisions\n- Maintain architecture decision records (ADRs)\n- Ensure consistency across teams and services\n- Evaluate technical risk of proposed changes\n- Set and maintain technology standards\n\n**Anti-patterns:** An ARB that moves too slowly becomes a bottleneck. An ARB that rubber-stamps everything provides no value. The best ARBs are lightweight, async-first, and focus only on high-impact decisions.\n\n**Architecture Decision Records (ADRs):** Written documents that capture the context, decision, and rationale for significant architecture choices. ADRs are the institutional memory that prevents repeated debates.`,
        whyItMatters: 'Without architecture governance, teams make inconsistent technology decisions that create architectural debt. With too much governance, teams can\'t move fast. The balance is critical.',
        category: 'Leadership & Governance',
        relatedTerms: ['architecture-debt', 'engineering-manager', 'technical-debt'],
        faqs: [{ question: 'Do we need an Architecture Review Board?', answer: 'If you have 3+ engineering teams making independent technology decisions: yes. Keep it lightweight — focus on decisions with cross-team impact. For smaller organizations, tech lead alignment meetings serve the same purpose.' }],
    },
];
