import Header from "@/components/Header"
import Footer from "@/components/Footer"

const overviewCards = [
  {
    title: "Methodology and tools",
    description:
      "Method is at the heart of change done right. Our proven methodology, models and tools drive successful change because we know how to turn the people side of change into opportunity.",
    image: "/solutions/methodology-tools.svg",
    alt: "Methodology and tools",
    href: "/methodology-overview",
  },
  {
    title: "Training and Certification",
    description:
      "We empower you and your organization. You build expertise while implementing change by participating in our training and certification courses for individuals and enterprises.",
    image: "/solutions/training-certification.svg",
    alt: "Training and Certification",
    href: "/certification-program",
  },
  {
    title: "Advisory services",
    description:
      "Change success takes the right partner. Prosci Advisors are persistent and patient. They're committed to listening, understanding, and guiding you to change success.",
    image: "/solutions/advisory-services-consulting.svg",
    alt: "Advisory services",
    href: "/resources/advisory-services",
  },
  {
    title: "Research and insights",
    description:
      "Prosci maintains the largest body of knowledge on change management in the industry. To date, we've distilled over 25 years of insights from 90,000+ change leaders globally.",
    image: "/solutions/primary-research-insights.svg",
    alt: "Research and insights",
    href: "https://www.prosci.com/en/resources/research-opportunities",
  },
]

const individualCards = [
  {
    title: "Become a certified change leader",
    description:
      "Our globally recognized certification programs empowers you with change management skills, advancing your role as a change leader.",
    href: "https://www.prosci.com/solutions/training-programs/change-management-certification-program",
  },
  {
    title: "Drive change within your organization",
    description:
      "With over 25 years of research, Prosci offers practical change management tools to drive lasting individual and organizational change.",
    href: "https://www.prosci.com/solutions/tools-and-resources",
  },
  {
    title: "Chart your path to career advancement",
    description:
      "Prosci offers tailored coaching, certification, and training to strengthen your change confidence and advance your career from foundational to advanced training options.",
    href: "https://www.prosci.com/solutions/model-mastery-programs",
  },
]

const organizationCards = [
  {
    title: "Develop your organization's change capabilities",
    description:
      "Empower your organization's change capability with flexible, engaging learning opportunities through Prosci's custom training and eLearning modules.",
    href: "https://www.prosci.com/solutions/enterprise-training",
  },
  {
    title: "Put the tools to drive sustainable change into your team's hands",
    description:
      "We offer the proven Prosci Methodology and tools to support change leaders and employees through organizational transformations.",
    href: "https://www.prosci.com/solutions/licensing",
  },
  {
    title: "Change done right takes the right partner",
    description:
      "Prosci Advisory Services empowers individuals and teams with over 25 years of expertise, supporting change for lasting success.",
    href: "https://www.prosci.com/solutions/advisory-services-for-enterprises",
  },
]

