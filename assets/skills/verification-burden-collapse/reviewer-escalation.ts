/**
 * REVIEWER ESCALATION MATRIX
 * 
 * Determines which human role is pinged based on the *semantic weight* of the 
 * agent's verified output. Prevents Staff Engineers from being pinged for CSS tweaks.
 */

export interface EscalationContext {
    agentId: string;
    filesModified: string[];
    riskScore: number; // 1-10, calculated by external drift metrics
    admissibilityPassed: boolean;
}

export enum HumanRole {
    NONE = "None (Auto-Merge)",
    JUNIOR_ENGINEER = "Junior QA Engineer",
    SENIOR_ENGINEER = "Senior Code Owner",
    STAFF_ARCHITECT = "Staff Architect"
}

export class EscalationMatrix {
    
    /**
     * Maps an admissible PR to the correct human reviewer.
     */
    public routeEscalation(context: EscalationContext): HumanRole {
        if (!context.admissibilityPassed) {
            throw new Error("[GOVERNANCE ERROR] Cannot escalate a payload that failed admissibility validation.");
        }

        // 1. Core Architecture Mutation
        const touchesCore = context.filesModified.some(file => file.includes('/core/') || file.includes('middleware.ts'));
        if (touchesCore || context.riskScore >= 8) {
            console.log(`[ESCALATION] Routing Agent ${context.agentId} PR to Staff Architect (High Risk)`);
            return HumanRole.STAFF_ARCHITECT;
        }

        // 2. Logic Mutation
        const touchesLogic = context.filesModified.some(file => file.endsWith('.ts') && !file.includes('.test.ts'));
        if (touchesLogic || context.riskScore >= 5) {
            console.log(`[ESCALATION] Routing Agent ${context.agentId} PR to Senior Code Owner (Medium Risk)`);
            return HumanRole.SENIOR_ENGINEER;
        }

        // 3. Asset/Markup Tweaks
        const touchesMarkup = context.filesModified.some(file => file.endsWith('.css') || file.endsWith('.md'));
        if (touchesMarkup) {
            console.log(`[ESCALATION] Routing Agent ${context.agentId} PR to Junior QA (Low Risk)`);
            return HumanRole.JUNIOR_ENGINEER;
        }

        // 4. Zero-Risk Updates (e.g., passing tests only, or safe dependency bumps)
        console.log(`[ESCALATION] Auto-merging Agent ${context.agentId} PR (Zero Risk)`);
        return HumanRole.NONE;
    }
}
