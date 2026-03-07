import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import TrustSignals from '@/components/TrustSignals';
import ServiceAreas from '@/components/ServiceAreas';
import CTASection from '@/components/CTASection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <Pricing />
      <TrustSignals />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
