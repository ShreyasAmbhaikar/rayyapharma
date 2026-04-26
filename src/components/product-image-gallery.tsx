'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import type { ProductDetailImage } from '@/content/products';

type ProductImageGalleryProps = {
  productName: string;
  images: ProductDetailImage[];
  badge: string;
};

export function ProductImageGallery({ productName, images, badge }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const activeImage = images[activeIndex];

  return (
    <>
      <section className="flex flex-col gap-md lg:col-span-6">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="relative flex aspect-[5/4] items-center justify-center overflow-hidden rounded-xl border border-outline-variant/30 bg-surface shadow-sm transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:aspect-[6/5]"
          aria-label={`Open enlarged image for ${productName}`}
        >
          <Image
            src={activeImage.src}
            alt={activeImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-cover"
            style={{ objectPosition: activeImage.objectPosition }}
          />
          <div className="absolute right-sm top-sm flex items-center gap-2 rounded-full border border-outline-variant/20 bg-surface-container-low px-3 py-1 backdrop-blur-sm">
            <span className="font-label-caps text-label-caps text-on-surface">{badge}</span>
          </div>
          <div className="absolute bottom-sm left-1/2 -translate-x-1/2 rounded-full bg-inverse-surface/80 px-4 py-2 text-xs font-semibold text-inverse-on-surface">
            Click to enlarge
          </div>
        </button>

        {images.length > 0 ? (
          <div className="grid grid-cols-4 gap-sm">
            {images.map((image, index) => (
              <button
                key={`${productName}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1} for ${productName}`}
                className={`relative aspect-square overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                  index === activeIndex ? 'border-2 border-primary' : 'border border-outline-variant/30'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="96px"
                  className="object-cover"
                  style={{ objectPosition: image.objectPosition }}
                />
              </button>
            ))}
          </div>
        ) : null}
      </section>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${productName} image viewer`}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/85 text-xl font-semibold text-white transition-colors hover:bg-slate-800"
              aria-label="Close image viewer"
            >
              ×
            </button>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-container-low">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                style={{ objectPosition: activeImage.objectPosition }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
