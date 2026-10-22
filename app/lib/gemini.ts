import { GoogleGenAI } from '@google/genai';

export function getGeminiClient() {
    const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || '';
    if (!apiKey) {
        console.warn('Missing GOOGLE_API_KEY / GEMINI_API_KEY environment variable. LLM features will fail.');
    }
    return new GoogleGenAI({ apiKey: apiKey || 'dummy_key' });
}

// Lazy proxy so module-level imports evaluate the runtime Cloudflare Worker secret on every request
export const client = new Proxy({} as GoogleGenAI, {
    get(_target, prop) {
        const instance = getGeminiClient();
        const val = (instance as any)[prop];
        return typeof val === 'function' ? val.bind(instance) : val;
    }
});

export const GEMINI_MODEL = 'gemini-3.8-flash';
