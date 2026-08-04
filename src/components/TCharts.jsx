import { useState, useEffect, useCallback, useMemo } from 'react'
import { CHARTS } from '../config'

export default function TCharts() {
  // Sort charts from newest to oldest by date
  const sortedCharts = useMemo(() => {
    return [...CHARTS].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [])

  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = sortedCharts.length

  const next = useCallback(() => setActive(i => (i + 1) % total), [total])
  const prev = useCallback(() => setActive(i => (i - 1 + total) % total), [total])

  // Auto-advance every 6 s, pause on hover
  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [paused, next])

  // Keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const chart = sortedCharts[active]
  const signalColor = chart.signal === 'BULLISH' ? '#50c878' : '#ff5555'

  return (
    <section id="insights" className="section" style={{ borderTop: '1px solid rgba(155,109,255,0.15)', background: 'rgba(0,0,0,0.4)' }}>
      <div className="container">

        {/* ── Header (matches Courses layout) ── */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', flexWrap: 'wrap', gap: 32, marginBottom: 64,
        }}>
          <div className="sr sr-left">
            <p className="eyebrow" style={{ marginBottom: 16 }}>Live Analysis</p>
            <h2 className="heading" style={{ fontSize: 'clamp(3rem,7vw,7rem)', color: '#fff' }}>
              MARKET<br/>
              <span style={{ color: 'var(--accent)' }}>INSIGHTS</span>
            </h2>
          </div>
          <div className="sr sr-right" style={{ maxWidth: 360 }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.95rem',
              fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75,
            }}>
              Real chart analysis published by Wizard Trader 7 on&nbsp;TradingView.
              Study live setups, supply‑demand zones, and trade ideas.
            </p>
          </div>
        </div>

        {/* ── Slider ── */}
        <div
          className="sr sr-scale-left"
          style={{ position: 'relative' }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card */}
          <div className="tchart-card">
            {/* Snapshot image */}
            <a
              href={chart.tvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tchart-snapshot-wrap"
            >
              <img
                key={chart.id}
                src={chart.snapshot}
                alt={chart.title}
                className="tchart-snapshot-img"
                loading="lazy"
              />
              {/* Dark gradient overlay */}
              <div className="tchart-snapshot-overlay" />
            </a>

            {/* Info bar */}
            <div className="tchart-info">
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 className="tchart-title">{chart.title}</h3>
                <p className="tchart-caption">{chart.caption}</p>
              </div>

              {/* Tags */}
              <div className="tchart-tags">
                <span className="tchart-tag">{chart.symbol}</span>
                <span className="tchart-tag" style={{ background: `${signalColor}22`, borderColor: `${signalColor}55`, color: signalColor }}>
                  {chart.signal}
                </span>
              </div>
            </div>

            {/* CTA */}
            <a
              href={chart.tvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tchart-cta"
            >
              View Full Analysis on TradingView →
            </a>
          </div>

          {/* ── Arrows ── */}
          <button className="tchart-arrow tchart-arrow-left" onClick={prev} aria-label="Previous chart">‹</button>
          <button className="tchart-arrow tchart-arrow-right" onClick={next} aria-label="Next chart">›</button>
        </div>

        {/* ── Dots ── */}
        <div className="tchart-dots">
          {sortedCharts.map((_, i) => (
            <button
              key={i}
              className={`tchart-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`Go to chart ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        .tchart-card {
          display: block;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 20px;
          overflow: hidden;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .tchart-card:hover {
          border-color: rgba(155,109,255,0.3);
          box-shadow: 0 8px 40px rgba(155,109,255,0.12);
        }

        /* Snapshot area */
        .tchart-snapshot-wrap {
          position: relative;
          width: 100%;
          height: clamp(300px, 40vw, 520px);
          overflow: hidden;
          background: #0a0a0a;
          cursor: pointer;
        }
        .tchart-snapshot-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .tchart-snapshot-wrap:hover .tchart-snapshot-img {
          transform: scale(1.03);
        }
        .tchart-snapshot-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.08) 60%, rgba(0,0,0,0.5) 100%);
          pointer-events: none;
        }



        /* Info section */
        .tchart-info {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 28px 32px 16px;
          flex-wrap: wrap;
        }
        .tchart-title {
          font-family: var(--font-cond);
          font-weight: 900;
          text-transform: uppercase;
          font-size: clamp(1.2rem, 2.5vw, 1.8rem);
          color: #fff;
          letter-spacing: 0.04em;
          margin: 0 0 8px;
        }
        .tchart-caption {
          font-family: var(--font-body);
          font-size: 0.95rem;
          font-weight: 300;
          color: rgba(255,255,255,0.6);
          line-height: 1.65;
          margin: 0;
        }

        .tchart-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        .tchart-tag {
          padding: 5px 14px;
          border-radius: 4px;
          background: rgba(155,109,255,0.1);
          border: 1px solid rgba(155,109,255,0.25);
          font-family: var(--font-cond);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--accent-lt);
        }

        .tchart-cta {
          display: block;
          padding: 16px 32px 24px;
          font-family: var(--font-cond);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--accent);
          transition: color 0.2s;
          text-decoration: none;
        }
        .tchart-cta:hover { color: #fff; }

        /* Arrows */
        .tchart-arrow {
          position: absolute;
          top: calc(clamp(300px, 40vw, 520px) / 2);
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.15);
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(8px);
          color: #fff;
          font-size: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .tchart-arrow:hover {
          background: rgba(155,109,255,0.3);
          border-color: var(--accent);
          transform: translateY(-50%) scale(1.1);
        }
        .tchart-arrow-left  { left: -24px; }
        .tchart-arrow-right { right: -24px; }

        /* Dots */
        .tchart-dots {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 28px;
        }
        .tchart-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1.5px solid rgba(255,255,255,0.2);
          background: transparent;
          cursor: pointer;
          transition: all 0.25s;
          padding: 0;
        }
        .tchart-dot.active {
          background: var(--accent);
          border-color: var(--accent);
          box-shadow: 0 0 10px rgba(155,109,255,0.5);
          transform: scale(1.2);
        }
        .tchart-dot:hover:not(.active) {
          border-color: rgba(255,255,255,0.5);
        }

        @media (max-width: 768px) {
          .tchart-arrow-left  { left: 4px; }
          .tchart-arrow-right { right: 4px; }
          .tchart-arrow {
            top: 90px;
            width: 30px;
            height: 30px;
            font-size: 1.1rem;
          }
          .tchart-info { padding: 16px 16px 10px; flex-direction: column; gap: 12px; }
          .tchart-cta { padding: 10px 16px 20px; }
          .tchart-snapshot-wrap { height: 180px; }
        }
      `}</style>
    </section>
  )
}
