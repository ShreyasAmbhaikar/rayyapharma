import type { Metadata } from 'next';

import { siteConfig } from '@/content/site';
import { MarketingShell } from '@/components/marketing-shell';
import { TeamPageContent } from '@/components/team-page';
import { buildAbsoluteUrl } from '@/lib/seo';

const title = 'Our Team | Rayya Pharma Pvt Ltd';
const description =
  'Meet the managing directors and leadership values behind Rayya Pharma Pvt Ltd.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  applicationName: 'Rayya Pharma Pvt Ltd',
  description,
  keywords: [
    'Rayya Pharma Pvt Ltd team',
    siteConfig.legalName,
    'managing directors',
    'pharmaceutical leadership',
  ],
  alternates: {
    canonical: buildAbsoluteUrl('/team/'),
  },
  openGraph: {
    title,
    description,
    url: buildAbsoluteUrl('/team/'),
    siteName: 'Rayya Pharma Pvt Ltd',
    images: [
      {
        url: buildAbsoluteUrl('/seo/rayya-og.png'),
        width: 1200,
        height: 630,
        alt: 'Rayya Pharma Pvt Ltd team preview',
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

export default function TeamPage() {
  return (
    <MarketingShell currentPath="/team/">
      <TeamPageContent />
    </MarketingShell>
  );
}
