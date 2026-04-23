// Centralized curriculum data for all tracks
// After 2026 restructuring: 11 core authority tracks only

import { populateTracks1To4 } from './curriculum-tracks-1-4';

export interface LessonDetail { metric: string; description: string; benchmark: string; }

export interface Quiz {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

export interface Lesson { 
    title: string; 
    content: string | string[]; 
    details: LessonDetail[]; 
    exercise: string;
    checklist?: string[];
    quiz?: Quiz;
}

export interface CurriculumModule {
    moduleId: string; title: string; description: string; trackName: string;
    takeaways: string[]; lessons: Lesson[]; nextHref?: string;
    productId?: string; bundleId?: string;
    embeddedTool?: string;
    status?: 'live' | 'waitlist';
    relatedArticles?: string[];
}

export function m(id: string, title: string, desc: string, track: string, takeaways: string[], lessons: Lesson[], next?: string, embeddedTool?: string, status: 'live' | 'waitlist' = 'live', relatedArticles?: string[]): CurriculumModule {
    return { moduleId: id, title, description: desc, trackName: track, takeaways, lessons, nextHref: next, embeddedTool, status, relatedArticles };
}

export function l(title: string, content: string | string[], details: LessonDetail[], exercise: string, checklist?: string[], quiz?: Quiz): Lesson {
    return { title, content, details, exercise, checklist, quiz };
}

export function d(metric: string, description: string, benchmark: string): LessonDetail {
    return { metric, description, benchmark };
}

export const modules: Record<string, CurriculumModule> = {};

// ═══════════════════ CORE AUTHORITY TRACKS ═══════════════════

// Track 1-4: Engineering Economics, AI Product Economics, R&D Capital, Capstone
populateTracks1To4(modules);

// Track 5 (old Track 6): Product Management Economics
import { tracks5and6Modules } from './curriculum-tracks-5-6';
Object.assign(modules, tracks5and6Modules);

// Track 6 (old Track 11): AI Operations Economics & Cost Governance
import { tracks11Modules } from './curriculum-tracks-11';
Object.assign(modules, tracks11Modules);

// Track 7 (old Track 14): Cloud FinOps & AI Cost Management
import { tracks14Modules } from './curriculum-tracks-14';
Object.assign(modules, tracks14Modules);

// ═══════════════════ NEW 2026 TRACKS ═══════════════════
// Track 8: AI Pricing Strategy & Monetization Economics
// Track 9: Technical Debt as Financial Liability
// Track 10: AI Due Diligence for Investors & Acquirers
// Track 11: Economics of Build vs. Buy for AI
// Track 12: Career Capital Economics
// Track 13: Engineering-to-Executive Economics
// Track 14: The Economics of Leadership (Not Management)
import { populateNewTracks8to14 } from './curriculum-tracks-new-8-14';
populateNewTracks8to14(modules);

// ═══════════════════ EXPANSION: Fill Tracks 8-14 to Full 10-Module Depth ═══════════════════
import { populateExpansion8to14 } from './curriculum-tracks-expansion-8-14';
populateExpansion8to14(modules);

// ═══════════════════ NEW TRACKS 15-18 ═══════════════════
// Track 15: Remote & Distributed Team Economics
// Track 16: M&A Technical Integration Economics
// Track 17: Developer Experience (DX) Economics
// Track 18: Vendor & Contract Economics
import { populateTracks15to18 } from './curriculum-tracks-new-15-18';
populateTracks15to18(modules);

// ═══════════════════ NEW TRACKS 19-23 ═══════════════════
// Track 19: AI Agent Architecture & Economics
// Track 20: Agentic Process Automation Economics
// Track 21: AI Agent Governance & Trust Infrastructure
// Track 22: Strategic Leadership Economics
// Track 23: Executive Presence & Board Leadership
import { populateTracks19to23 } from './curriculum-tracks-new-19-23';
populateTracks19to23(modules);

// ═══════════════════ LEGACY TRACK CONTENT (kept on disk for future restoration) ═══════════════════
// The following files exist on disk but are NOT imported into the active registry:
// - curriculum-tracks-5-6.ts (Track 5 DevOps — killed; Track 6 PM — kept above)
// - curriculum-tracks-7.ts (Security Economics — killed)
// - curriculum-tracks-8.ts (Data Economics — killed)
// - curriculum-tracks-9.ts (Engineering Leadership — consolidated into Track 3)
// - curriculum-tracks-10.ts (Startup Economics — consolidated into Track 4)
// - curriculum-tracks-12.ts (Enterprise Architecture — killed)
// - curriculum-tracks-13.ts (AI Agent Economics — consolidated into Track 11)
// - curriculum-tracks-15.ts (Free Playbooks — killed from catalog)
// - curriculum-tracks-16-17-expansion.ts (Guides/Comparisons — killed)
// - curriculum-tracks-18.ts through curriculum-tracks-29.ts (all killed)
// - curriculum-guides-comparisons.ts (killed)


import { tracks } from './curriculum-tracks-ui';
import { SPOKE_MATRIX } from './spoke-data';

export function getModule(slug: string): CurriculumModule | undefined {
    let mod = modules[slug];

    // Robust fallback: If exact slug path fails due to prefix mismatches between UI and registry, find by unique moduleId
    if (!mod) {
        const idBase = slug.split('/').pop();
        if (idBase) {
            const fallbackMod = Object.values(modules).find(m => m.moduleId === idBase);
            if (fallbackMod) mod = fallbackMod;
        }
    }

    // Dynamically inject tools into specific tracks for interactive learning
    if (mod) {
        if (mod.moduleId === '14-12') mod.embeddedTool = 'cloud-repatriation';
        if (mod.moduleId === '11-4') mod.embeddedTool = 'vta';
        if (mod.moduleId === '11-1' || mod.moduleId === '11-16') mod.embeddedTool = 'aueb';
        if (mod.moduleId === '6-1') mod.embeddedTool = 'aper';
    }
    
    // Inject Programmatic SEO related articles dynamically based on topic mapping
    if (mod && (!mod.relatedArticles || mod.relatedArticles.length === 0)) {
        mod.relatedArticles = mod.relatedArticles || [];
        
        // Topic to Module mapping logic
        const targetModules: Record<string, string[]> = {
            'engineering-architecture': ['N9-1', '14-1', '11-4'], // Tech Debt, Cloud FinOps, Build vs Buy
            'ai-product-strategy': ['N8-1', 'N8-4', '1-1'], // Pricing Strategy, Product Economics
            'engineering-leadership': ['N14-1', 'N13-1', 'N12-1'], // Leadership, Exec Economics, Career Capital
            'c-suite-financials': ['N10-1', 'N10-3', '1-2'], // Due Diligence, Financials
            'product-management-economics': ['6-1', 'N8-2', 'N11-1'] // PM Economics, Build vs Buy
        };

        SPOKE_MATRIX.forEach(topic => {
            const relevantMods = targetModules[topic.topicSlug] || [];
            if (relevantMods.includes(mod!.moduleId)) {
                Object.keys(topic.personas).forEach(persona => {
                    const questions = (topic.personas as any)[persona];
                    if (questions) {
                        questions.forEach((q: any) => {
                            const articleUrl = `/answers/${topic.topicSlug}/${persona}/${q.questionSlug}`;
                            if (!mod!.relatedArticles!.includes(articleUrl)) {
                                mod!.relatedArticles!.push(articleUrl);
                            }
                        });
                    }
                });
            }
        });
        
        // Limit to top 5 most relevant to avoid overcrowding the UI
        mod.relatedArticles = mod.relatedArticles.slice(0, 5);
    }

    return mod;
}

export function getAllModuleSlugs(): string[] {
    return Object.keys(modules);
}
