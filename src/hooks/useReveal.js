import { useEffect } from 'react'

export function useScrollReveal({ threshold = 0.12, once = false } = {}) {
  useEffect(() => {
    // Target both new .sr classes and old .reveal classes
    const selector = '.sr, .sr-left, .sr-right, .sr-scale, .sr-scale-left, .sr-scale-right, .sr-flip, .sr-blur, .reveal, .reveal-left, .reveal-right, .reveal-scale'
    const elements = document.querySelectorAll(selector)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible', 'visible')
            if (once) observer.unobserve(entry.target)
          } else {
            if (!once) entry.target.classList.remove('sr-visible', 'visible')
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [threshold, once])
}