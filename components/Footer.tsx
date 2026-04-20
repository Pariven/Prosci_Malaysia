import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  changeManagement: {
    title: "CHANGE MANAGEMENT",
    links: [
      "What is Change Management",
      "Why Change Management",
      "Change Success",
      "Change Saturation",
      "Change Fatigue",
      "Change Readiness",
      "Change Resistance",
    ],
  },
  methodology: {
    title: "METHODOLOGY",
    links: [
      "Prosci Methodology Overview",
      "Prosci PCT Model",
      "Prosci ADKAR Model",
      "Prosci 3-Phase Process",
    ],
  },
  solutions: {
    title: "SOLUTIONS",
    sections: [
      {
        subtitle: "Solutions Overview",
        links: [],
      },
      {
        subtitle: "For Individuals",
        links: [
          "Certification Program",
          "Membership",
          "Training Programs",
          "Advanced Offerings",
          "Tools and Resources",
        ],
      },
      {
        subtitle: "For Organizations",
        links: [
          "ERP Implementations",
          "AI Enterprise Solutions",
          "Enterprise Training",
          "Consulting Services",
          "Licensing",
        ],
      },
    ],
  },
  resources: {
    title: "RESOURCES",
    links: [
      "Overview",
      "Prosci Blog",
      "Live and On-Demand Webinars",
      "Podcasts",
      "Research Insights, Worksheets, and More",
      "Case Studies",
      "Research Opportunities",
    ],
    additional: ["PROSCI STORE", "PROSCI PORTAL"],
  },
  aboutUs: {
    title: "ABOUT US",
    links: [
      "Contact Us",
      "About Prosci",
      "Why Choose Prosci",
      "Our Team",
      "Global Coverage",
      "Research Process",
      "Sustainability, Impact, Belonging",
      "Newsroom",
      "Careers",
    ],
  },
  legal: {
    title: "LEGAL",
    links: ["Trust Center", "Privacy Policy", "Data Security Overview"],
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
                  <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="font-semibold text-sm tracking-wider mt-8 mb-4">
              {footerLinks.methodology.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.methodology.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link}
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
                <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                  {section.subtitle}
                </Link>
                {section.links.length > 0 && (
                  <ul className="mt-2 space-y-2 ml-2">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        <Link href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                          {link}
                        </Link>
                      </li>
                    ))}
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
                  <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-2">
              {footerLinks.resources.additional.map((link, index) => (
                <div key={index}>
                  <Link href="#" className="font-semibold text-sm tracking-wider hover:text-gray-300 transition-colors">
                    {link}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* About Us */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-4">
              {footerLinks.aboutUs.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.aboutUs.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-sm tracking-wider mb-4">
              {footerLinks.legal.title}
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.links.map((link, index) => (
                <li key={index}>
                  <Link href="#" className="text-gray-300 text-sm hover:text-white transition-colors">
                    {link}
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
