import { Cpu, Target, Blocks, LockKeyhole, Database, LucideIcon } from 'lucide-react';

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
};

export const CAREER_PATHS: CareerPath[] = [
    {
        slug: 'agentic-solutions-architect',
        title: 'Agentic Solutions Architect',
        manifestoTitle: 'The Orchestrator',
        label: 'The Orchestrator',
        iconName: 'Cpu',
        color: 'cyan',
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
        slug: 'ai-product-economist',
        title: 'AI Product Economist',
        manifestoTitle: 'The Visionary Fiduciary',
        label: 'The Visionary',
        iconName: 'Target',
        color: 'purple',
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
        slug: 'platform-edge-engineer',
        title: 'Platform & Edge Engineer',
        manifestoTitle: 'The Scaler',
        label: 'The Scaler',
        iconName: 'Blocks',
        color: 'emerald',
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
        slug: 'ai-security-fiduciary',
        title: 'AI Security & Fiduciary (CISO)',
        manifestoTitle: 'The Protector of the Weights',
        label: 'The Protector',
        iconName: 'LockKeyhole',
        color: 'red',
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
        slug: 'synthetic-data-architect',
        title: 'Synthetic Data Architecture',
        manifestoTitle: 'The Foundation Anchoring Truth',
        label: 'The Foundation',
        iconName: 'Database',
        color: 'blue',
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
    }
];
