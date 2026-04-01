// Centralized curriculum data for tracks 5-10 (dynamic route modules)
// Tracks 1-4 have hardcoded pages; tracks 5-10 use [..slug] catch-all

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
}

export function m(id: string, title: string, desc: string, track: string, takeaways: string[], lessons: Lesson[], next?: string, embeddedTool?: string, status: 'live' | 'waitlist' = 'live'): CurriculumModule {
    return { moduleId: id, title, description: desc, trackName: track, takeaways, lessons, nextHref: next, embeddedTool, status };
}

export function l(title: string, content: string | string[], details: LessonDetail[], exercise: string, checklist?: string[], quiz?: Quiz): Lesson {
    return { title, content, details, exercise, checklist, quiz };
}

export function d(metric: string, description: string, benchmark: string): LessonDetail {
    return { metric, description, benchmark };
}

export const modules: Record<string, CurriculumModule> = {};

import { guidesComparisonsModules } from './curriculum-guides-comparisons';
import { tracks16to17ExpansionModules } from './curriculum-tracks-16-17-expansion';
import { tracks18to22Modules } from './curriculum-tracks-18-22';
import { tracks5and6Modules } from './curriculum-tracks-5-6';
import { tracks7Modules } from './curriculum-tracks-7';
import { tracks8Modules } from './curriculum-tracks-8';
import { tracks9Modules } from './curriculum-tracks-9';
import { tracks10Modules } from './curriculum-tracks-10';

// ═══════════════════ TRACK 1-4 ═══════════════════
populateTracks1To4(modules);

// ═══════════════════ TRACK 16 & 17 (GUIDES / COMPARISONS) ═══════════════════
Object.assign(modules, guidesComparisonsModules, tracks16to17ExpansionModules);

// ═══════════════════ TRACKS 5-6 ═══════════════════
Object.assign(modules, tracks5and6Modules);

// ═══════════════════ TRACKS 7-10 ═══════════════════
Object.assign(modules, tracks7Modules, tracks8Modules, tracks9Modules, tracks10Modules);

// ═══════════════════ TRACKS 18-22 ═══════════════════
Object.assign(modules, tracks18to22Modules);

// ═══════════════════ NEW 2026 AI TREND MODULES ═══════════════════
import { tracks23to26Modules } from './curriculum-tracks-23-26';
import { tracks27to29Modules } from './curriculum-tracks-27-29';
Object.assign(modules, tracks23to26Modules, tracks27to29Modules);



// ═══════════════════ TRACKS 11-15 ═══════════════════
import { tracks11Modules } from './curriculum-tracks-11';
import { tracks12Modules } from './curriculum-tracks-12';
import { tracks13Modules } from './curriculum-tracks-13';
import { tracks14Modules } from './curriculum-tracks-14';
import { tracks15Modules } from './curriculum-tracks-15';

Object.assign(
    modules,
    tracks11Modules,
    tracks12Modules,
    tracks13Modules,
    tracks14Modules,
    tracks15Modules
);

import { tracks } from './curriculum-tracks-ui';
export function getModule(slug: string): CurriculumModule | undefined {
    const mod = modules[slug];
    
    // Dynamically inject tools into specific tracks for interactive learning
    if (mod) {
        if (mod.moduleId === '14-12') mod.embeddedTool = 'cloud-repatriation';
        if (mod.moduleId === '9-14') mod.embeddedTool = 'due-diligence';
        if (mod.moduleId === '10-6' || mod.moduleId === '5-15') mod.embeddedTool = 'pdi';
        if (mod.moduleId === '11-1' || mod.moduleId === '11-16') mod.embeddedTool = 'aueb';
        if (mod.moduleId === '6-1' || mod.moduleId === '10-4') mod.embeddedTool = 'aper';
        if (mod.moduleId === '5-10') mod.embeddedTool = 'ev-se';
        if (mod.moduleId === '27-10') mod.embeddedTool = 'shadow-ai';
        if (mod.moduleId === '28-2') mod.embeddedTool = 'prompt-injection-sandbox';
        if (mod.moduleId === '27-7') mod.embeddedTool = 'rag-chunking-visualizer';
        if (mod.moduleId === '29-10') mod.embeddedTool = 'agent-router';
    }
    
    return mod;
}

export function getAllModuleSlugs(): string[] {
    return Object.keys(modules);
}
