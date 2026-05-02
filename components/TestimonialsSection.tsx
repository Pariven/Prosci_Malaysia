import Link from "next/link"

const testimonials = [
  {
    quote: "A Prosci license was critical to building enterprise-wide change capability. The license gave us both the structure to standardize Prosci&apos;s change management approach and the flexibility to integrate change management into our established strategy, leadership development and project process.",
    name: "Carla Howard, Director",
    role: "Change Management Centre of Excellence, Avnet",
  },
  {
    quote: "I think what really made our partnership with Prosci a success is we stuck to it. We said, &apos;This is a journey, and we want to do this with you.&apos; It&apos;s not a one-day thing.",
    name: "Roel Mous, Sr. Manager",
    role: "Operations Transformation Office, Thermo Fisher Scientific",
  },
  {
    quote: "Change management creates a competitive advantage for our customers, and it achieves business outcomes and ROI at a greater rate than we would have seen otherwise. It made sense to move to a globally recognized methodology. We call Prosci the global leader in the professional discipline of change management.",
    name: "Alistair G. Lowe-Norris",
    role: "Global Director of Adoption & Change Management Strategy, Microsoft",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] text-center mb-16">
          What our customers say
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-sm"
            >
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="border-l-4 border-[#c9b037] pl-4">
                <p className="font-serif text-[#3d1a4e] font-semibold">
                  — {testimonial.name}
                </p>
                <p className="text-[#c9b037] text-sm italic">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}
