import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Link from "next/link"

const tocItems = [
  { id: "what-is-ocm", label: "What is organizational change management?" },
  { id: "importance", label: "Why it matters" },
  { id: "outcomes", label: "Improving project outcomes" },
  { id: "impact", label: "Impact on your organization" },
  { id: "capability", label: "Building change capability" },
  { id: "faqs", label: "FAQs" },
]

const reasonCards = [
  {
    title: "Different teams feel change differently",
    description:
      "A single initiative can reshape tools, workflows, roles, or expectations. Change management helps you tailor support to each group instead of relying on a one-size-fits-all rollout.",
  },
  {
    title: "Change is constant and overlapping",
    description:
      "Organizations face multiple, connected changes at once. A structured approach keeps people aligned, reduces fatigue, and sustains momentum across initiatives.",
  },
  {
    title: "ROI depends on adoption",
    description:
      "The value of a new system is realized only when people use it well. Change management builds the readiness and capability that turn investments into measurable results.",
  },
  {
    title: "Outcomes require more than delivery",
    description:
      "Projects can meet technical requirements and still fail to deliver outcomes. Change management closes the gap between delivery and real-world impact.",
  },
  {
    title: "Better odds of success",
    description:
      "When sponsorship, communication, and training are intentional, teams are more likely to meet timelines, budgets, and quality expectations.",
  },
  {
    title: "Less risk and rework",
    description:
      "Ignoring the people side creates rework, delays, and resistance. Planning for adoption lowers avoidable costs and protects the initiative.",
  },
  {
    title: "Reduced variability",
    description:
      "Change management reduces uncertainty by guiding people through clear steps. It makes the transition more predictable and easier to sustain.",
  },
  {
    title: "Long-term capability",
    description:
      "Building change skills inside the organization creates resilience. Teams can handle future change with less disruption and more confidence.",
  },
]

const stats = [
  {
    image: "/images/change-management/DV%20Graphics_Stats_EN_7x-more-likely-to-achieve-project-objectives.webp",
    alt: "7x more likely to achieve objectives",
  },
  {
    image: "/images/change-management/DV%20Graphics_Stats_EN_4.6x-more-likely-to-stay-on-schedule.webp",
    alt: "4.6x more likely to stay on schedule",
  },
  {
    image: "/images/change-management/DV%20Graphics_Stats_EN_1.4x-more-likely-to-stay-on-budget.webp",
    alt: "1.4x more likely to stay on budget",
  },
]

const impactWithout = [
  { icon: "/images/change-management/failed%20project%20results.svg", label: "Failed project results" },
  { icon: "/images/change-management/extended%20project%20time.svg", label: "Extended project timelines" },
  { icon: "/images/change-management/extended%20project%20cost.svg", label: "Additional project costs" },
  { icon: "/images/change-management/low%20adoption.svg", label: "Low adoption and usage" },
]

const impactWith = [
  { icon: "/images/change-management/7x.svg", label: "More likely to meet objectives" },
  { icon: "/images/change-management/4.6.svg", label: "More likely to stay on schedule" },
  { icon: "/images/change-management/1.4.svg", label: "More likely to stay on budget" },
  { icon: "/images/change-management/peopl%20independent.svg", label: "People-dependent ROI achieved" },
]

const faqItems = [
  {
    question: "What types of change require change management?",
    answer:
      "Any shift that changes how people work can benefit from change management. This includes technology rollouts, process redesigns, restructures, and culture initiatives.",
  },
  {
    question: "What are the core elements of an effective approach?",
    answer:
      "Effective approaches pair strong sponsorship, targeted communication, role-based training, and reinforcement so adoption sticks over time.",
  },
  {
    question: "How do you measure success?",
    answer:
      "Track adoption, proficiency, and sustained usage alongside project outcomes. Surveys, performance metrics, and stakeholder feedback help validate progress.",
  },
  {
    question: "What role do leaders play?",
    answer:
      "Leaders build trust and momentum. Visible sponsorship, clear messaging, and consistent reinforcement are strong predictors of success.",
  },
]

