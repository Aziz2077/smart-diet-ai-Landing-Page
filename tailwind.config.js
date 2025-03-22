/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#FFD700",
        terracotta: "#E2725B",
        oliveGreen: "#6B8E23",
      },
      fontFamily: {
        cairo: ['var(--font-cairo)', 'sans-serif'],
        amazigh: ['var(--font-amazigh)', 'serif'],
      },
      backgroundImage: {
        'algerian-pattern': "url('/images/patterns/algerian-pattern.webp')",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      }
    },
  },
  plugins: [],
}
