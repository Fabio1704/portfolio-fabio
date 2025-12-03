import React from 'react'
import { motion } from 'framer-motion'

// Reusable button component with framer-motion
export default function Button({children, onClick, className = '', variant = 'primary', ...props}){
  const base = 'px-4 py-2 rounded-md text-white '
  const variants = {
    primary: 'bg-[var(--color-primary)] hover:bg-[var(--color-accent)]',
    ghost: 'bg-transparent border border-white/10 text-muted'
  }
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ translateY: -2 }}
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
