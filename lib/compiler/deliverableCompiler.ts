import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';
import { ExecutiveArtifact, ArtifactCompiler } from './artifactCompiler';
import { CompiledPresentation, PresentationCompiler } from './presentationCompiler';
import { ExecutionTicket } from '../connectors/executionRegistry';

export interface MissionOutput {
    decisionPackage: CanonicalDecisionPackage;
    executiveSummary: string;
    boardDeck: CompiledPresentation;
    roadmapArtifact: ExecutiveArtifact;
    riskRegisterArtifact: ExecutiveArtifact;
    implementationPlanArtifact: ExecutiveArtifact;
    budgetProposalArtifact: ExecutiveArtifact;
    architectureReviewArtifact: ExecutiveArtifact;
    executionTasks: ExecutionTicket[];
    verificationPlanDays: number;
    expectedROIUSD: number;
    overallConfidencePct: number;
}

export class DeliverableCompiler {
    static compileMissionOutput(pkg: CanonicalDecisionPackage, tickets: ExecutionTicket[]): MissionOutput {
        const artifacts = ArtifactCompiler.compileFullPackageDeliverables(pkg);
        const presentation = PresentationCompiler.compilePresentation(pkg, 'BoardDeck');

        const roadmap = artifacts.find(a => a.deliverableType === 'ImplementationRoadmap') || artifacts[0];
        const riskReg = artifacts.find(a => a.deliverableType === 'RiskRegister') || artifacts[0];
        const implPlan = artifacts.find(a => a.deliverableType === 'ExecutiveMemo') || artifacts[0];
        const budget = artifacts.find(a => a.deliverableType === 'BudgetProposal') || artifacts[0];
        const archRev = artifacts.find(a => a.deliverableType === 'ArchitectureReview') || artifacts[0];

        return {
            decisionPackage: pkg,
            executiveSummary: pkg.summary,
            boardDeck: presentation,
            roadmapArtifact: roadmap,
            riskRegisterArtifact: riskReg,
            implementationPlanArtifact: implPlan,
            budgetProposalArtifact: budget,
            architectureReviewArtifact: archRev,
            executionTasks: tickets,
            verificationPlanDays: pkg.verificationScheduleDays,
            expectedROIUSD: pkg.expectedOutcomeUSD,
            overallConfidencePct: pkg.overallConfidencePct
        };
    }
}
