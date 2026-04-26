import type { Metadata } from 'next';

import { siteConfig } from '@/content/site';

type BuildMetadataOptions = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  image?: string;
};

function normalizePath(path = '/') {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  if (!path.startsWith('/')) {
    return normalizePath(`/${path}`);
  }

  if (path === '/') {
    return path;
  }

  if (/\/[^/]+\.[^/]+$/.test(path)) {
    return path;
  }

  return path.endsWith('/') ? path : `${path}/`;
}

export function buildAbsoluteUrl(path = '/') {
  return new URL(normalizePath(path), siteConfig.siteUrl).toString();
}

export function buildMetadata({
  title,
  description = siteConfig.description,
  path = '/',
  noIndex = false,
  image = siteConfig.socialImage,
}: BuildMetadataOptions = {}): Metadata {
  const canonical = buildAbsoluteUrl(path);
  const openGraphTitle = title ?? siteConfig.defaultTitle;
  const socialImage = buildAbsoluteUrl(image);

  return {
    ...(title ? { title } : {}),
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: canonical,
      title: openGraphTitle,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} social preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: openGraphTitle,
      description,
      images: [socialImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
          nocache: true,
          googleBot: {
            index: false,
            follow: true,
          },
        }
      : {
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
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,
    url: siteConfig.siteUrl,
    logo: buildAbsoluteUrl(siteConfig.organization.logo),
    description: siteConfig.description,
    slogan: siteConfig.organization.tagline,
    foundingDate: siteConfig.organization.foundingDate,
    identifier: {
      '@type': 'PropertyValue',
      propertyID: 'CIN',
      value: siteConfig.companyPlaceholders.cin,
    },
    address: {
      '@type': 'PostalAddress',
      ...siteConfig.companyPlaceholders.address,
    },
    founder: siteConfig.companyPlaceholders.directors.map((director) => ({
      '@type': 'Person',
      name: director.name,
      jobTitle: director.designation,
    })),
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.organization.name,
    },
    inLanguage: 'en-IN',
  };
}
