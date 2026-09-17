import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Pitch.css'

const FLIP_MS = 720
const FLIP_EASE = 'cubic-bezier(0.22, 1, 0.36, 1)'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function readSnapshots(grid) {
  return [...grid.querySelectorAll('.mb-pitch-card')].map((card) => ({
    card,
    rect: card.getBoundingClientRect(),
  }))
}

function playFlip(snapshots) {
  snapshots.forEach(({ card, rect: first }) => {
    const last = card.getBoundingClientRect()
    const dx = first.left - last.left
    const dy = first.top - last.top
    const sx = first.width / last.width
    const sy = first.height / last.height
    if (
      Math.abs(dx) < 0.5 &&
      Math.abs(dy) < 0.5 &&
      Math.abs(sx - 1) < 0.01 &&
      Math.abs(sy - 1) < 0.01
    ) {
      return
    }

    card.getAnimations().forEach((animation) => animation.cancel())
    card.style.transformOrigin = 'top left'
    card.animate(
      [{ transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` }, { transform: 'none' }],
      { duration: FLIP_MS, easing: FLIP_EASE },
    )
  })
}

export default function PitchSection() {
  const { t } = useLanguage()
  const { home2 } = t
  const root = useRef(null)
  const grid = useRef(null)
  const pendingFlip = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [inView, setInView] = useState(false)
  const [paused, setPaused] = useState(false)
  const [hidden, setHidden] = useState(() =>
    typeof document === 'undefined' ? false : document.hidden,
  )

  const playing = inView && !paused && !hidden

  useEffect(() => {
    const node = root.current
    if (!node) return undefined
    if (prefersReducedMotion()) {
      node.classList.add('is-in')
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) node.classList.add('is-in')
        setInView(entry.isIntersecting)
      },
      { threshold: 0.22 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useLayoutEffect(() => {
    const snapshots = pendingFlip.current
    pendingFlip.current = null
    if (!snapshots || prefersReducedMotion()) return
    playFlip(snapshots)
  }, [activeIndex])

  const goTo = (index) => {
    if (index === activeIndex) return
    if (grid.current && !prefersReducedMotion()) {
      pendingFlip.current = readSnapshots(grid.current)
    }
    setActiveIndex(index)
  }

  return (
    <section className="mb-pitch mb-pitch-bento" ref={root} aria-labelledby="mb-pitch-title">
      <div className="container">
        <p className="tag">{home2.pitchEyebrow}</p>
        <h2 id="mb-pitch-title">{home2.pitchTitle}</h2>
        <p className="mb-copy">{home2.pitchLead}</p>
        <div
          ref={grid}
          className={`mb-pitch-bento-grid${playing ? ' is-playing' : ''}`}
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
          }}
          onAnimationEnd={(event) => {
            if (event.animationName !== 'mb-pitch-progress') return
            goTo((activeIndex + 1) % home2.pillars.length)
          }}
        >
          {home2.pillars.map((pillar, index) => {
            const active = index === activeIndex
            return (
              <article
                key={pillar.title}
                className={`mb-pitch-card${active ? ' is-active' : ''}`}
                aria-current={active ? 'true' : undefined}
                tabIndex={0}
                onClick={() => goTo(index)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault()
                    goTo(index)
                  }
                }}
              >
                <div className="mb-pitch-card-body">
                  <p className="mb-pitch-index">{String(index + 1).padStart(2, '0')}</p>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <div className="mb-pitch-progress" aria-hidden="true">
                    <span />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
