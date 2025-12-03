import React from 'react'
import { motion } from 'framer-motion'

const titleVar = { hidden: { opacity: 0, y: 6 }, show: { opacity:1, y:0 } }

export default function SectionTitle({children, subtitle}){
  return (
    <motion.div className="mb-6" initial="hidden" animate="show" variants={titleVar}>
      <h2 className="text-3xl font-bold">{children}</h2>
      {subtitle && <p className="text-sm text-muted mt-1">{subtitle}</p>}
    </motion.div>
  )
}
