import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLanguage()
  const { home } = t

  return (
    <>
      <header className="hero">
        <svg className="hero-wave" viewBox="0 0 1440 420" fill="none" aria-hidden="true">
          <path
            d="M0 220 C 180 40, 260 400, 480 220 S 780 40, 960 220 1260 400, 1440 220"
            stroke="currentColor"
            strokeWidth="18"
          />
        </svg>
        <p className="eyebrow hero-kicker reveal">{home.role}</p>
        <h1 className="display reveal reveal-2">{home.name}</h1>
        <p className="lead reveal reveal-3">{home.intro}</p>
        <div className="btn-row reveal reveal-3">
          <a className="btn btn-fill" href="#services">
            {home.ctaServices}
          </a>
          <Link className="btn" to="/contact">
            {home.ctaContact}
          </Link>
        </div>
      </header>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>{home.marquee}</span>
          <span>{home.marquee}</span>
        </div>
      </div>

      <main className="page">
        <div className="page-inner">
          <section id="services" className="section">
            <div className="section-head">
              <p className="tag eyebrow">{home.servicesEyebrow}</p>
              <h2>{home.servicesEyebrow}</h2>
              <p className="lead">{home.servicesLead}</p>
            </div>
            <div className="service-grid">
              {home.services.map((service) => (
                <Link key={service.slug} className="service-card" to={`/services/${service.slug}`}>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span className="mono">{service.cta}</span>
                </Link>
              ))}
            </div>
          </section>

          <section className="section">
            <div className="section-head">
              <p className="tag eyebrow">{home.projectsEyebrow}</p>
              <h2>{home.projectsEyebrow}</h2>
              <p className="lead">{home.projectsLead}</p>
            </div>
            <div className="project-grid">
              {home.projects.map((project) => (
                <article key={project} className="project-card">
                  {project}
                </article>
              ))}
            </div>
          </section>

          <section className="cta-band">
            <h2>{home.ctaTitle}</h2>
            <p className="lead">{home.ctaText}</p>
            <Link className="btn btn-fill" to="/estimation">
              {home.ctaButton}
            </Link>
          </section>

          <section className="section">
            <div className="section-head">
              <p className="tag eyebrow">{home.quotesEyebrow}</p>
              <h2>{home.quotesTitle}</h2>
            </div>
            <div className="quote-grid">
              {home.quotes.map((quote) => (
                <blockquote key={quote.name} className="quote-card">
                  <p>{quote.text}</p>
                  <footer>
                    <strong>{quote.name}</strong>
                    <span className="role">{quote.role}</span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
