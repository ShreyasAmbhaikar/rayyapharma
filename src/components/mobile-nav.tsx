'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import type { LinkItem } from '@/content/site';

import { CloseIcon, MenuIcon, SearchIcon } from '@/components/icons';

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
        className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-lg border border-primary/10 bg-white/80 text-primary transition-colors hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-expanded={isOpen}
        aria-controls="mobile-nav-panel"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setIsOpen(false)}
            className="reveal-fade absolute inset-0 bg-slate-950/18 backdrop-blur-[2px]"
          />

          <div className="section-shell relative z-10 pt-[88px]">
            <div
              id="mobile-nav-panel"
              className="reveal-soft rounded-2xl border border-outline-variant/60 bg-white/95 p-5 shadow-lift backdrop-blur-xl"
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
              </div>

              <form
                action="/products/"
                method="get"
                role="search"
                aria-label="Search products"
                onSubmit={() => setIsOpen(false)}
                className="mt-4"
              >
                <div className="flex w-full items-center rounded-full border border-secondary/20 bg-white/90 p-1 shadow-[0_10px_30px_rgba(8,86,147,0.08)] backdrop-blur-sm transition-shadow focus-within:shadow-[0_14px_36px_rgba(8,86,147,0.14)]">
                  <input
                    type="search"
                    name="query"
                    placeholder="Search products"
                    className="h-10 flex-1 bg-transparent px-4 font-body-md text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none"
                    aria-label="Search products"
                  />
                  <button
                    type="submit"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-[#7BCB45] via-[#1FAE8B] to-[#085693] text-white shadow-[0_8px_20px_rgba(8,86,147,0.28)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    aria-label="Search"
                  >
                    <SearchIcon className="h-5 w-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
