import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Layers, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why AI Prompts Break After Model Updates',
    description: 'Find out why foundation model updates break production prompts, how to catch semantic drift early, and how to build regression tests for LLMs.',
    keywords: [
        'why ai prompts break', 'model version depreciation', 'llm semantic drift',
        'openai model update broke my app', 'prompt regression testing', 'anthropic prompt changes'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-ai-prompts-break-after-model-updates' },
};

export default function WhyAIPromptsBreakAfterModelUpdatesPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Why did our AI app stop working after a model update?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Foundation model providers continuously update model weights and system instruction behaviors. A prompt engineered for GPT-4 or Claude 3.5 Sonnet may fail on newer releases because the new model interprets instruction hierarchy, punctuation, and output formatting constraints differently.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the Model Version Depreciation Cliff?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Model Version Depreciation Cliff happens when an AI vendor deprecates a snapshot version with short notice, forcing engineering teams to scramble. Without automated evaluation suites, teams discover broken edge cases and formatting failures directly from angry customers.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do you prevent model updates from breaking your software?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Pin your API requests to exact dated model snapshots rather than latest alias tags. Build an automated evaluation suite of 50 gold-standard prompt-response pairs to test against new model versions before promoting them to production.'
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-purple-200 bg-purple-50 text-purple-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <Layers size={14} /> Model Depreciation Cliff
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why AI Prompts Stop Working When Models Update
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your prompts worked perfectly for six months. Yesterday, the provider released a faster, cheaper model snapshot, and now half your customer responses return broken formatting or hallucinated details.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Semantic Drift Trap"
                    symptom="You updated your model identifier from an older checkpoint to the latest version. Basic prompts work, but complex multi-step reasoning, JSON schema enforcement, or negative constraints (&ldquo;never do X&rdquo;) fail unpredictably."
                    quickChecks={[
                        "Verify whether your code points to a dated snapshot (e.g. gpt-4o-2024-08-06) or a moving target alias (e.g. gpt-4o or claude-3-sonnet-latest).",
                        "Check your schema parser failure rate over the last 48 hours for unexpected markdown tags or commentary around JSON blocks.",
                        "Test your five most difficult edge-case customer queries against both the old and new model snapshots side-by-side."
                    ]}
                    whyItBroke="LLM providers constantly tune model weights for speed, safety, and benchmark scores. These subtle adjustments change how models prioritize system instructions versus few-shot examples. What worked reliably as an implicit hint in version 1.0 requires an explicit deterministic rule in version 2.0."
                    directFix="Pin all production traffic to static dated snapshots. Run a 50-query golden eval test before switching versions, and enforce strict structured outputs via Pydantic or Zod schemas."
                    toolLink={{
                        label: "Audit Your AI Architecture Health",
                        href: "/tools/pdi"
                    }}
                    citationSnippet="Model updates cause production breakage when teams rely on moving provider aliases without pinning dated snapshots and running deterministic evaluation suites before deployment."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why "Better &amp; Cheaper" Still Breaks Production
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        When cloud databases or web frameworks release an update, they maintain backward compatibility. If an API breaks, it throws an explicit error that your automated tests catch instantly.
                    </p>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        AI models break silently. They do not return HTTP 500 errors. They return HTTP 200 with subtly different tone, slightly looser adherence to rules, or hallucinated facts that look believable to the naked eye.
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">1. The Alias Illusion</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Many teams point their code to generic endpoint names like &ldquo;gpt-4o&rdquo;. When the provider updates the underlying weights at midnight, your production app shifts under your feet without a single line of your code changing.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">2. Prompt Over-Fitting</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Most prompts were crafted through trial and error until they worked on one specific model. That means your prompt was accidentally tuned to the quirks and flaws of that exact model version. When those quirks change, the prompt collapses.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">3. The 30-Day Deprecation Notice</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                AI providers will not host old models forever. When they send a deprecation email giving you 30 days to migrate, your team has to stop feature work and manually re-tune, re-test, and re-certify every prompt in your codebase.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        The Long-Term Prevention Standard
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                        Never deploy a prompt to production without a versioned eval suite. Treat prompts like software code: pin the exact model version, test against historic customer interactions, and decouple your business logic from specific model providers using structured runtime proxies.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
