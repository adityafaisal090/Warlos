/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mountain: {
          50: '#F2F6F3',
          100: '#E4ECE6',
          200: '#C9D9CE',
          300: '#A7C0AF',
          400: '#7FA08B',
          500: '#5F826B',
          600: '#4A6A54',
          700: '#3A5F43',
          800: '#2E4B35',
          900: '#203326',
          950: '#101A13',
        },
        sage: {
          50: '#F4F7F4',
          100: '#E8EEE8',
          200: '#CEDBCD',
          300: '#AEC1AC',
          400: '#8FA48C',
          500: '#72886F',
          600: '#596C57',
          700: '#465545',
          800: '#354035',
          900: '#252C25',
        },
        cream: {
          50: '#FFFEFA',
          100: '#FFF9E9',
          200: '#FFF0C9',
          300: '#FFE4A1',
        },
        warmgold: {
          50: '#FFF8E7',
          100: '#FFEFC7',
          200: '#FFE09A',
          300: '#FFC96A',
          400: '#FFB242',
          500: '#F49B1A',
          600: '#D17E0E',
          700: '#A85F10',
          800: '#7A4511',
          900: '#4C2A0C',
        },
        forest: {
          50: '#F2F7F5',
          100: '#DDEBE5',
          200: '#BBD8CC',
          300: '#91BBAA',
          400: '#689A87',
          500: '#4D7E6C',
          600: '#3B6556',
          700: '#2F5347',
          800: '#233F36',
          900: '#162621',
          950: '#0B1310',
        },
      },
      boxShadow: {
        glass: '0 1px 0 rgba(255,255,255,0.14) inset, 0 20px 60px rgba(0,0,0,0.35)',
        glow: '0 0 0 1px rgba(255,255,255,0.08) inset, 0 12px 40px rgba(58,95,67,0.45)',
        glowWarm: '0 0 0 1px rgba(255,255,255,0.08) inset, 0 18px 55px rgba(244,155,26,0.25)',
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(1200px 600px at 20% 10%, rgba(58,95,67,0.55), rgba(16,26,19,0) 65%), radial-gradient(900px 500px at 85% 20%, rgba(244,155,26,0.20), rgba(16,26,19,0) 60%)',
        'soft-grid':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-35%)' },
          '100%': { transform: 'translateX(135%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 1.6s ease-in-out infinite',
        glowPulse: 'glowPulse 3.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

