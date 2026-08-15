import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Claim Your Enterprise Vault Seat',
    description: 'Register and activate your enterprise seat to access proprietary AI Economics models and benchmarks.',
    alternates: {
        canonical: 'https://www.richardewing.io/vault/join',
    },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
