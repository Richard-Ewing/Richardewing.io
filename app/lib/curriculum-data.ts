// Centralized curriculum data for tracks 5-10 (dynamic route modules)
// Tracks 1-4 have hardcoded pages; tracks 5-10 use [..slug] catch-all

export interface LessonDetail { metric: string; description: string; benchmark: string; }
export interface Lesson { title: string; content: string; details: LessonDetail[]; exercise: string; }
export interface CurriculumModule {
    moduleId: string; title: string; description: string; trackName: string;
    takeaways: string[]; lessons: Lesson[]; nextHref?: string;
}

function m(id: string, title: string, desc: string, track: string, takeaways: string[], lessons: Lesson[], next?: string): CurriculumModule {
    return { moduleId: id, title, description: desc, trackName: track, takeaways, lessons, nextHref: next };
}
function l(title: string, content: string, details: LessonDetail[], exercise: string): Lesson {
    return { title, content, details, exercise };
}
function d(metric: string, description: string, benchmark: string): LessonDetail {
    return { metric, description, benchmark };
}

const modules: Record<string, CurriculumModule> = {};

// ═══════════════════ TRACK 5: DevOps & Platform Economics ═══════════════════
const t5 = 'Track 5 — DevOps & Platform Economics';
modules['devops-economics/5-1'] = m('5.1','CI/CD Pipeline Economics','Master the ROI of CI/CD: pipeline costs, build time optimization, deployment frequency impact on revenue.',t5,['Calculate CI/CD pipeline ROI','Quantify build time costs in dollars','Measure deployment frequency business impact','Build a pipeline investment case'],[l('Lesson 1: Pipeline Cost Anatomy','Every CI/CD pipeline has direct costs (compute, storage, tooling licenses) and indirect costs (engineer wait time, context switching during builds).',[d('Build Compute','Cloud CI costs per build minute. GitHub Actions: $0.008/min. CircleCI: $0.006/min. Self-hosted: variable.','Target: <$500/mo for teams <20'),d('Wait Time Cost','Engineer salary ÷ working minutes × build wait minutes = cost of waiting. A 10-min build for 20 engineers running 5x/day = significant.','$150K engineer = $1.20/min idle cost'),d('Pipeline Maintenance','Time spent maintaining CI/CD config, fixing flaky tests, updating dependencies. Often 5-15% of DevOps time.','Healthy: <10% | Warning: 10-20% | Critical: >20%')],'Calculate your team\'s monthly CI/CD spend including compute, licenses, and engineer wait time.'),l('Lesson 2: Deployment Frequency ROI','DORA research proves higher deployment frequency correlates with higher organizational performance. But frequency has diminishing returns without quality.',[d('Frequency Tiers','Daily deployments vs weekly: 4x faster feedback loops, 3x faster bug detection, 60% smaller blast radius.','Elite: On-demand | High: Daily | Med: Weekly | Low: Monthly'),d('Revenue Impact','Faster deployments = faster feature delivery = faster revenue capture. Each week of delay costs: (feature ARR ÷ 52).','$1M feature delayed 4 weeks = $76K opportunity cost'),d('Quality Gate Cost','Each approval gate adds 2-8 hours of latency. Balance security with speed using automated gates.','Target: <4 gates for standard deploys')],'Map your current deployment pipeline end-to-end. Identify the 3 longest wait states and calculate their weekly cost.'),l('Lesson 3: Build Optimization Economics','Reducing build times from 15 minutes to 5 minutes saves more than compute — it saves engineering flow state.',[d('Flow State Recovery','After a context switch (waiting for a build), it takes 23 minutes to return to deep focus. 3 builds/day = 69 min lost.','Annual cost per engineer: ~$25K in lost productivity'),d('Caching ROI','Implementing build caching typically reduces build times 40-60%. Investment: 2-5 engineering days. Payback: 2-4 weeks.','ROI: 500-1000% in first year'),d('Parallelization','Splitting builds into parallel jobs reduces wall-clock time. Cost increases linearly but time decreases exponentially.','Sweet spot: 4-8 parallel jobs')],'Implement one build optimization (caching, parallelization, or test splitting) and measure before/after build times and costs.')],'/curriculum/tracks/devops-economics/5-2');

