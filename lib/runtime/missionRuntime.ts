import { ExecutiveMissionDefinition } from '../product/missions';
import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';
import { AssessmentCompiler } from '../compiler/assessmentCompiler';
import { ExecutiveArtifact } from '../compiler/artifactCompiler';
import { ExecutionConnectorRegistry, ExecutionTicket } from '../connectors/executionRegistry';
import { PresentationCompiler, CompiledPresentation } from '../compiler/presentationCompiler';
import { VersionedDecisionMemory } from '../memory/versionedDecisionMemory';
import { PRODUCT_ASSESSMENT_CATALOG } from '../product/assessments';

export interface ExecutedMissionOutput {
    missionId: string;
    title: string;
    decisionPackage: CanonicalDecisionPackage;
    executionTickets: ExecutionTicket[];
    presentationDeck: CompiledPresentation;
    artifacts: ExecutiveArtifact[];
    versionRecordId: string;
}

export class MissionRuntime {
    static async executeMission(missionDef: ExecutiveMissionDefinition, orgId: string = 'org_enterprise_01'): Promise<ExecutedMissionOutput> {
        const assessmentDef = PRODUCT_ASSESSMENT_CATALOG.find(a => a.id === missionDef.underlyingAssessmentId) || PRODUCT_ASSESSMENT_CATALOG[0];

        const compiledAssessment = await AssessmentCompiler.compileAssessment(assessmentDef, orgId);
        const decisionPackage = compiledAssessment.decisionPackage;

        if (missionDef.executionSteps && missionDef.executionSteps.length > 0) {
            decisionPackage.recommendedActions = missionDef.executionSteps;
        }
        if (missionDef.commercialGoalUSD > 0) {
            decisionPackage.expectedOutcomeUSD = missionDef.commercialGoalUSD;
        }

        const executionTickets = await ExecutionConnectorRegistry.executeDecisionPackageActions(decisionPackage.recommendedActions);

        const presentationDeck = PresentationCompiler.compilePresentation(decisionPackage, 'BoardDeck');

        const memoryRecord = VersionedDecisionMemory.logDecisionVersion(decisionPackage, 'v1.0-Proposal', [
            `Mission executed: ${missionDef.title}`,
            `Staged ${executionTickets.length} execution tickets across enterprise systems.`
        ]);

        return {
            missionId: missionDef.id,
            title: missionDef.title,
            decisionPackage,
            executionTickets,
            presentationDeck,
            artifacts: compiledAssessment.artifacts,
            versionRecordId: memoryRecord.versionId
        };
    }
}
