import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import EcosystemMap from '@/app/components/EcosystemMap';

export const metadata: Metadata = {
    title: 'Start Here: The AI Economics Blueprint',
    description: 'Your orientation guide to diagnosing AI unit economics, evaluating technical debt, and deploying deterministic governance.',
    alternates: { canonical: 'https://www.richardewing.io/start-here' },
    openGraph: {
        title: 'Start Here  -  Guided Onboarding Flow',
        description: 'A 5-step operational pathway from identifying hidden AI risk to executing runtime controls via Exogram.',
        url: 'https://www.richardewing.io/start-here',
        type: 'website',
    },
};

interface StepLink {
    label: string;
    href: string;
    primary?: boolean;
    external?: boolean;
}

interface StepItem {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    links: StepLink[];
    color: string;
}

const steps: StepItem[] = [
    {
        number: '01',
        title: 'Understand The Problem',
        subtitle: 'Identify your organizational failure mode',
        description: 'Probabilistic AI systems introduce non-deterministic execution paths into deterministic enterprise environments. Unmanaged, this creates "Governance Drift," eroding margins, MTTR, and technical intimacy.',
        links: [
            { label: 'View Enterprise Challenges', href: '/challenges', primary: true }
        ],
        color: 'red',
    },
    {
        number: '02',
        title: 'Explore The Framework',
        subtitle: 'Audit the 6-pillar operational boundaries',
        description: 'Review the multidisciplinary system that translates engineering costs and security liabilities into EBITDA exit margins.',
        links: [
            { label: 'Explore The Framework', href: '/framework', primary: true }
        ],
        color: 'indigo',
    },
    {
        number: '03',
        title: 'Run Diagnostics & Assessment',
        subtitle: 'Quantify operational entropy & AI maturity',
        description: 'You cannot manage what you do not measure. Take the 15-question AI Economics Assessment to generate an objective baseline of your cost visibility and governance maturity.',
        links: [
            { label: 'Take 15-Q Assessment', href: '/assessment', primary: true },
            { label: 'Product Debt Index (PDI)', href: '/tools/pdi' },
            { label: 'AI Unit Economics (AUEB)', href: '/tools/aueb' },
        ],
        color: 'cyan',
    },
    {
        number: '04',
        title: 'Study The Curriculum',
        subtitle: 'Educate the management team',
        description: 'Once measured, you must establish an operational doctrine. Our semantic curriculum tracks map every diagnostic symptom directly to a training module that provides the structural remediation plan.',
        links: [
            { label: 'Browse Curriculum tracks', href: '/curriculum', primary: true },
            { label: 'Access Member Vault', href: '/vault' },
        ],
        color: 'purple',
    },
    {
        number: '05',
        title: 'Explore Exogram (B2B Governance Platform)',
        subtitle: 'Runtime enforcement of policy-as-code',
        description: 'Frameworks are meaningless if they are not enforced at runtime. Exogram physically intercepts AI payloads, guaranteeing deterministic, verified output before it reaches production environments.',
        links: [
            { label: 'Discover Exogram Platform', href: '/exogram', primary: true }
        ],
        color: 'emerald',
    },
    {
        number: '06',
        title: 'Career Intelligence (CareerWin.ai)',
        subtitle: 'Individual career acceleration & revenue engine',
        description: 'For engineers, architects, and product leaders seeking role benchmarks, leveling intelligence, and compensation strategy powered by the AI Economics Knowledge Engine.',
        links: [
            { label: 'Explore CareerWin.ai Platform', href: 'https://careerwin.ai/', primary: true, external: true }
        ],
        color: 'blue',
    },
];

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string; primaryBg: string }> = {
    red: { border: 'border-red-500/30', bg: 'bg-red-500/5', text: 'text-red-900 font-extrabold', dot: 'bg-red-400', primaryBg: 'bg-gradient-to-r from-red-500 to-orange-600 text-white font-semibold' },
    indigo: { border: 'border-indigo-500/30', bg: 'bg-indigo-500/5', text: 'text-indigo-900 font-extrabold', dot: 'bg-indigo-400', primaryBg: 'bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold' },
    cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/5', text: 'text-cyan-900 font-extrabold', dot: 'bg-cyan-400', primaryBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-900 font-extrabold', dot: 'bg-purple-400', primaryBg: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold' },
    emerald: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', text: 'text-emerald-900 font-extrabold', dot: 'bg-emerald-400', primaryBg: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold' },
    blue: { border: 'border-blue-500/30', bg: 'bg-blue-500/5', text: 'text-blue-900 font-extrabold', dot: 'bg-blue-400', primaryBg: 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold' },
};

