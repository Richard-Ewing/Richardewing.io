import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Richard Ewing',
    default: 'Audit Interview Session | Richard Ewing',
  },
  description: 'Live engineering verification session evaluating AI-generated code defect detection, blast radius scoring, and ship judgment.',
  robots: { index: false, follow: false },
};

export default function AuditInterviewSessionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
