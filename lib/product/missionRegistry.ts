import { HOMEPAGE_CONTRACT_MATRIX, HomepagePromise } from './homepageContract';
import { EXECUTIVE_MISSION_CATALOG, ExecutiveMissionDefinition } from './missions';

export class CentralMissionRegistry {
    static getHomepagePromises(): HomepagePromise[] {
        return HOMEPAGE_CONTRACT_MATRIX;
    }

    static findPromiseByMissionId(missionId: string): HomepagePromise | undefined {
        return HOMEPAGE_CONTRACT_MATRIX.find(p => p.missionId === missionId || p.id === missionId);
    }

    static findMissionDefinition(missionId: string): ExecutiveMissionDefinition | undefined {
        return EXECUTIVE_MISSION_CATALOG.find(m => m.id === missionId);
    }

    static validateHomepageCoverage(): boolean {
        return HOMEPAGE_CONTRACT_MATRIX.every(p => !!this.findMissionDefinition(p.missionId));
    }
}
