import { Metadata } from 'next';
import AIRoiTimelineContent from './content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/tools/ai-roi-timeline' },
    title: 'AI ROI Timeline & FTE Break-Even Modeler | Richard Ewing',
    description: 'Calculate exactly when your AI investments reach break-even against human resource displacement.',
};

export default function AIRoiTimelinePage() {
    return <AIRoiTimelineContent />;
}
