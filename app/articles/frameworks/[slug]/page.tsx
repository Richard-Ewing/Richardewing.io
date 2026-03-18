import { frameworks } from '@/lib/data';
import { Metadata } from 'next';
import FrameworkDefinition from '@/components/FrameworkDefinition';

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const framework = frameworks.find((f) => f.slug === params.slug);
    if (!framework) {
        return { title: 'Framework Not Found' };
    }
    return {
        title: `${framework.name} | Product Economist Framework Definition`,
        description: framework.definition.slice(0, 160),
        keywords: [
            framework.name.toLowerCase(),
            'product economist framework',
            'R&D capital allocation',
            'engineering economics',
            'Richard Ewing',
        ],
        alternates: {
            canonical: `https://richardewing.io/articles/frameworks/${framework.slug}`,
        },
        openGraph: {
            title: `${framework.name} | Product Economist Doctrine`,
            description: framework.definition.slice(0, 160),
            url: `https://richardewing.io/articles/frameworks/${framework.slug}`,
            type: 'article',
        },
        twitter: {
            card: 'summary',
            title: `${framework.name} | Richard Ewing`,
            description: framework.definition.slice(0, 160),
        },
    };
}

export async function generateStaticParams() {
    return frameworks.map((framework) => ({
        slug: framework.slug,
    }));
}

export default function Page({ params }: { params: { slug: string } }) {
    const framework = frameworks.find((f) => f.slug === params.slug);

    if (!framework) {
        return <div>Framework not found</div>;
    }

    return <FrameworkDefinition framework={framework} />;
}
