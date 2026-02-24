/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1F3C',
          light: '#163258',
          medium: '#1a3a5c',
        },
        emerald: {
          DEFAULT: '#34D399',
          dark: '#059669',
        },
        steel: '#4A90C4',
      },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
