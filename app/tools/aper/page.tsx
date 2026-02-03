import { Metadata } from 'next';
import APERTool from './content';

export const metadata: Metadata = {
    title: 'APER Efficiency Diagnostic | Richard Ewing',
    description: 'Calculate your Algorithmic Product Engineering Ratio (Revenue Per Engineer). Are you Elite (> $600k/eng) or in the Danger Zone?',
    openGraph: {
        title: 'APER Diagnostic | Revenue Per Engineer Calculator',
        description: 'The most dangerous number in SaaS. Calculate your true workforce efficiency.',
        url: 'https://richardewing.io/tools/aper',
    },
};

export default function Page() {
    return <APERTool />;
}
