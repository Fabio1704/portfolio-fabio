import React from 'react'

export default function Footer(){
  return (
    <footer className="border-t border-white/5 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-4 text-center text-sm text-gray-400">© {new Date().getFullYear()} — Built with React + Vite</div>
    </footer>
  )
}
