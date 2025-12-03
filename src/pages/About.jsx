import React from 'react'
import SectionTitle from '../components/SectionTitle'
import { motion } from 'framer-motion'
import { FaReact, FaGitAlt } from 'react-icons/fa'
import { SiDjango, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiCss3, SiPhp, SiDocker } from 'react-icons/si'
import Button from '../components/Button'
import Count from '../components/Count'
import { useNavigate } from 'react-router-dom'
import profile from '../assets/profile.jpg'

export default function About(){
  const navigate = useNavigate()
  const handleContactClick = () => {
    navigate('/', { state: { scrollToContact: true } })
    // Fallback: try scroll after delay
    setTimeout(() => {
      const contactEl = document.getElementById('contact')
      if(contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 200)
  }
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <SectionTitle>À propos</SectionTitle>

      <motion.div
          className="grid gap-8 grid-cols-1 items-start"
          initial="hidden"
          animate="show"
          exit="exit"
          variants={{
            hidden: { opacity: 0, y: 8 },
            show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08, when: 'beforeChildren' } },
            exit: { opacity: 0, y: 8, transition: { when: 'afterChildren' } }
          }}
        >
          {/* Photo + CTA */}
          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 6 } }}>
            <div className="bg-card p-4 rounded-md flex flex-col items-center text-center">
            <img src={profile} alt="Fabio Rakotoharimanga" className="w-48 h-48 rounded-full object-cover mb-4" />
            <h3 className="font-semibold text-lg">Fabio Rakotoharimanga</h3>
            <p className="text-sm text-muted mb-4">Développeur Web · UI/UX · Django & React</p>
            <div className="flex flex-col gap-2 w-full">
              <Button onClick={()=>{ const a = document.createElement('a'); a.href='/assets/CV.pdf'; a.download='CV.pdf'; a.click(); }}>Télécharger CV</Button>
              <button onClick={handleContactClick} className="text-center px-4 py-2 rounded-md border border-white/10 text-sm hover:bg-white/5 transition-colors">Me contacter</button>
            </div>

          </div>
        </motion.div>

        {/* Bio + metrics */}
          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 6 } }}>
            <div className="prose prose-invert max-w-none text-muted">
            <p>Portfolio développeur web Fabio Rakotoharimanga. Je conçois et développe des applications web modernes en combinant design et génie logiciel — front-ends réactifs avec React, back-ends robustes avec Django, et interfaces soignées produites avec Figma / Photoshop.</p>

             <p>Développement web full-stack : React, Django, JavaScript, Python. Approche pragmatique privilégiant performance, accessibilité et maintenabilité. Travail en équipe, patterns réutilisables, composants documentés.</p>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold"><Count end={10} duration={900} suffix="+"/></div>
                <div className="text-sm text-muted">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold"><Count end={5} duration={900} suffix=" ans"/></div>
                <div className="text-sm text-muted">d'expérience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">—</div>
                <div className="text-sm text-muted">Disponible</div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Tech stack + timeline */}
          <motion.div variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 6 } }}>
          <h4 className="text-lg font-medium mb-3">Tech stack</h4>
          <div className="flex flex-wrap gap-3 mb-6">
            <div className="flex items-center gap-2 bg-white/3 rounded px-3 py-2"><FaReact/> React</div>
            <div className="flex items-center gap-2 bg-white/3 rounded px-3 py-2"><SiDjango/> Django</div>
            <div className="flex items-center gap-2 bg-white/3 rounded px-3 py-2"><SiCss3/> CSS</div>
            <div className="flex items-center gap-2 bg-white/3 rounded px-3 py-2"><SiPhp/> PHP</div>
            <div className="flex items-center gap-2 bg-white/3 rounded px-3 py-2"><SiDocker/> Docker</div>
            <div className="flex items-center gap-2 bg-white/3 rounded px-3 py-2"><FaGitAlt/> Git</div>
            <div className="flex items-center gap-2 bg-white/3 rounded px-3 py-2"><SiFigma/> Figma</div>
          </div>

          <h4 className="text-lg font-medium mb-3">Parcours</h4>
          <ol className="list-decimal list-inside text-sm text-muted space-y-2">
            <li><strong>2024 — Aujourd'hui</strong> : Projets freelance et développement d'applications React + Django.</li>
            <li><strong>2024 — 2025</strong> : Ingénieur web — développement d'APIs et front-ends pour plusieurs clients.</li>
            <li><strong>2023-2024</strong> : Débuts professionnels — intégration, petits produits et design.</li>
          </ol>
      </motion.div>
      </motion.div>
    </div>
  )
}
