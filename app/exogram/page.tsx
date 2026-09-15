import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
    ExternalLink, 
    ArrowRight, 
    Sparkles, 
    ShieldCheck, 
    Layers, 
    Database, 
    History, 
    GitBranch, 
    Cpu, 
    UserCheck, 
    CheckCircle2, 
    Lock, 
    Compass, 
    Quote,
    Building2,
    Calendar,
    Search,
    Code2,
    Sliders
} from 'lucide-react';
import { exogramSoftwareSchema } from '@/app/lib/schemas';
import ContextualAIVisual from '@/components/exogram/ContextualAIVisual';
import VacationContextExample from '@/components/exogram/VacationContextExample';
import MemoryComparisonTable from '@/components/exogram/MemoryComparisonTable';
import CognitiveLoopVisual from '@/components/exogram/CognitiveLoopVisual';

export const metadata: Metadata = {
    title: 'Exogram: AI That Remembers Context | Richard Ewing',
    description: 'Exogram is a conversational AI that understands your context, remembers what matters, and helps you move work and life forward without starting over every time.',
    alternates: {
        canonical: 'https://www.richardewing.io/exogram',
    },
    openGraph: {
        title: 'Exogram: AI That Remembers Reality',
        description: "Richard Ewing's founder thesis for Exogram: a conversational AI that carries context forward so you can ask naturally instead of briefing a new chatbot every time.",
        url: 'https://www.richardewing.io/exogram',
        type: 'website',
        images: [{ url: 'https://www.richardewing.io/assets/images/headshot.jpg' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Exogram: AI That Remembers Reality',
        description: "Richard Ewing's founder thesis for Exogram: a conversational AI that carries context forward so you can ask naturally instead of briefing a new chatbot every time.",
        images: ['https://www.richardewing.io/assets/images/headshot.jpg'],
    }
};

export default function ExogramFounderThesisPage() {
    const layers = [
        {
            layer: 'Event history',
            desc: 'Records meaningful conversations, actions, decisions, artifacts, and outcomes with source provenance',
            icon: History
        },
        {
            layer: 'Semantic understanding',
            desc: 'Identifies people, projects, claims, preferences, events, tasks, and decisions',
            icon: Search
        },
        {
            layer: 'Relationship context',
            desc: 'Connects entities across time, systems, conversations, documents, and work',
            icon: GitBranch
        },
        {
            layer: 'Temporal state',
            desc: 'Distinguishes current, proposed, verified, superseded, expired, disputed, and unresolved information',
            icon: Layers
        },
        {
            layer: 'Context assembly',
            desc: 'Selects only the evidence and state needed for the active task',
            icon: Compass
        },
        {
            layer: 'Reasoning',
            desc: 'Exogram interprets the assembled context, synthesizes relevant information, plans next steps, and explains its thinking',
            icon: Cpu
        },
        {
            layer: 'User feedback',
            desc: 'Lets people confirm, correct, suppress, revoke, or delete context',
            icon: UserCheck
        }
    ];

    const useCases = [
        {
            title: 'Personal planning',
            desc: 'Travel, household projects, family logistics, purchases, goals, and long-running decisions - without rebuilding the relevant context each time.',
            icon: Calendar
        },
        {
            title: 'Research and strategy',
            desc: 'A connected record of sources, claims, contradictions, decisions, alternatives, and open questions across an investigation or strategic project.',
            icon: Search
        },
        {
            title: 'Product and engineering',
            desc: 'Persistent context for architecture decisions, requirements, code changes, tests, incidents, prior fixes, and unfinished work.',
            icon: Code2
        },
        {
            title: 'AI product teams',
            desc: 'A persistent context layer for assistants and agents that need durable state, evidence qualification, and continuity across sessions and workflows.',
            icon: Cpu
        }
    ];

    const controlBullets = [
        'View the context that influenced an important answer',
        'Correct or dismiss assumptions',
        'Separate personal, work, project, and shared spaces',
        'Keep temporary conversations separate from durable knowledge',
        'Mark information as current, proposed, verified, superseded, or expired',
        'Revoke or delete retained context',
        'Choose between private local reasoning and cloud reasoning depending on the task'
    ];

    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-28 pb-24 text-zinc-950 font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(exogramSoftwareSchema) }}
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* ═══════════════════════════════════════════════════════
                    HERO SECTION
                ═══════════════════════════════════════════════════════ */}
                <section className="text-center pt-8 pb-14 border-b border-zinc-300">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-purple-100/80 border border-purple-300 text-purple-900 rounded-full font-mono text-xs uppercase tracking-widest mb-6 font-bold">
                        <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                        <span>FOUNDER PROJECT · EXOGRAM.AI</span>
                    </div>

                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-grotesk font-bold text-zinc-950 tracking-tight mb-6 leading-[1.08]">
                        AI that remembers reality.
                    </h1>

                    <p className="text-lg sm:text-xl text-zinc-800 max-w-3xl mx-auto leading-relaxed mb-8 font-medium">
                        Exogram is a conversational AI that understands your context, remembers what matters, and helps you move work and life forward - without starting over every time.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <a
                            href="https://exogram.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-md transition-all gap-2 w-full sm:w-auto"
                        >
                            Try Exogram →
                        </a>
                        <a
                            href="#how-it-works"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white border border-zinc-300 text-zinc-900 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-100 transition-colors w-full sm:w-auto"
                        >
                            How Exogram works →
                        </a>
                    </div>

                    {/* Founder identifier */}
                    <div className="max-w-2xl mx-auto p-4 rounded-xl bg-white/70 border border-zinc-300 flex items-center gap-4 text-left shadow-xs">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-300">
                            <Image
                                src="/assets/headshot.jpg"
                                alt="Richard Ewing"
                                fill
                                className="object-cover"
                                sizes="48px"
                            />
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-700 leading-snug">
                            <span className="font-bold text-zinc-950">Built by Richard Ewing</span>, entrepreneur, product strategist, and researcher focused on enterprise AI, product economics, and the systems required to make AI genuinely useful over time.
                        </p>
                    </div>

                    {/* Hero Visual */}
                    <div className="mt-12">
                        <ContextualAIVisual />
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: THE MISSING LAYER
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                            The Missing Layer
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-6">
                            AI is impressive in the moment. Its continuity is still fragile.
                        </h2>
                        <div className="space-y-5 text-base sm:text-lg text-zinc-800 leading-relaxed">
                            <p>
                                Today’s best language models can write, reason, analyze, code, search, and explain. But the user often has to reconstruct the world around the question before the model can help. You restate the project. You explain the prior decision. You upload the document again. You clarify what changed, who is involved, what failed before, what the budget is, and what constraints matter.
                            </p>
                            <p>
                                The model may be highly capable. But without durable context, every conversation can become another briefing.
                            </p>
                        </div>

                        {/* Pull Quote */}
                        <div className="my-8 p-6 sm:p-8 bg-white rounded-2xl border-l-4 border-purple-600 border border-zinc-300 shadow-xs">
                            <p className="text-xl sm:text-2xl font-grotesk font-bold text-zinc-950 leading-snug">
                                &ldquo;The next AI advantage is not only better answers. It is less need to explain the question.&rdquo;
                            </p>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: THE PROMPT-ENGINEERING TAX
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                            Cognitive Friction
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-6">
                            People should not need a masterclass in prompting to get useful help.
                        </h2>
                        <div className="space-y-5 text-base sm:text-lg text-zinc-800 leading-relaxed">
                            <p>
                                Prompt engineering is often a workaround for missing context. A person knows the history behind a question. They know the relationships, goals, constraints, preferences, prior decisions, and events that give a short request its actual meaning.
                            </p>
                            <p>
                                A conventional chatbot sees only the words typed into the current message, plus whatever information was manually added to the conversation. That gap creates a tax: the user repeatedly translates their world into long instructions that the model can use once.
                            </p>
                            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200 text-purple-950 font-medium text-base">
                                Exogram is built to eliminate that tax. It carries forward the relevant context you choose to retain, so each conversation picks up where the last one left off.
                            </div>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: THE VACATION EXAMPLE
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-4xl mx-auto">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                                Context Demonstration
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                                A short question can contain a great deal of unstated context.
                            </h2>
                            <p className="text-zinc-700 text-base leading-relaxed">
                                A typical chatbot may need to ask where you live, who is traveling, what your budget is, how long you have, whether you want to fly or drive, what kinds of activities you prefer, and why October matters. Exogram can begin with relevant context the user has chosen to retain: home area, typical travel style, likely travelers, budget preferences, prior trips, and important dates.
                            </p>
                        </div>

                        {/* Interactive Vacation Example Component */}
                        <VacationContextExample />

                        <div className="max-w-3xl mx-auto mt-8 text-center">
                            <p className="text-sm sm:text-base text-zinc-700 italic">
                                The system is not reading a person’s mind. It is making a transparent, editable hypothesis from relevant context, then asking the smallest question needed to move the plan forward.
                            </p>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: WHAT EXOGRAM IS
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-4xl mx-auto">
                        <div className="max-w-3xl mx-auto text-center mb-8">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                                What Exogram Is
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                                Exogram is AI that understands your context.
                            </h2>
                            <div className="text-base sm:text-lg text-zinc-800 leading-relaxed space-y-4 text-left">
                                <p>
                                    Exogram is a conversational AI built to carry your real context forward.
                                </p>
                                <p>
                                    It remembers the work you have done, the decisions you have made, the people and projects involved, what changed, what failed, and what still needs attention. It connects that context to the question you ask now - so you can speak naturally instead of rebuilding the entire briefing in every prompt.
                                </p>
                                <p>
                                    The result is not just another chat thread. It is an AI system that becomes more useful as it understands the relevant reality around your work and life.
                                </p>
                            </div>
                        </div>

                        <div className="my-8 p-6 sm:p-8 bg-white rounded-2xl border-l-4 border-purple-600 border border-zinc-300 shadow-xs max-w-3xl mx-auto">
                            <p className="text-xl sm:text-2xl font-grotesk font-bold text-zinc-950 leading-snug">
                                Ask naturally. Exogram connects the dots.
                            </p>
                        </div>

                        {/* Visual Cognitive Loop */}
                        <CognitiveLoopVisual />
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: HOW IT WORKS
                ═══════════════════════════════════════════════════════ */}
                <section id="how-it-works" className="py-16 border-b border-zinc-300 scroll-mt-24">
                    <div className="max-w-4xl mx-auto">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                                Under the Hood
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                                Exogram turns your history into useful intelligence.
                            </h2>
                            <p className="text-zinc-700 text-base max-w-2xl mx-auto">
                                Every conversation, project, document, decision, and outcome can contribute context - when it is relevant and when you choose to retain it. Exogram organizes that context into a persistent understanding of people, projects, preferences, events, relationships, and changing facts.
                            </p>
                        </div>

                        <div className="border border-zinc-300 rounded-2xl bg-white overflow-hidden shadow-sm divide-y divide-zinc-200">
                            {layers.map((l, idx) => {
                                const Icon = l.icon;
                                return (
                                    <div
                                        key={l.layer}
                                        className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-zinc-50/60 transition-colors"
                                    >
                                        <div className="flex items-center gap-3.5 sm:w-1/3 shrink-0">
                                            <div className="p-2 rounded-lg bg-purple-100 text-purple-800 border border-purple-200">
                                                <Icon className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-mono text-zinc-600 block uppercase">Layer 0{idx + 1}</span>
                                                <h3 className="font-bold text-sm sm:text-base text-zinc-950 font-grotesk">
                                                    {l.layer}
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="sm:w-2/3 text-xs sm:text-sm text-zinc-700 leading-relaxed">
                                            {l.desc}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: THE DIFFERENCE
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-4xl mx-auto">
                        <div className="max-w-3xl mx-auto text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                                The Difference
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                                Most AI responds to a prompt. Exogram responds to the situation.
                            </h2>
                            <p className="text-zinc-700 text-base">
                                The gap between answering the words you typed and understanding what you actually need.
                            </p>
                        </div>

                        <MemoryComparisonTable />
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: INTERACTION MODEL
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                            Governing Philosophy
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-6">
                            Ask naturally. Confirm what matters.
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-800 leading-relaxed mb-8">
                            Exogram should use stable, low-risk context when it is relevant. It should expose uncertain assumptions rather than silently treating them as fact. It should ask only the next question that materially improves the result. And it should require explicit approval before any consequential external action.
                        </p>

                        {/* Three Principles Banner */}
                        <div className="p-6 sm:p-8 bg-purple-900 text-white rounded-2xl shadow-sm mb-8 border border-purple-950">
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-purple-300 block mb-2">
                                The Three Invariants
                            </span>
                            <p className="text-xl sm:text-3xl font-grotesk font-bold tracking-tight">
                                Infer to personalize. Confirm to plan. Authorize to act.
                            </p>
                        </div>

                        <p className="text-sm sm:text-base text-zinc-700 leading-relaxed">
                            This creates a more collaborative kind of AI interaction: not a chatbot that makes users repeat everything, and not an agent that acts on hidden assumptions.
                        </p>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: WHERE IT HELPS
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-4xl mx-auto">
                        <div className="max-w-3xl mx-auto text-center mb-12">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                                Applied Domains
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                                For work and life that cannot start over every conversation.
                            </h2>
                            <p className="text-zinc-700 text-base">
                                Grounding long-running human workflows across tools, projects, and life decisions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {useCases.map((uc) => {
                                const Icon = uc.icon;
                                return (
                                    <div
                                        key={uc.title}
                                        className="p-6 bg-white border border-zinc-300 rounded-2xl shadow-xs hover:border-purple-300 transition-all flex flex-col justify-between"
                                    >
                                        <div>
                                            <div className="p-3 bg-purple-100/70 border border-purple-200 text-purple-900 rounded-xl w-fit mb-4">
                                                <Icon className="w-5 h-5" />
                                            </div>
                                            <h3 className="text-lg font-bold text-zinc-950 font-grotesk mb-2">
                                                {uc.title}
                                            </h3>
                                            <p className="text-sm text-zinc-700 leading-relaxed">
                                                {uc.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: CONTROL AND PRIVACY
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                                Sovereign Governance
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                                Context should be useful, not creepy.
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-800 leading-relaxed">
                                Persistent context is valuable only when it remains visible, scoped, and controllable. Exogram is designed to separate personal, work, shared, and temporary-task context. Users should be able to see what the system used, correct it, turn it off for a task, revoke it, export it, or delete it.
                            </p>
                        </div>

                        <div className="bg-white border border-zinc-300 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
                            <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-900 mb-4 flex items-center gap-2">
                                <Lock className="w-4 h-4 text-purple-700" />
                                Core Privacy &amp; Control Guarantees
                            </h3>
                            <ul className="space-y-3">
                                {controlBullets.map((bullet) => (
                                    <li key={bullet} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-800">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Secondary Enterprise Controls link */}
                        <div className="p-5 rounded-xl bg-zinc-100 border border-zinc-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <Building2 className="w-5 h-5 text-zinc-700 shrink-0" />
                                <div className="text-xs text-zinc-700">
                                    <span className="font-bold text-zinc-950 block sm:inline">Enterprise Runtime &amp; Governance Controls: </span>
                                    For teams requiring strict deterministic execution boundaries and security audits.
                                </div>
                            </div>
                            <Link
                                href="/exogram/architecture"
                                className="text-xs font-mono font-bold text-purple-800 hover:text-purple-950 inline-flex items-center gap-1 shrink-0"
                            >
                                Enterprise Architecture &rarr;
                            </Link>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: WHY NOW
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700 mb-2 block">
                            Market Thesis
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-grotesk font-bold text-zinc-950 tracking-tight mb-6">
                            The next generation of AI will not just answer. It will understand.
                        </h2>
                        <div className="text-base sm:text-lg text-zinc-800 leading-relaxed mb-8 space-y-4 text-left">
                            <p>
                                The world does not arrive as a clean prompt.
                            </p>
                            <p>
                                It arrives as conversations, relationships, calendars, projects, documents, decisions, changing priorities, unfinished work, and events that matter for reasons users may not think to explain every time.
                            </p>
                            <p>
                                Exogram is being built for that reality: AI that can carry context forward, recognize when it matters, and collaborate with people over time.
                            </p>
                        </div>

                        <div className="p-6 sm:p-8 bg-white border border-zinc-300 rounded-2xl shadow-xs">
                            <p className="text-xl sm:text-2xl font-grotesk font-bold text-zinc-950">
                                &ldquo;The AI you keep using is the one that already knows the situation.&rdquo;
                            </p>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    SECTION: FOUNDER NOTE
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 border-b border-zinc-300">
                    <div className="max-w-3xl mx-auto bg-white border border-zinc-300 rounded-2xl p-6 sm:p-10 shadow-xs">
                        <div className="flex items-center gap-3 mb-6">
                            <Quote className="w-6 h-6 text-purple-700" />
                            <h2 className="text-2xl sm:text-3xl font-grotesk font-bold text-zinc-950">
                                Why I am building Exogram.
                            </h2>
                        </div>

                        <div className="space-y-4 text-base text-zinc-800 leading-relaxed font-sans">
                            <p>
                                I began building Exogram after repeatedly encountering the same problem while using AI to research, write, plan, and build products. The models were often impressive. But the experience was discontinuous. A model would lose the architecture of a project, forget a prior decision, repeat a failed approach, or require another lengthy explanation to recreate context that already existed days earlier.
                            </p>
                            <p>
                                That was not a prompting problem. It was a product problem. The intelligence was there, but the continuity was not.
                            </p>
                            <p>
                                Exogram is my attempt to build what I wanted to use: an AI that remembers the work, understands the situation, and lets me speak naturally instead of re-briefing a blank chatbot every morning. Not a wrapper. Not middleware. The actual AI I go to when I need to think, plan, research, or build.
                            </p>
                            <p>
                                The ambition is simple: AI should understand enough of what is going on that people can just talk to it.
                            </p>
                        </div>

                        <div className="mt-8 pt-6 border-t border-zinc-200 flex items-center gap-4">
                            <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-300">
                                <Image
                                    src="/assets/headshot.jpg"
                                    alt="Richard Ewing"
                                    fill
                                    className="object-cover"
                                    sizes="48px"
                                />
                            </div>
                            <div>
                                <div className="font-bold text-zinc-950 text-base font-grotesk">Richard Ewing</div>
                                <div className="text-xs font-mono text-zinc-600">Founder, Exogram.ai</div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* ═══════════════════════════════════════════════════════
                    FINAL CTA SECTION
                ═══════════════════════════════════════════════════════ */}
                <section className="py-16 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl sm:text-5xl font-grotesk font-bold text-zinc-950 tracking-tight mb-4">
                            AI that already knows the situation.
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 leading-relaxed mb-8">
                            Exogram is a conversational AI that understands your context, remembers what matters, and helps you move forward without starting over.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="https://exogram.ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-bold uppercase tracking-widest text-xs rounded-xl shadow-md transition-all gap-2 w-full sm:w-auto"
                            >
                                Try Exogram →
                            </a>
                            <Link
                                href="/about"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white border border-zinc-300 text-zinc-950 font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-zinc-100 transition-colors w-full sm:w-auto"
                            >
                                Read about Richard Ewing →
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    );
}
