import { GlossaryTerm } from '../types';

export const devopsPlatformTerms: GlossaryTerm[] = [
    {
        title: 'DevOps',
        slug: 'devops',
        definition: `DevOps is a set of practices, cultural philosophies, and tools that increase an organization's ability to deliver applications and services at high velocity. It breaks down silos between development and operations teams, emphasizing shared ownership of the entire software lifecycle — from code commit to production monitoring.\n\nCore DevOps practices include continuous integration and continuous deployment (CI/CD), infrastructure as code, monitoring and observability, and incident management. DevOps culture emphasizes blameless postmortems, shared on-call responsibility, and measuring everything.`,
        whyItMatters: `DevOps practices directly impact DORA metrics — the industry standard for engineering delivery performance. Organizations with mature DevOps practices deploy 208x more frequently, have 106x faster lead times, 7x lower change failure rates, and recover from incidents 2,604x faster (per Google's DORA State of DevOps reports).\n\nRichard Ewing's PDI diagnostic evaluates DevOps maturity as part of the engineering economics assessment. Poor DevOps practices compound technical debt by making deployments risky and recovery slow.`,
        howToMeasure: 'Assess using DORA metrics: deployment frequency, lead time, change failure rate, MTTR. Benchmark against DORA\'s elite/high/medium/low categories.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['dora-metrics', 'continuous-deployment', 'infrastructure-as-code', 'kubernetes'],
        faqs: [
            { question: 'Is DevOps a role or a culture?', answer: 'Both. DevOps is primarily a culture of shared ownership and continuous improvement. Some organizations create "DevOps Engineer" roles to drive adoption, but the culture must extend beyond any single role.' },
        ],
    },
    {
        title: 'CI/CD Pipeline',
        slug: 'cicd-pipeline',
        definition: `A CI/CD pipeline (Continuous Integration / Continuous Deployment) is an automated workflow that takes code from a developer's commit through build, test, and deployment to production. It eliminates manual steps in the software delivery process.\n\n**Continuous Integration (CI):** Every code commit triggers automated build and tests. Failed tests block merging. This catches defects early.\n\n**Continuous Deployment (CD):** Code that passes CI is automatically deployed to production without manual intervention. This reduces deployment risk by making each change small.`,
        whyItMatters: `CI/CD pipelines directly improve DORA metrics. Without CI/CD, deployments are manual, risky, and infrequent — leading to large batches of changes that are hard to debug when something breaks.\n\nFor engineering economics, mature CI/CD reduces the cost of releasing software, enabling faster iteration and shorter feedback loops. Richard Ewing's diagnostic evaluates CI/CD maturity as a leading indicator of engineering efficiency.`,
        howToMeasure: 'Measure pipeline run time, success rate, deployment frequency, and lead time from commit to production.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['devops', 'dora-metrics', 'continuous-deployment', 'feature-flags'],
        faqs: [
            { question: 'What is the difference between CI/CD and DevOps?', answer: 'CI/CD is a specific practice within DevOps. DevOps encompasses the broader culture, including monitoring, incident response, infrastructure as code, and organizational collaboration.' },
        ],
    },
    {
        title: 'Infrastructure as Code',
        slug: 'infrastructure-as-code',
        definition: `Infrastructure as Code (IaC) is the practice of managing infrastructure (servers, networks, databases) through code files rather than manual configuration. Infrastructure definitions are version-controlled, reviewed, tested, and deployed through the same CI/CD pipeline as application code.\n\n**Popular IaC tools:** Terraform (multi-cloud), Pulumi (programming languages), AWS CloudFormation, Ansible, Chef, Puppet.\n\n**Key benefits:** Reproducibility (same infrastructure in every environment), auditability (who changed what, when), disaster recovery (rebuild from code), and cost visibility (infrastructure as a reviewable bill of materials).`,
        whyItMatters: 'IaC eliminates "snowflake" servers — unique configurations that no one can reproduce if they fail. It also enables FinOps by making infrastructure costs visible and reviewable in code. Richard Ewing\'s cloud cost analysis as part of the engineering diagnostic evaluates IaC maturity.',
        howToMeasure: 'Percentage of infrastructure managed by code. Drift detection rate (manual changes not in code). Time to reproduce an environment from scratch.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['devops', 'kubernetes', 'cicd-pipeline', 'cloud-cost-optimization'],
        faqs: [
            { question: 'Is Terraform or Pulumi better?', answer: 'Terraform uses HCL (a declarative language) and has the largest ecosystem. Pulumi uses real programming languages (TypeScript, Python, Go) and is better for teams that prefer code over configuration. Both are excellent.' },
        ],
    },
    {
        title: 'Kubernetes',
        slug: 'kubernetes',
        definition: `Kubernetes (K8s) is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications. Originally developed by Google, it is now the industry standard for running production workloads at scale.\n\n**Key concepts:** Pods (smallest deployable unit), Services (network abstraction), Deployments (declarative updates), Namespaces (resource isolation), Ingress (external traffic routing), ConfigMaps/Secrets (configuration management).`,
        whyItMatters: 'Kubernetes enables horizontal scaling, self-healing, and multi-cloud portability. However, it introduces significant operational complexity and cost. For engineering economics, Kubernetes clusters are often the largest infrastructure cost item — and frequently over-provisioned. Cloud cost optimization for K8s is a critical FinOps activity.',
        howToMeasure: 'Track cluster utilization (actual vs. provisioned resources), cost per workload, deployment success rate, and pod restart frequency.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['devops', 'infrastructure-as-code', 'cloud-cost-optimization', 'microservices'],
        faqs: [
            { question: 'Does every company need Kubernetes?', answer: 'No. K8s is valuable for organizations running many microservices at scale. For smaller applications, managed platforms (Railway, Vercel, Fly.io) provide similar benefits with far less complexity.' },
        ],
    },
    {
        title: 'Observability',
        slug: 'observability',
        definition: `Observability is the ability to understand the internal state of a system by examining its outputs — logs, metrics, and traces (the "three pillars"). Unlike monitoring (which checks known failure modes), observability enables investigating unknown-unknowns: problems you didn't anticipate.\n\n**The Three Pillars:**\n- **Logs:** Detailed event records from application code\n- **Metrics:** Numerical measurements over time (latency, error rate, throughput)\n- **Traces:** End-to-end request tracking across distributed services\n\n**Tools:** Datadog, Grafana, Prometheus, OpenTelemetry, Honeycomb, New Relic.`,
        whyItMatters: 'MTTR (Mean Time to Recovery) — a key DORA metric — is directly dependent on observability quality. Organizations with poor observability spend hours debugging production issues that well-instrumented teams resolve in minutes.',
        howToMeasure: 'Track MTTR, percentage of incidents resolved without escalation, and time to root cause identification.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['devops', 'dora-metrics', 'site-reliability-engineering', 'incident-management'],
        faqs: [
            { question: 'What is the difference between monitoring and observability?', answer: 'Monitoring checks for known problems (is the CPU above 80%?). Observability lets you investigate unknown problems (why is this specific user\'s request slow?). Monitoring is a subset of observability.' },
        ],
    },
    {
        title: 'Site Reliability Engineering',
        slug: 'site-reliability-engineering',
        definition: `Site Reliability Engineering (SRE) is a discipline originated by Google that applies software engineering practices to infrastructure and operations problems. SREs write code to automate operations tasks, define Service Level Objectives (SLOs), and manage error budgets.\n\n**Key concepts:** SLIs (Service Level Indicators) — what you measure, SLOs (Service Level Objectives) — the target, Error Budgets — the acceptable amount of unreliability before halting feature releases.`,
        whyItMatters: 'SRE provides a data-driven framework for balancing reliability with feature velocity. The error budget concept directly connects engineering decisions to business impact: if you\'ve consumed your error budget, you stop shipping features and fix reliability — no arguments.',
        howToMeasure: 'Track SLI compliance against SLOs. Monitor error budget consumption rate. A healthy team uses 50-80% of their error budget — too low means over-investing in reliability, too high means incidents.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['devops', 'observability', 'dora-metrics', 'incident-management'],
        faqs: [
            { question: 'SRE vs DevOps — what is the difference?', answer: 'DevOps is a cultural movement. SRE is Google\'s implementation of DevOps principles, with specific practices (error budgets, SLOs, toil reduction). SRE is a prescriptive framework; DevOps is a philosophy.' },
        ],
    },
    {
        title: 'Feature Flags',
        slug: 'feature-flags',
        definition: `Feature flags (also called feature toggles) are conditional statements in code that allow teams to enable or disable features without deploying new code. They separate code deployment from feature release.\n\n**Types:** Release flags (rollout control), Experiment flags (A/B testing), Ops flags (kill switches for performance), Permission flags (premium features).`,
        whyItMatters: 'Feature flags enable continuous deployment by decoupling deploy from release. They reduce deployment risk (bad feature? Turn it off without rollback), enable gradual rollouts (1% → 10% → 100% of users), and support A/B testing.\n\nHowever, feature flags are also a source of technical debt — old, unused flags pollute the codebase. Richard Ewing\'s Kill Switch Protocol evaluates feature flag hygiene.',
        howToMeasure: 'Track the number of active feature flags, average flag age, percentage of flags with defined expiration dates, and the number of flags toggled in the last 30 days.',
        category: 'Engineering Management',
        relatedTerms: ['devops', 'cicd-pipeline', 'continuous-deployment', 'kill-switch-protocol'],
        faqs: [
            { question: 'How many feature flags is too many?', answer: 'There is no hard limit, but flags older than 90 days that are fully rolled out should be cleaned up. Accumulating hundreds of stale flags creates significant maintenance burden and deployment confusion.' },
        ],
    },
    {
        title: 'Incident Management',
        slug: 'incident-management',
        definition: `Incident management is the process of detecting, responding to, resolving, and learning from production outages and degradations. A mature incident management process includes defined severity levels, escalation procedures, war room protocols, customer communication templates, and blameless postmortem practices.`,
        whyItMatters: 'MTTR (a key DORA metric) is directly determined by incident management maturity. Organizations with documented runbooks, clear escalation paths, and practiced war room protocols recover exponentially faster than ad-hoc responders.',
        howToMeasure: 'Track MTTR by severity, number of incidents per sprint, percentage with blameless postmortems completed, and recurrence rate (did the same issue happen again?).',
        category: 'Engineering Management',
        relatedTerms: ['dora-metrics', 'site-reliability-engineering', 'observability', 'devops'],
        faqs: [
            { question: 'What is a blameless postmortem?', answer: 'A blameless postmortem focuses on WHAT happened and HOW to prevent recurrence — not WHO caused it. It creates psychological safety, which leads to more honest root cause analysis and better prevention.' },
        ],
    },
];
