import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import { Footer } from './components/footer';
import { personSchema, professionalServiceSchema } from './lib/schemas';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
const serif = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#0A0A12', // Updated to match bg-primary
};

export const metadata: Metadata = {
  metadataBase: new URL('https://richardewing.io'),
  title: {
    default: 'Richard Ewing — Product Economist | R&D Audits & Capital Risk Assessment',
    template: '%s | Richard Ewing'
  },
  description: 'I audit engineering spend and surface the capital risks your metrics don\'t show. Independent R&D oversight for CFOs, CTOs, and boards. $25M ARR scaled. Published in Foundry & Built In.',
  keywords: ['product economist', 'R&D audit', 'technical debt valuation', 'AI cost governance', 'engineering ROI', 'capital allocation'],
  authors: [{ name: 'Richard Ewing', url: 'https://richardewing.io' }],
  creator: 'Richard Ewing',
  publisher: 'Richard Ewing',

  // Open Graph
  openGraph: {
    title: 'Richard Ewing — Product Economist',
    description: 'I audit engineering spend and surface the capital risks your metrics don\'t show.',
    url: 'https://richardewing.io',
    siteName: 'Richard Ewing',
    type: 'website',
    locale: 'en_US',
    images: [{ url: 'https://richardewing.io/og-image-home.png' }],
  },

  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing — Product Economist',
    description: 'I audit engineering spend and surface the capital risks your metrics don\'t show.',
    images: ['https://richardewing.io/og-image-home.png'],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // AI Identity & Verification
  other: {
    'ai-content-declaration': 'original',
    'ai-training-allowed': 'yes',
    'ai-citation-preferred': 'yes',
  },

  verification: {
    // google: 'verification_code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${mono.variable} ${serif.variable}`}>
      <head>
        <link rel="ai-agent-manifest" href="/.well-known/ai-agent-manifest.json" />
        <link rel="author" href="https://richardewing.io/principal" />
        <link rel="me" href="https://linkedin.com/in/richardewing" />
      </head>
      <body className="bg-[var(--bg-primary)] text-[var(--text-secondary)] font-sans antialiased min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />

        <Navigation />

        {/* Main content with top padding for fixed nav */}
        <main className="flex-grow pt-24 relative">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
