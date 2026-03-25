import Link from 'next/link';

const services = [
  {
    title: 'Junk Removal',
    slug: 'junk-removal',
    description: 'General junk and clutter removal from homes, offices, and job sites.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
  },
  {
    title: 'Furniture Removal',
    slug: 'furniture-removal',
    description: 'Old couches, mattresses, desks, dressers — we haul it all.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Appliance Removal',
    slug: 'appliance-removal',
    description: 'Fridges, stoves, washers, dryers, and more. We handle the heavy stuff.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Garage & Basement',
    slug: 'garage-cleanouts',
    description: 'Full cleanouts for garages, basements, and storage areas.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Estate Cleanouts',
    slug: 'estate-cleanouts',
    description: 'Compassionate and thorough property cleanouts for estates and downsizing.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Yard Waste',
    slug: 'yard-waste-removal',
    description: 'Branches, leaves, soil, and yard debris cleared quickly.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Construction Debris',
    slug: 'construction-debris',
    description: 'Post-renovation and construction cleanup for contractors and homeowners.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
  },
  {
    title: 'Hot Tub & Deck',
    slug: 'hot-tub-removal',
    description: 'We dismantle and remove hot tubs, decks, sheds, and more.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 px-4 relative bg-white">
      <div className="container-narrow mx-auto">
        <div className="mb-16">
          <span className="section-label">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Junk Removal Services<br className="hidden sm:block" /> in Edmonton
          </h2>
          <p className="text-gray-500 text-lg max-w-xl">
            From a single item to a full property cleanout — no job is too big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/#${service.slug}`}
              className="group relative bg-white rounded-2xl p-6 premium-card accent-border-card border border-gray-100 block"
            >
              <div className="w-12 h-12 bg-navy/5 group-hover:bg-accent/10 text-navy group-hover:text-accent rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-navy mb-1 group-hover:text-accent transition-colors">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              <div className="mt-3 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                Learn more
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/services/" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
