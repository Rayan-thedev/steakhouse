/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        char: {
          950: '#0A0908', // near-black base
          900: '#120F0C',
          800: '#1B1712',
          700: '#26211A',
          600: '#332B21',
        },
        gold: {
          200: '#F0DFB8',
          300: '#E4C078', // bright / hover
          400: '#C6A15B', // primary brass gold
          500: '#A6813F',
          600: '#7C602D',
        },
        ember: {
          500: '#8B3A2A',
          400: '#A8492F',
        },
        cream: '#EDE6D6',
        smoke: '#8C8578',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at center, rgba(198,161,91,0.15) 0%, rgba(10,9,8,0) 70%)',
      },
      boxShadow: {
        gold: '0 0 40px -10px rgba(198,161,91,0.35)',
      },
      keyframes: {
        sear: {
          '0%': { transform: 'scaleX(0)', opacity: '0.4' },
          '60%': { opacity: '1' },
          '100%': { transform: 'scaleX(1)', opacity: '1' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.72' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        sear: 'sear 1.1s cubic-bezier(0.22,1,0.36,1) forwards',
        flicker: 'flicker 3.2s ease-in-out infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
