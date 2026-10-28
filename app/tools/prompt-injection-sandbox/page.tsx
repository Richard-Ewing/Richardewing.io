import { Metadata } from 'next';
import PromptInjectionContent from './content';

export const metadata: Metadata = {
    title: 'Prompt Injection Intrusion Sandbox',
    description: 'Evaluate system prompt defensibility, test RAG security boundaries, and sandbox prompt injection attacks. Secure your generative AI applications now.',
    keywords: [
        'Prompt Injection Scanner',
        'LLM Red Teaming',
        'System Prompt Defensibility',
        'Jailbreak Sandbox',
        'AI Security Guardrails'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/prompt-injection-sandbox',
    },
    openGraph: {
        title: 'Prompt Injection Defense Sandbox',
        description: 'Dynamically evaluate the structural integrity of your RAG architecture against emergent prompt payload attacks.',
        url: 'https://www.richardewing.io/tools/prompt-injection-sandbox',
        type: 'website',
    },
};

import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export default function Page() {
    return (
        <>
            <PromptInjectionContent />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="danger"
                    title="Relying on system prompts alone to protect customer data and tools?"
                    subtitle="Probabilistic system prompts cannot enforce security boundaries. Pair prompt hardening with deterministic runtime policy gates."
                    metrics={['6 Attack Vectors', 'Tool Isolation', 'Runtime Gates']}
                />
            </div>
        </>
    );
}
