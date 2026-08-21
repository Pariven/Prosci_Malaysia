import React from "react"
import TrainingCard from "./TrainingCard"

type Item = {
  image: string
  label?: string
  title: string
  description: string
  downloadHref?: string
}

export default function TrainingSection({
  heading = "Enterprise Change Management Certification and Training Programs",
  items = [],
}: {
  heading?: string
  items?: Item[]
}) {
  return (
    <section className="bg-[#f4f2eb] px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-serif font-semibold text-[#3d1a4e] md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600">
          Prosci's Enterprise Change Management Training programs are built for your organization
          and delivered onsite or virtually. Providing your organization an affordable way to
          deliver tailored change management.
        </p>

        <div className="mt-10 flex flex-col space-y-8">
          {items.map((it) => (
            <TrainingCard
              key={it.title}
              image={it.image}
              label={it.label}
              title={it.title}
              description={it.description}
              downloadHref={it.downloadHref}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
