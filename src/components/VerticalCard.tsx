import Link from "next/link";
import { VerticalType } from "@/types";

interface VerticalCardProps {
  vertical: VerticalType;
}

const verticalConfig: Record<
  VerticalType,
  { title: string; emoji: string; description: string; colorClass: string; bgClass: string }
> = {
  medicinal: {
    title: "Medicinal",
    emoji: "🌿",
    description:
      "Lion's Mane, Reishi, Chaga, Cordyceps and more. Boost immunity, cognition, and overall wellness with nature's pharmacy.",
    colorClass: "text-medicinal",
    bgClass: "bg-medicinal/10 border-medicinal/20 hover:border-medicinal/40",
  },
  therapeutic: {
    title: "Therapeutic",
    emoji: "🧠",
    description:
      "Guided psilocybin experiences for mental health, personal growth, and healing. Legal in Colorado with licensed facilitators.",
    colorClass: "text-therapeutic",
    bgClass: "bg-therapeutic/10 border-therapeutic/20 hover:border-therapeutic/40",
  },
  gourmet: {
    title: "Gourmet",
    emoji: "👨‍🍳",
    description:
      "Shiitake, Oyster, Maitake, and rare varieties. Farm-fresh mushrooms for incredible culinary experiences.",
    colorClass: "text-gourmet",
    bgClass: "bg-gourmet/10 border-gourmet/20 hover:border-gourmet/40",
  },
};

export default function VerticalCard({ vertical }: VerticalCardProps) {
  const config = verticalConfig[vertical];

  return (
    <Link href={`/search?vertical=${vertical}`}>
      <article
        className={`${config.bgClass} border rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full`}
      >
        <div className="text-4xl mb-4">{config.emoji}</div>
        <h3
          className={`text-xl font-bold font-[family-name:var(--font-playfair)] ${config.colorClass} mb-3`}
        >
          {config.title}
        </h3>
        <p className="text-soil-light text-sm leading-relaxed">
          {config.description}
        </p>
        <div
          className={`mt-5 inline-flex items-center text-sm font-medium ${config.colorClass}`}
        >
          Browse {config.title.toLowerCase()}
          <svg
            className="ml-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
