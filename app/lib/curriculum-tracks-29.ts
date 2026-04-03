import { CurriculumModule, l, d, m } from './curriculum-data';

export const tracks29Modules: Record<string, CurriculumModule> = {};
const t29 = 'Track 29 — Sovereign AI Substrates';

tracks29Modules['29/29-1'] = m('29-1', 'The Sovereign Risk Profile', 'Data Exhaust, Fine-Tuning SLMs, On-Premise AI Architecture', t29, 
    ['Calculate Multi-Tenant AI Liability', 'Deploy localized execution envelopes'], [
        l('The End of the Universal Cloud AI', 
            [
                'For the past four years, enterprises shoved every piece of proprietary intellectual property they owned into APIs hosted by massive cloud vendors. This was the "Wrapper Era"—fast, cheap, and structurally insecure. We are now entering the Sovereign Era.', 
                'A Sovereign AI Substrate is a physical and digital border around corporate intelligence. It mandates that any Small Language Model (SLM) executing localized business logic operates entirely on metal the company controls (whether true on-premise or strictly partitioned isolated cloud networks).',
                'If you are feeding a third-party frontier model your operational data, you are providing the vendor with free training exhaust. They will use your data to make a better model, which they will then sell to your direct competitor.'
            ],
            [
                d('Sovereign Substrate', 'A completely isolated AI execution environment utilizing locally hosted Small Language Models to prevent data exhaust.', 'Enterprise Standard'),
                d('Data Exhaust', 'The highly valuable proprietary logic and context inadvertently handed to an API provider during prompt-based interactions.', 'Critical Asset Leak')
            ], 
            'Audit your active AI endpoints for exhaust vulnerabilities.', 
            ['Trace every API call currently pushing internal context to OpenAI, Anthropic, or Google.', 'Evaluate which of those workflows can be downgraded from a massive frontier model to a highly specialized, locally hosted SLM (e.g., Llama, Mixtral).', 'Deploy an isolated Sovereign Substrate prototype.'], 
            {
                question: 'Why are major financial institutions pulling back from public LLM APIs?',
                options: ['The APIs are too slow', 'To stop the massive leakage of proprietary "Data Exhaust" which is actively training the baseline models of their vendors, erasing their competitive moat.', 'Local hardware is cheaper than API tokens', 'They do not like the interface'],
                correctIndex: 1,
                explanation: 'A company cannot claim to own its intelligence architecture if its core logic relies on a rented API that learns from its inputs.'
            }
        )
    ], '/vault/curriculum/tracks/29/29-2', undefined, 'live'
);

// Stubs for 2 to 10
for (let i = 2; i <= 10; i++) {
    tracks29Modules[`29/29-${i}`] = m(`29-${i}`, `Local Infrastructure Design ${i}`, `Expansion module for localized hardware.`, t29, 
        ['Optimize Edge compute'], [
            l(`Sovereign Economics ${i}`, 
                [
                    `Constructing a Sovereign Substrate is not purely a security mandate; it is a CapEx strategy.`, 
                    `Owning the intelligence means owning the racks.`
                ],
                [
                    d(`Substrate Utilization ${i}`, `The efficiency of localized GPU arrays vs API tokens.`, `CapEx Metric`),
                ], 
                `Architect stringent data silos.`, 
                [`Monitor local RAG latency.`], 
                {
                    question: `Why must a software company track data privacy limits?`,
                    options: [`They shouldn't`, `Because GDPR violations crush ARR.`, `To help them think cleaner`, `Because it prevents database corruption`],
                    correctIndex: 1,
                    explanation: `Sovereignty is required for EU compliance.`
                }
            )
        ], i < 10 ? `/vault/curriculum/tracks/29/29-${i+1}` : undefined, undefined, 'live'
    );
}
