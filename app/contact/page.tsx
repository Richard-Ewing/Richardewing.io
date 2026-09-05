import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Mail, Linkedin, Twitter, Github, ShieldAlert, ArrowRight, CheckCircle, ShieldCheck } from 'lucide-react';
import ContactForm from '@/app/components/client/ContactForm';
import FAQItem from '@/app/components/FAQItem';
import CalEmbed from '@/app/components/client/CalEmbed';

export const metadata: Metadata = {
    title: 'Contact & Advisory Requests',
    description: 'Get in touch for forensic R&D capital audits, AI unit economics advisory, and board-level risk reviews.',
    alternates: {
        canonical: 'https://www.richardewing.io/contact',
    },
    openGraph: {
        title: 'Contact Richard Ewing | AI Economist & Capital Auditor',
        description: 'Get in touch to eliminate AI billing shock, shadow AI risk, and install deterministic cost caps.',
        url: 'https://www.richardewing.io/contact',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Richard Ewing | AI Economist & Capital Auditor',
        description: 'Get in touch to eliminate AI billing shock, shadow AI risk, and install deterministic cost caps.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="page-container max-w-4xl mx-auto">
                
                {/* Breadcrumb */}
                <div className="mb-6 flex items-center gap-2 text-xs font-mono font-bold text-zinc-950 uppercase tracking-widest">
                    <span>Executive</span><span>/</span><span className="text-cyan-900 font-extrabold">Contact The Principal</span>
                </div>

                <section className="mb-12 border-b border-zinc-400 pb-12">
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                        Let&apos;s Stop the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-indigo-700">Capital Bleed.</span>
                    </h1>
                    <p className="text-lg text-zinc-900 leading-relaxed font-semibold max-w-2xl">
                        Founders, CTOs, and Private Equity Operating Partners: If you suspect your AI R&D is bleeding cash or accumulating invisible debt, let&apos;s align on the numbers.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Left: Cal.com Embed */}
                    <div className="bg-white border border-zinc-300 rounded-3xl p-3 sm:p-5 shadow-sm min-h-[640px] flex flex-col relative overflow-hidden">
                        <CalEmbed calLink="richard-ewing-2cevwb" />
                    </div>

                    {/* Right: Contact details and Secure NDA Seal */}
                    <div className="space-y-6 flex flex-col justify-between">
                        <div className="bg-white border border-zinc-300 rounded-3xl p-8 shadow-sm flex flex-col justify-between h-full">
                            <div>
                                <h3 className="text-lg font-bold font-grotesk text-zinc-950 mb-4">Direct Contact</h3>
                                <p className="text-sm text-zinc-600 mb-6 leading-relaxed font-semibold">
                                    Feel free to reach out directly through email or LinkedIn if you prefer to skip forms.
                                </p>
                                
                                <div className="space-y-4">
                                    <a 
                                        href="mailto:richardewing@exogram.ai" 
                                        className="flex items-center gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50/10 transition-all group"
                                    >
                                        <Mail className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">Email Address</div>
                                            <div className="text-sm font-bold text-zinc-950">richardewing@exogram.ai</div>
                                        </div>
                                    </a>

                                    <a 
                                        href="https://linkedin.com/in/richard-ewing-mba" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="flex items-center gap-3 p-4 bg-zinc-50 border border-zinc-200 rounded-2xl hover:border-indigo-500 hover:bg-indigo-50/10 transition-all group"
                                    >
                                        <Linkedin className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                                        <div>
                                            <div className="text-xs font-mono font-bold text-zinc-500 uppercase tracking-widest">LinkedIn</div>
                                            <div className="text-sm font-bold text-zinc-950">richard-ewing-mba</div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            <div className="mt-8 border-t border-zinc-100 pt-6 flex justify-between items-center">
                                <span className="text-xs font-bold text-zinc-800 uppercase tracking-widest font-mono">Other Channels</span>
                                <div className="flex gap-3">
                                    <a href="https://x.com/Richard85626233" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-indigo-600 hover:border-indigo-500 transition-colors">
                                        <Twitter className="w-4 h-4" />
                                    </a>
                                    <a href="https://github.com/Richard-Ewing" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-700 hover:text-indigo-600 hover:border-indigo-500 transition-colors">
                                        <Github className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* NDA Security Seal */}
                        <div className="p-6 bg-white border border-zinc-300 rounded-3xl flex flex-col items-center text-center shadow-sm relative overflow-hidden group">
                            {/* Accent line */}
                            <div className="absolute top-0 inset-x-0 h-1 bg-emerald-500" />
                            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-3 relative z-10 border border-emerald-200">
                                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                            </div>
                            <span className="text-[10px] font-bold font-mono text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded border border-emerald-200 relative z-10">
                                SECURE NDA PROTOCOL
                            </span>
                            <h4 className="text-sm font-bold text-zinc-950 mt-2 font-grotesk relative z-10">NDA Compliance Assured</h4>
                            <p className="text-[11px] text-zinc-600 mt-2 leading-relaxed font-semibold max-w-xs relative z-10">
                                All discovery discussions, billing logs, and repository metrics are held under strict confidentiality. Mutual NDAs are executed prior to any technical review.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Horizontal Engagement Protocol */}
                <section className="mb-16 bg-white border border-zinc-300 rounded-3xl p-8 md:p-12 shadow-sm">
                    <h3 className="text-xl font-bold font-grotesk text-zinc-950 mb-8 text-center flex items-center justify-center gap-2">
                        <ShieldAlert className="w-5 h-5 text-indigo-600" />
                        Engagement Timeline
                    </h3>
                    
                    <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-4 relative">
                        {/* Step 1 */}
                        <div className="flex-1 text-center flex flex-col items-center bg-zinc-50 p-5 rounded-2xl border border-zinc-200 shadow-sm relative">
                            <div className="w-9 h-9 bg-indigo-600 border border-indigo-400 rounded-full flex items-center justify-center mb-4 font-mono font-bold text-white text-sm shadow-sm">1</div>
                            <h4 className="text-sm font-bold text-zinc-950 mb-1">Diagnostic Video Call</h4>
                            <p className="text-[11px] text-zinc-600 leading-relaxed font-semibold max-w-xs">Brief diagnostic alignment. No code access required. We review symptoms and billing peaks.</p>
                        </div>

                        {/* Connection Arrow 1 */}
                        <div className="hidden lg:flex items-center justify-center text-zinc-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>

                        {/* Step 2 */}
                        <div className="flex-1 text-center flex flex-col items-center bg-zinc-50 p-5 rounded-2xl border border-zinc-200 shadow-sm relative">
                            <div className="w-9 h-9 bg-indigo-600 border border-indigo-400 rounded-full flex items-center justify-center mb-4 font-mono font-bold text-white text-sm shadow-sm">2</div>
                            <h4 className="text-sm font-bold text-zinc-950 mb-1">Free Diagnostic Report</h4>
                            <p className="text-[11px] text-zinc-600 leading-relaxed font-semibold max-w-xs">We send a quantified risk review detailing your Product Debt Index (PDI) exposure and leaks.</p>
                        </div>

                        {/* Connection Arrow 2 */}
                        <div className="hidden lg:flex items-center justify-center text-zinc-400">
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>

                        {/* Step 3 */}
                        <div className="flex-1 text-center flex flex-col items-center bg-zinc-50 p-5 rounded-2xl border border-zinc-200 shadow-sm relative">
                            <div className="w-9 h-9 bg-indigo-600 border border-indigo-400 rounded-full flex items-center justify-center mb-4 font-mono font-bold text-white text-sm shadow-sm">3</div>
                            <h4 className="text-sm font-bold text-zinc-950 mb-1">Remediation Roadmap</h4>
                            <p className="text-[11px] text-zinc-600 leading-relaxed font-semibold max-w-xs">If structural improvements are needed, we scope a diagnostic sprint to install cost-caps and guardrails.</p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="border-t border-zinc-300 pt-12">
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'FAQPage',
                            'mainEntity': [
                                {
                                    '@type': 'Question',
                                    'name': 'What happens after I request a diagnostic call?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'We will schedule a direct diagnostic call to understand your codebase structure, engineering team size, and current billing bottlenecks. Within 48 hours, you\'ll receive a free diagnostic report with high-level recommendations.'
                                    }
                                },
                                {
                                    '@type': 'Question',
                                    'name': 'Do I need to share code access to get started?',
                                    'acceptedAnswer': {
                                        '@type': 'Answer',
                                        'text': 'No. Code access is not required for the initial discovery call. If you decide to proceed with an audit, we will execute a mutual NDA before reviewing any repositories or logs.'
                                    }
                                }
                            ]
                        }) }}
                    />
                    <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        <FAQItem 
                            question="What happens after I request a diagnostic call?" 
                            answer="We will schedule a direct diagnostic call to understand your codebase structure, engineering team size, and current billing bottlenecks. Within 48 hours, you'll receive a free diagnostic report with high-level recommendations."
                        />
                        <FAQItem 
                            question="Do I need to share code access to get started?" 
                            answer="No. Code access is not required for the initial 15-minute discovery call. If you decide to proceed with an audit, we will execute a mutual NDA before reviewing any repositories or logs."
                        />
                    </div>
                </section>

                <div className="mt-16 text-center border-t border-zinc-300 pt-12">
                    <Link href="/" className="text-zinc-950 font-bold hover:text-zinc-900 transition-colors flex items-center gap-2 text-sm font-semibold font-mono uppercase tracking-widest justify-center">
                        ← Back to Homepage
                    </Link>
                </div>

            </div>
        </main>
    );
}
