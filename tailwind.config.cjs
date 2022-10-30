/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        BarlowCondensed: ['"Barlow Condensed"', "sans-serif"],
      },
      screens: {
        mobile: { max: "767px" },
        tablet: { max: "1023px" },
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
