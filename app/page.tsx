import HeroSection from '@/components/home/HeroSection'
import VerticalCards from '@/components/home/VerticalCards'
import FeaturedRetailers from '@/components/home/FeaturedRetailers'
import HowItWorks from '@/components/home/HowItWorks'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <VerticalCards />
      <FeaturedRetailers />
      <HowItWorks />
    </>
  )
}
