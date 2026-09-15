import { Link } from 'react-router-dom'
import { LogoPlane, useLogoScroll } from '../components/LogoMark'
import ProjectGrid from '../components/ProjectGrid'
import QuoteSwiper from '../components/QuoteSwiper'
import ServiceHero from '../components/ServiceHero'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Logo.css'
import '../assets/css/Portfolio.css'

export default function Home() {
  const { t } = useLanguage()
  const { home } = t
  const { openingRef, progress, entered } = useLogoScroll()

  return (
    <div className={`logo-page home-stage${entered ? ' is-in' : ''}`} style={{ '--p': progress }}>
      <div className="logo-pin">
        <LogoPlane />

        <header className="logo-opening" ref={openingRef}>
          <div>
            <p className="logo-note">{home.role}</p>
            <h1 className="logo-opening-title">{home.name}</h1>
            <div className="logo-copy">
              <p>{home.intro}</p>
              <div className="btn-row">
                <a className="btn btn-fill" href="#services">
                  {home.ctaServices}
                </a>
                <Link className="btn" to="/contact">
                  {home.ctaContact}
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div className="logo-pin-spacer" aria-hidden="true" />
      </div>

      <ServiceHero mediaOnly banner={home.marquee} />

      <main className="page logo-body">
        <div className="page-inner">
          <section id="services" className="section">
            <div className="section-head">
              <p className="tag eyebrow">{home.servicesEyebrow}</p>
              <h2>{home.servicesEyebrow}</h2>
              <p className="lead">{home.servicesLead}</p>
            </div>
            <div className="service-grid">
              {home.services.map((service) => (
                <Link
                  key={service.slug}
                  className={`service-card service-card--${service.slug}`}
                  to={`/services/${service.slug}`}
                >
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                  </div>
                  <span className="mono">{service.cta}</span>
                </Link>
              ))}
            </div>
          </section>

          <section id="projects" className="section folio-section">
            <div className="section-head folio-head">
              <h2>{home.projectsEyebrow}</h2>
              <p className="lead">{home.projectsLead}</p>
            </div>
            <ProjectGrid projects={home.projects} />
            <div className="folio-cta">
              <Link className="btn" to="/portfolio">
                {home.projectsCta}
              </Link>
            </div>
          </section>
        </div>

        <QuoteSwiper
          quotes={home.quotes}
          eyebrow={home.quotesEyebrow}
          title={home.quotesTitle}
          prevLabel={home.quotesPrev}
          nextLabel={home.quotesNext}
        />

        <div className="page-inner">
          <section className="cta-band">
            <h2>{home.ctaTitle}</h2>
            <p className="lead">{home.ctaText}</p>
            <Link className="btn" to="/estimation">
              {home.ctaButton}
            </Link>
          </section>
        </div>
      </main>
    </div>
  )
}
