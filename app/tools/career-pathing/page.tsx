import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import Layout from '../layout';
import Content from './content';

export const metadata: Metadata = {
    title: 'Just Got Laid Off From Tech? | Career Recovery Diagnostic',
    description: 'Identify your exact career bottleneck in 3 steps. Are you stuck because of skills, positioning, or market timing? Get a personalized recovery plan, not generic LinkedIn advice.',
    alternates: { canonical: 'https://www.richardewing.io/tools/career-pathing' }
};

export default function CareerPathingPage() {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}
