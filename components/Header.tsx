"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronDown, Globe, Menu, X, Calendar } from "lucide-react"

type MegaMenuColumn = {
  title: string
  items: string[]
}

type NavItem = {
  label: string
  hasDropdown: boolean
  dropdownItems?: string[]
  megaMenu?: {
    title: string
    ctaText: string
    columns: MegaMenuColumn[]
  }
}

const navItems: NavItem[] = [
  {
    label: "Change Management",
    hasDropdown: true,
    dropdownItems: ["What is Change Management", "Why is Change Management"],
  },
  {
    label: "Methodology",
    hasDropdown: true,
    dropdownItems: [
      "Prosci Methodology Overview",
      "PCT Model",
      "ADKAR Model",
      "Prosci 3-Phase Process",
    ],
  },
  {
    label: "Solutions",
    hasDropdown: true,
    megaMenu: {
      title: "Solutions",
      ctaText: "Learn more",
      columns: [
        {
          title: "Solutions For Individuals",
          items: [
            "Certification Program",
            "Membership",
            "Training Programs",
            "Advanced Offerings",
            "Tools and Resources",
          ],
        },
        {
          title: "Solutions For Organizations",
          items: [
            "ERP Implementations",
            "AI Enterprise Solutions",
            "Consulting Services",
            "Enterprise Training",
            "Licensing",
            "eLearning",
            "Speaking Engagements",
          ],
        },
        {
          title: "Industry Insights",
          items: [
            "Higher Education",
            "Government",
            "Healthcare",
            "Financial Services",
            "Insurance",
            "Information Technology",
            "Manufacturing",
            "Energy",
          ],
        },
      ],
    },
  },
  {
    label: "Resources",
    hasDropdown: true,
    dropdownItems: [
      "Podcast (UNSCRIPTED: Change Management @ Work)",
      "Webinars",
    ],
  },
  {
    label: "About Us",
    hasDropdown: true,
    dropdownItems: ["Contact Us", "About Prosci", "Why Choose Prosci"],
  },
]
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-4 py-2 text-sm">
            <Link href="#" className="flex items-center gap-2 bg-[#3d1a4e] text-white px-4 py-2 rounded hover:bg-[#2d1339] transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Training</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-[#3d1a4e]">
              <Globe className="w-4 h-4" />
              <span>English</span>
              <ChevronDown className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Prosci KPINTAR"
              width={280}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap rounded-sm px-1 py-0.5 text-gray-800 hover:text-[#3d1a4e] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3d1a4e]/40"
                  aria-haspopup="menu"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                    />
                  )}
                </button>
                {item.megaMenu ? (
                  <div className="absolute left-1/2 top-full z-40 w-[900px] -translate-x-1/2 pt-4 origin-top invisible opacity-0 -translate-y-2 scale-[0.98] pointer-events-none transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:pointer-events-auto">
                    <div className="border border-gray-200 bg-[#f6f4f2] shadow-lg p-6">
                      <h3 className="text-[36px] leading-none font-playfair text-[#35104b]">{item.megaMenu.title}</h3>
                      <Link
                        href="#"
                        className="mt-2 inline-block text-sm text-black underline underline-offset-4 hover:text-[#3d1a4e]"
                      >
                        {item.megaMenu.ctaText}
                      </Link>
                      <div className="mt-7 grid grid-cols-3 gap-4">
                        {item.megaMenu.columns.map((column) => (
                          <div key={column.title} className="bg-[#eeece9] p-4">
                            <h4 className="text-[20px] leading-tight font-playfair text-[#35104b]">{column.title}</h4>
                            <div className="mt-3 border-t border-gray-500" />
                            <div className="mt-4 space-y-3">
                              {column.items.map((subItem, index) => (
                                <Link
                                  key={subItem}
                                  href="#"
                                  className={`block rounded px-2 py-1 text-[16px] leading-snug font-playfair transition-all duration-150 hover:bg-white hover:translate-x-1 hover:text-[#3d1a4e] ${index === 0 ? "font-bold text-black" : "text-gray-900"}`}
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : item.dropdownItems?.length ? (
                  <div className="absolute left-0 top-full pt-3 origin-top invisible opacity-0 -translate-y-2 scale-[0.98] pointer-events-none transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100 group-focus-within:pointer-events-auto">
                    <div className="w-72 rounded-md border border-gray-200 bg-white shadow-lg p-2">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block rounded px-3 py-2 text-sm text-gray-700 transition-all duration-150 hover:bg-gray-100 hover:translate-x-1 hover:text-[#3d1a4e]"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-800" />
            ) : (
              <Menu className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  className="flex items-center justify-between w-full whitespace-nowrap text-gray-800 hover:text-[#3d1a4e] font-medium py-2"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.dropdownItems?.length ? (
                  <div className="pl-4 pb-1">
                    {item.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block py-1 text-sm text-gray-600 hover:text-[#3d1a4e]"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                ) : item.megaMenu ? (
                  <div className="pl-4 pb-1 space-y-2">
                    {item.megaMenu.columns.map((column) => (
                      <div key={column.title}>
                        <p className="py-1 text-xs font-semibold uppercase text-gray-500">{column.title}</p>
                        {column.items.map((subItem) => (
                          <Link
                            key={subItem}
                            href="#"
                            className="block py-1 text-sm text-gray-600 hover:text-[#3d1a4e]"
                          >
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
