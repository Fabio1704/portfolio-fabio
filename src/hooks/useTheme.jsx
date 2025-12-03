import { useEffect, useState } from 'react'

// Hook to manage light/dark theme with localStorage
export default function useTheme(){
  const [theme, setTheme] = useState(() => {
    try{
      return localStorage.getItem('theme') || 'dark'
    }catch{
      return 'dark'
    }
  })

  useEffect(()=>{
    const root = document.body
    if(theme === 'light'){
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    try{ localStorage.setItem('theme', theme) }catch{}
  },[theme])

  const toggle = ()=> setTheme(t => t === 'light' ? 'dark' : 'light')
  return { theme, toggle }
}
