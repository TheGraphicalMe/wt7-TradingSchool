import { useState, useEffect, useRef } from 'react'

const VIDEO_ID = 'wjrCUw9yu08'

function Bracket({ corner }) {
    const size = 28, thickness = 2
    const color = 'rgba(155,109,255,0.7)'
    const positions = { tl: { top: 0, left: 0 }, tr: { top: 0, right: 0 }, bl: { bottom: 0, left: 0 }, br: { bottom: 0, right: 0 } }
    const isRight = corner === 'tr' || corner === 'br'
    const isBottom = corner === 'bl' || corner === 'br'
    return (
        <div style={{ position: 'absolute', ...positions[corner], width: size, height: size, zIndex: 4 }}>
            <div style={{ position: 'absolute', top: isBottom ? 'auto' : 0, bottom: isBottom ? 0 : 'auto', left: isRight ? 'auto' : 0, right: isRight ? 0 : 'auto', width: size, height: thickness, background: color }} />
            <div style={{ position: 'absolute', top: isBottom ? 'auto' : 0, bottom: isBottom ? 0 : 'auto', left: isRight ? 'auto' : 0, right: isRight ? 0 : 'auto', width: thickness, height: size, background: color }} />
        </div>
    )
}

function OverlayInfo() {
    const [time, setTime] = useState('')
    useEffect(() => {
        const tick = () => {
            const now = new Date()
            setTime(`${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`)
        }
        tick()
        const id = setInterval(tick, 1000)
        return () => clearInterval(id)
    }, [])
    return (
        <>
            <div className="mobile-overlay-left" style={{ position: 'absolute', top: 18, left: 18, zIndex: 4, display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)', padding: '5px 12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#ff4444', boxShadow: '0 0 8px #ff4444', flexShrink: 0, animation: 'liveBlink 1.4s ease-in-out infinite' }} />
                <span style={{ fontFamily: 'var(--font-cond)', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff' }}>Exclusive</span>
            </div>
            <div className="mobile-overlay-right" style={{ position: 'absolute', top: 18, right: 18, zIndex: 4, background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(6px)', padding: '5px 12px', border: '1px solid rgba(255,255,255,0.06)', fontFamily: 'monospace', fontSize: '0.72rem', color: 'rgba(155,109,255,0.85)', letterSpacing: '0.12em' }}>
                {time}
            </div>
        </>
    )
}

export default function VideoSection() {
    const [playing, setPlaying] = useState(false)
    const [paused, setPaused] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [showCtrl, setShowCtrl] = useState(false)
    const ctrlTimer = useRef(null)
    const iframeRef = useRef(null)
    const thumbUrl = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`

    const CROP_TOP = 80
    const CROP_BOTTOM = 100

    const handleMouseMove = () => {
        if (!playing || paused) return
        setShowCtrl(true)
        clearTimeout(ctrlTimer.current)
        ctrlTimer.current = setTimeout(() => setShowCtrl(false), 2200)
    }

    const sendCommand = (cmd) => {
        iframeRef.current?.contentWindow.postMessage(
            JSON.stringify({ event: 'command', func: cmd, args: '' }), '*'
        )
    }

    const togglePause = () => {
        if (paused) { sendCommand('playVideo'); setPaused(false); setShowCtrl(false) }
        else { sendCommand('pauseVideo'); setPaused(true); setShowCtrl(false) }
    }

    return (
        <section id="intro-video" style={{ background: 'rgba(0,0,0,0.1)', borderTop: '1px solid rgba(155,109,255,0.15)', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>

            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(155,109,255,0.025) 1px,transparent 1px),linear-gradient(90deg,rgba(155,109,255,0.025) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(ellipse 80% 70% at 50% 50%,transparent 40%,rgba(0,0,0,0.2) 100%)' }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="sr sr-scale" style={{ maxWidth: 920, margin: '0 auto' }}>
                    <div
                        style={{ position: 'relative', padding: 16, background: 'rgba(155,109,255,0.04)', border: '1px solid rgba(155,109,255,0.12)', transition: 'border-color 0.4s,box-shadow 0.4s', boxShadow: hovered && !playing ? '0 0 60px rgba(155,109,255,0.2),inset 0 0 40px rgba(155,109,255,0.04)' : '0 0 40px rgba(0,0,0,0.6)' }}
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        {['tl', 'tr', 'bl', 'br'].map(c => <Bracket key={c} corner={c} />)}

                        {/* Outer shell — overflow:hidden clips the oversized iframe */}
                        <div
                            style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', background: '#000' }}
                            onMouseMove={handleMouseMove}
                        >

                            {/* PRE-PLAY */}
                            {!playing && (
                                <>
                                    <img
                                        src={thumbUrl} alt="Video preview"
                                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: hovered ? 'brightness(0.7)' : 'brightness(0.55)', transition: 'filter 0.4s' }}
                                        onError={e => { e.target.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg` }}
                                    />
                                    <OverlayInfo />
                                    <div
                                        onClick={() => setPlaying(true)}
                                        className="mobile-play-layer"
                                        style={{ position: 'absolute', inset: 0, zIndex: 5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 40, cursor: 'pointer' }}
                                    >
                                        <div className="mobile-play-outer" style={{ width: 88, height: 88, borderRadius: '50%', background: 'rgba(155,109,255,0.18)', border: '1.5px solid rgba(155,109,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', transition: 'transform 0.25s,box-shadow 0.25s', boxShadow: hovered ? '0 0 0 16px rgba(155,109,255,0.06),0 0 40px rgba(155,109,255,0.3)' : 'none', transform: hovered ? 'scale(1.1)' : 'scale(1)', animation: 'playRing 2.5s ease-in-out infinite' }}>
                                            <div className="mobile-play-inner" style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(155,109,255,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 24px rgba(155,109,255,0.5)' }}>
                                                <div className="mobile-play-triangle" style={{ width: 0, height: 0, borderTop: '11px solid transparent', borderBottom: '11px solid transparent', borderLeft: '18px solid #fff', marginLeft: 5 }} />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* PLAYING */}
                            {playing && (
                                <>
                                    {/* iframe pushed up by CROP_TOP so YouTube's top bar is above the clip boundary.
                      Height extended so YouTube's bottom panel is below the clip boundary. */}
                                    <iframe
                                        ref={iframeRef}
                                        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=0&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3&enablejsapi=1&playsinline=1&fs=0&showinfo=0`}
                                        title="Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        style={{
                                            position: 'absolute',
                                            top: -CROP_TOP,
                                            left: 0,
                                            width: '100%',
                                            height: `calc(100% + ${CROP_TOP + CROP_BOTTOM}px)`,
                                            border: 'none',
                                            pointerEvents: 'none',
                                        }}
                                    />

                                    {/* PAUSE COVER — solid black so More Videos never shows */}
                                    {paused && (
                                        <div className="mobile-pause-layer" style={{ position: 'absolute', inset: 0, zIndex: 8, background: '#000', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', paddingBottom: 0 }}>
                                            <img src={thumbUrl} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.2)' }} onError={e => { e.target.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg` }} />
                                            <div
                                                onClick={togglePause}
                                                style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, cursor: 'pointer' }}
                                            >
                                                <div
                                                    className="mobile-pause-outer"
                                                    style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(155,109,255,0.9)', border: '2px solid rgba(155,109,255,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 40px rgba(155,109,255,0.5)', transition: 'transform 0.2s' }}
                                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                                >
                                                    <div className="mobile-pause-triangle" style={{ width: 0, height: 0, borderTop: '13px solid transparent', borderBottom: '13px solid transparent', borderLeft: '22px solid #fff', marginLeft: 5 }} />
                                                </div>
                                                <span className="mobile-pause-text" style={{ fontFamily: 'var(--font-cond)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.85)' }}>Tap to Resume</span>
                                            </div>
                                        </div>
                                    )}

                                    {/* PLAYING OVERLAY — click to pause, hover shows hint */}
                                    {!paused && (
                                        <div onClick={togglePause} style={{ position: 'absolute', inset: 0, zIndex: 7, cursor: 'pointer' }}>
                                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: showCtrl ? 1 : 0, transition: 'opacity 0.35s ease', background: showCtrl ? 'rgba(0,0,0,0.18)' : 'transparent' }}>
                                                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', border: '1.5px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    <div style={{ display: 'flex', gap: 5 }}>
                                                        <div style={{ width: 4, height: 20, background: '#fff', borderRadius: 2 }} />
                                                        <div style={{ width: 4, height: 20, background: '#fff', borderRadius: 2 }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Status strip */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingTop: 14 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, background: playing && !paused ? 'rgba(34,197,94,0.1)' : 'rgba(155,109,255,0.08)', border: `1px solid ${playing && !paused ? 'rgba(34,197,94,0.25)' : 'rgba(155,109,255,0.2)'}`, padding: '4px 10px', transition: 'all 0.3s' }}>
                                <span style={{ width: 5, height: 5, borderRadius: '50%', background: playing && !paused ? '#22c55e' : 'var(--accent)', boxShadow: playing && !paused ? '0 0 6px #22c55e' : '0 0 6px var(--accent)', animation: 'liveBlink 1.4s ease-in-out infinite' }} />
                                <span style={{ fontFamily: 'var(--font-cond)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: playing && !paused ? '#22c55e' : 'var(--accent)' }}>
                                    {!playing ? 'Ready' : paused ? 'Paused' : 'Playing'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes liveBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes playRing  { 0%,100%{box-shadow:0 0 0 0 rgba(155,109,255,0.45)} 50%{box-shadow:0 0 0 18px rgba(155,109,255,0)} }

        @media (max-width: 768px) {
            .mobile-overlay-left { top: auto !important; bottom: 6px !important; left: 6px !important; padding: 4px 8px !important; }
            .mobile-overlay-right { top: auto !important; bottom: 6px !important; right: 6px !important; padding: 4px 8px !important; }

            .mobile-play-layer { padding-bottom: 2px !important; }
            .mobile-play-outer { width: 56px !important; height: 56px !important; }
            .mobile-play-inner { width: 40px !important; height: 40px !important; }
            .mobile-play-triangle { border-top-width: 7px !important; border-bottom-width: 7px !important; border-left-width: 12px !important; margin-left: 3px !important; }

            .mobile-pause-layer { padding-bottom: 2px !important; }
            .mobile-pause-outer { width: 52px !important; height: 52px !important; }
            .mobile-pause-triangle { border-top-width: 8px !important; border-bottom-width: 8px !important; border-left-width: 14px !important; margin-left: 3px !important; }
            .mobile-pause-text { font-size: 0.55rem !important; }
        }
      `}</style>
        </section>
    )
}