import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Free Junk Removal Quote Edmonton | No Obligation Estimate',
  description:
    "Get a free, no-obligation junk removal quote in Edmonton & area. Tell us what you need hauled away and we'll give you an honest price — usually within a few hours. Call or text (587) 991-4620 or fill out our online form.",
  alternates: { canonical: 'https://jeffsjunkremoval.ca/free-quote/' },
};

const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';

export default function FreeQuotePage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tell us what you need hauled away and we&apos;ll give you a fair, no-obligation price.
            Most quotes are returned within a few hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form — takes 2/3 on desktop */}
            <div className="lg:col-span-2">
              <QuoteForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick call option */}
              <div className="bg-accent/10 rounded-xl p-6 text-center">
                <h3 className="text-lg font-bold text-navy mb-2">Want a Faster Quote?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Call or text us directly and we can often give you a price right away.
                </p>
                <a href={`tel:${PHONE}`} className="btn-primary w-full">
                  Call or Text {PHONE_DISPLAY}
                </a>
              </div>

              {/* What to expect */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <span className="text-gray-600 text-sm">Submit your request with details and an optional photo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <span className="text-gray-600 text-sm">We review and send you a fair quote — usually within a few hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <span className="text-gray-600 text-sm">If you approve, we schedule a pickup at your convenience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <span className="text-gray-600 text-sm">We show up, load everything, and haul it away. Done!</span>
                  </li>
                </ul>
              </div>

              {/* Trust signals */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-navy mb-3">Why Jeff&apos;s?</h3>
                <ul className="space-y-2">
                  {[
                    'No hidden fees — ever',
                    'Same-day service available',
                    'We do all the loading',
                    'Locally owned in Edmonton',
                    'Responsible recycling & disposal',
                    'Fully licensed',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
