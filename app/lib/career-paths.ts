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
};

export const CAREER_PATHS: CareerPath[] = [
    // --- Product & Economics ---
    {
        slug: 'ai-product-economist',
        title: 'AI Product Economist',
        manifestoTitle: 'The Visionary Fiduciary',
        label: 'The Visionary',
        iconName: 'Target',
        color: 'purple',
        domain: 'Product & Economics',
        description: 'Stop prioritizing features by "vibe." Evaluate the exact API token-cost-to-revenue ratio for generative features and govern the product roadmap as a fiduciary asset.',
        manifesto: [
            'Product Managers who write user stories for simple CRUD apps are being rendered obsolete by code-generation LLMs. To survive the 2026 transition, PMs must evolve into Product Economists.',
            'The AI Product Economist models the financial viability of AI features at the atomic inference level. If a feature costs $0.02 in API calls but only generates $0.01 in user value, you are shipping negative margins at scale.',
            'Your job is to understand the AI Unit Economics Benchmark (AUEB), determine whether to use expensive frontier APIs vs. cheap edge SLMs, and validate that AI product expansion aligns with Enterprise Valuation.'
        ],
        glossaryTerms: ['ai-cogs', 'innovation-tax', 'cost-of-delay', 'technical-insolvency-date', 'ai-assisted-development', 'dora-metrics'],
        curriculumKeywords: ['finops', 'pricing', 'economics', 'roi', 'cogs'],
        seoMeta: 'Transition to an AI Product Economist. Master AI Unit Economics, inference cost modeling, and govern the generative product roadmap as a fiduciary asset.',
        seoKeywords: ['AI Product Economist', 'AI PM', 'AI product management', 'AI unit economics', 'LLM feature pricing', 'API tracking', 'AUEB']
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
        seoKeywords: ['Generative UI', 'AI UX Design', 'Transient Interfaces', 'Dynamic Dashboards', 'LLM UI/UX', 'Structured Outputs']
    },
    {
        slug: 'ma-technical-strategist',
        title: 'M&A Technical Strategist',
        manifestoTitle: 'The Value Extractor',
        label: 'The Extractor',
        iconName: 'LineChart',
        color: 'emerald',
        domain: 'Product & Economics',
        description: 'Lead technical due diligence by modeling the underlying API debt, hallucination liability, and vendor lock-in of target AI startups.',
        manifesto: [
            'Private Equity and M&A vectors are saturated with AI startups boasting massive ARR, but hiding horrific underlying Unit Economics and API dependencies.',
            'As an M&A Technical Strategist, your function is to bypass the pitch deck and audit the underlying AI architecture for "Orchestration Debt" and "Guardrail Taxes."',
            'You quantify the difference between a highly-defensible fine-tuned model asset and a fragile OpenAI wrapper with zero long-term enterprise valuation (EV).'
        ],
        glossaryTerms: ['technical-debt', 'ai-cogs', 'innovation-tax', 'technical-insolvency-date', 'cost-of-predictivity'],
        curriculumKeywords: ['economics', 'm&a', 'due diligence', 'roi', 'valuation'],
        seoMeta: 'Become an M&A AI Technical Strategist. Execute technical due diligence on AI startups, measure API dependency debt, and evaluate Enterprise Valuation (EV).',
        seoKeywords: ['M&A Due Diligence AI', 'AI Startup Valuation', 'API Dependency Audit', 'Technical Debt M&A', 'Enterprise Valuation AI', 'AI Economics']
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
        seoKeywords: ['AI Implementation', 'Enterprise AI Migration', 'AI PMO', 'Legacy Tech Migration', 'Agentic Workflows', 'Change Management AI']
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
        seoKeywords: ['Agentic Solutions Architect', 'AI orchestrator', 'agentic workflows', 'AI orchestration', 'career transition tech', 'autonomous AI systems', 'Agentic Process Automation']
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
        seoKeywords: ['Platform Engineer', 'Edge Engineer', 'SLM deployment', 'Internal Developer Platform', 'IDP', 'Cloud Repatriation', 'GPU FinOps']
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
        seoKeywords: ['Agentic DevOps', 'LLMOps', 'MLOps pipelines', 'Semantic Caching AI', 'AI Infrastructure Scaling', 'Vector Database DevOps']
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
        seoKeywords: ['Cloud Repatriation', 'Bare Metal GPU', 'FinOps AI Pricing', 'On-premise LLM inference', 'Cloud Exit Strategy AI']
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
        seoKeywords: ['AI Security', 'AI CISO', 'Agentic Security', 'Prompt Injection Defense', 'AI Hallucination Liability', 'Enterprise AI Governance']
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
        seoKeywords: ['AI Governance', 'EU AI Act Compliance', 'AI Risk Parity', 'Algorithmic Bias Auditing', 'Enterprise AI Legal Risk']
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
        seoKeywords: ['AI QA Engineering', 'LLM Evals', 'LLM as a judge', 'AI Verification', 'Non-deterministic testing', 'Generative QA']
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
        seoKeywords: ['Shadow AI', 'AI Cyber Hunt', 'Enterprise IP Leak AI', 'Unauthorized LLM use', 'AI Security Governance']
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
        seoKeywords: ['Synthetic Data', 'Data Architecture', 'Model Collapse', 'AI Fine-tuning', 'Knowledge Graphs', 'RAG pipelines', 'AI Data Wall']
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
        seoKeywords: ['Prompt Engineering Lead', 'System-2 Prompting', 'Prompt Registries', 'LLM Context Windows', 'Chain of Thought Architect']
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
        seoKeywords: ['Knowledge Architect AI', 'Vector Database Architecture', 'Advanced RAG pipelines', 'Enterprise Data Embeddings', 'AI Data Engineering']
    }
];
