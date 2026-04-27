import Link from 'next/link';

import { siteConfig } from '@/content/site';

import { BrandLogo } from '@/components/brand-logo';
import { SearchIcon } from '@/components/icons';
import { MobileNav } from '@/components/mobile-nav';

type SiteHeaderProps = {
  currentPath: string;
};

function normalizePath(path: string) {
  return path === '/' ? '/' : path.replace(/\/+$/, '');
}

function isActiveLink(linkHref: string, currentPath: string) {
  return normalizePath(linkHref) === normalizePath(currentPath);
}

export function SiteHeader({ currentPath }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 shadow-nav backdrop-blur-md">
      <nav className="section-shell relative flex h-[76px] items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <BrandLogo size="header" subtitle="pharma" />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center gap-8 md:flex">
          {siteConfig.navLinks.map((link) => {
            const isActive = isActiveLink(link.href, currentPath);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-slate-600 hover:text-primary'
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
          className="hidden md:flex md:w-[320px] md:shrink-0"
          role="search"
          aria-label="Search products"
        >
          <div className="flex w-full items-center rounded-full border border-secondary/20 bg-white/85 p-1 shadow-[0_10px_30px_rgba(8,86,147,0.08)] backdrop-blur-sm transition-shadow focus-within:shadow-[0_14px_36px_rgba(8,86,147,0.14)]">
            <input
              type="search"
              name="query"
              placeholder="Search products"
              className="h-9 flex-1 bg-transparent px-4 font-body-md text-body-md text-on-surface placeholder:text-slate-400 focus:outline-none"
              aria-label="Search products"
            />
            <button
              type="submit"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[#7BCB45] via-[#1FAE8B] to-[#085693] text-white shadow-[0_8px_20px_rgba(8,86,147,0.28)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              aria-label="Search"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
          </div>
        </form>

        <MobileNav currentPath={currentPath} links={siteConfig.navLinks} />
      </nav>
    </header>
  );
}
