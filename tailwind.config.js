/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          deep: '#0D1B2A',
          mid: '#1E3A5F',
          light: '#2A4D7A',
          surface: '#162335',
        },
        amber: {
          DEFAULT: '#F5A623',
          light: '#F7B84B',
          dim: 'rgba(245,166,35,0.15)',
        },
        offwhite: {
          DEFAULT: '#E8E4DA',
          dim: 'rgba(232,228,218,0.6)',
          faint: 'rgba(232,228,218,0.08)',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(232,228,218,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(232,228,218,0.03) 1px, transparent 1px)`,
        'amber-gradient': 'linear-gradient(135deg, #F5A623 0%, #FBBF24 50%, #F59E0B 100%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card': '0 20px 60px rgba(0,0,0,0.4)',
        'amber-glow': '0 8px 30px rgba(245,166,35,0.4)',
      },
      animation: {
        'float-a': 'floatA 6s ease-in-out infinite',
        'float-b': 'floatB 7.5s ease-in-out infinite',
        'marquee': 'marqueeLTR 30s linear infinite',
      },
    },
  },
  plugins: [],
};