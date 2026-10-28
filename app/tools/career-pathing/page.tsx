import { Metadata } from 'next';
import Content from './content';
import DiagnosticCTA from '@/app/components/DiagnosticCTA';

export const metadata: Metadata = {
    title: 'AI Career Capital Calculator',
    description: 'Calculate your engineering career capital, evaluate compensation trajectories, and map senior IC vs management paths. Make data-driven career choices.',
    alternates: { canonical: 'https://www.richardewing.io/tools/career-pathing' }
};

export default function CareerPathingPage() {
    return (
        <>
            <Content />
            <div className="max-w-5xl mx-auto px-6 pb-20">
                <DiagnosticCTA
                    variant="primary"
                    title="Designing IC vs Management leveling or compensation bands?"
                    subtitle="Align Staff/Principal IC progression and Engineering Manager spans of control with measurable R&D output and P&L accountability."
                    metrics={['IC vs Mgmt', 'Comp Bands', 'Org Span']}
                />
            </div>
        </>
    );
}
