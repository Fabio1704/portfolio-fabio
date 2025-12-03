import React from 'react'
import { motion } from 'framer-motion'

// Reusable Card with hover animation
export default function Card({children, className = ''}){
  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.995 }} className={`bg-white/5 rounded-lg p-4 shadow-sm hover:shadow-soft transition-shadow ${className}`}>
      {children}
    </motion.div>
  )
}
