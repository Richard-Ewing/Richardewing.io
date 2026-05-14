export interface PDIInputs {
    teamSize: number;
    salary: number;
    sprintLength: number;
    prCycleHours: number;
    deployFreqDays: number;
    maintenanceTickets: number;
    growthTickets: number;
    retentionTickets: number;
    totalTickets: number;
}

export interface PDIScoreMetrics {
    score: number;
    metrics: {
        growth: number;
        retention: number;
        maintenance: number;
    };
    financials: {
        waste: number;
        rewriteCost: number;
        isTechnicalDefault: boolean;
        defaultRatio: number;
        wastePerSprint: number;
        debtReductionROI: number;
    };
    debtVelocity: number;
    burnDownWeeks: number;
    ticketCount: number;
}

export function calculateProductDebtScore(inputs: PDIInputs): PDIScoreMetrics {
    const {
        teamSize,
        salary,
        sprintLength,
        prCycleHours,
        deployFreqDays,
        maintenanceTickets,
        growthTickets,
        retentionTickets,
        totalTickets
    } = inputs;

    const teamNum = teamSize || 1;
    const salaryNum = salary || 0;
    const sprintWeeks = sprintLength || 2;
    const sprintsPerYear = 52 / sprintWeeks;

    if (totalTickets === 0) {
        return {
            score: 100,
            metrics: { growth: 0, retention: 0, maintenance: 0 },
            financials: {
                waste: 0, rewriteCost: 0, isTechnicalDefault: false,
                defaultRatio: 0, wastePerSprint: 0, debtReductionROI: 0
            },
            debtVelocity: 0, burnDownWeeks: 0, ticketCount: 0
        };
    }

    const maintRatio = maintenanceTickets / totalTickets;
    const score = Math.round(100 - (maintRatio * 100));

    const waste = teamNum * salaryNum * maintRatio;
    const rewriteCost = (teamNum * salaryNum) * 0.4; // Extrapolating 5-month rewrite effort
    const isTechnicalDefault = waste > rewriteCost;
    const defaultRatio = waste / (rewriteCost || 1);

    const wastePerSprint = waste / sprintsPerYear;
    const ticketsPerSprint = totalTickets / sprintsPerYear;

    // Factor in velocity decay from poor CI/CD telemetry
    const prPenalty = 1 + (prCycleHours / 48); // Penalty threshold baseline 48h
    const deployPenalty = 1 + (deployFreqDays / 7); // Penalty threshold baseline 7d
    const velocityMultiplier = (prPenalty + deployPenalty) / 2;

    const debtVelocity = Math.round((maintRatio * ticketsPerSprint) * velocityMultiplier);
    
    // If dedicated to debt reduction, how long to clear? ~0.5 tickets per engineer per sprint
    const burnDownWeeks = Math.ceil(maintenanceTickets / (teamNum * 0.5));
    
    // ROI: cost of 1 sprint of dedicated debt reduction vs annual savings
    const sprintCost = (teamNum * salaryNum) / sprintsPerYear;
    const debtReductionROI = waste / (sprintCost || 1);

    return {
        score,
        metrics: {
            growth: Math.round((growthTickets / totalTickets) * 100),
            retention: Math.round((retentionTickets / totalTickets) * 100),
            maintenance: Math.round(maintRatio * 100),
        },
        financials: {
            waste,
            rewriteCost,
            isTechnicalDefault,
            defaultRatio,
            wastePerSprint,
            debtReductionROI,
        },
        debtVelocity,
        burnDownWeeks,
        ticketCount: totalTickets
    };
}
