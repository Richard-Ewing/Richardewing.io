import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In to Command Center | Richard Ewing',
    description: 'Authenticate securely to access your R&D Command Center, run diagnostic tools, and view historical snapshots.',
    alternates: {
        canonical: 'https://www.richardewing.io/sign-in',
    },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
