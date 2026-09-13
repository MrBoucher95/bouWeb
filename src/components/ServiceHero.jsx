import { useEffect, useId, useRef } from 'react'
import { Link } from 'react-router-dom'
import beforeAfter from '../assets/img/hero/befAft.png'
import essence from '../assets/img/hero/essence.png'
import heroImg from '../assets/img/hero/hero01.jpg'
import watch from '../assets/img/hero/watch.png'
import taping from '../assets/video/taping.mp4'
import '../assets/css/ServiceHero.css'

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function lerp(from, to, t) {
  return from + (to - from) * t
}

function viewProgress(el, start = 0.8, end = 0.2) {
  const top = el.getBoundingClientRect().top
  const vh = window.innerHeight
  return clamp((vh * start - top) / (vh * start - vh * end))
}

function mediaValues() {
  const width = window.innerWidth
  if (width <= 480) {
    return {
      video: { scaleFrom: 0.98, scaleTo: 1.02 },
      a: { xFrom: -20, xTo: 10, yFrom: -30, yTo: 20 },
      b: { xFrom: -15, xTo: 8, yFrom: 15, yTo: -8 },
      c: { xFrom: 25, xTo: -10, yFrom: -15, yTo: 10 },
    }
  }
  if (width <= 768) {
    return {
      video: { scaleFrom: 0.85, scaleTo: 1.15 },
      a: { xFrom: -35, xTo: 15, yFrom: -40, yTo: 25 },
      b: { xFrom: -25, xTo: 12, yFrom: 25, yTo: -12 },
      c: { xFrom: 40, xTo: -15, yFrom: -25, yTo: 15 },
    }
  }
  return {
    video: { scaleFrom: 0.8, scaleTo: 1.2 },
    a: { xFrom: -50, xTo: 20, yFrom: -50, yTo: 30 },
    b: { xFrom: -30, xTo: 15, yFrom: 30, yTo: -15 },
    c: { xFrom: 50, xTo: -20, yFrom: -30, yTo: 20 },
  }
}

function useServiceHero(headRef, pathRef, mediaRefs) {
  useEffect(() => {
    const path = pathRef.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0

    if (path && !reduced) {
      try {
        const box = path.getBBox()
        path.setAttribute('dy', String(-(box.height / 2 + box.y)))
      } catch {
        /* getBBox can fail before layout */
      }

      let offset = 0
      const tick = () => {
        offset -= 2
        if (offset <= -2000) offset = 0
        path.setAttribute('startOffset', String(offset))
        frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    const update = () => {
      const head = headRef.current
      if (head && !reduced) {
        const section = head.closest('.sv-hi')
        const y = section ? Math.max(0, -section.getBoundingClientRect().top) : window.scrollY
        head.style.transform = `translate(${Math.min(y * 0.25, 200)}px, ${Math.min(y * 0.15, 150)}px)`
      }

      const [video, shotA, shotB, shotC] = mediaRefs.current
      if (!video || !shotA || !shotB || !shotC) return
      const values = mediaValues()
      const p1 = reduced ? 1 : viewProgress(video)
      const p2 = reduced ? 1 : viewProgress(shotA)
      const p3 = reduced ? 1 : viewProgress(shotB)
      const p4 = reduced ? 1 : viewProgress(shotC)

      video.style.transform = `translate(-50%, -50%) scale(${lerp(values.video.scaleFrom, values.video.scaleTo, p1)})`
      video.style.opacity = String(lerp(0.7, 1, p1))
      shotA.style.transform = `translate(${lerp(values.a.xFrom, values.a.xTo, p2)}px, calc(-50% + ${lerp(values.a.yFrom, values.a.yTo, p2)}px))`
      shotA.style.opacity = String(lerp(0.6, 1, p2))
      shotB.style.transform = `translate(${lerp(values.b.xFrom, values.b.xTo, p3)}px, calc(-50% + ${lerp(values.b.yFrom, values.b.yTo, p3)}px))`
      shotB.style.opacity = String(lerp(0.6, 1, p3))
      shotC.style.transform = `translate(${lerp(values.c.xFrom, values.c.xTo, p4)}px, calc(-50% + ${lerp(values.c.yFrom, values.c.yTo, p4)}px))`
      shotC.style.opacity = String(lerp(0.6, 1, p4))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [headRef, pathRef, mediaRefs])
}

function HeroAction({ action }) {
  const className = action.fill ? 'btn btn-fill' : 'btn'
  if (action.href) {
    return (
      <a className={className} href={action.href}>
        {action.label}
      </a>
    )
  }
  return (
    <Link className={className} to={action.to}>
      {action.label}
    </Link>
  )
}

export default function ServiceHero({ title, subtitle, intro, actions = [], banner, mediaOnly = false }) {
  const curveId = `svHiCurve${useId().replace(/:/g, '')}`
  const headRef = useRef(null)
  const pathRef = useRef(null)
  const mediaRefs = useRef([])
  const bannerText = `${banner} ${banner} ${banner}`

  useServiceHero(headRef, pathRef, mediaRefs)

  return (
    <section className={`sv-hi${mediaOnly ? ' sv-hi--media' : ''}`}>
      {mediaOnly ? null : (
        <div className="sv-hi-top">
          <div className="sv-hi-copy">
            <h1>{title}</h1>
            <p className="sv-hi-sub">
              <span>{subtitle}</span>
            </p>
            <p className="sv-hi-lead">{intro}</p>
            <div className="btn-row">
              {actions.map((action) => (
                <HeroAction key={action.label} action={action} />
              ))}
            </div>
          </div>
          <div className="sv-hi-visual">
            <img ref={headRef} className="sv-hi-head" alt="" src={heroImg} />
          </div>
        </div>
      )}

      <div className="sv-hi-banner" aria-hidden="true">
        <svg className="sv-hi-svg" viewBox="0 0 1600 500" width="1600" height="500" preserveAspectRatio="xMidYMid meet">
          <defs>
            <path id={curveId} d="M -360,330 C 406,65 1194,595 1960,330" />
          </defs>
          <use href={`#${curveId}`} className="sv-hi-ribbon" />
          <text className="sv-hi-banner-text">
            <textPath ref={pathRef} className="sv-hi-textpath" href={`#${curveId}`} startOffset="0">
              {bannerText}
            </textPath>
          </text>
        </svg>
      </div>

      <div className="sv-hi-stage">
        <div className="sv-hi-stage-inner">
          <video
            ref={(node) => {
              mediaRefs.current[0] = node
            }}
            className="sv-hi-shot sv-hi-shot-video"
            src={taping}
            autoPlay
            loop
            muted
            playsInline
          />
          <div
            ref={(node) => {
              mediaRefs.current[1] = node
            }}
            className="sv-hi-shot sv-hi-shot-a"
            style={{ backgroundImage: `url(${beforeAfter})` }}
          />
          <div
            ref={(node) => {
              mediaRefs.current[2] = node
            }}
            className="sv-hi-shot sv-hi-shot-b"
            style={{ backgroundImage: `url(${essence})` }}
          />
          <div
            ref={(node) => {
              mediaRefs.current[3] = node
            }}
            className="sv-hi-shot sv-hi-shot-c"
            style={{ backgroundImage: `url(${watch})` }}
          />
        </div>
      </div>
    </section>
  )
}
