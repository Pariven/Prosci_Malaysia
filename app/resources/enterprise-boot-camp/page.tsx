import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const whoShouldAttend = [
  "Heads of organizational strategy",
  "HR leaders responsible for developing a change management strategy",
  "IT leaders responsible for delivering sustainable change through technology",
  "Change management practice leaders",
  "Managers of Centers of Excellence or Communities of Practice",
  "Directors of change management",
]

const learningObjectives = [
  "Learn how organizational change agility leads to competitive advantage",
  "Know how to assess the current level of change management maturity across five capability areas",
  "Define a future state vision for change capability",
  "Create your ECM strategy map",
  "Learn how to manage the deployment of change management",
  "Understand how the people side of change relates to building capability",
  "Discover the best practices in applying change management to project ECM",
]

const morningAgenda = [
  "What and why of enterprise change management",
  "Assessing current state",
  "Defining future state",
  "Maturity Model",
]

const afternoonAgenda = [
  "Developing your ECM strategy map",
  "Designing transition state",
  "Project ECM - creating customized strategy and plans",
  "Determining next steps",
]

const courseMaterials = [
  "Program workbook, handouts and assessments",
  "Access to digital content, resources and tools, including:",
]

const courseResources = [
  "Research Hub - a single point of access to Prosci research, including core studies, topical studies and relevant data across a broad array of topics",
  "Knowledge Hub - a single point of access to content and resources to support your learning and application",
]

export default function EnterpriseBootCampPage() {
  return (
    <main className="min-h-screen bg-[#f7f2eb] text-[#3f484f]">
      <Header />

      <section className="relative overflow-hidden">
        <img
          src="/images/change-management/Team-discussion-1_Feb-26_crop.jpg"
          alt="People in a workshop setting."
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#3d1a4e]/70" />
        <div className="relative mx-auto grid min-h-[360px] max-w-6xl gap-10 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div className="text-white">
            <p className="text-xs uppercase tracking-[0.35em] text-white/80">Enterprise training</p>
            <h1 className="mt-4 font-serif text-4xl font-light leading-tight sm:text-5xl">
              Enterprise
              <br />
              Change
              <br />
              Management
              <br />
              Boot Camp
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-6 text-white/90 sm:text-base">
              Drive change management beyond the project level by learning
              how to inspire and affect the culture of your entire organization
              - also offered as a virtual program.
            </p>
          </div>

          <div className="rounded-2xl bg-white shadow-xl">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/change-management/Business-people-taking-notes-2_Feb-26_crop.jpg"
                alt="Leader listening during a discussion."
                className="h-48 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-6 p-6 text-sm text-[#3f484f]">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Intended for</p>
                    <p className="mt-2 text-sm font-semibold text-[#3d1a4e]">
                      Change management enterprise deployment leaders
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">Prerequisite</p>
                    <p className="mt-2 text-sm font-semibold text-[#3d1a4e]">None</p>
                  </div>
                </div>
                <Link
                  href="/certification-program"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#3d1a4e] px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#2d1339]"
                >
                  Download brochure
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f2eb] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-serif text-4xl font-light text-[#3d1a4e]">
              Ready to kick-start
              <br />
              your company's
              <br />
              change capability
              <br />
              journey?
            </h2>
          </div>
          <div className="space-y-5 text-sm leading-6 text-gray-600 sm:text-base">
            <p>
              Making your organization truly change-ready can offer new competitive
              advantages. To get there, you need to first understand your current
              change capability.
            </p>
            <p>
              This highly specialized boot camp moves you quickly through the
              process of understanding your current level of change capability.
              You'll also define your organization's future state and map out the
              most logical path between them. And you'll leave with the tools and
              framework that enable you to plan and execute your change-ready strategy.
            </p>
            <p>
              This program is available in both in-person and virtual instructor-led
              formats. Contact us to learn more.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e6ded6] bg-[#fbf8f4]">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-10 px-6 py-5 text-xs uppercase tracking-[0.3em] text-[#3d1a4e]">
          <a href="#who" className="hover:text-[#2d1339]">Who should attend</a>
          <a href="#objectives" className="hover:text-[#2d1339]">Learning objectives</a>
          <a href="#agenda" className="hover:text-[#2d1339]">Program agenda</a>
        </div>
      </section>

      <section id="who" className="bg-[#fbf8f4] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-serif text-3xl font-light text-[#3d1a4e]">Who should attend</h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-600 sm:text-base">
            If you are responsible for building change capability in your division or
            organization, the ECM Boot Camp is designed for you. Perfect for change leaders
            and small teams.
          </p>
          <div className="mt-8">
            <p className="text-sm font-semibold text-[#3d1a4e]">This program is best suited for:</p>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {whoShouldAttend.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3d1a4e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="objectives" className="bg-[#f7f2eb] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center font-serif text-3xl font-light text-[#3d1a4e]">Learning Objectives</h2>
          <p className="mt-3 text-center text-sm text-gray-600">
            During this one-day intensive training experience, you will:
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {learningObjectives.map((objective) => (
              <div key={objective} className="flex gap-4 rounded-2xl bg-white/80 p-4">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#3d1a4e] text-[11px] text-[#3d1a4e]">
                  +
                </span>
                <p className="text-sm text-gray-700">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="agenda" className="bg-[#fbf8f4] py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="font-serif text-3xl font-light text-[#3d1a4e]">Program Agenda</h2>
            <div className="mt-8 grid gap-8">
              <div className="relative rounded-2xl bg-white/80 p-6">
                <div className="absolute left-4 top-6 h-[calc(100%-3rem)] w-px bg-[#d8c3d9]" />
                <p className="flex items-center gap-3 font-serif text-lg text-[#3d1a4e]">
                  <span className="h-2 w-2 rounded-full bg-[#3d1a4e]" />
                  Morning:
                </p>
                <ul className="mt-4 space-y-3 pl-6 text-sm text-gray-700">
                  {morningAgenda.map((item) => (
                    <li key={item} className="list-disc">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl bg-white/80 p-6">
                <div className="absolute left-4 top-6 h-[calc(100%-3rem)] w-px bg-[#d8c3d9]" />
                <p className="flex items-center gap-3 font-serif text-lg text-[#3d1a4e]">
                  <span className="h-2 w-2 rounded-full bg-[#3d1a4e]" />
                  Afternoon:
                </p>
                <ul className="mt-4 space-y-3 pl-6 text-sm text-gray-700">
                  {afternoonAgenda.map((item) => (
                    <li key={item} className="list-disc">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h3 className="font-serif text-xl text-[#3d1a4e]">Course Materials (included)</h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {courseMaterials.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#3d1a4e]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              {courseResources.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#b48dbd]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  )
}
