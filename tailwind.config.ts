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
        'black-100': '#000000',
        'gray-100': '#C1C1C1',
        'gray-200': '#F6F6F6',
        'gray-300': '#E2E2E2',
        'gray-400': '#5F5F5F',
      },
      transitionProperty: {
        'width': 'width',
      }
    },
  },
  plugins: [],
}
export default config
