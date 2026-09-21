import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Masonry from 'masonry-layout'
import { useLanguage } from '../context/LanguageContext'
import { PROJECT_IMAGES } from '../lib/projectImages'

const MOTION = [
  { dx: -50, dy: -40, rot: -8 },
  { dx: 50, dy: 40, rot: 8 },
  { dx: -50, dy: 40, rot: -8 },
  { dx: 50, dy: -40, rot: 8 },
]

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function projectLabel(projects, index) {
  if (projects[index]) return projects[index]
  const sample = projects[0] || ''
  return sample.replace(/\d+/, String(index + 1)) || String(index + 1).padStart(2, '0')
}

export default function ProjectGrid({ projects }) {
  const gridRef = useRef(null)
  const dialogRef = useRef(null)
  const { t } = useLanguage()
  const [active, setActive] = useState(null)
  const count = PROJECT_IMAGES.length

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return undefined

    const masonry = new Masonry(grid, {
      itemSelector: '.folio-item',
      columnWidth: '.folio-sizer',
      gutter: '.folio-gutter',
      percentPosition: true,
      transitionDuration: '0.35s',
    })

    const relayout = () => masonry.layout()
    const images = [...grid.querySelectorAll('.folio-image')]
    images.forEach((img) => {
      if (img.complete) return
      img.addEventListener('load', relayout)
      img.addEventListener('error', relayout)
    })
    relayout()

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', relayout)
        img.removeEventListener('error', relayout)
      })
      masonry.destroy()
    }
  }, [])

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      grid.style.setProperty('--folio-p', '1')
      return undefined
    }

    const update = () => {
      const top = grid.getBoundingClientRect().top
      const start = window.innerHeight * 0.8
      const end = window.innerHeight * 0.2
      grid.style.setProperty('--folio-p', String(clamp((start - top) / (start - end))))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (active != null) {
      if (!dialog.open) dialog.showModal()
    } else if (dialog.open) {
      dialog.close()
    }
  }, [active])

  useEffect(() => {
    if (active == null) return undefined

    const onKey = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setActive((index) => (index + 1) % count)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setActive((index) => (index - 1 + count) % count)
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, count])

  const close = () => setActive(null)
  const prev = () => setActive((index) => (index - 1 + count) % count)
  const next = () => setActive((index) => (index + 1) % count)
  const current = active != null ? projectLabel(projects, active) : ''
  const currentSrc = active != null ? PROJECT_IMAGES[active] : ''

  return (
    <>
      <div className="folio-grid" ref={gridRef}>
        <div className="folio-sizer" />
        <div className="folio-gutter" />
        {PROJECT_IMAGES.map((src, index) => {
          const motion = MOTION[index % MOTION.length]
          return (
            <div className="folio-item" key={`${src}-${index}`}>
              <button
                type="button"
                className="folio-card"
                style={{
                  '--dx': `${motion.dx}px`,
                  '--dy': `${motion.dy}px`,
                  '--rot': `${motion.rot}deg`,
                }}
                onClick={() => setActive(index)}
              >
                <img className="folio-image" src={src} alt="" />
                <span className="folio-title">{projectLabel(projects, index)}</span>
              </button>
            </div>
          )
        })}
      </div>

      {createPortal(
        <dialog
          ref={dialogRef}
          className="folio-lightbox"
          onClose={close}
          onClick={(event) => {
            if (event.target === dialogRef.current) close()
          }}
        >
          {currentSrc ? (
            <>
              <img className="folio-lightbox-image" src={currentSrc} alt={current} />
              <p className="folio-lightbox-caption">{current}</p>
            </>
          ) : null}
          <button type="button" className="folio-lightbox-close" onClick={close} aria-label={t.home.lightboxClose}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button type="button" className="folio-lightbox-nav folio-lightbox-prev" onClick={prev} aria-label={t.home.lightboxPrev}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className="folio-lightbox-nav folio-lightbox-next" onClick={next} aria-label={t.home.lightboxNext}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </dialog>,
        document.body,
      )}
    </>
  )
}
