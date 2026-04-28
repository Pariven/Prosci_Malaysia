import Header from "@/components/Header"
import Link from "next/link"

export default function ChangeManagementTopicPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#241f23]">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h1 className="font-serif text-5xl text-[#350944] md:text-7xl">Change Management</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8">
          Explore Change Management resources and pages under this topic.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <Link
            href="/change-management/what-is-change-management"
            className="rounded-md border border-[#cabfce] bg-white p-6 transition hover:border-[#350944] hover:text-[#350944]"
          >
            <h2 className="font-serif text-3xl">What is Change Management</h2>
            <p className="mt-3 text-sm leading-6">Definition, framework and complete overview page.</p>
          </Link>

          <Link
            href="/change-management/why-change-management"
            className="rounded-md border border-[#cabfce] bg-white p-6 transition hover:border-[#350944] hover:text-[#350944]"
          >
            <h2 className="font-serif text-3xl">Why is Change Management</h2>
            <p className="mt-3 text-sm leading-6">Reasons, outcomes and impact-focused summary page.</p>
          </Link>
        </div>
      </section>
    </main>
  )
}
