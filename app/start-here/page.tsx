import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Start Here — Your Guide to AI Economics | Richard Ewing',
    description: 'A guided, 5-step operational framework from identifying hidden AI risk to runtime enforcement via Exogram.',
    alternates: { canonical: 'https://www.richardewing.io/start-here' },
    openGraph: {
        title: 'Start Here — Your Guide to AI Economics',
        description: 'A guided, 5-step operational framework from identifying hidden AI risk to runtime enforcement via Exogram.',
        url: 'https://www.richardewing.io/start-here',
        type: 'website',
    },
};

const steps = [
    {
        number: '01',
        title: 'Hidden Risk',
        subtitle: 'Identify your organizational failure mode',
        description: 'Probabilistic AI systems introduce non-deterministic execution paths into deterministic enterprise environments. Unmanaged, this creates "Governance Drift," eroding margins, MTTR, and technical intimacy.',
        links: [
            { label: 'View Enterprise Challenges', href: '/challenges', primary: true }
        ],
        color: 'red',
    },
    {
        number: '02',
        title: 'Diagnostics',
        subtitle: 'Quantify operational entropy',
        description: 'You cannot manage what you do not measure. Run a diagnostic assessment to generate an objective baseline of your current Product Debt, AI Margins, or Developer Productivity.',
        links: [
            { label: 'Product Debt Index (PDI)', href: '/tools/pdi', primary: true },
            { label: 'AI Unit Economics (AUEB)', href: '/tools/aueb' },
            { label: 'Revenue Per Engineer (APER)', href: '/tools/aper' },
        ],
        color: 'cyan',
    },
    {
        number: '03',
        title: 'Frameworks',
        subtitle: 'Understand the doctrine',
        description: 'Once measured, you must establish an operational doctrine. Our semantic routing maps every diagnostic symptom directly to an enterprise framework that provides the structural remediation plan.',
        links: [
            { label: 'Semantic Glossary', href: '/glossary', primary: true },
            { label: 'Executive Curriculum', href: '/vault/curriculum/tracks' },
        ],
        color: 'purple',
    },
    {
        number: '04',
        title: 'Exogram',
        subtitle: 'Runtime enforcement of policy-as-code',
        description: 'Frameworks are meaningless if they are not enforced at runtime. Exogram physically intercepts AI payloads, guaranteeing deterministic, verified output before it reaches production environments.',
        links: [
            { label: 'Discover Exogram', href: '/exogram', primary: true }
        ],
        color: 'emerald',
    },
    {
        number: '05',
        title: 'Advisory',
        subtitle: 'Institutional implementation',
        description: 'For organizations facing critical technical insolvency or rapid AI scaling challenges, fractional advisory provides the executive oversight needed to deploy these controls.',
        links: [
            { label: 'Advisory Engagements', href: '/advisory', primary: true },
        ],
        color: 'zinc',
    },
];

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string; primaryBg: string }> = {
    red: { border: 'border-red-500/30', bg: 'bg-red-500/5', text: 'text-red-900 font-extrabold', dot: 'bg-red-400', primaryBg: 'bg-gradient-to-r from-red-500 to-orange-600 text-white' },
    cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/5', text: 'text-cyan-900 font-extrabold', dot: 'bg-cyan-400', primaryBg: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-900 font-extrabold', dot: 'bg-purple-400', primaryBg: 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' },
    emerald: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', text: 'text-emerald-900 font-extrabold', dot: 'bg-emerald-400', primaryBg: 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white' },
    zinc: { border: 'border-zinc-500/30', bg: 'bg-zinc-500/5', text: 'text-zinc-900 font-extrabold', dot: 'bg-zinc-400', primaryBg: 'bg-gradient-to-r from-zinc-700 to-zinc-900 text-white' },
};

export default function StartHerePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl w-full relative z-10 mx-auto">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="mb-6 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                        <span>Guide</span><span>/</span><span className="text-cyan-900 font-extrabold">Start Here</span>
                    </div>

                    <div className="mb-16 border-b border-zinc-400 pb-12">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-6">
                            The Operational Sequence
                        </h1>
                        <p className="text-lg text-zinc-900 leading-relaxed max-w-2xl font-semibold">
                            A five-step, deterministic pathway from identifying unquantified risk to enforcing runtime AI governance. Skip nothing.
                        </p>
                    </div>

                    {/* Steps */}
                    {steps.map((step, i) => {
                        const colors = colorMap[step.color];
                        return (
                            <div key={step.number} className={`mb-12 rounded-2xl border ${colors.border} overflow-hidden bg-white/50 backdrop-blur-sm`}>
                                <div className={`${colors.bg} px-8 py-6 border-b ${colors.border}`}>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-4xl font-mono font-bold ${colors.text}`}>{step.number}</span>
                                        <div>
                                            <h2 className="text-2xl font-grotesk font-bold text-zinc-900">{step.title}</h2>
                                            <p className="text-zinc-900 text-sm font-semibold mt-1">{step.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-8 py-6">
                                    <p className="text-zinc-900 font-medium mb-6 leading-relaxed">{step.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.links.map(link => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={
                                                    link.primary
                                                        ? `px-6 py-3 ${colors.primaryBg} rounded-lg font-bold text-sm uppercase tracking-widest shadow-sm hover:opacity-90 transition-opacity`
                                                        : `px-6 py-3 border ${colors.border} rounded-lg text-zinc-950 text-sm font-bold uppercase tracking-widest bg-zinc-50 hover:bg-zinc-100 transition-colors`
                                                }
                                            >
                                                {link.label} &rarr;
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
