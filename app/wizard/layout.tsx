import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Diagnostic Assessment Wizard',
    robots: { index: false, follow: false },
};

export default function WizardLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
