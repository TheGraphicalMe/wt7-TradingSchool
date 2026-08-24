import { useEffect, useRef } from 'react'
import { TRADER } from '../config'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const c = canvasRef.current; if (!c) return
    const ctx = c.getContext('2d')
    const resize = () => { c.width = window.innerWidth; c.height = window.innerHeight }
    resize(); window.addEventListener('resize', resize)

    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * c.width, y: Math.random() * c.height,
      r: Math.random() * 1.2 + 0.3, a: Math.random() * 0.18 + 0.04,
      dx: (Math.random() - 0.5) * 0.22, dy: (Math.random() - 0.5) * 0.22,
    }))

    let raf
    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height)
      dots.forEach(d => {
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${d.a})`; ctx.fill()
        d.x += d.dx; d.y += d.dy
        if (d.x < 0 || d.x > c.width) d.dx *= -1
        if (d.y < 0 || d.y > c.height) d.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <>
      <section id="hero" className="hero-section">
        {/* ── Video background ── */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}>
          <video
            autoPlay muted loop playsInline
            style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
              display: 'block',
            }}
          >
            <source src="/assets/media/hero-video.mp4" type="video/mp4" />
          </video>
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.75) 100%)',
            zIndex: 1,
          }} />
        </div>

        {/* ── Particle canvas ── */}
        <canvas
          ref={canvasRef}
          style={{
            position: 'absolute',
            top: 0, left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        {/* ── Purple vertical accent bar ── */}
        <div className="h-accent-bar" />

        {/* ── Content ── */}
        <div className="h-content-wrapper">
          <div className="h-eyebrow">
            <span className="h-eyebrow-line" />
            <span className="eyebrow h-eyebrow-text">
              Transforming Traders through Deep Insights
            </span>
          </div>

          <h1 className="h-title">
            <span className="h-title-top">School with</span>
            <span className="h-title-outline">Real Trading</span>
            <span className="h-title-accent">Education</span>
          </h1>

          <p className="h-sub">{TRADER.subTagline}</p>

          <div className="h-ctas">
            <a href="/live-batch" className="btn btn-primary">Become Student →</a>
            <a href="#about" className="btn btn-outline">Meet the Wizard</a>
          </div>
        </div>

      </section>

      <style>{`
        /* ══════════════════════════════════════════════
           HERO SECTION — always exactly 100dvh, no scroll
           ══════════════════════════════════════════════ */
        .hero-section {
          position: relative;
          width: 100%;
          height: 100dvh;
          min-height: 100dvh;
          max-height: 100dvh;
          overflow: hidden;
          display: block;
        }

        /* ── Accent bar ── */
        .h-accent-bar {
          position: absolute;
          top: 0;
          left: clamp(16px, 3vw, 47px);
          width: 4px;
          height: 55%;
          background: linear-gradient(to bottom, var(--accent), transparent);
          z-index: 3;
        }

        /* ── Content Wrapper (desktop default: pinned to bottom) ── */
        .h-content-wrapper {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 4;
          padding: 0 clamp(20px, 5vw, 60px) clamp(28px, 4vh, 52px);
        }

        /* ── Eyebrow ── */
        .h-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
          opacity: 0;
          animation: hSlide 0.7s 0.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .h-eyebrow-line {
          display: block;
          flex-shrink: 0;
          width: 20px;
          height: 1px;
          background: var(--accent);
          box-shadow: 0 0 8px rgba(155,109,255,0.9);
        }
        .h-eyebrow-text {
          color: var(--accent-lt);
          text-shadow: 0 0 15px rgba(155,109,255,0.7), 0 0 30px rgba(155,109,255,0.3);
          font-size: 1.2rem;
        }

        /* ── Title ── */
        .h-title {
          display: flex;
          flex-direction: column;
          font-family: var(--font-display);
          margin-bottom: 14px;
          line-height: 1;
        }
        .h-title-top {
          font-size: clamp(3rem, 6.5vw, 6rem);
          color: #e2e8f0;
          line-height: 1.2;
          opacity: 0;
          animation: hSlide 1s 0.5s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .h-title-outline {
          font-size: clamp(2.2rem, 8.5vw, 8.5rem);
          color: transparent;
          -webkit-text-stroke: 1px rgba(233,217,255,0.85);
          line-height: 1.05;
          opacity: 0;
          animation: hSlide 1s 0.75s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }
        .h-title-accent {
          font-size: clamp(2.2rem, 8vw, 8rem);
          color: var(--accent);
          text-shadow: 0 0 30px rgba(155,81,224,0.4);
          line-height: 0.95;
          opacity: 0;
          animation: hSlide 1s 1s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }

        /* ── Subtitle ── */
        .h-sub {
          font-family: var(--font-body);
          font-size: clamp(1.5rem, 1.5vw, 1.05rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.8);
          max-width: 520px;
          line-height: 1.6;
          margin-bottom: 20px;
          opacity: 0;
          animation: hSlide 0.7s 0.8s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }

        /* ── CTAs ── */
        .h-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          opacity: 0;
          animation: hSlide 0.7s 0.95s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }



        /* ── Animation ── */
        @keyframes hSlide {
          from { opacity: 0; transform: translateX(-50px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ══════════════════════════════════════════════
           MOBILE & TABLET (≤ 900px)
           Key: use vh units for font sizes so everything
           scales with the SCREEN HEIGHT, guaranteeing
           no overflow and no scroll.
           ══════════════════════════════════════════════ */
        @media (max-width: 900px) {
          .h-accent-bar {
            left: clamp(12px, 2.5vw, 24px);
          }

          .h-content-wrapper {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10vh clamp(24px, 5vw, 48px) 3vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
          }

          .h-eyebrow {
            margin-bottom: 2vh;
          }
          .h-eyebrow-text {
            font-size: clamp(0.75rem, 2.2vh, 1.2rem);
          }

          .h-title {
            margin-bottom: 2.5vh;
            gap: 0.5vh;
          }
          .h-title-top {
            font-size: clamp(2rem, 7vh, 4.5rem);
            line-height: 1.1;
          }
          .h-title-outline,
          .h-title-accent {
            font-size: clamp(2.8rem, 10vh, 7.5rem);
            line-height: 1;
          }

          .h-sub {
            font-size: clamp(0.85rem, 2.2vh, 1.4rem);
            max-width: 100%;
            line-height: 1.5;
            margin-bottom: auto;
          }



          .h-ctas {
            gap: 1.5vh;
            flex-direction: column;
            width: 100%;
            margin-top: auto;
            padding-top: 2vh;
          }
          .h-ctas .btn {
            width: 100%;
            padding: 2vh 0;
            font-size: clamp(0.9rem, 2.5vh, 1.4rem);
            text-align: center;
            justify-content: center;
            display: flex;
            align-items: center;
          }
        }

        /* ── Landscape short screens ── */
        @media (max-height: 500px) and (orientation: landscape) {

          .h-sub           { display: none; }
          .h-eyebrow       { margin-bottom: 4px; }
          .h-title         { margin-bottom: 8px; }
          .h-title-top     { font-size: clamp(1rem, 3.5vh, 2rem); }
          .h-title-outline,
          .h-title-accent  { font-size: clamp(1.5rem, 5vh, 3.5rem); }
        }
      `}</style>
    </>
  )
}
