import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Nav from './components/Nav'
import About from './pages/About'
import Contact from './pages/Contact'
import Estimate from './pages/Estimate'
import Home from './pages/Home'
import Logo from './pages/Logo'
import NotFound from './pages/NotFound'
import ServicePage from './pages/ServicePage'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/estimation" element={<Estimate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}
