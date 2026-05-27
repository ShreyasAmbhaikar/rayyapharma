import type { Metadata } from 'next';

import { siteConfig } from '@/content/site';
import { MarketingShell } from '@/components/marketing-shell';
import { OurStoryPageContent } from '@/components/our-story-page';
import { buildAbsoluteUrl } from '@/lib/seo';

const title = 'Our Story | Rayya Pharma Pvt Ltd';
const description =
  'Discover how Dr. Poonam Devidas Karale inspired Rayya Pharma Feto Nurture Tri 1, 2, and 3, a trimester-wise pregnancy nutrition range created with care.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  applicationName: 'Rayya Pharma Pvt Ltd',
  description,
  keywords: [
    'Rayya Pharma Feto Nurture Tri story',
    'Feto Nurture Tri 1 2 3',
    'Dr Poonam Devidas Karale',
    'trimester pregnancy nutrition',
    'prenatal nutrition supplements',
    siteConfig.legalName,
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
