import type { Metadata } from 'next'
import { Fraunces, Literata } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { AuthProvider } from '@/lib/auth-context'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-literata',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
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
    <html lang="en" className={`${fraunces.variable} ${literata.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <AuthProvider>
          <Navbar />
          <main style={{ flex: 1 }}>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
