/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
  'container',
  'mt-6',
  'text-3xl',
  'font-bold',
  'underline',
  'mx-auto',
  'max-w-screen-2xl'
]
}