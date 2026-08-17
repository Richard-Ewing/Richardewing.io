import type { Metadata } from 'next';
import BrandPage from '@/app/brand/page';

export const metadata: Metadata = {
  title: 'Brand Assets & Media Resources | Richard Ewing Partnerships',
  description: 'Download official vector SVG logos, PNG marks, executive portraits, and brand guidelines for Richard Ewing and Exogram partnerships.',
  alternates: {
    canonical: 'https://www.richardewing.io/partnerships/brand-assets',
  },
  openGraph: {
    title: 'Brand Assets & Media Resources | Richard Ewing Partnerships',
    description: 'Download official vector SVG logos, PNG marks, executive portraits, and brand guidelines for Richard Ewing and Exogram partnerships.',
    url: 'https://www.richardewing.io/partnerships/brand-assets',
    type: 'website',
  }
};

export default function PartnershipsBrandAssetsPage() {
  return <BrandPage />;
}