export default function StartHerePage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

                {/* Section Header */}
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Guide</span><span>/</span><span className="text-cyan-900 font-extrabold">Start Here</span>
                </div>

                <div className="mb-16 border-b border-zinc-400 pb-12">
                    <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                        The Operational Sequence
                    </h1>
                    <p className="text-xl text-zinc-900 leading-relaxed font-semibold max-w-2xl">
                        A six-step onboarding sequence from identifying unquantified risk to enforcing runtime AI governance and accessing career intelligence.
                    </p>
                </div>

                {/* 5-Second Persona Decision Tree */}
                <section className="mb-16 bg-zinc-950 text-white border border-zinc-800 rounded-3xl p-8 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                        5-Second Onboarding Selector
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold font-grotesk mb-6 text-white">
                        Which Describes Your Current Operational Role?
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link href="/services" className="group p-5 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-cyan-500 transition-all flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block mb-1">CFO / Finance Leader</span>
                                <p className="text-sm font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">"I need to audit R&D spend and measure AI unit ROI."</p>
                                <p className="text-xs text-zinc-400 leading-relaxed">Quantify engineering capital efficiency, calculate your Technical Insolvency Date, and run R&D capital audits.</p>
                            </div>
                            <span className="text-xs font-mono font-bold text-cyan-400 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Explore CFO Solutions &rarr;
                            </span>
                        </Link>

                        <Link href="/for-ctos" className="group p-5 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-indigo-500 transition-all flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-1">CTO / VP Engineering</span>
                                <p className="text-sm font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">"I need to govern AI agents and eliminate tech debt."</p>
                                <p className="text-xs text-zinc-400 leading-relaxed">Enforce runtime governance via Exogram, baseline Product Debt Index (PDI), and structure team velocity.</p>
                            </div>
                            <span className="text-xs font-mono font-bold text-indigo-400 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Explore CTO Solutions &rarr;
                            </span>
                        </Link>

                        <Link href="/for-boards" className="group p-5 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-amber-500 transition-all flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block mb-1">Board Member / PE Partner</span>
                                <p className="text-sm font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">"I need technical due diligence and capital risk oversight."</p>
                                <p className="text-xs text-zinc-400 leading-relaxed">Access enterprise scenario modeling, portfolio risk assessments, and fractional CPO/CTO retainers.</p>
                            </div>
                            <span className="text-xs font-mono font-bold text-amber-400 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Explore Board Solutions &rarr;
                            </span>
                        </Link>

                        <Link href="/careerwin" className="group p-5 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-purple-500 transition-all flex flex-col justify-between">
                            <div>
                                <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider block mb-1">Senior Engineer / Leader</span>
                                <p className="text-sm font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">"I need market role benchmarks and leveling strategy."</p>
                                <p className="text-xs text-zinc-400 leading-relaxed">Weaponize career intelligence, map Staff/Principal scope, and negotiate data-backed compensation.</p>
                            </div>
                            <span className="text-xs font-mono font-bold text-purple-400 mt-4 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                Launch Career Intelligence &rarr;
                            </span>
                        </Link>
                    </div>
                </section>

                {/* Why This Exists Section */}
                <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm">
                    <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">Why This Exists</h3>
                    <p className="text-zinc-900 leading-relaxed font-semibold text-sm sm:text-base">
                        Most AI discussions focus on model capabilities. My work focuses on what happens after deployment. 
                        As AI systems become embedded in products, organizations face a new class of problems involving economics, governance, security, reliability, and operational control. 
                        The Production AI Governance Framework exists to help organizations understand, measure, and manage those challenges.
                    </p>
                </section>

                {/* Steps List */}
                <div className="space-y-12 mb-20">
                    {steps.map((step) => {
                        const colors = colorMap[step.color];
                        return (
                            <div key={step.number} className={`rounded-3xl border ${colors.border} overflow-hidden bg-white/50 backdrop-blur-sm shadow-sm`}>
                                <div className={`${colors.bg} px-8 py-6 border-b ${colors.border}`}>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-4xl font-mono font-bold ${colors.text}`}>{step.number}</span>
                                        <div>
                                            <h2 className="text-2xl font-grotesk font-bold text-zinc-950">{step.title}</h2>
                                            <p className="text-zinc-900 text-sm font-semibold mt-1">{step.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-8 py-6 bg-white/80">
                                    <p className="text-zinc-900 font-semibold mb-6 leading-relaxed text-sm sm:text-base">{step.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.links.map((link: StepLink) => (
                                            link.external ? (
                                                <a
                                                    key={link.href}
                                                    href={link.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`px-6 py-3 ${colors.primaryBg} rounded-xl font-bold text-xs uppercase tracking-widest shadow-sm hover:opacity-90 transition-opacity`}
                                                >
                                                    {link.label} &rarr;
                                                </a>
                                            ) : (
                                                <Link
                                                    key={link.href}
                                                    href={link.href}
                                                    className={
                                                        link.primary
                                                            ? `px-6 py-3 ${colors.primaryBg} rounded-xl font-bold text-xs uppercase tracking-widest shadow-sm hover:opacity-90 transition-opacity`
                                                            : `px-6 py-3 border border-zinc-300 rounded-xl text-zinc-950 text-xs font-bold uppercase tracking-widest bg-zinc-50 hover:bg-zinc-100 transition-colors`
                                                    }
                                                >
                                                    {link.label} &rarr;
                                                </Link>
                                            )
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Ecosystem Alignment Map */}
                <section className="mb-20 border-t border-zinc-300 pt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold font-grotesk text-zinc-950">Ecosystem Alignment Map</h3>
                        <p className="text-sm text-zinc-900 mt-1">Every resource on this site is mapped back to the Production AI Governance research program.</p>
                    </div>
                    <EcosystemMap />
                </section>

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
