import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Exogram — Deterministic AI Governance Runtime',
    description: 'Exogram is the execution control plane for autonomous AI agents — intercepting non-deterministic LLM output and enforcing policy-as-code before execution.',
    alternates: { canonical: 'https://www.richardewing.io/exogram' },
    openGraph: {
        title: 'Exogram — Deterministic AI Governance Runtime',
        description: 'Execution control plane for autonomous AI agents. Intercept non-deterministic output and enforce policy-as-code at runtime.',
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram — Deterministic AI Governance Runtime',
        description: 'Execution control plane for autonomous AI agents. Intercept non-deterministic output and enforce policy-as-code at runtime.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function ExogramLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
