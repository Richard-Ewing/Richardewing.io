import { permanentRedirect } from 'next/navigation';

import type { Metadata } from 'next';
import Link from 'next/link';

import data from '@/app/lib/pseo-matrix.json';
import ProgrammaticAnswersRelated from '@/components/ProgrammaticAnswersRelated';

// Cache pages globally for 7 days (604,800 seconds) to prevent bot hammering
export const revalidate = 604800;

// Pre-read the matrix synchronously so ISR can generate paths
function getMatrixData() {
    return data || [];
}

// Generate static params for the ones that exist. For future ones, fallback to ISR
export async function generateStaticParams() {
    const data = getMatrixData();
    return data.map((item: any) => ({
        slug: item.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const data = getMatrixData();
    const item = data.find((i: any) => i.slug === slug);

    if (!item) {
        return { title: 'Comparison Not Found' };
    }

    return {
        title: item.title.substring(0, 55) + (item.title.length > 55 ? '...' : ''),
        description: item.metaDescription,
        alternates: { canonical: `https://www.richardewing.io/compare/${slug}` },
        openGraph: {
            title: item.title.substring(0, 55) + (item.title.length > 55 ? '...' : ''),
            description: item.metaDescription,
            url: `https://www.richardewing.io/compare/${slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [
                {
                    url: 'https://www.richardewing.io/og-image-home.png',
                    width: 1200,
                    height: 630,
                    alt: item.title,
                }
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: item.title.substring(0, 55) + (item.title.length > 55 ? '...' : ''),
            description: item.metaDescription,
            images: ['https://www.richardewing.io/og-image-home.png'],
        }
    };
}

export default async function PseoComparePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = getMatrixData();
    const item = data.find((i: any) => i.slug === slug);

    if (!item) {
        permanentRedirect('/compare');
    }

    return (
        <main className="pt-20 pb-20">
            <div className="page-container">
                <div className="max-w-4xl mx-auto">
                    <Link href="/compare" className="text-cyan-900 font-extrabold font-semibold font-mono text-sm font-semibold uppercase tracking-widest hover:text-cyan-900 font-extrabold font-semibold mb-8 inline-block">
                        ← Back to Comparisons
                    </Link>

                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        {item.toolA} <span className="text-zinc-950 font-bold text-3xl mx-2">vs</span> <span className="text-rose-400">{item.toolB}</span>
                    </h1>
                    <p className="text-xl text-zinc-950 font-bold mb-12 border-l-2 border-cyan-500 pl-4 py-2">
                        {item.title}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <div className="rounded-2xl border border-zinc-200 bg-white/[0.01] p-8">
                            <h2 className="text-xl font-bold font-grotesk text-rose-400 mb-4 uppercase tracking-widest">{item.toolB} Focus</h2>
                            <p className="text-zinc-950 font-bold leading-relaxed">{item.theirFocus}</p>
                        </div>
                        <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/5 p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="text-6xl text-cyan-900 font-extrabold font-semibold">✧</span>
                            </div>
                            <h2 className="text-xl font-bold font-grotesk text-cyan-900 font-extrabold font-semibold mb-4 uppercase tracking-widest">Our Audit Matrix Focus</h2>
                            <p className="text-zinc-900 leading-relaxed font-medium">{item.ourAdvantage}</p>
                        </div>
                    </div>

                    <div className="prose prose-zinc prose-lg max-w-none mb-16">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-6">The Technical Breakdown</h2>
                        {item.technicalDistinction.split('\n\n').map((paragraph: string, index: number) => (
                            <p key={index} className="text-zinc-950 font-bold leading-relaxed mb-6">{paragraph}</p>
                        ))}
                    </div>

                    {/* Exogram Traffic Trap / Lead Capture */}
                    <div className="rounded-3xl border border-zinc-400 bg-white p-8 md:p-12 text-center relative overflow-hidden mt-20">
                        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent opacity-50"></div>
                        <h3 className="text-2xl md:text-3xl font-grotesk font-bold text-zinc-950 mb-4 relative z-10">
                            Stop Guessing Your AI / Architectural Risk
                        </h3>
                        <p className="text-zinc-950 font-bold mb-8 max-w-2xl mx-auto relative z-10">
                            Don't base your technical architecture on generic feature comparisons. 
                            Use the <strong>Exogram Diagnostic Engine</strong> to calculate the precise EBITDA and Technical Debt liability of your architecture.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <Link href="/tools" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest border border-cyan-400 rounded-full transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]">
                                Audit Your Architecture Lab
                            </Link>
                        </div>
                    </div>

                    <ProgrammaticAnswersRelated seed={slug} maxCount={2} />

                </div>
            </div>
        </main>
    );
}
