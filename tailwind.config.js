/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080B10',
        green: {
          DEFAULT: '#0DFF7F',
          dim: 'rgba(13,255,127,0.08)',
          glow: 'rgba(13,255,127,0.1)',
          border: 'rgba(13,255,127,0.18)',
        },
        accent: {
          DEFAULT: '#0DFF7F',
          lt: '#6DFFA8',
          dim: 'rgba(13,255,127,0.1)',
          border: 'rgba(13,255,127,0.35)',
        },
        muted: {
          DEFAULT: 'rgba(255,255,255,0.45)',
          lt: 'rgba(255,255,255,0.7)',
        },
        red: '#ff5b79',
      },
      fontFamily: {
        body: ['Inter', '-apple-system', 'sans-serif'],
        cond: ['Barlow Condensed', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease',
        'scale-in': 'scaleIn 0.25s ease',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 10px #0DFF7F, 0 0 20px rgba(13,255,127,0.4)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 5px #0DFF7F, 0 0 10px rgba(13,255,127,0.2)' },
        },
      },
    },
  },
  plugins: [],
}
