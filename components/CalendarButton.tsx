'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const CalendarButton = () => {
  const [isCalendarVisible, setIsCalendarVisible] = useState(false)
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hasScrollableContent =
        document.documentElement.scrollHeight > window.innerHeight + 1

      if (!hasScrollableContent) {
        setIsCalendarVisible(true)
        setIsScrollTopVisible(false)
        return
      }

      const shouldShowFloatingButtons = window.scrollY > 120
      setIsCalendarVisible(shouldShowFloatingButtons)
      setIsScrollTopVisible(shouldShowFloatingButtons)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (!isCalendarVisible && !isScrollTopVisible) return null

  return (
    <StyledWrapper>
      {isScrollTopVisible && (
        <button
          type="button"
          aria-label="Scroll to top"
          className="Btn BtnTop"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="svgContainer">
            <svg viewBox="0 0 24 24" height="1.2em" className="svgIcon" fill="white">
              <path d="M12 4l-7 7 1.41 1.41L11 7.83V20h2V7.83l4.59 4.58L19 11l-7-7z" />
            </svg>
          </span>
        </button>
      )}

      {isCalendarVisible && (
        <Link
          href="/certification-program"
          aria-label="Schedule a meeting"
          className="link"
        >
          <button className="Btn">
            <span className="svgContainer">
              <svg viewBox="0 0 24 24" height="2.5em" className="svgIcon" fill="white">
                <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z" />
                <path d="M7 10h5v5H7z" />
              </svg>
            </span>
            <span className="BG" />
          </button>
        </Link>
      )}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 40;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;

  .link {
    text-decoration: none;
  }

  .Btn {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    position: relative;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .BtnTop {
    width: 48px;
    height: 48px;
    border-radius: 9999px;
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
    overflow: hidden;
  }

  .svgContainer {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    backdrop-filter: blur(4px);
    letter-spacing: 0.8px;
    border-radius: 10px;
    transition: all 0.3s;
    border: 1px solid rgba(156, 156, 156, 0.466);
  }

  .BtnTop .svgContainer {
    border: none;
    backdrop-filter: none;
    background-color: transparent;
    border-radius: 9999px;
  }

  .BG {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: -1;
    border-radius: 9px;
    pointer-events: none;
    transition: all 0.3s;
  }

  .BGTop {
    background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%);
  }

  .Btn:hover {
    transform: translateY(-2px);
  }

  .svgIcon {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default CalendarButton
