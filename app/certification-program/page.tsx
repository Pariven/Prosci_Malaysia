import type { ReactNode } from "react"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import VideoPanel from "@/components/VideoPanel"
import HashScroller from "@/components/HashScroller"

const asset = (fileName: string) => `/certification-program/${encodeURIComponent(fileName)}`

const heroBullets = [
  "Earn the most recognized change management certification",
  "Apply research-backed methods to your active projects",
  "Access ongoing tools and a global practitioner community",
]

const onlineOrInPersonChecklist = [
  {
    title: "Assess your change",
    description:
      "Complete the PCT Assessment and Risk Assessment for your current project",
  },
  {
    title: "Build your strategy",
    description:
      "Develop a Change Management Strategy and Core Plans with instructor feedback",
  },
  {
    title: "Prepare to engage stakeholders",
    description:
      "Leave with your Master Change Management Plan in progress and ready for sponsor and stakeholder conversations",
  },
]

const certificationChecklist = [
  "Develop practical skills to engage stakeholders, build commitment to change, and drive adoption of your initiatives",
  "Connect with fellow change leaders facing similar challenges and develop solutions through collaborative learning",
  "Apply the Prosci Methodology and ADKAR Model to one of your projects and build a comprehensive change management plan you can implement immediately",
]

const whyChooseCards = [
  {
    title: "Learn the ADKAR Model from the experts",
    description:
      "The only certification teaching our individual change model used by 80% of Fortune 100 companies.",
  },
  {
    title: "Apply immediately to real work",
    description:
      "Apply the methodology to your actual projects during the program and get expert feedback on your approach.",
  },
  {
    title: "Access 25+ years of research",
    description:
      "Methodology backed by the largest body of change management research, not borrowed management theory.",
  },
  {
    title: "Join a global community",
    description:
      "Connect with 267,000+ certified practitioners across 80+ countries who speak the same change language.",
  },
]

const whoShouldAttendRows = [
  {
    role: "Change Leaders and Practitioners",
    value: "Build systematic approach to change management",
  },
  {
    role: "Project Managers",
    value: "Add people-side skills to your project management expertise",
  },
  {
    role: "HR Business Partners",
    value: "Support organizational transformations strategically",
  },
  {
    role: "IT Professionals",
    value: "Drive technology adoption and user engagement",
  },
  {
    role: "Continuous Improvement Specialists",
    value: "Ensure process changes stick with employees",
  },
  {
    role: "Organizational Development Professionals",
    value: "Apply research-backed methodology to your practice",
  },
]

const testimonials = [
  {
    quote:
      "After being a change practitioner for a long time its been terrific to have some new ideas, new ways of working and best of all new tools!",
    name: "Pennie H.",
    title: "Manager, System Policy and Resilience",
  },
  {
    quote:
      "Really happy with the balance of practical exercises and the ability to reflect with course peers. The facilitator was very knowledgeable and we created a very supportive learning environment together.",
    name: "Rebecca T.",
    title: "Military Officer",
  },
  {
    quote:
      "As a complete novice, I found the course and materials easy to follow and the instructor engaging. The pre-work really allowed me to build the starting platform to start the course in a good place.",
    name: "Victoria G.",
    title: "Chief of Staff",
  },
  {
    quote:
      "I really enjoyed the class and look forward to incorporating tools more (especially ADKAR). Have tried to do these things, but knowing there's an actual word for it with tools is amazing!",
    name: "Jamie S.",
    title: "Project Manager",
  },
  {
    quote:
      "I felt the combination of content, materials, trainer, and real-world/contextualized application opportunities set the stage for me to walk away from this training feeling like I can go to work tomorrow and immediately apply my new knowledge.",
    name: "Courtney J.",
    title: "Organizational Development Specialist",
  },
  {
    quote:
      "This was one of the most engaging and relevant development experiences I've had. The curriculum pace is intensive, and I felt immersed in change management throughout all three days. I feel very well prepared to apply this in my day-to-day.",
    name: "Hannah J.",
    title: "Senior Project Manager",
  },
]

