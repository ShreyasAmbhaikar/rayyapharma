import type { ReactNode } from 'react';

import { siteConfig } from '@/content/site';
import { ArrowRightIcon, LocationIcon, MailIcon, PhoneIcon } from '@/components/icons';

function ContactInfoItem({
  title,
  value,
  icon,
}: {
  title: string;
  value: ReactNode;
  icon: ReactNode;
}) {
  return (
    <div className="group flex min-h-[112px] items-start gap-md rounded-2xl border border-outline-variant/30 bg-white/80 p-5 shadow-[0_10px_30px_rgba(8,86,147,0.06)] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(8,86,147,0.1)]">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary/15 via-primary/10 to-secondary/20 text-primary shadow-inner">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="mb-2 font-label-caps text-label-caps text-secondary">{title}</h3>
        <p className="break-words font-body-md text-body-md text-on-surface">{value}</p>
      </div>
    </div>
  );
}

export function ContactPageContent() {
  const companyDetails = siteConfig.companyPlaceholders;
  const googleMapsAddress =
    'Office No. 303, Business House, Dehu Road, Moshi, Pune, Haveli, Maharashtra, India, 412105';
  const googleMapsEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(googleMapsAddress)}&z=16&output=embed`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(googleMapsAddress)}`;

  return (
    <div className="bg-background text-on-background antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <section className="section-shell py-xl">
        <div className="mx-auto mb-lg max-w-3xl text-center">
          <h1 className="mb-sm font-h1 text-h1 text-primary">Contact Us</h1>
          <p className="mx-auto max-w-2xl font-body-lg text-body-lg text-on-surface-variant">
            We are dedicated to advancing precise science and personal care. Reach out to our team for general company,
            partnership, and support-related inquiries.
          </p>
        </div>

        <div className="mx-auto grid max-w-[72rem] grid-cols-1 items-start gap-lg xl:grid-cols-2">
          <section className="reveal-soft rounded-[28px] border border-outline-variant/30 bg-gradient-to-br from-white via-surface to-surface-container-low p-md shadow-[0_16px_50px_rgba(8,86,147,0.08)]">
            <h2 className="mb-md font-h3 text-h3 text-primary">Company Contact Details</h2>
            <div className="space-y-md">
              <ContactInfoItem
                title="Registered Office"
                value={companyDetails.registeredOffice}
                icon={<LocationIcon className="h-5 w-5" />}
              />
              <ContactInfoItem
                title="Email"
                value={
                  <a
                    href={`mailto:${companyDetails.contactEmailMasked}`}
                    className="break-all rounded-sm underline underline-offset-4 transition-all hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {companyDetails.contactEmailMasked}
                  </a>
                }
                icon={<MailIcon className="h-5 w-5" />}
              />
              <ContactInfoItem
                title="Tel"
                value={
                  <a
                    href={`tel:${companyDetails.contactNumberStatus.replace(/\s+/g, '')}`}
                    className="rounded-sm underline underline-offset-4 transition-all hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  >
                    {companyDetails.contactNumberStatus}
                  </a>
                }
                icon={<PhoneIcon className="h-5 w-5" />}
              />
            </div>
          </section>

          <section className="reveal-soft reveal-delay-1 rounded-[28px] border border-outline-variant/30 bg-gradient-to-br from-white via-surface to-surface-container-low p-md shadow-[0_16px_50px_rgba(8,86,147,0.08)]">
            <h2 className="mb-md font-h3 text-h3 text-primary">Find Us</h2>
            <div className="relative h-[320px] overflow-hidden rounded-2xl border border-outline-variant/30 bg-surface-container-high shadow-[0_10px_24px_rgba(8,86,147,0.08)]">
              <iframe
                title="Google Maps location for Rayya Pharma Private Limited"
                src={googleMapsEmbedSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-button text-button text-secondary transition-colors hover:text-primary"
            >
              <span>Open in Google Maps</span>
              <ArrowRightIcon className="h-4 w-4" />
            </a>
          </section>
        </div>
      </section>
    </div>
  );
}
