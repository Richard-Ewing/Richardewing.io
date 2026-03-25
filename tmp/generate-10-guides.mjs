import fs from 'fs';
import path from 'path';

const freeGuides = [
    {
        slug: 'multi-agent-orchestration',
        title: 'The Guide to Multi-Agent Orchestration',
        subtitle: 'Moving Beyond Prompt Engineering to Autonomous Systems',
        description: 'The definitive playbook for building and managing multi-agent systems (MAS). How to orchestrate agent swarms, manage shared resources, and implement Agentic Operating Systems (AOS) for enterprise architecture.',
        badge: 'New for 2026',
        badgeColor: 'violet',
        topics: ['Orchestration vs Prompting', 'Agentic OS', 'Swarm Architecture', 'Resource Allocation', 'Multi-Agent State Management', 'Failure Triage'],
        readTime: '40 min',
        free: true,
        audience: 'AI Architects, Staff Engineers, CTOs',
        terms: '40+ terms linked'
    },
    {
        slug: 'cto-to-ctro',
        title: 'From CTO to Chief Tech Transformation Officer',
        subtitle: 'The Evolution of Modern Engineering Leadership',
        description: 'The CTO role is blurring. Learn why organizations are shifting toward CTROs to blend operational execution with business strategy, AI enablement, and transformational leadership.',
        badge: 'Leadership',
        badgeColor: 'emerald',
        topics: ['The CTRO Role', 'Business Strategy Integration', 'AI Enablement Strategy', 'Digital Transformation', 'From Operator to Strategist'],
        readTime: '30 min',
        free: true,
        audience: 'CTOs, VPs of Engineering, CIOs',
        terms: '25+ terms linked'
    },
    {
        slug: 'ai-native-development-teams',
        title: 'Building AI-Native Engineering Teams',
        subtitle: 'Maximizing GenAI Developer Experience (DevEx)',
        description: 'How to structure, tool, and lead engineering teams in the age of generative AI. Shift from writing code to orchestrating models and integrating autonomous agents into your CI/CD.',
        badge: 'DevEx',
        badgeColor: 'cyan',
        topics: ['AI-Native DX', 'Generative Tooling', 'Prompt Integration', 'Forward-Deployed AI', 'Agentic Workflows'],
        readTime: '35 min',
        free: true,
        audience: 'Engineering Managers, Platform Directors',
        terms: '35+ terms linked'
    },
    {
        slug: 'post-quantum-migration',
        title: 'Post-Quantum Cryptography (PQC) Migration',
        subtitle: 'Preparing for the "Harvest Now, Decrypt Later" Threat',
        description: 'An executive playbook for auditing legacy cryptographic systems and transitioning to PQC algorithms before quantum supremacy renders current RSA/ECC vulnerable.',
        badge: 'Security',
        badgeColor: 'rose',
        topics: ['PQC Algorithms', 'Harvest Now Decrypt Later', 'Confidential Computing', 'Cryptographic Agility', 'Q-Day Readiness'],
        readTime: '45 min',
        free: true,
        audience: 'CISOs, CTOs, Security Architects',
        terms: '30+ terms linked'
    },
    {
        slug: 'hybrid-ai-infrastructure',
        title: 'Hybrid AI Architectures & Cloud 3.0',
        subtitle: 'Sovereign Cloud, Edge Latency, and Workload Distribution',
        description: 'By 2026, over 40% of leading enterprises will adopt hybrid AI infrastructure. How to balance on-premise compute with sovereign cloud data constraints and global edge delivery.',
        badge: 'Infrastructure',
        badgeColor: 'amber',
        topics: ['Sovereign Cloud', 'Edge AI', 'Cost of Bandwidth', 'On-Prem vs Cloud AI', 'Infrastructure Abstraction'],
        readTime: '35 min',
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
        description: 'The comprehensive framework for ensuring AI agents operate within compliance boundaries. Includes templates for ethical audits, read-write permission policies, and blast-radius containment strategies.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'rose',
        topics: ['Agentic Governance', 'Blast Radius Containment', 'Regulatory Compliance', 'LLM Ethical Audits', 'Read-Write Safety Enclaves'],
        readTime: '60 min',
        free: false,
        audience: 'CISOs, AI Risk Officers, Engineering Leaders',
        terms: '50+ terms linked',
        price: '$129'
    },
    {
        slug: 'confidential-computing-playbook',
        title: 'Confidential Computing for Enterprise AI',
        subtitle: 'Zero-Trust Architecture for AI Ingestion',
        description: 'How to securely pass PII and proprietary datasets to commercial LLMs using Secure Enclaves, Data Clean Rooms, and encrypted runtime environments.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'violet',
        topics: ['Secure Enclaves', 'Data Clean Rooms', 'Runtime Encryption', 'Zero-Trust AI', 'PII Scrubbing Pipelines'],
        readTime: '55 min',
        free: false,
        audience: 'Enterprise Security Leads, Data Architects',
        terms: '40+ terms linked',
        price: '$99'
    },
    {
        slug: 'gpu-finops-supercomputing',
        title: 'GPU FinOps & AI Supercomputing',
        subtitle: 'Financial Operations for High-Performance Infrastructure',
        description: 'The ultimate guide to managing the exploding costs of GPU clusters. Covers capacity planning, spot instance orchestration, token economics, and multi-cloud GPU brokering.',
        badge: '🔒 Premium Flagship',
        badgeColor: 'amber',
        topics: ['GPU Brokering', 'Spot Instance AI', 'Cluster Utilization', 'FinOps Metrics', 'Supercomputing ROI'],
        readTime: '75 min',
        free: false,
        audience: 'FinOps Directors, Cloud Economists, VPs of Infrastructure',
        terms: '45+ terms linked',
        price: '$149'
    },
    {
        slug: 'ai-security-posture-2026',
        title: 'AI Security Posture & Preemptive Defense',
        subtitle: 'Hardening Your Application Against GenAI Threats',
        description: 'Detailed threat models and mitigation strategies for prompt injection, data poisoning, model inversion, and malicious agent swarms targeting your ecosystem.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'emerald',
        topics: ['Prompt Injection Defense', 'Data Poisoning', 'Model Inversion', 'Threat Modeling', 'Preemptive Cyber Defense'],
        readTime: '65 min',
        free: false,
        audience: 'Security Engineers, SecOps Leaders',
        terms: '45+ terms linked',
        price: '$99'
    },
    {
        slug: 'spatial-computing-economics',
        title: 'Spatial Computing Economics',
        subtitle: 'The ROI of Physical AI & AR Telemetry',
        description: 'A deeply analytical look at the hardware/software cost structures of Spatial Computing, AR fleet management, and Physical AI telemetry infrastructure.',
        badge: '🔒 Premium Playbook',
        badgeColor: 'cyan',
        topics: ['Physical AI', 'AR Fleet ROI', 'Latency Economics', 'Spatial Telemetry costs', 'Hardware-Software Amortization'],
        readTime: '50 min',
        free: false,
        audience: 'Product Strategists, Spatial Architects, CTOs',
        terms: '30+ terms linked',
        price: '$79'
    }
];

