import Link from 'next/link';

const PHONE = '5879914620';

const pricingTiers = [
  {
    label: 'Partial Load',
    price: '$150',
    prefix: 'From',
    description: 'A few items, small cleanups, single pieces of furniture',
    popular: false,
    features: ['1-3 items', 'Small cleanups', 'Quick pickup'],
  },
  {
    label: 'Full Truck Load',
    price: '$300',
    prefix: 'From',
    description: 'Full truck and trailer loads for bigger jobs and cleanouts',
    popular: true,
    features: ['Full truck + trailer', 'Garage & basement cleanouts', 'Same-day available'],
  },
  {
    label: 'Custom Quote',
    price: 'Contact Us',
    prefix: '',
    description: 'Large projects, demolition, estate cleanouts — we\'ll give you a fair price',
    popular: false,
    features: ['Demolition & tear-down', 'Estate cleanouts', 'Multi-load projects'],
  },
];

export default function Pricing() {
  return (
    <section className="py-20 md:py-28 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-dark" />
      <div className="absolute inset-0 noise-overlay" />

      {/* Decorative orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-label">Transparent Pricing</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Simple, Honest Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. We quote before we start and stick to it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.label}
              className={`relative rounded-2xl p-8 text-center transition-all duration-300 ${
                tier.popular
                  ? 'bg-white scale-105 shadow-2xl shadow-accent/20'
                  : 'glass-card hover:bg-white/10'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg shadow-accent/30">
                  MOST POPULAR
                </span>
              )}
              <h3 className={`text-sm font-bold tracking-wide uppercase mb-4 ${tier.popular ? 'text-accent' : 'text-accent'}`}>
                {tier.label}
              </h3>
              {tier.prefix && (
                <span className={`text-sm ${tier.popular ? 'text-gray-500' : 'text-gray-400'}`}>{tier.prefix}</span>
              )}
              <p className={`text-4xl font-black mb-2 ${tier.popular ? 'text-navy' : 'text-white'}`}>
                {tier.price}
              </p>
              <p className={`text-sm mb-6 ${tier.popular ? 'text-gray-500' : 'text-gray-400'}`}>
                {tier.description}
              </p>

              <ul className="space-y-2 mb-6 text-left">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm ${tier.popular ? 'text-gray-600' : 'text-gray-300'}`}>
                    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${PHONE}`}
                className={`w-full inline-flex items-center justify-center font-bold py-3 px-6 rounded-xl transition-all duration-300 ${
                  tier.popular
                    ? 'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/25 hover:-translate-y-0.5'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                Call or Text for Quote
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-400">
            Not sure about pricing?{' '}
            <Link href="/free-quote/" className="text-accent hover:underline font-semibold">
              Send us details for a free quote
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
