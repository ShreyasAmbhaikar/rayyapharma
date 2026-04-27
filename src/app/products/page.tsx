import type { Metadata } from 'next';

import { siteConfig } from '@/content/site';
import { MarketingShell } from '@/components/marketing-shell';
import { ProductsPageContent } from '@/components/products-page';
import { buildAbsoluteUrl } from '@/lib/seo';

const title = 'Products | Rayya Pharma Pvt Ltd';
const description =
  'Explore trimester-focused prenatal tablet formulations from Rayya Pharma Pvt Ltd, including FETO NURTURE TRI 1, FETO NURTURE TRI 2, and FETO NURTURE TRI 3.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  applicationName: 'Rayya Pharma Pvt Ltd',
  description,
  keywords: [
    'Rayya Pharma Pvt Ltd',
    siteConfig.legalName,
    'prenatal nutrition tablets',
    'pregnancy supplements',
    'FETO NURTURE TRI 1',
    'FETO NURTURE TRI 2',
    'FETO NURTURE TRI 3',
  ],
  alternates: {
    canonical: buildAbsoluteUrl('/products/'),
  },
  openGraph: {
    title,
    description,
    url: buildAbsoluteUrl('/products/'),
    siteName: 'Rayya Pharma Pvt Ltd',
    images: [
      {
        url: buildAbsoluteUrl('/seo/rayya-og.png'),
        width: 1200,
        height: 630,
        alt: 'Rayya Pharma Pvt Ltd product portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [buildAbsoluteUrl('/seo/rayya-og.png')],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function ProductsPage() {
  return (
    <MarketingShell currentPath="/products/">
      <ProductsPageContent />
    </MarketingShell>
  );
}
