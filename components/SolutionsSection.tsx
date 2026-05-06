import Link from "next/link"

const solutions = [
  {
    title: "Advisory and Consulting Services",
    description: "Experienced experts committed to partnerships that bring clarity, structure, and momentum to complex change.",
    icon: (
      <img
        src="/converted.png"
        alt="Advisory and consulting services icon"
        className="h-[200px] w-[200px] object-contain"
      />
    ),
  },
  {
    title: "Methodology and tools",
    description: "The globally recognized ADKAR Model, change management methodology, processes, models and tools of change success.",
    icon: (
      <img
        src="/methodology-tools.png"
        alt="Methodology and tools icon"
        className="h-[200px] w-[200px] object-contain"
      />
    ),
  },
  {
    title: "Research and insights",
    description: "Role-based, interactive learning designed for leaders, managers, and practitioners navigating accelerated change.",
    icon: (
      <img
        src="/primary-research-insights.png"
        alt="Research and insights icon"
        className="h-[200px] w-[200px] object-contain"
      />
    ),
  },
  {
    title: "Training and Certifications",
    description: "Role-based, interactive learning designed for leaders, managers, and practitioners navigating accelerated change.",
    icon: (
      <img
        src="/training-certification.png"
        alt="Training and certifications icon"
        className="h-[200px] w-[200px] object-contain"
      />
    ),
  },
]

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] mb-6">
            Make your next transformation a success
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Prosci offers integrated solutions designed to support enterprise transformation—bringing together research, methodology and real-world experience to deliver must-win outcomes that last.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-48 text-[#3d1a4e] mb-6 flex items-center justify-center">
                {solution.icon}
              </div>
              <h3 className="font-serif text-xl text-[#3d1a4e] mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/certification-program#change-management"
            className="inline-flex items-center px-6 py-3 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide"
          >
            Discover Our Solution
          </Link>
        </div>
      </div>
    </section>
  )
}
