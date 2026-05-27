'use client';

import { useEffect, useRef, useState } from 'react';
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent } from 'react';
import Image from 'next/image';

import { ChevronRightIcon } from '@/components/icons';
import type { ProductDetailImage } from '@/content/products';

type ProductImageGalleryProps = {
  productName: string;
  images: ProductDetailImage[];
  badge: string;
};

export function ProductImageGallery({ productName, images, badge }: ProductImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const dragStartX = useRef<number | null>(null);
  const shouldSkipOpen = useRef(false);

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
  const hasMultipleImages = images.length > 1;

  const showImageAt = (index: number) => {
    setActiveIndex((index + images.length) % images.length);
  };

  const showNextImage = () => showImageAt(activeIndex + 1);
  const showPreviousImage = () => showImageAt(activeIndex - 1);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasMultipleImages) {
      return;
    }

    dragStartX.current = event.clientX;
    shouldSkipOpen.current = false;
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (!hasMultipleImages || dragStartX.current === null) {
      return;
    }

    const dragDistance = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(dragDistance) < 44) {
      return;
    }

    shouldSkipOpen.current = true;

    if (dragDistance > 0) {
      showNextImage();
      return;
    }

    showPreviousImage();
  };

  const handlePointerCancel = () => {
    dragStartX.current = null;
  };

  const handleMainImageOpen = () => {
    if (shouldSkipOpen.current) {
      shouldSkipOpen.current = false;
      return;
    }

    setIsOpen(true);
  };

  const handleMainImageKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setIsOpen(true);
      return;
    }

    if (!hasMultipleImages) {
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showNextImage();
    }

    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showPreviousImage();
    }
  };

  return (
    <>
      <section className="flex flex-col gap-md lg:col-span-6 reveal-soft">
        <div
          role="button"
          tabIndex={0}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onClick={handleMainImageOpen}
          onKeyDown={handleMainImageKeyDown}
          className="relative flex aspect-[5/4] touch-pan-y select-none items-center justify-center overflow-hidden rounded-xl border border-outline-variant/30 bg-surface shadow-sm transition-transform hover:scale-[1.01] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:aspect-[6/5]"
          aria-label={`Open enlarged image for ${productName}. Swipe right for next image.`}
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

          {hasMultipleImages ? (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPreviousImage();
                }}
                className="absolute left-sm top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-brand-gradient text-on-primary shadow-[0_10px_28px_rgba(8,86,147,0.34)] transition-all hover:scale-105 hover:shadow-[0_14px_34px_rgba(8,86,147,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-secondary/70 dark:shadow-[0_10px_28px_rgba(80,217,254,0.22)] dark:hover:shadow-[0_14px_34px_rgba(80,217,254,0.3)]"
                aria-label="Show previous product image"
              >
                <ChevronRightIcon className="h-5 w-5 rotate-180" />
              </button>

              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNextImage();
                }}
                className="absolute right-sm top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-brand-gradient text-on-primary shadow-[0_10px_28px_rgba(8,86,147,0.34)] transition-all hover:scale-105 hover:shadow-[0_14px_34px_rgba(8,86,147,0.42)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:border-secondary/70 dark:shadow-[0_10px_28px_rgba(80,217,254,0.22)] dark:hover:shadow-[0_14px_34px_rgba(80,217,254,0.3)]"
                aria-label="Show next product image"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </>
          ) : null}
        </div>

        {images.length > 0 ? (
          <div className="grid grid-cols-4 gap-sm">
            {images.map((image, index) => (
              <button
                key={`${productName}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1} for ${productName}`}
                aria-current={index === activeIndex}
                className={`relative aspect-square overflow-hidden rounded-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary ${
                  index === activeIndex
                    ? 'border-2 border-primary shadow-[0_0_0_3px_rgba(8,86,147,0.16)] dark:border-secondary dark:shadow-[0_0_0_3px_rgba(80,217,254,0.2)]'
                    : 'border border-outline-variant/30 opacity-85 hover:opacity-100'
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
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-surface-container-lowest p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-inverse-surface/85 text-xl font-semibold text-inverse-on-surface transition-colors hover:bg-inverse-surface"
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
