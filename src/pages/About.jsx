import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <main className="page" style={{ paddingTop: '7rem' }}>
      <div className="page-inner">
        <p className="tag eyebrow">{about.eyebrow}</p>
        <p className="hero-kicker">{about.role}</p>
        <h1>{about.name}</h1>
        <section className="section">
          <h2>{about.title}</h2>
          <p className="about-values">{about.values}</p>
          <div className="about-copy">
            <p>{about.p1}</p>
            <p>{about.p2}</p>
          </div>
        </section>
      </div>
    </main>
  )
}
