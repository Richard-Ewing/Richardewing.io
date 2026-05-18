import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { challenges } from '../data';
import { DiagnosticBridge } from '../../components/DiagnosticBridge';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    return challenges.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const challenge = challenges.find(c => c.slug === slug);
    if (!challenge) return {};

    const ogTitle = `Solving ${challenge.title} | Enterprise Governance`;
    
    return {
        title: ogTitle,
        description: challenge.description,
        alternates: { canonical: `https://www.richardewing.io/challenges/${slug}` },
        openGraph: {
            title: ogTitle,
            description: challenge.description,
            url: `https://www.richardewing.io/challenges/${slug}`,
            siteName: 'Richard Ewing',
            type: 'website',
        }
    };
}

export default async function ChallengePage({ params }: Props) {
    const { slug } = await params;
    const challenge = challenges.find(c => c.slug === slug);
    if (!challenge) permanentRedirect('/challenges');

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
            </article>
        </div>
    );
}
