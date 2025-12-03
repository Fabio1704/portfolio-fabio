import React, {useState} from 'react'
import projectsData from '../utils/projects.json'
import Card from './Card'
import { motion } from 'framer-motion'

const FILTERS = ['All','Web','Mobile','Django','Design']

const list = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0 }
}

export default function Projects(){
  const [filter, setFilter] = useState('All')
  const filtered = projectsData.filter(p => filter === 'All' ? true : p.tags.includes(filter))

  return (
    <section id="projects" className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-4 accent">Projets</h3>
        <div className="flex gap-2 mb-6 flex-wrap">
          {FILTERS.map(f => (
            <button key={f} onClick={()=>setFilter(f)} className={`px-3 py-1 rounded ${filter===f? 'bg-[var(--color-primary)] text-white':'bg-white/5 text-muted'}`}>{f}</button>
          ))}
        </div>
        <motion.div variants={list} initial="hidden" animate="show" className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <motion.div key={p.id} variants={item}>
              <Card className={`flex flex-col h-64 ${p.image ? 'relative overflow-hidden' : ''}`}>
                {p.image ? (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center filter blur-sm"
                      style={{ backgroundImage: `url(${p.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative z-10 flex flex-col h-full p-4 text-white">
                      <div className="flex-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">{p.title}</h4>
                        <p className="text-sm opacity-90 max-h-16 overflow-hidden mb-3">{p.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex gap-2 flex-wrap">
                            {p.tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-white/20 rounded">{t}</span>)}
                          </div>
                          <a className="accent px-3 py-1 border border-white/30 rounded text-sm hover:bg-white/10" href={p.link}>Voir</a>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Thumbnail / placeholder area - keeps cards visually consistent */}
                    <div className="h-32 bg-white/3 rounded-md overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center text-muted text-sm">
                        Pas d'image
                      </div>
                    </div>

                    <div className="flex-1 mt-3">
                      <h4 className="font-bold text-lg">{p.title}</h4>
                      <p className="text-sm text-muted max-h-12 overflow-hidden">{p.description}</p>
                    </div>

                    <div className="mt-3 flex items-center">
                      <div className="flex gap-2">
                        {p.tags.map(t=> <span key={t} className="text-xs px-2 py-1 bg-white/5 rounded">{t}</span>)}
                      </div>
                      <a className="ml-auto accent px-3 py-1 border rounded text-sm" href={p.link}>Voir</a>
                    </div>
                  </>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
