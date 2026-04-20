import Link from "next/link"
import { GraduationCap, Shield, Landmark, Monitor, Heart, Factory, Wallet, Lightbulb } from "lucide-react"

const industries = [
  { name: "Higher Education", icon: GraduationCap },
  { name: "Insurance", icon: Shield },
  { name: "Government", icon: Landmark },
  { name: "Information Technology", icon: Monitor },
  { name: "Healthcare", icon: Heart },
  { name: "Manufacturing", icon: Factory },
  { name: "Financial Services", icon: Wallet },
  { name: "Energy", icon: Lightbulb },
]

export default function IndustrySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#3d1a4e] mb-6">
              Industry expertise
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              People-first transformation is unique to every industry. We optimize change programs to meet the specific industry challenges you&apos;re facing—ensuring adoption, alignment, and results.
            </p>
            <p className="text-gray-700 font-medium">
              Industries we work with most:
            </p>
          </div>

          {/* Right - Industry grid */}
          <div className="grid grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#3d1a4e] hover:shadow-sm transition-all cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full border-2 border-[#3d1a4e] flex items-center justify-center">
                  <industry.icon className="w-5 h-5 text-[#3d1a4e]" />
                </div>
                <span className="text-[#3d1a4e] font-medium">{industry.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="#industries"
            className="inline-flex items-center px-6 py-3 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide"
          >
            See Industry Insights
          </Link>
        </div>
      </div>
    </section>
  )
}
