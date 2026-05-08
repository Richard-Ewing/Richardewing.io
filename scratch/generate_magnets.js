const fs = require('fs');
const path = require('path');
const https = require('https');
const ExcelJS = require('exceljs');

const API_KEY = 'sk-gamma-maj8pyzWG4O4qIKxK2oOWTYIIUwsH8YjJZXF6tnxY';
const BASE_URL = 'https://public-api.gamma.app/v1.0';

const publicDownloadsDir = path.join(__dirname, '..', 'public', 'downloads');
if (!fs.existsSync(publicDownloadsDir)) {
    fs.mkdirSync(publicDownloadsDir, { recursive: true });
}

// 1. Generate AI Unit Economics Audit (.xlsx)
async function generateAIUnitEconomics() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Richard Ewing';
    workbook.created = new Date();
    
    const sheet = workbook.addWorksheet('Unit Economics Matrix');
    
    // Headers
    sheet.columns = [
        { header: 'Metric', key: 'metric', width: 40 },
        { header: 'Value', key: 'value', width: 20 },
        { header: 'Notes', key: 'notes', width: 60 }
    ];
    
    // Styling
    sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF000000' } };
    
    sheet.addRows([
        { metric: 'Monthly Subscription Price ($)', value: 20, notes: 'Standard SaaS user tier' },
        { metric: 'Average Input Tokens / Prompt', value: 1000, notes: 'Include RAG context injection' },
        { metric: 'Average Output Tokens / Response', value: 500, notes: 'Standard generation length' },
        { metric: 'Cost per 1K Input Tokens ($)', value: 0.01, notes: 'Depends on model (e.g. GPT-4o, Claude 3.5 Sonnet)' },
        { metric: 'Cost per 1K Output Tokens ($)', value: 0.03, notes: 'Output is more expensive' },
        { metric: 'Vector DB Retrieval Cost / Query ($)', value: 0.005, notes: 'Pinecone / Qdrant read ops' },
        { metric: '---', value: '---', notes: '---' },
        { metric: 'Total True Cost Per Query ($)', value: { formula: '+(B2/1000*B4)+(B3/1000*B5)+B6' }, notes: 'Auto-calculated' },
        { metric: 'Break-Even Velocity (Queries/Month)', value: { formula: '+(B1/B8)' }, notes: 'Maximum safe actions per user before Technical Insolvency' }
    ]);
    
    const targetPath = path.join(publicDownloadsDir, 'ai-unit-economics-audit.xlsx');
    await workbook.xlsx.writeFile(targetPath);
    console.log('✅ Created ai-unit-economics-audit.xlsx');
}

// 2. Generate Agentic Drift Matrix (.xlsx)
async function generateAgenticDrift() {
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Richard Ewing';
    workbook.created = new Date();
    
    const sheet = workbook.addWorksheet('Drift Diagnostic');
    
    sheet.columns = [
        { header: 'Workflow Turn #', key: 'turn', width: 15 },
        { header: 'Context Size (Tokens)', key: 'context', width: 25 },
        { header: 'Constraint Retention (%)', key: 'retention', width: 25 },
        { header: 'Synthetic COGS ($)', key: 'cogs', width: 20 },
        { header: 'Action Required', key: 'action', width: 40 }
    ];
    
    sheet.getRow(1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
    sheet.getRow(1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F46E5' } };
    
    sheet.addRows([
        { turn: 1, context: 2000, retention: 100, cogs: 0.02, action: 'Safe execution' },
        { turn: 3, context: 6000, retention: 98, cogs: 0.06, action: 'Monitor hallucination rate' },
        { turn: 5, context: 12000, retention: 85, cogs: 0.12, action: 'Implement State Management external DB' },
        { turn: 7, context: 25000, retention: 60, cogs: 0.25, action: 'WARNING: High probability of constraint forgetting' },
        { turn: 10, context: 50000, retention: 35, cogs: 0.50, action: 'CRITICAL FAILURE: Agentic Drift confirmed.' }
    ]);
    
    const targetPath = path.join(publicDownloadsDir, 'agentic-drift-matrix.xlsx');
    await workbook.xlsx.writeFile(targetPath);
    console.log('✅ Created agentic-drift-matrix.xlsx');
}

// 3. Generate Deterministic Control Layer Board (Gamma API to PDF)
function request(method, endpoint, body = null) {
    return new Promise((resolve, reject) => {
        const url = new URL(endpoint, BASE_URL);
        const options = {
            method: method,
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            }
        };

        const req = https.request(url, options, (res) => {
            let data = '';
            res.on('data', chunk => { data += chunk; });
            res.on('end', () => {
                try {
                    if (res.statusCode >= 200 && res.statusCode < 300) {
                        resolve(JSON.parse(data));
                    } else {
                        reject(new Error(`API Error ${res.statusCode}: ${data}`));
                    }
                } catch (e) {
                    reject(new Error(`Parse Error: ${e.message}\nRaw Data: ${data}`));
                }
            });
        });

        req.on('error', (e) => reject(e));
        if (body) req.write(JSON.stringify(body));
        req.end();
    });
}

function downloadPdf(pdfUrl, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(pdfUrl, (res) => {
            if (res.statusCode !== 200) {
                return reject(new Error(`Failed to download PDF, status code: ${res.statusCode}`));
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generateControlLayerPDF() {
    try {
        console.log('Starting Gamma generation for Deterministic Control Layer...');
        
        const createPayload = {
            textMode: 'generate',
            format: 'document',
            exportAs: 'pdf',
            inputText: `Topic: The Deterministic Control Layer Architecture.
Context: An executive architectural diagram and framework for capping Synthetic COGS.
Content:
1. The Triage Gate: NLP routing to bypass expensive LLMs.
2. The Guardrail Layer: Deterministic rules engine (Python/TS) to validate state before generation.
3. Narrow Generation: Constraining context windows and using localized SLMs where possible.
Visuals: High-contrast, dark mode architecture layout.
Tone: Hard engineering economics, zero fluff.`,
            textOptions: {
                amount: 'detailed',
                tone: 'authoritative, professional, executive'
            },
            cardOptions: {
                dimensions: 'a4'
            }
        };

        const createRes = await request('POST', '/v1.0/generations', createPayload);
        const genId = createRes.generationId;
        console.log(`Job ID: ${genId}. Polling...`);
        
        let status = 'pending';
        let pdfUrl = null;
        
        while (status !== 'completed' && status !== 'failed') {
            await sleep(5000);
            const statusRes = await request('GET', `/v1.0/generations/${genId}`);
            status = statusRes.status;
            
            if (status === 'completed' && statusRes.exportUrl) {
                pdfUrl = statusRes.exportUrl;
            }
            console.log(`Status: ${status}`);
        }
        
        if (status !== 'completed' || !pdfUrl) {
            throw new Error(`Generation failed or no export URL. Final status: ${status}`);
        }
        
        console.log(`Downloading PDF from ${pdfUrl}...`);
        const targetPath = path.join(publicDownloadsDir, 'deterministic-control-layer-board.pdf');
        await downloadPdf(pdfUrl, targetPath);
        console.log('✅ Created deterministic-control-layer-board.pdf');
        
    } catch (e) {
        console.error('Failed to generate PDF via Gamma:', e);
    }
}

async function run() {
    try {
        await generateAIUnitEconomics();
        await generateAgenticDrift();
        await generateControlLayerPDF();
        console.log('🎉 All lead magnets generated successfully.');
    } catch (e) {
        console.error(e);
    }
}

run();
