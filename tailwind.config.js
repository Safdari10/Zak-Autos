/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        "tall": {"raw": `(min-height: 1080px)` },
        "taller": {"raw": `(min-height: 2080px)` },
      },
    },
  },
  plugins: [],
};
