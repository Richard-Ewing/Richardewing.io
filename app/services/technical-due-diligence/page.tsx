import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import { professionalServiceSchema } from '@/app/lib/schemas';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

export const metadata: Metadata = {
    title: 'Technical Due Diligence for PE & VC',
    description: 'Independent 3-week forensic R&D capital audit uncovering software liabilities and unit economic risks before closing.',
    alternates: {
        canonical: 'https://www.richardewing.io/services/technical-due-diligence',
    },
    openGraph: {
        title: 'Technical Due Diligence & R&D Cost Audit | Richard Ewing',
        description: 'The R&D Capital Audit provides an independent 3-week forensic review of target architectures. Uncover hidden liabilities before term sheet execution.',
        url: 'https://www.richardewing.io/services/technical-due-diligence',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Technical Due Diligence & R&D Cost Audit | Richard Ewing',
        description: 'The R&D Capital Audit provides an independent 3-week forensic review of target architectures. Uncover hidden liabilities before term sheet execution.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function TechnicalDueDiligencePage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.richardewing.io/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.richardewing.io/services" },
            { "@type": "ListItem", "position": 3, "name": "Technical Due Diligence", "item": "https://www.richardewing.io/services/technical-due-diligence" }
        ]
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
            
            <div className="page-container max-w-4xl mx-auto px-6">
                <div className="mb-12 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span className="text-cyan-700 font-extrabold">Technical Due Diligence</span>
                </div>

                <ScrollReveal>
                    <section className="mb-16 text-left">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-8 tracking-tight leading-[1.1]">
                            They claim the code is an asset.<br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 to-indigo-700">You need independent proof.</span>
                        </h1>
                        <div className="text-xl text-zinc-800 leading-relaxed font-medium max-w-3xl mb-8 space-y-4">
                            <p>One thing surprised me when evaluating software acquisitions. Private equity firms and boards routinely accept technical debt metrics self reported by the target engineering team. The resulting architecture often hides massive maintenance costs that surface only after the deal closes.</p>
                            <p>Technical due diligence requires an objective third party to calculate the true cost of code. The $7,500 R&D Capital Audit measures structural decay and capital allocation efficiency before you execute the term sheet.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/services#gut_check" className="flex items-center justify-center px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-bold transition-all bg-cyan-600 hover:bg-cyan-700 text-white shadow-sm">
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
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">PE Sponsors</h3>
                                <p className="text-zinc-700 text-sm">Validate the engineering claims of target companies to price integration risk.</p>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">Board Members</h3>
                                <p className="text-zinc-700 text-sm">Gain unvarnished visibility into the real capability of your engineering org.</p>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">Incoming CTOs</h3>
                                <p className="text-zinc-700 text-sm">Audit legacy systems and identify remediation priorities upon inheriting a new codebase.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <section className="mb-24 bg-zinc-950 text-zinc-50 rounded-3xl p-8 sm:p-12">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-8">What You Get</h2>
                        <p className="text-zinc-400 mb-8 max-w-2xl">A 3 week forensic review that bypasses opinions and measures actual system execution.</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Codebase Verification</h4>
                                    <p className="text-sm text-zinc-400">Analysis of repository health and architectural liabilities.</p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Written Audit Package</h4>
                                    <p className="text-sm text-zinc-400">Comprehensive risk assessment detailing failure modes and capital leaks.</p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-cyan-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Remediation Plan</h4>
                                    <p className="text-sm text-zinc-400">A board ready timeline for mitigating inherited technical debt.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <section className="mb-24 pt-16 border-t border-zinc-300">
                        <h2 className="text-3xl font-grotesk font-bold text-zinc-950 mb-8">Research & Methodology Foundations</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {['negative-carry-code-crisis', 'vibe-coding', 'r-and-d-ponzi', 'dora-financial-translation'].map(slug => {
                                const concept = CANONICAL_CONCEPTS.find(c => c.slug === slug);
                                if (!concept) return null;
                                return (
                                    <Link key={slug} href={`/concepts/${slug}`} className="block p-6 bg-white border border-zinc-300 rounded-2xl hover:border-cyan-500 hover:shadow-md transition-all group">
                                        <div className="text-xs font-mono font-bold text-cyan-700 uppercase tracking-widest mb-2">{concept.slug}</div>
                                        <h3 className="text-xl font-bold text-zinc-950 mb-2 group-hover:text-cyan-900">{concept.title}</h3>
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
