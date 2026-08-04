import { TRADER } from '../config'

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'rgba(0,0,0,0.6)', borderTop: '1px solid rgba(155,109,255,0.15)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8vw', alignItems: 'center' }}>

          {/* Photo */}
          <div className="reveal-left" style={{ position: 'relative'}}>
            {/* Photo frame */}
            <div style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--gray1)', border: '1px solid var(--gray3)', overflow: 'hidden' }}>
              {TRADER.photo ? (
                <img src={TRADER.photo} alt="Wizard Trader 7" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                  <div style={{ fontSize: 80 }}>🧙</div>
                  <p style={{ fontFamily: 'var(--font-cond)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--gray4)' }}>Your Photo Here</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', color: 'var(--gray4)' }}>Set TRADER.photo in config.js</p>
                </div>
              )}

              {/* Red corner accent */}
              <div style={{ position: 'absolute', top: 0, right: 0, width: 0, height: 0, borderStyle: 'solid', borderWidth: '0 60px 60px 0', borderColor: `transparent var(--accent) transparent transparent`, opacity: 0.7 }} />

              {/* Scan line animation */}
              <div style={{ position: 'absolute', inset: '0 0 auto 0', height: 2, background: 'linear-gradient(90deg,transparent,rgba(155,109,255,0.5),transparent)', animation: 'scan 3s ease-in-out infinite alternate' }} />
            </div>

            {/* Floating stat badge */}
            <div style={{ position: 'absolute', bottom: -20, left: -20, background: 'var(--accent)', padding: '20px 24px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', color: '#fff', lineHeight: 1 }}>10+</div>
              <div style={{ fontFamily: 'var(--font-cond)', fontSize: '0.6rem', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>Years Active</div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <p className="eyebrow" style={{ marginBottom: 20 }}>The Wizard Behind the System</p>
            <h2 className="heading" style={{ fontSize: 'clamp(2.8rem,5vw,5rem)', color: '#fff', marginBottom: 32 }}>
              WHO IS<br />
              <span style={{ color: 'var(--accent)', WebkitTextStroke: '0px' }}>WIZARD</span><br />
              TRADER 7?
            </h2>

            {TRADER.bio.split('\n').filter(Boolean).map((para, i) => (
              <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '1.05rem', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 16 }}>{para.trim()}</p>
            ))}

            <div className="about-ctas" style={{ marginTop: 40, display: 'flex', gap: 16 }}>
              <a href="#courses" className="btn btn-accent">Start Learning</a>
              <a href="#journey" className="btn btn-outline">His Story</a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scan { 0%{top:0} 100%{top:100%} }
        @media(max-width:768px){
          #about .container > div { grid-template-columns:1fr !important; gap:48px !important; }
          .about-ctas { flex-direction:column !important; }
          .about-ctas .btn { text-align:center; justify-content:center; padding:16px 24px !important; }
          .about-badge { position: relative !important; bottom: 0 !important; left: 0 !important; width: 100% !important; display: flex !important; justify-content: space-between; align-items: center; padding: 16px 24px !important; margin-top: -1px; }
          .about-badge-title { font-size: 2rem !important; margin-bottom: 0 !important; }
        }
      `}</style>
    </section>
  )
}
