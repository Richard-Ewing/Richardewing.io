import { HOMEPAGE_CONTRACT_MATRIX, HomepagePromise } from '../product/homepageContract';

export interface DynamicWizardStep {
    stepIndex: number;
    stepTitle: string;
    description: string;
    inputType: 'SelectObjective' | 'SelectRole' | 'ConnectTelemetry' | 'ContextForm' | 'ReviewAndExecute';
}

export interface DynamicWizardSchema {
    templateId: 'costReduction' | 'board' | 'vendor' | 'governance' | 'strategy';
    title: string;
    steps: DynamicWizardStep[];
}

export class DynamicWizardEngine {
    static getSchemaForMission(missionId: string): DynamicWizardSchema {
        const promise = HOMEPAGE_CONTRACT_MATRIX.find(p => p.missionId === missionId || p.id === missionId) || HOMEPAGE_CONTRACT_MATRIX[0];

        switch (promise.wizardTemplate) {
            case 'board':
                return {
                    templateId: 'board',
                    title: 'Board Meeting Preparation Wizard',
                    steps: [
                        { stepIndex: 1, stepTitle: 'Select Board Meeting Date & Q&A Agenda', description: 'Specify board meeting timeline and key focus topics.', inputType: 'SelectObjective' },
                        { stepIndex: 2, stepTitle: 'Assign CEO & CFO Roles', description: 'Select board presentation owners.', inputType: 'SelectRole' },
                        { stepIndex: 3, stepTitle: 'Connect AWS & GitHub Financial Telemetry', description: 'Gather verified OpEx savings.', inputType: 'ConnectTelemetry' },
                        { stepIndex: 4, stepTitle: 'Input Board Expectations & Target ROI', description: 'Define target EBITDA expansion.', inputType: 'ContextForm' },
                        { stepIndex: 5, stepTitle: 'Compile 11-Slide Board Presentation Deck', description: 'Execute reasoning engines and generate .pptx.', inputType: 'ReviewAndExecute' }
                    ]
                };
            case 'vendor':
                return {
                    templateId: 'vendor',
                    title: 'Vendor License Negotiation Wizard',
                    steps: [
                        { stepIndex: 1, stepTitle: 'Select Software Vendor & Contract Value', description: 'Identify vendor (Cursor, Copilot, AWS).', inputType: 'SelectObjective' },
                        { stepIndex: 2, stepTitle: 'Select CIO & CTO Negotiators', description: 'Assign procurement owners.', inputType: 'SelectRole' },
                        { stepIndex: 3, stepTitle: 'Connect Developer Adoption Telemetry', description: 'Measure PR drag vs seat cost.', inputType: 'ConnectTelemetry' },
                        { stepIndex: 4, stepTitle: 'Define Target Discount & Payback Window', description: 'Set negotiation parameters.', inputType: 'ContextForm' },
                        { stepIndex: 5, stepTitle: 'Compile Vendor Renewal Package', description: 'Generate architecture review & roadmap.', inputType: 'ReviewAndExecute' }
                    ]
                };
            default:
                return {
                    templateId: 'costReduction',
                    title: 'AI Cost & Unit Economics Optimization Wizard',
                    steps: [
                        { stepIndex: 1, stepTitle: 'Select Cost Reduction Objective', description: 'Target un-cached prompt context rot.', inputType: 'SelectObjective' },
                        { stepIndex: 2, stepTitle: 'Select CFO & VP Engineering Owners', description: 'Assign executive sponsors.', inputType: 'SelectRole' },
                        { stepIndex: 3, stepTitle: 'Connect AWS, Anthropic & OpenAI Billing', description: 'Gather inference telemetry.', inputType: 'ConnectTelemetry' },
                        { stepIndex: 4, stepTitle: 'Define Budget Constraints & Edge CapEx', description: 'Set $40k edge node budget cap.', inputType: 'ContextForm' },
                        { stepIndex: 5, stepTitle: 'Compile Decision Package & Stage Jira Tasks', description: 'Generate deliverables & stage tickets.', inputType: 'ReviewAndExecute' }
                    ]
                };
        }
    }
}
