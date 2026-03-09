import { notFound } from "next/navigation";
import Link from "next/link";
import { retailers, getRetailerBySlug } from "@/data/retailers";
import { VerticalType } from "@/types";

const verticalBadge: Record<
  VerticalType,
  { bg: string; text: string; emoji: string }
> = {
  medicinal: { bg: "bg-medicinal/15", text: "text-medicinal", emoji: "🌿" },
  therapeutic: {
    bg: "bg-therapeutic/15",
    text: "text-therapeutic",
    emoji: "🧠",
  },
  gourmet: { bg: "bg-gourmet/15", text: "text-gourmet", emoji: "👨‍🍳" },
};

export function generateStaticParams() {
  return retailers.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const retailer = getRetailerBySlug(slug);
  if (!retailer) return { title: "Retailer Not Found" };
  return {
    title: `${retailer.name} — ShroomMaps`,
    description: retailer.description,
  };
}

export default async function RetailerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const retailer = getRetailerBySlug(slug);
  if (!retailer) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav
        className="flex items-center gap-2 text-sm text-soil-light mb-6"
        aria-label="Breadcrumb"
      >
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/search" className="hover:text-primary transition-colors">
          Retailers
        </Link>
        <span>/</span>
        <span className="text-soil font-medium">{retailer.name}</span>
      </nav>

      {/* Header */}
      <div className="bg-white border border-secondary/10 rounded-2xl overflow-hidden mb-8">
        {/* Color banner */}
        <div
          className={`h-3 ${
            retailer.verticals[0] === "medicinal"
              ? "bg-medicinal"
              : retailer.verticals[0] === "therapeutic"
              ? "bg-therapeutic"
              : "bg-gourmet"
          }`}
        />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {retailer.verticals.map((v) => (
              <span
                key={v}
                className={`${verticalBadge[v].bg} ${verticalBadge[v].text} text-sm font-medium px-3 py-1 rounded-full`}
              >
                {verticalBadge[v].emoji}{" "}
                {v.charAt(0).toUpperCase() + v.slice(1)}
              </span>
            ))}
            {retailer.featured && (
              <span className="bg-accent/15 text-accent text-sm font-medium px-3 py-1 rounded-full">
                ⭐ Featured
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-3">
            {retailer.name}
          </h1>

          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-5 h-5 ${
                    star <= Math.round(retailer.rating)
                      ? "text-accent"
                      : "text-secondary/20"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-soil-light">
                {retailer.rating.toFixed(1)} ({retailer.reviewCount} reviews)
              </span>
            </div>
          </div>

          <p className="text-soil-light leading-relaxed text-lg">
            {retailer.longDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {retailer.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm bg-bg-alt text-soil-light px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-6">
            Products & Services
          </h2>
          <div className="space-y-4">
            {retailer.products.map((product) => (
              <div
                key={product.name}
                className="bg-white border border-secondary/10 rounded-xl p-5 flex items-start justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-soil">{product.name}</h3>
                    <span
                      className={`${verticalBadge[product.category].bg} ${verticalBadge[product.category].text} text-xs px-2 py-0.5 rounded-full`}
                    >
                      {product.category}
                    </span>
                  </div>
                  <p className="text-sm text-soil-light">
                    {product.description}
                  </p>
                </div>
                <span className="text-lg font-bold text-primary whitespace-nowrap">
                  {product.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          {/* Contact Info */}
          <div className="bg-white border border-secondary/10 rounded-xl p-6">
            <h3 className="font-bold text-soil mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-secondary mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
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
                <div>
                  <p className="text-sm text-soil">{retailer.address}</p>
                  <p className="text-sm text-soil">
                    {retailer.city}, {retailer.state} {retailer.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-secondary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p className="text-sm text-soil">{retailer.phone}</p>
              </div>

              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-secondary shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p className="text-sm text-soil">{retailer.email}</p>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="bg-white border border-secondary/10 rounded-xl p-6">
            <h3 className="font-bold text-soil mb-4">Hours</h3>
            <dl className="space-y-2">
              {Object.entries(retailer.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between text-sm">
                  <dt className="font-medium text-soil">{day}</dt>
                  <dd className="text-soil-light">{hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>
    </div>
  );
}
