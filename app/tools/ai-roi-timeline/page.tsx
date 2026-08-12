import { Metadata } from 'next';
import AIRoiTimelineContent from './content';

export const metadata: Metadata = {
    title: 'AI ROI Timeline Calculator',
    description: 'Model payback timelines, capital recovery points, and financial return on AI investments for board presentations.',
    alternates: { canonical: 'https://www.richardewing.io/tools/ai-roi-timeline' },
};

export default function AIRoiTimelinePage() {
    return <AIRoiTimelineContent />;
}
