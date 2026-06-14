import React from 'react';
import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs/server';
import Link from 'next/link';
import { Brain, Shield, Lock } from 'lucide-react';
import AdvisorChat from '@/components/AdvisorChat';

export const metadata: Metadata = {
    title: 'AI Integration Advisor | How to Integrate AI Into Your Business — Free Roadmap Tool',
    description: 'Not sure how to integrate AI into your business? Our AI-powered advisor asks 5 questions about your company and generates a personalized AI integration roadmap in minutes — with specific tool recommendations, ROI estimates, costs, and a 30-day action plan. No consultants. No guesswork. Download your custom PDF report instantly.',
    keywords: [
        'how to integrate AI into my business', 'AI for small business', 'AI for my business',
        'AI integration plan', 'AI readiness assessment', 'AI business consultant',
        'AI roadmap generator', 'AI strategy tool', 'AI consulting tool',
        'AI tools for business', 'AI implementation plan', 'AI adoption strategy',
        'personalized AI plan', 'AI integration advisor', 'AI audit tool',
        'AI readiness tool', 'business AI assessment', 'AI ROI calculator',
        'AI tool recommendations', 'AI for companies', 'how to use AI in business',
        'AI business roadmap', 'AI integration checklist', 'AI cost estimator',
        'small business AI tools', 'AI automation for business', 'AI strategy for startups',
        'AI integration consultant', 'AI transformation plan', 'enterprise AI roadmap',
    ],
    openGraph: {
        title: 'AI Integration Advisor — Your Personalized AI Roadmap in Minutes',
        description: 'Stop guessing about AI. Answer 5 questions about your business and get a custom AI integration roadmap with specific tools, ROI estimates, and a step-by-step implementation plan. Download as PDF.',
        type: 'website',
        url: 'https://www.richardewing.io/ai-integration/advisor',
        siteName: 'Richard Ewing — AI Economist',
        images: [{ url: 'https://www.richardewing.io/og-image-home.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AI Integration Advisor — Personalized AI Roadmap for Your Business',
        description: 'Answer 5 questions. Get a custom AI integration plan with specific tools, ROI estimates, and a 30-day action plan. No consultants required.',
    },
    alternates: { canonical: 'https://www.richardewing.io/ai-integration/advisor' },
    robots: { index: true, follow: true },
};

export default async function AdvisorPage() {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in?redirect_url=/ai-integration/advisor');
    }

    // Check for access: has_ai_advisor_access OR has_yearly_subscription OR has_premium_guide_access
    const hasAccess =
        user.publicMetadata?.has_ai_advisor_access === true ||
        user.publicMetadata?.has_yearly_subscription === true;

    if (!hasAccess) {
        return (
            <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
                <div className="max-w-2xl mx-auto px-6 text-center">
                    {/* Paywall */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-violet-200 bg-violet-50 text-violet-700 font-mono text-sm tracking-widest font-bold uppercase">
                        <Lock size={14} /> Premium Tool
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-6 leading-tight">
                        AI Integration Advisor
                    </h1>
                    <p className="text-lg text-[#4A4A4A] mb-8 max-w-lg mx-auto">
                        Get a personalized, AI-generated roadmap for integrating AI into your business. 5 questions. Actionable plan. Specific tool recommendations. ROI estimates. Downloadable PDF.
                    </p>

                    <div className="bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm mb-8">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <Brain className="w-6 h-6 text-cyan-600" />
                            <h2 className="text-xl font-bold text-[#1A1A1A]">What You Get</h2>
                        </div>
                        <ul className="text-left space-y-3 mb-8 max-w-sm mx-auto">
                            {[
                                'AI-powered business analysis',
                                'Personalized AI integration roadmap',
                                'Specific tool recommendations with pricing',
                                'ROI estimates for each action item',
                                '30-day implementation plan',
                                'Downloadable PDF report',
                                'Unlimited consultations',
                                'Powered by Exogram AI Governance',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm text-[#3A3A3A]">
                                    <Shield size={14} className="text-emerald-500 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        {/* Pricing Cards */}
                        <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto">
                            {/* Monthly */}
                            <div className="rounded-xl border border-zinc-200 p-5 text-center">
                                <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-2">Monthly</div>
                                <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$249<span className="text-sm font-normal text-zinc-500">/mo</span></div>
                                <p className="text-[10px] text-zinc-600 mb-4">Cancel anytime</p>
                                <a
                                    href="/api/buy/ai_advisor_monthly"
                                    className="block w-full text-center py-3 border-2 border-cyan-600 text-cyan-700 font-bold rounded-xl text-sm hover:bg-cyan-50 transition-colors"
                                >
                                    Start Monthly →
                                </a>
                            </div>

                            {/* Annual — Best Value */}
                            <div className="rounded-xl border-2 border-cyan-500 p-5 text-center relative bg-cyan-50/30">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-cyan-600 text-zinc-900 text-[10px] font-bold font-mono uppercase tracking-widest rounded-full">Save 33%</div>
                                <div className="text-xs font-mono text-cyan-700 uppercase tracking-widest mb-2">Annual</div>
                                <div className="text-3xl font-bold text-[#1A1A1A] mb-1">$1,997<span className="text-sm font-normal text-zinc-500">/yr</span></div>
                                <p className="text-[10px] text-zinc-600 mb-4">$166/mo · Billed annually</p>
                                <a
                                    href="/api/buy/ai_advisor_yearly"
                                    className="block w-full text-center py-3 bg-cyan-600 text-zinc-900 font-bold rounded-xl text-sm hover:bg-cyan-500 transition-colors shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                                >
                                    Start Annual →
                                </a>
                            </div>
                        </div>
                    </div>

                    <p className="text-xs text-zinc-500">
                        Already have access?{' '}
                        <Link href="/vault" className="text-cyan-700 hover:underline">Check your vault</Link>
                    </p>
                </div>
            </main>
        );
    }

    // Authenticated + Subscribed — show the advisor
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 font-mono text-xs tracking-widest font-bold uppercase">
                        <Brain size={12} /> AI Integration Advisor
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-grotesk font-bold text-[#1A1A1A] mb-2">
                        Let&apos;s Build Your AI Roadmap
                    </h1>
                    <p className="text-sm text-[#6A6A6A] max-w-lg mx-auto">
                        Answer a few questions about your business and I&apos;ll generate a personalized AI integration plan with specific tools, ROI estimates, and a step-by-step implementation timeline.
                    </p>
                </div>

                <AdvisorChat />
            </div>
        </main>
    );
}
