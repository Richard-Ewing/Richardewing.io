import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import { professionalServiceSchema } from '@/app/lib/schemas';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

export const metadata: Metadata = {
    title: 'Platform Consolidation Advisory',
    description: 'Eliminate redundant SaaS tools and developer infrastructure sprawl with an architectural consolidation plan.',
    alternates: {
        canonical: 'https://www.richardewing.io/services/platform-consolidation',
    },
    openGraph: {
        title: 'Platform Consolidation Strategy & Cost ROI | Richard Ewing',
        description: 'Platform consolidation resolves tool sprawl and redundant infrastructure costs. Secure an architecture roadmap and cost savings model for your engineering org.',
        url: 'https://www.richardewing.io/services/platform-consolidation',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Platform Consolidation Strategy & Cost ROI | Richard Ewing',
        description: 'Platform consolidation resolves tool sprawl and redundant infrastructure costs. Secure an architecture roadmap and cost savings model for your engineering org.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function PlatformConsolidationPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.richardewing.io/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.richardewing.io/services" },
            { "@type": "ListItem", "position": 3, "name": "Platform Consolidation", "item": "https://www.richardewing.io/services/platform-consolidation" }
        ]
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
            
            <div className="page-container max-w-4xl mx-auto px-6">
                <div className="mb-12 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span className="text-violet-700 font-extrabold">Platform Consolidation</span>
                </div>

                <ScrollReveal>
                    <section className="mb-16 text-left">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-8 tracking-tight leading-[1.1]">
                            Your teams bought every tool.<br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-fuchsia-700">The infrastructure is sprawling.</span>
                        </h1>
                        <div className="text-xl text-zinc-800 leading-relaxed font-medium max-w-3xl mb-8 space-y-4">
                            <p>While assessing scaling software companies, the pattern became difficult to ignore. Teams accumulate redundant tools to solve local problems. The architecture assumes unlimited budget, and the system optimizes for autonomy rather than financial discipline.</p>
                            <p>Multi platform sprawl destroys gross margins. We structure a platform consolidation strategy via a $7,500 R&D Capital Audit or $10,000 monthly Advisory Retainer to eliminate overlapping infrastructure and centralize your technology footprint.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/services#gut_check" className="flex items-center justify-center px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-bold transition-all bg-violet-600 hover:bg-violet-700 text-white shadow-sm">
                                Book a Gut-Check ($450)
                            </Link>
                            <Link href="/services" className="flex items-center justify-center px-6 py-4 rounded-xl text-xs uppercase tracking-widest font-bold transition-all bg-white border border-zinc-300 text-zinc-950 hover:bg-zinc-50">
                                View Full Services Menu
                            </Link>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <section className="mb-24">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8">Who This Is For</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">Chief Technology Officers</h3>
                                <p className="text-zinc-700 text-sm">Halt infrastructure budget bleed and reclaim operational control.</p>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">VPs of Engineering</h3>
                                <p className="text-zinc-700 text-sm">Align disjointed development teams under a unified architecture.</p>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">Platform Leaders</h3>
                                <p className="text-zinc-700 text-sm">Migrate off costly redundant systems without breaking production workflows.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <section className="mb-24 bg-zinc-950 text-zinc-50 rounded-3xl p-8 sm:p-12">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-8">What You Get</h2>
                        <p className="text-zinc-400 mb-8 max-w-2xl">A rigorous transition framework prioritizing immediate cash flow recovery.</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-violet-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Architecture Review</h4>
                                    <p className="text-sm text-zinc-400">Map existing tool sprawl and identify duplicate SaaS licenses.</p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-violet-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Consolidation Roadmap</h4>
                                    <p className="text-sm text-zinc-400">Step by step execution plan for retiring excess infrastructure.</p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-violet-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Cost Savings Model</h4>
                                    <p className="text-sm text-zinc-400">Quantified economic projection of post consolidation margins.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <section className="mb-24 pt-16 border-t border-zinc-300">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8">Research & Methodology Foundations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['technical-insolvency', 'innovation-tax', 'zombie-code'].map(slug => {
                                const concept = CANONICAL_CONCEPTS.find(c => c.slug === slug);
                                if (!concept) return null;
                                return (
                                    <Link key={slug} href={`/concepts/${slug}`} className="block p-6 bg-white border border-zinc-300 rounded-2xl hover:border-violet-500 hover:shadow-md transition-all group">
                                        <div className="text-xs font-mono font-bold text-violet-700 uppercase tracking-widest mb-2">{concept.slug}</div>
                                        <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-violet-900">{concept.title}</h3>
                                        <p className="text-sm text-zinc-700 font-semibold">{concept.aeo?.shortDefinition || concept.definition}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>
                </ScrollReveal>
            </div>
        </main>
    );
}
