import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register for Command Center Access',
    description: 'Create an enterprise account to access AI Economics diagnostic tools, research databases, and benchmarks.',
    alternates: {
        canonical: 'https://www.richardewing.io/sign-up',
    },
};

export default function SignUpLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
