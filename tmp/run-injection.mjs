import fs from 'fs';

const freeGuides = [
    {
        slug: 'multi-agent-orchestration',
        title: 'The Guide to Multi-Agent Orchestration',
        subtitle: 'Moving Beyond Prompt Engineering to Autonomous Systems',
        description: 'The definitive playbook for building and managing multi-agent systems (MAS).',
        badge: 'New for 2026',
        badgeColor: 'violet',
        topics: ['Orchestration vs Prompting', 'Agentic OS', 'Swarm Architecture', 'Resource Allocation', 'Multi-Agent State Management', 'Failure Triage'],
        readTime: '40 min',
        tools: [],
        free: true,
        audience: 'AI Architects, Staff Engineers, CTOs',
        terms: '40+ terms linked'
    },
    {
        slug: 'cto-to-ctro',
        title: 'From CTO to Chief Tech Transformation Officer',
        subtitle: 'The Evolution of Modern Engineering Leadership',
        description: 'The CTO role is blurring. Learn why organizations are shifting toward CTROs.',
        badge: 'Leadership',
        badgeColor: 'emerald',
        topics: ['The CTRO Role', 'Business Strategy Integration', 'AI Enablement Strategy', 'Digital Transformation', 'From Operator to Strategist'],
        readTime: '30 min',
        tools: [],
        free: true,
        audience: 'CTOs, VPs of Engineering, CIOs',
        terms: '25+ terms linked'
    },
    {
        slug: 'ai-native-development-teams',
        title: 'Building AI-Native Engineering Teams',
        subtitle: 'Maximizing GenAI Developer Experience (DevEx)',
        description: 'How to structure, tool, and lead engineering teams in the age of generative AI.',
        badge: 'DevEx',
        badgeColor: 'cyan',
        topics: ['AI-Native DX', 'Generative Tooling', 'Prompt Integration', 'Forward-Deployed AI', 'Agentic Workflows'],
        readTime: '35 min',
        tools: [],
        free: true,
        audience: 'Engineering Managers, Platform Directors',
        terms: '35+ terms linked'
    },
    {
        slug: 'post-quantum-migration',
        title: 'Post-Quantum Cryptography (PQC) Migration',
        subtitle: 'Preparing for the "Harvest Now, Decrypt Later" Threat',
        description: 'An executive playbook for auditing legacy cryptographic systems and transitioning to PQC.',
        badge: 'Security',
        badgeColor: 'rose',
        topics: ['PQC Algorithms', 'Harvest Now Decrypt Later', 'Confidential Computing', 'Cryptographic Agility', 'Q-Day Readiness'],
        readTime: '45 min',
        tools: [],
        free: true,
        audience: 'CISOs, CTOs, Security Architects',
        terms: '30+ terms linked'
    },
    {
        slug: 'hybrid-ai-infrastructure',
        title: 'Hybrid AI Architectures & Cloud 3.0',
        subtitle: 'Sovereign Cloud, Edge Latency, and Workload Distribution',
        description: 'How to balance on-premise compute with sovereign cloud data constraints and global edge delivery.',
        badge: 'Infrastructure',
        badgeColor: 'amber',
        topics: ['Sovereign Cloud', 'Edge AI', 'Cost of Bandwidth', 'On-Prem vs Cloud AI', 'Infrastructure Abstraction'],
        readTime: '35 min',
        tools: [],
        free: true,
        audience: 'Cloud Architects, DevOps Leads',
        terms: '30+ terms linked'
    }
];

