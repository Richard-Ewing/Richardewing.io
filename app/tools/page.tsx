import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ToolsContent from './tools-content';

export const metadata: Metadata = {
    title: 'Free AI Cost Attribution & Token Audit Calculators',
    description: 'Stop API margin collapse. Use our free forensic tools for CTOs to measure software entropy, calculate AUEB (AI Unit Economics), and spot shadow AI.',
    keywords: [
        'technical debt calculator', 'product debt index', 'free engineering tools',
        'AI unit economics calculator', 'SaaS valuation tool', 'revenue per engineer calculator',
        'technical debt assessment', 'engineering productivity benchmark',
        'AUEB calculator', 'enterprise value scenario engine',
        'audit interview tool', 'engineering hiring assessment',
        'Richard Ewing tools', 'free CTO tools', 'R&D audit tools',
        'executive diagnostics', 'AI governance diagnostics'
    ],
    alternates: { canonical: 'https://www.richardewing.io/tools' },
    openGraph: {
        title: 'Executive Diagnostics Hub | Production AI Governance',
        description: 'Boardroom-ready diagnostic instruments used in audits. Try them free: PDI, EV-SE, AUEB, and SLM Arbitrage.',
        url: 'https://www.richardewing.io/tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive Diagnostics Hub | Production AI Governance',
        description: 'Forensic instruments to measure technical debt, AI costs, and operational risk.',
    },
};

export default function ToolsPage() {
    return <ToolsContent />;
}
