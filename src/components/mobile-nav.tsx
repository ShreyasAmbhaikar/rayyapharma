'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import type { LinkItem } from '@/content/site';

import { CloseIcon, MenuIcon } from '@/components/icons';
import { ProductSearchForm } from '@/components/product-search-form';

type MobileNavProps = {
  currentPath: string;
  links: ReadonlyArray<LinkItem>;
};

function normalizePath(path: string) {
  return path === '/' ? '/' : path.replace(/\/+$/, '');
}

export function MobileNav({ currentPath, links }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const current = normalizePath(currentPath);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.removeProperty('overflow');
      return;
    }

    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.removeProperty('overflow');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative z-[70] md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/10 bg-surface-container-lowest/80 text-primary transition-colors hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden" onClick={() => setIsOpen(false)}>
          <div className="section-shell relative pt-[88px]">
            <div
              id="mobile-nav-panel"
              onClick={(event) => event.stopPropagation()}
              className="reveal-soft rounded-2xl border border-outline-variant/60 bg-surface-container-lowest/95 p-5 shadow-lift"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-on-surface-variant">
                  Menu
                </p>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-surface-container-low text-primary transition-colors hover:bg-surface-container-high focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {links.map((link) => {
                  const href = normalizePath(link.href);
                  const isActive = href === current;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${
                        isActive ? 'bg-surface-container-high text-primary' : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <ProductSearchForm
                formClassName="mt-4"
                onNavigate={() => setIsOpen(false)}
                shellClassName="flex w-full items-center overflow-hidden rounded-full border border-secondary/20 bg-surface-container-lowest/88 p-1 shadow-[var(--shadow-search)] backdrop-blur-md transition-shadow focus-within:shadow-[var(--shadow-search-focus)]"
                inputClassName="h-10 flex-1 bg-transparent px-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none"
                buttonClassName="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-on-primary shadow-[0_8px_20px_rgba(8,86,147,0.28)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
