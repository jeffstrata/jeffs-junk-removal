import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffsjunkremoval.ca'),
  title: {
    default: "Jeff's Junk Removal | Edmonton's Fast & Affordable Junk Hauling",
    template: "%s | Jeff's Junk Removal Edmonton",
  },
  description:
    "Edmonton's trusted junk removal service. Fast, affordable junk hauling for homes and businesses. Same-day service available. Serving Edmonton, Sherwood Park, St. Albert & area. Call (587) 991-4620.",
  keywords: [
    'junk removal Edmonton',
    'junk hauling Edmonton',
    'furniture removal Edmonton',
    'appliance removal Edmonton',
    'garbage removal Edmonton',
    'estate cleanout Edmonton',
    'Sherwood Park junk removal',
    'St Albert junk removal',
    'Spruce Grove junk removal',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://jeffsjunkremoval.ca',
    siteName: "Jeff's Junk Removal",
    title: "Jeff's Junk Removal | Edmonton's Fast & Affordable Junk Hauling",
    description:
      "Edmonton's trusted junk removal service. Fast, affordable junk hauling. Same-day service available. Call or text (587) 991-4620.",
    images: [
      {
        url: 'https://jeffsjunkremoval.ca/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Jeff's Junk Removal - Edmonton Junk Hauling Service",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jeff's Junk Removal | Edmonton's Fast & Affordable Junk Hauling",
    description:
      "Edmonton's trusted junk removal service. Fast, affordable junk hauling. Same-day service available. Call or text (587) 991-4620.",
    images: ['https://jeffsjunkremoval.ca/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://jeffsjunkremoval.ca',
  },
};

/* LocalBusiness structured data for SEO */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: "Jeff's Junk Removal",
  description:
    "Edmonton's trusted junk removal service. Fast, affordable junk hauling for homes and businesses.",
  url: 'https://jeffsjunkremoval.ca',
  telephone: '+15879914620',
  email: 'jeffkiers@outlook.com',
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
  serviceType: [
    'Junk Removal',
    'Furniture Removal',
    'Appliance Removal',
    'Estate Cleanouts',
    'Construction Debris Removal',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
