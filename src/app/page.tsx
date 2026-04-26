import { AboutSection } from '@/components/about-section';
import { CommitmentSection } from '@/components/commitment-section';
import { CorporateIdentitySection } from '@/components/corporate-identity-section';
import { HeroSection } from '@/components/hero-section';
import { MarketingShell } from '@/components/marketing-shell';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  path: '/',
});

export default function HomePage() {
  return (
    <MarketingShell currentPath="/">
      <HeroSection />
      <AboutSection />
      <CommitmentSection />
      <CorporateIdentitySection />
    </MarketingShell>
  );
}

