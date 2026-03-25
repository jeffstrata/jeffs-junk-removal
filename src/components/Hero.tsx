import Link from 'next/link';

const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden noise-overlay">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.07]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            rgba(244, 121, 32, 0.3) 40px,
            rgba(244, 121, 32, 0.3) 42px
          )`,
        }} />
      </div>

      {/* Glowing orb accent */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute -top-20 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[80px]" />

      <div className="container-narrow mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 border border-white/10 animate-fade-in">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Edmonton&apos;s Local Junk Removal Crew
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight animate-fade-up">
            Your Junk.{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">Gone Today.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300/90 mb-10 max-w-xl leading-relaxed animate-fade-up" style={{ animationDelay: '0.15s' }}>
            Fast, affordable junk removal across Edmonton and surrounding areas.
            We do all the heavy lifting — you just point.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href={`tel:${PHONE}`} className="group inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold text-xl py-5 px-12 rounded-xl transition-all duration-300 shadow-2xl shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1">
              <svg className="w-6 h-6 mr-3 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call or Text {PHONE_DISPLAY}
            </a>
            <Link href="/free-quote/" className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white hover:text-navy font-bold text-xl py-5 px-12 rounded-xl transition-all duration-300 backdrop-blur-sm hover:-translate-y-1">
              Get a Free Quote
            </Link>
          </div>

          {/* Trust row — styled as glass pills */}
          <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            {['Same-Day Service', 'No Hidden Fees', 'We Do The Loading', 'Fully Licensed'].map((item) => (
              <span key={item} className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-200 px-4 py-2 rounded-full text-sm font-medium">
                <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Angled bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-white" style={{
        clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
      }} />
    </section>
  );
}
