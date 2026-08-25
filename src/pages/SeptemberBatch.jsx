import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedBackground from '../components/AnimatedBackground'
import { COURSES } from '../config'

export default function SeptemberBatch() {
  const course = COURSES[0] // Assuming the September Batch is the first course

  return (
    <main className="noise min-h-screen flex flex-col bg-bg text-white relative">
      <AnimatedBackground />
      <Navbar />

      <div className="flex-1 pt-16 md:pt-20 pb-12 relative z-10 max-w-7xl mx-auto px-6 w-full">
        {/* Hero Section */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-12 items-center mb-12">
          <div className="order-2 md:order-1 flex flex-col gap-4 md:pt-8">

            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold font-cond tracking-tight leading-tight">
              {course.title}
            </h1>

            <p className="text-muted-lt text-base md:text-lg leading-relaxed border-l-4 border-green pl-3.5">
              {course.subtitle}
            </p>

            <div className="grid grid-cols-2 gap-3.5 bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-md mt-2 mb-1">
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
                  <span className="text-2xl md:text-3xl font-bold text-[#FFD166] drop-shadow-[0_0_10px_rgba(255,209,102,0.55)]">₹17,560</span>
                </div>
              </div>
            </div>

            <div className="bg-red/10 border border-red/30 py-2.5 px-4 rounded-xl flex items-center justify-center gap-2.5 shadow-[0_0_15px_rgba(255,91,121,0.2)]">
              <span className="text-xl animate-bounce">🔥</span>
              <span className="text-red font-bold text-sm md:text-base uppercase tracking-wider">Hurry! 70% Seats are already full</span>
            </div>

            <div className="flex flex-col gap-2 mt-1 mb-4">
              <a
                href="https://book.stripe.com/4gMaEY2gT9iw5jx4yz6Na02"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 w-full whitespace-nowrap bg-[#9B6DFF] hover:bg-[#854ff7] active:bg-[#7236ec] text-white font-cond font-bold text-sm sm:text-lg md:text-xl uppercase tracking-wider py-3.5 md:py-4 px-4 sm:px-6 rounded-xl shadow-[0_4px_25px_rgba(155,109,255,0.45)] hover:shadow-[0_6px_35px_rgba(155,109,255,0.7)] transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Enroll Now & Secure Your Seat</span>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 border border-white/10 rounded-xl text-sm text-muted-lt">
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
            </div>
          </div>

          <div className="order-1 md:order-2 flex items-center justify-center relative group perspective-1000 h-full w-full">
            <div className="relative w-full transform transition-transform duration-500 hover:rotate-y-6 hover:rotate-x-6">
              <img
                src={course.image}
                alt="September Batch"
                className="w-full h-auto max-h-[430px] lg:max-h-[470px] object-contain rounded-3xl border border-white/10 relative z-10 shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10 z-20 pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Modules Section */}
        <div className="max-w-4xl mx-auto mt-32 relative">

          <h2 className="text-4xl md:text-5xl font-bold font-cond tracking-tight mb-16 text-center">What You Will Learn</h2>

          <div className="space-y-6 relative z-10">
            {course.modules.map((mod, i) => {
              if (mod.type === 'intro') {
                return (
                  <div key={i} className="text-muted-lt text-xl leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                    {mod.text.split('\n').map((line, j) => (
                      <p key={j} className="mb-4">{line}</p>
                    ))}
                  </div>
                )
              }
              if (mod.type === 'section') {
                return (
                  <div key={i} className="flex items-center gap-6 mt-16 mb-8 pb-4 border-b border-white/10">
                    <span className="text-4xl bg-white/5 p-4 rounded-2xl border border-white/10 shadow-lg">{mod.icon}</span>
                    <h3 className="text-3xl font-bold font-cond tracking-wide text-white uppercase">{mod.title}</h3>
                  </div>
                )
              }
              if (mod.type === 'item') {
                return (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white/5 border border-white/5 rounded-xl ml-0 md:ml-12 hover:bg-white/10 hover:border-white/10 transition-all hover:translate-x-2">
                    <div className="text-green mt-1 bg-green/10 p-1.5 rounded-full">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-muted-lt text-lg leading-relaxed pt-1">{mod.text}</p>
                  </div>
                )
              }
              if (mod.type === 'disclaimer') {
                return (
                  <div key={i} className="mt-24 p-8 bg-red/5 border border-red/20 rounded-2xl relative overflow-hidden">
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
                  </div>
                )
              }
              return null
            })}
          </div>

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
    </main>
  )
}
