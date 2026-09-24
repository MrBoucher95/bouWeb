import { useEffect, useRef } from 'react'
import '../assets/css/HomeShapes.css'

const SHAPES = [
  { type: 'square', place: 'sq1', para: 'para01', depth: 'near', tilt: -18 },
  { type: 'circle', place: 'c1', para: 'para02', depth: 'far', tilt: 14 },
  { type: 'x', place: 'x1', para: 'para03', depth: 'mid', tilt: 26 },
  { type: 'square', place: 'sq2', para: 'para01', depth: 'far', tilt: 18 },
  { type: 'x', place: 'x2', para: 'para02', depth: 'near', tilt: -34 },
  { type: 'circle', place: 'c2', para: 'para02', depth: 'mid', tilt: -12 },
  { type: 'square', place: 'sq3', para: 'para01', depth: 'mid', tilt: 22 },
  { type: 'circle', place: 'c3', para: 'para02', depth: 'far', tilt: -20 },
  { type: 'circle', place: 'c4', para: 'para03', depth: 'near', tilt: 8 },
  { type: 'x', place: 'x3', para: 'para01', depth: 'far', tilt: -16 },
  { type: 'square', place: 'sq4', para: 'para02', depth: 'mid', tilt: -24 },
  { type: 'circle', place: 'c5', para: 'para01', depth: 'far', tilt: 30 },
  { type: 'x', place: 'x4', para: 'para03', depth: 'mid', tilt: 12 },
  { type: 'x', place: 'x5', para: 'para02', depth: 'near', tilt: 16 },
]

const DEPTH = { near: 1.15, mid: 0.72, far: 0.38 }

const SCROLL = {
  para01: { x: 0.035, y: 0.11, r: -0.012 },
  para02: { x: -0.028, y: -0.08, r: 0.018 },
  para03: { x: 0.02, y: 0.15, r: -0.01 },
}

export default function HomeShapes() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined

    const nodes = [...root.querySelectorAll('[data-para]')]
    let mx = 0
    let my = 0
    let frame = 0

    const apply = () => {
      frame = 0
      const scrolled = -root.getBoundingClientRect().top
      nodes.forEach((node) => {
        const kind = node.dataset.para
        const depth = DEPTH[node.dataset.depth] || 1
        const scroll = SCROLL[kind]
        const roam = window.innerWidth <= 640 ? 0.22 : 1
        let tx = scrolled * scroll.x * depth * roam
        let ty = scrolled * scroll.y * depth
        let rot = Number(node.dataset.tilt) + scrolled * scroll.r
        if (kind === 'para01') {
          tx += -mx * 50 * depth
          ty += -my * 50 * depth
          rot += -mx * 30
        } else if (kind === 'para02') {
          tx += mx * 35 * depth
          ty += my * 35 * depth
          rot += mx * 50
        } else {
          tx += mx * 25 * depth
          ty += -my * 25 * depth
          rot += my * 15
        }
        node.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) rotate(${rot.toFixed(2)}deg)`
      })
    }

    const schedule = () => {
      if (frame) return
      frame = requestAnimationFrame(apply)
    }

    const onMove = (event) => {
      mx = event.clientX / window.innerWidth - 0.5
      my = event.clientY / window.innerHeight - 0.5
      schedule()
    }

    apply()
    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <div className="mb-shapes" ref={rootRef} aria-hidden="true">
      {SHAPES.map((shape) => (
        <div
          key={`${shape.place}-${shape.type}`}
          className={`mb-shape mb-shape-${shape.type} mb-shape-${shape.depth} ${shape.place}`}
          data-para={shape.para}
          data-depth={shape.depth}
          data-tilt={shape.tilt}
        />
      ))}
    </div>
  )
}
