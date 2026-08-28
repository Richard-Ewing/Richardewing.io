import type { Metadata } from 'next';
import Link from 'next/link';
import { permanentRedirect } from 'next/navigation';
import { subFrameworks, type SubFramework } from '@/app/lib/framework-data';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export async function generateStaticParams() {
    return [
        { slug: 'economics' },
        { slug: 'product' },
        { slug: 'engineering' },
        { slug: 'security' },
        { slug: 'operations' },
        { slug: 'runtime-governance' },
        { slug: 'agentic-control-plane' },
        { slug: 'inference-dividend-cascade' },
        { slug: 'general-contractor-pm' },
        { slug: 'subprime-code-governance' },
        { slug: 'mcp-zero-trust-gateway' },
        { slug: 'macro-coding-governance' },
        { slug: 'board-fiduciary-governance' },
        { slug: 'cfo-capital-allocation' },
        { slug: 'vp-engineering-operating-model' },
    ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const fw = subFrameworks[slug];
    if (!fw) {
        return { title: 'Framework Pillar Not Found' };
    }
    return {
        title: `${fw.name} | Production AI Governance Framework`,
        description: fw.overview,
        alternates: {
            canonical: `https://www.richardewing.io/framework/${slug}`,
        },
        openGraph: {
            title: `${fw.name} | Production AI Governance Framework`,
            description: fw.overview,
            url: `https://www.richardewing.io/framework/${slug}`,
            type: 'website',
            images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${fw.name} | Production AI Governance Framework`,
            description: fw.overview,
            images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
        }
    };
}

export default async function SubFrameworkPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const fw = subFrameworks[slug];
    
    // Redirect unknown pillars back to the main framework landing
    if (!fw) {
        permanentRedirect('/framework');
    }

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Breadcrumb Navigation */}
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <Link href="/framework" className="hover:text-indigo-900 transition-colors">The Framework</Link>
                    <span>/</span>
                    <span className="text-cyan-900 font-extrabold">{fw.name}</span>
                </div>

                {/* Pillar Header */}
                <section className="mb-12 border-b border-zinc-400 pb-12">
                    <div className="flex items-center gap-4 mb-3">
                        <span className="text-4xl">{fw.icon}</span>
                        <div>
                            <span className="text-xs font-mono font-bold text-indigo-900 uppercase tracking-wider block bg-indigo-50 border border-indigo-200 px-2 py-0.5 rounded-md inline-block">
                                Phase Goal: {fw.tagline}
                            </span>
                            <h1 className="text-3xl sm:text-5xl font-grotesk font-bold text-zinc-950 mt-1">
                                {fw.name}
                            </h1>
                        </div>
                    </div>
                    <p className="text-lg text-zinc-900 leading-relaxed font-semibold max-w-2xl mt-4">
                        {fw.overview}
                    </p>
                </section>

                {/* Why This Exists Section (Evidence-First Context) */}
                <section className="mb-12 bg-white border border-zinc-300 rounded-3xl p-6 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-indigo-500 to-purple-500" />
                    <h3 className="text-sm font-bold font-mono text-zinc-500 uppercase tracking-widest mb-2">Observed Evidence</h3>
                    <h4 className="text-base font-bold font-grotesk text-zinc-950 mb-2">The Direct Experience</h4>
                    <p className="text-sm text-zinc-900 leading-relaxed font-semibold italic">
                        "{fw.livedExperience}"
                    </p>
                </section>

                {/* Concepts Detail list */}
                <section className="space-y-12 mb-20">
                    <div className="border-b border-zinc-300 pb-4">
                        <h2 className="text-xl font-bold font-grotesk text-zinc-950">Core Analytical Axioms</h2>
                        <p className="text-xs text-zinc-900">Forensically proven concepts in this operational boundary.</p>
                    </div>

                    {fw.concepts.map((concept) => (
                        <div key={concept.id} className="p-6 sm:p-8 bg-white border border-zinc-300 rounded-3xl shadow-sm relative overflow-hidden group">
                            {/* Subtle Frame ID Tag */}
                            <div className="absolute top-0 right-0 px-3 py-1 bg-zinc-50 border-b border-l border-zinc-300 text-[10px] font-mono text-zinc-600 font-bold uppercase tracking-widest rounded-bl-xl">
                                {concept.id}
                            </div>

                            {/* Concept Title */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <h3 className="text-xl sm:text-2xl font-bold font-grotesk text-zinc-950 group-hover:text-indigo-900 transition-colors">
                                    {concept.name}
                                </h3>
                                {concept.conceptSlug && (
                                    <Link href={`/concepts/${concept.conceptSlug}`} className="text-xs font-mono font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1.5 rounded-full hover:bg-indigo-100 hover:border-indigo-300 transition-colors whitespace-nowrap shrink-0">
                                        Deep Dive Specification →
                                    </Link>
                                )}
                            </div>

                            {/* Definition, Problem, Importance */}
                            <div className="space-y-4 mb-6">
                                <div>
                                    <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider block mb-1">Definition</span>
                                    <p className="text-sm sm:text-base text-zinc-900 font-semibold leading-relaxed">{concept.definition}</p>
                                </div>

                                <div className="border-l-2 border-red-400 pl-4 bg-red-50/20 py-2 rounded-r-lg">
                                    <span className="text-[10px] font-mono font-bold text-red-700 uppercase tracking-wider block mb-1">The Problem</span>
                                    <p className="text-sm text-zinc-900 font-semibold leading-relaxed">{concept.problem}</p>
                                </div>

                                <div>
                                    <span className="text-[10px] font-mono font-bold text-indigo-900 uppercase tracking-wider block mb-1">Why It Matters</span>
                                    <p className="text-sm text-zinc-900 font-semibold leading-relaxed">{concept.whyItMatters}</p>
                                </div>
                            </div>

                            {/* Provenance Block */}
                            <div className="mb-6 pt-4 border-t border-zinc-200">
                                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-2">Provenance (Where This Appears)</span>
                                <div className="flex flex-wrap gap-2">
                                    {concept.provenance.map((prov, pIdx) => (
                                        <span key={pIdx} className="px-2.5 py-1 bg-[#F9F7F5] border border-zinc-300 text-xs font-semibold text-zinc-950 rounded-md">
                                            {prov}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Implementation Layer Grid */}
                            <div className="pt-4 border-t border-zinc-200 bg-[#FCFAF7] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 rounded-b-3xl border-t border-zinc-300">
                                <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-3">Governance Integration Mesh</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                    
                                    <div>
                                        <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-1">Research</span>
                                        <div className="text-xs text-zinc-950 font-semibold">
                                            {concept.implementation.research.map((r, rIdx) => (
                                                <div key={rIdx} className="mb-1 leading-snug">• {r}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-1">Diagnostics</span>
                                        <div className="text-xs text-zinc-950 font-semibold">
                                            {concept.implementation.diagnostics.map((d, dIdx) => (
                                                <div key={dIdx} className="mb-1 leading-snug">• {d}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider block mb-1">Education</span>
                                        <div className="text-xs text-zinc-950 font-semibold">
                                            {concept.implementation.education.map((e, eIdx) => (
                                                <div key={eIdx} className="mb-1 leading-snug">• {e}</div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-purple-50/50 border border-purple-200 p-3 rounded-xl">
                                        <span className="text-[9px] font-mono font-bold text-purple-700 uppercase tracking-wider block mb-1">Enforcement Layer</span>
                                        <div className="text-xs font-bold text-purple-950 leading-snug">
                                            {concept.implementation.enforcement}
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    ))}
                </section>

                <AdvisoryCTA variant="educational" />
            </div>
        </main>
    );
}
