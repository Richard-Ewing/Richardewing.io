import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.GEMINI_API_KEY) {
    console.warn('Missing GEMINI_API_KEY environment variable. LLM features will fail.');
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'dummy_key');

// Export the model for use in API routes
// Using 'gemini-1.5-flash' for speed and efficiency
export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
