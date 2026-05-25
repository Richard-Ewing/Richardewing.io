'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Brain, User, Sparkles, ChevronRight, Loader2, CheckCircle, MessageSquare, Target, Cpu, DollarSign, Map } from 'lucide-react';
import AdvisorRoadmap from './AdvisorRoadmap';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Message {
    role: 'user' | 'assistant';
    content: string;
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

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Initial greeting
    useEffect(() => {
        const greeting: Message = {
            role: 'assistant',
            content: `Welcome! I'm your AI Integration Advisor — here to help you figure out exactly how AI can benefit your business.\n\nWe'll walk through 5 quick phases together:\n\n1. **Discovery** — I'll learn about your business\n2. **Pain Points** — We'll identify where you're losing time and money\n3. **Tech Stack** — I'll map your current tools\n4. **Goals & Budget** — We'll define what success looks like\n5. **Roadmap** — I'll generate your personalized AI integration plan\n\nLet's start! **What's your business called, and what do you do?**`,
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

    // Send message
    const handleSend = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');
        setIsLoading(true);

        const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
        setMessages(newMessages);

        try {
            const response = await fetch('/api/ai-advisor/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    sessionId,
                    message: userMessage,
                    currentPhase,
                    conversationHistory: newMessages,
                    businessProfile,
                }),
            });

            const data = await response.json();

            if (data.error) {
                setMessages([...newMessages, { role: 'assistant', content: 'I apologize, but I encountered an issue. Could you try sending that again?' }]);
            } else {
                setMessages([...newMessages, { role: 'assistant', content: data.response }]);
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
        } catch {
            setMessages([...newMessages, { role: 'assistant', content: 'Connection issue — please try again in a moment.' }]);
        } finally {
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

    // Render the roadmap view
    if (showRoadmap && roadmapData) {
        return <AdvisorRoadmap roadmap={roadmapData} businessProfile={businessProfile} sessionId={sessionId} />;
    }

    return (
        <div className="flex flex-col h-[calc(100vh-12rem)] max-w-4xl mx-auto">
            {/* Phase Progress Bar */}
            <div className="mb-6 px-2">
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
                                    className={`flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all ${
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
                    {messages.map((msg, i) => (
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
                                className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                    msg.role === 'assistant'
                                        ? 'bg-white border border-zinc-200 text-zinc-800 shadow-sm'
                                        : 'bg-zinc-900 text-white'
                                }`}
                            >
                                <div
                                    className="prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 prose-li:my-0.5 prose-strong:text-inherit"
                                    dangerouslySetInnerHTML={{
                                        __html: msg.content
                                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                                            .replace(/\n\n/g, '</p><p>')
                                            .replace(/\n(\d+\.)/g, '<br/>$1')
                                            .replace(/\n- /g, '<br/>• ')
                                            .replace(/\n/g, '<br/>')
                                    }}
                                />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Typing indicator */}
                {isLoading && (
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
                <div className="relative flex items-end bg-white border border-zinc-300 rounded-2xl shadow-sm focus-within:border-cyan-400 focus-within:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all">
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
                        onClick={handleSend}
                        disabled={!input.trim() || isLoading}
                        className="m-1.5 p-2 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
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
