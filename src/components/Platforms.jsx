import { PLATFORMS } from '../config'

export default function Platforms() {
  return (
    <section id="platforms" className="section" style={{ background: 'rgba(0,0,0,0.6)', borderTop: '1px solid rgba(155,109,255,0.15)', position: 'relative', zIndex: 10 }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <p className="eyebrow" style={{ justifyContent: 'center' }}>Recommended Brokers</p>
          <h2 className="heading" style={{ fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#fff', marginBottom: 16 }}>
            TRADING <span style={{ color: 'var(--accent)' }}>PLATFORMS</span>
          </h2>
          <div style={{ background: 'rgba(155,109,255,0.15)', border: '1px solid rgba(155,109,255,0.4)', borderRadius: 12, padding: '16px 24px', maxWidth: 600, margin: '0 auto', boxShadow: '0 0 30px rgba(155,109,255,0.2)' }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.15rem', color: '#fff', margin: 0, fontWeight: 400, lineHeight: 1.5 }}>
              Open a free account and get a <span style={{ color: 'var(--accent-lt)', fontWeight: 700, letterSpacing: '0.02em' }}>10% discount on fees</span> plus <span style={{ color: 'var(--accent-lt)', fontWeight: 700, letterSpacing: '0.02em' }}>VIP Community access</span> for free.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'clamp(16px, 3vw, 24px)' }}>
          {PLATFORMS.map((platform, i) => {
            const direction = i % 2 === 0 ? 'sr-scale-left' : 'sr-scale-right';
            const stagger = `sr-stagger-${(i % 2) + 1}`;
            return (
              <div key={i} className={`sr ${direction} ${stagger}`} style={{
                flex: '1 1 280px',
                maxWidth: 380,
                width: '100%',
                display: 'flex',
              }}>
                <a href={platform.link} target="_blank" rel="noopener noreferrer" style={{
                  background: platform.highlight ? 'rgba(30, 24, 40, 0.8)' : 'rgba(20, 20, 22, 0.8)',
                  borderRadius: 20,
                  border: platform.highlight ? '1px solid rgba(155,109,255,0.6)' : '1px solid rgba(255,255,255,0.06)',
                  padding: 'clamp(20px, 4vw, 28px) clamp(20px, 4vw, 28px) clamp(24px, 5vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  width: '100%',
                  boxShadow: platform.highlight ? '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(155,109,255,0.3), 0 0 35px rgba(155,109,255,0.3)' : '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  transform: 'translateY(0)'
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = platform.highlight ? 'rgba(155,109,255,1)' : 'rgba(155,109,255,0.4)';
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = platform.highlight 
                      ? '0 30px 60px rgba(0,0,0,0.6), 0 0 60px rgba(155,109,255,0.6), inset 0 1px 0 rgba(155,109,255,0.6)'
                      : '0 30px 60px rgba(0,0,0,0.6), 0 0 40px rgba(155,109,255,0.15), inset 0 1px 0 rgba(155,109,255,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = platform.highlight ? 'rgba(155,109,255,0.6)' : 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = platform.highlight
                      ? '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(155,109,255,0.3), 0 0 35px rgba(155,109,255,0.3)'
                      : '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)';
                  }}
                >

                  {/* Very subtle top gradient glow */}
                  <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60%', height: 100, background: platform.highlight ? 'radial-gradient(ellipse at top, rgba(155,109,255,0.6), transparent 70%)' : 'radial-gradient(ellipse at top, rgba(155,109,255,0.15), transparent 70%)', pointerEvents: 'none' }} />

                  {/* Header: Logo, Title, Badge, Arrow */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <div style={{ width: 48, height: 48, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                        <img src={platform.logo} alt={platform.title} style={{ width: '100%', height: '100%', objectFit: 'contain' }} onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} />
                        <span style={{ display: 'none', color: '#000', fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-display)' }}>{platform.title.charAt(0)}</span>
                      </div>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.3rem, 3vw, 1.5rem)', color: '#fff', margin: 0, lineHeight: 1.2 }}>{platform.title}</h3>
                        <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-lt)', background: 'rgba(155,109,255,0.1)', padding: '4px 8px', borderRadius: 6, display: 'inline-block', marginTop: 6, border: '1px solid rgba(155,109,255,0.2)' }}>
                          {platform.badge}
                        </div>
                      </div>
                    </div>

                    {/* Arrow Button */}
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', transition: 'background 0.2s' }}
                      onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                      onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, marginBottom: 24, flex: 1 }}>
                    {platform.desc}
                  </p>

                  {/* Promo Code if exists */}
                  {platform.code && (
                    <div style={{ marginBottom: 20, background: 'rgba(155,109,255,0.05)', border: '1px dashed rgba(155,109,255,0.4)', padding: '10px 14px', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)', flexShrink: 0 }}>Use partner code:</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--accent-lt)', letterSpacing: '0.05em', wordBreak: 'break-all' }}>
                          {platform.code}
                        </span>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            navigator.clipboard.writeText(platform.code);
                          }}
                          style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--accent-lt)', display: 'flex', alignItems: 'center', padding: '4px' }}
                          title="Copy"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Stats Row */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 28 }}>
                    {platform.stats.map((stat, idx) => (
                      <div key={idx} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 10, padding: '12px 6px', textAlign: 'center' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1rem, 2vw, 1.15rem)', color: '#fff', marginBottom: 2 }}>{stat.value}</div>
                        <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.5rem', fontWeight: 600, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.5)' }}>{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '1rem', background: 'var(--accent)', color: '#fff' }}>
                    Open Free Account →
                  </div>
                </a>
              </div>
            );
          })}
        </div>

        {/* ── VIP Community Banner ── */}
        <div className="vip-banner reveal" style={{ marginTop: 56 }}>
          {/* Animated shimmer line */}
          <div className="vip-shimmer" />

          <div className="vip-banner-inner">
            {/* Crown icon */}
            <div className="vip-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 19h20v2H2v-2zm2-3l3-9 5 6 3-4 5 7H4z" />
              </svg>
            </div>

            <div className="vip-text">
              <span className="vip-label">Exclusive Offer</span>
              <span className="vip-message">
                Open a free account through our link &amp; get
                <strong> Free VIP Telegram Community Access</strong>
              </span>
            </div>

            <a
              href="https://t.me/WT7_VIP_Community_Bot"
              className="vip-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claim Free Access
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Competition Banner (Ultra Compact) ── */}
        <div id="competition" className="comp-banner reveal" style={{ marginTop: 40 }}>
          <div className="comp-shimmer" />
          <div className="comp-banner-inner">
            <div className="comp-left">
              <div className="comp-badge">BIG ANNOUNCEMENT</div>
              <h3 className="comp-title">Win a Fully Sponsored Dubai Trip ✈️</h3>
              <p className="comp-desc">
                Top 3 highest returns by <strong>July 28th</strong> win an all-expenses-paid trip, personal mentorship, and a 1-on-1 meetup!
              </p>
              <div className="comp-steps-inline">
                <span><strong style={{ color: '#FFD700' }}>1.</strong> Open XM Account (Code: <strong>WIZARDTRADER</strong>)</span>
                <span className="comp-dot">•</span>
                <span><strong style={{ color: '#FFD700' }}>2.</strong> Deposit $100+</span>
                <span className="comp-dot">•</span>
                <span><strong style={{ color: '#FFD700' }}>3.</strong> Trade & Be Active</span>
              </div>
            </div>

            <div className="comp-right">
              <a href="https://affs.click/DDB1D" target="_blank" rel="noopener noreferrer" className="comp-cta-btn">
                Register to Win 🏆
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* ── Competition Banner (Ultra Compact) ───────────────────────────────────────── */
        .comp-banner {
          position: relative;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(20,20,22,0.9), rgba(40,30,10,0.95));
          border: 1px solid rgba(255,215,0,0.4);
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1), 0 0 20px rgba(255,215,0,0.15);
        }

        .comp-shimmer {
          position: absolute;
          top: 0; left: -100%;
          width: 50%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,215,0,1), transparent);
          animation: shimmerSlide 3s linear infinite;
        }

        .comp-banner-inner {
          padding: 24px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          flex-wrap: wrap;
        }

        .comp-left {
          flex: 1;
          min-width: 280px;
        }

        .comp-badge {
          display: inline-block;
          font-family: var(--font-cond);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.2em;
          color: #000;
          background: #FFD700;
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .comp-title {
          font-family: var(--font-display);
          font-size: clamp(1.2rem, 3vw, 1.5rem);
          color: #fff;
          margin: 0 0 8px 0;
          text-shadow: 0 2px 10px rgba(255,215,0,0.2);
        }

        .comp-desc {
          font-family: var(--font-body);
          font-size: 0.9rem;
          color: rgba(255,255,255,0.75);
          margin: 0 0 16px 0;
          line-height: 1.4;
        }
        
        .comp-desc strong {
          color: #FFD700;
        }

        .comp-steps-inline {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          font-family: var(--font-body);
          font-size: 0.85rem;
          color: rgba(255,255,255,0.9);
          background: rgba(255,215,0,0.05);
          border: 1px solid rgba(255,215,0,0.15);
          padding: 10px 16px;
          border-radius: 8px;
        }

        .comp-dot {
          color: rgba(255,255,255,0.3);
        }

        .comp-right {
          flex-shrink: 0;
        }

        .comp-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 28px;
          background: linear-gradient(90deg, #FFD700, #FDB931);
          color: #000;
          font-family: var(--font-cond);
          font-size: 0.95rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(255,215,0,0.3);
          white-space: nowrap;
        }

        .comp-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255,215,0,0.5);
        }

        @media (max-width: 768px) {
          .comp-banner-inner {
            flex-direction: column;
            align-items: flex-start;
            padding: 20px;
          }
          .comp-cta-btn {
            width: 100%;
          }
        }

        /* ── VIP Banner ───────────────────────────────────────── */
        .vip-banner {
          position: relative;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(155,109,255,0.12) 0%, rgba(100,50,220,0.06) 50%, rgba(155,109,255,0.1) 100%);
          border: 1px solid rgba(155,109,255,0.35);
          overflow: hidden;
          box-shadow: 0 0 40px rgba(155,109,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05);
          animation: vipPulse 4s ease-in-out infinite alternate;
        }

        @keyframes vipPulse {
          from { box-shadow: 0 0 30px rgba(155,109,255,0.1), inset 0 1px 0 rgba(255,255,255,0.05); border-color: rgba(155,109,255,0.3); }
          to   { box-shadow: 0 0 55px rgba(155,109,255,0.22), inset 0 1px 0 rgba(255,255,255,0.08); border-color: rgba(155,109,255,0.6); }
        }

        /* Moving shimmer line at the top */
        .vip-shimmer {
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(155,109,255,0.8), transparent);
          animation: shimmerSlide 3s linear infinite;
        }
        @keyframes shimmerSlide {
          from { left: -60%; }
          to   { left: 160%; }
        }

        .vip-banner-inner {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 28px;
          flex-wrap: wrap;
        }

        .vip-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(155,109,255,0.15);
          border: 1px solid rgba(155,109,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .vip-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
          min-width: 200px;
        }

        .vip-label {
          font-family: var(--font-cond);
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--accent-lt);
        }

        .vip-message {
          font-family: var(--font-body);
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          color: rgba(255,255,255,0.8);
          line-height: 1.5;
        }

        .vip-message strong {
          color: #fff;
          font-weight: 600;
        }

        .vip-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: var(--accent);
          color: #fff;
          border-radius: 10px;
          font-family: var(--font-cond);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 20px rgba(155,109,255,0.35);
        }
        .vip-cta:hover {
          background: var(--accent-dk);
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(155,109,255,0.5);
        }

        @media (max-width: 600px) {
          .vip-banner-inner {
            padding: 18px 20px;
            gap: 16px;
          }
          .vip-cta {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  )
}