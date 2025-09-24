/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif']
      },
       colors: {
  'background': '#FFF6F0',       // soft peach
  'text-primary': '#1F2937',     // Deep slate for readability
  'text-secondary': '#475569',   // Neutral gray for softer hierarchy
  'accent': '#702F48',           // Fresh emerald green (balance the warmth with freshness)
  'accent-hover': '#5D263A',     // Deeper emerald for interaction
  'button': '#800020',           // Professional blue for CTAs (stands out on peach bg)
  'button-hover': '#66001A',     // Deeper blue for hover
}


    },
  },
  plugins: [],
}