module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // fontFamily: {
      //   sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      // },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
