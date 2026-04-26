import type { MetadataRoute } from 'next';

import { siteConfig } from '@/content/site';
import { buildAbsoluteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: buildAbsoluteUrl('/sitemap.xml'),
    host: siteConfig.siteUrl,
  };
}
