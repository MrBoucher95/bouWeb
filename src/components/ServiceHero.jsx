import { useEffect, useId, useRef } from 'react'
import { Link } from 'react-router-dom'
import beforeAfter from '../assets/img/hero/befAft.png'
import essence from '../assets/img/hero/essence.png'
import watch from '../assets/img/hero/watch.png'
import taping from '../assets/video/taping.mp4'
import '../assets/css/ServiceHero.css'

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value))
}

function lerp(from, to, t) {
  return from + (to - from) * t
}

function scrollProgress(el) {
  const rect = el.getBoundingClientRect()
  const vh = window.innerHeight
  const y = rect.top + rect.height * 0.35
  const start = vh * 0.9
  const end = vh * 0.28
  return clamp((start - y) / (start - end))
}

function easeOut(t) {
  return 1 - (1 - t) * (1 - t)
}

function mediaValues() {
  const width = window.innerWidth
  if (width <= 480) {
    return {
      video: { xFrom: 0, xTo: 0, yFrom: 48, yTo: 0, scaleFrom: 0.9, scaleTo: 1.08 },
      a: { xFrom: -72, xTo: 0, yFrom: -40, yTo: 0, scaleFrom: 0.82, scaleTo: 1.06 },
      b: { xFrom: -56, xTo: 0, yFrom: 28, yTo: 0, scaleFrom: 0.84, scaleTo: 1.06 },
      c: { xFrom: 72, xTo: 0, yFrom: 28, yTo: 0, scaleFrom: 0.8, scaleTo: 1.08 },
    }
  }
  if (width <= 768) {
    return {
      video: { xFrom: 0, xTo: 0, yFrom: 72, yTo: 0, scaleFrom: 0.88, scaleTo: 1.1 },
      a: { xFrom: -110, xTo: 0, yFrom: -56, yTo: 0, scaleFrom: 0.8, scaleTo: 1.08 },
      b: { xFrom: -88, xTo: 0, yFrom: 36, yTo: 0, scaleFrom: 0.82, scaleTo: 1.08 },
      c: { xFrom: 120, xTo: 0, yFrom: 40, yTo: 0, scaleFrom: 0.78, scaleTo: 1.1 },
    }
  }
  if (width <= 1440) {
    return {
      video: { xFrom: 0, xTo: 0, yFrom: 72, yTo: 0, scaleFrom: 0.92, scaleTo: 1.1 },
      a: { xFrom: -160, xTo: 0, yFrom: -80, yTo: 0, scaleFrom: 0.78, scaleTo: 1.08 },
      b: { xFrom: -130, xTo: 0, yFrom: 40, yTo: 0, scaleFrom: 0.8, scaleTo: 1.08 },
      c: { xFrom: 180, xTo: 0, yFrom: 50, yTo: 0, scaleFrom: 0.76, scaleTo: 1.1 },
    }
  }
  return {
    video: { xFrom: 0, xTo: 0, yFrom: 110, yTo: 0, scaleFrom: 0.9, scaleTo: 1.14 },
    a: { xFrom: -160, xTo: 0, yFrom: -80, yTo: 0, scaleFrom: 0.78, scaleTo: 1.1 },
    b: { xFrom: -130, xTo: 0, yFrom: 40, yTo: 0, scaleFrom: 0.8, scaleTo: 1.1 },
    c: { xFrom: 180, xTo: 0, yFrom: 50, yTo: 0, scaleFrom: 0.76, scaleTo: 1.12 },
  }
}

function stillTransform(packed, x, y, scale) {
  if (packed) return `translate(${x}px, ${y}px) scale(${scale})`
  return `translate(${x}px, calc(-50% + ${y}px)) scale(${scale})`
}

function useServiceHero(pathRef, mediaRefs, lockMedia = false) {
  useEffect(() => {
    const path = pathRef.current
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frame = 0
    let ticking = false

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
      const [video, shotA, shotB, shotC] = mediaRefs.current
      if (!video || !shotA || !shotB || !shotC) return

      const packed = Boolean(video.closest('.sv-hi-visual'))
      const restStill = packed ? 'translate(0, 0) scale(1)' : 'translate(0, -50%) scale(1)'

      if (reduced) {
        video.style.transform = 'translate(-50%, -50%) scale(1)'
        shotA.style.transform = restStill
        shotB.style.transform = 'translate(0, 0) scale(1)'
        shotC.style.transform = restStill
        return
      }

      const driver = lockMedia
        ? video.closest('.sv-hi-stage') || video
        : video.closest('.sv-hi-visual') || video
      const p = easeOut(scrollProgress(driver))
      const values = mediaValues()
      const shift = (from, to) => lerp(from, to, p)

      video.style.transform = `translate(calc(-50% + ${shift(values.video.xFrom, values.video.xTo)}px), calc(-50% + ${shift(values.video.yFrom, values.video.yTo)}px)) scale(${lerp(values.video.scaleFrom, values.video.scaleTo, p)})`
      shotA.style.transform = stillTransform(
        packed,
        shift(values.a.xFrom, values.a.xTo),
        shift(values.a.yFrom, values.a.yTo),
        lerp(values.a.scaleFrom, values.a.scaleTo, p),
      )
      shotB.style.transform = stillTransform(
        true,
        shift(values.b.xFrom, values.b.xTo),
        shift(values.b.yFrom, values.b.yTo),
        lerp(values.b.scaleFrom, values.b.scaleTo, p),
      )
      shotC.style.transform = stillTransform(
        packed,
        shift(values.c.xFrom, values.c.xTo),
        shift(values.c.yFrom, values.c.yTo),
        lerp(values.c.scaleFrom, values.c.scaleTo, p),
      )
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        update()
        ticking = false
      })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [pathRef, mediaRefs, lockMedia])
}

function HeroShot({ mediaRefs, index, className, src, image }) {
  return (
    <div
      ref={(node) => {
        mediaRefs.current[index] = node
      }}
      className={`sv-hi-shot ${className}`}
    >
      {src ? (
        <video className="sv-hi-shot-face" src={src} autoPlay loop muted playsInline />
      ) : (
        <div className="sv-hi-shot-face" style={{ backgroundImage: `url(${image})` }} />
      )}
    </div>
  )
}

function HeroStage({ mediaRefs }) {
  return (
    <div className="sv-hi-stage-inner">
      <HeroShot mediaRefs={mediaRefs} index={0} className="sv-hi-shot-video" src={taping} />
      <HeroShot mediaRefs={mediaRefs} index={1} className="sv-hi-shot-a" image={beforeAfter} />
      <HeroShot mediaRefs={mediaRefs} index={2} className="sv-hi-shot-b" image={essence} />
      <HeroShot mediaRefs={mediaRefs} index={3} className="sv-hi-shot-c" image={watch} />
    </div>
  )
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
  const pathRef = useRef(null)
  const mediaRefs = useRef([])
  const bannerText = `${banner} ${banner} ${banner}`

  useServiceHero(pathRef, mediaRefs, mediaOnly)

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
            <HeroStage mediaRefs={mediaRefs} />
          </div>
        </div>
      )}

      <div className="sv-hi-banner" aria-hidden="true">
        <svg className="sv-hi-svg" viewBox="0 0 1600 500" preserveAspectRatio="xMidYMid meet">
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

      {mediaOnly ? (
        <div className="sv-hi-stage">
          <HeroStage mediaRefs={mediaRefs} />
        </div>
      ) : null}
    </section>
  )
}
