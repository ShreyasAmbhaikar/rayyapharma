import Link from 'next/link';

import { siteConfig } from '@/content/site';

import { BrandLogo } from '@/components/brand-logo';

export function SiteFooter() {
  const year = new Date().getFullYear();
  const marketingWizardsWhatsApp = '919284394722';
  const companyPhoneHref = siteConfig.companyPlaceholders.contactNumberStatus.replace(/\s+/g, '');

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-sm leading-relaxed text-blue-800">
      <div className="section-shell grid grid-cols-1 gap-8 py-10 md:grid-cols-[1.45fr_0.22fr_0.82fr_1fr]">
        <div>
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="mb-3 inline-flex w-fit rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <BrandLogo size="footer" subtitle="full" />
          </Link>
          <p className="max-w-md text-slate-500">
            <span className="block">Focused on bringing trusted pharmaceutical products</span>
            <span className="block">to healthcare professionals through quality-led sourcing</span>
            <span className="block">and dependable distribution.</span>
          </p>
        </div>

        <div className="hidden md:block" aria-hidden="true" />

        {siteConfig.footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">{group.title}</h2>
            <ul className="space-y-2.5">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded-sm text-slate-500 underline underline-offset-4 transition-all hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="space-y-6">
          <div>
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">Registered Office</h2>
            <div className="space-y-2.5 text-slate-500">
              <address className="not-italic leading-7">
                <span className="block">Office No. 303, Business House, Dehu Road,</span>
                <span className="block">Moshi, Pune, Haveli, Maharashtra 412105, India</span>
              </address>
              <p>
                <span className="font-medium text-slate-600">Email:</span>{' '}
                <a
                  href={`mailto:${siteConfig.companyPlaceholders.contactEmailMasked}`}
                  className="rounded-sm underline underline-offset-4 transition-all hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {siteConfig.companyPlaceholders.contactEmailMasked}
                </a>
              </p>
              <p>
                <span className="font-medium text-slate-600">Tel:</span>{' '}
                <a
                  href={`tel:${companyPhoneHref}`}
                  className="rounded-sm underline underline-offset-4 transition-all hover:text-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {siteConfig.companyPlaceholders.contactNumberStatus}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-shell py-4 text-center text-xs text-slate-500">
        <div className="mb-4 h-px w-full border-t border-slate-200/90" />
        <p>Copyright {year} {siteConfig.name}. All rights reserved.</p>
        <p className="mt-1.5">
          Developed with <span className="text-red-500">{'\u2665'}</span> by{' '}
          <a
            href={`https://wa.me/${marketingWizardsWhatsApp}`}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-primary underline underline-offset-4 transition-colors hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Marketing Wizards
          </a>
        </p>
      </div>
    </footer>
  );
}
