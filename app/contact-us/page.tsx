'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    organization: '',
    phone: '',
    jobLevel: '',
    industry: '',
    country: '',
    reasonForContact: '',
    comments: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const result = await res.json()

      if (res.ok && result.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          jobTitle: '',
          organization: '',
          phone: '',
          jobLevel: '',
          industry: '',
          country: '',
          reasonForContact: '',
          comments: '',
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-white text-[#3f484f]">
      <Header />

      <section
        className="relative overflow-hidden bg-cover text-white"
        style={{
          backgroundImage: `url('/Engaged-business-meeting-1_Feb-26.webp')`,
          backgroundPosition: 'center 30%',
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,21,72,0.42),_rgba(53,12,51,0.62)_42%,_rgba(22,4,28,0.74)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-32 md:py-48">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-light leading-tight md:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-8 text-base leading-7 md:text-lg">
              Have questions about our certification programs? We're here to help. Fill out the form below
              and we'll connect you with the right team.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f5f2eb] to-[#e9eaf2] px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg bg-white p-10 shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
            <h2 className="text-center text-3xl font-light text-[#3f484f] md:text-4xl">
              Have questions?
            </h2>
            <p className="mt-4 text-center text-base leading-6 text-[#666666]">
              Your inquiry will be routed to the best team based on your reason for contact and country.
            </p>

            {submitStatus === 'success' && (
              <div className="mt-6 rounded-lg bg-[#d4edda] p-4 text-center text-[#155724]">
                Thank you! We'll be in touch soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-6 rounded-lg bg-[#f8d7da] p-4 text-center text-[#721c24]">
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#3f484f]">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#3f484f]">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#3f484f]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-[#3f484f]">
                    Job Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-[#3f484f]">
                  Organization <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                />
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#3f484f]">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="jobLevel" className="block text-sm font-medium text-[#3f484f]">
                    Job Level <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="jobLevel"
                    name="jobLevel"
                    value={formData.jobLevel}
                    onChange={handleChange}
                    required
                    className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                  >
                    <option value="">Please Select</option>
                    <option value="executive">Executive/C-Level</option>
                    <option value="director">Director</option>
                    <option value="manager">Manager</option>
                    <option value="individual">Individual Contributor</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-[#3f484f]">
                  Industry <span className="text-red-500">*</span>
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                >
                  <option value="">Please Select</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="retail">Retail</option>
                  <option value="government">Government</option>
                  <option value="education">Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-[#3f484f]">
                  Country <span className="text-red-500">*</span>
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                >
                  <option value="">Please Select</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="au">Australia</option>
                  <option value="de">Germany</option>
                  <option value="my">Malaysia</option>
                  <option value="sg">Singapore</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="reasonForContact" className="block text-sm font-medium text-[#3f484f]">
                  Reason for Contact <span className="text-red-500">*</span>
                </label>
                <select
                  id="reasonForContact"
                  name="reasonForContact"
                  value={formData.reasonForContact}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                >
                  <option value="">Please Select</option>
                  <option value="certification">Certification Program Inquiry</option>
                  <option value="training">Training & Development</option>
                  <option value="consulting">Consulting Services</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-[#3f484f]">
                  Comments <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="mt-2 block w-full rounded border border-[#ddd] px-4 py-2 text-[#3f484f] focus:border-[#5c1761] focus:outline-none"
                />
              </div>

              <div className="rounded bg-[#f9f9f9] p-4 text-sm text-[#666666]">
                <p className="mb-3">
                  By submitting your contact information above, you allow Prosci to contact you about relevant
                  content, products, and services. You may unsubscribe from these communications at anytime. For
                  information on how to unsubscribe, as well as our privacy practices and commitment to protecting your
                  privacy, check out our{' '}
                  <a href="#" className="text-[#5c1761] underline">
                    Privacy Policy
                  </a>
                  .
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2 rounded bg-white p-2">
                    <span className="text-xs text-gray-600">🔒 reCAPTCHA</span>
                  </div>
                  <span className="text-xs text-gray-500">protected by reCAPTCHA</span>
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded bg-[#35104b] px-8 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#CCCCFF] hover:text-[#35104b] disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'SUBMIT'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
