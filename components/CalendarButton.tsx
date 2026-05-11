'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const CalendarButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hasScrollableContent =
        document.documentElement.scrollHeight > window.innerHeight + 1

      if (!hasScrollableContent) {
        setIsVisible(true)
        return
      }

      setIsVisible(window.scrollY > 120)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  if (!isVisible) return null

  return (
    <StyledWrapper>
      <Link
        href="/certification-program"
        aria-label="Schedule a meeting"
        className="link"
      >
        <button className="Btn">
          <span className="svgContainer">
            <svg viewBox="0 0 24 24" height="2.5em" className="svgIcon" fill="white">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/>
              <path d="M7 10h5v5H7z"/>
            </svg>
          </span>
          <span className="BG" />
        </button>
      </Link>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 80px;
  right: 20px;
  z-index: 40;

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

  .Btn:hover .BG {
    transform: rotate(35deg);
    transform-origin: bottom;
  }

  .Btn:hover .svgContainer {
    background-color: rgba(156, 156, 156, 0.466);
  }

  .svgIcon {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default CalendarButton
