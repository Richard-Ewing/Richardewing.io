import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Wrench, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why Engineers Babysit AI Prompts All Day',
    description: 'Find out why your engineering team became API janitors, how prompt tuning eats sprint velocity, and how to stop treating AI maintenance as R&D.',
    keywords: [
        'api janitors', 'prompt engineering maintenance', 'why ai slows down developers',
        'r&d line item lie', 'ai maintenance vs innovation', 'prompt tuning engineering tax'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-ai-teams-become-api-janitors' },
};

export default function WhyAITeamsBecomeAPIJanitorsPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Why are our software engineers spending all day tweaking AI prompts instead of shipping features?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'When companies launch AI features without deterministic runtime guardrails, prompt maintenance becomes an endless manual chore. Engineers become API janitors: fixing edge cases by rewriting system prompts, patching embedding sync failures, and wrestling with changing model behaviors instead of writing core business logic.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the R&D Line Item Lie in AI budgets?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The R&D Line Item Lie occurs when leadership categorizes continuous AI prompt tuning, vector pipeline patching, and wrapper maintenance as innovative research and development. In reality, 80% of that budget is reactive operational maintenance with modern branding.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do you liberate engineering capacity from prompt babysitting?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Decouple prompt management from application code. Move prompts into version-controlled evaluation suites managed by product operators, and enforce deterministic input/output validation at a runtime proxy layer.'
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-red-200 bg-red-50 text-red-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <Wrench size={14} /> The API Janitor Trap
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why Your Engineers Are Babysitting AI Instead of Building Features
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your CTO announced that your company is &ldquo;AI-first&rdquo;. But look at your Jira sprint board: 80% of the tickets are &ldquo;fix embedding sync&rdquo;, &ldquo;re-tune prompt for new model&rdquo;, and &ldquo;debug malformed JSON output&rdquo;.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="Maintenance Masquerading as Innovation"
                    symptom="Senior engineers who used to build revenue-generating core features are now full-time prompt wranglers. Every time a customer reports a weird response, a developer spends two days testing adjectives in a system prompt."
                    quickChecks={[
                        "Audit your last two sprint backlogs: how many tickets involve tweaking prompts, fixing chunking logic, or resolving AI provider rate limits?",
                        "Check your team's pull requests: are developers writing new application features, or are they patching glue code around third-party AI APIs?",
                        "Ask your lead architect: if OpenAI changes their model tomorrow, how many hours will the team lose fixing broken prompts?"
                    ]}
                    whyItBroke="Prompt engineering feels like creative work, but in production, unconstrained prompts are fragile. Every edge-case patch creates a new failure somewhere else. Without deterministic evaluation frameworks, engineers get sucked into an infinite trial-and-error loop."
                    directFix="Take prompts out of hardcoded software repositories. Move to deterministic schema enforcement with Pydantic/Zod, and set a hard rule: engineers build business architecture, not manual prompt tweaks."
                    toolLink={{
                        label: "Calculate Your Technical Debt (PDI)",
                        href: "/tools/pdi"
                    }}
                    citationSnippet="Engineers become API janitors when companies deploy unconstrained LLM wrappers without automated evaluation suites, turning high-cost software capacity into full-time prompt maintenance."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        The High Price of Guess-and-Check Engineering
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        Senior software engineers cost $180,000 to $300,000 in fully loaded compensation. You hired them to design scalable database architectures, high-performance systems, and defensible technology moats.
                    </p>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        Today, many of them spend their afternoons doing this:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">1. Playing Thesaurus with Language Models</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                A customer complains the AI answered too aggressively. A senior engineer spends 6 hours changing &ldquo;be concise&rdquo; to &ldquo;be professional and warm, yet succinct&rdquo; and manually running 30 test queries. That is not engineering; that is high-priced guesswork.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">2. Babysitting Flaky Vector Pipelines</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Half the team&apos;s on-call alerts come from vector database sync errors, chunking index corruptions, or third-party API rate-limit timeouts. The infrastructure requires constant manual intervention to keep running.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">3. Morale &amp; Retention Collapse</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Great engineers want to solve hard architectural problems. When their entire job becomes managing proprietary model quirks and fixing fragile wrappers, your top performers get burned out and start looking for new roles.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        How to Break the Janitor Cycle
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                        Separate the prompt lifecycle from the code deployment lifecycle. Implement runtime guardrails and structured proxies (like Exogram) that handle retries, rate limits, and schema validation automatically, freeing your engineering team to build commercial software that actually moves the business forward.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
