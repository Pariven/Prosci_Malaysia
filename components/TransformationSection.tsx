import Image from "next/image"
import Link from "next/link"

export default function TransformationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header text */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3d1a4e] leading-tight">
              Excellently managed transformations are up to 7x more likely to succeed.
            </h2>
          </div>
          <div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our decades of research shows that when people understand what&apos;s changing, why it matters, and how to move forward, results follow.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Prosci brings structure, clarity, and confidence to change—working with leaders, managers, and teams to drive adoption, build organizational readiness and enable transformation success.
            </p>
          </div>
        </div>

        {/* Transformation cards */}
        <div className="bg-[#f7f5f0] rounded-2xl p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl text-[#3d1a4e] mb-4">
            We&apos;re ready for any transformation challenge.
          </h3>
          <p className="text-gray-700 mb-12">
            Here are two we help organizations navigate most often.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* ERP Transformation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-15%20211823-0kaKUEvng9dqoRRM6jxn6CJg9o2eVn.png"
                  alt="ERP Transformation team meeting"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-2xl text-[#3d1a4e] mb-4">
                  ERP Transformation
                </h4>
                <p className="text-gray-600 mb-4">
                  ERP success depends on more than system readiness—it depends on people readiness.
                </p>
                <p className="text-gray-700 text-sm mb-6">
                  We design and deliver change programs to minimize disruption and deliver value—through consulting, workshops, training, research-backed tools and resources and long-term reinforcement strategies.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center px-5 py-2.5 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide text-sm"
                >
                  See Solution
                </Link>
              </div>
            </div>

            {/* AI Transformation */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-15%20211823-0kaKUEvng9dqoRRM6jxn6CJg9o2eVn.png"
                  alt="AI Transformation team discussion"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="font-serif text-2xl text-[#c9b037] mb-4">
                  AI Transformation and adoption
                </h4>
                <p className="text-gray-600 mb-4">
                  43% of AI initiatives falter because workforce adoption and capabilities are lagging behind technology.
                </p>
                <p className="text-gray-700 text-sm mb-6">
                  We align leaders, prepare managers, and guide employees through the mindset and skill shifts that turn AI from a technical deployment into a business capability.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center px-5 py-2.5 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide text-sm"
                >
                  See Solution
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
