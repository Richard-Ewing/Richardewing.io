import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { glossaryTerms } from '../../terms';
import { PILLARS, CATEGORY_MAP, KEEP_TERMS } from '../../pillarsMapping';
import ShareButtons from '@/components/ShareButtons';
import { DiagnosticBridge } from '@/components/DiagnosticBridge';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return PILLARS.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const pillar = PILLARS.find(p => p.slug === slug);
    if (!pillar) return {};
    
    return {
        title: `${pillar.name} Glossary & Terms | Richard Ewing`,
        description: `Comprehensive glossary of ${pillar.name} terminology, definitions, and execution frameworks.`,
        alternates: { canonical: `https://www.richardewing.io/glossary/pillars/${slug}` }
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

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
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
