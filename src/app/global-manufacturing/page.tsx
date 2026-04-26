import { PlaceholderPage } from '@/components/placeholder-page';
import { placeholderPages } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: placeholderPages['global-manufacturing'].title,
  description: placeholderPages['global-manufacturing'].description,
  path: placeholderPages['global-manufacturing'].path,
  noIndex: true,
});

export default function GlobalManufacturingPage() {
  return <PlaceholderPage routeKey="global-manufacturing" />;
}

