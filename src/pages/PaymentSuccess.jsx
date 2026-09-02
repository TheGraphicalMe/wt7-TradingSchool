import React, { useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'

export default function PaymentSuccess() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const sessionId = searchParams.get('session_id')

  useEffect(() => {
    if (!sessionId) {
      navigate('/live-batch', { replace: true })
    }
  }, [sessionId, navigate])

  if (!sessionId) return null

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.5, delay: i * 0.12, ease: "easeOut" }
    })
  }

  return (
    <main className="noise min-h-screen flex flex-col bg-bg text-white relative">
      <AnimatedBackground />
      <Navbar />

      <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-20">
        <div className="max-w-xl w-full">

          {/* Top pill */}
          <motion.div
            custom={0} variants={fadeIn} initial="hidden" animate="visible"
            className="flex justify-center mb-8"
          >
            <span className="inline-flex items-center gap-2 text-[#9B6DFF] font-cond font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full border border-[#9B6DFF]/30 bg-[#9B6DFF]/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9B6DFF] animate-pulse" />
              September Live Batch
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            custom={1} variants={fadeIn} initial="hidden" animate="visible"
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-cond tracking-tight text-center leading-tight mb-5"
          >
            Welcome to
            <br />
            <span className="text-[#9B6DFF] drop-shadow-[0_0_15px_rgba(155,109,255,0.4)]">
              Basic To Advance Batch
            </span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            custom={2} variants={fadeIn} initial="hidden" animate="visible"
            className="text-muted-lt text-center text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed"
          >
            Please send your payment screenshot to our official WhatsApp support below to verify your transaction and receive instant batch access.
          </motion.p>

          {/* WhatsApp CTA */}
          <motion.div
            custom={3} variants={fadeIn} initial="hidden" animate="visible"
            className="flex flex-col items-center justify-center mb-8 w-full"
          >
            <a
              href="https://wa.me/918004662859?text=Hi!%20I%20have%20paid%20the%20Live%20Batch%20fee.%20Here%20is%20my%20transaction%20screenshot.%20Kindly%20provide%20me%20access."
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl px-8 sm:px-10 py-4.5 sm:py-5 transition-transform duration-200 hover:scale-105 w-full sm:w-auto"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #20bd5a 40%, #128C7E 100%)'
              }}
            >
              <svg className="w-7 h-7 flex-shrink-0 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="font-cond font-extrabold text-lg sm:text-xl text-white uppercase tracking-wider">Send Screenshot on WhatsApp</span>
            </a>
          </motion.div>

        </div>
      </div>

      <Footer />
    </main>
  )
}
