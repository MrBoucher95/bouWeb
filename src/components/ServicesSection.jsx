import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/ServicesSection.css'

const BURST = [
  { rot: -22, scale: 0.72, ox: -120, oy: 40 },
  { rot: 18, scale: 0.64, ox: 160, oy: -130 },
  { rot: 24, scale: 0.62, ox: 220, oy: -40 },
  { rot: -16, scale: 0.66, ox: 80, oy: 160 },
  { rot: 20, scale: 0.64, ox: 240, oy: 150 },
]

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function lerp(from, to, t) {
  return from + (to - from) * t
}

function easeToPlace(p) {
  const x = clamp(p)
  return 1 - (1 - x) * (1 - x) * (1 - x)
}

function pinProgress(el) {
  const rect = el.getBoundingClientRect()
  const total = rect.height - window.innerHeight
  if (total <= 1) return 1
  return clamp((-rect.top / total) * 1.12)
}

function viewProgress(el) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const start = vh * 0.9
  const end = vh * 0.28
  return clamp((start - rect.top) / (start - end))
}

function localProgress(p, index, count) {
  const delay = index * 0.055
  const span = 1 - (count - 1) * 0.055
  return clamp((p - delay) / span)
}

export default function ServicesSection() {
  const { t, lang } = useLanguage()
  const { home, home2 } = t
  const [first, ...rest] = home.services
  const rootRef = useRef(null)
  const pinRef = useRef(null)
  const gridRef = useRef(null)
  const cardsRef = useRef([])

  useLayoutEffect(() => {
    const root = rootRef.current
    const pin = pinRef.current
    const grid = gridRef.current
    if (!root || !pin || !grid) return undefined

    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const offsets = []
    let ticking = false
    let placed = false
    let cancelled = false
    let frame = 0

    const cards = () => cardsRef.current.filter(Boolean)

    const measure = () => {
      const nodes = cards()
      nodes.forEach((card) => {
        card.style.transform = 'none'
      })
      const gridRect = grid.getBoundingClientRect()
      const cx = gridRect.left + gridRect.width / 2
      const cy = gridRect.top + gridRect.height / 2
      offsets.length = 0
      nodes.forEach((card) => {
        const rect = card.getBoundingClientRect()
        offsets.push({
          dx: cx - (rect.left + rect.width / 2),
          dy: cy - (rect.top + rect.height / 2),
        })
      })
    }

    const apply = () => {
      ticking = false
      const nodes = cards()
      if (!nodes.length) return

      const reduced = media.matches
      const compact = window.matchMedia('(max-width: 900px)').matches
      const p = reduced ? 1 : compact ? viewProgress(grid) : pinProgress(pin)
      const done = p >= 0.995

      root.style.setProperty('--assemble', p.toFixed(4))
      root.classList.toggle('is-placed', done)
      root.classList.add('is-ready')

      if (reduced || done) {
        if (!placed || reduced) {
          nodes.forEach((card) => {
            card.style.transform = ''
            card.style.opacity = ''
          })
          placed = true
        }
        return
      }

      placed = false
      const k = Math.min(1.2, Math.max(0.6, grid.offsetWidth / 900))
      const spread = compact ? 1.55 : 2.85

      nodes.forEach((card, index) => {
        const burst = BURST[index] || BURST[0]
        const offset = offsets[index] || { dx: 0, dy: 0 }
        const t = easeToPlace(localProgress(p, index, nodes.length))
        const x = lerp(-offset.dx * (spread - 1) + burst.ox * k, 0, t)
        const y = lerp(-offset.dy * (spread - 1) + burst.oy * k, 0, t)
        const rot = lerp(compact ? burst.rot * 0.6 : burst.rot, 0, t)
        const scale = lerp(compact ? 0.82 : burst.scale, 1, t)
        card.style.opacity = String(lerp(0.55, 1, t))
        card.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`
      })
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      frame = requestAnimationFrame(apply)
    }

    const onResize = () => {
      if (cancelled) return
      measure()
      apply()
    }

    measure()
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    media.addEventListener('change', onResize)
    const ro = new ResizeObserver(onResize)
    ro.observe(grid)
    document.fonts?.ready.then(onResize)

    return () => {
      cancelled = true
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      media.removeEventListener('change', onResize)
      ro.disconnect()
    }
  }, [lang])

  const setCard = (index) => (node) => {
    cardsRef.current[index] = node
  }

  return (
    <section
      id="mb-services"
      className="mb-services mb-svc-bento"
      aria-labelledby="mb-services-title"
      ref={rootRef}
    >
      <div className="mb-svc-explode" ref={pinRef}>
        <div className="mb-svc-explode-stage">
          <div className="container">
            <p className="tag">{home.servicesEyebrow}</p>
            <h2 id="mb-services-title">{home2.servicesTitle}</h2>
            <div className="mb-svc-bento-grid" ref={gridRef}>
              <Link
                ref={setCard(0)}
                className={`mb-svc mb-svc--${first.slug} mb-svc-bento-main`}
                to={`/services/${first.slug}`}
              >
                <p className="mb-svc-index">01</p>
                <h3>{first.title}</h3>
                <p>{first.text}</p>
                <span>{first.cta}</span>
              </Link>
              <div className="mb-svc-bento-side">
                {rest.map((service, index) => (
                  <Link
                    key={service.slug}
                    ref={setCard(index + 1)}
                    className={`mb-svc mb-svc--${service.slug}`}
                    to={`/services/${service.slug}`}
                  >
                    <p className="mb-svc-index">{String(index + 2).padStart(2, '0')}</p>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <span>{service.cta}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
