import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'
import '../assets/css/Nav.css'

const tiles = [
  { id: 1, to: '/', key: 'home', kind: 'home', mark: 'wave' },
  { id: 2, to: '/a-propos', key: 'about', kind: 'about', mark: 'dot' },
  { id: 3, to: '/services/imprime', key: 'print', kind: 'print', mark: 'stack' },
  { id: 4, to: '/services/numerique', key: 'digital', kind: 'digital', mark: 'nodes' },
  { id: 5, to: '/services/web', key: 'web', kind: 'web', mark: 'frame' },
  { id: 6, to: '/services/applications', key: 'apps', kind: 'apps', mark: 'phone' },
  { id: 7, to: '/estimation', key: 'estimate', kind: 'estimate', mark: 'slider' },
  { id: 8, to: '/contact', key: 'contact', kind: 'contact', mark: 'mail' },
]

function Mark({ type }) {
  if (type === 'wave') {
    return (
      <svg viewBox="0 0 120 64" fill="none" aria-hidden="true">
        <path d="M4 40c18-28 28 28 48 0s30 28 48 0" stroke="currentColor" strokeWidth="6" />
      </svg>
    )
  }
  if (type === 'dot') {
    return (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="40" cy="28" r="14" fill="currentColor" />
        <rect x="18" y="50" width="44" height="18" rx="9" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'stack') {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <rect x="14" y="18" width="52" height="14" stroke="currentColor" strokeWidth="4" />
        <rect x="10" y="34" width="52" height="14" stroke="currentColor" strokeWidth="4" />
        <rect x="18" y="50" width="52" height="14" stroke="currentColor" strokeWidth="4" />
      </svg>
    )
  }
  if (type === 'nodes') {
    return (
      <svg viewBox="0 0 80 80" aria-hidden="true">
        <circle cx="20" cy="22" r="6" fill="currentColor" />
        <circle cx="60" cy="28" r="6" fill="currentColor" />
        <circle cx="36" cy="58" r="6" fill="currentColor" />
        <path d="M24 26l32 4M24 26L36 52M58 32L40 54" stroke="currentColor" strokeWidth="4" fill="none" />
      </svg>
    )
  }
  if (type === 'frame') {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <rect x="10" y="16" width="60" height="48" rx="4" stroke="currentColor" strokeWidth="4" />
        <path d="M10 28h60" stroke="currentColor" strokeWidth="4" />
      </svg>
    )
  }
  if (type === 'phone') {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <rect x="26" y="8" width="28" height="64" rx="6" stroke="currentColor" strokeWidth="4" />
        <circle cx="40" cy="62" r="3" fill="currentColor" />
      </svg>
    )
  }
  if (type === 'slider') {
    return (
      <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
        <path d="M12 28h56M12 52h56" stroke="currentColor" strokeWidth="4" />
        <circle cx="32" cy="28" r="7" fill="currentColor" />
        <circle cx="50" cy="52" r="7" fill="currentColor" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <rect x="14" y="22" width="52" height="36" rx="4" stroke="currentColor" strokeWidth="4" />
      <path d="M14 28l26 18 26-18" stroke="currentColor" strokeWidth="4" />
    </svg>
  )
}

function TileLines() {
  return (
    <div className="tile-line-wrapper">
      <div className="tile-line nav-l" />
      <div className="tile-line nav-r" />
      <div className="tile-line nav-t" />
      <div className="tile-line nav-b" />
    </div>
  )
}

