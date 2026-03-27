/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel-lavender': '#E6E6FA',
        'pastel-blue': '#B0E0E6',
        'pastel-pink': '#FFB6C1',
        'soft-purple': '#D8BFD8',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(147, 197, 253, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(147, 197, 253, 0.6), 0 0 30px rgba(196, 181, 253, 0.4)' },
        },
      },
    },
  },
  plugins: [],
}