"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const podcasts = [
  {
    title: "How Science Suggests You Change Your Organization",
    description: "Tim Creasey and Paul Gonzale discuss why traditional tactics like comms and training break down in t...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-15%20212123-ke20vXbjx56uxHNdqN9ju9ODsvL7MD.png",
    color: "bg-amber-100",
  },
  {
    title: "Reimagining Work with Tim Creasey (Episode 101)",
    description: "The future of work and reimagining work in our post-covid world. Project Management Office Hours is ...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-15%20212123-ke20vXbjx56uxHNdqN9ju9ODsvL7MD.png",
    color: "bg-orange-400",
  },
  {
    title: "CHANGE: How Did the World Move to WFH in 1.5 Days?",
    description: "Involuntary digital transformation. How the world has been forced to adapt to the socio-economic cha...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-15%20212123-ke20vXbjx56uxHNdqN9ju9ODsvL7MD.png",
    color: "bg-blue-500",
  },
  {
    title: "Tim Creasey on the Workplace of the Future",
    description: "Digital transformation of the workplace, finding the right balance between working in-person and vir...",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-15%20212123-ke20vXbjx56uxHNdqN9ju9ODsvL7MD.png",
    color: "bg-yellow-400",
  },
]

export default function PodcastsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % podcasts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + podcasts.length) % podcasts.length)
  }

  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] text-center mb-12">
          Podcasts and interviews
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {podcasts.map((podcast, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`h-40 ${podcast.color} flex items-center justify-center`}>
                <span className="text-white font-bold text-lg">PODCAST</span>
              </div>
              <div className="p-4">
                <span className="inline-block px-2 py-1 border border-gray-300 rounded text-xs text-gray-600 mb-3">
                  PODCAST
                </span>
                <h3 className="font-serif text-lg text-[#3d1a4e] mb-2 line-clamp-2">
                  {podcast.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {podcast.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">Play on:</span>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="sr-only">Spotify</span>
                    </button>
                    <button className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center">
                      <span className="sr-only">Apple Podcasts</span>
                    </button>
                    <button className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="sr-only">YouTube</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {podcasts.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-[#d946ef]" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#3d1a4e] text-white flex items-center justify-center hover:bg-[#2d1339] transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#3d1a4e] text-white flex items-center justify-center hover:bg-[#2d1339] transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
