import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import VideoTutorials from '@/components/VideoTutorials'
import DownloadSection from '@/components/DownloadSection'
import ComparisonTable from '@/components/ComparisonTable'
import PricingSection from '@/components/PricingSection'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturesShowcase />
      <Benefits />
      <HowItWorks />
      <VideoTutorials />
      <DownloadSection />
      <ComparisonTable />
      <PricingSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}