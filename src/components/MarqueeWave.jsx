import { useEffect, useId, useRef } from 'react'

const TILE = 1440
const TILES = 4

function sPath() {
  let d = `M 0 120`
  for (let i = 0; i < TILES; i += 1) {
    const o = i * TILE
    d += ` C ${o + 180} 24, ${o + 260} 216, ${o + 480} 120 S ${o + 780} 24, ${o + 960} 120 S ${o + 1260} 216, ${o + TILE} 120`
  }
  return d
}

const PATH = sPath()

export default function MarqueeWave({ text }) {
  const pathId = `marquee-s-${useId().replace(/:/g, '')}`
  const textPathRef = useRef(null)

  useEffect(() => {
    const node = textPathRef.current
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    let copyLen = 0
    let offset = 0
    let last = performance.now()
    let frame = 0

    const measure = () => {
      copyLen = node.getComputedTextLength() / 2
    }

    measure()
    if (!copyLen) {
      frame = requestAnimationFrame(measure)
    }

    const tick = (now) => {
      if (!copyLen) measure()
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      if (copyLen) {
        offset = (offset + copyLen * dt * 0.035) % copyLen
        node.setAttribute('startOffset', String(-offset))
      }
      frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    window.addEventListener('resize', measure)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', measure)
    }
  }, [text])

  return (
    <div className="marquee marquee-s" aria-hidden="true">
      <svg className="marquee-svg" viewBox={`0 0 ${TILE} 240`} preserveAspectRatio="none">
        <defs>
          <path id={pathId} d={PATH} />
        </defs>
        <text className="marquee-text" dominantBaseline="middle">
          <textPath ref={textPathRef} href={`#${pathId}`}>
            {text}
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}
