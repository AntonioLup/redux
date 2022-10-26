/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "576px" },
      // => @media (min-width: 576px) { ... }

      md: { max: "960px" },
      // => @media (min-width: 960px) { ... }

      lg: { max: "1440px" },
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
