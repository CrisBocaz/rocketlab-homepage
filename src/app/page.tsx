import { HeroSection } from '@/components/sections/HeroSection';
import { CapabilitiesSection } from '@/components/sections/CapabilitiesSection';
import { CaseStudySection } from '@/components/sections/CaseStudySection';
import { MetricsSection } from '@/components/sections/MetricsSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-black">
      <HeroSection />
      <CapabilitiesSection />
      <CaseStudySection />
      <MetricsSection />
      <ProcessSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
