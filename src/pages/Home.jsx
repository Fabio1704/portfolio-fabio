import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import ScrollToTop from '../components/ScrollToTop'

export default function Home(){
  const location = useLocation()
  const hasScrolled = useRef(false)

  useEffect(() => {
    // Only scroll to contact if navigated from About page (via location.state)
    // not on page refresh
    if (location.state?.scrollToContact && !hasScrolled.current) {
      hasScrolled.current = true
      setTimeout(() => {
        const contactEl = document.getElementById('contact')
        if (contactEl) {
          contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [location.state?.scrollToContact])

  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  )
}
