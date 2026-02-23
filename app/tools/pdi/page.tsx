import { Metadata } from 'next';
import PDITool from './content';
import ToolGate from '../../components/tool-gate';

export const metadata: Metadata = {
    title: 'Product Debt Index Calculator | Quantify Hidden Technical Debt',
    description: 'Calculate your Product Debt Index and quantify hidden technical debt in dollar terms. Free diagnostic tool from Richard Ewing, Product Economist.',
    alternates: {
        canonical: 'https://richardewing.io/tools/pdi',
    },
    openGraph: {
        title: 'Product Debt Index | Quantify Hidden Tech Debt',
        description: 'Are you building assets or just servicing liabilities? Calculate your true engineering ROI.',
        url: 'https://richardewing.io/tools/pdi',
    },
};

export default function Page() {
    return (
        <ToolGate toolName="the Product Debt Index">
            <PDITool />
        </ToolGate>
    );
}
