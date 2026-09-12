import { useEffect, useRef, useState } from 'react'
import mark from '../assets/img/mb_logo.svg'

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function smoothstep(t) {
  return t * t * (3 - 2 * t)
}

export function useLogoScroll() {
  const openingRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) setEntered(true)

    const update = () => {
      const opening = openingRef.current
      if (!opening) return
      const traveled = -opening.getBoundingClientRect().top
      const range = Math.max(opening.offsetHeight, window.innerHeight) * 2.2
      const next = clamp(traveled / range)
      setProgress(reduced ? next : smoothstep(next))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return { openingRef, progress, entered }
}

export function LogoPlane() {
  return (
    <div className="logo-sticky" aria-hidden="true">
      <div className="logo-plane">
        <span className="logo-hair logo-hair-t" />
        <span className="logo-hair logo-hair-b" />
        <span className="logo-hair logo-hair-l" />
        <span className="logo-hair logo-hair-r" />

        <span className="logo-grid logo-grid-h" style={{ top: '16%', '--d': '0.38s' }} />
        <span className="logo-grid logo-grid-h" style={{ top: '33%', '--d': '0.46s' }} />
        <span className="logo-grid logo-grid-h" style={{ top: '50%', '--d': '0.54s' }} />
        <span className="logo-grid logo-grid-h" style={{ top: '67%', '--d': '0.62s' }} />
        <span className="logo-grid logo-grid-h" style={{ top: '84%', '--d': '0.7s' }} />
        <span className="logo-grid logo-grid-v" style={{ left: '14%', '--d': '0.42s' }} />
        <span className="logo-grid logo-grid-v" style={{ left: '32%', '--d': '0.5s' }} />
        <span className="logo-grid logo-grid-v" style={{ left: '50%', '--d': '0.58s' }} />
        <span className="logo-grid logo-grid-v" style={{ left: '68%', '--d': '0.66s' }} />
        <span className="logo-grid logo-grid-v" style={{ left: '86%', '--d': '0.74s' }} />

        <span className="logo-dot" style={{ top: '0%', left: '0%' }} />
        <span className="logo-dot" style={{ top: '0%', left: '50%' }} />
        <span className="logo-dot" style={{ top: '0%', left: '100%' }} />
        <span className="logo-dot" style={{ top: '16%', left: '14%' }} />
        <span className="logo-dot" style={{ top: '16%', left: '86%' }} />
        <span className="logo-dot" style={{ top: '33%', left: '32%' }} />
        <span className="logo-dot" style={{ top: '33%', left: '68%' }} />
        <span className="logo-dot" style={{ top: '50%', left: '0%' }} />
        <span className="logo-dot" style={{ top: '50%', left: '50%' }} />
        <span className="logo-dot" style={{ top: '50%', left: '100%' }} />
        <span className="logo-dot" style={{ top: '67%', left: '32%' }} />
        <span className="logo-dot" style={{ top: '67%', left: '68%' }} />
        <span className="logo-dot" style={{ top: '84%', left: '14%' }} />
        <span className="logo-dot" style={{ top: '84%', left: '86%' }} />
        <span className="logo-dot" style={{ top: '100%', left: '0%' }} />
        <span className="logo-dot" style={{ top: '100%', left: '50%' }} />
        <span className="logo-dot" style={{ top: '100%', left: '100%' }} />

        <img className="logo-glyph" src={mark} alt="" />
      </div>
    </div>
  )
}
