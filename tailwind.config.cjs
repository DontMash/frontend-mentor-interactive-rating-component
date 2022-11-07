/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,svelte}'
  ],
  theme: {
    extend: {},
    colors: {
      'orange': '#fb7413',
      'white': '#ffffff',
      'light-gray': '#959eac',
      'medium-gray': '#7c8798',
      'dark-blue': '#252d37',
      'darker-blue': '#212832',
      'very-dark-blue': '#121417',
    },
    fontFamily: {
      'overpass': ['Overpass', 'sans-serif'],
    },
  },
  plugins: [],
};
