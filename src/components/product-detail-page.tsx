import Link from 'next/link';

import { ChevronRightIcon, MedicationIcon, NotesIcon } from '@/components/icons';
import { ProductImageGallery } from '@/components/product-image-gallery';
import type { ProductRecord } from '@/content/products';

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

export function ProductDetailPageContent({ product }: ProductDetailPageContentProps) {
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
          <span className="font-medium text-on-background">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-lg lg:grid-cols-12">
          <ProductImageGallery productName={product.name} images={product.detailImages} badge={product.badge} />

          <section className="reveal-up reveal-delay-1 flex flex-col gap-lg lg:col-span-6">
            <div className="flex flex-col gap-xs">
              <h1 className="font-h1 text-[clamp(1.85rem,7vw,2.35rem)] font-bold leading-[1.08] tracking-[-0.03em] whitespace-nowrap text-primary md:text-h1">
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
              <div className="space-y-md">
                {product.supportSections.map((section) => (
                  <article key={`${product.slug}-${section.title}`} className="reveal-soft rounded-xl border border-outline-variant/30 bg-surface-container-lowest p-md">
                    <h3 className="font-h3 text-xl text-primary">{section.title}</h3>
                    {section.subtitle ? (
                      <p className="mt-1 font-body-sm text-body-sm text-secondary">{section.subtitle}</p>
                    ) : null}
                    <ul className="mt-4 space-y-3">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 font-body-sm text-body-sm text-on-surface-variant">
                          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-md pt-sm">
              <h2 className="flex items-center gap-2 font-h3 text-h3 text-on-surface">
                <MedicationIcon className="h-6 w-6 text-secondary" />
                <span>Key Support Areas</span>
              </h2>
              <div className="overflow-x-auto rounded-lg border border-outline-variant/30">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-outline-variant/30 bg-surface-container-high font-label-caps text-label-caps text-on-surface">
                      <th className="px-4 py-3">Support Focus</th>
                      <th className="px-4 py-3">Why It Matters</th>
                    </tr>
                  </thead>
                  <tbody className="font-body-sm text-body-sm text-on-surface-variant">
                    {product.supportRows.map((row, index) => (
                      <tr
                        key={`${product.slug}-${row.focus}`}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-surface'}
                      >
                        <td className="border-b border-outline-variant/20 px-4 py-3 font-medium text-on-surface">
                          {row.focus}
                        </td>
                        <td className="border-b border-outline-variant/20 px-4 py-3">{row.rationale}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
