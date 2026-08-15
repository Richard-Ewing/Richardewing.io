import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks25Modules: Record<string, CurriculumModule> = {};
const t25 = 'Track 25  -  Model Routing Arbitrage';

tracks25Modules['model-routing/25-1'] = m('25-1', 'The Architecture of AI Unit Economics', 'The cost of predictivity vs latency tradeoff & Semantic Cache / Edge Filter architecture.', t25, 
    ['Optimize AI Gross Margins', 'Establish a routing gateway', 'Deploy Semantic Caching & Edge Filtering'], [
        l('The Eradication of the Static Endpoint', 
            [
                'During the initial AI boom, companies simply hardcoded their product to call the most expensive frontier model (e.g. GPT-4o) for every single user interaction. This resulted in the "Cost of Predictivity," where summarizing a two-sentence email cost $0.05. Multiplied by millions of requests, gross margins collapsed instantaneously.', 
                'As Richard Ewing established in his August 2026 publication ("Growth Is Not Your Cost Problem  -  Your Architecture Is"), shrinking software margins as user engagement grows indicate an underlying architecture failure. When running execution loops, paying top-tier models for routine or repeated logic burns token capital rapidly.',
                'Elite architectural scale demands placing sub-millisecond edge filters and vector semantic caching layers directly in front of LLM endpoints. Edge code filters route and dedupe routine logic in code; semantic caches serve historical query intent hits at near-zero cost. Telemetry confirms this architecture slashes runtime API spend by over 50% with zero quality loss.'
            ],
            [
                d('Inference Margin Bleed', 'The lost revenue directly attributable to utilizing a massive frontier model for trivially simple tasks.', 'Eliminated cleanly'),
                d('Dynamic Gateway Latency', 'The absolute microsecond lag induced by the routing layer assessing the prompt before forwarding it.', '< 15ms Required boundary'),
                d('Runtime API Cost Reduction', 'The verified spend reduction achieved by placing semantic caching and edge filtering in front of models.', '50%+ Cost Cut')
            ], 
            'Audit the central LLM call functions within the primary codebase and insert a semantic cache & edge filtering layer.', 
            ['Identify any instance where the codebase directly hardcodes a specific provider API (e.g. `openai.chat.completions`).', 'Abstract that call entirely behind an internal `RouteInference()` wrapper function incorporating vector similarity checks.', 'Programmatic logic and edge filters must dictate the target model or cache hit based on user intent.'], 
            {
                question: 'What architectural decision allows high-growth AI SaaS platforms to cut runtime API spend by >50% without quality loss?',
                options: ['Raising subscription pricing', 'Placing vector semantic caching and sub-millisecond edge code filtering in front of models to solve routine logic with code and cache hits rather than generative tokens', 'Disabling logging', 'Switching from TypeScript to C++'],
                correctIndex: 1,
                explanation: 'Never pay a generative model to handle a task that traditional code or a vector cache hit can solve. Edge filtering and semantic caching intercept redundant and routine queries before they reach expensive models.'
            }
        )
    ], '/vault/curriculum/tracks/model-routing/25-2', undefined, 'live'
);

tracks25Modules['model-routing/25-2'] = m('25-2', 'Semantic Fallback Networks', 'Rate-limit evasion, zero downtime inference.', t25, 
    ['Engineer zero-downtime APIs', 'Hedge against provider outages'], [
        l('The Fragility of the Singular Vendor', 
            [
                'For decades, developers built "Vendor Lock-In" into their databases. In 2026, developers built catastrophic vendor lock-in into their intelligence. If an organization routes 100% of its traffic to Anthropic, and Anthropic suffers a catastrophic 4-hour US-East outage, the entire multi-million dollar software application fails instantly.', 
                'Model Routing enforces "Semantic Fallback Networks." The routing gateway is instructed via cascading logic: Attempt primary route (Claude 3.5 Sonnet). If the request hits a 503 HTTP timeout, instantly intercept the failure and instantly reroute the exact payload mathematically to a secondary provider (GPT-4o or a local vLLM node).',
                'The user never experiences an error screen. The user only experiences a slight 500ms delay while the intelligent orchestrator automatically hedges the failure across competing geopolitical infrastructure layers.'
            ],
            [
                d('Single-Vendor Downtime Risk', 'The probability of a massive corporate failure directly linked to a third-party API outage.', 'Must structurally hedge'),
                d('Cascading Failover Latency', 'The speed at which the internal gateway identifies an external 502 error and re-prompts the backup.', 'Near instantaneous')
            ], 
            'Execute a chaos-engineering drill targeting the primary LLM provider.', 
            ['Block the DNS resolution for the primary LLM API within the staging environment.', 'Trigger the primary autonomous agent workflow.', 'Verify visually that the system automatically recovers and utilizes the secondary fallback provider cleanly.'], 
            {
                question: 'Why must enterprise Model Routers natively support "Cascading Failovers"?',
                options: ['To lower the cost of the cloud', 'Because the reliability of centralized LLM APIs is notoriously fragile. A failover automatically re-routes a blocked request to a competitor’s model, achieving zero user-facing downtime despite a massive infrastructural collapse', 'To make the response more creative', 'Because it is required by the Linux Foundation'],
                correctIndex: 1,
                explanation: 'No single generative API has 5 Nines (99.999%) of reliability. You cannot allow a fragile third party to take your proprietary application completely offline.'
            }
        )
    ], '/vault/curriculum/tracks/model-routing/25-10', undefined, 'live'
);

for (let i = 3; i <= 10; i++) {
    tracks25Modules[`model-routing/25-${i}`] = m(`25-${i}`, `Advanced Arbitrage Architectures ${i}`, `Expansion module tracking deep fallback and dynamic endpoint selection protocols.`, t25, 
        ['Optimize API pricing in real-time', 'Calculate exact margin boundaries', 'Construct resilient routing algorithms'], [
            l(`Deep Inference Routing ${i}`, 
                [
                    `Continuing the expansion into advanced API economics. When 14 new frontier models drop every 12 months, attempting to manually refactor codebases is impossible.`, 
                    `The executive strategy demands deploying completely abstracted gateways that dynamically route based on real-time pricing grids and active token latency.`,
                    `The architecture absolutely mandates establishing a central proxy that governs all outbound proprietary AI requests.`
                ],
                [
                    d(`Model Latency Drift ${i}`, `The risk of a primary provider suddenly lagging during high traffic periods.`, `Automatically mitigated via routing`),
                    d(`Cost-Per-Token Cap ${i}`, `The hard mathematical boundary preventing negative gross margin prompts.`, `Strictly enforced`)
                ], 
                `Architect stringent caching grids inside the Model Router.`, 
                [`Integrate edge-intercept caching via Redis to prevent redundant LLM routing.`, `Monitor the shifting pricing tables for massive intelligence APIs continuously.`, `Force manual override tests ensuring massive token payloads default logically.`], 
                {
                    question: `Why must a Model Router sit centrally across the entire engineering department?`,
                    options: [`You cannot trust developers`, `Because abstracting the APIs centrally allows the DevOps team to swap models instantly behind the scenes without rewriting a single line of frontend code across thousands of components`, `Because the cloud is complicated`, `Because it prevents hacking`],
                    correctIndex: 1,
                    explanation: `When a new model drops that is 20% cheaper, a central Model Router allows you to update one line of configuration code and instantly reap a massive gross margin expansion across the entire corporate fleet.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/model-routing/25-${i+1}` : undefined, undefined, 'live'
    );
}
