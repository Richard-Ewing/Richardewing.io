import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks5and6Modules: Record<string, CurriculumModule> = {};

const t5 = 'Track 5 — DevOps & Platform Economics';
const t6 = 'Track 6 — AI Economics';

// ═══════════════════ TRACK 5: DEVOPS ECONOMICS ═══════════════════

tracks5and6Modules['devops-economics/5-1'] = m('5-1', 'CI/CD Pipeline Economics', 'Calculate the hard financial ROI of CI/CD investment, build time optimization, and deployment frequency.', t5, 
    ['Calculate developer wait-time costs', 'Budget build infrastructure', 'Compute deployment frequency ROI'], [
        l('The Anatomy of Pipeline Costs', 
            [
                'Every CI/CD pipeline contains both direct capital costs (compute, storage, SaaS licensing) and hidden operational costs (developer idle time, context-switching decay).',
                'If a team of 40 engineers runs 5 builds a day, and each build takes 15 minutes, you are burning approximately 3,000 minutes (50 hours) of engineering time daily.',
                'At a fully loaded engineering rate of $150/hour, that is a $7,500 daily tax—or $1.8M annually—just for waiting.'
            ],
            [
                d('Idle Time Tax', 'Annual cost of engineers waiting for pipeline resolution.', '<$100K Annually for 50 Eng'),
                d('Context Switch Degradation', 'Mathematical loss of flow-state efficiency per build failure.', '~20 mins per failure')
            ],
            'Audit your last 30 days of CI/CD telemetry. Calculate the total cumulative minutes spent waiting by all engineers.',
            ['Install build-time telemetry (e.g., Datadog CI Visibility or Honeycomb).', 'Export the last 30 days of build durations.', 'Multiply total duration by your average engineering minute rate.'],
            {
                question: 'What is the most expensive component of an unoptimized CI/CD pipeline?',
                options: ['Cloud compute billing', 'SaaS platform licensing', 'Storage for build artifacts', 'Engineer idle time and context switching'],
                correctIndex: 3,
                explanation: 'While cloud compute appears as a hard line-item, the invisible cost of highly-paid engineers waiting for builds completely dwarfs infrastructure costs.'
            }
        ),
        l('Optimizing the Build Matrix', 
            [
                'Reducing build times from 15 minutes to 3 minutes does not just save 12 minutes—it preserves the engineer\'s flow state, eliminating the 20-minute context-switch penalty.',
                'The most effective optimization vectors are aggressive build caching, artifact repository localization, and massive parallelization of testing suites.',
                'However, parallelization introduces steep compute cost spikes. You must chart the intersection of compute costs vs human capital costs to find the optimization ceiling.'
            ],
            [
                d('Parallelization Efficacy', 'Reduction in wall-clock time vs increase in compute cost.', 'Target: 80% reduction'),
                d('Cache Hit Rate', 'Percentage of build artifacts served from cache vs recompiled.', '> 85% Hit Rate')
            ],
            'Implement a remote build cache (like Nx Cloud or Bazel Remote Cache) and measure the before/after delta in wall-clock time.',
            ['Identify the heaviest permutation in your matrix.', 'Implement aggressive dependency caching.', 'Split the integration test suite into 8 parallel shards.', 'Calculate the new compute cost vs time saved.'],
            {
                question: 'When optimizing build times via parallelization, what is the primary economic trade-off?',
                options: ['Increased latency vs decreased throughput', 'Exponential compute cost increases vs linear time savings', 'Higher storage costs vs lower network ingress', 'Increased deployment risk vs faster feedback'],
                correctIndex: 1,
                explanation: 'Parallelization reduces wall-clock time but increases total compute usage exponentially as you scale out instances, forcing a balance against human capital savings.'
            }
        ),
        l('Deployment Frequency Revenue Impact',
            [
                'DORA metrics definitively map deployment frequency to organizational success, but the impact is tangibly financial: faster feature delivery accelerates revenue realization.',
                'If a $2M ARR feature sits in a staging branch for two weeks awaiting a release train, that is a hard $76,000 opportunity cost.',
                'Migrating from monthly mega-releases to continuous, on-demand deployments shifts capital realization to the left.'
            ],
            [
                d('Release Train Delay', 'Average time a completed feature waits before deployment.', '< 4 Hours'),
                d('Revenue Left-Shift', 'Amount of revenue realized early due to faster deployments.', '+5% EBITDA impact')
            ],
            'Calculate the opportunity cost of your last major feature release based on its staging wait time.',
            ['Identify the PR merge date of a major feature.', 'Identify the actual production deployment date.', 'Calculate the pro-rated ARR value of the feature for the days it was delayed.'],
            {
                question: 'Why do monthly "release trains" destroy economic value?',
                options: ['They cause massive merge conflicts', 'They require too many QA engineers', 'They delay the realization of feature revenue and trap invested capital', 'They increase cloud ingress costs'],
                correctIndex: 2,
                explanation: 'Release trains trap capital. A feature is an investment; until it is in production, it yields $0 return while the organization has already paid the development cost.'
            }
        )
    ], '/vault/curriculum/tracks/devops-economics/5-2', undefined, 'live'
);

