import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PodcastComingSoon() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="mx-auto max-w-4xl px-6 py-28 text-center">
        <h1 className="font-playfair text-4xl text-[#350944]">Podcast (UNSCRIPTED: Change Management @ Work)</h1>
        <p className="mt-6 text-lg text-gray-700">Coming soon — stay tuned for episodes and updates.</p>
        <div className="mt-8">
          <a href="/" className="inline-block bg-[#3d1a4e] text-white px-5 py-3 rounded">Back to Home</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
