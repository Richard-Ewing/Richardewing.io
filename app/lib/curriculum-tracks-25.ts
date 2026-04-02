import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks25Modules: Record<string, CurriculumModule> = {};
const t25 = 'Track 25 — Local SLM Sovereignty';

tracks25Modules['slm-sovereignty/25-1'] = m('25-1', 'The Hyperscaler Extortion Vector', 'Dependency risks, inference taxation, air-gapping.', t25, 
    ['Map the OpenAI API bill trajectory', 'Escape the Hyperscaler lock-in'], [
        l('The Peril of Arbitrary API Taxation', 
            [
                'Routing 100% of an enterprise’s proprietary cognitive logic through an external API provided by OpenAI or Anthropic introduces a catastrophic existential dependency. You have effectively given a single external vendor the absolute power to spontaneously triple your cloud OpEx overnight by arbitrarily raising inference token prices.', 
                'Furthermore, transmitting highly confidential, proprietary medical data or defense logistics directly to a massive multi-tenant server cluster inherently violates rigorous corporate air-gap compliance mandates and shatters intellectual property boundaries.',
                'The architectural mandate of 2026 is "Sovereignty." Enterprises must systematically deploy localized Small Language Models (SLMs) strictly onto their own internal hardware, entirely severing the external hyperscaler umbilical cord.'
            ],
            [
                d('Inference Taxation Vulnerability', 'The total corporate percentage of gross margin reliant on third-party AI API pricing.', 'Must reduce exposure'),
                d('Data Latency Leakage', 'The millisecond penalty and IP risk of transmitting packets off-premises.', 'Halted entirely by Local SLMs')
            ], 
            'Calculate your current reliance on third-party foundational inference providers.', 
            ['Review the previous month\'s OpenAI or Anthropic enterprise invoice.', 'Multiply that expenditure against your projected 3-year data volume growth curve.', 'Present the explosive capital risk trajectory directly to the CFO to authorize localized SLM hardware CapEx.'], 
            {
                question: 'What is the primary corporate vulnerability of relying exclusively on external LLM APIs (like GPT-4) for core product functionality?',
                options: ['The APIs force developers to use Python', 'It creates a catastrophic vendor lock-in scenario where a third-party possesses the unilateral leverage to arbitrarily skyrocket your operational costs instantly', 'The AI models are too smart and become sentient', 'It requires massive localized hard drives'],
                correctIndex: 1,
                explanation: 'Outsourcing the entire cognitive engine of your company to a single external vendor provides them absolute pricing leverage over your margin structure.'
            }
        )
    ], '/vault/curriculum/tracks/slm-sovereignty/25-2', undefined, 'live'
);

tracks25Modules['slm-sovereignty/25-2'] = m('25-2', 'Quantization & Hardware Economics', 'Running Llama-3 locally, 4-bit vs 8-bit precision.', t25, 
    ['Master the mathematics of quantization', 'Deploy cheap inference hardware'], [
        l('The Mathematical Miracle of Quantization', 
            [
                'Running a raw, uncompressed 70-Billion parameter language model locally requires astronomical capital—demanding multiple incredibly expensive, highly constrained Nvidia H100 GPU clusters. This infrastructure barrier prevented localized AI adoption for years.', 
                'The brutal engineering countermeasure is "Quantization." By mathematically compressing the floating-point precision of the neural weights from extremely bloated 16-bit floats down into highly dense 4-bit integers, the exact same model shrinks drastically in physical RAM size.',
                'This single architectural tactic allows an enterprise to run highly complex localized LLMs entirely on cheap, consumer-grade Apple M-series chips or standard cloud CPU boundaries, utterly bypassing the Nvidia GPU extortion racket.'
            ],
            [
                d('FP16 Deployment Capital', 'The exorbitant cost of sourcing enough VRAM to host an uncompressed foundational model.', '>$50k per cluster node'),
                d('4-Bit Context Density', 'The massive operational footprint reduction achieved by squashing floating point values.', 'A 400% VRAM saving')
            ], 
            'Download and execute a fully quantized 4-bit model directly on your local hardware.', 
            ['Install a localized inference runner like `Ollama` or `LM Studio`.', 'Download an explicitly quantized `Q4_K_M` version of a top-tier open model (e.g. LLaMA 3 8B).', 'Disable your laptop’s WiFi and execute a highly complex reasoning task to mathematically verify the air-gapped capability.'], 
            {
                question: 'What is the exact mechanical purpose of "Quantizing" an AI Model?',
                options: ['To increase the model’s IQ score', 'To mathematically compress the neural weights from 16-bit to 4-bit, drastically slashing the requisite VRAM footprint and allowing the model to run on incredibly cheap hardware', 'To translate the AI into Spanish', 'To force the model to output strict JSON code'],
                correctIndex: 1,
                explanation: 'Quantization slightly reduces extreme decimal precision to completely eradicate massive VRAM bottlenecks, enabling enterprises to avoid the astronomical GPU hardware tax.'
            }
        )
    ], '/vault/curriculum/tracks/slm-sovereignty/25-10', undefined, 'live'
);

for (let i = 3; i <= 10; i++) {
    tracks25Modules[`slm-sovereignty/25-${i}`] = m(`25-${i}`, `Advanced Local Sovereign Pipeline ${i}`, `Expansion module tracking deep localized Edge computing algorithms.`, t25, 
        ['Optimize localized VRAM', 'Defend corporate IP', 'Eradicate external API latency'], [
            l(`Deep Local Sovereignty Architecture ${i}`, 
                [
                    `Continuing the expansion into rigorous internal model deployments. Establishing absolute technical independence from external Silicon Valley hyperscalers.`, 
                    `The executive strategy dictates pulling down highly specialized, hyper-narrow open-weight models (Small Language Models) and embedding them directly adjacent to the corporate databases.`,
                    `This enforces complete organizational privacy boundaries while simultaneously plummeting the millisecond network latency normally required to access an API cluster thousands of miles away.`
                ],
                [
                    d(`Internal VRAM Efficiency Benchmark ${i}`, `The sustained operational load on the localized hardware.`, `Stable`),
                    d(`Air-Gap Security Validity ${i}`, `Confirmation that zero proprietary bits exit the restricted internal perimeter.`, `Verified 100%`)
                ], 
                `Architect stringent isolation parameters for internally hosted algorithmic reasoning.`, 
                [`Integrate the models dynamically via localized Docker containers.`, `Monitor the thermals and active memory allocation limits.`, `Block all outgoing internet TCP requests from the inference pod explicitly.`], 
                {
                    question: `Why is deploying localized "Small Language Models" (SLMs) crucial for high-value enterprise intellectual property data?`,
                    options: [`They are much larger and slower`, `It guarantees maximum security via Air-Gapping by absolutely ensuring raw, highly classified proprietary data physically never leaves the internal corporate infrastructure`, `It allows developers to use Microsoft Windows`, `They generate UI frameworks automatically`],
                    correctIndex: 1,
                    explanation: `Sending defense-grade or healthcare data to an external OpenAI server is frequently illegal or disastrous. Localized SLMs keep the reasoning and the data securely contained.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/slm-sovereignty/25-${i+1}` : undefined, undefined, 'live'
    );
}
