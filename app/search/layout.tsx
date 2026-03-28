import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore Mushroom Retailers',
  description:
    'Search and discover mushroom retailers in Colorado. Filter by therapeutic, medicinal, and gourmet verticals. View on an interactive map or browse the list.',
  openGraph: {
    title: 'Explore Mushroom Retailers | MycoMaps',
    description: 'Find therapeutic, medicinal, and gourmet mushroom retailers near you.',
  },
}

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return children
}
