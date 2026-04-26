import { PlaceholderPage } from '@/components/placeholder-page';
import { placeholderPages } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: placeholderPages['clinical-excellence'].title,
  description: placeholderPages['clinical-excellence'].description,
  path: placeholderPages['clinical-excellence'].path,
  noIndex: true,
});

export default function ClinicalExcellencePage() {
  return <PlaceholderPage routeKey="clinical-excellence" />;
}

