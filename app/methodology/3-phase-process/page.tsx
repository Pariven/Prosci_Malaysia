import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const navTabs = [
  { label: "Overview", href: "/methodology-overview" },
  { label: "PCT Model", href: "/methodology/pct-model" },
  { label: "ADKAR Model", href: "/methodology/adkar" },
  { label: "Prosci 3-Phase Process", href: "/methodology/3-phase-process", active: true },
]

const phases = [
  {
    title: "Phase 1 - Prepare Approach",
    focus: "Position the change for success",
    description:
      "Clarify the outcomes, build sponsorship alignment, and tailor the change strategy to your scope, risks and readiness.",
    highlights: [
      "Define success and outcomes",
      "Align sponsors and governance",
      "Assess readiness and capacity",
      "Design a scalable approach",
    ],
  },
  {
    title: "Phase 2 - Manage Change",
    focus: "Enable adoption and usage",
    description:
      "Deliver the plans that move people through change, coordinate with project workstreams, and adapt based on feedback.",
    highlights: [
      "Activate communications and coaching",
      "Equip people with knowledge and ability",
      "Manage resistance in real time",
      "Measure adoption progress",
    ],
  },
  {
    title: "Phase 3 - Sustain Outcomes",
    focus: "Lock in results over time",
    description:
      "Reinforce new behaviors, transfer ownership, and ensure the change is embedded in the way work gets done.",
    highlights: [
      "Reinforce performance and results",
      "Close gaps and celebrate wins",
      "Embed in processes and culture",
      "Monitor long-term sustainability",
    ],
  },
]

const capabilityItems = [
  {
    title: "Leadership alignment",
    description: "Visible sponsorship, decision clarity and a unified message to the organization.",
  },
  {
    title: "Change strategy",
    description: "A right-sized approach based on scope, impact and readiness.",
  },
  {
    title: "People-side plans",
    description: "Coordinated communications, training, coaching and resistance management.",
  },
  {
    title: "Adoption tracking",
    description: "Measures that show progress and guide adjustments over time.",
  },
]

export default function ThreePhaseProcessPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#241f23]">
      <Header />

      <section className="relative flex min-h-[320px] items-center justify-center overflow-hidden px-6 py-16 text-center md:min-h-[420px]">
        <img
          src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Business-people-sharing-notes-1_Feb-26-1.webp"
          alt="Team reviewing notes together"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#2a0b3a]/75" />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl">Prosci 3-Phase Process</h1>
          <p className="mt-4 text-base leading-7 text-white/90 md:text-lg">
            A structured and flexible framework for leading organizational change from preparation to sustained results.
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

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">From intent to adoption</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#2f2a2f]">
              <p>
                The 3-Phase Process is the organizational change framework within the Prosci Methodology. It helps teams
                align leaders, plan the people side of change, and guide individuals through the transition in a
                repeatable way.
              </p>
              <p>
                Each phase builds on the previous one. You start by preparing the approach, move into managing change
                with coordinated plans, and then sustain outcomes by reinforcing new behaviors and performance.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Stock%20Training%20Photography/Organizational-change-competency_Feb-26.webp"
              alt="Collaborative workshop"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">The three phases</h2>
            <p className="mt-3 text-lg text-[#2f2a2f]">
              A clear flow that moves a change from strategy to adoption and sustained results.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {phases.map((phase) => (
              <div
                key={phase.title}
                className="rounded-2xl border border-[#e8e0d6] bg-[#f5f2eb] p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="font-serif text-2xl text-[#350944]">{phase.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-wide text-[#7a6b84]">{phase.focus}</p>
                <p className="mt-4 text-base leading-7 text-[#2f2a2f]">{phase.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-[#2f2a2f]">
                  {phase.highlights.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">What the process builds</h2>
            <p className="text-lg leading-8 text-[#2f2a2f]">
              The 3-Phase Process strengthens your change capability by connecting leadership, strategy and delivery.
              It ensures the people side of change is planned, funded and executed alongside the technical work.
            </p>
            <div className="grid gap-4">
              {capabilityItems.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[#e8e0d6] bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#350944]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#2f2a2f]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Engaged-business-meeting-1_Feb-26_2.webp"
              alt="Team members collaborating"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#2a0b3a] via-[#3d1a4e] to-[#2a0b3a] px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center text-white">
          <h2 className="font-serif text-3xl md:text-4xl">Ready to apply the 3-Phase Process?</h2>
          <p className="text-base leading-7 text-white/90 md:text-lg">
            Align sponsors, activate people-side plans, and sustain outcomes with a repeatable change framework.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center rounded bg-white px-5 py-3 text-sm font-semibold text-[#350944] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f5f2eb]"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
