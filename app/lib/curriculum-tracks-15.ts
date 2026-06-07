import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks15Modules: Record<string, CurriculumModule> = {};

const t15 = 'Track 15 — Free Playbooks & Guides';

tracks15Modules['free-guides/15-1'] = m('15-1', 'The AI Survival Guide for Non-Technical Founders', 'How to differentiate between genuine AI capability and vendor hype, establish a data moat, and avoid AI wrapper technical debt.', t15, 
    ['Execute the "Thin Wrapper" Test', 'Identify hallucination liabilities', 'Calculate true GenAI implementation costs'], [
        l('Differentiating Capabilities from Wrappers', 
            [
                'A non-technical founder is the prime target for massive AI consulting upcharges. You do not need a custom foundation model; you need a well-architected API proxy.',
                'If a vendor promises to "build you a custom AI," they are almost certainly just wrapping OpenAI\'s API in a React interface and charging you $150,000. You are paying for UI, not Intelligence.',
                'True AI defensibility comes from your proprietary data (the "Moat"). If your AI app simply searches the public internet, a competitor can replicate it over the weekend. If it searches your proprietary 10-year archive of customer service logs, it is highly defensible.'
            ],
            [
                d('The Thin Wrapper Ratio', 'The percentage of your app\'s value that is derived purely from standard OpenAI API calls.', 'High ratio = High Risk of obsolescence'),
                d('Proprietary Context Volume', 'The amount of private, unique data you can feed into an LLM via RAG.', 'Determines your competitive advantage')
            ],
            'Audit the competitive moat of your GenAI feature.',
            ['Identify the exact API powering the "Magic" button in your product.', 'If OpenAI dropped their API price to $0.00 tomorrow, would your product survive? Or would Microsoft release your entire feature as a free Office update?']
        )
    ], '/vault/curriculum/tracks/free-guides/15-2', undefined, 'live'
);

tracks15Modules['free-guides/15-2'] = m('15-2', 'Enterprise FinOps: Taming AWS Bills', 'A step-by-step checklist to instantly reduce AWS/GCP bills by eliminating zombie infrastructure and right-sizing underutilized legacy clusters.', t15, 
    ['Eliminate untagged EBS Volumes immediately', 'Identify idle Load Balancers and NAT Gateways', 'Enforce multi-tenant resource quotas'], [
        l('The 48-Hour Cash Recapture Protocol', 
            [
                'Cloud environments naturally tend toward maximum entropy and maximum billing. Developers spin up staging databases to test a feature and leave the company over the weekend. The database runs for three years at $800/month.',
                'Before attempting complex "Right-Sizing" architecture, an enterprise must execute a "Zombie Hunt". Searching strictly for unattached volumes, idle load balancers, and unused elastic IPs often recaptures 5-10% of the entire monthly cloud bill in a single afternoon.',
                'This requires no engineering architecture changes—it is pure financial housekeeping that immediately drops to the bottom line profit.'
            ],
            [
                d('Orphaned Infrastructure Waste', 'The total dollar amount spent monthly on cloud assets that have zero inbound network traffic.', 'Often exceeds thousands of dollars'),
                d('Resource Takedown Policy', 'Automated scripts that delete any Sandbox or Development instance that has run for longer than 7 days continuously.', 'Forces proactive deployment habits')
            ],
            'Execute an immediate Zombie Infrastructure elimination sweep.',
            ['Open the AWS Console.', 'Navigate to EC2 -> Elastic Block Store -> Volumes.', 'Filter by State: `Available` (This means it is NOT attached to any server, but you are still paying for it).', 'Delete them and calculate the savings.']
        )
    ], '/vault/curriculum/tracks/free-guides/15-3', undefined, 'live'
);

