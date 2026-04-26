import { PlaceholderPage } from '@/components/placeholder-page';
import { placeholderPages } from '@/content/site';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: placeholderPages['privacy-policy'].title,
  description: placeholderPages['privacy-policy'].description,
  path: placeholderPages['privacy-policy'].path,
  noIndex: true,
});

export default function PrivacyPolicyPage() {
  return <PlaceholderPage routeKey="privacy-policy" />;
}

