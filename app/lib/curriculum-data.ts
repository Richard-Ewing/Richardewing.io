// Centralized curriculum data for tracks 5-10 (dynamic route modules)
// Tracks 1-4 have hardcoded pages; tracks 5-10 use [..slug] catch-all

import { populateTracks1To4 } from './curriculum-tracks-1-4';

export interface LessonDetail { metric: string; description: string; benchmark: string; }
export interface Lesson { title: string; content: string; details: LessonDetail[]; exercise: string; }
export interface CurriculumModule {
    moduleId: string; title: string; description: string; trackName: string;
    takeaways: string[]; lessons: Lesson[]; nextHref?: string;
    productId?: string; bundleId?: string;
    embeddedTool?: string;
}

export function m(id: string, title: string, desc: string, track: string, takeaways: string[], lessons: Lesson[], next?: string, embeddedTool?: string): CurriculumModule {
    return { moduleId: id, title, description: desc, trackName: track, takeaways, lessons, nextHref: next, embeddedTool };
}
export function l(title: string, content: string, details: LessonDetail[], exercise: string): Lesson {
    return { title, content, details, exercise };
}
export function d(metric: string, description: string, benchmark: string): LessonDetail {
    return { metric, description, benchmark };
}

export const modules: Record<string, CurriculumModule> = {};

import { guidesComparisonsModules } from './curriculum-guides-comparisons';
import { tracks6to10Modules } from './curriculum-tracks-6-10';
import { tracks18to22Modules } from './curriculum-tracks-18-22';

// ═══════════════════ TRACK 1-4 ═══════════════════
populateTracks1To4(modules);

// ═══════════════════ TRACK 16 & 17 (GUIDES / COMPARISONS) ═══════════════════
Object.assign(modules, guidesComparisonsModules);

// ═══════════════════ TRACKS 6-10 ═══════════════════
Object.assign(modules, tracks6to10Modules);

// ═══════════════════ TRACKS 18-22 ═══════════════════
Object.assign(modules, tracks18to22Modules);

// ═══════════════════ TRACK 5: DevOps & Platform Economics ═══════════════════
const t5 = 'Track 5 — DevOps & Platform Economics';
modules['devops-economics/5-1'] = m('5.1','CI/CD Pipeline Economics','Master the ROI of CI/CD: pipeline costs, build time optimization, deployment frequency impact on revenue.',t5,['Calculate CI/CD pipeline ROI','Quantify build time costs in dollars','Measure deployment frequency business impact','Build a pipeline investment case'],[l('Lesson 1: Pipeline Cost Anatomy','Every CI/CD pipeline has direct costs (compute, storage, tooling licenses) and indirect costs (engineer wait time, context switching during builds).',[d('Build Compute','Cloud CI costs per build minute. GitHub Actions: $0.008/min. CircleCI: $0.006/min. Self-hosted: variable.','Target: <$500/mo for teams <20'),d('Wait Time Cost','Engineer salary ÷ working minutes × build wait minutes = cost of waiting. A 10-min build for 20 engineers running 5x/day = significant.','$150K engineer = $1.20/min idle cost'),d('Pipeline Maintenance','Time spent maintaining CI/CD config, fixing flaky tests, updating dependencies. Often 5-15% of DevOps time.','Healthy: <10% | Warning: 10-20% | Critical: >20%')],'Calculate your team\'s monthly CI/CD spend including compute, licenses, and engineer wait time.'),l('Lesson 2: Deployment Frequency ROI','DORA research proves higher deployment frequency correlates with higher organizational performance. But frequency has diminishing returns without quality.',[d('Frequency Tiers','Daily deployments vs weekly: 4x faster feedback loops, 3x faster bug detection, 60% smaller blast radius.','Elite: On-demand | High: Daily | Med: Weekly | Low: Monthly'),d('Revenue Impact','Faster deployments = faster feature delivery = faster revenue capture. Each week of delay costs: (feature ARR ÷ 52).','$1M feature delayed 4 weeks = $76K opportunity cost'),d('Quality Gate Cost','Each approval gate adds 2-8 hours of latency. Balance security with speed using automated gates.','Target: <4 gates for standard deploys')],'Map your current deployment pipeline end-to-end. Identify the 3 longest wait states and calculate their weekly cost.'),l('Lesson 3: Build Optimization Economics','Reducing build times from 15 minutes to 5 minutes saves more than compute — it saves engineering flow state.',[d('Flow State Recovery','After a context switch (waiting for a build), it takes 23 minutes to return to deep focus. 3 builds/day = 69 min lost.','Annual cost per engineer: ~$25K in lost productivity'),d('Caching ROI','Implementing build caching typically reduces build times 40-60%. Investment: 2-5 engineering days. Payback: 2-4 weeks.','ROI: 500-1000% in first year'),d('Parallelization','Splitting builds into parallel jobs reduces wall-clock time. Cost increases linearly but time decreases exponentially.','Sweet spot: 4-8 parallel jobs')],'Implement one build optimization (caching, parallelization, or test splitting) and measure before/after build times and costs.')],'/vault/curriculum/tracks/devops-economics/5-2');

