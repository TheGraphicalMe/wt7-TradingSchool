import { useEffect } from 'react'

/**
 * Magnetic pull + premium enlarge effect on every .btn.
 * - JS handles the smooth translate via lerp animation loop
 * - CSS handles the scale(1.07) on :hover
 * - They compose cleanly because JS uses style.setProperty('--mx') / ('--my')
 *   and CSS reads translate(var(--mx), var(--my)) scale(1.07)
 *
 * Drop useMagneticButtons() in App.jsx (runs once globally).
 */
export function useMagneticButtons() {
  useEffect(() => {
    const cleanups = new Map()

    function attach(btn) {
      if (cleanups.has(btn)) return

      let reqId    = null
      let curX = 0, curY = 0
      let tgtX = 0, tgtY = 0

      // Initialise CSS vars so the transition never jumps on first hover
      btn.style.setProperty('--mx', '0px')
      btn.style.setProperty('--my', '0px')
      btn.style.setProperty('--x', '50%')
      btn.style.setProperty('--y', '50%')

      const onMove = (e) => {
        btn.classList.add('magnetic-active')
        const r  = btn.getBoundingClientRect()
        const cx = r.left + r.width  / 2
        const cy = r.top  + r.height / 2
        
        // Update glow position
        btn.style.setProperty('--x', `${e.clientX - r.left}px`)
        btn.style.setProperty('--y', `${e.clientY - r.top}px`)

        // Pull strength: 40% of cursor offset from centre
        tgtX = (e.clientX - cx) * 0.40
        tgtY = (e.clientY - cy) * 0.40
        if (!reqId) reqId = requestAnimationFrame(tick)
      }

      const onLeave = () => {
        btn.classList.remove('magnetic-active')
        tgtX = 0
        tgtY = 0
        if (!reqId) reqId = requestAnimationFrame(tick)
      }

      const onTouchMove = (e) => {
        btn.classList.add('magnetic-active')
        const touch = e.touches[0]
        if (!touch) return
        const r  = btn.getBoundingClientRect()
        const cx = r.left + r.width  / 2
        const cy = r.top  + r.height / 2
        
        // Update glow position
        btn.style.setProperty('--x', `${touch.clientX - r.left}px`)
        btn.style.setProperty('--y', `${touch.clientY - r.top}px`)

        tgtX = (touch.clientX - cx) * 0.40
        tgtY = (touch.clientY - cy) * 0.40
        if (!reqId) reqId = requestAnimationFrame(tick)
      }

      const lerp = (a, b, t) => a + (b - a) * t

      const tick = () => {
        curX = lerp(curX, tgtX, 0.10)
        curY = lerp(curY, tgtY, 0.10)

        btn.style.setProperty('--mx', `${curX.toFixed(3)}px`)
        btn.style.setProperty('--my', `${curY.toFixed(3)}px`)

        const settled =
          Math.abs(curX - tgtX) < 0.05 &&
          Math.abs(curY - tgtY) < 0.05

        if (settled) {
          curX = tgtX; curY = tgtY
          btn.style.setProperty('--mx', `${curX}px`)
          btn.style.setProperty('--my', `${curY}px`)
          reqId = null
        } else {
          reqId = requestAnimationFrame(tick)
        }
      }

      btn.addEventListener('mousemove',  onMove)
      btn.addEventListener('mouseleave', onLeave)
      btn.addEventListener('touchmove',  onTouchMove, { passive: true })
      btn.addEventListener('touchstart', onTouchMove, { passive: true })
      btn.addEventListener('touchend',   onLeave)
      btn.addEventListener('touchcancel', onLeave)

      cleanups.set(btn, () => {
        btn.removeEventListener('mousemove',  onMove)
        btn.removeEventListener('mouseleave', onLeave)
        btn.removeEventListener('touchmove',  onTouchMove)
        btn.removeEventListener('touchstart', onTouchMove)
        btn.removeEventListener('touchend',   onLeave)
        btn.removeEventListener('touchcancel', onLeave)
        if (reqId) { cancelAnimationFrame(reqId); reqId = null }
        btn.style.removeProperty('--mx')
        btn.style.removeProperty('--my')
      })
    }

    document.querySelectorAll('.btn, .hero-tab').forEach(attach)

    // Pick up buttons added dynamically (modals, accordions, etc.)
    const mo = new MutationObserver(() => {
      document.querySelectorAll('.btn, .hero-tab').forEach(attach)
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      mo.disconnect()
      cleanups.forEach(fn => fn())
      cleanups.clear()
    }
  }, [])
}