export default function Nav() {
  const { t, lang, setLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [warp, setWarp] = useState(false)
  const [closing, setClosing] = useState(false)
  const [enlarged, setEnlarged] = useState(null)
  const [settle, setSettle] = useState(false)
  const closeTimer = useRef(0)

  const current = useMemo(() => {
    if (pathname === '/accueil-2') return t.nav.home2
    if (pathname === '/logo') return t.nav.logo
    if (pathname.startsWith('/blog')) return t.nav.blog
    if (pathname.startsWith('/portfolio')) return t.nav.portfolio
    const match = tiles.find((tile) => tile.to === pathname)
    return match ? t.nav[match.key] : t.nav.home
  }, [pathname, t])

  useEffect(() => {
    document.body.classList.toggle('nav-open', open)
    return () => document.body.classList.remove('nav-open')
  }, [open])

  useEffect(() => () => window.clearTimeout(closeTimer.current), [])

  const toggle = () => {
    if (closing) return
    setWarp(true)
    setClosing(false)
    setEnlarged(null)
    setOpen((value) => !value)
  }

  const go = (event, tile) => {
    event.preventDefault()
    if (closing) return
    if (tile.to === pathname) {
      toggle()
      return
    }

    setWarp(true)
    setEnlarged(tile.id)
    setClosing(true)
    window.clearTimeout(closeTimer.current)
    closeTimer.current = window.setTimeout(() => {
      navigate(tile.to)
      window.scrollTo(0, 0)
      setSettle(true)
      setOpen(false)
      setClosing(false)
      setEnlarged(null)
      setWarp(false)
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => setSettle(false))
      })
    }, 620)
  }

  const classes = [
    'brand-nav',
    open ? 'open' : '',
    warp ? 'warp' : '',
    closing ? 'close' : '',
    settle ? 'settle' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <>
      <div className="site-tools">
        <button
          type="button"
          className="lang-switch"
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          aria-label={lang === 'fr' ? t.nav.langEn : t.nav.langFr}
        >
          {lang === 'fr' ? 'FR' : 'EN'}
        </button>
        <button
          type="button"
          className="theme-switch"
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
        >
          {theme === 'dark' ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
              <path
                d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M15.2 4.1A7.6 7.6 0 1 0 19.9 15 6.2 6.2 0 0 1 15.2 4.1Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </div>

      <div className={classes}>
        <div className="nav">
          <div className="nav-wrapper">
            {tiles.map((tile) => (
              <div
                key={tile.id}
                className={`nav-tile nav-tile-${tile.id}${enlarged === tile.id ? ' enlarge' : ''}`}
              >
                <a
                  className={`tile tile-${tile.kind}`}
                  href={tile.to}
                  tabIndex={open ? 0 : -1}
                  onClick={(event) => go(event, tile)}
                >
                  <div className="tile-title">{t.nav[tile.key]}</div>
                  <div className="tile-visual">
                    <Mark type={tile.mark} />
                  </div>
                </a>
              </div>
            ))}
          </div>

          <div className="nav-wrapper nav-wrapper-gridlines">
            <div className="menu">
              <div className="tile-menu-tile nav-button nav-button-gridline">
                <TileLines />
              </div>
            </div>
            {tiles.map((tile) => (
              <div key={tile.id} className={`nav-tile nav-tile-${tile.id} nav-tile-gridlines`}>
                <TileLines />
              </div>
            ))}
          </div>
        </div>

        <div className="menu">
          <button
            type="button"
            id="nav-button"
            className="tile-menu-tile nav-button"
            aria-label={open ? t.nav.close : t.nav.open}
            aria-expanded={open}
            onClick={toggle}
          >
            <div className="nav-button-highlight" />
            {open ? (
              <svg className="nav-button-svg" viewBox="0 0 41 41" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22.311 20.5001L30.8009 28.9899L28.9889 30.8019L20.4991 22.312L12.0092 30.8019L10.1973 28.9899L18.6871 20.5001L10.1973 12.0102L12.0092 10.1982L20.4991 18.6881L28.9889 10.1982L30.8009 12.0102L22.311 20.5001Z"
                />
              </svg>
            ) : (
              <svg className="nav-button-svg" viewBox="0 0 41 41" fill="currentColor" aria-hidden="true">
                <path d="M32.6719 19.2188H8.32812V21.7812H32.6719V19.2188Z" />
                <path d="M32.6719 9.96875H8.32812V12.5312H32.6719V9.96875Z" />
                <path d="M32.6719 29.1094H8.32812V31.6719H32.6719V29.1094Z" />
              </svg>
            )}
          </button>
        </div>

        <Link className="nav-brand" to="/" aria-label={t.nav.home}>
          <svg viewBox="0 0 4558 2658" aria-hidden="true">
            <path d="M0,1789.78c0,0 823.538,-946.287 1006.04,-1124.76c182.502,-178.472 477.596,-286.577 727.539,123.683c-37.854,117.745 -177.85,434.541 -177.85,434.541c-0,0 513.65,-795.159 654.514,-1036.84c140.865,-241.677 533.495,-271.569 719.857,49.002c186.361,320.57 889.155,1554.37 889.155,1554.37l-997.836,0l-268.821,-502.745l84.358,-194.526l-440.687,697.271l-837.743,0l-93.759,-157.136l-133.708,157.136l-1131.06,0Z" />
            <path d="M4557.53,1886.13c-0,-0 -690.341,407.958 -843.325,484.9c-152.985,76.942 -400.351,123.548 -609.869,-53.321c31.732,-50.762 149.085,-187.337 149.085,-187.337c-0,-0 -430.574,342.804 -548.655,446.995c-118.081,104.19 -447.208,117.077 -603.428,-21.126c-156.22,-138.202 -745.345,-670.111 -745.345,-670.111l836.448,-0l225.342,216.741l-70.714,83.863l369.411,-300.604l702.249,-0l78.594,67.743l112.082,-67.743l948.125,-0Z" />
          </svg>
        </Link>
        <div className="nav-page-title">{current}</div>
      </div>
    </>
  )
}
