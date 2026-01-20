import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import FeaturesShowcase from '@/components/FeaturesShowcase'
import AIFeatures from '@/components/AIFeatures'
import TechnicalSpecs from '@/components/TechnicalSpecs'
import VideoTutorials from '@/components/VideoTutorials'
import Documentation from '@/components/Documentation'
import UserGuide from '@/components/UserGuide'
import InstallationGuide from '@/components/InstallationGuide'
import DownloadSection from '@/components/DownloadSection'
import APIDocumentation from '@/components/APIDocumentation'
import Community from '@/components/Community'
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
      <AIFeatures />
      <Benefits />
      <HowItWorks />
      <TechnicalSpecs />
      <VideoTutorials />
      <Documentation />
      <UserGuide />
      <InstallationGuide />
      <DownloadSection />
      <APIDocumentation />
      <Community />
      <ComparisonTable />
      <PricingSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}