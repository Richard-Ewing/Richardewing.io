import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Engineering Economics & Tool Comparisons | Richard Ewing'
  },
  description: 'Forensic architectural and financial comparisons between AI tools, developer platforms, and engineering methodologies for CTOs and CFOs.'
};

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.richardewing.io'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Comparisons & Due Diligence',
        item: 'https://www.richardewing.io/compare'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
