/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        "taller": {"raw": `(min-height: 2080px)` },
      },
    },
  },
  plugins: [],
};
