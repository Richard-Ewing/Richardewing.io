import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '../../terms';
import { PILLARS, CATEGORY_MAP, KEEP_TERMS } from '../../pillarsMapping';
import ShareButtons from '@/components/ShareButtons';
import { DiagnosticBridge } from '@/components/DiagnosticBridge';

import { clampSeoTitle, formatSeoDescription } from '@/app/lib/seo-metadata';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
    return PILLARS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const pillar = PILLARS.find(p => p.slug === slug);
    if (!pillar) return {};

    const baseTitle = clampSeoTitle(`${pillar.name} Glossary`, 42);
    const metaDesc = formatSeoDescription(
        `Explore the ${pillar.name} glossary with plain-English definitions, financial formulas, and operating playbooks for CEOs, CFOs, and VPs of Engineering.`
    );
    return {
        title: baseTitle,
        description: metaDesc,
        alternates: { canonical: `https://www.richardewing.io/glossary/pillars/${slug}` },
        openGraph: {
            title: `${baseTitle} | Richard Ewing`,
            description: metaDesc,
            url: `https://www.richardewing.io/glossary/pillars/${slug}`,
            siteName: 'Richard Ewing',
            type: 'website',
            images: [{ url: `https://www.richardewing.io/api/og?title=${encodeURIComponent(pillar.name)}&category=Glossary%20Pillar`, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${baseTitle} | Richard Ewing`,
            description: metaDesc,
            images: [`https://www.richardewing.io/api/og?title=${encodeURIComponent(pillar.name)}&category=Glossary%20Pillar`],
        },
    };
}

export default async function PillarPage({ params }: Props) {
    const { slug } = await params;
    const pillar = PILLARS.find(p => p.slug === slug);
    if (!pillar) notFound();

    // Find all terms that map to this pillar
    const pillarTerms = glossaryTerms.filter(term => {
        const mappedPillarSlug = CATEGORY_MAP[term.category] || 'cloud-infrastructure-finops'; // fallback
        return mappedPillarSlug === slug;
    });

    // Sort terms alphabetically
    pillarTerms.sort((a, b) => a.title.localeCompare(b.title));

    const pillarSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'DefinedTermSet',
                '@id': `https://www.richardewing.io/glossary/pillars/${slug}#termset`,
                name: `${pillar.name} Glossary`,
                description: `Canonical dictionary of ${pillar.name} terminology, definitions, and financial execution frameworks by Richard Ewing.`,
                url: `https://www.richardewing.io/glossary/pillars/${slug}`,
                hasDefinedTerm: pillarTerms.slice(0, 60).map((t) => ({
                    '@type': 'DefinedTerm',
                    name: t.title,
                    description: t.definition.slice(0, 240).replace(/\n/g, ' ').trim(),
                    url: KEEP_TERMS.includes(t.slug)
                        ? `https://www.richardewing.io/glossary/${t.slug}`
                        : `https://www.richardewing.io/glossary/pillars/${slug}#${t.slug}`,
                })),
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
                    { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://www.richardewing.io/glossary' },
                    { '@type': 'ListItem', position: 3, name: pillar.name, item: `https://www.richardewing.io/glossary/pillars/${slug}` },
                ],
            },
        ],
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pillarSchema) }}
            />
            <div className="max-w-4xl w-full mx-auto px-4 sm:px-6">
                <div className="mb-6 flex items-center gap-2 text-xs font-bold font-mono text-zinc-950 uppercase tracking-widest">
                    <Link href="/glossary" className="hover:text-cyan-900 transition-colors">Glossary Pillars</Link>
                    <span>/</span>
                    <span className="text-cyan-900">{pillar.name}</span>
                </div>

                <header className="mb-16 border-b border-zinc-400 pb-10">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-4">
                        {pillar.name}
                    </h1>
                    <p className="text-xl text-zinc-700 font-medium">
                        Comprehensive dictionary of terms, concepts, and frameworks relating to {pillar.name.toLowerCase()}.
                    </p>
                </header>

                <div className="space-y-16">
                    {pillarTerms.map((term) => (
                        <div key={term.slug} id={term.slug} className="scroll-mt-32 card p-8 border-cyan-500/20 bg-white">
                            <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-4 flex items-center gap-3">
                                {term.title}
                                <a href={`#${term.slug}`} className="text-zinc-400 hover:text-cyan-600 transition-colors text-xl">#</a>
                            </h2>
                            <div className="text-xs font-bold font-mono text-cyan-600 uppercase tracking-widest mb-6 border-b border-zinc-200 pb-4">
                                {term.category}
                            </div>
                            <div className="prose prose-zinc max-w-none text-lg text-zinc-800 leading-relaxed font-semibold">
                                {term.definition.split('\n\n').map((p, i) => (
                                    <p key={i} className="mb-4">{p}</p>
                                ))}
                            </div>
                            {term.whyItMatters && (
                                <div className="mt-8 pt-6 border-t border-zinc-200">
                                    <h3 className="text-lg font-grotesk font-bold text-zinc-950 mb-3">Why It Matters</h3>
                                    <p className="text-zinc-700">{term.whyItMatters}</p>
                                </div>
                            )}
                            {term.faqs && term.faqs.length > 0 && (
                                <div className="mt-6 pt-6 border-t border-zinc-200 space-y-4">
                                    <h3 className="text-sm font-mono font-bold text-zinc-900 uppercase tracking-wider">Direct Q&amp;A</h3>
                                    {term.faqs.map((f, fi) => (
                                        <div key={fi} className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
                                            <div className="text-sm font-bold text-zinc-950 mb-1">{f.question}</div>
                                            <div className="text-sm text-zinc-700 leading-relaxed">{f.answer}</div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {KEEP_TERMS.includes(term.slug) && (
                                <div className="mt-6">
                                    <Link href={`/glossary/${term.slug}`} className="text-cyan-700 hover:text-cyan-900 font-bold underline underline-offset-4">
                                        Read the full guide on {term.title} &rarr;
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-24">
                    <DiagnosticBridge 
                        diagnosticName="R&D Capital Diagnostic"
                        frameworkSlug="product-debt-index"
                        frameworkName="Product Debt Index"
                        frameworkDescription="Quantify the financial impact of unaddressed technical debt and margin erosion."
                        exogramRisk="Margin Collapse"
                        exogramDescription="Lock down AI execution paths to prevent unpredictable runaway costs at scale."
                    />
                </div>
            </div>
        </main>
    );
}
