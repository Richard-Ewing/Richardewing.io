import type { Metadata } from 'next';
import ToolsContent from './tools-content';

export const metadata: Metadata = {
    title: 'Free Diagnostic Tools — Technical Debt, AI Economics, Valuation | Richard Ewing',
    description: 'Free boardroom-ready diagnostic tools used in $7,500 engagements. Product Debt Index, Enterprise Value Scenario Engine, AI Unit Economics Benchmark, Revenue Per Engineer, and Audit Interview Protocol.',
    keywords: [
        'technical debt calculator', 'product debt index', 'free engineering tools',
        'AI unit economics calculator', 'SaaS valuation tool', 'revenue per engineer calculator',
        'technical debt assessment', 'engineering productivity benchmark',
        'AUEB calculator', 'enterprise value scenario engine',
        'audit interview tool', 'engineering hiring assessment',
        'Richard Ewing tools', 'free CTO tools', 'R&D audit tools',
    ],
    alternates: { canonical: 'https://www.richardewing.io/tools' },
    openGraph: {
        title: 'Free Diagnostic Tools | Richard Ewing',
        description: 'Boardroom-ready instruments used in $7,500 audits. Try them free: PDI, EV-SE, AUEB, APER, Audit Interview.',
        url: 'https://www.richardewing.io/tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Diagnostic Tools — Technical Debt, AI, Valuation',
        description: 'Same instruments used in $7,500 engagements. Try free: PDI, EV-SE, AUEB, APER.',
    },
};

export default function ToolsPage() {
    return <ToolsContent />;
}
