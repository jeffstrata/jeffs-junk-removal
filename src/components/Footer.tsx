import Link from 'next/link';

const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';
const EMAIL = 'jeffkiers@outlook.com';

const serviceAreas = [
  'Edmonton', 'Sherwood Park', 'St. Albert', 'Spruce Grove',
  'Leduc', 'Nisku', 'Beaumont', 'Fort Saskatchewan', 'Stony Plain',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="container-narrow mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & Contact */}
          <div>
            <img
              src="/logo.png"
              alt="Jeff's Junk Removal"
              className="h-16 w-auto mb-2 drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            />
            <p className="text-sm mb-4">
              Edmonton&apos;s trusted local junk removal service. Fast, affordable, and reliable.
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-accent hover:text-accent-light font-bold text-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-gray-400 hover:text-accent text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services/" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="/about/" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/contact/" className="hover:text-accent transition-colors">Contact</Link></li>
              <li><Link href="/free-quote/" className="hover:text-accent transition-colors">Get a Free Quote</Link></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-bold text-lg mb-4">Service Areas</h4>
            <ul className="grid grid-cols-2 gap-1 text-sm">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} Jeff&apos;s Junk Removal. All rights reserved. Edmonton, Alberta.</p>
        </div>
      </div>
    </footer>
  );
}
