import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useTheme from '../hooks/useTheme'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

export default function Navbar(){
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-card/80 border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-extrabold text-xl accent">Fabio Rakotoharimanga</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-4 items-center">
          <NavLink to="/" className={({isActive}) => isActive ? 'accent' : 'text-muted'}>Accueil</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'accent' : 'text-muted'}>À propos</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? 'accent' : 'text-muted'}>Projets</NavLink>
          <button aria-label="Toggle theme" title="Toggle theme" onClick={toggle} className="ml-2 p-2 rounded bg-white/5 hover:bg-white/7 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
            {theme === 'light' ? <FaSun className="text-[var(--color-primary)]"/> : <FaMoon className="text-[var(--color-primary)]"/>}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <button aria-label="Toggle theme" onClick={toggle} className="p-2 rounded bg-white/5 hover:bg-white/7 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]">
            {theme === 'light' ? <FaSun className="text-[var(--color-primary)]"/> : <FaMoon className="text-[var(--color-primary)]"/>}
          </button>
          <button aria-label="Open menu" onClick={()=>setOpen(o=>!o)} className="p-2 rounded bg-white/5 hover:bg-white/7 focus:outline-none">
            {open ? <FaTimes/> : <FaBars/>}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-card/95 border-t border-white/5">
          <div className="px-4 py-3 flex flex-col gap-3">
            <NavLink onClick={()=>setOpen(false)} to="/" className={({isActive}) => isActive ? 'accent' : 'text-muted'}>Accueil</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/about" className={({isActive}) => isActive ? 'accent' : 'text-muted'}>À propos</NavLink>
            <NavLink onClick={()=>setOpen(false)} to="/projects" className={({isActive}) => isActive ? 'accent' : 'text-muted'}>Projets</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
