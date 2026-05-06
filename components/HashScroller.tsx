"use client"

import { useEffect } from "react"

export default function HashScroller() {
  useEffect(() => {
    const headerOffset = 80 // matches header height (h-20)

    const scrollToHash = () => {
      const { hash } = window.location
      if (!hash) return
      const id = hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }

    // scroll on mount if there's a hash
    scrollToHash()

    // handle future hash changes
    window.addEventListener('hashchange', scrollToHash)
    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  return null
}