const allGuides = [...freeGuides, ...premiumGuides];

const colors = ['rose', 'amber', 'cyan', 'violet', 'emerald'];

allGuides.forEach(guide => {
    const dir = path.join('app/guides', guide.slug);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    
    // Generate sections using the guide's topics to distribute into 5 sections
    const numTopics = guide.topics.length;
    let sectionsStr = `const sections = [
`;
    for(let i=0; i<5; i++) {
        // Just distribute dummy or real topics loosely
        let topicMap = guide.topics[i % numTopics].toLowerCase().replace(/ /g, '-');
        sectionsStr += `    {
        title: 'Section ${i+1}',
        description: '${guide.topics[i % numTopics]} Focus Area',
        slugs: ['${topicMap}', 'software-capitalization', 'product-debt-index', 'architecture-debt', 'innovation-tax'],
        color: '${colors[i]}',
    },
`;
    }
    sectionsStr += `];`;

    const template = `import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
${guide.free ? '' : `import PremiumGuideCTA from '@/app/components/PremiumGuideCTA';`}

export const metadata: Metadata = {
    title: '${guide.title.replace(/'/g, "\\'")} | Richard Ewing',
    description: '${guide.description.replace(/'/g, "\\'")}',
    keywords: ${JSON.stringify(guide.topics)},
    alternates: { canonical: 'https://www.richardewing.io/guides/${guide.slug}' },
    openGraph: { title: '${guide.title.replace(/'/g, "\\'")}', description: '${guide.description.replace(/'/g, "\\'")}', url: 'https://www.richardewing.io/guides/${guide.slug}', type: 'article' },
};

${sectionsStr}

const colorMap: Record<string, string> = {
    rose: 'border-rose-500/30 bg-rose-500/5',
    amber: 'border-amber-500/30 bg-amber-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5',
    violet: 'border-violet-500/30 bg-violet-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
};
const textColorMap: Record<string, string> = {
    rose: 'text-rose-400', amber: 'text-amber-400', cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400',
};

export default function ${guide.slug.split('-').map(w=>w.charAt(0).toUpperCase()+w.slice(1)).join('')}GuidePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-${colors[2]}-400">Guides</Link><span>/</span><span className="text-${guide.badgeColor}-400 font-bold">${guide.title}</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        ${guide.title}{' '}
                        <span className="block mt-2 text-2xl text-transparent bg-clip-text bg-gradient-to-r from-${guide.badgeColor}-400 to-white">${guide.subtitle}</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">${guide.description}</p>
                    <p className="text-sm text-zinc-500 mb-8">${guide.terms}</p>

                    ${guide.free ? '' : `
                    <div className="mb-12">
                        <PremiumGuideCTA guideSlug="${guide.slug}" guideName="${guide.title}" />
                    </div>
                    `}

                    <div className="space-y-8 mb-16">
                        {sections.map((section, i) => (
                            <div key={i} className={\`rounded-2xl border p-8 \${colorMap[section.color]}\`}>
                                <h2 className={\`text-2xl font-grotesk font-bold mb-2 \${textColorMap[section.color]}\`}>{section.title}</h2>
                                <p className="text-zinc-400 text-sm mb-6">{section.description}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {section.slugs.map((slug) => {
                                        const term = glossaryTerms.find((t: { slug: string; title: string }) => t.slug === slug);
                                        return (
                                            <Link key={slug} href={\`/glossary/\${slug}\`} className="block rounded-lg border border-white/10 bg-black/30 p-3 hover:border-white/30 transition-colors">
                                                <span className="text-sm text-white font-medium">{term?.title || slug}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
`;
    fs.writeFileSync(path.join(dir, 'page.tsx'), template);
    console.log("Created", guide.slug);
});

// Now inject into app/guides/page.tsx
let pageTsx = fs.readFileSync('app/guides/page.tsx', 'utf8');

const freeStr = freeGuides.map(g => JSON.stringify(g, null, 8).replace(/"([^(")"]+)":/g,"$1:")).join(',\\n');
const premiumStr = premiumGuides.map(g => JSON.stringify(g, null, 8).replace(/"([^(")"]+)":/g,"$1:")).join(',\\n');

// The file has // --- FREE GUIDES --- and // --- PREMIUM GUIDES --- 
// We will insert right before // --- PREMIUM GUIDES --- for free ones.
let premiumMarker = pageTsx.indexOf('// --- PREMIUM GUIDES ---');
if (premiumMarker !== -1) {
    pageTsx = pageTsx.substring(0, premiumMarker) + freeStr + ',\\n    ' + pageTsx.substring(premiumMarker);
}

// And list terminator `];`
let endMarker = pageTsx.indexOf('];', premiumMarker + 50);
if (endMarker !== -1) {
    pageTsx = pageTsx.substring(0, endMarker) + ',\\n' + premiumStr + '\\n' + pageTsx.substring(endMarker);
}

fs.writeFileSync('app/guides/page.tsx', pageTsx);
console.log("Injected guides into page.tsx");
