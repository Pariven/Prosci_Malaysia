import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="Business professionals in a meeting discussing change management"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center min-h-[600px] lg:min-h-[700px]">
        {/* Semi-transparent Card */}
        <div className="bg-white/85 backdrop-blur-sm p-8 md:p-12 lg:p-16 max-w-xl lg:max-w-2xl my-12 lg:my-0">
          <h1 className="font-serif text-[#3d1a4e] text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
            Turning complex change into results.
          </h1>
          <p className="text-[#1a1a1a] text-base md:text-lg leading-relaxed mb-8">
            We help organizations turn complex change into something people understand—so they can act with confidence and deliver results. Because that&apos;s change done right.
          </p>
          <Link
            href="#solutions"
            className="inline-flex items-center px-6 py-3 bg-[#3d1a4e] text-white font-semibold text-sm tracking-wide hover:bg-[#2d1339] transition-colors"
          >
            DISCOVER OUR SOLUTIONS
          </Link>
        </div>
      </div>
    </section>
  )
}
