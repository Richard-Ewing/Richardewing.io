import { Metadata } from 'next';
import Layout from '../layout';
import Content from './content';

export const metadata: Metadata = {
    title: 'AI Career Capital Calculator',
    description: 'Calculate your engineering career capital, evaluate compensation trajectories, and map senior IC vs management paths.',
    alternates: { canonical: 'https://www.richardewing.io/tools/career-pathing' }
};

export default function CareerPathingPage() {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}
