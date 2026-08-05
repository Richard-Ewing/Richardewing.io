import { MissionRuntime } from './missionRuntime';
import { AssessmentCompiler } from '../compiler/assessmentCompiler';
import { ArtifactCompiler } from '../compiler/artifactCompiler';
import { PresentationCompiler } from '../compiler/presentationCompiler';
import { ExecutionConnectorRegistry } from '../connectors/executionRegistry';
import { VersionedDecisionMemory } from '../memory/versionedDecisionMemory';

export class RuntimeRegistry {
    static missionRuntime = MissionRuntime;
    static assessmentCompiler = AssessmentCompiler;
    static artifactCompiler = ArtifactCompiler;
    static presentationCompiler = PresentationCompiler;
    static executionConnectors = ExecutionConnectorRegistry;
    static memoryRuntime = VersionedDecisionMemory;
}