export default function WhyChangeManagementPage() {
  return (
    <main className="min-h-screen bg-[#fffefa] text-[#241f23]">
      <Header />

      <section className="relative overflow-hidden px-6 py-16 md:py-24">
        <img
          src="/images/change-management/Team-discussion-1_Feb-26_crop.jpg"
          alt="Team discussion"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2a0b3a]/90 via-[#32124a]/80 to-[#2c1f41]/60" />
        <div className="relative z-10 mx-auto max-w-5xl text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#f5e9ff]">Change Management</p>
          <h1 className="mt-4 font-serif text-4xl md:text-6xl">Why Change Management Is Important</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/90 md:text-lg">
            Change is constant, but outcomes are not. The people side of change is what turns strategy into results.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/80">
            <span className="rounded-full border border-white/30 px-3 py-1">7 min read</span>
            <span>Updated Apr 13, 2026</span>
            <span>Published May 20, 2021</span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="space-y-12">
            <div className="space-y-5 text-lg leading-8">
              <p>
                When organizations introduce new systems, processes, or ways of working, the technical solution is only
                half of the story. Change management makes sure people understand the change, feel supported, and can
                adopt it confidently.
              </p>
              <p>
                The question is not whether change will happen. It is whether your people can absorb it and deliver the
                outcomes your business expects.
              </p>
            </div>

            <div className="rounded-xl border border-[#e8e0d6] bg-gradient-to-br from-[#f7f1ea] via-[#f5f2eb] to-[#e6dee5] p-8">
              <h2 className="font-serif text-3xl text-[#350944]">Key question</h2>
              <p className="mt-3 text-lg leading-8">
                What percentage of your outcomes depends on adoption and usage of the change?
              </p>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#e8e0d6] bg-white shadow-sm">
              <img
                src="/images/change-management/Business-people-taking-notes-2_Feb-26_crop.jpg"
                alt="Leaders planning change"
                className="h-auto w-full"
              />
              <div className="px-6 py-5 text-sm text-[#6b5a72]">
                People-centered planning turns change into lasting performance gains.
              </div>
            </div>

            <section id="what-is-ocm" className="space-y-6">
              <h2 className="font-serif text-4xl text-[#350944]">What is organizational change management?</h2>
              <p className="text-lg leading-8">
                Organizational change management is a structured approach for preparing, equipping, and supporting
                individuals to adopt new ways of working. It combines sponsorship, communication, training, and
                reinforcement so change becomes sustainable.
              </p>
              <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-xl border border-[#e8e0d6] bg-[#f5f2eb] p-6">
                  <p className="text-lg leading-7">
                    Learn how change management connects people outcomes with project outcomes through a repeatable
                    methodology.
                  </p>
                  <Link
                    href="/change-management/what-is-change-management"
                    className="mt-5 inline-flex items-center rounded bg-[#350944] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2b0737]"
                  >
                    Explore the overview
                  </Link>
                </div>
                <div className="rounded-xl border border-[#e8e0d6] bg-white p-4">
                  <img
                    src="/images/change-management/Methodology-EN.webp"
                    alt="Change management methodology"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </section>

            <section id="importance" className="space-y-8">
              <div className="max-w-3xl space-y-4">
                <h2 className="font-serif text-4xl text-[#350944]">Why it matters</h2>
                <p className="text-lg leading-8">
                  Change management protects the investment, reduces disruption, and increases the likelihood of
                  delivering the results that matter.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {reasonCards.map((reason) => (
                  <article
                    key={reason.title}
                    className="group rounded-xl border border-[#e8e0d6] bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#350944] hover:shadow-lg"
                  >
                    <h3 className="font-serif text-2xl text-[#350944] transition group-hover:text-[#2b0737]">
                      {reason.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-[#3d343d]">{reason.description}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="outcomes" className="space-y-8">
              <h2 className="font-serif text-4xl text-[#350944]">Improving project outcomes</h2>
              <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-6 text-lg leading-8">
                  <p>
                    Project management delivers the technical solution. Change management ensures people adopt it. When
                    both disciplines work together, outcomes improve across timelines, budgets, and performance.
                  </p>
                  <img
                    src="/images/change-management/Prosci_DataVis_Graphs_Correlation%20of%20Change%20Managemen-%20Effectiveness%20With%20Meeting%20Objectives.png"
                    alt="Correlation of change management effectiveness"
                    className="w-full rounded-lg border border-[#e8e0d6] bg-white"
                  />
                  <p>
                    Strong change practices reduce rework and help teams realize benefits faster while keeping momentum
                    high.
                  </p>
                </div>
                <div className="space-y-6">
                  {stats.map((stat) => (
                    <div
                      key={stat.alt}
                      className="rounded-xl border border-[#e8e0d6] bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <img src={stat.image} alt={stat.alt} className="mx-auto w-[240px]" />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section
              id="impact"
              className="rounded-2xl bg-[radial-gradient(circle_at_top,_#f7efe2,_#fffefa_65%)] px-6 py-12"
            >
              <div className="text-center">
                <h2 className="font-serif text-4xl text-[#350944]">Impact on your organization</h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg leading-7">
                  When people feel prepared and supported, they move through change faster, with less disruption and
                  stronger results.
                </p>
              </div>
              <div className="mt-10 grid gap-8 md:grid-cols-2">
                <article className="rounded-xl border border-[#e8e0d6] bg-white p-6 transition hover:shadow-lg">
                  <h3 className="font-serif text-2xl text-[#350944]">Without change management</h3>
                  <p className="mt-3 text-base font-semibold text-[#5d4c63]">Employees feel surprised and overwhelmed.</p>
                  <ul className="mt-6 space-y-4">
                    {impactWithout.map((item) => (
                      <li key={item.label} className="flex items-center gap-3">
                        <img src={item.icon} alt={item.label} className="h-7 w-7" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </article>
                <article className="rounded-xl border border-[#e8e0d6] bg-white p-6 transition hover:shadow-lg">
                  <h3 className="font-serif text-2xl text-[#350944]">With change management</h3>
                  <p className="mt-3 text-base font-semibold text-[#5d4c63]">Employees feel equipped and confident.</p>
                  <ul className="mt-6 space-y-4">
                    {impactWith.map((item) => (
                      <li key={item.label} className="flex items-center gap-3">
                        <img src={item.icon} alt={item.label} className="h-7 w-7" />
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </section>

            <section id="capability" className="space-y-8">
              <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                <img
                  src="/images/change-management/ADKAR-Model-EN.webp"
                  alt="ADKAR model"
                  className="w-full rounded-xl border border-[#e8e0d6] bg-white p-4"
                />
                <div className="space-y-5 text-lg leading-8">
                  <h2 className="font-serif text-4xl text-[#350944]">Building change capability</h2>
                  <p>
                    Sustainable change requires more than a single project plan. It takes a repeatable approach and
                    shared language so teams can lead change again and again.
                  </p>
                  <p>
                    When leaders reinforce the change and teams have clear tools, organizations can scale adoption and
                    stay ready for what comes next.
                  </p>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Prepare",
                    body: "Align sponsorship and define the change strategy before launch.",
                    icon: "/images/change-management/icon-phase1.svg",
                  },
                  {
                    title: "Manage",
                    body: "Execute communication, training, and coaching so people can adopt.",
                    icon: "/images/change-management/icon-phase2.svg",
                  },
                  {
                    title: "Sustain",
                    body: "Reinforce new behaviors and measure adoption to keep results.",
                    icon: "/images/change-management/icon-phase3.svg",
                  },
                ].map((phase) => (
                  <div
                    key={phase.title}
                    className="rounded-xl border border-[#e8e0d6] bg-white p-6 text-center transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <img src={phase.icon} alt="" className="mx-auto h-12 w-12" />
                    <h3 className="mt-4 font-serif text-2xl text-[#350944]">{phase.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-[#4a3d4f]">{phase.body}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="faqs" className="space-y-6">
              <h2 className="font-serif text-4xl text-[#350944]">FAQs</h2>
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div
                    key={item.question}
                    className="rounded-xl border border-[#e8e0d6] bg-white p-6 transition duration-200 hover:border-[#350944] hover:shadow-md"
                  >
                    <h3 className="text-lg font-semibold text-[#350944]">{item.question}</h3>
                    <p className="mt-3 text-base leading-7 text-[#3d343d]">{item.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl bg-[#2b0737] px-8 py-12 text-white">
              <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl">Ready to strengthen change outcomes?</h2>
                  <p className="mt-4 text-base leading-7 text-white/80">
                    Build a change approach that protects your investment, engages your teams, and turns strategy into
                    results.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 md:justify-end">
                  <Link
                    href="/change-management"
                    className="rounded bg-white px-5 py-3 text-sm font-semibold text-[#350944] transition hover:bg-[#f0e7f5]"
                  >
                    Change management hub
                  </Link>
                  <Link
                    href="/change-management/what-is-change-management"
                    className="rounded border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                  >
                    Explore the overview
                  </Link>
                </div>
              </div>
            </section>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28 rounded-2xl border border-[#e8e0d6] bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b5a72]">On this page</p>
              <ul className="mt-4 space-y-3 text-sm">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded px-2 py-2 text-[#3d343d] transition hover:translate-x-1 hover:bg-[#f5f2eb] hover:text-[#350944]"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-[#f5f2eb] px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-[#350944] md:text-4xl">Subscribe for change insights</h2>
          <p className="mt-4 text-base leading-7 text-[#4a3d4f]">
            Get bi-weekly articles, research highlights, and practical guidance for leading change.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Subscribe to email"
              className="flex-1 rounded border border-[#c9c1d0] bg-white px-4 py-3 text-sm"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="rounded bg-[#350944] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2b0737]"
            >
              Submit
            </button>
          </form>
          <p className="mt-4 text-xs leading-5 text-[#6b5a72]">
            By submitting your email, you agree to receive occasional communications. You can unsubscribe anytime.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
