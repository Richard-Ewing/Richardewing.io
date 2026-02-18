import { PublishedProfiles } from '@/components/PublishedProfiles';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Published Profiles | Richard Ewing',
    description: 'Find Richard Ewing\'s work across CIO.com, Built In, Mind the Product, and HackerNoon.',
};

export default function ProfilesPage() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <PublishedProfiles />
            </div>
        </main>
    );
}
