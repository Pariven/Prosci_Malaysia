"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const navTabs = [
  { label: "Overview", href: "/methodology-overview" },
  { label: "PCT Model", href: "/methodology/pct-model" },
  { label: "ADKAR Model", href: "/methodology/adkar", active: true },
  { label: "Prosci 3-Phase Process", href: "#" },
  {
    label: "An Introduction to Change Management",
    href: "https://empower.prosci.com/en-us/introduction-to-change-management-guide",
    icon: "https://www.prosci.com/hubfs/icon-book-damsen.svg",
  },
]

const resources = [
  {
    id: "blog",
    label: "ADKAR in the Blog",
    icon: "https://www.prosci.com/hubfs/icon-book-damsen.svg",
    items: [
      {
        label: "How Microsoft Transformed Customer Success with the ADKAR Model",
        href: "https://www.prosci.com/blog/how-microsoft-uses-the-adkar-model-to-improve-customer-success",
      },
      {
        label: "ADKAR is a Change Management Model, Not a Methodology",
        href: "https://www.prosci.com/blog/adkar-is-a-change-management-model-not-a-methodology",
      },
      {
        label: "Using the ADKAR Model to Build Better Sponsors",
        href: "https://www.prosci.com/blog/using-the-adkar-model-to-build-better-sponsors",
      },
      {
        label: "7 Real Reasons Why Tech Projects Fail",
        href: "https://www.prosci.com/blog/7-real-reasons-why-tech-projects-fail",
      },
      {
        label: "Aligning the ADKAR Model With Sequential, Iterative and Hybrid Change",
        href: "https://www.prosci.com/blog/aligning-the-adkar-model-with-sequential-iterative-and-hybrid-change",
      },
    ],
  },
  {
    id: "stories",
    label: "ADKAR Success Stories",
    icon: "https://www.prosci.com/hubfs/icon-star-damsen.svg",
    items: [
      {
        label: "Husky Uses the ADKAR Model to Achieve Project Results",
        href: "https://www.prosci.com/resources/success-stories/husky",
      },
      {
        label: "Danish Transport Company Advances Change Capability Globally",
        href: "https://www.prosci.com/resources/success-stories/danish-transport",
      },
      {
        label: "IT Distributor Increases ROI with Change Capability",
        href: "https://www.prosci.com/resources/success-stories/avnet",
      },
      {
        label: "European Facility Management Group Successfully Launches New Division",
        href: "https://www.prosci.com/resources/success-stories/coor-property",
      },
      {
        label: "Latin American Financial Firm Embraces Digital and Cultural Transformation",
        href: "https://www.prosci.com/resources/success-stories/financial-firm-embraces-digital-and-cultural-transformation",
      },
    ],
  },
  {
    id: "webinars",
    label: "ADKAR Webinars",
    icon: "https://www.prosci.com/hubfs/icon-video-camera-damsen.svg",
    items: [
      {
        label: "Introduction to ADKAR (30 Minutes)",
        href: "https://fast.wistia.net/embed/iframe/eu290l27dk?autoplay=1",
      },
      {
        label: "ADKAR: The Five Building Blocks of Individual Change",
        href: "https://fast.wistia.net/embed/iframe/ptyl0nx449?autoplay=1",
      },
      {
        label: "Aiming ADKAR at Today's Change Challenges",
        href: "https://fast.wistia.net/embed/iframe/rfc7wg1iwl?autoplay=1",
      },
      {
        label: "Insights from Aiming ADKAR at Today's Change Challenges",
        href: "https://fast.wistia.net/embed/iframe/leadvohv70?autoplay=1",
      },
      {
        label: "4 Advanced Applications of the ADKAR Model",
        href: "https://www.prosci.com/blog/4-advanced-applications-of-the-adkar-model",
      },
    ],
  },
  {
    id: "downloads",
    label: "Downloadable Resources",
    icon: "https://www.prosci.com/hubfs/icon-download-damsen.svg",
    items: [
      {
        label: "The Many Uses of ADKAR Infographic",
        href: "https://www.prosci.com/blog/new-data-on-using-the-adkar-model",
      },
      {
        label: "Applying ADKAR to Today's Change Challenges",
        href: "https://empower.prosci.com/adkar-guides",
      },
      {
        label: "CLARC + ADKAR: Document Your Actions Worksheet",
        href: "https://empower.prosci.com/clarc-adkar-document-your-actions-worksheet",
      },
    ],
  },
]

