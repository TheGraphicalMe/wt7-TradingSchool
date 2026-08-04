import { TRADER, QUICK_TABS } from '../config'
import { useCountUp } from '../hooks/useCountUp'

function CountUpStat({ stat }) {
  const { count, ref } = useCountUp(stat.n, 2200)
  return (
    <div ref={ref}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,4vw,3rem)', color: '#fff', lineHeight: 1 }}>
        {count}{stat.suffix}
      </div>
      <div style={{
        fontFamily: 'var(--font-cond)', fontSize: '0.65rem', fontWeight: 600,
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.3)', marginTop: 4
      }}>
        {stat.label}
      </div>
    </div>
  )
}

export default function HeroBottom() {
  return (
    <div className="hero-bottom-wrapper">

      {/* Quick stats bar */}
      <div className="hero-stats">
        {TRADER.stats.map(s => (
          <CountUpStat key={s.label} stat={s} />
        ))}
      </div>

      {/* Course Quick Tabs */}
      <div className="hero-tabs-wrap">
        {QUICK_TABS.map((tab, i) => (
          <a key={i} href={tab.targetId} className={`hero-tab ${tab.theme ? `hero-tab-${tab.theme}` : ''}`}>
            <span className="hero-tab-dot blinking-dot" style={{ background: tab.color, boxShadow: `0 0 12px ${tab.shadow}`, position: 'relative', zIndex: 1 }} />
            <span style={{ position: 'relative', zIndex: 1 }}>{tab.label}</span>
            {tab.isBlinking && <span className="ai-tab-badge">NEW</span>}
          </a>
        ))}
      </div>

      <style>{`
        .hero-bottom-wrapper {
          padding: 28px 5vw 48px;
          border-top: 1px solid rgba(255,255,255,0.08);
          background: transparent;
        }

        /* ── Stats ───────────────────────────────────────────── */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(4, auto);
          gap: clamp(24px, 4vw, 48px);
          opacity: 0;
          animation: slideLeft 0.7s 1.05s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }

        /* ── Tabs wrap ───────────────────────────────────────── */
        .hero-tabs-wrap {
          display: flex;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 32px;
          opacity: 0;
          animation: slideLeft 0.7s 1.15s cubic-bezier(0.25,0.46,0.45,0.94) forwards;
        }

        /* ── Tab base ────────────────────────────────────────── */
        .hero-tab {
          display: flex;
          align-items: center;
          padding: 16px 32px;
          background: linear-gradient(135deg, rgba(155,109,255,0.25) 0%, rgba(155,109,255,0.1) 100%);
          border: 1.5px solid rgba(155,109,255,0.5);
          border-radius: 100px;
          font-family: var(--font-body);
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.02em;

          /* ── Magnetic + enlarge — matches .btn ── */
          transition:
            transform    0.45s cubic-bezier(0.23, 1, 0.32, 1),
            box-shadow   0.35s cubic-bezier(0.23, 1, 0.32, 1),
            background   0.3s ease,
            border-color 0.3s ease;
          box-shadow: 0 8px 32px rgba(155,109,255,0.25), inset 0 0 16px rgba(155,109,255,0.15);
          backdrop-filter: blur(8px);
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          position: relative;
          overflow: hidden;
        }

        /* Angled shine sweep */
        .hero-tab::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.1);
          transform: translateX(-110%) skewX(-12deg);
          transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
          border-radius: inherit;
          pointer-events: none;
          z-index: 0;
        }
        @media (hover: hover) {
          .hero-tab:hover::before { transform: translateX(110%) skewX(-12deg); }
        }
        .hero-tab:active::before, .hero-tab.magnetic-active::before { transform: translateX(110%) skewX(-12deg); }



        /* JS writes --mx/--my; CSS stacks scale on top */
        @media (hover: hover) {
          .hero-tab:hover {
            transform: translate(var(--mx, 0px), var(--my, 0px)) scale(1.07);
            background: linear-gradient(135deg, rgba(155,109,255,0.4) 0%, rgba(155,109,255,0.2) 100%);
            border-color: rgba(155,109,255,0.8);
            box-shadow: 0 12px 48px rgba(155,109,255,0.4), inset 0 0 24px rgba(155,109,255,0.2);
          }
        }
        .hero-tab:active, .hero-tab.magnetic-active {
          transform: translate(var(--mx, 0px), var(--my, 0px)) scale(1.07);
          background: linear-gradient(135deg, rgba(155,109,255,0.4) 0%, rgba(155,109,255,0.2) 100%);
          border-color: rgba(155,109,255,0.8);
          box-shadow: 0 12px 48px rgba(155,109,255,0.4), inset 0 0 24px rgba(155,109,255,0.2);
        }

        .hero-tab-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 14px;
          flex-shrink: 0;
        }

        /* ── Dot blink ───────────────────────────────────────── */
        @keyframes blinkDot {
          from { opacity: 0.3; transform: scale(0.8); }
          to   { opacity: 1;   transform: scale(1); }
        }
        .blinking-dot {
          animation: blinkDot 2.5s ease-in-out infinite alternate;
        }

        /* ── Purple Tab Glow ─────────────────────────────────── */
        @keyframes tabBreathePurple {
          from { box-shadow: 0 0 5px rgba(155,109,255,0.8), 0 0 10px rgba(155,109,255,0.6), 0 0 15px rgba(135,89,235,0.4); border-color: rgba(155,109,255,0.6); }
          to   { box-shadow: 0 0 10px rgba(155,109,255,0.9), 0 0 20px rgba(155,109,255,0.7), 0 0 30px rgba(135,89,235,0.5), 0 0 40px rgba(135,89,235,0.3); border-color: rgba(155,109,255,1); }
        }
        .hero-tab-purple {
          background-color: rgba(155,109,255,0.1) !important;
          background-image: none !important;
          color: #f3ebff !important;
          animation: tabBreathePurple 2.5s ease-in-out infinite alternate !important;
        }

        /* ── Green Tab Glow ──────────────────────────────────── */
        @keyframes tabBreatheGreen {
          from { box-shadow: 0 0 5px rgba(0,229,160,0.8), 0 0 10px rgba(0,229,160,0.6), 0 0 15px rgba(0,179,119,0.4); border-color: rgba(0,229,160,0.6); }
          to   { box-shadow: 0 0 10px rgba(0,229,160,0.9), 0 0 20px rgba(0,229,160,0.7), 0 0 30px rgba(0,179,119,0.5), 0 0 40px rgba(0,179,119,0.3); border-color: rgba(0,229,160,1); }
        }
        .hero-tab-green {
          background-color: rgba(0,229,160,0.1) !important;
          background-image: none !important;
          color: #d0fff4 !important;
          animation: tabBreatheGreen 2.5s ease-in-out infinite alternate !important;
        }

        /* ── Orange Tab Glow ─────────────────────────────────── */
        @keyframes tabBreatheOrange {
          from { box-shadow: 0 0 5px rgba(255,169,77,0.8), 0 0 10px rgba(255,169,77,0.6), 0 0 15px rgba(255,130,50,0.4); border-color: rgba(255,169,77,0.6); }
          to   { box-shadow: 0 0 10px rgba(255,169,77,0.9), 0 0 20px rgba(255,169,77,0.7), 0 0 30px rgba(255,130,50,0.5), 0 0 40px rgba(255,130,50,0.3); border-color: rgba(255,169,77,1); }
        }
        .hero-tab-orange {
          background-color: rgba(255,169,77,0.1) !important;
          background-image: none !important;
          color: #ffe0b2 !important;
          animation: tabBreatheOrange 2.5s ease-in-out infinite alternate !important;
        }

        /* ── Yellow/Gold Tab Glow ────────────────────────────── */
        @keyframes tabBreatheYellow {
          from { box-shadow: 0 0 5px rgba(255,215,0,0.8), 0 0 10px rgba(255,215,0,0.6), 0 0 15px rgba(218,165,32,0.4); border-color: rgba(255,215,0,0.6); }
          to   { box-shadow: 0 0 10px rgba(255,215,0,0.9), 0 0 20px rgba(255,215,0,0.7), 0 0 30px rgba(218,165,32,0.5), 0 0 40px rgba(218,165,32,0.3); border-color: rgba(255,215,0,1); }
        }
        .hero-tab-yellow {
          background-color: rgba(255,215,0,0.1) !important;
          background-image: none !important;
          color: #fff2cc !important;
          animation: tabBreatheYellow 2.5s ease-in-out infinite alternate !important;
        }

        /* ── NEW Badge ───────────────────────────────────────── */
        @keyframes badgeBounce {
          from { opacity: 0.6; transform: scale(0.95); }
          to   { opacity: 1;   transform: scale(1.05); box-shadow: 0 0 12px rgba(0,229,160,0.4); border-color: rgba(0,229,160,0.8); }
        }
        .ai-tab-badge {
          margin-left: 12px;
          padding: 3px 10px;
          border-radius: 20px;
          font-family: var(--font-cond, sans-serif);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: rgba(0,229,160,0.2);
          border: 1px solid rgba(0,229,160,0.4);
          color: #00e5a0;
          animation: badgeBounce 2.5s ease-in-out infinite alternate;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          position: relative;
          z-index: 1;
        }

        /* ── slideLeft keyframe ── */
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Tablet & Mobile ─────────────────────────────────── */
        @media (max-width: 900px) {
          .hero-bottom-wrapper {
            padding: 20px 5vw 32px;
          }
          .hero-stats {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px 16px !important;
          }
          .hero-tabs-wrap {
            margin-top: 24px !important;
            gap: 18px !important;
            flex-wrap: wrap !important;
            justify-content: stretch !important;
          }
          .hero-tab {
            padding: 16px 28px !important;
            font-size: 1.2rem !important;
            flex: 1 1 auto;
            justify-content: center;
            min-width: calc(50% - 18px);
          }
          .hero-tab-dot {
            width: 8px !important;
            height: 8px !important;
            margin-right: 10px !important;
          }
          /* Ensure touch sizes remain slightly constrained */
        }

        /* ── Small phones ──────────────────────────────────── */
        @media (max-width: 480px) {
          .hero-tabs-wrap {
            gap: 29px !important;
          }
          .hero-tab {
            padding: 14px 20px !important;
            font-size: 1.1rem !important;
            min-width: calc(50% - 14px);
          }
          .ai-tab-badge { display: none; }
        }
      `}</style>
    </div>
  )
}