import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Start Here — Your Guide to Product Economics | Richard Ewing',
    description: 'New to product economics? Start here. Free diagnostic tools, 400+ glossary terms, learning tracks, and advisory services — a guided path from diagnosis to action.',
    keywords: [
        'product economics start', 'technical debt guide', 'CTO resources',
        'engineering economics introduction', 'Richard Ewing start here',
        'free engineering diagnostic', 'product debt assessment',
    ],
    alternates: { canonical: 'https://www.richardewing.io/start-here' },
    openGraph: {
        title: 'Start Here — Your Guide to Product Economics',
        description: 'New here? Start with a free diagnostic, explore 400+ terms, and take the first step toward R&D capital efficiency.',
        url: 'https://www.richardewing.io/start-here',
        type: 'website',
    },
};

const steps = [
    {
        number: '01',
        title: 'Diagnose',
        subtitle: 'Run a free diagnostic tool — takes 60 seconds',
        description: 'Start with the Product Debt Index to quantify your technical debt in dollar terms. Or try the AI Unit Economics Benchmark to find your AI collapse point.',
        links: [
            { label: 'Product Debt Index (PDI)', href: '/tools/pdi', primary: true },
            { label: 'AI Unit Economics (AUEB)', href: '/tools/aueb' },
            { label: 'Revenue Per Engineer (APER)', href: '/tools/aper' },
            { label: 'Valuation Engine (EV-SE)', href: '/tools/ev-se' },
        ],
        color: 'cyan',
    },
    {
        number: '02',
        title: 'Learn',
        subtitle: 'Understand the frameworks behind the numbers',
        description: 'Explore 400+ glossary terms, structured learning tracks for CTOs, PMs, and Investors, and published frameworks on technical debt, AI economics, and R&D capital allocation.',
        links: [
            { label: 'Glossary (400+ Terms)', href: '/glossary', primary: true },
            { label: 'Curriculum', href: '/curriculum' },
            { label: 'Product Economist Doctrine', href: '/doctrine' },
            { label: 'Articles & Frameworks', href: '/articles' },
        ],
        color: 'purple',
    },
    {
        number: '03',
        title: 'Act',
        subtitle: 'Get expert advisory or implement yourself',
        description: 'If the diagnostics reveal risk, take the next step. Book a $2,500 diagnostic engagement, or explore fractional CTO and board advisory options.',
        links: [
            { label: 'Advisory Services', href: '/advisory', primary: true },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Case Studies', href: '/case-studies' },
            { label: 'R&D Audit Checklist', href: '/checklist' },
        ],
        color: 'emerald',
    },
];

const colorMap: Record<string, { border: string; bg: string; text: string; dot: string; primaryBg: string }> = {
    cyan: { border: 'border-cyan-500/30', bg: 'bg-cyan-500/5', text: 'text-cyan-400', dot: 'bg-cyan-400', primaryBg: 'bg-gradient-to-r from-cyan-500 to-blue-600' },
    purple: { border: 'border-purple-500/30', bg: 'bg-purple-500/5', text: 'text-purple-400', dot: 'bg-purple-400', primaryBg: 'bg-gradient-to-r from-purple-500 to-pink-600' },
    emerald: { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', text: 'text-emerald-400', dot: 'bg-emerald-400', primaryBg: 'bg-gradient-to-r from-emerald-500 to-teal-600' },
};

export default function StartHerePage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <div className="max-w-4xl w-full relative z-10 mx-auto">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <span>Guide</span><span>/</span><span className="text-cyan-400 font-bold">Start Here</span>
                    </div>

                    <div className="mb-16 border-b border-white/10 pb-12">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-white mb-6">
                            New Here?{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cobalt">
                                Start Here.
                            </span>
                        </h1>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-2xl">
                            Three steps from diagnosis to action. Free tools, 400+ definitions,
                            structured learning — everything you need to treat engineering as a capital function.
                        </p>
                    </div>

                    {/* Steps */}
                    {steps.map((step, i) => {
                        const colors = colorMap[step.color];
                        return (
                            <div key={step.number} className={`mb-12 rounded-2xl border ${colors.border} overflow-hidden`}>
                                <div className={`${colors.bg} px-8 py-6 border-b ${colors.border}`}>
                                    <div className="flex items-center gap-4">
                                        <span className={`text-4xl font-mono font-bold ${colors.text}`}>{step.number}</span>
                                        <div>
                                            <h2 className="text-2xl font-grotesk font-bold text-white">{step.title}</h2>
                                            <p className="text-zinc-400 text-sm mt-1">{step.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-8 py-6">
                                    <p className="text-zinc-400 mb-6">{step.description}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {step.links.map(link => (
                                            <Link
                                                key={link.href}
                                                href={link.href}
                                                className={
                                                    link.primary
                                                        ? `px-6 py-3 ${colors.primaryBg} rounded-lg text-white font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity`
                                                        : `px-6 py-3 border ${colors.border} rounded-lg text-white text-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-colors`
                                                }
                                            >
                                                {link.label} →
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* About section */}
                    <div className="text-center py-16 border-t border-white/10">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Who Built This?</h2>
                        <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                            Richard Ewing is a Product Economist and AI Capital Auditor.
                            He has scaled B2B SaaS to $25M ARR and is the founder of{' '}
                            <a href="https://exogram.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 underline">Exogram</a>, verification infrastructure for AI.
                            Published in CIO.com, Built In, Mind the Product, and HackerNoon.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/principal"
                                className="px-6 py-3 border border-white/20 rounded-lg text-white text-sm font-bold uppercase tracking-widest hover:border-white/40 transition-colors"
                            >
                                About Richard →
                            </Link>
                            <Link
                                href="/profiles"
                                className="px-6 py-3 border border-white/20 rounded-lg text-white text-sm font-bold uppercase tracking-widest hover:border-white/40 transition-colors"
                            >
                                Published Work →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