modules['devops-economics/5-2'] = m('5.2','Observability Investment','Calculate the ROI of monitoring, tracing, and logging. Understand alert fatigue economics and MTTR reduction.',t5,['Calculate observability stack TCO','Quantify MTTR improvement ROI','Identify and reduce alert fatigue costs','Design an observability budget'],[l('Lesson 1: Observability Stack Costs','The three pillars of observability (metrics, logs, traces) each have distinct cost profiles and ROI characteristics.',[d('Metrics','Time-series databases (Datadog, Prometheus). Cost scales with cardinality. Avg enterprise: $15-50/host/month.','Budget: 3-5% of infrastructure spend'),d('Logging','Log ingestion and storage. Costs scale with volume. Avg: $1-3/GB ingested. Retention drives storage costs.','Typical: 1-5TB/day for mid-size SaaS'),d('Tracing','Distributed tracing overhead: 1-5% performance impact. Cost: $5-15/host/month on top of monitoring.','ROI highest for microservices architectures')],'Audit your current observability costs across all three pillars. Calculate cost per host and cost per GB.'),l('Lesson 2: MTTR Economics','Mean Time to Recovery directly impacts revenue. Every minute of downtime has a calculable cost.',[d('Downtime Cost','Revenue/year ÷ 525,600 minutes = revenue per minute. $10M ARR = $19/min. $100M ARR = $190/min.','Add: reputation damage, SLA penalties, support surge'),d('MTTR Reduction ROI','Investing $100K in observability that reduces MTTR from 60min to 15min, with 10 incidents/year: saves 450 min × $cost/min.','Typical ROI: 300-800% for companies with >$5M ARR'),d('Alert Quality','High-quality alerts reduce MTTR 2-3x. Low-quality alerts (>50% false positive) actually increase MTTR.','Target: <20% false positive rate')],'Calculate your organization\'s cost per minute of downtime including revenue, SLA penalties, and support costs.'),l('Lesson 3: Alert Fatigue Economics','Too many alerts is worse than too few. Alert fatigue leads to ignored critical alerts and increased incident severity.',[d('Alert Volume','Engineers receiving >50 alerts/week become desensitized. Critical alerts get lost in noise. Resolution time increases 40%.','Healthy: <20 alerts/week per engineer'),d('On-Call Costs','On-call compensation + sleep disruption + burnout + attrition. Unhealthy on-call costs 2-3x the direct compensation.','Factor: $500-2000/week total cost per on-call engineer'),d('Remediation','Implement alert scoring, suppression, and intelligent grouping. Reduces alert volume 60-80%.','Investment: 2-4 weeks engineering time. Payback: 1 month')],'Audit your alert pipeline: count total alerts/week, false positive rate, and on-call disruption incidents. Calculate the total cost.')],'/vault/curriculum/tracks/devops-economics/5-3');

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
    ], nextId ? `/vault/curriculum/tracks/devops-economics/${nextId}` : undefined);
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
    // ═══════════════════ TRACK 11: AI Operations & Governance Economics [NEW] ═══════════════════
    ['ai-operations', 'Track 11 — AI Operations & Governance Economics', 'The economics of deploying, governing, and scaling AI systems.', [
        ['11-1','AI Model Selection Economics','Compare foundation model costs (GPT-4, Claude, Gemini, Llama), inference pricing, quality-cost tradeoffs, and model portfolio strategy.',['Compare foundation model costs','Calculate inference economics','Model quality-cost tradeoffs','Design model portfolio strategy']],
        ['11-2','Prompt Engineering ROI','Prompt engineering productivity gains, prompt library economics, testing costs, and prompt-as-infrastructure.',['Calculate prompt engineering ROI','Build prompt library economics','Model testing costs','Design prompt infrastructure']],
        ['11-3','AI Testing & Evaluation Economics','Eval suite costs, benchmark design, regression testing for AI, and quality gate economics.',['Calculate eval suite costs','Design cost-effective benchmarks','Model AI regression testing','Build quality gate economics']],
        ['11-4','Hallucination Cost Modeling','Hallucination detection costs, business impact quantification, guardrail investment, and mitigation ROI.',['Quantify hallucination business impact','Calculate guardrail investment','Model mitigation ROI','Design detection costs']],
        ['11-5','RAG Architecture Economics','Embedding costs, vector database pricing, chunking strategy economics, and retrieval quality ROI.',['Calculate embedding costs','Compare vector DB pricing','Optimize chunking economics','Measure retrieval quality ROI']],
        ['11-6','AI Agent Economics','Agent orchestration costs, tool-use pricing, autonomy-risk tradeoffs, and multi-agent system economics.',['Model agent orchestration costs','Calculate tool-use pricing','Quantify autonomy-risk tradeoffs','Design multi-agent economics']],
        ['11-7','AI Compliance & Audit Costs','EU AI Act compliance, NIST AI RMF implementation, model cards, and governance committee economics.',['Calculate EU AI Act costs','Model NIST RMF implementation','Value model card infrastructure','Size governance committees']],
        ['11-8','AI Vendor Comparison Economics','OpenAI vs Anthropic vs Google vs self-hosted: total cost, capability, reliability, and switching costs.',['Compare AI vendor TCO','Model capability differences','Quantify reliability costs','Calculate switching costs']],
        ['11-9','AI Team Building & Costs','ML engineer compensation, AI team structures, skill gap economics, and training investment ROI.',['Model ML engineer compensation','Design AI team structures','Calculate skill gap costs','Plan training investment']],
        ['11-10','AI Operations Synthesis','Complete AI economic model, GPU cost forecasting, carbon footprint economics, and strategic planning.',['Build AI economic model','Forecast GPU costs','Model carbon economics','Develop AI strategy']],
        ['11-11','Graph RAG Implementation','Knowledge Graphs, Hallucination Elimination, Query Routing.',['Understand Knowledge Graphs','Eliminate Hallucinations','Route Queries Effectively','Determine Graph RAG ROI']],
        ['11-12','Multimodal Processing Pipelines','Audio/Video Reasoning, Document Ingestion Costs, Latency.',['Model Multimodal Costs','Analyze Video Reasoning ROI','Optimize Ingestion Pipeline','Manage Processing Latency']],
        ['11-13','AI Product Management','Probabilistic PM, Non-Deterministic Testing, Feature KPIs.',['Manage Probabilistic Products','Run Non-Deterministic Tests','Determine Feature KPIs','Measure AI ROI']],
        ['11-14','Shadow AI Discovery','Employee App Usage, Data Leakage Prevention, Policy Enforcement.',['Discover Shadow AI','Prevent Data Leakage','Enforce Usage Policies','Quantify Shadow AI Risk']],
        ['11-15','Prompt Injection Defense','Jailbreak Prevention, Input Sanitization, Security Economics.',['Prevent Jailbreaks','Sanitize User Inputs','Calculate Security Economics','Defend Against Injection']],
    ]],
    // ═══════════════════ TRACK 12: Enterprise Architecture Economics [NEW] ═══════════════════
    ['enterprise-architecture', 'Track 12 — Enterprise Architecture Economics', 'The economics of designing, evolving, and governing enterprise systems.', [
        ['12-1','Architecture Review Board Economics','ARB costs, decision throughput, governance overhead, and architecture decision ROI.',['Calculate ARB costs','Measure decision throughput','Quantify governance overhead','Model decision ROI']],
        ['12-2','API Gateway & Integration Costs','Gateway licensing, integration pattern costs, middleware economics, and API lifecycle management.',['Compare gateway costs','Model integration patterns','Calculate middleware economics','Plan API lifecycle']],
        ['12-3','Event-Driven Architecture Economics','Event bus costs, eventual consistency tradeoffs, CQRS economics, and event sourcing ROI.',['Calculate event bus costs','Model consistency tradeoffs','Analyze CQRS economics','Measure event sourcing ROI']],
        ['12-4','Legacy Modernization ROI','Modernization cost modeling, strangler fig economics, big bang vs incremental, and risk quantification.',['Model modernization costs','Calculate strangler fig ROI','Compare big bang vs incremental','Quantify migration risk']],
        ['12-5','Domain-Driven Design Economics','DDD implementation costs, bounded context value, ubiquitous language ROI, and strategic design.',['Calculate DDD implementation costs','Value bounded contexts','Measure ubiquitous language ROI','Plan strategic design']],
        ['12-6','High Availability & DR Economics','HA infrastructure costs, RPO/RTO economics, DR testing value, and downtime cost modeling.',['Calculate HA infrastructure costs','Model RPO/RTO economics','Value DR testing','Quantify downtime costs']],
        ['12-7','Service Mesh & Zero Trust Costs','Mesh overhead, mTLS performance impact, zero-trust economics, and identity-aware proxy costs.',['Calculate mesh overhead','Model mTLS performance impact','Plan zero-trust economics','Value identity-aware proxies']],
        ['12-8','Database Strategy Economics','Polyglot persistence costs, read replica economics, migration costs, and database consolidation.',['Model polyglot persistence costs','Calculate read replica ROI','Plan migration economics','Optimize database portfolio']],
        ['12-9','Architecture Decision Records at Scale','ADR program costs, decision tracking ROI, governance automation, and institutional memory.',['Calculate ADR program costs','Model decision tracking ROI','Plan governance automation','Value institutional memory']],
        ['12-10','Enterprise Architecture Synthesis','Complete EA economic model, technology radar economics, architecture health metrics, and strategic planning.',['Build EA economic model','Create technology radar economics','Design health metrics','Develop architecture strategy']],
        ['12-11','MACH Architecture Economics','Microservices, API-First, Cloud-Native, Headless Scaling.',['Model MACH ROI','Transition to API-First','Scale Cloud-Native Systems','Measure Headless Economics']],
        ['12-12','eBPF Observability Patterns','Kernel-Level Tracing, Sidecar Elimination, Network Routing.',['Implement Kernel Tracing','Eliminate Sidecars','Optimize Network Routing','Calculate eBPF ROI']],
        ['12-13','WebAssembly (Wasm) Edge Compute','Edge Functions, Docker Alternatives, Sub-Millisecond Cold Starts.',['Deploy Edge Functions','Compare Wasm vs Docker','Model Cold Start Savings','Calculate Edge ROI']],
        ['12-14','Serverless Compute Evolution','Scaling to Zero, Event Triggers, Concurrency Limits.',['Model Scale-to-Zero Savings','Design Event Triggers','Manage Concurrency','Optimize Serverless Spend']],
        ['12-15','Architecture Dependency Governance','SBOM Implementation, Vendor Sprawl, Dependency Hell Avoidance.',['Implement SBOMs','Manage Vendor Sprawl','Avoid Dependency Hell','Quantify Dependency Risk']],
    ]],
    // ═══════════════════ TRACK 13: AI Agent & Automation Economics [NEW] ═══════════════════
    ['ai-agent-economics', 'Track 13 — AI Agent & Automation Economics', 'The economics of building, deploying, and operating agentic AI systems.', [
        ['13-1','Agentic AI Fundamentals & Cost Structures','Foundation models for agents, inference costs, token economics, and agent architecture cost comparison.',['Compare agent architecture costs','Calculate token economics','Model inference spending','Design cost-efficient agents']],
        ['13-2','AI Agent Build vs Buy Framework','Self-built agents vs off-shelf (AutoGPT, CrewAI, LangGraph), vendor pricing, and customization ROI.',['Compare build vs buy for agents','Model vendor pricing','Calculate customization ROI','Design agent procurement strategy']],
        ['13-3','RAG Pipeline Cost Optimization','Embedding model costs, vector DB pricing (Pinecone, Weaviate, pgvector), chunking economics, and retrieval quality.',['Compare vector DB pricing','Optimize embedding costs','Model chunking economics','Measure retrieval quality ROI']],
        ['13-4','LLM Inference Cost Modeling','GPU costs (A100, H100, L40S), cloud inference pricing, batching strategies, and caching economics.',['Model GPU costs accurately','Compare cloud inference pricing','Design batching strategies','Calculate caching ROI']],
        ['13-5','AI Agent Monitoring & Observability','LLM observability costs (LangSmith, Arize, Phoenix), latency tracking, cost per query, and drift detection.',['Calculate observability costs','Track cost per query','Model latency economics','Design drift detection']],
        ['13-6','Multi-Agent System Economics','Orchestration overhead, agent communication costs, consensus mechanisms, and scaling agent systems.',['Model orchestration overhead','Calculate inter-agent costs','Design consensus economics','Plan agent scaling']],
        ['13-7','AI Workflow Automation ROI','RPA vs AI agents, process automation economics, human-in-the-loop costs, and automation maturity.',['Compare RPA vs AI agents','Calculate automation ROI','Model HITL costs','Assess automation maturity']],
        ['13-8','Prompt Engineering at Scale','Prompt library economics, A/B testing prompts, prompt versioning costs, and prompt-as-code infrastructure.',['Build prompt library economics','Model A/B testing costs','Plan prompt versioning','Design prompt infrastructure']],
        ['13-9','AI Safety & Guardrails Economics','Content filtering costs, output validation, constitutional AI overhead, and safety-performance tradeoffs.',['Calculate content filter costs','Model validation economics','Measure safety overhead','Optimize safety-performance']],
        ['13-10','AI Operations Maturity Assessment','AI maturity models, operational readiness scoring, total AI TCO, and strategic AI investment planning.',['Build AI maturity model','Score operational readiness','Calculate total AI TCO','Plan strategic investment']],
        ['13-11','Small Language Models (SLMs)','Llama 3 8B, Phi-3, Edge Inferencing, Latency Optimization.',['Select Optimal SLMs','Deploy Edge Inferencing','Optimize Latency','Calculate SLM Cost Savings']],
        ['13-12','Open Weights Engineering','Self-Hosting, VPC Security, Parameter Tuning, Licensing.',['Self-Host Open Weights','Ensure VPC Security','Tune Model Parameters','Navigate Licensing Costs']],
        ['13-13','AI-Assisted Development','Copilot ROI, Devin Automation, Code Verification Costs.',['Calculate Copilot ROI','Model Devin Automation','Quantify Verification Costs','Measure Developer Velocity']],
        ['13-14','Agentic Governance Models','Boundary Controls, Write vs Read Approvals, Financial Limits.',['Design Boundary Controls','Manage Write Approvals','Set Financial Limits','Govern Agentic Actions']],
        ['13-15','AI System Threat Prevention','Vulnerability Scanning, Data Poisoning, System Resiliency.',['Scan for Vulnerabilities','Prevent Data Poisoning','Ensure System Resiliency','Calculate Threat Prevention ROI']],
    ]],
    // ═══════════════════ TRACK 14: Cloud FinOps & Infrastructure Economics [NEW] ═══════════════════
    ['cloud-finops', 'Track 14 — Cloud FinOps & Infrastructure Economics', 'The economics of cloud cost management, optimization, and FinOps practice.', [
        ['14-1','FinOps Fundamentals & Maturity Model','FinOps Foundation framework, crawl-walk-run maturity, stakeholder alignment, and FinOps team sizing.',['Understand FinOps maturity','Align stakeholders','Size FinOps teams','Build FinOps roadmap']],
        ['14-2','Cloud Cost Allocation & Showback','Tagging strategies, cost center mapping, showback dashboards, and chargeback implementation.',['Design tagging strategies','Build showback dashboards','Implement chargeback','Map cost centers']],
        ['14-3','Reserved Instance & Savings Plan Optimization','RI vs Savings Plans, commitment strategy, coverage analysis, and break-even modeling.',['Compare RI vs Savings Plans','Design commitment strategy','Analyze coverage gaps','Model break-even points']],
        ['14-4','Kubernetes Cost Management','K8s right-sizing, namespace budgets, request vs limit optimziation, and cluster cost allocation.',['Right-size K8s resources','Set namespace budgets','Optimize requests vs limits','Allocate cluster costs']],
        ['14-5','Serverless vs Container Economics','Lambda vs ECS vs EKS cost comparison, cold start economics, and workload-fit analysis.',['Compare serverless vs containers','Calculate cold start costs','Analyze workload fit','Model scaling economics']],
        ['14-6','Multi-Cloud Cost Arbitrage','Cross-cloud pricing comparison, egress cost management, and vendor negotiation strategies.',['Compare cloud pricing','Manage egress costs','Negotiate vendor contracts','Model arbitrage savings']],
        ['14-7','Cloud Migration ROI Modeling','Lift-and-shift vs refactor costs, migration timeline economics, and post-migration optimization.',['Model migration costs','Compare strategies','Plan timelines','Optimize post-migration']],
        ['14-8','Data Transfer & Egress Optimization','CDN economics, edge caching ROI, bandwidth costs, and data locality strategies.',['Calculate egress costs','Model CDN economics','Optimize caching','Design data locality']],
        ['14-9','FinOps Team Building & Governance','FinOps roles, KPI frameworks, governance processes, and executive reporting.',['Define FinOps roles','Build KPI frameworks','Design governance','Create executive reports']],
        ['14-10','Infrastructure Economics Synthesis','Complete cloud economic model, optimization dashboard, annual review framework, and strategic planning.',['Build cloud economic model','Create optimization dashboard','Design annual reviews','Develop cloud strategy']],
        ['14-11','AI FinOps Specialization','LLM Token Allocation, GPU Cluster Depreciation, Margin Triage.',['Allocate LLM Tokens','Model GPU Depreciation','Triage Margin Impacts','Optimize AI FinOps']],
        ['14-12','Cloud Repatriation Calculus','Basecamp Migration Strategy, Bare Metal Racks, Egress Elimination.',['Model Repatriation ROI','Execute Basecamp Strategy','Manage Bare Metal','Eliminate Egress Costs']],
        ['14-13','Serverless GPU Brokering','Modal vs Runpod, Cold Start Tolerances, GPU Spot Markets.',['Compare Modal vs Runpod','Manage Cold Starts','Navigate GPU Spot Markets','Optimize GPU Brokering']],
        ['14-14','Data Security Posture Management (DSPM)','Cloud Discovery Scanning, Shadow Data Remediation, ROI Analysis.',['Scan Cloud Discovery','Remediate Shadow Data','Analyze DSPM ROI','Automate Security Posture']],
        ['14-15','Continuous Architecture Modernization','Refactoring Rhythms, Retiring Legacy Instances, Savings Decay.',['Set Refactoring Rhythms','Retire Legacy Instances','Model Savings Decay','Modernize Architecture Continuously']],
    ]],

    // ═══════════════════ TRACK 15: AI Career Pivots & Transitions [NEW] ═══════════════════
    ['ai-career-transitions', 'Track 15 — AI Career Pivots & Transitions', 'Actionable blueprints for pivoting into the highest-leverage 2026 technical disciplines.', [
        ['15-1','Breaking into AI Product Management','Probabilistic roadmapping, non-deterministic KPI design, and managing LLM unpredictability.',['Understand probabilistic UX','Design AI KPIs','Manage hallucination risk','Build AI product portfolios']],
        ['15-2','Transitioning from DevOps to MLOps','GPU orchestration, Vector DB scaling, embedding pipelines, and model registry management.',['Orchestrate GPU clusters','Scale vector databases','Manage embeddings','Build model registries']],
        ['15-3','Pivot to AI Security (AISecOps)','Prompt injection defense, data poisoning detection, boundary control, and LLM access governance.',['Defend against prompt injection','Detect data poisoning','Set boundary controls','Govern LLM access']],
        ['15-4','Software Engineer to AI Engineer','Agentic orchestration, RAG pipelines, API function calling, and zero-shot architecture.',['Build agent architectures','Implement RAG','Connect LLMs to APIs','Design zero-shot flows']],
        ['15-5','Cloud Architect to AI Solutions Architect','Multi-model routing costs, token optimization, edge deployment, and sovereign AI design.',['Optimize token costs','Route multi-model queries','Deploy edge AI','Design sovereign clouds']],
        ['15-6','Data Engineer to AI Operations (AIOps)','Unstructured data pipelines, chunking strategies, semantic ETL, and continuous model improvement.',['Build unstructured pipelines','Optimize RAG chunking','Create semantic ETL','Automate model metrics']],
        ['15-7','Pivot to Financial Engineering (FinOps for AI)','LLM GPU deprecation math, token allocation economics, arbitrage, and AI margin triage.',['Calculate AI GPU ROI','Allocate token budgets','Perform API arbitrage','Triage AI profit margins']],
        ['15-8','Executive Transition: VP Eng to VP AI','Board-level AI literacy, buy vs build frameworks, AI talent economics, and technical moat strategy.',['Present AI to boards','Model buy vs build','Price AI talent','Build technical moats']],
        ['15-9','QA Engineer to AI Evaluator','Deterministic testing vs LLM eval frameworks, benchmark creation, regression, and prompt versioning.',['Build eval frameworks','Create custom benchmarks','Test LLM regression','Version control prompts']],
        ['15-10','UX Designer to AI Interface Designer','Conversational UX, streaming token load states, Copilot design systems, and generative UI.',['Design conversational flows','Optimize streaming UX','Build Copilot patterns','Create generative UI']],
        ['15-11','Pivot to Small Language Model (SLM) Tuning','Edge device optimization, Lora/Qlora fine-tuning, and open-weights quantization.',['Optimize for edge','Fine-tune with Qlora','Quantize open weights','Deploy SLMs locally']],
        ['15-12','Technical Writer to Prompt Engineer','Few-shot orchestration, chain-of-thought documentation, system prompt architectures, and evaluation.',['Write chain-of-thought','Architect system prompts','Orchestrate few-shot','Evaluate prompt reliability']],
        ['15-13','Compliance Officer to AI Governance Lead','EU AI Act mapping, NIST AI RMF compliance, bias audits, and red-teaming programs.',['Map EU AI Act','Implement NIST RMF','Run bias audits','Manage red-teaming']],
        ['15-14','System Admin to Sovereign AI Infrastructure','Air-gapped LLM deployment, bare-metal GPU clusters, and strict data egress elimination.',['Deploy air-gapped LLMs','Manage bare-metal GPUs','Eliminate data egress','Ensure sovereign privacy']],
        ['15-15','Career Pivot Synthesis: The 2026 AI Playbook','Complete skills gap analysis, resume repositioning, interview frameworks, and negotiation.',['Perform skills gap analysis','Reposition technical resumes','Master AI interviews','Negotiate AI compensation']]
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
        ], nextId ? `/vault/curriculum/tracks/${trackSlug}/${nextId}` : undefined);
    });
});

