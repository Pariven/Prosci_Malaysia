import Header from "@/components/Header"
import Footer from "@/components/Footer"
import RoleSection from "@/components/RoleSection"
import TrainingSection from "@/components/TrainingSection"

const asset = (path: string) =>
  `/${path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`

const programs = [
  {
    title: "Delivering Project Results",
    description:
      "Equip project teams with practical tools to drive adoption and achieve outcomes on active initiatives.",
    image: "images/Delivering Project Results Workshop.png",
    downloadHref: "pdf/Delivering Project Results Workshop.pdf",
  },
  {
    title: "Taking Charge",
    description:
      "Build people leader capability to guide teams through transitions with clarity, empathy, and follow-through.",
    image: "taking charge.png",
    downloadHref: "pdf/Taking Charge of Change.pdf",
  },
  {
    title: "Leading Your Team Through Change",
    description:
      "Enable front-line leaders to reinforce key messages, remove barriers, and sustain adoption.",
    image: "Leading your.png",
    downloadHref: "pdf/Leading Your Team Through Change.pdf",
  },
]

export default function RoleBasedCertificationPage() {
  return (
    <main className="min-h-screen bg-white text-[#3f484f]">
      <Header />

      <section
        className="relative overflow-hidden bg-cover bg-center text-white"
        style={{
          backgroundImage: `url('${asset("Leading your.png")}')`,
          backgroundPosition: "center 28%",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,21,72,0.42),_rgba(53,12,51,0.62)_42%,_rgba(22,4,28,0.74)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Role-Based Certification
            </p>
            <h1 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Build Role-Based Change Capability
            </h1>
            <p className="mt-8 text-base leading-7 text-white/90 md:text-lg">
              Give leaders, project teams, and front-line managers the role-specific skills to guide
              people through change. These programs focus on practical application so teams can act
              immediately on real initiatives.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf7f2] px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr,1.1fr]">
          <div>
            <h2 className="text-3xl font-serif font-semibold text-[#3d1a4e] md:text-4xl">
              Engage every level of your organization in your change initiatives
            </h2>
          </div>
          <div>
            <div className="space-y-5 text-sm leading-6 text-[#6f767b] md:text-base md:leading-7">
              <p>
                Change management solutions aren't one-size-fits-all, which is why we offer these
                cost-effective training programs tailored to your unique organizational needs.
              </p>
              <p>
                Our role-based, research-based Enterprise Training programs teach individuals at
                every level of your organization how to play their unique roles during times of
                change. These flexible programs are designed to help you apply change management to
                your existing projects, so you can realize immediate benefits.
              </p>
              <p>
                We offer several of these programs virtually. Contact us to learn more.
              </p>
            </div>
            <a
              href={asset("Prosci-Enterprise-Overview-Guide.pdf")}
              className="mt-6 inline-flex items-center justify-center rounded bg-[#3d1a4e] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-[#2c0f3b]"
            >
              Download Overview Guide
            </a>
          </div>
        </div>
      </section>

      <RoleSection image={asset("images/Enterprise-Feature-Image-1.webp")} />

      <TrainingSection
        items={programs.map((p) => ({
          image: p.image,
          label: "Practitioner program or certification required",
          title: p.title,
          description: p.description,
          downloadHref: p.downloadHref,
        }))}
      />

      <Footer />
    </main>
  )
}
