import type { Metadata } from 'next';
import { permanentRedirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'AI Advisory Services & Packages | Richard Ewing',
    description: 'Fixed-scope diagnostic instruments, R&D capital audits, and fractional executive retainers for enterprise AI governance and unit economics control.',
    alternates: { canonical: 'https://www.richardewing.io/services' },
};

export default function AdvisoryPage() {
    permanentRedirect('/services');
}
