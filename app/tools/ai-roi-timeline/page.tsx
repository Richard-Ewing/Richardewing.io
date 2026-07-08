import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AIRoiTimelineContent from './content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/tools/ai-roi-timeline' },
    title: 'When Will Your AI Investment A & Strategy Diagnostics | Richard Ewing',
    description: 'When Will Your AI Investment A provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
};

export default function AIRoiTimelinePage() {
    return <AIRoiTimelineContent />;
}
