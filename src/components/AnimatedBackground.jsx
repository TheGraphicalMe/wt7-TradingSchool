import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W, H

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    /* ───────────────────────────────────────────
       LAYER 0 — Flowing Aurora Nebula Waves
       Soft, slowly undulating color bands
    ─────────────────────────────────────────── */
    const AURORA_BANDS = 3
    const auroraWaves = Array.from({ length: AURORA_BANDS }, (_, i) => ({
      yBase: 0.25 + i * 0.25,           // vertical position (0–1)
      amplitude: 40 + i * 20,
      wavelength: 600 + i * 200,
      speed: 0.0003 + i * 0.00012,
      alpha: 0.018 - i * 0.003,
      hue: 265 + i * 15,                // purple → blue shift
      width: 220 + i * 60,
    }))

    function drawAurora(t) {
      auroraWaves.forEach(wave => {
        const yCenter = wave.yBase * H
        const grad = ctx.createLinearGradient(0, yCenter - wave.width, 0, yCenter + wave.width)
        grad.addColorStop(0, 'transparent')
        grad.addColorStop(0.3, `hsla(${wave.hue}, 70%, 55%, ${wave.alpha})`)
        grad.addColorStop(0.5, `hsla(${wave.hue}, 80%, 60%, ${wave.alpha * 1.5})`)
        grad.addColorStop(0.7, `hsla(${wave.hue}, 70%, 55%, ${wave.alpha})`)
        grad.addColorStop(1, 'transparent')

        ctx.beginPath()
        ctx.moveTo(-10, H)
        for (let x = -10; x <= W + 10; x += 8) {
          const y = yCenter + Math.sin(x / wave.wavelength + t * wave.speed) * wave.amplitude
            + Math.sin(x / (wave.wavelength * 0.4) + t * wave.speed * 1.7) * wave.amplitude * 0.3
          ctx.lineTo(x, y)
        }
        ctx.lineTo(W + 10, H)
        ctx.closePath()
        ctx.fillStyle = grad
        ctx.fill()
      })
    }

    /* ───────────────────────────────────────────
       LAYER 1 — Floating Geometric Shapes
       Subtle hexagons & diamonds drifting slowly
    ─────────────────────────────────────────── */
    const SHAPE_COUNT = 12
    const shapes = Array.from({ length: SHAPE_COUNT }, () => {
      const type = Math.random() > 0.5 ? 'hex' : 'diamond'
      return {
        type,
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 18 + 8,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.002,
        vx: (Math.random() - 0.5) * 0.08,
        vy: (Math.random() - 0.5) * 0.06,
        alpha: Math.random() * 0.06 + 0.02,
        pulseOffset: Math.random() * Math.PI * 2,
      }
    })

    function drawHex(cx, cy, r, rot) {
      ctx.beginPath()
      for (let i = 0; i < 6; i++) {
        const angle = rot + (Math.PI / 3) * i
        const px = cx + r * Math.cos(angle)
        const py = cy + r * Math.sin(angle)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    function drawDiamond(cx, cy, r, rot) {
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const angle = rot + (Math.PI / 2) * i
        const stretch = i % 2 === 0 ? r * 1.4 : r * 0.7
        const px = cx + stretch * Math.cos(angle)
        const py = cy + stretch * Math.sin(angle)
        i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.closePath()
    }

    function drawShapes(t) {
      shapes.forEach(s => {
        s.x += s.vx
        s.y += s.vy
        s.rotation += s.rotSpeed

        // Wrap
        if (s.x < -40) s.x = W + 40
        if (s.x > W + 40) s.x = -40
        if (s.y < -40) s.y = H + 40
        if (s.y > H + 40) s.y = -40

        const pulse = Math.sin(t * 0.001 + s.pulseOffset) * 0.3 + 0.7
        const alpha = s.alpha * pulse

        if (s.type === 'hex') drawHex(s.x, s.y, s.size, s.rotation)
        else drawDiamond(s.x, s.y, s.size, s.rotation)

        ctx.strokeStyle = `rgba(155, 109, 255, ${alpha})`
        ctx.lineWidth = 0.6
        ctx.stroke()
      })
    }

    /* ───────────────────────────────────────────
       LAYER 2 — Data Stream Columns
       Vertical streams of tiny dots rising upward
       like a trading terminal data feed
    ─────────────────────────────────────────── */
    const STREAM_COUNT = 6
    const streams = Array.from({ length: STREAM_COUNT }, () => ({
      x: Math.random() * W,
      dots: Array.from({ length: Math.floor(Math.random() * 12 + 6) }, () => ({
        y: Math.random() * H,
        speed: Math.random() * 0.25 + 0.1,
        size: Math.random() * 1.2 + 0.4,
        alpha: Math.random() * 0.12 + 0.03,
      })),
    }))

    function drawStreams() {
      streams.forEach(stream => {
        // Subtle vertical guide line
        ctx.beginPath()
        ctx.moveTo(stream.x, 0)
        ctx.lineTo(stream.x, H)
        ctx.strokeStyle = 'rgba(155, 109, 255, 0.015)'
        ctx.lineWidth = 0.5
        ctx.stroke()

        stream.dots.forEach(dot => {
          dot.y -= dot.speed
          if (dot.y < -10) dot.y = H + 10

          ctx.beginPath()
          ctx.arc(stream.x, dot.y, dot.size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(155, 109, 255, ${dot.alpha})`
          ctx.fill()
        })
      })
    }

    /* ───────────────────────────────────────────
       LAYER 3 — Interactive Particle Network
       The core orb system with cursor repulsion
    ─────────────────────────────────────────── */
    const PARTICLE_COUNT = 70
    const CONNECTION_DIST = 130
    const MOUSE_RADIUS = 250

    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      r: Math.random() * 2.5 + 0.8,
      baseAlpha: Math.random() * 0.6 + 0.25,
      color: Math.random() > 0.5 ? 'accent' : 'white',
      pulseOffset: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.01 + 0.004,
    }))

    function drawParticles(t) {
      const mouseX = mouseRef.current.x
      const mouseY = mouseRef.current.y

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy

        // Wrap
        if (p.x < -10) p.x = W + 10
        if (p.x > W + 10) p.x = -10
        if (p.y < -10) p.y = H + 10
        if (p.y > H + 10) p.y = -10

        // Mouse repulsion
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS && dist > 0) {
          const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS * 0.04
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Dampen
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy)
        if (speed > 0.8) {
          p.vx *= 0.95
          p.vy *= 0.95
        }

        // Pulsing
        const pulse = Math.sin(t * p.pulseSpeed + p.pulseOffset) * 0.2 + 0.8
        const alpha = p.baseAlpha * pulse

        // Glow
        if (p.r > 1.5) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4)
          if (p.color === 'accent') {
            glow.addColorStop(0, `rgba(155, 109, 255, ${alpha * 0.3})`)
          } else {
            glow.addColorStop(0, `rgba(200, 180, 255, ${alpha * 0.15})`)
          }
          glow.addColorStop(1, 'rgba(155, 109, 255, 0)')
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2)
          ctx.fillStyle = glow
          ctx.fill()
        }

        // Core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color === 'accent'
          ? `rgba(155, 109, 255, ${alpha})`
          : `rgba(220, 200, 255, ${alpha * 0.7})`
        ctx.fill()

        // Connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const cdx = p.x - p2.x
          const cdy = p.y - p2.y
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy)
          if (cdist < CONNECTION_DIST) {
            const lineAlpha = (1 - cdist / CONNECTION_DIST) * 0.14
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(155, 109, 255, ${lineAlpha})`
            ctx.lineWidth = 0.7
            ctx.stroke()
          }
        }
      })

      // Mouse connections
      particles.forEach(p => {
        const dx = p.x - mouseX
        const dy = p.y - mouseY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const lineAlpha = (1 - dist / MOUSE_RADIUS) * 0.2
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouseX, mouseY)
          ctx.strokeStyle = `rgba(155, 109, 255, ${lineAlpha})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      })
    }

    /* ───────────────────────────────────────────
       LAYER 4 — Cursor Glow Halo
       A soft radial glow that follows the mouse
    ─────────────────────────────────────────── */
    function drawCursorGlow() {
      const mx = mouseRef.current.x
      const my = mouseRef.current.y
      if (mx < -500) return // mouse not on screen

      const glow = ctx.createRadialGradient(mx, my, 0, mx, my, 280)
      glow.addColorStop(0, 'rgba(155, 109, 255, 0.04)')
      glow.addColorStop(0.5, 'rgba(155, 109, 255, 0.015)')
      glow.addColorStop(1, 'rgba(155, 109, 255, 0)')
      ctx.beginPath()
      ctx.arc(mx, my, 280, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()
    }

    /* ───────────────────────────────────────────
       MAIN RENDER LOOP
    ─────────────────────────────────────────── */
    let raf
    let time = 0

    const draw = () => {
      time++
      ctx.clearRect(0, 0, W, H)

      drawAurora(time)          // Layer 0 — aurora waves (deepest)
      drawShapes(time)          // Layer 1 — geometric shapes
      drawStreams()              // Layer 2 — data streams
      drawParticles(time)       // Layer 3 — interactive particles
      drawCursorGlow()          // Layer 4 — cursor halo (topmost)

      raf = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
