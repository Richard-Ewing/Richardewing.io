import { Metadata } from 'next';
import Layout from '../layout';
import Content from './content';

export const metadata: Metadata = {
    title: 'Career Pathing Funnel | Layoff Recovery Tool | Ewing',
    description: 'A 3-step diagnostic to identify your exact career bottleneck and generate a personalized curriculum roadmap for engineering career recovery.',
    alternates: { canonical: 'https://www.richardewing.io/tools/career-pathing' }
};

export default function CareerPathingPage() {
    return (
        <Layout>
            <Content />
        </Layout>
    );
}
