import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/WorkGallery.css'

export default function WorkGallery({ images }) {
  const { t } = useLanguage()
  const { home, home2 } = t
  const row = [...images, ...images]

  return (
    <section className="mb-gallery mb-gallery--film" aria-label={home2.galleryEyebrow}>
      <div className="mb-film-stage">
        <div className="mb-film-track">
          {row.map((src, index) => (
            <Link key={`${src}-${index}`} className="mb-shot" to="/portfolio">
              <img src={src} alt="" />
              <span>
                <strong>{home.projects[index % home.projects.length]}</strong>
                {home.name}
              </span>
              <em className="mb-shot-index">{String((index % images.length) + 1).padStart(2, '0')}</em>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
