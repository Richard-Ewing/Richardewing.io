import type { Metadata } from 'next';
import ConceptDetailPage, { generateStaticParams as detailGenerateStaticParams, generateMetadata as detailGenerateMetadata } from '@/app/research/concepts/[slug]/page';

interface ConceptPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return detailGenerateStaticParams();
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const meta = await detailGenerateMetadata({ params });
  const { slug } = await params;
  return {
    ...meta,
    alternates: {
      canonical: `https://www.richardewing.io/concepts/${slug}`,
    },
  };
}

export default async function TopLevelConceptDetailPage({ params }: ConceptPageProps) {
  return <ConceptDetailPage params={params} />;
}
