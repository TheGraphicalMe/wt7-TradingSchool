import { useState, useEffect, useRef, useCallback } from 'react'
import { TESTIMONIALS } from '../config'

function ReviewVideo() {
  const [isMuted, setIsMuted] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef              = useRef(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
    } else {
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <div className="reviews-video-container sr sr-bottom">
      <div className="beautiful-video-frame" onClick={togglePlay} style={{ cursor: 'pointer' }}>
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dtbwolk88/video/upload/q_auto/f_auto/v1775226376/VID_20260403_141431_249_unjics.mp4"
          poster="https://res.cloudinary.com/dtbwolk88/image/upload/v1775248787/Screenshot_2026-04-04_020612_y7mc82.png"
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          className="reviews-video"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Central Play Button Overlay */}
        {!isPlaying && (
          <div className="review-play-overlay">
            <div className="review-play-btn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
        )}

        {/* Simple mute icon — bottom right, only when muted */}
        {isMuted && (
          <button
            onClick={(e) => { e.stopPropagation(); setIsMuted(false); }}
            className="mute-btn"
            aria-label="Unmute video"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <line x1="23" y1="9" x2="17" y2="15"/>
              <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
          </button>
        )}

        {/* Unmuted indicator — show sound-on icon, click to mute */}
        {!isMuted && (
          <button
            onClick={(e) => { e.stopPropagation(); setIsMuted(true); }}
            className="mute-btn"
            aria-label="Mute video"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          </button>
        )}
      </div>

      <style>{`
        .mute-btn {
          position: absolute;
          bottom: 18px;
          right: 18px;
          background: rgba(0,0,0,0.55);
          border: none;
          color: rgba(255,255,255,0.75);
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: color 0.2s, background 0.2s;
          padding: 0;
        }
        .mute-btn:hover {
          color: #fff;
          background: rgba(0,0,0,0.8);
        }
        .review-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.25);
          border-radius: 20px;
          z-index: 5;
        }
        .review-play-btn {
          width: 68px;
          height: 68px;
          border-radius: 50%;
          background: rgba(155,109,255,0.85);
          border: 2px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 0 30px rgba(155,109,255,0.5);
          transition: transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .review-play-btn svg {
          margin-left: 4px; /* visually center play triangle */
        }
        .beautiful-video-frame:hover .review-play-btn {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  )
}

function ReviewSlider() {
  const [active, setActive]   = useState(0)
  const [isAnim, setIsAnim]   = useState(false)
  const autoRef               = useRef(null)
  const touchStartX           = useRef(null)
  const total                 = TESTIMONIALS.length
  const AUTO_DELAY            = 4000

  const goTo = useCallback((next) => {
    if (isAnim) return
    setIsAnim(true)
    setTimeout(() => { setActive(next); setIsAnim(false) }, 380)
  }, [isAnim])

  const next = useCallback(() => goTo((active + 1) % total), [active, total, goTo])
  const prev = useCallback(() => goTo((active - 1 + total) % total), [active, total, goTo])

  useEffect(() => {
    autoRef.current = setInterval(next, AUTO_DELAY)
    return () => clearInterval(autoRef.current)
  }, [next])

  const manualNav = (fn) => {
    clearInterval(autoRef.current)
    fn()
    autoRef.current = setInterval(next, AUTO_DELAY)
  }

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX }
  const onTouchEnd   = (e) => {
    if (touchStartX.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) dx < 0 ? manualNav(next) : manualNav(prev)
    touchStartX.current = null
  }

  const t = TESTIMONIALS[active]

  return (
    <div style={{ position:'relative', height: '100%', display: 'flex', flexDirection: 'column', maxWidth: '480px', margin: '0 auto', width: '100%' }}>

      {/* Card */}
      <div onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={{ overflow:'hidden', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div key={active} style={{ background:'linear-gradient(135deg, rgba(20,20,25,0.9) 0%, rgba(10,10,15,0.95) 100%)', border:'1px solid rgba(155,109,255,0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.5)', padding:'40px 32px', display:'flex', flexDirection:'column', position:'relative', overflow:'hidden', flex: 1, minHeight: 320, animation:'slideInFresh 0.4s cubic-bezier(0.22,1,0.36,1) forwards', borderRadius: '24px' }}>
          <div style={{ position:'absolute',top:-10,left:16,fontFamily:'Georgia,serif',fontSize:'10rem',color:'rgba(155,109,255,0.08)',lineHeight:1,pointerEvents:'none',userSelect:'none',fontWeight:900 }}>"</div>
          <div style={{ display:'flex',gap:3,marginBottom:24,position:'relative',zIndex:1 }}>
            {Array(5).fill(null).map((_,j) => <span key={j} style={{ color:'var(--accent)',fontSize:'1rem' }}>★</span>)}
          </div>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'1.25rem', fontWeight:300, fontStyle:'italic', color:'rgba(255,255,255,0.95)', lineHeight:1.7, flex:1, marginBottom:32, position:'relative', zIndex:1, textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>"{t.text}"</p>
          <div style={{ height:1,background:'rgba(155,109,255,0.15)',marginBottom:24 }} />
          <div style={{ display:'flex',alignItems:'center',gap:16 }}>
            <div style={{ width:48,height:48,borderRadius:'50%',flexShrink:0,background:'rgba(155,109,255,0.15)',border:'1px solid rgba(155,109,255,0.4)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-display)',fontSize:'1.3rem',color:'var(--accent)' }}>{t.name[0]}</div>
            <div>
              <div style={{ fontFamily:'var(--font-cond)',fontSize:'1.05rem',fontWeight:800,textTransform:'uppercase',letterSpacing:'0.05em',color:'#fff' }}>{t.name}</div>
              <div style={{ display:'flex',alignItems:'center',gap:8,marginTop:4,flexWrap:'wrap' }}>
                <span style={{ fontFamily:'var(--font-body)',fontSize:'0.8rem',color:'rgba(255,255,255,0.65)' }}>{t.course}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div style={{ display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:24,gap:16 }}>
        <button onClick={() => manualNav(prev)}
          style={{ width:48,height:48,borderRadius:'50%',background:'rgba(255,255,255,0.05)',border:'1px solid rgba(255,255,255,0.15)',color:'rgba(255,255,255,0.8)',fontSize:'1.2rem',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0,transition:'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(155,109,255,0.6)'; e.currentTarget.style.color='#fff' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.15)'; e.currentTarget.style.color='rgba(255,255,255,0.8)' }}>←</button>

        <div style={{ display:'flex',gap:8,alignItems:'center',flex:1,justifyContent:'center', flexWrap: 'wrap' }}>
          {TESTIMONIALS.map((_,i) => (
            <button key={i} onClick={() => manualNav(() => goTo(i))}
              style={{ width:i===active?24:8,height:8,borderRadius:4,border:'none',cursor:'pointer',padding:0,background:i===active?'var(--accent)':'rgba(255,255,255,0.2)',transition:'all 0.35s cubic-bezier(0.22,1,0.36,1)',boxShadow:i===active?'0 0 10px rgba(155,109,255,0.8)':'none' }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button onClick={() => manualNav(next)}
          style={{ width:48,height:48,borderRadius:'50%',background:'rgba(155,109,255,0.15)',border:'1px solid rgba(155,109,255,0.4)',color:'var(--accent)',fontSize:'1.2rem',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',flexShrink:0,transition:'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.background='rgba(155,109,255,0.3)'; e.currentTarget.style.color='#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background='rgba(155,109,255,0.15)'; e.currentTarget.style.color='var(--accent)' }}>→</button>
      </div>

      {/* Progress bar */}
      <div style={{ marginTop:20,height:2,background:'rgba(255,255,255,0.08)',overflow:'hidden', borderRadius: 2 }}>
        <div key={active} style={{ height:'100%',background:'var(--accent)',boxShadow:'0 0 8px rgba(155,109,255,0.6)',animation:`progressBar ${AUTO_DELAY}ms linear forwards` }} />
      </div>

      {/* Counter */}
      <div style={{ marginTop:12,textAlign:'center',fontFamily:'var(--font-cond)',fontSize:'0.65rem',fontWeight:700,letterSpacing:'0.25em',textTransform:'uppercase',color:'rgba(255,255,255,0.5)' }}>
        {active + 1} / {total}
      </div>

      <style>{`
        @keyframes slideInFresh {
          from { opacity:0; transform:translateX(40px) scale(0.97); }
          to   { opacity:1; transform:translateX(0) scale(1); }
        }
        @keyframes progressBar {
          from { width:0%; }
          to   { width:100%; }
        }
      `}</style>
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="section" style={{ background:'rgba(17,17,17,0.6)',borderTop:'1px solid rgba(155,109,255,0.15)',borderBottom:'1px solid rgba(155,109,255,0.15)' }}>
      <div className="container">

        <div style={{ marginBottom:48 }}>
          <div className="sr sr-left">
            <p className="eyebrow" style={{ marginBottom:16 }}>Student Reviews</p>
            <h2 className="heading" style={{ fontSize:'clamp(3rem,7vw,7rem)',color:'#fff',lineHeight:0.92 }}>
              WHAT THEY<br/><span style={{ color:'var(--accent)' }}>SAY.</span>
            </h2>
          </div>
        </div>

        <div className="reviews-grid">
          <ReviewVideo />

          <div className="reviews-slider-container sr sr-bottom" style={{ transitionDelay: '0.1s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ReviewSlider />
          </div>
        </div>

      </div>

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .reviews-video-container {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .beautiful-video-frame {
          position: relative;
          width: 100%;
          max-width: 360px;
          border-radius: 28px;
          padding: 3px;
          background: linear-gradient(135deg,
            rgba(155,109,255,1)   0%,
            rgba(100,50,220,0.5) 40%,
            rgba(155,109,255,0.1) 60%,
            rgba(196,160,255,0.9) 100%
          );
          box-shadow:
            0 0 18px rgba(155,109,255,0.4),
            0 0 50px rgba(155,109,255,0.2),
            0 20px 50px rgba(0,0,0,0.6);
          overflow: hidden;
          animation: frameGlow 3s ease-in-out infinite alternate;
          transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes frameGlow {
          from {
            box-shadow:
              0 0 18px rgba(155,109,255,0.4),
              0 0 50px rgba(155,109,255,0.2),
              0 20px 50px rgba(0,0,0,0.6);
          }
          to {
            box-shadow:
              0 0 28px rgba(155,109,255,0.75),
              0 0 80px rgba(155,109,255,0.38),
              0 20px 50px rgba(0,0,0,0.6);
          }
        }

        .beautiful-video-frame:hover {
          transform: translateY(-5px);
        }

        .reviews-video {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 20px;
        }

        @media (max-width: 900px) {
          .reviews-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }
      `}</style>
    </section>
  )
}