modules['devops-economics/5-2'] = m('5.2','Observability Investment','Calculate the ROI of monitoring, tracing, and logging. Understand alert fatigue economics and MTTR reduction.',t5,['Calculate observability stack TCO','Quantify MTTR improvement ROI','Identify and reduce alert fatigue costs','Design an observability budget'],[l('Lesson 1: Observability Stack Costs','The three pillars of observability (metrics, logs, traces) each have distinct cost profiles and ROI characteristics.',[d('Metrics','Time-series databases (Datadog, Prometheus). Cost scales with cardinality. Avg enterprise: $15-50/host/month.','Budget: 3-5% of infrastructure spend'),d('Logging','Log ingestion and storage. Costs scale with volume. Avg: $1-3/GB ingested. Retention drives storage costs.','Typical: 1-5TB/day for mid-size SaaS'),d('Tracing','Distributed tracing overhead: 1-5% performance impact. Cost: $5-15/host/month on top of monitoring.','ROI highest for microservices architectures')],'Audit your current observability costs across all three pillars. Calculate cost per host and cost per GB.'),l('Lesson 2: MTTR Economics','Mean Time to Recovery directly impacts revenue. Every minute of downtime has a calculable cost.',[d('Downtime Cost','Revenue/year ÷ 525,600 minutes = revenue per minute. $10M ARR = $19/min. $100M ARR = $190/min.','Add: reputation damage, SLA penalties, support surge'),d('MTTR Reduction ROI','Investing $100K in observability that reduces MTTR from 60min to 15min, with 10 incidents/year: saves 450 min × $cost/min.','Typical ROI: 300-800% for companies with >$5M ARR'),d('Alert Quality','High-quality alerts reduce MTTR 2-3x. Low-quality alerts (>50% false positive) actually increase MTTR.','Target: <20% false positive rate')],'Calculate your organization\'s cost per minute of downtime including revenue, SLA penalties, and support costs.'),l('Lesson 3: Alert Fatigue Economics','Too many alerts is worse than too few. Alert fatigue leads to ignored critical alerts and increased incident severity.',[d('Alert Volume','Engineers receiving >50 alerts/week become desensitized. Critical alerts get lost in noise. Resolution time increases 40%.','Healthy: <20 alerts/week per engineer'),d('On-Call Costs','On-call compensation + sleep disruption + burnout + attrition. Unhealthy on-call costs 2-3x the direct compensation.','Factor: $500-2000/week total cost per on-call engineer'),d('Remediation','Implement alert scoring, suppression, and intelligent grouping. Reduces alert volume 60-80%.','Investment: 2-4 weeks engineering time. Payback: 1 month')],'Audit your alert pipeline: count total alerts/week, false positive rate, and on-call disruption incidents. Calculate the total cost.')],'/curriculum/tracks/devops-economics/5-3');

