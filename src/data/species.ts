import { Species } from "@/types";

export const species: Species[] = [
  {
    slug: "lions-mane",
    commonName: "Lion's Mane",
    scientificName: "Hericium erinaceus",
    category: "medicinal",
    description: "A striking white, shaggy mushroom resembling a lion's mane. Renowned for its cognitive-enhancing properties, Lion's Mane has been used in traditional Chinese medicine for centuries. Modern research supports its role in nerve growth factor (NGF) stimulation and neuroprotection.",
    benefits: ["Cognitive enhancement", "Nerve regeneration", "Reduced anxiety & depression", "Anti-inflammatory", "Immune support"],
    imageEmoji: "🦁",
    funFact: "Lion's Mane can stimulate the production of Nerve Growth Factor (NGF), potentially helping repair damaged neurons.",
  },
  {
    slug: "reishi",
    commonName: "Reishi",
    scientificName: "Ganoderma lucidum",
    category: "medicinal",
    description: "Known as the 'Mushroom of Immortality' in traditional Chinese medicine, Reishi has a distinctive reddish-brown, kidney-shaped cap with a varnished appearance. It's one of the most studied medicinal mushrooms, valued for its adaptogenic and immune-modulating properties.",
    benefits: ["Immune system modulation", "Stress reduction", "Better sleep quality", "Liver protection", "Anti-aging properties"],
    imageEmoji: "✨",
    funFact: "Ancient Chinese royalty considered Reishi more valuable than gold and reserved it exclusively for emperors.",
  },
  {
    slug: "chaga",
    commonName: "Chaga",
    scientificName: "Inonotus obliquus",
    category: "medicinal",
    description: "Chaga grows as a dark, charcoal-like mass on birch trees in cold climates. Despite its unassuming exterior, it contains one of the highest antioxidant concentrations of any natural food. It has been used in Siberian and Northern European folk medicine for centuries.",
    benefits: ["Extremely high antioxidant content", "Immune support", "Anti-inflammatory", "Blood sugar regulation", "Gut health"],
    imageEmoji: "🪨",
    funFact: "Chaga has an ORAC (antioxidant) score of 146,700 — higher than acai berries, blueberries, and dark chocolate combined.",
  },
  {
    slug: "cordyceps",
    commonName: "Cordyceps",
    scientificName: "Cordyceps militaris",
    category: "medicinal",
    description: "Cordyceps is famous for its energy-boosting and athletic performance benefits. The cultivated variety (C. militaris) produces bright orange, finger-like fruiting bodies. It has been used in Tibetan and Chinese medicine to increase stamina, libido, and overall vitality.",
    benefits: ["Athletic performance", "Energy & stamina", "Respiratory function", "Libido enhancement", "Anti-aging"],
    imageEmoji: "⚡",
    funFact: "Chinese Olympic athletes attributed their record-breaking performances in the 1993 National Games to Cordyceps supplementation.",
  },
  {
    slug: "turkey-tail",
    commonName: "Turkey Tail",
    scientificName: "Trametes versicolor",
    category: "medicinal",
    description: "Turkey Tail is one of the most researched medicinal mushrooms, recognized by its beautiful concentric rings of color. Its polysaccharide compounds (PSK and PSP) are approved as adjunct cancer treatments in Japan. It's one of the most common mushrooms found in forests worldwide.",
    benefits: ["Cancer support (PSK/PSP)", "Immune enhancement", "Gut microbiome health", "Antiviral properties", "Prebiotic effects"],
    imageEmoji: "🦃",
    funFact: "Turkey Tail extract (PSK) has been an approved anti-cancer drug in Japan since the 1980s, covered by national health insurance.",
  },
  {
    slug: "psilocybe-cubensis",
    commonName: "Golden Teacher",
    scientificName: "Psilocybe cubensis",
    category: "therapeutic",
    description: "Golden Teacher is one of the most well-known psilocybin-containing mushrooms, recognized by its golden-brown caps. In therapeutic settings, it's used for mental health support including treatment-resistant depression, PTSD, and end-of-life anxiety. Legal in Colorado for supervised therapeutic use.",
    benefits: ["Treatment-resistant depression", "PTSD healing", "End-of-life anxiety relief", "Addiction recovery", "Enhanced self-awareness"],
    imageEmoji: "🍄",
    funFact: "Johns Hopkins researchers found that a single psilocybin session produced mystical experiences that 67% of participants rated among the top 5 most meaningful experiences of their lives.",
  },
  {
    slug: "shiitake",
    commonName: "Shiitake",
    scientificName: "Lentinula edodes",
    category: "gourmet",
    description: "Shiitake is the world's second most cultivated mushroom, prized for its rich, savory umami flavor. Native to East Asia, it has been cultivated for over 1,000 years. Beyond its culinary appeal, shiitake contains lentinan, a compound with significant immune-supporting properties.",
    benefits: ["Rich umami flavor", "Immune support (lentinan)", "Cardiovascular health", "B vitamin source", "Versatile in cooking"],
    imageEmoji: "🍳",
    funFact: "The word 'shiitake' comes from the Japanese shii (a type of tree) and take (mushroom). They've been cultivated on logs in Japan since at least 1209 AD.",
  },
  {
    slug: "oyster-mushroom",
    commonName: "Oyster Mushroom",
    scientificName: "Pleurotus ostreatus",
    category: "gourmet",
    description: "Oyster mushrooms are one of the easiest gourmet mushrooms to grow and among the most popular worldwide. They come in beautiful colors — white, blue, pink, golden, and king varieties. Their delicate, anise-like flavor and tender texture make them perfect for stir-fries, soups, and as meat substitutes.",
    benefits: ["Delicate flavor & texture", "Easy to cultivate", "High protein content", "Cholesterol reduction", "Environmental remediation"],
    imageEmoji: "🦪",
    funFact: "Oyster mushrooms are one of the few carnivorous mushrooms — they can trap and digest nematodes (tiny roundworms) to supplement their nitrogen intake.",
  },
  {
    slug: "maitake",
    commonName: "Maitake",
    scientificName: "Grifola frondosa",
    category: "gourmet",
    description: "Also known as 'Hen of the Woods,' Maitake forms large, layered clusters at the base of oak trees. Its name means 'dancing mushroom' in Japanese, supposedly because people danced with joy upon finding it. Maitake is both a prized culinary ingredient and a powerful medicinal mushroom.",
    benefits: ["Complex earthy flavor", "Blood sugar regulation", "Immune modulation", "Cancer research applications", "Rich in minerals"],
    imageEmoji: "💃",
    funFact: "In feudal Japan, Maitake was so valuable that foragers who found wild patches would guard the locations as family secrets, passed down through generations.",
  },
  {
    slug: "psilocybe-semilanceata",
    commonName: "Liberty Cap",
    scientificName: "Psilocybe semilanceata",
    category: "therapeutic",
    description: "Liberty Cap is one of the most widespread naturally occurring psilocybin mushrooms, found across temperate regions worldwide. Named for its distinctive pointed cap resembling a Phrygian cap (liberty cap), it has a long history of use in spiritual and therapeutic contexts across many cultures.",
    benefits: ["Spiritual exploration", "Creative enhancement", "Anxiety reduction", "Pattern-breaking insights", "Emotional processing"],
    imageEmoji: "🗽",
    funFact: "Liberty Caps are one of the most potent psilocybin species by weight, containing up to 1.28% psilocybin in dried specimens.",
  },
];

export function getSpeciesBySlug(slug: string): Species | undefined {
  return species.find((s) => s.slug === slug);
}

export function getSpeciesByCategory(category: string): Species[] {
  return species.filter((s) => s.category === category);
}
