import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Claim Your Enterprise Seat | The AI Economics Vault',
    description: 'Claim your enterprise seat to unlock full technology economics curriculum, custom calculators, and M&A due diligence tools.',
    alternates: {
        canonical: 'https://www.richardewing.io/vault/join',
    },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
