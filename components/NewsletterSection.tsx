"use client"

import { useState } from "react"
import Link from "next/link"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section className="py-20 bg-[#3d1a4e]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-white italic mb-4">
          The Best Way to Stay Change-Ready
        </h2>
        <p className="text-gray-300 mb-8">
          Stay up-to-date on our latest blogs, upcoming webinars and cutting-edge research.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email*"
            required
            className="flex-1 px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c9b037]"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-[#c9b037] text-[#3d1a4e] font-semibold rounded hover:bg-[#d4bc4a] transition-colors uppercase tracking-wide whitespace-nowrap"
          >
            Sign Me Up!
          </button>
        </form>

        <p className="text-gray-400 text-sm leading-relaxed">
          By submitting your contact information above, you allow Prosci to contact you about relevant content, products, and services. You may unsubscribe from these communications at anytime. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, check out our{" "}
          <Link href="#" className="underline hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
