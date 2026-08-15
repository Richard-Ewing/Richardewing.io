import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Sign In to Command Center',
    description: 'Sign in to access your enterprise diagnostic dashboards, benchmark assessments, and private research notes.',
    robots: {
        index: false,
        follow: true,
    },
    alternates: {
        canonical: 'https://www.richardewing.io/sign-in',
    },
};

export default function SignInLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
