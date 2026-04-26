import type { Metadata } from 'next';

import { siteConfig } from '@/content/site';
import { MarketingShell } from '@/components/marketing-shell';
import { OurStoryPageContent } from '@/components/our-story-page';
import { buildAbsoluteUrl } from '@/lib/seo';

const title = 'Our Story | Rayya Pharma Pvt Ltd';
const description =
  'Discover the story behind Rayya Pharma Pvt Ltd, our values, and our vision for serving healthcare professionals with trusted pharmaceutical solutions.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  applicationName: 'Rayya Pharma Pvt Ltd',
  description,
  keywords: [
    'Rayya Pharma story',
    'Our Story Rayya Pharma',
    siteConfig.legalName,
    'pharmaceutical marketing company',
    'healthcare distribution company',
  ],
  alternates: {
    canonical: buildAbsoluteUrl('/our-story/'),
  },
  openGraph: {
    title,
    description,
    url: buildAbsoluteUrl('/our-story/'),
    siteName: 'Rayya Pharma Pvt Ltd',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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

export default function OurStoryPage() {
  return (
    <MarketingShell currentPath="/our-story/">
      <OurStoryPageContent />
    </MarketingShell>
  );
}
