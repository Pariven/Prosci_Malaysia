"use client"

import { useState } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const navTabs = [
  { label: "Overview", href: "/methodology-overview", active: true },
  { label: "PCT Model", href: "/methodology/pct-model" },
  { label: "ADKAR Model", href: "/methodology/adkar" },
  { label: "Prosci 3-Phase Process", href: "#" },
  {
    label: "An Introduction to Change Management",
    href: "https://empower.prosci.com/en-us/introduction-to-change-management-guide",
    icon: "https://www.prosci.com/hubfs/icon-book-damsen.svg",
  },
]

const methodologyTabs = [
  {
    id: "pct",
    title: "PCT Model",
    description:
      "A framework that shows the four critical aspects of any successful change effort and how they are interrelated: a shared definition of success with leadership/sponsorship, project management and change management.",
    image:
      "https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20Prosci-methodology-no-titles/Methodology-PCT-EN.webp",
  },
  {
    id: "adkar",
    title: "ADKAR Model",
    description:
      "Describes the five building blocks or elements an individual needs to achieve for a change to be successful. Impacted individual is at the center of the Prosci Methodology. Individual success leads to organizational success.",
    image:
      "https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20Prosci-methodology-no-titles/Methodology-ADKAR-EN.webp",
  },
  {
    id: "phase-1",
    title: "Phase 1 - Prepare Approach",
    description:
      "Purpose: To position the change for success by developing a customized and scaled change management strategy with the necessary sponsorship and commitment.",
    image:
      "https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20Prosci-methodology-no-titles/Methodology-Phase1-EN.webp",
  },
  {
    id: "phase-2",
    title: "Phase 2 - Manage Change",
    description:
      "Purpose: To achieve adoption and usage of the change by creating, implementing and adapting plan(s) that will move individuals and the organization through ADKAR transitions.",
    image:
      "https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20Prosci-methodology-no-titles/Methodology-Phase2-EN.webp",
  },
  {
    id: "phase-3",
    title: "Phase 3 - Sustain Outcomes",
    description:
      "Purpose: To realize the value of the change by ensuring the change is adopted and the organization is committed and prepared to sustain the change.",
    image:
      "https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20Prosci-methodology-no-titles/Methodology-Phase3-EN.webp",
  },
]

const listBoxItems = [
  "Technical side is executed by the project management discipline",
  "Organizational change requires individuals to move from the current state to the future state - which requires managing both the technical side and people side of the change",
  "People side is executed by the change management discipline",
]

