"use client"

import { useEffect, useMemo, useState } from "react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel"
import { galleryImages } from "@/lib/gallery"

const formatIndex = (value: number) => String(value).padStart(2, "0")

export default function GallerySection() {
  const [api, setApi] = useState<CarouselApi | null>(null)
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const images = useMemo(
    () =>
      galleryImages.slice(0, 5).map((image, index) => ({
        ...image,
        label: `Gallery ${formatIndex(index + 1)}`,
        src: encodeURI(image.src),
      })),
    []
  )

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  useEffect(() => {
    if (!api || isPaused) return

    const intervalId = window.setInterval(() => {
      api.scrollNext()
    }, 4500)

    return () => {
      window.clearInterval(intervalId)
    }
  }, [api, isPaused])

  return (
    <section className="py-20 bg-[radial-gradient(circle_at_top,_#f8f3ea_0%,_#f4eee6_45%,_#efe7dc_100%)]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#6d646f]">
              Gallery
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[#2d1339] md:text-4xl">
              Gallery
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#4b3f4e] md:text-base">
            Moments from our workshops, certification sessions, and community gatherings across Malaysia.
          </p>
        </div>

        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            setApi={setApi}
            className="mt-10"
          >
            <CarouselContent className="-ml-6">
              {images.map((image) => (
                <CarouselItem key={image.src} className="pl-6 basis-[85%] sm:basis-[60%] lg:basis-[40%]">
                  <div className="group h-full border border-[#e4d8cf] bg-white shadow-[10px_10px_0_#e6dccf] transition-transform duration-300 hover:-translate-y-1">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="border-t border-[#e4d8cf] px-5 py-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-[#6d646f]">{image.label}</p>
                      <p className="mt-2 text-sm text-[#3f3843]">
                        Prosci Malaysia learning moments and community highlights.
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-2.5 w-2.5 border border-[#2d1339] transition-colors ${
                  index === current ? "bg-[#2d1339]" : "bg-transparent"
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
              className="h-11 w-11 border border-[#2d1339] bg-white text-[#2d1339] transition-colors hover:bg-[#2d1339] hover:text-white disabled:opacity-50"
              disabled={!api}
              aria-label="Previous slide"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <button
              type="button"
              onClick={() => api?.scrollNext()}
              className="h-11 w-11 border border-[#2d1339] bg-white text-[#2d1339] transition-colors hover:bg-[#2d1339] hover:text-white disabled:opacity-50"
              disabled={!api}
              aria-label="Next slide"
            >
              <span aria-hidden="true">›</span>
            </button>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center border border-[#2d1339] bg-[#2d1339] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#4a2457]"
          >
            View more
          </Link>
        </div>
      </div>
    </section>
  )
}
