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
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#f7f5f0] via-[#fef3cd] to-[#f7f5f0]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23fef3cd' fill-opacity='0.4' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
