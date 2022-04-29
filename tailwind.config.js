module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerbg: "#417D7A",
        textMainColor: "#abb7ca",
        textSideColor: "#a5a5a5",
        baseColor: "#1b1b1b;",
        cardBackgroundColor: "#020d18",
      },
    },
    screens: {
      mobile: { max: "640px" },
      // => @media (max-width: 640px) { ... }

      tablet: { max: "1200px" },
      // => @media (max-width: 1024px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
