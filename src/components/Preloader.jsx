import { useState, useEffect, useRef } from 'react'

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const doneRef = useRef(false)
  const mountTime = useRef(performance.now())
  const MIN_SHOW = 400 // minimum ms to show so it doesn't flicker

  const finish = () => {
    if (doneRef.current) return
    doneRef.current = true
    setProgress(100)
    const elapsed = performance.now() - mountTime.current
    const remaining = Math.max(0, MIN_SHOW - elapsed)
    setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => onComplete(), 500)
    }, remaining)
  }

  useEffect(() => {
    // If page already loaded (cached), finish immediately
    if (document.readyState === 'complete') { finish(); return }

    // Simulate progress toward 90% while waiting for real load
    let frame
    const start = performance.now()
    const animate = (now) => {
      if (doneRef.current) return
      const elapsed = now - start
      // Quickly reach ~90%, then slow way down
      const fast = Math.min(elapsed / 600, 1) * 90
      setProgress(Math.floor(fast))
      if (fast < 90) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)

    // When everything is truly loaded, jump to 100% and dismiss
    const onLoad = () => finish()
    window.addEventListener('load', onLoad)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('load', onLoad)
    }
  }, [onComplete])

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      {/* Logo text */}
      <div style={{ marginBottom: 8 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          color: '#fff', letterSpacing: '0.04em', lineHeight: 1, textAlign: 'center',
        }}>
          WIZARD
        </div>
        <div style={{
          fontFamily: 'var(--font-cond)', fontSize: '0.7rem', fontWeight: 700,
          letterSpacing: '0.42em', textTransform: 'uppercase',
          color: 'var(--accent)', textAlign: 'center', marginTop: 2,
        }}>
          TRADER 7
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        width: 'clamp(120px, 20vw, 200px)', height: 2,
        background: 'rgba(255,255,255,0.08)', marginTop: 32,
        borderRadius: 1, overflow: 'hidden',
      }}>
        <div style={{
          width: `${progress}%`, height: '100%',
          background: 'var(--accent)',
          boxShadow: '0 0 12px rgba(155,109,255,0.6)',
          transition: 'width 0.1s linear',
        }} />
      </div>
    </div>
  )
}
