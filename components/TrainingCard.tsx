import React from "react"
import Link from "next/link"

const assetPath = (path: string) =>
  `/${path
    .split("/")
    .map((s) => encodeURIComponent(s))
    .join("/")}`

type Props = {
  image: string
  label?: string
  title: string
  description: string
  downloadHref?: string
}

export default function TrainingCard({
  image,
  label,
  title,
  description,
  downloadHref = "Prosci-Certification-Datasheet.pdf",
}: Props) {
  return (
    <article className="w-full overflow-hidden bg-white shadow-lg">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 flex-shrink-0">
          <img
            src={assetPath(image)}
            alt={title}
            className="h-56 w-full object-cover md:h-full"
          />
        </div>

        <div className="w-full md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            {label ? (
              <p className="text-xs uppercase tracking-widest text-gray-500">{label}</p>
            ) : null}
            <h3 className="font-serif text-2xl text-[#3d1a4e]">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <Link
              href="/contact-us"
              className="inline-flex items-center rounded-md bg-[#3d1a4e] px-4 py-2 text-xs font-semibold text-white"
            >
              LEARN MORE
            </Link>

            <a href={assetPath(downloadHref)} className="text-sm font-medium text-[#3d1a4e]">
              Download Info Guide
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
