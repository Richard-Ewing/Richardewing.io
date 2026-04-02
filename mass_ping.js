const { execSync } = require('child_process');

const urls = [
    "https://www.richardewing.io/compare",
    "https://www.richardewing.io/tools/shadow-ai",
    "https://www.richardewing.io/tools/shadow-ai/vs/wiz",
    "https://www.richardewing.io/tools/shadow-ai/vs/cyberhaven",
    "https://www.richardewing.io/tools/prompt-injection-sandbox",
    "https://www.richardewing.io/tools/prompt-injection-sandbox/vs/promptfoo",
    "https://www.richardewing.io/tools/prompt-injection-sandbox/vs/lakera-guard",
    "https://www.richardewing.io/tools/rag-chunking-visualizer",
    "https://www.richardewing.io/tools/rag-chunking-visualizer/vs/ragxplorer",
    "https://www.richardewing.io/tools/agent-router",
    "https://www.richardewing.io/tools/agent-router/vs/datadog-llm",
    "https://www.richardewing.io/tools/due-diligence",
    "https://www.richardewing.io/tools/due-diligence/vs/gartner-magic-quadrant",
    "https://www.richardewing.io/tools/due-diligence/vs/g2-crowd",
    "https://www.richardewing.io/tools/aueb",
    "https://www.richardewing.io/tools/aueb/vs/aws-cost-explorer",
    "https://www.richardewing.io/tools/audit-interview",
    "https://www.richardewing.io/tools/audit-interview/vs/big-4-consulting",
    "https://www.richardewing.io/tools/ev-se",
    "https://www.richardewing.io/tools/ev-se/vs/mckinsey-ai-index",
    "https://www.richardewing.io/tools/ai-roi-timeline",
    "https://www.richardewing.io/tools/ai-roi-timeline/vs/forrester-tei",
    "https://www.richardewing.io/tools/aper",
    "https://www.richardewing.io/tools/aper/vs/langsmith-evals",
    "https://www.richardewing.io/tools/slm-vs-api",
    "https://www.richardewing.io/tools/slm-vs-api/vs/openai-enterprise",
    "https://www.richardewing.io/tools/cloud-repatriation",
    "https://www.richardewing.io/tools/cloud-repatriation/vs/azure-tco",
    "https://www.richardewing.io/tools/fte-displacement",
    "https://www.richardewing.io/tools/fte-displacement/vs/workday-planning"
];

console.log(`Starting mass payload for ${urls.length} URLs...`);

const chunkSize = 10;
for (let i = 0; i < urls.length; i += chunkSize) {
    const chunk = urls.slice(i, i + chunkSize);
    console.log(`Executing chunk ${i / chunkSize + 1}...`);
    try {
        const output = execSync(`node ping-google.js ${chunk.join(' ')}`, { encoding: 'utf-8' });
        console.log(output);
    } catch (e) {
        console.error(`Error executing chunk:`, e.message);
    }
}
console.log('Mass ping complete.');
