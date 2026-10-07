import { GoogleGenAI } from '@google/genai';

// Support both env var names for compatibility across environments
const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || '';

if (!apiKey) {
    console.warn('Missing GOOGLE_API_KEY / GEMINI_API_KEY environment variable. LLM features will fail.');
}

// Export the client for use in API routes
export const client = new GoogleGenAI({ apiKey: apiKey || 'dummy_key' });
export const GEMINI_MODEL = 'gemini-3.8-flash';
