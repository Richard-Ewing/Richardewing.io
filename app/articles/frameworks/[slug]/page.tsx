import { frameworks } from '@/lib/data';
import FrameworkDefinition from '@/components/FrameworkDefinition';

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
