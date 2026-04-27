'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { ArrowRightIcon } from '@/components/icons';
import { products } from '@/content/products';

const allProductsFilter = 'All Products';
const filterChips = [allProductsFilter, ...new Set(products.map((product) => product.category))];

function PrenatalIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="M8 5.5h2.5a3.5 3.5 0 0 1 0 7H8a3.5 3.5 0 1 1 0-7Z" />
      <path d="m10 8 4 4" />
      <path d="M13.5 11.5H16a3.5 3.5 0 1 1 0 7h-2.5a3.5 3.5 0 1 1 0-7Z" />
    </svg>
  );
}

function CategoryIcon({ className }: { className?: string }) {
  return <PrenatalIcon className={className} />;
}

export function ProductsPageContent() {
  const [activeFilter, setActiveFilter] = useState<string>(allProductsFilter);

  const filteredProducts =
    activeFilter === allProductsFilter
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div className="font-body-md text-body-md text-on-background antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <section className="section-shell pt-xl">
        <div className="mx-auto mb-xl max-w-3xl text-center">
          <h1 className="mb-sm font-h1 text-h1 text-primary">Our Products</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Rayya Pharma Pvt Ltd offers a focused range of quality pharmaceutical products, developed with precision in
            Pune, India, to support dependable healthcare delivery across specialized therapeutic segments.
          </p>
        </div>

        <section className="mb-xl flex flex-wrap justify-center gap-sm">
          {filterChips.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full px-6 py-2 font-button text-button transition-colors ${
                  isActive
                    ? 'bg-primary text-white shadow-[0_10px_24px_rgba(8,86,147,0.14)] hover:bg-[var(--primary-hover)]'
                    : 'border border-outline-variant bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </section>

        <section className="mx-auto grid max-w-[84rem] grid-cols-1 gap-8 overflow-visible pt-3 pb-xl md:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <article key={product.name} className="relative h-full overflow-visible">
              <Link
                href={product.href}
                aria-label={`View details for ${product.name}`}
                className="group relative flex h-full min-h-0 flex-col overflow-hidden rounded-[22px] border border-[var(--primary-border)] bg-white px-3 pb-5 pt-3 shadow-[0_16px_34px_rgba(8,86,147,0.1)] transition-all duration-300 hover:z-20 hover:animate-card-bounce-up hover:border-primary hover:shadow-[0_22px_42px_rgba(8,86,147,0.16)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <div className="relative overflow-hidden rounded-[18px]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-white">
                    <Image
                      src={product.imageSrc}
                      alt={product.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full border border-[#9A5FA8] bg-gradient-to-r from-[#FCEFFD] to-[#FFF8FF] px-2.5 py-1 shadow-[0_10px_24px_rgba(90,39,106,0.16)] backdrop-blur-sm transition-all duration-300 group-hover:border-[#80488E] group-hover:shadow-[0_14px_28px_rgba(90,39,106,0.2)]">
                    <CategoryIcon className="h-3.5 w-3.5 text-[#7E3F8F]" />
                    <span className="text-[0.95rem] font-semibold text-[#7E3F8F]">{product.category}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-1 pb-1 pt-4">
                  <h2 className="mb-2 text-[clamp(1.55rem,1.6vw,1.85rem)] font-bold leading-tight tracking-[0.01em] text-primary">
                    {product.name}
                  </h2>
                  <p className="mb-4 flex-grow font-body-sm text-body-sm leading-7 text-on-surface-variant">
                    {product.description}
                  </p>

                  <div className="mt-auto flex items-end justify-between gap-4 border-t border-outline-variant/30 pt-3.5">
                    <div className="pr-4">
                      <span className="block text-sm font-bold uppercase tracking-[0.08em] text-primary">{product.dosageForm}</span>
                      <span className="text-xs text-on-surface-variant">{product.availableStrengths}</span>
                    </div>

                    <span className="inline-flex flex-none items-center gap-2 rounded-full border border-primary bg-primary px-4 py-2 text-sm font-semibold text-white transition-all duration-300 group-hover:border-[var(--primary-hover)] group-hover:bg-[var(--primary-hover)]">
                      <span>View Details</span>
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </section>

        <section className="mx-auto max-w-5xl pb-xl">
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--primary-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(244,248,255,0.96))] px-6 py-8 shadow-[0_18px_40px_rgba(8,86,147,0.12)] md:px-10">
            <div className="absolute -right-12 top-0 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(126,63,143,0.18),rgba(126,63,143,0))]" aria-hidden="true" />
            <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(8,86,147,0.18),rgba(8,86,147,0))]" aria-hidden="true" />

            <div className="relative flex flex-col gap-5 text-center">
              <div className="mx-auto inline-flex items-center gap-1.5 rounded-full border border-[#9A5FA8] bg-gradient-to-r from-[#FCEFFD] to-[#FFF8FF] px-3 py-1.5 shadow-[0_10px_24px_rgba(90,39,106,0.12)]">
                <CategoryIcon className="h-4 w-4 text-[#7E3F8F]" />
                <span className="text-sm font-semibold tracking-[0.04em] text-[#7E3F8F]">Expanding Portfolio</span>
              </div>

              <div className="mx-auto max-w-2xl">
                <h2 className="text-[clamp(1.8rem,2.4vw,2.4rem)] font-bold leading-tight text-primary">More Products Coming Soon</h2>
                <p className="mt-3 font-body-md text-body-md leading-7 text-on-surface-variant">
                  We are growing the Rayya Pharma portfolio with more focused formulations crafted to support specialized
                  care needs with the same commitment to quality, precision, and patient-centered innovation.
                </p>
              </div>

              <div className="flex justify-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/75" />
                <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/45" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
