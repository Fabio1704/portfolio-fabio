import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Home from './pages/Home'
import About from './pages/About'
import ProjectsPage from './pages/ProjectsPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function App(){
  const location = useLocation()
  return (
    <>
      <Helmet>
        <title>Fabio Rakotoharimanga - Portfolio</title>
        <meta name="description" content="Développeur Web spécialisé en React, Django et UI/UX. Découvrez mes projets et compétences en développement front-end et back-end." />
        <meta name="keywords" content="développeur web, React, Django, UI/UX, portfolio, Fabio Rakotoharimanga" />
        <meta name="author" content="Fabio Rakotoharimanga" />
        <meta property="og:title" content="Fabio Rakotoharimanga - Portfolio" />
        <meta property="og:description" content="Développeur Web spécialisé en React, Django et UI/UX." />
        <meta property="og:image" content="/assets/og-image-1200.png" />
        <meta property="og:url" content="https://fabio-rakotoharimanga.dev" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://fabio-rakotoharimanga.dev" />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/projects" element={<ProjectsPage/>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </>
  )
}
