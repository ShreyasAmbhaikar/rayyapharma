import { siteConfig } from '@/content/site';

export const homeContent = {
  hero: {
    eyebrow: 'Innovation in Healthcare',
    title: 'Precise science,',
    highlight: 'personal care.',
    description:
      'Advancing modern medicine through rigorous research, global manufacturing excellence, and an unwavering commitment to patient well-being.',
    primaryAction: {
      href: '/products/',
      label: 'Explore Our Products',
    },
    image: {
      src: '/images/home/hero-lab.webp',
      alt: 'Modern pharmaceutical laboratory with sleek equipment and cool blue lighting, with a glass vial in focus.',
    },
  },
  about: {
    heading: 'About Rayya',
    note: siteConfig.placeholderNotice,
    paragraphs: [
      'Rayya Pharma Private Limited is an active private limited company incorporated on 6th June, 2025 and registered with the Registrar of Companies, Pune under CIN U47720PN2025PTC242739.',
      'The company operates from Office No. 303, Business House, Dehu Road, Moshi, Pune, Haveli, Maharashtra, India, 412105, with an authorized capital of ₹1,00,000 and paid-up capital of ₹1,00,000.',
      'Led by Managing Directors Poonam Devidas Karale and Nikita Devidas Karale, Rayya Pharma focuses on pharmaceutical and medical goods activity with a commitment to quality, compliance, and responsible long-term growth.',
    ],
  },
  corporate: {
    heading: 'Company Information',
    description:
      'Registered company details for Rayya Pharma Private Limited, including incorporation, business activity, and office address.',
  },
} as const;
