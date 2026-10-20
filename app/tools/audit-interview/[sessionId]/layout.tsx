import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Audit Interview Session',
    robots: { index: false, follow: false },
};

export default function AuditInterviewSessionLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
