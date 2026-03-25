import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import PremiumGuideCTA from '@/app/components/PremiumGuideCTA';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
    title: 'PE Technology Due Diligence Guide — What PE Firms Actually Evaluate | Richard Ewing',
    description: 'The insider guide to PE technology due diligence. 15 red flags, valuation impact, technical debt methodology, and case studies of deals that failed technical diligence.',
    keywords: ['PE due diligence', 'private equity technology', 'technical due diligence', 'M&A technology', 'quality of technology', 'engineering assessment'],
    alternates: { canonical: 'https://www.richardewing.io/guides/pe-due-diligence' },
    openGraph: { title: 'PE Technology Due Diligence Guide', description: 'What PE firms evaluate. 15 red flags that destroy valuations.', url: 'https://www.richardewing.io/guides/pe-due-diligence', type: 'article' },
};

const sections = [
    {
        title: 'Pre-Diligence Prep',
        description: 'What to prepare before the diligence team arrives',
        slugs: ['technical-debt', 'product-debt-index', 'engineering-allocation', 'documentation-debt', 'technical-debt-ratio'],
        color: 'amber',
    },
    {
        title: 'The 15 Red Flags',
        description: 'What kills valuations in technical diligence',
        slugs: ['technical-insolvency-date', 'maintenance-load', 'legacy-code', 'vendor-lock-in', 'infrastructure-debt'],
        color: 'rose',
    },
    {
        title: 'Engineering Team Assessment',
        description: 'How diligence teams evaluate your people',
        slugs: ['revenue-per-engineer', 'conways-law', 'dora-metrics', 'team-topology', 'cognitive-load'],
        color: 'cyan',
    },
    {
        title: 'Valuation Impact',
        description: 'How technical debt maps to valuation adjustments',
        slugs: ['enterprise-value', 'innovation-tax', 'engineering-roi', 'total-cost-of-ownership', 'rd-capitalization'],
        color: 'violet',
    },
    {
        title: 'Integration Planning',
        description: 'Post-close: the first 100 days of technical integration',
        slugs: ['modernization', 'refactoring', 'microservices', 'ci-cd', 'platform-engineering'],
        color: 'emerald',
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

export default function PEDueDiligenceGuidePage() {
    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org', '@type': 'Article',
                headline: 'PE Technology Due Diligence Guide',
                author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
                url: 'https://www.richardewing.io/guides/pe-due-diligence',
            })}} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-amber-400 font-bold">PE Due Diligence</span>
                    </div>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/20">🔒 Premium — $29</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        PE Technology{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-400">Due Diligence</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        The insider guide to PE technology due diligence. What the diligence team evaluates, the 15 red flags that destroy valuations, and real case studies of deals that failed.
                    </p>
                    <p className="text-sm text-zinc-500 mb-4">50+ linked glossary terms · 60 min read · For PE Operating Partners, CTOs (pre-exit)</p>

                    <PremiumGuideCTA guideSlug="pe-due-diligence" guideName="PE Technology Due Diligence Guide" />

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
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Due Diligence Tools</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/pdi" className="block rounded-xl border border-amber-500/20 p-6 hover:border-amber-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">PDI Calculator</h3>
                                <p className="text-sm text-zinc-400">Calculate the Product Debt Index — quantify hidden engineering liabilities.</p>
                            </Link>
                            <Link href="/tools/audit-interview" className="block rounded-xl border border-rose-500/20 p-6 hover:border-rose-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Audit Interview</h3>
                                <p className="text-sm text-zinc-400">AI-powered technical leadership assessment — standardized, bias-reduced.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Need a PE Due Diligence Partner?</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing serves as a technical due diligence partner for PE firms. Pre-acquisition assessments deliver a written Quality of Technology report for investment committees.</p>
                        <Link href="/api/buy/due_diligence" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 text-white font-bold hover:opacity-90 transition-opacity">Book Due Diligence — $15,000 →</Link>
                    </div>
                <RelatedContent currentSlug="pe-due-diligence" type="guide" count={3} />
                    </div>
                </div>
            </main>
    );
}
