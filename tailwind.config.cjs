/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#04030b',
        dusk: '#0b1023',
        glowBlue: '#5a8bff',
        glowPurple: '#b271ff',
        glowRose: '#ff8eb6'
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 35px rgba(114, 147, 255, 0.35)',
        rose: '0 0 45px rgba(255, 142, 182, 0.3)'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at 20% 20%, rgba(178,113,255,0.25), transparent 45%), radial-gradient(circle at 80% 10%, rgba(90,139,255,0.25), transparent 40%), linear-gradient(180deg, #05040f 0%, #03040a 45%, #05040f 100%)'
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' }
        },
        heartbeat: {
          '0%,100%': { transform: 'scale(1)' },
          '15%': { transform: 'scale(1.03)' },
          '30%': { transform: 'scale(1)' },
          '45%': { transform: 'scale(1.04)' }
        },
        glowPulse: {
          '0%,100%': { opacity: '0.6' },
          '50%': { opacity: '0.95' }
        }
      },
      animation: {
        floaty: 'floaty 7s ease-in-out infinite',
        heartbeat: 'heartbeat 2.5s ease-in-out infinite',
        glowPulse: 'glowPulse 4s ease-in-out infinite'
      }
    }
  },
  plugins: []
};
