import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MycoMaps — Find Your Fungi',
    template: '%s | MycoMaps',
  },
  description:
    'Discover mushroom retailers near you. Therapeutic healing centers, medicinal supplement shops, and gourmet mushroom farms — all in one place.',
  keywords: [
    'mushroom dispensary',
    'psilocybin healing center',
    'functional mushroom supplements',
    'gourmet mushrooms',
    'lion\'s mane',
    'reishi',
    'Colorado psilocybin',
    'mushroom retailer',
  ],
  openGraph: {
    title: 'MycoMaps — Find Your Fungi',
    description: 'The mushroom marketplace. Find therapeutic, medicinal, and gourmet mushroom retailers near you.',
    type: 'website',
    siteName: 'MycoMaps',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MycoMaps — Find Your Fungi',
    description: 'The mushroom marketplace. Find therapeutic, medicinal, and gourmet mushroom retailers near you.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
