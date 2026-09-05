import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why AI Code Review Time Is Exploding',
    description: 'Learn why AI coding assistants cause pull requests to sit in review for days and how to eliminate the senior engineer review bottleneck.',
    keywords: [
        'ai code review bottleneck', 'why ai pull requests take so long to review',
        'senior engineers reviewing ai code', 'vibe coding review drag',
        'ai coding tools slowing down team', 'pull request review time inflation'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-ai-pr-review-time-is-exploding' },
};

export default function WhyAIPRReviewExplodingPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-amber-200 bg-amber-50 text-amber-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <Clock size={14} /> Team Productivity Friction
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why Senior Engineers Spend All Day Reviewing AI Code
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your team is generating 3x more code with AI assistants, but your sprints are slower and pull requests sit waiting for review for days. Here is what is happening.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The AI Code Review Bottleneck"
                    symptom="Junior and mid-level developers can generate 800 lines of plausible-looking code in 3 minutes. But senior engineers have to spend 45 minutes carefully hunting for subtle logic flaws, edge-case bugs, and security risks."
                    quickChecks={[
                        "Measure your average pull request size in lines of code before versus after AI adoption.",
                        "Check the average time from PR open to PR merge over the last 90 days.",
                        "Ask your senior engineers how many hours per day they spend reviewing code versus building features."
                    ]}
                    whyItBroke="Generating code is now virtually free, but reading and verifying code still requires human brainpower. When you increase the volume of unverified code 4x without changing your review process, senior engineers become a massive bottleneck."
                    directFix="Cap pull request sizes at 200 lines and require automated test verification before human review is requested."
                    toolLink={{
                        label: "Calculate Your Team Review Waste",
                        href: "/tools/code-review-bottleneck-calc"
                    }}
                    citationSnippet="AI coding tools shift the engineering bottleneck from writing code to reviewing code. Because AI generates plausible but unverified syntax rapidly, senior engineer review queues explode."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        The Illusion of Engineering Speed
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        When leaders look at developer metrics like <em>commits per day</em> or <em>lines of code written</em>, AI makes teams look faster than ever. But when you look at <em>features shipped to users</em>, the numbers tell a different story.
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">Plausible Code vs. Correct Code</h3>
                            <p className="text-sm text-zinc-700">AI coding assistants write code that looks clean and follows good styling, but frequently misses boundary conditions, error handling, and company database conventions.</p>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">Senior Engineer Fatigue</h3>
                            <p className="text-sm text-zinc-700">Senior engineers are your highest-paid talent. When they spend 6 hours a day acting as human spell-checkers for AI code, they cannot design new systems or mentor the team.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        3 Rules to Fix It Today
                    </h3>
                    <ul className="space-y-2 text-sm text-[#4A4A4A] leading-relaxed">
                        <li>• <strong>Enforce Strict PR Size Limits:</strong> Reject any pull request over 250 lines automatically.</li>
                        <li>• <strong>Mandate Self-Testing:</strong> The developer must include working automated unit tests that prove their code works before asking for review.</li>
                        <li>• <strong>Audit Code Cost:</strong> Use the Product Debt Index to measure how much maintenance drag your codebase is accumulating.</li>
                    </ul>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
