import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const navTabs = [
  { label: "Overview", href: "/methodology-overview" },
  { label: "PCT Model", href: "/methodology/pct-model", active: true },
  { label: "ADKAR Model", href: "/methodology/adkar" },
  { label: "Prosci 3-Phase Process", href: "#" },
  {
    label: "An Introduction to Change Management",
    href: "https://empower.prosci.com/en-us/introduction-to-change-management-guide",
    icon: "https://www.prosci.com/hubfs/icon-book-damsen.svg",
  },
]

const pctAspects = [
  {
    title: "Success",
    description:
      "The definition of success for your change, which includes the reason for the change, project objectives, and organizational benefits",
  },
  {
    title: "Leadership/Sponsorship",
    description:
      "The direction and guidance for a project, including who is accountable for defining why a change is happening, how it aligns with the direction of the organization, and why it is a priority",
  },
  {
    title: "Project Management",
    description:
      "The discipline that addresses the technical side of a change, by designing, developing and delivering the solution that solves a problem or addresses an opportunity, within the constraints of time, cost and scope",
  },
  {
    title: "Change Management",
    description:
      "The discipline that addresses the people side of the change, enabling people to engage, adopt and use the solution",
  },
]

export default function PctModelPage() {
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
          <h1 className="font-serif text-4xl md:text-5xl">The Prosci Change Triangle (PCT) Model</h1>
          <p className="mt-4 text-base leading-7 text-white/90 md:text-lg">
            A framework that shows the four critical aspects of any successful change effort.
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
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">Establishing the critical aspects for success</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#2f2a2f]">
              <p>
                The Prosci Change Triangle (PCT) Model is one of the two foundational models of the Prosci Methodology,
                in addition to the ADKAR Model. This simple but powerful framework helps practitioners understand the
                four critical aspects of any successful change and how they relate to and promote project health. It
                highlights where change management fits into the bigger picture that includes the leaders involved and
                how the project is managed.
              </p>
              <p>
                Prosci research reveals that if a project is weak in any of the four aspects, it will struggle or fail.
                The PCT Model in the Prosci Methodology diagram emphasizes that any change management strategy begins
                with success in mind. Still, practitioners typically leverage the PCT Model in all three phases of the
                Prosci 3-Phase Process.
              </p>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Business-people-sharing-notes-1_Feb-26-1.webp"
              alt="Business people sharing notes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/.%202026%20EN%20Website%20Rebrand/2026%20EN%20%20IP%20Images/2026%20EN%20PCT-model/PCTModel-Core-EN.webp"
              alt="Prosci PCT Model"
              className="w-full"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl text-[#350944]">The 4 aspects of the PCT Model</h3>
            <p className="mt-4 text-lg leading-7 text-[#2f2a2f]">The PCT Model is comprised of four aspects that are critical for a successful change:</p>
            <ul className="mt-5 space-y-4 text-base leading-7 text-[#2f2a2f]">
              {pctAspects.map((aspect) => (
                <li key={aspect.title}>
                  <strong>{aspect.title}</strong> - {aspect.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#2a0b3a] via-[#3d1a4e] to-[#2a0b3a] px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 md:flex-row-reverse md:items-center">
          <div className="w-full md:w-5/12">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20General%20Stock%20Photography/Business-people-smiling-and-connecting-2_Feb-26_2.webp"
              alt="Business people smiling and connecting"
              className="aspect-square w-full rounded-full object-cover shadow-xl"
            />
          </div>
          <div className="w-full text-white md:w-7/12">
            <p className="text-lg leading-8">
              The PCT Model provides a framework and common language so teams can connect these four aspects of the
              project. Key stakeholders develop a shared definition of project success comprised of various facets of
              leadership/sponsorship, project management and change management.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f5f2eb] px-6 py-16">
        <div className="absolute inset-0 bg-[url('https://22088958.fs1.hubspotusercontent-na1.net/hubfs/22088958/proscibb.jpg')] bg-cover bg-center opacity-20" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-medium leading-8 text-[#2f2a2f] md:text-3xl">
            "Prosci is changing the way we approach projects and project management... Project managers are consistently
            more invested in thinking about the impact of their projects on their stakeholders. The effect this is
            having on project ROI and outcomes cannot be overstated."
          </h2>
          <p className="mt-5 text-lg text-[#2f2a2f]">- Mary Brackett, University of Virginia</p>
          <div className="mt-6 flex justify-end">
            <img
              src="https://22088958.fs1.hubspotusercontent-na1.net/hubfs/22088958/quote-bottom.webp"
              alt="Quote mark"
              className="h-10 w-auto"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Engaged-business-meeting-1_Feb-26_2.webp"
              alt="Engaged business meeting"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">
              Assessing project health throughout the project lifecycle
            </h2>
            <div className="mt-5 space-y-4 text-lg leading-8 text-[#2f2a2f]">
              <p>
                A healthy change initiative has clarity and alignment on what the change is aiming to deliver so
                practitioners can effectively manage change with the desired outcomes in mind. Periodic assessment of
                project health throughout the project is also important to project success. That is where the PCT
                Assessment comes in.
              </p>
              <p>
                The PCT Assessment is a core tool for the change practitioner's toolbox. It is available to
                practitioners via Proxima, a change management platform included with certain Prosci Membership plans.
              </p>
              <p>
                Key project stakeholders use the assessment to identify what poses the greatest risk to project health.
                It also identifies opportunities and action plans to improve the health of the project, and therefore
                potential for success. The PCT Assessment is important for establishing a baseline and then monitoring
                project health and performance at key milestones over the lifecycle of the project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="overflow-hidden rounded-2xl border border-[#e8e0d6] bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1">
            <img
              src="https://www.prosci.com/hs-fs/hubfs/.%202026%20Website%20Rebrand/2026%20Stock%20Training%20Photography/Organizational-change-competency_Feb-26.webp"
              alt="Organizational change competency"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl text-[#350944]">Learn more about the PCT Model</h3>
            <p className="mt-4 text-lg leading-8 text-[#2f2a2f]">
              Ready to dig a little deeper? Watch this on-demand webinar to learn how to use the PCT Model to clarify
              your change-related goals for successful project outcomes. You will also learn about assessing and
              tracking project health over the lifecycle of the project, and how to use this information to take action.
            </p>
            <Link
              href="https://www.prosci.com/resources/webinars/prosci-change-triangle-model"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center rounded bg-[#350944] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2b0737]"
            >
              Watch Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
