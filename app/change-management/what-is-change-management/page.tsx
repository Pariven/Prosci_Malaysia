import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

const levelCards = [
  {
    icon: "/images/change-management/icon-presentation.svg",
    title: "Change management at the project level",
    body: "The application of the structured process and set of tools for leading the people side of change to achieve a desired outcome on our project.",
  },
  {
    icon: "/images/change-management/icon-office-building.svg",
    title: "Change management at the organizational level",
    body: "A leadership competency for enabling change within our organization and a strategic capability designed to increase our change capability and responsiveness.",
  },
]

const impactWithout = [
  { icon: "/images/change-management/failed%20project%20results.svg", label: "Failed project results" },
  { icon: "/images/change-management/extended%20project%20time.svg", label: "Extended project timelines" },
  { icon: "/images/change-management/extended%20project%20cost.svg", label: "Additional project costs" },
  { icon: "/images/change-management/low%20adoption.svg", label: "Low adoption and usage" },
]

const impactWith = [
  { icon: "/images/change-management/7x.svg", label: "Likely to meet project objectives" },
  { icon: "/images/change-management/4.6.svg", label: "Likely to stay on schedule" },
  { icon: "/images/change-management/1.4.svg", label: "Likely to stay on budget" },
  { icon: "/images/change-management/peopl%20independent.svg", label: "People-dependent ROI achieved" },
]

const phaseRows = [
  {
    icon: "/images/change-management/icon-phase1.svg",
    body: "Phase 1 - Prepare Approach: To position the change for success by developing a customized and scaled change management strategy with the necessary sponsorship and commitment.",
  },
  {
    icon: "/images/change-management/icon-phase2.svg",
    body: "Phase 2 - Manage Change: To achieve adoption and usage of the change by creating, implementing and adapting plan(s) that will move individuals and the organization through ADKAR transitions.",
  },
  {
    icon: "/images/change-management/icon-phase3.svg",
    body: "Phase 3 - Sustain Outcomes: To realize the value of the change by ensuring the change is adopted and the organization is committed and prepared to sustain the change.",
  },
]

