import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Sidebar } from './components/sidebar';
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
  themeColor: '#050505',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.richardewing.io'),
  title: {
    default: 'Richard Ewing | Product Economist',
    template: '%s | Richard Ewing'
  },
  description: 'I help boards stop bleeding money on AI they don\'t understand. Forensic product audits, capital allocation strategy, and AI unit economics.',
  keywords: ['Product Economist', 'AI Audit', 'Product Management', 'Capital Allocation', 'Tech Due Diligence', 'AI Unit Economics', 'Product Debt'],
  authors: [{ name: 'Richard Ewing', url: 'https://richardewing.io' }],
  creator: 'Richard Ewing',
  publisher: 'Richard Ewing',
  openGraph: {
    title: 'Richard Ewing | Product Economist',
    description: 'I help boards stop bleeding money on AI they don\'t understand.',
    type: 'website',
    locale: 'en_US',
    url: 'https://richardewing.io',
    siteName: 'Richard Ewing - Product Economist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Richard Ewing | Product Economist',
    description: 'Forensic product audits and AI unit economics for boards.',
  },
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
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${mono.variable} ${serif.variable}`}>
      <body className="overflow-x-hidden bg-obsidian text-gray-300 font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] min-h-screen">
          <Sidebar />
          <main className="p-4 sm:p-6 md:p-8 lg:p-16 xl:p-24 relative overflow-hidden min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
