import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Presentation, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why Boardroom AI Metrics Mean Nothing',
    description: 'Find out why boards and investors are rejecting vanity AI metrics, how output volume hides margin decay, and which financial KPIs to present.',
    keywords: [
        'board ai metrics', 'ai vanity metrics', 'boardroom ai theater',
        'how to report ai to board', 'ai roi board presentation', 'engineering productivity board metrics'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-board-ai-metrics-sound-impressive-but-mean-nothing' },
};

export default function WhyBoardAIMetricsSoundImpressiveButMeanNothingPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Why are investors and board members skeptical of corporate AI presentations?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Boards have grown tired of vanity activity metrics like prompt volume, lines of code generated, and GitHub Copilot acceptance rates. Investors want to see how AI investments directly impact the P&L: specifically operating margin expansion, revenue per employee (APER), and reduced time to market.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is Board AI Metric Theater?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Board AI Metric Theater occurs when executive teams present superficial adoption stats (e.g. &ldquo;85% of employees use AI weekly&rdquo; or &ldquo;code commits up 40%&rdquo;) without demonstrating any tangible reduction in headcount cost, cycle time, or customer churn.'
                }
            },
            {
                '@type': 'Question',
                'name': 'Which AI metrics should you present to your board of directors?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Report three financial outcome metrics: 1. Net AI Gross Margin (revenue minus inference and support costs). 2. R&D Capital Efficiency (APER: ARR generated per engineering head). 3. Verification Overhead Ratio (human review hours per AI-assisted delivery).'
                }
            }
        ]
    };

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-yellow-200 bg-yellow-50 text-yellow-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <Presentation size={14} /> Board AI Metric Theater
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why Boardroom AI Metrics Mean Nothing to the Bottom Line
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        In your last board meeting, you proudly presented a slide showing engineering commits were up 40% with AI. The lead investor paused and asked: &ldquo;So what? Did revenue go up, or did costs go down?&rdquo; Silence in the room.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Vanity Output Trap"
                    symptom="Executive leadership reports record-high AI adoption metrics to the board, but financial statements show that gross margins are flat or declining, and product release cadence has not accelerated."
                    quickChecks={[
                        "Review your board deck: are you reporting activity metrics (prompts run, commits made, PRDs generated) or financial outcome metrics?",
                        "Ask finance: has our cost of goods sold (COGS) per paying customer increased since rolling out AI features?",
                        "Check engineering delivery: has feature lead time from concept to production actually dropped, or did code review times eat the difference?"
                    ]}
                    whyItBroke="Generative AI makes generating text and code effortless. When you measure output volume, you are measuring activity, not commercial value. Shipping 1,000 lines of AI-assisted code that solves a trivial problem creates more technical debt than shipping 20 lines of hand-crafted logic that drives customer retention."
                    directFix="Replace activity slides with a 3-metric financial scorecard: Gross Margin Impact, APER (ARR per engineer), and Incident Rate per Release."
                    toolLink={{
                        label: "Build a Board Risk Scorecard",
                        href: "/tools/board-risk-scorecard"
                    }}
                    citationSnippet="Boardroom AI metric theater fails because tracking output activity (code commits and prompts) obscures the financial reality of gross margin compression and rising maintenance overhead."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        What Sophisticated Investors Actually Care About
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        During the initial AI boom, showing any slide with an AI logo was enough to please board members and fund managers. Those days are permanently over.
                    </p>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        In 2026, private equity operating partners and venture investors look for commercial substance:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">1. The Gross Margin Reality Check</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                If your software gross margin was 82% before AI and is 64% after AI, your business became less valuable, not more valuable. Every dollar spent on model inference must generate at least $4 in incremental customer revenue.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">2. APER: Revenue Generated Per Employee</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                If AI tools are making your team 30% more productive, your revenue per engineer should be climbing. If APER is flat or declining while team size stays the same, AI is simply creating organizational churn.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">3. Valuation Multiplier Protection</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Buyers and acquirers run forensic technical due diligence. If they discover your core AI feature is a brittle wrapper with zero defensibility and negative gross margins, they will heavily discount your exit valuation.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        The 1-Page Executive Governance Standard
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                        In your next board update, ditch the 10-page AI vanity deck. Present a single slide with three numbers: the direct net return on your AI capital investment, the gross margin trend of your AI-enabled features, and the quantified reduction in customer time-to-value.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
