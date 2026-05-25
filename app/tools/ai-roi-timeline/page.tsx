import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AIRoiTimelineContent from './content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/tools/ai-roi-timeline' },
    title: 'AI ROI Timeline | FTE Break-Even Calculator | Ewing',
    description: 'Calculate exactly when your AI investments break even vs human resource costs. Model displacement timelines across engineering functions.',
};

export default function AIRoiTimelinePage() {
    return <AIRoiTimelineContent />;
}
