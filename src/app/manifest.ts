import type { MetadataRoute } from 'next';

import { siteConfig } from '@/content/site';
import { themeColors } from '@/lib/theme';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#f8f9ff',
    theme_color: themeColors.light,
    icons: [
      {
        src: '/brand/rayya-pharma-dark.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
