export type Persona = 
    | 'platform-engineer'
    | 'cto-vp-engineering'
    | 'founder-ceo'
    | 'product-manager'
    | 'cfo-investor';

export interface SpokeQuery {
    questionSlug: string;
    questionHeadline: string;
    answerHtml: string;
    recommendedProductId: string;
    upsellHeadline: string;
}

export interface SpokeTopic {
    topicSlug: string;
    topicName: string;
    personas: {
        [key in Persona]?: SpokeQuery[];
    }
}

export const SPOKE_MATRIX: SpokeTopic[] = [
    {
        topicSlug: 'engineering-architecture',
        topicName: 'Engineering Architecture Economics',
        personas: {
            'platform-engineer': [
                {
                    questionSlug: 'roi-of-monolith-to-microservices',
                    questionHeadline: 'How to calculate the financial ROI of migrating from a monolith to microservices?',
                    answerHtml: `
                        <p>Most Platform Engineers fail to secure budget for massive microservice migrations because they present technical arguments to financial executives. Pitching "massive scalability" or "domain decoupling" to a CFO will not unlock Capital Expenditure (CapEx). The true financial ROI of a microservices migration is derived entirely from the reduction of the <strong>Coordination Tax</strong>.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Monolith Penalty</h3>
                        <p>In a tightly coupled monolith, scaling your engineering headcount actually slows down your delivery velocity. If 50 engineers share the exact same deployment pipeline, regression suite, and release manifest, organizational friction spikes exponentially. If a flawed commit breaks the CI/CD pipeline for 2 hours, all 50 engineers are functionally grounded. At an average fully-loaded salary of $180,000, a twice-weekly pipeline blockage costs the enterprise upwards of <strong>$1.5M/year in idle wages</strong>.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Microservice ROI Framework</h3>
                        <p>To get approval for a migration, build your model around these three levers:</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Reclaimed Engineering Capacity:</strong> Track the current "Wait Time" (DORA Lead Time for Changes) and multiply it by the engineering hourly run rate.</li>
                            <li><strong>Reduced Blast Radius:</strong> Calculate the historical revenue lost to full-system outages. Microservices isolate failures, containing revenue hemorrhage.</li>
                            <li><strong>The Distributed Systems Tax:</strong> Subtract the new operational CapEx. Moving to Kubernetes, managing distributed tracing, and maintaining edge gateways will temporarily increase cloud infrastructure costs and require specialized platform engineering talent.</li>
                        </ul>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Translation</h3>
                        <p>Do not present microservices as a technical upgrade. Present it as an operational necessity to stop bleeding capitalized OpEx. By proving that the upfront architectural investment pays for itself within 18 months via reclaimed developer velocity, you shift the conversation from "engineering want" to "business imperative."</p>
                    `,
                    recommendedProductId: 'module_engineering',
                    upsellHeadline: 'Unlock the Complete Engineering Economics Formulas.'
                },
                {
                    questionSlug: 'serverless-vs-containers-cost',
                    questionHeadline: 'Serverless vs Containers: Which architecture has better cost scaling economics?',
                    answerHtml: `
                        <p>The Serverless vs Containers debate is heavily misunderstood. It is not an infrastructure decision; it is a fundamental unit economics calculation pitting Operational Scaling against Capital Expenditure.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Serverless OpEx Premium</h3>
                        <p>Serverless architecture (like AWS Lambda) optimizes for <strong>Time to Market</strong> and removes operational overhead (NoOps). However, cloud providers charge an exorbitant premium for on-demand execution. As your software scales past the initial MVP phase, serverless compute functions scale linearly with traffic. If you have extremely high, sustained traffic, serverless architecture will obliterate your gross margins.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Container CapEx Burden</h3>
                        <p>Container architectures (Kubernetes/EKS) offer significantly cheaper sustained compute profiles. You pre-provision hardware and maximize its utilization, protecting your margins. However, containerization requires a massive upfront Capital Expenditure (CapEx) in human engineering talent. You must hire Site Reliability Engineers (SREs) to manage orchestration, load balancing, and node scaling policies.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Tipping Point Formula</h3>
                        <p>To calculate the economic tipping point, map the intersection of your monthly Serverless API execution costs against the fully-loaded salary of a single DevOps engineer required to manage a Kubernetes cluster. Never migrate to containers until the serverless OpEx drain strictly exceeds the Kubernetes operational CapEx.</p>
                    `,
                    recommendedProductId: 'module_engineering',
                    upsellHeadline: 'Calculate Your Exact Architectural Break-Even Model.'
                }
            ],
            'cto-vp-engineering': [
                {
                    questionSlug: 'cost-of-legacy-code-vs-rewrite',
                    questionHeadline: 'What is the true cost of maintaining legacy code vs rewriting from scratch?',
                    answerHtml: `
                        <p>The "Second System Effect" is the silent killer of enterprise software companies. While engineering teams almost universally advocate for greenfield rewrites—citing brittle legacy code and developer misery—the true financial devastation of a rewrite is the <strong>Opportunity Cost of Stalled Features</strong>.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Rewrite Fallacy</h3>
                        <p>When a CTO authorizes a "v2.0 rewrite from scratch," they are implicitly agreeing to halt or severely bottleneck net-new revenue-generating features on the existing platform. If an engineering organization spends 18 months rebuilding the core infrastructure, you must calculate the exact Net Revenue Retention (NRR) you will bleed to agile competitors executing against modern customer demands during that dark period. A massive rewrite often equates to giving your market share away for free.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Calculating the Legacy Drag</h3>
                        <p>Conversely, maintaining toxic legacy code carries a compounding interest rate. To measure this, calculate your <strong>Debt Interest Rate</strong>:</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Onboarding Friction:</strong> How many months does it take a senior engineer to become context-aware in the codebase?</li>
                            <li><strong>Maintenance Ratio:</strong> What percentage of story points are dedicated to patching technical debt versus shipping new features? If this creeps above 40%, the system is insolvent.</li>
                            <li><strong>Catastrophic Risk:</strong> The mathematical probability of a severe data breach or critical failure due to unpatchable dependencies.</li>
                        </ul>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Strangler Fig Execution</h3>
                        <p>The only financially sound pathway is rarely a hard rewrite; it is architectural encapsulation (The Strangler Fig Pattern). You surround the legacy system with API facades and quietly deprecate specific domains iteratively. This allows legacy logic to die slowly while ensuring the product engine never stops shipping market value.</p>
                    `,
                    recommendedProductId: 'module_cto',
                    upsellHeadline: 'Architect Your Technical Leadership Strategy.'
                },
                {
                    questionSlug: 'roi-blast-radius-containment',
                    questionHeadline: 'How to calculate the financial ROI of blast radius containment in distributed systems?',
                    answerHtml: `
                        <p>When a CTO asks for budget to build systemic resiliency, the CFO hears an insurance pitch. You must reframe infrastructure resiliency as explicitly protecting the company's Daily Active Revenue.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Quantifying the Hemorrhage</h3>
                        <p>Without blast radius containment, a single failed module deployments cascades and takes down the entire monolith. To get budget for cell-based architecture, you must quantify the historical damage of this architectural flaw.</p>
                        <p>Calculate your <strong>Downtime Revenue Burn Rate</strong>: <em>(Annual Recurring Revenue / 525,600) = Revenue Per Minute</em>. Next, combine this with your <em>Developer Idle Burn Rate</em>: If a cascading outage pulls 60 engineers off feature work for 6 hours into a Sev-1 war room, calculate those lost wages.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Business Case for Containment</h3>
                        <p>When presenting to the board, state clearly: "Last year, uncontained architectural failures cost us $850,000 in lost revenue and $140,000 in burned developer wages. I am requesting $200,000 in dedicated architectural CapEx to sever these domain dependencies and physically contain catastrophic failures, guaranteeing an immediate ROI multiple."</p>
                    `,
                    recommendedProductId: 'module_engineering',
                    upsellHeadline: 'Download the Frictionless Engineering Economics Framework.'
                }
            ]
        }
    },
    {
        topicSlug: 'ai-product-strategy',
        topicName: 'AI Product Strategy & Unit Economics',
        personas: {
            'founder-ceo': [
                {
                    questionSlug: 'fine-tune-open-source-vs-openai-api',
                    questionHeadline: 'Build vs Buy: Should we fine-tune an open-source LLM or use OpenAI APIs?',
                    answerHtml: `
                        <p>For early-stage founders and enterprise innovation labs, the "Build vs Buy" debate regarding foundational Large Language Models (LLMs) is less about engineering capability and entirely about <strong>Unit Margin Degradation vs Capital Expenditure</strong>.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The OpenAI API Margin Trap</h3>
                        <p>Using proprietary APIs (OpenAI, Anthropic) optimizes for <em>Speed to Market</em>. The initial infrastructure cost is negligible. However, as user engagement increases, your API costs scale linearly. If you build a highly retentive AI wrapper on GPT-4, a successful product launch will physically obliterate your gross margins. The more successful your product is, the less profitable your business becomes.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Open-Source CapEx Burden</h3>
                        <p>Migrating to an open-source model (like Llama-3 or Mistral) completely alters your financial architecture. By self-hosting and fine-tuning, you cap your inference costs and reclaim your gross margins. However, you dramatically shift the financial burden from Operational Expense (OpEx) to Capital Expenditure (CapEx).</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li>You must hire specialized MLOps talent to manage weights, quantization, and deployment.</li>
                            <li>You incur massive upfront data curation and ETL pipeline costs for fine-tuning.</li>
                            <li>You become responsible for continuous GPU hardware provisioning.</li>
                        </ul>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Executive Heuristic</h3>
                        <p>Never start by fine-tuning an open-source model. The risk of finding zero Product-Market Fit is too high. Use OpenAI APIs for aggressive market validation. Only transition specific, high-volume, highly predictable inference tasks to specialized "Small Language Models" (SLMs) hosted internally when your specific query volume costs cross roughly $20,000/month. At that threshold, the margin reclamation begins paying off the MLOps CapEx investment.</p>
                    `,
                    recommendedProductId: 'module_ai_economics',
                    upsellHeadline: 'Stop AI API Burn. Calculate Your True Costs.'
                }
            ],
            'product-manager': [
                {
                    questionSlug: 'unit-economics-for-rag-architecture',
                    questionHeadline: 'How to measure unit economics for a RAG (Retrieval-Augmented Generation) application?',
                    answerHtml: `
                        <p>Product Managers building Generative AI features face a unique economic reality: predictable SaaS pricing models clash catastrophically with unpredictable AI infrastructure costs. Most PMs attempt to track the API <em>Token Cost</em> as their primary metric. This is deeply flawed. The true metric for determining profitability is the <strong>Total Cost Per RAG Query</strong>.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Tracing the Hidden RAG Pipeline Costs</h3>
                        <p>A single interaction with a Retrieval-Augmented Generation system is never just a single API call to a foundation model. The pipeline carries compounded costs at every node:</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>ETL & Vector Storage:</strong> The continuous cost of chunking, embedding, and storing enterprise data in specialized vector databases like Pinecone or Weaviate.</li>
                            <li><strong>Retrieval Compute:</strong> The cost of semantic search latency and ranking logic before the LLM even sees the context.</li>
                            <li><strong>Context Window Bloat:</strong> RAG architectures function by cramming massive amounts of retrieved data into the LLM prompt. You pay for every token of context you inject, scaling costs exponentially with larger context windows.</li>
                            <li><strong>Guardrail Latency:</strong> Output evaluation models used to detect hallucinations add secondary inference costs to the final interaction.</li>
                        </ul>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Profitability Threshold</h3>
                        <p>To establish profitable unit economics, you must cap the <em>Cost Per Query</em> at a strict mathematical fraction of the user's Monthly Recurring Revenue (MRR). If a user pays $20/month for your SaaS product, and a full RAG pipeline averages exactly $0.05 per interaction, your product mathematically becomes a cash incinerator at 400 queries per month. Product Managers must aggressively cache common retrievals and utilize cheaper routing models (like GPT-3.5) for generic synthesis to maintain a viable Evergreen Ratio.</p>
                    `,
                    recommendedProductId: 'module_ai_enterprise',
                    upsellHeadline: 'Master Enterprise AI Product Economics.'
                }
            ],
            'platform-engineer': [
                {
                    questionSlug: 'what-is-mlops-infrastructure-cost',
                    questionHeadline: 'What is MLOps and how do you calculate the infrastructure cost of Machine Learning Operations?',
                    answerHtml: `
                        <p>Machine Learning Operations (MLOps) is the discipline of treating AI models like engineered software—establishing CI/CD pipelines, version control, and regression testing specifically for neural weights and prompts. Without MLOps, an AI prototype will immediately unravel in production due to model drift.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Hidden OpEx of MLOps</h3>
                        <p>Platform Engineers are repeatedly blindsided by the compounding infrastructure costs of deploying models. You are not just paying for inference duration.</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Evaluation Tax:</strong> Every time you push a new Prompt Template or a quantanized SLM, you must run an automated evaluation suite against a golden dataset. A full integration test can require 10,000 synthetic generation calls, blasting a massive hole in your OpenAI monthly bill automatically.</li>
                            <li><strong>GPU Idle Waste:</strong> Pre-provisioning massive NVIDIA A100 instances for sporadic batch-processing jobs results in extreme idle capital waste.</li>
                        </ul>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Financial Mandate</h3>
                        <p>To protect enterprise margins, Platform Engineers must track their <strong>Testing-to-Inference Ratio</strong>. If your CI/CD LLM evaluation costs exceed 15% of your total API expenditure, your operational pipeline is too heavy. You must aggressively cache evaluation datasets and transition to significantly cheaper proxy models (like open-source 8B models) for your internal testing suite.</p>
                    `,
                    recommendedProductId: 'module_ai_enterprise',
                    upsellHeadline: 'Secure Your AI Enterprise Architecture.'
                },
                {
                    questionSlug: 'synthetic-data-economics-llm',
                    questionHeadline: 'The financial economics of generating synthetic data for LLM fine-tuning vs purchasing datasets.',
                    answerHtml: `
                        <p>When engineering teams attempt to fine-tune an open-source model to bypass the OpenAI API tax, they immediately slam into the Data Wall. Acquiring high-fidelity instruction-tuning datasets is exorbitantly expensive. The economic debate shifts to generating Synthetic Data via GPT-4 vs paying Data Vendors.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Vendor Lock-In Reality</h3>
                        <p>Purchasing pre-canned, domain-specific instruction datasets often requires spending upwards of $50,000 for a one-time static snapshot. However, this dataset is legally encumbered and static; as your specific product domain evolves, the purchased dataset decays entirely.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Synthetic Arbitrage Engine</h3>
                        <p>Using a massive frontier model (like Claude Opus or GPT-4o) to synthetically generate millions of JSON QA pairs for fine-tuning your internal Llama model is an exercise in arbitrage. You are paying absolute premium API prices (OpEx) for a short burst to permanently extract and distill intellectual reasoning down into an asset you own forever (CapEx).</p>
                        <p>A $2,000 synthetic generation run on GPT-4 can yield a fine-tuning dataset good enough to train an 8B open-source model to route 60% of your production queries off of OpenAI completely, returning an ROI duration measured in weeks, not years.</p>
                    `,
                    recommendedProductId: 'module_ai_economics',
                    upsellHeadline: 'Calculate the Margins of AI Arbitrage.'
                }
            ]
        }
    },
    {
        topicSlug: 'engineering-leadership',
        topicName: 'Engineering Leadership & Measurement',
        personas: {
            'cto-vp-engineering': [
                {
                    questionSlug: 'measuring-developer-productivity-space-dora',
                    questionHeadline: 'How to measure developer productivity without using lines of code (SPACE vs DORA)?',
                    answerHtml: `
                        <p>Attempting to measure software engineering productivity using traditional industrial metrics—like tracking Lines of Code (LOC) or raw ticket volume—is the fastest way to destroy engineering culture and incentivize toxic coding practices. Modern engineering leaders must build telemetry that balances quantitative pipeline velocity with qualitative human friction.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Pipeline Efficiency: DORA Metrics</h3>
                        <p>Developed by Google's DevOps Research team, DORA metrics are the gold standard for measuring operational delivery. They track <em>Deployment Frequency, Lead Time for Changes, Mean Time to Recovery (MTTR), and Change Failure Rate</em>. DORA doesn't track developer output; it tracks how efficiently your infrastructure allows developers to push value to the customer without breaking the system.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Human Element: The SPACE Framework</h3>
                        <p>High deployment frequency is irrelevant if developers are burning out or building the wrong product. The SPACE framework (Satisfaction, Performance, Activity, Communication, Efficiency) introduces the critical qualitative layer. It forces leadership to evaluate developer satisfaction, the clarity of product requirements, and the amount of systemic interruption destroying deep-work blocks.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Ultimate Boardroom Metric</h3>
                        <p>While DORA and SPACE execute at the ground level, the only metric the Board cares about is the <strong>Feature Delivery Ratio</strong>. This calculates the percentage of total engineering capital spent on net-new, revenue-generating features versus the capital wasted "keeping the lights on" (technical debt, pipeline failures, and refactoring). If you can prove DORA improvements lead to a higher Feature Delivery Ratio, you will instantly unlock executive trust and CapEx budget.</p>
                    `,
                    recommendedProductId: 'module_leadership',
                    upsellHeadline: 'Download the Frictionless Leadership Playbooks.'
                },
                {
                    questionSlug: 'ic-vs-management-engineering-job-levels',
                    questionHeadline: 'IC Track vs Management Track: How to structure engineering job levels for retention?',
                    answerHtml: `
                        <p>One of the most profound mistakes a VP of Engineering makes is promoting their most brilliant, highest-performing Senior Engineer into an Engineering Manager role as a "reward." This instantly destroys enterprise value: you lose your best architectural problem-solver, and you acquire a terrible, frustrated manager.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Dual-Track Mandate</h3>
                        <p>To retain top-tier talent, it is financially imperative to establish a formal "Dual-Track" career ladder. The Individual Contributor (IC) track must scale perfectly in parallel to the Management track regarding compensation, equity structure, and executive respect.</p>
                        <p>A Principal Engineer (IC6) should wield the exact same financial compensation and boardroom influence as a Senior Engineering Manager (M6). A Distinguished Engineer (IC7) must be treated with the same deference as a Director of Engineering (M7).</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Preventing Organizational Bloat</h3>
                        <p>Beyond retention, formalizing strict job levels manages capital burn. If a company does not clearly delineate the impact radius required for an IC5 vs an IC6, engineering salary inflation will shatter the P&L as subjective promotions trigger cascading salary adjustments without corresponding increases in production velocity.</p>
                    `,
                    recommendedProductId: 'module_leadership',
                    upsellHeadline: 'Structure Your Engineering Tiers for Maximum ROI.'
                }
            ],
            'founder-ceo': [
                {
                    questionSlug: 'hire-vp-engineering-vs-cto',
                    questionHeadline: 'When should a startup hire a VP of Engineering vs a CTO?',
                    answerHtml: `
                        <p>Founders operating post-Seed round frequently conflate the roles of Chief Technology Officer (CTO) and VP of Engineering. Misunderstanding this dichotomy leads to catastrophic capital misallocation, massive technical debt accumulation, and stalled product roadmaps during the critical scale-up phase.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The CTO: The Visionary Architect</h3>
                        <p>A CTO is fundamentally an outward-facing visionary. Their mandate is to lock in the 36-month technical strategy, identify massive technological shifts (like generative AI adoption), evaluate M&A technical targets, and ensure the architectural foundation of the product can survive future scale. They are usually highly academic, deeply immersed in the code, and often terrible at human management and sprint planning.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The VP of Engineering: The Operational Executioner</h3>
                        <p>A VP of Engineering is an inward-facing operational leader. Their mandate is execution. They live and die by delivery speed, sprint cadence, DORA metrics, rigorous hiring loops, and career pathing for junior developers. They exist to remove friction from the engineering floor and ensure product roadmaps are hit exactly on time.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Scaling Heuristic</h3>
                        <p>If your startup is losing market share because competitors are leveraging new technologies you don't understand, you have a CTO problem. However, if your codebase is a mess, features that should take 2 weeks are taking 3 months, developers are consistently missing deadlines, and departmental coordination is chaotic—you do not need a visionary CTO. You need a ruthless, operationally grounded VP of Engineering to establish cadence and enforce accountability.</p>
                    `,
                    recommendedProductId: 'gut_check',
                    upsellHeadline: 'Need to diagnose your leadership gap? Let\'s talk.'
                }
            ]
        }
    },
    {
        topicSlug: 'c-suite-financials',
        topicName: 'C-Suite Financials & M&A Diligence',
        personas: {
            'cfo-investor': [
                {
                    questionSlug: 'value-software-technical-debt-m-a',
                    questionHeadline: 'How to value software technical debt during M&A due diligence?',
                    answerHtml: `
                        <p>Technical debt does not appear on a GAAP balance sheet, but it will rapidly and violently consume post-acquisition EBITDA via massive CapEx remediation requirements and stalled integration roadmaps. Private Equity firms frequently miss this invisible liability because traditional financial diligence cannot effectively audit monolithic codebases.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Illusion of Margins</h3>
                        <p>During diligence, the deal team must convert engineering friction into a tangible dollar liability. If a target SaaS company is reporting incredibly strong 80% Gross Margins, but their lead time for deployments is 14 days and coordination overhead is 35%, that 80% margin is an illusion. It is "deferred misery." They achieved those margins by cutting corners on infrastructure, documentation, and automated testing.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Calculating the Product Debt Index (PDI)</h3>
                        <p>To accurately value the asset, utilize the <strong>Product Debt Index (PDI)</strong>. You must demand the target's internal git metrics and sprint completion rates. If the codebase requires an 18-month architectural rebuild to reach the scale required by your investment thesis, you must model the Total Engineering Run Rate for that exact 18-month duration.</p>
                        <p>If refactoring that technical debt will exhaust $3,000,000 in engineering salaries just to "stabilize" the platform, that $3,000,000 is a hard liability. It should be negotiated fiercely and carved directly out of the initial purchase price valuation multiple.</p>
                    `,
                    recommendedProductId: 'module_investor',
                    upsellHeadline: 'Train Your Deal Team on Tech Valuation.'
                },
                {
                    questionSlug: 'capitalizing-software-rd-gaap',
                    questionHeadline: 'How to capitalize software R&D engineering salaries under GAAP?',
                    answerHtml: `
                        <p>Software capitalization under ASC 350-40 (Internal-Use Software) is one of the most powerful, yet poorly executed, levers available to a CFO. It dictates precisely when engineering wages can be capitalized (boosting immediate EBITDA and asset value) versus expensed (creating aggressive OpEx drag on the P&L).</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Three Stages of ASC 350-40</h3>
                        <p>GAAP defines a strict boundary for capitalization:</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Preliminary Project Stage (Expensed):</strong> Brainstorming, evaluating vendor APIs, and prototyping. All engineering hours here must hit OpEx.</li>
                            <li><strong>Application Development Stage (Capitalized):</strong> Designing architecture, coding net-new features, integrating systems, and aggressive testing. These hours are capitalizable.</li>
                            <li><strong>Post-Implementation Stage (Expensed):</strong> Routine maintenance, bug fixing, and training. Once the feature hits production, the capitalization window slams shut.</li>
                        </ul>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Unlocking Enterprise Value</h3>
                        <p>CFOs and Controllers lose millions in enterprise value because they fail to force Jira or Agile story points to map back to these capitalization stages. If an engineer making $200,000/year spends 60% of their sprints building net-new functionality in the Application Development Stage, $120,000 of their salary can be capitalized onto the balance sheet. By establishing rigorous, automated engineering time-tracking linked to specific feature development phases, CFOs can dramatically elevate reported net income, directly multiplying enterprise valuation.</p>
                    `,
                    recommendedProductId: 'module_rd_capital',
                    upsellHeadline: 'Download the R&D Capital Accounting Model.'
                },
                {
                    questionSlug: 'data-residency-compliance-capex',
                    questionHeadline: 'How does data residency and compliance impact cloud capital expenditure (CapEx)?',
                    answerHtml: `
                        <p>When software providers target multi-national enterprise fleets or pivot towards the EU market, compliance is often framed as a minor legal formality. Consequently, CFOs are completely blindsided by the devastating Capital Expenditure (CapEx) required to architect Data Residency boundaries.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Physical Cost of GDPR and SOV</h3>
                        <p>True Data Residency requires that data physically resides and is exclusively processed within the borders of a specific geopolitical entity. This means you cannot simply spin up a new database shard; you must physically clone your entire infrastructure stack, authentication pipelines, and CI/CD meshes into localized AWS or Azure instances.</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>Infrastructure Duplication:</strong> Cloud compute costs will immediately multiply as you lose the economies of scale associated with a centralized monolithic infrastructure.</li>
                            <li><strong>The Synchronization Tax:</strong> Building highly-available federation queries that respect EU PII (Personally Identifiable Information) borders while still returning aggregate intelligence to US datacenters is notoriously difficult and will exhaust specialized engineering SRE labor (CapEx).</li>
                        </ul>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Compliance Break-Even Point</h3>
                        <p>Never commit to multi-region data residency architectures until the Annual Recurring Revenue (ARR) of the targeted regional enterprise contracts definitively eclipses the projected engineering expansion overhead for 36 months.</p>
                    `,
                    recommendedProductId: 'module_security',
                    upsellHeadline: 'Audit Your Security and Compliance Economics.'
                }
            ]
        }
    },
    {
        topicSlug: 'product-management-economics',
        topicName: 'Product Management Economics',
        personas: {
            'product-manager': [
                {
                    questionSlug: 'prioritize-tech-debt-vs-features',
                    questionHeadline: 'How to prioritize technical debt vs new product features on the roadmap?',
                    answerHtml: `
                        <p>The eternal battle between Engineering (who want to refactor everything) and Product Management (who want to ship infinite features) only ends when the Product Team learns to translate technical debt into executive-tier <strong>Opportunity Cost</strong>. The boardroom understands missed revenue; they do not care about "brittle database schemas" or "legacy monoliths."</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Defining the Debt Interest Rate</h3>
                        <p>Technical debt only matters when it actively impedes progress. To prioritize it on the roadmap, you must calculate its <em>Interest Rate</em>: How many hours does the engineering team lose every single sprint explicitly fighting this specific legacy component?</p>
                        <p>If an outdated billing API requires 15 hours of manual engineering intervention every week, you are paying a massive interest rate on that debt. Convert those lost 15 hours into a dollar amount using the team's hourly fully-loaded salary.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Prioritization Formula</h3>
                        <p>Prioritization becomes simple math. If paying down the debt (CapEx) costs $50,000 in engineering time today, but it saves $120,000/year in continuous operational friction (OpEx), the ROI is exceptional. Product Managers must allocate 15-20% of every sprint explicitly for high-yield technical debt reduction. By treating tech debt resolution as a high-margin "feature" that accelerates future velocity, you keep the product roadmap continuously profitable.</p>
                    `,
                    recommendedProductId: 'module_product_mgmt',
                    upsellHeadline: 'Adopt the Definitive Product Economics Framework.'
                },
                {
                    questionSlug: 'product-debt-destroys-nrr',
                    questionHeadline: 'What is Product Debt and how does it destroy Net Revenue Retention (NRR)?',
                    answerHtml: `
                        <p>While Technical Debt occurs when the code is bad, <strong>Product Debt</strong> occurs when the code is absolutely perfect, but the feature shouldn't exist in the first place. This is a far more insidious threat to SaaS valuations because it directly attacks the user experience and customer lifecycle.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Origins of Product Debt</h3>
                        <p>Product debt is almost always created when aggressive sales teams commit to bespoke, hyper-specific features to close massive enterprise deals. Rather than maintaining a unified platform, the software mutates into a "Frankenstein" architecture attempting to appease every edge case requested by a loud minority of customers.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The NRR Collapse Mechanism</h3>
                        <p>Every unused or overly-complex feature sitting in production requires relentless engineering maintenance, expands the documentation surface area, complicates the UI, and dramatically increases cognitive load for the end user. This bloats your Cost of Goods Sold (COGS) through increased support tickets and maintenance requirements.</p>
                        <p>Eventually, the core product becomes so convoluted that new users fail to understand the fundamental value proposition during onboarding. This leads directly to low adoption rates, high churn, and a catastrophic collapse in Net Revenue Retention (NRR). Product Debt cannot be refactored; it must be aggressively deprecated through bold executive leadership and rigid product boundaries.</p>
                    `,
                    recommendedProductId: 'module_pm',
                    upsellHeadline: 'Train Your Product Org to Eliminate Feature Bloat.'
                },
                {
                    questionSlug: 'pm-pl-ownership-accountability',
                    questionHeadline: 'How to establish P&L (Profit & Loss) ownership and financial accountability for Product Managers?',
                    answerHtml: `
                        <p>SaaS companies frequently misalign Product Management compensation and accountability. PMs are historically measured by their ability to ship features on time. This leads to massive "feature factory" bloat. If you want an elite, financially viable product organization, you must enforce <strong>P&L (Profit & Loss) Ownership</strong> at the feature level.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">The Mini-CEO Fallacy</h3>
                        <p>Saying a PM is the "CEO of the Product" is a lie unless they are tasked with the economic consequences of their roadmap. When a PM demands an AI feature, they must be held strictly accountable for the ballooning OpenAI inference bills (COGS) required to operate that feature in production.</p>
                        
                        <h3 class="text-xl font-bold mt-8 mb-4">Executing Financial Product Management</h3>
                        <p>To establish P&L ownership, PMs must defend their epics against three constraints before a single line of code is written:</p>
                        <ul class="list-disc pl-6 space-y-2 mb-6">
                            <li><strong>The Engineering Capital Expenditure:</strong> "This feature will cost $140,000 in developer salaries to build."</li>
                            <li><strong>The Operational Expenditure:</strong> "Operating this feature incurs a $0.03 cost per query in vector database latency."</li>
                            <li><strong>The Revenue Requirement:</strong> "Therefore, this feature must generate $250,000 in ARR upgrade pathways, or increase total organizational retention by 4% to achieve a profitable break-even."</li>
                        </ul>
                        <p>Only when PMs internalize both the top-line revenue projection and the bottom-line infrastructural extraction do you possess an economically viable product team.</p>
                    `,
                    recommendedProductId: 'module_pm',
                    upsellHeadline: 'Convert Your PMs into Product Economists.'
                }
            ]
        }
    }
];

export function getAllSpokeRoutes() {
    const routes: { topic: string; persona: string; questionSlug: string }[] = [];
    
    SPOKE_MATRIX.forEach(topic => {
        const personas = Object.keys(topic.personas) as Persona[];
        personas.forEach(persona => {
            const queries = topic.personas[persona] || [];
            queries.forEach(query => {
                routes.push({
                    topic: topic.topicSlug,
                    persona: persona,
                    questionSlug: query.questionSlug
                });
            });
        });
    });
    
    return routes;
}
