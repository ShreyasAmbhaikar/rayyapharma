import Link from 'next/link';

import { ChevronRightIcon, MedicationIcon, NotesIcon } from '@/components/icons';
import { ProductImageGallery } from '@/components/product-image-gallery';
import type { ProductRecord, ProductSupportSection } from '@/content/products';

type ProductDetailPageContentProps = {
  product: ProductRecord;
};

function DetailStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 rounded-lg border border-outline-variant/20 bg-surface-container-low p-4">
      <span className="font-label-caps text-label-caps text-outline">{label}</span>
      <span className="font-body-md text-body-md font-medium text-on-surface">{value}</span>
    </div>
  );
}

type DisplaySupportSection = ProductSupportSection & {
  displayTitle: string;
};

type SupportSectionGroup = {
  doseLabel: string | null;
  sections: DisplaySupportSection[];
};

function stripSectionNumber(title: string) {
  return title.replace(/^[IVX]+\.\s*/i, '').trim();
}

function parseDoseSectionTitle(title: string) {
  const match = title.match(/^(?:[IVX]+\.\s*)?(Morning Dose|Evening Dose)(?::\s*(.+)|\s+for\s+(.+))$/i);

  if (!match) {
    return null;
  }

  return {
    doseLabel: match[1],
    displayTitle: (match[2] ?? match[3]).trim(),
  };
}

function buildSupportSectionGroups(sections: ProductSupportSection[]) {
  const groups: SupportSectionGroup[] = [];
  let activeGroup: SupportSectionGroup | undefined;

  sections.forEach((section) => {
    const doseTitle = parseDoseSectionTitle(section.title);
    const displaySection = {
      ...section,
      displayTitle: doseTitle?.displayTitle ?? stripSectionNumber(section.title),
    };

    if (doseTitle && activeGroup?.doseLabel !== doseTitle.doseLabel) {
      activeGroup = {
        doseLabel: doseTitle.doseLabel,
        sections: [],
      };
      groups.push(activeGroup);
    }

    if (!activeGroup) {
      activeGroup = {
        doseLabel: null,
        sections: [],
      };
      groups.push(activeGroup);
    }

    activeGroup.sections.push(displaySection);
  });

  return groups;
}

function SupportSectionCard({ section }: { section: DisplaySupportSection }) {
  return (
    <article className="border-l-2 border-secondary/60 bg-surface-container-lowest/70 py-4 pl-5 pr-3">
      <h3 className="font-h3 text-xl text-primary">{section.displayTitle}</h3>
      {section.subtitle ? <p className="mt-1 font-body-sm text-body-sm text-secondary">{section.subtitle}</p> : null}
      <ul className="mt-4 space-y-3">
        {section.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 font-body-sm text-body-sm text-on-surface-variant">
            <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export function ProductDetailPageContent({ product }: ProductDetailPageContentProps) {
  const productTitle = product.variantLabel ? `${product.name} - ${product.variantLabel}` : product.name;
  const supportSectionGroups = buildSupportSectionGroups(product.supportSections);
  const hasDoseGroupedSections = supportSectionGroups.some((group) => group.doseLabel);

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

        <div className="grid grid-cols-1 gap-lg lg:grid-cols-12">
          <ProductImageGallery productName={productTitle} images={product.detailImages} badge={product.badge} />

          <section className="reveal-up reveal-delay-1 flex flex-col gap-lg lg:col-span-6">
            <div className="flex flex-col gap-xs">
              {product.variantLabel ? (
                <span className="inline-flex w-fit rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-secondary">
                  {product.variantLabel}
                </span>
              ) : null}
              <h1 className="font-h1 text-[clamp(1.85rem,7vw,2.35rem)] font-bold leading-[1.08] tracking-[-0.03em] text-primary md:text-h1">
                {product.name}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">{product.genericName}</p>
            </div>

            <div className="grid grid-cols-2 gap-sm md:grid-cols-4">
              <DetailStat label="Therapeutic Class" value={product.therapeuticClass} />
              <DetailStat label="Dosage Form" value={product.dosageForm} />
              <DetailStat label="Pack / Strength" value={product.availableStrengths} />
              <DetailStat label="Administration" value={product.administration} />
            </div>

            <div className="my-2 h-px w-full bg-outline-variant/30" />

            <div id="product-overview" className="flex flex-col gap-md">
              <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
                <NotesIcon className="h-6 w-6 text-secondary" />
                <span>Product Overview</span>
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">{product.overview}</p>
              <div className="rounded-lg border-l-4 border-secondary bg-surface-container-highest p-sm">
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  <strong className="text-on-surface">Important Note:</strong> {product.importantNote}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-md pt-sm">
              <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
                <NotesIcon className="h-6 w-6 text-secondary" />
                <span>Scientific Rationale</span>
              </h2>
              {hasDoseGroupedSections ? (
                <div className="space-y-xl">
                  {supportSectionGroups.map((group, groupIndex) => (
                    <section
                      key={`${product.slug}-${group.doseLabel ?? groupIndex}`}
                      className="reveal-soft"
                    >
                      {group.doseLabel ? (
                        <h3 className="mb-4 border-b border-outline-variant/30 pb-2 font-h3 text-2xl text-secondary">
                          {group.doseLabel}
                        </h3>
                      ) : null}

                      <div className="space-y-2">
                        {group.sections.map((section) => (
                          <SupportSectionCard key={`${product.slug}-${section.title}`} section={section} />
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              ) : (
                <div className="space-y-md">
                  {supportSectionGroups.flatMap((group) =>
                    group.sections.map((section) => (
                      <div key={`${product.slug}-${section.title}`} className="reveal-soft">
                        <SupportSectionCard section={section} />
                      </div>
                    )),
                  )}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-md pt-sm">
              <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
                <MedicationIcon className="h-6 w-6 text-secondary" />
                <span>Key Support Areas</span>
              </h2>
              <div className="grid gap-sm md:grid-cols-2">
                {product.supportRows.map((row) => (
                  <article
                    key={`${product.slug}-${row.focus}`}
                    className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-4 shadow-[var(--shadow-panel-soft)]"
                  >
                    <span className="font-label-caps text-label-caps uppercase text-secondary">Support Focus</span>
                    <h3 className="mt-2 font-body-md text-body-md font-semibold text-on-surface">{row.focus}</h3>
                    <p className="mt-3 font-body-sm text-body-sm text-on-surface-variant">{row.rationale}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
