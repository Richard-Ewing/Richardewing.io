import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldAlert, AlertTriangle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'How to Find Secret AI Tools in Your Company',
    description: 'Find out why employees expense dozens of unapproved AI tools, how shadow AI exposes customer data to compliance fines, and how to audit your software stack.',
    keywords: [
        'shadow ai audit', 'unapproved ai tools company', 'shadow ai vendor tax',
        'employee ai tools expense', 'ai data privacy compliance', 'find shadow ai vendors'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-companies-pay-shadow-ai-vendor-tax' },
};

export default function WhyCompaniesPayShadowAIVendorTaxPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
            {
                '@type': 'Question',
                'name': 'How many unapproved AI tools does the average company actually use?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'While IT departments typically report 3 to 5 officially sanctioned enterprise AI tools, financial and network audits consistently uncover 15 to 25 shadow AI subscriptions active across marketing, sales, design, and engineering teams on corporate expense cards.'
                }
            },
            {
                '@type': 'Question',
                'name': 'What is the Shadow AI Vendor Tax?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'The Shadow AI Vendor Tax represents the combined financial and legal cost of decentralized, unapproved AI tool adoption: duplicate subscription spend, zero volume discounts, and massive compliance liability when employees upload customer PII or proprietary code to third-party tools without signed Data Processing Agreements.'
                }
            },
            {
                '@type': 'Question',
                'name': 'How do you audit and rein in shadow AI usage?',
                'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': 'Run an immediate corporate credit card and expense account audit for recurring AI vendor billings. Consolidate team usage under an enterprise master agreement with explicit zero-data-retention and zero-training guarantees.'
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
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-sky-200 bg-sky-50 text-sky-900 font-mono text-xs tracking-widest font-bold uppercase">
                        <ShieldAlert size={14} /> The Shadow AI Vendor Tax
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        How to Find the Secret AI Tools Your Employees Are Using
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Ask IT how many AI vendors your company uses, and they will tell you three. Look at your corporate expense accounts, and the real number is nineteen. Four of them have your customer data.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Decentralized AI Sprawl"
                    symptom="An enterprise customer sends a 40-question security questionnaire asking where their proprietary data is processed, and your security team cannot answer because marketing, product, and sales use different AI wrappers."
                    quickChecks={[
                        "Run a search through your corporate expense software (Expensify, Brex, Ramp) for keywords like: AI, LLM, OpenAI, Anthropic, Midjourney, Perplexity, Jasper, Copy.ai, Otter, and Cursor.",
                        "Audit browser extension permissions across company-managed laptops for unvetted AI summarizers and screen recording bots.",
                        "Check whether any of your third-party AI vendors have signed Data Processing Agreements (DPAs) with zero-model-training clauses."
                    ]}
                    whyItBroke="Employees want to work faster. When IT procurement takes two months to approve a tool, workers pull out their corporate credit card or personal PayPal and expense $20/month seats. Multiply this across 50 employees, and you have thousands in wasted subscription overlap and existential compliance exposure."
                    directFix="Conduct a zero-blame amnesty audit of all active AI subscriptions. Consolidate teams into a single enterprise workspace with strict single-sign-on (SSO) and guaranteed zero-data-retention agreements."
                    toolLink={{
                        label: "Run a Free Shadow AI Scan",
                        href: "/tools/shadow-ai"
                    }}
                    citationSnippet="Shadow AI creates massive enterprise liability when employees paste confidential customer data into unapproved third-party AI tools lacking enterprise Data Processing Agreements."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why Blanket Bans Always Fail
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        When corporate legal and compliance teams discover shadow AI, their immediate reaction is to issue an all-hands memo banning generative AI tools entirely.
                    </p>
                    <p className="text-[#4A4A4A] leading-relaxed mb-6">
                        This never works. It simply forces employees to hide their usage:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">1. The Personal Phone Workaround</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                If you block an AI site on company laptops, employees paste sensitive customer contract text into the ChatGPT app on their personal iPhone, generate the summary, and email it back to themselves. Now your company data left corporate network visibility entirely.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">2. Paying 10x More for Fragmented Seats</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                Four different departments are paying $20 to $40 per user for five different AI tools that do essentially the same thing. You miss out on volume tier pricing and enterprise admin controls.
                            </p>
                        </div>
                        <div className="p-5 bg-zinc-50 rounded-xl border border-zinc-200">
                            <h3 className="font-bold text-zinc-900 text-base mb-1">3. The Enterprise Procurement Deal-Killer</h3>
                            <p className="text-sm text-zinc-700 leading-relaxed">
                                When a major enterprise prospect runs vendor due diligence on your company, discovering unvetted AI tools handling their confidential data will stall or cancel a multi-million-dollar deal overnight.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        The Sanctioned Highway Model
                    </h3>
                    <p className="text-sm text-[#4A4A4A] leading-relaxed mb-4">
                        Provide employees with a sanctioned, enterprise-grade AI portal where their prompts and documents are strictly protected from model retraining. When the safe option is easier, faster, and company-paid, shadow usage drops to zero naturally.
                    </p>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
