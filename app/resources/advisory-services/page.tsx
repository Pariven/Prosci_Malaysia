import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AdvisoryServicesComingSoon() {
  return (
    <main className="min-h-screen bg-white text-[#3f484f]">
      <Header />

      <section
        className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-6 py-16 text-center md:min-h-[420px] bg-cover text-white"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,21,72,0.42),_rgba(53,12,51,0.62)_42%,_rgba(22,4,28,0.74)_100%)]" />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl">Advisory Management Consulting</h1>
          <p className="mt-4 text-base leading-7 text-white/90 md:text-lg">
            Prosci Advisors empower your people to succeed at change and achieve strong business outcomes.
          </p>
        </div>
      </section>

      <section className="w-full bg-[#f7f5f3] py-24">
        <div className="w-[90%] mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl text-[#3b0a45] text-center mb-12 leading-tight">Your Advisory Partner for Change Success</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            <div className="translate-x-[80px]">
              <p className="text-base font-medium text-[#2f2a2f] mb-6 leading-7">
                Organizations often struggle to realize returns on change initiatives or implement critical transformations. Yet, effective change is the cornerstone of business growth and innovation. Prosci's organizational change management consulting can help you maximize your change investments. We can:
              </p>

              <ul style={{ listStyleType: 'square' }} className="mt-6 space-y-5 pl-6 text-[#2f2a2f]">
                <li><strong>Enhance the skills of the individuals</strong> guiding your employees through change and implementation</li>
                <li><strong>Partner and advise on complex projects</strong>, providing additional resources and expertise to ensure success</li>
                <li><strong>Elevate your enterprise</strong> change management capabilities for competitive advantage</li>
              </ul>

              <p className="mt-6 text-base text-[#2f2a2f] leading-7">
                Blending art and science, Prosci Advisors employ research-based, industry-leading strategies and tools to deliver customized solutions. We provide unrivaled change expertise to help you succeed in your business transformation efforts.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/contact-us">Learn more</Link>
                </Button>
              </div>

            </div>

            <div className="flex items-start justify-center">
              <img src="/ChatGPT%20Image%20May%2012,%202026,%2006_57_03%20PM.png" alt="Professional meeting" className="w-full max-w-[420px] aspect-square object-cover -translate-x-[120px]" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