const premiumGuides = [
    {
        slug: 'ai-agent-compliance-framework',
        title: 'AI Agent Governance & Compliance Framework',
        subtitle: 'Enterprise Safety for Autonomous Workloads',
        description: 'The comprehensive framework for ensuring AI agents operate within compliance boundaries.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'rose',
        topics: ['Agentic Governance', 'Blast Radius Containment', 'Regulatory Compliance', 'LLM Ethical Audits', 'Read-Write Safety Enclaves'],
        readTime: '60 min',
        tools: [],
        free: false,
        audience: 'CISOs, AI Risk Officers, Engineering Leaders',
        terms: '50+ terms linked',
        price: '$129'
    },
    {
        slug: 'confidential-computing-playbook',
        title: 'Confidential Computing for Enterprise AI',
        subtitle: 'Zero-Trust Architecture for AI Ingestion',
        description: 'How to securely pass PII and proprietary datasets to commercial LLMs using Secure Enclaves.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'violet',
        topics: ['Secure Enclaves', 'Data Clean Rooms', 'Runtime Encryption', 'Zero-Trust AI', 'PII Scrubbing Pipelines'],
        readTime: '55 min',
        tools: [],
        free: false,
        audience: 'Enterprise Security Leads, Data Architects',
        terms: '40+ terms linked',
        price: '$99'
    },
    {
        slug: 'gpu-finops-supercomputing',
        title: 'GPU FinOps & AI Supercomputing',
        subtitle: 'Financial Operations for High-Performance Infrastructure',
        description: 'The ultimate guide to managing the exploding costs of GPU clusters.',
        badge: '🔒 Premium Flagship',
        badgeColor: 'amber',
        topics: ['GPU Brokering', 'Spot Instance AI', 'Cluster Utilization', 'FinOps Metrics', 'Supercomputing ROI'],
        readTime: '75 min',
        tools: [],
        free: false,
        audience: 'FinOps Directors, Cloud Economists, VPs of Infrastructure',
        terms: '45+ terms linked',
        price: '$149'
    },
    {
        slug: 'ai-security-posture-2026',
        title: 'AI Security Posture & Preemptive Defense',
        subtitle: 'Hardening Your Application Against GenAI Threats',
        description: 'Detailed threat models and mitigation strategies for prompt injection, data poisoning, and model inversion.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'emerald',
        topics: ['Prompt Injection Defense', 'Data Poisoning', 'Model Inversion', 'Threat Modeling', 'Preemptive Cyber Defense'],
        readTime: '65 min',
        tools: [],
        free: false,
        audience: 'Security Engineers, SecOps Leaders',
        terms: '45+ terms linked',
        price: '$99'
    },
    {
        slug: 'spatial-computing-economics',
        title: 'Spatial Computing Economics',
        subtitle: 'The ROI of Physical AI & AR Telemetry',
        description: 'A deeply analytical look at the hardware/software cost structures of Spatial Computing, AR fleet management.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'cyan',
        topics: ['Physical AI', 'AR Fleet ROI', 'Latency Economics', 'Spatial Telemetry costs', 'Hardware-Software Amortization'],
        readTime: '50 min',
        tools: [],
        free: false,
        audience: 'Product Strategists, Spatial Architects, CTOs',
        terms: '30+ terms linked',
        price: '$79'
    }
];

function formatArray(arr) {
    return arr.map(g => JSON.stringify(g, null, 4).replace(/"([^(")"]+)":/g,"$1:")).join(',\n    ');
}

let pageTsx = fs.readFileSync('app/guides/page.tsx', 'utf8');

const premiumMarker = pageTsx.indexOf('// --- PREMIUM GUIDES ---');
if (premiumMarker !== -1) {
    let beforePremium = pageTsx.substring(0, premiumMarker).replace(/,\\s*$/, '');
    pageTsx = beforePremium + ',\n    ' + formatArray(freeGuides) + ',\n    ' + pageTsx.substring(premiumMarker);
}

const allTextAfterPremium = pageTsx.substring(premiumMarker);
const endArrMarker = premiumMarker + allTextAfterPremium.indexOf('];');
if (endArrMarker !== -1) {
    let beforeArrayEnd = pageTsx.substring(0, endArrMarker).replace(/,\\s*$/, '');
    pageTsx = beforeArrayEnd + ',\n    ' + formatArray(premiumGuides) + '\n' + pageTsx.substring(endArrMarker);
}

const interfaceStr = `interface GuideItem {
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

const guides: GuideItem[] = [`;

pageTsx = pageTsx.replace('const guides = [', interfaceStr);

fs.writeFileSync('app/guides/page.tsx', pageTsx);
console.log('Injection and Interface Application Complete!');
