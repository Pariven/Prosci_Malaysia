import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function WebinarsComingSoon() {
  return (
    <main className="min-h-screen bg-white text-[#3f484f]">
      <Header />

      <section
        className="relative overflow-hidden bg-cover text-white"
        style={{
          backgroundImage: `url('/images/Enterprise-Feature-Image-1.webp')`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,21,72,0.42),_rgba(53,12,51,0.62)_42%,_rgba(22,4,28,0.74)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-light leading-tight md:text-5xl">
              Webinars
            </h1>
            <p className="mt-8 text-base leading-7 md:text-lg">
              Join us for expert-led webinars on change management, organizational transformation, and best practices in the industry.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="font-playfair text-3xl text-[#350944]">Coming Soon</h2>
        <p className="mt-6 text-lg text-gray-700">Recordings and upcoming webinar schedule will appear here. Sign up to be notified when new webinars are available.</p>
        <div className="mt-8">
          <a href="/" className="inline-block bg-[#3d1a4e] text-white px-5 py-3 rounded hover:bg-[#2d1339] transition-colors">Back to Home</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
