import { SOCIAL_LINKS } from '../config'

const SECTIONS = ['About','Journey','Courses','Platforms','Insights','Reviews']

export default function Footer() {
  return (
    <footer style={{ borderTop:'1px solid rgba(155,109,255,0.15)', padding:'48px 5vw 32px', background:'rgba(0,0,0,0.6)' }}>
      <div style={{ maxWidth:1280, margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', flexWrap:'wrap', gap:40, marginBottom:48 }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily:'var(--font-display)', fontSize:'2.4rem', color:'#fff', letterSpacing:'0.04em', lineHeight:1 }}>WIZARD</div>
            <div style={{ fontFamily:'var(--font-cond)', fontSize:'0.65rem', fontWeight:700, letterSpacing:'0.42em', textTransform:'uppercase', color:'var(--accent)', marginTop:2 }}>TRADER 7</div>
            <p style={{ fontFamily:'var(--font-body)', fontSize:'0.85rem', fontWeight:300, color:'rgba(255,255,255,0.7)', marginTop:16, maxWidth:240, lineHeight:1.65 }}>
              Most loved trading school. 10,000+ graduates. 10+ years.
            </p>
          </div>

          {/* Nav */}
          <nav style={{ display:'flex', flexDirection:'column', gap:10 }}>
            <div style={{ fontFamily:'var(--font-cond)', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:6 }}>Navigation</div>
            {SECTIONS.map(s => (
              <a key={s} href={`#${s.toLowerCase()}`}
                style={{ fontFamily:'var(--font-cond)', fontSize:'0.85rem', fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', color:'rgba(255,255,255,0.75)', transition:'color 0.2s' }}
                onMouseEnter={e => e.target.style.color='#fff'} onMouseLeave={e => e.target.style.color='rgba(255,255,255,0.75)'}>
                {s}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
            <div style={{ fontFamily:'var(--font-cond)', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)' }}>Connect</div>
            <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
              {SOCIAL_LINKS.map(s => {
                const iconMap = {
                  Instagram: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="url(#insta)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><defs><linearGradient id="insta" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stopColor="#f09433" /><stop offset="25%" stopColor="#e6683c" /><stop offset="50%" stopColor="#dc2743" /><stop offset="75%" stopColor="#cc2366" /><stop offset="100%" stopColor="#bc1888" /></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
                  YouTube: <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF0000"><path d="M23.5 6.2c-.2-.9-.9-1.6-1.8-1.8C20.1 4 12 4 12 4s-8.1 0-9.7.4c-.9.2-1.6.9-1.8 1.8C0 7.8 0 12 0 12s0 4.2.5 5.8c.2.9.9 1.6 1.8 1.8 1.6.4 9.7.4 9.7.4s8.1 0 9.7-.4c.9-.2 1.6-.9 1.8-1.8.5-1.6.5-5.8.5-5.8s0-4.2-.5-5.8z"/><path fill="#FFFFFF" d="M9.5 15.5l6.5-3.5-6.5-3.5v7z"/></svg>,
                  Twitter: <svg width="20" height="20" viewBox="0 0 24 24" fill="#1da1f2"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>,
                  Telegram: <svg width="22" height="22" viewBox="0 0 24 24" fill="#2AABEE"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
                }
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    style={{ width:42, height:42, borderRadius:'50%', background:'rgba(255,255,255,0.05)', display:'flex', alignItems:'center', justifyContent:'center', transition:'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)', border:'1px solid rgba(255,255,255,0.1)' }}
                    onMouseEnter={e => { e.currentTarget.style.background='rgba(255,255,255,0.12)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.25)'; e.currentTarget.style.transform='translateY(-4px)'; e.currentTarget.style.boxShadow='0 8px 16px rgba(0,0,0,0.4)'; }} 
                    onMouseLeave={e => { e.currentTarget.style.background='rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.1)'; e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
                    aria-label={s.label}>
                    {iconMap[s.label]}
                  </a>
                )
              })}
            </div>
          </div>

          {/* CTA */}
          <div style={{ paddingTop:8 }}>
            <div style={{ fontFamily:'var(--font-cond)', fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.3em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', marginBottom:16 }}>Ready?</div>
            <a href="/live-batch" className="btn btn-accent">Become Student →</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ paddingTop:24, borderTop:'1px solid var(--gray3)', display:'flex', justifyContent:'space-between', alignItems:'center', flexWrap:'wrap', gap:12 }}>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'rgba(255,255,255,0.5)' }}>© {new Date().getFullYear()} Wizard Trader 7. All rights reserved.</p>
          <p style={{ fontFamily:'var(--font-body)', fontSize:'0.75rem', color:'rgba(255,255,255,0.5)' }}>Trading involves risk. Past performance does not guarantee future results.</p>
        </div>
      </div>
    </footer>
  )
}
