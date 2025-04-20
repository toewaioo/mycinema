/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xsm: "320px",
      sm: "375px",
      md: "768px",
      lg: "1024px",
      xlg: "1440px",
    },
  },
  plugins: [],
};
