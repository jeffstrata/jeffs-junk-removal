const signals = [
  {
    title: 'Locally Owned',
    description: 'We live and work right here in Edmonton. This is our community.',
    stat: '100%',
    statLabel: 'Local',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: 'Same-Day Service',
    description: 'Need it gone today? We\'ll do our best to get there same day.',
    stat: 'Fast',
    statLabel: 'Response',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'We Do The Loading',
    description: 'Just point at what needs to go. We handle all the heavy lifting.',
    stat: 'Zero',
    statLabel: 'Effort',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Eco-Friendly',
    description: 'We recycle and donate whenever possible. Responsible disposal first.',
    stat: 'Green',
    statLabel: 'Disposal',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function TrustSignals() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-accent/[0.03] to-transparent" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-label">Why Us</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Why Choose Jeff&apos;s?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal) => (
            <div key={signal.title} className="bg-white rounded-2xl p-6 premium-card border border-gray-100 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-accent/10 group-hover:bg-accent/20 text-accent rounded-xl flex items-center justify-center transition-colors">
                  {signal.icon}
                </div>
                <div>
                  <div className="text-xl font-black text-navy">{signal.stat}</div>
                  <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">{signal.statLabel}</div>
                </div>
              </div>
              <h3 className="text-base font-bold text-navy mb-1">{signal.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{signal.description}</p>
            </div>
          ))}
        </div>

        {/* Google Reviews placeholder */}
        <div className="mt-16 bg-white rounded-2xl p-10 text-center border border-gray-100 shadow-sm">
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h3 className="text-xl font-bold text-navy mb-1">What Our Customers Say</h3>
          <p className="text-gray-500 text-sm">Google Reviews coming soon!</p>
        </div>
      </div>
    </section>
  );
}