import { tracks } from './curriculum-tracks-ui';

// ═══════════════════ ALGORITHMIC CONTENT GENERATION MATRIX ═══════════════════
const DOMAIN_LEXICONS = {
    engineering: {
        verbs: ['Architecting', 'Scaling', 'Decoupling', 'Instrumenting', 'Optimizing'],
        kpis: ['Deployment Frequency', 'Lead Time for Changes', 'MTTR', 'Change Failure Rate'],
        pains: ['Technical Debt', 'Spaghetti Code', 'Release Bottlenecks', 'System Brittleness']
    },
    economics: {
        verbs: ['Amortizing', 'Capitalizing', 'Arbitraging', 'Hedging', 'Forecasting'],
        kpis: ['Cost of Goods Sold (COGS)', 'Gross Margin', 'Revenue Per Engineer', 'EBITDA'],
        pains: ['Margin Compression', 'Runaway Cloud Spend', 'Sunk Costs', 'Inefficient Capital Allocation']
    },
    ai: {
        verbs: ['Fine-Tuning', 'Quantizing', 'Orchestrating', 'Distilling', 'Prompting'],
        kpis: ['Tokens Per Second (TPS)', 'Cost Per 1k Tokens', 'Latency', 'Hallucination Rate'],
        pains: ['GPU Scarcity', 'Model Drift', 'Context Window Limits', 'Non-Deterministic Outputs']
    },
    leadership: {
        verbs: ['Aligning', 'Empowering', 'Restructuring', 'Mentoring', 'Delegating'],
        kpis: ['eNPS', 'Voluntary Turnover', 'Time-to-Hire', 'Team Velocity'],
        pains: ['Burnout', 'Siloed Communication', 'Context Switching', 'Lack of Psychological Safety']
    }
};

