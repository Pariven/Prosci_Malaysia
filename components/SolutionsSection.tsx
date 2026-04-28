import Link from "next/link"

const solutions = [
  {
    title: "Consulting services",
    description: "Experienced experts committed to partnerships that bring clarity, structure, and momentum to complex change.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <ellipse cx="100" cy="100" rx="80" ry="40" />
        <ellipse cx="100" cy="100" rx="60" ry="30" />
        <ellipse cx="100" cy="100" rx="40" ry="20" />
        <path d="M20 100 Q100 60 180 100" />
        <path d="M20 100 Q100 140 180 100" />
      </svg>
    ),
  },
  {
    title: "Methodology and tools",
    description: "The globally recognized ADKAR Model, change management methodology, processes, models and tools of change success.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" />
        <circle cx="100" cy="100" r="30" />
        <ellipse cx="100" cy="100" rx="20" ry="60" />
        <ellipse cx="100" cy="100" rx="60" ry="20" />
      </svg>
    ),
  },
  {
    title: "Research and insights",
    description: "Role-based, interactive learning designed for leaders, managers, and practitioners navigating accelerated change.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="40" y1="160" x2="100" y2="40" />
        <line x1="100" y1="40" x2="160" y2="160" />
        <line x1="40" y1="160" x2="160" y2="160" />
        <line x1="70" y1="100" x2="130" y2="100" />
        <line x1="55" y1="130" x2="145" y2="130" />
        <line x1="100" y1="40" x2="100" y2="160" />
      </svg>
    ),
  },
  {
    title: "Enterprise training",
    description: "Role-based, interactive learning designed for leaders, managers, and practitioners navigating accelerated change.",
    icon: (
      <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <polygon points="100,30 170,90 140,160 60,160 30,90" />
        <polygon points="100,50 150,95 130,145 70,145 50,95" />
        <line x1="100" y1="30" x2="100" y2="160" />
        <line x1="30" y1="90" x2="170" y2="90" />
      </svg>
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
              <div className="w-full h-48 text-[#3d1a4e] mb-6">
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
            href="#solutions"
            className="inline-flex items-center px-6 py-3 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide"
          >
            See Enterprise Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