const programAgenda = [
  {
    day: "Day 1",
    items: [
      "Welcome and connection",
      "Foundation",
      "PCT Model",
      "ADKAR Model",
      "Prosci 3-Phase Process: Phase 1 - Prepare Approach",
      "Knowledge Check",
    ],
  },
  {
    day: "Day 2",
    items: [
      "Day 1 Review",
      "Prosci 3-Phase Process: Phase 1 - Prepare Approach",
      "Prosci 3-Phase Process: Phase 2 - Manage Change",
      "Knowledge Check",
    ],
  },
  {
    day: "Day 3",
    items: [
      "Day 2 Review",
      "Prosci 3-Phase Process: Phase 2 - Manage Change",
      "Prosci 3-Phase Process: Phase 3 - Sustain Outcomes",
      "Deliver Presentations",
      "Next Steps and Evaluation",
      "Graduation",
    ],
  },
]

const whatsIncluded = [
  "3-day intensive training program",
  "Prosci Certified Change Practitioner certificate",
  "Complete methodology workbook",
  "Digital tools and resources (Research Hub, Knowledge Hub, Proxima)",
  "Professional development units",
]

const timeRequirements = [
  {
    label: "Online",
    detail: "8 hours daily + 1 hour self-study (Days 1-2)",
  },
  {
    label: "In-Person",
    detail: "Full-day intensive sessions",
  },
  {
    label: "Both formats",
    detail: "Same comprehensive curriculum",
  },
]

/* Course overview removed — data cleaned up. */


const credits = [
  { name: "ACMP QEP", file: "ACMP QEP logo.png" },
  { name: "PMI", file: "PMI.png" },
  { name: "HRCI", file: "HRCI-logo.png" },
  { name: "CSU", file: "CSU-Signature.png" },
]

const upcomingDates = [
  {
    date: "12 - 14 Jan 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl: "",
  },
  {
    date: "24 - 26 Feb 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl: "",
  },
  {
    date: "9 - 11 Mar 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl: "",
  },
  {
    date: "20 - 22 April 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl: "",
  },
  {
    date: "27 - 29 April 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl: "",
  },
  {
    date: "18 - 20 May 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/RegistrationForm/formperma/LHwZYkL0CfBZIMSeyS2Tro6NdwAVRAHkATWfut65iPA",
  },
  {
    date: "25 - 27 May 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram7/formperma/nUxihRA1hFeyWqD1A0yhwFPEcdpIn-KakAMw9VVoqtY",
  },
  {
    date: "22 - 24 June 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram/formperma/kJv9q73_jqnkte5n5YNDG9cE0RayWO9C8ilQfS4Ck7Q",
  },
  {
    date: "8 - 10 June 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram8/formperma/x-kHpXE7smesfY_fNcmxDXESezSk0s7YCqiT3w7P5j8",
  },
  {
    date: "13 - 15 July 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram1/formperma/_IW1g5RQeQj-qG0hgqI3TP2xNdUItpfZktuIaK0veKU",
  },
  {
    date: "20 - 22 July 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram9/formperma/UC8TZTqo9QdoQrsqHLHXIRzgbLGcEFdyzr_gxPD0F5E",
  },
  {
    date: "10 - 12 Aug 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram2/formperma/prWg3GS0qMsMzyQC_517UsBLaUmAtg0bcPXD2VkCEyA",
  },
  {
    date: "17 - 19 Aug 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram10/formperma/YXyjvhFnOC-ir4ld34xxp4q4K0QEFpSk65tROn_S8Fk",
  },
  {
    date: "21 - 23 Sept 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram3/formperma/ho987O5nNMB51FknKxdlhNvWhEj2iSFieY8XR0nhHL0",
  },
  {
    date: "7 - 9 Sept 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram11/formperma/6Dn3ox6oL7-qJ97vSWhrmSFW0uRdeIshRh-kWk0Iup0",
  },
  {
    date: "12 - 14 Oct 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram4/formperma/HnvY16SVSdawhxq5eU3HEpI2jsLuX2FbnfhXNc3ZJnA",
  },
  {
    date: "19 - 21 Oct 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram12/formperma/6zp0AofWuNvR0B06Ij_yCeTGDRr83TCEs4lB0o_sCYY",
  },
  {
    date: "16 - 18 Nov 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram5/formperma/sBoKiZuWCkKob3IYpGDoqEvdLdSAavACR0yjb5osi4g",
  },
  {
    date: "2 - 4 Nov 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram13/formperma/xtnxWwhZRdPBzFRUt5cFkxnkljAnmeScGQXRklhwac4",
  },
  {
    date: "7 - 9 Dec 2026",
    focus: "Face to Face",
    mode: "Kuala Lumpur | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram6/formperma/uSRw1x04hua98_1pS64dMWpTDwhIcnadNAEZ4N_1vO0",
  },
  {
    date: "15 - 17 Dec 2026",
    focus: "VILT",
    mode: "Online | English",
    registerUrl:
      "https://forms.proscimalaysia.com/Kpintar/form/PROSCIChangeManagementCertificationProgram14/formperma/6o5YVRvrZEm1ma4r3YwVhWSJ7H8JP0zXSIkR4Mtbe_s",
  },
]

