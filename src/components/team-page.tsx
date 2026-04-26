import Image from 'next/image';

type LeadershipCard = {
  alt: string;
  description: string;
  imageSrc: string;
  name: string;
  role: string;
};

const leadershipCards: LeadershipCard[] = [
  {
    role: 'Managing Director',
    name: 'Poonam Devidas Karale',
    description:
      "Poonam guides the strategic direction of Rayya Pharma Pvt Ltd, supporting growth planning, partner relationships, and the company's long-term business vision.",
    imageSrc: '/images/team/alicia-montgomery.webp',
    alt: 'Representative portrait used for the managing director profile of Poonam Devidas Karale.',
  },
  {
    role: 'Managing Director',
    name: 'Nikita Devidas Karale',
    description:
      'Nikita contributes to operations, coordination, and organizational development at Rayya Pharma Pvt Ltd, with a focus on steady execution and responsible expansion.',
    imageSrc: '/images/team/maria-gonzalez.webp',
    alt: 'Representative portrait used for the managing director profile of Nikita Devidas Karale.',
  },
];

export function TeamPageContent() {
  return (
    <div className="font-body-md text-body-md text-on-background antialiased selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <section className="section-shell pb-lg pt-xl text-center">
        <h1 className="mb-sm font-h1 text-h1 text-primary">Managing Directors</h1>
        <p className="mx-auto max-w-3xl font-body-lg text-body-lg text-on-surface-variant">
          Leading Rayya Pharma&apos;s growth with a focus on trusted product partnerships, strong market relationships,
          and dependable healthcare delivery.
        </p>
      </section>

      <section className="section-shell pb-xl pt-lg">
        <div className="mx-auto grid max-w-[58rem] grid-cols-1 gap-12 md:grid-cols-2">
          {leadershipCards.map((member) => (
            <article
              key={member.name}
              className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#CFE0F6] bg-white shadow-[0_16px_40px_rgba(8,86,147,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-[0_24px_54px_rgba(8,86,147,0.14)]"
            >
              <div className="flex flex-grow flex-col items-center gap-4 px-7 py-8 text-center">
                <div className="relative h-44 w-44 overflow-hidden rounded-full border-[6px] border-[#E8F1FD] bg-surface-container shadow-[0_12px_28px_rgba(8,86,147,0.12)]">
                  <Image
                    src={member.imageSrc}
                    alt={member.alt}
                    fill
                    sizes="176px"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="font-label-caps text-label-caps tracking-[0.14em] text-secondary">{member.role}</span>
                <h3 className="text-[clamp(1.7rem,1.8vw,2rem)] font-bold leading-tight text-primary">{member.name}</h3>
                <p className="max-w-md flex-grow font-body-sm text-body-sm leading-7 text-on-surface-variant">{member.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
