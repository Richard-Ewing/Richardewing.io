import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'EU AI Act Compliance FAQ & Strategy Diagnostics | Richard Ewing',
    description: 'EU AI Act Compliance FAQ provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
};

const FAQS = [
    {
        q: 'When does the EU AI Act go into effect?',
        a: 'The EU AI Act enforcement begins August 2, 2026 for most provisions. Prohibited AI practices (Article 5) were banned from February 2, 2025. GPAI model obligations apply from August 2, 2025. The full high-risk AI system requirements take effect August 2, 2026.',
    },
    {
        q: 'What are the maximum fines under the EU AI Act?',
        a: 'Fines scale by violation severity: up to €35M or 7% of global annual turnover for prohibited AI practices, up to €15M or 3% for high-risk system violations, and up to €7.5M or 1.5% for providing incorrect information to authorities. These are maximums — actual fines consider proportionality.',
    },
    {
        q: 'Does the EU AI Act apply to US companies?',
        a: 'Yes. Like GDPR, the AI Act has extraterritorial reach. It applies to any company that places AI systems on the EU market or whose AI system outputs are used in the EU — regardless of where the company is headquartered.',
    },
    {
        q: 'What counts as a "high-risk" AI system?',
        a: 'High-risk AI systems include those used in: employment and worker management, creditworthiness assessment, insurance risk pricing, law enforcement, border management, critical infrastructure, education, and certain safety components. Most enterprise AI in HR, finance, and operations qualifies.',
    },
    {
        q: 'How do I handle "shadow AI" — employees using unauthorized AI tools?',
        a: '67% of employees use AI tools at work, but fewer than 12% of AI applications are visible to IT. The EU AI Act requires a complete inventory of AI systems. Use our Shadow AI Exposure Scanner to identify unauthorized usage across your organization.',
    },
    {
        q: 'What documentation is required for compliance?',
        a: 'High-risk AI systems require: technical documentation of design and development, data governance documentation, risk management records, logs of system operation, conformity assessment results, and human oversight procedures. Most organizations currently lack 60-80% of required documentation.',
    },
    {
        q: 'Can we do a self-assessment or do we need external auditing?',
        a: 'Most high-risk AI systems can undergo internal conformity assessment under Annex VI. However, AI systems used in biometric identification, critical infrastructure safety, or law enforcement require third-party conformity assessment by a notified body.',
    },
    {
        q: 'What about AI-generated code — does that fall under the AI Act?',
        a: 'AI coding tools (Copilot, Cursor, etc.) are classified as general-purpose AI. If their outputs are used in high-risk applications (safety-critical software, financial systems), the deploying organization bears compliance responsibility. With 41% of new code being AI-generated, this is a significant exposure area.',
    },
];

export default function EUAIActFAQ() {
    return (
        <div className="min-h-screen bg-zinc-50 pt-24 pb-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                <Link href="/tools/eu-ai-act-checker" className="inline-flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Back to Compliance Checker
                </Link>

                <div className="flex items-center gap-3 mb-6">
                    <span className="p-2 bg-purple-100 text-purple-700 rounded-lg">
                        <Shield className="w-5 h-5" />
                    </span>
                    <h1 className="text-3xl font-grotesk font-bold text-zinc-950">EU AI Act Compliance FAQ</h1>
                </div>
                <p className="text-zinc-600 mb-12">
                    Everything engineering leaders, CTOs, and CISOs need to know about EU AI Act compliance before the August 2026 enforcement deadline.
                </p>

                <div className="space-y-6">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="bg-white border border-zinc-200 rounded-2xl p-6">
                            <h2 className="text-lg font-grotesk font-bold text-zinc-900 mb-3">{faq.q}</h2>
                            <p className="text-zinc-600 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-zinc-900">
                    <h2 className="text-2xl font-grotesk font-bold mb-3">Check Your Compliance Score</h2>
                    <p className="text-purple-100 mb-6">Score your EU AI Act readiness across 8 critical areas in 3 minutes.</p>
                    <Link href="/tools/eu-ai-act-checker" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 font-bold rounded-xl hover:bg-purple-50 transition-colors">
                        <Shield className="w-4 h-4" />
                        Run Free Assessment
                    </Link>
                </div>
            </div>
        </div>
    );
}
