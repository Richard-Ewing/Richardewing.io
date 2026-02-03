import { Metadata } from 'next';
import ArticlesPage from './content';

export const metadata: Metadata = {
    title: 'Forensic Engineering Articles | Richard Ewing',
    description: 'Deep dives into R&D capital efficiency, technical debt valuation, and engineering economics. The playbook for War-Time Executives.',
    openGraph: {
        title: 'Forensic Engineering Research & Articles',
        description: 'The "Dark Matter" of Engineering Spend. Read the research used by top PE firms.',
        url: 'https://richardewing.io/articles',
    },
};

export default function Page() {
    return <ArticlesPage />;
}
