import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { challenges } from '../data';
import { DiagnosticBridge } from '../../components/DiagnosticBridge';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return challenges.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const challenge = challenges.find(c => c.slug === slug);
    if (!challenge) return {};

    const ogTitle = `Stop ${challenge.title} Wasting R&D Capital | Governance`;
    
    return {
        title: ogTitle,
        description: `${challenge.description.slice(0, 110)} Spot margin leaks and engineering execution risks.`,
        alternates: { canonical: `https://www.richardewing.io/challenges/${slug}` },
        openGraph: {
            title: ogTitle,
            description: challenge.description,
            url: `https://www.richardewing.io/challenges/${slug}`,
            siteName: 'Richard Ewing',
            type: 'website',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: ogTitle,
            description: challenge.description,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

export default async function ChallengePage({ params }: Props) {
    const { slug } = await params;
    const challenge = challenges.find(c => c.slug === slug);
    if (!challenge) notFound();

    return (
        <div className="max-w-4xl w-full relative z-10 mx-auto">
            <div className="mb-6 flex items-center gap-2 text-xs font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <Link href="/challenges" className="hover:text-cyan-900 font-extrabold font-semibold">Challenges</Link>
                <span>/</span>
                <span className="text-cyan-900 font-extrabold font-semibold font-bold">{challenge.title}</span>
            </div>

            <article>
                <header className="mb-10 border-b border-zinc-400 pb-10">
                    <div className="flex items-center justify-between mb-3">
                        <div className="text-xs font-mono text-cyan-500 uppercase tracking-widest font-bold">Enterprise Challenge</div>
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-4">
                        {challenge.title}
                    </h1>
                    <p className="text-xl text-zinc-900 font-semibold leading-relaxed">
                        {challenge.description}
                    </p>
                </header>

                <section className="mb-12 p-8 rounded-2xl bg-zinc-50 border border-zinc-400">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                            <span className="text-2xl text-red-900">⚠️</span>
                        </div>
                        <div>
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-3">The Pain Point</h2>
                            <p className="text-lg text-zinc-950 font-bold leading-relaxed">
                                {challenge.painPoint}
                            </p>
                        </div>
                    </div>
                </section>
                
                <DiagnosticBridge 
                    diagnosticName={challenge.diagnosticName}
                    frameworkSlug={challenge.frameworkSlug}
                    frameworkName={challenge.frameworkName}
                    frameworkDescription={`Mastering ${challenge.frameworkName} is critical to resolving ${challenge.title}. Without it, your organization will continue to misallocate capital and engineering capacity.`}
                    exogramRisk={challenge.exogramRisk}
                    exogramDescription={challenge.exogramDescription}
                />

                {challenge.relatedConcepts && challenge.relatedConcepts.length > 0 && (
                    <section className="mt-16 pt-12 border-t border-zinc-300">
                        <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-6">Related Canonical Specifications</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {challenge.relatedConcepts.map(conceptSlug => {
                                const concept = CANONICAL_CONCEPTS.find(c => c.slug === conceptSlug);
                                if (!concept) return null;
                                return (
                                    <Link key={conceptSlug} href={`/concepts/${conceptSlug}`} className="block p-5 bg-white border border-zinc-300 rounded-xl hover:border-cyan-500 hover:shadow-md transition-all group">
                                        <div className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-widest mb-2">{concept.slug}</div>
                                        <h3 className="text-lg font-bold text-zinc-950 mb-2 group-hover:text-cyan-900">{concept.title}</h3>
                                        <p className="text-sm text-zinc-700 font-semibold line-clamp-2">{concept.aeo?.shortDefinition || concept.definition}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                )}
            </article>
        </div>
    );
}