// ═══════════════════ TRACK 6: PRODUCT ECONOMICS ═══════════════════

tracks5and6Modules['product-economics/6-1'] = m('6-1', 'Unit Economics & Cloud COGS', 'Master the fundamental math of Cloud FinOps. Calculate your Cloud COGS, establish per-tenant unit economics, and measure gross margin impact.', t6, 
    ['Calculate pure Cloud COGS', 'Allocate shared cluster costs', 'Establish per-tenant unit economic modeling'], [
        l('Demystifying Cloud COGS', 
            [
                'Not all cloud spend is COGS (Cost of Goods Sold). COGS is strictly the infrastructure required to serve production traffic to paying customers.',
                'Development environments, CI/CD runners, and internal data warehouses are R&D or SG&A expenses. Mixing these artificially suppresses your gross margin.',
                'Wall Street and VC boards value SaaS companies largely on Gross Margin (target: 80%+). Every dollar incorrectly categorized as COGS damages your enterprise valuation.'
            ],
            [
                d('Gross Margin Target', 'Revenue minus COGS divided by Revenue.', 'Elite: >85% | Good: 75-80% | Warning: <70%'),
                d('COGS Contamination', 'Percentage of non-production infra mistakenly billed as COGS.', '< 5% margin of error')
            ],
            'Audit your master cloud billing account and separate production (COGS) from R&D (Opex).',
            ['Create a strict tag taxonomy (env:prod vs env:dev).', 'Isolate CI/CD compute into a dedicated billing project.', 'Recalculate your true Gross Margin.'],
            {
                question: 'Why is it critical to separate staging environments from production in cloud billing?',
                options: ['To prevent developers from accessing production data', 'To satisfy SOC2 compliance requirements', 'Staging costs are R&D expenses, not COGS; mixing them artificially lowers your Gross Margin', 'To qualify for AWS enterprise discount programs'],
                correctIndex: 2,
                explanation: 'Gross Margin is the primary valuation metric for SaaS. By mistakenly including R&D staging servers in your COGS, you are mathematically telling investors your product is less profitable than it actually is.'
            }
        ),
        l('Per-Tenant Unit Economics', 
            [
                'In multi-tenant SaaS architectures, calculating the cost per specific customer is notoriously difficult because compute and memory are pooled.',
                'Without per-tenant unit economics, you cannot identify "toxic tenants"—customers who pay $500/month but consume $800/month in database IOPS.',
                'You must allocate shared costs mathematically using a proportional heuristic: usually total requests, storage footprint, or active user sessions.'
            ],
            [
                d('Toxic Tenant Ratio', 'Percentage of customers whose allocated infrastructure cost exceeds their MRR.', '< 2% of customer base'),
                d('Allocation Accuracy', 'Percentage of total shared infrastructure successfully mapped to specific tenants.', '> 90% allocation rate')
            ],
            'Identify your shared database cost and build a proportional allocation model based on tenant query volume.',
            ['Export your total shared database cost for the month.', 'Query your APM or logging stack for total database transactions per Tenant ID.', 'Multiply the percentage of total transactions for each tenant by the total database cost.'],
            {
                question: 'What is a "Toxic Tenant"?',
                options: ['A customer who constantly files support tickets', 'A customer whose proportional infrastructure consumption costs more than their subscription revenue', 'A user who attempts SQL injection attacks', 'A customer who churns within 30 days'],
                correctIndex: 1,
                explanation: 'A toxic tenant is structurally unprofitable. Because their heavy usage is usually hidden within shared multi-tenant clusters, they act as parasites on your gross margin until unit economics modeling exposes them.'
            }
        )
    ], '/vault/curriculum/tracks/product-economics/6-2', undefined, 'live'
);
