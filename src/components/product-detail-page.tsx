import Link from 'next/link';

import { ChevronRightIcon, NotesIcon, ScienceIcon } from '@/components/icons';
import { ProductImageGallery } from '@/components/product-image-gallery';
import type { ProductRecord, ProductSupportSection } from '@/content/products';

type ProductDetailPageContentProps = {
  product: ProductRecord;
};

function DetailStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 rounded-3xl border border-outline-variant/35 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
      <span className="font-label-caps text-label-caps text-outline leading-none">{label}</span>
      <span className="font-body-md text-body-md font-bold text-on-surface leading-tight mt-1">{value}</span>
    </div>
  );
}

function stripSectionNumber(title: string) {
  return title.replace(/^[IVX]+\.\s*/i, '').trim();
}

const isTrimesterContextSection = (title: string) => {
  const normalized = title.toLowerCase();
  return (
    normalized.includes('why') || 
    normalized.includes('trimester matters') || 
    normalized.includes('trimester support')
  );
};

const isComplianceSection = (title: string) => {
  const normalized = title.toLowerCase();
  return (
    normalized.includes('why choose') || 
    normalized.includes('how to take')
  );
};

function parseBullet(bullet: string) {
  const clean = bullet.replace(/^[✓•\-\s]+/, '').trim();
  const hasColon = clean.includes(':');
  
  if (hasColon) {
    const parts = clean.split(':');
    return {
      title: parts[0].trim(),
      content: parts.slice(1).join(':').trim()
    };
  }

  return {
    title: '',
    content: clean
  };
}

