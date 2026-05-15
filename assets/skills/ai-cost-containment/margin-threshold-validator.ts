/**
 * MARGIN THRESHOLD VALIDATOR
 * 
 * Pre-execution logic that compares the estimated inference cost of a task
 * against the estimated human labor cost to ensure positive ROI.
 */

export class MarginThresholdValidator {
  
  private readonly SENIOR_ENGINEER_HOURLY_RATE = 150.00;

  /**
   * Evaluates if the task should be sent to an agent or a human based on economics.
   */
  public evaluateEconomicViability(estimatedInferenceCost: number, estimatedHumanHours: number): boolean {
    const humanCost = estimatedHumanHours * this.SENIOR_ENGINEER_HOURLY_RATE;
    
    // We require a minimum 5x cost reduction to justify the probabilistic risk of AI.
    const requiredMarginMultiplier = 5;
    const maxAllowedInferenceCost = humanCost / requiredMarginMultiplier;

    if (estimatedInferenceCost > maxAllowedInferenceCost) {
      console.warn(`[FINANCE REJECT] Task violates margin thresholds.`);
      console.warn(`Estimated Human Cost: $${humanCost.toFixed(2)}`);
      console.warn(`Estimated Inference Cost: $${estimatedInferenceCost.toFixed(2)}`);
      console.warn(`Max Allowed Inference Cost (5x Margin): $${maxAllowedInferenceCost.toFixed(2)}`);
      return false;
    }

    return true;
  }
}
