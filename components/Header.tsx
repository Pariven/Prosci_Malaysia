"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
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

type LanguageCode = "en" | "ms"

declare global {
  interface Window {
    google?: {
      translate?: {
        TranslateElement: new (
          options: { pageLanguage: string; autoDisplay?: boolean },
          elementId: string
        ) => unknown
      }
    }
    googleTranslateElementInit?: () => void
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
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null)
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [language, setLanguage] = useState<LanguageCode>("en")
  const languageMenuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const existingCookie = document.cookie
      .split(";")
      .map((cookie) => cookie.trim())
      .find((cookie) => cookie.startsWith("googtrans="))

    if (existingCookie?.includes("/ms")) {
      setLanguage("ms")
    }

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en", autoDisplay: false },
          "google_translate_element"
        )
      }
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script")
      script.id = "google-translate-script"
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      script.async = true
      document.body.appendChild(script)
    }
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setIsLanguageMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleOutsideClick)
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [])

  const setGoogleTranslateCookie = (targetLanguage: LanguageCode) => {
    const cookieValue = `/en/${targetLanguage}`
    const maxAge = 60 * 60 * 24 * 365

    document.cookie = `googtrans=${cookieValue}; path=/; max-age=${maxAge}`
    document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/; max-age=${maxAge}`
  }

  const handleLanguageChange = (targetLanguage: LanguageCode) => {
    setLanguage(targetLanguage)
    setIsLanguageMenuOpen(false)
    setGoogleTranslateCookie(targetLanguage)
    window.location.reload()
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div id="google_translate_element" className="sr-only" aria-hidden="true" />

      {/* Top bar */}
      <div className="hidden lg:block bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end gap-4 py-2 text-sm">
            <Link href="#" className="flex items-center gap-2 bg-[#3d1a4e] text-white px-4 py-2 rounded hover:bg-[#2d1339] transition-colors">
              <Calendar className="w-4 h-4" />
              <span>Training</span>
            </Link>
            <div ref={languageMenuRef} className="relative">
              <button
                type="button"
                className="flex items-center gap-2 text-gray-700 hover:text-[#3d1a4e]"
                onClick={() => setIsLanguageMenuOpen((current) => !current)}
                aria-expanded={isLanguageMenuOpen}
                aria-haspopup="menu"
              >
                <Globe className="w-4 h-4" />
                <span>{language === "en" ? "English" : "Bahasa Melayu"}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageMenuOpen ? "rotate-180" : "rotate-0"}`} />
              </button>

              <div className={`absolute right-0 top-full z-50 pt-2 transition-all duration-150 ${isLanguageMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
                <div className="w-44 rounded-md border border-gray-200 bg-white shadow-lg p-1">
                  <button
                    type="button"
                    className={`w-full rounded px-3 py-2 text-left text-sm ${language === "en" ? "bg-gray-100 text-[#3d1a4e]" : "text-gray-700 hover:bg-gray-100"}`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    className={`w-full rounded px-3 py-2 text-left text-sm ${language === "ms" ? "bg-gray-100 text-[#3d1a4e]" : "text-gray-700 hover:bg-gray-100"}`}
                    onClick={() => handleLanguageChange("ms")}
                  >
                    Bahasa Melayu
                  </button>
                </div>
              </div>
            </div>
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
            className="lg:hidden rounded-md border border-gray-200 p-2 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
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
        <div className="lg:hidden fixed inset-0 z-[70]">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu overlay"
          />

          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm bg-white shadow-2xl border-l border-gray-200 animate-[menuPop_180ms_ease-out]">
            <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
              <p className="text-base font-semibold text-[#3d1a4e]">Menu</p>
              <button
                type="button"
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[calc(100%-64px)] overflow-y-auto px-4 py-4">
              <div className="mb-4 rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Language</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${language === "en" ? "bg-[#3d1a4e] text-white" : "bg-white text-gray-700 border border-gray-200"}`}
                    onClick={() => handleLanguageChange("en")}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    className={`rounded-md px-3 py-2 text-sm font-medium ${language === "ms" ? "bg-[#3d1a4e] text-white" : "bg-white text-gray-700 border border-gray-200"}`}
                    onClick={() => handleLanguageChange("ms")}
                  >
                    Bahasa Melayu
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="rounded-xl border border-gray-200 bg-white">
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-gray-800"
                      onClick={() => {
                        const hasChildren = Boolean(item.dropdownItems?.length || item.megaMenu)
                        if (!hasChildren) {
                          setMobileMenuOpen(false)
                          return
                        }

                        setOpenMobileSection((current) =>
                          current === item.label ? null : item.label
                        )
                      }}
                    >
                      <span>{item.label}</span>
                      {item.hasDropdown ? (
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${openMobileSection === item.label ? "rotate-180" : "rotate-0"}`}
                        />
                      ) : null}
                    </button>

                    {openMobileSection === item.label && item.dropdownItems?.length ? (
                      <div className="border-t border-gray-100 px-4 py-3">
                        <div className="space-y-1">
                          {item.dropdownItems.map((subItem) => (
                            <Link
                              key={subItem}
                              href="#"
                              className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3d1a4e]"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {openMobileSection === item.label && item.megaMenu ? (
                      <div className="border-t border-gray-100 px-4 py-3 space-y-3">
                        {item.megaMenu.columns.map((column) => (
                          <div key={column.title}>
                            <p className="mb-1 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                              {column.title}
                            </p>
                            <div className="space-y-1">
                              {column.items.map((subItem) => (
                                <Link
                                  key={subItem}
                                  href="#"
                                  className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#3d1a4e]"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {subItem}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