const successStories = [
  {
    category: "Government",
    stat: "95%",
    outcome: "Adoption of new ERP system",
    quote:
      "Applying Prosci change management principles enabled us to identify root causes of complex problems and develop effective and permanent solutions. Utilizing Prosci's ADKAR Model we delivered a complicated ERP system migration on-schedule and with day-1 success across all critical business functions.",
    author: "Chief Financial Officer",
  },
  {
    category: "Technology",
    stat: "350+",
    outcome: "Teams enabled with Prosci",
    quote:
      "The Prosci Methodology today is such a big part of the fabric of our team's engagement model when we support the various business functions in the organization. It is just how we do business.",
    author: "Director, Strategic Business Operations",
  },
  {
    category: "Life Science",
    stat: "50%",
    outcome: "Faster adoption and usage",
    quote:
      "What Prosci clearly brings to the table is that focus on the human factor and understanding that people do not just make rational decisions. They are driven by their emotions and their cultural backgrounds.",
    author: "Director of Operations Transformation",
  },
]

const stats = [
  { value: "25+", label: "Years of Change Management Research" },
  { value: "267k+", label: "People Trained and Certified Worldwide" },
  { value: "80%", label: "of Fortune 100 Companies Partner with Prosci" },
]

function StaticButton({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      role="button"
      aria-disabled="true"
      className={`pointer-events-none inline-flex select-none items-center justify-center ${className ?? ""}`}
    >
      {children}
    </span>
  )
}

function StaticLink({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span role="link" aria-disabled="true" className={className}>
      {children}
    </span>
  )
}

