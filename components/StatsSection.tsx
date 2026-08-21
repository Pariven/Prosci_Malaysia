export default function StatsSection() {
  const stats = [
    { number: "30+", label: "Years of change management research" },
    { number: "267k+", label: "People empowered to drive change success" },
    { number: "80", label: "Countries with Prosci teams and partners" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="px-4">
              <div className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#3d1a4e] mb-2">
                {stat.number}
              </div>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
