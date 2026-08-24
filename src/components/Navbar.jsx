import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const LINKS = [
  { label: 'About',        href: '#about'        },
  { label: 'Journey',      href: '#journey'      },
  { label: 'Courses',      href: '#courses'      },
  { label: 'Platforms',    href: '#platforms'    },
  { label: 'Insights',     href: '#insights'     },
  { label: 'Reviews',      href: '#reviews'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const homeSectionHref = (href) => location.pathname === '/' ? href : `/${href}`

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav style={{
      position: 'fixed', inset: '0 0 auto 0', zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 5vw',
      height: 64,
      background: scrolled ? 'rgba(0,0,0,0.96)' : 'transparent',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      {/* Logo */}
      <a href="#hero" className="n-logo" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 1 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#fff', letterSpacing: '0.04em' }}>WIZARD</span>
        <span style={{ 
          fontFamily: 'var(--font-cond)', fontSize: '0.58rem', letterSpacing: '0.42em', 
          fontWeight: 600, color: 'var(--accent-lt)', textTransform: 'uppercase', marginTop: -2,
          textShadow: '0 0 10px rgba(155,109,255,0.9), 0 0 25px rgba(155,109,255,0.4)',
        }}>
          TRADER 7
        </span>
      </a>

      {/* Desktop nav */}
      <ul style={{ display: 'flex', gap: '2.4rem', listStyle: 'none', margin: 0, padding: 0 }} className="desktop-nav">
        {LINKS.map(l => (
          <li key={l.href}>
            <a href={homeSectionHref(l.href)} style={{ fontFamily: 'var(--font-cond)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', transition: 'color 0.3s, text-shadow 0.3s' }}
              onMouseEnter={e => { e.target.style.textShadow = '0 0 8px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.3)' }} onMouseLeave={e => { e.target.style.color = '#fff'; e.target.style.textShadow = 'none' }}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <a href="/live-batch" className="btn btn-accent" style={{ fontSize: '0.7rem', padding: '12px 28px' }}>Become Student</a>

      {/* Mobile hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', flexDirection: 'column', gap: 5, background: 'none', border: 'none', padding: 4 }} className="hamburger">
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: 'block', width: 22, height: 1.5, background: '#fff', transition: 'all 0.3s',
            transform: i === 0 && menuOpen ? 'rotate(45deg) translate(4.5px,4.5px)' : i === 2 && menuOpen ? 'rotate(-45deg) translate(4.5px,-4.5px)' : 'none',
            opacity: i === 1 && menuOpen ? 0 : 1
          }} />
        ))}
      </button>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 98 }}
        />
      )}

      {/* Mobile sidebar */}
      <div style={{
        position: 'fixed', top: 0, right: menuOpen ? 0 : '-100%', width: '80%', maxWidth: 320, height: '100dvh',
        background: '#040404', borderLeft: '1px solid var(--gray3)', padding: '100px 8vw 40px',
        transition: 'right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)', zIndex: 99,
        display: 'flex', flexDirection: 'column'
      }}>
        {LINKS.map(l => (
          <a key={l.href} href={homeSectionHref(l.href)} onClick={() => setMenuOpen(false)}
            style={{ display: 'block', fontFamily: 'var(--font-cond)', fontSize: '1.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'rgba(255,255,255,0.8)', padding: '16px 0', borderBottom: '1px solid var(--gray3)' }}>
            {l.label}
          </a>
        ))}
        <a href="/live-batch" onClick={() => setMenuOpen(false)} className="btn btn-accent" style={{ marginTop: 32, display: 'flex', justifyContent: 'center' }}>Become Student</a>
      </div>

      <style>{`
        @media(max-width:900px){ 
          .desktop-nav{display:none!important} 
          .hamburger{display:flex!important} 
          nav > a.btn{display:none} 
          .n-logo { margin-left: clamp(16px, 4vw, 32px); }
        }
      `}</style>
    </nav>
  )
}
