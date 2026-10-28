import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Sign In to Command Center | Richard Ewing',
  },
  description: 'Sign in to access your enterprise diagnostic dashboards, benchmark assessments, and executive workspace tools on richardewing.io.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
