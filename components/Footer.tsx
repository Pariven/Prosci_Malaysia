import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  changeManagement: {
    title: "CHANGE MANAGEMENT",
    links: [
      { label: "What is Change Management", href: "/change-management/what-is-change-management" },
      { label: "Why is Change Management", href: "/change-management/why-change-management" },
    ],
  },
  methodology: {
    title: "METHODOLOGY",
    links: [
      { label: "Prosci Methodology Overview", href: "/methodology-overview" },
      { label: "PCT Model", href: "/methodology/pct-model" },
      { label: "ADKAR Model", href: "/methodology/adkar" },
      { label: "Prosci 3-Phase Process", href: "/methodology/3-phase-process" },
    ],
  },
  solutions: {
    title: "SOLUTIONS",
        sections: [
      {
        subtitle: "For Individuals",
        links: [
          { label: "Certification Program", href: "/certification-program" },
          { label: "Role-Based Certification", href: "/role-based-certification" },
          { label: "Membership", href: "/membership" },
        ],
      },
      {
        subtitle: "For Organizations",
        links: [
          { label: "Enterprise Change Management Boot Camp", href: "/resources/enterprise-boot-camp" },
        ],
      },
      {
        subtitle: "Others",
        links: [
          { label: "Advisory Services", href: "/resources/advisory-services" },
        ],
      },
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      { label: "Podcast (UNSCRIPTED: Change Management @ Work)", href: "/resources/podcast" },
      { label: "Webinars", href: "/resources/webinars" },
    ],
  },
  aboutUs: {
    title: "ABOUT US",
    links: [
      { label: "Contact Us", href: "/contact-us" },
      { label: "About Prosci Malaysia", href: "https://www.kpintar.com/about-us.html" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-[#3d1a4e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Quick Links Header */}
        <div className="flex items-center gap-4 mb-12">
          <span className="text-sm text-gray-400 uppercase tracking-wider">Quick Links</span>
          <div className="flex-1 h-px bg-gray-600" />
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Change Management */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-4">
              {footerLinks.changeManagement.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.changeManagement.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-4">
              {footerLinks.methodology.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.methodology.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-4">
              {footerLinks.solutions.title}
            </h3>
            {footerLinks.solutions.sections.map((section, sIndex) => (
              <div key={sIndex} className="mb-4">
                <h4 className="text-gray-300 text-sm font-medium mb-2">{section.subtitle}</h4>
                {section.links.length > 0 && (
                  <ul className="space-y-1 ml-2">
                    {section.links.map((link, index) => {
                      const href = typeof link === 'string' ? '#' : link.href
                      const label = typeof link === 'string' ? link : link.label
                      return (
                        <li key={index}>
                          <Link href={href} className="text-gray-400 text-sm hover:text-white transition-colors">
                            {label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-4">
              {footerLinks.resources.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-4">
              {footerLinks.aboutUs.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.aboutUs.links.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.png"
              alt="Prosci KPINTAR"
              width={200}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Prosci KPINTAR. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
