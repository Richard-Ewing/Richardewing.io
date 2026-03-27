import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Definitive Guides — Engineering Leadership, AI, PE Due Diligence & More | Richard Ewing',
    description: 'The most comprehensive engineering leadership guides on the internet. For CTOs, VPs of Engineering, Product Managers, PE/VC firms, and executives. Free and premium playbooks.',
    keywords: ['CTO guide', 'VP Engineering guide', 'PE due diligence', 'AI economics', 'technical debt guide', 'engineering leadership', 'product economics'],
    alternates: { canonical: 'https://www.richardewing.io/guides' },
};

interface GuideItem {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    badge: string;
    badgeColor: string;
    topics: string[];
    readTime: string;
    tools?: { name: string; href: string }[];
    free: boolean;
    audience: string;
    terms: string;
    price?: string;
}

const guides: GuideItem[] = [
    // --- FREE GUIDES ---
    {
        slug: 'technical-debt',
        title: 'The Definitive Guide to Technical Debt',
        subtitle: 'From Definition to Dollars — The Complete Framework',
        description: 'How to classify, quantify, and remediate technical debt using the Product Debt Index (PDI). The same methodology behind $7,500 diagnostic engagements. Includes Innovation Tax calculation, board-ready reporting templates, and a 90-day remediation roadmap.',
        badge: 'Most Popular',
        badgeColor: 'cyan',
        topics: ['PDI Framework', 'Innovation Tax', 'Debt Classification', 'Board Reporting', 'Remediation Roadmaps', 'Technical Insolvency', 'Sprint Allocation'],
        readTime: '45 min',
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'Scoring Tool', href: '/tools/scoring' }],
        free: true,
        audience: 'CTOs, VPs Engineering',
        terms: '50+ terms linked',
    },
    {
        slug: 'engineering-efficiency',
        title: 'Engineering Efficiency Blueprint',
        subtitle: 'How Elite Organizations Measure and Optimize Output',
        description: 'Learn how companies like Stripe achieve $3.2M revenue per engineer while others struggle at $200K. Covers APER benchmarking, DORA metrics, team topology, build vs buy economics, and budget optimization strategies.',
        badge: 'For CTOs',
        badgeColor: 'emerald',
        topics: ['APER Benchmarking', 'DORA Metrics', 'Team Topology', 'Build vs Buy', 'Conway\'s Law', 'Budget Optimization', 'Sprint Velocity'],
        readTime: '40 min',
        tools: [{ name: 'APER Calculator', href: '/tools/aper' }, { name: 'EV-SE Calculator', href: '/tools/ev-se' }],
        free: true,
        audience: 'CTOs, Engineering Directors',
        terms: '35+ terms linked',
    },
    {
        slug: 'executive-technology-guide',
        title: 'The Executive\'s Guide to Technology Investment',
        subtitle: 'What Every CEO & CFO Should Know About R&D',
        description: 'Your engineering team speaks a foreign language. This guide translates technology investment into financial terms: R&D capitalizability, Innovation Tax impact on EBITDA, technology capital as a balance sheet asset, and when to increase vs. decrease engineering investment.',
        badge: 'For Executives',
        badgeColor: 'violet',
        topics: ['R&D Capital', 'EBITDA Impact', 'Innovation Tax', 'CapEx vs OpEx', 'Technology Valuation', 'Board Reporting', 'Investment Thresholds'],
        readTime: '30 min',
        tools: [{ name: 'EV-SE Calculator', href: '/tools/ev-se' }, { name: 'PDI Calculator', href: '/tools/pdi' }],
        free: true,
        audience: 'CEOs, CFOs, Board Members',
        terms: '25+ terms linked',
    },
    {
        slug: 'product-economics',
        title: 'Product Economics Playbook',
        subtitle: 'Unit Economics, Feature P&L, and the Kill Switch Protocol',
        description: 'Every feature has a P&L. Most PMs don\'t know theirs. Learn to calculate per-feature profitability, identify zombie features destroying value, run the Kill Switch Protocol, and apply WSJF prioritization that accounts for cost of delay.',
        badge: 'For PMs',
        badgeColor: 'amber',
        topics: ['Unit Economics', 'Feature P&L', 'Kill Switch Protocol', 'WSJF Prioritization', 'Cost of Delay', 'Zombie Features', 'Product Metrics'],
        readTime: '35 min',
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'APER Calculator', href: '/tools/aper' }],
        free: true,
        audience: 'Product Managers, Product Leaders',
        terms: '40+ terms linked',
    },
    {
        slug: 'engineering-leadership-handbook',
        title: 'The Engineering Leadership Handbook',
        subtitle: 'From Team Lead to VP — Every Framework You Need',
        description: 'The complete guide for engineering leaders at every level. Covers hiring and retention economics, team topology and Conway\'s Law, DORA implementation, stakeholder management, career ladder design, and the transition from IC to leadership.',
        badge: 'Leadership',
        badgeColor: 'cyan',
        topics: ['Hiring Economics', 'Retention Cost', 'Team Topology', 'DORA Implementation', 'Career Ladders', 'Stakeholder Management', '1:1 Frameworks'],
        readTime: '50 min',
        tools: [{ name: 'APER Calculator', href: '/tools/aper' }],
        free: true,
        audience: 'Engineering Managers, Directors, VPs',
        terms: '45+ terms linked',
    },
    {
    slug: "multi-agent-orchestration",
    title: "The Guide to Multi-Agent Orchestration",
    subtitle: "Moving Beyond Prompt Engineering to Autonomous Systems",
    description: "The definitive playbook for building and managing multi-agent systems (MAS).",
    badge: "New for 2026",
    badgeColor: "violet",
    topics: [
        "Orchestration vs Prompting",
        "Agentic OS",
        "Swarm Architecture",
        "Resource Allocation",
        "Multi-Agent State Management",
        "Failure Triage"
    ],
    readTime: "40 min",
    tools: [],
    free: true,
    audience: "AI Architects, Staff Engineers, CTOs",
    terms: "40+ terms linked"
},
    {
    slug: "cto-to-ctro",
    title: "From CTO to Chief Tech Transformation Officer",
    subtitle: "The Evolution of Modern Engineering Leadership",
    description: "The CTO role is blurring. Learn why organizations are shifting toward CTROs.",
    badge: "Leadership",
    badgeColor: "emerald",
    topics: [
        "The CTRO Role",
        "Business Strategy Integration",
        "AI Enablement Strategy",
        "Digital Transformation",
        "From Operator to Strategist"
    ],
    readTime: "30 min",
    tools: [],
    free: true,
    audience: "CTOs, VPs of Engineering, CIOs",
    terms: "25+ terms linked"
},
    {
    slug: "ai-native-development-teams",
    title: "Building AI-Native Engineering Teams",
    subtitle: "Maximizing GenAI Developer Experience (DevEx)",
    description: "How to structure, tool, and lead engineering teams in the age of generative AI.",
    badge: "DevEx",
    badgeColor: "cyan",
    topics: [
        "AI-Native DX",
        "Generative Tooling",
        "Prompt Integration",
        "Forward-Deployed AI",
        "Agentic Workflows"
    ],
    readTime: "35 min",
    tools: [],
    free: true,
    audience: "Engineering Managers, Platform Directors",
    terms: "35+ terms linked"
},
    {
    slug: "post-quantum-migration",
    title: "Post-Quantum Cryptography (PQC) Migration",
    subtitle: "Preparing for the \"Harvest Now, Decrypt Later\" Threat",
    description: "An executive playbook for auditing legacy cryptographic systems and transitioning to PQC.",
    badge: "Security",
    badgeColor: "rose",
    topics: [
        "PQC Algorithms",
        "Harvest Now Decrypt Later",
        "Confidential Computing",
        "Cryptographic Agility",
        "Q-Day Readiness"
    ],
    readTime: "45 min",
    tools: [],
    free: true,
    audience: "CISOs, CTOs, Security Architects",
    terms: "30+ terms linked"
},
    {
    slug: "hybrid-ai-infrastructure",
    title: "Hybrid AI Architectures & Cloud 3.0",
    subtitle: "Sovereign Cloud, Edge Latency, and Workload Distribution",
    description: "How to balance on-premise compute with sovereign cloud data constraints and global edge delivery.",
    badge: "Infrastructure",
    badgeColor: "amber",
    topics: [
        "Sovereign Cloud",
        "Edge AI",
        "Cost of Bandwidth",
        "On-Prem vs Cloud AI",
        "Infrastructure Abstraction"
    ],
    readTime: "35 min",
    tools: [],
    free: true,
    audience: "Cloud Architects, DevOps Leads",
    terms: "30+ terms linked"
},
{
    slug: 'executive-technology-guide-2026',
    title: 'Executive Technology Guide 2026',
    subtitle: 'The Strategic Blueprint for Agentic AI & eBPF',
    description: 'The definitive 2026 strategic planning guide for CTOs and VPs of Engineering. Covering Agentic AI orchestration, eBPF architectures, and AI FinOps.',
    badge: 'New for 2026',
    badgeColor: 'violet',
    topics: ['Agentic AI', 'eBPF', 'AI FinOps', 'LLM Routing'],
    readTime: '30 min',
    tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }, { name: 'PDI Calculator', href: '/tools/pdi' }],
    free: true,
    audience: 'CTOs, Engineering Leaders',
    terms: '20+ terms linked',
},
{
    slug: 'breaking-into-ai-operations',
    title: 'Career Paths: AI Operations',
    subtitle: 'The Highest Leverage Role in 2026',
    description: 'The definitive career transition roadmap for Senior Engineers looking to pivot into AI Operations, Model Orchestration, and AI FinOps.',
    badge: 'Career Path',
    badgeColor: 'cyan',
    topics: ['AI Operations', 'FinOps', 'Model Orchestration', 'Agentic Workflows'],
    readTime: '25 min',
    tools: [],
    free: true,
    audience: 'Senior Engineers, Backend Devs',
    terms: '15+ terms linked',
},
{
    slug: 'breaking-into-ai-product-management',
    title: 'Career Paths: AI Product Management',
    subtitle: 'Transitioning from B2B SaaS to AI Economics',
    description: 'The definitive career transition roadmap for PMs moving into AI Product Leadership, Unit Economics, and AI feature P&L management.',
    badge: 'Career Path',
    badgeColor: 'amber',
    topics: ['AI Protocol', 'Feature Economics', 'Stochastic UX', 'Tokens'],
    readTime: '20 min',
    tools: [],
    free: true,
    audience: 'Product Managers, Founders',
    terms: '12+ terms linked',
},
{
    slug: 'breaking-into-mlops',
    title: 'Career Paths: MLOps',
    subtitle: 'From DevOps to AI Data Planes',
    description: 'The roadmap for transitioning from traditional systems administration directly into hyper-scale GPU cluster operations and MLOps.',
    badge: 'Career Path',
    badgeColor: 'emerald',
    topics: ['GPU Brokering', 'Kubernetes', 'Data Planes', 'Vector DBs'],
    readTime: '25 min',
    tools: [],
    free: true,
    audience: 'DevOps, SysAdmins, Infrastructure Engineers',
    terms: '18+ terms linked',
},

    {
        slug: 'breaking-into-agentic-ai-engineering',
        title: 'Career Paths: Agentic AI Engineering',
        subtitle: 'From Single-Prompt to Orchestration',
        description: 'The 2026 playbook for transitioning from traditional Software Engineering or Machine Learning to Autonomous Multi-Agent orchestration and probabilistic design.',
        badge: 'Career Path',
        badgeColor: 'violet',
        topics: [
            'Agentic Architecture',
            'State Graphs',
            'Tool Calling',
            'Probabilistic Routing'
        ],
        readTime: '30 min',
        free: true,
        audience: 'Software Engineers, Machine Learning Engineers',
        terms: '10+ terms linked',
    },
    {
        slug: 'how-to-deploy-small-language-models',
        title: 'How To: Deploy Small Language Models',
        subtitle: 'Bypassing API Oligopolies at the Edge',
        description: 'Complete architecture guide for running highly specialized, quantized 3B-8B parameter inference locally to reduce token margin tax by 90%.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'emerald',
        topics: [
            'SLMs',
            'Quantization',
            'Edge Inferencing',
            'Margin Tax'
        ],
        readTime: '25 min',
        free: false,
        audience: 'Cloud Architects, CTOs, Staff Engineers',
        terms: '15+ terms linked',
        price: '$79'
    },
    {
        slug: 'how-to-implement-dspm-data-security',
        title: 'How To: Implement DSPM Data Security',
        subtitle: 'Automating Shadow Data Toxicity Discovery',
        description: 'The definitive implementation guide for establishing an agentless Data Security Posture Management cloud-native scanner to secure internal data before AI ingest.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'red',
        topics: [
            'DSPM',
            'Shadow Data',
            'Agentless Discovery',
            'Toxicity Mapping'
        ],
        readTime: '45 min',
        free: false,
        audience: 'CISO, Data Engineers, SecOps Leads',
        terms: '20+ terms linked',
        price: '$99'
    },
    // --- PREMIUM GUIDES ---
    {
        slug: 'ai-economics',
        title: 'The AI Economics Deep Dive',
        subtitle: 'Building Profitable AI Features — The Definitive Resource',
        description: 'The most comprehensive AI economics guide on the internet. Covers every aspect of AI cost management: token economics with exact pricing breakdowns, model routing architecture, Cost of Predictivity curve, RAG optimization, fine-tuning ROI analysis, hallucination cost quantification, AI feature P&L templates, and 12-month AI cost optimization roadmap.',
        badge: '🔒 Premium Flagship',
        badgeColor: 'violet',
        topics: ['Token Economics', 'Model Routing', 'AI COGS', 'Cost of Predictivity', 'RAG Economics', 'Fine-Tuning ROI', 'Hallucination Costs', 'AI Feature P&L', 'GPU Economics', 'AI Governance Costs'],
        readTime: '90 min',
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }],
        free: false,
        audience: 'AI/ML Leaders, CTOs, Product Managers',
        terms: '60+ terms linked',
        price: '$29',
    },
    {
        slug: 'pe-due-diligence',
        title: 'PE Technology Due Diligence Guide',
        subtitle: 'What Private Equity Firms Actually Evaluate',
        description: 'The insider guide to PE technology due diligence. What the diligence team evaluates, the 15 red flags that destroy valuations, how to prepare your engineering org before they arrive, the technical debt valuation methodology, and real case studies of deals that failed technical diligence.',
        badge: '🔒 Premium',
        badgeColor: 'amber',
        topics: ['Pre-Diligence Prep', 'Red Flags', 'Valuation Impact', 'Team Assessment', 'Architecture Review', 'Integration Planning', 'Deal Killers', 'QoT Reports'],
        readTime: '60 min',
        tools: [{ name: 'PDI Calculator', href: '/tools/pdi' }, { name: 'Audit Interview', href: '/tools/audit-interview' }],
        free: false,
        audience: 'PE Operating Partners, CTOs (pre-exit)',
        terms: '50+ terms linked',
        price: '$29',
    },
    {
        slug: 'vc-technology-assessment',
        title: 'VC Technology Assessment Framework',
        subtitle: 'Evaluating Engineering Orgs Before You Invest',
        description: 'For VCs who want to evaluate technology risk before writing a check. Covers: technical founder assessment, code velocity indicators, architecture scalability signals, team quality proxies, and the 10-minute technical diligence checklist for partners who aren\'t engineers.',
        badge: '🔒 Premium',
        badgeColor: 'amber',
        topics: ['Technical Founder Assessment', 'Velocity Indicators', 'Scalability Signals', 'Team Quality', '10-Min Diligence', 'Portfolio Monitoring', 'Post-Investment Support'],
        readTime: '45 min',
        tools: [{ name: 'APER Calculator', href: '/tools/aper' }, { name: 'EV-SE Calculator', href: '/tools/ev-se' }],
        free: false,
        audience: 'VCs, Angel Investors, Board Members',
        terms: '35+ terms linked',
        price: '$29',
    },
    {
        slug: 'saas-metrics',
        title: 'SaaS Metrics Masterclass',
        subtitle: 'From ARR to Engineering ROI — Bridge the Gap',
        description: 'Connect engineering investment to business outcomes. This guide bridges engineering metrics and SaaS financial metrics: Rule of 40 with engineering cost decomposition, NRR improvement through engineering investment, CAC payback acceleration, and how to build board slides that connect sprint velocity to ARR growth.',
        badge: '🔒 Premium',
        badgeColor: 'amber',
        topics: ['Rule of 40', 'NRR Improvement', 'CAC Payback', 'Engineering ROI', 'Unit Economics', 'Board Slides', 'Magic Number', 'Burn Multiple'],
        readTime: '55 min',
        tools: [{ name: 'APER Calculator', href: '/tools/aper' }, { name: 'EV-SE Calculator', href: '/tools/ev-se' }],
        free: false,
        audience: 'SaaS Leaders, CFOs, Board Members',
        terms: '40+ terms linked',
        price: '$29',
    },
    {
        slug: 'cloud-finops',
        title: 'Cloud FinOps & Infrastructure Economics',
        subtitle: 'Stop Wasting 35% of Your Cloud Spend',
        description: 'The definitive cloud cost optimization guide. Right-sizing methodology, reserved instance strategy, spot instance architecture, multi-cloud cost management, FinOps team structure, cost allocation tagging, anomaly detection, and the 12-week cloud cost reduction program that typically saves 30-40%.',
        badge: '🔒 Premium',
        badgeColor: 'amber',
        topics: ['Right-Sizing', 'Reserved Instances', 'Spot Architecture', 'FinOps Practice', 'Cost Allocation', 'Anomaly Detection', 'Multi-Cloud', 'Kubernetes Costs'],
        readTime: '50 min',
        tools: [{ name: 'AUEB Calculator', href: '/tools/aueb' }],
        free: false,
        audience: 'DevOps, Platform Teams, CFOs',
        terms: '30+ terms linked',
        price: '$29',
    },
    {
    slug: "ai-agent-compliance-framework",
    title: "AI Agent Governance & Compliance Framework",
    subtitle: "Enterprise Safety for Autonomous Workloads",
    description: "The comprehensive framework for ensuring AI agents operate within compliance boundaries.",
    badge: "🔒 Premium Playbook",
    badgeColor: "rose",
    topics: [
        "Agentic Governance",
        "Blast Radius Containment",
        "Regulatory Compliance",
        "LLM Ethical Audits",
        "Read-Write Safety Enclaves"
    ],
    readTime: "60 min",
    tools: [],
    free: false,
    audience: "CISOs, AI Risk Officers, Engineering Leaders",
    terms: "50+ terms linked",
    price: "$129"
},
    {
    slug: "confidential-computing-playbook",
    title: "Confidential Computing for Enterprise AI",
    subtitle: "Zero-Trust Architecture for AI Ingestion",
    description: "How to securely pass PII and proprietary datasets to commercial LLMs using Secure Enclaves.",
    badge: "🔒 Premium Playbook",
    badgeColor: "violet",
    topics: [
        "Secure Enclaves",
        "Data Clean Rooms",
        "Runtime Encryption",
        "Zero-Trust AI",
        "PII Scrubbing Pipelines"
    ],
    readTime: "55 min",
    tools: [],
    free: false,
    audience: "Enterprise Security Leads, Data Architects",
    terms: "40+ terms linked",
    price: "$99"
},
    {
    slug: "gpu-finops-supercomputing",
    title: "GPU FinOps & AI Supercomputing",
    subtitle: "Financial Operations for High-Performance Infrastructure",
    description: "The ultimate guide to managing the exploding costs of GPU clusters.",
    badge: "🔒 Premium Flagship",
    badgeColor: "amber",
    topics: [
        "GPU Brokering",
        "Spot Instance AI",
        "Cluster Utilization",
        "FinOps Metrics",
        "Supercomputing ROI"
    ],
    readTime: "75 min",
    tools: [],
    free: false,
    audience: "FinOps Directors, Cloud Economists, VPs of Infrastructure",
    terms: "45+ terms linked",
    price: "$149"
},
    {
    slug: "ai-security-posture-2026",
    title: "AI Security Posture & Preemptive Defense",
    subtitle: "Hardening Your Application Against GenAI Threats",
    description: "Detailed threat models and mitigation strategies for prompt injection, data poisoning, and model inversion.",
    badge: "🔒 Premium Playbook",
    badgeColor: "emerald",
    topics: [
        "Prompt Injection Defense",
        "Data Poisoning",
        "Model Inversion",
        "Threat Modeling",
        "Preemptive Cyber Defense"
    ],
    readTime: "65 min",
    tools: [],
    free: false,
    audience: "Security Engineers, SecOps Leaders",
    terms: "45+ terms linked",
    price: "$99"
},
    {
    slug: "spatial-computing-economics",
    title: "Spatial Computing Economics",
    subtitle: "The ROI of Physical AI & AR Telemetry",
    description: "A deeply analytical look at the hardware/software cost structures of Spatial Computing, AR fleet management.",
    badge: "🔒 Premium Playbook",
    badgeColor: "cyan",
    topics: [
        "Physical AI",
        "AR Fleet ROI",
        "Latency Economics",
        "Spatial Telemetry costs",
        "Hardware-Software Amortization"
    ],
    readTime: "50 min",
    tools: [],
    free: false,
    audience: "Product Strategists, Spatial Architects, CTOs",
    terms: "30+ terms linked",
    price: "$79"
},
{
    slug: 'breaking-into-agentic-ai-engineering',
    title: 'Career Paths: Agentic AI Engineering',
    subtitle: 'From Single-Prompt to Orchestration',
    description: 'The 2026 playbook for transitioning from traditional Software Engineering or Machine Learning to Autonomous Multi-Agent orchestration and probabilistic design.',
    badge: 'Career Path',
    badgeColor: 'violet',
    topics: [
        'Agentic Architecture',
        'State Graphs',
        'Tool Calling',
        'Probabilistic Routing'
    ],
    readTime: '30 min',
    free: true,
    audience: 'Software Engineers, Machine Learning Engineers',
    terms: '10+ terms linked',
},
{
    slug: 'how-to-deploy-small-language-models',
    title: 'How To: Deploy Small Language Models',
    subtitle: 'Bypassing API Oligopolies at the Edge',
    description: 'Complete architecture guide for running highly specialized, quantized 3B-8B parameter inference locally to reduce token margin tax by 90%.',
    badge: '🔒 Premium Playbook',
    badgeColor: 'emerald',
    topics: [
        'SLMs',
        'Quantization',
        'Edge Inferencing',
        'Margin Tax'
    ],
    readTime: '25 min',
    free: false,
    audience: 'Cloud Architects, CTOs, Staff Engineers',
    terms: '15+ terms linked',
    price: '$79'
},
{
    slug: 'how-to-implement-dspm-data-security',
    title: 'How To: Implement DSPM Data Security',
    subtitle: 'Automating Shadow Data Toxicity Discovery',
    description: 'The definitive implementation guide for establishing an agentless Data Security Posture Management cloud-native scanner to secure internal data before AI ingest.',
    badge: '🔒 Premium Playbook',
    badgeColor: 'red',
    topics: [
        'DSPM',
        'Shadow Data',
        'Agentless Discovery',
        'Toxicity Mapping'
    ],
    readTime: '45 min',
    free: false,
    audience: 'CISO, Data Engineers, SecOps Leads',
    terms: '20+ terms linked',
    price: '$99'
},
{
    slug: 'breaking-into-ai-operations',
    title: 'Career Paths: AI Operations',
    subtitle: 'Transitioning to the RAG Infrastructure Layer',
    description: 'The definitive blueprint for migrating from DevOps or traditional Data Engineering to managing Vector Databases, Embeddings, and Orchestrating LLMs.',
    badge: 'Career Path',
    badgeColor: 'violet',
    topics: [
        'Vector Databases',
        'Model Registries',
        'RAG Scaling',
        'Prompt Injection Defense'
    ],
    readTime: '35 min',
    free: true,
    audience: 'DevOps Engineers, Data Engineers',
    terms: '12+ terms linked',
},
{
    slug: 'breaking-into-mlops',
    title: 'Career Paths: MLOps Mastery',
    subtitle: 'Automating Model Lifecycles',
    description: 'Master the CI/CD of Machine Learning. Transition from generic backend engineering to managing the lifecycle of open-weights and proprietary models.',
    badge: 'Career Path',
    badgeColor: 'violet',
    topics: [
        'Continuous Training',
        'Model Drift',
        'Feature Stores',
        'A/B Experimentation'
    ],
    readTime: '40 min',
    free: true,
    audience: 'Backend Engineers, Data Scientists',
    terms: '14+ terms linked',
},
{
    slug: 'breaking-into-ai-product-management',
    title: 'Career Paths: AI Product Management',
    subtitle: 'Managing Non-Deterministic Products',
    description: 'How to design roadmaps, establish KPIs, and wireframe UX for LLM-driven features where the output is probabilistic and unpredictable.',
    badge: 'Career Path',
    badgeColor: 'violet',
    topics: [
        'Probabilistic UX',
        'Hallucination Risk mitigation',
        'Generative UI',
        'Token Economics'
    ],
    readTime: '25 min',
    free: true,
    audience: 'Product Managers, UX Designers',
    terms: '15+ terms linked',
},
{
    slug: 'executive-technology-guide-2026',
    title: 'The 2026 Executive AI Playbook',
    subtitle: 'Navigating $10M+ Architectural Transitions',
    description: 'The definitive strategy for CTOs and VPs. Analyzing Buy vs Build economics, Open Source vs Private weights, and sovereign data architecture.',
    badge: '🔒 Premium Playbook',
    badgeColor: 'amber',
    topics: [
        'Sovereign AI',
        'Buy vs Build math',
        'Vendor Lock-in mitigation',
        'Board-Level Compliance'
    ],
    readTime: '60 min',
    free: false,
    audience: 'CTOs, VP Engineering, Tech Founders',
    terms: '25+ terms linked',
    price: '$149'
}
];

