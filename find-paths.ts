import { SPOKE_MATRIX } from './app/lib/spoke-data';

const targets = ['dependency-hell', 'software-entropy', 'code-smell-engineering-manager', 'incident-management-cost', 'integration-risk', 'calculating-roai'];

SPOKE_MATRIX.forEach((topic: any) => {
    Object.keys(topic.personas).forEach((persona: string) => {
        topic.personas[persona].forEach((q: any) => {
            if (targets.includes(q.questionSlug)) {
                console.log(`/answers/${topic.topicSlug}/${persona}/${q.questionSlug}`);
            }
        });
    });
});
