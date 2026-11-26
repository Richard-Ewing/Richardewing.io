import type { Metadata } from 'next';
import VsMonetizelyClient from './VsMonetizelyClient';

export const metadata: Metadata = {
  title: 'vs. Monetizely & Pricing I/O Guide',
  description:
    'Compare Richard Ewing fixed-scope AI P&L sprints ($2,500) against boutique pricing firms like Monetizely and Pricing I/O.',
  alternates: {
    canonical: 'https://www.richardewing.io/compare/advisory-vs-monetizely-pricingio',
  },
  openGraph: {
    title: 'vs. Monetizely & Pricing I/O Guide | Richard Ewing',
    description:
      'See where pricing-only boutiques stop and why full product P&L sprints cover engineering cost floors alongside packaging.',
    url: 'https://www.richardewing.io/compare/advisory-vs-monetizely-pricingio',
    type: 'article',
    images: [{ url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vs. Monetizely & Pricing I/O Guide | Richard Ewing',
    description:
      'See where pricing-only boutiques stop and why full product P&L sprints cover engineering cost floors alongside packaging.',
    images: ['https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg'],
  },
};

const FAQ_ITEMS = [
  {
    q: 'When should I hire Monetizely or Pricing I/O instead of Richard Ewing?',
    a: 'Pick Monetizely or Pricing I/O when your underlying delivery costs are already tiny and predictable, and your main need is large-sample market research across hundreds of prospective buyers to redesign package tiers.',
  },
  {
    q: 'What does a pricing-only boutique usually leave out on AI products?',
    a: 'Pricing boutiques rarely inspect the messy engineering bills underneath your feature or check which stale backlog projects are draining half your developer payroll. Even the cleanest price sheet loses money if heavy power users burn past your tier ceiling every week.',
  },
  {
    q: 'How fast can we ship a new price sheet with a $2,500 fixed sprint?',
    a: 'Inside fourteen calendar days. Week one isolates your ten costliest customer accounts and dead backlog items; week two locks your base-plus-ceiling price tiers, renewal email script, and CFO profit model.',
  },
  {
    q: 'Should an early startup with ten customers hire any pricing firm?',
    a: 'No. At ten customers, call five buyers on the phone yourself and raise price on the next three prospects until two hesitate. Keep your money until real renewals depend on protecting gross margin.',
  },
];

export default function AdvisoryVsMonetizelyPricingIoPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A beautiful price sheet still loses money if nobody checked your AI bills.',
    description:
      'Boutique pricing consultancies such as Monetizely and Pricing I/O focus on packaging and buyer willingness-to-pay research. Richard Ewing pairs repricing with actual AI cost floors, backlog cuts, and CFO profit defense in a $2,500 14-day sprint.',
    datePublished: '2026-11-25',
    dateModified: '2026-11-25',
    image: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
    author: {
      '@type': 'Person',
      name: 'Richard Ewing',
      url: 'https://www.richardewing.io/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Richard Ewing Advisory',
      url: 'https://www.richardewing.io',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.richardewing.io/assets/images/richard-ewing-headshot.jpg',
      },
    },
    mainEntityOfPage: 'https://www.richardewing.io/compare/advisory-vs-monetizely-pricingio',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.richardewing.io/compare' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'vs. Monetizely & Pricing I/O',
        item: 'https://www.richardewing.io/compare/advisory-vs-monetizely-pricingio',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VsMonetizelyClient faqs={FAQ_ITEMS} />
    </>
  );
}