tracks15Modules['free-guides/15-3'] = m('15-3', 'Chief AI Officer (CAIO) First 90 Days', 'A strategic deployment roadmap for a new CAIO: Auditing Shadow AI, establishing governance gates, and proving early financial ROI.', t15, 
    ['Execute the Shadow AI discovery scan', 'Deploy the Corporate GenAI Wall', 'Secure an immediate High-ROI Quick Win'], [
        l('The 90-Day Mandate', 
            [
                'A new Chief AI Officer (CAIO) must accomplish two opposing tasks simultaneously: rapidly shutting down massive security liabilities (Shadow AI), while simultaneously delivering a highly visible, undeniable financial win using AI to secure political capital.',
                'Day 1-30 is Discovery: Locating every employee pasting proprietary corporate PII into public ChatGPT and shutting it down via network blocks, while provisioning a private Enterprise-tier alternative to prevent mutiny.',
                'Day 30-90 is the "Quick Win": Finding one highly manual, high-volume operational task (like invoice extraction or customer support triage) and explicitly demonstrating a 40% reduction in manual labor hours via an LLM pipeline.'
            ],
            [
                d('P2P AI Liability Cap', 'The estimated financial exposure caused by employees feeding code and data into public LLM training algorithms.', 'Must be driven to zero instantly'),
                d('Demonstrable AI Labor Offset', 'The explicit number of hours saved by the 90-Day Quick Win project.', 'Establishes the CAIO budget for Year 2')
            ],
            'Execute the secure, private AI alternative rollout.',
            ['Do not simply ban ChatGPT; that drives it underground.', 'Purchase ChatGPT Enterprise or deploy a private instance of Claude on AWS Bedrock.', 'Announce it to the company: "Here is your internal, safe, non-training AI assistant." Monitor adoption.']
        )
    ], '/vault/curriculum/tracks/free-guides/15-4', undefined, 'live'
);

tracks15Modules['free-guides/15-4'] = m('15-4', 'Zero-Trust Security for Cloud', 'Understanding Identity-Aware Proxies, eliminating corporate VPNs, and securing the network perimeter dynamically based on identity context.', t15, 
    ['Deprecate legacy perimeter VPNs', 'Implement Identity-Aware Proxy (IAP)', 'Enforce micro-segmentation policies'], [
        l('The Death of the Corporate Network', 
            [
                'Legacy security relied on the "Castle and Moat" topology. If an employee connected to the corporate VPN, they were deemed "trusted" and had unfettered access to the internal network. If an attacker stole those VPN credentials, they compromised the entire enterprise instantly.',
                'Zero-Trust explicitly assumes the network is actively hostile. Identity is the new perimeter. Every single request to an internal application must be dynamically authenticated and authorized based on the user\'s role, device health, and location.',
                'By deploying Identity-Aware Proxies (like Cloudflare Access or BeyondCorp), organizations can securely expose internal dashboards to the public internet without a VPN, massively reducing friction while mathematically increasing security.'
            ],
            [
                d('VPN Latency Tax', 'The network delay and productivity drag caused by forcing global employees back through a central corporate VPN choke-point.', 'Eliminated via direct IAP routing'),
                d('Lateral Movement Vulnerability', 'The ease with which an attacker can jump from a compromised HR laptop to the core production databases.', 'Blocked via Zero-Trust micro-segmentation')
            ],
            'Audit internal tooling accessibility requirements.',
            ['Identify internal dashboards (like Kibana or Grafana) trapped behind clunky VPNs.', 'Move one dashboard behind an Identity-Aware Proxy via Okta or Google Workspace.', 'Measure the reduction in IT Helpdesk tickets related to VPN failures.']
        )
    ], '/vault/curriculum/tracks/free-guides/15-5', undefined, 'live'
);

tracks15Modules['free-guides/15-5'] = m('15-5', 'Enterprise AI Team Scaling Guide', 'Restructuring traditional engineering departments into AI-First pods: Integrating Prompt Engineers, Model Evaluators, and Domain Experts.', t15, 
    ['Transition from Full-Stack to AI-Stack', 'Define the role of the AI Application Engineer', 'Decouple Prompts from backend engineering'], [
        l('The Fallacy of the 10x ML Researcher', 
            [
                'When traditional enterprises attempt to adopt AI, they often make the mistake of attempting to hire specialized AI/ML PhDs from Google or Stanford for $500k/year to build algorithms from scratch.',
                'Enterprise AI is not about building algorithms. It is about securely piping proprietary data into existing Cloud APIs (OpenAI, Anthropic). You need "AI Application Engineers"—standard senior developers who understand how to build production-grade RAG pipelines and prompt-routing logic.',
                'The ideal AI Pod consists of: 1 Data Engineer (for pipeline), 2 AI App Engineers (for API integration/RAG), and 1 Subject Matter Expert (for writing the Golden Dataset ground-truth evaluations).'
            ],
            [
                d('Algorithm CapEx vs API OpEx', 'The massive cost differential between training specific models versus consuming API inference.', 'Always start with API OpEx'),
                d('Evaluation Bottleneck Payroll', 'The cost of manually having engineers review AI outputs for accuracy.', 'Automate via LLM-as-a-Judge immediately')
            ],
            'Re-evaluate the open requisitions for your AI initiative.',
            ['Cancel the request for a "Principal AI Researcher".', 'Open a req for a "Senior Data Engineer (RAG/VectorDB)".', 'Watch the candidate quality increase and the salary demands normalize to standard software engineering rates.']
        )
    ], undefined, undefined, 'live'
);
