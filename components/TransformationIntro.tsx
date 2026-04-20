import Image from "next/image"
import Link from "next/link"

export default function TransformationIntro() {
  return (
    <section className="bg-white">
      {/* 7x Success Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-[42px] text-[#3d1a4e] leading-tight">
              Excellently managed transformations are up to 7x more likely to succeed.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Our decades of research shows that when people understand what&apos;s changing, why it matters, and how to move forward, results follow.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Prosci brings structure, clarity, and confidence to change—working with leaders, managers, and teams to drive adoption, build organizational readiness and enable{" "}
              <Link href="#" className="text-[#3d1a4e] underline hover:no-underline">
                transformation success
              </Link>
              .
            </p>
          </div>
        </div>
      </div>

      {/* Transformation Challenges Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="bg-[#f7f5f0] rounded-lg p-8 lg:p-12">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-[#3d1a4e] mb-3">
            We&apos;re ready for any transformation challenge.
          </h2>
          <p className="text-gray-700 mb-10">
            Here are two we help organizations navigate most often.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ERP Transformation Card */}
            <div>
              <div className="relative h-64 md:h-72 lg:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/erp-transformation.png"
                  alt="ERP Transformation - Team collaboration meeting"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#3d1a4e] mb-4">
                ERP Transformation
              </h3>
              <p className="text-gray-700 mb-4">
                ERP success depends on more than system readiness—it depends on people readiness.
              </p>
              <p className="text-gray-700 mb-6">
                We design and deliver change programs to minimize disruption and deliver value—through consulting, workshops, training, research-backed tools and resources and long-term reinforcement strategies.
              </p>
              <Link
                href="#"
                className="inline-block bg-[#3d1a4e] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide"
              >
                See Solution
              </Link>
            </div>

            {/* AI Transformation Card */}
            <div>
              <div className="relative h-64 md:h-72 lg:h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/images/ai-transformation.png"
                  alt="AI Transformation - Professional thinking about technology adoption"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-[#3d1a4e] mb-4">
                AI Transformation and adoption
              </h3>
              <p className="text-gray-700 mb-4">
                43% of AI initiatives falter because workforce adoption and capabilities are lagging behind technology.
              </p>
              <p className="text-gray-700 mb-6">
                We align leaders, prepare managers, and guide employees through the mindset and skill shifts that turn AI from a technical deployment into a business capability.
              </p>
              <Link
                href="#"
                className="inline-block bg-[#3d1a4e] text-white text-sm font-semibold px-6 py-3 rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide"
              >
                See Solution
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
