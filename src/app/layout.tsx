import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffsjunkremoval.ca'),
  title: {
    default: "Jeff's Junk Removal | Edmonton's Fast & Affordable Junk Removal Service",
    template: "%s | Jeff's Junk Removal Edmonton",
  },
  description:
    "Edmonton's #1 local junk removal service. Fast, affordable junk hauling for homes and businesses. Same-day service available. Furniture, appliances, garage cleanouts, estate cleanouts & more. Serving Edmonton, Sherwood Park, St. Albert, Spruce Grove & area. Call or text (587) 991-4620.",
  keywords: [
    'junk removal Edmonton',
    'junk removal near me',
    'junk hauling Edmonton',
    'furniture removal Edmonton',
    'appliance removal Edmonton',
    'garbage removal Edmonton',
    'estate cleanout Edmonton',
    'garage cleanout Edmonton',
    'basement cleanout Edmonton',
    'construction debris removal Edmonton',
    'hot tub removal Edmonton',
    'yard waste removal Edmonton',
    'property cleanout Edmonton',
    'tenant move out cleanup Edmonton',
    'deck removal Edmonton',
    'shed removal Edmonton',
    'same day junk removal Edmonton',
    'cheap junk removal Edmonton',
    'affordable junk removal Edmonton',
    'junk pickup Edmonton',
    'trash removal Edmonton',
    'rubbish removal Edmonton',
    'Sherwood Park junk removal',
    'St Albert junk removal',
    'Spruce Grove junk removal',
    'Leduc junk removal',
    'Fort Saskatchewan junk removal',
    'Beaumont junk removal',
    'Stony Plain junk removal',
    'Nisku junk removal',
    'junk removal Edmonton Alberta',
    'local junk removal Edmonton',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://jeffsjunkremoval.ca',
    siteName: "Jeff's Junk Removal",
    title: "Jeff's Junk Removal | Edmonton's Fast & Affordable Junk Removal",
    description:
      "Edmonton's trusted local junk removal service. Fast, affordable junk hauling for homes & businesses. Same-day service. Call or text (587) 991-4620.",
    images: [
      {
        url: 'https://jeffsjunkremoval.ca/og-image.png',
        width: 1200,
        height: 630,
        alt: "Jeff's Junk Removal - Fast & Affordable Junk Removal in Edmonton, Alberta",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jeff's Junk Removal | Edmonton Junk Removal Service",
    description:
      "Edmonton's trusted junk removal. Furniture, appliances, cleanouts & more. Same-day service. Call or text (587) 991-4620.",
    images: ['https://jeffsjunkremoval.ca/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jeffsjunkremoval.ca',
  },
  other: {
    'geo.region': 'CA-AB',
    'geo.placename': 'Edmonton',
    'geo.position': '53.5461;-113.4938',
    'ICBM': '53.5461, -113.4938',
  },
};

/* LocalBusiness structured data for SEO */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://jeffsjunkremoval.ca/#business',
  name: "Jeff's Junk Removal",
  description:
    "Edmonton's trusted local junk removal service. Fast, affordable junk hauling for homes and businesses. Same-day service available. Serving Edmonton, Sherwood Park, St. Albert, Spruce Grove and surrounding areas.",
  url: 'https://jeffsjunkremoval.ca',
  telephone: '+15879914620',
  email: 'jeffkiers@outlook.com',
  image: 'https://jeffsjunkremoval.ca/og-image.png',
  logo: 'https://jeffsjunkremoval.ca/logo.png',
  areaServed: [
    { '@type': 'City', name: 'Edmonton', containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' } },
    { '@type': 'City', name: 'Sherwood Park' },
    { '@type': 'City', name: 'St. Albert' },
    { '@type': 'City', name: 'Spruce Grove' },
    { '@type': 'City', name: 'Leduc' },
    { '@type': 'City', name: 'Nisku' },
    { '@type': 'City', name: 'Beaumont' },
    { '@type': 'City', name: 'Fort Saskatchewan' },
    { '@type': 'City', name: 'Stony Plain' },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Edmonton',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.5461,
    longitude: -113.4938,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:00',
      closes: '21:00',
    },
  ],
  priceRange: '$$',
  currenciesAccepted: 'CAD',
  paymentAccepted: 'Cash, E-Transfer',
  serviceType: [
    'Junk Removal',
    'Furniture Removal',
    'Appliance Removal',
    'Garage Cleanouts',
    'Basement Cleanouts',
    'Estate Cleanouts',
    'Yard Waste Removal',
    'Construction Debris Removal',
    'Hot Tub Removal',
    'Property Cleanouts',
    'Tenant Move-Out Cleanup',
    'Deck & Shed Removal',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Junk Removal Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Partial Load Junk Removal', description: 'A few items, small cleanups, single pieces of furniture' },
        priceSpecification: { '@type': 'PriceSpecification', price: '150', priceCurrency: 'CAD', minPrice: '150' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Full Truck Load Junk Removal', description: 'Full truck and trailer loads for bigger jobs and cleanouts' },
        priceSpecification: { '@type': 'PriceSpecification', price: '300', priceCurrency: 'CAD', minPrice: '300' },
      },
    ],
  },
  sameAs: [],
};

/* BreadcrumbList for site navigation */
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://jeffsjunkremoval.ca/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://jeffsjunkremoval.ca/services/' },
    { '@type': 'ListItem', position: 3, name: 'About', item: 'https://jeffsjunkremoval.ca/about/' },
    { '@type': 'ListItem', position: 4, name: 'Contact', item: 'https://jeffsjunkremoval.ca/contact/' },
    { '@type': 'ListItem', position: 5, name: 'Free Quote', item: 'https://jeffsjunkremoval.ca/free-quote/' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
