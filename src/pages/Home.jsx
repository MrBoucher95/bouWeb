import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import QuoteSwiper from '../components/QuoteSwiper'
import { useLanguage } from '../context/LanguageContext'

const IMAGE_MAP = import.meta.glob('../assets/img/project/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const IMAGES = Object.entries(IMAGE_MAP)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([, src]) => src)

export default function Home() {
  const { t } = useLanguage()
  const { home, home2 } = t
  const rowA = [...IMAGES, ...IMAGES]
  const rowB = [...IMAGES.slice().reverse(), ...IMAGES.slice().reverse()]

  useEffect(() => {
    document.title = t.meta.title
  }, [t.meta.title])

  return (
    <PageShell>
      <header className="mb-hero">
        <p className="mb-news">{home2.kicker}</p>
        <h1 className="mb-title">
          {home2.title}
          <span>{home2.titleAccent}</span>
        </h1>
        <div className="mb-actions">
          <a className="mb-btn mb-btn-fill" href="#mb-services">
            {home2.ctaPrimary}
          </a>
        </div>
        <p className="mb-proof">{home2.proof}</p>
      </header>

      <section className="mb-marquee" aria-label={home2.galleryEyebrow}>
        <div className="mb-track mb-track-a">
          {rowA.map((src, index) => (
            <Link key={`a-${src}-${index}`} className="mb-shot" to="/portfolio">
              <img src={src} alt="" />
              <span>
                <strong>{home.projects[index % home.projects.length]}</strong>
                {home.name}
              </span>
            </Link>
          ))}
        </div>
        <div className="mb-track mb-track-b">
          {rowB.map((src, index) => (
            <Link key={`b-${src}-${index}`} className="mb-shot" to="/portfolio">
              <img src={src} alt="" />
              <span>
                <strong>{home.projects[index % home.projects.length]}</strong>
                {home.name}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-pitch">
        <div className="container">
          <p className="mb-label">{home2.pitchEyebrow}</p>
          <h2>{home2.pitchTitle}</h2>
          <p className="mb-copy">{home2.pitchLead}</p>
          <div className="row g-3 mt-4 text-start">
            {home2.pillars.map((pillar) => (
              <div key={pillar.title} className="col-md-4">
                <article className="mb-pillar">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="mb-services" className="mb-services">
        <div className="container">
          <p className="mb-label">{home.servicesEyebrow}</p>
          <h2>{home2.servicesTitle}</h2>
          <div className="row g-3 mt-4 text-start">
            {home.services.map((service) => (
              <div key={service.slug} className="col-md-6">
                <Link className="mb-service" to={`/services/${service.slug}`}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span>{service.cta} →</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuoteSwiper
        quotes={home.quotes}
        eyebrow={home.quotesEyebrow}
        title={home.quotesTitle}
        prevLabel={home.quotesPrev}
        nextLabel={home.quotesNext}
      />
    </PageShell>
  )
}
