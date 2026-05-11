import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function EnterpriseBootCampComingSoon() {
  return (
    <main className="min-h-screen bg-white text-[#3f484f]">
      <Header />

      <section
        className="relative overflow-hidden bg-cover text-white"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,21,72,0.42),_rgba(53,12,51,0.62)_42%,_rgba(22,4,28,0.74)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-light leading-tight md:text-5xl">
              Enterprise Change Management Boot Camp
            </h1>
            <p className="mt-8 text-base leading-7 md:text-lg">
              Intensive training program designed to build comprehensive change management capabilities across your organization.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h2 className="font-playfair text-3xl text-[#350944]">Coming Soon</h2>
        <p className="mt-6 text-lg text-gray-700">Details about our Enterprise Change Management Boot Camp will be available soon. Sign up to be notified when enrollment opens.</p>
        <div className="mt-8">
          <a href="/" className="inline-block bg-[#3d1a4e] text-white px-5 py-3 rounded hover:bg-[#2d1339] transition-colors">Back to Home</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
