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
    
    return mod;
}

export function getAllModuleSlugs(): string[] {
    return Object.keys(modules);
}
