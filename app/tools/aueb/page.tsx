import { Metadata } from 'next';
import AUEBTool from './content';
import ToolGate from '../../components/tool-gate';

export const metadata: Metadata = {
    title: 'AI Unit Economics Benchmark | Calculate Your AI Collapse Point',
    description: 'Model your AI feature economics and find your collapse point — the moment AI costs exceed value generated. Free tool from Richard Ewing.',
    alternates: {
        canonical: 'https://richardewing.io/tools/aueb',
    },
    openGraph: {
        title: 'AI Unit Economics Benchmark | Protect Your Margins',
        description: 'Don\'t let the API bills kill your company. Model your AI feature costs before you ship.',
        url: 'https://richardewing.io/tools/aueb',
    },
};

export default function Page() {
    return (
        <ToolGate toolName="the AI Unit Economics Benchmark">
            <AUEBTool />
        </ToolGate>
    );
}
