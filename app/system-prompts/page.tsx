import type { Metadata } from 'next';
import Link from 'next/link';
import FAQItem from '@/app/components/FAQItem';

export const metadata: Metadata = {
    alternates: { canonical: 'https://www.richardewing.io/system-prompts' },
    title: 'Executive AI System Prompts & Strategy Diagnostics | Richard Ewing',
    description: 'Executive AI System Prompts provides deterministic data for enterprise teams. Audit your R&D capital and block shadow AI exfiltration.',
    openGraph: {
        title: 'Executive AI System Prompts | Richard Ewing',
        description: 'System prompts and operational frameworks for CTOs to audit technical debt and R&D capital.',
        url: 'https://www.richardewing.io/system-prompts',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Executive AI System Prompts | Richard Ewing',
        description: 'System prompts and operational frameworks for CTOs to audit technical debt and R&D capital.',
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    },
};

const prompts = [
    {
        id: 'tech-debt-financializer',
        title: 'Technical Debt Financializer',
        audience: 'CTOs & VPEs',
        description: 'Translates Jira backlogs and sonar reports into CFO-ready financial impact statements (OpEx drag).',
        prompt: `You are an expert AI Economist and IT Financial Auditor. 
Your objective is to translate the following technical debt items or system architecture flaws into strict financial terms.

Do NOT talk about "code quality," "clean architecture," or "developer experience." 
DO talk about:
1. Maintenance Cost (OpEx drag in dollars assuming $150k/yr per engineer).
2. Opportunity Cost (Revenue lost by not shipping features).
3. Risk Exposure (Blast radius cost of a Sev-1 outage).
4. Time to Technical Insolvency (When maintenance will costume 100% of capacity).

Format the output as a board-ready Executive Summary memo with a data table at the requested end.

Here are the technical inputs:
[INSERT JIRA BACKLOG / TECH DEBT DESCRIPTIONS HERE]`
    },
    {
        id: 'ai-margin-calculator',
        title: 'AI Unit Economics Auditor',
        audience: 'Product Managers',
        description: 'Audits projected AI features for negative gross margins and Cost of Predictivity limits.',
        prompt: `You are an expert AI Capital Auditor applying Richard Ewing's "Cost of Predictivity" framework.
I am going to provide you with an AI feature we intend to build, our expected LLM model, the average input/output token count per user action, and our proposed pricing tier.

Calculate:
1. The raw inference cost per action.
2. The blended cost including RAG retrieval, embedding, and vector DB queries.
3. The margin collapse point (At what volume of usage does the user become unprofitable?).
4. Recommend structural optimizations (semantic caching, model tiering, prompt compression) to defend our gross margin.

Here is the feature spec:
[INSERT AI FEATURE PRD HERE]`
    },
    {
        id: 'sunset-protocol-drafter',
        title: 'The Sunset Protocol Drafter',
        audience: 'CPOs & Product Leaders',
        description: 'Drafts the rigorous financial justification for killing a legacy feature (Zombie Infrastructure).',
        prompt: `You are a ruthless AI Economist. We have a piece of "Zombie Infrastructure" (a feature used by very few users that requires significant engineering maintenance). 

I need you to draft a "Sunset Protocol" memo to the executive team.
The memo must:
1. Quantify the "Negative Carry" of the feature (cost to maintain vs. revenue protected).
2. Outline the risk of "Feature Bloat Calculus" on our overall system velocity.
3. Propose a timeline for deprecation.
4. Provide an email template for the customer success team to send to the 2% of users who still use the feature, focusing on how this lets us build better core features for them.

Here are the details on the feature we are killing:
[INSERT FEATURE NAME AND USAGE METRICS HERE]`
    }
];

