/** @type {import('tailwindcss').Config} */
export default {
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
        'star-twinkle': 'starTwinkle 2s ease-in-out infinite',
        'star-pulse': 'starPulse 3s ease-in-out infinite',
        'meteor': 'meteor 20s linear infinite',
        'line-pulse': 'linePulse 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-delay-1': 'fadeIn 0.8s ease-out 0.2s forwards',
        'fade-in-delay-2': 'fadeIn 0.8s ease-out 0.4s forwards',
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
        starTwinkle: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.7, transform: 'scale(0.8)' },
        },
        starPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(127, 0, 255, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(127, 0, 255, 0)' },
        },
        meteor: {
          '0%': { 
            transform: 'rotate(215deg) translateX(0)', 
            opacity: 1 
          },
          '70%': { 
            opacity: 1 
          },
          '100%': { 
            transform: 'rotate(215deg) translateX(-500px)', 
            opacity: 0 
          },
        },
      },
    },
  },
  plugins: [],
} 