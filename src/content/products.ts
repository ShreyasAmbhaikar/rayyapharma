export type ProductIconKey = 'prenatal';

export type ProductDetailImage = {
  alt: string;
  objectPosition?: string;
  src: string;
};


export type ProductSupportSection = {
  bullets: string[];
  subtitle?: string;
  title: string;
};

export type ProductRecord = {
  administration: string;
  alt: string;
  availableStrengths: string;
  badge: string;
  category: string;
  description: string;
  detailImages: ProductDetailImage[];
  dosageForm: string;
  genericName: string;
  href: string;
  icon: ProductIconKey;
  imageSrc: string;
  importantNote: string;
  keywords: string[];
  name: string;
  overview: string;
  slug: string;
  supportSections: ProductSupportSection[];
  therapeuticClass: string;
  type: string;
  variantLabel?: string;
};

function buildProductHref(slug: string) {
  return `/products/${slug}/`;
}

export const products: ProductRecord[] = [
  {
    slug: 'feto-nurture-tri-1',
    name: 'FETO NURTURE TRI 1',
    variantLabel: 'Morning Dose',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Morning Dose',
    description:
      'Prenatal nutrition tablet designed for pre-conception and first-trimester morning support, providing a neuro-developmental foundation, mitochondrial energy, anti-nausea balance, and antioxidant protection.',
    imageSrc: '/images/products/feto-nurture-tri-1.webp',
    alt: 'Pack-shot photo of FETO NURTURE TRI 1 showing the product carton, leaflet, and blister strip.',
    detailImages: [
      {
        src: '/images/products/feto-nurture-tri-1.webp',
        alt: 'Pack-shot photo of FETO NURTURE TRI 1 showing the product carton, leaflet, and blister strip.',
      },
      {
        src: '/images/products/feto-nurture-tri-1-box.webp',
        alt: 'Box photo of FETO NURTURE TRI 1 showing the carton pack design.',
      },
    ],
    href: buildProductHref('feto-nurture-tri-1'),
    icon: 'prenatal',
    genericName: 'Pregnancy Supplement for Pre-Conception and 1st Trimester - Morning Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, once daily in the morning as advised during pre-conception and the 1st trimester',
    overview:
      'FETO NURTURE TRI 1 Morning Dose is positioned for early pregnancy nutritional support, especially during pre-conception and early organogenesis. The formulation is built around methylation support, neural development, mitochondrial energy, anti-nausea support, and endocrine-antioxidant balance.',
    importantNote:
      'Suitable when Hb Levels are adequate. Use under the guidance of a qualified healthcare professional or as advised.',

    supportSections: [
      {
        title: 'I. Neuro-Developmental & Genomic Foundation',
        subtitle: 'Early Organogenesis',
        bullets: [
          'L-Methylfolate / Folic Acid (B9): Essential for DNA synthesis, cell division, and Neural Tube Defect (NTD) prevention during early embryogenesis.',
          'Choline Bitartrate: A key methyl donor influencing fetal gene expression, hippocampal development, and long-term cognitive memory.',
          'DHA (Omega-3): Structural lipid for the fetal brain cortex & retina, critical for early neurogenesis and visual development.',
          'Thiamine (Vitamin B1): Supports neuronal differentiation, synapse formation, and early myelin sheath development.',
        ],
      },
      {
        title: 'II. Mitochondrial Energy & Cellular Proliferation',
        bullets: [
          'B-Complex (B1, B2, B5): Cofactors for ATP generation (TCA cycle & oxidative phosphorylation), supporting rapid embryonic growth.',
          'Zinc: Required for cell division, protein synthesis.',
          'Manganese: Supports early skeletal development.',
        ],
      },
      {
        title: 'III. Anti-Nausea & Neurotransmitter Balance',
        bullets: [
          'Pyridoxine (Vitamin B6): Clinically effective in reducing nausea & vomiting of pregnancy (NVP) and supports neurotransmitter synthesis.',
          'Zinc: Required for cell division, protein synthesis.',
          'Manganese: Supports early skeletal development.',
        ],
      },
      {
        title: 'IV. Endocrine & Antioxidant Protection',
        bullets: [
          'Selenium: Supports thyroid hormone activation (T4 → T3), essential for fetal metabolic programming.',
          'Zinc: An essential cofactor for hormone synthesis and immune health.',
          'Manganese: Activates antioxidant enzymes.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 1',
      'Morning Dose',
      'first trimester tablet',
      'early organogenesis',
      'prenatal nutrition supplement',
      'pre-conception pregnancy supplement',
    ],
  },
  {
    slug: 'feto-nurture-tri-2',
    name: 'FETO NURTURE TRI 2',
    variantLabel: 'Morning Dose',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Morning Dose',
    description:
      'Second-trimester morning support with 27 mg+ time-release iron, B-complex, choline, and folic acid to support energy, metabolism, brain growth, and maternal health.',
    imageSrc: '/images/products/feto-nurture-tri-2-morning.webp',
    alt: 'Product pack-shot photo of FETO NURTURE TRI 2 pregnancy supplement packaging with blister pack and carton.',
    detailImages: [
      {
        src: '/images/products/feto-nurture-tri-2-morning.webp',
        alt: 'Pack-shot photo of FETO NURTURE TRI 2 showing the product carton, leaflet, and blister strip.',
      },
      {
        src: '/images/products/feto-nurture-tri-2-morning-box.webp',
        alt: 'Box photo of FETO NURTURE TRI 2 showing the carton pack design.',
      },
    ],
    href: buildProductHref('feto-nurture-tri-2'),
    icon: 'prenatal',
    genericName: 'Second Trimester Growth Support (13–27 Weeks) - Morning Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, morning dose during the 2nd trimester as advised',
    overview:
      'FETO NURTURE TRI 2 Morning Dose is a comprehensive morning nutrition supplement for rapid fetal development during weeks 13-27, designed for peak iron requirements, maternal blood volume expansion, and accelerated brain growth.',
    importantNote:
      'Nutritional supplements should be taken under medical supervision. Rayya Pharma Pvt. Ltd. Address: Shop No-333, Business House, Survey No. 89, Above Kunal Icon, Pimple Saudagar, Pune Municipal Corporation, Maharashtra - 41100.7',

    supportSections: [
      {
        title: 'Why the Second Trimester Matters',
        subtitle: '13-27 Weeks',
        bullets: [
          'Fetal weight increases significantly.',
          'Iron requirements peak.',
          'Maternal blood volume expands.',
          'Brain and neural development accelerate.',
          'Proper nutritional support is essential to meet these increased demands.',
        ],
      },
      {
        title: 'Second Trimester Support (Scientific Rationale)',
        bullets: [
          'During the second trimester (14–27 weeks), both maternal physiology and fetal organ systems undergo rapid structural, neurological, and metabolic changes.',
          'This nutraceutical formulation is designed to address these evolving needs through targeted nutrient synergies.',
        ],
      },
      {
        title: 'Morning Dose for Sustained Energy & Metabolism',
        bullets: [
          'Iron (Time Release): Provides a gentle, steady release of 27 mg+ elemental iron, helping prevent iron-deficiency anemia—a key risk factor for low birth weight and preterm birth.',
          'Gentle on the Stomach: Time-release technology minimizes constipation, nausea, and gastric discomfort, improving patient compliance.',
          'B-Complex Vitamins (B1, B2, B3, B5, B6): Support energy production, enhance metabolism, and help reduce pregnancy-related fatigue.',
        ],
      },
      {
        title: 'Fetal Brain & Neural Development',
        bullets: [
          'Choline: Essential for fetal brain growth, neurogenesis, and long-term cognitive development.',
          'Folic Acid (Vitamin B9): Supports DNA synthesis, cellular growth, and maintains optimal homocysteine levels during ongoing fetal development.',
        ],
      },
      {
        title: 'Protective & Structural Growth Support',
        bullets: [
          'Vitamin C: Enhances iron absorption and supports maternal immunity.',
          'Zinc & Selenium: Aid cell division, DNA synthesis, and help prevent intrauterine growth retardation (IUGR).',
          'Iodine: Crucial for thyroid function and cognitive development of the baby.',
          'Manganese: Supports fetal skeletal and connective tissue development.',
        ],
      },
      {
        title: 'Why Choose This Formula in the 2nd Trimester?',
        bullets: [
          'One-tablet, once-daily morning dose.',
          'Trimester-specific formulation.',
          'Optimized iron absorption with reduced GI side effects.',
          '100% Vegetarian.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 2',
      'Morning Dose',
      'second trimester tablet',
      'prenatal growth support',
      'pregnancy morning dose tablet',
      'maternal energy and metabolism',
    ],
  },
  {
    slug: 'feto-nurture-tri-2-evening',
    name: 'FETO NURTURE TRI 2',
    variantLabel: 'Evening Dose',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Evening Dose',
    description:
      'Second-trimester evening support addressing skeletal development (Calcium/D3/K2), neurological growth (DHA), muscle comfort (Magnesium), and blood pressure regulation.',
    imageSrc: '/images/products/feto-nurture-tri-2.webp',
    alt: 'Product pack-shot photo of FETO NURTURE TRI 2 pregnancy supplement packaging with blister pack and carton.',
    detailImages: [
      {
        src: '/images/products/feto-nurture-tri-2.webp',
        alt: 'Pack-shot photo of FETO NURTURE TRI 2 showing the product carton, leaflet, and blister strip.',
      },
      {
        src: '/images/products/feto-nurture-tri-2-box.webp',
        alt: 'Box photo of FETO NURTURE TRI 2 showing the carton pack design.',
      },
    ],
    href: buildProductHref('feto-nurture-tri-2-evening'),
    icon: 'prenatal',
    genericName: 'Second Trimester Support (14–27 Weeks) - Evening Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, evening dose during the 2nd trimester as advised',
    overview:
      'FETO NURTURE TRI 2 Evening Dose is designed for weeks 14-27, addressing the rapid structural, neurological, and metabolic shifts in mother and baby through targeted nutrient synergies.',
    importantNote:
      'Nutritional supplements should be taken under medical supervision. By: Rayya Pharma Pvt. Ltd.',

    supportSections: [
      {
        title: 'Why the Second Trimester Matters',
        subtitle: '13-27 Weeks',
        bullets: [
          'Fetal weight increases significantly.',
          'Iron requirements peak.',
          'Maternal blood volume expands.',
          'Brain and neural development accelerate.',
          'Proper nutritional support is essential to meet these increased demands.',
        ],
      },
      {
        title: 'Second Trimester Support (Scientific Rationale)',
        bullets: [
          'During the second trimester (14–27 weeks), both maternal physiology and fetal organ systems undergo rapid structural, neurological, and metabolic changes.',
          'This nutraceutical formulation is designed to address these evolving needs through targeted nutrient synergies.',
        ],
      },
      {
        title: 'I. Skeletal & Structural System',
        subtitle: 'Fetal Bone Mineralization: Calcium & Vitamin D3',
        bullets: [
          'Calcium provides the foundational mineral matrix for fetal bones and teeth, while Vitamin D3 enhances intestinal calcium absorption.',
          'Precision Calcium Delivery: Vitamin K2 (MK-7) works synergistically with Vitamin D3 by activating osteocalcin, ensuring calcium is deposited into the fetal skeleton and maternal bones, while preventing ectopic deposition in soft tissues and vasculature.',
        ],
      },
      {
        title: 'II. Neurological & Sensory System',
        subtitle: 'Rapid Brain Growth Phase',
        bullets: [
          'Between weeks 14–27, intense neuronal proliferation and synaptic network formation occur.',
          'DHA Accumulation: Omega-3 DHA is a critical lipid of the cerebral cortex and retina, supporting neurotransmission, visual acuity, and long-term cognitive development.',
        ],
      },
      {
        title: 'III. Muscular & Circulatory System',
        subtitle: 'Muscle Relaxation & Cramp Prevention',
        bullets: [
          'Magnesium acts as a physiological muscle relaxant, reducing leg cramps and supporting uterine muscle relaxation for healthy pregnancy progression.',
        ],
      },
      {
        title: 'IV. Blood Pressure Regulation',
        bullets: [
          'Adequate Calcium and Magnesium intake support vascular tone and reduce smooth muscle hypertension and pre-eclampsia by modulating smooth muscle contractility.',
        ],
      },
      {
        title: 'V. Immune & Endocrine System',
        subtitle: 'Immune System Programming',
        bullets: [
          'Vitamin A and Vitamin D are essential for fetal immune system maturation and lung development.',
          'Preterm Birth Risk Reduction: Supplementation with Omega-3 DHA starting in the second trimester is scientifically associated with a reduced risk of early preterm birth (before 34 weeks) and supports longer gestational duration and improved neonatal outcomes.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 2',
      'Evening Dose',
      'second trimester tablet',
      'prenatal calcium DHA supplement',
      'pregnancy evening dose tablet',
      'maternal bone and brain support',
    ],
  },
  {
    slug: 'feto-nurture-tri-3',
    name: 'FETO NURTURE TRI 3',
    variantLabel: 'Morning Dose',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Morning Dose',
    description:
      'Essential third-trimester morning nutrition with 35 mg+ time-release iron, B-vitamin complex, choline, calcium, and vitamin D to support peak growth, stamina, and defense.',
    imageSrc: '/images/products/feto-nurture-tri-3-morning.webp',
    alt: 'Pack-shot photo of FETO NURTURE TRI 3 showing the product carton, leaflet, and blister strip.',
    detailImages: [
      {
        src: '/images/products/feto-nurture-tri-3-morning.webp',
        alt: 'Pack-shot photo of FETO NURTURE TRI 3 showing the product carton, leaflet, and blister strip.',
      },
      {
        src: '/images/products/feto-nurture-tri-3-morning-box.webp',
        alt: 'Box photo of FETO NURTURE TRI 3 showing the carton pack design.',
      },
    ],
    href: buildProductHref('feto-nurture-tri-3'),
    icon: 'prenatal',
    genericName: 'Third Trimester Support (28–40 Weeks) - Morning Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, morning dose during the 3rd trimester as advised',
    overview:
      'FETO NURTURE TRI 3 Morning Dose provides essential morning nutrition for weeks 28-40, when fetal growth accelerates, iron needs peak, and maternal physiological requirements evolve to support immunity and final fetal development.',
    importantNote:
      'Nutritional supplements should be taken under medical supervision. Manufactured by RAYYA PHARMA PVT. LTD. Address: Shop No-333, Business House, Survey No. 89, Above Kunal Icon, Pimple Saudagar, Pune Municipal Corporation, Maharashtra - 41100.7',

    supportSections: [
      {
        title: 'Why Focus on the 3rd Trimester',
        subtitle: '28-40 Weeks',
        bullets: [
          "Peak Fetal Growth: The baby's weight increases most rapidly during this phase.",
          'Iron Demands Spike: Iron requirements are at their highest to prevent anemia—a key risk factor for late pregnancy complications.',
          'Nutritional Needs Evolve: Increased needs for immune support, calcium, and nutritional cofactors for final fetal growth and maternal wellness.',
        ],
      },
      {
        title: 'Why the Third Trimester Matters',
        subtitle: '29-40 Weeks',
        bullets: [
          "During the final weeks of pregnancy, your baby undergoes rapid and critical development. The brain increases nearly threefold in size, and the skeleton continues active ossification and strengthening.",
          "At the same time, hormonal changes slow the mother's digestive system, often leading to discomfort such as constipation and muscle cramps.",
          'This formulation is specially designed to address these unique third-trimester needs in one convenient, well-tolerated evening dose.',
        ],
      },
      {
        title: 'Iron & Stamina Boosters',
        bullets: [
          'Iron (Time Release): Provides a gentle, ongoing release of 35 mg+ elemental iron to prevent pregnancy anemia (low birth weight–preterm birth).',
          'B-Vitamin Complex (B1, B2, B3, B5, B6): Enhances oxygen delivery to support energy levels, prevent fatigue, and promote growth.',
        ],
      },
      {
        title: 'Gentle, Non-Constipating Formula',
        bullets: [
          'Designed to protect clinical compliance with minimal GI distress for final fetal growth.',
        ],
      },
      {
        title: 'Fetal Brain, Bone, & Nutritional Support',
        bullets: [
          'Choline: Essential for fetal brain function, memory development, and healthy birth weight (newborn cognition).',
          'Calcium, Manganese, & Vitamin D: Support baby\'s skeletal development and strengthen maternal bones.',
          'Folic Acid & Iodine: Critical for DNA synthesis, prevent neural tube defects, and support healthy thyroid and metabolism.',
        ],
      },
      {
        title: 'Immune & Antioxidant Defense',
        bullets: [
          'Vitamin C: Enhances immunity and dramatically increases iron absorption in the tablet.',
          'Zinc & Selenium: Vital minerals that aid cellular growth, DNA synthesis, and curb late-pregnancy complications.',
          'Antioxidant Support: Selenium shields against oxidative stress, supporting both maternal and fetal health.',
        ],
      },
      {
        title: 'Why Choose Feto Nurture Tri 3 in the 3rd Trimester?',
        bullets: [
          'Complete, once-daily morning dose for 28–40 week needs.',
          'Trimester-specific, gentle formula with time-release iron.',
          '100% Vegetarian & carefully crafted for the final phase of pregnancy.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 3',
      'Morning Dose',
      'third trimester tablet',
      'pregnancy morning dose tablet',
      'time-release iron prenatal supplement',
      '28 to 40 weeks pregnancy support',
    ],
  },
  {
    slug: 'feto-nurture-tri-3-evening',
    name: 'FETO NURTURE TRI 3',
    variantLabel: 'Evening Dose',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Evening Dose',
    description:
      'Third-trimester evening dose with DHA, Calcium, Vitamin D3, Vitamin K2, Magnesium, and antioxidant vitamins to support baby\'s brain, bone strength, and ease leg cramps.',
    imageSrc: '/images/products/feto-nurture-tri-3-evening.webp',
    alt: 'Pack-shot photo of FETO NURTURE TRI 3 showing the product carton, leaflet, and blister strip.',
    detailImages: [
      {
        src: '/images/products/feto-nurture-tri-3-evening.webp',
        alt: 'Pack-shot photo of FETO NURTURE TRI 3 showing the product carton, leaflet, and blister strip.',
      },
      {
        src: '/images/products/feto-nurture-tri-3-box.webp',
        alt: 'Box photo of FETO NURTURE TRI 3 showing the carton pack design.',
      },
    ],
    href: buildProductHref('feto-nurture-tri-3-evening'),
    icon: 'prenatal',
    genericName: 'Third Trimester Support (29–40 Weeks) - Evening Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, evening dose after dinner during the 3rd trimester as advised',
    overview:
      'FETO NURTURE TRI 3 Evening Dose is designed for weeks 29-40. During these final weeks, the baby\'s brain increases nearly threefold in size and the skeleton continues active ossification. This formula addresses these needs and maternal discomforts like muscle cramps.',
    importantNote:
      'DISCLAIMER: Nutritional supplements should be taken under the guidance of a healthcare professional. RAYYA PHARMA PVT. LTD.',

    supportSections: [
      {
        title: 'Why Focus on the 3rd Trimester',
        subtitle: '28-40 Weeks',
        bullets: [
          "Peak Fetal Growth: The baby's weight increases most rapidly during this phase.",
          'Iron Demands Spike: Iron requirements are at their highest to prevent anemia—a key risk factor for late pregnancy complications.',
          'Nutritional Needs Evolve: Increased needs for immune support, calcium, and nutritional cofactors for final fetal growth and maternal wellness.',
        ],
      },
      {
        title: 'Why the Third Trimester Matters',
        subtitle: '29-40 Weeks',
        bullets: [
          "During the final weeks of pregnancy, your baby undergoes rapid and critical development. The brain increases nearly threefold in size, and the skeleton continues active ossification and strengthening.",
          "At the same time, hormonal changes slow the mother's digestive system, often leading to discomfort such as constipation and muscle cramps.",
          'This formulation is specially designed to address these unique third-trimester needs in one convenient, well-tolerated evening dose.',
        ],
      },
      {
        title: 'Brain & Eye Builder: DHA (Omega-3)',
        bullets: [
          'Structural Support: DHA constitutes nearly 97% of omega-3 fats in the brain and 93% in the retina.',
          'Peak Requirement: Fetal DHA accretion is highest in the third trimester (~50–70 mg/day).',
          'Long-Term Benefits: Supports cognitive function, attention span, and visual development in later childhood.',
        ],
      },
      {
        title: 'Precision Bone Duo: Calcium & Vitamin D3',
        bullets: [
          'Calcium: Essential for rapid formation and strengthening of fetal bones and teeth.',
          'Vitamin D3: Enhances calcium absorption and ensures efficient transfer to the developing fetus.',
        ],
      },
      {
        title: 'Precision Bone Duo: Calcium & Vitamin D3 (Repeated)',
        bullets: [
          'Calcium: Essential for rapid formation and strengthening of fetal bones and teeth.',
          'Vitamin D3: Enhances calcium absorption and ensures efficient transfer to the developing fetus.',
        ],
      },
      {
        title: 'Heart & Muscle Support: Vitamin K2 & Magnesium',
        bullets: [
          'Vitamin K2: Guides calcium into bones and teeth while preventing deposition in soft tissues.',
          'Magnesium: Helps reduce leg cramps, supports muscle relaxation, and improves sleep quality.',
        ],
      },
      {
        title: 'Protective Antioxidant Shield: Vitamins A & E',
        bullets: [
          'Vitamin A: Supports fetal vision development and immune system maturation (within recommended pregnancy limits).',
          'Vitamin E: (The remaining Vitamin E text appears cut off in the image and is not fully visible.)',
        ],
      },
      {
        title: 'HOW TO TAKE',
        bullets: [
          'Dosage: One tablet daily.',
          'Timing: EVENING DOSE – Take preferably after dinner.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 3',
      'Evening Dose',
      'third trimester tablet',
      'prenatal DHA calcium magnesium',
      'pregnancy evening dose tablet',
      'maternal muscle cramp support',
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

function normalizeProductSearchValue(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

function buildProductSearchHaystack(product: ProductRecord) {
  return normalizeProductSearchValue(
    [
      product.name,
      product.slug,
      product.category,
      product.genericName,
      product.variantLabel ?? '',
      product.description,
      product.therapeuticClass,
      ...product.keywords,
    ].join(' '),
  );
}

export function findProductByQuery(query: string) {
  const normalizedQuery = normalizeProductSearchValue(query);

  if (!normalizedQuery) {
    return undefined;
  }

  const queryTokens = normalizedQuery.split(' ');
  let bestMatch: ProductRecord | undefined;
  let bestScore = 0;

  for (const product of products) {
    const normalizedName = normalizeProductSearchValue(product.name);
    const normalizedSlug = normalizeProductSearchValue(product.slug);
    const haystack = buildProductSearchHaystack(product);
    let score = 0;

    if (normalizedName === normalizedQuery) {
      score = 140;
    } else if (normalizedSlug === normalizedQuery) {
      score = 135;
    } else if (normalizedQuery.includes(normalizedName)) {
      score = 125;
    } else if (haystack.includes(normalizedQuery)) {
      score = 100;
    }

    if (product.variantLabel && normalizedQuery.includes('review')) {
      score += 30;
    }

    const matchedTokens = queryTokens.filter((token) => haystack.includes(token));

    if (matchedTokens.length === queryTokens.length) {
      score = Math.max(score, 80 + matchedTokens.length * 4);
    }

    if (score > bestScore) {
      bestScore = score;
      bestMatch = product;
    }
  }

  return bestScore >= 80 ? bestMatch : undefined;
}
