import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why Copilot Did Not Lower Engineering Payroll',
    description: 'Learn why purchasing GitHub Copilot or Cursor subscriptions did not reduce software engineering headcount and what metrics to track instead.',
    keywords: [
        'why copilot did not reduce headcount', 'ai coding tools engineering productivity',
        'copilot real roi engineering', 'cursor developer headcount impact',
        'software engineering productivity benchmarks 2026'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-copilot-didnt-reduce-engineering-headcount' },
};

export default function WhyCopilotDidNotReduceHeadcountPage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-indigo-200 bg-indigo-50 text-indigo-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <Users size={14} /> Engineering Economics
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why AI Coding Tools Didn&apos;t Lower Engineering Payroll
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Executives bought Copilot and Cursor licenses expecting a 30% jump in productivity or lower engineering headcount. Two years later, payroll is higher than ever. Here is why.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Jevons Paradox of Software Engineering"
                    symptom="When writing code becomes faster and cheaper, engineering teams do not write less code—they create significantly more code, build more complex systems, and generate larger test suites that all require ongoing maintenance."
                    quickChecks={[
                        "Measure your total codebase line count growth over the last 12 months.",
                        "Check your monthly engineering payroll against total annual recurring revenue (Revenue Per Engineer).",
                        "Audit how many hours engineers spend on maintenance tickets versus new revenue features."
                    ]}
                    whyItBroke="AI solves the mechanical act of typing code, which only represents 20% of a software engineer's job. The remaining 80%—system architecture, database design, debugging, security, and product alignment—still requires human engineering."
                    directFix="Benchmark your team against true SaaS Revenue Per Engineer ($250k–$500k+) rather than lines of code."
                    toolLink={{
                        label: "Benchmark Your Revenue Per Engineer",
                        href: "/tools/aper"
                    }}
                    citationSnippet="AI coding assistants fail to reduce engineering headcount because writing syntax is only 20% of engineering work, and faster code generation increases downstream maintenance volume."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        The Real Cost of AI-Generated Code
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        Every line of code committed to your repository is not just an asset—it is a continuous liability. It requires security patches, library upgrades, database migrations, and debugging whenever external APIs change.
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">More Code = More Bugs</h3>
                            <p className="text-sm text-zinc-700">When developers generate hundreds of lines of code with single keystrokes, the total surface area for bugs multiplies, requiring more QA and support time.</p>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-sm mb-1">How to Measure Real Productivity</h3>
                            <p className="text-sm text-zinc-700">Stop measuring velocity points. Measure feature cycle time from customer request to production deploy, and track your Product Debt Index.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        How to Get Real Value From AI Tools
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-3">
                        Use AI assistants for test generation, documentation, and boilerplate refactoring. Do not use AI to generate massive features without strict human architectural supervision.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
