import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

const discomforts = ['nausea', 'gastric uneasiness', 'anemia', 'fatigue', 'missed doses'];

const trimesterCards = [
  {
    title: 'Feto Nurture Tri 1',
    trimester: '1st trimester',
    imageSrc: '/images/products/feto-nurture-tri-1.webp',
    href: '/products/feto-nurture-tri-1/',
    focus: 'Early pregnancy nutritional support with care for mother and baby.',
  },
  {
    title: 'Feto Nurture Tri 2',
    trimester: '2nd trimester',
    imageSrc: '/images/products/feto-nurture-tri-2.webp',
    href: '/products/feto-nurture-tri-2/',
    focus: 'Thoughtful support as pregnancy needs begin to expand and change.',
  },
  {
    title: 'Feto Nurture Tri 3',
    trimester: '3rd trimester',
    imageSrc: '/images/products/feto-nurture-tri-3.webp',
    href: '/products/feto-nurture-tri-3/',
    focus: 'Focused nutrition for the final trimester and maternal wellness.',
  },
];

const supportAreas = [
  'fetal brain development',
  'bone growth',
  'iron support',
  'energy metabolism',
  'immunity',
  'antioxidant protection',
  'maternal wellness',
  'morning and evening dose support',
];

function Highlight({ children }: { children: ReactNode }) {
  return (
    <strong className="rounded-full bg-secondary-container/45 px-2 py-0.5 font-semibold text-primary shadow-[inset_0_-1px_0_rgba(8,86,147,0.18)]">
      {children}
    </strong>
  );
}

