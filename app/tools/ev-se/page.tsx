import { Metadata } from 'next';
import EVSETool from './content';

export const metadata: Metadata = {
    title: 'EV-SE Valuation Engine | Richard Ewing',
    description: 'Quantify the "Certainty Premium" investors pay for. Model how execution risk destroys enterprise value and seed round dilution.',
    openGraph: {
        title: 'EV-SE Valuation Engine | Model Execution Risk',
        description: 'Calculate the cost of uncertainty in your valuation. Defend your multiple.',
        url: 'https://richardewing.io/tools/ev-se',
    },
};

export default function Page() {
    return <EVSETool />;
}
