import HeroSection from "@/components/hero-section"
import EventInfo from "@/components/event-info"
import PrizesSection from "@/components/prizes-section"
import AboutSection from "@/components/about-section"
import SubmissionGuidelines from "@/components/submission-guidelines"
import SponsorsSection from "@/components/sponsors-section"
import JudgesSection from "@/components/judges-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import WorldRecordSection from "@/components/world-record-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <WorldRecordSection />
        <EventInfo />
        <PrizesSection />
        <SubmissionGuidelines />
        <SponsorsSection />
        <JudgesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  )
}