export default function MethodologyOverviewPage() {
  const [activeTab, setActiveTab] = useState(methodologyTabs[0].id)
  const activeContent = methodologyTabs.find((tab) => tab.id === activeTab) ?? methodologyTabs[0]

  return (
    <main className="min-h-screen bg-[#fffefa] text-[#241f23]">
      <Header />

      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-6 py-16 text-center md:min-h-[420px]">
        <img
          src="https://367443.fs1.hubspotusercontent-na1.net/hubfs/367443/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Focused-listening-2_Feb-26.webp"
          alt="Woman listening during a meeting"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2a0b3a]/75" />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl">Prosci Methodology</h1>
          <p className="mt-4 text-base leading-7 text-white/90 md:text-lg">
            A structured, adaptable, repeatable approach to enable individuals to successfully move through changes in
            your organization.
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
                {tab.icon && (
                  <img src={tab.icon} alt="" className="h-5 w-5" />
                )}
                <span>{tab.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-4xl text-[#350944]">A framework for managing the people side of change</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#2f2a2f]">
              <p>
                Organizations must continually change and evolve to succeed. Yet changes such as technology deployments
                or new processes often fail because leaders and teams put too much focus on the technical aspects of the
                change. For successful change, organizations must also focus on the people side and how to ensure that
                each individual embraces and adopts the change.
              </p>
              <p>
                Prosci has been conducting in-depth change research for more than 25 years. We have studied how
                individuals experience and respond to change, as well as the strategies of change leaders around the
                globe.
              </p>
              <p>
                Based on best-practices research, we developed the Prosci Methodology for change management. When
                applied, it supports individuals in transitioning from the current state to the future state, an
                approach that leads to successful project outcomes.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/prosci-methodology-middle-aged-business-man-in-a-meeting.webp"
              alt="Business leader in a meeting"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20Universal-Value-Proposition/UVP-Changed-State-EN.webp"
              alt="Unified value proposition"
              className="w-full"
            />
          </div>
          <div className="space-y-4">
            {listBoxItems.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#e8e0d6] bg-[#ecefee] px-6 py-5 text-base leading-7 text-[#3d343d] shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-serif text-4xl text-[#350944]">The main components of the Prosci Methodology</h2>
          </div>
          <div className="mt-6 space-y-4 text-lg leading-8 text-[#2f2a2f]">
            <p>
              The Prosci Methodology is one of the most widely used approaches to change management in the world, and it
              continues to evolve. In response to practitioner feedback and changing customer needs, and to prepare for
              future change trends, we refreshed the methodology in 2021.
            </p>
            <p>
              Although the Prosci Methodology encompasses a variety of models, tools, assessments, processes and more,
              today it is comprised of three main components:
            </p>
            <ul className="space-y-2 pl-5 text-base">
              <li>
                <strong>PCT Model</strong> - a simple but powerful framework for establishing and connecting the most
                important aspects of any successful change effort
              </li>
              <li>
                <strong>ADKAR Model</strong> - a highly effective model for guiding individuals through the
                experiences or elements needed to make the change
              </li>
              <li>
                <strong>Prosci 3-Phase Process</strong> - a structured, flexible framework for driving change at the
                organizational level
              </li>
            </ul>
          </div>

          <div className="mt-14 rounded-3xl border border-[#e8e0d6] bg-[#f5f2eb] p-8">
            <h3 className="text-center font-serif text-3xl text-[#350944]">Explore our Prosci Methodology</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {methodologyTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "border-[#350944] bg-[#350944] text-white"
                      : "border-[#c9c1d0] bg-white text-[#5b4b62] hover:-translate-y-0.5 hover:border-[#350944] hover:text-[#350944]"
                  }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
                <img
                  src={activeContent.image}
                  alt={activeContent.title}
                  className="mx-auto w-full max-w-[360px] md:max-w-[420px]"
                />
              </div>
              <div className="space-y-4">
                <h4 className="font-serif text-3xl text-[#350944]">{activeContent.title}</h4>
                <p className="text-lg leading-8 text-[#2f2a2f]">{activeContent.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Stock%20Training%20Photography/Pathway-to-change-success_Feb-26.webp"
              alt="Smiling professional"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl text-[#350944]">Structured, scalable and adaptable</h2>
            <p className="mt-5 text-lg leading-8 text-[#2f2a2f]">
              The success of any organizational change depends on the success of change management in encouraging
              individuals to embrace, adopt and utilize a required change. The change management methodology itself
              must be structured enough to be repeatable, but also flexible enough to meet the needs of any
              organization.
            </p>
            <ul className="mt-6 space-y-3 text-base leading-7 text-[#2f2a2f]">
              <li>
                <strong>Structured</strong> - The Prosci Methodology organizes what we know about people, change and
                results into a simple process that practitioners can apply to develop change management strategies and
                plans that increase adoption and usage.
              </li>
              <li>
                <strong>Scalable and adaptable</strong> - You can adapt and flex the Prosci Methodology to achieve
                success in any type of change and in any type and size of organization.
              </li>
            </ul>
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
          <p className="mt-6 text-2xl leading-9 text-white">
            "Prosci's approach to change management fosters end-user engagement, positioning managers to lead their
            people through change by engaging the intuitive ADKAR Model. This flexible, scalable methodology has been a
            game changer."
          </p>
          <p className="mt-6 text-lg text-white/80">- April Hershman, Oshkosh Corporation</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Engaged-discussion-2_Feb-26_Crop.webp"
              alt="Engaged discussion"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl text-[#350944]">Applying the Prosci Methodology</h2>
            <p className="mt-5 text-lg leading-8 text-[#2f2a2f]">
              The Prosci Methodology enables organizations to manage change wisely. By doing so, it helps employees
              thrive through the changes they are faced with and increases the returns on project investments.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#2f2a2f]">
              You can learn how to apply the Prosci Methodology to change initiatives and become a Prosci Certified
              Change Practitioner by attending Prosci's Change Management Certification Program. It is an engaging,
              energizing 3-day learning experience that gives you the knowledge, tools and skills you need to drive
              change in your organization.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#2f2a2f]">
              Once certified, you will have anytime, anywhere access via the Prosci Portal to the Prosci Hub Solution
              Suite. It offers extensive digital content, resources and tools that help you apply change management
              throughout your project.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://www.prosci.com/solutions/training-programs/change-management-certification-program"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded bg-[#350944] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2b0737]"
              >
                Certification Program
              </Link>
              <Link
                href="https://www.prosci.com/hubfs/2.downloads/datasheets-and-info-guides/portal-tools/Prosci-Hub-Solution-Suite-Datasheet.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-[#350944] px-5 py-3 text-sm font-semibold text-[#350944] transition hover:bg-[#f5f2eb]"
              >
                Prosci Hub Solution Suite
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#f5f2eb] via-[#f0e7f2] to-[#e9e6f3] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-serif text-4xl text-[#350944]">An Introduction to Change Management Guide</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <img
                src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20Downloads/Introduction%20to%20Change%20Management%20eBook/Introduction%20to%20Change%20Management%20eBook_Coverpage_EN_Mar-2026.webp"
                alt="Introduction to Change Management guide"
                className="w-full"
              />
            </div>
            <div className="rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <p className="text-lg leading-8 text-[#2f2a2f]">
                The data is clear: even when organizational changes meet technical requirements and milestones, they can
                still fail to deliver results and benefits. What is missing? Change management. Organizations that
                embrace change management are more likely to achieve project objectives, stay on or ahead of schedule,
                and stay on or under budget.
              </p>
              <div className="mt-6">
                <Link
                  href="https://empower.prosci.com/en-us/introduction-to-change-management-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded bg-[#350944] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2b0737]"
                >
                  Download the free eBook
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
