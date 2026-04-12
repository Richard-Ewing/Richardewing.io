import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
    console.error("No GEMINI_API_KEY found in .env.local");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-3.1-pro-preview" });

// The top tier engineering/dev/AI tools to matrix
const SEED_TOOLS = [
    "Vercel", "Netlify", "Cloudflare Pages", "AWS Amplify",
    "OpenAI", "Anthropic Claude", "Google Gemini", "Mistral",
    "Datadog", "New Relic", "Dynatrace", "Grafana",
    "Docker", "Kubernetes", "Podman", "Nomad",
    "TailwindCSS", "Bootstrap", "Chakra UI", "Material UI",
    "PostgreSQL", "MongoDB", "MySQL", "Supabase", "Firebase",
    "Linear", "Jira", "Asana", "Trello",
    "Terraform", "Pulumi", "Ansible", "Chef",
    "React", "Vue", "Angular", "Svelte",
    "Next.js", "Remix", "Astro", "Nuxt",
    "Stripe", "Paddle", "Lemon Squeezy", "Braintree",
    "GitHub Actions", "GitLab CI", "CircleCI", "Jenkins",
    "Pinecone", "Milvus", "Weaviate", "Qdrant",
    "LangChain", "LlamaIndex", "Haystack", "Semantic Kernel",
    // --- 10 NEW ENTERPRISE SEARCH TARGET CATEGORIES ---
    "Mixpanel", "Amplitude", "PostHog", "Heap", // Product Analytics
    "Auth0", "Clerk", "Okta", "Keycloak", // Authentication & Identity
    "Kafka", "RabbitMQ", "Apache Pulsar", "Amazon Kinesis", // Event Streaming
    "Snowflake", "Databricks", "BigQuery", "Redshift", // Data Warehousing
    "AWS Lambda", "Cloudflare Workers", "Google Cloud Functions", "Azure Functions", // Serverless Edge Compute
    "Sanity", "Contentful", "Strapi", "Storyblok", // Headless CMS / Content API
    "Apache Airflow", "Prefect", "Dagster", "Temporal", // Data / Workflow Orchestration
    "Kong", "Apigee", "Envoy", "Istio", // API Gateways & Service Mesh
    "Cypress", "Playwright", "Selenium", "Puppeteer", // Automated Testing Networks
    "Chroma", "pgvector", "Faiss", "Redis OM" // Local/Open Source Vector Databases
];

// We only process a small chunk in this script to avoid massive API limits.
// The user can expand this later.
const BATCH_SIZE = 10000;

function shuffleArray(array: any[]) {
    // Deterministically or randomly shuffle
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// Generate the pairs
const allPairs: { toolA: string, toolB: string, slug: string }[] = [];
for (let i = 0; i < SEED_TOOLS.length; i++) {
    for (let j = i + 1; j < SEED_TOOLS.length; j++) {
        const t1 = SEED_TOOLS[i];
        const t2 = SEED_TOOLS[j];
        // Ensure they aren't the same category if possible, but let's just do all pairs
        allPairs.push({
            toolA: t1,
            toolB: t2,
            slug: `${t1.toLowerCase().replace(/\s|\./g, '-')}-vs-${t2.toLowerCase().replace(/\s|\./g, '-')}`
        });
    }
}

// Just take a randomized slice to demonstrate the pipeline
const targetPairs = shuffleArray(allPairs).slice(0, BATCH_SIZE);

async function generateMatrix() {
    const results = [];
    console.log(`Starting Programmatic SEO Generation for ${targetPairs.length} permutations...`);

    for (let i = 0; i < targetPairs.length; i++) {
        const pair = targetPairs[i];
        console.log(`Processing [${i+1}/${targetPairs.length}]: ${pair.slug}`);

        try {
            const prompt = `
            You are a highly technical CTO consultant and systems auditor (like Richard Ewing).
            Compare two tools: ${pair.toolA} and ${pair.toolB}.
            You must output raw JSON with the following schema exactly (no markdown formatting, no backticks, just the json):
            {
                "slug": "${pair.slug}",
                "toolA": "${pair.toolA}",
                "toolB": "${pair.toolB}",
                "title": "${pair.toolA} vs ${pair.toolB} for Enterprise Engineering",
                "metaDescription": "A technical architectural comparison of ${pair.toolA} and ${pair.toolB}, calculating technical debt, ROI timelines, and engineering efficiency.",
                "theirFocus": "A 1 sentence brutal summary of what ${pair.toolB} actually focuses on.",
                "ourAdvantage": "A 1 sentence summary of why a sovereign architecture or Exogram's diagnostic approach is better than blindly choosing ${pair.toolB}.",
                "technicalDistinction": "A 2 paragraph highly technical teardown of the fundamental architectural differences between ${pair.toolA} and ${pair.toolB}."
            }
            `;

            const result = await model.generateContent(prompt);
            const responseText = result.response.text();
            
            // Clean up the response in case the LLM returned markdown code blocks
            const cleanJsonStr = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
            
            const parsedData = JSON.parse(cleanJsonStr);
            results.push(parsedData);
            
            // Artificial delay to prevent rate limits
            await new Promise(res => setTimeout(res, 2000));
        } catch (error: any) {
            console.error(`Failed to generate pair ${pair.slug}:`, error.message);
        }
    }

    const outputPath = path.resolve(process.cwd(), 'app/lib/pseo-matrix.json');
    
    // Merge with existing if any
    let existingData = [];
    if (fs.existsSync(outputPath)) {
        existingData = JSON.parse(fs.readFileSync(outputPath, 'utf-8'));
    }
    
    const finalData = [...existingData, ...results];
    
    fs.writeFileSync(outputPath, JSON.stringify(finalData, null, 4));
    console.log(`\n✅ Generated ${results.length} pages. Data saved to ${outputPath}`);
}

generateMatrix();
