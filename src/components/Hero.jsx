import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion'
import profile from '../assets/profile.jpg'

const heroVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } }
}

export default function Hero(){
  return (
    <motion.section id="home" className="py-12" initial="hidden" animate="show" variants={heroVariant}>
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <motion.div className="flex-1" initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{delay:0.1}}>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">Bonjour — je suis Fabio Rakotoharimanga</h1>
          <p className="text-muted mb-4 text-sm sm:text-base">Portfolio développeur web Fabio Rakotoharimanga. Spécialisé développement front-end React, back-end Django, UI/UX design. Découvrez mes projets web modernes et compétences en JavaScript, Python.</p>
          <div className="flex gap-3 flex-wrap">
            <Button onClick={()=>{ const a = document.createElement('a'); a.href='/assets/CV.pdf'; a.download='CV.pdf'; a.click(); }}>Télécharger CV</Button>
            <a href="#projects" className="px-4 py-2 rounded-md border border-white/10 text-sm sm:text-base">Voir mes projets</a>
          </div>
        </motion.div>
        <motion.div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full bg-white/5 flex items-center justify-center overflow-hidden flex-shrink-0" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{delay:0.2}}>
          <img src={profile} alt="profile" className="w-full h-full object-cover" />
        </motion.div>
      </div>
    </motion.section>
  )
}
