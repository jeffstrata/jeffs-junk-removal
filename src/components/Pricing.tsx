import Link from 'next/link';

const PHONE = '5879914620';

const pricingTiers = [
  {
    label: 'Partial Load',
    price: 'From $150',
    description: 'A few items, small cleanups, single pieces of furniture',
    popular: false,
  },
  {
    label: 'Full Truck Load',
    price: 'From $300',
    description: 'Full truck and trailer loads for bigger jobs and cleanouts',
    popular: true,
  },
  {
    label: 'Custom Quote',
    price: 'Call Us',
    description: 'Large projects, demolition, estate cleanouts — we\'ll give you a fair price',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            No hidden fees, no surprises. We quote before we start and stick to it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {pricingTiers.map((tier) => (
            <div
              key={tier.label}
              className={`bg-white rounded-xl p-8 text-center relative ${
                tier.popular
                  ? 'border-2 border-accent shadow-lg scale-105'
                  : 'border border-gray-200'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST COMMON
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-600 mb-2">{tier.label}</h3>
              <p className="text-3xl font-bold text-navy mb-3">{tier.price}</p>
              <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
              <a href={`tel:${PHONE}`} className="btn-primary w-full text-base py-2">
                Call for Quote
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-500">
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