function getLexicon(trackTitle: string, modName: string) {
    const text = (trackTitle + modName).toLowerCase();
    if (text.includes('ai') || text.includes('agent') || text.includes('model')) return DOMAIN_LEXICONS.ai;
    if (text.includes('econom') || text.includes('finops') || text.includes('cost')) return DOMAIN_LEXICONS.economics;
    if (text.includes('lead') || text.includes('manag') || text.includes('career')) return DOMAIN_LEXICONS.leadership;
    return DOMAIN_LEXICONS.engineering;
}

tracks.forEach(track => {
    track.modules.forEach((mod, index) => {
        const mAny = mod as any;
        let slug = mAny.href;
        if (slug.startsWith('/vault/curriculum/tracks/')) slug = slug.replace('/vault/curriculum/tracks/', '');
        else if (slug.startsWith('/curriculum/tracks/')) slug = slug.replace('/curriculum/tracks/', '');
        
        if (!modules[slug]) {
             const nextMod = index < track.modules.length - 1 ? (track.modules[index + 1] as any) : undefined;
             const modName = mAny.name || mAny.title || mAny.id;
             const modTopics = mAny.topics || modName;
             
             const lex = getLexicon(track.title, modName);
             
             // Dynamic Takeaways
             const takeaways = [
                 `Master the mechanics of ${modTopics.split(',')[0]}`,
                 `Optimize ${lex.kpis[0]} and reduce ${lex.pains[0]}`,
                 `Align ${lex.verbs[0].toLowerCase()} capabilities with board-level financial goals`
             ];
             
             // High-Fidelity Lesson 1: The Core Framework
             const l1 = l(
                 `Lesson 1: The Physics of ${modName.replace(/^[0-9.-]+\s*/, '')}`,
                 `To understand ${modTopics}, we must first deconstruct the underlying physics. Industry leaders don't just implement ${modTopics.split(',')[0]}; they instrument it to combat ${lex.pains[0]}. By focusing on ${lex.verbs[2].toLowerCase()} the architecture, organizations can shift from reactive maintenance to proactive value creation. This lesson covers the baseline metrics and operational hurdles of deployment.`,
                 [
                     d(`Primary KPI: ${lex.kpis[0]}`, `The leading indicator for ${modName} health. Indicates the speed and safety of the pipeline.`, `Target: Top 10% Industry Baseline`),
                     d(`Secondary Metric: ${lex.kpis[1]}`, `Tracks the financial elasticity of the implementation.`, `Target: 20% YoY Improvement`),
                     d(`Risk Vector: ${lex.pains[1]}`, `The most common failure mode when scaling this infrastructure.`, `Mitigation: ${lex.verbs[0]} strict boundary controls.`)
                 ],
                 `Conduct a 60-minute audit of your current ${lex.kpis[0]}. Where does the system bottleneck?`
             );
             
             // High-Fidelity Lesson 2: Financial & Operational Teardown
             const l2 = l(
                 `Lesson 2: Economic Teardown & TCO`,
                 `Every technical decision is a financial decision. Implementing ${modTopics.split(',').slice(-1)[0] || modTopics} alters the balance sheet. By ${lex.verbs[1].toLowerCase()} the operational overhead, we extract hidden margin. This teardown breaks down the Total Cost of Ownership (TCO) across compute, human capital, and opportunity cost.`,
                 [
                     d('Direct CapEx/OpEx', `Hard costs associated with licenses, infrastructure, and raw compute for ${modName}.`, `Allocate 15% budget buffer`),
                     d('Human Capital Toll', `The hidden engineering hours lost to ${lex.pains[2]} and context switching.`, `Reduce by 40% using automation`),
                     d('Opportunity Cost', `The revenue forfeited by delaying implementation or choosing the wrong vendor.`, `Calculate via Cost of Delay (CoD)`)
                 ],
                 `Build a TCO model mapping the 3-year costs of ${modName} versus the status quo.`
             );
             
             // High-Fidelity Lesson 3: Executive Strategy & Scaling
             const l3 = l(
                 `Lesson 3: Board-Level Strategy & Scaling`,
                 `Technical excellence is irrelevant if it cannot be communicated to the C-suite. Here is how to map ${modTopics.split(',')[0]} directly to EBITDA and enterprise value. Scaling requires ${lex.verbs[3].toLowerCase()} the culture and establishing an unshakeable narrative that framing technical debt as a financial liability, not an engineering complaint.`,
                 [
                     d('The Executive Narrative', `Translating ${lex.kpis[0]} into board-friendly financial language.`, `Pitch: "${lex.verbs[0]} revenue protection."`),
                     d('Scaling Bottlenecks', `Identifying the breaking points when team size doubles from 50 to 100.`, `Watch out for ${lex.pains[3]}.`),
                     d('The Competitive Moat', `Using ${modName} to out-execute competitors rather than just matching them.`, `Defensibility: High`)
                 ],
                 `Draft a 1-page PR/FAQ or Executive Memo proposing a major investment in ${modTopics.split(',')[0]}.`
             );
             
             modules[slug] = m(
                 mAny.id,
                 modName,
                 `Detailed executive analysis of ${modTopics}. Master the operational frameworks, TCO teardowns, and board-level strategies for implementation.`,
                 track.title,
                 takeaways,
                 [l1, l2, l3],
                 nextMod ? nextMod.href : undefined
             );
        }
    });
});

export function getModule(slug: string): CurriculumModule | undefined {
    const mod = modules[slug];
    
    // Dynamically inject tools into specific tracks for interactive learning
    if (mod) {
        if (mod.moduleId === '14-12') mod.embeddedTool = 'cloud-repatriation';
        if (mod.moduleId === '9-14') mod.embeddedTool = 'due-diligence';
        if (mod.moduleId === '10-6' || mod.moduleId === '5-15') mod.embeddedTool = 'pdi';
        if (mod.moduleId === '11-1') mod.embeddedTool = 'aueb';
        if (mod.moduleId === '6-1' || mod.moduleId === '10-4') mod.embeddedTool = 'aper';
        if (mod.moduleId === '5-10') mod.embeddedTool = 'ev-se';
    }
    
    return mod;
}

export function getAllModuleSlugs(): string[] {
    return Object.keys(modules);
}
