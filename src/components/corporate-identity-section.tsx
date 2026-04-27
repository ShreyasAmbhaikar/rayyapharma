import { homeContent } from '@/content/home';
import { siteConfig } from '@/content/site';

const corporateFields: Array<{
  label: string;
  value: string;
}> = [
  {
    label: 'Registered Name',
    value: siteConfig.companyPlaceholders.registeredName,
  },
  {
    label: 'CIN',
    value: siteConfig.companyPlaceholders.cin,
  },
  {
    label: 'Incorporation Date',
    value: siteConfig.companyPlaceholders.incorporationDate,
  },
  {
    label: 'Activity',
    value: siteConfig.companyPlaceholders.activity,
  },
];

export function CorporateIdentitySection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-xl">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[800px] w-[800px] -translate-y-1/2 rounded-full bg-[#d7e2ff]/40 blur-[100px]" />

      <div className="section-shell relative z-10">
        <div className="flex flex-col items-start gap-12 md:flex-row">
          <div className="reveal-up w-full md:w-1/3">
            <h2 className="mb-4 font-h2 text-h2 text-primary">{homeContent.corporate.heading}</h2>
            <p className="mb-6 font-body-md text-body-md text-on-surface-variant">{homeContent.corporate.description}</p>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-[#7BCB45] via-[#1FAE8B] to-[#085693]" />
          </div>

          <div className="reveal-soft reveal-delay-1 w-full rounded-xl border border-white/40 bg-white/70 p-8 shadow-[0_8px_32px_0_rgba(8,86,147,0.05)] backdrop-blur-xl md:w-2/3">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
              {corporateFields.map((field) => (
                <div key={field.label} className="border-b border-outline-variant/30 pb-4">
                  <p className="mb-1 font-label-caps text-label-caps text-secondary">{field.label}</p>
                  <p className="font-body-md text-body-md text-on-background">{field.value}</p>
                </div>
              ))}

              <div className="pt-2 md:col-span-2">
                <p className="mb-1 font-label-caps text-label-caps text-secondary">Registered Office</p>
                <p className="font-body-md text-body-md text-on-background">{siteConfig.companyPlaceholders.registeredOffice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
