import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { galleryImages } from "@/lib/gallery"

const heroImage = encodeURI(galleryImages[9]?.src ?? "/WhatsApp Image 2026-05-08 at 15.44.00 (3).jpeg")

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f8f3ea] text-[#2d2332]">
      <Header />

      <section
        className="relative overflow-hidden bg-cover bg-center text-white"
        style={{ backgroundImage: `url('${heroImage}')` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(30,12,34,0.82),_rgba(53,20,60,0.58)_55%,_rgba(76,41,92,0.35))]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              About Us
            </p>
            <h1 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Gallery
            </h1>
            <p className="mt-6 text-base leading-7 text-white/90 md:text-lg">
              A visual look at our certification sessions, learning moments, and community energy.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f6efe6] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <h2 className="font-serif text-3xl text-[#2d1339] md:text-4xl">
                Community highlights
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[#4b3f4e] md:text-base">
                Explore recent sessions and workshop experiences across our Prosci Malaysia community.
              </p>
            </div>
            <div className="h-1 w-32 bg-[#2d1339]" />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <figure
                key={image.src}
                className="border border-[#e0d5cc] bg-white shadow-[8px_8px_0_#e6dccf]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={encodeURI(image.src)}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-[#e0d5cc] px-4 py-3 text-xs uppercase tracking-[0.3em] text-[#6d646f]">
                  Gallery {String(index + 1).padStart(2, "0")}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