// Generate remaining T5 modules with concise data
const t5Mods: [string,string,string,string[]][] = [
    ['5-3','Infrastructure as Code ROI','IaC adoption costs vs manual provisioning, configuration drift prevention, and compliance automation.',['Calculate IaC adoption ROI','Quantify configuration drift costs','Measure compliance automation savings','Build IaC investment case']],
    ['5-4','Incident Management Economics','Incident costs, on-call economics, blameless post-mortem value, and incident frequency reduction.',['Calculate total incident costs','Design cost-effective on-call rotations','Quantify post-mortem value','Reduce incident frequency ROI']],
    ['5-5','Container & Kubernetes Economics','Container overhead, K8s cluster right-sizing, pod resource optimization, and namespace cost allocation.',['Calculate container overhead costs','Right-size Kubernetes clusters','Implement namespace cost allocation','Optimize pod resource requests']],
    ['5-6','Release Engineering','Release cost analysis, feature flags ROI, canary deployment economics, and rollback cost modeling.',['Calculate release costs end-to-end','Quantify feature flag ROI','Model canary deployment savings','Build rollback cost models']],
    ['5-7','Site Reliability Economics','SRE team sizing, error budget economics, toil elimination ROI, and reliability investment frameworks.',['Size SRE teams economically','Calculate error budget value','Quantify toil elimination ROI','Build reliability investment cases']],
    ['5-8','Service Mesh & Networking','Mesh overhead costs, service discovery economics, mTLS performance impact, and network optimization.',['Calculate service mesh overhead','Quantify mTLS performance costs','Optimize service discovery','Network cost optimization']],
    ['5-9','Database Operations Economics','DBA costs, migration economics, sharding vs vertical scaling, and database TCO comparison.',['Compare database TCO across vendors','Calculate migration ROI','Model sharding economics','Optimize DBA team sizing']],
    ['5-10','Multi-Cloud Strategy','Multi-cloud cost premium, egress costs, vendor diversification value, and abstraction layer economics.',['Calculate multi-cloud premium','Quantify egress costs','Value vendor diversification','Build abstraction layer ROI']],
    ['5-11','DevSecOps Integration','Shift-left economics, SAST/DAST tool costs, vulnerability SLA economics, and security pipeline ROI.',['Calculate shift-left ROI','Compare SAST/DAST tool costs','Model vulnerability SLA economics','Build security pipeline investment case']],
    ['5-12','Platform Team Economics','Internal developer platform ROI, golden path economics, developer experience metrics, and platform team sizing.',['Calculate IDP ROI','Design golden path economics','Measure developer experience','Size platform teams']],
    ['5-13','Edge Computing Economics','Edge vs cloud cost comparison, CDN ROI, latency cost analysis, and edge deployment strategies.',['Compare edge vs cloud costs','Calculate CDN ROI','Quantify latency costs','Model edge deployment economics']],
    ['5-14','Serverless Economics','Cold start costs, serverless vs containers comparison, pay-per-use modeling, and serverless migration ROI.',['Model serverless costs accurately','Compare serverless vs containers','Calculate cold start impact','Build migration ROI case']],
    ['5-15','DevOps Maturity Synthesis','Complete DevOps economic model, maturity assessment framework, ROI dashboard, and executive reporting.',['Build complete DevOps economic model','Design maturity assessment framework','Create ROI dashboard','Present to executives']],
];

t5Mods.forEach(([id, title, desc, takeaways], i) => {
    const nextId = i < t5Mods.length - 1 ? t5Mods[i+1][0] : undefined;
    modules[`devops-economics/${id}`] = m(`${id.replace('-','.')}`, title, desc, t5, takeaways, [
        l(`Lesson 1: ${title} Fundamentals`, `Understanding the core economics of ${title.toLowerCase()}: what it costs, what it saves, and how to measure both.`,
            [d('Cost Structure',`Direct and indirect costs of ${title.toLowerCase()} initiatives in modern engineering organizations.`,'Benchmark against industry standards'),
             d('ROI Framework',`How to calculate return on investment for ${title.toLowerCase()} with a 12-month time horizon.`,'Target: >200% ROI in first year'),
             d('Industry Benchmarks',`How top-performing organizations approach ${title.toLowerCase()} vs average performers.`,'Top quartile vs median comparison')],
            `Calculate your organization's current spend on ${title.toLowerCase()} and identify the top 3 optimization opportunities.`),
        l(`Lesson 2: ${title} Implementation`, `Practical implementation strategies for optimizing ${title.toLowerCase()} in your organization.`,
            [d('Implementation Cost',`Typical investment required: engineering time, tooling, and organizational change.`,'2-8 weeks for initial implementation'),
             d('Quick Wins',`Identify and execute high-ROI, low-effort improvements in the first 30 days.`,'Target: 3 quick wins in month 1'),
             d('Measurement',`Key metrics to track progress and demonstrate value to stakeholders.`,'Monthly reporting cadence recommended')],
            `Design a 90-day implementation plan with specific milestones and expected ROI at each stage.`),
        l(`Lesson 3: ${title} Board Reporting`, `How to communicate ${title.toLowerCase()} investments and returns in financial language for executives and boards.`,
            [d('Financial Translation',`Convert technical metrics into dollar figures that resonate with CFOs and board members.`,'Always: dollar amounts and business impact'),
             d('Trend Analysis',`Show trajectory and momentum, not just snapshots. Boards invest in improving trends.`,'Minimum 3 quarters of trend data'),
             d('Benchmark Context',`Compare your metrics against industry, stage, and your own historical performance.`,'Top quartile = competitive advantage')],
            `Create a one-page executive summary of your ${title.toLowerCase()} investment with ROI, trends, and benchmarks.`)
    ], nextId ? `/curriculum/tracks/devops-economics/${nextId}` : undefined);
});

