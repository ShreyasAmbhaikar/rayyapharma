import { siteConfig } from '@/content/site';

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M19.05 4.94A9.9 9.9 0 0 0 12.03 2C6.56 2 2.1 6.45 2.1 11.93c0 1.75.46 3.46 1.34 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.77 1.22h.01c5.47 0 9.93-4.45 9.93-9.93a9.86 9.86 0 0 0-2.91-6.97Zm-7.02 15.22h-.01a8.24 8.24 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.28-4.37c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.42a8.2 8.2 0 0 1 2.42 5.85c0 4.56-3.71 8.27-8.28 8.27Zm4.53-6.19c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.96-.15.17-.29.19-.54.06-.25-.13-1.05-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.44-.06-.13-.57-1.36-.78-1.87-.2-.48-.41-.41-.57-.42h-.48c-.17 0-.44.06-.67.32-.23.25-.88.86-.88 2.09s.9 2.42 1.02 2.59c.13.17 1.77 2.71 4.28 3.8.6.26 1.07.42 1.44.54.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.17-.48-.29Z" />
    </svg>
  );
}

export function WhatsAppFloat() {
  const phoneNumber = siteConfig.companyPlaceholders.contactNumberStatus.replace(/\D/g, '');

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${siteConfig.name} on WhatsApp`}
      className="fixed bottom-8 right-5 z-50 inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_30%,#3af0a3_0%,#26d97f_38%,#14b96d_68%,#0a9b5b_100%)] text-white shadow-[0_0_0_6px_rgba(29,214,126,0.08),0_16px_34px_rgba(10,155,91,0.34)] transition-transform duration-200 hover:scale-105 hover:shadow-[0_0_0_8px_rgba(29,214,126,0.1),0_20px_38px_rgba(10,155,91,0.38)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <WhatsAppIcon className="h-8 w-8" />
    </a>
  );
}
