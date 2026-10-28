import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Register for Command Center | Richard Ewing',
  },
  description: 'Create an account to save diagnostic scorecards, download executive P&L workbooks, and access your workspace on richardewing.io.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
