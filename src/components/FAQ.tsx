'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How much does junk removal cost in Edmonton?',
    answer:
      'Our pricing starts at $150 for a partial load and $300 for a full truck load. The exact cost depends on the volume and type of items. We always provide a free, no-obligation quote before we start — no hidden fees, ever.',
  },
  {
    question: 'Do you offer same-day junk removal in Edmonton?',
    answer:
      'Yes! We offer same-day junk removal service throughout Edmonton and surrounding areas whenever possible. Call or text us at (587) 991-4620 and we\'ll do our best to get there the same day.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve Edmonton and the greater Edmonton region including Sherwood Park, St. Albert, Spruce Grove, Leduc, Nisku, Beaumont, Fort Saskatchewan, and Stony Plain.',
  },
  {
    question: 'What items do you take?',
    answer:
      'We take almost everything — furniture, appliances, electronics, yard waste, construction debris, hot tubs, sheds, and general household junk. We also do full property cleanouts, estate cleanouts, and garage/basement cleanouts. If you\'re unsure, just ask!',
  },
  {
    question: 'Do I need to be home for the pickup?',
    answer:
      'It\'s preferred but not always required. If the items are accessible (e.g., at the curb, in an open garage, or in a backyard), we can often handle the pickup without you being there. Just let us know when you book.',
  },
  {
    question: 'Do you recycle or donate items?',
    answer:
      'Absolutely. We believe in responsible disposal. Whenever possible, we donate usable items to local Edmonton charities and recycle materials like metal, wood, and electronics. We try to keep as much as possible out of the landfill.',
  },
  {
    question: 'How do I get a free quote?',
    answer:
      'You can call or text us at (587) 991-4620, or fill out our online quote form. Describe what you need removed and we\'ll get back to you with a fair price — usually within a few hours.',
  },
  {
    question: 'Do you remove construction debris and renovation waste?',
    answer:
      'Yes, we handle all types of construction and renovation debris including drywall, lumber, concrete, tile, flooring, and general reno waste. We work with both homeowners and contractors across Edmonton.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Got questions about junk removal in Edmonton? We&apos;ve got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-navy pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Export FAQ data for schema generation */
export { faqs };
