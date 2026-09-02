import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'
import { COURSES } from '../config'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function SeptemberBatch() {
  const course = COURSES[0] // Assuming the September Batch is the first course

  const [showStickyCTA, setShowStickyCTA] = useState(false)
  const { ref: heroRef, inView: heroInView } = useInView({
    threshold: 0.1,
  })

  useEffect(() => {
    if (!heroInView) {
      setShowStickyCTA(true)
    } else {
      setShowStickyCTA(false)
    }
  }, [heroInView])

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  return (
    <main className="noise min-h-screen flex flex-col bg-bg text-white relative">
      <AnimatedBackground />
      <Navbar />

      <div className="flex-1 pt-16 md:pt-20 pb-12 relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Hero Section */}
        <div ref={heroRef} className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="order-2 md:order-1 flex flex-col gap-4 md:pt-8"
          >

            <motion.h1 variants={fadeInUp} className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold font-cond tracking-tight leading-tight">
              {course.title}
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-muted-lt text-base md:text-lg leading-relaxed border-l-4 border-green pl-3.5">
              {course.subtitle}
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-3.5 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md mt-2 mb-1 shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
              <div className="flex flex-col">
                <span className="text-muted text-xs uppercase tracking-wider font-cond">Batch Date</span>
                <span className="font-semibold text-sm md:text-base text-white mt-0.5">{course.batchDate}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-muted text-xs uppercase tracking-wider font-cond">Mode</span>
                <span className="font-semibold text-sm md:text-base text-white mt-0.5">{course.mode}</span>
              </div>
              <div className="col-span-2 pt-3 border-t border-white/10 mt-1 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-muted text-xs uppercase tracking-wider font-cond">Original Price</span>
                  <span className="line-through text-muted text-base">₹28,000</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <span className="text-white text-sm uppercase tracking-wider font-cond font-bold">Final Price</span>
                  <span className="text-2xl md:text-3xl font-bold text-[#FFD166] drop-shadow-[0_0_10px_rgba(255,209,102,0.55)] flex items-center">
                    ₹<CountUp end={17560} duration={2.5} separator="," />
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-red/10 border border-red/30 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_0_15px_rgba(255,91,121,0.3)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-red/0 via-red/10 to-red/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="text-xl animate-bounce relative z-10">🔥</span>
              <span className="text-red font-bold text-sm md:text-base uppercase tracking-wider relative z-10">Hurry! 70% Seats are already full</span>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex flex-col gap-2 mt-1 mb-4 relative z-10">
              <a
                href="https://book.stripe.com/4gMaEY2gT9iw5jx4yz6Na02"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 w-full whitespace-nowrap bg-[#9B6DFF] hover:bg-[#854ff7] active:bg-[#7236ec] text-white font-cond font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider py-3.5 md:py-4 px-4 sm:px-6 rounded-xl shadow-[0_4px_25px_rgba(155,109,255,0.45)] hover:shadow-[0_6px_35px_rgba(155,109,255,0.7)] transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Enroll Now & Secure Your Seat</span>
              </a>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl text-sm text-muted-lt">
              <span>After payment, for support contact us on</span>
              <a
                href="https://wa.me/918004662859"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-[#20bd5a] font-semibold transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 md:order-2 flex items-center justify-center relative group h-full w-full"
            style={{ perspective: 1000 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-full transform-gpu"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={course.image}
                alt="September Batch"
                className="w-full h-auto max-h-[430px] lg:max-h-[470px] object-contain rounded-3xl border border-white/10 relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mx-auto"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 z-20 pointer-events-none"></div>

              <div
                className="absolute -top-5 -right-2 md:-right-2 md:-top-5 z-30 inline-flex items-center gap-1.5 md:gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full bg-gradient-to-r from-[#9B6DFF] via-[#854ff7] to-[#6824e3] text-white text-xs md:text-sm font-bold uppercase tracking-widest shadow-[0_4px_25px_rgba(155,109,255,0.65)] border border-white/20 transform rotate-2 md:rotate-3"
                style={{ transform: 'translateZ(30px)', fontFamily: 'var(--font-cond)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
              >
                Last Live Batch of the Year
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Key Live Batch Highlights — Non-Box Luxury Showcase */}
        <div className="mt-24 mb-28 relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 relative z-10"
          >
            <span className="text-[#9B6DFF] font-cond font-bold uppercase tracking-widest text-xs sm:text-sm px-4 py-1.5 rounded-full border border-[#9B6DFF]/30 bg-[#9B6DFF]/5 backdrop-blur-md">
              Why Join This Live Batch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-cond tracking-tight mt-4 text-white">
              Live Batch Key Highlights
            </h2>
            <p className="text-muted-lt max-w-2xl mx-auto mt-3 text-base sm:text-lg">
              Designed to take you from foundational understanding to live market execution.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 relative z-10"
          >
            {(course.keyPointers || []).map((ptr, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative flex items-start gap-5 py-6 border-b border-white/10 hover:border-[#9B6DFF]/50 transition-all duration-300"
              >
                {/* Left Glow Bar indicator on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#9B6DFF] via-[#854ff7] to-[#FFD166] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Index Number & Icon */}
                <div className="flex flex-col items-center flex-shrink-0 pt-0.5 pl-3">
                  <span className="font-cond font-extrabold text-2xl sm:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#9B6DFF] to-white/40 group-hover:from-[#FFD166] group-hover:to-[#9B6DFF] transition-all">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-2xl sm:text-3xl mt-1 drop-shadow-[0_0_12px_rgba(155,109,255,0.4)] transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    {ptr.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 pr-2">
                  <h3 className="text-lg sm:text-xl font-bold font-cond tracking-wide text-white group-hover:text-[#FFD166] transition-colors duration-200">
                    {ptr.title}
                  </h3>
                  <p className="text-muted-lt text-sm sm:text-base leading-relaxed mt-1.5 font-light">
                    {ptr.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Modules Section */}
        <div className="max-w-4xl mx-auto mt-24 relative">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold font-cond tracking-tight mb-16 text-center"
          >
            What You Will Learn
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="space-y-4 relative z-10"
          >
            {course.modules.map((mod, i) => {
              if (mod.type === 'intro') {
                return (
                  <motion.div variants={fadeInUp} key={i} className="text-muted-lt text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    {mod.text.split('\n').map((line, j) => (
                      <p key={j} className="mb-4">{line}</p>
                    ))}
                  </motion.div>
                )
              }
              if (mod.type === 'section') {
                return (
                  <motion.div variants={fadeInUp} key={i} className="flex items-center gap-6 mt-16 mb-8 pb-4 border-b border-white/10">
                    <span className="text-4xl bg-white/5 p-4 rounded-2xl border border-white/10 shadow-lg">{mod.icon}</span>
                    <h3 className="text-3xl font-bold font-cond tracking-wide text-white uppercase">{mod.title}</h3>
                  </motion.div>
                )
              }
              if (mod.type === 'item') {
                return (
                  <motion.div
                    variants={fadeInUp}
                    key={i}
                    className="group flex items-start gap-4 py-3.5 px-2 border-b border-white/5 hover:border-white/20 transition-all duration-200"
                  >
                    <div className="text-[#00e5a0] mt-1 bg-[#00e5a0]/10 p-1.5 rounded-full flex-shrink-0 group-hover:scale-110 group-hover:bg-[#00e5a0]/20 transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-muted-lt text-base sm:text-lg leading-relaxed group-hover:text-white transition-colors">{mod.text}</p>
                  </motion.div>
                )
              }
              if (mod.type === 'disclaimer') {
                return (
                  <motion.div variants={fadeInUp} key={i} className="mt-24 p-8 bg-red/5 border border-red/20 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-2 h-full bg-red/50"></div>
                    <h4 className="text-red font-bold text-xl mb-6 flex items-center gap-3">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      Important Disclaimer
                    </h4>
                    <div className="space-y-3">
                      {mod.text.split('\n').map((line, j) => (
                        <p key={j} className="text-muted text-base">{line.replace('•', '').trim()}</p>
                      ))}
                    </div>
                  </motion.div>
                )
              }
              return null
            })}
          </motion.div>

          <div className="mt-24 text-center">
            <a
              href="https://book.stripe.com/4gMaEY2gT9iw5jx4yz6Na02"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 whitespace-nowrap bg-[#9B6DFF] hover:bg-[#854ff7] active:bg-[#7236ec] text-white font-cond font-bold text-sm sm:text-xl md:text-2xl uppercase tracking-wider px-5 sm:px-12 py-4 sm:py-5 rounded-2xl shadow-[0_4px_30px_rgba(155,109,255,0.5)] hover:shadow-[0_6px_45px_rgba(155,109,255,0.8)] transition-all duration-200 transform hover:-translate-y-1"
            >
              <span>Enroll Now & Secure Your Seat</span>
              <span className="transform transition-transform duration-200 group-hover:translate-x-2 text-2xl font-body">→</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />

      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-0 left-0 w-full z-50 p-4 bg-[#0a0a0a]/90 backdrop-blur-xl border-t border-white/10 flex items-center justify-between md:justify-center gap-4 md:gap-8 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]"
          >
            <div className="hidden md:block">
              <h3 className="text-white font-bold font-cond tracking-wide text-lg">Secure Your Spot in the September Batch</h3>
              <p className="text-[#FFD166] text-sm">Hurry! Seats are filling fast.</p>
            </div>
            <a
              href="https://book.stripe.com/4gMaEY2gT9iw5jx4yz6Na02"
              target="_blank"
              rel="noreferrer"
              className="group flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#9B6DFF] hover:bg-[#854ff7] text-white font-cond font-bold text-sm sm:text-lg uppercase tracking-wider py-3 px-6 rounded-xl shadow-[0_4px_25px_rgba(155,109,255,0.45)] transition-all"
            >
              <span>Enroll Now for ₹17,560</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
