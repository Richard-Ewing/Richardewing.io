import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Claim Your Enterprise Seat & Strategy Diagnostics | Richard Ewing',
    description: 'Claim Your Enterprise Seat provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    alternates: {
        canonical: 'https://www.richardewing.io/vault/join',
    },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
