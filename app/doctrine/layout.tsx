const doctrineFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Innovation Tax?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Innovation Tax is the percentage of R&D budget spent on maintenance disguised as innovation. When teams report 65% on new features but the actual number is 23%, the 42-point gap is the Innovation Tax. Above 40% is dangerous. Above 70% is terminal. Coined by Richard Ewing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Kill Switch Protocol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Kill Switch Protocol is a framework for identifying and deprecating zombie features: code that costs money to maintain while generating zero customer margin. 40% to 60% of mature SaaS codebases are zombie features. Coined by Richard Ewing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Feature Bloat Calculus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Feature Bloat Calculus determines when a feature maintenance cost exceeds its value contribution, factoring in direct costs, opportunity costs, and complexity compounding. Coined by Richard Ewing.',
      },
    },
  ],
};

export default function DoctrineLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doctrineFaqSchema) }}
      />
      {children}
    </>
  );
}
