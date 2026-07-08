import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register for command center ac & Strategy Diagnostics | Richard Ewing',
    description: 'Register for command center ac provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: {
        canonical: 'https://www.richardewing.io/sign-up',
    },
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