export function OurStoryPageContent() {
  return (
    <div className="overflow-hidden bg-background text-on-background antialiased selection:bg-secondary selection:text-on-secondary">
      <section className="section-shell relative py-xl">
        <div className="absolute left-0 top-12 h-48 w-48 rounded-full bg-secondary-container/20 blur-3xl" aria-hidden="true" />
        <div className="absolute right-6 top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

        <div className="relative grid items-center gap-lg lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="mb-sm inline-flex rounded-full border border-primary/15 bg-surface-container-lowest px-4 py-2 font-label-caps text-label-caps uppercase text-secondary shadow-[var(--shadow-panel-soft)] reveal-fade">
              Our Story
            </span>
            <h1 className="max-w-4xl font-h1 text-[clamp(2.4rem,5vw,5.2rem)] leading-[1.05] tracking-[-0.055em] text-primary reveal-up reveal-delay-1">
              Born from motherhood. Built for every trimester.
            </h1>
            <p className="mt-md max-w-3xl font-body-lg text-body-lg text-on-surface-variant reveal-up reveal-delay-2">
              Rayya Pharma&apos;s <Highlight>Feto Nurture Tri 1, 2 &amp; 3</Highlight> was born from a deeply
              personal experience of <Highlight>Dr. Poonam Devidas Karale</Highlight> during her own pregnancy journey.
            </p>
            <p className="mt-sm max-w-3xl font-body-md text-body-md text-on-surface-variant reveal-up reveal-delay-3">
              During pregnancy, every trimester brings new nutritional needs for both mother and baby. That reality
              became the seed for a simpler, more organized, trimester-wise nutrition range.
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-[34rem] reveal-soft reveal-delay-2">
            <div className="absolute -inset-8 rounded-[3rem] bg-brand-gradient opacity-10 blur-2xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--primary-border)] bg-card-gradient p-5 shadow-[var(--shadow-card)]">
              <div className="grid grid-cols-3 gap-3">
                {trimesterCards.map((product, index) => (
                  <Link
                    key={product.title}
                    href={product.href}
                    prefetch={false}
                    className={`group rounded-[1.35rem] border border-outline-variant/35 bg-surface-container-lowest/80 p-3 transition duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[var(--shadow-card)] ${
                      index === 1 ? 'mt-8' : index === 2 ? 'mt-16' : ''
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-surface-container-low">
                      <Image
                        src={product.imageSrc}
                        alt={`${product.title} pregnancy nutrition pack`}
                        fill
                        sizes="(min-width: 1024px) 12rem, 30vw"
                        className="object-cover object-center transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <span className="mt-3 block text-center text-xs font-bold uppercase tracking-[0.12em] text-secondary">
                      {product.trimester}
                    </span>
                  </Link>
                ))}
              </div>

              <div className="mt-5 rounded-[1.25rem] border border-primary/10 bg-primary/5 px-5 py-4">
                <p className="text-center text-sm font-semibold leading-6 text-primary">
                  Tri 1, Tri 2, and Tri 3 create a connected nutrition story for the changing needs of pregnancy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-outline-variant/30 bg-surface-container-low/75">
        <div className="section-shell grid gap-lg py-xl lg:grid-cols-[0.82fr_1.18fr]">
          <div className="reveal-up">
            <span className="pill-label mb-sm">The Problem She Felt</span>
            <h2 className="font-h2 text-h2 text-primary">Too many tablets. Too much discomfort. Too much to remember.</h2>
          </div>

          <div className="space-y-5 font-body-md text-body-md leading-8 text-on-surface-variant reveal-up reveal-delay-1">
            <p>
              Like many expecting mothers, Dr. Poonam had to take multiple supplements and tablets at different stages
              of pregnancy. Managing so many tablets became difficult, especially when heavy-to-digest supplements caused
              discomfort such as nausea, gastric uneasiness, anemia, fatigue, and other common pregnancy-related
              concerns.
            </p>
            <p>
              At times, additional tablets were needed just to manage these discomforts, making the routine even more
              overwhelming. Remembering multiple tablets at the right time became another challenge, and missing doses
              only added stress during an already sensitive phase of motherhood.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              {discomforts.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-outline-variant/50 bg-surface-container-lowest px-4 py-2 text-sm font-semibold capitalize text-on-surface-variant shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-xl">
        <div className="mx-auto max-w-4xl text-center reveal-up">
          <span className="pill-label mb-sm">The Inspiration</span>
          <h2 className="font-h2 text-h2 text-primary">
            A personal experience became a trimester-specific pregnancy nutrition range.
          </h2>
          <p className="mt-md font-body-lg text-body-lg text-on-surface-variant">
            This personal pregnancy journey became the inspiration behind <Highlight>Feto Nurture Tri</Highlight>, a
            range designed to simplify supplementation for expecting mothers with care, convenience, and confidence.
          </p>
        </div>

        <div className="mt-lg grid gap-6 md:grid-cols-3">
          {trimesterCards.map((product, index) => (
            <article
              key={product.title}
              className={`reveal-soft rounded-[1.75rem] border border-[var(--primary-border)] bg-card-gradient p-6 shadow-[var(--shadow-card)] ${
                index === 1 ? 'reveal-delay-1' : index === 2 ? 'reveal-delay-2' : ''
              }`}
            >
              <span className="mb-4 inline-flex rounded-full bg-secondary-container/45 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-primary">
                {product.trimester}
              </span>
              <h3 className="font-h3 text-h3 text-primary">{product.title}</h3>
              <p className="mt-3 font-body-md text-body-md text-on-surface-variant">{product.focus}</p>
              <Link
                href={product.href}
                prefetch={false}
                className="mt-5 inline-flex font-button text-button text-secondary transition hover:text-primary"
              >
                View product details
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-primary text-on-primary">
        <div className="section-shell grid gap-lg py-xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal-up">
            <span className="mb-sm inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 font-label-caps text-label-caps uppercase text-secondary-container">
              Thoughtfully Developed
            </span>
            <h2 className="font-h2 text-h2">Nutritional support for mother and baby, mapped to pregnancy needs.</h2>
            <p className="mt-md font-body-md text-body-md leading-8 text-white/82">
              With Feto Nurture Tri 1, Tri 2, and Tri 3, Rayya Pharma brings a nutritional support system for the 1st,
              2nd, and 3rd trimester, focused on the changing needs of pregnancy.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 reveal-soft reveal-delay-1">
            {supportAreas.map((area) => (
              <div key={area} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <span className="font-body-md text-body-md font-semibold capitalize text-white">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--primary-border)] bg-notice-panel-gradient px-6 py-10 text-center shadow-[var(--shadow-panel)] md:px-12 reveal-up">
          <div className="absolute -left-16 top-0 h-44 w-44 rounded-full [background:var(--primary-orb)]" aria-hidden="true" />
          <div className="absolute -right-12 bottom-0 h-52 w-52 rounded-full [background:var(--category-orb)]" aria-hidden="true" />

          <div className="relative mx-auto max-w-4xl">
            <p className="font-body-lg text-body-lg leading-8 text-on-surface-variant">
              Dr. Poonam&apos;s vision was simple: <Highlight>no expecting mother should feel burdened</Highlight> by
              multiple tablets during pregnancy. Through Feto Nurture Tri, Rayya Pharma aims to provide a more
              organized, trimester-wise nutritional approach that supports both mother and baby.
            </p>
            <h2 className="mt-md font-h2 text-[clamp(2rem,4vw,3.8rem)] leading-tight text-primary">
              Inspired by motherhood. Guided by science. Created with care.
            </h2>
          </div>
        </div>
      </section>
    </div>
  );
}
