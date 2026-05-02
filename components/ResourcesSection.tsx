"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"

const resources = [
  {
    title: "Microsoft's Change Management Win",
    description:
      "See how Microsoft's Investor Relations team flawlessly executed a high-stakes platform change for quarterly earnings releases using proven change management strategies and achieved zero-defect delivery.",
    image: "/Engaged-business-meeting-1_Feb-26.webp",
    link: "#",
  },
  {
    title: "AI Change Readiness Guide",
    description:
      "Navigate AI transformation with confidence. Discover data-driven insights and practical strategies to help your people adopt GenAI solutions while maximizing opportunities and managing potential risks.",
    image: "/Engaged-business-meeting-2_Feb-26.webp",
    link: "#",
  },
  {
    title: "ERP Success Through Change Management",
    description:
      "Drive successful ERP adoption with proven change management strategies. Learn how organizations achieve better outcomes and higher user acceptance through structured, people-focused implementation approaches.",
    image: "/Focused-conversation-2_Feb-26.webp",
    link: "#",
  },
  {
    title: "Change Management Playbook",
    description:
      "A practical toolkit that helps leaders align stakeholders, build momentum, and keep change on track from start to sustainment.",
    image: "/Business-people-hands-1_Feb-26.webp",
    link: "#",
  },
  {
    title: "Leading Through Change",
    description:
      "Equip leaders with the messaging, sponsor actions, and coaching practices that drive adoption.",
    image: "/Business-people-collaborating-5_Feb-26.webp",
    link: "#",
  },
]

export default function ResourcesSection() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#3d1a4e] text-center mb-12">
          Resources and tools
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          className="relative"
        >
          <CarouselContent className="-ml-8">
            {resources.map((resource, index) => (
              <CarouselItem
                key={index}
                className="pl-8 basis-[90%] sm:basis-[70%] lg:basis-[60%]"
              >
                <Link
                  href={resource.link}
                  className="group block h-full bg-white overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-y-0 left-0 w-[52%] bg-white border-r border-[#e6d6cb] shadow-[4px_0_12px_rgba(0,0,0,0.08)]" />
                    <div className="absolute inset-y-0 left-0 w-[52%] p-6 flex flex-col">
                      <h3 className="font-serif text-xl md:text-2xl text-[#3d1a4e]">
                        {resource.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed mt-3">
                        {resource.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="mt-8 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === current ? "bg-[#e11d8f]" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => api?.scrollPrev()}
              className="h-10 w-10 rounded-full bg-[#3d1a4e] text-white hover:bg-[#2d1339] transition-colors disabled:opacity-50"
              disabled={!api}
              aria-label="Previous slide"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="h-10 w-10 rounded-full bg-[#3d1a4e] text-white hover:bg-[#2d1339] transition-colors disabled:opacity-50"
              disabled={!api}
              aria-label="Next slide"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="#"
            className="inline-flex items-center px-6 py-3 bg-[#3d1a4e] text-white font-semibold rounded hover:bg-[#2d1339] transition-colors uppercase tracking-wide"
          >
            Explore resources and tools
          </Link>
        </div>
      </div>
    </section>
  )
}
