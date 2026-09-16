import { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import Home2Footer from '../components/Home2Footer'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Home2.css'

const IMAGE_MAP = import.meta.glob('../assets/img/project/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const IMAGES = Object.entries(IMAGE_MAP)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

export default function Home2() {
  const { t } = useLanguage()
  const { home, home2 } = t
  const quote = home.quotes[0]
  const rowA = [...IMAGES, ...IMAGES]
  const rowB = [...IMAGES.slice().reverse(), ...IMAGES.slice().reverse()]

  useLayoutEffect(() => {
    document.title = `${home2.badge} — ${t.meta.title}`
    document.body.classList.add('j2-on')
    return () => document.body.classList.remove('j2-on')
  }, [home2.badge, t.meta.title])

  return (
    <div className="j2-page">
    <main className="j2">
      <p className="j2-news">
        {home2.badge}
        <span>{home2.kicker}</span>
      </p>

      <header className="j2-hero">
        <h1 className="j2-title">
          {home2.title}
          <span>{home2.titleAccent}</span>
        </h1>
        <div className="j2-actions">
          <a className="j2-btn j2-btn-fill" href="#j2-services">
            {home2.ctaPrimary}
          </a>
        </div>
        <p className="j2-proof">{home2.proof}</p>
      </header>

      <section className="j2-marquee" aria-label={home2.galleryEyebrow}>
        <div className="j2-track j2-track-a">
          {rowA.map((src, index) => (
            <Link key={`a-${src}-${index}`} className="j2-shot" to="/portfolio">
              <img src={src} alt="" />
              <span>
                <strong>{home.projects[index % home.projects.length]}</strong>
                {home.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="j2-track j2-track-b">
          {rowB.map((src, index) => (
            <Link key={`b-${src}-${index}`} className="j2-shot" to="/portfolio">
              <img src={src} alt="" />
              <span>
                <strong>{home.projects[index % home.projects.length]}</strong>
                {home.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="j2-pitch">
        <p className="mb-label">{home2.pitchEyebrow}</p>
        <h2>{home2.pitchTitle}</h2>
        <p className="j2-copy">{home2.pitchLead}</p>
        <div className="j2-pillars">
          {home2.pillars.map((pillar) => (
            <article key={pillar.title}>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="j2-services" className="j2-services">
        <p className="mb-label">{home.servicesEyebrow}</p>
        <h2>{home2.servicesTitle}</h2>
        <div className="j2-service-grid">
          {home.services.map((service) => (
            <Link key={service.slug} className="j2-service" to={`/services/${service.slug}`}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span>{service.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="j2-quote">
        <p className="mb-label">{home2.quoteLabel}</p>
        <blockquote>
          <p>“{quote.text}”</p>
          <footer>
            <strong>{quote.name}</strong>
            {quote.role}
          </footer>
        </blockquote>
      </section>

    </main>
    <Home2Footer />
    </div>
  )
}
