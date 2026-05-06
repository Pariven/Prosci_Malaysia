'use client'

import { useState, useEffect } from 'react'
import styles from '@/styles/whatsapp-button.module.css'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/60362284148?text=Hello%20Prosci"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.btn}
    >
      <div className={styles.sign}>
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.025 0-2.035.356-2.896 1.104l-.177.141-1.796-.474.483 1.74-.112.175c-.841 1.31-1.286 2.822-1.286 4.438 0 4.418 3.582 8 8 8 .213 0 .425-.01.636-.025 3.85-.301 6.975-3.577 6.975-7.45 0-4.085-3.327-7.409-7.42-7.409M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Z" />
        </svg>
      </div>
      <div className={styles.text}>Contact Us</div>
    </a>
  )
}
