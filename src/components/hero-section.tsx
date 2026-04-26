import Image from 'next/image';
import Link from 'next/link';

import { homeContent } from '@/content/home';

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative flex min-h-[819px] items-center overflow-hidden pt-14">
      <div className="absolute inset-0">
        <Image
          src={hero.image.src}
          alt={hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="section-shell relative z-10 py-12 md:py-24">
        <div className="max-w-2xl">
          <span className="pill-label mb-6">{hero.eyebrow}</span>
          <h1 className="mb-6 font-h1 text-h1 text-on-background">
            {hero.title}
            <br />
            <span className="text-primary">{hero.highlight}</span>
          </h1>
          <p className="mb-10 max-w-xl font-body-lg text-body-lg text-on-surface-variant">{hero.description}</p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={hero.primaryAction.href}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-[#7BCB45] via-[#1FAE8B] to-[#085693] px-6 py-3 font-button text-button text-white shadow-[0_8px_16px_-4px_rgba(8,86,147,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-8px_rgba(8,86,147,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {hero.primaryAction.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
