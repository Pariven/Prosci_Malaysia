"use client"

import { useState } from "react"

type VideoPanelProps = {
  image: string
  title: string
  duration: string
  embedUrl: string
}

export default function VideoPanel({ image, title, duration, embedUrl }: VideoPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden rounded-sm border border-[#e8e0d6] bg-[#f5f2eb]">
      <button
        type="button"
        className="relative block w-full cursor-pointer text-left"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
      >
        <img src={image} alt={title} className="h-auto w-full object-cover" />
        <div className="absolute inset-0 bg-[#350944]/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h3 className="max-w-xs text-2xl font-medium leading-tight">{title}</h3>
          <span className="mt-5 grid h-18 w-18 place-items-center rounded-full bg-white/50 text-white">
            <span className="ml-1 text-2xl">▶</span>
          </span>
          <p className="mt-3 text-2xl">{duration}</p>
        </div>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#12051a]/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="aspect-video w-full">
              <iframe
                src={embedUrl}
                title={title}
                className="h-full w-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>

            <div className="flex justify-end bg-[#1e0c2a] px-4 py-3">
              <button
                type="button"
                className="cursor-pointer rounded bg-white px-4 py-2 text-sm font-semibold text-[#350944]"
                onClick={() => setIsOpen(false)}
              >
                Close video
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
