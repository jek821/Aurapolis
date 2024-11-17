/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/styles/**/*.css', // Include CSS files explicitly
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
