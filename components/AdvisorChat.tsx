'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Brain, User, Sparkles, ChevronRight, Loader2, CheckCircle, MessageSquare, Target, Cpu, DollarSign, Map } from 'lucide-react';
import AdvisorRoadmap from './AdvisorRoadmap';
import AdvisorStreamWidgets from './ai-advisor/AdvisorStreamWidgets';
import type { ParsedWidgetNode } from '@/lib/sovereign-ui-stream';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Message {
    role: 'user' | 'assistant';
    content: string;
    widgets?: ParsedWidgetNode[];
    isStreaming?: boolean;
}

interface BusinessProfile {
    name?: string;
    industry?: string;
    size?: string;
    revenue?: string;
    challenges?: string;
    [key: string]: unknown;
}

interface RoadmapPhase {
    name: string;
    timeline: string;
    actions: {
        title: string;
        description: string;
        tool: string;
        tool_url: string;
        estimated_roi: string;
        difficulty: 'Easy' | 'Medium' | 'Hard';
        monthly_cost: string;
        time_to_implement: string;
        hours_saved_weekly: number;
    }[];
}

interface RoadmapData {
    executive_summary: string;
    estimated_weekly_hours_saved: number;
    estimated_monthly_roi: number;
    phases: RoadmapPhase[];
    total_monthly_tool_cost: string;
    key_risks: string[];
    next_steps: string[];
}

// ---------------------------------------------------------------------------
// Phase Config
// ---------------------------------------------------------------------------

const PHASES = [
    { id: 1, name: 'Discovery', icon: MessageSquare, color: 'cyan', description: 'Understanding your business' },
    { id: 2, name: 'Pain Points', icon: Target, color: 'rose', description: 'Identifying challenges' },
    { id: 3, name: 'Tech Stack', icon: Cpu, color: 'violet', description: 'Mapping your tools' },
    { id: 4, name: 'Goals & Budget', icon: DollarSign, color: 'amber', description: 'Defining objectives' },
    { id: 5, name: 'Roadmap', icon: Map, color: 'emerald', description: 'Your AI integration plan' },
];

// ---------------------------------------------------------------------------
// Safe Pure-React Markdown Text Renderer (Zero Raw HTML Injection)
// ---------------------------------------------------------------------------

function renderInlineBold(text: string): React.ReactNode[] {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**') && part.length > 4) {
            return (
                <strong key={idx} className="font-bold text-inherit">
                    {part.slice(2, -2)}
                </strong>
            );
        }
        return <React.Fragment key={idx}>{part}</React.Fragment>;
    });
}

