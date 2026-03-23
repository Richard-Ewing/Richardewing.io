import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import PremiumGuideCTA from '@/app/components/PremiumGuideCTA';

export const metadata: Metadata = {
    title: 'VC Technology Assessment Framework — Evaluate Before You Invest | Richard Ewing',
    description: 'Technology risk evaluation for VCs: technical founder assessment, code velocity indicators, architecture scalability signals, and a 10-minute diligence checklist.',
    keywords: ['VC due diligence', 'venture capital technology', 'technical founder assessment', 'startup technology evaluation', 'engineering team assessment'],
    alternates: { canonical: 'https://www.richardewing.io/guides/vc-technology-assessment' },
    openGraph: { title: 'VC Technology Assessment Framework', description: 'Evaluate engineering orgs before you invest.', url: 'https://www.richardewing.io/guides/vc-technology-assessment', type: 'article' },
};

const sections = [
    {
        title: 'Technical Founder Assessment',
        description: 'Evaluating the technical co-founder before term sheet',
        slugs: ['revenue-per-engineer', 'dora-metrics', 'engineering-allocation', 'conways-law', 'team-topology'],
        color: 'emerald',
    },
    {
        title: 'Velocity Indicators',
        description: 'Signals that predict engineering execution speed',
        slugs: ['feature-velocity', 'sprint-velocity', 'ci-cd', 'shift-left-testing', 'developer-experience'],
        color: 'cyan',
    },
    {
        title: 'Scalability Signals',
        description: 'Architecture decisions that enable or block growth',
        slugs: ['microservices', 'monolith', 'event-driven-architecture', 'scalability', 'infrastructure-as-code'],
        color: 'violet',
    },
    {
        title: 'Risk Assessment',
        description: 'Hidden technical risks in early-stage companies',
        slugs: ['technical-debt', 'vendor-lock-in', 'infrastructure-debt', 'dependency-debt', 'test-debt'],
        color: 'rose',
    },
    {
        title: 'Portfolio Monitoring',
        description: 'Track engineering health across your portfolio',
        slugs: ['product-debt-index', 'innovation-tax', 'technical-insolvency-date', 'maintenance-load', 'engineering-roi'],
        color: 'amber',
    },
];

const colorMap: Record<string, string> = {
    rose: 'border-rose-500/30 bg-rose-500/5', amber: 'border-amber-500/30 bg-amber-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
};
const textColorMap: Record<string, string> = {
    rose: 'text-rose-400', amber: 'text-amber-400', cyan: 'text-cyan-400', violet: 'text-violet-400', emerald: 'text-emerald-400',
};

export default function VCTechnologyAssessmentGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'VC Technology Assessment Framework',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/vc-technology-assessment',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-emerald-400 font-bold">VC Assessment</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20">🔒 Premium — $29</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        VC Technology{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Assessment Framework</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        For VCs who want to evaluate technology risk before writing a check. Technical founder assessment, velocity indicators, the 10-minute diligence checklist you can run from your phone.
                    </p>
                    <p className="text-sm text-zinc-500 mb-4">35+ linked glossary terms · 45 min read · For VCs, Angel Investors, Board Members</p>
                    <PremiumGuideCTA guideSlug="vc-technology-assessment" guideName="VC Technology Assessment Framework" />

                    <div className="space-y-8 mb-16">
                        {sections.map((section, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[section.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-2 ${textColorMap[section.color]}`}>{section.title}</h2>
                                <p className="text-zinc-400 text-sm mb-6">{section.description}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {section.slugs.map((slug) => {
                                        const term = glossaryTerms.find((t: { slug: string; title: string }) => t.slug === slug);
                                        return (
                                            <Link key={slug} href={`/glossary/${slug}`} className="block rounded-lg border border-white/10 bg-black/30 p-3 hover:border-white/30 transition-colors">
                                                <span className="text-sm text-white font-medium">{term?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">VC Assessment Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aper" className="block rounded-xl border border-emerald-500/20 p-6 hover:border-emerald-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">APER Calculator</h3>
                                <p className="text-sm text-zinc-400">Quick revenue-per-engineer screening for portfolio companies.</p>
                            </Link>
                            <Link href="/tools/ev-se" className="block rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">EV-SE Calculator</h3>
                                <p className="text-sm text-zinc-400">Enterprise value per software engineer — industry benchmarking.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Standing Due Diligence Partner</h2>
                        <p className="text-zinc-300 mb-6">PE/VC firms engage Richard Ewing as a standing due diligence partner. Get pre-negotiated rates for deal-flow technical assessments and portfolio monitoring.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold hover:opacity-90 transition-opacity">Discuss VC Partnership →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