const badgeStyles: Record<string, string> = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    violet: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
};

export default function GuidesPage() {
    const careerPaths = guides.filter(g => g.badge === 'Career Path');
    const freeGuides = guides.filter(g => g.free && g.badge !== 'Career Path');
    const premiumGuides = guides.filter(g => !g.free && g.badge !== 'Career Path');

    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-5xl mx-auto">
                    {/* Hero */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Definitive Engineering Playbooks</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                            Engineering Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">Guides</span>
                        </h1>
                        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                            The most comprehensive engineering economics guides on the internet. Written by a Product Economist. Used in $7,500 advisory engagements. 
                            {freeGuides.length} free, {premiumGuides.length} premium, {careerPaths.length} career paths.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-16">
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{guides.length}</div>
                            <div className="text-[10px] text-zinc-500 uppercase">Guides</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">{freeGuides.length}</div>
                            <div className="text-[10px] text-zinc-500 uppercase">Free</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">500+</div>
                            <div className="text-[10px] text-zinc-500 uppercase">Min. Content</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">420+</div>
                            <div className="text-[10px] text-zinc-500 uppercase">Terms Linked</div>
                        </div>
                        <div className="card p-4 text-center">
                            <div className="text-2xl font-grotesk font-bold text-white">5</div>
                            <div className="text-[10px] text-zinc-500 uppercase">Free Tools</div>
                        </div>
                    </div>

                    {/* FREE GUIDES */}
                    <div className="mb-4">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-2">Free Guides</h2>
                        <p className="text-zinc-500 text-sm">Full access, no paywall. Start learning immediately.</p>
                    </div>
                    <div className="space-y-5 mb-16">
                        {freeGuides.map((guide) => (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block group">
                                <div className="card p-6 sm:p-8 hover:border-cyan-500/30 transition-all">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap mb-3">
                                                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeStyles[guide.badgeColor]}`}>{guide.badge}</span>
                                                <span className="text-[10px] text-zinc-600">{guide.readTime}</span>
                                                <span className="text-[10px] text-zinc-600">•</span>
                                                <span className="text-[10px] text-zinc-600">{guide.audience}</span>
                                                <span className="text-[10px] text-zinc-600">•</span>
                                                <span className="text-[10px] text-zinc-600">{guide.terms}</span>
                                            </div>
                                            <h3 className="text-xl font-grotesk font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{guide.title}</h3>
                                            <p className="text-sm text-zinc-500 font-mono mb-3">{guide.subtitle}</p>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{guide.description}</p>
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {guide.topics.map((topic) => (
                                                    <span key={topic} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-500">{topic}</span>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                {guide.tools?.map((tool) => (
                                                    <span key={tool.name} className="text-[10px] text-cyan-400">🛠️ {tool.name}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 group-hover:bg-cyan-500/5 transition-all">
                                                <span className="text-zinc-500 group-hover:text-cyan-400 transition-colors">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* CAREER PATHS */}
                    <div className="mb-4">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-2">Career Pathways</h2>
                        <p className="text-zinc-500 text-sm">Actionable blueprints for pivoting into the highest-leverage 2026 technical disciplines.</p>
                    </div>
                    <div className="space-y-5 mb-16">
                        {careerPaths.map((guide) => (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block group">
                                <div className="card p-6 sm:p-8 hover:border-violet-500/30 transition-all border-violet-500/10">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap mb-3">
                                                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeStyles[guide.badgeColor]}`}>{guide.badge}</span>
                                                <span className="text-[10px] text-zinc-600">{guide.readTime}</span>
                                                <span className="text-[10px] text-zinc-600">•</span>
                                                <span className="text-[10px] text-zinc-600">{guide.audience}</span>
                                                <span className="text-[10px] text-zinc-600">•</span>
                                                <span className="text-[10px] text-zinc-600">{guide.terms}</span>
                                            </div>
                                            <h3 className="text-xl font-grotesk font-bold text-white mb-1 group-hover:text-violet-400 transition-colors">{guide.title}</h3>
                                            <p className="text-sm text-zinc-500 font-mono mb-3">{guide.subtitle}</p>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{guide.description}</p>
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {guide.topics.map((topic) => (
                                                    <span key={topic} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-500">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center group-hover:border-violet-500/30 group-hover:bg-violet-500/5 transition-all">
                                                <span className="text-zinc-500 group-hover:text-violet-400 transition-colors">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* PREMIUM GUIDES */}
                    <div className="mb-4 mt-6">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-2">Premium Playbooks & Guides</h2>
                        <p className="text-zinc-500 text-sm">Actionable ROI models, frameworks, and templates. Unlock instantly.</p>
                    </div>
                    <div className="space-y-5 mb-16">
                        {premiumGuides.map((guide) => (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="block group">
                                <div className="card p-6 sm:p-8 hover:border-amber-500/30 transition-all border-white/5 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />
                                    <div className="flex flex-col sm:flex-row gap-6 relative z-10">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 flex-wrap mb-3">
                                                <span className={`text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full border ${badgeStyles[guide.badgeColor]}`}>{guide.badge}</span>
                                                <span className="text-[10px] text-zinc-600">{guide.readTime}</span>
                                                <span className="text-[10px] text-zinc-600">•</span>
                                                <span className="text-[10px] text-zinc-600">{guide.audience}</span>
                                                <span className="text-[10px] text-zinc-600">•</span>
                                                <span className="text-[10px] text-zinc-600">{guide.terms}</span>
                                            </div>
                                            <h3 className="text-xl font-grotesk font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">{guide.title}</h3>
                                            <p className="text-sm text-zinc-500 font-mono mb-3">{guide.subtitle}</p>
                                            <p className="text-zinc-400 text-sm leading-relaxed mb-4">{guide.description}</p>
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {guide.topics.map((topic) => (
                                                    <span key={topic} className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/5 text-zinc-500">{topic}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-end items-start sm:items-end min-w-[120px] mt-4 sm:mt-0">
                                            <span className="text-2xl font-grotesk font-bold text-amber-400">{guide.price}</span>
                                            <span className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">One-Time</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* BUNDLE CTA */}
                    <div className="card p-8 sm:p-12 text-center border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent mb-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-bl-[100px] pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-500/5 rounded-tr-[100px] pointer-events-none" />
                        
                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/30 mb-6">
                                <span className="text-xs font-mono text-violet-300 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Ultimate Value
                                </span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-white mb-4">Ultimate Guides Bundle — $399</h2>
                            <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-base leading-relaxed">Get complete access to all 13 premium guides/playbooks across all pricing tiers. Save over $500. Plus access to future premium guides at no extra cost.</p>
                            <a href="https://buy.stripe.com/6oUfZa1My6vodS57W02B20y" target="_blank" rel="noreferrer" className="inline-block px-10 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold uppercase tracking-widest text-sm rounded-xl hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                                Get All Premium Guides — $399 →
                            </a>
                            <div className="flex items-center justify-center gap-6 mt-8 text-[10px] font-mono uppercase tracking-wider text-zinc-500">
                                <span>✓ Instant access</span>
                                <span>✓ PDF downloads</span>
                                <span>✓ Future updates</span>
                            </div>
                        </div>
                    </div>
                    {/* Advisory CTA */}
                    <div className="card p-8 text-center border-cyan-500/20 mb-12">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Want Personalized Application?</h2>
                        <p className="text-zinc-400 mb-6 max-w-lg mx-auto text-sm">These guides teach the frameworks. A live engagement applies them to your specific organization, team, and challenges.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="/api/buy/strategy_session" className="px-6 py-3 bg-white text-black font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-cyan-400 transition-colors">
                                Book Strategy Session ($500) →
                            </a>
                            <a href="/api/buy/full_audit" className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:border-cyan-500 hover:text-cyan-400 transition-all">
                                Full R&amp;D Audit ($7,500) →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
