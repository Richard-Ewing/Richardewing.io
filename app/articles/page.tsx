import { Metadata } from 'next';
import ArticlesPage from './content';

export const metadata: Metadata = {
    title: 'Forensic Engineering Articles | Richard Ewing',
    description: 'Deep dives into R&D capital efficiency, technical debt valuation, and engineering economics. Published in Built In, CIO.com, Mind the Product, and HackerNoon.',
    alternates: {
        canonical: 'https://richardewing.io/articles',
    },
    openGraph: {
        title: 'Forensic Engineering Research & Articles | Richard Ewing',
        description: 'The canonical hub for frameworks and research used by top PE firms. Published in Built In, CIO.com, Mind the Product, and HackerNoon.',
        url: 'https://richardewing.io/articles',
    },
};

export default function Page() {
    return (
        <main className="pt-20">
            <div className="page-container">
                <ArticlesPage />
            </div>
        </main>
    );
}
