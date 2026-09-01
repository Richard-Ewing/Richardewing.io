import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks24Modules: Record<string, CurriculumModule> = {};
const t24 = 'Track 24  -  Sovereign AI & On-Premise LLMs';

tracks24Modules['sovereign-ai/24-1'] = m('24-1', 'The Nationalization of Compute', 'Data gravity, geopolitical pressures, on-prem repatriation.', t24, 
    ['Map data residency requirements', 'Evaluate open-weight sovereignty'], [
        l('The Data Sovereignty Imperative', 
            [
                'For the past decade, enterprises blindly forwarded their deepest intellectual property into centralized public clouds (AWS, GCP). With the advent of LLMs, doing so means continuously sending unredacted financial records and proprietary secrets to a massive, centralized multi-tenant intelligence API like OpenAI.', 
                'In 2026, severe geopolitical regulations and the sheer risk of corporate espionage have triggered the "Sovereign AI" movement. Governments and Fortune 500s now mandate that high-tier intelligence runs entirely physically inside their own borders and Virtual Private Clouds.',
                'The framework for Sovereign AI completely abandons relying on black-box frontier vendors. Instead, it uses immensely powerful "Open-Weight" models hosted locally, ensuring the weights, the data, and the execution trace never leave the corporate firewall.'
            ],
            [
                d('Public API Data Siphoning', 'The probability of proprietary prompts being utilized for shadow model training.', 'Unacceptable Existential Risk'),
                d('On-Premise Model Integrity', 'The absolute containment of semantic logic within a physically isolated environment.', 'Mandated standard')
            ], 
            'Audit the API outbound destinations for your highly sensitive internal tooling.', 
            ['Filter all generative API requests leaving the corporate subnet.', 'Identify instances where employees are submitting raw, unscrambled customer data or internal source code into public multi-tenant APIs.', 'Enforce a rigid proxy blocking public API transmission for high-sensitivity classifications.'], 
            {
                question: 'What is the primary catalyst driving the transition toward Sovereign AI architectures?',
                options: ['Hardware is getting cheaper', 'The massive, existential security risk and regulatory illegality of sending highly sensitive, proprietary corporate data to centralized external, third-party AI APIs', 'OpenAI shut down its servers', 'It prevents models from hallucinating'],
                correctIndex: 1,
                explanation: 'Sovereignty is about control. Sending your core intellectual property to a third party to process inherently violates modern compliance and data residency laws.'
            }
        )
    ], '/vault/curriculum/tracks/sovereign-ai/24-2', undefined, 'live'
);

tracks24Modules['sovereign-ai/24-2'] = m('24-2', 'Hosting Open-Weights at Scale', 'vLLM, TensorRT, local orchestration.', t24, 
    ['Deploy vLLM infrastructure', 'Optimize local token generation'], [
        l('The Physics of Self-Managed Inference', 
            [
                'Running your own Sovereign AI is not as simple as launching a Python script. If an organization naively runs an LLaMA 3 model using a basic transformer library, the latency will be staggering, yielding 2 tokens per second and causing massive user abandonment.', 
                'Elite Sovereign architectures require deploying hyper-optimized inference engines like vLLM or NVIDIA TensorRT-LLM. These engines utilize PagedAttention - a technique adapted from virtual memory management - to aggressively manage the fragile GPU VRAM, allowing a single clustered node to handle thousands of concurrent queries without OOM (Out of Memory) crashing.',
                'The transition from calling an API to managing physical inference requires a brutal pivot from simple "Prompt Engineering" to profound "Hardware Engineering."'
            ],
            [
                d('PagedAttention Memory Yield', 'The massive increase in active concurrent requests capable on a single GPU cluster.', 'Exponential capability'),
                d('Self-Hosted Token Latency', 'The speed benchmark required to match a cloud provider experience on minimal hardware.', 'Must optimize heavily')
            ], 
            'Architect a highly optimized localized inference node.', 
            ['Deploy a dedicated GPU instance loaded natively with the vLLM orchestrator.', 'Load an 8-Billion parameter instruction-tuned Open-Weight model.', 'Perform an intensive load-test via simulated parallel agents and track the actual Time To First Token.'], 
            {
                question: 'Why must enterprise organizations utilize massive optimization frameworks like vLLM when hosting their own Sovereign models?',
                options: ['It changes the language the AI speaks', 'Standard loading of AI models rapidly drains the massive GPU VRAM during concurrent requests, leading to server crashes. Frameworks like vLLM optimize memory dynamically via PagedAttention to prevent this', 'It avoids paying software licenses', 'It connects the model to the internet'],
                correctIndex: 1,
                explanation: 'GPU memory is incredibly expensive and highly constrained. PagedAttention prevents memory fragmentation, vastly increasing the number of requests the server can execute simultaneously.'
            }
        )
    ], '/vault/curriculum/tracks/sovereign-ai/24-10', undefined, 'live'
);

for (let i = 3; i <= 10; i++) {
    tracks24Modules[`sovereign-ai/24-${i}`] = m(`24-${i}`, `Advanced Sovereign Execution ${i}`, `Expansion module tracking deep self-hosting boundaries and private fine-tuning.`, t24, 
        ['Optimize Air-Gapped execution', 'Calculate Bare-Metal amortization', 'Establish strict model compliance'], [
            l(`Secure Deployment Architecture ${i}`, 
                [
                    `Continuing the expansion into Sovereign frameworks. When infrastructure is completely walled off from the internet, standard CI/CD practices regarding container registry fetching violently collapse.`, 
                    `The executive strategy demands deploying completely internalized artifact registries holding pre-compiled and sanitized Open-Weight binaries.`,
                    `The architecture absolutely mandates establishing zero-trust bounds even within the physically secured perimeter.`
                ],
                [
                    d(`Air-Gap Pull Failure ${i}`, `The risk of requiring external npm or HuggingFace API calls during deployment.`, `Completely mitigated`),
                    d(`Internal VRAM Capacity ${i}`, `The sustained hardware tracking metric for cluster orchestration.`, `Highly monitored`)
                ], 
                `Architect stringent air-gapped network logic for model propagation.`, 
                [`Integrate internal scanning on HuggingFace safetensor downloads.`, `Monitor the VRAM allocation over heavy sustained internal load.`, `Force physical validation of network subnets prior to deployment.`], 
                {
                    question: `Why is an air-gapped deployment architecture profoundly complicated compared to public cloud deployments?`,
                    options: [`You cannot write code locally`, `Because almost all modern developer tools assume uninhibited external internet access; shutting this down requires recreating massive package registries and dependency tracking internally`, `Because air is hard to cool`, `Because the cloud provider forbids it`],
                    correctIndex: 1,
                    explanation: `True sovereignty means no internet access. If external internet access is severed, a simple '$ npm install' command fails. Sovereignty requires complete internal mirroring of tools.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/sovereign-ai/24-${i+1}` : undefined, undefined, 'live'
    );
}
