import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DollarSign, AlertCircle, ArrowRight } from 'lucide-react';
import EmergencyTriageCard from '@/components/EmergencyTriageCard';
import AdvisoryCTA from '@/components/AdvisoryCTA';

export const metadata: Metadata = {
    title: 'Why AI API Bills Spike With Tool Use',
    description: 'Find out why adding web search, database tools, or MCP to your AI app multiplies token costs by 400% and how to stop the leak.',
    keywords: [
        'why ai api bill is high', 'anthropic token cost spike', 'openai tool use cost',
        'why mcp is expensive', 'ai token inflation', 'how to reduce ai api bill',
        'function calling token costs', 'llm prompt caching savings'
    ],
    alternates: { canonical: 'https://www.richardewing.io/compare/why-anthropic-bills-spike-with-tool-use' },
};

export default function WhyAnthropicBillsSpikePage() {
    return (
        <main className="min-h-screen bg-[#F5F0EB] pt-32 pb-24">
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-rose-200 bg-rose-50 text-rose-800 font-mono text-xs tracking-widest font-bold uppercase">
                        <DollarSign size={14} /> Token Cost Emergency
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        Why Your AI API Bill Jumped 4x After Adding Tools
                    </h1>
                    <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
                        Your user traffic only went up 10%, but your monthly Claude or OpenAI invoice jumped from $2,000 to $9,500. Here is what actually broke in your setup.
                    </p>
                </div>

                {/* Emergency Triage Card */}
                <EmergencyTriageCard 
                    headline="The Tool-Use Token Multiplier"
                    symptom="You added a web search tool or database lookup to your AI chatbot. Now every single user message re-sends the entire tool definitions and previous conversation history on every back-and-forth turn."
                    quickChecks={[
                        "Check if your prompt caching is active on large system prompts and tool schemas.",
                        "Inspect whether your agent re-runs 3 tool calls in a loop before sending 1 response.",
                        "Look at raw input token counts versus output token counts in your provider dashboard."
                    ]}
                    whyItBroke="Every time an AI model calls an external tool, it does not just send the new answer. It re-reads the entire conversation history plus 4,000 tokens of JSON schema definitions for every single tool on every turn. 5 turns equals 20,000 extra input tokens."
                    directFix="Turn on prompt caching on your static tool definitions and set strict 2-turn caps on agentic tool calling loops."
                    toolLink={{
                        label: "Calculate Your AI Unit Economics",
                        href: "/tools/aueb"
                    }}
                    citationSnippet="AI API bills spike when tool use is enabled because each turn forces the model to ingest the full tool schema and conversation history without prompt caching, creating a 4x token inflation."
                />

                {/* Plain English Deep Dive */}
                <div className="bg-white rounded-2xl border border-[rgba(0,0,0,0.08)] p-8 mb-8 shadow-sm">
                    <h2 className="text-2xl font-grotesk font-bold text-[#1A1A1A] mb-4">
                        The Hidden Math Behind the Bill Shock
                    </h2>
                    <p className="text-[#4A4A4A] leading-relaxed mb-4">
                        Most teams assume an API call costs a fraction of a penny. That is true for a simple question. But the second you give an AI assistant access to external tools (like search, GitHub, or Postgres), the math changes completely:
                    </p>

                    <div className="space-y-4 my-6">
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase block mb-1">Turn 1: User asks a question</span>
                            <p className="text-sm text-zinc-800">Prompt (500 tokens) + 12 Tool Schemas (3,500 tokens) = 4,000 tokens sent.</p>
                        </div>
                        <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-200">
                            <span className="text-xs font-mono font-bold text-zinc-500 uppercase block mb-1">Turn 2: Model calls the tool</span>
                            <p className="text-sm text-zinc-800">Tool output returns 2,000 tokens of raw JSON data.</p>
                        </div>
                        <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
                            <span className="text-xs font-mono font-bold text-rose-700 uppercase block mb-1">Turn 3: Model summarizes the answer</span>
                            <p className="text-sm text-rose-950 font-medium">Model re-reads everything from Turn 1 and Turn 2. Total cost for 1 answer: 10,500 tokens instead of 500.</p>
                        </div>
                    </div>

                    <h3 className="text-xl font-grotesk font-bold text-[#1A1A1A] mb-3">
                        How to Cut the Bill by 60% This Week
                    </h3>
                    <ul className="space-y-2 text-sm text-[#4A4A4A] leading-relaxed">
                        <li>• <strong>Cache tool definitions:</strong> Modern providers allow you to cache static schemas for up to 90% discount on input tokens.</li>
                        <li>• <strong>Filter tool payloads:</strong> Do not dump raw JSON arrays into the model context. Strip out unused keys before sending.</li>
                        <li>• <strong>Use smaller routing models:</strong> Use a fast, cheap model to decide <em>if</em> a tool is needed before calling a frontier model.</li>
                    </ul>
                </div>

                <AdvisoryCTA variant="compare" />
            </div>
        </main>
    );
}
