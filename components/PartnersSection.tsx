import Link from "next/link"

export default function PartnersSection() {
  const partners = [
    { name: "Gonzaga University", logo: "GONZAGA" },
    { name: "JM Family Enterprises", logo: "JM Family" },
    { name: "Cepheid", logo: "Cepheid" },
    { name: "PepsiCo", logo: "PEPSICO" },
    { name: "Harvard Business School", logo: "Harvard" },
    { name: "Microsoft", logo: "Microsoft" },
    { name: "RBC", logo: "RBC" },
  ]

  return (
    <section className="py-16 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] text-center mb-12">
          Prosci is a transformation partner for global enterprises
        </h2>
        
        {/* Partner logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="text-gray-600 font-semibold text-lg md:text-xl opacity-70 hover:opacity-100 transition-opacity"
            >
              {partner.logo}
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
