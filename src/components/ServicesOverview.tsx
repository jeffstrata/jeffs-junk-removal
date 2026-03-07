import Link from 'next/link';

const services = [
  {
    title: 'Junk Removal',
    description: 'General junk and clutter removal from homes, offices, and job sites.',
    icon: '🗑️',
  },
  {
    title: 'Furniture Removal',
    description: 'Old couches, mattresses, desks, dressers — we haul it all.',
    icon: '🛋️',
  },
  {
    title: 'Appliance Removal',
    description: 'Fridges, stoves, washers, dryers, and more. We handle the heavy stuff.',
    icon: '🏠',
  },
  {
    title: 'Garage & Basement Cleanouts',
    description: 'Full cleanouts for garages, basements, and storage areas.',
    icon: '🏗️',
  },
  {
    title: 'Estate Cleanouts',
    description: 'Compassionate and thorough property cleanouts for estates and downsizing.',
    icon: '🏡',
  },
  {
    title: 'Yard Waste Removal',
    description: 'Branches, leaves, soil, and yard debris cleared quickly.',
    icon: '🌿',
  },
  {
    title: 'Construction Debris',
    description: 'Post-renovation and construction cleanup for contractors and homeowners.',
    icon: '🔨',
  },
  {
    title: 'Hot Tub & Deck Removal',
    description: 'We dismantle and remove hot tubs, decks, sheds, and more.',
    icon: '♨️',
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            What We Haul Away
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From a single item to a full property cleanout — no job is too big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-100 rounded-xl p-6 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-3 block" role="img" aria-label={service.title}>
                {service.icon}
              </span>
              <h3 className="text-lg font-bold text-navy mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services/" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
