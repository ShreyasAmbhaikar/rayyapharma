import Link from 'next/link';

import { siteConfig } from '@/content/site';

import { BrandLogo } from '@/components/brand-logo';
import { MobileNav } from '@/components/mobile-nav';
import { ProductSearchForm } from '@/components/product-search-form';
import { ThemeToggle } from '@/components/theme-toggle';

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
    <header className="sticky top-0 z-50 border-b border-outline-variant/55 bg-surface-container-lowest/90 shadow-nav backdrop-blur-md">
      <nav
        className="section-shell flex h-[76px] items-center justify-between gap-4 md:grid md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-5"
        aria-label="Primary"
      >
        <Link
          href="/"
          aria-label={`${siteConfig.name} home`}
          className="inline-flex shrink-0 items-center rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <BrandLogo size="header" subtitle="pharma" />
        </Link>

        <div className="hidden min-w-0 items-center justify-center gap-5 md:flex lg:gap-7 xl:gap-8">
          {siteConfig.navLinks.map((link) => {
            const isActive = isActiveLink(link.href, currentPath);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border-b-2 pb-1 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-primary text-primary'
                    : 'border-transparent text-on-surface-variant hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden min-w-0 items-center justify-end gap-3 md:flex">
          <ProductSearchForm
            formClassName="w-[clamp(12rem,22vw,20rem)] min-w-0 shrink"
            shellClassName="flex w-full items-center rounded-full border border-secondary/20 bg-surface-container-lowest/85 p-1 shadow-[var(--shadow-search)] backdrop-blur-sm transition-shadow focus-within:shadow-[var(--shadow-search-focus)]"
            inputClassName="h-9 min-w-0 flex-1 bg-transparent px-4 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant/70 focus:outline-none"
            buttonClassName="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-on-primary shadow-[0_8px_20px_rgba(8,86,147,0.28)] transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          />

          <ThemeToggle showLabel />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="px-1.5" />
          <MobileNav currentPath={currentPath} links={siteConfig.navLinks} />
        </div>
      </nav>
    </header>
  );
}
