import Image from "next/image"
import Link from "next/link"

export default function InsightsSection() {
  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] text-center mb-12">
          Latest insights
        </h2>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative h-64 md:h-auto">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-15%20212047-F1g9HXC4fHrEeUAa9F0ewAxArxrRQL.png"
                alt="Business professional presenting"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 mb-4 w-fit">
                CHANGE MANAGEMENT
              </span>
              <h3 className="font-serif text-2xl md:text-3xl text-[#3d1a4e] mb-4">
                Prosci&apos;s Evolved Brand: Reflecting 30 Years of Leadership as a Trusted Enterprise Change Partner
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A brand evolution that reflects Prosci&apos;s role in supporting clients through complex, enterprise-wide...
              </p>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide w-fit"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
