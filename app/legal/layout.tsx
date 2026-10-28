const legalSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Legal Terms, Terms of Service & Privacy Policy',
  description: 'Master legal terms, enterprise advisory disclaimers, privacy policy, and intellectual property declarations for Richard Ewing.',
  url: 'https://www.richardewing.io/legal',
  publisher: {
    '@type': 'Person',
    name: 'Richard Ewing',
    url: 'https://www.richardewing.io',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.richardewing.io' },
    { '@type': 'ListItem', position: 2, name: 'Legal Terms & Privacy', item: 'https://www.richardewing.io/legal' },
  ],
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
