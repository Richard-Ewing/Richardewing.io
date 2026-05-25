import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import AIRoiTimelineContent from './content';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/tools/ai-roi-timeline' },
    title: 'When Will Your AI Investment Actually Break Even? | ROI Timeline',
    description: 'Stop burning cash on vague productivity promises. Calculate the exact quarter your AI features break even against human labor costs and model retraining taxes.',
};

export default function AIRoiTimelinePage() {
    return <AIRoiTimelineContent />;
}