function renderFormattedMessage(content: string): React.ReactNode {
    if (!content) return null;
    const paragraphs = content.split(/\n{2,}/);
    return (
        <div className="space-y-2">
            {paragraphs.map((block, pIdx) => {
                const lines = block.split('\n').filter((line) => line.length > 0);
                if (lines.length === 0) return null;

                return (
                    <div key={pIdx} className="space-y-1">
                        {lines.map((line, lIdx) => {
                            const headingMatch = line.match(/^#{1,4}\s+(.*)$/);
                            if (headingMatch) {
                                return (
                                    <p key={lIdx} className="font-bold text-[#1A1A1A] pt-1">
                                        {renderInlineBold(headingMatch[1])}
                                    </p>
                                );
                            }

                            const numberedMatch = line.match(/^(\d+\.)\s+(.*)$/);
                            if (numberedMatch) {
                                return (
                                    <div key={lIdx} className="flex items-baseline gap-2">
                                        <span className="font-mono text-xs font-bold flex-shrink-0">
                                            {numberedMatch[1]}
                                        </span>
                                        <span>{renderInlineBold(numberedMatch[2])}</span>
                                    </div>
                                );
                            }

                            const bulletMatch = line.match(/^[-*]\s+(.*)$/);
                            if (bulletMatch) {
                                return (
                                    <div key={lIdx} className="flex items-baseline gap-2">
                                        <span className="flex-shrink-0" aria-hidden="true">
                                            •
                                        </span>
                                        <span>{renderInlineBold(bulletMatch[1])}</span>
                                    </div>
                                );
                            }

                            return <p key={lIdx}>{renderInlineBold(line)}</p>;
                        })}
                    </div>
                );
            })}
        </div>
    );
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function AdvisorChat() {
    const [sessionId] = useState(() => crypto.randomUUID());
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [currentPhase, setCurrentPhase] = useState(1);
    const [businessProfile, setBusinessProfile] = useState<BusinessProfile>({});
    const [roadmapData, setRoadmapData] = useState<RoadmapData | null>(null);
    const [showRoadmap, setShowRoadmap] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    const sendingRef = useRef(false);
    const abortControllerRef = useRef<AbortController | null>(null);

    // Abort in-flight stream cleanly on component unmount
    useEffect(() => {
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initial greeting
    useEffect(() => {
        const greeting: Message = {
            role: 'assistant',
            content: `Welcome! I'm your AI Integration Advisor: here to help you figure out where AI actually saves time and money in your business.\n\nWe'll walk through 5 quick phases together:\n\n1. **Discovery**: I'll learn about your business\n2. **Pain Points**: We'll pinpoint where your team loses hours and margin\n3. **Tech Stack**: I'll map your current tools\n4. **Goals & Budget**: We'll define concrete 90-day targets\n5. **Roadmap**: I'll build your custom AI integration plan\n\nLet's start! **What's your business called, and what do you do?**`,
        };
        setMessages([greeting]);
    }, []);

    // Extract business info from conversation
    const extractBusinessInfo = useCallback((userMessage: string, assistantResponse: string) => {
        const combined = `${userMessage} ${assistantResponse}`.toLowerCase();
        const updated = { ...businessProfile };

        // Try to extract business name from first few messages
        if (!updated.name && messages.length < 6) {
            const nameMatch = userMessage.match(/(?:called|named|it's|we're|I run|my business is)\s+([A-Z][a-zA-Z\s&']+)/i);
            if (nameMatch) updated.name = nameMatch[1].trim();
        }

        // Industry detection
        if (!updated.industry) {
            const industries = ['restaurant', 'retail', 'healthcare', 'real estate', 'construction', 'marketing', 'legal', 'finance', 'education', 'technology', 'manufacturing', 'consulting', 'e-commerce', 'hospitality', 'fitness', 'salon', 'dental', 'medical', 'insurance', 'accounting'];
            for (const ind of industries) {
                if (combined.includes(ind)) {
                    updated.industry = ind.charAt(0).toUpperCase() + ind.slice(1);
                    break;
                }
            }
        }

        setBusinessProfile(updated);
    }, [businessProfile, messages.length]);

    // Send message with progressive SSE stream support + JSON fallback
    const handleSend = async () => {
        if (!input.trim() || isLoading || sendingRef.current) return;

        sendingRef.current = true;
        const userMessage = input.trim();
        setInput('');
        setIsLoading(true);

        const priorHistory = messages.map(({ role, content }) => ({ role, content }));
        const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);

        abortControllerRef.current?.abort();
        const controller = new AbortController();
        abortControllerRef.current = controller;

        try {
            const response = await fetch('/api/ai-advisor/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                signal: controller.signal,
                body: JSON.stringify({
                    sessionId,
                    message: userMessage,
                    currentPhase,
                    conversationHistory: priorHistory,
                    businessProfile,
                    stream: true,
                }),
            });

            if (!response.ok) {
                let errCopy = 'I encountered an issue processing that request. Please try sending your message again.';
                try {
                    const errJson = await response.json();
                    if (typeof errJson?.error === 'string' && errJson.error.trim()) {
                        errCopy = errJson.error;
                    }
                } catch {
                    // Use default honest error message
                }
                setMessages([...newMessages, { role: 'assistant', content: errCopy }]);
                return;
            }

            const contentType = response.headers.get('content-type') || '';

            if (contentType.includes('text/event-stream') && response.body) {
                const reader = response.body.getReader();
                const decoder = new TextDecoder('utf-8');
                let sseBuffer = '';
                let streamedProse = '';
                let streamedWidgets: ParsedWidgetNode[] = [];
                let receivedTerminalEvent = false;

                setMessages([
                    ...newMessages,
                    { role: 'assistant', content: '', widgets: [], isStreaming: true },
                ]);

                const applyStreamUpdate = (prose: string, widgets: ParsedWidgetNode[], streaming: boolean) => {
                    setMessages([
                        ...newMessages,
                        {
                            role: 'assistant',
                            content: prose,
                            widgets,
                            isStreaming: streaming,
                        },
                    ]);
                };

                const processSseFrame = (frame: string) => {
                    const dataLines = frame
                        .split(/\r?\n/)
                        .filter((l) => l.startsWith('data:'))
                        .map((l) => l.slice(5).trim());
                    if (dataLines.length === 0) return;

                    try {
                        const evt = JSON.parse(dataLines.join('\n'));
                        if (evt.type === 'delta') {
                            if (typeof evt.proseText === 'string') {
                                streamedProse = evt.proseText;
                            } else if (typeof evt.text === 'string') {
                                streamedProse += evt.text;
                            }
                            applyStreamUpdate(streamedProse, streamedWidgets, true);
                        } else if (evt.type === 'ui' && Array.isArray(evt.widgets)) {
                            streamedWidgets = evt.widgets;
                            applyStreamUpdate(streamedProse, streamedWidgets, true);
                        } else if (evt.type === 'done') {
                            receivedTerminalEvent = true;
                            const finalProse =
                                typeof evt.response === 'string' ? evt.response : streamedProse;
                            const finalWidgets = Array.isArray(evt.widgets)
                                ? evt.widgets
                                : streamedWidgets;
                            applyStreamUpdate(finalProse, finalWidgets, false);
                            extractBusinessInfo(userMessage, finalProse);

                            if (evt.phaseComplete && typeof evt.nextPhase === 'number') {
                                setCurrentPhase(evt.nextPhase);
                            }
                            if (evt.roadmapData) {
                                setRoadmapData(evt.roadmapData);
                                setShowRoadmap(true);
                            } else if (evt.roadmapComplete && roadmapData) {
                                setShowRoadmap(true);
                            }
                        } else if (evt.type === 'error') {
                            receivedTerminalEvent = true;
                            const errMsg =
                                typeof evt.error === 'string' && evt.error.trim()
                                    ? evt.error
                                    : 'Upstream advisor stream interrupted. Please retry.';
                            applyStreamUpdate(
                                streamedProse ? `${streamedProse}\n\n[${errMsg}]` : errMsg,
                                streamedWidgets,
                                false
                            );
                        }
                    } catch {
                        // Ignore malformed SSE comment/keepalive frame
                    }
                };

                while (true) {
                    const { value, done } = await reader.read();
                    if (done) {
                        sseBuffer += decoder.decode();
                        if (sseBuffer.trim()) {
                            for (const trailingFrame of sseBuffer.split(/\r?\n\r?\n/)) {
                                if (trailingFrame.trim()) processSseFrame(trailingFrame);
                            }
                        }
                        break;
                    }

                    sseBuffer += decoder.decode(value, { stream: true });
                    const frames = sseBuffer.split(/\r?\n\r?\n/);
                    sseBuffer = frames.pop() || '';

                    for (const frame of frames) {
                        processSseFrame(frame);
                    }
                }

                if (!receivedTerminalEvent) {
                    const eofMsg = 'Connection interrupted before the readout completed. Please retry.';
                    applyStreamUpdate(
                        streamedProse ? `${streamedProse}\n\n[${eofMsg}]` : eofMsg,
                        streamedWidgets,
                        false
                    );
                }
            } else {
                const data = await response.json();

                if (data.error) {
                    setMessages([
                        ...newMessages,
                        {
                            role: 'assistant',
                            content: 'I apologize, but I encountered an issue. Could you try sending that again?',
                        },
                    ]);
                } else {
                    setMessages([
                        ...newMessages,
                        {
                            role: 'assistant',
                            content: data.response,
                            widgets: Array.isArray(data.widgets) ? data.widgets : undefined,
                        },
                    ]);
                    extractBusinessInfo(userMessage, data.response);

                    if (data.phaseComplete) {
                        setCurrentPhase(data.nextPhase);
                    }

                    if (data.roadmapData) {
                        setRoadmapData(data.roadmapData);
                        setShowRoadmap(true);
                    }

                    if (data.roadmapComplete) {
                        setShowRoadmap(true);
                    }
                }
            }
        } catch (err) {
            if (err instanceof DOMException && err.name === 'AbortError') {
                return;
            }
            setMessages([
                ...newMessages,
                { role: 'assistant', content: 'Connection issue. Please try again in a moment.' },
            ]);
        } finally {
            sendingRef.current = false;
            setIsLoading(false);
            inputRef.current?.focus();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    // Render the roadmap view with bidirectional return to chat
    if (showRoadmap && roadmapData) {
        return (
            <AdvisorRoadmap
                roadmap={roadmapData}
                businessProfile={businessProfile}
                sessionId={sessionId}
                onBackToChat={() => setShowRoadmap(false)}
            />
        );
    }

    const lastMessage = messages[messages.length - 1];
    const showStandaloneSpinner =
        isLoading &&
        (!lastMessage ||
            lastMessage.role !== 'assistant' ||
            (!lastMessage.content && (!lastMessage.widgets || lastMessage.widgets.length === 0)));

    return (
        <div className="flex flex-col h-[calc(100vh-12rem)] max-w-4xl mx-auto">
            {/* Phase Progress Bar */}
            <div className="mb-6 px-2">
                {roadmapData ? (
                    <div className="mb-3 flex items-center justify-between gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                            Roadmap Ready
                        </span>
                        <button
                            type="button"
                            onClick={() => setShowRoadmap(true)}
                            className="min-h-[36px] inline-flex items-center gap-1.5 rounded-lg bg-[#111827] px-3 py-1.5 font-mono text-xs font-bold text-white hover:bg-zinc-800 transition-colors"
                        >
                            <Map className="w-3.5 h-3.5" />
                            Open PDF Boardroom View
                        </button>
                    </div>
                ) : null}
                <div className="flex items-center justify-between gap-1 sm:gap-2">
                    {PHASES.map((phase, i) => {
                        const Icon = phase.icon;
                        const isActive = phase.id === currentPhase;
                        const isComplete = phase.id < currentPhase;

                        return (
                            <React.Fragment key={phase.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-colors ${
                                        isActive
                                            ? 'bg-cyan-500/15 border border-cyan-500/40 text-cyan-900 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                                            : isComplete
                                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-800'
                                              : 'bg-zinc-100 border border-zinc-200 text-zinc-400'
                                    }`}
                                >
                                    {isComplete ? (
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                                    ) : (
                                        <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-cyan-600' : 'text-zinc-400'}`} />
                                    )}
                                    <span className="hidden sm:inline uppercase tracking-wider font-mono text-[10px]">{phase.name}</span>
                                </motion.div>
                                {i < PHASES.length - 1 && (
                                    <ChevronRight className={`w-3 h-3 flex-shrink-0 ${phase.id < currentPhase ? 'text-emerald-400' : 'text-zinc-300'}`} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="mt-2 h-1 bg-zinc-100 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((currentPhase - 1) / (PHASES.length - 1)) * 100}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                    />
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 px-2 pb-4 scrollbar-thin">
                <AnimatePresence mode="popLayout">
                    {messages.map((msg, i) => {
                        if (
                            msg.role === 'assistant' &&
                            msg.isStreaming &&
                            !msg.content &&
                            (!msg.widgets || msg.widgets.length === 0)
                        ) {
                            return null;
                        }

                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                            >
                                {/* Avatar */}
                                <div
                                    className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                                        msg.role === 'assistant'
                                            ? 'bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30'
                                            : 'bg-zinc-900'
                                    }`}
                                >
                                    {msg.role === 'assistant' ? (
                                        <Brain className="w-4 h-4 text-cyan-700" />
                                    ) : (
                                        <User className="w-4 h-4 text-white" />
                                    )}
                                </div>

                                {/* Message Bubble */}
                                <div
                                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                        msg.role === 'assistant'
                                            ? 'bg-white border border-zinc-200 text-zinc-800 shadow-sm'
                                            : 'bg-zinc-900 text-white'
                                    }`}
                                >
                                    {msg.content ? (
                                        <div className="max-w-none">{renderFormattedMessage(msg.content)}</div>
                                    ) : null}

                                    {msg.role === 'assistant' && msg.widgets && msg.widgets.length > 0 ? (
                                        <AdvisorStreamWidgets
                                            widgets={msg.widgets}
                                            onOpenRoadmap={
                                                roadmapData ? () => setShowRoadmap(true) : undefined
                                            }
                                        />
                                    ) : null}

                                    {msg.isStreaming ? (
                                        <div className="mt-2 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-cyan-700">
                                            <Loader2 className="w-3 h-3 animate-spin" />
                                            <span>Streaming live readout</span>
                                        </div>
                                    ) : null}
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                {/* Typing indicator */}
                {showStandaloneSpinner && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-3"
                    >
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                            <Sparkles className="w-4 h-4 text-cyan-700 animate-pulse" />
                        </div>
                        <div className="bg-white border border-zinc-200 rounded-2xl px-4 py-3 shadow-sm">
                            <div className="flex items-center gap-2 text-sm text-zinc-500">
                                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                                <span className="font-mono text-xs uppercase tracking-wider">Analyzing...</span>
                            </div>
                        </div>
                    </motion.div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-zinc-200 pt-4 px-2">
                <div className="relative flex items-end bg-white border border-zinc-300 rounded-2xl shadow-sm focus-within:border-cyan-400 focus-within:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-colors">
                    <textarea
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={
                            currentPhase === 1 ? 'Tell me about your business...' :
                            currentPhase === 2 ? 'What are your biggest challenges?' :
                            currentPhase === 3 ? 'What tools do you currently use?' :
                            currentPhase === 4 ? 'What are your goals and budget?' :
                            'Generating your roadmap...'
                        }
                        rows={1}
                        disabled={isLoading}
                        className="flex-1 resize-none px-4 py-3 text-sm bg-transparent outline-none text-zinc-800 placeholder:text-zinc-400 max-h-32"
                        style={{ minHeight: '44px' }}
                        onInput={(e) => {
                            const target = e.target as HTMLTextAreaElement;
                            target.style.height = 'auto';
                            target.style.height = Math.min(target.scrollHeight, 128) + 'px';
                        }}
                    />
                    <button
                        type="button"
                        aria-label="Send message"
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="m-1.5 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    >
                        <Send className="w-4 h-4" />
                    </button>
                </div>
                <p className="text-[10px] text-zinc-400 text-center mt-2 font-mono uppercase tracking-wider">
                    Phase {currentPhase} of 5 · {PHASES[currentPhase - 1]?.name} · Powered by Exogram + Gemini
                </p>
            </div>
        </div>
    );
}
