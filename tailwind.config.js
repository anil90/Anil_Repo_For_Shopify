/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.liquid',
    './templates/**/*.liquid',
    './sections/**/*.liquid',
    './snippets/**/*.liquid',
    './assets/**/*.js', // in case you use Tailwind classes in JS
  ],
  theme: {
    extend: {
      height: {
        94: '22rem',
      },
    },
  },
  plugins: [],
};
