import Hero from './components/sections/Hero';
import ClientOutcomes from './components/sections/ClientOutcomes';
import FourHorsemen from './components/sections/FourHorsemen';
import ToolsPreview from './components/sections/ToolsPreview';
import ExogramSection from './components/sections/ExogramSection';
import PricingPreview from './components/sections/PricingPreview';
import NewsletterSection from './components/sections/NewsletterSection';

export default function Home() {
  return (
    <main className="pt-20">
      {/* Note: Components have their own sections/containers as per spec */}
      <Hero />
      <ClientOutcomes />
      <FourHorsemen />
      <ToolsPreview />
      <ExogramSection />
      <PricingPreview />
      <NewsletterSection />
    </main>
  );
}
