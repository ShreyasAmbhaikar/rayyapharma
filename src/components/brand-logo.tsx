import Image from 'next/image';

type BrandLogoProps = {
  className?: string;
  size?: 'footer' | 'header';
  subtitle?: 'full' | 'pharma' | 'none';
};

type LogoAsset = {
  bounds: {
    height: number;
    left: number;
    top: number;
    width: number;
  };
  className: string;
  src: string;
};

const sourceDimensions = {
  width: 1536,
  height: 1024,
};

const logoAssets: LogoAsset[] = [
  {
    src: '/brand/rayya-pharma-dark.png',
    className: 'dark:hidden',
    bounds: {
      left: 212,
      top: 160,
      width: 1229,
      height: 636,
    },
  },
  {
    src: '/brand/rayya-pharma-white.png',
    className: 'hidden dark:block',
    bounds: {
      left: 212,
      top: 217,
      width: 1229,
      height: 579,
    },
  },
];

export function BrandLogo({ className, size = 'header' }: BrandLogoProps) {
  const dimensions = size === 'footer' ? { width: 198, height: 85 } : { width: 130, height: 56 };
  const imageSizes = size === 'footer' ? '198px' : '130px';

  return (
    <span
      className={`relative block overflow-hidden ${className ?? ''}`}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      {logoAssets.map((asset) => {
        const scale = dimensions.height / asset.bounds.height;

        return (
          <Image
            key={asset.src}
            src={asset.src}
            alt="Rayya Pharma logo"
            width={sourceDimensions.width}
            height={sourceDimensions.height}
            priority={size === 'header'}
            sizes={imageSizes}
            className={`absolute max-w-none ${asset.className}`}
            style={{
              height: sourceDimensions.height * scale,
              left: -asset.bounds.left * scale,
              top: -asset.bounds.top * scale,
              width: sourceDimensions.width * scale,
            }}
          />
        );
      })}
    </span>
  );
}
