import Link from "next/link"

const events = [
  {
    type: "CONFERENCE",
    title: "ACMC 2026",
    description:
      "Join the ASEAN Change Management Conference for practical insights, industry perspectives, and regional networking.",
    ctaText: "Visit ACMC",
    ctaHref: "https://acmc.my/",
  },
  {
    type: "PODCAST",
    title: "UNSCRIPTED: Change Management @ Work",
    description:
      "Real conversations with practitioners and leaders sharing lessons, wins, and hard-earned change stories.",
    ctaText: "Explore Podcast",
    ctaHref: "/resources/podcast",
  },
  {
    type: "WEBINAR",
    title: "Live Webinar Series",
    description:
      "Attend upcoming webinars focused on organizational readiness, sponsorship, and people-first transformation strategies.",
    ctaText: "View Webinars",
    ctaHref: "/resources/webinars",
  },
]

export default function UpcomingEventsSection() {
  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] text-center mb-12">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[#9b8ba8] mb-2">
                {event.type}
              </p>
              <h3 className="text-lg font-serif font-semibold text-[#3d1a4e] mb-3">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {event.description}
              </p>
              <Link
                href={event.ctaHref}
                className="text-[#3d1a4e] font-semibold text-sm hover:text-[#2d1339] transition-colors"
              >
                {event.ctaText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
