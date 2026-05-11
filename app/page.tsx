import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import StatsSection from "@/components/StatsSection"
import SolutionsSection from "@/components/SolutionsSection"
import IndustrySection from "@/components/IndustrySection"
import NewsletterSection from "@/components/NewsletterSection"
import ResourcesSection from "@/components/ResourcesSection"
import UpcomingEventsSection from "@/components/UpcomingEventsSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <IndustrySection />
      <UpcomingEventsSection />
      <ResourcesSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
