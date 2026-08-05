import { AssessmentDefinition } from '../product/assessments';
import { CanonicalDecisionPackage } from '../kernel/decisionPackageSchema';
import { ExecutiveArtifact, ArtifactCompiler } from './artifactCompiler';
import { ConnectorRegistry } from '../connectors/connectorRegistry';

export interface CompiledAssessmentOutput {
    assessmentId: string;
    decisionPackage: CanonicalDecisionPackage;
    artifacts: ExecutiveArtifact[];
    collectedEvidenceCount: number;
}

export class AssessmentCompiler {
    static async compileAssessment(def: AssessmentDefinition, orgId: string = 'org_enterprise_01'): Promise<CompiledAssessmentOutput> {
        const evidenceRecords = await ConnectorRegistry.collectAllEnterpriseEvidence();

        const decisionPkg: CanonicalDecisionPackage = {
            id: `dp_compiled_${def.id}_${Date.now()}`,
            version: '1.0.0',
            questionText: def.primaryQuestion,
            organizationId: orgId,
            executiveOwnerRole: def.targetRole,
            summary: `Compiled assessment results for ${def.title}.`,
            evidenceSources: evidenceRecords.map(e => ({
                sourceId: e.evidenceId,
                sourceType: e.provider === 'AWS' ? 'AWSBilling' : e.provider === 'GitHub' ? 'GitHubTelemetry' : e.provider === 'TokenSaverMCP' ? 'TokenSaverMCP' : 'ExogramLedger',
                sampleSize: 1000,
                evidenceFreshnessTimestamp: e.timestamp,
                trustScorePct: e.confidenceScorePct
            })),
            rootCauseChain: [
                'Un-cached document context rot in developer LLM workflows',
                'Un-arbitrated frontier API usage without local edge routing'
            ],
            keyAssumptions: [
                'Developer adoption will exceed 80%',
                'Edge node hardware investment capped at $40,000'
            ],
            scenarios: [
                {
                    scenarioId: 'scn_comp_01',
                    title: 'Intent Router & Token Saver Rollout',
                    expectedROIUSD: 319500,
                    latencyImpactMs: 0,
                    riskScorePct: 10
                }
            ],
            recommendedActions: [
                'Deploy Token Saver MCP server across primary repositories',
                'Enforce semantic caching boundaries before API egress'
            ],
            tradeoffsAcknowledged: [
                'Initial $40k CapEx required for long-term OpEx reduction'
            ],
            executionPlanDays: 30,
            expectedOutcomeUSD: 319500,
            verificationScheduleDays: 30,
            overallConfidencePct: 94,
            createdAt: new Date().toISOString()
        };

        const artifacts = def.deliverables.map(type => ArtifactCompiler.compileArtifact(decisionPkg, type));

        return {
            assessmentId: def.id,
            decisionPackage: decisionPkg,
            artifacts,
            collectedEvidenceCount: evidenceRecords.length
        };
    }
}
