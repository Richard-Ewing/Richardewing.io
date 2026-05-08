import { 
    Cpu, Target, Blocks, LockKeyhole, Database, 
    Shield, TestTube, TerminalSquare, ServerCrash, 
    LayoutTemplate, LineChart, Milestone, HardDrive, 
    Search, Library
} from 'lucide-react';

export type CareerPath = {
    slug: string;
    title: string;
    manifestoTitle: string;
    label: string;
    iconName: string;
    color: string;
    description: string;
    manifesto: string[];
    glossaryTerms: string[];
    curriculumKeywords: string[];
    seoMeta: string;
    seoKeywords: string[];
    domain: 'Engineering & Infrastructure' | 'Product & Economics' | 'Security & Governance' | 'Data & AI Foundations';
    // --- NEW ENRICHMENT FOR 90 DAY TRANSITION ---
    primaryMetrics: { name: string; description: string }[];
    first90Days: { day30: string; day60: string; day90: string };
    interviewAntiPatterns: string[];
    marketEconomics?: { salary: string; growth: string; gap: string };
    faqs?: { question: string; answer: string }[];
};

export const CAREER_PATHS: CareerPath[] = [
    // --- Product & Economics ---
    {
        slug: 'ai-product-economist',
        title: 'AI AI Economist',
        manifestoTitle: 'The Visionary Fiduciary',
        label: 'The Visionary',
        iconName: 'Target',
        color: 'purple',
        domain: 'Product & Economics',
        description: 'Stop prioritizing features by "vibe." Evaluate the exact API token-cost-to-revenue ratio for generative features and govern the product roadmap as a fiduciary asset.',
        manifesto: [
            'Product Managers who write user stories for simple CRUD apps are being rendered obsolete by code-generation LLMs. To survive the 2026 transition, PMs must evolve into AI Economists.',
            'The AI AI Economist models the financial viability of AI features at the atomic inference level. If a feature costs $0.02 in API calls but only generates $0.01 in user value, you are shipping negative margins at scale.',
            'Your job is to understand the AI Unit Economics Benchmark (AUEB), determine whether to use expensive frontier APIs vs. cheap edge SLMs, and validate that AI product expansion aligns with Enterprise Valuation.'
        ],
        glossaryTerms: ['ai-cogs', 'innovation-tax', 'cost-of-delay', 'technical-insolvency-date', 'ai-assisted-development', 'dora-metrics'],
        curriculumKeywords: ['finops', 'pricing', 'economics', 'roi', 'cogs'],
        seoMeta: 'Transition to an AI AI Economist. Master AI Unit Economics, inference cost modeling, and govern the generative product roadmap as a fiduciary asset.',
        seoKeywords: ['AI AI Economist', 'AI PM', 'AI product management', 'AI unit economics', 'LLM feature pricing', 'API tracking', 'AUEB'],
        primaryMetrics: [
            { name: "AUEB Ratio", description: "AI Unit Economics Benchmark: AI COGS relative to Monthly Recurring Revenue." },
            { name: "Cost of Predictivity", description: "The margin penalty paid to ensure determinism over hallucination." },
            { name: "Inference-to-Conversion Rate", description: "How effectively raw token generation converts to user action." }
        ],
        first90Days: {
            day30: "Audit the current feature backlog and mercilessly cull any roadmap item that lacks a deterministic Unit Economics model.",
            day60: "Map the exact token pricing overhead against customer LTV, identifying which features bleed OPEX.",
            day90: "Present a board-ready executive dashboard demonstrating a 15% reduction in API COGS while maintaining product feature parity."
        },
        interviewAntiPatterns: [
            "Discussing 'Agile workflows' and 'User Stories' instead of Margin Preservation.",
            "Valuing the capability of the AI over the mathematical ROAI (Return on AI).",
            "Failing to understand the difference between CapEx (building a model) and OpEx (API inference taxes)."
        ],
        marketEconomics: {
        "salary": "$190,000 - $310,000",
        "growth": "+240% YoY",
        "gap": "Traditional PMs write stories; Economists model AI token ROI. The difference is $150k in base salary."
},
        faqs: [
        {
                "question": "How do I transition from a traditional PM?",
                "answer": "Stop focusing on user stories. Learn how to calculate AI Unit Economics (AUEB) and validate feature-level inference costs against MRR."
        },
        {
                "question": "Do I need to know how to code?",
                "answer": "No, but you must understand the mathematical difference between caching, RAG retrieval costs, and frontier model API taxes."
        }
]
    },
    {
        slug: 'generative-ui-ux-architect',
        title: 'Generative UI/UX Architect',
        manifestoTitle: 'The Context Weaver',
        label: 'The Weaver',
        iconName: 'LayoutTemplate',
        color: 'pink',
        domain: 'Product & Economics',
        description: 'Move beyond static, hard-coded dashboards. Architect transient, fully dynamic user interfaces that generative models render on the fly based on contextual intent.',
        manifesto: [
            'In 2026, the concept of a static "dashboard" is dead. Users will not navigate through ten menus to find a button; they will state an intent, and the UI will generate itself transiently entirely around that intent.',
            'As a Generative UI/UX Architect, your medium is no longer just React components. Your medium is the orchestration of structured LLM outputs (JSON) mapping directly into real-time front-end state.',
            'You are responsible for resolving the friction between stochastic model hallucinations and deterministic UI design systems.'
        ],
        glossaryTerms: ['ai-inference', 'developer-experience', 'technical-debt'],
        curriculumKeywords: ['product', 'design', 'generative ui', 'ux', 'dashboard'],
        seoMeta: 'Become a Generative UI/UX Architect in 2026. Design transient, on-the-fly user interfaces powered by structured LLM outputs and dynamic intent.',
        seoKeywords: ['Generative UI', 'AI UX Design', 'Transient Interfaces', 'Dynamic Dashboards', 'LLM UI/UX', 'Structured Outputs'],
        primaryMetrics: [
            { name: "Time-to-Intent (TTI)", description: "How quickly a user's raw prompt transforms into an actionable state machine." },
            { name: "UI Hallucination Rate", description: "Frequency of generative state failure causing a broken or unusable component." },
            { name: "Friction Tax", description: "The amount of non-generative clicks required to override an incorrect dynamic screen." }
        ],
        first90Days: {
            day30: "Deconstruct the legacy design system into atomic, dynamically orchestratable JSON components.",
            day60: "Prototype a System-2 UI loop where a Small Language Model (SLM) strictly routes UX state changes without hallucination.",
            day90: "Deploy the first 'Transient Dashboard' that eliminates at least 3 static configuration screens, increasing user intent velocity by 300%."
        },
        interviewAntiPatterns: [
            "Focusing your portfolio on static pixel-perfect mockups rather than dynamic JSON state rendering.",
            "Not understanding how a context window directly controls a conditional React flow.",
            "Designing without constraints for LLM latency (failing to use skeletons or streaming chunk responses)."
        ],
        marketEconomics: {
        "salary": "$180,000 - $290,000",
        "growth": "+185% YoY",
        "gap": "Figma mockups are commoditized. Architecting structured JSON outputs that render dynamically is a hyper-premium skill."
},
        faqs: [
        {
                "question": "Is Figma dead?",
                "answer": "Static design is dead. You need to design design systems that LLMs can dynamically assemble based on user intent."
        },
        {
                "question": "What is a transient interface?",
                "answer": "A UI that does not exist until the user prompts it, rendered purely via structured output bindings from an SLM/LLM."
        }
]
    },
    {
        slug: 'vp-engineering-economics',
        title: 'VP of Engineering Economics',
        manifestoTitle: 'The Metric Fiduciary',
        label: 'The Fiduciary',
        iconName: 'LineChart',
        color: 'emerald',
        domain: 'Product & Economics',
        description: 'Bridge the massive chasm between engineering output and the CFO\'s spreadsheet. Govern R&D capital, ruthlessly trim technical insolvency, and translate APER to the board.',
        manifesto: [
            'For too long, engineering has been a black box to the CFO. "Story Points" and "Velocity" mean nothing in the boardroom. The board only cares about one thing: Are we getting a return on our R&D Capital?',
            'As the VP of Engineering Economics, your mandate is to translate cloud spend, developer productivity, and technical debt directly into financial reporting.',
            'You measure Annualized Productivity per Engineer (APER). You enforce build-vs-buy constraints. You are the ultimate fiduciary of the engineering organization, ensuring the business extracts compounding value from every line of code deployed.'
        ],
        glossaryTerms: ['technical-debt', 'ai-cogs', 'innovation-tax', 'technical-insolvency-date', 'aper-metric', 'dora-metrics'],
        curriculumKeywords: ['economics', 'roi', 'valuation', 'budget'],
        seoMeta: 'Become a VP of Engineering Economics. Master APER, translate engineering metrics to the CFO, and govern enterprise R&D Capital investments.',
        seoKeywords: ['VP of Engineering Economics', 'Engineering Economics', 'R&D Capital Management', 'CFO Engineering Metrics', 'APER metric', 'Tech Debt Valuation'],
        primaryMetrics: [
            { name: "Annualized Productivity per Engineer (APER)", description: "The core financial return generated per engineering headcount." },
            { name: "Technical Insolvency Date", description: "The projected quarter where maintenance OPEX exceeds total revenue due to compounding Tech Debt." },
            { name: "Innovation Tax", description: "The percentage of sprint capacity burned on keeping legacy dependencies alive." }
        ],
        first90Days: {
            day30: "Execute a merciless PDI (Principal Debt Index) audit across all engineering verticals to map hidden liabilities.",
            day60: "Convert existing DORA metrics and arbitrary velocity points into a strict dollar-value APER dashboard for the executive team.",
            day90: "Align the CFO and CTO on a CapEx/OpEx classification grid, proving a strategic reduction in the Innovation Tax."
        },
        interviewAntiPatterns: [
            "Bringing up 'Story Points' or 'Velocity' as measures of success to board-level stakeholders.",
            "Displaying an inability to read a basic balance sheet or understand EBITDA impact.",
            "Advocating for a massive rewrite ('Bankruptcy') without a mathematical TCO (Total Cost of Ownership) justification."
        ],
        marketEconomics: {
        "salary": "$280,000 - $450,000+",
        "growth": "+120% YoY",
        "gap": "Standard VPs focus on velocity. Economic VPs focus on R&D Capital Return (APER). The latter talks to the Board."
},
        faqs: [
        {
                "question": "Why does APER matter more than DORA?",
                "answer": "DORA measures speed. APER (Annualized Productivity per Engineer) measures financial value. The CFO only understands dollars."
        },
        {
                "question": "How do I quantify Technical Debt?",
                "answer": "Use the PDI (Principal Debt Index) framework to map legacy architectural friction into an explicit innovation tax dollar amount."
        }
]
    },
    {
        slug: 'ai-implementation-leader',
        title: 'AI Implementation Leader',
        manifestoTitle: 'The Migration General',
        label: 'The Migration General',
        iconName: 'Milestone',
        color: 'amber',
        domain: 'Product & Economics',
        description: 'Orchestrate the PMO-style migration of legacy, deterministic Fortune 500 systems into probabilistic, autonomous AI ecosystems.',
        manifesto: [
            'Adopting AI at the enterprise level is not installing a Copilot plugin. It is the systemic ripping out of legacy code and replacing it with Neural-Symbolic systems.',
            'The AI Implementation Leader manages the blast radius of this transition. You orchestrate cross-functional teams combining Data Engineers, Security CISOs, and Economists.',
            'Your metric of success is how quickly you can decommission legacy SaaS vendor contracts by replacing them with governed internal Agentic workflows.'
        ],
        glossaryTerms: ['technical-debt', 'maintenance-load', 'cost-of-delay', 'ai-assisted-development'],
        curriculumKeywords: ['leadership', 'strategy', 'management', 'roi', 'pm'],
        seoMeta: 'Transition into an AI Implementation Leader. Manage the enterprise PMO migration from legacy tech stacks to autonomous Agentic ecosystems.',
        seoKeywords: ['AI Implementation', 'Enterprise AI Migration', 'AI PMO', 'Legacy Tech Migration', 'Agentic Workflows', 'Change Management AI'],
        primaryMetrics: [
            { name: "SaaS Decommission Velocity", description: "The rate at which legacy vendor contracts are eliminated by internal Agentic execution." },
            { name: "Cross-Functional Friction", description: "The measured operational drag between Legal, Security, and Engineering during AI adoption." },
            { name: "Integration Debt Accrual", description: "The penalty paid for bolting AI onto unoptimized, decoupled legacy databases." }
        ],
        first90Days: {
            day30: "Map the entire constellation of legacy SaaS tooling and identify the lowest-friction candidates for AI workflow replacement.",
            day60: "Establish the 'Agentic Migration PMO', forcing Legal, Infosec, and Engineering into a unified daily deployment cadence.",
            day90: "Execute the first successful decommissioning of a $100k+ legacy vendor contract, proving the Agentic ROI to the board."
        },
        interviewAntiPatterns: [
            "Treating an AI migration like a standard ERP deployment; failing to account for model hallucination risks.",
            "Ignoring the massive cultural friction and employee fear of replacement.",
            "Failing to articulate the specific security policies required to clear Infosec hurdles for LLM adoption."
        ],
        marketEconomics: {
        "salary": "$200,000 - $320,000",
        "growth": "+210% YoY",
        "gap": "General project managers are being automated out. Leaders who can cross domains (Legal, Sec, Eng) to deploy AI command massive premiums."
},
        faqs: [
        {
                "question": "What is the hardest part of AI adoption?",
                "answer": "It is not the technology. It is decommissioning legacy SaaS contracts and fighting the culture war of \"Shadow AI\"."
        },
        {
                "question": "Who do I report to?",
                "answer": "Typically the CTO or Chief Strategy Officer. You are running a PMO specifically targeted at replacing human abstraction with Agentic execution."
        }
]
    },

    // --- Engineering & Infrastructure ---
    {
        slug: 'agentic-solutions-architect',
        title: 'Agentic Solutions Architect',
        manifestoTitle: 'The Orchestrator',
        label: 'The Orchestrator',
        iconName: 'Cpu',
        color: 'cyan',
        domain: 'Engineering & Infrastructure',
        description: 'Transition from human-orchestrated microservices to autonomous Agentic Process Automation (APA). Master Neural-Symbolic reasoning architectures, tool-use logic limits, and deterministic boundaries.',
        manifesto: [
            'The feature factory is dead. In 2026, the velocity of writing syntax is irrelevant. The competitive moat is orchestrating autonomous AI agents that can reason, plan, and execute across secure boundaries.',
            'As an Agentic Solutions Architect, your mandate is to build ecosystems where SLMs and LLMs interact deterministically. You govern the translation layer between stochastic reasoning (LLMs) and deterministic execution (APIs, Databases, Cloud Infrastructure).',
            'Your engineering value shifts from writing code to building kill-switches, hallucination sandboxes, and evaluating Agentic Process Automation loops for infinite recursion risks.'
        ],
        glossaryTerms: ['agentic-workflow', 'orchestration-debt', 'cost-of-predictivity', 'rag', 'technical-debt', 'large-language-model', 'ai-inference'],
        curriculumKeywords: ['economics', 'agent', 'automation', 'devops'],
        seoMeta: 'Become a 2026 Agentic Solutions Architect. Transition from microservices to Agentic Process Automation (APA) and build secure, non-deterministic AI execution environments.',
        seoKeywords: ['Agentic Solutions Architect', 'AI orchestrator', 'agentic workflows', 'AI orchestration', 'career transition tech', 'autonomous AI systems', 'Agentic Process Automation'],
        primaryMetrics: [
            { name: "Orchestration Debt", description: "The structural complexity tax of chaining too many LLMs together without determinism." },
            { name: "Recursion Trap Rate", description: "The frequency at which an autonomous agent enters an infinite logic loop requiring human intervention." },
            { name: "System-2 Verification Cost", description: "The compute overhead explicitly required to verify a model's generated plan before execution." }
        ],
        first90Days: {
            day30: "Audit all existing LLM tool-calling endpoints to ensure rigid schema enforcement and zero-trust sandboxing.",
            day60: "Replace a high-latency monolothic GPT-4o pipeline with a multi-agent orchestration of faster, localized Small Language Models.",
            day90: "Deploy an absolute 'Kill Switch' infrastructure guaranteeing automatic halt of any agentic loop displaying >5% entropy drift."
        },
        interviewAntiPatterns: [
            "Bragging about writing boilerplate 'prompts' instead of architecting deterministic semantic routing.",
            "Displaying ignorance of 'infinite loop' agentic vulnerabilities and API billing exhaustion.",
            "Believing an LLM should directly execute SQL mutations on a production database."
        ],
        marketEconomics: {
        "salary": "$220,000 - $350,000",
        "growth": "+310% YoY",
        "gap": "Writing microservices is a commodity. Orchestrating autonomous agents with zero-trust sandboxing is the rarest capability in tech."
},
        faqs: [
        {
                "question": "What is Agentic Process Automation?",
                "answer": "Moving from human-in-the-loop workflows to systems where autonomous agents evaluate context, select tools, and execute autonomously."
        },
        {
                "question": "How do you prevent agentic infinite loops?",
                "answer": "By constructing deterministic kill-switches and rigid semantic gating before any agent interacts with a mutable database."
        }
]
    },
    {
        slug: 'platform-edge-engineer',
        title: 'Platform & Edge Engineer',
        manifestoTitle: 'The Scaler',
        label: 'The Scaler',
        iconName: 'Blocks',
        color: 'emerald',
        domain: 'Engineering & Infrastructure',
        description: 'Scale internal developer platforms (IDP), drastically cut API costs by deploying Small Language Models (SLMs) to the edge natively, and orchestrate Cloud Repatriation.',
        manifesto: [
            'As foundation API costs spiral, the enterprise is hitting "The Data Wall." The reaction is Cloud Repatriation and the deployment of Small Language Models (SLMs) directly to edge devices.',
            'Platform Engineers are the new sysadmins. You are building Internal Developer Platforms (IDPs) that abstract away the complexity of deploying RAG pipelines, Vector Databases, and edge intelligence.',
            'You are the ultimate weapon against vendor lock-in. By deploying local weights and optimizing GPU FinOps, you reduce the company\'s monthly inference bill by 90% while improving latency and security.'
        ],
        glossaryTerms: ['small-language-models', 'open-weights', 'developer-experience', 'maintenance-load', 'conways-law', 'rag'],
        curriculumKeywords: ['devops', 'platform', 'cloud', 'finops', 'edge'],
        seoMeta: 'Master Platform & Edge Engineering for 2026. Scale internal developer platforms, deploy edge SLMs, and execute cloud repatriation to collapse API costs.',
        seoKeywords: ['Platform Engineer', 'Edge Engineer', 'SLM deployment', 'Internal Developer Platform', 'IDP', 'Cloud Repatriation', 'GPU FinOps'],
        primaryMetrics: [
            { name: "Inference Latency Tax", description: "The round-trip delay caused by cloud API calls compared to Edge-native SLM execution." },
            { name: "DevEx Friction Score", description: "The time it takes a feature engineer to stand up a localized vector database environment." },
            { name: "Egress Cloud Pricing", description: "The punishing financial metric you are hired to completely eliminate through localized topologies." }
        ],
        first90Days: {
            day30: "Execute a FinOps audit on the current hyperscaler footprint, identifying immediate cloud egress hemorrhage.",
            day60: "Stand up the v1 Internal Developer Platform (IDP), granting feature engineers self-serve access to quantized SLMs.",
            day90: "Evict a massive API dependency, migrating 40% of standard inferences to local CPU/Edge devices, saving $50k+ MRR."
        },
        interviewAntiPatterns: [
            "Over-indexing on AWS/GCP proprietary managed services rather than open-weight, hardware-agnostic deployments.",
            "Displaying an inability to calculate the exact hardware VRAM required to load a quantized 8B parameter model.",
            "Focusing on microservice orchestration (K8s) without understanding model weight orchestration."
        ],
        marketEconomics: {
        "salary": "$190,000 - $280,000",
        "growth": "+190% YoY",
        "gap": "Cloud deployment is automated. Deploying custom SLMs to edge devices to bypass massive API egress costs is the massive ROI play."
},
        faqs: [
        {
                "question": "Why are Small Language Models (SLMs) important?",
                "answer": "To escape the crushing API token costs of GPT-4, you deploy 8B parameter models locally. This requires extreme FinOps architecture."
        },
        {
                "question": "What is an Internal Developer Platform (IDP)?",
                "answer": "A unified infrastructure layer that abstracts the complexity of RAG, Vector DBs, and Edge deployment away from standard feature engineers."
        }
]
    },
    {
        slug: 'agentic-devops-engineer',
        title: 'Agentic DevOps Engineer',
        manifestoTitle: 'The Automation Enforcer',
        label: 'The Enforcer',
        iconName: 'ServerCrash',
        color: 'orange',
        domain: 'Engineering & Infrastructure',
        description: 'Evolve past standard CI/CD. Build the MLOps and LLMOps infrastructure required to test, cache, and deploy reasoning LLM pipelines at immense scale without latency collapse.',
        manifesto: [
            'Traditional DevOps focuses on deterministic build pipelines. In 2026, DevOps must handle probabilistic model weights, multi-gigabyte vector databases, and real-time prompt registries.',
            'As an Agentic DevOps Engineer, you build semantic caching layers to prevent redundant, expensive API calls. You deploy shadow models to test new prompts against baseline metrics.',
            'You are the reason an agentic application can survive a massive DDoS or hallucination loop without crashing the entire Kubernetes cluster.'
        ],
        glossaryTerms: ['rag', 'large-language-model', 'ai-inference', 'dora-metrics', 'orchestration-debt'],
        curriculumKeywords: ['devops', 'mlops', 'llmops', 'caching', 'infrastructure'],
        seoMeta: 'Become an Agentic DevOps Engineer. Build LLMOps pipelines, semantic caching arrays, and scaling infrastructure for enterprise AI inference.',
        seoKeywords: ['Agentic DevOps', 'LLMOps', 'MLOps pipelines', 'Semantic Caching AI', 'AI Infrastructure Scaling', 'Vector Database DevOps'],
        primaryMetrics: [
            { name: "Semantic Cache Hit Rate", description: "The percentage of AI queries instantly resolved by caching rather than requiring a fresh inference compute layer." },
            { name: "Model Deployment TTI", description: "Time-to-Implement for pushing a newly fine-tuned model weight across a global distributed edge network." },
            { name: "Shadow State Variance", description: "The difference in output quality between production models and newly staged beta pipelines." }
        ],
        first90Days: {
            day30: "Audit the current deployment infrastructure to measure exactly how painfully slow rolling out multi-gigabyte vector indexes currently is.",
            day60: "Engineer a high-throughput Semantic Caching gateway (e.g., Redis-backed) to trap redundant identical LLM queries.",
            day90: "Implement an automated LLM shadow-deployment pipeline that scores experimental prompt logic against production baseline in real time."
        },
        interviewAntiPatterns: [
            "Applying legacy CI/CD unit testing mentalities (pass/fail) to non-deterministic semantic models.",
            "Not understanding the extreme memory constraints or batch-processing math required in GPU inference.",
            "Ignoring the specific network topography required for massive RAG retrieval architectures."
        ],
        marketEconomics: {
        "salary": "$180,000 - $300,000",
        "growth": "+160% YoY",
        "gap": "Standard CI/CD fails against non-deterministic AI weights. Architecting LLMOps caching structures is a mandatory transition."
},
        faqs: [
        {
                "question": "What is Semantic Caching?",
                "answer": "Intercepting redundant identical LLM queries at the gateway (e.g., via Redis) to instantly bypass expensive model inference computations."
        },
        {
                "question": "How do you deploy model weights?",
                "answer": "Unlike standard codebase deployment, model weights are massive binaries requiring distinct distribution architectures (like BitTorrent-style edge delivery)."
        }
]
    },
    {
        slug: 'cloud-repatriation-architect',
        title: 'Cloud Repatriation Architect',
        manifestoTitle: 'The Bare Metal Sovereign',
        label: 'The Sovereign',
        iconName: 'HardDrive',
        color: 'indigo',
        domain: 'Engineering & Infrastructure',
        description: 'Execute the strategic reversal of cloud logic. Move high-volume LLM inference and vector search back to on-premise bare metal to collapse runaway hyperscaler API margins.',
        manifesto: [
            'The cloud era operated on the assumption that hyperscalers could run workloads cheaper than on-prem. In the era of AI and GPU-heavy inferencing, this economics equation has completely inverted.',
            'Running millions of token inferences per second on AWS creates an unsustainable monthly tax. The Repatriation Architect designs hybrid bare-metal GPU clusters that drastically cut costs.',
            'You are a master of hardware economics, GPU utilization rates, and sovereign data laws (EU AI Act).'
        ],
        glossaryTerms: ['ai-cogs', 'ai-inference', 'technical-debt', 'cost-of-predictivity'],
        curriculumKeywords: ['cloud', 'finops', 'hardware', 'gpu', 'economics', 'repatriation'],
        seoMeta: 'The Cloud Repatriation Architect role. Execute the strategic migration of high-volume LLM inference to bare-metal GPU clusters to collapse massive FinOps costs.',
        seoKeywords: ['Cloud Repatriation', 'Bare Metal GPU', 'FinOps AI Pricing', 'On-premise LLM inference', 'Cloud Exit Strategy AI'],
        primaryMetrics: [
            { name: "Unit Inference Margin", description: "The precise dollar cost difference of generating 1M tokens locally vs on Azure/AWS." },
            { name: "GPU Utilization Density", description: "The efficiency metric of ensuring localized hardware is running 24/7 rather than idling." },
            { name: "Egress Neutrality", description: "Eliminating the ransom payments required to pull massive vector data stores out of walled hyperscalers." }
        ],
        first90Days: {
            day30: "Perform a brutal autopsy on the AWS/GCP bill, isolating exactly which managed AI services are functioning as hidden taxation.",
            day60: "Design the initial Bare-Metal proving ground—a hyper-localized cluster running a dedicated, high-density batch inference pipeline.",
            day90: "Migrate the heaviest, most predictable background batch AI workload off the cloud, securing an immediate 60% margin improvement."
        },
        interviewAntiPatterns: [
            "Failing to mathematically articulate exactly at what token-volume scale the bare-metal CapEx line crosses the Cloud OpEx line.",
            "Being afraid of 'rack space and cooling' realities of physical data center logistics.",
            "Advocating for 100% repatriation rather than a strategic hybrid architecture."
        ],
        marketEconomics: {
        "salary": "$240,000 - $380,000",
        "growth": "+140% YoY",
        "gap": "Hyperscaler dependency is bleeding enterprise margin. Architects who can mathematically justify the CapEx of Bare-Metal GPU clusters are incredibly valuable."
},
        faqs: [
        {
                "question": "When does Cloud Repatriation make sense?",
                "answer": "When your continuous batch-inference volume creates an OpEx (API/Cloud bill) that exceeds the 36-month CapEx depreciation of raw server racks."
        },
        {
                "question": "Is on-premise coming back?",
                "answer": "Yes. Due to data sovereignty laws (EU AI Act) and catastrophic inference costs, hybrid-local architecture is the definitive 2026 enterprise strategy."
        }
]
    },

    // --- Security & Governance ---
    {
        slug: 'ai-security-fiduciary',
        title: 'AI Security & Fiduciary (CISO)',
        manifestoTitle: 'The Protector of the Weights',
        label: 'The Protector',
        iconName: 'LockKeyhole',
        color: 'red',
        domain: 'Security & Governance',
        description: 'Protect the enterprise against zero-day autonomous threats. Map Post-Quantum cryptographic deprecation costs, isolate AI sandbox privileges, and defend violently against multi-modal vectors.',
        manifesto: [
            'An AI Agent with database read/write access is the greatest security vulnerability in the history of software. Legacy WAFs and static analysis tools cannot defend against multi-modal Prompt Injections.',
            'The AI Security Fiduciary operates at the board level. You are responsible for isolating AI reasoning sandboxes, enforcing deterministic privilege boundaries, and defending against data poisoning.',
            'Beyond active defense, you must accurately model the financial liability of AI. If an agent hallucinates a contract, you are the one explaining the blast radius to the CFO.'
        ],
        glossaryTerms: ['guardrails', 'technical-debt', 'orchestration-debt', 'innovation-tax', 'ai-assisted-development'],
        curriculumKeywords: ['security', 'compliance', 'governance', 'risk', 'board'],
        seoMeta: 'The 2026 AI Security Fiduciary path. Defend against multi-modal prompt injections, secure agentic privileges, and manage enterprise AI hallucination liability.',
        seoKeywords: ['AI Security', 'AI CISO', 'Agentic Security', 'Prompt Injection Defense', 'AI Hallucination Liability', 'Enterprise AI Governance'],
        primaryMetrics: [
            { name: "Agentic Blast Radius", description: "The quantified max-liability vector if an autonomous system is successfully hijacked via prompt-injection." },
            { name: "Zero-Trust Inference Threshold", description: "The degree to which the LLM generation layer is cleanly amputated from the data execution layer." },
            { name: "Data Poisoning Velocity", description: "How fast an adversarial prompt injected into a RAG cluster contaminates the wider enterprise logic." }
        ],
        first90Days: {
            day30: "Audit every internal LLM wrapper for direct database write-permissions and instantly aggressively revoke any agentic autonomy.",
            day60: "Red-team the RAG pipelines. Prove to the board how easily an external actor can poison an internal knowledge base.",
            day90: "Deploy an absolute deterministic firewall between probabilistic text generation and state-altering API execution (The Agentic Gap)."
        },
        interviewAntiPatterns: [
            "Treating a 'Prompt Injection' like a classic SQL Injection that can be easily solved with a Regex filter.",
            "Overcommitting to algorithmic detection models instead of deterministic sandboxing infrastructure.",
            "Talking about theoretical AI doom rather than actionable compliance frameworks like the EU AI Act."
        ],
        marketEconomics: {
        "salary": "$250,000 - $450,000",
        "growth": "+220% YoY",
        "gap": "WAF rules do not stop Prompt Injections. CISOs who understand the blast radius of autonomous agent hijacking dictate board strategy."
},
        faqs: [
        {
                "question": "Wait, what exactly is the Agentic Blast Radius?",
                "answer": "The mathematical calculation of maximum financial and data loss if an autonomous agent is hijacked via malicious prompt injection and executes unverified APIs."
        },
        {
                "question": "Can regular security tools protect LLMs?",
                "answer": "No. They cannot parse semantic hallucination or stochastic prompt bypasses. You must build deterministic sandboxes around probabilistic outputs."
        }
]
    },
    {
        slug: 'ai-governance-director',
        title: 'AI Governance Director',
        manifestoTitle: 'The Audit General',
        label: 'The Auditor',
        iconName: 'Shield',
        color: 'slate',
        domain: 'Security & Governance',
        description: 'Ensure institutional compliance natively. Navigate the EU AI Act liabilities, execute algorithmic bias auditing, and dictate acceptable risk parity for all generative features.',
        manifesto: [
            'Deploying AI without governance in 2026 is corporate suicide. The legal liabilities for autonomous hallucinations and synthetic copyright infringement run into the billions.',
            'The AI Governance Director ensures that every deployed model meets strict regulatory, ethical, and legal thresholds like the EU AI Act.',
            'You do not just write policies; you enforce them via automated pipelines that halt code deployments if algorithmic drift or bias is detected.'
        ],
        glossaryTerms: ['guardrails', 'technical-debt', 'ai-assisted-development'],
        curriculumKeywords: ['governance', 'compliance', 'legal', 'risk', 'board'],
        seoMeta: 'Transition into an AI Governance Director. Navigate EU AI Act liabilities, execute deep AI bias auditing, and construct deterministic compliance pipelines.',
        seoKeywords: ['AI Governance', 'EU AI Act Compliance', 'AI Risk Parity', 'Algorithmic Bias Auditing', 'Enterprise AI Legal Risk'],
        primaryMetrics: [
            { name: "EU AI Act Liability Quotient", description: "The percentage of deployed shadow pipelines violating High-Risk categorization." },
            { name: "Automated Bias Drift", description: "The statistical measurement of a model degrading into discriminatory or hallucinatory output over time." },
            { name: "Governance Deployment Block Rate", description: "The number of high-risk generative prototypes successfully barred from reaching production state." }
        ],
        first90Days: {
            day30: "Establish the definitive mapping of all High-Risk AI categorizations under the EU AI Act across the entire product surface.",
            day60: "Force engineering implementation of mandatory Data Lineage tagging, ensuring every output can be definitively traced to its prompt-source.",
            day90: "Ratify the Enterprise AI Constitution Board, granting absolute veto power to the Governance Director prior to any Agentic deployment."
        },
        interviewAntiPatterns: [
            "Discussing ethics purely in abstraction rather than translating ethics into executable code blocks and hard liability risk.",
            "Evidencing no knowledge of global regulatory frameworks like the evolving mandates of the EU AI Act.",
            "Believing governance relies on 'asking employees to be careful' instead of implementing hard system guardrails."
        ],
        marketEconomics: {
        "salary": "$200,000 - $350,000",
        "growth": "+280% YoY",
        "gap": "AI policy writing is cheap. Engineering automated algorithmic bias pipelines that halt deployment per the EU AI Act commands massive value."
},
        faqs: [
        {
                "question": "What is the EU AI Act?",
                "answer": "The global standard for AI regulation. If you deploy a \"High-Risk\" workflow without strict algorithmic auditing, fines can reach 7% of global turnover."
        },
        {
                "question": "How do I enforce governance?",
                "answer": "By removing humans. You implement automated Data Lineage tagging and compliance check-gates directly into the git commit/CI phase."
        }
]
    },
    {
        slug: 'post-qa-verification-engineer',
        title: 'Post-QA Verification Engineer',
        manifestoTitle: 'The Probability Validator',
        label: 'The Validator',
        iconName: 'TestTube',
        color: 'fuchsia',
        domain: 'Security & Governance',
        description: 'Legacy unit testing is broken by non-deterministic models. Build dynamic Evaluation (Evals) test suites using frontier LLM-as-a-Judge architectures to verify agent behavior at scale.',
        manifesto: [
            'You cannot write a "True/False" unit test for an LLM that might output 100 different valid variations of a paragraph. Traditional QA is dead.',
            'The Post-QA Verification Engineer builds robust "Eval" frameworks. You use massive frontier models to judge and score the outputs of your smaller production models in real time.',
            'You verify not just code functionality, but "Vibe," tone, brand safety, and hallucination containment. Your test suites run on GPUs, not just CPUs.'
        ],
        glossaryTerms: ['cost-of-predictivity', 'orchestration-debt', 'rag', 'technical-debt'],
        curriculumKeywords: ['qa', 'testing', 'evals', 'verification', 'governance'],
        seoMeta: 'Become a Post-QA AI Verification Engineer. Build dynamic Evaluation (Evals) suites using LLM-as-a-Judge architecture to verify non-deterministic outputs.',
        seoKeywords: ['AI QA Engineering', 'LLM Evals', 'LLM as a judge', 'AI Verification', 'Non-deterministic testing', 'Generative QA'],
        primaryMetrics: [
            { name: "LLM-as-a-Judge Convergence", description: "The statistical consistency of the Eval model scoring the target model." },
            { name: "Hallucination Capture Rate", description: "The percentage of fabricated facts successfully trapped by the Eval harness before reaching the user." },
            { name: "Eval Compute Overhead", description: "The financial cost of running massive evaluation models against production outputs." }
        ],
        first90Days: {
            day30: "Deprecate legacy boolean-heavy unit testing for any feature relying on generative outputs, replacing them with dynamic context tests.",
            day60: "Deploy a frontier LLM-as-a-Judge automated pipeline that grades output tone, brand alignment, and truthfulness on every commit.",
            day90: "Reduce manual QA overhead by 80% by proving the automated Eval architecture holds zero false-positives under stress load."
        },
        interviewAntiPatterns: [
            "Proposing standard Cypress or Selenium tests to govern raw generative text outputs.",
            "Failing to articulate how 'LLM-as-a-Judge' architectures are uniquely distinct from traditional programmatic assertions.",
            "Ignoring the exorbitant cost mathematics of running massive model Evals on every single PR commit."
        ],
        marketEconomics: {
        "salary": "$160,000 - $250,000",
        "growth": "+150% YoY",
        "gap": "Manual unit testing is defunct for LLMs. Engineering dynamic LLM-as-a-Judge Eval harnesses is the new verification paradigm."
},
        faqs: [
        {
                "question": "Why don't normal unit tests work?",
                "answer": "Because generative models are non-deterministic. A Boolean True/False assertion fails when an LLM returns 10 valid but uniquely phrased responses."
        },
        {
                "question": "What is LLM-as-a-Judge?",
                "answer": "Using a massive frontier model (like GPT-4) to read, score, and grade the outputs of your cheaper production models against a rubric."
        }
]
    },
    {
        slug: 'shadow-ai-remediation-specialist',
        title: 'Shadow AI Remediation Specialist',
        manifestoTitle: 'The Hunter',
        label: 'The Hunter',
        iconName: 'Search',
        color: 'yellow',
        domain: 'Security & Governance',
        description: 'Track, diagnose, and intercept unauthorized API pipelines where employees are leaking enterprise intellectual property to public frontier models.',
        manifesto: [
            '"Shadow AI" is the shadow IT nightmare on steroids. Employees circumventing governed tools to paste highly-secure trade secrets into public LLMs is an existential crisis.',
            'As a Shadow AI Remediation Specialist, you deploy network inspection, endpoint monitoring, and cultural engineering to hunt down these unauthorized neural pipelines.',
            'You do not just block the tools; you provide governed, high-utility internal alternatives that employees actually want to use.'
        ],
        glossaryTerms: ['guardrails', 'technical-debt', 'ai-assisted-development'],
        curriculumKeywords: ['security', 'governance', 'risk', 'compliance'],
        seoMeta: 'Master Shadow AI Remediation. Hunt down unauthorized API pipelines, secure Enterprise IP leaks, and govern employee AI utilization patterns.',
        seoKeywords: ['Shadow AI', 'AI Cyber Hunt', 'Enterprise IP Leak AI', 'Unauthorized LLM use', 'AI Security Governance'],
        primaryMetrics: [
            { name: "Dark IP Leakage Rate", description: "The volume of proprietary codebase and strategy documentation fed into public (un-opted-out) foundation networks." },
            { name: "Unauthorized Pipeline Interception", description: "The speed at which a new rogue employee department API gateway is detected and forcefully terminated." },
            { name: "Internal Governed Utility Score", description: "The adoption rate of the official internal AI tools provided to offset Shadow AI needs." }
        ],
        first90Days: {
            day30: "Run a massive, silent network packet audit to locate exactly where engineering teams are circumventing the proxy to hit OpenAI/Anthropic APIs natively.",
            day60: "Execute 'The Purge'—terminating unauthorized webhook integrations and shadow slack-bots.",
            day90: "Deploy the 'Safe Haven' internal gateway, provisioning governed, enterprise-grade, zero-retention LLM access to immediately replace the banned workflows."
        },
        interviewAntiPatterns: [
            "Believing the solution is simply to 'ban ChatGPT' without providing an enterprise-grade internal equivalent.",
            "Misunderstanding the difference between Enterprise API retention models and standard consumer GUI data usage rights.",
            "Underestimating the sheer ingenuity developers will use to bypass network blocks to get their AI tools back."
        ],
        marketEconomics: {
        "salary": "$180,000 - $280,000",
        "growth": "+175% YoY",
        "gap": "Blocking ChatGPT is easy. Architecting internal, zero-retention safe havens to stop Dark IP leakage is incredibly complex."
},
        faqs: [
        {
                "question": "What is Shadow AI?",
                "answer": "Employees bypassing governed IT systems to paste highly proprietary enterprise data directly into public foundational models."
        },
        {
                "question": "How do we stop it?",
                "answer": "Not by just blocking IP addresses. You must deploy an enterprise-tier internal gateway that provides the utility employees want, wrapped in zero-retention compliance."
        }
]
    },

    // --- Data & AI Foundations ---
    {
        slug: 'synthetic-data-architect',
        title: 'Synthetic Data Architecture',
        manifestoTitle: 'The Foundation Anchoring Truth',
        label: 'The Foundation',
        iconName: 'Database',
        color: 'blue',
        domain: 'Data & AI Foundations',
        description: 'The era of human organic data is exhausted. Scale the walls of Model Collapse by building massive Synthetic Data generation pipelines and feeding domain-locked fine-tuning regimens.',
        manifesto: [
            'The internet has been scraped dry. AI models can no longer achieve exponential leaps simply by ingesting more public data. The future belongs to those who generate pristine, high-fidelity Synthetic Data.',
            'As a Synthetic Data Architect, you build pipelines that use frontier models to generate adversarial training scenarios, edge-case evaluations, and domain-locked knowledge graphs.',
            'You are the vanguard against "Model Collapse"—the cognitive inbreeding that occurs when AI trains on AI-generated sludge. You establish the "ground truth" anchors that keep the enterprise models sane.'
        ],
        glossaryTerms: ['rag', 'large-language-model', 'ai-inference', 'cost-of-predictivity', 'ai-cogs'],
        curriculumKeywords: ['data', 'synthetic', 'rag', 'fine-tuning', 'models'],
        seoMeta: 'Become a Synthetic Data Architect. Overcome the AI data wall by building high-fidelity synthetic pipelines and defending enterprise AI against Model Collapse.',
        seoKeywords: ['Synthetic Data', 'Data Architecture', 'Model Collapse', 'AI Fine-tuning', 'Knowledge Graphs', 'RAG pipelines', 'AI Data Wall'],
        primaryMetrics: [
            { name: "Synthetic Viability Quotient", description: "The mathematical threshold where synthetic data matches or exceeds organic human distribution variance." },
            { name: "Dimensional Mode Collapse", description: "Tracking the degradation of diversity inside the generated corpus over subsequent generation generations." },
            { name: "Generation Run Economics", description: "The compute cost of generating 1TB of high fidelity synthetic grounding data vs manual organic curation." }
        ],
        first90Days: {
            day30: "Identify the absolute most constrained data bottleneck in the current enterprise machine learning pipeline and size the deficit.",
            day60: "Engineer a multi-agent adversarial generation loop where one LLM generates synthetic cases and a second critic LLM ruthlessly prunes anomalous or hallucinated drift.",
            day90: "Inject the verified synthetic corpus into the primary fine-tuning pipeline, demonstrating an overwhelming gain in model capability at edge cases."
        },
        interviewAntiPatterns: [
            "Failing to understand the concept of 'Model Collapse' (training models on model output recursively).",
            "Viewing data engineering purely as a storage problem (data lakes) rather than an algorithmic intelligence pipeline.",
            "Believing LLMs are magic and generate 'new insight' rather than simply interpolating their training boundaries."
        ],
        marketEconomics: {
        "salary": "$200,000 - $330,000",
        "growth": "+290% YoY",
        "gap": "Organic data is exhausted. Generating high-fidelity semantic data pipelines to bypass the Model Collapse wall is the next frontier."
},
        faqs: [
        {
                "question": "What is Model Collapse?",
                "answer": "When an AI model trains on data generated by an AI model, the dimensional distribution collapses, and the model degrades into hallucinating sludge."
        },
        {
                "question": "Why do we need synthetic data?",
                "answer": "For edge cases. You cannot naturally find enough organic data representing a 0.01% anomaly, so you programmatically generate it to fine-tune the model."
        }
]
    },
    {
        slug: 'prompt-engineering-lead',
        title: 'System-2 Prompt Engineering Lead',
        manifestoTitle: 'The Cognitive Sculptor',
        label: 'The Sculptor',
        iconName: 'TerminalSquare',
        color: 'teal',
        domain: 'Data & AI Foundations',
        description: 'Evolve past basic text manipulation. Architect profound System-2 multi-shot contextual chains of thought, dynamic registries, and precise model conditioning.',
        manifesto: [
            'The naive "Prompt Engineer" of 2023 is obsolete. In 2026, the Prompt Engineering Lead architects massive, conditional logic trees that induce deep System-2 reasoning in frontier models.',
            'You manage Prompt Registries the same way legacy developers managed GitHub repositories. Your prompts are version-controlled, tested algorithmically, and A/B tested for token-margin efficiency.',
            'You know exactly which phrasing triggers an LLM to hallucinate and how to cryptographically structure context windows using few-shot, step-by-step logic.'
        ],
        glossaryTerms: ['ai-inference', 'rag', 'large-language-model'],
        curriculumKeywords: ['prompt', 'training', 'ai', 'data', 'models'],
        seoMeta: 'Become a 2026 System-2 Prompt Engineering Lead. Architect multi-shot logic, manage version-controlled prompt registries, and enforce LLM cognitive loops.',
        seoKeywords: ['Prompt Engineering Lead', 'System-2 Prompting', 'Prompt Registries', 'LLM Context Windows', 'Chain of Thought Architect'],
        primaryMetrics: [
            { name: "Token Compression Ratio", description: "The density of systemic prompt instructions relative to context window utilization." },
            { name: "System-2 Activation Threshold", description: "The statistical certainty that a prompt forces the model into deep reasoning rather than stochastic parroting." },
            { name: "Prompt Regression Rate", description: "The frequency of breakages occurring across the stack when a new foundational model update deprecates prompt logic." }
        ],
        first90Days: {
            day30: "Audit the codebase and extract every single hardcoded string prompt into a unified, version-controlled Prompt Registry.",
            day60: "Restructure critical logic prompts using few-shot formatting and XML delimiting, eliminating massive prompt-injection vulnerabilities.",
            day90: "Execute an A/B test proving that a deeply optimized System-2 prompt architecture generates 40% less token waste while improving precision."
        },
        interviewAntiPatterns: [
            "Showing off 'cool tricks' to bypass filters rather than demonstrating programmatic, version-controlled architecture.",
            "Displaying an inability to differentiate between zero-shot, few-shot, and Chain-of-Thought (CoT) structures deeply.",
            "Demonstrating no awareness of the token-economics (financial cost) associated with their massive prompts."
        ],
        marketEconomics: {
        "salary": "$180,000 - $300,000",
        "growth": "+230% YoY",
        "gap": "Basic prompt writing is dead. Architecting System-2 multi-shot contextual chains and managing Prompt Registries is engineering."
},
        faqs: [
        {
                "question": "Isn't Prompt Engineering just talking to an AI?",
                "answer": "No. Large-scale systemic prompting requires programming conditional logic trees, managing token-compression ratios, and executing algorithmic A/B testing."
        },
        {
                "question": "What is a Prompt Registry?",
                "answer": "Treating structural prompts like code repositories. Version control, latency tracing, and dependency mapping for every system-level LLM call."
        }
]
    },
    {
        slug: 'agentic-knowledge-architect',
        title: 'Agentic Knowledge Architect',
        manifestoTitle: 'The Silo Breaker',
        label: 'The Silo Breaker',
        iconName: 'Library',
        color: 'rose',
        domain: 'Data & AI Foundations',
        description: 'Legacy Data Engineers built warehouses. Knowledge Architects build vector graphs. Connect disparate organizational silos into a unified semantic space capable of feeding Agents.',
        manifesto: [
            'An AI Agent is only as effective as the semantic context it can parse. Traditional relational SQL databases are invisible, useless noise to an autonomous agent.',
            'The Agentic Knowledge Architect is responsible for ingesting PDFs, Slack messages, video transcripts, and codebases into highly-structured Vector Databases.',
            'You optimize the chunking strategies, embedding logic, and hybrid search retreivals that ensure when an enterprise LLM executes a query, it finds the ground truth instantly without fail.'
        ],
        glossaryTerms: ['rag', 'large-language-model', 'ai-inference', 'technical-debt'],
        curriculumKeywords: ['data', 'rag', 'vector', 'embedding', 'knowledge graph'],
        seoMeta: 'Evolve into an Agentic Knowledge Architect. Design advanced RAG pipelines, optimize semantic vector chunking, and feed autonomous agents with enterprise ground truth.',
        seoKeywords: ['Knowledge Architect AI', 'Vector Database Architecture', 'Advanced RAG pipelines', 'Enterprise Data Embeddings', 'AI Data Engineering'],
        primaryMetrics: [
            { name: "Semantic Retrieval Accuracy (@K)", description: "The exact probability the vector search successfully yields the required context chunk on the first extraction." },
            { name: "Chunk Entropy Loss", description: "The amount of critical contextual meaning severed when a document is sliced into tokenized embedding chunks." },
            { name: "Embedding Overlap Decay", description: "The clustering failure rate of the vector space representing disparate domain knowledge natively." }
        ],
        first90Days: {
            day30: "Execute a massive mapping constraint of all the most vital unstructured enterprise data that is currently unreachable by inference pipelines.",
            day60: "Stand up the v1 Vector Pipeline, instituting highly semantic metadata tagging and parent-child associative chunking over naive character splitting.",
            day90: "Deploy the Hybrid Search architecture (combining sparse keyword and dense vector), proving 99% retrieval accuracy to the Agentic orchestrators."
        },
        interviewAntiPatterns: [
            "Relying completely on simple recursive character-splitting for RAG without understanding the lethal effect on semantic meaning.",
            "Assuming RAG is a solved problem that just requires buying Pinecone and dropping text into it.",
            "Demonstrating zero understanding of 'Hybrid Search' and relying purely on dense cosine similarity for strict part-number inquiries."
        ],
        marketEconomics: {
        "salary": "$190,000 - $290,000",
        "growth": "+250% YoY",
        "gap": "Legacy ETL implies tabular data. Architecting hybrid semantic vector graphs determines if RAG outputs hallucinate or succeed."
},
        faqs: [
        {
                "question": "Why do RAG pipelines fail?",
                "answer": "Because of naive chunking strategies that destroy semantic meaning before the text is even embedded into the vector database."
        },
        {
                "question": "What is Hybrid Search?",
                "answer": "Combining standard sparse keyword search (BM25) with dense vector search (Cosine Similarity) over the Knowledge Graph to achieve absolute deterministic retrieval."
        }
]
    },
    {
        slug: 'chief-ai-officer',
        title: 'Chief AI Officer (CAIO)',
        manifestoTitle: 'The Boardroom Fiduciary',
        label: 'CAIO',
        iconName: 'LineChart',
        color: 'emerald',
        domain: 'Product & Economics',
        description: 'The highest echelon of enterprise AI accountability. The CAIO abstracts technical implementations into definitive board-level ROI, regulatory guarantees, and margin expansion.',
        manifesto: [
            "The enterprise does not care about your parameter counts or context windows. The board only measures AI through dual optics: Net-Margin Expansion and Total Enterprise Risk Abatement.",
            "If an AI deployment cannibalizes headcount without mathematically dropping operational drag, it is a failed experiment. The CAIO operates as the fiduciary bridge between abstract mathematics and hard capital."
        ],
        glossaryTerms: ['agentic-process-automation', 'annualized-productivity-per-engineer', 'human-in-the-loop-hitl', 'ai-trust-risk-and-security-management-ai-trism', 'moat-erosion'],
        curriculumKeywords: ['Product', 'Strategy', 'Economics', 'Metrics', 'Governance'],
        seoMeta: 'Transition to Chief AI Officer (CAIO). Learn the executive framework, board metrics, and fiduciary mandates required to govern enterprise AI correctly.',
        seoKeywords: ['Chief AI Officer', 'CAIO', 'VP of AI', 'AI Executive Governance', 'Enterprise AI ROI', 'AI Fiduciary'],
        primaryMetrics: [
            { name: 'Enterprise Margin Velocity', description: 'The absolute speed at which implemented AI models drop execution costs against total headcount.' },
            { name: 'Systemic Compliance SLA', description: 'Deterministic proof that agentic workflows execute strictly within authorized geographic and data sovereignty boundaries.' },
            { name: 'Compute Capital Efficiency', description: 'Ratio of Inference Cloud Spend relative to top-line revenue generated by that exact compute.' }
        ],
        first90Days: {
            day30: "Audit all isolated Shadow AI deployments. Centralize compliance and establish the hard deterministic boundary layer for the organization.",
            day60: "Execute rigorous Cost-of-Compute audits. Destroy high-parameter vanity architectures and shift infrastructure to quantized SLMs where appropriate.",
            day90: "Present the first Fiduciary AI Ledger to the board: absolute proof of positive margin delta resulting from targeted Agentic Process Automation."
        },
        interviewAntiPatterns: [
            "Discussing favorite LLMs instead of defining API infrastructure constraints and regulatory bounds.",
            "Failing to articulate how to calculate Annualized Productivity per Engineer (APER).",
            "Pitching 'AI features' instead of 'Human-Replacement Capital Arbitrage'."
        ],
        marketEconomics: {
            salary: '$350,000 - $600,000+',
            growth: '+450% YoY',
            gap: "Technical visionaries are easily localized, but Board-ready fiduciaries who can prove mathematical risk abatement command unparalleled structural equity."
        },
        faqs: [
            { question: "What is the primary role of a Chief AI Officer?", answer: "A CAIO is not a lead engineer; they are a capital risk fiduciary. Their job is to ensure AI deployments mathematically expand enterprise margins without triggering regulatory, data, or hallucination-based liabilities." },
            { question: "How does a CAIO differ from a CTO?", answer: "While the CTO manages standard SaaS infrastructure and uptime, the CAIO manages non-deterministic risk. The CAIO focuses purely on the statistical outputs, compute economics, and sovereign alignment of autonomous models." },
            { question: "What are the core metrics for a Chief AI Officer?", answer: "CAIOs are measured by Compute Efficiency Ratios, APER (Annualized Productivity per Engineer), and the quantifiable reduction of human-execution latency in core workflows." }
        ]
    },
    {
        slug: 'rag-systems-architect',
        title: 'RAG Systems Architect',
        manifestoTitle: 'The Context Engineer',
        label: 'RAG Architect',
        iconName: 'Database',
        color: 'sky',
        domain: 'Data & AI Foundations',
        description: 'Prompt engineering is dead. The RAG Systems Architect defines high-dimensional semantic search, deterministic retrieval pipelines, and context-injection routing.',
        manifesto: [
            "Models do not hallucinate; they simply execute outside of your supplied contextual truth. The RAG Architect enforces truth.",
            "Vector mathematics is the new relational algebra. A model is only as intelligent as the data retrieval pipeline feeding its immediate context window."
        ],
        glossaryTerms: ['retrieval-augmented-generation-rag', 'semantic-chunking', 'vector-database-vdb', 'hallucination-entropy'],
        curriculumKeywords: ['RAG', 'Vector', 'Prompt', 'Search', 'Embedding', 'Data'],
        seoMeta: 'Become a Retrieval-Augmented Generation (RAG) Systems Architect. Master vector databases, semantic chunking, and deterministic knowledge injection.',
        seoKeywords: ['RAG Engineer', 'Retrieval-Augmented Architect', 'Vector Database Engineer', 'LLM Search Engineer', 'AI Data Pipeline'],
        primaryMetrics: [
            { name: 'Recall Precision Tolerance', description: 'Percentage of retrieved chunks that carry absolute deterministic relevancy to the specific query intent.' },
            { name: 'Chunk Density Ratio', description: 'Balancing token count per semantic vector to maximize hitting the context limit while minimizing latency.' },
            { name: 'Retrieval Latency (ms)', description: 'Hard algorithmic measurement of the database roundtrip before the LLM inference step begins.' }
        ],
        first90Days: {
            day30: "Audit existing token limits and pipeline latency. Migrate legacy keyword search functions into foundational dense-vector retrieval.",
            day60: "Introduce advanced Re-ranking and semantic chunking. Force the pipeline to algorithmically isolate specific enterprise truths.",
            day90: "Finalize a zero-trust grounding boundary. Ensure the LLM fundamentally refuses execution if the vector pipeline returns a null semantic threshold."
        },
        interviewAntiPatterns: [
            "Believing 'changing the prompt' is the solution to systemic model inaccuracies.",
            "Applying naive fixed-length chunking to dense financial or technical enterprise documents.",
            "Inability to explain the difference between Cosine Similarity and Dot Product in embedding evaluation."
        ],
        marketEconomics: {
            salary: '$185,000 - $285,000',
            growth: '+320% YoY',
            gap: "Anyone can call the OpenAI API. Very few can architect a deterministic sub-50ms retrieval pipeline that strictly bounds a model to corporate IP."
        },
        faqs: [
            { question: "What does a RAG Engineer actually do?", answer: "They build the pipeline that intercepts a user query, instantly searches massive internal corporate databases for the correct answer, and heavily feeds that correct data into the AI so the AI doesn't guess." },
            { question: "Why is RAG replacing prompt engineering?", answer: "Prompt engineering relies on the model's internal, static training data (which gets outdated and hallucinates). RAG overrides the model with live, dynamically injected facts." },
            { question: "Is RAG a long-term career?", answer: "Yes. As context windows expand, the problem shifts from 'fitting data' to 'retrieving exactly the right data efficiently' without incurring insane compute costs." }
        ]
    }
];