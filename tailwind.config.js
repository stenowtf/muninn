// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        solway: ["Solway", ...defaultTheme.fontFamily.sans],
        fell: ["IM Fell English SC", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  corePlugins: { aspectRatio: false },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
