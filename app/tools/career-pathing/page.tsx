import { Metadata } from 'next';
import Layout from '../layout';
import Content from './content';

export const metadata: Metadata = {
    title: 'Layoff Recovery & Career Pathing Funnel | Richard Ewing',
    description: 'A 3-step diagnostic funnel to identify your exact career bottleneck and generate a personalized curriculum roadmap to level up your engineering trajectory.',
    alternates: { canonical: 'https://www.richardewing.io/tools/career-pathing' }
};

export default function CareerPathingPage() {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}
