import { Metadata } from 'next';
import DoctrineContent from './content';

export const metadata: Metadata = {
    title: 'The Product Economist Doctrine | Richard Ewing',
    description: 'The framework for treating product decisions as economic decisions. Technical debt as capital liability. AI features as variable cost exposure. Innovation tax as hidden maintenance.',
    alternates: {
        canonical: 'https://richardewing.io/doctrine',
    },
};

export default function DoctrinePage() {
    return <DoctrineContent />;
}