function VideoPanel({
  image,
  title,
  duration,
  panelId,
  embedUrl,
}: {
  image: string
  title: string
  duration: string
  panelId: string
  embedUrl: string
}) {
  return (
    <div className="overflow-hidden rounded-sm border border-[#e8e0d6] bg-[#f5f2eb]">
      <input id={panelId} type="checkbox" className="peer sr-only" />

      <label htmlFor={panelId} className="relative block cursor-pointer">
        <img src={image} alt={title} className="h-auto w-full object-cover" />
        <div className="absolute inset-0 bg-[#350944]/55" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h3 className="max-w-xs text-2xl font-medium leading-tight">{title}</h3>
          <span className="mt-5 grid h-18 w-18 place-items-center rounded-full bg-white/50 text-white">
            <span className="ml-1 text-2xl">▶</span>
          </span>
          <p className="mt-3 text-2xl">{duration}</p>
        </div>
      </label>

      <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-[#12051a]/80 p-4 opacity-0 transition-opacity duration-300 peer-checked:pointer-events-auto peer-checked:opacity-100">
        <label htmlFor={panelId} className="absolute inset-0 cursor-pointer" aria-label={`Close ${title} video`} />

        <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-lg bg-black shadow-2xl">
          <div className="aspect-video w-full">
            <iframe
              src={embedUrl}
              title={title}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="flex justify-end bg-[#1e0c2a] px-4 py-3">
            <label
              htmlFor={panelId}
              className="cursor-pointer rounded bg-white px-4 py-2 text-sm font-semibold text-[#350944]"
            >
              Close video
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#241f23]">
      <Header />

      <section className="relative flex min-h-[360px] items-center justify-center px-6 text-center md:min-h-[480px]">
        <img
          src="https://www.prosci.com/hubfs/.%202026%20Website%20Rebrand/2026%20Hero%20Photography/Focused-conversation-6_Feb-26.webp"
          alt="Change management hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#312f82]/70" />
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="font-serif text-4xl md:text-6xl">Change Management</h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm md:text-xl">
            Driving change success by preparing, equipping and supporting individuals to thrive through change.
          </p>
        </div>
      </section>

      <section className="bg-[#f5f2eb] px-6 py-8">
        <div className="mx-auto flex max-w-[1100px] flex-wrap gap-4">
          <a href="#what-is-change-management" className="rounded border border-[#cabfce] bg-[#fffefa] px-6 py-4 text-sm font-semibold text-[#350944]">
            What is Change Management?
          </a>
          <a href="#why-change-management" className="rounded border border-[#cabfce] bg-[#fffefa] px-6 py-4 text-sm font-semibold text-[#350944]">
            Why Change Management?
          </a>
          <a href="#change-management-process" className="rounded border border-[#cabfce] bg-[#fffefa] px-6 py-4 text-sm font-semibold text-[#350944]">
            Change Management Process
          </a>
        </div>
      </section>

      <section id="what-is-change-management" className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        <h2 className="font-serif text-4xl text-[#350944] md:text-5xl">What is Change Management?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <p className="text-lg leading-8 text-[#2f2a2f]">
            Change management as a discipline has evolved and matured over the past quarter of a century. Prosci
            research tells us that for changes to be successful, we must prepare, equip and support individuals moving
            through changes so that they successfully adopt the changes. Without adoption, changes will not be
            successful and we will not deliver the desired outcomes.
          </p>
          <div className="rounded-lg bg-gradient-to-r from-[#87adb2] to-[#e4e0d7] p-8 text-[#350944]">
            <p className="text-xl font-medium leading-snug md:text-2xl">
              Change management is an enabling framework for managing the people side of change.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[980px] px-6">
        <VideoPanel
          image="/images/change-management/video-thumbnail.webp"
          title="What is Change Management?"
          duration="2:36"
          panelId="cm-video-intro"
          embedUrl="https://fast.wistia.net/embed/iframe/p0bd8w9w5m?autoplay=1"
        />
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <h3 className="font-serif text-4xl text-[#350944] md:text-5xl">More than just communications</h3>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-8">
            <p>
              Managing change is often simply comprised of a communications plan, where executive leaders or project
              managers communicate to the organization that there&apos;s change coming. But change management is much more
              than communicating what is changing, such as a system implementation or an acquisition.
            </p>
            <p>
              We must support people in the organization through their transitions from the current state to the future
              state, and understand what is needed to influence each person to embrace and adopt the change.
            </p>
          </div>
          <img
            src="/images/change-management/Enterprise-training-programs_Feb-26.webp"
            alt="People in discussion"
            className="w-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <h3 className="font-serif text-4xl text-[#350944] md:text-5xl">The need for a structured, flexible methodology</h3>
        <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
          <img
            src="/images/change-management/Achieve-change-performance_Feb-26.webp"
            alt="Structured methodology"
            className="order-2 w-full md:order-1"
          />
          <div className="order-1 space-y-6 text-lg leading-8 md:order-2">
            <p>
              Organizations adopt the discipline of change management in different ways depending on their business
              needs. Change management can vary in scope and purpose, and one organization might define and implement
              it differently than another.
            </p>
            <p>
              So it&apos;s especially important that companies leverage a structured yet flexible approach to managing
              change in their organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {levelCards.map((card) => (
            <article key={card.title} className="rounded-lg border border-[#e8e0d6] bg-[#f5f2eb] p-10">
              <img src={card.icon} alt="icon" className="h-14 w-14" />
              <h4 className="mt-5 font-serif text-3xl leading-tight text-[#350944] md:text-4xl">{card.title}</h4>
              <p className="mt-4 text-base leading-7">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[950px] px-6 py-4 text-lg leading-8">
        <p>
          Whatever change management might look like, the end goal is to help individuals make a change to help the
          organization be more successful.
        </p>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-10">
        <Link
          href="https://www.prosci.com/resources/articles/core-roles-in-change-management"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open The Difference Between Change and Change Done Right"
        >
          <img src="/images/change-management/interactive-210175664242.png" alt="The Difference Between Change and Change Done Right" className="w-full" />
        </Link>
      </section>

      <section id="why-change-management" className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        <h2 className="font-serif text-4xl text-[#350944] md:text-5xl">Why Change Management?</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <p className="text-lg leading-8 text-[#2f2a2f]">
            How you manage change impacts the things that matter most to your organization, including your employees,
            your customers and your profitability. Given that organizations are facing faster and more complex changes
            than ever before, the reasons for change management are only growing.
          </p>
          <div className="rounded-lg bg-gradient-to-r from-[#87adb2] to-[#e4e0d7] p-8 text-[#350944]">
            <p className="text-xl font-medium leading-snug md:text-2xl">
              <strong>The Key Question:</strong>
              <br />
              What percentage of overall results and outcomes depends on adoption and usage of the change?
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-8">
        <h3 className="font-serif text-4xl text-[#350944] md:text-5xl">Improving project outcomes</h3>
        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-lg leading-8">
              Project management, which focuses on the technical side of change, and change management, which focuses
              on the people side of change, both play critical roles in change success.
            </p>
            <img
              src="/images/change-management/Prosci_DataVis_Graphs_Correlation%20of%20Change%20Managemen-%20Effectiveness%20With%20Meeting%20Objectives.png"
              alt="Project outcomes graph"
              className="mt-8 w-full"
            />
            <p className="mt-6 text-lg leading-8">The costs and risks of mismanaging change can be significant, impacting timelines, budgets and more.</p>
          </div>
          <div>
            <p className="mb-8 text-center text-lg leading-8">
              Prosci&apos;s research consistently shows that organizations with excellent change management achieve greater
              success with change.
            </p>
            <div className="space-y-8">
              <img src="/images/change-management/DV%20Graphics_Stats_EN_7x-more-likely-to-achieve-project-objectives.webp" alt="7x more likely" className="mx-auto w-[260px]" />
              <img src="/images/change-management/DV%20Graphics_Stats_EN_4.6x-more-likely-to-stay-on-schedule.webp" alt="4.6x more likely" className="mx-auto w-[260px]" />
              <img src="/images/change-management/DV%20Graphics_Stats_EN_1.4x-more-likely-to-stay-on-budget.webp" alt="1.4x more likely" className="mx-auto w-[260px]" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-16 bg-cover bg-center px-6 py-16"
        style={{ backgroundImage: "url('https://www.prosci.com/hubfs/Prosci_2021/Home/change-managment-impact.png')" }}
      >
        <div className="mx-auto max-w-[1100px]">
          <h2 className="text-center font-serif text-4xl text-[#350944] md:text-5xl">Change Management Impact on Your Organization</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <article className="rounded-lg bg-[#fffefa] p-8">
              <h4 className="font-serif text-3xl text-[#350944]">Without Change Management</h4>
              <p className="mt-4 text-lg font-semibold">Employees feel surprised and besieged by change</p>
              <ul className="mt-6 space-y-5">
                {impactWithout.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <img src={item.icon} alt={item.label} className="h-7 w-7" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-lg bg-[#fffefa] p-8">
              <h4 className="font-serif text-3xl text-[#350944]">With Change Management</h4>
              <p className="mt-4 text-lg font-semibold">Employees feel prepared, equipped and supported</p>
              <ul className="mt-6 space-y-5">
                {impactWith.map((item) => (
                  <li key={item.label} className="flex items-center gap-4">
                    <img src={item.icon} alt={item.label} className="h-7 w-7" />
                    <span>{item.label}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-12 px-6 py-16 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-lg leading-8">With excellent change management, employees:</p>
          <ul className="mt-6 list-disc space-y-4 pl-7 text-lg leading-8">
            <li>Adopt changes faster, more completely and more proficiently</li>
            <li>Stay engaged in the organization during disruptive change</li>
            <li>Understand why the change is happening</li>
            <li>Have the time and tools to get on board and feel heard and supported</li>
          </ul>
          <p className="mt-6 text-lg leading-8">
            Applying the principles of change management before, during and after a project can go a long way in
            helping you achieve the desired returns on your project investments.
          </p>
        </div>
        <img src="/images/change-management/Group-conversation-2_Feb-26.webp" alt="Group discussion" className="w-full" />
      </section>

      <section className="bg-[#f5f2eb] px-6 py-16">
        <div className="mx-auto max-w-[900px] text-center">
          <h4 className="font-serif text-3xl text-[#350944] md:text-4xl">
            Subscribe to our bi-weekly blog to receive articles that help you, your team and your organization grow
            stronger from change.
          </h4>
          <div className="mx-auto mt-8 max-w-[420px] border border-[#b4b2ad] bg-white px-4 py-3 text-left text-[#7b7b7b]">
            Subscribe to email*
          </div>
          <p className="mx-auto mt-4 max-w-[560px] text-left text-sm leading-6">
            By submitting your contact information above, you allow Prosci to contact you about relevant content,
            products, and services. You may unsubscribe from these communications at anytime.
          </p>
          <Link
            href="https://www.prosci.com/resources"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block bg-[#350944] px-8 py-3 text-sm font-semibold tracking-wide text-white"
          >
            SUBMIT
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        <h2 className="font-serif text-4xl text-[#350944] md:text-5xl">Building change capability</h2>
        <p className="mt-6 max-w-4xl text-lg leading-8">
          You can increase your organization&apos;s capacity for change and better prepare for future change by building your
          overall change capability.
        </p>
        <div className="mt-10">
          <VideoPanel
            image="/images/change-management/video-thumbnail2-desktop.webp"
            title="What is Enterprise Change Management?"
            duration="2:05"
            panelId="cm-video-enterprise"
            embedUrl="https://fast.wistia.net/embed/iframe/l0gbupnn08?autoplay=1"
          />
        </div>
        <p className="mt-8 text-lg leading-8">
          Basically, enterprise change management is the systematic deployment of change management skills, tools and
          processes throughout an organization.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-[#e8e0d6] bg-[#f5f2eb] p-6">
            <div className="flex items-start gap-4">
              <img src="/images/change-management/icon-organization.svg" alt="Organization icon" className="h-10 w-10" />
              <p className="text-lg leading-7">Hear from some of our customers on why their organizations are building change capability.</p>
            </div>
          </div>
          <div className="rounded-lg border border-[#e8e0d6] bg-[#f5f2eb] p-6">
            <div className="flex items-start gap-4">
              <img src="/images/change-management/icon-document.svg" alt="Document icon" className="h-10 w-10" />
              <p className="text-lg leading-7">For a deeper dive into the what and why of change management, view our webinar about the Five Tenets of Change Management.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 pb-16">
        <Link
          href="https://www.prosci.com/resources/webinars/five-tenets-of-change-management"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Assess your organization's change readiness"
        >
          <img src="/images/change-management/interactive-210175664795.png" alt="Assess your organization's change readiness" className="w-full" />
        </Link>
      </section>

      <section id="change-management-process" className="mx-auto max-w-[1100px] px-6 py-16 md:py-24">
        <h2 className="font-serif text-4xl text-[#350944] md:text-5xl">Change Management Process</h2>
        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="space-y-6 text-lg leading-8">
            <p>
              The Prosci Methodology is one of the most widely used approaches to change management in the world. To
              date, Prosci has certified more than 100,000 practitioners worldwide.
            </p>
            <p>
              The Prosci Methodology and its associated models, tools and processes are based on 25+ years of
              research, making it a true best-practices approach to change management.
            </p>
            <blockquote className="border-l-4 border-[#350944] pl-5 font-serif text-2xl leading-snug text-[#350944]">
              "The secret to successful change lies beyond the visible and busy activities that surround change."
            </blockquote>
            <p className="text-base italic">- Jeff Hiatt, Prosci Founder</p>
          </div>
          <div>
            <img src="/images/change-management/Business-people-collaborating-5_Feb-26.webp" alt="Collaboration" className="w-full" />
            <div className="grid grid-cols-[auto_1fr] gap-4 bg-[#f5f2eb] p-6">
              <p className="font-serif text-5xl text-[#025c67]">267,000+</p>
              <p className="self-center text-lg font-semibold leading-7">Practitioners trained and certified worldwide</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-10">
        <h2 className="font-serif text-4xl text-[#350944] md:text-5xl">A framework for individual change</h2>
        <p className="mt-6 text-lg leading-8">
          We use a structured process - the ADKAR Model - to guide individuals through a particular change to ensure
          that they embrace and adopt the change.
        </p>
        <img src="/images/change-management/ADKAR-Model-EN.webp" alt="ADKAR model" className="mx-auto mt-8 w-full max-w-[760px]" />
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-12 px-6 py-12 md:grid-cols-2 md:items-center">
        <img
          src="/images/change-management/Business-people-taking-notes-2_Feb-26_crop.jpg"
          alt="Taking notes"
          className="order-2 w-full md:order-1"
        />
        <div className="order-1 space-y-6 text-lg leading-8 md:order-2">
          <p>
            Practitioners, change sponsors, people managers and others are all involved in this process. By joining
            forces to apply the ADKAR Model, we can support people in their Awareness, foster Desire, provide
            Knowledge, ensure Ability and strengthen Reinforcement.
          </p>
          <p>
            Thousands of organizations today leverage the ADKAR Model to take on their toughest change challenges.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 py-16">
        <h2 className="font-serif text-4xl text-[#350944] md:text-5xl">A framework for organizational change</h2>
        <p className="mt-6 text-lg leading-8">
          While the ADKAR Model enables successful change at the individual level, the Prosci 3-Phase Process provides
          a framework for achieving change at the organizational level.
        </p>
        <p className="mt-4 text-lg leading-8">Here&apos;s the basic structure of the Prosci 3-Phase Process and the goals of each phase:</p>
        <img src="/images/change-management/Methodology-EN.webp" alt="Prosci methodology" className="mx-auto mt-10 w-full max-w-[760px]" />

        <div className="mt-10 space-y-7">
          {phaseRows.map((row) => (
            <div key={row.body} className="flex items-start gap-5">
              <img src={row.icon} alt="phase icon" className="h-16 w-16 shrink-0" />
              <p className="pt-2 text-lg leading-8">{row.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1100px] gap-10 px-6 py-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6 text-lg leading-8">
          <p>
            Now that you have a basic understanding about what change management is, why it&apos;s important, and what a
            proven process for applying it looks like, we have many other resources available to help you gain a deeper
            understanding of change management.
          </p>
          <p>
            For additional details about the ADKAR Model and Prosci 3-Phase Process, see the Methodology section of
            our website.
          </p>
        </div>
        <img src="/images/change-management/Team-discussion-1_Feb-26_crop.jpg" alt="Team discussion" className="w-full" />
      </section>

      <section className="bg-[#f6f4ed] px-6 py-14">
        <div className="mx-auto grid max-w-[1220px] gap-10 md:grid-cols-[1fr_1.5fr] md:items-center">
          <img src="/images/change-management/Train-the-trainer_Feb-26.webp" alt="Training session" className="w-full" />
          <div>
            <h3 className="font-serif text-4xl text-[#350944] md:text-6xl">Turn Understanding Into Action</h3>
            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8">
              Organizations with structured change approaches are 7x more likely to succeed. Prosci Certification gives
              you the proven tools and process to lead successful change.
            </p>
            <Link
              href="https://www.prosci.com/solutions/training-programs/change-management-certification-program"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[#350944] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white"
            >
              Get certified
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
