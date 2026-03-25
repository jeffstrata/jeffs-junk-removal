const areas = [
  { name: 'Edmonton', primary: true },
  { name: 'Sherwood Park', primary: false },
  { name: 'St. Albert', primary: false },
  { name: 'Spruce Grove', primary: false },
  { name: 'Leduc', primary: false },
  { name: 'Nisku', primary: false },
  { name: 'Beaumont', primary: false },
  { name: 'Fort Saskatchewan', primary: false },
  { name: 'Stony Plain', primary: false },
];

export default function ServiceAreas() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.03] to-transparent" />

      <div className="container-narrow mx-auto text-center relative z-10">
        <span className="section-label">Coverage Area</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight">
          Proudly Serving Edmonton &amp; Area
        </h2>
        <p className="text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
          We provide junk removal services throughout the greater Edmonton region.
        </p>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {areas.map((area) => (
            <span
              key={area.name}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 cursor-default ${
                area.primary
                  ? 'bg-accent text-white shadow-lg shadow-accent/25'
                  : 'bg-white text-navy border border-gray-200 hover:border-accent hover:text-accent premium-card'
              }`}
            >
              {area.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
