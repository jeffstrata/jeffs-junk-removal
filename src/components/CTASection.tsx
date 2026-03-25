import Link from 'next/link';

const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent to-accent-dark" />

      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: `repeating-linear-gradient(
          45deg,
          transparent,
          transparent 40px,
          rgba(255,255,255,0.3) 40px,
          rgba(255,255,255,0.3) 42px
        )`,
      }} />

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/10 rounded-full blur-[120px]" />

      <div className="container-narrow mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
          Ready to Get Rid of <br className="hidden sm:block" />Your Junk?
        </h2>
        <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
          Call or text us now for a free, no-obligation quote. Same-day service available.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${PHONE}`}
            className="group inline-flex items-center justify-center bg-white text-accent hover:bg-gray-50 font-bold py-5 px-12 rounded-xl transition-all duration-300 text-xl shadow-2xl hover:-translate-y-1"
          >
            <svg className="w-6 h-6 mr-3 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call or Text {PHONE_DISPLAY}
          </a>
          <Link
            href="/free-quote/"
            className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:bg-white hover:text-accent font-bold py-5 px-12 rounded-xl transition-all duration-300 text-xl hover:-translate-y-1"
          >
            Get a Free Quote Online
          </Link>
        </div>
      </div>
    </section>
  );
}
