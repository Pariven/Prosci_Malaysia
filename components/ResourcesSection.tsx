import Link from "next/link"
import { FileText, BookOpen, Video, Download } from "lucide-react"

const resources = [
  {
    title: "Change Management Guides",
    description: "Comprehensive guides to help you implement change management in your organization.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Research Reports",
    description: "Access our latest research on change management best practices and benchmarks.",
    icon: BookOpen,
    link: "#",
  },
  {
    title: "Webinars & Videos",
    description: "Watch on-demand webinars and training videos from change management experts.",
    icon: Video,
    link: "#",
  },
  {
    title: "Templates & Tools",
    description: "Download ready-to-use templates and tools for your change initiatives.",
    icon: Download,
    link: "#",
  },
]

export default function ResourcesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] text-center mb-4">
          Resources and tools
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Access our library of change management resources designed to help you succeed.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <Link
              key={index}
              href={resource.link}
              className="group bg-[#f7f5f0] rounded-lg p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 group-hover:bg-[#3d1a4e] transition-colors">
                <resource.icon className="w-7 h-7 text-[#3d1a4e] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-[#3d1a4e] mb-2">
                {resource.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
