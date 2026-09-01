import { GlossaryTerm } from '../types';

export const finopsBusinessTerms: GlossaryTerm[] = [
    {
        title: 'FinOps',
        slug: 'finops', tier: 'pillar',
        definition: `FinOps (Financial Operations) is a cloud financial management discipline that brings financial accountability to the variable cost model of cloud computing. It combines engineering, finance, and business teams to make real-time data-driven spending decisions.\n\nFinOps operates on three phases: Inform (visibility into cloud costs), Optimize (right-size, reserve, eliminate waste), Operate (continuously manage cloud economics).`,
        whyItMatters: 'Cloud costs are the second largest line item (after headcount) for most engineering organizations. Without FinOps discipline, cloud spend grows 2-3x faster than revenue. Richard Ewing\'s engineering diagnostics include cloud cost analysis as part of the overall R&D economics assessment.',
        howToMeasure: 'Track cloud spend as a percentage of revenue, cost per customer, unit economics per workload, and reserved vs. on-demand utilization ratio.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['cloud-cost-optimization', 'unit-economics', 'gross-margin-preservation', 'infrastructure-as-code'],
        faqs: [
            { question: 'Do we need a dedicated FinOps team?', answer: 'At $50K+/month cloud spend, a dedicated FinOps function typically pays for itself 3-5x. Below that, engineering leads can incorporate FinOps practices into existing workflows.' },
        ],
    },
    {
        title: 'Cloud Cost Optimization',
        slug: 'cloud-cost-optimization',
        definition: `Cloud cost optimization is the continuous process of reducing cloud infrastructure spend while maintaining performance and reliability. It addresses the most common sources of cloud waste:\n\n**Over-provisioning:** Resources sized for peak load but running at 10-20% utilization\n**Zombie resources:** Instances, volumes, and load balancers no longer attached to active services\n**Missing reservations:** Paying on-demand prices for predictable workloads\n**Data transfer costs:** Unexpected cross-region or cross-AZ data transfer charges\n**AI/ML compute waste:** GPU instances left running after training completes`,
        whyItMatters: 'Cloud waste directly reduces gross margins. Most organizations waste 30-40% of their cloud spend. For a company spending $100K/month on cloud, that\'s $360K-$480K/year in waste  -  enough to hire 2-3 additional engineers.',
        howToMeasure: 'Track utilization rates across all resource types. Identify resources with <20% average utilization. Calculate savings from reserved instances vs. on-demand. Run weekly cost anomaly detection.',
        category: 'Cloud & Infrastructure',
        relatedTerms: ['finops', 'gross-margin-preservation', 'infrastructure-as-code', 'kubernetes'],
        faqs: [
            { question: 'What is the easiest win in cloud cost optimization?', answer: 'Reserved instances or savings plans for predictable workloads. This alone typically saves 30-50% compared to on-demand pricing with zero performance impact.' },
        ],
    },
    {
        title: 'Unit Economics',
        slug: 'unit-economics',
        definition: `Unit economics measures the direct revenue and costs associated with a single unit of your business model  -  typically a customer, transaction, or feature interaction. It answers the fundamental question: "Do we make money on each customer, or are we subsidizing growth with investor capital?"\n\n**Key unit economics metrics:**\n- **CAC (Customer Acquisition Cost):** Total sales + marketing spend ÷ new customers\n- **LTV (Lifetime Value):** Average revenue per customer × average lifespan\n- **LTV:CAC Ratio:** Target 3:1 or higher for healthy economics\n- **CAC Payback Period:** Months to recover customer acquisition cost`,
        whyItMatters: 'Unit economics is the foundation of the AI Economist discipline. Every framework Richard Ewing has created  -  PDI, AUEB, EV-SE, APER  -  is designed to improve unit economics by identifying and eliminating capital-destroying activities.',
        howToMeasure: 'Calculate CAC, LTV, LTV:CAC ratio, CAC payback period, and contribution margin per customer. Segment by channel, plan tier, and cohort.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['revenue-per-engineer', 'cost-of-predictivity', 'gross-margin-preservation', 'rule-of-40'],
        faqs: [
            { question: 'What LTV:CAC ratio should I target?', answer: '3:1 is the industry standard for healthy SaaS. Below 1:1 means you\'re losing money on every customer. Above 5:1 may mean you\'re under-investing in growth.' },
        ],
    },
    {
        title: 'Burn Rate',
        slug: 'burn-rate',
        definition: `Burn rate is the rate at which a company spends cash reserves, typically measured monthly. Gross burn is total monthly cash outflow. Net burn is total outflow minus revenue (how much cash the company loses per month).\n\n**Related:** Runway = Cash reserves ÷ Net burn rate = months until out of cash.\n\nBurn rate is the single most important metric for pre-profitability startups. It determines how long you have to reach profitability or raise the next round.`,
        whyItMatters: 'Engineering costs are typically 40-60% of burn rate. Richard Ewing\'s engineering diagnostics quantify how much of the burn rate is productive (generating future revenue) vs. wasteful (maintaining zombie features, over-provisioned infrastructure, misallocated engineering capital).',
        howToMeasure: 'Monthly: Total cash out (gross burn), Total cash out minus revenue (net burn). Runway = cash ÷ net burn. Track trends monthly.',
        category: 'Startup & Venture',
        relatedTerms: ['unit-economics', 'revenue-per-engineer', 'engineering-capital-allocation', 'rule-of-40'],
        faqs: [
            { question: 'What is a healthy burn rate?', answer: 'Context-dependent. Pre-revenue startups typically target 18-24 months of runway. Post-revenue companies should target net burn decreasing as a percentage of revenue, trending toward cash flow breakeven.' },
        ],
    },
    {
        title: 'Product-Led Growth',
        slug: 'product-led-growth',
        definition: `Product-Led Growth (PLG) is a go-to-market strategy where the product itself is the primary driver of customer acquisition, expansion, and retention. Users discover the product, experience value through a free or freemium tier, and upgrade to paid plans based on usage.\n\n**PLG characteristics:** Self-serve onboarding, freemium or free trial, in-product upgrade prompts, viral or collaborative features, usage-based pricing.\n\n**Examples:** Slack, Zoom, Notion, Figma, Dropbox, Canva.`,
        whyItMatters: 'PLG companies achieve lower CAC (the product sells itself) and higher NRR (in-product expansion). Richard Ewing\'s free tools (PDI, EV-SE, AUEB, APER, Audit Interview) are a PLG strategy  -  users experience value free, then convert to advisory services.',
        howToMeasure: 'Track product-qualified leads (PQLs), free-to-paid conversion rate, time-to-value, and viral coefficient.',
        category: 'Growth & Marketing',
        relatedTerms: ['unit-economics', 'conversion-rate-optimization', 'landing-page-optimization', 'net-revenue-retention'],
        faqs: [
            { question: 'PLG vs. Sales-Led Growth  -  which is better?', answer: 'Neither is universally better. PLG works for products with low barrier to entry and individual user value. Enterprise products with complex sales cycles benefit from Sales-Led. Many modern SaaS companies use a hybrid approach.' },
        ],
    },
    {
        title: 'Revenue Operations',
        slug: 'revenue-operations',
        definition: `Revenue Operations (RevOps) is the alignment of marketing, sales, and customer success operations to drive full-funnel revenue growth. It breaks down silos between departments by unifying data, processes, tools, and goals.\n\nRevOps centralizes: CRM management, pipeline tracking, forecasting, territory and quota planning, attribution modeling, and cross-functional reporting.`,
        whyItMatters: 'RevOps eliminates the "leak" between marketing-qualified leads and closed revenue. Companies with aligned RevOps functions achieve 19% faster growth and 15% higher profitability according to Forrester research.',
        howToMeasure: 'Track pipeline velocity (deals × win rate × average deal size ÷ sales cycle length), forecast accuracy, lead-to-close conversion rate, and revenue per rep.',
        category: 'Growth & Marketing',
        relatedTerms: ['unit-economics', 'product-led-growth', 'net-revenue-retention', 'conversion-rate-optimization'],
        faqs: [
            { question: 'When should a company invest in RevOps?', answer: 'When marketing, sales, and CS are generating conflicting reports about pipeline health, or when leads are being dropped between handoffs. Typically post-Series A with 20+ employees.' },
        ],
    },
    {
        title: 'Operating Use',
        slug: 'operating-use',
        definition: `Operating use measures how effectively a company converts revenue growth into profit growth. High operating use means each additional dollar of revenue costs less to generate than the previous dollar  -  revenue grows faster than costs.\n\nSoftware companies have inherently high operating use because the marginal cost of serving an additional customer is near-zero (for traditional software). AI features reduce operating use by introducing variable costs that scale with usage.`,
        whyItMatters: 'Operating use is the reason software companies are valued at premium multiples. AI features that introduce per-usage variable costs reduce operating use  -  this is the core challenge the Cost of Predictivity framework addresses.',
        howToMeasure: 'Operating Use = Revenue Growth % ÷ Operating Income Growth %. A ratio above 1.0 indicates positive operating use  -  profits growing faster than revenue.',
        category: 'SaaS Metrics & Finance',
        relatedTerms: ['gross-margin-preservation', 'cost-of-predictivity', 'rule-of-40', 'unit-economics'],
        faqs: [
            { question: 'How do AI features affect operating use?', answer: 'Traditional software has near-zero marginal cost. AI features have per-query costs (tokens, compute) that increase with usage. This shifts the cost structure from fixed to variable, reducing operating use and compressing valuation multiples.' },
        ],
    },
    {
        title: 'Microservices Architecture',
        slug: 'microservices-architecture',
        definition: `Microservices architecture is an approach to software design where an application is composed of small, independent services that communicate over well-defined APIs. Each service owns its own data, can be deployed independently, and is typically maintained by a small team.\n\n**Benefits:** Independent scaling, technology diversity, fault isolation, faster deployment cycles.\n\n**Costs:** Network complexity, distributed data management, operational overhead, debugging difficulty.`,
        whyItMatters: 'Microservices introduce significant operational complexity that directly impacts engineering economics. Richard Ewing\'s diagnostic evaluates whether a team\'s microservices architecture is providing proportional value or just adding complexity  -  many teams adopt microservices prematurely, increasing costs without corresponding benefits.',
        howToMeasure: 'Track: services per engineer ratio, inter-service latency, deployment independence (can you deploy one service without affecting others?), and operational cost per service.',
        category: 'Architecture & Design',
        relatedTerms: ['kubernetes', 'devops', 'api-design', 'monolith'],
        faqs: [
            { question: 'When should I move from monolith to microservices?', answer: 'When your team size exceeds what can effectively work on a single codebase (typically 20-30 engineers), when different parts of the system need to scale independently, or when deployment coordination becomes the bottleneck.' },
        ],
    },
];