export default function CertificationProgramPage() {
  return (
    <main className="min-h-screen bg-white text-[#3f484f]">
      <Header />
      <HashScroller />

      <section
        id="change-management"
        className="relative overflow-hidden bg-cover text-white"
        style={{ backgroundImage: `url('${asset("Change management.png")}')`, backgroundPosition: 'center 30%' }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(88,21,72,0.42),_rgba(53,12,51,0.62)_42%,_rgba(22,4,28,0.74)_100%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-light leading-tight md:text-5xl">
                Change Management Certification Program
              </h1>
              <p className="mt-8 text-base leading-7 md:text-lg">
                Become a Prosci Certified Change Practitioner and help your organization successfully
                navigate complex transformations. Our research-based course equips you with proven
                methodology and practical tools that increase adoption, address barriers to change, and
                turn challenging initiatives into sustainable results.
              </p>
              <div className="mt-8 space-y-4">
                {heroBullets.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <img
                      src={asset("icon-check-circle-white.svg")}
                      alt=""
                      className="h-7 w-7"
                    />
                    <span className="text-sm font-semibold md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-[1fr,520px]">
            <div className="flex flex-col justify-start">
              <h2 className="text-4xl font-light md:text-5xl text-[#3f484f]">
                Change Management Certification Online or In-Person
              </h2>
              <p className="mt-6 text-base leading-7 text-[#666666]">
                Our 3-day intensive program delivers the complete Prosci Methodology used by leading
                organizations worldwide. You will work directly with Prosci Executive Instructors to apply
                the ADKAR Model and Prosci 3-Phase Process to your real change initiatives.
              </p>

              <p className="mt-8 text-base font-semibold text-[#3f484f]">In our 3-Day Certification you will:</p>
              <div className="mt-6 space-y-4">
                {onlineOrInPersonChecklist.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <img
                      src={asset("icon-check-damson.svg")}
                      alt=""
                      className="mt-1 h-5 w-5"
                    />
                    <p className="text-base leading-7 text-[#3f484f]">
                      <strong>{item.title}</strong> - {item.description}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-base leading-7 text-[#666666]">
                You will also connect with fellow change leaders, access our Research Hub and digital tools,
                and join a community of 267,000+ certified practitioners.
              </p>
              <p className="mt-4 text-base leading-7 text-[#666666]">
                Available in both online and in-person formats with the same expert instruction and
                comprehensive curriculum.
              </p>
            </div>

            <div className="w-full space-y-8">
              <div>
                <h2 className="text-5xl font-serif text-[#35104b] text-center md:text-6xl">
                  Change Management Certification Program
                </h2>
                <p className="mt-4 text-base font-semibold text-[#666666] text-center md:text-lg">
                  Upcoming training date
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {/* Face to Face Card */}
                <div className="rounded-[10px] bg-white text-[#3f484f] shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-6">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5c1761] mb-4">
                    Face to Face
                  </p>
                  <h3 className="text-[28px] leading-[1.2] font-serif text-[#35104b] mb-6">
                    In-Person Sessions
                  </h3>
                  <div className="space-y-4 divide-y divide-[#ece5df]">
                    {upcomingDates
                      .filter((item) => item.focus.includes("Face to Face"))
                      .map((item) => (
                        <div key={item.date} className="flex items-start justify-between gap-3 py-4 first:pt-0">
                          <div className="min-w-0 flex-1">
                            <p className="text-[14px] font-semibold leading-5 text-[#3f484f]">{item.date}</p>
                            <p className="mt-1 text-[13px] leading-4 text-[#7a7a7a]">{item.mode}</p>
                          </div>
                          {item.registerUrl ? (
                            <Link
                              href={item.registerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 rounded bg-[#5c1761] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#CCCCFF] whitespace-nowrap"
                            >
                              Register
                            </Link>
                          ) : (
                            <StaticButton className="shrink-0 rounded bg-[#5c1761] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white opacity-60 whitespace-nowrap">
                              Register
                            </StaticButton>
                          )}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Online Card */}
                <div className="rounded-[10px] bg-white text-[#3f484f] shadow-[0_20px_60px_rgba(0,0,0,0.18)] p-6">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-[#5c1761] mb-4">
                    Online (VILT)
                  </p>
                  <h3 className="text-[28px] leading-[1.2] font-serif text-[#35104b] mb-6">
                    Virtual Sessions
                  </h3>
                  <div className="space-y-4 divide-y divide-[#ece5df]">
                    {upcomingDates
                      .filter((item) => item.focus.includes("VILT"))
                      .map((item) => (
                        <div key={item.date} className="flex items-start justify-between gap-3 py-4 first:pt-0">
                          <div className="min-w-0 flex-1">
                            <p className="text-[14px] font-semibold leading-5 text-[#3f484f]">{item.date}</p>
                            <p className="mt-1 text-[13px] leading-4 text-[#7a7a7a]">{item.mode}</p>
                          </div>
                          {item.registerUrl ? (
                            <Link
                              href={item.registerUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="shrink-0 rounded bg-[#5c1761] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#CCCCFF] whitespace-nowrap"
                            >
                              Register
                            </Link>
                          ) : (
                            <StaticButton className="shrink-0 rounded bg-[#5c1761] px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-white opacity-60 whitespace-nowrap">
                              Register
                            </StaticButton>
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9eaf2] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light md:text-4xl">
            Why Choose Prosci Change Management Certification
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-[#444444]">
            <strong>We do not just train - we build lasting change capability.</strong> Our
            methodology is built for change success, refined over 25 years of studying what actually
            works.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyChooseCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg bg-white p-8 shadow-[0_2px_3px_rgba(0,0,0,0.08)]"
              >
                <h3 className="text-lg font-medium text-[#025c67]">{card.title}</h3>
                <p className="mt-4 text-base leading-7 text-[#444444]">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-lg bg-white p-10 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="flex flex-wrap items-center justify-between gap-10">
              <div className="min-w-[260px] flex-1">
                <h3 className="text-2xl font-medium text-[#3f484f]">
                  Display Your Prosci Certified Change Practitioner Badge
                </h3>
                <p className="mt-4 text-base leading-7 text-[#444444]">
                  Your expertise deserves recognition. Complete the program and receive a digital
                  certificate badge that validates your specialized training in the Prosci Methodology.
                  Share your achievement on LinkedIn to stand out in a competitive market and
                  demonstrate proven, research-backed skills that drive change success.
                </p>
              </div>
              <img
                src={asset("CredlyBadge_CMP-EN.png")}
                alt="Prosci Certified Change Practitioner certification badge"
                className="h-48 w-48 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light md:text-4xl">Who Should Attend</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-[#444444]">
            <strong>If you are responsible for making change happen, this certification is for you.</strong>
            Our methodology works across industries, functions, and organizational levels.
          </p>
          <div className="mt-10 rounded-lg bg-[#f6f4ed] px-6 py-10">
            {whoShouldAttendRows.map((row) => (
              <div
                key={row.role}
                className="flex flex-col items-center gap-4 border-b border-[#e3ddd1] py-4 last:border-b-0 md:flex-row md:gap-6"
              >
                <div className="flex-1 text-right text-sm font-semibold text-[#350944]">
                  {row.role}
                </div>
                <img src={asset("Arrow.svg")} alt="" className="h-4 w-12" />
                <div className="flex-1 text-left text-sm text-[#3f484f]">{row.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-12">
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-start gap-3">
                <img src={asset("icon-lightbulb-damson.svg")} alt="" className="h-8 w-8" />
                <p className="text-lg font-semibold text-[#3f484f]">Have 8+ Practitioners to Train?</p>
              </div>
              <p className="mt-3 text-base leading-6 text-[#3f484f]">
                Book Prosci for a private Change Management Certification Program.
                <StaticLink className="text-[#3f484f] underline">Inquire here</StaticLink> for more
                information about our Enterprise Training.
              </p>
            </div>
            <div className="flex-1 min-w-[280px]">
              <div className="flex items-start gap-3">
                <img src={asset("icon-seal-percent-damson.svg")} alt="" className="h-8 w-8" />
                <p className="text-lg font-semibold text-[#3f484f]">Regional Discounts</p>
              </div>
              <p className="mt-3 text-base leading-6 text-[#3f484f]">
                Attend with a colleague and save! Check your training schedule page to learn about
                current promotions and available discounts for upcoming training courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light md:text-4xl">Program Agenda</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {programAgenda.map((day) => (
              <div
                key={day.day}
                className="rounded-lg bg-white p-8 shadow-[0_2px_5px_rgba(0,0,0,0.1)]"
              >
                <h3 className="text-center text-2xl font-medium text-[#025c67]">{day.day}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[#3f484f]">
                  {day.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <h3 className="mt-12 text-center text-2xl font-medium text-[#3f484f]">
            Additional Information
          </h3>
          <div className="mt-8 grid gap-6 md:grid-cols-[2fr,1fr]">
            <div className="rounded-lg bg-white p-8 shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
              <h4 className="text-xl font-medium text-[#3f484f]">Course Materials (included)</h4>
              <p className="mt-3 text-sm text-[#3f484f]">
                As a course participant, you gain access to industry-leading content and tools:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[#3f484f]">
                <li>Program workbook and handouts</li>
                <li>
                  One-year subscription to:
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>
                      <StaticLink className="text-[#836434] underline">Research Hub</StaticLink>
                    </li>
                    <li>
                      <StaticLink className="text-[#836434] underline">
                        Knowledge Hub - Practitioner Program
                      </StaticLink>
                    </li>
                    <li>
                      <StaticLink className="text-[#836434] underline">Proxima</StaticLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
              <h4 className="text-lg font-medium text-[#3f484f]">Note on Time Requirements</h4>
              <p className="mt-4 text-sm leading-6 text-[#3f484f]">
                For the online program, you will need to be online for approximately 8 hours each day
                during the dedicated class time. In addition, you will need to complete approximately
                1 hour of self-study on Day 1 and Day 2. These time commitments, and agenda, are
                commensurate for 4 and 5 day courses. In-person programs have slightly different
                requirements. Please see individual program listings for more information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Resources section removed per request */}

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light md:text-4xl">Program Details and Schedule</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-[#444444]">
            <strong>Ready to transform your approach to change?</strong> Our next certification programs
            are filling up. Secure your spot and start seeing results on your current projects.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-[#f2e8de] p-8">
              <h3 className="text-center text-xl font-medium text-[#025c67]">What's Included</h3>
              <div className="mt-6 space-y-3 text-sm text-[#3f484f]">
                {whatsIncluded.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <img
                      src={asset("icon-check-damson(1).svg")}
                      alt=""
                      className="mt-0.5 h-5 w-5"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg bg-[#f5f2eb] p-8">
              <h3 className="text-center text-xl font-medium text-[#025c67]">Time Requirements</h3>
              <div className="mt-6 space-y-4 text-sm text-[#3f484f]">
                {timeRequirements.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <img
                      src={asset("icon-caret-right-damson.svg")}
                      alt=""
                      className="mt-0.5 h-5 w-5"
                    />
                    <div>
                      <p className="font-semibold">{item.label}:</p>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <StaticButton className="rounded-sm bg-[#3f484f] px-6 py-3 text-sm font-semibold uppercase text-white">
              View Training Schedule
            </StaticButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-lg bg-[#5c1761] px-6 py-6 text-white">
            <div className="flex items-center gap-4">
              <div
                className="h-20 w-16 rotate-[-6deg] rounded bg-cover bg-center shadow"
                style={{
                  backgroundImage: `url('${asset("Change-Management-Certification-Program-Datasheet_EN_Feb-26-1.webp")}')`,
                }}
              />
              <div className="text-lg font-medium">Program Details</div>
            </div>
            <a 
              href="/pdf/Change%20Management%20Certification%20Program.pdf" 
              download 
              className="rounded-sm border-2 border-white px-6 py-2 text-xs font-semibold uppercase inline-flex items-center justify-center hover:bg-[#CCCCFF] hover:text-[#3d1a4e] transition-colors"
            >
              Download
            </a>
          </div>
        </div>
      </section>

      {/* Course Overview section removed per request */}

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-light leading-tight">
              Showcase Your Professional Achievement
            </h2>
            <p className="mt-4 text-base leading-7 text-[#444444]">
              Add the respected Prosci Certified Change Practitioner digital badge to your professional
              credentials. This verified digital badge demonstrates your expertise in leading successful
              change initiatives to colleagues, clients, and employers. Your certification sets you
              apart in the growing field of change management, creating new opportunities and
              establishing your position as a trusted change leader.
            </p>
            <div className="mt-8">
              <StaticButton className="rounded-sm bg-[#3f484f] px-6 py-3 text-sm font-semibold uppercase text-white">
                Choose dates and register
              </StaticButton>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src={asset("Digital-badge_EN_Feb-26.png")}
              alt="Digital badge"
              className="h-auto w-full max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f5f2eb] px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-light">Client Success Stories</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-7 text-[#444444]">
            <strong>Our practitioners do not just implement change, they drive transformation.</strong>
            Here is how certified practitioners are delivering results across industries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-xs font-semibold tracking-wide text-[#836434]">
            {successStories.map((story) => (
              <span key={story.category} className="border-b-2 border-transparent pb-2">
                {story.category.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {successStories.map((story) => (
              <div key={story.category} className="overflow-hidden rounded-lg bg-white shadow">
                <div className="bg-[#5c1761] px-6 py-8 text-center text-white">
                  <div className="text-5xl font-semibold">{story.stat}</div>
                  <div className="mt-3 text-lg font-medium">{story.outcome}</div>
                </div>
                <div className="px-6 py-8">
                  <p className="text-base leading-7 text-[#3f484f]">"{story.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-[#3f484f]">- {story.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.value} className="rounded-lg bg-white p-6 text-center">
              <div className="text-5xl font-semibold text-[#3f484f]">{stat.value}</div>
              <p className="mt-4 text-sm font-semibold text-[#3f484f]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}









