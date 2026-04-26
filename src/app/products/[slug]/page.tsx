import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { MarketingShell } from '@/components/marketing-shell';
import { siteConfig } from '@/content/site';
import { ProductDetailPageContent } from '@/components/product-detail-page';
import { getProductBySlug, products } from '@/content/products';
import { buildAbsoluteUrl } from '@/lib/seo';

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const title = `${product.name} | Rayya Pharma Pvt Ltd`;
  const description = product.description;
  const url = buildAbsoluteUrl(product.href);
  const image = buildAbsoluteUrl(product.imageSrc);

  return {
    title: {
      absolute: title,
    },
    applicationName: 'Rayya Pharma Pvt Ltd',
    description,
    keywords: ['Rayya Pharma Pvt Ltd', siteConfig.legalName, product.category, product.type, ...product.keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Rayya Pharma Pvt Ltd',
      type: 'article',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${product.name} product preview`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
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
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.detailImages.map((image) => buildAbsoluteUrl(image.src)),
    brand: {
      '@type': 'Brand',
      name: 'Rayya Pharma Pvt Ltd',
    },
    category: product.category,
    url: buildAbsoluteUrl(product.href),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Products',
        item: buildAbsoluteUrl('/products/'),
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: product.category,
        item: buildAbsoluteUrl('/products/'),
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: product.name,
        item: buildAbsoluteUrl(product.href),
      },
    ],
  };

  return (
    <MarketingShell currentPath="/products/">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ProductDetailPageContent product={product} />
    </MarketingShell>
  );
}
