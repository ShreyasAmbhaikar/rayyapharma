import { PlaceholderPage } from '@/components/placeholder-page';
import { placeholderPages } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: placeholderPages['terms-of-service'].title,
  description: placeholderPages['terms-of-service'].description,
  path: placeholderPages['terms-of-service'].path,
  noIndex: true,
});

export default function TermsOfServicePage() {
  return <PlaceholderPage routeKey="terms-of-service" />;
}
