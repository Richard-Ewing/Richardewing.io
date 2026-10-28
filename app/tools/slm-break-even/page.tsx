import { Metadata } from 'next';
import CalculatorIntentProposal from '@/app/components/calculators/CalculatorIntentProposal';
import ToolServerHeader from '@/app/components/calculators/ToolServerHeader';
import SLMBreakEvenTool from './content';

export const metadata: Metadata = {
    title: 'SLM Fine-Tuning vs Hosted API Break-Even',
    description: 'Calculate the monthly query volume where self-hosting a fine-tuned Small Language Model (SLM) on AWS/GCP beats proprietary frontier model APIs.',
    keywords: [
        'SLM break-even calculator',
        'Fine-tuning ROI calculator',
        'Small Language Models vs LLM',
        'vLLM hosting cost calculator',
        'Claude 3.7 vs Llama 3.3',
        'AI Unit Economics'
    ],
    alternates: {
        canonical: 'https://www.richardewing.io/tools/slm-break-even',
    },
    openGraph: {
        title: 'SLM vs Hosted API Break-Even Calculator | Richard Ewing',
        description: 'Calculate your exact break-even volume for hosting local SLMs vs cloud APIs.',
        url: 'https://www.richardewing.io/tools/slm-break-even',
        type: 'website',
    },
};

export default function Page() {
    return (
        <div className="space-y-8">
            <ToolServerHeader
                slug="slm-break-even"
                eyebrow="Inference FinOps · Dedicated GPU vs Frontier API"
                h1="SLM Fine-Tuning vs Hosted API Break-Even Calculator"
                executiveAnswer="Self-hosting open-weight Small Language Models before hitting sustained GPU utilization burns more engineering payroll and idle compute than commercial token APIs. Built for CTOs, CFOs, and VPs of Engineering to pinpoint the exact monthly request volume where dedicated inference pays back."
                appName="SLM Fine-Tuning vs Hosted API Break-Even Calculator"
                appDescription="Inference FinOps calculator comparing dedicated AWS/GCP GPU clusters and MLOps overhead against commercial LLM API pricing."
                howToName="How to Calculate Your SLM vs Commercial API Break-Even Point"
                howToDescription="Enter monthly prompt volume, token length, GPU hourly rates, and MLOps staffing cost to find break-even volume."
                steps={[
                    { name: 'Input Monthly Prompt & Token Volume', text: 'Specify daily active requests, average input/output tokens, and peak concurrency.' },
                    { name: 'Configure GPU & Staffing Overhead', text: 'Include reserved GPU instance pricing, idle cluster buffer, and MLOps maintenance allocation.' },
                    { name: 'Compare Monthly Total Cost of Ownership', text: 'Identify your exact crossover volume and gross margin impact vs commercial APIs.' },
                ]}
            />
            <SLMBreakEvenTool />
            <div className="page-container max-w-4xl mx-auto px-6 mb-16">
                <CalculatorIntentProposal
                    toolName="SLM Fine-Tuning vs Hosted API Break-Even Calculator"
                    problemDomain="Frontier Model API Markup &amp; Gross Margin Compression"
                    calculatedMetricLabel="Typical Gross Margin Recovery"
                    calculatedMetricValue="+25% to +50% SaaS Gross Margin Expansion"
                    severityLevel="ELEVATED"
                    primaryPathway={{
                        destination: 'EXOGRAM_SOFTWARE',
                        relationshipType: 'OPERATIONALIZES',
                        channel: 'ENGINEERING_RUNTIME',
                        headline: 'Deploy Multi-Tier Semantic Routing with Exogram',
                        subtext: 'Exogram intercepts user queries at the edge, routing 80%+ of repetitive tasks to quantized SLMs while falling back to frontier models only for complex synthesis.',
                        actionUrl: '/exogram',
                        actionLabel: 'Explore Exogram Model Routing ↗',
                        targetRole: 'VP of AI & Lead Machine Learning Engineers'
                    }}
                    secondaryPathway={{
                        destination: 'RICHARD_EWING_ADVISORY',
                        relationshipType: 'ADVISES_ON',
                        channel: 'EXECUTIVE_ADVISORY',
                        headline: 'Model Right-Sizing & Inference FinOps Audit',
                        subtext: 'Retain Richard Ewing to audit your inference pipeline, calculate token elasticity curves, and architect dedicated SLM distillation clusters.',
                        actionUrl: '/workspace/finance',
                        actionLabel: 'Inquire for Inference FinOps Audit ↗',
                        targetRole: 'CFOs & Chief Technology Officers'
                    }}
                />
            </div>
        </div>
    );
}
