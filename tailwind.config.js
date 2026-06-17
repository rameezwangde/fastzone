/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#d4af37', // metallic gold
          DEFAULT: '#b48a28', // base gold
          dark: '#8b6914', // dark gold
        },
        dark: {
          DEFAULT: '#0a0a0a', // deep black
          lighter: '#1a1a1a', // off-black
          light: '#2a2a2a', // charcoal
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '10%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
