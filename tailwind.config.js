/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-charcoal': '#121212',
        'checkered-green': '#00A676',
        'cursed-blue': '#3A86FF',
        'rengoku-flame': '#FF4E00',
        'domain-violet': '#7F00FF',
        'zenitsu-lightning': '#FFD000',
        'snow-white': '#F9F9F9',
        'ash-gray': '#B0B0B0',
        'ghost-black': '#1A1A2E',
      },
      fontFamily: {
        'anime': ['Noto Sans JP', 'sans-serif'],
        'mochiy': ['"Mochiy Pop One"', 'sans-serif'],
      },
      animation: {
        'cursed-pulse': 'cursedPulse 2s infinite',
        'flame-flicker': 'flameFlicker 2s infinite',
        'water-flow': 'waterFlow 3s infinite',
        'wind-sweep': 'windSweep 4s infinite',
      },
      keyframes: {
        cursedPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        waterFlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        windSweep: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
  },
  plugins: [],
} 