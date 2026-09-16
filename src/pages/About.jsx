import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useLanguage } from '../context/LanguageContext'
import portrait from '../assets/img/mathboucher.jpg'

export default function About() {
  const { t } = useLanguage()
  const { about, home, home2 } = t
  const layoutRef = useRef(null)

  useLayoutEffect(() => {
    const layout = layoutRef.current
    if (!layout) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      layout.classList.add('is-in')
      layout.style.setProperty('--about-shift', '0px')
      return
    }

    let ticking = false

    const reveal = () => {
      const top = layout.getBoundingClientRect().top
      if (top < window.innerHeight * 0.92) layout.classList.add('is-in')
    }

    const update = () => {
      reveal()
      const rect = layout.getBoundingClientRect()
      const shift = ((rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight) * -40
      layout.style.setProperty('--about-shift', `${shift.toFixed(2)}px`)
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <PageShell>
      <header className="mb-hero">
        <p className="mb-news">
          {about.eyebrow}
          <span>{about.role}</span>
        </p>
        <h1 className="mb-title">{about.name}</h1>
      </header>
      <div className="container pb-5">
        <section className="about-layout" ref={layoutRef}>
          <figure className="about-portrait">
            <img src={portrait} alt={about.name} />
          </figure>
          <div className="about-body mb-content">
            <h2>{about.title}</h2>
            <p className="mb-proof about-values">{about.values}</p>
            <div className="about-copy mb-copy">
              <p>{about.p1}</p>
              <p>{about.p2}</p>
            </div>
          </div>
        </section>
      </div>

      <section className="mb-invite" aria-labelledby="mb-invite-title">
        <div className="container">
          <div className="mb-invite-card">
            <h2 id="mb-invite-title">{home2.footerTitle}</h2>
            <p>{home2.footerText}</p>
            <div className="mb-invite-cta">
              <Link className="mb-btn mb-btn-fill" to="/contact">
                {home.ctaContact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
