import { useLayoutEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Estimate from './pages/Estimate'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'
import ServicePage from './pages/ServicePage'

const PAGE_BY_PATH = [
  ['/a-propos', 'about'],
  ['/services/imprime', 'print'],
  ['/services/numerique', 'digital'],
  ['/services/web', 'web'],
  ['/services/applications', 'apps'],
  ['/services/drone', 'drone'],
  ['/services/video', 'video'],
  ['/estimation', 'estimate'],
  ['/contact', 'contact'],
  ['/blog', 'blog'],
  ['/portfolio', 'portfolio'],
  ['/accueil-2', 'home'],
  ['/', 'home'],
]

function pageFromPath(pathname) {
  const match = PAGE_BY_PATH.find(([path]) => pathname === path || (path !== '/' && pathname.startsWith(path)))
  return match ? match[1] : 'home'
}

export default function App() {
  const { pathname } = useLocation()
  const page = pageFromPath(pathname)

  useLayoutEffect(() => {
    if (window.location.hash) return
    const html = document.documentElement
    const previous = html.style.scrollBehavior
    html.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    html.style.scrollBehavior = previous
  }, [pathname])

  return (
    <div className="app" data-page={page}>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/oldHome" element={<Navigate to="/" replace />} />
        <Route path="/accueil-2" element={<Navigate to="/" replace />} />
        <Route path="/preview/numerique/:variant" element={<Navigate to="/services/numerique" replace />} />
        <Route path="/preview/numerique" element={<Navigate to="/services/numerique" replace />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services/drone" element={<Navigate to="/" replace />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/estimation" element={<Estimate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/logo" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
