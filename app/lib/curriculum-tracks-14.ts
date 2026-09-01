import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks7Modules: Record<string, CurriculumModule> = {};

const t14 = 'Track 7  -  Cloud FinOps & Infrastructure';

tracks7Modules['cloud-finops/7-1'] = m('7-1', 'Internal Developer Platform ROI', 'Calculate the economics of golden paths, self-service infrastructure, and platform team sizing.', t14, 
    ['Calculate IDP deployment velocity', 'Measure the Platform Tax', 'Optimize GitOps provisioning'], [
        l('Quantifying Golden Paths', 
            [
                'Platform Engineering exists to reduce the cognitive load of product engineers. Creating an Internal Developer Platform (IDP) provides a "Golden Path" for deployment.',
                'Without an IDP, a product engineer spends 20% of their time writing Terraform, configuring Helm charts, and fighting CI pipelines. With an IDP, they press a button and receive a compliant microservice container.',
                'The ROI of a Platform team is calculated by measuring the time saved across all product engineers. A 5-person platform team is economically justified if they recapture 2 hours a week for 50 product engineers.'
            ],
            [
                d('Time to First Deploy', 'The time it takes a new engineer to ship code to production.', 'Target: < 24 Hours'),
                d('Infrastructure Wait Time', 'Hours spent by product teams waiting for DevOps to provision resources.', 'Target: 0 (Self-Service)')
            ],
            'Measure the onboarding efficiency of your engineering department.',
            ['Identify the last 5 engineers hired.', 'Track the exact number of business days between their start date and their first successful deployment to production.', 'If it is > 3 days, you have a tooling layer deficit.'],
            {
                question: 'What is the primary financial justification for hiring a dedicated Platform Engineering team?',
                options: ['They manage cloud migration projects', 'They secure the network perimeter using Zero Trust', 'They aggregate infrastructure cognitive load, allowing expensive Product Engineers to spend 100% of their time writing revenue-generating business logic', 'They monitor production logs for anomalies'],
                correctIndex: 2,
                explanation: 'A product engineer writing Dockerfiles is a misallocation of capital. Platform engineering centralizes infrastructure complexity into a self-service portal, maximizing the output of the product teams.'
            }
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-2', 'pdi', 'live'
);

tracks7Modules['cloud-finops/7-2'] = m('7-2', 'Cloud Cost Allocation Strategy', 'The economics of strict cost attribution, multi-tenant tagging architecture, and generating Showback Dashboards to align engineering with finance.', t14, 
    ['Eliminate untagged cloud spend', 'Generate real-time cost transparency', 'Calculate per-feature margins'], [
        l('Cost Empathy for Engineers', 
            [
                'A core failure in cloud economics is that developers spin up AWS infrastructure but Finance pays the bill 30 days later. This separation of provisioning and payment creates massive waste.',
                'When developers have no visibility into the cost of their architecture, they over-provision out of caution. "Cost Allocation" forces every asset to carry a mandatory tag linking it back to a specific team or product code.',
                'By distributing Showback Dashboards directly to the engineering squads, you induce "Cost Empathy" - engineers self-regulate and begin optimizing poorly performing queries.'
            ],
            [
                d('Untagged Resource Waste', 'The percentage of the AWS bill that cannot be traced to a specific revenue-generating product.', 'Must be driven to zero'),
                d('Automated Takedown Compliance', 'Policies automatically deleting untagged non-production instances after 48 hours.', 'Forces tagging hygiene')
            ],
            'Audit the untagged footprint in the staging environment.',
            ['Open AWS Cost Explorer.', 'Filter by Tag: `Environment=Staging` and group by `Untagged`.', 'Calculate the monthly bleed caused simply by developers forgetting to assign ownership metadata.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-3', undefined, 'live'
);

tracks7Modules['cloud-finops/7-3'] = m('7-3', 'Reserved Instances & Savings Plans', 'The complex calculus of cloud commitment: comparing 1-year vs 3-year RI lock-in, Savings Plans elasticity, and calculating break-even limits.', t14, 
    ['Execute Compute Savings Plan arithmetic', 'Determine the opportunity cost of multi-year lock-in', 'Maximize Spot instance coverage'], [
        l('The Arithmetic of Cloud Commitment', 
            [
                'Cloud providers (AWS/GCP/Azure) offer massive 30-72% discounts if an enterprise commits to paying for compute power upfront for 1-3 years. If your workload is historically stable, utilizing On-Demand pricing is a gross misallocation of capital.',
                'However, engineering teams often overestimate their architectural stability. If a team buys a 3-Year Reserved Instance for 100 EC2 servers, and 6 months later the architecture team migrates to serverless Lambda functions, the company is still liable for 2.5 years of EC2 payments.',
                'Compute Savings Plans offer flexibility (applying the discount to any compute type) at a slightly lower total discount, serving as an optimal hedge against architectural pivots.'
            ],
            [
                d('On-Demand Coverage Ratio', 'The percentage of baseline compute running without any discount applied.', 'Target: < 20%'),
                d('Commitment Wastage Penalty', 'The sunk cost of RIs purchased that are no longer being utilized by active resources.', 'Risk metric for the CFO')
            ],
            'Execute a 7-day Compute Savings footprint analysis.',
            ['Retrieve the baseline compute metric (the lowest CPU utilization point over the past two weeks).', 'Commit 80% of that baseline entirely to a 1-Year Savings Plan immediately to slash the monthly bill safely.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-4', undefined, 'live'
);

tracks7Modules['cloud-finops/7-4'] = m('7-4', 'Kubernetes Cost Management', 'Right-sizing K8s pods, combating cluster sprawl, and allocating costs in dense multi-tenant container architectures.', t14, 
    ['Model namespace allocation costs', 'Prevent Pod resource hoarding', 'Optimize Cluster Auto-scaler economics'], [
        l('The Fallacy of Free Containers', 
            [
                'Kubernetes is fundamentally a resource packing algorithm. However, most developers set their "Resource Requests" far higher than necessary out of caution. If 50 pods request 4GB of RAM but only use 500MB, the Kubernetes scheduler thinks the node is full.',
                'The scheduler then spins up another expensive EC2 node to handle the "demand," creating massive cluster bloat while physical server utilization sits at 12%.',
                'Tools like Kubecost map the actual CPU cycles consumed by a specific Pod back to the owning engineering team\'s namespace, creating strict financial accountability for over-provisioning.'
            ],
            [
                d('Cluster Utilization Gap', 'The ratio of CPU/RAM actively used by processes versus the total capacity purchased from the cloud provider.', 'Often hovers around 20%. Target: 65%+'),
                d('Right-Sizing Recapture Value', 'The immediate savings generated by lowering Pod resource requests to match historical usage P99s.', 'Massive compounding reduction')
            ],
            'Implement aggressive Pod limits across staging environments.',
            ['Use a tool like Goldilocks to profile your staging cluster.', 'Analyze the delta between what developers requested and what they actually used.', 'Refactor the Helm charts to establish hard multi-tenant resource quotas.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-5', undefined, 'live'
);

tracks7Modules['cloud-finops/7-5'] = m('7-5', 'FinOps & Cloud Margin Engineering', 'Aggressive cloud cost reduction, the economic liability of "ClickOps", and eliminating zombie infrastructure.', t14, 
    ['Calculate Zombie Server Opex', 'Execute the GitOps migration', 'Optimize data transfer architectures'], [
        l('The Liability of ClickOps', 
            [
                '"ClickOps" is the practice of navigating a cloud provider\'s GUI and manually clicking buttons to provision infrastructure. It is fundamentally un-auditable documentation and the leading cause of enterprise configuration drift and idle "Zombie" servers.',
                'When an engineer clicks to launch an RDS database in staging and forgets about it, the meter runs for years. Contrast this with Infrastructure as Code (Terraform), where resources are tracked via version control.',
                'By enforcing GitOps (all infra changes must originate from a Git repository), you can programmatically identify and destroy infrastructure that is no longer defined in the primary branch.'
            ],
            [
                d('Zombie Spend Quotient', 'The percentage of the cloud bill dedicated to unattached EBS volumes, idle Elastic IPs, and forgotten EC2 staging boxes.', 'Target: < 2%'),
                d('GitOps Coverage Density', 'The percentage of AWS assets managed strictly by Terraform state versus manual deployments.', 'Target: > 95%')
            ],
            'Execute a 24-hour Cloud Waste Hunt.',
            ['Open AWS Cost Explorer or GCP Billing.', 'Filter for "Unattached EBS Volumes" and "Idle Elastic IPs".', 'Delete them immediately and calculate the annualized savings.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-6', undefined, 'live'
);

tracks7Modules['cloud-finops/7-6'] = m('7-6', 'Multi-Cloud Arbitrage & Negotiation', 'Evaluating the negotiation use of multi-cloud capability, avoiding the "Lowest Common Denominator" trap, and Egress data economics.', t14, 
    ['Determine the true cost of Multi-Cloud translation', 'Use Enterprise Commitment Discounts', 'Map API lock-in vectors'], [
        l('The Multi-Cloud Mirage', 
            [
                'Enterprises frequently mandate "Multi-Cloud" (running concurrently on AWS and GCP) to avoid vendor lock-in. From a FinOps perspective, this is often a catastrophic decision.',
                'To run across multiple clouds, teams cannot use managed proprietary services (like DynamoDB or Spanner). They must build bespoke abstractions (like self-hosted Cassandra clusters). The engineering payroll required to maintain this abstraction far exceeds any theoretical discount gained in negotiation.',
                'A financially superior pattern is "Primary-Secondary": commit heavily to AWS to secure the 15% Enterprise Discount Program (EDP) tier, but architect the system on standard containers (EKS/Kubernetes) so a theoretical lift-and-shift to Azure is viable within 6 months if pricing becomes hostile.'
            ],
            [
                d('Multi-Cloud Translation Tax', 'The engineering overhead spent writing deployment glue-code for two different control planes.', 'Often a 15% velocity drag'),
                d('Egress Ranson Mathematics', 'The punitive cost cloud providers charge to move petabytes of data out of their walled gardens.', 'Requires strict geographic routing')
            ],
            'Re-evaluate your multi-cloud initiative.',
            ['Calculate the engineering hours spent managing the exact same caching layer on Azure vs AWS.', 'Convert those hours into a dollar amount.', 'Ask if negotiating a single-vendor Volume Discount would yield higher net savings.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-7', undefined, 'live'
);

tracks7Modules['cloud-finops/7-7'] = m('7-7', 'Cloud Migration ROI', 'The financial reality of moving on-prem data centers to the cloud: Lift & Shift vs. Cloud-Native Refactoring.', t14, 
    ['Model CapEx to OpEx conversions', 'Calculate dual-running migration taxes', 'Measure immediate value delivery limits'], [
        l('The Lift and Shift Trap', 
            [
                'When migrating to the cloud, taking 50 monolithic legacy Windows servers from a physical data center and running them on 50 EC2 instances is called "Lift and Shift". It is the fastest migration path, but it fundamentally breaks the cloud economic model.',
                'Because the servers run 24/7 at low utilization, "Lift and Shift" almost always results in a cloud bill that is vastly higher than the original on-prem hardware depreciation costs.',
                'Realizing the "Cloud Premium" requires "Refactoring" - breaking those servers into auto-scaling microservices and serverless functions that scale to zero when not in use. Refactoring is slow and expensive, creating a steep TCO trough.'
            ],
            [
                d('Cloud Migration Bubble', 'The 12-to-18-month financial period where the organization pays for both the fading data center and the new cloud environment simultaneously.', 'Peak financial risk phase'),
                d('Refactoring Premium', 'The engineering capital invested exclusively to make standard code "Cloud-Native" (containerized, stateless).', 'A mandatory transition cost')
            ],
            'Audit the architecture of the last 3 applications migrated to AWS.',
            ['Check if they dynamically scale down during non-business hours (nights/weekends).', 'If they remain provisioned continuously, the migration failed its FinOps objective.', 'Schedule a re-platforming architecture review.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-8', undefined, 'live'
);

tracks7Modules['cloud-finops/7-8'] = m('7-8', 'Data Transfer & Egress Economics', 'The invisible tax of moving data. Modeling CDN economics, cross-region bandwidth costs, and edge routing.', t14, 
    ['Map inter-availability zone bandwidth penalties', 'Calculate Content Delivery Network (CDN) offload ROI', 'Design localized data routing'], [
        l('The Friction of Data in Motion', 
            [
                'Cloud providers do not charge heavily to ingest data; they charge aggressively when data moves outwards. Sending data across the internet (Egress) or even between two physical zones in the same data center incurs massive hidden charges.',
                'If your application web servers sit in `us-east-1` but your centralized database sits in `us-west-2`, every single user click generates cross-country Egress data fees. The architectural geometry literally dictates the margin.',
                'By implementing an aggressive Content Delivery Network (Cloudflare/Fastly) caching layer, you intercept 80% of data requests at the edge before they hit the origin server, crushing egress costs.'
            ],
            [
                d('CDN Origin Hit Rate', 'The percentage of requests that bypass the edge cache and force the expensive origin server to compute a response.', 'Target: < 20%'),
                d('Cross-Region Arbitrage Tax', 'The financial penalty of distributing workloads geographically without local data replication.', 'Requires strict VPC endpoint architecture')
            ],
            'Implement an aggressive Egress trace on your primary API.',
            ['Isolate the endpoint returning the largest JSON payloads.', 'Verify that it is utilizing `gzip` or `brotli` compression.', 'Ensure the Cloudfront/Cloudflare caching headers are explicitly set to maximum TTL limits.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-9', undefined, 'live'
);

tracks7Modules['cloud-finops/7-9'] = m('7-9', 'Observability & MTTR Economics', 'The prohibitive cost of blind deployments and the ROI of distributed tracing vs log ingestion bills.', t14, 
    ['Model MTTR cost vectors', 'Calculate tracing payload overhead', 'Determine log ingestion ROI'], [
        l('The Math of the Blind Outage', 
            [
                'Mean Time To Resolution (MTTR) consists of two phases: 1) Identification (What broke?) and 2) Remediation (Fixing it). Without distributed tracing, 90% of MTTR is spent blindly searching log files.',
                'If an ecommerce checkout is down during Black Friday, generating $100/minute in lost revenue, a logging tool that reduces Identification time from 40 minutes to 3 minutes yields an immediate $3,700 ROI on that single incident.',
                'However, ingesting 100% of telemetry data into Datadog or Splunk creates ruinous billing. FinOps requires "Aggressive Sampling" - dropping 95% of successful trace data and keeping 100% of error traces.'
            ],
            [
                d('Log Ingestion Cost', 'The monthly Datadog bill to index telemetry data.', 'Aggressively sample non-errors to reduce'),
                d('Automated Identification %', 'The percentage of outages where the alerting tool automatically points to the exact failing service.', 'Target: > 80%')
            ],
            'Implement aggressive Log Sampling to control Datadog/Honeycomb Opex.',
            ['Identify the service generating the highest volume of `INFO` logs.', 'Configure the logger to drop 90% of `INFO` logs explicitly, but keep 100% of `ERROR` logs.', 'Verify that tracing spans still correctly link the errors to the user request.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-10', undefined, 'live'
);

tracks7Modules['cloud-finops/7-10'] = m('7-10', 'FinOps Team & Governance Synthesis', 'Integrating executive dashboards, cost allocation methodologies, and establishing the unified FinOps culture across engineering.', t14, 
    ['Unveil the cloud optimization dashboard', 'Adopt shifting left on cost', 'Forecast quarterly cloud trajectory'], [
        l('The FinOps Cultural Shift', 
            [
                'FinOps is not a team; it is an organizational capability. Appointing one "Cloud Cost Manager" to optimize the architecture after it is built is fundamentally broken. Cost must be "shifted left" into the IDE.',
                'In mature engineering cultures, the cost per invocation is debated during the Pull Request review process alongside code quality and security.',
                'The final step of the Executive FinOps transformation is tying the cloud bill dynamically to the business metrics. A $100k AWS bill increase is celebrated if it supported 1M new active users; it is treated as a severe incident if user growth was flat.'
            ],
            [
                d('Unit Cost of Goods Sold (COGS)', 'The total cloud infrastructure cost divided by the core business metric (e.g., Cost Per Ride, Cost Per Transaction).', 'Must trend downward over time'),
                d('Forecast Accuracy Ratio', 'The delta between the engineering team\'s projected quarterly infrastructure bill and the actual reality.', 'Drives CFO trust')
            ],
            'Establish the Unit-Cost baseline for your primary product.',
            ['Take last month\'s total AWS/Azure bill.', 'Divide it by the number of active monthly users or major transactions.', 'Present this exact "Dollar per User" metric to the engineering team as their primary architectural target to reduce.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-11', undefined, 'live'
);

// Advanced AI Finops
tracks7Modules['cloud-finops/7-11'] = m('7-11', 'AI FinOps Specialization', 'Mapping LLM API costs to feature margins, the depreciation of GPU clusters, and orchestrating RAG pipelines for cost efficiency.', t14, 
    ['Calculate token allocation per user', 'Optimize GPU Cluster depreciation models', 'Triage RAG margin bleed'], [
        l('Token Tracing and Margin Compression', 
            [
                'AI completely breaks traditional FinOps. You no longer pay for server runtime; you pay for non-deterministic token lengths. A user typing a highly complex prompt forces a massive context recall, single-handedly ruining the margin on their $10/month SaaS subscription.',
                'AI FinOps requires establishing "Token Budgets" per user segment. If a freemium user exceeds their daily token cost allowance, the UI must dynamically degrade from GPT-4o to a cheaper, smaller model (like Haiku) without user disruption.',
                'You must trace every single API call back to the originating user ID. A centralized "Token Gateway" proxy is mandatory to intercept, record, and cap spend before it hits the Cloud.'
            ],
            [
                d('LLM Feature Gross Margin', 'The revenue of an AI tool minus the specific token-cost required to run it.', 'Target: > 40%'),
                d('Token Routing Optimization Savings', 'The financial gain of redirecting easy queries away from expensive frontier models.', 'Immediate ROI accelerator')
            ],
            'Implement a cross-model cost mitigation proxy.',
            ['Use an abstraction layer like LiteLLM.', 'Configure a fallback: if Anthropic API fails, route to OpenAI. More importantly, configure routing based on query complexity to slash average token costs.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-12', undefined, 'live'
);

tracks7Modules['cloud-finops/7-12'] = m('7-12', 'Cloud Repatriation Calculus', 'The Basecamp migration strategy. Analyzing when moving workloads to bare-metal racks is financially superior to hyperscalers.', t14, 
    ['Execute the Repatriation Break-Even math', 'Calculate Egress elimination savings', 'Model the data center hardware depreciation timeline'], [
        l('The Apex of the Cloud Curve', 
            [
                'The cloud is fundamentally designed to accelerate startups via rented elasticity. As an enterprise scales, the hyperscaler markup (often >60% on compute and >90% on egress data) becomes a massive margin tax on mature, predictable workloads.',
                'The "Basecamp Repatriation Test" (pioneered by DHH) proved that migrating predictable DB traffic to self-managed bare-metal hardware eliminated $1M+ in annual cloud billing, paying off the hardware capital expenditure in less than 4 months.',
                'Cloud Repatriation is not for experiments. It is a highly deliberate financial maneuver strictly for workloads with flatlined growth charts that suffer from excessive cloud bandwidth extortion.'
            ],
            [
                d('Repatriation Egress Savings', 'The immediate elimination of AWS/GCP data transfer out fees.', 'Often the largest single cost driver'),
                d('Hardware CapEx Amortization', 'The time to recoup the initial $200k server investment over the $50k/month former cloud bill.', 'Exceedingly fast payback')
            ],
            'Execute a Cloud Repatriation audit on your most stable system.',
            ['Identify the microservice with the highest data egress volume but the most consistent, predictable CPU curve over the last 6 months.', 'Calculate the cost of renting a dedicated bare-metal server in a neutral facility (like Equinix) vs the current cloud bill.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-13', 'cloud-repatriation', 'live'
);

tracks7Modules['cloud-finops/7-13'] = m('7-13', 'Serverless GPU Brokering', 'Navigating the spot market for inference, navigating providers like Runpod and Modal, and optimizing cold-start tolerances for AI models.', t14, 
    ['Capitalize on GPU aggregate routing', 'Quantify inference scale-to-zero limits', 'Optimize VRAM swapping overhead'], [
        l('The Liquid Market of Intelligence Compute', 
            [
                'Renting an H100 GPU on AWS is exceptionally expensive and requires a strict multi-year contract (if you can get one). Building an unpredictable AI startup on a $30,000/month GPU commitment is financial suicide.',
                'Serverless GPU providers (Modal, RunPod) allow you to spin up an L40S or A100 per container, process the inference, and shut down in milliseconds. You trade slightly higher per-second pricing for the ability to scale to absolute zero on nights and weekends.',
                'The massive tradeoff is the "Weight Loading Cold Start". Pulling a 30GB model weight file into VRAM takes 15 seconds. Architectures must aggressively cache model layers in memory to prevent the first user of the day from abandoning the request.'
            ],
            [
                d('Model VRAM Load Latency', 'The seconds lost transferring the foundation model from disk to local GPU memory.', 'Direct friction source for serverless AI'),
                d('GPU Spot Market Arbitrage', 'Automatically routing background bulk-processing jobs (like text embeddings) to the cheapest available GPU worldwide.', 'Requires container orchestration')
            ],
            'Implement a cold-start mitigation for your inference engine.',
            ['Deploy a serverless GPU architecture on Modal or Replicate.', 'Force an active keep-alive ping to hold the model in VRAM during peak traffic hours, allowing idle shutdown only after hours.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-14', undefined, 'live'
);

tracks7Modules['cloud-finops/7-14'] = m('7-14', 'Data Security Posture Management (DSPM)', 'The intersection of FinOps and Security: discovering shadow data, managing S3 sprawl, and quantifying the liability of forgotten buckets.', t14, 
    ['Perform autonomous anomaly scanning over cloud storage', 'Calculate shadow data liability profiles', 'Implement IAM minimal permissions automatically'], [
        l('The Cost of the Forgotten Object', 
            [
                'Enterprises create hundreds of S3 buckets/blobs annually for "temporary" data transfers that are never deleted. This is both a massive FinOps hemorrhage and a critical cyber-liability vector for ransomware attacks.',
                'Data Security Posture Management (DSPM) combines cost destruction with risk mitigation. By deploying automated scanning architecture, you surface multi-terabyte unattached logs, orphaned developer staging databases, and exposed PII that a human architect would never find manually.',
                'Destroying an idle, 50-terabyte shadow database instantly improves cloud margins while simultaneously closing a critical threat vector.'
            ],
            [
                d('Shadow Storage Ratio', 'The percentage of cloud storage bytes containing duplicate, orphaned, or completely undocumented assets.', 'Target identifying and archiving immediately'),
                d('Open Access Exposure Risk', 'Cost modeled liability of internet-facing or widely-scoped internal S3 buckets.', 'Drive to zero')
            ],
            'Audit your internal S3 lifecycle policies.',
            ['Identify the three largest cloud storage buckets holding staging/test data.', 'Configure an automated Lifecycle Hook to migrate all objects older than 30 days to Glacier/Cold Storage, and delete anything older than 90 days automatically.']
        )
    ], '/vault/curriculum/tracks/cloud-finops/7-15', undefined, 'live'
);

tracks7Modules['cloud-finops/7-15'] = m('7-15', 'Continuous Architecture Modernization', 'The operational cadence of avoiding the rewrite. Establishing refactoring rhythms, deprecation schedules, and avoiding the sunk-cost fallacy.', t14, 
    ['Map the migration pipeline throughput', 'Measure the ROI of deprecating major systems', 'Defeat the sunk-cost narrative'], [
        l('Defeating the 5-Year Overhaul', 
            [
                'The default mode of enterprise IT is to build a monolith over three years, ignore it for two years while maintenance costs skyrocket, and then launch a massive, catastrophic "Architecture Transformation 2.0" to rewrite it.',
                'Continuous Modernization treats architecture refactoring identically to feature deployment. 15% of every sprint is permanently allocated to paying down technical debt, strangling the monolith, and upgrading libraries.',
                'This eliminates the massive 18-month un-shippable deployment cycles. Small, atomic structural changes protect the bottom line and allow the organization to continuously adopt new, cheaper FinOps abstractions (like scaling-to-zero Edge routing) without pausing the business.'
            ],
            [
                d('Refactoring Cadence Percentage', 'The sprint allocation unconditionally locked to architectural improvements and debt repayment.', 'Target: ~15% consistently'),
                d('Strangler Fig Completion Rate', 'The speed at which a legacy system is isolated, carved up into new boundaries, and retired.', 'Track velocity specifically against this')
            ],
            'Enforce the Continuous Deprecation protocol.',
            ['Mandate that every new system proposed to the Architecture Review Board must include a precise paragraph outlining its eventual "Sunset/Deprecation" metrics.', 'If a team does not know how they will turn the system off in 5 years, they do not understand the architecture.']
        )
    ], undefined, undefined, 'live'
);
