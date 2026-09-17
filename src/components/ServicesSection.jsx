import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/ServicesSection.css'

export default function ServicesSection() {
  const { t } = useLanguage()
  const { home, home2 } = t
  const [first, ...rest] = home.services

  return (
    <section id="mb-services" className="mb-services mb-svc-bento" aria-labelledby="mb-services-title">
      <div className="container">
        <p className="tag">{home.servicesEyebrow}</p>
        <h2 id="mb-services-title">{home2.servicesTitle}</h2>
        <div className="mb-svc-bento-grid">
          <Link className={`mb-svc mb-svc--${first.slug} mb-svc-bento-main`} to={`/services/${first.slug}`}>
            <p className="mb-svc-index">01</p>
            <h3>{first.title}</h3>
            <p>{first.text}</p>
            <span>{first.cta}</span>
          </Link>
          <div className="mb-svc-bento-side">
            {rest.map((service, index) => (
              <Link key={service.slug} className={`mb-svc mb-svc--${service.slug}`} to={`/services/${service.slug}`}>
                <p className="mb-svc-index">{String(index + 2).padStart(2, '0')}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
