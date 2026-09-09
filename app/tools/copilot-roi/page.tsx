import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import CopilotROITool from './content';

export const metadata: Metadata = {
    title: 'GitHub Copilot ROI Calculator',
    description: 'Calculate the true financial ROI, code churn impact, and review overhead of AI coding tools.',
    keywords: [
        'GitHub Copilot ROI',
        'Cursor ROI calculator',
        'AI coding assistant economics',
        'Vibe coding debt',
        'engineering productivity AI',
        'cost of predictivity',
        'ROAI',
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/copilot-roi',
    },
    openGraph: {
        title: 'Copilot ROI Forecaster | Measure AI Execution Drag',
        description: 'Prove the actual margin value of your AI developer tools.',
        url: 'https://www.richardewing.io/tools/copilot-roi',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <CopilotROITool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="Copilot ROI Forecaster"
                    problemDomain="AI Code Churn &amp; Senior Review Tax"
                    calculatedMetricLabel="Typical Review Overhead Tax"
                    calculatedMetricValue="18% to 35% of Senior Bandwidth"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'CAREERWIN_PLATFORM',
                        relationshipType: 'ADDRESSES',
                        channel: 'CAREER_INTELLIGENCE',
                        headline: 'Evaluate True Engineering Trajectory with Context Engines',
                        subtext: 'CareerWin evaluates software engineering impact through systems leadership and architectural quality rather than commit volume.',
                        actionUrl: '/careerwin',
                        actionLabel: 'Explore CareerWin Intelligence ↗',
                        targetRole: 'Senior Staff Engineers & Engineering Managers'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'R&D Productivity & AI Tooling Economics Audit',
                        subtext: 'Retain Richard Ewing to benchmark AI developer tool ROI, code churn rates, and engineering capacity allocation, addressing the Engineering Bottleneck Illusion.',
                        actionUrl: '/workspace/engineering',
                        actionLabel: 'Inquire for Engineering Audit ↗',
                        targetRole: 'VPs of Engineering & CTOs'
                    }}
                />
                <div className="mt-8 p-6 bg-white border border-zinc-300 rounded-2xl shadow-sm text-center">
                    <p className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">Primary Research &amp; Analysis</p>
                    <h3 className="text-base font-bold text-zinc-950 mb-3">Why Faster Typing Does Not Mean Faster Shipping</h3>
                    <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold">
                        <a 
                            href="https://www.linkedin.com/pulse/engineering-bottleneck-illusion-what-copilot-adoption-richard-ewing-f5qhc/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-900 hover:text-indigo-700 underline underline-offset-4"
                        >
                            Read &quot;The Engineering Bottleneck Illusion&quot; on LinkedIn ↗
                        </a>
                        <a 
                            href="https://theaieconomist.beehiiv.com/p/the-software-factory-is-running-24-7-and-nobody-wants-the-output-c01a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-900 hover:text-cyan-700 underline underline-offset-4"
                        >
                            Read &quot;The Software Factory Is Running 24/7&quot; on Beehiiv ↗
                        </a>
                        <a 
                            href="https://www.linkedin.com/pulse/ai-hype-cycle-exhausting-richard-ewing-3bdic/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-900 hover:text-purple-700 underline underline-offset-4"
                        >
                            Read &quot;The AI Hype Cycle Is Exhausting&quot; on LinkedIn ↗
                        </a>
                        <a 
                            href="/concepts/software-factory-overproduction"
                            className="text-emerald-900 hover:text-emerald-700 underline underline-offset-4"
                        >
                            Explore Software Factory Overproduction Concept →
                        </a>
                        <a 
                            href="/glossary/engineering-bottleneck-illusion"
                            className="text-zinc-900 hover:text-zinc-700 underline underline-offset-4"
                        >
                            Explore Engineering Bottleneck Illusion Concept →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
