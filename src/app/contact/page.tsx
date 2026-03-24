import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | Edmonton Junk Removal - Call or Text (587) 991-4620',
  description:
    "Contact Jeff's Junk Removal in Edmonton for fast, affordable junk hauling. Call or text (587) 991-4620 for a free quote. Same-day service. Serving Edmonton, Sherwood Park, St. Albert, Spruce Grove & surrounding areas.",
  alternates: { canonical: 'https://jeffsjunkremoval.ca/contact/' },
};

const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';
const EMAIL = 'jeffkiers@outlook.com';

const serviceAreas = [
  'Edmonton', 'Sherwood Park', 'St. Albert', 'Spruce Grove',
  'Leduc', 'Nisku', 'Beaumont', 'Fort Saskatchewan', 'Stony Plain',
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to get rid of your junk? Give us a call, send a text, or fill out the form below.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Get In Touch</h2>

              {/* Phone — massive and prominent */}
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-4 bg-accent/10 rounded-xl p-6 mb-6 hover:bg-accent/20 transition-colors group"
              >
                <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Call or Text</p>
                  <p className="text-2xl md:text-3xl font-bold text-accent group-hover:text-accent-dark">
                    {PHONE_DISPLAY}
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 bg-gray-50 rounded-xl p-6 mb-6 hover:bg-gray-100 transition-colors"
              >
                <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-lg font-semibold text-navy">{EMAIL}</p>
                </div>
              </a>

              {/* Hours */}
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-navy text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 font-medium">Availability</p>
                    <p className="text-lg font-semibold text-navy">Open 7 Days a Week</p>
                    <p className="text-gray-600 text-sm">Call or text anytime to book</p>
                  </div>
                </div>
              </div>

              {/* Service areas */}
              <div>
                <h3 className="text-lg font-bold text-navy mb-3">Service Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
