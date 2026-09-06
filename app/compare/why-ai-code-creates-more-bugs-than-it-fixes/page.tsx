import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Bug, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why AI Coding Leads to More Outages',
    description: 'Find out why AI code assistants increase production bug rates, why PR velocity hides technical debt, and how to protect software reliability.',
    keywords: [
        'ai coding bugs production', 'why ai code fails', 'copilot increases bugs',
        'ai technical debt accelerator', 'metr study ai slower', 'ai code review bottlenecks'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-ai-code-creates-more-bugs-than-it-fixes' },
};

export default function WhyAICodeCreatesMoreBugsThanItFixesPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Why are production outages increasing after adopting AI coding assistants?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AI coding assistants generate syntactically clean code very quickly, but they lack deep context about your specific production database, concurrent state, and security boundaries. Developers merge large pull requests without fully understanding edge cases, causing regression bugs and production outages to rise even as sprint speed appears faster.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the AI Technical Debt Acceleration phenomenon?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The AI Technical Debt Acceleration phenomenon occurs when teams use AI to ship code 30% faster, but experience a 20% to 30% spike in production incident rates. The time saved during initial coding is completely wiped out by senior engineers spending hours debugging obscure runtime errors in production.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do you prevent AI-generated bugs from reaching production?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Institute strict PR size limits (under 300 lines of changed code). Require empirical automated test coverage for every AI-generated function before code review, and enforce human code ownership where the committer can explain every line out loud.'
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <Bug size={14} /> The AI Debt Accelerator
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why AI Coding Assistants Lead to More Production Outages
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your engineering team feels like they are moving faster than ever. Sprint pull requests are up 35%. But your monthly on-call alerts, customer-reported bugs, and rollback deployments jumped 22%.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Fast Code, Broken System Trap"
                    symptom="Developers generate 500-line pull requests in an hour using Copilot or Cursor. The code compiles and passes basic unit tests, but fails under heavy production concurrency, handles null states incorrectly, or leaks memory."
                    quickChecks={[
                        "Correlate your monthly incident rate against the date your engineering team rolled out enterprise AI coding licenses.",
                        "Audit pull request review times: are senior engineers spending significantly longer trying to decipher dense blocks of AI-generated code?",
                        "Check who authored failing code in your last three post-mortems: can the engineer explain the exact control flow without referencing the AI prompt?"
                    ]}
                    whyItBroke="Generative code models predict what code looks like, not how complex production distributed systems behave under stress. They produce plausible code that handles the happy path cleanly, while silently ignoring boundary conditions, connection timeouts, and race conditions."
                    directFix="Cap pull requests at 300 lines. Enforce mandatory end-to-end integration tests on all AI-suggested refactors, and mandate that engineers cannot approve code they cannot explain line-by-line."
                    toolLink={{
                        label: "Calculate Real Copilot ROI",
                        href: "/tools/copilot-roi"
                    }}
                    citationSnippet="AI coding assistants accelerate technical debt when teams confuse fast code generation with reliable system design, resulting in higher production incident rates and longer code review cycles."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        The Perception of Speed vs. Reality of Maintenance
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        A widely discussed research study from METR found that developers using AI assistants were actually 19% slower at completing realistic engineering tasks. Why? Because the time required to verify, debug, and correct AI output erased the initial speed gain.
                    </p>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        Here is what happens inside a software team after rolling out AI coding tools:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">1. The Reviewer Bottleneck</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Junior engineers can generate 4x more code than they did last year. That code lands on the desks of senior engineers and tech leads. Reviewing 800 lines of unfamiliar AI-written code takes twice as long as reviewing hand-written code, paralyzing senior bandwidth.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">2. Loss of Architectural Ownership</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                When an outage occurs at 2 AM, the on-call engineer looks at the stack trace. Instead of recognizing the logic they wrote, they are trying to reverse-engineer a prompt suggestion from three weeks ago. Mean Time to Resolution (MTTR) doubles.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">3. Subtle Edge-Case Decay</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                AI assistants frequently duplicate slightly modified helper functions rather than refactoring existing shared libraries. Codebase size balloons, test execution slows down, and duplicate logic drifts apart over time.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        The Code Ownership Standard
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                        AI should assist the engineer, never replace their understanding. Require developers to write the core architectural tests first before prompting an assistant for implementation. If you do not know how to test it, the AI should not write it.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
