import { getExogramDoc, exogramDocs } from '@/lib/exogram-docs';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import { notFound, permanentRedirect } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';

import { clampSeoTitle, formatSeoDescription } from '@/app/lib/seo-metadata';

export async function generateStaticParams() {
    return exogramDocs.map((doc) => ({
        slug: doc.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const doc = getExogramDoc(resolvedParams.slug);
    if (!doc) return { title: 'Not Found' };

    const rawTitle = doc.title.length > 27 ? doc.title : `${doc.title}: Exogram Docs`;
    const baseTitle = clampSeoTitle(rawTitle, 42);
    const finalDesc = formatSeoDescription(doc.description);
    const ogUrl = `https://www.richardewing.io/api/og?title=${encodeURIComponent(doc.title)}&category=Exogram%20Docs`;

    return {
        title: baseTitle,
        description: finalDesc,
        alternates: { canonical: `https://www.richardewing.io/exogram/docs/${doc.slug}` },
        openGraph: {
            title: `${baseTitle} | Richard Ewing`,
            description: finalDesc,
            url: `https://www.richardewing.io/exogram/docs/${doc.slug}`,
            siteName: 'Richard Ewing',
            type: 'article',
            images: [{ url: ogUrl, width: 1200, height: 630 }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${baseTitle} | Richard Ewing`,
            description: finalDesc,
            images: [ogUrl],
        }
    };
}

export default async function ExogramDocPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const doc = getExogramDoc(resolvedParams.slug);
    if (!doc) permanentRedirect('/exogram/docs');

    return (
        <article className="prose prose-zinc prose-purple max-w-none">
            <span className="text-xs font-bold font-medium font-mono text-purple-900 font-extrabold font-semibold uppercase tracking-widest">
                {doc.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-zinc-950 mt-2 mb-6">
                {doc.title}
            </h1>
            <p className="text-xl text-zinc-950 font-bold mb-12">
                {doc.description}
            </p>

            <div className="space-y-8">
                {doc.content.map((block, i) => {
                    if (block.type === 'h2') {
                        return <h2 key={i} className="text-2xl font-bold text-zinc-950 mt-12 mb-4 border-b border-zinc-400 pb-2">{block.text}</h2>;
                    }
                    if (block.type === 'p') {
                        return <p key={i} className="text-zinc-950 font-bold leading-relaxed">{block.text}</p>;
                    }
                    if (block.type === 'ul' && block.items) {
                        return (
                            <ul key={i} className="space-y-3 list-disc list-outside ml-5 text-zinc-900">
                                {block.items.map((item, j) => (
                                    <li key={j} className="pl-2 marker:text-purple-500">{item}</li>
                                ))}
                            </ul>
                        );
                    }
                    if (block.type === 'code') {
                        return (
                            <div key={i} className="my-6 rounded-xl overflow-hidden border border-zinc-400 bg-white">
                                <div className="px-4 py-2 border-b border-zinc-400 bg-zinc-50">
                                    <span className="text-xs font-bold font-medium font-mono text-zinc-900">{block.language || 'text'}</span>
                                </div>
                                <pre className="p-4 overflow-x-auto text-sm font-semibold font-mono text-zinc-900">
                                    <code>{block.text}</code>
                                </pre>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            
            <div className="mt-20 pt-8 border-t border-zinc-400 flex flex-wrap justify-between items-center gap-4 text-sm not-prose">
                <div className="flex items-center gap-3">
                    <span className="text-zinc-950 font-bold font-mono">EAAP Protocol v1.0</span>
                    <span className="text-purple-900 font-extrabold font-semibold bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">Verified Architecture</span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        href="/schedule?source=exogram-docs"
                        className="px-4 py-2 rounded-lg bg-zinc-950 hover:bg-zinc-800 text-white font-mono text-xs font-bold uppercase tracking-wider transition"
                    >
                        Book Architecture Briefing ↗
                    </Link>
                    <Link
                        href="/exogram/demo"
                        className="px-4 py-2 rounded-lg bg-white border border-zinc-300 hover:border-zinc-400 text-zinc-900 font-mono text-xs font-bold uppercase tracking-wider transition"
                    >
                        Request VPC Sandbox →
                    </Link>
                </div>
            </div>

            <div className="not-prose mt-10">
                <AdvisoryCTA variant="educational" termTitle={doc.title} />
            </div>
        </article>
    );
}
