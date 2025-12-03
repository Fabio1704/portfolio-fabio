import React, { useEffect, useRef, useState } from 'react'

export default function Count({ end = 0, duration = 1000, suffix = '' }){
  const [value, setValue] = useState(0)
  const rafRef = useRef()
  const startRef = useRef()

  useEffect(()=>{
    const start = performance.now()
    startRef.current = start
    const tick = (now)=>{
      const elapsed = now - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const current = Math.round(progress * end)
      setValue(current)
      if(progress < 1){
        rafRef.current = requestAnimationFrame(tick)
      }
    }
    rafRef.current = requestAnimationFrame(tick)
    return ()=> cancelAnimationFrame(rafRef.current)
  },[end,duration])

  return (
    <span>{value.toLocaleString()}{suffix}</span>
  )
}
