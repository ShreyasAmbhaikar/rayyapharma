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
              src="/images/transparent 404 image.webp"
              alt="404 illustration"
              width={1200}
              height={900}
              priority
              className="mx-auto h-auto w-full max-w-[720px]"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/" className="primary-button">
              Return Home
            </Link>
            <Link href="/contact/" className="secondary-button">
              Visit Contact
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  );
}
