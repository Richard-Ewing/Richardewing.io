/**
 * AI ENGINEERING ECONOMICS MIDDLEWARE
 * 
 * Tracks synthetic COGS across all agentic tasks: token costs, verification burden,
 * retry inflation, and remediation hours. Provides real-time ROI visibility.
 */

export interface TaskCost {
    taskId: string;
    tokenCostUsd: number;
    verificationHours: number;
    remediationHours: number;
    retryTokenWaste: number;
}

export interface EconomicSnapshot {
    totalAiCost: number;
    humanEquivalentCost: number;
    roi: number;
    marginImpact: string;
}

export class SyntheticCOGSTracker {
    private tasks: Map<string, TaskCost> = new Map();
    private hourlyRate: number;
    
    constructor(engineerHourlyRate: number = 80) {
        this.hourlyRate = engineerHourlyRate;
    }
    
    public logTask(cost: TaskCost): void {
        this.tasks.set(cost.taskId, cost);
    }
    
    public getSnapshot(): EconomicSnapshot {
        let totalToken = 0;
        let totalVerification = 0;
        let totalRemediation = 0;
        let totalRetryWaste = 0;
        
        for (const task of this.tasks.values()) {
            totalToken += task.tokenCostUsd;
            totalVerification += task.verificationHours;
            totalRemediation += task.remediationHours;
            totalRetryWaste += task.retryTokenWaste;
        }
        
        const totalAiCost = totalToken + totalRetryWaste + 
            ((totalVerification + totalRemediation) * this.hourlyRate);
        
        // Estimate: human would take verification+remediation hours as total task time
        const humanEquivalentCost = (totalVerification + totalRemediation) * this.hourlyRate * 0.8;
        
        const roi = humanEquivalentCost > 0 
            ? ((humanEquivalentCost - totalAiCost) / humanEquivalentCost) * 100 
            : 0;
        
        return {
            totalAiCost,
            humanEquivalentCost,
            roi,
            marginImpact: roi > 0 ? 'Positive' : 'NEGATIVE - Review Required'
        };
    }
}