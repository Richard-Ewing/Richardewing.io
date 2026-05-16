/**
 * MARGIN THRESHOLD VALIDATOR
 * 
 * Business-logic validator that integrates with the billing provider (e.g. Stripe)
 * to ensure that AI features are disabled if they push a specific tenant into
 * negative gross margin.
 */

export interface TenantBillingState {
    tenantId: string;
    monthlySubscriptionRevenueUsd: number;
    currentMonthlyAiSpendUsd: number;
    targetGrossMarginPercentage: number; // e.g., 80
}

export class MarginThresholdValidator {
    
    /**
     * Determines if a tenant is allowed to continue using AI features.
     * @returns boolean - True if the tenant is within profitable margins.
     */
    public isTenantProfitable(state: TenantBillingState): boolean {
        // Calculate the maximum allowed AI spend based on the target margin.
        // E.g., if Revenue is $100 and Target Margin is 80%, allowed COGS is $20.
        const allowedCogsPercentage = (100 - state.targetGrossMarginPercentage) / 100;
        const maxAllowedSpendUsd = state.monthlySubscriptionRevenueUsd * allowedCogsPercentage;

        if (state.currentMonthlyAiSpendUsd >= maxAllowedSpendUsd) {
            console.warn(`[MARGIN COLLAPSE PREVENTED] Tenant ${state.tenantId} has reached max profitable AI spend ($${maxAllowedSpendUsd.toFixed(2)}). Features degraded.`);
            return false;
        }

        return true;
    }

    /**
     * Recommends a fallback model if the tenant is approaching margin collapse.
     */
    public recommendModelDowngrade(state: TenantBillingState, requestedModel: string): string {
        const allowedCogsPercentage = (100 - state.targetGrossMarginPercentage) / 100;
        const maxAllowedSpendUsd = state.monthlySubscriptionRevenueUsd * allowedCogsPercentage;
        
        // If they have burned through 90% of their margin budget, force them to a cheaper model
        if (state.currentMonthlyAiSpendUsd >= (maxAllowedSpendUsd * 0.9)) {
            console.log(`[MARGIN WARNING] Tenant ${state.tenantId} at 90% capacity. Downgrading model to preserve margin.`);
            return "claude-3-haiku-20240307"; // Hardcoded cheap fallback
        }

        return requestedModel;
    }
}
