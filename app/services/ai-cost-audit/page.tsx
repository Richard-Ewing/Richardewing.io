import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '@/components/magicui/scroll-reveal';
import { professionalServiceSchema } from '@/app/lib/schemas';

export const metadata: Metadata = {
    title: 'AI Cost Attribution & Margin Protection Audit | Richard Ewing',
    description: 'The AI Cost Governance Review calculates exact unit economics and collapse points. Enforce hard cost caps before API overruns wreck your R&D roadmap.',
    alternates: {
        canonical: 'https://www.richardewing.io/services/ai-cost-audit',
    },
    openGraph: {
        title: 'AI Cost Attribution & Margin Protection Audit | Richard Ewing',
        description: 'The AI Cost Governance Review calculates exact unit economics and collapse points. Enforce hard cost caps before API overruns wreck your R&D roadmap.',
        url: 'https://www.richardewing.io/services/ai-cost-audit',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Cost Attribution & Margin Protection Audit | Richard Ewing',
        description: 'The AI Cost Governance Review calculates exact unit economics and collapse points. Enforce hard cost caps before API overruns wreck your R&D roadmap.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function AICostAuditPage() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.richardewing.io/" },
            { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.richardewing.io/services" },
            { "@type": "ListItem", "position": 3, "name": "AI Cost Audit", "item": "https://www.richardewing.io/services/ai-cost-audit" }
        ]
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }} />
            
            <div className="page-container max-w-4xl mx-auto px-6">
                <div className="mb-12 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <Link href="/">Home</Link><span>/</span><Link href="/services">Services</Link><span>/</span><span className="text-amber-700 font-extrabold">AI Cost Audit</span>
                </div>

                <ScrollReveal>
                    <section className="mb-16 text-left">
                        <h1 className="text-4xl sm:text-6xl font-grotesk font-bold text-zinc-950 mb-8 tracking-tight leading-[1.1]">
                            Your AI costs are growing.<br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-rose-700">The visibility is not.</span>
                        </h1>
                        <div className="text-xl text-zinc-800 leading-relaxed font-medium max-w-3xl mb-8 space-y-4">
                            <p>I kept seeing the same pattern across scale up software companies. The CFO spots an inflating API line item. The engineering team claims they need it for product features. Neither side has the data to prove if those features actually generate more money than they consume.</p>
                            <p>AI cost attribution fails because the architecture obscures it. We optimize for speed of deployment, but the resulting system lacks economic boundaries. The $5,000 AI Cost Governance Review fixes this structural defect.</p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link href="/services#gut_check" className="flex items-center justify-center px-8 py-4 rounded-xl text-sm uppercase tracking-widest font-bold transition-all bg-amber-600 hover:bg-amber-700 text-zinc-950 shadow-sm">
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
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">Chief Financial Officers</h3>
                                <p className="text-zinc-700 text-sm">Turn black box engineering expenses into predictable unit economics.</p>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">VPs of Finance</h3>
                                <p className="text-zinc-700 text-sm">Establish accurate margin reporting across disparate AI models.</p>
                            </div>
                            <div className="bg-white border border-zinc-300 rounded-2xl p-6 shadow-sm">
                                <h3 className="font-bold text-lg mb-2 text-zinc-950">PE Operating Partners</h3>
                                <p className="text-zinc-700 text-sm">Identify structural margin collapse before acquiring a portfolio company.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                <ScrollReveal>
                    <section className="mb-24 bg-zinc-950 text-zinc-50 rounded-3xl p-8 sm:p-12">
                        <h2 className="text-3xl font-grotesk font-bold text-white mb-8">What You Get</h2>
                        <p className="text-zinc-400 mb-8 max-w-2xl">The review installs clear visibility into your AI infrastructure. We do not provide opinions. We provide math and architectural governance.</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Unit Economics Model</h4>
                                    <p className="text-sm text-zinc-400">Exact calculation of cost per inference and cost per useful outcome.</p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Collapse Point Calculation</h4>
                                    <p className="text-sm text-zinc-400">Mathematical threshold where AI maintenance costs exceed innovation budget.</p>
                                </div>
                            </li>
                            <li className="flex flex-col gap-3 border-t border-zinc-800 pt-6">
                                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-zinc-100 mb-1">Margin Protection Plan</h4>
                                    <p className="text-sm text-zinc-400">Strategic architecture adjustments to cap expenses and protect gross margins.</p>
                                </div>
                            </li>
                        </ul>
                    </section>
                </ScrollReveal>
            </div>
        </main>
    );
}
