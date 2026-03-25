import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';
import RelatedContent from '@/components/RelatedContent';

export const metadata: Metadata = {
    title: 'Engineering Budget Planning \u2014 Board-Ready Engineering Budgets | Richard Ewing',
    description: 'Engineering Budget Planning: Board-Ready Engineering Budgets. A comprehensive engineering economics guide by Richard Ewing.',
    keywords: ['engineering budget planning', 'engineering economics', 'richard ewing', 'free guide'],
    alternates: { canonical: 'https://www.richardewing.io/guides/engineering-budget-planning' },
    openGraph: { title: 'Engineering Budget Planning', description: 'Board-Ready Engineering Budgets. Engineering economics guide.', url: 'https://www.richardewing.io/guides/engineering-budget-planning', type: 'article' },
};

const sections = [
    {
        "title": "Headcount Planning",
        "description": "Model your talent investment",
        "slugs": [
            "engineering-economics",
            "adjusted-productivity-efficiency-ratio",
            "innovation-tax",
            "maintenance-load",
            "feature-velocity"
        ],
        "color": "cyan"
    },
    {
        "title": "Infrastructure Costs",
        "description": "Forecast cloud and tooling spend",
        "slugs": [
            "infrastructure-debt",
            "dependency-debt",
            "capex-vs-opex",
            "technical-debt-ratio",
            "legacy-code"
        ],
        "color": "violet"
    },
    {
        "title": "Tooling & Vendor Stack",
        "description": "Consolidate and negotiate",
        "slugs": [
            "technical-debt",
            "code-smell",
            "test-debt",
            "documentation-debt",
            "refactoring"
        ],
        "color": "amber"
    },
    {
        "title": "Board Presentation",
        "description": "Translate to financial language",
        "slugs": [
            "ev-se",
            "product-debt-index",
            "technical-insolvency-date",
            "architecture-debt",
            "deployment-frequency"
        ],
        "color": "emerald"
    }
];

const colorMap: Record<string, string> = {
    rose: 'border-rose-500/30 bg-rose-500/5', amber: 'border-amber-500/30 bg-amber-500/5',
    cyan: 'border-cyan-500/30 bg-cyan-500/5', violet: 'border-violet-500/30 bg-violet-500/5',
    emerald: 'border-emerald-500/30 bg-emerald-500/5',
};
const textColorMap: Record<string, string> = {
    rose: 'text-rose-400', amber: 'text-amber-400', cyan: 'text-cyan-400',
    violet: 'text-violet-400', emerald: 'text-emerald-400',
};

export default function EngineeringBudgetPlanningPage() {
    const articleSchema = {
        '@context': 'https://schema.org', '@type': 'Article',
        headline: 'Engineering Budget Planning \u2014 Board-Ready Engineering Budgets',
        description: 'Engineering Budget Planning: comprehensive engineering economics guide.',
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Person', name: 'Richard Ewing' },
        url: 'https://www.richardewing.io/guides/engineering-budget-planning',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.richardewing.io/guides/engineering-budget-planning' },
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.richardewing.io/guides' },
            { '@type': 'ListItem', position: 3, name: 'Engineering Budget Planning', item: 'https://www.richardewing.io/guides/engineering-budget-planning' },
        ],
    };
    const speakableSchema = {
        '@context': 'https://schema.org', '@type': 'WebPage',
        name: 'Engineering Budget Planning',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['main h1', 'main p'] },
        url: 'https://www.richardewing.io/guides/engineering-budget-planning',
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-amber-400 font-bold">Engineering Budget Planning</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        Engineering Budget{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Planning</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">Board-Ready Engineering Budgets. A comprehensive engineering economics guide.</p>
                    <p className="text-sm text-zinc-500 mb-12">A pillar resource with linked glossary terms, tools, and frameworks.</p>

                    <div className="space-y-8 mb-16">
                        {sections.map((section, i) => (
                            <div key={i} className={`rounded-2xl border p-8 ${colorMap[section.color]}`}>
                                <h2 className={`text-2xl font-grotesk font-bold mb-2 ${textColorMap[section.color]}`}>{section.title}</h2>
                                <p className="text-zinc-400 text-sm mb-6">{section.description}</p>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    {section.slugs.map((slug: string) => {
                                        const term = glossaryTerms.find((t: { slug: string; title: string }) => t.slug === slug);
                                        return (
                                            <Link key={slug} href={`/glossary/${slug}`} className="block rounded-lg border border-white/10 bg-black/30 p-3 hover:border-white/30 transition-colors">
                                                <span className="text-sm text-white font-medium">{term?.title || slug}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Tools for This Guide</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/aper" className="block rounded-xl border border-amber-500/20 p-6 hover:border-amber-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">APER Calculator</h3>
                                <p className="text-sm text-zinc-400">Quantify your results with data-driven analysis.</p>
                            </Link>
                            <Link href="/tools/ev-se" className="block rounded-xl border border-amber-500/20 p-6 hover:border-amber-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">EV-SE Calculator</h3>
                                <p className="text-sm text-zinc-400">Quantify your results with data-driven analysis.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Get Expert Help</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing advises CTOs, CFOs, and boards on engineering economics. R&D Capital Audits quantify your investment in dollars and quarters.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold hover:opacity-90 transition-opacity">Book an R&D Capital Audit \u2192</Link>
                    </div>
                <RelatedContent currentSlug="engineering-budget-planning" type="guide" count={3} />
                    </div>
                </div>
            </main>
    );
}
