const areas = [
  'Edmonton', 'Sherwood Park', 'St. Albert', 'Spruce Grove',
  'Leduc', 'Nisku', 'Beaumont', 'Fort Saskatchewan', 'Stony Plain',
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-narrow mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Proudly Serving Edmonton &amp; Area
        </h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
          We provide junk removal services throughout the greater Edmonton region.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((area) => (
            <span
              key={area}
              className="bg-navy-light text-gray-200 px-5 py-2.5 rounded-full text-sm font-medium border border-navy-light hover:border-accent hover:text-accent transition-colors"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
