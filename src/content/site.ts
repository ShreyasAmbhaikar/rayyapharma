export type LinkItem = {
  href: string;
  label: string;
};

export type FooterGroup = {
  title: string;
  links: LinkItem[];
};

export type SocialLink = {
  href: string;
  label: string;
};

export type CompanyDirector = {
  appointmentDate: string;
  designation: string;
  din: string;
  name: string;
};

export const siteConfig = {
  name: 'Rayya Pharma',
  shortName: 'Rayya',
  legalName: 'RAYYA PHARMA PRIVATE LIMITED',
  titleTemplate: '%s | Rayya Pharma',
  defaultTitle: 'Rayya Pharma',
  description:
    'Rayya Pharma Private Limited is an active private limited pharmaceutical company registered with RoC-Pune under CIN U47720PN2025PTC242739, based in Moshi, Pune, Maharashtra, India.',
  siteUrl: 'https://www.rayya-pharma.example',
  locale: 'en_IN',
  socialImage: '/seo/rayya-og.png',
  contactHref: '/contact/',
  keywords: [
    'Rayya Pharma',
    'Rayya Pharma Private Limited',
    'U47720PN2025PTC242739',
    'pharmaceutical company Pune',
    'Moshi Pune pharma company',
    'RoC-Pune registered company',
    'pharmaceutical and medical goods India',
  ],
  navLinks: [
    { href: '/', label: 'Home' },
    { href: '/our-story/', label: 'Our Story' },
    { href: '/products/', label: 'Products' },
    { href: '/contact/', label: 'Contact' },
  ],
  footerGroups: [
    {
      title: 'Useful Links',
      links: [
        { href: '/', label: 'Home' },
        { href: '/our-story/', label: 'Our Story' },
        { href: '/products/', label: 'Products' },
        { href: '/contact/', label: 'Contact' },
      ],
    },
  ] satisfies FooterGroup[],
  footerTagline:
    'Focused on bringing trusted pharmaceutical products to healthcare professionals through quality-led sourcing and dependable distribution.',
  socialLinks: [
    { href: 'https://www.linkedin.com/', label: 'LinkedIn' },
    { href: 'https://www.instagram.com/', label: 'Instagram' },
    { href: 'https://www.facebook.com/', label: 'Facebook' },
  ] satisfies SocialLink[],
  placeholderNotice:
    'Company details on this website are based on the registration information provided for Rayya Pharma Private Limited.',
  organization: {
    name: 'Rayya Pharma',
    legalName: 'RAYYA PHARMA PRIVATE LIMITED',
    tagline: 'Precise science, personal care.',
    logo: '/brand/rayya-logo.svg',
    foundingDate: '2025-06-06',
  },
  companyPlaceholders: {
    registeredName: 'RAYYA PHARMA PRIVATE LIMITED',
    cin: 'U47720PN2025PTC242739',
    incorporationDate: '6th June, 2025',
    incorporationDateIso: '2025-06-06',
    status: 'Active',
    registrationNumber: '242739',
    roc: 'RoC-Pune',
    authorizedCapital: '₹1,00,000',
    paidUpCapital: '₹1,00,000',
    category: 'Company limited by Shares',
    subCategory: 'Non-govt company',
    classOfCompany: 'Private',
    activity: 'Marketing and wholesale of pharmaceutical and medical goods',
    listingStatus: 'Unlisted',
    annualGeneralMeeting: 'N/A',
    latestBalanceSheet: 'N/A',
    contactEmailMasked: 'pharmaprivatelimited@gmail.com',
    contactNumberStatus: '+91 9284288096',
    registeredOffice:
      'Office No. 303, Business House, Dehu Road, Moshi, Pune, Haveli, Maharashtra, India, 412105',
    address: {
      streetAddress: 'Office No. 303, Business House, Dehu Road, Moshi',
      addressLocality: 'Pune, Haveli',
      addressRegion: 'Maharashtra',
      postalCode: '412105',
      addressCountry: 'IN',
    },
    directors: [
      {
        din: '11142461',
        name: 'POONAM DEVIDAS KARALE',
        designation: 'Managing Director',
        appointmentDate: '6th June, 2025',
      },
      {
        din: '11142462',
        name: 'NIKITA DEVIDAS KARALE',
        designation: 'Managing Director',
        appointmentDate: '6th June, 2025',
      },
    ] satisfies CompanyDirector[],
  },
} as const;

export const placeholderPages = {
  products: {
    path: '/products/',
    title: 'Products',
    description:
      'This static placeholder route is ready for Rayya product portfolio content, therapeutic categories, and future product detail pages.',
  },
  team: {
    path: '/team/',
    title: 'Team',
    description:
      'This static placeholder route is ready for leadership, medical advisors, and company team content.',
  },
  'our-story': {
    path: '/our-story/',
    title: 'Our Story',
    description:
      'This page shares the background, vision, and growth journey of Rayya Pharma Private Limited.',
  },
  contact: {
    path: '/contact/',
    title: 'Contact',
    description:
      'This static placeholder route is ready for Rayya contact information, inquiry forms, and location details.',
  },
  'clinical-excellence': {
    path: '/clinical-excellence/',
    title: 'Clinical Excellence',
    description:
      'This static placeholder route is ready for evidence, clinical positioning, and quality assurance content.',
  },
  'global-manufacturing': {
    path: '/global-manufacturing/',
    title: 'Global Manufacturing',
    description:
      'This static placeholder route is ready for supply chain, compliance, and global distribution messaging.',
  },
  careers: {
    path: '/careers/',
    title: 'Careers',
    description:
      'This static placeholder route is ready for careers content, openings, and company culture messaging.',
  },
  'privacy-policy': {
    path: '/privacy-policy/',
    title: 'Privacy Policy',
    description:
      'This static placeholder route is ready for the final privacy policy and data handling disclosures.',
  },
  'terms-of-service': {
    path: '/terms-of-service/',
    title: 'Terms of Service',
    description:
      'This static placeholder route is ready for the final terms of service and legal website terms.',
  },
} as const;

export type PlaceholderPageKey = keyof typeof placeholderPages;
