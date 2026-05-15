/**
 * SYNTHETIC COGS CALCULATOR
 * 
 * Quantifies the hidden cost of Hallucination Debt by calculating the compute (API)
 * and human labor (Verification) wasted on non-deterministic agent outputs.
 */

interface SessionTelemetry {
  tokenInput: number;
  tokenOutput: number;
  retryCount: number;
  humanVerificationMinutes: number;
}

const COST_PER_1M_INPUT = 3.00; // Example: Claude 3.5 Sonnet
const COST_PER_1M_OUTPUT = 15.00;
const HUMAN_ENGINEER_HOURLY_RATE = 150.00;

export class SyntheticCOGSCalculator {
  
  public calculateSessionCost(telemetry: SessionTelemetry): { apiCost: number, humanCost: number, totalCost: number } {
    const inputCost = (telemetry.tokenInput / 1_000_000) * COST_PER_1M_INPUT;
    const outputCost = (telemetry.tokenOutput / 1_000_000) * COST_PER_1M_OUTPUT;
    const apiCost = inputCost + outputCost;

    const humanCost = (telemetry.humanVerificationMinutes / 60) * HUMAN_ENGINEER_HOURLY_RATE;

    const totalCost = apiCost + humanCost;

    console.log(`[ECONOMICS] Synthetic COGS for session: $${totalCost.toFixed(2)}`);
    if (telemetry.retryCount > 3) {
      console.warn(`[WARNING] High retry inflation detected. API spend multiplier: ${telemetry.retryCount}x`);
    }

    return { apiCost, humanCost, totalCost };
  }
}
