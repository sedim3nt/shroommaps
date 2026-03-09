import Link from "next/link";
import { species } from "@/data/species";
import { VerticalType } from "@/types";

const categoryConfig: Record<
  VerticalType,
  { label: string; color: string; bg: string }
> = {
  medicinal: {
    label: "Medicinal",
    color: "text-medicinal",
    bg: "bg-medicinal/10 border-medicinal/20",
  },
  therapeutic: {
    label: "Therapeutic",
    color: "text-therapeutic",
    bg: "bg-therapeutic/10 border-therapeutic/20",
  },
  gourmet: {
    label: "Gourmet",
    color: "text-gourmet",
    bg: "bg-gourmet/10 border-gourmet/20",
  },
};

export const metadata = {
  title: "Learn About Mushrooms — ShroomMaps",
  description:
    "Explore our comprehensive guide to medicinal, therapeutic, and gourmet mushroom species.",
};

export default function LearnPage() {
  const medicinal = species.filter((s) => s.category === "medicinal");
  const therapeutic = species.filter((s) => s.category === "therapeutic");
  const gourmet = species.filter((s) => s.category === "gourmet");

  const sections = [
    {
      title: "Medicinal Mushrooms",
      emoji: "🌿",
      species: medicinal,
      category: "medicinal" as const,
    },
    {
      title: "Therapeutic Mushrooms",
      emoji: "🧠",
      species: therapeutic,
      category: "therapeutic" as const,
    },
    {
      title: "Gourmet Mushrooms",
      emoji: "👨‍🍳",
      species: gourmet,
      category: "gourmet" as const,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-4">
          Species Guide
        </h1>
        <p className="text-soil-light max-w-2xl mx-auto text-lg">
          Learn about the fascinating world of mushrooms — from brain-boosting
          medicinals to culinary delights.
        </p>
      </div>

      {/* Quick Nav */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {sections.map((section) => (
          <a
            key={section.category}
            href={`#${section.category}`}
            className={`${categoryConfig[section.category].bg} border rounded-full px-5 py-2 text-sm font-medium ${categoryConfig[section.category].color} hover:shadow-sm transition-all`}
          >
            {section.emoji} {section.title}
          </a>
        ))}
      </div>

      {/* Species Sections */}
      {sections.map((section) => (
        <section key={section.category} id={section.category} className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-3xl">{section.emoji}</span>
            <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-playfair)] text-soil">
              {section.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.species.map((sp) => (
              <article
                key={sp.slug}
                className={`${categoryConfig[sp.category].bg} border rounded-2xl p-6 sm:p-8 hover:shadow-md transition-all`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl">{sp.imageEmoji}</span>
                  <div>
                    <h3 className="text-xl font-bold font-[family-name:var(--font-playfair)] text-soil">
                      {sp.commonName}
                    </h3>
                    <p className="text-sm text-soil-light italic">
                      {sp.scientificName}
                    </p>
                    <span
                      className={`inline-block mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${categoryConfig[sp.category].color} bg-white/50`}
                    >
                      {categoryConfig[sp.category].label}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-soil-light leading-relaxed mb-4">
                  {sp.description}
                </p>

                {/* Benefits */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-soil mb-2">
                    Key Benefits
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {sp.benefits.map((benefit) => (
                      <span
                        key={benefit}
                        className="text-xs bg-white/60 text-soil-light px-2.5 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="bg-white/40 rounded-xl p-4 mt-auto">
                  <p className="text-xs text-soil-light">
                    <span className="font-semibold text-soil">
                      💡 Fun fact:
                    </span>{" "}
                    {sp.funFact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <div className="bg-primary rounded-3xl p-8 sm:p-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-playfair)] text-white mb-4">
          Ready to Find Your Mushrooms?
        </h2>
        <p className="text-white/80 mb-6 max-w-md mx-auto">
          Browse our directory of trusted Colorado retailers offering these
          species and more.
        </p>
        <Link
          href="/search"
          className="inline-block bg-accent hover:bg-accent-light text-soil font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
        >
          Browse Retailers
        </Link>
      </div>
    </div>
  );
}
