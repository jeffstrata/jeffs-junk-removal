import Hero from '@/components/Hero';
import ServicesOverview from '@/components/ServicesOverview';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import TrustSignals from '@/components/TrustSignals';
import ServiceAreas from '@/components/ServiceAreas';
import CTASection from '@/components/CTASection';
import FAQ from '@/components/FAQ';

/* FAQ structured data for Google rich results */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does junk removal cost in Edmonton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our pricing starts at $150 for a partial load and $300 for a full truck load. The exact cost depends on the volume and type of items. We always provide a free, no-obligation quote before we start — no hidden fees, ever.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day junk removal in Edmonton?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes! We offer same-day junk removal service throughout Edmonton and surrounding areas whenever possible. Call or text us at (587) 991-4620 and we'll do our best to get there the same day.",
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Edmonton and the greater Edmonton region including Sherwood Park, St. Albert, Spruce Grove, Leduc, Nisku, Beaumont, Fort Saskatchewan, and Stony Plain.',
      },
    },
    {
      '@type': 'Question',
      name: 'What items do you take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "We take almost everything — furniture, appliances, electronics, yard waste, construction debris, hot tubs, sheds, and general household junk. We also do full property cleanouts, estate cleanouts, and garage/basement cleanouts. If you're unsure, just ask!",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home for the pickup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It's preferred but not always required. If the items are accessible (e.g., at the curb, in an open garage, or in a backyard), we can often handle the pickup without you being there. Just let us know when you book.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you recycle or donate items?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. We believe in responsible disposal. Whenever possible, we donate usable items to local Edmonton charities and recycle materials like metal, wood, and electronics. We try to keep as much as possible out of the landfill.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get a free quote?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "You can call or text us at (587) 991-4620, or fill out our online quote form. Describe what you need removed and we'll get back to you with a fair price — usually within a few hours.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you remove construction debris and renovation waste?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we handle all types of construction and renovation debris including drywall, lumber, concrete, tile, flooring, and general reno waste. We work with both homeowners and contractors across Edmonton.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Hero />
      <ServicesOverview />
      <HowItWorks />
      <Pricing />
      <TrustSignals />
      <FAQ />
      <ServiceAreas />
      <CTASection />
    </>
  );
}
