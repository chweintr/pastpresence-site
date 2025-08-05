/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'glass': {
          'white': 'rgba(255, 255, 255, 0.12)',
          'mint': 'rgba(180, 220, 210, 0.08)',
          'gray': 'rgba(156, 163, 175, 0.15)',
          'dark': 'rgba(10, 12, 16, 0.85)',
        },
        'accent': {
          'pink': '#ff9fb3',
          'coral': '#ffb3ba',
          'mint': '#b4dcd2',
          'teal': '#7dd3c0',
        },
        'neutral': {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e8e8e8',
          300: '#d4d4d4',
          400: '#a8a8a8',
          500: '#787878',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        'background': {
          'primary': '#e0e5e5',
          'secondary': '#f0f3f3',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'display': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'particle': 'particle 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 10px rgba(244, 63, 94, 0.5)' },
          'to': { boxShadow: '0 0 20px rgba(244, 63, 94, 0.8), 0 0 30px rgba(244, 63, 94, 0.4)' },
        },
        particle: {
          '0%': { transform: 'translateY(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}