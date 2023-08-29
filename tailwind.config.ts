import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#000000',
        'text-secondary': '#585858',
        'gray-100': '#C1C1C1',
        'gray-200': '#F6F6F6',
        'gray-300': '#E2E2E2',
        'gray-400': '#5F5F5F',
      },
      transitionProperty: {
        'width': 'width',
      },
      margin: {
        // 'mr-100': '100%',
        // 'ml-100': '100%',
        // 'mt-100': '100%',
        // 'mb-100': '100%',
      },
      keyframes: {
        fromLeft: {
          '0%': { left: '-100%' },
          '100%': { left: '0' },
        },
        fromRight: {
          '0%': { right: '-100%' },
          '100%': { right: '0' },
        },
        fromCenter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        fromTop: {
          '0%': { top: '-100%' },
          '100%': { top: '0' },
        },
        toTop: {
          '0%': { top: '0' },
          '100%': { top: '-100%' },
        },
        pulseFromCenter: {
          '0%': { 'box-shadow': '0 0 0 0px rgba(0, 0, 0, 0.2)' },
          '100%': { 'box-shadow': '0 0 0 50px rgba(0, 0, 0, 0)' },
        }
      },
      animation: {
        'from-center': 'fromCenter 1.25s ease forwards',
        'from-left': 'fromLeft 3s alternate',
        'from-right': 'fromRight 3s alternate',
        'from-top': 'fromTop 1.25s ease',
        'to-top': 'toTop 1.25s ease',
        'pulse': 'pulseFromCenter 2s infinite',
      },
      
    },
  },
  plugins: [],
}
export default config
