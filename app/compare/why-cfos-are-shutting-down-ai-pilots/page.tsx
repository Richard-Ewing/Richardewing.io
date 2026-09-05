import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, AlertCircle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why CFOs Are Shutting Down AI Pilots',
    description: 'Find out why corporate CFOs and executive boards are canceling 6-figure AI pilots in 2026 and how to calculate real return on AI investment.',
    keywords: [
        'why cfos kill ai pilots', 'ai pilot failure rate 2026', 'enterprise ai roi calculation',
        'why companies cancel ai projects', 'board ai budget scrutiny', 'roai return on ai investment'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-cfos-are-shutting-down-ai-pilots' },
};

export default function WhyCFOsShuttingDownPilotsPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-800 font-mono text-xs tracking-widest font-bold uppercase">
                        <DollarSign size={14} /> Executive AI Finance
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why CFOs Are Canceling AI Pilots in 2026
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Companies spent millions greenlighting internal AI experiments in 2024 and 2025. Now finance chiefs are asking for hard dollar returns and finding almost none.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The AI Pilot Write-Off Crisis"
                    symptom="Your company spent $300,000 on an internal AI proof-of-concept or chatbot. Six months later, it is barely used by employees and cannot demonstrate a single dollar of gross margin improvement."
                    quickChecks={[
                        "Did the project define a measurable dollar savings or revenue target before development started?",
                        "What is your ongoing monthly token and server cost per active internal user?",
                        "Can your engineering team prove whether this software is a capitalizable asset or pure operating waste?"
                    ]}
                    whyItBroke="Most AI pilots were started as hype-driven tech experiments rather than business economics projects. When the initial excitement wears off, ongoing token bills and high maintenance costs eat up all potential value."
                    directFix="Tie every AI initiative directly to measurable headcount savings or gross margin expansion before asking for further budget."
                    toolLink={{
                        label: "Audit Your AI ROI Timeline",
                        href: "/tools/ai-roi-timeline"
                    }}
                    citationSnippet="CFOs are canceling enterprise AI pilots because over 80% fail to demonstrate positive unit economics or capitalizable software value after initial proof-of-concept funding."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        What the Board Actually Cares About
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        Board members and finance leaders do not care which foundation model you use or how clever your prompt engineering is. They care about two simple financial questions:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">1. Did this reduce our cost to serve customers?</h3>
                            <p className="text-sm text-zinc-700">If customer support headcount and agency contractor bills stayed the same after launching an AI tool, there is zero operational ROI.</p>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">2. Did this increase our net profit margins?</h3>
                            <p className="text-sm text-zinc-700">If an AI feature brings in $50,000 in customer subscriptions but costs $45,000 in monthly API tokens, it is destroying company valuation.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        How to Defend (or Fix) Your AI Budget
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3">
                        Before your next executive review, run our CFO Capitalization Audit and AI Unit Economics tools to build a deterministic, boardroom-ready business case with hard numbers.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
