import React from "react"

const assetPath = (path: string) =>
  `/${path
    .split("/")
    .map((s) => encodeURIComponent(s))
    .join("/")}`

export default function ProgramCard({
  title,
  description,
  image,
  tag,
}: {
  title: string
  description: string
  image: string
  tag?: string
}) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#efe6f1] bg-white shadow-[0_12px_30px_rgba(61,26,78,0.06)]">
      <div className="grid grid-cols-1 md:grid-cols-[0.45fr,0.55fr] items-stretch">
        <div className="order-1 md:order-1">
          <div className="h-60 md:h-full w-full overflow-hidden">
            <img
              src={assetPath(image)}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-6 md:p-8 order-2 md:order-2 flex flex-col justify-between">
          <div>
            {tag ? (
              <p className="mb-2 text-xs font-semibold uppercase text-[#6f6b6f] tracking-widest">
                {tag}
              </p>
            ) : null}
            <h3 className="text-lg font-semibold text-[#3d1a4e]">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#6f767b]">{description}</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <a
              href="/contact"
              className="inline-flex items-center rounded bg-[#3d1a4e] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#2c0f3b]"
            >
              CONTACT US
            </a>

            <a
              href={assetPath("Prosci-Certification-Datasheet.pdf")}
              className="text-sm font-medium text-[#3d1a4e] hover:underline"
            >
              Download Info Guide
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}
