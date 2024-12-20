/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,tsx,ts}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['light'],
          primary: '#2255d6',
          info: '#17b1e6',
          warning: '#d99306',
        },
      },
      {
        dark: {
          ...require('daisyui/src/theming/themes')['dark'],
          primary: '#2255d6',
        },
      },
    ],
  },
}
