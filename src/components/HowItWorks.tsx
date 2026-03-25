const PHONE = '5879914620';
const PHONE_DISPLAY = '(587) 991-4620';

const steps = [
  {
    number: '01',
    title: 'Call or Text Us',
    description: `Reach out at ${PHONE_DISPLAY}. Tell us what you need gone and we'll give you a free, no-obligation quote.`,
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'We Show Up',
    description: 'We arrive on time with our truck and trailer, ready to work. No waiting — we respect your schedule.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'We Haul It Away',
    description: 'We do all the heavy lifting, loading, and cleanup. Your junk is gone — enjoy your clean space.',
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-accent/[0.03] to-transparent" />

      <div className="container-narrow mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="section-label">Simple Process</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy mb-4 tracking-tight">
            Three Steps. That&apos;s It.
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Getting rid of your junk has never been easier.
          </p>
        </div>

        {/* Connected timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[60px] left-[16.67%] right-[16.67%] h-[2px] bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="relative text-center">
                {/* Step circle */}
                <div className="relative inline-flex flex-col items-center">
                  <div className="w-[120px] h-[120px] rounded-full bg-white shadow-xl shadow-navy/5 flex flex-col items-center justify-center relative z-10 border-2 border-gray-100">
                    <div className="text-accent mb-1">{step.icon}</div>
                    <span className="text-[11px] font-extrabold text-navy/40 tracking-widest">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-navy mt-6 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
