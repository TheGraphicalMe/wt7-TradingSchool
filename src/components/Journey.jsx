const journeyChapters = [
  {
    num: '01',
    year: 'The Beginning',
    title: 'Born Into Struggle,\nNot Into Markets',
    desc: <>Growing up in a farming family, <strong>financial resources were nearly nonexistent.</strong> School fees became an impossible burden — leaving after the 8th standard wasn't a choice, it was a reality. At a very young age, work came before education, and survival came before ambition.</>,
  },
  {
    num: '02',
    year: 'The Curiosity',
    title: 'Finding the Markets\nThrough the Noise',
    desc: <>While managing work and self-directed studies simultaneously, <strong>financial markets entered the picture not as a career — but as a curiosity.</strong> That spark refused to die. The desire to learn and grow was relentless, even without formal resources or a roadmap to follow.</>,
  },
  {
    num: '03',
    year: '2013 — 2016',
    title: 'Into the Arena:\nTrading & MBA Together',
    desc: <>The trading journey began in <strong>2013</strong>, and by <strong>2016</strong>, crypto markets became an active focus — building experience through real conditions across multiple market cycles. Alongside this, an <strong>MBA in Finance was completed</strong> while simultaneously participating in live markets — theory and practice fused into one.</>,
  },
  {
    num: '04',
    year: 'The Mission',
    title: 'Building Traders,\nNot Just Students',
    desc: <>Today, a community of <strong>more than 4 million people</strong> follow the work and insights of Wizard Trader across platforms. The focus has never been on strategies alone — it has always been on <strong>psychology, disciplined execution, and structured thinking.</strong> Thousands of students have built their own confident, independent trading approach through this practical, mentorship-driven framework.</>,
  },
]

const stats = [
  { num: '10+',  label: 'Years Market Experience' },
  { num: '4M+',  label: 'Community Followers' },
  { num: '2013', label: 'Trading Journey Began' },
  { num: '2016', label: 'Active in Crypto' },
]

export default function Journey() {
  return (
    <section
      id="journey"
      className="section"
      style={{ background: 'rgba(17,17,17,0.6)', borderTop: '1px solid rgba(155,109,255,0.15)', borderBottom: '1px solid rgba(155,109,255,0.15)' }}
    >
      <div className="container">

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          <p className="eyebrow" style={{ marginBottom: 16 }}>The Journey</p>
          <h2
            className="heading"
            style={{ fontSize: 'clamp(3rem,7vw,6.5rem)', color: '#fff', lineHeight: 0.92 }}
          >
            FROM A<br />
            <span style={{ WebkitTextStroke: '1.5px rgba(255,255,255,0.18)', color: 'transparent' }}>
              FARMER&rsquo;S SON
            </span><br />
            <span style={{ color: 'var(--accent)' }}>TO 4 MILLION COMMUNITY</span>
          </h2>
        </div>

        <div style={{ width: 48, height: 2, background: 'var(--accent)', marginBottom: 64 }} />

        {/* Stats row */}
        <div
          className="reveal journey-stats-grid"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.07)',
            marginBottom: 96,
          }}
        >
          {stats.map(({ num, label }) => (
            <div key={label} style={{ padding: '28px 24px', background: 'var(--gray1)' }}>
              <div style={{ fontFamily: 'var(--font-cond)', fontSize: '3rem', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
                {num}
              </div>
              <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6, fontWeight: 300 }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        {/* Chapters */}
        <div>
          {journeyChapters.map((ch, i) => (
            <div
              key={ch.num}
              className="reveal journey-chapter-row"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                borderBottom: i === journeyChapters.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Left col */}
              <div className="journey-chapter-left">
                <span
                  style={{
                    display: 'block',
                    fontFamily: 'var(--font-cond)',
                    fontSize: '6rem',
                    fontWeight: 900,
                    color: 'rgba(255,255,255,0.04)',
                    lineHeight: 1,
                    marginBottom: 8,
                  }}
                >
                  {ch.num}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-cond)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                  }}
                >
                  {ch.year}
                </span>
              </div>

              {/* Right col */}
              <div className="journey-chapter-right">
                <div
                  style={{
                    fontFamily: 'var(--font-cond)',
                    fontSize: 'clamp(1.6rem,2.5vw,2.4rem)',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.02em',
                    color: '#fff',
                    marginBottom: 16,
                    lineHeight: 1.05,
                    whiteSpace: 'pre-line',
                  }}
                >
                  {ch.title}
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.8,
                    maxWidth: 560,
                  }}
                >
                  {ch.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Philosophy block */}
        <div
          className="reveal journey-philosophy-block"
          style={{
            marginTop: 96,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Watermark — pinned behind all content */}
          <div
            aria-hidden="true"
            className="journey-philosophy-watermark"
            style={{
              position: 'absolute',
              right: 3,
              bottom: -10,          // ← moved to bottom-right, away from text
              fontFamily: 'var(--font-cond)',
              fontSize: '11rem',    // ← slightly smaller
              fontWeight: 900,
              color: 'rgba(255,255,255,0.04)',  // ← dimmer so it never competes
              textTransform: 'uppercase',
              lineHeight: 1,
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 0,            // ← explicitly behind
            }}
          >
            MINDSET
          </div>

          {/* All content sits above the watermark */}
          <div style={{ position: 'relative', zIndex: 1 }}>
            <p
              style={{
                fontFamily: 'var(--font-cond)',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: 24,
              }}
            >
              The Wizard Trader Philosophy
            </p>
            <p
              style={{
                fontStyle: 'italic',
                fontSize: 'clamp(1.1rem,2vw,1.6rem)',
                color: 'rgba(255,255,255,0.88)',
                lineHeight: 1.65,
                maxWidth: 700,
              }}
            >
              &ldquo;Real understanding comes only from practical market experience. Not theory. Not complex PDFs.
              Not unrealistic promises — but from live charts, real behavior, and the discipline to think
              clearly when the market doesn&rsquo;t care about your feelings.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}