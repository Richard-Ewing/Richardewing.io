import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';
import { CANONICAL_CONCEPTS } from '@/app/lib/concept-corpus';

interface ConceptPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CANONICAL_CONCEPTS.map((concept) => ({
    slug: concept.slug,
  }));
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const { slug } = await params;
  permanentRedirect(`/concepts/${slug}`);
}

export default async function ConceptDetailPage({ params }: ConceptPageProps) {
  const { slug } = await params;
  permanentRedirect(`/concepts/${slug}`);
}
