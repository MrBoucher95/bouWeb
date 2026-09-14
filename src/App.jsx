import { Route, Routes, useLocation } from 'react-router-dom'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './pages/About'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Estimate from './pages/Estimate'
import Home from './pages/Home'
import Logo from './pages/Logo'
import NotFound from './pages/NotFound'
import ServicePage from './pages/ServicePage'

const PAGE_BY_PATH = [
  ['/a-propos', 'about'],
  ['/services/imprime', 'print'],
  ['/services/numerique', 'digital'],
  ['/services/web', 'web'],
  ['/services/applications', 'apps'],
  ['/services/drone', 'drone'],
  ['/estimation', 'estimate'],
  ['/contact', 'contact'],
  ['/blog', 'blog'],
  ['/logo', 'logo'],
  ['/', 'home'],
]

function pageFromPath(pathname) {
  const match = PAGE_BY_PATH.find(([path]) => pathname === path || (path !== '/' && pathname.startsWith(path)))
  return match ? match[1] : 'home'
}

export default function App() {
  const { pathname } = useLocation()
  const page = pageFromPath(pathname)

  return (
    <div className="app" data-page={page}>
      <Cursor />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/estimation" element={<Estimate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
