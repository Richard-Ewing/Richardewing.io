import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CodeReviewBottleneckTool from './content';

export const metadata: Metadata = {
    title: 'AI Code Review Bottleneck & Payroll Drag Calculator | Engineering Diagnostic',
    description: 'Calculate the senior engineering hours, review queue latency, and payroll drag caused by un-gated AI-generated pull request floods.',
    keywords: [
        'AI code review bottleneck',
        'Senior engineer review drag',
        'Vibe coding PR flood',
        'Engineering payroll waste calculator',
        'PR review cycle time',
        'Automated compiler gate ROI'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/code-review-bottleneck-calc',
    },
    openGraph: {
        title: 'AI Code Review Bottleneck Calculator | Richard Ewing',
        description: 'Quantify the financial cost of senior engineers acting as human compilers for AI code.',
        url: 'https://www.richardewing.io/tools/code-review-bottleneck-calc',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <CodeReviewBottleneckTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="AI Code Review Bottleneck Calculator"
                    problemDomain="Synthetic PR Floods &amp; Human Compiler Fatigue"
                    calculatedMetricLabel="Typical Senior Capacity Recovery"
                    calculatedMetricValue="+25% to +40% Reclaimed Engineering Bandwidth"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Automate Pre-Review Verification with Exogram',
                        subtext: 'Exogram executes automated mechanical compiler gates, type verification, and semantic diff bounding before pull requests ever reach senior human engineers.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Compiler Gate ↗',
                        targetRole: 'VP of Engineering & Engineering Directors'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Engineering Efficiency & SDLC Throughput Audit',
                        subtext: 'Retain Richard Ewing to audit your PR review funnel, eliminate review queues, and install sovereign verification harnesses.',
                        actionUrl: '/workspace/engineering',
                        actionLabel: 'Inquire for SDLC Throughput Audit ↗',
                        targetRole: 'CTOs & Heads of Engineering'
                    }}
                />
                <div className="mt-8 p-6 bg-white border border-zinc-300 rounded-2xl shadow-sm text-center">
                    <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">Primary Research &amp; Analysis</p>
                    <h3 className="text-base font-bold text-zinc-950 mb-3">The Crisis of Autonomous Overproduction &amp; Review Debt</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                        <a 
                            href="https://builtin.com/articles/ai-agents-to-do-list"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-900 hover:text-cyan-700 underline underline-offset-4"
                        >
                            Read &quot;AI Agents and the To-Do List&quot; on Built In ↗
                        </a>
                        <a 
                            href="https://theaieconomist.beehiiv.com/p/the-software-factory-is-running-24-7-and-nobody-wants-the-output-c01a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-900 hover:text-indigo-700 underline underline-offset-4"
                        >
                            Read &quot;The Software Factory Is Running 24/7&quot; on Beehiiv ↗
                        </a>
                        <a 
                            href="/concepts/supervisory-review-queue"
                            className="text-emerald-900 hover:text-emerald-700 underline underline-offset-4"
                        >
                            Supervisory Review Queue Concept →
                        </a>
                        <a 
                            href="/articles/frameworks/supervisory-review-queue"
                            className="text-violet-900 hover:text-violet-700 underline underline-offset-4"
                        >
                            Review Queue Framework Axiom →
                        </a>
                        <a 
                            href="/glossary/supervisory-review-queue"
                            className="text-zinc-900 hover:text-zinc-700 underline underline-offset-4"
                        >
                            Glossary Definition →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
