import { useEffect, useRef } from 'react'
import '../assets/css/Cursor.css'

const HOVER = 'a, button, [role="button"], .folio-card'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pulseRef = useRef(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return undefined

    const root = document.documentElement
    const dot = dotRef.current
    const ring = ringRef.current
    const pulse = pulseRef.current
    if (!dot || !ring || !pulse) return undefined

    root.classList.add('has-cursor')

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf = 0

    const move = (event) => {
      x = event.clientX
      y = event.clientY
      root.classList.add('cursor-on')
    }

    const over = (event) => {
      root.classList.toggle('cursor-hover', Boolean(event.target.closest(HOVER)))
    }

    const down = () => {
      root.classList.add('cursor-down')
      root.classList.remove('cursor-click')
      void pulse.offsetWidth
      root.classList.add('cursor-click')
    }

    const up = () => root.classList.remove('cursor-down')
    const leave = () => root.classList.remove('cursor-on', 'cursor-hover', 'cursor-down', 'cursor-click')
    const clickDone = () => root.classList.remove('cursor-click')

    const tick = () => {
      const hover = root.classList.contains('cursor-hover')
      const ease = hover ? 0.16 : 0.2
      rx += (x - rx) * ease
      ry += (y - ry) * ease
      const follow = `translate3d(${x}px, ${y}px, 0)`
      dot.style.transform = follow
      pulse.style.transform = follow
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', move, { passive: true })
    document.addEventListener('pointerover', over)
    document.addEventListener('pointerdown', down)
    document.addEventListener('pointerup', up)
    document.addEventListener('mouseleave', leave)
    pulse.addEventListener('animationend', clickDone)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      root.classList.remove('has-cursor', 'cursor-on', 'cursor-hover', 'cursor-down', 'cursor-click')
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerover', over)
      document.removeEventListener('pointerdown', down)
      document.removeEventListener('pointerup', up)
      document.removeEventListener('mouseleave', leave)
      pulse.removeEventListener('animationend', clickDone)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
      <div className="cursor-pulse" ref={pulseRef} aria-hidden="true">
        <span />
      </div>
    </>
  )
}
