import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-soil text-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍄</span>
              <span className="text-lg font-bold font-[family-name:var(--font-playfair)] text-white">
                ShroomMaps
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Connecting you with trusted mushroom retailers for medicinal,
              therapeutic, and gourmet needs.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/search" className="text-sm hover:text-accent transition-colors">
                  Find Retailers
                </Link>
              </li>
              <li>
                <Link href="/search?vertical=medicinal" className="text-sm hover:text-accent transition-colors">
                  Medicinal
                </Link>
              </li>
              <li>
                <Link href="/search?vertical=therapeutic" className="text-sm hover:text-accent transition-colors">
                  Therapeutic
                </Link>
              </li>
              <li>
                <Link href="/search?vertical=gourmet" className="text-sm hover:text-accent transition-colors">
                  Gourmet
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/learn" className="text-sm hover:text-accent transition-colors">
                  Species Guide
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-sm hover:text-accent transition-colors">
                  Legal Status Map
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <p className="text-xs text-white/50 leading-relaxed">
              ShroomMaps is an informational directory. We do not sell or
              distribute any controlled substances. Always verify the legal
              status of products in your jurisdiction before purchasing.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} ShroomMaps. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Made with 🍄 in Colorado
          </p>
        </div>
      </div>
    </footer>
  );
}
