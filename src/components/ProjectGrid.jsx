import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../context/LanguageContext'
const IMAGE_MAP = import.meta.glob('../assets/img/project/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const IMAGES = Object.entries(IMAGE_MAP)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

const LAYOUT = [
  { span: 3, dx: -50, dy: -40, rot: -8 },
  { span: 3, dx: 50, dy: 40, rot: 8 },
  { span: 6, dx: -50, dy: 40, rot: -8 },
  { span: 6, dx: 50, dy: -40, rot: 8 },
  { span: 3, dx: -50, dy: 40, rot: -8 },
  { span: 3, dx: 50, dy: 40, rot: 8 },
  { span: 3, dx: -50, dy: -40, rot: -8 },
  { span: 3, dx: 50, dy: 40, rot: 8 },
  { span: 6, dx: -50, dy: 40, rot: -8 },
]

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

export default function ProjectGrid({ projects }) {
  const gridRef = useRef(null)
  const dialogRef = useRef(null)
  const { t } = useLanguage()
  const [active, setActive] = useState(null)
  const count = projects.length

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      grid.style.setProperty('--folio-p', '1')
      return
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
  const current = active != null ? projects[active] : ''
  const currentSrc = active != null ? IMAGES[active] : ''

  return (
    <>
      <div className="folio-grid" ref={gridRef}>
        {projects.map((project, index) => {
          const layout = LAYOUT[index % LAYOUT.length]
          return (
            <button
              key={`${project}-${index}`}
              type="button"
              className={`folio-card folio-span-${layout.span}`}
              style={{
                '--dx': `${layout.dx}px`,
                '--dy': `${layout.dy}px`,
                '--rot': `${layout.rot}deg`,
              }}
              onClick={() => setActive(index)}
            >
              {IMAGES[index] ? (
                <img className="folio-image" src={IMAGES[index]} alt="" />
              ) : null}
              <span className="folio-title">{project}</span>
            </button>
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
