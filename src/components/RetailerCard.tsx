import Link from "next/link";
import { Retailer, VerticalType } from "@/types";

const verticalBadgeColors: Record<VerticalType, string> = {
  medicinal: "bg-medicinal/15 text-medicinal",
  therapeutic: "bg-therapeutic/15 text-therapeutic",
  gourmet: "bg-gourmet/15 text-gourmet",
};

const verticalEmoji: Record<VerticalType, string> = {
  medicinal: "🌿",
  therapeutic: "🧠",
  gourmet: "👨‍🍳",
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`Rating: ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= Math.round(rating) ? "text-accent" : "text-secondary/20"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-soil-light ml-1">
        {rating.toFixed(1)} ({})
      </span>
    </div>
  );
}

export default function RetailerCard({ retailer }: { retailer: Retailer }) {
  return (
    <Link href={`/retailer/${retailer.slug}`}>
      <article className="bg-white border border-secondary/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {/* Color banner based on primary vertical */}
        <div
          className={`h-2 ${
            retailer.verticals[0] === "medicinal"
              ? "bg-medicinal"
              : retailer.verticals[0] === "therapeutic"
              ? "bg-therapeutic"
              : "bg-gourmet"
          }`}
        />

        <div className="p-5 flex flex-col flex-1">
          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {retailer.verticals.map((v) => (
              <span
                key={v}
                className={`${verticalBadgeColors[v]} text-xs font-medium px-2.5 py-0.5 rounded-full`}
              >
                {verticalEmoji[v]} {v.charAt(0).toUpperCase() + v.slice(1)}
              </span>
            ))}
          </div>

          {/* Name & Location */}
          <h3 className="text-lg font-bold font-[family-name:var(--font-playfair)] text-soil mb-1">
            {retailer.name}
          </h3>
          <p className="text-xs text-soil-light mb-2 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            {retailer.city}, {retailer.state}
          </p>

          {/* Description */}
          <p className="text-sm text-soil-light leading-relaxed mb-3 flex-1">
            {retailer.description}
          </p>

          {/* Rating */}
          <StarRating rating={retailer.rating} />

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {retailer.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-bg-alt text-soil-light px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
