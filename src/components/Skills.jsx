import React from 'react'
import { FaReact, FaJs, FaPython, FaGitAlt } from 'react-icons/fa'
import { SiDjango, SiFigma, SiAdobephotoshop, SiAdobeillustrator, SiCss3, SiPhp, SiDocker } from 'react-icons/si'
import Card from './Card'
import { motion } from 'framer-motion'

const GROUPS = [
  {
    id: 'front',
    title: 'Front-end',
    skills: [
      { key: 'react', name: 'React', icon: <FaReact size={28}/> },
      { key: 'javascript', name: 'JavaScript', icon: <FaJs size={28}/> }
          ,{ key: 'css', name: 'CSS', icon: <SiCss3 size={28}/> }
    ]
  },
  {
    id: 'back',
    title: 'Back-end',
    skills: [
      { key: 'python', name: 'Python', icon: <FaPython size={28}/> },
      { key: 'django', name: 'Django', icon: <SiDjango size={28}/> },
      { key: 'php', name: 'PHP', icon: <SiPhp size={28}/> }
    ]
  },
  {
    id: 'design',
    title: 'Design',
    skills: [
      { key: 'figma', name: 'Figma', icon: <SiFigma size={28}/> },
      { key: 'photoshop', name: 'Photoshop', icon: <SiAdobephotoshop size={28}/> },
      { key: 'illustrator', name: 'Illustrator', icon: <SiAdobeillustrator size={28}/> }
    ]
  }
]

// Tools / Others group (version control, CLI, etc.)
const TOOLS = {
  id: 'tools',
  title: 'Outils',
  skills: [
    { key: 'git', name: 'Git', icon: <FaGitAlt size={28}/> },
    { key: 'docker', name: 'Docker', icon: <SiDocker size={28}/> }
  ]
}

export default function Skills(){
  return (
    <section id="skills" className="py-10">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6 accent">Compétences</h3>

        <div className="grid gap-8 md:grid-cols-4">
          {[...GROUPS, TOOLS].map(column => (
            <div key={column.id}>
              <h4 className="text-lg font-medium mb-4">{column.title}</h4>
              <motion.div className="grid grid-cols-2 sm:grid-cols-1 gap-3" initial={{opacity:0}} animate={{opacity:1, transition:{delay:0.05}}}>
                {column.skills.map(s => (
                  <Card key={s.key} className="flex items-center gap-3 p-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `var(--skill-${s.key}-bg)` }}>
                      <div style={{ color: `var(--skill-${s.key})` }}>{s.icon}</div>
                    </div>
                    <div>
                      <div className="font-medium">{s.name}</div>
                    </div>
                  </Card>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
