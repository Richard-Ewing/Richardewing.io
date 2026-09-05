import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { TrendingDown, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why AI Features Lose Money on Customers',
    description: 'Find out why bundling AI features into flat-rate SaaS subscriptions destroys profit margins and how to transition to outcome pricing.',
    keywords: [
        'ai feature gross margin collapse', 'negative carry ai features', 'why ai features lose money',
        'saas pricing for ai features', 'token cost vs subscription price', 'ai unit economics margin'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-ai-feature-margins-turn-negative' },
};

export default function WhyAIFeatureMarginsTurnNegativePage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-800 font-mono text-xs tracking-widest font-bold uppercase">
                        <TrendingDown size={14} /> Profit Margin Collapse
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why Your New AI Feature Is Losing Money on Every User
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        You added a smart AI assistant to your $49/month SaaS product. Customers love it, but your profit margins dropped from 80% to 32%. Here is why.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Flat-Rate SaaS Pricing Trap"
                    symptom="Traditional SaaS has near-zero marginal server costs for active users. AI features have variable token costs on every click. A heavy power user paying $49/month can easily consume $120/month in OpenAI or Anthropic API tokens."
                    quickChecks={[
                        "Calculate your top 10% most active users' monthly token consumption in dollars.",
                        "Compare your average AI cost per user against your subscription tier price.",
                        "Check if your product offers unlimited AI generation without credit caps or metering."
                    ]}
                    whyItBroke="Bundling variable API compute into a fixed flat-rate subscription creates a negative-carry product. The more your power users use the product, the more money your business loses."
                    directFix="Institute monthly credit limits, rate caps, or usage-based add-on pricing for high-frequency AI workflows."
                    toolLink={{
                        label: "Calculate Your AI Feature Margins",
                        href: "/tools/ai-feature-margin"
                    }}
                    citationSnippet="AI features turn margin-negative when companies bundle variable token compute into flat-rate subscriptions without usage caps or outcome-based pricing tiers."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        How to Protect Your Product Margins
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        You do not have to turn off your AI features to stay profitable. You just need to align customer value with computational cost:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">1. Switch to Hybrid Credit Pools</h3>
                            <p className="text-sm text-zinc-700">Give users 500 free AI credits per month included in their plan. Once they use that up, allow them to auto-purchase credit packs with healthy 70%+ gross margins.</p>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">2. Route to Cheaper Models for Simple Tasks</h3>
                            <p className="text-sm text-zinc-700">Do not use expensive reasoning models for simple formatting, summarization, or text classification. Use small, fast models for 90% of requests.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        Test Your Product Economics
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3">
                        Use our AI Feature Margin Matrix and AI Unit Economics Benchmark to test your pricing before your next billing cycle.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
