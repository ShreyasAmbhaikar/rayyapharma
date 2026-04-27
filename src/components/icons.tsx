import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

export function MenuIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.8v2.3" strokeLinecap="round" />
      <path d="M12 18.9v2.3" strokeLinecap="round" />
      <path d="M4.1 4.1 5.7 5.7" strokeLinecap="round" />
      <path d="m18.3 18.3 1.6 1.6" strokeLinecap="round" />
      <path d="M2.8 12h2.3" strokeLinecap="round" />
      <path d="M18.9 12h2.3" strokeLinecap="round" />
      <path d="m4.1 19.9 1.6-1.6" strokeLinecap="round" />
      <path d="m18.3 5.7 1.6-1.6" strokeLinecap="round" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path
        d="M20 14.6A7.8 7.8 0 0 1 9.4 4a8.1 8.1 0 1 0 10.6 10.6Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </svg>
  );
}

export function ScienceIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M10 3v5l-4.8 7.67A3 3 0 0 0 7.74 20h8.52a3 3 0 0 0 2.54-4.33L14 8V3" />
      <path d="M8 12h8" />
      <circle cx="10" cy="15" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a15 15 0 0 1 0 18" />
      <path d="M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 3l7 3v5c0 4.6-2.8 8.8-7 10-4.2-1.2-7-5.4-7-10V6l7-3z" />
      <path d="M9 12.5l2 2 4-4" />
    </svg>
  );
}

export function LocationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}

export function VerifiedIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="m12 3 2.4 1.2 2.6-.2 1.5 2.1 2.4 1.1-.3 2.6 1.1 2.4-1.7 1.9-.2 2.6-2.4.8-1.5 2.1-2.6-.5L12 21l-2.4-1.2-2.6.2-1.5-2.1-2.4-1.1.3-2.6-1.1-2.4 1.7-1.9.2-2.6 2.4-.8 1.5-2.1 2.6.5L12 3Z" />
      <path d="m8.8 12.4 2.2 2.2 4.5-4.7" />
    </svg>
  );
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M12 4v10" />
      <path d="m8.5 10.5 3.5 3.5 3.5-3.5" />
      <path d="M5 19h14" />
    </svg>
  );
}

export function SamplesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M7 4h10v3H7z" />
      <path d="M8.5 7v4.5l-3.8 5.8A1.8 1.8 0 0 0 6.2 20h11.6a1.8 1.8 0 0 0 1.5-2.7L15.5 11.5V7" />
      <path d="M9 13h6" />
    </svg>
  );
}

export function NotesIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M8 4h8l4 4v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M16 4v4h4" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </svg>
  );
}

export function MedicationIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M9 4h6a2 2 0 0 1 2 2v5H7V6a2 2 0 0 1 2-2Z" />
      <path d="M7 11h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7Z" />
      <path d="M12 7v8" />
      <path d="M9 15h6" />
    </svg>
  );
}

export function InfoIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10v5" />
      <circle cx="12" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <path d="M6.9 4.5h2.7l1.3 4-1.8 1.8a14.8 14.8 0 0 0 4.6 4.6l1.8-1.8 4 1.3v2.7a1.8 1.8 0 0 1-2 1.8A14.8 14.8 0 0 1 5 6.5a1.8 1.8 0 0 1 1.9-2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m5 7 7 6 7-6" />
    </svg>
  );
}

export function SearchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </svg>
  );
}
