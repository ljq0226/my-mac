/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hihi: '#fff',
        dark: '#362',
      },

    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          'primary': '#5388fc',

          'secondary': '#D926AA',

          'accent': '#1FB2A5',

          'neutral': '#191D24',

          'base-100': '#2A303C',

          'info': '#3ABFF8',

          'success': '#36D399',

          'warning': '#FBBD23',

          'error': '#F87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
