import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks5and6Modules: Record<string, CurriculumModule> = {};

const t6 = 'Track 6 — AI Economics';

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
