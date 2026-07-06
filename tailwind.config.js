/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        maroon: {
          DEFAULT: '#5C1A2B',
          deep: '#3E0F1C',
          light: '#8A2E44',
        },
        twilight: {
          DEFAULT: '#3B2354',
          light: '#5B3A7A',
        },
        periwinkle: {
          DEFAULT: '#8FA8E8',
          light: '#C2D0F5',
        },
        blush: {
          DEFAULT: '#F4A6C8',
          light: '#FBD3E5',
        },
        cream: '#FFF8FA',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        hand: ['"Caveat"', 'cursive'],
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.96)' },
        },
        driftSlow: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-6%, 5%) scale(1.1)' },
        },
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.8' },
          '90%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-110vh) rotate(20deg)', opacity: '0' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        drift: 'drift 18s ease-in-out infinite',
        'drift-slow': 'driftSlow 24s ease-in-out infinite',
        float: 'float linear infinite',
        'spin-slow': 'spinSlow 3.5s linear infinite',
      },
    },
  },
  plugins: [],
}