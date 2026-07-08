import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In to Command Center & Strategy Diagnostics | Richard Ewing',
    description: 'Sign In to Command Center provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: {
        canonical: 'https://www.richardewing.io/sign-in',
    },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
