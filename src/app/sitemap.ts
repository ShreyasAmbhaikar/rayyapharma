import type { MetadataRoute } from 'next';

import { products } from '@/content/products';
import { buildAbsoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: buildAbsoluteUrl('/'),
      changeFrequency: 'monthly',
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: buildAbsoluteUrl('/products/'),
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: buildAbsoluteUrl('/team/'),
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: buildAbsoluteUrl('/contact/'),
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: buildAbsoluteUrl('/our-story/'),
      changeFrequency: 'monthly',
      priority: 0.8,
      lastModified: new Date(),
    },
    ...products.map((product) => ({
      url: buildAbsoluteUrl(product.href),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date(),
    })),
  ];
}
