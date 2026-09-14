import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../content/blog'
import { useLanguage } from '../context/LanguageContext'
import '../assets/css/Blog.css'

function formatDate(date, lang) {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(new Date(`${date}T12:00:00`))
}

export default function Blog() {
  const { lang, t } = useLanguage()
  const { blog } = t
  const posts = blogPosts(lang)

  useEffect(() => {
    document.title = blog.metaTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', blog.metaDescription)
    return () => {
      document.title = t.meta.title
      if (meta) meta.setAttribute('content', t.meta.description)
    }
  }, [blog.metaTitle, blog.metaDescription, t.meta.title, t.meta.description])

  return (
    <main className="page" style={{ paddingTop: '7rem' }}>
      <div className="page-inner">
        <p className="tag eyebrow">{blog.eyebrow}</p>
        <h1>{blog.title}</h1>
        <p className="lead blog-lead">{blog.lead}</p>

        <section className="section blog-index">
          <ul className="blog-list">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link className="blog-entry" to={`/blog/${post.slug}`}>
                  <div className="blog-entry-media">
                    {post.image ? (
                      <img src={post.image} alt="" />
                    ) : (
                      <span className="blog-entry-placeholder" aria-hidden="true">
                        {blog.imageSlot}
                      </span>
                    )}
                  </div>
                  <div className="blog-entry-copy">
                    <p className="eyebrow">
                      <time dateTime={post.date}>{formatDate(post.date, lang)}</time>
                      <span aria-hidden="true"> · </span>
                      {post.audience}
                    </p>
                    <h2>{post.title}</h2>
                    <p className="blog-entry-desc">{post.description}</p>
                    <span className="mono">{blog.read}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
