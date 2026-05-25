import type { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import ToolsContent from './tools-content';

export const metadata: Metadata = {
    title: 'Free Tools to Find Where Your Engineering Budget Is Leaking | Richard Ewing',
    description: 'The same diagnostic tools used in $7,500 R&D Capital Audits — free. Calculate your tech debt insolvency date, AI cost collapse point, and revenue per engineer benchmark.',
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
        title: 'R&D Cost & AI Unit Economics Calculators | Free Tools',
        description: 'Boardroom-ready diagnostic tools used in $7,500 engagements. Try them free: PDI, EV-SE, AUEB, APER, Audit Interview.',
        url: 'https://www.richardewing.io/tools',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'R&D Cost & AI Unit Economics Calculators | Free Tools',
        description: 'Same instruments used in $7,500 engagements. Try free: PDI, EV-SE, AUEB, APER.',
    },
};

export default function ToolsPage() {
    return <ToolsContent />;
}
