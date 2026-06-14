import Image from 'next/image';
import Link from 'next/link';

import { MarketingShell } from '@/components/marketing-shell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for could not be found on the Rayya Pharma website.',
  path: '/404/',
  noIndex: true,
});

export default function NotFound() {
  return (
    <MarketingShell currentPath="/">
      <section className="section-shell py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-10">
            <Image
              src="/images/404-no-bg.webp"
              alt="404 illustration"
              width={1200}
              height={900}
              priority
              className="mx-auto h-auto w-full max-w-[540px] md:max-w-[600px]"
            />
          </div>
          <p className="mb-8 text-lg font-semibold text-primary md:text-xl">
            Sorry, we couldn&apos;t find what you were looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/products/"
              prefetch={false}
              className="inline-flex items-center justify-center rounded-lg border border-transparent bg-brand-gradient px-6 py-3 font-button text-button text-on-primary shadow-[0_10px_24px_-6px_rgba(8,86,147,0.42)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_-8px_rgba(8,86,147,0.48)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Return to Products
            </Link>
            <Link
              href="/"
              prefetch={false}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[var(--primary-border)] bg-surface-container-lowest/70 px-6 py-3 font-button text-button text-primary transition-colors duration-200 hover:bg-surface-container-low focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
