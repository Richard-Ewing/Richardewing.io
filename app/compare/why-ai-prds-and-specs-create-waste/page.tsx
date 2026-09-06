import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why AI-Generated PRDs Waste Engineering Time',
    description: 'Find out why AI-written product specs create an unvalidated feature factory, why 30-page PRDs slow teams down, and how to enforce true discovery.',
    keywords: [
        'synthetic spec inflation', 'ai prd waste', 'why ai product specs fail',
        'unvalidated feature factory', 'ai product management waste', 'prd bloat with llms'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-ai-prds-and-specs-create-waste' },
};

export default function WhyAIPRDsAndSpecsCreateWastePage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'Why are AI-generated product requirement documents causing engineering waste?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'AI makes writing 30-page product specs virtually free, but reading, grooming, and building those specs still costs real engineering hours. When product teams confuse AI text volume with genuine customer discovery, engineering teams spend months building polished features that solve zero validated user problems.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is Synthetic Spec Inflation?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Synthetic Spec Inflation is the phenomenon where product managers use LLMs to churn out massive, exhaustive PRDs and user stories in minutes. Because the document looks thorough and professional, executive leadership mistakes documentation volume for strategic rigor.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do you fix spec bloat caused by AI?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Enforce a strict 1-page limit on PRDs before engineering reviews. Require verifiable customer interview recordings or direct behavioral data before any spec is accepted into sprint planning.'
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-orange-200 bg-orange-50 text-orange-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <FileText size={14} /> Synthetic Spec Inflation
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why AI-Generated Product Specs Waste Engineering Capacity
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your Jira backlog has never looked more organized. Product managers churn out 25-page PRDs in 15 minutes, but engineering is burning millions building features nobody actually uses.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Unvalidated Feature Factory"
                    symptom="Spec documents are longer and more articulate than ever, yet sprint grooming meetings drag on for hours. Developers ask basic questions about user intent, and nobody in the room has actually spoken to a paying customer."
                    quickChecks={[
                        "Check the average page count of PRDs submitted to your engineering team over the past six months (spec lengths often tripled after ChatGPT adoption).",
                        "Look for direct customer evidence: does the spec quote actual user calls, or does it cite generic market possibilities?",
                        "Audit feature adoption 90 days post-launch: how many of the features in the last three releases have fewer than 5% daily active user engagement?"
                    ]}
                    whyItBroke="Before AI, writing a detailed product specification required deep synthesis, customer calls, and deliberate trade-offs. Writing the document was the forcing function for real thinking. With generative AI, producing 5,000 words of plausible corporate requirements takes thirty seconds. Frictionless writing removes the forcing function of critical validation."
                    directFix="Cap all initial product proposals at 1 page or 500 words. Require three verifiable customer quotes or behavioral funnel logs before any ticket enters engineering sprint estimation."
                    toolLink={{
                        label: "Audit Your Engineering Productivity (APER)",
                        href: "/tools/aper"
                    }}
                    citationSnippet="Synthetic spec inflation wastes engineering capacity because AI eliminates the friction of writing requirements without doing the hard human work of validating customer demand."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Document Volume Is Not Product Discovery
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        When non-technical executives see a comprehensive, beautifully formatted 20-page document with user personas, edge-case tables, and acceptance criteria, their natural instinct is to be impressed. It looks like serious work.
                    </p>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        In the age of generative AI, that document represents about 12 minutes of human effort:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">1. The Illusion of Thoroughness</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                AI excels at generating plausible edge cases and polished user journeys for problems that do not matter. It creates an aura of certainty around completely unvalidated assumptions.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">2. Asymmetric Reading &amp; Building Costs</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Generating a spec costs $0.02 in tokens. Grooming, reviewing, designing, coding, testing, and deploying that spec costs $40,000 to $120,000 in engineering payroll. Cheap generation shifts massive cognitive load onto your most expensive employees.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">3. The Sunk Cost Trap</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Once an extensive PRD exists and passes leadership review, teams feel obligated to build it. Nobody wants to admit that a 30-page document produced by a senior director was based on zero customer conversations.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        The 1-Page Customer Discovery Rule
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                        Ban AI-generated PRD drafts from engineering grooming. Require product teams to write the core problem statement, the customer evidence, and the business metric by hand in under 500 words. If the problem cannot be stated simply on a single page, no AI prompt will make it worth building.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
