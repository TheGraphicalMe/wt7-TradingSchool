import { useState, useEffect } from 'react'
import { COURSES } from '../config'
import { useNavigate } from 'react-router-dom'
import CryptoModal from './CryptoModal' 

// ─── Starburst Badge for Special Offer ───────────────────────────────────────
const StarburstBadge = ({ className }) => {
  const points = []
  const rays = 16
  const outerRadius = 50
  const innerRadius = 42
  const center = 50

  for (let i = 0; i < rays * 2; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius
    const angle = (i * Math.PI) / rays
    const x = center + radius * Math.cos(angle)
    const y = center + radius * Math.sin(angle)
    points.push(`${x},${y}`)
  }

  return (
    <div className={`starburst-wrap ${className}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%', filter: 'drop-shadow(0 4px 10px rgba(229,62,62,0.6))' }}>
        <polygon points={points.join(' ')} fill="#E53E3E" />
        <polygon points={points.join(' ')} fill="none" stroke="#FC8181" strokeWidth="1.5" transform="translate(50,50) scale(0.88) translate(-50,-50)" />
        <g transform="translate(50, 50) rotate(-12)">
          <text x="0" y="-2" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">SPECIAL</text>
          <text x="0" y="16" fill="#FFFFFF" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">OFFER</text>
        </g>
      </svg>
    </div>
  )
}

// ─── Crypto Offer Banner Component ───────────────────────────────────────────
function CryptoOfferBanner() {
  const [isCryptoModalOpen, setIsCryptoModalOpen] = useState(false)

  return (
    <div id="special-offer" className="crypto-banner-container sr sr-scale">
      {/* Starburst Badge */}
      <div className="crypto-banner-badge-pos">
        <StarburstBadge className="crypto-banner-starburst" />
      </div>

      {/* The Card - Purple Theme */}
      <div className="crypto-banner-card group">
        {/* Premium Purple Background Effects */}
        <div className="crypto-banner-glows">
          <div className="glow-1" />
          <div className="glow-2" />
          <div className="glow-3" />
        </div>

        <div className="crypto-banner-content">
          
          {/* Title Area */}
          <div className="crypto-banner-title-area">
            <h3 className="crypto-banner-title">
              Basic to Advance Batch
            </h3>
            <span className="crypto-banner-subtitle">
              Complete Trading Mastery
            </span>
          </div>

          
          {/* Price */}
          <div className="crypto-banner-price">
            $139
          </div>

          {/* Action Area */}
          <div className="crypto-banner-action-area">
            <div className="crypto-banner-tag">
              If paid via crypto
            </div>

            <button
              onClick={() => setIsCryptoModalOpen(true)}
              className="crypto-banner-btn"
            >
              Become Student
            </button>
          </div>
        </div>
      </div>

      <CryptoModal isOpen={isCryptoModalOpen} onClose={() => setIsCryptoModalOpen(false)} />
    </div>
  )
}

// ─── Modal ───────────────────────────────────────────────────────────────────
function CourseModal({ course, onClose }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!course) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [course, onClose])

  if (!course) return null

  const renderModule = (mod, i) => {
    if (mod.type === 'intro') {
      return (
        <p key={i} style={{
          fontFamily: 'var(--font-body)', fontSize: '0.9rem',
          color: 'rgba(255,255,255,0.75)', lineHeight: 1.75,
          padding: '16px 0 8px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          marginBottom: 8,
        }}>
          {mod.text}
        </p>
      )
    }

    if (mod.type === 'section') {
      return (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginTop: 20, marginBottom: 6,
          paddingTop: 16,
          borderTop: '1px solid rgba(255,255,255,0.05)',
        }}>
          <span style={{ fontSize: '1.1rem' }}>{mod.icon}</span>
          <span style={{
            fontFamily: 'var(--font-cond)', fontSize: '0.72rem',
            fontWeight: 800, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: 'var(--accent-lt)',
          }}>
            {mod.title}
          </span>
        </div>
      )
    }

    if (mod.type === 'item') {
      return (
        <div key={i} style={{
          display: 'flex', alignItems: 'flex-start', gap: 10,
          padding: '7px 12px', borderRadius: 8,
          transition: 'background 0.15s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(155,109,255,0.06)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          <span style={{
            color: 'var(--accent)', fontSize: '0.6rem', marginTop: 5, flexShrink: 0,
          }}>▶</span>
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.88rem',
            fontWeight: 300, color: 'rgba(255,255,255,0.78)', lineHeight: 1.6,
          }}>
            {mod.text}
          </span>
        </div>
      )
    }

    if (mod.type === 'disclaimer') {
      return (
        <div key={i} style={{
          marginTop: 24,
          padding: '14px 16px',
          background: 'rgba(255,200,0,0.05)',
          border: '1px solid rgba(255,200,0,0.15)',
          borderRadius: 10,
          fontFamily: 'var(--font-body)', fontSize: '0.78rem',
          color: 'rgba(255,255,255,0.65)', lineHeight: 1.65,
        }}>
          {mod.text}
        </div>
      )
    }

    return (
      <div key={i} style={{
        display: 'flex', alignItems: 'flex-start', gap: 16, padding: 16,
        background: 'rgba(255,255,255,0.02)', borderRadius: 12,
        border: '1px solid rgba(255,255,255,0.04)',
        transition: 'background 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(155,109,255,0.06)'}
        onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'}
      >
        <div style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          background: 'rgba(155,109,255,0.12)', color: 'var(--accent)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-cond)', fontWeight: 800, fontSize: '0.8rem',
          border: '1px solid rgba(155,109,255,0.2)'
        }}>
          {i + 1}
        </div>
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: '0.95rem',
          fontWeight: 300, color: 'rgba(255,255,255,0.82)', lineHeight: 1.6, paddingTop: 2
        }}>
          {typeof mod === 'string' ? mod : mod.text}
        </span>
      </div>
    )
  }

  return (
    <div className="course-modal-backdrop" onClick={onClose}>
      <div className="course-modal-content" onClick={e => e.stopPropagation()}>

        <button className="course-modal-close" onClick={onClose}>×</button>

        <div className="course-modal-split">

          <div className="course-modal-hero">
            <div className="course-modal-hero-bg">
              <img src={course.image} alt={course.title} />
              <div className="course-modal-hero-overlay" />
            </div>
            <div className="course-modal-hero-content">

              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
                <div className="course-badge"
                  style={{ position: 'relative', top: 0, right: 0, display: 'inline-block' }}>
                  {course.tag}
                </div>
                {course.isLive && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'rgba(255,50,50,0.15)',
                    border: '1px solid rgba(255,80,80,0.4)',
                    padding: '5px 12px', borderRadius: 4,
                    fontFamily: 'var(--font-cond)', fontSize: '0.65rem',
                    fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: '#ff6b6b',
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: '#ff4444',
                      boxShadow: '0 0 6px #ff4444',
                      animation: 'livePulse 1.4s ease-in-out infinite',
                      display: 'inline-block',
                    }} />
                    Live Class
                  </div>
                )}
                {course.lifetimeAccess && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'rgba(80,200,120,0.1)',
                    border: '1px solid rgba(80,200,120,0.3)',
                    padding: '5px 12px', borderRadius: 4,
                    fontFamily: 'var(--font-cond)', fontSize: '0.65rem',
                    fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: '#6dffaa',
                  }}>
                    ∞ Lifetime Access
                  </div>
                )}
                {course.oneYearValidity && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    background: 'rgba(255,170,0,0.1)',
                    border: '1px solid rgba(255,170,0,0.3)',
                    padding: '5px 12px', borderRadius: 4,
                    fontFamily: 'var(--font-cond)', fontSize: '0.65rem',
                    fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: '#ffc107',
                  }}>
                    ⏱ 1 Year Validity
                  </div>
                )}
              </div>

              <h2 style={{
                fontFamily: 'var(--font-cond)', fontWeight: 900, textTransform: 'uppercase',
                fontSize: 'clamp(1.8rem,3vw,3rem)', color: '#fff', lineHeight: 1.05, marginBottom: 16
              }}>
                {course.title}
              </h2>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1rem',
                color: 'rgba(255,255,255,0.65)', lineHeight: 1.65
              }}>
                {course.subtitle}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
                {[
                  ['⏱', course.duration],
                  ['💻', course.mode],
                  ['📅', course.sessions],
                  ['🗓', course.batchDate],
                ].map(([icon, val]) => (
                  <div key={val} style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    fontFamily: 'var(--font-cond)', fontSize: '0.8rem',
                    fontWeight: 600, letterSpacing: '0.05em', color: 'rgba(255,255,255,0.75)'
                  }}>
                    <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{icon}</span>
                    <span style={{ color: '#fff' }}>{val}</span>
                  </div>
                ))}
              </div>

              {course.tags?.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 24 }}>
                  {course.tags.map(tag => (
                    <span key={tag} style={{
                      background: 'rgba(155,109,255,0.12)', border: '1px solid rgba(155,109,255,0.25)',
                      padding: '5px 12px', borderRadius: 4,
                      fontFamily: 'var(--font-cond)', fontSize: '0.62rem',
                      fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--accent-lt)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="course-modal-details">
            <div className="course-modal-scroll-area">

              <div style={{
                fontFamily: 'var(--font-cond)', fontSize: '0.75rem', fontWeight: 700,
                letterSpacing: '0.28em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.65)',
                marginBottom: 16, paddingBottom: 16,
                borderBottom: '1px solid rgba(255,255,255,0.06)'
              }}>
                Detailed Curriculum
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {course.modules.map((mod, i) => renderModule(mod, i))}
              </div>
            </div>

            <div className="course-modal-footer">
              <div>
                <div style={{
                  fontFamily: 'var(--font-cond)', fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)', marginBottom: 6
                }}>
                  Total Investment
                </div>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: '2.8rem',
                  color: '#fff', lineHeight: 1
                }}>
                  {course.price}
                </span>
                {course.priceAed && (
                  <div style={{
                    fontFamily: 'var(--font-cond)', fontSize: '0.7rem', fontWeight: 500,
                    color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', marginTop: 4
                  }}>
                    {course.priceAed} · Multi-currency via nGenius
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  if (course.landingPage) {
                    window.location.assign(course.landingPage)
                  } else if (course.isPrebook) {
                    navigate(course.prebookUrl || '/ai-indicator')
                    document.body.style.overflow = ''
                  } else {
                    window.location.href = course.paymentUrl
                  }
                }}
                className="btn btn-accent modal-pulse-btn"
                style={{ alignSelf: 'center', padding: '18px 36px', fontSize: '0.95rem', letterSpacing: '0.14em' }}
              >
                {course.isPrebook ? 'Prebook Now →' : 'Become Student →'}
              </button>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.35); }
        }
        @keyframes liveCardPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.55); }
          60%       { box-shadow: 0 0 0 7px rgba(255,68,68,0); }
        }
      `}</style>
    </div>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────
function CourseCard({ course, index, onReadMore }) {
  const navigate = useNavigate()
  const direction = index % 2 === 0 ? 'sr-scale-left' : 'sr-scale-right'
  const stagger   = `sr-stagger-${(index % 2) + 1}`

  return (
    <div className={`course-card sr ${direction} ${stagger}`} style={{ position: 'relative' }}>

      {course.isLive && (
        <div style={{
          position: 'absolute', top: 14, left: 14, zIndex: 20,
          display: 'flex', alignItems: 'center', gap: 6,
          background: 'rgba(10,0,0,0.72)',
          border: '1px solid rgba(255,80,80,0.55)',
          backdropFilter: 'blur(6px)',
          padding: '5px 11px', borderRadius: 5,
          fontFamily: 'var(--font-cond)', fontSize: '0.65rem',
          fontWeight: 900, letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#ff6b6b',
          animation: 'liveCardPulse 2s ease-out infinite',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: '#ff4444',
            boxShadow: '0 0 8px #ff4444, 0 0 16px rgba(255,68,68,0.5)',
            animation: 'livePulse 1.4s ease-in-out infinite',
            display: 'inline-block',
            flexShrink: 0,
          }} />
          Live
        </div>
      )}

      <div className="course-img-wrapper" onClick={onReadMore}>
        <img src={course.image} alt={course.title} />
        {course.tag && <div className="course-badge">{course.tag}</div>}
        <div className="course-img-overlay" />
      </div>

      <div style={{
        padding: '32px 28px', display: 'flex', flexDirection: 'column',
        flex: 1, position: 'relative', zIndex: 2
      }}>

        <h3 className="course-title" style={{ marginBottom: 14 }}>
          {course.title}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
          {course.isLive && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              background: 'rgba(255,50,50,0.12)',
              border: '1px solid rgba(255,80,80,0.35)',
              padding: '4px 11px', borderRadius: 4,
              fontFamily: 'var(--font-cond)', fontSize: '0.6rem',
              fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase',
              color: '#ff7070',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: '#ff4444',
                boxShadow: '0 0 5px #ff4444',
                animation: 'livePulse 1.4s ease-in-out infinite',
                display: 'inline-block', flexShrink: 0,
              }} />
              Live Classes
            </span>
          )}
          {course.lifetimeAccess && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              background: 'rgba(80,200,120,0.08)',
              border: '1px solid rgba(80,200,120,0.28)',
              padding: '4px 11px', borderRadius: 4,
              fontFamily: 'var(--font-cond)', fontSize: '0.6rem',
              fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#6dffaa',
            }}>
              ∞ Lifetime Access
            </span>
          )}
          {course.oneYearValidity && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              background: 'rgba(255,170,0,0.08)',
              border: '1px solid rgba(255,170,0,0.28)',
              padding: '4px 11px', borderRadius: 4,
              fontFamily: 'var(--font-cond)', fontSize: '0.6rem',
              fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#ffc107',
            }}>
              ⏱ 1 Year Validity
            </span>
          )}
        </div>

        {course.tags?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
            {course.tags.map(tag => (
              <span key={tag} style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '4px 10px', borderRadius: 4,
                fontFamily: 'var(--font-cond)', fontSize: '0.58rem',
                fontWeight: 600, letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase'
              }}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {course.batchDate && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10,
            padding: '10px 14px', borderRadius: 8,
            background: 'rgba(155,109,255,0.08)',
            border: '1px solid rgba(155,109,255,0.18)',
            marginBottom: 24,
          }}>
            <span style={{ fontSize: '0.85rem' }}>🗓</span>
            <span style={{
              fontFamily: 'var(--font-cond)', fontSize: '0.7rem',
              fontWeight: 700, letterSpacing: '0.1em',
              color: 'rgba(255,255,255,0.65)',
            }}>
              {course.batchDate}
            </span>
          </div>
        )}

        <div style={{ flex: 1 }} />

        <div style={{ paddingBottom: 16, textAlign: 'center' }}>
          <span style={{
            fontFamily: 'var(--font-cond)', fontSize: '0.65rem', fontWeight: 600,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.65)', display: 'block', marginBottom: 6
          }}>
            Total Investment
          </span>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '2.6rem', color: '#fff', lineHeight: 1
          }}>
            {course.price}
          </span>
          {course.priceAed && (
            <span style={{
              display: 'block', fontFamily: 'var(--font-cond)', fontSize: '0.65rem',
              fontWeight: 500, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', marginTop: 4
            }}>
              {course.priceAed} · Multi-currency accepted
            </span>
          )}
        </div>
        
        <div style={{ minHeight: '34px', marginBottom: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          {course.hasCoupon && course.couponValue && (
            <div style={{
              padding: '8px 16px',
              background: 'rgba(255, 150, 38, 0.08)',
              border: '1px dashed rgba(255, 150, 38, 0.4)',
              borderRadius: '6px',
            }}>
              <span style={{
                fontFamily: 'var(--font-cond)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#ff9626',
                textAlign: 'center',
                display: 'block'
              }}>
                Extra {course.couponValue} Coupon Discount
              </span>
            </div>
          )}
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: course.isPrebook ? '1fr' : '1fr 1fr', gap: 10 }}>
          {!course.isPrebook && (
            <button
              onClick={onReadMore}
              className="btn btn-outline"
              style={{ padding: '13px 0', justifyContent: 'center', fontSize: '0.72rem' }}
            >
              Learn More
            </button>
          )}
          <button
            onClick={() => course.landingPage ? window.location.assign(course.landingPage) : course.isPrebook ? navigate(course.prebookUrl || '/ai-indicator') : (window.location.href = course.paymentUrl)}
            className="btn btn-accent"
            style={{ padding: '13px 0', justifyContent: 'center', fontSize: '0.72rem' }}
          >
            {course.isPrebook ? 'Prebook' : 'Become Student'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.4); }
        }
        @keyframes liveCardPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.5); }
          60%       { box-shadow: 0 0 0 8px rgba(255,68,68,0); }
        }
      `}</style>
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null)

  return (
    <>
      <section id="courses" className="section" style={{ borderTop: '1px solid rgba(155,109,255,0.15)', background: 'rgba(0,0,0,0.6)' }}>
        <div className="container">

          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', flexWrap: 'wrap', gap: 32, marginBottom: 64
          }}>
            <div className="sr sr-left">
              <p className="eyebrow" style={{ marginBottom: 16 }}>Live Courses</p>
              <h2 className="heading" style={{ fontSize: 'clamp(3rem,7vw,7rem)', color: '#fff' }}>
                CHOOSE YOUR<br/>
                <span style={{ color: 'var(--accent)' }}>PROGRAMME</span>
              </h2>
            </div>
            <div className="sr sr-right" style={{ maxWidth: 360 }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.75
              }}>
                All courses are live, interactive, and taught by Wizard Trader 7 personally.
                Fast-track your mastery with structured, real-time mentorship.
              </p>
            </div>
          </div>

          <div className="courses-grid">
            {COURSES.map((course, i) => (
              <CourseCard
                key={course.id}
                course={course}
                index={i}
                onReadMore={() => setSelectedCourse(course)}
              />
            ))}
          </div>

          {/* ─── Integrated Crypto Offer Banner ─── */}
          {/* <CryptoOfferBanner /> */}

        </div>
      </section>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />

      <style>{`
        .crypto-banner-container {
          position: relative;
          width: 100%;
          max-width: 1000px;
          margin: 80px auto 0;
          z-index: 10;
        }
        
        .crypto-banner-badge-pos {
          position: absolute;
          top: -35px;
          left: -35px;
          z-index: 60;
          pointer-events: none;
        }
        
        .crypto-banner-starburst {
          width: 100px;
          height: 100px;
        }
        @media (max-width: 768px) {
          .crypto-banner-starburst {
            width: 80px;
            height: 80px;
          }
          .crypto-banner-badge-pos {
            top: -25px;
            left: -15px;
          }
        }

        .crypto-banner-card {
          position: relative;
          display: flex;
          background: linear-gradient(90deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 24px;
          padding: 40px;
          overflow: visible;
          backdrop-filter: blur(30px);
          -webkit-backdrop-filter: blur(30px);
          transition: all 0.5s ease;
        }
        .crypto-banner-card:hover {
          border-color: #9B6DFF;
          box-shadow: 0 0 40px rgba(155,109,255,0.3);
          background: rgba(155,109,255,0.05);
        }

        .crypto-banner-glows {
          position: absolute;
          inset: 0;
          pointer-events: none;
          border-radius: 24px;
          overflow: hidden;
          z-index: 0;
        }
        .glow-1 {
          position: absolute;
          top: 0;
          right: 0;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          background: rgba(155,109,255,0.5);
          transition: opacity 0.5s;
        }
        .crypto-banner-card:hover .glow-1 { opacity: 0.5; }
        
        .glow-2 {
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 400px;
          height: 400px;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.3;
          background: rgba(155,109,255,0.4);
          transition: opacity 0.5s;
        }
        .crypto-banner-card:hover .glow-2 { opacity: 0.5; }

        .glow-3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.2;
          background: #D8B4FE;
        }

        .crypto-banner-content {
          position: relative;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          width: 100%;
        }
        @media (max-width: 768px) {
          .crypto-banner-content {
            flex-direction: column;
            text-align: center;
            padding-top: 20px;
          }
          .crypto-banner-card {
            padding: 40px 24px 32px;
          }
        }

        .crypto-banner-title-area {
          flex: 1;
        }
        .crypto-banner-title {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 2rem;
          color: #fff;
          margin: 0;
          white-space: nowrap;
        }
        .crypto-banner-subtitle {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 1.1rem;
          color: rgba(255,255,255,0.7);
          display: block;
          margin-top: 4px;
        }
        @media (max-width: 768px) {
          .crypto-banner-title { font-size: 1.5rem; white-space: normal; }
          .crypto-banner-subtitle { font-size: 1rem; }
        }

        .crypto-banner-price {
          font-family: var(--font-display);
          font-size: 4.5rem;
          font-weight: 700;
          color: #9B6DFF;
          text-shadow: 0 0 20px rgba(155,109,255,0.4);
        }
        @media (max-width: 768px) {
          .crypto-banner-price { font-size: 4rem; margin: -10px 0; }
        }

        /* ─── REFACTORED THIS SECTION FOR HORIZONTAL LAYOUT ─── */
        .crypto-banner-action-area {
          display: flex;
          flex-direction: row; /* Places items side-by-side */
          align-items: center; /* Centers them vertically against each other */
          gap: 16px;
        }
        @media (max-width: 768px) {
          .crypto-banner-action-area { 
            flex-direction: column; /* Stacks them on mobile since the button takes 100% width */
            align-items: center; 
            width: 100%; 
          }
        }

        .crypto-banner-tag {
          font-family: var(--font-cond);
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.8rem;
          color: #D8B4FE;
          background: rgba(155,109,255,0.1);
          padding: 6px 20px;
          border-radius: 100px;
          border: 1px solid rgba(155,109,255,0.3);
          white-space: nowrap; /* Prevents text breaking onto multiple lines */
        }

        .crypto-banner-btn {
          width: 240px;
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          background: linear-gradient(90deg, #9B6DFF, #7A4BFF);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .crypto-banner-btn:hover {
          transform: scale(1.04);
          box-shadow: 0 0 40px rgba(155,109,255,0.6);
        }
        .crypto-banner-btn:active {
          transform: scale(0.95);
        }
        @media (max-width: 768px) {
          .crypto-banner-btn { width: 100%; }
        }

        @keyframes livePulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.4; transform: scale(1.35); }
        }
        @keyframes liveCardPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,68,68,0.55); }
          60%       { box-shadow: 0 0 0 7px rgba(255,68,68,0); }
        }
        @keyframes heroGlowPulse {
          0%, 100% { text-shadow: 0 0 10px rgba(155,109,255,0.6), 0 0 30px rgba(155,109,255,0.4); }
          50% { text-shadow: 0 0 15px rgba(155,109,255,0.8), 0 0 40px rgba(155,109,255,0.55); }
        }
      `}</style>
    </>
  )
}
