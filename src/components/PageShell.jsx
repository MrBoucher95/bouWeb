import { useLayoutEffect } from 'react'
import Footer from './Footer'
import HomeShapes from './HomeShapes'
import '../assets/css/Home2.css'

export default function PageShell({ children, className = '' }) {
  useLayoutEffect(() => {
    document.body.classList.add('mb-on')
    return () => document.body.classList.remove('mb-on')
  }, [])

  return (
    <div className={['mb-page', className].filter(Boolean).join(' ')}>
      <main className="mb">
        <div className="mb-home">
          <HomeShapes />
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}