const testimonials = [
  {
    quote:
      "The ADKAR Model and Prosci Methodology complement our customer success framework and enable us to shift customer mindsets to think beyond training plans and increase adoption of complex, cloud-based Microsoft 365 technologies.",
    name: "Emma Stephen",
    role: "Principal Adoption and Change Consultant, Microsoft",
  },
  {
    quote:
      "Fabulous training team! The materials FAR exceeded my expectations. The instructor's clarity, business knowledge and application were the greatest strengths.",
    name: "Jeanette Paiz",
    role: "Hewlett Packard Enterprise",
  },
  {
    quote:
      "It is hugely important to have the trust and confidence in adopting a consistent change management approach. We know that the Prosci approach offers us the ability to approach change from individual, project and enterprise levels. This scalability was crucial for supporting us in introducing change management as a capability.",
    name: "Helen Donaghy",
    role: "Portfolio Delivery Lead at NHS Business Services Authority",
  },
  {
    quote:
      "When we set out to build our change management office [with Prosci], our top priority was to ensure a greater likelihood of success.",
    name: "Manuel Padilla Castrillion",
    role: "Head of International Communication and Cultural Change, AXA Seguros",
  },
  {
    quote:
      "Prosci gives me the knowledge and tools needed to secure our important change sponsors early on, and to start educating my stakeholders and my team about planned changes and their impact. This sets us up for greater project success.",
    name: "Don Demarco",
    role: "Medical Center Program Office, University of Virginia (UVA)",
  },
  {
    quote:
      "Prosci's approach to change management fosters end-user engagement, positioning managers to lead their people through change by engaging the intuitive ADKAR Model. This flexible, scalable methodology has been a game changer.",
    name: "April Hershman",
    role: "Director of OCM, Oshkosh",
  },
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="relative overflow-hidden bg-[#3d1a4e] text-white">
        <img
          src="/solutions/Focused-conversation-3_Feb-26.webp"
          alt="Woman in a white sweater looking attentively at a man during a conversation."
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#2b0f36]/70" />
        <div className="relative mx-auto flex min-h-[320px] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6 lg:min-h-[520px] lg:px-8">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Integrated change
            <br className="hidden sm:block" />
            success solutions
          </h1>
          <p className="mt-6 max-w-3xl text-base text-white/90 sm:text-lg">
            Prosci combines research, methodology, and experience to tackle change from every angle.
            Whether you need training, advice, or both, we offer tailored solutions that drive
            transformation by focusing on the human side of change. Most importantly, we're with you
            every step of the way.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {overviewCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="mb-4 aspect-square w-full rounded-sm object-contain"
                  loading="lazy"
                />
                <h3 className="text-lg font-serif text-[#3d1a4e]">
                  {card.href ? (
                    <a href={card.href} className="hover:underline">
                      {card.title}
                    </a>
                  ) : (
                    card.title
                  )}
                </h3>
                <p className="mt-3 text-sm text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-0 overflow-hidden rounded-3xl lg:grid-cols-2">
            <div className="bg-gradient-to-br from-[#e0eaec] to-[#f5f2ec] p-8 sm:p-10 lg:p-12">
              <h2 className="font-serif text-3xl text-[#3d1a4e] sm:text-4xl">
                Solutions
                <br />
                for <span className="text-[#342a86]">individuals</span>
              </h2>
              <p className="mt-4 text-sm text-gray-700 sm:text-base">
                Change isn't just an opportunity for organizations, it's one that can benefit change
                leaders and their careers, too. Prosci integrated solutions are designed to help make
                both you and your organization stronger through change.
              </p>

              <div className="mt-10 space-y-6">
                {individualCards.map((card) => (
                  <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-serif text-gray-800">{card.title}</h3>
                    <p className="mt-3 text-sm text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>

            </div>

            <div className="bg-gradient-to-br from-[#f5f2ec] to-[#e0eaec] p-8 sm:p-10 lg:p-12">
              <h2 className="font-serif text-3xl text-[#3d1a4e] sm:text-4xl">
                Solutions
                <br />
                for <span className="text-[#342a86]">organizations</span>
              </h2>
              <p className="mt-4 text-sm text-gray-700 sm:text-base">
                Our integrated enterprise solutions help transform organizations from project-based
                change to enduring change expertise and resiliency. When you work with us, you're
                empowering all levels of the company to become effective change leaders.
              </p>

              <div className="mt-10 space-y-6">
                {organizationCards.map((card) => (
                  <div key={card.title} className="rounded-2xl bg-white p-6 shadow-sm">
                    <h3 className="text-lg font-serif text-gray-800">{card.title}</h3>
                    <p className="mt-3 text-sm text-gray-600">{card.description}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-light text-[#3d1a4e] sm:text-4xl">
            What our clients say
          </h2>
          <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="min-w-[280px] snap-center rounded-lg border border-[#e5e5e5] bg-white p-6 shadow-sm sm:min-w-[340px] lg:min-w-[360px]"
              >
                <p className="text-sm text-[#3d1a4e]">&quot;{testimonial.quote}&quot;</p>
                <div className="mt-6 border-l-4 border-[#c9b037] pl-4">
                  <p className="font-serif text-[#3d1a4e]">— {testimonial.name}</p>
                  <p className="text-sm italic text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#3d1a4e] text-white">
        <img
          src="/solutions/Green-leaves-with-soft-sunlight-1_Feb-26.webp"
          alt="Close-up of green leaves with soft sunlight and a blurred background."
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#2b0f36]/70" />
        <div className="relative mx-auto flex min-h-[280px] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:min-h-[420px] lg:px-8">
          <h2 className="font-serif text-3xl font-light sm:text-4xl">
            Achieve change success in your company
          </h2>
          <div className="mt-8">
            <a
              href="/certification-program"
              className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#3d1a4e] transition-colors hover:bg-gray-100"
            >
              Explore our solutions
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
