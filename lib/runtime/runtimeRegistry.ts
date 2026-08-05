import { MissionRuntime } from './missionRuntime';
import { AssessmentCompiler } from '../compiler/assessmentCompiler';
import { ArtifactCompiler } from '../compiler/artifactCompiler';
import { PresentationCompiler } from '../compiler/presentationCompiler';
import { DeliverableCompiler } from '../compiler/deliverableCompiler';
import { ExecutionConnectorRegistry } from '../connectors/executionRegistry';
import { ExecutionIntelligence } from '../execution/executionIntelligence';
import { VersionedDecisionMemory } from '../memory/versionedDecisionMemory';
import { CentralMissionRegistry } from '../product/missionRegistry';
import { DynamicWizardEngine } from '../wizard/dynamicWizardEngine';
import { EnterpriseRuntime } from './enterpriseRuntime';
import { KnowledgeGraphEngine } from '../graph/knowledgeGraphEngine';
import { EnterpriseTimeline } from '../timeline/enterpriseTimeline';
import { RealityEngine } from '../reality/realityEngine';
import { EnterpriseSearch } from '../search/enterpriseSearch';

export class RuntimeRegistry {
    static missionRuntime = MissionRuntime;
    static assessmentCompiler = AssessmentCompiler;
    static artifactCompiler = ArtifactCompiler;
    static presentationCompiler = PresentationCompiler;
    static deliverableCompiler = DeliverableCompiler;
    static executionConnectors = ExecutionConnectorRegistry;
    static executionIntelligence = ExecutionIntelligence;
    static memoryRuntime = VersionedDecisionMemory;
    static missionRegistry = CentralMissionRegistry;
    static dynamicWizardEngine = DynamicWizardEngine;
    static enterpriseRuntime = EnterpriseRuntime;
    static knowledgeGraph = KnowledgeGraphEngine;
    static timeline = EnterpriseTimeline;
    static realityEngine = RealityEngine;
    static searchEngine = EnterpriseSearch;
}
