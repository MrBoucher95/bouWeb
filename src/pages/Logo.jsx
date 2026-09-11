import { useEffect, useRef, useState } from 'react'
import mark from '../assets/img/mb_logo.svg'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Logo.css'

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

export default function Logo() {
  const { t } = useLanguage()
  const { logo } = t
  const openingRef = useRef(null)
  const [progress, setProgress] = useState(0)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    document.title = logo.metaTitle
    return () => {
      document.title = t.meta.title
    }
  }, [logo.metaTitle, t.meta.title])

  useEffect(() => {
    const frame = requestAnimationFrame(() => setEntered(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1)
      setEntered(true)
      return
    }

    const update = () => {
      const opening = openingRef.current
      if (!opening) return
      const traveled = -opening.getBoundingClientRect().top
      setProgress(clamp(traveled / (window.innerHeight * 0.72)))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className={`logo-page${entered ? ' is-in' : ''}`} style={{ '--p': progress }}>
      <div className="logo-pin">
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

        <header className="logo-opening" ref={openingRef}>
          <h1 className="logo-opening-title">{logo.title}</h1>
        </header>

        <section className="logo-chapter">
          <div className="logo-rule" />
          <div className="logo-copy">
            <h2>{logo.lead}</h2>
          </div>
        </section>

        <section className="logo-chapter">
          <div className="logo-rule" />
          <div className="logo-copy">
            <p className="logo-note">{logo.systemEyebrow}</p>
            <h3>{logo.systemTitle}</h3>
            <p>{logo.systemText}</p>
          </div>
        </section>
      </div>

      <main className="logo-body">
        <section className="logo-chapter logo-chapter-release">
          <div className="logo-rule" />
          <div className="logo-copy">
            <p className="logo-pill">{logo.versionEyebrow}</p>
            <h3>{logo.versionTitle}</h3>
            <p>{logo.versionText}</p>
          </div>
        </section>

        <section className="logo-chapter logo-chapter-end">
          <div className="logo-rule" />
          <div className="logo-copy logo-copy-wide">
            <p className="logo-pill">{logo.useEyebrow}</p>
            <h3>{logo.useTitle}</h3>
            <p>{logo.useText}</p>
            <ul className="logo-rules">
              {logo.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
            <div className="logo-pair">
              <figure className="logo-swatch dark">
                <img src={mark} alt="" />
              </figure>
              <figure className="logo-swatch light">
                <img src={mark} alt="" />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
