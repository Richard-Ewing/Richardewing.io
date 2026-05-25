import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register for command center access | Richard Ewing',
    description: 'Create an account to track your Product Debt, run AI cost diagnostics, and manage enterprise seat configurations.',
    alternates: {
        canonical: 'https://www.richardewing.io/sign-up',
    },
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