// ═══════════════════ TRACK 6-10: Generate with same pattern ═══════════════════
const trackDefs: [string, string, string, [string,string,string,string[]][]][] = [
    ['product-economics', 'Track 6 — Product Management Economics', 'Product economics for PMs and CPOs.', [
        ['6-1','Feature Prioritization Economics','RICE vs WSJF, opportunity cost modeling, and stack-ranking features by dollar value.',['Master RICE vs WSJF comparison','Calculate feature opportunity costs','Stack-rank by dollar value','Build prioritization frameworks']],
        ['6-2','Pricing & Packaging Strategy','Value-based pricing, tier design, usage pricing models, and price elasticity testing.',['Design value-based pricing','Build effective tier structures','Model usage-based pricing','Test price elasticity']],
        ['6-3','Churn & Retention Economics','Churn waterfall analysis, LTV modeling, retention investment ROI, and cohort analysis.',['Build churn waterfall models','Calculate LTV accurately','Measure retention ROI','Run cohort analysis']],
        ['6-4','Feature Bloat Calculus','Feature cost decay curves, maintenance drag, sunset economics, and portfolio optimization.',['Calculate feature cost decay','Quantify maintenance drag','Model sunset economics','Optimize feature portfolio']],
        ['6-5','Product-Led Growth Economics','PLG funnel costs, free tier economics, conversion optimization, and viral coefficient.',['Model PLG funnel economics','Design profitable free tiers','Optimize conversion rates','Calculate viral coefficients']],
        ['6-6','Competitive Moat Analysis','Switching cost quantification, network effects, data moats, and defensibility scoring.',['Quantify switching costs','Measure network effects','Value data moats','Score competitive defensibility']],
        ['6-7','A/B Testing Economics','Experimentation ROI, test duration costs, statistical significance, and experimentation culture.',['Calculate experimentation ROI','Optimize test duration','Understand statistical significance','Build experimentation culture']],
        ['6-8','Product Operations','ProductOps ROI, tool consolidation, process automation, and ops team sizing.',['Calculate ProductOps ROI','Consolidate tool stack','Automate processes','Size ops teams']],
        ['6-9','Customer Acquisition Economics','CAC payback, channel economics, blended CAC, and acquisition efficiency.',['Calculate CAC payback period','Compare channel economics','Optimize blended CAC','Measure acquisition efficiency']],
        ['6-10','Marketplace Economics','Platform take rates, network economics, liquidity metrics, and marketplace growth.',['Design optimal take rates','Model network economics','Measure marketplace liquidity','Plan growth economics']],
        ['6-11','Product Analytics ROI','Analytics stack costs, insight-to-action rate, data warehouse ROI, and analytics team sizing.',['Calculate analytics stack TCO','Measure insight-to-action','Model warehouse ROI','Size analytics teams']],
        ['6-12','Technical Product Management','TPM economics, API monetization, developer tool pricing, and platform strategy.',['Model TPM economics','Design API monetization','Price developer tools','Build platform strategy']],
        ['6-13','Product Roadmap Economics','Opportunity cost of roadmaps, pivot costs, feature debt, and strategic allocation.',['Calculate roadmap opportunity costs','Model pivot economics','Quantify feature debt','Allocate strategically']],
        ['6-14','Product-Finance Partnership','PM scorecards, revenue attribution, unit economics reporting, and finance alignment.',['Build PM scorecards','Attribute revenue accurately','Report unit economics','Align with finance']],
        ['6-15','Product Economics Synthesis','Complete product economic model, portfolio view, board reporting, and strategic planning.',['Build complete product economic model','Create portfolio views','Design board reports','Develop strategic plans']],
    ]],
    ['security-economics', 'Track 7 — Security & Compliance Economics', 'The economics of security investment and compliance.', [
        ['7-1','Breach Cost Modeling','IBM breach cost framework, industry benchmarks, notification costs, and recovery economics.',['Model breach costs accurately','Benchmark against industry','Calculate notification costs','Plan recovery economics']],
        ['7-2','Compliance ROI','SOC 2, HIPAA, GDPR, and ISO 27001 investment analysis and revenue enablement.',['Calculate SOC 2 ROI','Model HIPAA economics','Analyze GDPR investment','Plan ISO 27001']],
        ['7-3','Security Debt Quantification','Vulnerability cost modeling, CVSS economics, and remediation prioritization.',['Quantify security debt in dollars','Model CVSS-based costs','Prioritize remediation','Build security investment case']],
        ['7-4','Identity & Access Economics','IAM costs, SSO ROI, MFA economics, and zero-trust investment.',['Calculate IAM TCO','Model SSO ROI','Analyze MFA economics','Plan zero-trust investment']],
        ['7-5','Application Security Investment','SAST/DAST ROI, bug bounty economics, pen test value, and shift-left savings.',['Compare SAST/DAST ROI','Design bug bounty economics','Measure pen test value','Calculate shift-left savings']],
        ['7-6','Security Operations Center','SOC costs, SIEM ROI, MDR vs in-house, and alert economics.',['Calculate SOC costs','Model SIEM ROI','Compare MDR vs in-house','Optimize alert economics']],
        ['7-7','Cloud Security Economics','CSPM costs, cloud IAM, encryption overhead, and zero-trust cloud.',['Calculate CSPM costs','Model cloud IAM','Measure encryption overhead','Plan zero-trust cloud']],
        ['7-8','Supply Chain Security','SBOM costs, dependency risk quantification, and third-party assessment.',['Calculate SBOM costs','Quantify dependency risk','Assess third-party security','Build supply chain program']],
        ['7-9','Data Protection Economics','DLP costs, encryption ROI, data classification investment, and privacy economics.',['Calculate DLP costs','Model encryption ROI','Plan data classification','Analyze privacy economics']],
        ['7-10','Incident Response Economics','IR team costs, tabletop exercise ROI, recovery time modeling, and playbook value.',['Calculate IR team costs','Model tabletop ROI','Plan recovery time','Value playbooks']],
        ['7-11','Cyber Insurance Analysis','Premium modeling, coverage gap analysis, risk transfer vs retain, and policy optimization.',['Model insurance premiums','Identify coverage gaps','Decide transfer vs retain','Optimize policies']],
        ['7-12','Security Awareness Training','Training ROI, phishing simulation value, culture change costs, and behavior metrics.',['Calculate training ROI','Model phishing simulation','Plan culture change','Measure behavior change']],
        ['7-13','Privacy Program Economics','DPO costs, DSAR processing, privacy by design ROI, and consent management.',['Calculate DPO costs','Model DSAR economics','Measure privacy by design ROI','Plan consent management']],
        ['7-14','Security Board Reporting','CISO board presentations, risk quantification, budget justification, and metric design.',['Build CISO board decks','Quantify risk for boards','Justify security budgets','Design security metrics']],
        ['7-15','Security Economics Synthesis','Complete security investment model, portfolio risk view, and strategic planning.',['Build security economic model','Create portfolio risk views','Develop strategic security plans','Present to board']],
    ]],
    ['data-economics', 'Track 8 — Data & Analytics Economics', 'The economics of data infrastructure and analytics.', [
        ['8-1','Data Warehouse Economics','Snowflake vs Databricks costs, compute optimization, and storage strategies.',['Compare warehouse costs','Optimize compute spend','Plan storage strategies','Calculate warehouse ROI']],
        ['8-2','Data Quality ROI','Data quality costs, five dimensions of quality, and remediation economics.',['Calculate data quality costs','Apply five dimensions','Model remediation economics','Build quality programs']],
        ['8-3','Analytics Team Economics','Analyst costs, BI tool ROI, self-service analytics, and team composition.',['Calculate analyst costs','Model BI tool ROI','Plan self-service analytics','Size analytics teams']],
        ['8-4','Data Pipeline Economics','ETL vs ELT costs, orchestration tools, pipeline maintenance, and scaling.',['Compare ETL vs ELT costs','Evaluate orchestration tools','Calculate maintenance costs','Plan pipeline scaling']],
        ['8-5','ML Pipeline & MLOps','Model training costs, experiment tracking, model serving economics, and MLOps ROI.',['Calculate training costs','Model experiment tracking','Optimize model serving','Calculate MLOps ROI']],
        ['8-6','Data Governance Investment','Catalog costs, lineage tools, access control, and metadata management.',['Calculate catalog costs','Model lineage tool ROI','Plan access control','Value metadata management']],
        ['8-7','Real-Time Analytics','Streaming costs, Kafka economics, event-driven architecture, and latency value.',['Calculate streaming costs','Model Kafka economics','Plan event-driven architecture','Value low latency']],
        ['8-8','Data Lake Strategy','Lake vs warehouse costs, lakehouse ROI, schema-on-read, and data lifecycle.',['Compare lake vs warehouse','Model lakehouse ROI','Plan schema strategies','Manage data lifecycle']],
        ['8-9','Business Intelligence ROI','BI platform costs, dashboard proliferation, decision impact, and adoption metrics.',['Calculate BI platform costs','Manage dashboard sprawl','Measure decision impact','Track adoption']],
        ['8-10','Customer Data Platform','CDP costs, identity resolution, data unification, and personalization ROI.',['Calculate CDP costs','Model identity resolution','Plan data unification','Measure personalization ROI']],
        ['8-11','Data Engineering Productivity','dbt ROI, transformation costs, testing automation, and engineer efficiency.',['Calculate dbt ROI','Model transformation costs','Plan testing automation','Measure engineer efficiency']],
        ['8-12','Feature Store Economics','Feature engineering costs, store ROI, team productivity, and reuse metrics.',['Calculate feature engineering costs','Model feature store ROI','Measure team productivity','Track feature reuse']],
        ['8-13','Data Privacy & Compliance','GDPR data costs, anonymization, right to deletion, and consent economics.',['Calculate GDPR compliance costs','Model anonymization','Plan right to deletion','Value consent management']],
        ['8-14','Data Monetization','Data-as-product strategy, API monetization, revenue attribution, and pricing.',['Design data-as-product','Plan API monetization','Attribute data revenue','Price data products']],
        ['8-15','Data Economics Synthesis','Complete data investment model, TCO dashboard, board reporting, and strategy.',['Build data economic model','Create TCO dashboards','Design board reports','Develop data strategy']],
    ]],
    ['engineering-leadership', 'Track 9 — Engineering Leadership', 'Economics for VPs and CTOs.', [
        ['9-1','CTO Economics','CTO vs VP Eng costs, technical leadership ROI, and board relationship value.',['Compare CTO vs VP Eng economics','Calculate leadership ROI','Value board relationships','Plan succession']],
        ['9-2','Headcount Planning','Hiring economics, backfill costs, team sizing models, and capacity planning.',['Model hiring economics','Calculate backfill costs','Size teams optimally','Plan capacity']],
        ['9-3','Reorg Economics','Reorganization costs, productivity dip modeling, and change management ROI.',['Calculate reorg costs','Model productivity dips','Plan change management','Measure recovery time']],
        ['9-4','Architecture Decision Records','ADR economics, decision cost modeling, reversibility analysis, and governance.',['Calculate decision costs','Model ADR value','Analyze reversibility','Build governance frameworks']],
        ['9-5','Engineering Culture Economics','Culture as investment, toxicity costs, psychological safety ROI, and measurement.',['Value culture as investment','Calculate toxicity costs','Measure psychological safety ROI','Build culture metrics']],
        ['9-6','Technical Strategy','Technology radar economics, build vs buy decisions, and strategic architecture.',['Build technology radars','Model build vs buy','Design strategic architecture','Plan technology investments']],
        ['9-7','Talent Retention Economics','Attrition costs, retention investment ROI, compensation strategy, and employer brand.',['Calculate attrition costs','Model retention ROI','Design comp strategy','Value employer brand']],
        ['9-8','Performance Management Economics','Review costs, OKR program ROI, performance improvement, and measurement.',['Calculate review costs','Model OKR program ROI','Plan performance improvement','Design metrics']],
        ['9-9','Mentorship & Growth Programs','Mentorship ROI, IC growth tracks, career ladder economics, and L&D investment.',['Calculate mentorship ROI','Design growth tracks','Build career ladders','Plan L&D investment']],
        ['9-10','Distributed Team Economics','Remote work costs, timezone overlap value, tooling investment, and office ROI.',['Model remote work costs','Value timezone overlap','Plan tooling investment','Calculate office ROI']],
        ['9-11','Innovation Programs','Hackathon ROI, innovation sprint economics, intrapreneurship, and idea pipeline.',['Calculate hackathon ROI','Model innovation sprints','Plan intrapreneurship','Build idea pipelines']],
        ['9-12','Engineering Brand','Employer brand ROI, tech blog economics, OSS strategy, and conference investment.',['Calculate employer brand ROI','Model tech blog value','Plan OSS strategy','Optimize conference spend']],
        ['9-13','Exec Communication','Board reporting, stakeholder management, technical storytelling, and influence.',['Build board reports','Manage stakeholders','Master technical storytelling','Build influence']],
        ['9-14','Engineering M&A','Due diligence leadership, integration playbook, talent retention, and synergy capture.',['Lead due diligence','Build integration playbooks','Retain key talent','Capture synergies']],
        ['9-15','Leadership Economics Synthesis','CTO dashboard, quarterly reviews, long-term capital planning, and strategy.',['Build CTO dashboards','Run quarterly reviews','Plan long-term capital','Develop engineering strategy']],
    ]],
    ['startup-economics', 'Track 10 — Startup Economics', 'Engineering economics for startup founders.', [
        ['10-1','Runway & Burn Rate','Burn rate analysis, runway calculation, zero-cash date modeling, and cash management.',['Calculate burn rate accurately','Model runway scenarios','Predict zero-cash date','Plan cash management']],
        ['10-2','MVP Economics','MVP cost modeling, lean development, build-measure-learn economics, and iteration costs.',['Model MVP costs','Plan lean development','Calculate iteration costs','Optimize learning speed']],
        ['10-3','Technical Co-Founder Economics','CTO equity valuation, technical hiring, early architecture, and founder dynamics.',['Value CTO equity','Plan technical hiring','Design early architecture','Navigate founder dynamics']],
        ['10-4','Series A Engineering Metrics','What VCs want, APER targets, velocity proof, and engineering due diligence.',['Prepare VC-ready metrics','Hit APER targets','Prove velocity','Pass due diligence']],
        ['10-5','Scaling Engineering 1→10','First 10 engineers, role specialization, architecture scaling, and culture setting.',['Hire first 10 engineers','Specialize roles','Scale architecture','Set engineering culture']],
        ['10-6','Technical Debt in Startups','Intentional debt, speed vs quality, debt-equity tradeoffs, and paydown timing.',['Make intentional debt decisions','Balance speed vs quality','Model debt-equity tradeoffs','Time debt paydown']],
        ['10-7','Vendor & Tool Selection','Startup tool stack costs, free tier strategy, upgrade triggers, and vendor management.',['Optimize tool stack costs','Leverage free tiers','Identify upgrade triggers','Manage vendors']],
        ['10-8','Outsourcing Economics','Agency vs in-house, contractor management, knowledge transfer, and quality control.',['Compare agency vs in-house','Manage contractors','Plan knowledge transfer','Control quality']],
        ['10-9','Fundraising Engineering Story','Tech pitch deck, engineering metrics for VCs, demo economics, and technical narratives.',['Build tech pitch decks','Present metrics to VCs','Optimize demo ROI','Craft technical narratives']],
        ['10-10','Scaling 10→50 Engineers','Middle management, process introduction, culture preservation, and org design.',['Introduce middle management','Design processes','Preserve culture','Scale org design']],
        ['10-11','Platform vs Product Investment','Platform tax, developer tools, internal infrastructure, and build vs buy at scale.',['Calculate platform tax','Value developer tools','Plan infrastructure','Model build vs buy']],
        ['10-12','Acquisition Readiness','Clean room prep, technical due diligence, IP documentation, and deal preparation.',['Prepare clean rooms','Pass due diligence','Document IP','Prepare for deals']],
        ['10-13','Competition & Moat','Technical moat valuation, feature parity costs, speed to market, and defensibility.',['Value technical moats','Calculate parity costs','Optimize speed to market','Score defensibility']],
        ['10-14','International Expansion','Localization costs, multi-region architecture, compliance, and market entry economics.',['Calculate localization costs','Design multi-region architecture','Plan compliance','Model market entry']],
        ['10-15','Startup Economics Synthesis','Complete startup financial model, board dashboard, exit planning, and strategy.',['Build financial models','Create board dashboards','Plan exits','Develop startup strategy']],
    ]],
];

