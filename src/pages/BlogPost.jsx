import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { blogJsonLd, blogNeighbors, blogPost } from '../content/blog'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Blog.css'

function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export default function BlogPost() {
  const { slug } = useParams()
  const { lang, t } = useLanguage()
  const { blog } = t
  const post = blogPost(slug, lang)

  useEffect(() => {
    const current = blogPost(slug, lang)
    if (!current) return undefined
    document.title = current.metaTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', current.description)
    return () => {
      document.title = t.meta.title
      if (meta) meta.setAttribute('content', t.meta.description)
    }
  }, [slug, lang, t.meta.title, t.meta.description])

  if (!post) return <Navigate to="/blog" replace />

  const { prev, next } = blogNeighbors(slug, lang)
  const jsonLd = blogJsonLd(post, lang)

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="container pb-5">
        <article className="blog-article">
          <figure className="blog-cover">
            {post.image ? (
              <img src={post.image} alt="" />
            ) : (
              <span className="blog-entry-placeholder" aria-hidden="true">
                {blog.imageSlot}
              </span>
            )}
          </figure>

          <header className="blog-article-head">
            <p className="mb-news">
              {blog.eyebrow}
              <span>{post.title}</span>
            </p>
            <p className="blog-meta">
              <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
              <span aria-hidden="true"> · </span>
              <span>{post.audience}</span>
            </p>
            <h1>{post.title}</h1>
            <p className="lead">{post.description}</p>
          </header>

          <div className="blog-article-content">
            <div className="blog-body">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.list ? (
                    <ul>
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>

            {post.faq.length ? (
              <section className="blog-faq">
                <h2>{blog.faq}</h2>
                {post.faq.map((item) => (
                  <div className="blog-faq-item" key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </section>
            ) : null}
          </div>
        </article>

        <nav className="blog-pager" aria-label={blog.pager}>
          {prev ? (
            <Link className="blog-pager-link" to={`/blog/${prev.slug}`}>
              <span className="eyebrow">{blog.prev}</span>
              <strong>{prev.title}</strong>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link className="blog-pager-link blog-pager-link--next" to={`/blog/${next.slug}`}>
              <span className="eyebrow">{blog.next}</span>
              <strong>{next.title}</strong>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <section className="cta-band">
          <h2>{blog.ctaTitle}</h2>
          <p className="lead">{blog.ctaText}</p>
          <div className="btn-row">
            <Link className="btn" to="/blog">
              {blog.back}
            </Link>
            <Link className="btn btn-fill" to="/contact">
              {t.home.ctaContact}
            </Link>
          </div>
        </section>
      </div>
    </PageShell>
  )
}
