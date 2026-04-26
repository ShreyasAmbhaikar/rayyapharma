'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import type { LinkItem } from '@/content/site';

import { CloseIcon, MenuIcon } from '@/components/icons';

type MobileNavProps = {
  currentPath: string;
  links: ReadonlyArray<LinkItem>;
  contactHref: string;
};

function normalizePath(path: string) {
  return path === '/' ? '/' : path.replace(/\/+$/, '');
}

export function MobileNav({ currentPath, links, contactHref }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const current = normalizePath(currentPath);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/10 bg-white/80 text-primary transition-colors hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div
          id="mobile-nav-panel"
          className="absolute left-6 right-6 top-[calc(100%+12px)] rounded-xl border border-outline-variant/60 bg-white/95 p-5 shadow-lift backdrop-blur-xl"
        >
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

            <Link href={contactHref} onClick={() => setIsOpen(false)} className="primary-button mt-2 w-full">
              Contact Us
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
}