trackDefs.forEach(([trackSlug, trackName, , mods]) => {
    mods.forEach(([id, title, desc, takeaways], i) => {
        const nextId = i < mods.length - 1 ? mods[i+1][0] : undefined;
        modules[`${trackSlug}/${id}`] = m(`${id.replace('-','.')}`, title, desc, trackName, takeaways, [
            l(`Lesson 1: ${title} Fundamentals`, `Understanding the core economics of ${title.toLowerCase()}: costs, savings, and measurement frameworks.`,
                [d('Cost Structure',`Direct and indirect costs of ${title.toLowerCase()} in engineering organizations.`,'Benchmark against industry standards'),
                 d('ROI Framework',`How to calculate return on investment for ${title.toLowerCase()} initiatives.`,'Target: >200% ROI in first year'),
                 d('Industry Benchmarks',`How top-performing organizations approach ${title.toLowerCase()}.`,'Top quartile vs median comparison')],
                `Calculate your organization's current investment in ${title.toLowerCase()} and identify optimization opportunities.`),
            l(`Lesson 2: Implementation Strategy`, `Practical implementation for optimizing ${title.toLowerCase()} with quick wins and long-term planning.`,
                [d('Implementation Cost',`Typical investment: engineering time, tooling, organizational change.`,'2-8 weeks for initial phase'),
                 d('Quick Wins',`High-ROI, low-effort improvements achievable in the first 30 days.`,'Target: 3 quick wins in month 1'),
                 d('Measurement',`Key metrics to track progress and demonstrate value.`,'Monthly reporting cadence')],
                `Design a 90-day implementation plan with milestones and expected ROI at each stage.`),
            l(`Lesson 3: Executive Communication`, `How to present ${title.toLowerCase()} investments in financial language for executives.`,
                [d('Financial Translation',`Convert technical metrics into dollar figures for leadership.`,'Always: dollar amounts and business impact'),
                 d('Trend Analysis',`Show trajectory and improvement momentum over time.`,'Minimum 3 quarters of data'),
                 d('Strategic Positioning',`Connect ${title.toLowerCase()} to organizational strategic goals.`,'Align with company OKRs')],
                `Create a one-page executive summary with ROI, trends, and strategic recommendations.`)
        ], nextId ? `/curriculum/tracks/${trackSlug}/${nextId}` : undefined);
    });
});

export function getModule(slug: string): CurriculumModule | undefined {
    return modules[slug];
}

export function getAllModuleSlugs(): string[] {
    return Object.keys(modules);
}
