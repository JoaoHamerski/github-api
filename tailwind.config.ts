/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,tsx,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      { light: {
        ...require('daisyui/src/theming/themes')['light'],
        primary: '#2255d6',
        warning: '#a67b16',
        info: '#008fc0'
      } },
      { dark: {
        ...require('daisyui/src/theming/themes')['dark'],
        primary: '#2255d6',
      } }
    ]
  }
}