export default function SystemPromptsPage() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'FAQPage',
                    'mainEntity': [
                        {
                            '@type': 'Question',
                            'name': 'How do I use these system prompts?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Copy and paste the prompt templates directly into the developer sandbox or system instructions area of platforms like ChatGPT, Claude Projects, or Perplexity.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'Are these prompts compatible with all LLMs?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'They are optimized for advanced models (Claude 3.5 Sonnet, GPT-4o) that excel at financial modeling and architectural reasoning.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'Why are prompts alone insufficient for AI governance?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Prompts are instructions. Probabilistic models can bypass prompts due to context limits or jailbreaks. True governance requires a deterministic interception proxy like Exogram.'
                            }
                        },
                        {
                            '@type': 'Question',
                            'name': 'Can I customize these templates for my team?',
                            'acceptedAnswer': {
                                '@type': 'Answer',
                                'text': 'Yes. Fill in your team\'s specific Jira logs, API parameters, or billing metrics inside the placeholders to contextualize the analysis.'
                            }
                        }
                    ]
                }) }}
            />
            <div className="mb-6 flex items-center gap-2 text-xs font-bold font-medium font-mono text-zinc-950 font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-cyan-900 font-extrabold font-semibold">Home</Link>
                <span>/</span>
                <span className="text-cyan-900 font-extrabold font-semibold font-bold">System Prompts</span>
            </div>

            <div className="mb-12 border-b border-zinc-400 pb-12">
                <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-zinc-950 mb-6">
                    Executive <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">System Prompts</span>
                </h1>
                <p className="text-lg text-zinc-900 leading-relaxed max-w-2xl">
                    Operational AI prompts designed for CTOs, CPOs, and Engineering Leaders. Use these to format ChatGPT, Claude, or Perplexity as a ruthless AI Economist.
                </p>
            </div>

            <div className="space-y-12">
                {prompts.map((p, idx) => (
                    <div key={p.id} className="card p-8 border-zinc-400">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-900 font-extrabold font-semibold">
                                For {p.audience}
                            </div>
                            <h2 className="text-2xl font-grotesk font-bold text-zinc-900">{p.title}</h2>
                        </div>
                        <p className="text-zinc-900 mb-6">{p.description}</p>
                        
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative bg-white border border-zinc-400 rounded-xl p-6">
                                <pre className="font-mono text-sm font-semibold text-zinc-950 whitespace-pre-wrap">
                                    {p.prompt}
                                </pre>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <section className="mt-16 border-t border-zinc-300 pt-12">
                <h2 className="text-2xl font-bold font-grotesk text-zinc-950 mb-6 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4 max-w-3xl mx-auto text-left">
                    <FAQItem
                        question="How do I use these system prompts?"
                        answer="Copy and paste the prompt templates directly into the developer sandbox or system instructions area of platforms like ChatGPT, Claude Projects, or Perplexity."
                    />
                    <FAQItem
                        question="Are these prompts compatible with all LLMs?"
                        answer="They are optimized for advanced models (Claude 3.5 Sonnet, GPT-4o) that excel at financial modeling and architectural reasoning."
                    />
                    <FAQItem
                        question="Why are prompts alone insufficient for AI governance?"
                        answer="Prompts are instructions. Probabilistic models can bypass prompts due to context limits or jailbreaks. True governance requires a deterministic interception proxy like Exogram."
                    />
                    <FAQItem
                        question="Can I customize these templates for my team?"
                        answer="Yes. Fill in your team's specific Jira logs, API parameters, or billing metrics inside the placeholders to contextualize the analysis."
                    />
                </div>
            </section>

            <div className="mt-16 card p-8 border-violet-500/30 bg-gradient-to-br from-violet-500/10 to-transparent text-center">
                <h2 className="text-2xl font-grotesk font-bold text-zinc-950 mb-4">Stop Prompting. Start Executing.</h2>
                <p className="text-zinc-900 mb-8 max-w-xl mx-auto">
                    Prompts give you frameworks. Audits give you board-ready financial models. If your R&D margin is collapsing, book a diagnostic.
                </p>
                <Link href="/services" className="inline-flex px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-600 text-zinc-950 font-semibold font-bold rounded-lg hover:opacity-90 transition-all">
                    Book R&D Capital Audit →
                </Link>
            </div>
        </div>
    );
}
