import HeroSection from '@/components/home/HeroSection'
import VerticalCards from '@/components/home/VerticalCards'
import FeaturedRetailers from '@/components/home/FeaturedRetailers'
import ForagingCTA from '@/components/home/ForagingCTA'
import HowItWorks from '@/components/home/HowItWorks'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VerticalCards />
      <ForagingCTA />
      <FeaturedRetailers />
      <HowItWorks />
    </>
  )
}
