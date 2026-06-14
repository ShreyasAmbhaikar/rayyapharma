import Link from 'next/link';

import type { PlaceholderPageKey } from '@/content/site';
import { placeholderPages } from '@/content/site';

import { MarketingShell } from '@/components/marketing-shell';

type PlaceholderPageProps = {
  routeKey: PlaceholderPageKey;
};

export function PlaceholderPage({ routeKey }: PlaceholderPageProps) {
  const page = placeholderPages[routeKey];

  return (
    <MarketingShell currentPath={page.path}>
      <section className="section-shell py-24 md:py-32">
        <div className="mx-auto max-w-4xl">
          <span className="pill-label mb-6 reveal-fade">Static Placeholder Route</span>
          <h1 className="mb-6 font-h1 text-[clamp(2.5rem,5vw,4rem)] leading-tight text-primary reveal-up reveal-delay-1">{page.title}</h1>
          <p className="mb-10 max-w-2xl font-body-lg text-body-lg text-on-surface-variant reveal-up reveal-delay-2">{page.description}</p>

          <div className="card-surface overflow-hidden reveal-soft reveal-delay-3">
            <div className="grid gap-8 p-8 md:grid-cols-[1.3fr_0.9fr] md:p-10">
              <div>
                <h2 className="mb-4 font-h3 text-h3 text-on-background">Ready for the next content phase</h2>
                <p className="mb-6 font-body-md text-body-md text-on-surface-variant">
                  This page is intentionally live so navigation, metadata, routing, and static export behavior are
                  already in place. Full page copy and media can be added later without changing the shared shell or
                  SEO foundation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/" prefetch={false} className="primary-button">
                    Back to Homepage
                  </Link>
                  <Link href="/contact/" prefetch={false} className="secondary-button">
                    Contact Placeholder
                  </Link>
                </div>
              </div>

              <div className="rounded-xl border border-outline-variant/40 bg-surface-container-low p-6">
                <h2 className="mb-3 font-label-caps text-label-caps text-secondary">What is already included</h2>
                <ul className="space-y-3 text-sm leading-6 text-on-surface-variant">
                  <li>Static route generation for export-ready hosting.</li>
                  <li>Per-page metadata and canonical URL wiring.</li>
                  <li>Noindex protection until final content is written.</li>
                  <li>Shared header, footer, and design system consistency.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
