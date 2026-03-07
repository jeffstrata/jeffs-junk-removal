import Link from 'next/link';

const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';

export default function CTASection() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Get Rid of Your Junk?
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Call or text us now for a free, no-obligation quote. Same-day service available.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center justify-center bg-white text-accent hover:bg-gray-100 font-bold py-4 px-10 rounded-lg transition-colors text-xl"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call or Text {PHONE_DISPLAY}
          </a>
          <Link
            href="/free-quote/"
            className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-accent font-bold py-4 px-10 rounded-lg transition-colors text-xl"
          >
            Get a Free Quote Online
          </Link>
        </div>
      </div>
    </section>
  );
}
