import SearchBar from "@/components/SearchBar";
import VerticalCard from "@/components/VerticalCard";
import RetailerCard from "@/components/RetailerCard";
import { getFeaturedRetailers } from "@/data/retailers";
import Link from "next/link";

export default function HomePage() {
  const featured = getFeaturedRetailers();

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 40%),
                               radial-gradient(circle at 40% 80%, rgba(255,255,255,0.06) 0%, transparent 30%)`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm">🍄</span>
              <span className="text-xs font-medium text-white/80">
                Colorado&apos;s Mushroom Marketplace
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-playfair)] text-white mb-6 leading-tight">
              Discover the World of{" "}
              <span className="text-accent">Mushrooms</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 mb-10 leading-relaxed max-w-2xl mx-auto">
              Find trusted retailers for medicinal, therapeutic, and gourmet
              mushrooms. Explore species, learn about benefits, and connect with
              your local mushroom community.
            </p>

            <div className="flex justify-center mb-8">
              <SearchBar large />
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-medicinal rounded-full" />
                <span>20+ Retailers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-therapeutic rounded-full" />
                <span>3 Verticals</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gourmet rounded-full" />
                <span>All Across Colorado</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
              fill="#FAF7F0"
            />
          </svg>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-4">
            Explore by Category
          </h2>
          <p className="text-soil-light max-w-xl mx-auto">
            From cognitive support to culinary adventures, discover the perfect
            mushroom products for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VerticalCard vertical="medicinal" />
          <VerticalCard vertical="therapeutic" />
          <VerticalCard vertical="gourmet" />
        </div>
      </section>

      {/* Featured Retailers */}
      <section className="bg-bg-alt py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-soil mb-2">
                Featured Retailers
              </h2>
              <p className="text-soil-light">
                Top-rated mushroom shops across Colorado
              </p>
            </div>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-light transition-colors"
            >
              View all retailers
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((retailer) => (
              <RetailerCard key={retailer.id} retailer={retailer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="bg-primary rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 50%, white 0%, transparent 50%)",
              }}
            />
          </div>
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Browse our complete directory of mushroom retailers, learn about
              different species, or check the legal status in your state.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/search"
                className="bg-accent hover:bg-accent-light text-soil font-semibold px-8 py-3 rounded-full transition-colors shadow-lg"
              >
                Find Retailers
              </Link>
              <Link
                href="/learn"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3 rounded-full transition-colors border border-white/20"
              >
                Species Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
