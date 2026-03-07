import type { Metadata } from 'next';
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export const metadata: Metadata = {
  title: 'Junk Removal Services in Edmonton',
  description:
    'Full-service junk removal in Edmonton. Furniture, appliances, garage cleanouts, estate cleanouts, construction debris, hot tub removal & more. Call (587) 991-4620.',
  alternates: { canonical: 'https://jeffsjunkremoval.ca/services/' },
};

const services: { title: string; slug: string; image?: string; description: string; items: string[] }[] = [
  {
    title: 'Junk Removal',
    slug: 'junk-removal',
    image: '/images/junk-removal.jpg',
    description:
      'General junk and clutter removal from homes, offices, and job sites. Whether it\'s a pile in the garage or a room full of stuff you need gone, we\'ll take care of it quickly and affordably.',
    items: ['Household clutter', 'Old boxes & storage', 'Office cleanups', 'Miscellaneous items'],
  },
  {
    title: 'Furniture Removal',
    slug: 'furniture-removal',
    image: '/images/furniture.jpg',
    description:
      'Got an old couch, mattress, or dining set that needs to go? We\'ll haul away any furniture — no matter the size or weight. We do all the heavy lifting so you don\'t have to.',
    items: ['Couches & sofas', 'Mattresses & bed frames', 'Tables & chairs', 'Desks & dressers', 'Shelving & cabinets'],
  },
  {
    title: 'Appliance Removal',
    slug: 'appliance-removal',
    image: '/images/appliances.jpg',
    description:
      'Fridges, stoves, washers, dryers, dishwashers, and more. We safely disconnect (non-gas) and remove old appliances. Responsible recycling when possible.',
    items: ['Refrigerators & freezers', 'Stoves & ovens', 'Washers & dryers', 'Dishwashers', 'Water heaters', 'AC units'],
  },
  {
    title: 'Garage Cleanouts',
    slug: 'garage-cleanouts',
    image: '/images/garage-cleanouts.jpg',
    description:
      'Reclaim your garage space. We\'ll clear out years of accumulated stuff and leave you with a clean, usable space. Fast and thorough — usually done in a single visit.',
    items: ['Complete garage clearing', 'Tool & equipment disposal', 'Storage unit cleanouts', 'Workshop cleanups'],
  },
  {
    title: 'Basement Cleanouts',
    slug: 'basement-cleanouts',
    image: '/images/basement.jpg',
    description:
      'Basements tend to become dumping grounds. We\'ll haul away everything from old furniture to boxes of stuff you forgot you had. Get your basement back.',
    items: ['Full basement clearing', 'Flood damage cleanup', 'Storage cleanout', 'Old carpet & flooring removal'],
  },
  {
    title: 'Estate Cleanouts',
    slug: 'estate-cleanouts',
    image: '/images/estate.jpg',
    description:
      'Compassionate and thorough cleanout services for estates, downsizing, and property transitions. We work efficiently and respectfully to clear entire properties.',
    items: ['Full property cleanouts', 'Downsizing assistance', 'Hoarder cleanups', 'Post-move cleanup'],
  },
  {
    title: 'Yard Waste Removal',
    slug: 'yard-waste-removal',
    image: '/images/yard-waste.jpg',
    description:
      'Branches, leaves, soil, sod, and yard debris cleared fast. Perfect after a landscaping project or seasonal cleanup.',
    items: ['Branches & tree limbs', 'Leaves & grass clippings', 'Soil & sod', 'Garden waste', 'Landscaping debris'],
  },
  {
    title: 'Construction Debris Removal',
    slug: 'construction-debris',
    image: '/images/construction-debris.jpg',
    description:
      'Post-renovation and construction site cleanup. We handle drywall, lumber, concrete, tile, and all types of construction waste. Great for contractors and homeowners.',
    items: ['Drywall & plaster', 'Lumber & wood', 'Concrete & brick', 'Tile & flooring', 'General reno waste'],
  },
  {
    title: 'Hot Tub Removal',
    slug: 'hot-tub-removal',
    image: '/images/hot-tub.jpg',
    description:
      'We dismantle and remove hot tubs of all sizes. Our crew breaks them down on-site and hauls everything away. No hot tub is too big or too old.',
    items: ['Complete dismantling', 'Hauling & disposal', 'Site cleanup after removal'],
  },
  {
    title: 'Property Cleanouts',
    slug: 'property-cleanouts',
    image: '/images/property-cleanouts.jpg',
    description:
      'Full property cleanouts for landlords, property managers, and real estate agents. We clear out everything so the property is ready for new tenants or sale.',
    items: ['Rental property cleanouts', 'Pre-sale property prep', 'Foreclosure cleanouts', 'Abandoned property clearing'],
  },
  {
    title: 'Tenant Move-Out Cleanup',
    slug: 'tenant-cleanup',
    image: '/images/tenant-cleanup.jpg',
    description:
      'Tenants left stuff behind? We\'ll clear out all abandoned items and debris so your rental is ready to show. Fast turnaround for landlords and property managers.',
    items: ['Abandoned furniture removal', 'Trash & debris clearing', 'Full unit cleanout', 'Quick turnaround available'],
  },
  {
    title: 'Deck & Shed Removal',
    slug: 'deck-shed-removal',
    image: '/images/deck-shed.jpg',
    description:
      'We tear down and haul away old decks, sheds, playsets, and other outdoor structures. Complete demolition and removal — we leave your yard clean.',
    items: ['Deck demolition & removal', 'Shed teardown & hauling', 'Playset & swing set removal', 'Fence removal'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-navy section-padding">
        <div className="container-narrow mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Junk Removal Services in Edmonton
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            From a single item pickup to a full property cleanout — we handle it all.
            Fast, affordable, and always hassle-free.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.slug}
                id={service.slug}
                className={`flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Service image */}
                <div className="w-full md:w-1/3 flex-shrink-0">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-square object-cover rounded-xl shadow-md"
                    />
                  ) : (
                    <div className="bg-gray-50 rounded-xl p-8 text-center aspect-square flex items-center justify-center">
                      <div>
                        <div className="text-5xl mb-2 text-navy font-bold">{service.title.charAt(0)}</div>
                        <p className="text-gray-400 text-sm">{service.title}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-lg">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-gray-600">
                        <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/free-quote/" className="btn-primary text-base py-2 px-6">
                    Get a Free Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
