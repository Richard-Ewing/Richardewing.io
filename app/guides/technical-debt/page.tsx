import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '@/app/glossary/terms';

export const metadata: Metadata = {
    title: 'The Complete Guide to Technical Debt — Economic Framework | Richard Ewing',
    description: 'The definitive hub for technical debt: what it is, how to measure it in dollars and quarters, how to manage it, and when to pay it down. 50+ related terms, tools, and frameworks.',
    keywords: ['technical debt guide', 'technical debt explained', 'how to measure technical debt', 'technical debt economics', 'technical insolvency', 'product debt index'],
    alternates: { canonical: 'https://www.richardewing.io/guides/technical-debt' },
    openGraph: { title: 'The Complete Guide to Technical Debt', description: 'From definition to dollars: the economic framework for managing technical debt.', url: 'https://www.richardewing.io/guides/technical-debt', type: 'article' },
};

const sections = [
    {
        title: 'Core Concepts',
        description: 'Foundational definitions and frameworks',
        slugs: ['technical-debt', 'technical-debt-definition', 'legacy-code', 'refactoring', 'code-smell', 'technical-debt-ratio'],
        color: 'rose',
    },
    {
        title: 'Economic Measurement',
        description: 'Quantify debt in dollars and quarters',
        slugs: ['technical-insolvency-date', 'innovation-tax', 'product-debt-index', 'maintenance-load', 'feature-velocity'],
        color: 'amber',
    },
    {
        title: 'Debt Types',
        description: 'Categories of technical debt',
        slugs: ['architecture-debt', 'infrastructure-debt', 'documentation-debt', 'test-debt', 'dependency-debt', 'ux-debt'],
        color: 'cyan',
    },
    {
        title: 'AI-Era Debt',
        description: 'New forms of debt from AI adoption',
        slugs: ['ai-technical-debt', 'orchestration-debt', 'model-drift', 'ai-hallucination', 'ai-cogs'],
        color: 'violet',
    },
    {
        title: 'Remediation',
        description: 'Strategies for paying down debt',
        slugs: ['refactoring', 'modernization', 'sunset-protocol', 'kill-switch-protocol', 'shift-left-testing'],
        color: 'emerald',
    },
];

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

export default function TechnicalDebtGuidePage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'The Complete Guide to Technical Debt — Economic Framework',
        description: 'The definitive hub for technical debt: what it is, how to measure it in dollars and quarters, how to manage it, and when to pay it down.',
        author: { '@type': 'Person', name: 'Richard Ewing', url: 'https://www.richardewing.io/principal' },
        publisher: { '@type': 'Person', name: 'Richard Ewing' },
        url: 'https://www.richardewing.io/guides/technical-debt',
        mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.richardewing.io/guides/technical-debt' },
    };
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
            { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://www.richardewing.io/guides' },
            { '@type': 'ListItem', position: 3, name: 'Technical Debt', item: 'https://www.richardewing.io/guides/technical-debt' },
        ],
    };
    const speakableSchema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: 'The Complete Guide to Technical Debt',
        speakable: { '@type': 'SpeakableSpecification', cssSelector: ['main h1', 'main p'] },
        url: 'https://www.richardewing.io/guides/technical-debt',
    };

    return (
        <main className="pt-20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 flex items-center gap-2 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                        <Link href="/guides" className="hover:text-cyan-400">Guides</Link><span>/</span><span className="text-rose-400 font-bold">Technical Debt</span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-white mb-6">
                        The Complete Guide to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">Technical Debt</span>
                    </h1>
                    <p className="text-lg text-zinc-400 mb-4 max-w-2xl">
                        From definition to dollars. This guide covers what technical debt is, how to measure it economically, the different types, AI-era forms, and how to remediate it.
                    </p>
                    <p className="text-sm text-zinc-500 mb-12">A pillar resource with 50+ linked glossary terms, tools, and frameworks.</p>

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
                                                <span className="text-sm text-white font-medium">{term?.title || slug}</span>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Tools for Measuring Technical Debt</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <Link href="/tools/pdi" className="block rounded-xl border border-rose-500/20 p-6 hover:border-rose-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">Product Debt Index (PDI)</h3>
                                <p className="text-sm text-zinc-400">Calculate your Technical Insolvency Date and debt in dollars.</p>
                            </Link>
                            <Link href="/tools/ev-se" className="block rounded-xl border border-teal-500/20 p-6 hover:border-teal-500/50 transition-colors">
                                <h3 className="text-lg font-bold text-white mb-2">EV-SE Calculator</h3>
                                <p className="text-sm text-zinc-400">Model the long-term sustainability of your engineering investment.</p>
                            </Link>
                        </div>
                    </div>

                    <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-8 mb-16">
                        <h2 className="text-2xl font-grotesk font-bold text-white mb-4">Get Expert Help</h2>
                        <p className="text-zinc-300 mb-6">Richard Ewing advises CTOs, CFOs, and boards on technical debt economics. R&D Capital Audits quantify your debt in dollars and quarters.</p>
                        <Link href="/advisory" className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 text-white font-bold hover:opacity-90 transition-opacity">Book an R&D Capital Audit →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
