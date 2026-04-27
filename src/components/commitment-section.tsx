type ValueCard = {
  description: string;
  title: string;
  icon: 'quality' | 'integrity' | 'service';
};

const valueCards: ValueCard[] = [
  {
    title: 'Quality',
    description:
      'Uncompromising standards in operations, product planning, and company execution to support dependable healthcare outcomes.',
    icon: 'quality',
  },
  {
    title: 'Integrity',
    description:
      'Transparent business practices, responsible leadership, and a long-term commitment to trust, compliance, and accountability.',
    icon: 'integrity',
  },
  {
    title: 'Service',
    description:
      'A practical, patient-aware mindset that supports healthcare professionals, channel partners, and business stakeholders alike.',
    icon: 'service',
  },
];

function QualityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <circle cx="12" cy="8.5" r="4.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="m10.3 8.6 1.1 1.2 2.4-2.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9.1 12.1 7.5 19l4.5-2.5 4.5 2.5-1.6-6.9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IntegrityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M12 4v15" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M7 7h10" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M8.1 7 5.6 11a.8.8 0 0 0 .7 1.2h3.4a.8.8 0 0 0 .7-1.2L8.1 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="m15.9 7-2.5 4a.8.8 0 0 0 .7 1.2h3.4a.8.8 0 0 0 .7-1.2l-2.3-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 19h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function ServiceIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M6 13.3v-1.1a6 6 0 0 1 12 0v1.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="5" y="12.8" width="3.2" height="5.2" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
      <rect x="15.8" y="12.8" width="3.2" height="5.2" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M17.4 18a2.5 2.5 0 0 1-2.5 2.5h-2.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <rect x="10.4" y="18.9" width="3.4" height="2.2" rx="1.1" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function ValueIcon({ icon, className }: Pick<ValueCard, 'icon'> & { className?: string }) {
  if (icon === 'quality') {
    return <QualityIcon className={className} />;
  }

  if (icon === 'integrity') {
    return <IntegrityIcon className={className} />;
  }

  return <ServiceIcon className={className} />;
}

export function CommitmentSection() {
  return (
    <section className="border-b border-outline-variant/30 bg-surface-container-low pt-xl pb-10 md:pb-[7rem]">
      <div className="section-shell">
        <div className="mx-auto mb-lg max-w-3xl text-center">
          <h2 className="font-h2 text-h2 text-primary">Our Core Values</h2>
        </div>

        <div className="mx-auto grid max-w-[74rem] grid-cols-1 gap-8 md:grid-cols-3 md:gap-7 lg:gap-8">
          {valueCards.map((value, index) => (
            <article
              key={value.title}
              className={`group relative mx-auto flex h-full w-full max-w-[22.75rem] flex-col items-center overflow-hidden rounded-[28px] border border-[#CFE0F6] bg-gradient-to-tl from-[#EEF4FC] via-[#F8FBFF] to-white px-7 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary md:px-7 md:py-9 lg:px-8 lg:py-10 reveal-soft ${
                index === 0 ? '' : index === 1 ? 'reveal-delay-1' : 'reveal-delay-2'
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-[6px] bg-gradient-to-r from-[#8ECD6B] via-[#47B4A1] to-[#2B78B6]" />
              <div className="mb-5 flex h-[82px] w-[82px] items-center justify-center rounded-full border border-[#DDE8F7] bg-[#F7FAFE] text-primary md:mb-6 md:h-[86px] md:w-[86px]">
                <ValueIcon icon={value.icon} className="h-10 w-10" />
              </div>
              <h3 className="mb-3 font-h3 text-h3 text-primary md:mb-4">{value.title}</h3>
              <p className="mx-auto max-w-[16.5rem] font-body-md text-[1.03rem] leading-8 text-on-surface-variant lg:max-w-[17.5rem]">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
