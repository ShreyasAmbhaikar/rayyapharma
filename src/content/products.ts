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
  variantLabel?: string;
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
  {
    slug: 'feto-nurture-tri-1-review',
    name: 'FETO NURTURE TRI 1',
    variantLabel: 'Client Review Version',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Early Organogenesis',
    description:
      'Client-review version of FETO NURTURE TRI 1 focused on neuro-developmental and genomic foundation, early organogenesis, anti-nausea support, and antioxidant protection.',
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
    href: buildProductHref('feto-nurture-tri-1-review'),
    icon: 'prenatal',
    genericName: 'Pregnancy Supplement, 1st Trimester - Neuro-Developmental and Genomic Foundation',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, during early pregnancy as advised',
    overview:
      'FETO NURTURE TRI 1 is presented as an early-pregnancy nutrition option for neuro-developmental and genomic foundation during early organogenesis. This review version highlights folate, choline, DHA, B-vitamins, zinc, manganese, selenium, and antioxidant support in a systematic first-trimester format.',
    importantNote:
      'Suitable when Hb levels are adequate. Rayya Pharma Pvt Ltd. Nutritional supplements should be taken under medical supervision.',
    supportRows: [
      {
        focus: 'Neuro-developmental and genomic foundation',
        rationale:
          'L-methylfolate or folic acid, choline, DHA, and thiamine support DNA synthesis, neural tube defect prevention, gene expression, early neurogenesis, and visual development.',
      },
      {
        focus: 'Mitochondrial energy and cellular proliferation',
        rationale:
          'B-complex vitamins act as cofactors for ATP generation, while zinc and manganese support cell division, protein synthesis, and early skeletal development.',
      },
      {
        focus: 'Anti-nausea and neurotransmitter balance',
        rationale:
          'Pyridoxine supports neurotransmitter synthesis and is clinically used to help reduce nausea and vomiting of pregnancy.',
      },
      {
        focus: 'Endocrine and antioxidant protection',
        rationale:
          'Selenium supports thyroid hormone activation, while zinc and manganese contribute to hormone synthesis, immune health, and antioxidant enzyme activity.',
      },
    ],
    supportSections: [
      {
        title: 'I. Neuro-Developmental and Genomic Foundation',
        subtitle: 'Early Organogenesis',
        bullets: [
          'L-Methylfolate / Folic Acid (B9): Essential for DNA synthesis, cell division, and neural tube defect prevention during early embryogenesis.',
          'Choline Bitartrate: A key methyl donor influencing fetal gene expression, hippocampal development, and long-term cognitive memory.',
          'DHA (Omega-3): Structural lipid for the fetal brain cortex and retina, critical for early neurogenesis and visual development.',
          'Thiamine (Vitamin B1): Supports neuronal differentiation, synapse formation, and early myelin sheath development.',
        ],
      },
      {
        title: 'II. Mitochondrial Energy and Cellular Proliferation',
        bullets: [
          'B-Complex (B1, B2, B5): Cofactors for ATP generation through the TCA cycle and oxidative phosphorylation, supporting rapid embryonic growth.',
          'Zinc: Required for cell division and protein synthesis.',
          'Manganese: Supports early skeletal development.',
        ],
      },
      {
        title: 'III. Anti-Nausea and Neurotransmitter Balance',
        bullets: [
          'Pyridoxine (Vitamin B6): Clinically effective in reducing nausea and vomiting of pregnancy and supports neurotransmitter synthesis.',
          'Zinc: Required for cell division and protein synthesis.',
          'Manganese: Supports early skeletal development.',
        ],
      },
      {
        title: 'IV. Endocrine and Antioxidant Protection',
        bullets: [
          'Selenium: Supports thyroid hormone activation from T4 to T3, essential for fetal metabolic programming.',
          'Zinc: An essential cofactor for hormone synthesis and immune health.',
          'Manganese: Activates antioxidant enzymes.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 1 review',
      'client review first trimester supplement',
      'early organogenesis pregnancy nutrition',
      'neuro developmental prenatal supplement',
      'folic acid choline DHA pregnancy tablet',
    ],
  },
  {
    slug: 'feto-nurture-tri-2-review',
    name: 'FETO NURTURE TRI 2',
    variantLabel: 'Client Review Version',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Morning + Evening Dose',
    description:
      'Client-review version of FETO NURTURE TRI 2 combining morning second-trimester growth support with evening skeletal, neurological, muscular, immune, and endocrine support.',
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
    href: buildProductHref('feto-nurture-tri-2-review'),
    icon: 'prenatal',
    genericName: 'Pregnancy Supplement, 2nd Trimester - Morning and Evening Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, morning and evening dose during the 2nd trimester as advised',
    overview:
      'FETO NURTURE TRI 2 is presented as a second-trimester support system for weeks 13-27, when fetal weight increases, iron requirements rise, maternal blood volume expands, and brain and neural development accelerate. This review version organizes both morning and evening dose content for client comparison.',
    importantNote:
      'Rayya Pharma Pvt. Ltd. Nutritional supplements should be taken under medical supervision. By: Rayya Pharma Pvt. Ltd.',
    supportRows: [
      {
        focus: 'Morning energy and metabolism',
        rationale:
          'Time-release iron and B-complex vitamins support sustained energy, oxygen delivery, metabolism, and pregnancy-related fatigue support.',
      },
      {
        focus: 'Fetal brain and neural development',
        rationale:
          'Choline and folic acid support fetal brain growth, neurogenesis, DNA synthesis, cellular growth, and healthy homocysteine balance.',
      },
      {
        focus: 'Protective and structural growth',
        rationale:
          'Vitamin C, zinc, selenium, iodine, and manganese support iron absorption, immunity, cell division, thyroid function, cognition, and skeletal development.',
      },
      {
        focus: 'Evening skeletal, muscle, and endocrine support',
        rationale:
          'Calcium, vitamin D3, vitamin K2, DHA, magnesium, vitamins A and D, and omega-3 DHA support bone mineralization, brain and sensory development, muscle relaxation, immune maturation, and gestational support.',
      },
    ],
    supportSections: [
      {
        title: 'I. Morning Dose: Second Trimester Growth Support',
        subtitle: '13-27 Weeks',
        bullets: [
          'A comprehensive morning nutrition supplement for rapid fetal development.',
          'The second trimester is a critical phase of rapid fetal growth and development.',
          'During this period, fetal weight increases significantly, iron requirements peak, maternal blood volume expands, and brain and neural development accelerate.',
          'Proper nutritional support is essential to meet these increased demands.',
        ],
      },
      {
        title: 'II. Morning Dose for Sustained Energy and Metabolism',
        bullets: [
          'Iron (Time Release): Provides a gentle, steady release of 27 mg+ elemental iron, helping prevent iron-deficiency anemia, a key risk factor for low birth weight and preterm birth.',
          'Gentle on the Stomach: Time-release technology minimizes constipation, nausea, and gastric discomfort, improving patient compliance.',
          'B-Complex Vitamins (B1, B2, B3, B5, B6): Support energy production, enhance metabolism, and help reduce pregnancy-related fatigue.',
        ],
      },
      {
        title: 'III. Fetal Brain, Neural, and Protective Growth Support',
        bullets: [
          'Choline: Essential for fetal brain growth, neurogenesis, and long-term cognitive development.',
          'Folic Acid (Vitamin B9): Supports DNA synthesis, cellular growth, and maintains optimal homocysteine levels during ongoing fetal development.',
          'Vitamin C: Enhances iron absorption and supports maternal immunity.',
          'Zinc and Selenium: Aid cell division, DNA synthesis, and help prevent intrauterine growth retardation (IUGR).',
          'Iodine: Crucial for thyroid function and cognitive development of the baby.',
          'Manganese: Supports fetal skeletal and connective tissue development.',
        ],
      },
      {
        title: 'IV. Why Choose This Formula in the 2nd Trimester',
        bullets: [
          'One-tablet, once-daily morning dose.',
          'Trimester-specific formulation.',
          'Optimized iron absorption with reduced GI side effects.',
          '100% vegetarian.',
        ],
      },
      {
        title: 'V. Evening Dose: Scientific Rationale',
        subtitle: 'Second Trimester Support',
        bullets: [
          'During the second trimester (14-27 weeks), both maternal physiology and fetal organ systems undergo rapid structural, neurological, and metabolic changes.',
          'This nutraceutical formulation is designed to address these evolving needs through targeted nutrient synergies.',
        ],
      },
      {
        title: 'VI. Evening Dose: Skeletal and Structural System',
        bullets: [
          'Fetal Bone Mineralization: Calcium provides the foundational mineral matrix for fetal bones and teeth, while Vitamin D3 enhances intestinal calcium absorption.',
          'Precision Calcium Delivery: Vitamin K2 (MK-7) works synergistically with Vitamin D3 by activating osteocalcin, ensuring calcium is deposited into the fetal skeleton and maternal bones while preventing ectopic deposition in soft tissues and vasculature.',
        ],
      },
      {
        title: 'VII. Evening Dose: Neurological and Sensory System',
        bullets: [
          'Rapid Brain Growth Phase: Between weeks 14-27, intense neuronal proliferation and synaptic network formation occur.',
          'DHA Accumulation: Omega-3 DHA is a critical lipid of the cerebral cortex and retina, supporting neurotransmission, visual acuity, and long-term cognitive development.',
        ],
      },
      {
        title: 'VIII. Evening Dose: Muscular and Circulatory System',
        bullets: [
          'Muscle Relaxation and Cramp Prevention: Magnesium acts as a physiological muscle relaxant, reducing leg cramps and supporting uterine muscle relaxation for healthy pregnancy progression.',
          'Blood Pressure Regulation: Adequate calcium and magnesium intake support vascular tone and reduce smooth muscle hypertension and pre-eclampsia risk by modulating smooth muscle contractility.',
        ],
      },
      {
        title: 'IX. Evening Dose: Immune and Endocrine System',
        bullets: [
          'Immune System Programming: Vitamin A and Vitamin D are essential for fetal immune system maturation and lung development.',
          'Preterm Birth Risk Reduction: Supplementation with Omega-3 DHA starting in the second trimester is scientifically associated with a reduced risk of early preterm birth before 34 weeks and supports longer gestational duration and improved neonatal outcomes.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 2 review',
      'client review second trimester supplement',
      'morning evening dose pregnancy supplement',
      '13 to 27 weeks pregnancy nutrition',
      'time release iron second trimester',
    ],
  },
  {
    slug: 'feto-nurture-tri-3-review',
    name: 'FETO NURTURE TRI 3',
    variantLabel: 'Client Review Version',
    category: 'Prenatal Nutrition',
    type: 'TABLET',
    badge: 'Morning Dose',
    description:
      'Client-review version of FETO NURTURE TRI 3 for 28-40 weeks, focused on morning nutrition, time-release iron, fetal brain and bone support, immunity, and antioxidant defense.',
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
    href: buildProductHref('feto-nurture-tri-3-review'),
    icon: 'prenatal',
    genericName: 'Pregnancy Supplement, 3rd Trimester - Morning Dose',
    therapeuticClass: 'Prenatal Nutraceutical',
    dosageForm: 'Tablet',
    availableStrengths: '10 x 1 x 10 tablets',
    administration: 'Oral, morning dose during weeks 28-40 as advised',
    overview:
      'FETO NURTURE TRI 3 is presented as a morning nutrition essential for optimal fetal development and maternal health during the 3rd trimester. This review version focuses on weeks 28-40, when fetal growth peaks, iron demands spike, and nutritional needs evolve for final fetal development and maternal wellness.',
    importantNote:
      'MKT BY - RAYYA PHARMA PVT. LTD. Nutritional supplements should be taken under medical supervision.',
    supportRows: [
      {
        focus: 'Peak fetal growth and iron demand',
        rationale:
          'The baby gains weight most rapidly in the 3rd trimester, while iron requirements reach their highest point to help prevent anemia and late-pregnancy complications.',
      },
      {
        focus: 'Iron and stamina boosters',
        rationale:
          'Time-release iron and B-vitamins support oxygen delivery, energy levels, fatigue reduction, and growth support during weeks 28-40.',
      },
      {
        focus: 'Brain, bone, and nutrition support',
        rationale:
          'Choline, calcium, manganese, vitamin D, folic acid, and iodine support fetal brain function, memory development, skeletal strength, DNA synthesis, and healthy thyroid metabolism.',
      },
      {
        focus: 'Immune and antioxidant defense',
        rationale:
          'Vitamin C, zinc, and selenium support immunity, iron absorption, cellular growth, DNA synthesis, oxidative-stress protection, and late-pregnancy nutritional resilience.',
      },
    ],
    supportSections: [
      {
        title: 'I. Morning Dose: 3rd Trimester Support',
        subtitle: '28-40 Weeks',
        bullets: [
          'Your morning nutrition essential for optimal fetal development and maternal health.',
          'Peak Fetal Growth: The baby weight increases most rapidly during this phase.',
          'Iron Demands Spike: Iron requirements are at their highest to prevent anemia, a key risk for late pregnancy complications.',
          'Nutritional Needs Evolve: Increased needs for immune support, calcium, and nutritional cofactors for final fetal growth and maternal wellness.',
        ],
      },
      {
        title: 'II. Iron and Stamina Boosters',
        bullets: [
          'Iron (Time Release): Provides a gentle, ongoing release of 35 mg+ elemental iron to help prevent pregnancy anemia, low birth weight, and preterm birth risk.',
          'B-Vitamin Complex (B1, B2, B3, B5, B6): Enhances oxygen delivery to support energy levels, prevent fatigue, and promote growth.',
          'Gentle, Non-Constipating Formula: Designed to protect clinical compliance with minimal GI distress for final fetal growth.',
        ],
      },
      {
        title: 'III. Fetal Brain, Bone, and Nutritional Support',
        bullets: [
          'Choline: Essential for fetal brain function, memory development, healthy birth weight, and newborn cognition.',
          'Calcium, Manganese, and Vitamin D: Support baby skeletal development and strengthen maternal bones.',
          'Folic Acid and Iodine: Critical for DNA synthesis, neural tube defect prevention, and healthy thyroid and metabolism support.',
        ],
      },
      {
        title: 'IV. Immune and Antioxidant Defense',
        bullets: [
          'Vitamin C: Enhances immunity and dramatically increases iron absorption from the tablet.',
          'Zinc and Selenium: Vital minerals that aid cellular growth, DNA synthesis, and help curb late-pregnancy complications.',
          'Antioxidant Support: Selenium shields against oxidative stress, supporting both maternal and fetal health.',
        ],
      },
      {
        title: 'V. Why Choose Feto Nurture Tri 3 in the 3rd Trimester',
        bullets: [
          'Complete, once-daily morning dose for 28-40 week needs.',
          'Trimester-specific, gentle formula with time-release iron.',
          '100% vegetarian and carefully crafted for the final phase of pregnancy.',
        ],
      },
    ],
    keywords: [
      'FETO NURTURE TRI 3 review',
      'client review third trimester supplement',
      '28 to 40 weeks morning dose',
      'time release iron pregnancy anemia',
      'third trimester fetal growth support',
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
