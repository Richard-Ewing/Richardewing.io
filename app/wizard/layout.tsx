import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Diagnostic Assessment Wizard | Richard Ewing',
  },
  description: 'Guided diagnostic wizard mapping engineering spend, AI feature unit margins, and technical debt exposure across your portfolio.',
  robots: { index: false, follow: false },
};

export default function WizardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
