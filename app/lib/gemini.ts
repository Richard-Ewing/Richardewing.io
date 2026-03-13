import { GoogleGenerativeAI } from '@google/generative-ai';

// Support both env var names for compatibility across environments
const apiKey = process.env.GOOGLE_API_KEY || process.env.GEMINI_API_KEY || '';

if (!apiKey) {
    console.warn('Missing GOOGLE_API_KEY / GEMINI_API_KEY environment variable. LLM features will fail.');
}

const genAI = new GoogleGenerativeAI(apiKey || 'dummy_key');

// Export the model for use in API routes
// Using 'gemini-2.5-flash' for speed and efficiency
export const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
