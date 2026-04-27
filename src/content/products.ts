export type ProductIconKey = 'prenatal';

export type ProductDetailImage = {
  alt: string;
  objectPosition?: string;
  src: string;
};

export type ProductSupportRow = {
  focus: string;
  rationale: string;
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
  supportRows: ProductSupportRow[];
  supportSections: ProductSupportSection[];
  therapeuticClass: string;
  type: string;
};

function buildProductHref(slug: string) {
  return `/products/${slug}/`;
}

export const products: ProductRecord[] = [
  {
    slug: 'feto-nurture-tri-1',
    name: 'FETO NURTURE TRI 1',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Pregnancy Supplement',
    description:
      'Prenatal nutrition tablet designed for pre-conception and first-trimester support, with folate, choline, DHA, B-complex vitamins, trace minerals, and anti-nausea nutritional support.',
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
    genericName: 'Pregnancy Supplement for Pre-Conception and 1st Trimester',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, as advised during pre-conception and the 1st trimester',
    overview:
      'FETO NURTURE TRI 1 is positioned for early pregnancy nutritional support, especially during pre-conception and early organogenesis. The formulation is built around methylation support, neural development, mitochondrial energy, anti-nausea support, and endocrine-antioxidant balance.',
    importantNote:
      'Suitable when hemoglobin levels are adequate. Use under the guidance of a qualified healthcare professional during pre-conception or first-trimester care.',
    supportRows: [
      {
        focus: 'Neural tube and genomic support',
        rationale:
          'Folate, choline, DHA, and thiamine support DNA synthesis, early neurogenesis, methylation, and foundational fetal brain development.',
      },
      {
        focus: 'Embryonic energy metabolism',
        rationale:
          'B-complex vitamins and zinc support ATP generation, protein synthesis, and rapid cellular proliferation during early growth.',
      },
      {
        focus: 'Nausea and neurotransmitter balance',
        rationale:
          'Pyridoxine is widely used in nausea and vomiting of pregnancy support while also contributing to neurotransmitter synthesis.',
      },
      {
        focus: 'Thyroid, antioxidant, and immune support',
        rationale:
          'Selenium, zinc, and manganese contribute to thyroid activation, hormone-related pathways, antioxidant defense, and maternal nutritional balance.',
      },
    ],
    supportSections: [
      {
        title: 'I. Neuro-Developmental and Genomic Foundation',
        subtitle: 'Early organogenesis',
        bullets: [
          'L-Methylfolate / Folic Acid (B9): Essential for DNA synthesis, cell division, and neural tube defect prevention during early embryogenesis.',
          'Choline Bitartrate: A key methyl donor that supports fetal gene expression, hippocampal development, and long-term cognitive memory.',
          'DHA (Omega-3): Structural lipid for the fetal brain cortex and retina, supporting early neurogenesis and visual development.',
          'Thiamine (Vitamin B1): Supports neuronal differentiation, synapse formation, and early myelin development.',
        ],
      },
      {
        title: 'II. Mitochondrial Energy and Cellular Proliferation',
        bullets: [
          'B-Complex (B1, B2, B5): Cofactors for ATP generation through the TCA cycle and oxidative phosphorylation, supporting rapid embryonic growth.',
          'Zinc: Required for cell division and protein synthesis.',
          'Manganese: Supports early skeletal development and enzyme activation.',
        ],
      },
      {
        title: 'III. Anti-Nausea and Neurotransmitter Balance',
        bullets: [
          'Pyridoxine (Vitamin B6): Clinically used in nutritional support for nausea and vomiting of pregnancy and supports neurotransmitter synthesis.',
          'Zinc: Continues to support protein synthesis and maternal nutritional resilience during early pregnancy.',
          'Manganese: Contributes to enzymatic function and metabolic balance.',
        ],
      },
      {
        title: 'IV. Endocrine and Antioxidant Protection',
        bullets: [
          'Selenium: Supports thyroid hormone activation from T4 to T3, which is important for fetal metabolic programming.',
          'Zinc: An essential cofactor for hormone synthesis and immune health.',
          'Manganese: Activates antioxidant enzymes involved in oxidative stress defense.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 1',
      'first trimester tablet',
      'prenatal nutrition supplement',
      'pre-conception pregnancy supplement',
      'folate choline DHA tablet',
    ],
  },
  {
    slug: 'feto-nurture-tri-2',
    name: 'FETO NURTURE TRI 2',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Evening Dose',
    description:
      'Second-trimester pregnancy support tablet formulated with calcium, magnesium, DHA, vitamins A and D, and vitamin K2 for bone, brain, muscle, circulatory, and immune support.',
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
    href: buildProductHref('feto-nurture-tri-2'),
    icon: 'prenatal',
    genericName: 'Pregnancy Supplement, 2nd Trimester - Evening Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, evening dose during the 2nd trimester as advised',
    overview:
      'FETO NURTURE TRI 2 is designed for weeks 14-27, when maternal physiology and fetal organ systems undergo rapid skeletal, neurological, muscular, immune, and metabolic development. The formulation focuses on targeted trimester-specific support through combined mineral, vitamin, and DHA nutrition.',
    importantNote:
      'Intended for second-trimester nutritional support. Use as part of antenatal care under medical supervision and individual nutritional advice.',
    supportRows: [
      {
        focus: 'Bone mineralization and structure',
        rationale:
          'Calcium, vitamin D3, and vitamin K2 support fetal skeletal mineralization while helping direct calcium toward bones rather than soft tissues.',
      },
      {
        focus: 'Brain and visual development',
        rationale:
          'DHA supports the cerebral cortex and retina during a phase of rapid neuronal proliferation and synaptic development.',
      },
      {
        focus: 'Muscle comfort and circulatory balance',
        rationale:
          'Magnesium, along with calcium support, may help with muscle relaxation, cramp support, and vascular tone during pregnancy.',
      },
      {
        focus: 'Immune and gestational support',
        rationale:
          'Vitamins A and D support immune maturation and lung development, while DHA intake in the second trimester is associated with improved gestational support.',
      },
    ],
    supportSections: [
      {
        title: 'I. Skeletal and Structural System',
        subtitle: 'Fetal bone mineralization',
        bullets: [
          'Calcium and Vitamin D3: Calcium provides the foundational mineral matrix for fetal bones and teeth, while Vitamin D3 enhances intestinal calcium absorption.',
          'Vitamin K2 (MK-7): Works synergistically with Vitamin D3 by activating osteocalcin, helping direct calcium toward the fetal skeleton and maternal bone health while reducing soft-tissue deposition.',
        ],
      },
      {
        title: 'II. Neurological and Sensory System',
        bullets: [
          'Rapid brain growth phase: Between weeks 14-27, fetal development includes intense neuronal proliferation and synaptic network formation.',
          'DHA accumulation: Omega-3 DHA is a critical lipid of the cerebral cortex and retina, supporting neurotransmission, visual acuity, and long-term cognitive development.',
        ],
      },
      {
        title: 'III. Muscular and Circulatory System',
        bullets: [
          'Magnesium: Acts as a physiological muscle relaxant, supporting leg cramp reduction and uterine muscle relaxation for healthy pregnancy progression.',
          'Calcium and magnesium intake: Support vascular tone and smooth muscle balance, which are important in blood pressure support during pregnancy.',
        ],
      },
      {
        title: 'IV. Immune and Endocrine System',
        bullets: [
          'Vitamin A and Vitamin D: Important for fetal immune system maturation and lung development.',
          'Omega-3 DHA: Second-trimester DHA support is scientifically associated with reduced risk of early preterm birth and improved gestational duration support.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 2',
      'second trimester tablet',
      'prenatal calcium DHA supplement',
      'pregnancy evening dose tablet',
      'maternal bone and brain support',
    ],
  },
  {
    slug: 'feto-nurture-tri-3',
    name: 'FETO NURTURE TRI 3',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Morning Dose',
    description:
      'Third-trimester prenatal tablet for weeks 28-40 with time-release iron, choline, calcium, vitamin D, folic acid, iodine, zinc, selenium, and B-complex support for maternal stamina and final fetal growth.',
    imageSrc: '/images/products/feto-nurture-tri-3.webp',
    alt: 'Pack-shot photo of FETO NURTURE TRI 3 showing the product carton, leaflet, and blister strip.',
    detailImages: [
      {
        src: '/images/products/feto-nurture-tri-3.webp',
        alt: 'Pack-shot photo of FETO NURTURE TRI 3 showing the product carton, leaflet, and blister strip.',
      },
      {
        src: '/images/products/feto-nurture-tri-3-box.webp',
        alt: 'Box photo of FETO NURTURE TRI 3 showing the carton pack design.',
      },
    ],
    href: buildProductHref('feto-nurture-tri-3'),
    icon: 'prenatal',
    genericName: 'Pregnancy Supplement, 3rd Trimester - Morning Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, morning dose during weeks 28-40 as advised',
    overview:
      'FETO NURTURE TRI 3 is the morning nutrition essential for optimal fetal development and maternal health during the third trimester. It is designed for weeks 28-40, when fetal weight gain accelerates, iron demands peak, and nutritional needs expand to support immunity, bone development, and maternal wellness.',
    importantNote:
      'Marketed by Rayya Pharma Pvt. Ltd. Nutritional supplements should be taken under medical supervision.',
    supportRows: [
      {
        focus: 'Peak fetal growth support',
        rationale:
          'The third trimester is the phase of most rapid fetal weight gain, so the formula emphasizes final growth, cognition, and skeletal support.',
      },
      {
        focus: 'Iron and stamina support',
        rationale:
          'Time-release iron and a B-vitamin complex help maintain hemoglobin, oxygen delivery, daily energy, and maternal resilience when iron needs are highest.',
      },
      {
        focus: 'Brain, bone, and metabolic nutrition',
        rationale:
          'Choline, calcium, manganese, vitamin D, folic acid, and iodine support fetal brain development, skeletal strength, DNA synthesis, and healthy thyroid function.',
      },
      {
        focus: 'Immune and antioxidant defense',
        rationale:
          'Vitamin C, zinc, and selenium help support immunity, iron absorption, cellular growth, and protection against oxidative stress late in pregnancy.',
      },
    ],
    supportSections: [
      {
        title: 'I. Why Focus on the 3rd Trimester',
        subtitle: '3rd Trimester Support (28-40 Weeks)',
        bullets: [
          'Peak fetal growth: The baby’s weight increases most rapidly during this phase.',
          'Iron demands spike: Iron requirements are at their highest to help prevent anemia, a key risk factor for late-pregnancy complications.',
          'Nutritional needs evolve: Maternal needs increase for immune support, calcium, and nutritional cofactors that support final fetal growth and overall wellness.',
        ],
      },
      {
        title: 'II. Iron and Stamina Boosters',
        bullets: [
          'Iron (Time Release): Provides a gentle, ongoing release of 35 mg+ elemental iron to help prevent pregnancy anemia associated with low birth weight and preterm birth risk.',
          'B-Vitamin Complex (B1, B2, B3, B5, B6): Enhances oxygen delivery to support energy levels, reduce fatigue, and promote growth.',
          'Gentle, non-constipating formula: Designed to support compliance with minimal gastrointestinal distress during the final phase of pregnancy.',
        ],
      },
      {
        title: 'III. Fetal Brain, Bone, and Nutritional Support',
        bullets: [
          'Choline: Essential for fetal brain function, memory development, and healthy birth weight support.',
          'Calcium, manganese, and vitamin D: Support baby’s skeletal development and strength while helping maintain maternal bone health.',
          'Folic acid and iodine: Critical for DNA synthesis, neural tube support, healthy thyroid activity, and maternal metabolism.',
        ],
      },
      {
        title: 'IV. Immune and Antioxidant Defense',
        bullets: [
          'Vitamin C: Supports immunity and significantly improves iron absorption from the tablet.',
          'Zinc and selenium: Vital minerals that aid cellular growth, DNA synthesis, and support against late-pregnancy complications.',
          'Antioxidant support: Selenium helps shield against oxidative stress, supporting both maternal and fetal health.',
        ],
      },
      {
        title: 'V. Why Choose FETO NURTURE TRI 3',
        bullets: [
          'Complete, once-daily morning dose for 28-40 week nutritional needs.',
          'Trimester-specific, gentle formula with time-release iron.',
          '100% vegetarian and carefully crafted for the final phase of pregnancy.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 3',
      'third trimester tablet',
      'pregnancy morning dose tablet',
      'time-release iron prenatal supplement',
      '28 to 40 weeks pregnancy support',
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
