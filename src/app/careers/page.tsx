import { PlaceholderPage } from '@/components/placeholder-page';
import { placeholderPages } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: placeholderPages.careers.title,
  description: placeholderPages.careers.description,
  path: placeholderPages.careers.path,
  noIndex: true,
});

export default function CareersPage() {
  return <PlaceholderPage routeKey="careers" />;
}

