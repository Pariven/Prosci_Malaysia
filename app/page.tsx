import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import TransformationIntro from "@/components/TransformationIntro"
import StatsSection from "@/components/StatsSection"
import PartnersSection from "@/components/PartnersSection"
import SolutionsSection from "@/components/SolutionsSection"
import TestimonialsSection from "@/components/TestimonialsSection"
import IndustrySection from "@/components/IndustrySection"
import InsightsSection from "@/components/InsightsSection"
import PodcastsSection from "@/components/PodcastsSection"
import ResourcesSection from "@/components/ResourcesSection"
import NewsletterSection from "@/components/NewsletterSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <TransformationIntro />
      <StatsSection />
      <PartnersSection />
      <SolutionsSection />
      <TestimonialsSection />
      <IndustrySection />
      <InsightsSection />
      <PodcastsSection />
      <ResourcesSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