function SequentialSupportSections({ sections }: { sections: ProductSupportSection[] }) {
  if (sections.length === 0) return null;

  return (
    <div className="flex flex-col gap-xl border-t border-outline-variant/30 pt-lg mt-md">
      {sections.map((section, idx) => {
        const displayTitle = stripSectionNumber(section.title);
        
        // Check section type
        if (isTrimesterContextSection(section.title)) {
          // Render as a beautiful grid of context cards
          return (
            <section key={section.title} className="reveal-up flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <span className="pill-label w-fit">Trimester Insight</span>
                <h2 className="font-h2 text-3xl text-primary leading-tight font-bold tracking-tight">
                  {displayTitle}
                </h2>
              </div>
              {section.subtitle ? (
                <p className="font-body-md text-body-md text-secondary font-semibold -mt-2">
                  {section.subtitle}
                </p>
              ) : null}
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-2">
                {section.bullets.map((bullet, idx2) => {
                  const parsed = parseBullet(bullet);
                  return (
                    <div 
                      key={idx2} 
                      className="group rounded-3xl border border-outline-variant/20 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-container-high hover:shadow-[0_8px_30px_rgba(8,86,147,0.08)]"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex-none h-8 w-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-300 shadow-sm">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <div className="flex flex-col gap-1.5">
                          {parsed.title ? (
                            <h4 className="font-body-md font-bold text-primary leading-tight">{parsed.title}</h4>
                          ) : null}
                          <p className="font-body-sm text-body-sm text-on-surface-variant leading-6">
                            {parsed.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        } else if (isComplianceSection(section.title)) {
          // Render as a high-impact banner card
          const isHowToTake = displayTitle.toLowerCase().includes('how to take');
          return (
            <div 
              key={section.title}
              className="reveal-up rounded-3xl border border-primary/10 bg-primary/5 p-6 md:p-8 shadow-[var(--shadow-panel-soft)] relative overflow-hidden"
            >
              {/* Background design elements */}
              <div className="absolute right-0 bottom-0 w-32 h-32 bg-primary/10 rounded-full translate-x-12 translate-y-12 blur-2xl pointer-events-none" />
              <div className="absolute left-0 top-0 w-24 h-24 bg-secondary/10 rounded-full -translate-x-6 -translate-y-6 blur-xl pointer-events-none" />

              <div className="relative flex flex-col gap-6">
                <div>
                  <span className="pill-label mb-2 w-fit">
                    {isHowToTake ? 'Usage Guidelines' : 'Quality Assurance'}
                  </span>
                  <h3 className="font-h2 text-3xl text-primary font-bold tracking-tight flex items-center gap-2 mb-3">
                    {displayTitle}
                  </h3>
                  {section.subtitle ? (
                    <p className="font-body-md text-body-md text-secondary font-medium -mt-1">
                      {section.subtitle}
                    </p>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {section.bullets.map((bullet, idx2) => {
                    const parsed = parseBullet(bullet);
                    return (
                      <div 
                        key={idx2}
                        className="rounded-3xl bg-gradient-to-br from-surface-container-lowest/90 to-surface-container-low/50 border border-outline-variant/25 p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300"
                      >
                        <div className="flex items-start gap-3.5">
                          <span className="flex-none mt-1 h-6 w-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <div className="flex flex-col gap-1.5">
                            {parsed.title ? (
                              <span className="font-label-caps text-xs font-bold uppercase tracking-[0.05em] text-secondary leading-none">
                                {parsed.title}
                              </span>
                            ) : null}
                            <p className="font-body-sm text-body-sm text-on-surface leading-7">
                              {parsed.content}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        } else {
          // Render as a beautiful Core Rationale section card
          const isEven = idx % 2 === 0;
          return (
            <section key={section.title} className="reveal-up flex flex-col gap-md">
              <div className="flex flex-col gap-xs">
                <span className="pill-label w-fit">Nutritional Focus</span>
                <h2 className="font-h2 text-3xl text-primary leading-tight font-bold tracking-tight flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-primary/10 text-primary">
                    <ScienceIcon className="h-5 w-5" />
                  </span>
                  <span>{displayTitle}</span>
                </h2>
              </div>
              {section.subtitle ? (
                <p className="font-body-md text-body-md text-secondary font-semibold -mt-2">
                  {section.subtitle}
                </p>
              ) : null}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm mt-2">
                {section.bullets.map((bullet, idx2) => {
                  const parsed = parseBullet(bullet);
                  return (
                    <div 
                      key={idx2} 
                      className={`rounded-3xl border border-outline-variant/20 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 flex gap-4 items-start ${
                        isEven ? 'bg-card-gradient' : 'bg-surface-container-low/60 border border-outline-variant/20'
                      }`}
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary shadow-sm" />
                      <div className="flex flex-col gap-2">
                        {parsed.title ? (
                          <span className="inline-flex w-fit items-center rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-bold text-secondary uppercase tracking-[0.06em]">
                            {parsed.title}
                          </span>
                        ) : null}
                        <p className="font-body-sm text-body-sm text-on-surface leading-7">
                          {parsed.content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        }
      })}
    </div>
  );
}

function Tri3EveningCustomContent() {
  return (
    <div className="flex flex-col gap-lg mt-sm text-on-surface">
      {/* HOW TO TAKE (outside the card heading, inside below a box with horizontal/vertical rule divider) */}
      <div className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>How to Take</span>
        </h2>
        <div className="rounded-3xl border border-outline-variant/35 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 gap-4 md:gap-0">
            <div className="md:col-span-1 pb-4 md:pb-0 md:pr-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Dosage</span>
              <span className="font-body-md text-body-md font-bold text-on-surface leading-tight">One tablet daily</span>
            </div>
            <div className="md:col-span-2 pt-4 md:pt-0 md:pl-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Timing</span>
              <span className="font-body-md text-body-md font-medium text-on-surface leading-relaxed">
                <span className="text-secondary font-bold">EVENING DOSE</span> – Take preferably after dinner
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why the Third Trimester Matters */}
      <section className="flex flex-col gap-sm">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>Why the Third Trimester Matters (29–40 Weeks)</span>
        </h2>
        <div className="flex flex-col gap-3 mt-1">
          <p className="font-body-md text-body-md text-on-surface-variant leading-7">
            During the final weeks of pregnancy, your baby undergoes rapid and critical development. The brain increases nearly threefold in size, and the skeleton continues active ossification and strengthening. At the same time, hormonal changes slow the mother&apos;s digestive system, often leading to discomfort such as constipation and muscle cramps.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-7 font-medium">
            This formulation is specially designed to address these unique third-trimester needs in one convenient, well-tolerated <span className="text-secondary font-bold">EVENING DOSE</span>.
          </p>
        </div>
      </section>

      {/* What's Inside & Why It Works */}
      <section className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <NotesIcon className="h-6 w-6 text-secondary" />
          <span>What&apos;s Inside &amp; Why It Works</span>
        </h2>

        <div className="grid grid-cols-1 gap-md mt-2">
          {/* Brain & Eye Builder */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/90 to-indigo-100/25 p-7 shadow-[0_4px_20px_rgba(8,86,147,0.04)] hover:shadow-[0_8px_30px_rgba(8,86,147,0.08)] transition-all duration-300 dark:from-blue-950/30 dark:to-indigo-950/10 dark:border-blue-800/40">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                <circle cx="9.5" cy="11.5" r="0.75" fill="currentColor" />
                <circle cx="14.5" cy="11.5" r="0.75" fill="currentColor" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-blue-950 dark:text-blue-200 mt-4 mb-2">
              Brain &amp; Eye Builder: DHA (Omega-3)
            </h3>
            <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed">
              DHA constitutes nearly 97% of omega-3 fats in the brain and 93% in the retina (Structural Support). Fetal DHA accretion is highest in the third trimester at ~50–70 mg/day (Peak Requirement), supporting cognitive function, attention span, and visual development in later childhood (Long-Term Benefits).
            </p>
          </div>

          {/* Precision Bone Duo */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/90 to-orange-100/25 p-7 shadow-[0_4px_20px_rgba(217,119,6,0.04)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.08)] transition-all duration-300 dark:from-amber-950/30 dark:to-orange-950/10 dark:border-amber-800/40">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-amber-950 dark:text-amber-200 mt-4 mb-2">
              Precision Bone Duo: Calcium &amp; Vitamin D3
            </h3>
            <p className="font-body-md text-[0.93rem] text-amber-950/80 dark:text-amber-300/80 leading-relaxed">
              Calcium is essential for the rapid formation and strengthening of fetal bones and teeth, while Vitamin D3 enhances calcium absorption and ensures efficient transfer of nutrients to the developing fetus.
            </p>
          </div>

          {/* Heart & Muscle Support */}
          <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50/90 to-pink-100/25 p-7 shadow-[0_4px_20px_rgba(225,29,72,0.04)] hover:shadow-[0_8px_30px_rgba(225,29,72,0.08)] transition-all duration-300 dark:from-rose-950/30 dark:to-pink-950/10 dark:border-rose-800/40">
            <div className="w-12 h-12 rounded-2xl bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M3 12h3l3-9 4 18 3-12h5" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-rose-950 dark:text-rose-200 mt-4 mb-2">
              Heart &amp; Muscle Support: Vitamin K2 &amp; Magnesium
            </h3>
            <p className="font-body-md text-[0.93rem] text-rose-950/80 dark:text-rose-300/80 leading-relaxed">
              Vitamin K2 guides calcium into bones and teeth while preventing deposition in soft tissues, while Magnesium helps reduce leg cramps, supports muscle relaxation, and improves maternal sleep quality.
            </p>
          </div>

          {/* Protective Antioxidant Shield */}
          <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/90 to-fuchsia-100/25 p-7 shadow-[0_4px_20px_rgba(124,58,237,0.04)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all duration-300 dark:from-violet-950/30 dark:to-fuchsia-950/10 dark:border-violet-800/40">
            <div className="w-12 h-12 rounded-2xl bg-violet-100/80 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m12 7 .9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3Z" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-violet-950 dark:text-violet-200 mt-4 mb-2">
              Protective Antioxidant Shield: Vitamins A &amp; E
            </h3>
            <p className="font-body-md text-[0.93rem] text-violet-950/80 dark:text-violet-300/80 leading-relaxed">
              Vitamin A supports fetal vision development and immune system maturation (within recommended pregnancy limits).
            </p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER Card at bottom */}
      <div className="rounded-lg border-l-4 border-red-500 bg-red-50/70 dark:bg-red-950/10 p-sm shadow-sm mt-4">
        <p className="font-body-sm text-body-sm text-red-800/95 dark:text-red-300">
          <strong className="text-red-700 dark:text-red-400">DISCLAIMER:</strong> Nutritional supplements should be taken under the guidance of a healthcare professional.
        </p>
      </div>
    </div>
  );
}

function Tri3MorningCustomContent() {
  return (
    <div className="flex flex-col gap-lg mt-sm text-on-surface">
      {/* HOW TO TAKE */}
      <div className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>How to Take</span>
        </h2>
        <div className="rounded-3xl border border-outline-variant/35 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 gap-4 md:gap-0">
            <div className="md:col-span-1 pb-4 md:pb-0 md:pr-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Dosage</span>
              <span className="font-body-md text-body-md font-bold text-on-surface leading-tight">One tablet daily</span>
            </div>
            <div className="md:col-span-2 pt-4 md:pt-0 md:pl-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Timing</span>
              <span className="font-body-md text-body-md font-medium text-on-surface leading-relaxed">
                <span className="text-secondary font-bold">MORNING DOSE</span> – Take preferably after breakfast
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why Focus on the 3rd Trimester */}
      <section className="flex flex-col gap-sm">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>Why Focus on the 3rd Trimester</span>
        </h2>
        <div className="flex flex-col gap-3.5 mt-2">
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong>Peak Fetal Growth:</strong> The baby&apos;s weight increases most rapidly during this phase.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong>Iron Demands Spike:</strong> Iron requirements are at their highest to prevent anemia—a key risk factor for late pregnancy complications.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong>Nutritional Needs Evolve:</strong> Increased needs for immune support, calcium, and nutritional cofactors for final fetal growth and maternal wellness.</span>
          </div>
        </div>
      </section>

      {/* Key Benefits & Clinical Support */}
      <section className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <NotesIcon className="h-6 w-6 text-secondary" />
          <span>Key Benefits &amp; Clinical Support</span>
        </h2>

        <div className="grid grid-cols-1 gap-md mt-2">
          {/* Iron & Stamina Boosters */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/90 to-orange-100/25 p-7 shadow-[0_4px_20px_rgba(217,119,6,0.04)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.08)] transition-all duration-300 dark:from-amber-950/30 dark:to-orange-950/10 dark:border-amber-800/40">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-amber-950 dark:text-amber-200 mt-4 mb-2">
              Iron &amp; Stamina Boosters
            </h3>
            <p className="font-body-md text-[0.93rem] text-amber-950/80 dark:text-amber-300/80 leading-relaxed">
              Provides a gentle, ongoing release of 35 mg+ elemental iron to prevent pregnancy anemia (low birth weight–preterm birth), while the B-Vitamin Complex (B1, B2, B3, B5, B6) enhances oxygen delivery to support energy levels, prevent fatigue, and promote growth.
            </p>
          </div>

          {/* Gentle, Non-Constipating Formula */}
          <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50/90 to-pink-100/25 p-7 shadow-[0_4px_20px_rgba(225,29,72,0.04)] hover:shadow-[0_8px_30px_rgba(225,29,72,0.08)] transition-all duration-300 dark:from-rose-950/30 dark:to-pink-950/10 dark:border-rose-800/40">
            <div className="w-12 h-12 rounded-2xl bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-rose-950 dark:text-rose-200 mt-4 mb-2">
              Gentle, Non-Constipating Formula
            </h3>
            <p className="font-body-md text-[0.93rem] text-rose-950/80 dark:text-rose-300/80 leading-relaxed">
              Designed to protect clinical compliance with minimal GI distress for final fetal growth.
            </p>
          </div>

          {/* Fetal Brain, Bone, & Nutritional Support */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/90 to-indigo-100/25 p-7 shadow-[0_4px_20px_rgba(8,86,147,0.04)] hover:shadow-[0_8px_30px_rgba(8,86,147,0.08)] transition-all duration-300 dark:from-blue-950/30 dark:to-indigo-950/10 dark:border-blue-800/40">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                <circle cx="9.5" cy="11.5" r="0.75" fill="currentColor" />
                <circle cx="14.5" cy="11.5" r="0.75" fill="currentColor" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-blue-950 dark:text-blue-200 mt-4 mb-2">
              Fetal Brain, Bone, &amp; Nutritional Support
            </h3>
            <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed">
              Choline is essential for fetal brain function, memory development, and healthy birth weight (newborn cognition). Calcium, Manganese, and Vitamin D support baby&apos;s skeletal development and strengthen maternal bones, while Folic Acid and Iodine are critical for DNA synthesis, preventing neural tube defects, and supporting healthy thyroid and metabolism.
            </p>
          </div>

          {/* Immune & Antioxidant Defense */}
          <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/90 to-fuchsia-100/25 p-7 shadow-[0_4px_20px_rgba(124,58,237,0.04)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all duration-300 dark:from-violet-950/30 dark:to-fuchsia-950/10 dark:border-violet-800/40">
            <div className="w-12 h-12 rounded-2xl bg-violet-100/80 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m12 7 .9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3Z" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-violet-950 dark:text-violet-200 mt-4 mb-2">
              Immune &amp; Antioxidant Defense
            </h3>
            <p className="font-body-md text-[0.93rem] text-violet-950/80 dark:text-violet-300/80 leading-relaxed">
              Vitamin C enhances immunity and dramatically increases iron absorption in the tablet. Zinc and Selenium are vital minerals that aid cellular growth and DNA synthesis to curb late-pregnancy complications, with Selenium shielding against oxidative stress to support maternal and fetal health.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Feto Nurture Tri 3 in the 3rd Trimester? */}
      <section className="flex flex-col gap-sm">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>Why Choose Feto Nurture Tri 3 in the 3rd Trimester?</span>
        </h2>
        <div className="flex flex-col gap-3.5 mt-2">
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Complete, once-daily morning dose for 28–40 week needs.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Trimester-specific, gentle formula with time-release iron.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>100% Vegetarian &amp; carefully crafted for the final phase of pregnancy.</span>
          </div>
        </div>
      </section>

      {/* DISCLAIMER Card at bottom */}
      <div className="rounded-lg border-l-4 border-red-500 bg-red-50/70 dark:bg-red-950/10 p-sm shadow-sm mt-4">
        <p className="font-body-sm text-body-sm text-red-800/95 dark:text-red-300">
          <strong className="text-red-700 dark:text-red-400">DISCLAIMER:</strong> Nutritional supplements should be taken under the guidance of a healthcare professional.
        </p>
      </div>
    </div>
  );
}

function Tri2EveningCustomContent() {
  return (
    <div className="flex flex-col gap-lg mt-sm text-on-surface">
      {/* HOW TO TAKE */}
      <div className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>How to Take</span>
        </h2>
        <div className="rounded-3xl border border-outline-variant/35 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 gap-4 md:gap-0">
            <div className="md:col-span-1 pb-4 md:pb-0 md:pr-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Dosage</span>
              <span className="font-body-md text-body-md font-bold text-on-surface leading-tight">One tablet daily</span>
            </div>
            <div className="md:col-span-2 pt-4 md:pt-0 md:pl-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Timing</span>
              <span className="font-body-md text-body-md font-medium text-on-surface leading-relaxed">
                <span className="text-secondary font-bold">EVENING DOSE</span> – Take preferably after dinner
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Second Trimester Support */}
      <section className="flex flex-col gap-sm">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>Second Trimester Support</span>
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant leading-7 mt-1">
          During the second trimester (14–27 weeks), both maternal physiology and fetal organ systems undergo rapid structural, neurological, and metabolic changes. This nutraceutical formulation is designed to address these evolving needs through targeted nutrient synergies.
        </p>
      </section>

      {/* Scientific Rationale */}
      <section className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <NotesIcon className="h-6 w-6 text-secondary" />
          <span>Scientific Rationale</span>
        </h2>

        <div className="grid grid-cols-1 gap-md mt-2">
          {/* Skeletal & Structural System */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/90 to-orange-100/25 p-7 shadow-[0_4px_20px_rgba(217,119,6,0.04)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.08)] transition-all duration-300 dark:from-amber-950/30 dark:to-orange-950/10 dark:border-amber-800/40">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-amber-950 dark:text-amber-200 mt-4 mb-2">
              I. Skeletal &amp; Structural System: Fetal Bone Mineralization
            </h3>
            <p className="font-body-md text-[0.93rem] text-amber-950/80 dark:text-amber-300/80 leading-relaxed">
              Calcium provides the foundational mineral matrix for fetal bones and teeth, while Vitamin D3 enhances intestinal calcium absorption. Precision Calcium Delivery: Vitamin K2 (MK-7) works synergistically with Vitamin D3 by activating osteocalcin, ensuring calcium is deposited into the fetal skeleton and maternal bones, while preventing ectopic deposition in soft tissues and vasculature.
            </p>
          </div>

          {/* Neurological & Sensory System */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/90 to-indigo-100/25 p-7 shadow-[0_4px_20px_rgba(8,86,147,0.04)] hover:shadow-[0_8px_30px_rgba(8,86,147,0.08)] transition-all duration-300 dark:from-blue-950/30 dark:to-indigo-950/10 dark:border-blue-800/40">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                <circle cx="9.5" cy="11.5" r="0.75" fill="currentColor" />
                <circle cx="14.5" cy="11.5" r="0.75" fill="currentColor" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-blue-950 dark:text-blue-200 mt-4 mb-2">
              II. Neurological &amp; Sensory System: Rapid Brain Growth Phase
            </h3>
            <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed">
              Between weeks 14–27, intense neuronal proliferation and synaptic network formation occur. DHA Accumulation: Omega-3 DHA is a critical lipid of the cerebral cortex and retina, supporting neurotransmission, visual acuity, and long-term cognitive development.
            </p>
          </div>

          {/* Muscular & Circulatory System */}
          <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50/90 to-pink-100/25 p-7 shadow-[0_4px_20px_rgba(225,29,72,0.04)] hover:shadow-[0_8px_30px_rgba(225,29,72,0.08)] transition-all duration-300 dark:from-rose-950/30 dark:to-pink-950/10 dark:border-rose-800/40">
            <div className="w-12 h-12 rounded-2xl bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M3 12h3l3-9 4 18 3-12h5" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-rose-950 dark:text-rose-200 mt-4 mb-2">
              III. Muscular &amp; Circulatory System: Muscle Relaxation &amp; Cramp Prevention
            </h3>
            <p className="font-body-md text-[0.93rem] text-rose-950/80 dark:text-rose-300/80 leading-relaxed">
              Magnesium acts as a physiological muscle relaxant, reducing leg cramps and supporting uterine muscle relaxation for healthy pregnancy progression.
            </p>
          </div>

          {/* Blood Pressure Regulation */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/90 to-indigo-100/25 p-7 shadow-[0_4px_20px_rgba(8,86,147,0.04)] hover:shadow-[0_8px_30px_rgba(8,86,147,0.08)] transition-all duration-300 dark:from-blue-950/30 dark:to-indigo-950/10 dark:border-blue-800/40">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-blue-950 dark:text-blue-200 mt-4 mb-2">
              IV. Blood Pressure Regulation
            </h3>
            <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed">
              Adequate Calcium and Magnesium intake support vascular tone and reduce smooth muscle hypertension and pre-eclampsia by modulating smooth muscle contractility.
            </p>
          </div>

          {/* Immune & Endocrine System */}
          <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/90 to-fuchsia-100/25 p-7 shadow-[0_4px_20px_rgba(124,58,237,0.04)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all duration-300 dark:from-violet-950/30 dark:to-fuchsia-950/10 dark:border-violet-800/40">
            <div className="w-12 h-12 rounded-2xl bg-violet-100/80 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m12 7 .9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3Z" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-violet-950 dark:text-violet-200 mt-4 mb-2">
              IV. Immune &amp; Endocrine System: Immune System Programming
            </h3>
            <p className="font-body-md text-[0.93rem] text-violet-950/80 dark:text-violet-300/80 leading-relaxed">
              Vitamin A and Vitamin D are essential for fetal immune system maturation and lung development. Preterm Birth Risk Reduction: Supplementation with Omega-3 DHA starting in the second trimester is scientifically associated with a reduced risk of early preterm birth (before 34 weeks) and supports longer gestational duration and improved neonatal outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* DISCLAIMER Card at bottom */}
      <div className="rounded-lg border-l-4 border-red-500 bg-red-50/70 dark:bg-red-950/10 p-sm shadow-sm mt-4">
        <p className="font-body-sm text-body-sm text-red-800/95 dark:text-red-300">
          <strong className="text-red-700 dark:text-red-400">DISCLAIMER:</strong> Nutritional supplements should be taken under the guidance of a healthcare professional.
        </p>
      </div>
    </div>
  );
}

function Tri1MorningCustomContent() {
  return (
    <div className="flex flex-col gap-lg mt-sm text-on-surface">
      {/* HOW TO TAKE */}
      <div className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>How to Take</span>
        </h2>
        <div className="rounded-3xl border border-outline-variant/35 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 gap-4 md:gap-0">
            <div className="md:col-span-1 pb-4 md:pb-0 md:pr-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Dosage</span>
              <span className="font-body-md text-body-md font-bold text-on-surface leading-tight">One tablet daily</span>
            </div>
            <div className="md:col-span-2 pt-4 md:pt-0 md:pl-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Timing</span>
              <span className="font-body-md text-body-md font-medium text-on-surface leading-relaxed">
                <span className="text-secondary font-bold">MORNING DOSE</span> – Take once daily in the morning as advised
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* What's Inside & Why It Works */}
      <section className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <NotesIcon className="h-6 w-6 text-secondary" />
          <span>What&apos;s Inside &amp; Why It Works</span>
        </h2>

        <div className="grid grid-cols-1 gap-md mt-2">
          {/* I. Neuro-Developmental & Genomic Foundation */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/90 to-indigo-100/25 p-7 shadow-[0_4px_20px_rgba(8,86,147,0.04)] hover:shadow-[0_8px_30px_rgba(8,86,147,0.08)] transition-all duration-300 dark:from-blue-950/30 dark:to-indigo-950/10 dark:border-blue-800/40">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                <circle cx="9.5" cy="11.5" r="0.75" fill="currentColor" />
                <circle cx="14.5" cy="11.5" r="0.75" fill="currentColor" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-blue-950 dark:text-blue-200 mt-4 mb-2">
              I. Neuro-Developmental &amp; Genomic Foundation (Early Organogenesis)
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-blue-950 dark:text-blue-100 block mb-0.5">L-Methylfolate / Folic Acid (B9)</strong>
                  Essential for DNA synthesis, cell division, and Neural Tube Defect (NTD) prevention during early embryogenesis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-blue-950 dark:text-blue-100 block mb-0.5">Choline Bitartrate</strong>
                  A key methyl donor influencing fetal gene expression, hippocampal development, and long-term cognitive memory.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-blue-950 dark:text-blue-100 block mb-0.5">DHA (Omega-3)</strong>
                  Structural lipid for the fetal brain cortex &amp; retina, critical for early neurogenesis and visual development.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-blue-950 dark:text-blue-100 block mb-0.5">Thiamine (Vitamin B1)</strong>
                  Supports neuronal differentiation, synapse formation, and early myelin sheath development.
                </p>
              </div>
            </div>
          </div>

          {/* II. Mitochondrial Energy & Cellular Proliferation */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/90 to-orange-100/25 p-7 shadow-[0_4px_20px_rgba(217,119,6,0.04)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.08)] transition-all duration-300 dark:from-amber-950/30 dark:to-orange-950/10 dark:border-amber-800/40">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-amber-950 dark:text-amber-200 mt-4 mb-2">
              II. Mitochondrial Energy &amp; Cellular Proliferation
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-amber-950/80 dark:text-amber-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-amber-950 dark:text-amber-100 block mb-0.5">B-Complex (B1, B2, B5)</strong>
                  Cofactors for ATP generation (TCA cycle &amp; oxidative phosphorylation), supporting rapid embryonic growth.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-amber-950/80 dark:text-amber-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-amber-950 dark:text-amber-100 block mb-0.5">Zinc</strong>
                  Required for cell division, protein synthesis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-amber-950/80 dark:text-amber-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-amber-950 dark:text-amber-100 block mb-0.5">Manganese</strong>
                  Supports early skeletal development.
                </p>
              </div>
            </div>
          </div>

          {/* III. Anti-Nausea & Neurotransmitter Balance */}
          <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50/90 to-pink-100/25 p-7 shadow-[0_4px_20px_rgba(225,29,72,0.04)] hover:shadow-[0_8px_30px_rgba(225,29,72,0.08)] transition-all duration-300 dark:from-rose-950/30 dark:to-pink-950/10 dark:border-rose-800/40">
            <div className="w-12 h-12 rounded-2xl bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M3 12h3l3-9 4 18 3-12h5" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-rose-950 dark:text-rose-200 mt-4 mb-2">
              III. Anti-Nausea &amp; Neurotransmitter Balance
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-rose-950/80 dark:text-rose-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-rose-950 dark:text-rose-100 block mb-0.5">Pyridoxine (Vitamin B6)</strong>
                  Clinically effective in reducing nausea &amp; vomiting of pregnancy (NVP) and supports neurotransmitter synthesis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-rose-950/80 dark:text-rose-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-rose-950 dark:text-rose-100 block mb-0.5">Zinc</strong>
                  Required for cell division, protein synthesis.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-rose-950/80 dark:text-rose-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-rose-950 dark:text-rose-100 block mb-0.5">Manganese</strong>
                  Supports early skeletal development.
                </p>
              </div>
            </div>
          </div>

          {/* IV. Endocrine & Antioxidant Protection */}
          <div className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50/90 to-fuchsia-100/25 p-7 shadow-[0_4px_20px_rgba(124,58,237,0.04)] hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all duration-300 dark:from-violet-950/30 dark:to-fuchsia-950/10 dark:border-violet-800/40">
            <div className="w-12 h-12 rounded-2xl bg-violet-100/80 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m12 7 .9 1.8 2 .3-1.4 1.4.3 2-1.8-.9-1.8.9.3-2-1.4-1.4 2-.3Z" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-violet-950 dark:text-violet-200 mt-4 mb-2">
              IV. Endocrine &amp; Antioxidant Protection
            </h3>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-violet-100/80 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-violet-950/80 dark:text-violet-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-violet-950 dark:text-violet-100 block mb-0.5">Selenium</strong>
                  Supports thyroid hormone activation (T4 → T3), essential for fetal metabolic programming.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-violet-100/80 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-violet-950/80 dark:text-violet-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-violet-950 dark:text-violet-100 block mb-0.5">Zinc</strong>
                  An essential cofactor for hormone synthesis and immune health.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-none h-5 w-5 rounded-full bg-violet-100/80 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300 flex items-center justify-center font-bold text-xs select-none">✓</span>
                <p className="font-body-md text-[0.93rem] text-violet-950/80 dark:text-violet-300/80 leading-relaxed -mt-0.5">
                  <strong className="text-violet-950 dark:text-violet-100 block mb-0.5">Manganese</strong>
                  Activates antioxidant enzymes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DISCLAIMER Card at bottom */}
      <div className="rounded-lg border-l-4 border-red-500 bg-red-50/70 dark:bg-red-950/10 p-sm shadow-sm mt-4 flex flex-col gap-2">
        <p className="font-body-sm text-body-sm text-red-800/95 dark:text-red-300">
          <strong className="text-red-700 dark:text-red-400">NOTE:</strong> Suitable when Hb Levels are adequate.
        </p>
        <p className="font-body-sm text-body-sm text-red-800/95 dark:text-red-300">
          <strong className="text-red-700 dark:text-red-400">DISCLAIMER:</strong> Nutritional supplements should be taken under the guidance of a healthcare professional.
        </p>
      </div>
    </div>
  );
}

function Tri2MorningCustomContent() {
  return (
    <div className="flex flex-col gap-lg mt-sm text-on-surface">
      {/* HOW TO TAKE */}
      <div className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>How to Take</span>
        </h2>
        <div className="rounded-3xl border border-outline-variant/35 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30 gap-4 md:gap-0">
            <div className="md:col-span-1 pb-4 md:pb-0 md:pr-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Dosage</span>
              <span className="font-body-md text-body-md font-bold text-on-surface leading-tight">One tablet daily</span>
            </div>
            <div className="md:col-span-2 pt-4 md:pt-0 md:pl-6 flex flex-col gap-1.5">
              <span className="block font-label-caps text-label-caps text-outline mb-0.5 leading-none">Timing</span>
              <span className="font-body-md text-body-md font-medium text-on-surface leading-relaxed">
                <span className="text-secondary font-bold">MORNING DOSE</span> – Take preferably after breakfast
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Why the Second Trimester Matters */}
      <section className="flex flex-col gap-sm">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>Why the Second Trimester Matters</span>
        </h2>
        <div className="flex flex-col gap-3.5 mt-2">
          <p className="font-body-md text-body-md text-on-surface-variant leading-7 -mt-1">
            The second trimester is a critical phase of rapid fetal growth and development. During this period:
          </p>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong>Fetal weight</strong> increases significantly.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong>Iron requirements</strong> peak.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong>Maternal blood volume</strong> expands.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span><strong>Brain and neural development</strong> accelerate.</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-7 font-medium mt-1">
            Proper nutritional support is essential to meet these increased demands.
          </p>
        </div>
      </section>

      {/* Key Benefits & Clinical Support */}
      <section className="flex flex-col gap-md">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <NotesIcon className="h-6 w-6 text-secondary" />
          <span>Key Benefits &amp; Clinical Support</span>
        </h2>

        <div className="grid grid-cols-1 gap-md mt-2">
          {/* Morning Dose for Sustained Energy & Metabolism */}
          <div className="rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50/90 to-orange-100/25 p-7 shadow-[0_4px_20px_rgba(217,119,6,0.04)] hover:shadow-[0_8px_30px_rgba(217,119,6,0.08)] transition-all duration-300 dark:from-amber-950/30 dark:to-orange-950/10 dark:border-amber-800/40">
            <div className="w-12 h-12 rounded-2xl bg-amber-100/80 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-amber-950 dark:text-amber-200 mt-4 mb-2">
              Morning Dose for Sustained Energy &amp; Metabolism
            </h3>
            <p className="font-body-md text-[0.93rem] text-amber-950/80 dark:text-amber-300/80 leading-relaxed">
              Provides a gentle, steady release of 27 mg+ elemental iron, helping prevent iron-deficiency anemia—a key risk factor for low birth weight and preterm birth. Time-release technology minimizes constipation, nausea, and gastric discomfort, improving patient compliance, while B-Complex Vitamins (B1, B2, B3, B5, B6) support energy production, enhance metabolism, and help reduce pregnancy-related fatigue.
            </p>
          </div>

          {/* Fetal Brain & Neural Development */}
          <div className="rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50/90 to-indigo-100/25 p-7 shadow-[0_4px_20px_rgba(8,86,147,0.04)] hover:shadow-[0_8px_30px_rgba(8,86,147,0.08)] transition-all duration-300 dark:from-blue-950/30 dark:to-indigo-950/10 dark:border-blue-800/40">
            <div className="w-12 h-12 rounded-2xl bg-blue-100/80 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <circle cx="12" cy="12" r="8" />
                <path d="M12 4a2 2 0 0 0-2-2 2 2 0 0 0-2 2" />
                <circle cx="9.5" cy="11.5" r="0.75" fill="currentColor" />
                <circle cx="14.5" cy="11.5" r="0.75" fill="currentColor" />
                <path d="M9.5 15a3.5 3.5 0 0 0 5 0" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-blue-950 dark:text-blue-200 mt-4 mb-2">
              Fetal Brain &amp; Neural Development
            </h3>
            <p className="font-body-md text-[0.93rem] text-blue-950/80 dark:text-blue-300/80 leading-relaxed">
              Choline is essential for fetal brain growth, neurogenesis, and long-term cognitive development. Folic Acid (Vitamin B9) supports DNA synthesis, cellular growth, and maintains optimal homocysteine levels during ongoing fetal development.
            </p>
          </div>

          {/* Protective & Structural Growth Support */}
          <div className="rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50/90 to-pink-100/25 p-7 shadow-[0_4px_20px_rgba(225,29,72,0.04)] hover:shadow-[0_8px_30px_rgba(225,29,72,0.08)] transition-all duration-300 dark:from-rose-950/30 dark:to-pink-950/10 dark:border-rose-800/40">
            <div className="w-12 h-12 rounded-2xl bg-rose-100/80 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300 flex items-center justify-center shadow-sm select-none">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                <path d="m9 11 2 2 4-4" />
              </svg>
            </div>
            <h3 className="font-bold text-[1.15rem] text-rose-950 dark:text-rose-200 mt-4 mb-2">
              Protective &amp; Structural Growth Support
            </h3>
            <p className="font-body-md text-[0.93rem] text-rose-950/80 dark:text-rose-300/80 leading-relaxed">
              Vitamin C enhances iron absorption and supports maternal immunity. Zinc and Selenium aid cell division, DNA synthesis, and help prevent intrauterine growth retardation (IUGR). Iodine is crucial for thyroid function and baby&apos;s cognitive development, while Manganese supports fetal skeletal and connective tissue development.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose This Formula in the 2nd Trimester? */}
      <section className="flex flex-col gap-sm">
        <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
          <ScienceIcon className="h-6 w-6 text-secondary" />
          <span>Why Choose This Formula in the 2nd Trimester?</span>
        </h2>
        <div className="flex flex-col gap-3.5 mt-2">
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>One-tablet, once-daily morning dose.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Trimester-specific formulation.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>Optimized iron absorption with reduced GI side effects.</span>
          </div>
          <div className="flex items-start gap-3 text-on-surface-variant leading-relaxed">
            <span className="flex-none h-6 w-6 rounded-lg bg-primary/10 text-primary flex items-center justify-center shadow-sm select-none">
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span>100% Vegetarian.</span>
          </div>
        </div>
      </section>

      {/* DISCLAIMER Card at bottom */}
      <div className="rounded-lg border-l-4 border-red-500 bg-red-50/70 dark:bg-red-950/10 p-sm shadow-sm mt-4">
        <p className="font-body-sm text-body-sm text-red-800/95 dark:text-red-300">
          <strong className="text-red-700 dark:text-red-400">DISCLAIMER:</strong> Nutritional supplements should be taken under the guidance of a healthcare professional.
        </p>
      </div>
    </div>
  );
}

export function ProductDetailPageContent({ product }: ProductDetailPageContentProps) {
  const productTitle = product.variantLabel ? `${product.name} - ${product.variantLabel}` : product.name;

  return (
    <div className="font-body-md text-body-md text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <section className="section-shell py-xl">
        <div className="mb-sm flex flex-wrap items-center gap-2 font-body-sm text-body-sm text-on-surface-variant">
          <Link href="/products/" className="transition-colors hover:text-primary">
            Products
          </Link>
          <ChevronRightIcon className="h-4 w-4 text-outline" />
          <Link href="/products/" className="transition-colors hover:text-primary">
            {product.category}
          </Link>
          <ChevronRightIcon className="h-4 w-4 text-outline" />
          <span className="font-medium text-on-background">{productTitle}</span>
        </div>

        <div className="grid grid-cols-1 gap-lg lg:grid-cols-12 items-start">
          <ProductImageGallery productName={productTitle} images={product.detailImages} badge={product.badge} />

          <section className="reveal-up reveal-delay-1 flex flex-col gap-lg lg:col-span-6">
            <div className="flex flex-col gap-xs">
              <h1 className="font-h1 text-[clamp(1.85rem,7vw,2.35rem)] font-bold leading-[1.08] tracking-[-0.03em] text-primary md:text-h1 flex flex-wrap items-baseline gap-x-2">
                <span>{product.name}</span>
                {product.variantLabel ? (
                  <span className="text-[0.6em] font-medium text-secondary">
                    ({product.variantLabel})
                  </span>
                ) : null}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">{product.genericName}</p>
            </div>

            <div className="flex flex-col gap-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
                <DetailStat label="Therapeutic Class" value={product.therapeuticClass} />
                <DetailStat label="Dosage Form" value={product.dosageForm} />
                <DetailStat label="Pack / Strength" value={product.availableStrengths} />
              </div>
              <div className="rounded-3xl border border-outline-variant/35 bg-gradient-to-br from-surface-container-low to-surface-container-lowest/80 p-5 flex flex-col gap-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]">
                <span className="font-label-caps text-label-caps text-outline leading-none">Administration</span>
                <span className="font-body-md text-body-md font-medium text-on-surface leading-relaxed">{product.administration}</span>
              </div>
            </div>

            <div id="product-overview" className="flex flex-col gap-md">
              <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
                <NotesIcon className="h-6 w-6 text-secondary" />
                <span>Product Overview</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{product.overview}</p>
            </div>

            {product.slug === 'feto-nurture-tri-3' ? (
              <Tri3MorningCustomContent />
            ) : product.slug === 'feto-nurture-tri-3-evening' ? (
              <Tri3EveningCustomContent />
            ) : product.slug === 'feto-nurture-tri-2' ? (
              <Tri2MorningCustomContent />
            ) : product.slug === 'feto-nurture-tri-2-evening' ? (
              <Tri2EveningCustomContent />
            ) : product.slug === 'feto-nurture-tri-1' ? (
              <Tri1MorningCustomContent />
            ) : (
              <SequentialSupportSections sections={product.supportSections} />
            )}
          </section>
        </div>
      </section>
    </div>
  );
}
