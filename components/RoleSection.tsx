import React from 'react'

type Feature = { title: string; description: string }

export default function RoleSection({
  image = '/images/Enterprise-Feature-Image-1.webp',
  heading = 'The Prosci Approach to Enterprise Change Success',
  intro = 'Our organizational change management training programs address common change challenges head-on with a structured, research-based approach that builds capability at every level of your enterprise.',
  features = [] as Feature[],
}: {
  image?: string
  heading?: string
  intro?: string
  features?: Feature[]
}) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-[1200px] px-6">
        <header className="text-center mb-10">
          <h2 className="font-serif text-[44px] leading-tight text-[#3b0a45]">{heading}</h2>
          <p className="mt-4 mx-auto max-w-2xl text-base text-[#6f767b]">{intro}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-x-16 items-center">
          <div className="md:col-span-5">
            <div className="w-full overflow-hidden shadow-lg">
              <img src={image} alt="feature" className="w-full h-[420px] object-cover" />
            </div>
          </div>

          <div className="mt-8 md:mt-0 md:col-span-7">
            <div className="max-w-full md:pl-6">
              <div className="space-y-6">
                {(features.length ? features : defaultFeatures).map((f) => (
                  <div key={f.title}>
                    <h3 className="text-lg font-semibold text-[#3b0a45]">{f.title}</h3>
                    <p className="mt-2 text-sm text-[#6f767b]">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const defaultFeatures: Feature[] = [
  { title: 'Role-based training', description: 'Targeted programs for every organizational level, from executives and sponsors to project teams and front-line employees.' },
  { title: 'Enterprise-Scale Delivery', description: 'Flexible virtual and onsite delivery options that maintain consistency across global teams while adapting to local needs.' },
  { title: 'Capability Building Focus', description: 'Train your internal teams to become self-sufficient in change management rather than creating long-term consulting dependency.' },
  { title: 'Research-Based Foundation', description: '25+ years of studying what works in change management with proven ADKAR Model used by Fortune 100 companies worldwide.' },
]