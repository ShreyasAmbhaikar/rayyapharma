import Image from 'next/image';

type BrandLogoProps = {
  className?: string;
  size?: 'footer' | 'header';
  subtitle?: 'full' | 'pharma' | 'none';
};

export function BrandLogo({ className, size = 'header' }: BrandLogoProps) {
  const dimensions = size === 'footer' ? { width: 246, height: 81 } : { width: 178, height: 58 };

  return (
    <Image
      src="/brand/rayya-logo.svg"
      alt="Rayya Pharma logo"
      width={dimensions.width}
      height={dimensions.height}
      priority={size === 'header'}
      className={className}
    />
  );
}
