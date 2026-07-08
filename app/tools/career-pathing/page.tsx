import { Metadata } from 'next';
import AdvisoryCTA from '@/components/AdvisoryCTA';
import Layout from '../layout';
import Content from './content';

export const metadata: Metadata = {
    title: 'Just Got Laid Off From Tech? & Strategy Diagnostics | Richard Ewing',
    description: 'Just Got Laid Off From Tech? provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: { canonical: 'https://www.richardewing.io/tools/career-pathing' }
};

export default function CareerPathingPage() {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}
