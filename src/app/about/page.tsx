import type { Metadata } from 'next';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'About Us - Locally Owned Junk Removal',
  description:
    "Jeff's Junk Removal is a locally owned and operated junk removal service in Edmonton, Alberta. Fast, reliable, and affordable. Learn more about our story.",
  alternates: { canonical: 'https://jeffsjunkremoval.ca/about/' },
};

const values = [
  {
    title: 'Reliability',
    description: 'When we say we\'ll be there, we show up. On time, every time.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Speed',
    description: 'Same-day service when possible. We don\'t keep you waiting.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Fair Pricing',
    description: 'Honest quotes with no hidden fees. You know exactly what you\'re paying.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Responsible Disposal',
    description: 'We recycle and donate wherever possible. We care about our community and environment.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Jeff&apos;s Junk Removal
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Locally owned, hard-working, and committed to keeping Edmonton clean.
          </p>
        </div>
      </section>

      {/* Story section */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-6">Our Story</h2>

            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Jeff&apos;s Junk Removal started with a simple idea: people in Edmonton need a
                reliable, affordable way to get rid of their junk — without the hassle of renting
                dumpsters, making multiple dump runs, or waiting weeks for someone to show up.
              </p>
              <p>
                We&apos;re a locally owned and operated business right here in Edmonton. Armed with
                a truck and an enclosed trailer, we handle everything from single-item pickups to
                full property cleanouts. We do all the heavy lifting so you don&apos;t have to.
              </p>
              <p>
                What sets us apart is simple: we show up when we say we will, we work hard and
                fast, and we charge a fair price. No corporate overhead, no franchise fees — just
                honest work at honest prices.
              </p>
              <p>
                We also believe in responsible disposal. Whenever possible, we recycle materials
                and donate usable items to local charities. Your junk doesn&apos;t have to end up
                in a landfill if there&apos;s a better option.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow mx-auto">
          <h2 className="text-3xl font-bold text-navy mb-10 text-center">What We Stand For</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 text-accent rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Our Equipment</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            We come prepared with a truck and enclosed trailer to handle jobs of all sizes.
            From a few boxes to a full estate cleanout — we have the capacity to get it done
            in fewer trips, saving you time and money.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-2">🚛</div>
              <h3 className="font-bold text-navy">Heavy-Duty Truck</h3>
              <p className="text-gray-500 text-sm">For large items and heavy loads</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-2">📦</div>
              <h3 className="font-bold text-navy">Enclosed Trailer</h3>
              <p className="text-gray-500 text-sm">Extra capacity for big jobs</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="text-3xl mb-2">💪</div>
              <h3 className="font-bold text-navy">We Do The Loading</h3>
              <p className="text-gray-500 text-sm">You point, we lift and load</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
