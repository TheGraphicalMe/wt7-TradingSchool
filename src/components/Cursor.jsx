import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  let mx = 0, my = 0, rx = 0, ry = 0

  useEffect(() => {
    const move = (e) => {
      mx = e.clientX; my = e.clientY
      if (dot.current) { dot.current.style.left = mx + 'px'; dot.current.style.top = my + 'px' }
    }
    const tick = () => {
      rx += (mx - rx) * 0.1; ry += (my - ry) * 0.1
      if (ring.current) { ring.current.style.left = rx + 'px'; ring.current.style.top = ry + 'px' }
      requestAnimationFrame(tick)
    }
    window.addEventListener('mousemove', move)
    tick()

    const grow = () => {
      dot.current && (dot.current.style.transform = 'translate(-50%,-50%) scale(0)')
      ring.current && Object.assign(ring.current.style, { width: '50px', height: '50px', borderColor: '#9b6dff', background: 'rgba(155,109,255,0.08)' })
    }
    const shrink = () => {
      dot.current && (dot.current.style.transform = 'translate(-50%,-50%) scale(1)')
      ring.current && Object.assign(ring.current.style, { width: '30px', height: '30px', borderColor: 'rgba(255,255,255,0.5)', background: 'transparent' })
    }

    const attach = () => document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink)
    })
    attach()
    const obs = new MutationObserver(attach)
    obs.observe(document.body, { childList: true, subtree: true })
    return () => { window.removeEventListener('mousemove', move); obs.disconnect() }
  }, [])

  return (
    <>
      <div className="custom-cursor-dot" ref={dot} style={{ position:'fixed', zIndex:1000001, width:8, height:8, borderRadius:'50%', background:'#fff', pointerEvents:'none', transform:'translate(-50%,-50%)', transition:'transform 0.15s ease, background 0.2s' }} />
      <div className="custom-cursor-ring" ref={ring} style={{ position:'fixed', zIndex:1000000, width:30, height:30, borderRadius:'50%', border:'1.5px solid rgba(255,255,255,0.5)', pointerEvents:'none', transform:'translate(-50%,-50%)', transition:'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, background 0.2s ease' }} />
      <style>{`
        @media(max-width:768px){
          .custom-cursor-dot, .custom-cursor-ring { display: none !important; }
        }
      `}</style>
    </>
  )
}
