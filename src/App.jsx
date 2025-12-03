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
        <meta name="description" content="Portfolio de Fabio Rakotoharimanga, développeur web spécialisé en React et Django." />
        <meta name="author" content="Fabio Rakotoharimanga" />
        <meta property="og:title" content="Fabio Rakotoharimanga - Portfolio" />
        <meta property="og:description" content="Portfolio développeur web React Django." />
        <meta property="og:url" content="https://portfolio-fabio-inky.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://portfolio-fabio-inky.vercel.app" />
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
