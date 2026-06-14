import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import type { ReactNode } from 'react';
// import { SpeedInsights } from '@vercel/speed-insights/next';

import './globals.css';

import { siteConfig } from '@/content/site';
import { ScrollReveal } from '@/components/scroll-reveal';
import { ThemeScript } from '@/components/theme-script';
import { buildAbsoluteUrl, buildOrganizationSchema, buildWebsiteSchema } from '@/lib/seo';
import { themeColors } from '@/lib/theme';

const inter = localFont({
  src: [
    {
      path: '../assets/fonts/inter-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/inter-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/inter-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../assets/fonts/inter-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.defaultTitle,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  category: 'healthcare',
  keywords: [...siteConfig.keywords],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.siteUrl,
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: buildAbsoluteUrl(siteConfig.socialImage),
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} social preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.defaultTitle,
    description: siteConfig.description,
    images: [buildAbsoluteUrl(siteConfig.socialImage)],
  },
  icons: {
    icon: [{ url: '/brand/rayya-pharma-dark.png', type: 'image/png' }],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/brand/rayya-pharma-dark.png'],
  },
  manifest: '/manifest.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: themeColors.light },
    { media: '(prefers-color-scheme: dark)', color: themeColors.dark },
  ],
  colorScheme: 'light dark',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const schemas = [buildOrganizationSchema(), buildWebsiteSchema()];

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${inter.variable} min-h-screen bg-background font-sans text-on-background antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {schemas.map((schema) => (
          <script
            key={schema['@type']}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <ScrollReveal />
        {children}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
