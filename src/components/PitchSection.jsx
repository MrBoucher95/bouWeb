import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Pitch.css'

export default function PitchSection() {
  const { t } = useLanguage()
  const { home2 } = t
  const root = useRef(null)
  const [first, ...rest] = home2.pillars

  useEffect(() => {
    const node = root.current
    if (!node) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-in')
      return undefined
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-in')
          observer.disconnect()
        }
      },
      { threshold: 0.22 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="mb-pitch mb-pitch-bento" ref={root} aria-labelledby="mb-pitch-title">
      <div className="container">
        <p className="tag">{home2.pitchEyebrow}</p>
        <h2 id="mb-pitch-title">{home2.pitchTitle}</h2>
        <p className="mb-copy">{home2.pitchLead}</p>
        <div className="mb-pitch-bento-grid">
          <article className="mb-pitch-bento-main">
            <p className="mb-pitch-index">01</p>
            <h3>{first.title}</h3>
            <p>{first.text}</p>
          </article>
          <div className="mb-pitch-bento-side">
            {rest.map((pillar, index) => (
              <article key={pillar.title}>
                <p className="mb-pitch-index">{String(index + 2).padStart(2, '0')}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