export default function AdkarModelPage() {
  const [activeGroup, setActiveGroup] = useState(resources[0].id)
  const activeResourceGroup = useMemo(
    () => resources.find((group) => group.id === activeGroup) ?? resources[0],
    [activeGroup]
  )

  return (
    <main className="min-h-screen bg-[#fffefa] text-[#241f23]">
      <Header />

      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-6 py-16 text-center md:min-h-[420px]">
        <img
          src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Focused-listening-3_Feb-26.webp"
          alt="Woman in a blue sweater looking attentively at a man during a conversation"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2a0b3a]/75" />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl">The Prosci ADKAR® Model</h1>
          <p className="mt-4 text-base leading-7 text-white/90 md:text-lg">
            A powerful yet simple model for facilitating individual change.
          </p>
        </div>
      </section>

      <section className="bg-[#ebeaf1] px-6 py-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-4 overflow-x-auto pb-2 md:flex-wrap md:justify-center">
            {navTabs.map((tab) => (
              <Link
                key={tab.label}
                href={tab.href}
                target={tab.href.startsWith("http") ? "_blank" : undefined}
                rel={tab.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`flex min-h-[70px] shrink-0 items-center gap-3 rounded border px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                  tab.active
                    ? "border-[#b7a7c9] bg-[#f5f2eb] text-[#350944]"
                    : "border-[#c9c1d0] bg-white text-[#5b4b62] hover:-translate-y-0.5 hover:border-[#350944] hover:text-[#350944]"
                }`}
              >
                {tab.icon && <img src={tab.icon} alt="" className="h-5 w-5" />}
                <span>{tab.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div className="space-y-8">
            <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <img
                src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Focused-listening-5_Feb-26.webp"
                alt="Woman smiling and resting her head on her hand while talking with colleagues"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <img
                  src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20Prosci-methodology-no-titles/Methodology-ADKAR-EN.webp"
                  alt="Prosci Methodology diagram with ADKAR highlighted"
                  className="h-24 w-24 shrink-0"
                />
                <p className="text-base leading-7 text-[#2f2a2f]">
                  ADKAR sits at the center of the Prosci Methodology graphic to emphasize that organizational change
                  requires individual change.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">Organizational change requires individual change</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#2f2a2f]">
              <p>
                The Prosci ADKAR® Model is one of the two foundational models of the Prosci Methodology, in addition to
                the{" "}
                <Link href="/methodology/pct-model" className="underline underline-offset-4">
                  PCT Model
                </Link>
                . The word "ADKAR" is an acronym for the five outcomes an individual needs to achieve for a change to be
                successful: <em>Awareness</em>, <em>Desire</em>, <em>Knowledge</em>, <em>Ability</em> and
                <em> Reinforcement</em>.
              </p>
              <p>
                The model was developed nearly two decades ago by Prosci founder Jeff Hiatt after studying the change
                patterns of more than 700 organizations. The ADKAR Model is used by thousands of change leaders around
                the world.
              </p>
              <p>
                This powerful model is based on the understanding that organizational change can only happen when
                individuals change. Whereas the Prosci 3-Phase Process is a framework for organizational change, the
                ADKAR Model focuses on individual change—guiding individuals through a particular change and
                addressing any roadblocks or barrier points along the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">The 5 Elements of the ADKAR Model</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#2f2a2f]">
              <p>
                Organizational changes often fail because employees don't understand the importance of getting on
                board the change or how to successfully make the change. They simply understand that a change is
                happening. And leaders are often not equipped to engage individuals effectively during the change and
                to manage any potential resistance.
              </p>
              <p>
                The ADKAR Model addresses these challenges by equipping leaders with the right strategies and tools, and
                individuals with the right information, motivation and ability to successfully move through changes in
                the organization.
              </p>
              <p>
                By outlining the goals and outcomes of successful change, the ADKAR Model enables leaders and change
                management teams to focus their activities on what will drive individual change and therefore achieve
                organizational results.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <div className="flex flex-col gap-6 md:flex-row">
                <img
                  src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20Downloads%20Coverpages%20Thumbnails/2026%20EN%20Lead%20Magnets/ADKAR-Model-eBook-Coverpage_EN_Feb-26.webp"
                  alt="ADKAR Model eBook"
                  className="h-auto w-40 shrink-0"
                />
                <div>
                  <p className="text-base leading-7 text-[#2f2a2f]">
                    Explore our powerful yet straightforward ADKAR model—and learn how it can help your organization
                    achieve results once thought impossible.
                  </p>
                  <Link
                    href="https://empower.prosci.com/prosci-adkar-model-for-organizational-change-success"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center rounded border border-[#350944] px-5 py-2 text-sm font-semibold text-[#350944] transition hover:-translate-y-0.5 hover:bg-[#f5f2eb]"
                  >
                    Download eBook
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <img
                src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/Business-people-taking-notes-1_Feb-26_crop.jpg"
                alt="Business people taking notes"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <img
                src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/ADKAR-Model-EN.webp"
                alt="ADKAR model"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/People-side-of-portfolio-management_Feb-26_crop_2.webp"
              alt="People side of portfolio management"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">Applying the ADKAR Model to your change initiative</h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-[#2f2a2f]">
              <p>
                Activities for moving individuals through ADKAR transitions happen during Phase 2 – Manage Change of
                the{" "}
                <Link
                  href="https://www.prosci.com/methodology/3-phase-process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Prosci 3-Phase Process
                </Link>
                , and are scalable to fit your needs. You apply the ADKAR Model using Proxima, an innovative online
                tool included with certain{" "}
                <Link
                  href="https://www.prosci.com/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4"
                >
                  Prosci Membership plans
                </Link>
                .
              </p>
              <p>
                In Proxima, you use tools such as the ADKAR Blueprint—the backbone of Prosci change management—to
                identify milestones, target dates and anticipated gaps. You also use the ADKAR Blueprint to help in
                developing your change management plans, such as the Sponsor Plan and People Manager Plan.
              </p>
              <p>
                The ADKAR Assessment helps to identify any barrier points to change for individual roles so you can
                support these individuals in progressing through the change. ADKAR status checks along the way are key
                to project success. Practitioners use both the Prosci ADKAR Model and the Prosci 3-Phase Process to
                achieve sustainable change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <h2 className="font-serif text-2xl text-[#350944] md:text-3xl">
                <em>The ADKAR Advantage: Your New Lens For Successful Change</em>
              </h2>
              <div className="mt-4 space-y-4 text-base leading-7 text-[#2f2a2f]">
                <p>
                  Step into the transformative world of change with <em>The ADKAR Advantage</em>. This new book casts a
                  spotlight on the ADKAR Models powerful simplicity, offering rich guidance and practical resources for
                  facilitating change. With ADKAR as your new lens, you can achieve the outcomes you seek from change
                  and sustain them over time.
                </p>
                <p>
                  The book provides a thorough exploration of the model, shares first-hand ADKAR stories, and provides
                  helpful resources grounded in Prosci's benchmarking research.
                </p>
                <p>Use this book to:</p>
                <ul className="space-y-2">
                  <li>Adopt a new mindset around change.</li>
                  <li>Uncover the essential actions that will guide, shape, and encourage sustainable change</li>
                  <li>
                    Create a better experience through change with improved outcomes for you and for others. That's
                    <em> The ADKAR Advantage</em>!
                  </li>
                </ul>
              </div>
              <Link
                href="https://www.amazon.com/dp/B0CZ38RFRQ"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded border border-[#350944] px-5 py-2 text-sm font-semibold text-[#350944] transition hover:-translate-y-0.5 hover:bg-[#f5f2eb]"
              >
                Buy Now
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/adkar-front-cover-v3-1.webp"
              alt="The ADKAR Advantage book cover"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative bg-[#2a0b3a] px-6 py-16 text-white">
        <img
          src="https://22088958.fs1.hubspotusercontent-na1.net/hubfs/22088958/proscibb.jpg"
          alt="Background texture"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-4xl text-center">
          <img
            src="https://22088958.fs1.hubspotusercontent-na1.net/hubfs/22088958/quote-top.webp"
            alt="Quote mark"
            className="mx-auto h-10 w-auto"
          />
          <p className="mt-6 text-2xl leading-9 text-white md:text-3xl">
            Working our Adoption and Change Management program through the ADKAR Model gave us a higher degree of
            engagement… We were treating people differently.
          </p>
          <p className="mt-6 text-lg text-white/80">- Jean-Claude Monney, Microsoft</p>
        </div>
      </section>

      <section className="bg-[#2a0b3a] px-6 py-16">
        <div className="mx-auto max-w-6xl text-white">
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl">Featured ADKAR Model Resources</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/70">
              To help guide you on your change journey.
            </p>
          </div>
          <div className="mt-10 grid gap-0 overflow-hidden rounded border border-[#f5f2eb]/30 md:grid-cols-[1fr_2fr]">
            <div className="bg-[#3d1a4e] p-8">
              <div className="space-y-4">
                {resources.map((group) => (
                  <button
                    key={group.id}
                    type="button"
                    onClick={() => setActiveGroup(group.id)}
                    className={`w-full text-left text-sm font-semibold uppercase tracking-wider transition-opacity ${
                      activeGroup === group.id ? "opacity-100" : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {group.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-white px-8 py-10 text-[#350944]">
              <div className="space-y-6">
                {activeResourceGroup.items.map((item) => (
                  <div key={item.label} className="flex items-center gap-6 border-b border-[#eee9f1] pb-6">
                    <img src={activeResourceGroup.icon} alt="" className="h-5 w-5" />
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-medium transition-opacity hover:opacity-60"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f5f2eb] via-[#f0e7f2] to-[#e9e6f3] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h3 className="text-center font-serif text-3xl text-[#350944]">Discover the ADKAR Model for Organizational Change</h3>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <img
                src="https://www.prosci.com/hs-fs/hubfs/ADKAR-Model-eBook-Coverpage_EN_Feb-26.webp"
                alt="ADKAR Model eBook cover"
                className="w-full"
              />
            </div>
            <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <p className="text-lg leading-8 text-[#2f2a2f]">
                Explore our powerful yet straightforward model—and learn how it can help your organization achieve
                results once thought impossible.
              </p>
              <Link
                href="https://empower.prosci.com/prosci-adkar-model-for-organizational-change-success"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded border border-[#350944] px-5 py-2 text-sm font-semibold text-[#350944] transition hover:-translate-y-0.5 hover:bg-[#f5f2eb]"
              >
                Download the Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
