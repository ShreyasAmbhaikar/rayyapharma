import type { Metadata } from 'next';

import { ContactPageContent } from '@/components/contact-page';
import { siteConfig } from '@/content/site';
import { MarketingShell } from '@/components/marketing-shell';
import { buildAbsoluteUrl } from '@/lib/seo';

const title = 'Contact Us | Rayya Pharma Pvt Ltd';
const description =
  'Reach Rayya Pharma Pvt Ltd at its registered office in Moshi, Pune, Maharashtra for business, company, and general inquiries.';

export const metadata: Metadata = {
  title: {
    absolute: title,
  },
  applicationName: 'Rayya Pharma Pvt Ltd',
  description,
  keywords: [
    'Rayya Pharma Pvt Ltd contact',
    siteConfig.legalName,
    siteConfig.companyPlaceholders.cin,
    'pharmaceutical contact page',
    'Moshi Pune pharma office',
  ],
  alternates: {
    canonical: buildAbsoluteUrl('/contact/'),
  },
  openGraph: {
    title,
    description,
    url: buildAbsoluteUrl('/contact/'),
    siteName: 'Rayya Pharma Pvt Ltd',
    images: [
      {
        url: buildAbsoluteUrl('/images/contact/navi-mumbai-map.webp'),
        width: 1200,
        height: 630,
        alt: 'Rayya Pharma Pvt Ltd contact page preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [buildAbsoluteUrl('/images/contact/navi-mumbai-map.webp')],
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

export default function ContactPage() {
  return (
    <MarketingShell currentPath="/contact/">
      <ContactPageContent />
    </MarketingShell>
  );
}
